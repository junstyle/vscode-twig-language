import vscode, { commands, CompletionList, ExtensionContext, Hover, languages, TextEdit, Range } from "vscode";
import snippetsArr from "./hover/filters.json";
import functionsArr from "./hover/functions.json";
import twigArr from "./hover/twig.json";
import { formatting } from "./formatting";
import { clearVirtualDocumentContents, createVirtualDoc, registerTextDocumentEvents } from "./virtualDocument";

const config = vscode.workspace.getConfiguration("twig-language");

function createHover(snippet, type) {
  const example = typeof snippet.example == "undefined" ? "" : snippet.example;
  const description = typeof snippet.description == "undefined" ? "" : snippet.description;
  return new vscode.Hover({
    language: type,
    value: description + "\n\n" + example
  });
}

function activate(context) {
  const active = vscode.window.activeTextEditor;
  if (!active || !active.document) return;

  registerDocType("twig");
  registerTextDocumentEvents(context, ["twig"]);

  const diagnosticCollection = languages.createDiagnosticCollection("twig");
  context.subscriptions.push(diagnosticCollection);

  function registerDocType(type) {
    if (config.hover === true) {
      context.subscriptions.push(
        vscode.languages.registerHoverProvider(type, {
          async provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            for (const snippet in snippetsArr) {
              if (snippetsArr[snippet].prefix == word || snippetsArr[snippet].hover == word) {
                return createHover(snippetsArr[snippet], type);
              }
            }

            for (const snippet in functionsArr) {
              if (functionsArr[snippet].prefix == word || functionsArr[snippet].hover == word) {
                return createHover(functionsArr[snippet], type);
              }
            }

            for (const snippet in twigArr) {
              if (twigArr[snippet].prefix == word || twigArr[snippet].hover == word) {
                return createHover(twigArr[snippet], type);
              }
            }

            const vdocUri = createVirtualDoc(document);
            const hs = await commands.executeCommand("vscode.executeHoverProvider", vdocUri, position);
            return hs?.[0];
          }
        })
      );
    }

    if (config.formatting === true) {
      context.subscriptions.push(
        vscode.languages.registerDocumentFormattingEditProvider(type, {
          provideDocumentFormattingEdits: async (document, options, token) => {
            const otext = document.getText();
            if (!otext) {
              return;
            }
            let newDoc = document;

            const text = formatting(newDoc, diagnosticCollection);
            if (text && text != otext) {
              const range = new Range(document.positionAt(0), document.positionAt(otext.length));
              return [new TextEdit(range, text)];
            } else {
              return [];
            }
          }
        })
      );

      context.subscriptions.push(
        languages.registerCompletionItemProvider(
          type,
          {
            provideCompletionItems: async (document, position, token, context) => {
              const vdocUri = createVirtualDoc(document);
              return await commands.executeCommand("vscode.executeCompletionItemProvider", vdocUri, position, context.triggerCharacter);
            }
          },
          ".",
          "(",
          ":",
          "<"
        )
      );
    }
  }
}

exports.activate = activate;
exports.deactivate = function () {
  clearVirtualDocumentContents();
  return undefined;
};
