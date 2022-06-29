import { Uri, workspace, ExtensionContext } from 'vscode';

const virtualDocumentContents = new Map<string, string>();
const virtualDocumentPaths = new Map<string, string>();

export interface ITextDocument {
	uri: Uri | string;
	getText(): string;
}

workspace.registerTextDocumentContentProvider('dj-embedded-content', {
	provideTextDocumentContent: uri => {
		const i = uri.path.lastIndexOf('/');
		const originalUri = uri.path.slice(1).slice(0, i - 1);
		const decodedUri = decodeURIComponent(originalUri);
		return virtualDocumentContents.get(decodedUri);
	}
});

export function registerTextDocumentEvents(context: ExtensionContext, languageIds: string[]) {
	context.subscriptions.push(workspace.onDidChangeTextDocument(event => {
		if (languageIds.includes(event.document.languageId)) {
			virtualDocumentPaths.delete(event.document.uri.toString());
		}
	}));
	context.subscriptions.push(workspace.onDidCloseTextDocument(doc => {
		if (doc.languageId == 'html') {
			virtualDocumentContents.delete(doc.uri.toString());
		}
	}));
	context.subscriptions.push(workspace.onDidRenameFiles(event => {
		event.files.forEach(f => {
			virtualDocumentContents.delete(f.oldUri.toString());
		});
	}));
}

export function createVirtualDoc(document: ITextDocument, languageId?: string) {
	languageId = languageId ?? "html";
	let originalUri = document.uri.toString();
	if (languageId != "html") {
		originalUri += "." + languageId;
	}

	virtualDocumentContents.set(originalUri, document.getText());

	// const vdocUriString = `dj-embedded-content://django-html/${encodeURIComponent(originalUri)}.html`;
	let path: string;
	if (virtualDocumentPaths.has(originalUri)) {
		path = virtualDocumentPaths.get(originalUri);
	} else {
		path = `/${encodeURIComponent(originalUri)}/${Math.random()}.${languageId}`;
		virtualDocumentPaths.set(originalUri, path);
	}
	// random uri, as hoverProvide may cache hover info by uri
	return Uri.from({
		scheme: 'dj-embedded-content',
		authority: 'django-html',
		path: path
	});
}

export function clearVirtualDocumentContents() {
	virtualDocumentContents.clear();
}