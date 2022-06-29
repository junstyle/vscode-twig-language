var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/prettier-plugin-django/out/index.js
var require_out = __commonJS({
  "node_modules/prettier-plugin-django/out/index.js"(exports, module) {
    "use strict";
    var HT = Object.create;
    var bn = Object.defineProperty;
    var XT = Object.getOwnPropertyDescriptor;
    var $T = Object.getOwnPropertyNames;
    var JT = Object.getPrototypeOf;
    var QT = Object.prototype.hasOwnProperty;
    var i = (e, t) => bn(e, "name", { value: t, configurable: true });
    var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var al = (e, t) => {
      for (var r in t)
        bn(e, r, { get: t[r], enumerable: true });
    };
    var ol = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let s of $T(t))
          !QT.call(e, s) && s !== r && bn(e, s, { get: () => t[s], enumerable: !(n = XT(t, s)) || n.enumerable });
      return e;
    };
    var H = (e, t, r) => (r = e != null ? HT(JT(e)) : {}, ol(t || !e || !e.__esModule ? bn(r, "default", { value: e, enumerable: true }) : r, e));
    var zT = (e) => ol(bn({}, "__esModule", { value: true }), e);
    var Nu = c((kw, cl) => {
      "use strict";
      var tx = require("os");
      cl.exports = tx.homedir || i(function() {
        var t = process.env.HOME, r = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;
        return process.platform === "win32" ? process.env.USERPROFILE || process.env.HOMEDRIVE + process.env.HOMEPATH || t || null : process.platform === "darwin" ? t || (r ? "/Users/" + r : null) : process.platform === "linux" ? t || (process.getuid() === 0 ? "/root" : r ? "/home/" + r : null) : t || null;
      }, "homedir");
    });
    var Iu = c((Mw, pl) => {
      pl.exports = function() {
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = function(r, n) {
          return n;
        };
        var t = new Error().stack;
        return Error.prepareStackTrace = e, t[2].getFileName();
      };
    });
    var fl = c((Gw, In) => {
      "use strict";
      var rx = process.platform === "win32", nx = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/, _u = {};
      function ix(e) {
        return nx.exec(e).slice(1);
      }
      i(ix, "win32SplitPath");
      _u.parse = function(e) {
        if (typeof e != "string")
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
        var t = ix(e);
        if (!t || t.length !== 5)
          throw new TypeError("Invalid path '" + e + "'");
        return { root: t[1], dir: t[0] === t[1] ? t[0] : t[0].slice(0, -1), base: t[2], ext: t[4], name: t[3] };
      };
      var sx = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/, Ru = {};
      function ux(e) {
        return sx.exec(e).slice(1);
      }
      i(ux, "posixSplitPath");
      Ru.parse = function(e) {
        if (typeof e != "string")
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
        var t = ux(e);
        if (!t || t.length !== 5)
          throw new TypeError("Invalid path '" + e + "'");
        return { root: t[1], dir: t[0].slice(0, -1), base: t[2], ext: t[4], name: t[3] };
      };
      rx ? In.exports = _u.parse : In.exports = Ru.parse;
      In.exports.posix = Ru.parse;
      In.exports.win32 = _u.parse;
    });
    var Pu = c((Uw, Dl) => {
      var ml = require("path"), El = ml.parse || fl(), dl = i(function(t, r) {
        var n = "/";
        /^([A-Za-z]:)/.test(t) ? n = "" : /^\\\\/.test(t) && (n = "\\\\");
        for (var s = [t], u = El(t); u.dir !== s[s.length - 1]; )
          s.push(u.dir), u = El(u.dir);
        return s.reduce(function(a, l) {
          return a.concat(r.map(function(p) {
            return ml.resolve(n, l, p);
          }));
        }, []);
      }, "getNodeModulesDirs");
      Dl.exports = i(function(t, r, n) {
        var s = r && r.moduleDirectory ? [].concat(r.moduleDirectory) : ["node_modules"];
        if (r && typeof r.paths == "function")
          return r.paths(n, t, function() {
            return dl(t, s);
          }, r);
        var u = dl(t, s);
        return r && r.paths ? u.concat(r.paths) : u;
      }, "nodeModulesPaths");
    });
    var Lu = c((Yw, Al) => {
      Al.exports = function(e, t) {
        return t || {};
      };
    });
    var yl = c((jw, hl) => {
      "use strict";
      var ax = "Function.prototype.bind called on incompatible ", wu = Array.prototype.slice, ox = Object.prototype.toString, lx = "[object Function]";
      hl.exports = i(function(t) {
        var r = this;
        if (typeof r != "function" || ox.call(r) !== lx)
          throw new TypeError(ax + r);
        for (var n = wu.call(arguments, 1), s, u = i(function() {
          if (this instanceof s) {
            var m = r.apply(this, n.concat(wu.call(arguments)));
            return Object(m) === m ? m : this;
          } else
            return r.apply(t, n.concat(wu.call(arguments)));
        }, "binder"), a = Math.max(0, r.length - n.length), l = [], p = 0; p < a; p++)
          l.push("$" + p);
        if (s = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(u), r.prototype) {
          var f = i(function() {
          }, "Empty");
          f.prototype = r.prototype, s.prototype = new f(), f.prototype = null;
        }
        return s;
      }, "bind");
    });
    var xl = c((Vw, Tl) => {
      "use strict";
      var cx = yl();
      Tl.exports = Function.prototype.bind || cx;
    });
    var vl = c((Kw, gl) => {
      "use strict";
      var px = xl();
      gl.exports = px.call(Function.call, Object.prototype.hasOwnProperty);
    });
    var Sl = c((Ww, fx) => {
      fx.exports = { assert: true, "node:assert": [">= 14.18 && < 15", ">= 16"], "assert/strict": ">= 15", "node:assert/strict": ">= 16", async_hooks: ">= 8", "node:async_hooks": [">= 14.18 && < 15", ">= 16"], buffer_ieee754: ">= 0.5 && < 0.9.7", buffer: true, "node:buffer": [">= 14.18 && < 15", ">= 16"], child_process: true, "node:child_process": [">= 14.18 && < 15", ">= 16"], cluster: ">= 0.5", "node:cluster": [">= 14.18 && < 15", ">= 16"], console: true, "node:console": [">= 14.18 && < 15", ">= 16"], constants: true, "node:constants": [">= 14.18 && < 15", ">= 16"], crypto: true, "node:crypto": [">= 14.18 && < 15", ">= 16"], _debug_agent: ">= 1 && < 8", _debugger: "< 8", dgram: true, "node:dgram": [">= 14.18 && < 15", ">= 16"], diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"], "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"], dns: true, "node:dns": [">= 14.18 && < 15", ">= 16"], "dns/promises": ">= 15", "node:dns/promises": ">= 16", domain: ">= 0.7.12", "node:domain": [">= 14.18 && < 15", ">= 16"], events: true, "node:events": [">= 14.18 && < 15", ">= 16"], freelist: "< 6", fs: true, "node:fs": [">= 14.18 && < 15", ">= 16"], "fs/promises": [">= 10 && < 10.1", ">= 14"], "node:fs/promises": [">= 14.18 && < 15", ">= 16"], _http_agent: ">= 0.11.1", "node:_http_agent": [">= 14.18 && < 15", ">= 16"], _http_client: ">= 0.11.1", "node:_http_client": [">= 14.18 && < 15", ">= 16"], _http_common: ">= 0.11.1", "node:_http_common": [">= 14.18 && < 15", ">= 16"], _http_incoming: ">= 0.11.1", "node:_http_incoming": [">= 14.18 && < 15", ">= 16"], _http_outgoing: ">= 0.11.1", "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"], _http_server: ">= 0.11.1", "node:_http_server": [">= 14.18 && < 15", ">= 16"], http: true, "node:http": [">= 14.18 && < 15", ">= 16"], http2: ">= 8.8", "node:http2": [">= 14.18 && < 15", ">= 16"], https: true, "node:https": [">= 14.18 && < 15", ">= 16"], inspector: ">= 8", "node:inspector": [">= 14.18 && < 15", ">= 16"], _linklist: "< 8", module: true, "node:module": [">= 14.18 && < 15", ">= 16"], net: true, "node:net": [">= 14.18 && < 15", ">= 16"], "node-inspect/lib/_inspect": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12", os: true, "node:os": [">= 14.18 && < 15", ">= 16"], path: true, "node:path": [">= 14.18 && < 15", ">= 16"], "path/posix": ">= 15.3", "node:path/posix": ">= 16", "path/win32": ">= 15.3", "node:path/win32": ">= 16", perf_hooks: ">= 8.5", "node:perf_hooks": [">= 14.18 && < 15", ">= 16"], process: ">= 1", "node:process": [">= 14.18 && < 15", ">= 16"], punycode: ">= 0.5", "node:punycode": [">= 14.18 && < 15", ">= 16"], querystring: true, "node:querystring": [">= 14.18 && < 15", ">= 16"], readline: true, "node:readline": [">= 14.18 && < 15", ">= 16"], "readline/promises": ">= 17", "node:readline/promises": ">= 17", repl: true, "node:repl": [">= 14.18 && < 15", ">= 16"], smalloc: ">= 0.11.5 && < 3", _stream_duplex: ">= 0.9.4", "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"], _stream_transform: ">= 0.9.4", "node:_stream_transform": [">= 14.18 && < 15", ">= 16"], _stream_wrap: ">= 1.4.1", "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"], _stream_passthrough: ">= 0.9.4", "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"], _stream_readable: ">= 0.9.4", "node:_stream_readable": [">= 14.18 && < 15", ">= 16"], _stream_writable: ">= 0.9.4", "node:_stream_writable": [">= 14.18 && < 15", ">= 16"], stream: true, "node:stream": [">= 14.18 && < 15", ">= 16"], "stream/consumers": ">= 16.7", "node:stream/consumers": ">= 16.7", "stream/promises": ">= 15", "node:stream/promises": ">= 16", "stream/web": ">= 16.5", "node:stream/web": ">= 16.5", string_decoder: true, "node:string_decoder": [">= 14.18 && < 15", ">= 16"], sys: [">= 0.4 && < 0.7", ">= 0.8"], "node:sys": [">= 14.18 && < 15", ">= 16"], "node:test": ">= 18", timers: true, "node:timers": [">= 14.18 && < 15", ">= 16"], "timers/promises": ">= 15", "node:timers/promises": ">= 16", _tls_common: ">= 0.11.13", "node:_tls_common": [">= 14.18 && < 15", ">= 16"], _tls_legacy: ">= 0.11.3 && < 10", _tls_wrap: ">= 0.11.3", "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"], tls: true, "node:tls": [">= 14.18 && < 15", ">= 16"], trace_events: ">= 10", "node:trace_events": [">= 14.18 && < 15", ">= 16"], tty: true, "node:tty": [">= 14.18 && < 15", ">= 16"], url: true, "node:url": [">= 14.18 && < 15", ">= 16"], util: true, "node:util": [">= 14.18 && < 15", ">= 16"], "util/types": ">= 15.3", "node:util/types": ">= 16", "v8/tools/arguments": ">= 10 && < 12", "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"], v8: ">= 1", "node:v8": [">= 14.18 && < 15", ">= 16"], vm: true, "node:vm": [">= 14.18 && < 15", ">= 16"], wasi: ">= 13.4 && < 13.5", worker_threads: ">= 11.7", "node:worker_threads": [">= 14.18 && < 15", ">= 16"], zlib: ">= 0.5", "node:zlib": [">= 14.18 && < 15", ">= 16"] };
    });
    var Pi = c((Hw, Bl) => {
      "use strict";
      var Ex = vl();
      function dx(e, t) {
        for (var r = e.split("."), n = t.split(" "), s = n.length > 1 ? n[0] : "=", u = (n.length > 1 ? n[1] : n[0]).split("."), a = 0; a < 3; ++a) {
          var l = parseInt(r[a] || 0, 10), p = parseInt(u[a] || 0, 10);
          if (l !== p)
            return s === "<" ? l < p : s === ">=" ? l >= p : false;
        }
        return s === ">=";
      }
      i(dx, "specifierIncluded");
      function Fl(e, t) {
        var r = t.split(/ ?&& ?/);
        if (r.length === 0)
          return false;
        for (var n = 0; n < r.length; ++n)
          if (!dx(e, r[n]))
            return false;
        return true;
      }
      i(Fl, "matchesRange");
      function mx(e, t) {
        if (typeof t == "boolean")
          return t;
        var r = typeof e > "u" ? process.versions && process.versions.node : e;
        if (typeof r != "string")
          throw new TypeError(typeof e > "u" ? "Unable to determine current node version" : "If provided, a valid node version is required");
        if (t && typeof t == "object") {
          for (var n = 0; n < t.length; ++n)
            if (Fl(r, t[n]))
              return true;
          return false;
        }
        return Fl(r, t);
      }
      i(mx, "versionIncluded");
      var Cl = Sl();
      Bl.exports = i(function(t, r) {
        return Ex(Cl, t) && mx(r, Cl[t]);
      }, "isCore");
    });
    var Nl = c((Xw, bl) => {
      var dr = require("fs"), Dx = Nu(), ge = require("path"), Ax = Iu(), hx = Pu(), yx = Lu(), Tx = Pi(), xx = process.platform !== "win32" && dr.realpath && typeof dr.realpath.native == "function" ? dr.realpath.native : dr.realpath, Ol = Dx(), gx = i(function() {
        return [ge.join(Ol, ".node_modules"), ge.join(Ol, ".node_libraries")];
      }, "defaultPaths"), vx = i(function(t, r) {
        dr.stat(t, function(n, s) {
          return n ? n.code === "ENOENT" || n.code === "ENOTDIR" ? r(null, false) : r(n) : r(null, s.isFile() || s.isFIFO());
        });
      }, "isFile"), Sx = i(function(t, r) {
        dr.stat(t, function(n, s) {
          return n ? n.code === "ENOENT" || n.code === "ENOTDIR" ? r(null, false) : r(n) : r(null, s.isDirectory());
        });
      }, "isDirectory"), Fx = i(function(t, r) {
        xx(t, function(n, s) {
          n && n.code !== "ENOENT" ? r(n) : r(null, n ? t : s);
        });
      }, "realpath"), _n = i(function(t, r, n, s) {
        n && n.preserveSymlinks === false ? t(r, s) : s(null, r);
      }, "maybeRealpath"), Cx = i(function(t, r, n) {
        t(r, function(s, u) {
          if (s)
            n(s);
          else
            try {
              var a = JSON.parse(u);
              n(null, a);
            } catch {
              n(null);
            }
        });
      }, "defaultReadPackage"), Bx = i(function(t, r, n) {
        for (var s = hx(r, n, t), u = 0; u < s.length; u++)
          s[u] = ge.join(s[u], t);
        return s;
      }, "getPackageCandidates");
      bl.exports = i(function(t, r, n) {
        var s = n, u = r;
        if (typeof r == "function" && (s = u, u = {}), typeof t != "string") {
          var a = new TypeError("Path must be a string.");
          return process.nextTick(function() {
            s(a);
          });
        }
        u = yx(t, u);
        var l = u.isFile || vx, p = u.isDirectory || Sx, f = u.readFile || dr.readFile, m = u.realpath || Fx, h = u.readPackage || Cx;
        if (u.readFile && u.readPackage) {
          var E = new TypeError("`readFile` and `readPackage` are mutually exclusive.");
          return process.nextTick(function() {
            s(E);
          });
        }
        var x = u.packageIterator, F = u.extensions || [".js"], O = u.includeCoreModules !== false, g = u.basedir || ge.dirname(Ax()), U = u.filename || g;
        u.paths = u.paths || gx();
        var X = ge.resolve(g);
        _n(m, X, u, function(q, K) {
          q ? s(q) : ke(K);
        });
        var z;
        function ke(q) {
          if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(t))
            z = ge.resolve(q, t), (t === "." || t === ".." || t.slice(-1) === "/") && (z += "/"), /\/$/.test(t) && z === q ? xe(z, u.package, We) : Ft(z, u.package, We);
          else {
            if (O && Tx(t))
              return s(null, t);
            lt(t, q, function(K, ye, W) {
              if (K)
                s(K);
              else {
                if (ye)
                  return _n(m, ye, u, function(He, Te) {
                    He ? s(He) : s(null, Te, W);
                  });
                var De = new Error("Cannot find module '" + t + "' from '" + U + "'");
                De.code = "MODULE_NOT_FOUND", s(De);
              }
            });
          }
        }
        i(ke, "init");
        function We(q, K, ye) {
          q ? s(q) : K ? s(null, K, ye) : xe(z, function(W, De, He) {
            if (W)
              s(W);
            else if (De)
              _n(m, De, u, function(Ae, Me) {
                Ae ? s(Ae) : s(null, Me, He);
              });
            else {
              var Te = new Error("Cannot find module '" + t + "' from '" + U + "'");
              Te.code = "MODULE_NOT_FOUND", s(Te);
            }
          });
        }
        i(We, "onfile");
        function Ft(q, K, ye) {
          var W = K, De = ye;
          typeof W == "function" && (De = W, W = void 0);
          var He = [""].concat(F);
          Te(He, q, W);
          function Te(Ae, Me, Ct) {
            if (Ae.length === 0)
              return De(null, void 0, Ct);
            var Er = Me + Ae[0], ct = Ct;
            ct ? be(null, ct) : Z(ge.dirname(Er), be);
            function be(Zt, Vr, Bt) {
              if (ct = Vr, Zt)
                return De(Zt);
              if (Bt && ct && u.pathFilter) {
                var _i = ge.relative(Bt, Er), Ri = _i.slice(0, _i.length - Ae[0].length), On = u.pathFilter(ct, Me, Ri);
                if (On)
                  return Te([""].concat(F.slice()), ge.resolve(Bt, On), ct);
              }
              l(Er, Ii);
            }
            i(be, "onpkg");
            function Ii(Zt, Vr) {
              if (Zt)
                return De(Zt);
              if (Vr)
                return De(null, Er, ct);
              Te(Ae.slice(1), Me, ct);
            }
            i(Ii, "onex");
          }
          i(Te, "load");
        }
        i(Ft, "loadAsFile");
        function Z(q, K) {
          if (q === "" || q === "/" || process.platform === "win32" && /^\w:[/\\]*$/.test(q) || /[/\\]node_modules[/\\]*$/.test(q))
            return K(null);
          _n(m, q, u, function(ye, W) {
            if (ye)
              return Z(ge.dirname(q), K);
            var De = ge.join(W, "package.json");
            l(De, function(He, Te) {
              if (!Te)
                return Z(ge.dirname(q), K);
              h(f, De, function(Ae, Me) {
                Ae && K(Ae);
                var Ct = Me;
                Ct && u.packageFilter && (Ct = u.packageFilter(Ct, De)), K(null, Ct, q);
              });
            });
          });
        }
        i(Z, "loadpkg");
        function xe(q, K, ye) {
          var W = ye, De = K;
          typeof De == "function" && (W = De, De = u.package), _n(m, q, u, function(He, Te) {
            if (He)
              return W(He);
            var Ae = ge.join(Te, "package.json");
            l(Ae, function(Me, Ct) {
              if (Me)
                return W(Me);
              if (!Ct)
                return Ft(ge.join(q, "index"), De, W);
              h(f, Ae, function(Er, ct) {
                if (Er)
                  return W(Er);
                var be = ct;
                if (be && u.packageFilter && (be = u.packageFilter(be, Ae)), be && be.main) {
                  if (typeof be.main != "string") {
                    var Ii = new TypeError("package \u201C" + be.name + "\u201D `main` must be a string");
                    return Ii.code = "INVALID_PACKAGE_MAIN", W(Ii);
                  }
                  (be.main === "." || be.main === "./") && (be.main = "index"), Ft(ge.resolve(q, be.main), be, function(Zt, Vr, Bt) {
                    if (Zt)
                      return W(Zt);
                    if (Vr)
                      return W(null, Vr, Bt);
                    if (!Bt)
                      return Ft(ge.join(q, "index"), Bt, W);
                    var _i = ge.resolve(q, Bt.main);
                    xe(_i, Bt, function(Ri, On, ul) {
                      if (Ri)
                        return W(Ri);
                      if (On)
                        return W(null, On, ul);
                      Ft(ge.join(q, "index"), ul, W);
                    });
                  });
                  return;
                }
                Ft(ge.join(q, "/index"), be, W);
              });
            });
          });
        }
        i(xe, "loadAsDirectory");
        function oe(q, K) {
          if (K.length === 0)
            return q(null, void 0);
          var ye = K[0];
          p(ge.dirname(ye), W);
          function W(Te, Ae) {
            if (Te)
              return q(Te);
            if (!Ae)
              return oe(q, K.slice(1));
            Ft(ye, u.package, De);
          }
          i(W, "isdir");
          function De(Te, Ae, Me) {
            if (Te)
              return q(Te);
            if (Ae)
              return q(null, Ae, Me);
            xe(ye, u.package, He);
          }
          i(De, "onfile");
          function He(Te, Ae, Me) {
            if (Te)
              return q(Te);
            if (Ae)
              return q(null, Ae, Me);
            oe(q, K.slice(1));
          }
          i(He, "ondir");
        }
        i(oe, "processDirs");
        function lt(q, K, ye) {
          var W = i(function() {
            return Bx(q, K, u);
          }, "thunk");
          oe(ye, x ? x(q, K, W, u) : W());
        }
        i(lt, "loadNodeModules");
      }, "resolve");
    });
    var Il = c(($w, Ox) => {
      Ox.exports = { assert: true, "node:assert": [">= 14.18 && < 15", ">= 16"], "assert/strict": ">= 15", "node:assert/strict": ">= 16", async_hooks: ">= 8", "node:async_hooks": [">= 14.18 && < 15", ">= 16"], buffer_ieee754: ">= 0.5 && < 0.9.7", buffer: true, "node:buffer": [">= 14.18 && < 15", ">= 16"], child_process: true, "node:child_process": [">= 14.18 && < 15", ">= 16"], cluster: ">= 0.5", "node:cluster": [">= 14.18 && < 15", ">= 16"], console: true, "node:console": [">= 14.18 && < 15", ">= 16"], constants: true, "node:constants": [">= 14.18 && < 15", ">= 16"], crypto: true, "node:crypto": [">= 14.18 && < 15", ">= 16"], _debug_agent: ">= 1 && < 8", _debugger: "< 8", dgram: true, "node:dgram": [">= 14.18 && < 15", ">= 16"], diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"], "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"], dns: true, "node:dns": [">= 14.18 && < 15", ">= 16"], "dns/promises": ">= 15", "node:dns/promises": ">= 16", domain: ">= 0.7.12", "node:domain": [">= 14.18 && < 15", ">= 16"], events: true, "node:events": [">= 14.18 && < 15", ">= 16"], freelist: "< 6", fs: true, "node:fs": [">= 14.18 && < 15", ">= 16"], "fs/promises": [">= 10 && < 10.1", ">= 14"], "node:fs/promises": [">= 14.18 && < 15", ">= 16"], _http_agent: ">= 0.11.1", "node:_http_agent": [">= 14.18 && < 15", ">= 16"], _http_client: ">= 0.11.1", "node:_http_client": [">= 14.18 && < 15", ">= 16"], _http_common: ">= 0.11.1", "node:_http_common": [">= 14.18 && < 15", ">= 16"], _http_incoming: ">= 0.11.1", "node:_http_incoming": [">= 14.18 && < 15", ">= 16"], _http_outgoing: ">= 0.11.1", "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"], _http_server: ">= 0.11.1", "node:_http_server": [">= 14.18 && < 15", ">= 16"], http: true, "node:http": [">= 14.18 && < 15", ">= 16"], http2: ">= 8.8", "node:http2": [">= 14.18 && < 15", ">= 16"], https: true, "node:https": [">= 14.18 && < 15", ">= 16"], inspector: ">= 8", "node:inspector": [">= 14.18 && < 15", ">= 16"], _linklist: "< 8", module: true, "node:module": [">= 14.18 && < 15", ">= 16"], net: true, "node:net": [">= 14.18 && < 15", ">= 16"], "node-inspect/lib/_inspect": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12", os: true, "node:os": [">= 14.18 && < 15", ">= 16"], path: true, "node:path": [">= 14.18 && < 15", ">= 16"], "path/posix": ">= 15.3", "node:path/posix": ">= 16", "path/win32": ">= 15.3", "node:path/win32": ">= 16", perf_hooks: ">= 8.5", "node:perf_hooks": [">= 14.18 && < 15", ">= 16"], process: ">= 1", "node:process": [">= 14.18 && < 15", ">= 16"], punycode: ">= 0.5", "node:punycode": [">= 14.18 && < 15", ">= 16"], querystring: true, "node:querystring": [">= 14.18 && < 15", ">= 16"], readline: true, "node:readline": [">= 14.18 && < 15", ">= 16"], "readline/promises": ">= 17", "node:readline/promises": ">= 17", repl: true, "node:repl": [">= 14.18 && < 15", ">= 16"], smalloc: ">= 0.11.5 && < 3", _stream_duplex: ">= 0.9.4", "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"], _stream_transform: ">= 0.9.4", "node:_stream_transform": [">= 14.18 && < 15", ">= 16"], _stream_wrap: ">= 1.4.1", "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"], _stream_passthrough: ">= 0.9.4", "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"], _stream_readable: ">= 0.9.4", "node:_stream_readable": [">= 14.18 && < 15", ">= 16"], _stream_writable: ">= 0.9.4", "node:_stream_writable": [">= 14.18 && < 15", ">= 16"], stream: true, "node:stream": [">= 14.18 && < 15", ">= 16"], "stream/consumers": ">= 16.7", "node:stream/consumers": ">= 16.7", "stream/promises": ">= 15", "node:stream/promises": ">= 16", "stream/web": ">= 16.5", "node:stream/web": ">= 16.5", string_decoder: true, "node:string_decoder": [">= 14.18 && < 15", ">= 16"], sys: [">= 0.4 && < 0.7", ">= 0.8"], "node:sys": [">= 14.18 && < 15", ">= 16"], "node:test": ">= 18", timers: true, "node:timers": [">= 14.18 && < 15", ">= 16"], "timers/promises": ">= 15", "node:timers/promises": ">= 16", _tls_common: ">= 0.11.13", "node:_tls_common": [">= 14.18 && < 15", ">= 16"], _tls_legacy: ">= 0.11.3 && < 10", _tls_wrap: ">= 0.11.3", "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"], tls: true, "node:tls": [">= 14.18 && < 15", ">= 16"], trace_events: ">= 10", "node:trace_events": [">= 14.18 && < 15", ">= 16"], tty: true, "node:tty": [">= 14.18 && < 15", ">= 16"], url: true, "node:url": [">= 14.18 && < 15", ">= 16"], util: true, "node:util": [">= 14.18 && < 15", ">= 16"], "util/types": ">= 15.3", "node:util/types": ">= 16", "v8/tools/arguments": ">= 10 && < 12", "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"], v8: ">= 1", "node:v8": [">= 14.18 && < 15", ">= 16"], vm: true, "node:vm": [">= 14.18 && < 15", ">= 16"], wasi: ">= 13.4 && < 13.5", worker_threads: ">= 11.7", "node:worker_threads": [">= 14.18 && < 15", ">= 16"], zlib: ">= 0.5", "node:zlib": [">= 14.18 && < 15", ">= 16"] };
    });
    var Ll = c((Jw, Pl) => {
      var bx = process.versions && process.versions.node && process.versions.node.split(".") || [];
      function Nx(e) {
        for (var t = e.split(" "), r = t.length > 1 ? t[0] : "=", n = (t.length > 1 ? t[1] : t[0]).split("."), s = 0; s < 3; ++s) {
          var u = parseInt(bx[s] || 0, 10), a = parseInt(n[s] || 0, 10);
          if (u !== a)
            return r === "<" ? u < a : r === ">=" ? u >= a : false;
        }
        return r === ">=";
      }
      i(Nx, "specifierIncluded");
      function _l(e) {
        var t = e.split(/ ?&& ?/);
        if (t.length === 0)
          return false;
        for (var r = 0; r < t.length; ++r)
          if (!Nx(t[r]))
            return false;
        return true;
      }
      i(_l, "matchesRange");
      function Ix(e) {
        if (typeof e == "boolean")
          return e;
        if (e && typeof e == "object") {
          for (var t = 0; t < e.length; ++t)
            if (_l(e[t]))
              return true;
          return false;
        }
        return _l(e);
      }
      i(Ix, "versionIncluded");
      var qu = Il(), Rl = {};
      for (Li in qu)
        Object.prototype.hasOwnProperty.call(qu, Li) && (Rl[Li] = Ix(qu[Li]));
      var Li;
      Pl.exports = Rl;
    });
    var ql = c((Qw, wl) => {
      var _x = Pi();
      wl.exports = i(function(t) {
        return _x(t);
      }, "isCore");
    });
    var Gl = c((zw, Ml) => {
      var Rx = Pi(), mr = require("fs"), Ne = require("path"), Px = Nu(), Lx = Iu(), wx = Pu(), qx = Lu(), kx = process.platform !== "win32" && mr.realpathSync && typeof mr.realpathSync.native == "function" ? mr.realpathSync.native : mr.realpathSync, kl = Px(), Mx = i(function() {
        return [Ne.join(kl, ".node_modules"), Ne.join(kl, ".node_libraries")];
      }, "defaultPaths"), Gx = i(function(t) {
        try {
          var r = mr.statSync(t, { throwIfNoEntry: false });
        } catch (n) {
          if (n && (n.code === "ENOENT" || n.code === "ENOTDIR"))
            return false;
          throw n;
        }
        return !!r && (r.isFile() || r.isFIFO());
      }, "isFile"), Ux = i(function(t) {
        try {
          var r = mr.statSync(t, { throwIfNoEntry: false });
        } catch (n) {
          if (n && (n.code === "ENOENT" || n.code === "ENOTDIR"))
            return false;
          throw n;
        }
        return !!r && r.isDirectory();
      }, "isDirectory"), Yx = i(function(t) {
        try {
          return kx(t);
        } catch (r) {
          if (r.code !== "ENOENT")
            throw r;
        }
        return t;
      }, "realpathSync"), Rn = i(function(t, r, n) {
        return n && n.preserveSymlinks === false ? t(r) : r;
      }, "maybeRealpathSync"), jx = i(function(t, r) {
        var n = t(r);
        try {
          var s = JSON.parse(n);
          return s;
        } catch {
        }
      }, "defaultReadPackageSync"), Vx = i(function(t, r, n) {
        for (var s = wx(r, n, t), u = 0; u < s.length; u++)
          s[u] = Ne.join(s[u], t);
        return s;
      }, "getPackageCandidates");
      Ml.exports = i(function(t, r) {
        if (typeof t != "string")
          throw new TypeError("Path must be a string.");
        var n = qx(t, r), s = n.isFile || Gx, u = n.readFileSync || mr.readFileSync, a = n.isDirectory || Ux, l = n.realpathSync || Yx, p = n.readPackageSync || jx;
        if (n.readFileSync && n.readPackageSync)
          throw new TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
        var f = n.packageIterator, m = n.extensions || [".js"], h = n.includeCoreModules !== false, E = n.basedir || Ne.dirname(Lx()), x = n.filename || E;
        n.paths = n.paths || Mx();
        var F = Rn(l, Ne.resolve(E), n);
        if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(t)) {
          var O = Ne.resolve(F, t);
          (t === "." || t === ".." || t.slice(-1) === "/") && (O += "/");
          var g = z(O) || We(O);
          if (g)
            return Rn(l, g, n);
        } else {
          if (h && Rx(t))
            return t;
          var U = Ft(t, F);
          if (U)
            return Rn(l, U, n);
        }
        var X = new Error("Cannot find module '" + t + "' from '" + x + "'");
        throw X.code = "MODULE_NOT_FOUND", X;
        function z(Z) {
          var xe = ke(Ne.dirname(Z));
          if (xe && xe.dir && xe.pkg && n.pathFilter) {
            var oe = Ne.relative(xe.dir, Z), lt = n.pathFilter(xe.pkg, Z, oe);
            lt && (Z = Ne.resolve(xe.dir, lt));
          }
          if (s(Z))
            return Z;
          for (var q = 0; q < m.length; q++) {
            var K = Z + m[q];
            if (s(K))
              return K;
          }
        }
        i(z, "loadAsFileSync");
        function ke(Z) {
          if (!(Z === "" || Z === "/") && !(process.platform === "win32" && /^\w:[/\\]*$/.test(Z)) && !/[/\\]node_modules[/\\]*$/.test(Z)) {
            var xe = Ne.join(Rn(l, Z, n), "package.json");
            if (!s(xe))
              return ke(Ne.dirname(Z));
            var oe = p(u, xe);
            return oe && n.packageFilter && (oe = n.packageFilter(oe, Z)), { pkg: oe, dir: Z };
          }
        }
        i(ke, "loadpkg");
        function We(Z) {
          var xe = Ne.join(Rn(l, Z, n), "/package.json");
          if (s(xe)) {
            try {
              var oe = p(u, xe);
            } catch {
            }
            if (oe && n.packageFilter && (oe = n.packageFilter(oe, Z)), oe && oe.main) {
              if (typeof oe.main != "string") {
                var lt = new TypeError("package \u201C" + oe.name + "\u201D `main` must be a string");
                throw lt.code = "INVALID_PACKAGE_MAIN", lt;
              }
              (oe.main === "." || oe.main === "./") && (oe.main = "index");
              try {
                var q = z(Ne.resolve(Z, oe.main));
                if (q)
                  return q;
                var K = We(Ne.resolve(Z, oe.main));
                if (K)
                  return K;
              } catch {
              }
            }
          }
          return z(Ne.join(Z, "/index"));
        }
        i(We, "loadAsDirectorySync");
        function Ft(Z, xe) {
          for (var oe = i(function() {
            return Vx(Z, xe, n);
          }, "thunk"), lt = f ? f(Z, xe, oe, n) : oe(), q = 0; q < lt.length; q++) {
            var K = lt[q];
            if (a(Ne.dirname(K))) {
              var ye = z(K);
              if (ye)
                return ye;
              var W = We(K);
              if (W)
                return W;
            }
          }
        }
        i(Ft, "loadNodeModulesSync");
      }, "resolveSync");
    });
    var Yl = c((Zw, Ul) => {
      var wi = Nl();
      wi.core = Ll();
      wi.isCore = ql();
      wi.sync = Gl();
      Ul.exports = wi;
    });
    var Ot = c((r3, Kl) => {
      var Hx = Kl.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = Hx);
    });
    var er = c((n3, Wl) => {
      var Xx = {}.hasOwnProperty;
      Wl.exports = function(e, t) {
        return Xx.call(e, t);
      };
    });
    var Wr = c((i3, Hl) => {
      Hl.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    });
    var Tr = c((s3, Xl) => {
      Xl.exports = !Wr()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var Ve = c((u3, $l) => {
      var $x = $l.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = $x);
    });
    var Ql = c((a3, Jl) => {
      Jl.exports = function(e) {
        if (typeof e != "function")
          throw TypeError(e + " is not a function!");
        return e;
      };
    });
    var Zl = c((o3, zl) => {
      var Jx = Ql();
      zl.exports = function(e, t, r) {
        if (Jx(e), t === void 0)
          return e;
        switch (r) {
          case 1:
            return function(n) {
              return e.call(t, n);
            };
          case 2:
            return function(n, s) {
              return e.call(t, n, s);
            };
          case 3:
            return function(n, s, u) {
              return e.call(t, n, s, u);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    });
    var Hr = c((l3, ec) => {
      ec.exports = function(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      };
    });
    var Xr = c((c3, tc) => {
      var Qx = Hr();
      tc.exports = function(e) {
        if (!Qx(e))
          throw TypeError(e + " is not an object!");
        return e;
      };
    });
    var Gu = c((p3, nc) => {
      var rc = Hr(), Mu = Ot().document, zx = rc(Mu) && rc(Mu.createElement);
      nc.exports = function(e) {
        return zx ? Mu.createElement(e) : {};
      };
    });
    var Uu = c((f3, sc) => {
      sc.exports = !Tr() && !Wr()(function() {
        return Object.defineProperty(Gu()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var Gi = c((E3, uc) => {
      var Mi = Hr();
      uc.exports = function(e, t) {
        if (!Mi(e))
          return e;
        var r, n;
        if (t && typeof (r = e.toString) == "function" && !Mi(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !Mi(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !Mi(n = r.call(e)))
          return n;
        throw TypeError("Can't convert object to primitive value");
      };
    });
    var xr = c((oc) => {
      var ac = Xr(), Zx = Uu(), eg = Gi(), tg = Object.defineProperty;
      oc.f = Tr() ? Object.defineProperty : i(function(t, r, n) {
        if (ac(t), r = eg(r, true), ac(n), Zx)
          try {
            return tg(t, r, n);
          } catch {
          }
        if ("get" in n || "set" in n)
          throw TypeError("Accessors not supported!");
        return "value" in n && (t[r] = n.value), t;
      }, "defineProperty");
    });
    var qn = c((m3, lc) => {
      lc.exports = function(e, t) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
      };
    });
    var gr = c((D3, cc) => {
      var rg = xr(), ng = qn();
      cc.exports = Tr() ? function(e, t, r) {
        return rg.f(e, t, ng(1, r));
      } : function(e, t, r) {
        return e[t] = r, e;
      };
    });
    var $r = c((A3, fc) => {
      var Ui = Ot(), Yu = Ve(), pc = Zl(), ig = gr(), sg = er(), Yi = "prototype", Ie = i(function(e, t, r) {
        var n = e & Ie.F, s = e & Ie.G, u = e & Ie.S, a = e & Ie.P, l = e & Ie.B, p = e & Ie.W, f = s ? Yu : Yu[t] || (Yu[t] = {}), m = f[Yi], h = s ? Ui : u ? Ui[t] : (Ui[t] || {})[Yi], E, x, F;
        s && (r = t);
        for (E in r)
          x = !n && h && h[E] !== void 0, !(x && sg(f, E)) && (F = x ? h[E] : r[E], f[E] = s && typeof h[E] != "function" ? r[E] : l && x ? pc(F, Ui) : p && h[E] == F ? function(O) {
            var g = i(function(U, X, z) {
              if (this instanceof O) {
                switch (arguments.length) {
                  case 0:
                    return new O();
                  case 1:
                    return new O(U);
                  case 2:
                    return new O(U, X);
                }
                return new O(U, X, z);
              }
              return O.apply(this, arguments);
            }, "F");
            return g[Yi] = O[Yi], g;
          }(F) : a && typeof F == "function" ? pc(Function.call, F) : F, a && ((f.virtual || (f.virtual = {}))[E] = F, e & Ie.R && m && !m[E] && ig(m, E, F)));
      }, "$export");
      Ie.F = 1;
      Ie.G = 2;
      Ie.S = 4;
      Ie.P = 8;
      Ie.B = 16;
      Ie.W = 32;
      Ie.U = 64;
      Ie.R = 128;
      fc.exports = Ie;
    });
    var ju = c((h3, Ec) => {
      Ec.exports = gr();
    });
    var kn = c((y3, dc) => {
      var ug = 0, ag = Math.random();
      dc.exports = function(e) {
        return "Symbol(".concat(e === void 0 ? "" : e, ")_", (++ug + ag).toString(36));
      };
    });
    var Dc = c((T3, mc) => {
      var vr = kn()("meta"), og = Hr(), Vu = er(), lg = xr().f, cg = 0, ji = Object.isExtensible || function() {
        return true;
      }, pg = !Wr()(function() {
        return ji(Object.preventExtensions({}));
      }), Ku = i(function(e) {
        lg(e, vr, { value: { i: "O" + ++cg, w: {} } });
      }, "setMeta"), fg = i(function(e, t) {
        if (!og(e))
          return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!Vu(e, vr)) {
          if (!ji(e))
            return "F";
          if (!t)
            return "E";
          Ku(e);
        }
        return e[vr].i;
      }, "fastKey"), Eg = i(function(e, t) {
        if (!Vu(e, vr)) {
          if (!ji(e))
            return true;
          if (!t)
            return false;
          Ku(e);
        }
        return e[vr].w;
      }, "getWeak"), dg = i(function(e) {
        return pg && mg.NEED && ji(e) && !Vu(e, vr) && Ku(e), e;
      }, "onFreeze"), mg = mc.exports = { KEY: vr, NEED: false, fastKey: fg, getWeak: Eg, onFreeze: dg };
    });
    var Mn = c((x3, Ac) => {
      Ac.exports = true;
    });
    var Vi = c((g3, xc) => {
      var Dg = Ve(), hc = Ot(), yc = "__core-js_shared__", Tc = hc[yc] || (hc[yc] = {});
      (xc.exports = function(e, t) {
        return Tc[e] || (Tc[e] = t !== void 0 ? t : {});
      })("versions", []).push({ version: Dg.version, mode: Mn() ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    });
    var bt = c((v3, vc) => {
      var Wu = Vi()("wks"), Ag = kn(), Hu = Ot().Symbol, gc = typeof Hu == "function", hg = vc.exports = function(e) {
        return Wu[e] || (Wu[e] = gc && Hu[e] || (gc ? Hu : Ag)("Symbol." + e));
      };
      hg.store = Wu;
    });
    var Ki = c((S3, Fc) => {
      var yg = xr().f, Tg = er(), Sc = bt()("toStringTag");
      Fc.exports = function(e, t, r) {
        e && !Tg(e = r ? e : e.prototype, Sc) && yg(e, Sc, { configurable: true, value: t });
      };
    });
    var Wi = c((Cc) => {
      Cc.f = bt();
    });
    var Hi = c((C3, Oc) => {
      var xg = Ot(), Bc = Ve(), gg = Mn(), vg = Wi(), Sg = xr().f;
      Oc.exports = function(e) {
        var t = Bc.Symbol || (Bc.Symbol = gg ? {} : xg.Symbol || {});
        e.charAt(0) != "_" && !(e in t) && Sg(t, e, { value: vg.f(e) });
      };
    });
    var Xi = c((B3, bc) => {
      var Fg = {}.toString;
      bc.exports = function(e) {
        return Fg.call(e).slice(8, -1);
      };
    });
    var Ic = c((O3, Nc) => {
      var Cg = Xi();
      Nc.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return Cg(e) == "String" ? e.split("") : Object(e);
      };
    });
    var $i = c((b3, _c) => {
      _c.exports = function(e) {
        if (e == null)
          throw TypeError("Can't call method on  " + e);
        return e;
      };
    });
    var Sr = c((N3, Rc) => {
      var Bg = Ic(), Og = $i();
      Rc.exports = function(e) {
        return Bg(Og(e));
      };
    });
    var Ji = c((I3, Pc) => {
      var bg = Math.ceil, Ng = Math.floor;
      Pc.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? Ng : bg)(e);
      };
    });
    var wc = c((_3, Lc) => {
      var Ig = Ji(), _g = Math.min;
      Lc.exports = function(e) {
        return e > 0 ? _g(Ig(e), 9007199254740991) : 0;
      };
    });
    var kc = c((R3, qc) => {
      var Rg = Ji(), Pg = Math.max, Lg = Math.min;
      qc.exports = function(e, t) {
        return e = Rg(e), e < 0 ? Pg(e + t, 0) : Lg(e, t);
      };
    });
    var Gc = c((P3, Mc) => {
      var wg = Sr(), qg = wc(), kg = kc();
      Mc.exports = function(e) {
        return function(t, r, n) {
          var s = wg(t), u = qg(s.length), a = kg(n, u), l;
          if (e && r != r) {
            for (; u > a; )
              if (l = s[a++], l != l)
                return true;
          } else
            for (; u > a; a++)
              if ((e || a in s) && s[a] === r)
                return e || a || 0;
          return !e && -1;
        };
      };
    });
    var Qi = c((L3, Yc) => {
      var Uc = Vi()("keys"), Mg = kn();
      Yc.exports = function(e) {
        return Uc[e] || (Uc[e] = Mg(e));
      };
    });
    var Xu = c((w3, Vc) => {
      var jc = er(), Gg = Sr(), Ug = Gc()(false), Yg = Qi()("IE_PROTO");
      Vc.exports = function(e, t) {
        var r = Gg(e), n = 0, s = [], u;
        for (u in r)
          u != Yg && jc(r, u) && s.push(u);
        for (; t.length > n; )
          jc(r, u = t[n++]) && (~Ug(s, u) || s.push(u));
        return s;
      };
    });
    var zi = c((q3, Kc) => {
      Kc.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    });
    var Gn = c((k3, Wc) => {
      var jg = Xu(), Vg = zi();
      Wc.exports = Object.keys || i(function(t) {
        return jg(t, Vg);
      }, "keys");
    });
    var $u = c((Hc) => {
      Hc.f = Object.getOwnPropertySymbols;
    });
    var Zi = c((Xc) => {
      Xc.f = {}.propertyIsEnumerable;
    });
    var Jc = c((U3, $c) => {
      var Kg = Gn(), Wg = $u(), Hg = Zi();
      $c.exports = function(e) {
        var t = Kg(e), r = Wg.f;
        if (r)
          for (var n = r(e), s = Hg.f, u = 0, a; n.length > u; )
            s.call(e, a = n[u++]) && t.push(a);
        return t;
      };
    });
    var zc = c((Y3, Qc) => {
      var Xg = Xi();
      Qc.exports = Array.isArray || i(function(t) {
        return Xg(t) == "Array";
      }, "isArray");
    });
    var es = c((j3, Zc) => {
      var $g = $i();
      Zc.exports = function(e) {
        return Object($g(e));
      };
    });
    var tp = c((V3, ep) => {
      var Jg = xr(), Qg = Xr(), zg = Gn();
      ep.exports = Tr() ? Object.defineProperties : i(function(t, r) {
        Qg(t);
        for (var n = zg(r), s = n.length, u = 0, a; s > u; )
          Jg.f(t, a = n[u++], r[a]);
        return t;
      }, "defineProperties");
    });
    var ip = c((K3, np) => {
      var rp = Ot().document;
      np.exports = rp && rp.documentElement;
    });
    var rs = c((W3, up) => {
      var Zg = Xr(), ev = tp(), sp = zi(), tv = Qi()("IE_PROTO"), Ju = i(function() {
      }, "Empty"), Qu = "prototype", ts = i(function() {
        var e = Gu()("iframe"), t = sp.length, r = "<", n = ">", s;
        for (e.style.display = "none", ip().appendChild(e), e.src = "javascript:", s = e.contentWindow.document, s.open(), s.write(r + "script" + n + "document.F=Object" + r + "/script" + n), s.close(), ts = s.F; t--; )
          delete ts[Qu][sp[t]];
        return ts();
      }, "createDict");
      up.exports = Object.create || i(function(t, r) {
        var n;
        return t !== null ? (Ju[Qu] = Zg(t), n = new Ju(), Ju[Qu] = null, n[tv] = t) : n = ts(), r === void 0 ? n : ev(n, r);
      }, "create");
    });
    var zu = c((ap) => {
      var rv = Xu(), nv = zi().concat("length", "prototype");
      ap.f = Object.getOwnPropertyNames || i(function(t) {
        return rv(t, nv);
      }, "getOwnPropertyNames");
    });
    var pp = c((X3, cp) => {
      var iv = Sr(), op = zu().f, sv = {}.toString, lp = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], uv = i(function(e) {
        try {
          return op(e);
        } catch {
          return lp.slice();
        }
      }, "getWindowNames");
      cp.exports.f = i(function(t) {
        return lp && sv.call(t) == "[object Window]" ? uv(t) : op(iv(t));
      }, "getOwnPropertyNames");
    });
    var dp = c((Ep) => {
      var av = Zi(), ov = qn(), lv = Sr(), cv = Gi(), pv = er(), fv = Uu(), fp = Object.getOwnPropertyDescriptor;
      Ep.f = Tr() ? fp : i(function(t, r) {
        if (t = lv(t), r = cv(r, true), fv)
          try {
            return fp(t, r);
          } catch {
          }
        if (pv(t, r))
          return ov(!av.f.call(t, r), t[r]);
      }, "getOwnPropertyDescriptor");
    });
    var ls = c(() => {
      "use strict";
      var ss = Ot(), Be = er(), ia = Tr(), _e = $r(), mp = ju(), Ev = Dc().KEY, ca = Wr(), pa = Vi(), fa = Ki(), dv = kn(), jn = bt(), mv = Wi(), Dv = Hi(), Av = Jc(), hv = zc(), sa = Xr(), yv = Hr(), Tv = es(), us = Sr(), Ea = Gi(), ua = qn(), Yn = rs(), yp = pp(), Tp = dp(), as = $u(), xp = xr(), xv = Gn(), gp = Tp.f, Fr = xp.f, vp = yp.f, Ue = ss.Symbol, is = ss.JSON, ns = is && is.stringify, tr = "prototype", Ge = jn("_hidden"), Dp = jn("toPrimitive"), gv = {}.propertyIsEnumerable, Un = pa("symbol-registry"), Nt = pa("symbols"), Vn = pa("op-symbols"), Xe = Object[tr], Jr = typeof Ue == "function" && !!as.f, Zu = ss.QObject, aa = !Zu || !Zu[tr] || !Zu[tr].findChild, oa = ia && ca(function() {
        return Yn(Fr({}, "a", { get: function() {
          return Fr(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(e, t, r) {
        var n = gp(Xe, t);
        n && delete Xe[t], Fr(e, t, r), n && e !== Xe && Fr(Xe, t, n);
      } : Fr, Ap = i(function(e) {
        var t = Nt[e] = Yn(Ue[tr]);
        return t._k = e, t;
      }, "wrap"), la = Jr && typeof Ue.iterator == "symbol" ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        return e instanceof Ue;
      }, os = i(function(t, r, n) {
        return t === Xe && os(Vn, r, n), sa(t), r = Ea(r, true), sa(n), Be(Nt, r) ? (n.enumerable ? (Be(t, Ge) && t[Ge][r] && (t[Ge][r] = false), n = Yn(n, { enumerable: ua(0, false) })) : (Be(t, Ge) || Fr(t, Ge, ua(1, {})), t[Ge][r] = true), oa(t, r, n)) : Fr(t, r, n);
      }, "defineProperty"), Sp = i(function(t, r) {
        sa(t);
        for (var n = Av(r = us(r)), s = 0, u = n.length, a; u > s; )
          os(t, a = n[s++], r[a]);
        return t;
      }, "defineProperties"), vv = i(function(t, r) {
        return r === void 0 ? Yn(t) : Sp(Yn(t), r);
      }, "create"), hp = i(function(t) {
        var r = gv.call(this, t = Ea(t, true));
        return this === Xe && Be(Nt, t) && !Be(Vn, t) ? false : r || !Be(this, t) || !Be(Nt, t) || Be(this, Ge) && this[Ge][t] ? r : true;
      }, "propertyIsEnumerable"), Fp = i(function(t, r) {
        if (t = us(t), r = Ea(r, true), !(t === Xe && Be(Nt, r) && !Be(Vn, r))) {
          var n = gp(t, r);
          return n && Be(Nt, r) && !(Be(t, Ge) && t[Ge][r]) && (n.enumerable = true), n;
        }
      }, "getOwnPropertyDescriptor"), Cp = i(function(t) {
        for (var r = vp(us(t)), n = [], s = 0, u; r.length > s; )
          !Be(Nt, u = r[s++]) && u != Ge && u != Ev && n.push(u);
        return n;
      }, "getOwnPropertyNames"), Bp = i(function(t) {
        for (var r = t === Xe, n = vp(r ? Vn : us(t)), s = [], u = 0, a; n.length > u; )
          Be(Nt, a = n[u++]) && (r ? Be(Xe, a) : true) && s.push(Nt[a]);
        return s;
      }, "getOwnPropertySymbols");
      Jr || (Ue = i(function() {
        if (this instanceof Ue)
          throw TypeError("Symbol is not a constructor!");
        var t = dv(arguments.length > 0 ? arguments[0] : void 0), r = i(function(n) {
          this === Xe && r.call(Vn, n), Be(this, Ge) && Be(this[Ge], t) && (this[Ge][t] = false), oa(this, t, ua(1, n));
        }, "$set");
        return ia && aa && oa(Xe, t, { configurable: true, set: r }), Ap(t);
      }, "Symbol"), mp(Ue[tr], "toString", i(function() {
        return this._k;
      }, "toString")), Tp.f = Fp, xp.f = os, zu().f = yp.f = Cp, Zi().f = hp, as.f = Bp, ia && !Mn() && mp(Xe, "propertyIsEnumerable", hp, true), mv.f = function(e) {
        return Ap(jn(e));
      });
      _e(_e.G + _e.W + _e.F * !Jr, { Symbol: Ue });
      for (ea = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ta = 0; ea.length > ta; )
        jn(ea[ta++]);
      var ea, ta;
      for (ra = xv(jn.store), na = 0; ra.length > na; )
        Dv(ra[na++]);
      var ra, na;
      _e(_e.S + _e.F * !Jr, "Symbol", { for: function(e) {
        return Be(Un, e += "") ? Un[e] : Un[e] = Ue(e);
      }, keyFor: i(function(t) {
        if (!la(t))
          throw TypeError(t + " is not a symbol!");
        for (var r in Un)
          if (Un[r] === t)
            return r;
      }, "keyFor"), useSetter: function() {
        aa = true;
      }, useSimple: function() {
        aa = false;
      } });
      _e(_e.S + _e.F * !Jr, "Object", { create: vv, defineProperty: os, defineProperties: Sp, getOwnPropertyDescriptor: Fp, getOwnPropertyNames: Cp, getOwnPropertySymbols: Bp });
      var Sv = ca(function() {
        as.f(1);
      });
      _e(_e.S + _e.F * Sv, "Object", { getOwnPropertySymbols: i(function(t) {
        return as.f(Tv(t));
      }, "getOwnPropertySymbols") });
      is && _e(_e.S + _e.F * (!Jr || ca(function() {
        var e = Ue();
        return ns([e]) != "[null]" || ns({ a: e }) != "{}" || ns(Object(e)) != "{}";
      })), "JSON", { stringify: i(function(t) {
        for (var r = [t], n = 1, s, u; arguments.length > n; )
          r.push(arguments[n++]);
        if (u = s = r[1], !(!yv(s) && t === void 0 || la(t)))
          return hv(s) || (s = i(function(a, l) {
            if (typeof u == "function" && (l = u.call(this, a, l)), !la(l))
              return l;
          }, "replacer")), r[1] = s, ns.apply(is, r);
      }, "stringify") });
      Ue[tr][Dp] || gr()(Ue[tr], Dp, Ue[tr].valueOf);
      fa(Ue, "Symbol");
      fa(Math, "Math", true);
      fa(ss.JSON, "JSON", true);
    });
    var bp = c((z3, Op) => {
      ls();
      Op.exports = Ve().Object.getOwnPropertySymbols;
    });
    var Ip = c((Z3, Np) => {
      Np.exports = { default: bp(), __esModule: true };
    });
    var Rp = c((eq, _p) => {
      _p.exports = function() {
      };
    });
    var Lp = c((tq, Pp) => {
      Pp.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    });
    var Kn = c((rq, wp) => {
      wp.exports = {};
    });
    var Mp = c((nq, kp) => {
      "use strict";
      var Fv = rs(), Cv = qn(), Bv = Ki(), qp = {};
      gr()(qp, bt()("iterator"), function() {
        return this;
      });
      kp.exports = function(e, t, r) {
        e.prototype = Fv(qp, { next: Cv(1, r) }), Bv(e, t + " Iterator");
      };
    });
    var Yp = c((iq, Up) => {
      var Ov = er(), bv = es(), Gp = Qi()("IE_PROTO"), Nv = Object.prototype;
      Up.exports = Object.getPrototypeOf || function(e) {
        return e = bv(e), Ov(e, Gp) ? e[Gp] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Nv : null;
      };
    });
    var Da = c((sq, Xp) => {
      "use strict";
      var jp = Mn(), da = $r(), Iv = ju(), Vp = gr(), Kp = Kn(), _v = Mp(), Rv = Ki(), Pv = Yp(), Wn = bt()("iterator"), ma = !([].keys && "next" in [].keys()), Lv = "@@iterator", Wp = "keys", cs = "values", Hp = i(function() {
        return this;
      }, "returnThis");
      Xp.exports = function(e, t, r, n, s, u, a) {
        _v(r, t, n);
        var l = i(function(z) {
          if (!ma && z in h)
            return h[z];
          switch (z) {
            case Wp:
              return i(function() {
                return new r(this, z);
              }, "keys");
            case cs:
              return i(function() {
                return new r(this, z);
              }, "values");
          }
          return i(function() {
            return new r(this, z);
          }, "entries");
        }, "getMethod"), p = t + " Iterator", f = s == cs, m = false, h = e.prototype, E = h[Wn] || h[Lv] || s && h[s], x = E || l(s), F = s ? f ? l("entries") : x : void 0, O = t == "Array" && h.entries || E, g, U, X;
        if (O && (X = Pv(O.call(new e())), X !== Object.prototype && X.next && (Rv(X, p, true), !jp && typeof X[Wn] != "function" && Vp(X, Wn, Hp))), f && E && E.name !== cs && (m = true, x = i(function() {
          return E.call(this);
        }, "values")), (!jp || a) && (ma || m || !h[Wn]) && Vp(h, Wn, x), Kp[t] = x, Kp[p] = Hp, s)
          if (g = { values: f ? x : l(cs), keys: u ? x : l(Wp), entries: F }, a)
            for (U in g)
              U in h || Iv(h, U, g[U]);
          else
            da(da.P + da.F * (ma || m), t, g);
        return g;
      };
    });
    var Qp = c((uq, Jp) => {
      "use strict";
      var Aa = Rp(), ps = Lp(), $p = Kn(), wv = Sr();
      Jp.exports = Da()(Array, "Array", function(e, t) {
        this._t = wv(e), this._i = 0, this._k = t;
      }, function() {
        var e = this._t, t = this._k, r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, ps(1)) : t == "keys" ? ps(0, r) : t == "values" ? ps(0, e[r]) : ps(0, [r, e[r]]);
      }, "values");
      $p.Arguments = $p.Array;
      Aa("keys");
      Aa("values");
      Aa("entries");
    });
    var ya = c(() => {
      Qp();
      var qv = Ot(), kv = gr(), zp = Kn(), Zp = bt()("toStringTag"), ef = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
      for (fs = 0; fs < ef.length; fs++)
        Es = ef[fs], ha = qv[Es], ds = ha && ha.prototype, ds && !ds[Zp] && kv(ds, Zp, Es), zp[Es] = zp.Array;
      var Es, ha, ds, fs;
    });
    var rf = c((lq, tf) => {
      var Mv = Ji(), Gv = $i();
      tf.exports = function(e) {
        return function(t, r) {
          var n = String(Gv(t)), s = Mv(r), u = n.length, a, l;
          return s < 0 || s >= u ? e ? "" : void 0 : (a = n.charCodeAt(s), a < 55296 || a > 56319 || s + 1 === u || (l = n.charCodeAt(s + 1)) < 56320 || l > 57343 ? e ? n.charAt(s) : a : e ? n.slice(s, s + 2) : (a - 55296 << 10) + (l - 56320) + 65536);
        };
      };
    });
    var Ta = c(() => {
      "use strict";
      var Uv = rf()(true);
      Da()(String, "String", function(e) {
        this._t = String(e), this._i = 0;
      }, function() {
        var e = this._t, t = this._i, r;
        return t >= e.length ? { value: void 0, done: true } : (r = Uv(e, t), this._i += r.length, { value: r, done: false });
      });
    });
    var sf = c((fq, nf) => {
      var xa = Xi(), Yv = bt()("toStringTag"), jv = xa(function() {
        return arguments;
      }()) == "Arguments", Vv = i(function(e, t) {
        try {
          return e[t];
        } catch {
        }
      }, "tryGet");
      nf.exports = function(e) {
        var t, r, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = Vv(t = Object(e), Yv)) == "string" ? r : jv ? xa(t) : (n = xa(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
      };
    });
    var af = c((Eq, uf) => {
      var Kv = sf(), Wv = bt()("iterator"), Hv = Kn();
      uf.exports = Ve().getIteratorMethod = function(e) {
        if (e != null)
          return e[Wv] || e["@@iterator"] || Hv[Kv(e)];
      };
    });
    var lf = c((dq, of) => {
      var Xv = Xr(), $v = af();
      of.exports = Ve().getIterator = function(e) {
        var t = $v(e);
        if (typeof t != "function")
          throw TypeError(e + " is not iterable!");
        return Xv(t.call(e));
      };
    });
    var pf = c((mq, cf) => {
      ya();
      Ta();
      cf.exports = lf();
    });
    var Hn = c((Dq, ff) => {
      ff.exports = { default: pf(), __esModule: true };
    });
    var df = c((Aq, Ef) => {
      var ga = $r(), Jv = Ve(), Qv = Wr();
      Ef.exports = function(e, t) {
        var r = (Jv.Object || {})[e] || Object[e], n = {};
        n[e] = t(r), ga(ga.S + ga.F * Qv(function() {
          r(1);
        }), "Object", n);
      };
    });
    var mf = c(() => {
      var zv = es(), Zv = Gn();
      df()("keys", function() {
        return i(function(t) {
          return Zv(zv(t));
        }, "keys");
      });
    });
    var Af = c((Tq, Df) => {
      mf();
      Df.exports = Ve().Object.keys;
    });
    var va = c((xq, hf) => {
      hf.exports = { default: Af(), __esModule: true };
    });
    var gf = c((gq, xf) => {
      var yf = Ve(), Tf = yf.JSON || (yf.JSON = { stringify: JSON.stringify });
      xf.exports = i(function(t) {
        return Tf.stringify.apply(Tf, arguments);
      }, "stringify");
    });
    var ms = c((vq, vf) => {
      vf.exports = { default: gf(), __esModule: true };
    });
    var Ff = c((Sq, Sf) => {
      ls();
      Sf.exports = Ve().Symbol.for;
    });
    var Bf = c((Fq, Cf) => {
      Cf.exports = { default: Ff(), __esModule: true };
    });
    var Ds = c((j) => {
      "use strict";
      j.__esModule = true;
      j.NOT_LOCAL_BINDING = j.BLOCK_SCOPED_SYMBOL = j.INHERIT_KEYS = j.UNARY_OPERATORS = j.STRING_UNARY_OPERATORS = j.NUMBER_UNARY_OPERATORS = j.BOOLEAN_UNARY_OPERATORS = j.BINARY_OPERATORS = j.NUMBER_BINARY_OPERATORS = j.BOOLEAN_BINARY_OPERATORS = j.COMPARISON_BINARY_OPERATORS = j.EQUALITY_BINARY_OPERATORS = j.BOOLEAN_NUMBER_BINARY_OPERATORS = j.UPDATE_OPERATORS = j.LOGICAL_OPERATORS = j.COMMENT_KEYS = j.FOR_INIT_KEYS = j.FLATTENABLE_KEYS = j.STATEMENT_OR_BLOCK_KEYS = void 0;
      var eS = Bf(), Of = tS(eS);
      function tS(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(tS, "_interopRequireDefault");
      var Cq = j.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"], Bq = j.FLATTENABLE_KEYS = ["body", "expressions"], Oq = j.FOR_INIT_KEYS = ["left", "init"], bq = j.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"], Nq = j.LOGICAL_OPERATORS = ["||", "&&"], Iq = j.UPDATE_OPERATORS = ["++", "--"], rS = j.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="], nS = j.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="], iS = j.COMPARISON_BINARY_OPERATORS = [].concat(nS, ["in", "instanceof"]), sS = j.BOOLEAN_BINARY_OPERATORS = [].concat(iS, rS), uS = j.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"], _q = j.BINARY_OPERATORS = ["+"].concat(uS, sS), aS = j.BOOLEAN_UNARY_OPERATORS = ["delete", "!"], oS = j.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"], lS = j.STRING_UNARY_OPERATORS = ["typeof"], Rq = j.UNARY_OPERATORS = ["void"].concat(aS, oS, lS), Pq = j.INHERIT_KEYS = { optional: ["typeAnnotation", "typeParameters", "returnType"], force: ["start", "loc", "end"] }, Lq = j.BLOCK_SCOPED_SYMBOL = (0, Of.default)("var used to be block scoped"), wq = j.NOT_LOCAL_BINDING = (0, Of.default)("should not be considered a local binding");
    });
    var Nf = c(() => {
      var bf = $r();
      bf(bf.S, "Object", { create: rs() });
    });
    var _f = c((Gq, If) => {
      Nf();
      var cS = Ve().Object;
      If.exports = i(function(t, r) {
        return cS.create(t, r);
      }, "create");
    });
    var Pf = c((Uq, Rf) => {
      Rf.exports = { default: _f(), __esModule: true };
    });
    var Fa = c((As) => {
      "use strict";
      As.__esModule = true;
      var pS = Pf(), fS = mS(pS);
      As.getBindingIdentifiers = Sa;
      As.getOuterBindingIdentifiers = DS;
      var ES = It(), Qr = dS(ES);
      function dS(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(dS, "_interopRequireWildcard");
      function mS(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(mS, "_interopRequireDefault");
      function Sa(e, t, r) {
        for (var n = [].concat(e), s = (0, fS.default)(null); n.length; ) {
          var u = n.shift();
          if (!!u) {
            var a = Qr.getBindingIdentifiers.keys[u.type];
            if (Qr.isIdentifier(u)) {
              if (t) {
                var l = s[u.name] = s[u.name] || [];
                l.push(u);
              } else
                s[u.name] = u;
              continue;
            }
            if (Qr.isExportDeclaration(u)) {
              Qr.isDeclaration(u.declaration) && n.push(u.declaration);
              continue;
            }
            if (r) {
              if (Qr.isFunctionDeclaration(u)) {
                n.push(u.id);
                continue;
              }
              if (Qr.isFunctionExpression(u))
                continue;
            }
            if (a)
              for (var p = 0; p < a.length; p++) {
                var f = a[p];
                u[f] && (n = n.concat(u[f]));
              }
          }
        }
        return s;
      }
      i(Sa, "getBindingIdentifiers");
      Sa.keys = { DeclareClass: ["id"], DeclareFunction: ["id"], DeclareModule: ["id"], DeclareVariable: ["id"], InterfaceDeclaration: ["id"], TypeAlias: ["id"], OpaqueType: ["id"], CatchClause: ["param"], LabeledStatement: ["label"], UnaryExpression: ["argument"], AssignmentExpression: ["left"], ImportSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportDefaultSpecifier: ["local"], ImportDeclaration: ["specifiers"], ExportSpecifier: ["exported"], ExportNamespaceSpecifier: ["exported"], ExportDefaultSpecifier: ["exported"], FunctionDeclaration: ["id", "params"], FunctionExpression: ["id", "params"], ClassDeclaration: ["id"], ClassExpression: ["id"], RestElement: ["argument"], UpdateExpression: ["argument"], RestProperty: ["argument"], ObjectProperty: ["value"], AssignmentPattern: ["left"], ArrayPattern: ["elements"], ObjectPattern: ["properties"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id"] };
      function DS(e, t) {
        return Sa(e, t, true);
      }
      i(DS, "getOuterBindingIdentifiers");
    });
    var wf = c((jq, Lf) => {
      Ta();
      ya();
      Lf.exports = Wi().f("iterator");
    });
    var kf = c((Vq, qf) => {
      qf.exports = { default: wf(), __esModule: true };
    });
    var Mf = c(() => {
    });
    var Gf = c(() => {
      Hi()("asyncIterator");
    });
    var Uf = c(() => {
      Hi()("observable");
    });
    var jf = c((Qq, Yf) => {
      ls();
      Mf();
      Gf();
      Uf();
      Yf.exports = Ve().Symbol;
    });
    var Kf = c((zq, Vf) => {
      Vf.exports = { default: jf(), __esModule: true };
    });
    var Oa = c((Ba) => {
      "use strict";
      Ba.__esModule = true;
      var AS = kf(), Wf = Hf(AS), hS = Kf(), rr = Hf(hS), Ca = typeof rr.default == "function" && typeof Wf.default == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof rr.default == "function" && e.constructor === rr.default && e !== rr.default.prototype ? "symbol" : typeof e;
      };
      function Hf(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Hf, "_interopRequireDefault");
      Ba.default = typeof rr.default == "function" && Ca(Wf.default) === "symbol" ? function(e) {
        return typeof e > "u" ? "undefined" : Ca(e);
      } : function(e) {
        return e && typeof rr.default == "function" && e.constructor === rr.default && e !== rr.default.prototype ? "symbol" : typeof e > "u" ? "undefined" : Ca(e);
      };
    });
    var $f = c((e5, Xf) => {
      (function() {
        "use strict";
        function e(a) {
          if (a == null)
            return false;
          switch (a.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return true;
          }
          return false;
        }
        i(e, "isExpression");
        function t(a) {
          if (a == null)
            return false;
          switch (a.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return true;
          }
          return false;
        }
        i(t, "isIterationStatement");
        function r(a) {
          if (a == null)
            return false;
          switch (a.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement":
              return true;
          }
          return false;
        }
        i(r, "isStatement");
        function n(a) {
          return r(a) || a != null && a.type === "FunctionDeclaration";
        }
        i(n, "isSourceElement");
        function s(a) {
          switch (a.type) {
            case "IfStatement":
              return a.alternate != null ? a.alternate : a.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return a.body;
          }
          return null;
        }
        i(s, "trailingStatement");
        function u(a) {
          var l;
          if (a.type !== "IfStatement" || a.alternate == null)
            return false;
          l = a.consequent;
          do {
            if (l.type === "IfStatement" && l.alternate == null)
              return true;
            l = s(l);
          } while (l);
          return false;
        }
        i(u, "isProblematicIfStatement"), Xf.exports = { isExpression: e, isStatement: r, isIterationStatement: t, isSourceElement: n, isProblematicIfStatement: u, trailingStatement: s };
      })();
    });
    var ba = c((t5, Jf) => {
      (function() {
        "use strict";
        var e, t, r, n, s, u;
        t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, e = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
        function a(g) {
          return 48 <= g && g <= 57;
        }
        i(a, "isDecimalDigit");
        function l(g) {
          return 48 <= g && g <= 57 || 97 <= g && g <= 102 || 65 <= g && g <= 70;
        }
        i(l, "isHexDigit");
        function p(g) {
          return g >= 48 && g <= 55;
        }
        i(p, "isOctalDigit"), r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
        function f(g) {
          return g === 32 || g === 9 || g === 11 || g === 12 || g === 160 || g >= 5760 && r.indexOf(g) >= 0;
        }
        i(f, "isWhiteSpace");
        function m(g) {
          return g === 10 || g === 13 || g === 8232 || g === 8233;
        }
        i(m, "isLineTerminator");
        function h(g) {
          if (g <= 65535)
            return String.fromCharCode(g);
          var U = String.fromCharCode(Math.floor((g - 65536) / 1024) + 55296), X = String.fromCharCode((g - 65536) % 1024 + 56320);
          return U + X;
        }
        for (i(h, "fromCodePoint"), n = new Array(128), u = 0; u < 128; ++u)
          n[u] = u >= 97 && u <= 122 || u >= 65 && u <= 90 || u === 36 || u === 95;
        for (s = new Array(128), u = 0; u < 128; ++u)
          s[u] = u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57 || u === 36 || u === 95;
        function E(g) {
          return g < 128 ? n[g] : t.NonAsciiIdentifierStart.test(h(g));
        }
        i(E, "isIdentifierStartES5");
        function x(g) {
          return g < 128 ? s[g] : t.NonAsciiIdentifierPart.test(h(g));
        }
        i(x, "isIdentifierPartES5");
        function F(g) {
          return g < 128 ? n[g] : e.NonAsciiIdentifierStart.test(h(g));
        }
        i(F, "isIdentifierStartES6");
        function O(g) {
          return g < 128 ? s[g] : e.NonAsciiIdentifierPart.test(h(g));
        }
        i(O, "isIdentifierPartES6"), Jf.exports = { isDecimalDigit: a, isHexDigit: l, isOctalDigit: p, isWhiteSpace: f, isLineTerminator: m, isIdentifierStartES5: E, isIdentifierPartES5: x, isIdentifierStartES6: F, isIdentifierPartES6: O };
      })();
    });
    var zf = c((r5, Qf) => {
      (function() {
        "use strict";
        var e = ba();
        function t(E) {
          switch (E) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return true;
            default:
              return false;
          }
        }
        i(t, "isStrictModeReservedWordES6");
        function r(E, x) {
          return !x && E === "yield" ? false : n(E, x);
        }
        i(r, "isKeywordES5");
        function n(E, x) {
          if (x && t(E))
            return true;
          switch (E.length) {
            case 2:
              return E === "if" || E === "in" || E === "do";
            case 3:
              return E === "var" || E === "for" || E === "new" || E === "try";
            case 4:
              return E === "this" || E === "else" || E === "case" || E === "void" || E === "with" || E === "enum";
            case 5:
              return E === "while" || E === "break" || E === "catch" || E === "throw" || E === "const" || E === "yield" || E === "class" || E === "super";
            case 6:
              return E === "return" || E === "typeof" || E === "delete" || E === "switch" || E === "export" || E === "import";
            case 7:
              return E === "default" || E === "finally" || E === "extends";
            case 8:
              return E === "function" || E === "continue" || E === "debugger";
            case 10:
              return E === "instanceof";
            default:
              return false;
          }
        }
        i(n, "isKeywordES6");
        function s(E, x) {
          return E === "null" || E === "true" || E === "false" || r(E, x);
        }
        i(s, "isReservedWordES5");
        function u(E, x) {
          return E === "null" || E === "true" || E === "false" || n(E, x);
        }
        i(u, "isReservedWordES6");
        function a(E) {
          return E === "eval" || E === "arguments";
        }
        i(a, "isRestrictedWord");
        function l(E) {
          var x, F, O;
          if (E.length === 0 || (O = E.charCodeAt(0), !e.isIdentifierStartES5(O)))
            return false;
          for (x = 1, F = E.length; x < F; ++x)
            if (O = E.charCodeAt(x), !e.isIdentifierPartES5(O))
              return false;
          return true;
        }
        i(l, "isIdentifierNameES5");
        function p(E, x) {
          return (E - 55296) * 1024 + (x - 56320) + 65536;
        }
        i(p, "decodeUtf16");
        function f(E) {
          var x, F, O, g, U;
          if (E.length === 0)
            return false;
          for (U = e.isIdentifierStartES6, x = 0, F = E.length; x < F; ++x) {
            if (O = E.charCodeAt(x), 55296 <= O && O <= 56319) {
              if (++x, x >= F || (g = E.charCodeAt(x), !(56320 <= g && g <= 57343)))
                return false;
              O = p(O, g);
            }
            if (!U(O))
              return false;
            U = e.isIdentifierPartES6;
          }
          return true;
        }
        i(f, "isIdentifierNameES6");
        function m(E, x) {
          return l(E) && !s(E, x);
        }
        i(m, "isIdentifierES5");
        function h(E, x) {
          return f(E) && !u(E, x);
        }
        i(h, "isIdentifierES6"), Qf.exports = { isKeywordES5: r, isKeywordES6: n, isReservedWordES5: s, isReservedWordES6: u, isRestrictedWord: a, isIdentifierNameES5: l, isIdentifierNameES6: f, isIdentifierES5: m, isIdentifierES6: h };
      })();
    });
    var Zf = c((hs) => {
      (function() {
        "use strict";
        hs.ast = $f(), hs.code = ba(), hs.keyword = zf();
      })();
    });
    var n0 = c(($e) => {
      "use strict";
      $e.__esModule = true;
      var yS = va(), TS = Ts(yS), xS = Oa(), ys = Ts(xS), gS = Hn(), t0 = Ts(gS);
      $e.isBinding = BS;
      $e.isReferenced = OS;
      $e.isValidIdentifier = bS;
      $e.isLet = NS;
      $e.isBlockScoped = IS;
      $e.isVar = _S;
      $e.isSpecifierDefault = RS;
      $e.isScope = PS;
      $e.isImmutable = LS;
      $e.isNodesEquivalent = Na;
      var vS = Fa(), SS = Zf(), e0 = Ts(SS), FS = It(), Ke = CS(FS), r0 = Ds();
      function CS(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(CS, "_interopRequireWildcard");
      function Ts(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Ts, "_interopRequireDefault");
      function BS(e, t) {
        var r = vS.getBindingIdentifiers.keys[t.type];
        if (r)
          for (var n = 0; n < r.length; n++) {
            var s = r[n], u = t[s];
            if (Array.isArray(u)) {
              if (u.indexOf(e) >= 0)
                return true;
            } else if (u === e)
              return true;
          }
        return false;
      }
      i(BS, "isBinding");
      function OS(e, t) {
        switch (t.type) {
          case "BindExpression":
            return t.object === e || t.callee === e;
          case "MemberExpression":
          case "JSXMemberExpression":
            return t.property === e && t.computed ? true : t.object === e;
          case "MetaProperty":
            return false;
          case "ObjectProperty":
            if (t.key === e)
              return t.computed;
          case "VariableDeclarator":
            return t.id !== e;
          case "ArrowFunctionExpression":
          case "FunctionDeclaration":
          case "FunctionExpression":
            for (var s = t.params, r = Array.isArray(s), n = 0, s = r ? s : (0, t0.default)(s); ; ) {
              var u;
              if (r) {
                if (n >= s.length)
                  break;
                u = s[n++];
              } else {
                if (n = s.next(), n.done)
                  break;
                u = n.value;
              }
              var a = u;
              if (a === e)
                return false;
            }
            return t.id !== e;
          case "ExportSpecifier":
            return t.source ? false : t.local === e;
          case "ExportNamespaceSpecifier":
          case "ExportDefaultSpecifier":
            return false;
          case "JSXAttribute":
            return t.name !== e;
          case "ClassProperty":
            return t.key === e ? t.computed : t.value === e;
          case "ImportDefaultSpecifier":
          case "ImportNamespaceSpecifier":
          case "ImportSpecifier":
            return false;
          case "ClassDeclaration":
          case "ClassExpression":
            return t.id !== e;
          case "ClassMethod":
          case "ObjectMethod":
            return t.key === e && t.computed;
          case "LabeledStatement":
            return false;
          case "CatchClause":
            return t.param !== e;
          case "RestElement":
            return false;
          case "AssignmentExpression":
            return t.right === e;
          case "AssignmentPattern":
            return t.right === e;
          case "ObjectPattern":
          case "ArrayPattern":
            return false;
        }
        return true;
      }
      i(OS, "isReferenced");
      function bS(e) {
        return typeof e != "string" || e0.default.keyword.isReservedWordES6(e, true) || e === "await" ? false : e0.default.keyword.isIdentifierNameES6(e);
      }
      i(bS, "isValidIdentifier");
      function NS(e) {
        return Ke.isVariableDeclaration(e) && (e.kind !== "var" || e[r0.BLOCK_SCOPED_SYMBOL]);
      }
      i(NS, "isLet");
      function IS(e) {
        return Ke.isFunctionDeclaration(e) || Ke.isClassDeclaration(e) || Ke.isLet(e);
      }
      i(IS, "isBlockScoped");
      function _S(e) {
        return Ke.isVariableDeclaration(e, { kind: "var" }) && !e[r0.BLOCK_SCOPED_SYMBOL];
      }
      i(_S, "isVar");
      function RS(e) {
        return Ke.isImportDefaultSpecifier(e) || Ke.isIdentifier(e.imported || e.exported, { name: "default" });
      }
      i(RS, "isSpecifierDefault");
      function PS(e, t) {
        return Ke.isBlockStatement(e) && Ke.isFunction(t, { body: e }) ? false : Ke.isScopable(e);
      }
      i(PS, "isScope");
      function LS(e) {
        return Ke.isType(e.type, "Immutable") ? true : Ke.isIdentifier(e) ? e.name === "undefined" : false;
      }
      i(LS, "isImmutable");
      function Na(e, t) {
        if ((typeof e > "u" ? "undefined" : (0, ys.default)(e)) !== "object" || (typeof e > "u" ? "undefined" : (0, ys.default)(e)) !== "object" || e == null || t == null)
          return e === t;
        if (e.type !== t.type)
          return false;
        for (var r = (0, TS.default)(Ke.NODE_FIELDS[e.type] || e.type), u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, t0.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var l = a;
          if ((0, ys.default)(e[l]) !== (0, ys.default)(t[l]))
            return false;
          if (Array.isArray(e[l])) {
            if (!Array.isArray(t[l]) || e[l].length !== t[l].length)
              return false;
            for (var p = 0; p < e[l].length; p++)
              if (!Na(e[l][p], t[l][p]))
                return false;
            continue;
          }
          if (!Na(e[l], t[l]))
            return false;
        }
        return true;
      }
      i(Na, "isNodesEquivalent");
    });
    var s0 = c(() => {
      var i0 = $r();
      i0(i0.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    });
    var a0 = c((a5, u0) => {
      s0();
      u0.exports = 9007199254740991;
    });
    var l0 = c((o5, o0) => {
      o0.exports = { default: a0(), __esModule: true };
    });
    var Ia = c((l5, c0) => {
      var wS = typeof global == "object" && global && global.Object === Object && global;
      c0.exports = wS;
    });
    var et = c((c5, p0) => {
      var qS = Ia(), kS = typeof self == "object" && self && self.Object === Object && self, MS = qS || kS || Function("return this")();
      p0.exports = MS;
    });
    var zr = c((p5, f0) => {
      var GS = et(), US = GS.Symbol;
      f0.exports = US;
    });
    var D0 = c((f5, m0) => {
      var E0 = zr(), d0 = Object.prototype, YS = d0.hasOwnProperty, jS = d0.toString, Xn = E0 ? E0.toStringTag : void 0;
      function VS(e) {
        var t = YS.call(e, Xn), r = e[Xn];
        try {
          e[Xn] = void 0;
          var n = true;
        } catch {
        }
        var s = jS.call(e);
        return n && (t ? e[Xn] = r : delete e[Xn]), s;
      }
      i(VS, "getRawTag");
      m0.exports = VS;
    });
    var h0 = c((E5, A0) => {
      var KS = Object.prototype, WS = KS.toString;
      function HS(e) {
        return WS.call(e);
      }
      i(HS, "objectToString");
      A0.exports = HS;
    });
    var nr = c((d5, x0) => {
      var y0 = zr(), XS = D0(), $S = h0(), JS = "[object Null]", QS = "[object Undefined]", T0 = y0 ? y0.toStringTag : void 0;
      function zS(e) {
        return e == null ? e === void 0 ? QS : JS : T0 && T0 in Object(e) ? XS(e) : $S(e);
      }
      i(zS, "baseGetTag");
      x0.exports = zS;
    });
    var _a = c((m5, g0) => {
      function ZS(e, t) {
        return function(r) {
          return e(t(r));
        };
      }
      i(ZS, "overArg");
      g0.exports = ZS;
    });
    var xs = c((D5, v0) => {
      var eF = _a(), tF = eF(Object.getPrototypeOf, Object);
      v0.exports = tF;
    });
    var ft = c((A5, S0) => {
      function rF(e) {
        return e != null && typeof e == "object";
      }
      i(rF, "isObjectLike");
      S0.exports = rF;
    });
    var B0 = c((h5, C0) => {
      var nF = nr(), iF = xs(), sF = ft(), uF = "[object Object]", aF = Function.prototype, oF = Object.prototype, F0 = aF.toString, lF = oF.hasOwnProperty, cF = F0.call(Object);
      function pF(e) {
        if (!sF(e) || nF(e) != uF)
          return false;
        var t = iF(e);
        if (t === null)
          return true;
        var r = lF.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && F0.call(r) == cF;
      }
      i(pF, "isPlainObject");
      C0.exports = pF;
    });
    var b0 = c((y5, O0) => {
      var fF = nr(), EF = ft(), dF = "[object RegExp]";
      function mF(e) {
        return EF(e) && fF(e) == dF;
      }
      i(mF, "baseIsRegExp");
      O0.exports = mF;
    });
    var $n = c((T5, N0) => {
      function DF(e) {
        return function(t) {
          return e(t);
        };
      }
      i(DF, "baseUnary");
      N0.exports = DF;
    });
    var zn = c((Jn, Zr) => {
      var AF = Ia(), I0 = typeof Jn == "object" && Jn && !Jn.nodeType && Jn, Qn = I0 && typeof Zr == "object" && Zr && !Zr.nodeType && Zr, hF = Qn && Qn.exports === I0, Ra = hF && AF.process, yF = function() {
        try {
          var e = Qn && Qn.require && Qn.require("util").types;
          return e || Ra && Ra.binding && Ra.binding("util");
        } catch {
        }
      }();
      Zr.exports = yF;
    });
    var L0 = c((x5, P0) => {
      var TF = b0(), xF = $n(), _0 = zn(), R0 = _0 && _0.isRegExp, gF = R0 ? xF(R0) : TF;
      P0.exports = gF;
    });
    var k0 = c((tt) => {
      "use strict";
      tt.__esModule = true;
      var vF = l0(), SF = Zn(vF), FF = ms(), w0 = Zn(FF), CF = Hn(), Pa = Zn(CF);
      tt.toComputedKey = RF;
      tt.toSequenceExpression = PF;
      tt.toKeyAlias = Cr;
      tt.toIdentifier = q0;
      tt.toBindingIdentifierName = LF;
      tt.toStatement = wF;
      tt.toExpression = qF;
      tt.toBlock = kF;
      tt.valueToNode = MF;
      var BF = B0(), OF = Zn(BF), bF = L0(), NF = Zn(bF), IF = It(), M = _F(IF);
      function _F(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(_F, "_interopRequireWildcard");
      function Zn(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Zn, "_interopRequireDefault");
      function RF(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.key || e.property;
        return e.computed || M.isIdentifier(t) && (t = M.stringLiteral(t.name)), t;
      }
      i(RF, "toComputedKey");
      function gs(e, t, r) {
        for (var n = [], s = true, l = e, u = Array.isArray(l), a = 0, l = u ? l : (0, Pa.default)(l); ; ) {
          var p;
          if (u) {
            if (a >= l.length)
              break;
            p = l[a++];
          } else {
            if (a = l.next(), a.done)
              break;
            p = a.value;
          }
          var f = p;
          if (s = false, M.isExpression(f))
            n.push(f);
          else if (M.isExpressionStatement(f))
            n.push(f.expression);
          else if (M.isVariableDeclaration(f)) {
            if (f.kind !== "var")
              return;
            for (var E = f.declarations, m = Array.isArray(E), h = 0, E = m ? E : (0, Pa.default)(E); ; ) {
              var x;
              if (m) {
                if (h >= E.length)
                  break;
                x = E[h++];
              } else {
                if (h = E.next(), h.done)
                  break;
                x = h.value;
              }
              var F = x, O = M.getBindingIdentifiers(F);
              for (var g in O)
                r.push({ kind: f.kind, id: O[g] });
              F.init && n.push(M.assignmentExpression("=", F.id, F.init));
            }
            s = true;
          } else if (M.isIfStatement(f)) {
            var U = f.consequent ? gs([f.consequent], t, r) : t.buildUndefinedNode(), X = f.alternate ? gs([f.alternate], t, r) : t.buildUndefinedNode();
            if (!U || !X)
              return;
            n.push(M.conditionalExpression(f.test, U, X));
          } else if (M.isBlockStatement(f)) {
            var z = gs(f.body, t, r);
            if (!z)
              return;
            n.push(z);
          } else if (M.isEmptyStatement(f))
            s = true;
          else
            return;
        }
        return s && n.push(t.buildUndefinedNode()), n.length === 1 ? n[0] : M.sequenceExpression(n);
      }
      i(gs, "gatherSequenceExpressions");
      function PF(e, t) {
        if (!(!e || !e.length)) {
          var r = [], n = gs(e, t, r);
          if (!!n) {
            for (var a = r, s = Array.isArray(a), u = 0, a = s ? a : (0, Pa.default)(a); ; ) {
              var l;
              if (s) {
                if (u >= a.length)
                  break;
                l = a[u++];
              } else {
                if (u = a.next(), u.done)
                  break;
                l = u.value;
              }
              var p = l;
              t.push(p);
            }
            return n;
          }
        }
      }
      i(PF, "toSequenceExpression");
      function Cr(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.key, r = void 0;
        return e.kind === "method" ? Cr.increment() + "" : (M.isIdentifier(t) ? r = t.name : M.isStringLiteral(t) ? r = (0, w0.default)(t.value) : r = (0, w0.default)(M.removePropertiesDeep(M.cloneDeep(t))), e.computed && (r = "[" + r + "]"), e.static && (r = "static:" + r), r);
      }
      i(Cr, "toKeyAlias");
      Cr.uid = 0;
      Cr.increment = function() {
        return Cr.uid >= SF.default ? Cr.uid = 0 : Cr.uid++;
      };
      function q0(e) {
        return e = e + "", e = e.replace(/[^a-zA-Z0-9$_]/g, "-"), e = e.replace(/^[-0-9]+/, ""), e = e.replace(/[-\s]+(.)?/g, function(t, r) {
          return r ? r.toUpperCase() : "";
        }), M.isValidIdentifier(e) || (e = "_" + e), e || "_";
      }
      i(q0, "toIdentifier");
      function LF(e) {
        return e = q0(e), (e === "eval" || e === "arguments") && (e = "_" + e), e;
      }
      i(LF, "toBindingIdentifierName");
      function wF(e, t) {
        if (M.isStatement(e))
          return e;
        var r = false, n = void 0;
        if (M.isClass(e))
          r = true, n = "ClassDeclaration";
        else if (M.isFunction(e))
          r = true, n = "FunctionDeclaration";
        else if (M.isAssignmentExpression(e))
          return M.expressionStatement(e);
        if (r && !e.id && (n = false), !n) {
          if (t)
            return false;
          throw new Error("cannot turn " + e.type + " to a statement");
        }
        return e.type = n, e;
      }
      i(wF, "toStatement");
      function qF(e) {
        if (M.isExpressionStatement(e) && (e = e.expression), M.isExpression(e))
          return e;
        if (M.isClass(e) ? e.type = "ClassExpression" : M.isFunction(e) && (e.type = "FunctionExpression"), !M.isExpression(e))
          throw new Error("cannot turn " + e.type + " to an expression");
        return e;
      }
      i(qF, "toExpression");
      function kF(e, t) {
        return M.isBlockStatement(e) ? e : (M.isEmptyStatement(e) && (e = []), Array.isArray(e) || (M.isStatement(e) || (M.isFunction(t) ? e = M.returnStatement(e) : e = M.expressionStatement(e)), e = [e]), M.blockStatement(e));
      }
      i(kF, "toBlock");
      function MF(e) {
        if (e === void 0)
          return M.identifier("undefined");
        if (e === true || e === false)
          return M.booleanLiteral(e);
        if (e === null)
          return M.nullLiteral();
        if (typeof e == "string")
          return M.stringLiteral(e);
        if (typeof e == "number")
          return M.numericLiteral(e);
        if ((0, NF.default)(e)) {
          var t = e.source, r = e.toString().match(/\/([a-z]+|)$/)[1];
          return M.regExpLiteral(t, r);
        }
        if (Array.isArray(e))
          return M.arrayExpression(e.map(M.valueToNode));
        if ((0, OF.default)(e)) {
          var n = [];
          for (var s in e) {
            var u = void 0;
            M.isValidIdentifier(s) ? u = M.identifier(s) : u = M.stringLiteral(s), n.push(M.objectProperty(u, M.valueToNode(e[s])));
          }
          return M.objectExpression(n);
        }
        throw new Error("don't know how to turn this value into a node");
      }
      i(MF, "valueToNode");
    });
    var M0 = c((ei) => {
      "use strict";
      ei.__esModule = true;
      ei.createUnionTypeAnnotation = YF;
      ei.removeTypeDuplicates = La;
      ei.createTypeAnnotationBasedOnTypeof = jF;
      var GF = It(), we = UF(GF);
      function UF(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(UF, "_interopRequireWildcard");
      function YF(e) {
        var t = La(e);
        return t.length === 1 ? t[0] : we.unionTypeAnnotation(t);
      }
      i(YF, "createUnionTypeAnnotation");
      function La(e) {
        for (var t = {}, r = {}, n = [], s = [], u = 0; u < e.length; u++) {
          var a = e[u];
          if (!!a && !(s.indexOf(a) >= 0)) {
            if (we.isAnyTypeAnnotation(a))
              return [a];
            if (we.isFlowBaseAnnotation(a)) {
              r[a.type] = a;
              continue;
            }
            if (we.isUnionTypeAnnotation(a)) {
              n.indexOf(a.types) < 0 && (e = e.concat(a.types), n.push(a.types));
              continue;
            }
            if (we.isGenericTypeAnnotation(a)) {
              var l = a.id.name;
              if (t[l]) {
                var p = t[l];
                p.typeParameters ? a.typeParameters && (p.typeParameters.params = La(p.typeParameters.params.concat(a.typeParameters.params))) : p = a.typeParameters;
              } else
                t[l] = a;
              continue;
            }
            s.push(a);
          }
        }
        for (var f in r)
          s.push(r[f]);
        for (var m in t)
          s.push(t[m]);
        return s;
      }
      i(La, "removeTypeDuplicates");
      function jF(e) {
        if (e === "string")
          return we.stringTypeAnnotation();
        if (e === "number")
          return we.numberTypeAnnotation();
        if (e === "undefined")
          return we.voidTypeAnnotation();
        if (e === "boolean")
          return we.booleanTypeAnnotation();
        if (e === "function")
          return we.genericTypeAnnotation(we.identifier("Function"));
        if (e === "object")
          return we.genericTypeAnnotation(we.identifier("Object"));
        if (e === "symbol")
          return we.genericTypeAnnotation(we.identifier("Symbol"));
        throw new Error("Invalid typeof value");
      }
      i(jF, "createTypeAnnotationBasedOnTypeof");
    });
    var G0 = c((exports, module) => {
      "use strict";
      module.exports = i(function toFastproperties(o) {
        function Sub() {
        }
        i(Sub, "Sub"), Sub.prototype = o;
        var receiver = new Sub();
        function ic() {
          return typeof receiver.foo;
        }
        return i(ic, "ic"), ic(), ic(), o;
        eval("o" + o);
      }, "toFastproperties");
    });
    var Y0 = c((S5, U0) => {
      function VF() {
        this.__data__ = [], this.size = 0;
      }
      i(VF, "listCacheClear");
      U0.exports = VF;
    });
    var vs = c((F5, j0) => {
      function KF(e, t) {
        return e === t || e !== e && t !== t;
      }
      i(KF, "eq");
      j0.exports = KF;
    });
    var ti = c((C5, V0) => {
      var WF = vs();
      function HF(e, t) {
        for (var r = e.length; r--; )
          if (WF(e[r][0], t))
            return r;
        return -1;
      }
      i(HF, "assocIndexOf");
      V0.exports = HF;
    });
    var W0 = c((B5, K0) => {
      var XF = ti(), $F = Array.prototype, JF = $F.splice;
      function QF(e) {
        var t = this.__data__, r = XF(t, e);
        if (r < 0)
          return false;
        var n = t.length - 1;
        return r == n ? t.pop() : JF.call(t, r, 1), --this.size, true;
      }
      i(QF, "listCacheDelete");
      K0.exports = QF;
    });
    var X0 = c((O5, H0) => {
      var zF = ti();
      function ZF(e) {
        var t = this.__data__, r = zF(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      i(ZF, "listCacheGet");
      H0.exports = ZF;
    });
    var J0 = c((b5, $0) => {
      var eC = ti();
      function tC(e) {
        return eC(this.__data__, e) > -1;
      }
      i(tC, "listCacheHas");
      $0.exports = tC;
    });
    var z0 = c((N5, Q0) => {
      var rC = ti();
      function nC(e, t) {
        var r = this.__data__, n = rC(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
      }
      i(nC, "listCacheSet");
      Q0.exports = nC;
    });
    var ri = c((I5, Z0) => {
      var iC = Y0(), sC = W0(), uC = X0(), aC = J0(), oC = z0();
      function en(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(en, "ListCache");
      en.prototype.clear = iC;
      en.prototype.delete = sC;
      en.prototype.get = uC;
      en.prototype.has = aC;
      en.prototype.set = oC;
      Z0.exports = en;
    });
    var tE = c((_5, eE) => {
      var lC = ri();
      function cC() {
        this.__data__ = new lC(), this.size = 0;
      }
      i(cC, "stackClear");
      eE.exports = cC;
    });
    var nE = c((R5, rE) => {
      function pC(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      i(pC, "stackDelete");
      rE.exports = pC;
    });
    var sE = c((P5, iE) => {
      function fC(e) {
        return this.__data__.get(e);
      }
      i(fC, "stackGet");
      iE.exports = fC;
    });
    var aE = c((L5, uE) => {
      function EC(e) {
        return this.__data__.has(e);
      }
      i(EC, "stackHas");
      uE.exports = EC;
    });
    var Br = c((w5, oE) => {
      function dC(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      i(dC, "isObject");
      oE.exports = dC;
    });
    var wa = c((q5, lE) => {
      var mC = nr(), DC = Br(), AC = "[object AsyncFunction]", hC = "[object Function]", yC = "[object GeneratorFunction]", TC = "[object Proxy]";
      function xC(e) {
        if (!DC(e))
          return false;
        var t = mC(e);
        return t == hC || t == yC || t == AC || t == TC;
      }
      i(xC, "isFunction");
      lE.exports = xC;
    });
    var pE = c((k5, cE) => {
      var gC = et(), vC = gC["__core-js_shared__"];
      cE.exports = vC;
    });
    var dE = c((M5, EE) => {
      var qa = pE(), fE = function() {
        var e = /[^.]+$/.exec(qa && qa.keys && qa.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function SC(e) {
        return !!fE && fE in e;
      }
      i(SC, "isMasked");
      EE.exports = SC;
    });
    var ka = c((G5, mE) => {
      var FC = Function.prototype, CC = FC.toString;
      function BC(e) {
        if (e != null) {
          try {
            return CC.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      i(BC, "toSource");
      mE.exports = BC;
    });
    var AE = c((U5, DE) => {
      var OC = wa(), bC = dE(), NC = Br(), IC = ka(), _C = /[\\^$.*+?()[\]{}|]/g, RC = /^\[object .+?Constructor\]$/, PC = Function.prototype, LC = Object.prototype, wC = PC.toString, qC = LC.hasOwnProperty, kC = RegExp("^" + wC.call(qC).replace(_C, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function MC(e) {
        if (!NC(e) || bC(e))
          return false;
        var t = OC(e) ? kC : RC;
        return t.test(IC(e));
      }
      i(MC, "baseIsNative");
      DE.exports = MC;
    });
    var yE = c((Y5, hE) => {
      function GC(e, t) {
        return e?.[t];
      }
      i(GC, "getValue");
      hE.exports = GC;
    });
    var ir = c((j5, TE) => {
      var UC = AE(), YC = yE();
      function jC(e, t) {
        var r = YC(e, t);
        return UC(r) ? r : void 0;
      }
      i(jC, "getNative");
      TE.exports = jC;
    });
    var Ss = c((V5, xE) => {
      var VC = ir(), KC = et(), WC = VC(KC, "Map");
      xE.exports = WC;
    });
    var ni = c((K5, gE) => {
      var HC = ir(), XC = HC(Object, "create");
      gE.exports = XC;
    });
    var FE = c((W5, SE) => {
      var vE = ni();
      function $C() {
        this.__data__ = vE ? vE(null) : {}, this.size = 0;
      }
      i($C, "hashClear");
      SE.exports = $C;
    });
    var BE = c((H5, CE) => {
      function JC(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      i(JC, "hashDelete");
      CE.exports = JC;
    });
    var bE = c((X5, OE) => {
      var QC = ni(), zC = "__lodash_hash_undefined__", ZC = Object.prototype, eB = ZC.hasOwnProperty;
      function tB(e) {
        var t = this.__data__;
        if (QC) {
          var r = t[e];
          return r === zC ? void 0 : r;
        }
        return eB.call(t, e) ? t[e] : void 0;
      }
      i(tB, "hashGet");
      OE.exports = tB;
    });
    var IE = c(($5, NE) => {
      var rB = ni(), nB = Object.prototype, iB = nB.hasOwnProperty;
      function sB(e) {
        var t = this.__data__;
        return rB ? t[e] !== void 0 : iB.call(t, e);
      }
      i(sB, "hashHas");
      NE.exports = sB;
    });
    var RE = c((J5, _E) => {
      var uB = ni(), aB = "__lodash_hash_undefined__";
      function oB(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = uB && t === void 0 ? aB : t, this;
      }
      i(oB, "hashSet");
      _E.exports = oB;
    });
    var LE = c((Q5, PE) => {
      var lB = FE(), cB = BE(), pB = bE(), fB = IE(), EB = RE();
      function tn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(tn, "Hash");
      tn.prototype.clear = lB;
      tn.prototype.delete = cB;
      tn.prototype.get = pB;
      tn.prototype.has = fB;
      tn.prototype.set = EB;
      PE.exports = tn;
    });
    var kE = c((z5, qE) => {
      var wE = LE(), dB = ri(), mB = Ss();
      function DB() {
        this.size = 0, this.__data__ = { hash: new wE(), map: new (mB || dB)(), string: new wE() };
      }
      i(DB, "mapCacheClear");
      qE.exports = DB;
    });
    var GE = c((Z5, ME) => {
      function AB(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      i(AB, "isKeyable");
      ME.exports = AB;
    });
    var ii = c((ek, UE) => {
      var hB = GE();
      function yB(e, t) {
        var r = e.__data__;
        return hB(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      i(yB, "getMapData");
      UE.exports = yB;
    });
    var jE = c((tk, YE) => {
      var TB = ii();
      function xB(e) {
        var t = TB(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      i(xB, "mapCacheDelete");
      YE.exports = xB;
    });
    var KE = c((rk, VE) => {
      var gB = ii();
      function vB(e) {
        return gB(this, e).get(e);
      }
      i(vB, "mapCacheGet");
      VE.exports = vB;
    });
    var HE = c((nk, WE) => {
      var SB = ii();
      function FB(e) {
        return SB(this, e).has(e);
      }
      i(FB, "mapCacheHas");
      WE.exports = FB;
    });
    var $E = c((ik, XE) => {
      var CB = ii();
      function BB(e, t) {
        var r = CB(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
      }
      i(BB, "mapCacheSet");
      XE.exports = BB;
    });
    var Fs = c((sk, JE) => {
      var OB = kE(), bB = jE(), NB = KE(), IB = HE(), _B = $E();
      function rn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(rn, "MapCache");
      rn.prototype.clear = OB;
      rn.prototype.delete = bB;
      rn.prototype.get = NB;
      rn.prototype.has = IB;
      rn.prototype.set = _B;
      JE.exports = rn;
    });
    var zE = c((uk, QE) => {
      var RB = ri(), PB = Ss(), LB = Fs(), wB = 200;
      function qB(e, t) {
        var r = this.__data__;
        if (r instanceof RB) {
          var n = r.__data__;
          if (!PB || n.length < wB - 1)
            return n.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new LB(n);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      i(qB, "stackSet");
      QE.exports = qB;
    });
    var Cs = c((ak, ZE) => {
      var kB = ri(), MB = tE(), GB = nE(), UB = sE(), YB = aE(), jB = zE();
      function nn(e) {
        var t = this.__data__ = new kB(e);
        this.size = t.size;
      }
      i(nn, "Stack");
      nn.prototype.clear = MB;
      nn.prototype.delete = GB;
      nn.prototype.get = UB;
      nn.prototype.has = YB;
      nn.prototype.set = jB;
      ZE.exports = nn;
    });
    var td = c((ok, ed) => {
      function VB(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
          ;
        return e;
      }
      i(VB, "arrayEach");
      ed.exports = VB;
    });
    var nd = c((lk, rd) => {
      var KB = ir(), WB = function() {
        try {
          var e = KB(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }();
      rd.exports = WB;
    });
    var Ma = c((ck, sd) => {
      var id = nd();
      function HB(e, t, r) {
        t == "__proto__" && id ? id(e, t, { configurable: true, enumerable: true, value: r, writable: true }) : e[t] = r;
      }
      i(HB, "baseAssignValue");
      sd.exports = HB;
    });
    var Ga = c((pk, ud) => {
      var XB = Ma(), $B = vs(), JB = Object.prototype, QB = JB.hasOwnProperty;
      function zB(e, t, r) {
        var n = e[t];
        (!(QB.call(e, t) && $B(n, r)) || r === void 0 && !(t in e)) && XB(e, t, r);
      }
      i(zB, "assignValue");
      ud.exports = zB;
    });
    var si = c((fk, ad) => {
      var ZB = Ga(), eO = Ma();
      function tO(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var u = -1, a = t.length; ++u < a; ) {
          var l = t[u], p = n ? n(r[l], e[l], l, r, e) : void 0;
          p === void 0 && (p = e[l]), s ? eO(r, l, p) : ZB(r, l, p);
        }
        return r;
      }
      i(tO, "copyObject");
      ad.exports = tO;
    });
    var ld = c((Ek, od) => {
      function rO(e, t) {
        for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
        return n;
      }
      i(rO, "baseTimes");
      od.exports = rO;
    });
    var pd = c((dk, cd) => {
      var nO = nr(), iO = ft(), sO = "[object Arguments]";
      function uO(e) {
        return iO(e) && nO(e) == sO;
      }
      i(uO, "baseIsArguments");
      cd.exports = uO;
    });
    var Ua = c((mk, dd) => {
      var fd = pd(), aO = ft(), Ed = Object.prototype, oO = Ed.hasOwnProperty, lO = Ed.propertyIsEnumerable, cO = fd(function() {
        return arguments;
      }()) ? fd : function(e) {
        return aO(e) && oO.call(e, "callee") && !lO.call(e, "callee");
      };
      dd.exports = cO;
    });
    var rt = c((Dk, md) => {
      var pO = Array.isArray;
      md.exports = pO;
    });
    var Ad = c((Ak, Dd) => {
      function fO() {
        return false;
      }
      i(fO, "stubFalse");
      Dd.exports = fO;
    });
    var Bs = c((ui, sn) => {
      var EO = et(), dO = Ad(), Td = typeof ui == "object" && ui && !ui.nodeType && ui, hd = Td && typeof sn == "object" && sn && !sn.nodeType && sn, mO = hd && hd.exports === Td, yd = mO ? EO.Buffer : void 0, DO = yd ? yd.isBuffer : void 0, AO = DO || dO;
      sn.exports = AO;
    });
    var Ya = c((hk, xd) => {
      var hO = 9007199254740991, yO = /^(?:0|[1-9]\d*)$/;
      function TO(e, t) {
        var r = typeof e;
        return t = t ?? hO, !!t && (r == "number" || r != "symbol" && yO.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      i(TO, "isIndex");
      xd.exports = TO;
    });
    var Os = c((yk, gd) => {
      var xO = 9007199254740991;
      function gO(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xO;
      }
      i(gO, "isLength");
      gd.exports = gO;
    });
    var Sd = c((Tk, vd) => {
      var vO = nr(), SO = Os(), FO = ft(), CO = "[object Arguments]", BO = "[object Array]", OO = "[object Boolean]", bO = "[object Date]", NO = "[object Error]", IO = "[object Function]", _O = "[object Map]", RO = "[object Number]", PO = "[object Object]", LO = "[object RegExp]", wO = "[object Set]", qO = "[object String]", kO = "[object WeakMap]", MO = "[object ArrayBuffer]", GO = "[object DataView]", UO = "[object Float32Array]", YO = "[object Float64Array]", jO = "[object Int8Array]", VO = "[object Int16Array]", KO = "[object Int32Array]", WO = "[object Uint8Array]", HO = "[object Uint8ClampedArray]", XO = "[object Uint16Array]", $O = "[object Uint32Array]", ce = {};
      ce[UO] = ce[YO] = ce[jO] = ce[VO] = ce[KO] = ce[WO] = ce[HO] = ce[XO] = ce[$O] = true;
      ce[CO] = ce[BO] = ce[MO] = ce[OO] = ce[GO] = ce[bO] = ce[NO] = ce[IO] = ce[_O] = ce[RO] = ce[PO] = ce[LO] = ce[wO] = ce[qO] = ce[kO] = false;
      function JO(e) {
        return FO(e) && SO(e.length) && !!ce[vO(e)];
      }
      i(JO, "baseIsTypedArray");
      vd.exports = JO;
    });
    var ja = c((xk, Bd) => {
      var QO = Sd(), zO = $n(), Fd = zn(), Cd = Fd && Fd.isTypedArray, ZO = Cd ? zO(Cd) : QO;
      Bd.exports = ZO;
    });
    var Va = c((gk, Od) => {
      var eb = ld(), tb = Ua(), rb = rt(), nb = Bs(), ib = Ya(), sb = ja(), ub = Object.prototype, ab = ub.hasOwnProperty;
      function ob(e, t) {
        var r = rb(e), n = !r && tb(e), s = !r && !n && nb(e), u = !r && !n && !s && sb(e), a = r || n || s || u, l = a ? eb(e.length, String) : [], p = l.length;
        for (var f in e)
          (t || ab.call(e, f)) && !(a && (f == "length" || s && (f == "offset" || f == "parent") || u && (f == "buffer" || f == "byteLength" || f == "byteOffset") || ib(f, p))) && l.push(f);
        return l;
      }
      i(ob, "arrayLikeKeys");
      Od.exports = ob;
    });
    var bs = c((vk, bd) => {
      var lb = Object.prototype;
      function cb(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || lb;
        return e === r;
      }
      i(cb, "isPrototype");
      bd.exports = cb;
    });
    var Id = c((Sk, Nd) => {
      var pb = _a(), fb = pb(Object.keys, Object);
      Nd.exports = fb;
    });
    var Rd = c((Fk, _d) => {
      var Eb = bs(), db = Id(), mb = Object.prototype, Db = mb.hasOwnProperty;
      function Ab(e) {
        if (!Eb(e))
          return db(e);
        var t = [];
        for (var r in Object(e))
          Db.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      i(Ab, "baseKeys");
      _d.exports = Ab;
    });
    var Ns = c((Ck, Pd) => {
      var hb = wa(), yb = Os();
      function Tb(e) {
        return e != null && yb(e.length) && !hb(e);
      }
      i(Tb, "isArrayLike");
      Pd.exports = Tb;
    });
    var un = c((Bk, Ld) => {
      var xb = Va(), gb = Rd(), vb = Ns();
      function Sb(e) {
        return vb(e) ? xb(e) : gb(e);
      }
      i(Sb, "keys");
      Ld.exports = Sb;
    });
    var qd = c((Ok, wd) => {
      var Fb = si(), Cb = un();
      function Bb(e, t) {
        return e && Fb(t, Cb(t), e);
      }
      i(Bb, "baseAssign");
      wd.exports = Bb;
    });
    var Md = c((bk, kd) => {
      function Ob(e) {
        var t = [];
        if (e != null)
          for (var r in Object(e))
            t.push(r);
        return t;
      }
      i(Ob, "nativeKeysIn");
      kd.exports = Ob;
    });
    var Ud = c((Nk, Gd) => {
      var bb = Br(), Nb = bs(), Ib = Md(), _b = Object.prototype, Rb = _b.hasOwnProperty;
      function Pb(e) {
        if (!bb(e))
          return Ib(e);
        var t = Nb(e), r = [];
        for (var n in e)
          n == "constructor" && (t || !Rb.call(e, n)) || r.push(n);
        return r;
      }
      i(Pb, "baseKeysIn");
      Gd.exports = Pb;
    });
    var Is = c((Ik, Yd) => {
      var Lb = Va(), wb = Ud(), qb = Ns();
      function kb(e) {
        return qb(e) ? Lb(e, true) : wb(e);
      }
      i(kb, "keysIn");
      Yd.exports = kb;
    });
    var Vd = c((_k, jd) => {
      var Mb = si(), Gb = Is();
      function Ub(e, t) {
        return e && Mb(t, Gb(t), e);
      }
      i(Ub, "baseAssignIn");
      jd.exports = Ub;
    });
    var $d = c((ai, an) => {
      var Yb = et(), Xd = typeof ai == "object" && ai && !ai.nodeType && ai, Kd = Xd && typeof an == "object" && an && !an.nodeType && an, jb = Kd && Kd.exports === Xd, Wd = jb ? Yb.Buffer : void 0, Hd = Wd ? Wd.allocUnsafe : void 0;
      function Vb(e, t) {
        if (t)
          return e.slice();
        var r = e.length, n = Hd ? Hd(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      i(Vb, "cloneBuffer");
      an.exports = Vb;
    });
    var Qd = c((Rk, Jd) => {
      function Kb(e, t) {
        var r = -1, n = e.length;
        for (t || (t = Array(n)); ++r < n; )
          t[r] = e[r];
        return t;
      }
      i(Kb, "copyArray");
      Jd.exports = Kb;
    });
    var Ka = c((Pk, zd) => {
      function Wb(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, u = []; ++r < n; ) {
          var a = e[r];
          t(a, r, e) && (u[s++] = a);
        }
        return u;
      }
      i(Wb, "arrayFilter");
      zd.exports = Wb;
    });
    var Wa = c((Lk, Zd) => {
      function Hb() {
        return [];
      }
      i(Hb, "stubArray");
      Zd.exports = Hb;
    });
    var _s = c((wk, tm) => {
      var Xb = Ka(), $b = Wa(), Jb = Object.prototype, Qb = Jb.propertyIsEnumerable, em = Object.getOwnPropertySymbols, zb = em ? function(e) {
        return e == null ? [] : (e = Object(e), Xb(em(e), function(t) {
          return Qb.call(e, t);
        }));
      } : $b;
      tm.exports = zb;
    });
    var nm = c((qk, rm) => {
      var Zb = si(), eN = _s();
      function tN(e, t) {
        return Zb(e, eN(e), t);
      }
      i(tN, "copySymbols");
      rm.exports = tN;
    });
    var Ha = c((kk, im) => {
      function rN(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n; )
          e[s + r] = t[r];
        return e;
      }
      i(rN, "arrayPush");
      im.exports = rN;
    });
    var Xa = c((Mk, sm) => {
      var nN = Ha(), iN = xs(), sN = _s(), uN = Wa(), aN = Object.getOwnPropertySymbols, oN = aN ? function(e) {
        for (var t = []; e; )
          nN(t, sN(e)), e = iN(e);
        return t;
      } : uN;
      sm.exports = oN;
    });
    var am = c((Gk, um) => {
      var lN = si(), cN = Xa();
      function pN(e, t) {
        return lN(e, cN(e), t);
      }
      i(pN, "copySymbolsIn");
      um.exports = pN;
    });
    var $a = c((Uk, om) => {
      var fN = Ha(), EN = rt();
      function dN(e, t, r) {
        var n = t(e);
        return EN(e) ? n : fN(n, r(e));
      }
      i(dN, "baseGetAllKeys");
      om.exports = dN;
    });
    var Ja = c((Yk, lm) => {
      var mN = $a(), DN = _s(), AN = un();
      function hN(e) {
        return mN(e, AN, DN);
      }
      i(hN, "getAllKeys");
      lm.exports = hN;
    });
    var pm = c((jk, cm) => {
      var yN = $a(), TN = Xa(), xN = Is();
      function gN(e) {
        return yN(e, xN, TN);
      }
      i(gN, "getAllKeysIn");
      cm.exports = gN;
    });
    var Em = c((Vk, fm) => {
      var vN = ir(), SN = et(), FN = vN(SN, "DataView");
      fm.exports = FN;
    });
    var mm = c((Kk, dm) => {
      var CN = ir(), BN = et(), ON = CN(BN, "Promise");
      dm.exports = ON;
    });
    var Qa = c((Wk, Dm) => {
      var bN = ir(), NN = et(), IN = bN(NN, "Set");
      Dm.exports = IN;
    });
    var hm = c((Hk, Am) => {
      var _N = ir(), RN = et(), PN = _N(RN, "WeakMap");
      Am.exports = PN;
    });
    var oi = c((Xk, Fm) => {
      var za = Em(), Za = Ss(), eo = mm(), to = Qa(), ro = hm(), Sm = nr(), on = ka(), ym = "[object Map]", LN = "[object Object]", Tm = "[object Promise]", xm = "[object Set]", gm = "[object WeakMap]", vm = "[object DataView]", wN = on(za), qN = on(Za), kN = on(eo), MN = on(to), GN = on(ro), Or = Sm;
      (za && Or(new za(new ArrayBuffer(1))) != vm || Za && Or(new Za()) != ym || eo && Or(eo.resolve()) != Tm || to && Or(new to()) != xm || ro && Or(new ro()) != gm) && (Or = i(function(e) {
        var t = Sm(e), r = t == LN ? e.constructor : void 0, n = r ? on(r) : "";
        if (n)
          switch (n) {
            case wN:
              return vm;
            case qN:
              return ym;
            case kN:
              return Tm;
            case MN:
              return xm;
            case GN:
              return gm;
          }
        return t;
      }, "getTag"));
      Fm.exports = Or;
    });
    var Bm = c(($k, Cm) => {
      var UN = Object.prototype, YN = UN.hasOwnProperty;
      function jN(e) {
        var t = e.length, r = new e.constructor(t);
        return t && typeof e[0] == "string" && YN.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      }
      i(jN, "initCloneArray");
      Cm.exports = jN;
    });
    var no = c((Jk, Om) => {
      var VN = et(), KN = VN.Uint8Array;
      Om.exports = KN;
    });
    var Rs = c((Qk, Nm) => {
      var bm = no();
      function WN(e) {
        var t = new e.constructor(e.byteLength);
        return new bm(t).set(new bm(e)), t;
      }
      i(WN, "cloneArrayBuffer");
      Nm.exports = WN;
    });
    var _m = c((zk, Im) => {
      var HN = Rs();
      function XN(e, t) {
        var r = t ? HN(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      i(XN, "cloneDataView");
      Im.exports = XN;
    });
    var Pm = c((Zk, Rm) => {
      var $N = /\w*$/;
      function JN(e) {
        var t = new e.constructor(e.source, $N.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      i(JN, "cloneRegExp");
      Rm.exports = JN;
    });
    var Mm = c((e4, km) => {
      var Lm = zr(), wm = Lm ? Lm.prototype : void 0, qm = wm ? wm.valueOf : void 0;
      function QN(e) {
        return qm ? Object(qm.call(e)) : {};
      }
      i(QN, "cloneSymbol");
      km.exports = QN;
    });
    var Um = c((t4, Gm) => {
      var zN = Rs();
      function ZN(e, t) {
        var r = t ? zN(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      i(ZN, "cloneTypedArray");
      Gm.exports = ZN;
    });
    var jm = c((r4, Ym) => {
      var eI = Rs(), tI = _m(), rI = Pm(), nI = Mm(), iI = Um(), sI = "[object Boolean]", uI = "[object Date]", aI = "[object Map]", oI = "[object Number]", lI = "[object RegExp]", cI = "[object Set]", pI = "[object String]", fI = "[object Symbol]", EI = "[object ArrayBuffer]", dI = "[object DataView]", mI = "[object Float32Array]", DI = "[object Float64Array]", AI = "[object Int8Array]", hI = "[object Int16Array]", yI = "[object Int32Array]", TI = "[object Uint8Array]", xI = "[object Uint8ClampedArray]", gI = "[object Uint16Array]", vI = "[object Uint32Array]";
      function SI(e, t, r) {
        var n = e.constructor;
        switch (t) {
          case EI:
            return eI(e);
          case sI:
          case uI:
            return new n(+e);
          case dI:
            return tI(e, r);
          case mI:
          case DI:
          case AI:
          case hI:
          case yI:
          case TI:
          case xI:
          case gI:
          case vI:
            return iI(e, r);
          case aI:
            return new n();
          case oI:
          case pI:
            return new n(e);
          case lI:
            return rI(e);
          case cI:
            return new n();
          case fI:
            return nI(e);
        }
      }
      i(SI, "initCloneByTag");
      Ym.exports = SI;
    });
    var Wm = c((n4, Km) => {
      var FI = Br(), Vm = Object.create, CI = function() {
        function e() {
        }
        return i(e, "object"), function(t) {
          if (!FI(t))
            return {};
          if (Vm)
            return Vm(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = void 0, r;
        };
      }();
      Km.exports = CI;
    });
    var Xm = c((i4, Hm) => {
      var BI = Wm(), OI = xs(), bI = bs();
      function NI(e) {
        return typeof e.constructor == "function" && !bI(e) ? BI(OI(e)) : {};
      }
      i(NI, "initCloneObject");
      Hm.exports = NI;
    });
    var Jm = c((s4, $m) => {
      var II = oi(), _I = ft(), RI = "[object Map]";
      function PI(e) {
        return _I(e) && II(e) == RI;
      }
      i(PI, "baseIsMap");
      $m.exports = PI;
    });
    var eD = c((u4, Zm) => {
      var LI = Jm(), wI = $n(), Qm = zn(), zm = Qm && Qm.isMap, qI = zm ? wI(zm) : LI;
      Zm.exports = qI;
    });
    var rD = c((a4, tD) => {
      var kI = oi(), MI = ft(), GI = "[object Set]";
      function UI(e) {
        return MI(e) && kI(e) == GI;
      }
      i(UI, "baseIsSet");
      tD.exports = UI;
    });
    var uD = c((o4, sD) => {
      var YI = rD(), jI = $n(), nD = zn(), iD = nD && nD.isSet, VI = iD ? jI(iD) : YI;
      sD.exports = VI;
    });
    var pD = c((l4, cD) => {
      var KI = Cs(), WI = td(), HI = Ga(), XI = qd(), $I = Vd(), JI = $d(), QI = Qd(), zI = nm(), ZI = am(), e_ = Ja(), t_ = pm(), r_ = oi(), n_ = Bm(), i_ = jm(), s_ = Xm(), u_ = rt(), a_ = Bs(), o_ = eD(), l_ = Br(), c_ = uD(), p_ = un(), f_ = Is(), E_ = 1, d_ = 2, m_ = 4, aD = "[object Arguments]", D_ = "[object Array]", A_ = "[object Boolean]", h_ = "[object Date]", y_ = "[object Error]", oD = "[object Function]", T_ = "[object GeneratorFunction]", x_ = "[object Map]", g_ = "[object Number]", lD = "[object Object]", v_ = "[object RegExp]", S_ = "[object Set]", F_ = "[object String]", C_ = "[object Symbol]", B_ = "[object WeakMap]", O_ = "[object ArrayBuffer]", b_ = "[object DataView]", N_ = "[object Float32Array]", I_ = "[object Float64Array]", __ = "[object Int8Array]", R_ = "[object Int16Array]", P_ = "[object Int32Array]", L_ = "[object Uint8Array]", w_ = "[object Uint8ClampedArray]", q_ = "[object Uint16Array]", k_ = "[object Uint32Array]", le = {};
      le[aD] = le[D_] = le[O_] = le[b_] = le[A_] = le[h_] = le[N_] = le[I_] = le[__] = le[R_] = le[P_] = le[x_] = le[g_] = le[lD] = le[v_] = le[S_] = le[F_] = le[C_] = le[L_] = le[w_] = le[q_] = le[k_] = true;
      le[y_] = le[oD] = le[B_] = false;
      function Ps(e, t, r, n, s, u) {
        var a, l = t & E_, p = t & d_, f = t & m_;
        if (r && (a = s ? r(e, n, s, u) : r(e)), a !== void 0)
          return a;
        if (!l_(e))
          return e;
        var m = u_(e);
        if (m) {
          if (a = n_(e), !l)
            return QI(e, a);
        } else {
          var h = r_(e), E = h == oD || h == T_;
          if (a_(e))
            return JI(e, l);
          if (h == lD || h == aD || E && !s) {
            if (a = p || E ? {} : s_(e), !l)
              return p ? ZI(e, $I(a, e)) : zI(e, XI(a, e));
          } else {
            if (!le[h])
              return s ? e : {};
            a = i_(e, h, l);
          }
        }
        u || (u = new KI());
        var x = u.get(e);
        if (x)
          return x;
        u.set(e, a), c_(e) ? e.forEach(function(g) {
          a.add(Ps(g, t, r, g, e, u));
        }) : o_(e) && e.forEach(function(g, U) {
          a.set(U, Ps(g, t, r, U, e, u));
        });
        var F = f ? p ? t_ : e_ : p ? f_ : p_, O = m ? void 0 : F(e);
        return WI(O || e, function(g, U) {
          O && (U = g, g = e[U]), HI(a, U, Ps(g, t, r, U, e, u));
        }), a;
      }
      i(Ps, "baseClone");
      cD.exports = Ps;
    });
    var ED = c((c4, fD) => {
      var M_ = pD(), G_ = 4;
      function U_(e) {
        return M_(e, G_);
      }
      i(U_, "clone");
      fD.exports = U_;
    });
    var mD = c((p4, dD) => {
      var Y_ = "__lodash_hash_undefined__";
      function j_(e) {
        return this.__data__.set(e, Y_), this;
      }
      i(j_, "setCacheAdd");
      dD.exports = j_;
    });
    var AD = c((f4, DD) => {
      function V_(e) {
        return this.__data__.has(e);
      }
      i(V_, "setCacheHas");
      DD.exports = V_;
    });
    var io = c((E4, hD) => {
      var K_ = Fs(), W_ = mD(), H_ = AD();
      function Ls(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new K_(); ++t < r; )
          this.add(e[t]);
      }
      i(Ls, "SetCache");
      Ls.prototype.add = Ls.prototype.push = W_;
      Ls.prototype.has = H_;
      hD.exports = Ls;
    });
    var TD = c((d4, yD) => {
      function X_(e, t, r, n) {
        for (var s = e.length, u = r + (n ? 1 : -1); n ? u-- : ++u < s; )
          if (t(e[u], u, e))
            return u;
        return -1;
      }
      i(X_, "baseFindIndex");
      yD.exports = X_;
    });
    var gD = c((m4, xD) => {
      function $_(e) {
        return e !== e;
      }
      i($_, "baseIsNaN");
      xD.exports = $_;
    });
    var SD = c((D4, vD) => {
      function J_(e, t, r) {
        for (var n = r - 1, s = e.length; ++n < s; )
          if (e[n] === t)
            return n;
        return -1;
      }
      i(J_, "strictIndexOf");
      vD.exports = J_;
    });
    var ws = c((A4, FD) => {
      var Q_ = TD(), z_ = gD(), Z_ = SD();
      function eR(e, t, r) {
        return t === t ? Z_(e, t, r) : Q_(e, z_, r);
      }
      i(eR, "baseIndexOf");
      FD.exports = eR;
    });
    var BD = c((h4, CD) => {
      var tR = ws();
      function rR(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && tR(e, t, 0) > -1;
      }
      i(rR, "arrayIncludes");
      CD.exports = rR;
    });
    var bD = c((y4, OD) => {
      function nR(e, t, r) {
        for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
          if (r(t, e[n]))
            return true;
        return false;
      }
      i(nR, "arrayIncludesWith");
      OD.exports = nR;
    });
    var so = c((T4, ND) => {
      function iR(e, t) {
        return e.has(t);
      }
      i(iR, "cacheHas");
      ND.exports = iR;
    });
    var _D = c((x4, ID) => {
      function sR() {
      }
      i(sR, "noop");
      ID.exports = sR;
    });
    var qs = c((g4, RD) => {
      function uR(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n) {
          r[++t] = n;
        }), r;
      }
      i(uR, "setToArray");
      RD.exports = uR;
    });
    var LD = c((v4, PD) => {
      var uo = Qa(), aR = _D(), oR = qs(), lR = 1 / 0, cR = uo && 1 / oR(new uo([, -0]))[1] == lR ? function(e) {
        return new uo(e);
      } : aR;
      PD.exports = cR;
    });
    var qD = c((S4, wD) => {
      var pR = io(), fR = BD(), ER = bD(), dR = so(), mR = LD(), DR = qs(), AR = 200;
      function hR(e, t, r) {
        var n = -1, s = fR, u = e.length, a = true, l = [], p = l;
        if (r)
          a = false, s = ER;
        else if (u >= AR) {
          var f = t ? null : mR(e);
          if (f)
            return DR(f);
          a = false, s = dR, p = new pR();
        } else
          p = t ? [] : l;
        e:
          for (; ++n < u; ) {
            var m = e[n], h = t ? t(m) : m;
            if (m = r || m !== 0 ? m : 0, a && h === h) {
              for (var E = p.length; E--; )
                if (p[E] === h)
                  continue e;
              t && p.push(h), l.push(m);
            } else
              s(p, h, r) || (p !== l && p.push(h), l.push(m));
          }
        return l;
      }
      i(hR, "baseUniq");
      wD.exports = hR;
    });
    var MD = c((F4, kD) => {
      var yR = qD();
      function TR(e) {
        return e && e.length ? yR(e) : [];
      }
      i(TR, "uniq");
      kD.exports = TR;
    });
    var _t = c((Se) => {
      "use strict";
      Se.__esModule = true;
      Se.DEPRECATED_KEYS = Se.BUILDER_KEYS = Se.NODE_FIELDS = Se.ALIAS_KEYS = Se.VISITOR_KEYS = void 0;
      var xR = Hn(), Ms = ao(xR), gR = ms(), ln = ao(gR), vR = Oa(), SR = ao(vR);
      Se.assertEach = _R;
      Se.assertOneOf = RR;
      Se.assertNodeType = PR;
      Se.assertNodeOrValueType = LR;
      Se.assertValueType = YD;
      Se.chain = wR;
      Se.default = qR;
      var FR = It(), UD = CR(FR);
      function CR(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(CR, "_interopRequireWildcard");
      function ao(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(ao, "_interopRequireDefault");
      var BR = Se.VISITOR_KEYS = {}, OR = Se.ALIAS_KEYS = {}, bR = Se.NODE_FIELDS = {}, NR = Se.BUILDER_KEYS = {}, IR = Se.DEPRECATED_KEYS = {};
      function ks(e) {
        return Array.isArray(e) ? "array" : e === null ? "null" : e === void 0 || typeof e > "u" ? "undefined" : (0, SR.default)(e);
      }
      i(ks, "getType");
      function _R(e) {
        function t(r, n, s) {
          if (!!Array.isArray(s))
            for (var u = 0; u < s.length; u++)
              e(r, n + "[" + u + "]", s[u]);
        }
        return i(t, "validator"), t.each = e, t;
      }
      i(_R, "assertEach");
      function RR() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, u, a) {
          if (t.indexOf(a) < 0)
            throw new TypeError("Property " + u + " expected value to be one of " + (0, ln.default)(t) + " but got " + (0, ln.default)(a));
        }
        return i(n, "validate"), n.oneOf = t, n;
      }
      i(RR, "assertOneOf");
      function PR() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, u, a) {
          for (var l = false, m = t, p = Array.isArray(m), f = 0, m = p ? m : (0, Ms.default)(m); ; ) {
            var h;
            if (p) {
              if (f >= m.length)
                break;
              h = m[f++];
            } else {
              if (f = m.next(), f.done)
                break;
              h = f.value;
            }
            var E = h;
            if (UD.is(E, a)) {
              l = true;
              break;
            }
          }
          if (!l)
            throw new TypeError("Property " + u + " of " + s.type + " expected node to be of a type " + (0, ln.default)(t) + " " + ("but instead got " + (0, ln.default)(a && a.type)));
        }
        return i(n, "validate"), n.oneOfNodeTypes = t, n;
      }
      i(PR, "assertNodeType");
      function LR() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, u, a) {
          for (var l = false, m = t, p = Array.isArray(m), f = 0, m = p ? m : (0, Ms.default)(m); ; ) {
            var h;
            if (p) {
              if (f >= m.length)
                break;
              h = m[f++];
            } else {
              if (f = m.next(), f.done)
                break;
              h = f.value;
            }
            var E = h;
            if (ks(a) === E || UD.is(E, a)) {
              l = true;
              break;
            }
          }
          if (!l)
            throw new TypeError("Property " + u + " of " + s.type + " expected node to be of a type " + (0, ln.default)(t) + " " + ("but instead got " + (0, ln.default)(a && a.type)));
        }
        return i(n, "validate"), n.oneOfNodeOrValueTypes = t, n;
      }
      i(LR, "assertNodeOrValueType");
      function YD(e) {
        function t(r, n, s) {
          var u = ks(s) === e;
          if (!u)
            throw new TypeError("Property " + n + " expected type of " + e + " but got " + ks(s));
        }
        return i(t, "validate"), t.type = e, t;
      }
      i(YD, "assertValueType");
      function wR() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n() {
          for (var a = t, s = Array.isArray(a), u = 0, a = s ? a : (0, Ms.default)(a); ; ) {
            var l;
            if (s) {
              if (u >= a.length)
                break;
              l = a[u++];
            } else {
              if (u = a.next(), u.done)
                break;
              l = u.value;
            }
            var p = l;
            p.apply(void 0, arguments);
          }
        }
        return i(n, "validate"), n.chainOf = t, n;
      }
      i(wR, "chain");
      function qR(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.inherits && GD[t.inherits] || {};
        t.fields = t.fields || r.fields || {}, t.visitor = t.visitor || r.visitor || [], t.aliases = t.aliases || r.aliases || [], t.builder = t.builder || r.builder || t.visitor || [], t.deprecatedAlias && (IR[t.deprecatedAlias] = e);
        for (var u = t.visitor.concat(t.builder), n = Array.isArray(u), s = 0, u = n ? u : (0, Ms.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var l = a;
          t.fields[l] = t.fields[l] || {};
        }
        for (var p in t.fields) {
          var f = t.fields[p];
          t.builder.indexOf(p) === -1 && (f.optional = true), f.default === void 0 ? f.default = null : f.validate || (f.validate = YD(ks(f.default)));
        }
        BR[e] = t.visitor, NR[e] = t.builder, bR[e] = t.fields, OR[e] = t.aliases, GD[e] = t;
      }
      i(qR, "defineType");
      var GD = {};
    });
    var jD = c(() => {
      "use strict";
      var kR = It(), MR = UR(kR), Gs = Ds(), A = _t(), k = GR(A);
      function GR(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(GR, "_interopRequireDefault");
      function UR(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(UR, "_interopRequireWildcard");
      (0, k.default)("ArrayExpression", { fields: { elements: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeOrValueType)("null", "Expression", "SpreadElement"))), default: [] } }, visitor: ["elements"], aliases: ["Expression"] });
      (0, k.default)("AssignmentExpression", { fields: { operator: { validate: (0, A.assertValueType)("string") }, left: { validate: (0, A.assertNodeType)("LVal") }, right: { validate: (0, A.assertNodeType)("Expression") } }, builder: ["operator", "left", "right"], visitor: ["left", "right"], aliases: ["Expression"] });
      (0, k.default)("BinaryExpression", { builder: ["operator", "left", "right"], fields: { operator: { validate: A.assertOneOf.apply(void 0, Gs.BINARY_OPERATORS) }, left: { validate: (0, A.assertNodeType)("Expression") }, right: { validate: (0, A.assertNodeType)("Expression") } }, visitor: ["left", "right"], aliases: ["Binary", "Expression"] });
      (0, k.default)("Directive", { visitor: ["value"], fields: { value: { validate: (0, A.assertNodeType)("DirectiveLiteral") } } });
      (0, k.default)("DirectiveLiteral", { builder: ["value"], fields: { value: { validate: (0, A.assertValueType)("string") } } });
      (0, k.default)("BlockStatement", { builder: ["body", "directives"], visitor: ["directives", "body"], fields: { directives: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Directive"))), default: [] }, body: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Statement"))) } }, aliases: ["Scopable", "BlockParent", "Block", "Statement"] });
      (0, k.default)("BreakStatement", { visitor: ["label"], fields: { label: { validate: (0, A.assertNodeType)("Identifier"), optional: true } }, aliases: ["Statement", "Terminatorless", "CompletionStatement"] });
      (0, k.default)("CallExpression", { visitor: ["callee", "arguments"], fields: { callee: { validate: (0, A.assertNodeType)("Expression") }, arguments: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Expression", "SpreadElement"))) } }, aliases: ["Expression"] });
      (0, k.default)("CatchClause", { visitor: ["param", "body"], fields: { param: { validate: (0, A.assertNodeType)("Identifier") }, body: { validate: (0, A.assertNodeType)("BlockStatement") } }, aliases: ["Scopable"] });
      (0, k.default)("ConditionalExpression", { visitor: ["test", "consequent", "alternate"], fields: { test: { validate: (0, A.assertNodeType)("Expression") }, consequent: { validate: (0, A.assertNodeType)("Expression") }, alternate: { validate: (0, A.assertNodeType)("Expression") } }, aliases: ["Expression", "Conditional"] });
      (0, k.default)("ContinueStatement", { visitor: ["label"], fields: { label: { validate: (0, A.assertNodeType)("Identifier"), optional: true } }, aliases: ["Statement", "Terminatorless", "CompletionStatement"] });
      (0, k.default)("DebuggerStatement", { aliases: ["Statement"] });
      (0, k.default)("DoWhileStatement", { visitor: ["test", "body"], fields: { test: { validate: (0, A.assertNodeType)("Expression") }, body: { validate: (0, A.assertNodeType)("Statement") } }, aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"] });
      (0, k.default)("EmptyStatement", { aliases: ["Statement"] });
      (0, k.default)("ExpressionStatement", { visitor: ["expression"], fields: { expression: { validate: (0, A.assertNodeType)("Expression") } }, aliases: ["Statement", "ExpressionWrapper"] });
      (0, k.default)("File", { builder: ["program", "comments", "tokens"], visitor: ["program"], fields: { program: { validate: (0, A.assertNodeType)("Program") } } });
      (0, k.default)("ForInStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, A.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, A.assertNodeType)("Expression") }, body: { validate: (0, A.assertNodeType)("Statement") } } });
      (0, k.default)("ForStatement", { visitor: ["init", "test", "update", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"], fields: { init: { validate: (0, A.assertNodeType)("VariableDeclaration", "Expression"), optional: true }, test: { validate: (0, A.assertNodeType)("Expression"), optional: true }, update: { validate: (0, A.assertNodeType)("Expression"), optional: true }, body: { validate: (0, A.assertNodeType)("Statement") } } });
      (0, k.default)("FunctionDeclaration", { builder: ["id", "params", "body", "generator", "async"], visitor: ["id", "params", "body", "returnType", "typeParameters"], fields: { id: { validate: (0, A.assertNodeType)("Identifier") }, params: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("LVal"))) }, body: { validate: (0, A.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, A.assertValueType)("boolean") }, async: { default: false, validate: (0, A.assertValueType)("boolean") } }, aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"] });
      (0, k.default)("FunctionExpression", { inherits: "FunctionDeclaration", aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"], fields: { id: { validate: (0, A.assertNodeType)("Identifier"), optional: true }, params: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("LVal"))) }, body: { validate: (0, A.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, A.assertValueType)("boolean") }, async: { default: false, validate: (0, A.assertValueType)("boolean") } } });
      (0, k.default)("Identifier", { builder: ["name"], visitor: ["typeAnnotation"], aliases: ["Expression", "LVal"], fields: { name: { validate: i(function(t, r, n) {
        MR.isValidIdentifier(n);
      }, "validate") }, decorators: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Decorator"))) } } });
      (0, k.default)("IfStatement", { visitor: ["test", "consequent", "alternate"], aliases: ["Statement", "Conditional"], fields: { test: { validate: (0, A.assertNodeType)("Expression") }, consequent: { validate: (0, A.assertNodeType)("Statement") }, alternate: { optional: true, validate: (0, A.assertNodeType)("Statement") } } });
      (0, k.default)("LabeledStatement", { visitor: ["label", "body"], aliases: ["Statement"], fields: { label: { validate: (0, A.assertNodeType)("Identifier") }, body: { validate: (0, A.assertNodeType)("Statement") } } });
      (0, k.default)("StringLiteral", { builder: ["value"], fields: { value: { validate: (0, A.assertValueType)("string") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("NumericLiteral", { builder: ["value"], deprecatedAlias: "NumberLiteral", fields: { value: { validate: (0, A.assertValueType)("number") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("NullLiteral", { aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("BooleanLiteral", { builder: ["value"], fields: { value: { validate: (0, A.assertValueType)("boolean") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("RegExpLiteral", { builder: ["pattern", "flags"], deprecatedAlias: "RegexLiteral", aliases: ["Expression", "Literal"], fields: { pattern: { validate: (0, A.assertValueType)("string") }, flags: { validate: (0, A.assertValueType)("string"), default: "" } } });
      (0, k.default)("LogicalExpression", { builder: ["operator", "left", "right"], visitor: ["left", "right"], aliases: ["Binary", "Expression"], fields: { operator: { validate: A.assertOneOf.apply(void 0, Gs.LOGICAL_OPERATORS) }, left: { validate: (0, A.assertNodeType)("Expression") }, right: { validate: (0, A.assertNodeType)("Expression") } } });
      (0, k.default)("MemberExpression", { builder: ["object", "property", "computed"], visitor: ["object", "property"], aliases: ["Expression", "LVal"], fields: { object: { validate: (0, A.assertNodeType)("Expression") }, property: { validate: i(function(t, r, n) {
        var s = t.computed ? "Expression" : "Identifier";
        (0, A.assertNodeType)(s)(t, r, n);
      }, "validate") }, computed: { default: false } } });
      (0, k.default)("NewExpression", { visitor: ["callee", "arguments"], aliases: ["Expression"], fields: { callee: { validate: (0, A.assertNodeType)("Expression") }, arguments: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Expression", "SpreadElement"))) } } });
      (0, k.default)("Program", { visitor: ["directives", "body"], builder: ["body", "directives"], fields: { directives: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Directive"))), default: [] }, body: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Statement"))) } }, aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"] });
      (0, k.default)("ObjectExpression", { visitor: ["properties"], aliases: ["Expression"], fields: { properties: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadProperty"))) } } });
      (0, k.default)("ObjectMethod", { builder: ["kind", "key", "params", "body", "computed"], fields: { kind: { validate: (0, A.chain)((0, A.assertValueType)("string"), (0, A.assertOneOf)("method", "get", "set")), default: "method" }, computed: { validate: (0, A.assertValueType)("boolean"), default: false }, key: { validate: i(function(t, r, n) {
        var s = t.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        A.assertNodeType.apply(void 0, s)(t, r, n);
      }, "validate") }, decorators: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Decorator"))) }, body: { validate: (0, A.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, A.assertValueType)("boolean") }, async: { default: false, validate: (0, A.assertValueType)("boolean") } }, visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"], aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"] });
      (0, k.default)("ObjectProperty", { builder: ["key", "value", "computed", "shorthand", "decorators"], fields: { computed: { validate: (0, A.assertValueType)("boolean"), default: false }, key: { validate: i(function(t, r, n) {
        var s = t.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        A.assertNodeType.apply(void 0, s)(t, r, n);
      }, "validate") }, value: { validate: (0, A.assertNodeType)("Expression", "Pattern", "RestElement") }, shorthand: { validate: (0, A.assertValueType)("boolean"), default: false }, decorators: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Decorator"))), optional: true } }, visitor: ["key", "value", "decorators"], aliases: ["UserWhitespacable", "Property", "ObjectMember"] });
      (0, k.default)("RestElement", { visitor: ["argument", "typeAnnotation"], aliases: ["LVal"], fields: { argument: { validate: (0, A.assertNodeType)("LVal") }, decorators: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Decorator"))) } } });
      (0, k.default)("ReturnStatement", { visitor: ["argument"], aliases: ["Statement", "Terminatorless", "CompletionStatement"], fields: { argument: { validate: (0, A.assertNodeType)("Expression"), optional: true } } });
      (0, k.default)("SequenceExpression", { visitor: ["expressions"], fields: { expressions: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Expression"))) } }, aliases: ["Expression"] });
      (0, k.default)("SwitchCase", { visitor: ["test", "consequent"], fields: { test: { validate: (0, A.assertNodeType)("Expression"), optional: true }, consequent: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("Statement"))) } } });
      (0, k.default)("SwitchStatement", { visitor: ["discriminant", "cases"], aliases: ["Statement", "BlockParent", "Scopable"], fields: { discriminant: { validate: (0, A.assertNodeType)("Expression") }, cases: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("SwitchCase"))) } } });
      (0, k.default)("ThisExpression", { aliases: ["Expression"] });
      (0, k.default)("ThrowStatement", { visitor: ["argument"], aliases: ["Statement", "Terminatorless", "CompletionStatement"], fields: { argument: { validate: (0, A.assertNodeType)("Expression") } } });
      (0, k.default)("TryStatement", { visitor: ["block", "handler", "finalizer"], aliases: ["Statement"], fields: { body: { validate: (0, A.assertNodeType)("BlockStatement") }, handler: { optional: true, handler: (0, A.assertNodeType)("BlockStatement") }, finalizer: { optional: true, validate: (0, A.assertNodeType)("BlockStatement") } } });
      (0, k.default)("UnaryExpression", { builder: ["operator", "argument", "prefix"], fields: { prefix: { default: true }, argument: { validate: (0, A.assertNodeType)("Expression") }, operator: { validate: A.assertOneOf.apply(void 0, Gs.UNARY_OPERATORS) } }, visitor: ["argument"], aliases: ["UnaryLike", "Expression"] });
      (0, k.default)("UpdateExpression", { builder: ["operator", "argument", "prefix"], fields: { prefix: { default: false }, argument: { validate: (0, A.assertNodeType)("Expression") }, operator: { validate: A.assertOneOf.apply(void 0, Gs.UPDATE_OPERATORS) } }, visitor: ["argument"], aliases: ["Expression"] });
      (0, k.default)("VariableDeclaration", { builder: ["kind", "declarations"], visitor: ["declarations"], aliases: ["Statement", "Declaration"], fields: { kind: { validate: (0, A.chain)((0, A.assertValueType)("string"), (0, A.assertOneOf)("var", "let", "const")) }, declarations: { validate: (0, A.chain)((0, A.assertValueType)("array"), (0, A.assertEach)((0, A.assertNodeType)("VariableDeclarator"))) } } });
      (0, k.default)("VariableDeclarator", { visitor: ["id", "init"], fields: { id: { validate: (0, A.assertNodeType)("LVal") }, init: { optional: true, validate: (0, A.assertNodeType)("Expression") } } });
      (0, k.default)("WhileStatement", { visitor: ["test", "body"], aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"], fields: { test: { validate: (0, A.assertNodeType)("Expression") }, body: { validate: (0, A.assertNodeType)("BlockStatement", "Statement") } } });
      (0, k.default)("WithStatement", { visitor: ["object", "body"], aliases: ["Statement"], fields: { object: { object: (0, A.assertNodeType)("Expression") }, body: { validate: (0, A.assertNodeType)("BlockStatement", "Statement") } } });
    });
    var VD = c(() => {
      "use strict";
      var T = _t(), de = YR(T);
      function YR(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(YR, "_interopRequireDefault");
      (0, de.default)("AssignmentPattern", { visitor: ["left", "right"], aliases: ["Pattern", "LVal"], fields: { left: { validate: (0, T.assertNodeType)("Identifier") }, right: { validate: (0, T.assertNodeType)("Expression") }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, de.default)("ArrayPattern", { visitor: ["elements", "typeAnnotation"], aliases: ["Pattern", "LVal"], fields: { elements: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Identifier", "Pattern", "RestElement"))) }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, de.default)("ArrowFunctionExpression", { builder: ["params", "body", "async"], visitor: ["params", "body", "returnType", "typeParameters"], aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"], fields: { params: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("LVal"))) }, body: { validate: (0, T.assertNodeType)("BlockStatement", "Expression") }, async: { validate: (0, T.assertValueType)("boolean"), default: false } } });
      (0, de.default)("ClassBody", { visitor: ["body"], fields: { body: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("ClassMethod", "ClassProperty"))) } } });
      (0, de.default)("ClassDeclaration", { builder: ["id", "superClass", "body", "decorators"], visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"], aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"], fields: { id: { validate: (0, T.assertNodeType)("Identifier") }, body: { validate: (0, T.assertNodeType)("ClassBody") }, superClass: { optional: true, validate: (0, T.assertNodeType)("Expression") }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, de.default)("ClassExpression", { inherits: "ClassDeclaration", aliases: ["Scopable", "Class", "Expression", "Pureish"], fields: { id: { optional: true, validate: (0, T.assertNodeType)("Identifier") }, body: { validate: (0, T.assertNodeType)("ClassBody") }, superClass: { optional: true, validate: (0, T.assertNodeType)("Expression") }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, de.default)("ExportAllDeclaration", { visitor: ["source"], aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"], fields: { source: { validate: (0, T.assertNodeType)("StringLiteral") } } });
      (0, de.default)("ExportDefaultDeclaration", { visitor: ["declaration"], aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"], fields: { declaration: { validate: (0, T.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression") } } });
      (0, de.default)("ExportNamedDeclaration", { visitor: ["declaration", "specifiers", "source"], aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"], fields: { declaration: { validate: (0, T.assertNodeType)("Declaration"), optional: true }, specifiers: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("ExportSpecifier"))) }, source: { validate: (0, T.assertNodeType)("StringLiteral"), optional: true } } });
      (0, de.default)("ExportSpecifier", { visitor: ["local", "exported"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") }, exported: { validate: (0, T.assertNodeType)("Identifier") } } });
      (0, de.default)("ForOfStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, T.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, T.assertNodeType)("Expression") }, body: { validate: (0, T.assertNodeType)("Statement") } } });
      (0, de.default)("ImportDeclaration", { visitor: ["specifiers", "source"], aliases: ["Statement", "Declaration", "ModuleDeclaration"], fields: { specifiers: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"))) }, source: { validate: (0, T.assertNodeType)("StringLiteral") } } });
      (0, de.default)("ImportDefaultSpecifier", { visitor: ["local"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") } } });
      (0, de.default)("ImportNamespaceSpecifier", { visitor: ["local"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") } } });
      (0, de.default)("ImportSpecifier", { visitor: ["local", "imported"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") }, imported: { validate: (0, T.assertNodeType)("Identifier") }, importKind: { validate: (0, T.assertOneOf)(null, "type", "typeof") } } });
      (0, de.default)("MetaProperty", { visitor: ["meta", "property"], aliases: ["Expression"], fields: { meta: { validate: (0, T.assertValueType)("string") }, property: { validate: (0, T.assertValueType)("string") } } });
      (0, de.default)("ClassMethod", { aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"], builder: ["kind", "key", "params", "body", "computed", "static"], visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"], fields: { kind: { validate: (0, T.chain)((0, T.assertValueType)("string"), (0, T.assertOneOf)("get", "set", "method", "constructor")), default: "method" }, computed: { default: false, validate: (0, T.assertValueType)("boolean") }, static: { default: false, validate: (0, T.assertValueType)("boolean") }, key: { validate: i(function(t, r, n) {
        var s = t.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        T.assertNodeType.apply(void 0, s)(t, r, n);
      }, "validate") }, params: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("LVal"))) }, body: { validate: (0, T.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, T.assertValueType)("boolean") }, async: { default: false, validate: (0, T.assertValueType)("boolean") } } });
      (0, de.default)("ObjectPattern", { visitor: ["properties", "typeAnnotation"], aliases: ["Pattern", "LVal"], fields: { properties: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("RestProperty", "Property"))) }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, de.default)("SpreadElement", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, T.assertNodeType)("Expression") } } });
      (0, de.default)("Super", { aliases: ["Expression"] });
      (0, de.default)("TaggedTemplateExpression", { visitor: ["tag", "quasi"], aliases: ["Expression"], fields: { tag: { validate: (0, T.assertNodeType)("Expression") }, quasi: { validate: (0, T.assertNodeType)("TemplateLiteral") } } });
      (0, de.default)("TemplateElement", { builder: ["value", "tail"], fields: { value: {}, tail: { validate: (0, T.assertValueType)("boolean"), default: false } } });
      (0, de.default)("TemplateLiteral", { visitor: ["quasis", "expressions"], aliases: ["Expression", "Literal"], fields: { quasis: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("TemplateElement"))) }, expressions: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Expression"))) } } });
      (0, de.default)("YieldExpression", { builder: ["argument", "delegate"], visitor: ["argument"], aliases: ["Expression", "Terminatorless"], fields: { delegate: { validate: (0, T.assertValueType)("boolean"), default: false }, argument: { optional: true, validate: (0, T.assertNodeType)("Expression") } } });
    });
    var WD = c(() => {
      "use strict";
      var KD = _t(), G = jR(KD);
      function jR(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(jR, "_interopRequireDefault");
      (0, G.default)("AnyTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ArrayTypeAnnotation", { visitor: ["elementType"], aliases: ["Flow"], fields: {} });
      (0, G.default)("BooleanTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("BooleanLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("NullLiteralTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ClassImplements", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ClassProperty", { visitor: ["key", "value", "typeAnnotation", "decorators"], builder: ["key", "value", "typeAnnotation", "decorators", "computed"], aliases: ["Property"], fields: { computed: { validate: (0, KD.assertValueType)("boolean"), default: false } } });
      (0, G.default)("DeclareClass", { visitor: ["id", "typeParameters", "extends", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareFunction", { visitor: ["id"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareInterface", { visitor: ["id", "typeParameters", "extends", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareModule", { visitor: ["id", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareModuleExports", { visitor: ["typeAnnotation"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareTypeAlias", { visitor: ["id", "typeParameters", "right"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareOpaqueType", { visitor: ["id", "typeParameters", "supertype"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareVariable", { visitor: ["id"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareExportDeclaration", { visitor: ["declaration", "specifiers", "source"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("ExistentialTypeParam", { aliases: ["Flow"] });
      (0, G.default)("FunctionTypeAnnotation", { visitor: ["typeParameters", "params", "rest", "returnType"], aliases: ["Flow"], fields: {} });
      (0, G.default)("FunctionTypeParam", { visitor: ["name", "typeAnnotation"], aliases: ["Flow"], fields: {} });
      (0, G.default)("GenericTypeAnnotation", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("InterfaceExtends", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("InterfaceDeclaration", { visitor: ["id", "typeParameters", "extends", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("IntersectionTypeAnnotation", { visitor: ["types"], aliases: ["Flow"], fields: {} });
      (0, G.default)("MixedTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"] });
      (0, G.default)("EmptyTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"] });
      (0, G.default)("NullableTypeAnnotation", { visitor: ["typeAnnotation"], aliases: ["Flow"], fields: {} });
      (0, G.default)("NumericLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("NumberTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("StringLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("StringTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ThisTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("TupleTypeAnnotation", { visitor: ["types"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeofTypeAnnotation", { visitor: ["argument"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeAlias", { visitor: ["id", "typeParameters", "right"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("OpaqueType", { visitor: ["id", "typeParameters", "impltype", "supertype"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("TypeAnnotation", { visitor: ["typeAnnotation"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeCastExpression", { visitor: ["expression", "typeAnnotation"], aliases: ["Flow", "ExpressionWrapper", "Expression"], fields: {} });
      (0, G.default)("TypeParameter", { visitor: ["bound"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeParameterDeclaration", { visitor: ["params"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeParameterInstantiation", { visitor: ["params"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ObjectTypeAnnotation", { visitor: ["properties", "indexers", "callProperties"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ObjectTypeCallProperty", { visitor: ["value"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("ObjectTypeIndexer", { visitor: ["id", "key", "value"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("ObjectTypeProperty", { visitor: ["key", "value"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("ObjectTypeSpreadProperty", { visitor: ["argument"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("QualifiedTypeIdentifier", { visitor: ["id", "qualification"], aliases: ["Flow"], fields: {} });
      (0, G.default)("UnionTypeAnnotation", { visitor: ["types"], aliases: ["Flow"], fields: {} });
      (0, G.default)("VoidTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
    });
    var HD = c(() => {
      "use strict";
      var pe = _t(), Je = VR(pe);
      function VR(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(VR, "_interopRequireDefault");
      (0, Je.default)("JSXAttribute", { visitor: ["name", "value"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, pe.assertNodeType)("JSXIdentifier", "JSXNamespacedName") }, value: { optional: true, validate: (0, pe.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer") } } });
      (0, Je.default)("JSXClosingElement", { visitor: ["name"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, pe.assertNodeType)("JSXIdentifier", "JSXMemberExpression") } } });
      (0, Je.default)("JSXElement", { builder: ["openingElement", "closingElement", "children", "selfClosing"], visitor: ["openingElement", "children", "closingElement"], aliases: ["JSX", "Immutable", "Expression"], fields: { openingElement: { validate: (0, pe.assertNodeType)("JSXOpeningElement") }, closingElement: { optional: true, validate: (0, pe.assertNodeType)("JSXClosingElement") }, children: { validate: (0, pe.chain)((0, pe.assertValueType)("array"), (0, pe.assertEach)((0, pe.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement"))) } } });
      (0, Je.default)("JSXEmptyExpression", { aliases: ["JSX", "Expression"] });
      (0, Je.default)("JSXExpressionContainer", { visitor: ["expression"], aliases: ["JSX", "Immutable"], fields: { expression: { validate: (0, pe.assertNodeType)("Expression") } } });
      (0, Je.default)("JSXSpreadChild", { visitor: ["expression"], aliases: ["JSX", "Immutable"], fields: { expression: { validate: (0, pe.assertNodeType)("Expression") } } });
      (0, Je.default)("JSXIdentifier", { builder: ["name"], aliases: ["JSX", "Expression"], fields: { name: { validate: (0, pe.assertValueType)("string") } } });
      (0, Je.default)("JSXMemberExpression", { visitor: ["object", "property"], aliases: ["JSX", "Expression"], fields: { object: { validate: (0, pe.assertNodeType)("JSXMemberExpression", "JSXIdentifier") }, property: { validate: (0, pe.assertNodeType)("JSXIdentifier") } } });
      (0, Je.default)("JSXNamespacedName", { visitor: ["namespace", "name"], aliases: ["JSX"], fields: { namespace: { validate: (0, pe.assertNodeType)("JSXIdentifier") }, name: { validate: (0, pe.assertNodeType)("JSXIdentifier") } } });
      (0, Je.default)("JSXOpeningElement", { builder: ["name", "attributes", "selfClosing"], visitor: ["name", "attributes"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, pe.assertNodeType)("JSXIdentifier", "JSXMemberExpression") }, selfClosing: { default: false, validate: (0, pe.assertValueType)("boolean") }, attributes: { validate: (0, pe.chain)((0, pe.assertValueType)("array"), (0, pe.assertEach)((0, pe.assertNodeType)("JSXAttribute", "JSXSpreadAttribute"))) } } });
      (0, Je.default)("JSXSpreadAttribute", { visitor: ["argument"], aliases: ["JSX"], fields: { argument: { validate: (0, pe.assertNodeType)("Expression") } } });
      (0, Je.default)("JSXText", { aliases: ["JSX", "Immutable"], builder: ["value"], fields: { value: { validate: (0, pe.assertValueType)("string") } } });
    });
    var JD = c(() => {
      "use strict";
      var XD = _t(), $D = KR(XD);
      function KR(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(KR, "_interopRequireDefault");
      (0, $D.default)("Noop", { visitor: [] });
      (0, $D.default)("ParenthesizedExpression", { visitor: ["expression"], aliases: ["Expression", "ExpressionWrapper"], fields: { expression: { validate: (0, XD.assertNodeType)("Expression") } } });
    });
    var QD = c(() => {
      "use strict";
      var nt = _t(), Et = WR(nt);
      function WR(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(WR, "_interopRequireDefault");
      (0, Et.default)("AwaitExpression", { builder: ["argument"], visitor: ["argument"], aliases: ["Expression", "Terminatorless"], fields: { argument: { validate: (0, nt.assertNodeType)("Expression") } } });
      (0, Et.default)("ForAwaitStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, nt.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, nt.assertNodeType)("Expression") }, body: { validate: (0, nt.assertNodeType)("Statement") } } });
      (0, Et.default)("BindExpression", { visitor: ["object", "callee"], aliases: ["Expression"], fields: {} });
      (0, Et.default)("Import", { aliases: ["Expression"] });
      (0, Et.default)("Decorator", { visitor: ["expression"], fields: { expression: { validate: (0, nt.assertNodeType)("Expression") } } });
      (0, Et.default)("DoExpression", { visitor: ["body"], aliases: ["Expression"], fields: { body: { validate: (0, nt.assertNodeType)("BlockStatement") } } });
      (0, Et.default)("ExportDefaultSpecifier", { visitor: ["exported"], aliases: ["ModuleSpecifier"], fields: { exported: { validate: (0, nt.assertNodeType)("Identifier") } } });
      (0, Et.default)("ExportNamespaceSpecifier", { visitor: ["exported"], aliases: ["ModuleSpecifier"], fields: { exported: { validate: (0, nt.assertNodeType)("Identifier") } } });
      (0, Et.default)("RestProperty", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, nt.assertNodeType)("LVal") } } });
      (0, Et.default)("SpreadProperty", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, nt.assertNodeType)("Expression") } } });
    });
    var zD = c(() => {
      "use strict";
      _t();
      jD();
      VD();
      WD();
      HD();
      JD();
      QD();
    });
    var ZD = c((cn) => {
      "use strict";
      cn.__esModule = true;
      cn.isReactComponent = void 0;
      cn.isCompatTag = $R;
      cn.buildChildren = QR;
      var HR = It(), li = XR(HR);
      function XR(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(XR, "_interopRequireWildcard");
      var U4 = cn.isReactComponent = li.buildMatchMemberExpression("React.Component");
      function $R(e) {
        return !!e && /^[a-z]|\-/.test(e);
      }
      i($R, "isCompatTag");
      function JR(e, t) {
        for (var r = e.value.split(/\r\n|\n|\r/), n = 0, s = 0; s < r.length; s++)
          r[s].match(/[^ \t]/) && (n = s);
        for (var u = "", a = 0; a < r.length; a++) {
          var l = r[a], p = a === 0, f = a === r.length - 1, m = a === n, h = l.replace(/\t/g, " ");
          p || (h = h.replace(/^[ ]+/, "")), f || (h = h.replace(/[ ]+$/, "")), h && (m || (h += " "), u += h);
        }
        u && t.push(li.stringLiteral(u));
      }
      i(JR, "cleanJSXElementLiteralChild");
      function QR(e) {
        for (var t = [], r = 0; r < e.children.length; r++) {
          var n = e.children[r];
          if (li.isJSXText(n)) {
            JR(n, t);
            continue;
          }
          li.isJSXExpressionContainer(n) && (n = n.expression), !li.isJSXEmptyExpression(n) && t.push(n);
        }
        return t;
      }
      i(QR, "buildChildren");
    });
    var It = c((y) => {
      "use strict";
      y.__esModule = true;
      y.createTypeAnnotationBasedOnTypeof = y.removeTypeDuplicates = y.createUnionTypeAnnotation = y.valueToNode = y.toBlock = y.toExpression = y.toStatement = y.toBindingIdentifierName = y.toIdentifier = y.toKeyAlias = y.toSequenceExpression = y.toComputedKey = y.isNodesEquivalent = y.isImmutable = y.isScope = y.isSpecifierDefault = y.isVar = y.isBlockScoped = y.isLet = y.isValidIdentifier = y.isReferenced = y.isBinding = y.getOuterBindingIdentifiers = y.getBindingIdentifiers = y.TYPES = y.react = y.DEPRECATED_KEYS = y.BUILDER_KEYS = y.NODE_FIELDS = y.ALIAS_KEYS = y.VISITOR_KEYS = y.NOT_LOCAL_BINDING = y.BLOCK_SCOPED_SYMBOL = y.INHERIT_KEYS = y.UNARY_OPERATORS = y.STRING_UNARY_OPERATORS = y.NUMBER_UNARY_OPERATORS = y.BOOLEAN_UNARY_OPERATORS = y.BINARY_OPERATORS = y.NUMBER_BINARY_OPERATORS = y.BOOLEAN_BINARY_OPERATORS = y.COMPARISON_BINARY_OPERATORS = y.EQUALITY_BINARY_OPERATORS = y.BOOLEAN_NUMBER_BINARY_OPERATORS = y.UPDATE_OPERATORS = y.LOGICAL_OPERATORS = y.COMMENT_KEYS = y.FOR_INIT_KEYS = y.FLATTENABLE_KEYS = y.STATEMENT_OR_BLOCK_KEYS = void 0;
      var zR = Ip(), ZR = Nr(zR), e2 = Hn(), dt = Nr(e2), t2 = va(), br = Nr(t2), r2 = ms(), eA = Nr(r2), Fe = Ds();
      Object.defineProperty(y, "STATEMENT_OR_BLOCK_KEYS", { enumerable: true, get: i(function() {
        return Fe.STATEMENT_OR_BLOCK_KEYS;
      }, "get") });
      Object.defineProperty(y, "FLATTENABLE_KEYS", { enumerable: true, get: i(function() {
        return Fe.FLATTENABLE_KEYS;
      }, "get") });
      Object.defineProperty(y, "FOR_INIT_KEYS", { enumerable: true, get: i(function() {
        return Fe.FOR_INIT_KEYS;
      }, "get") });
      Object.defineProperty(y, "COMMENT_KEYS", { enumerable: true, get: i(function() {
        return Fe.COMMENT_KEYS;
      }, "get") });
      Object.defineProperty(y, "LOGICAL_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.LOGICAL_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "UPDATE_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.UPDATE_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "BOOLEAN_NUMBER_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.BOOLEAN_NUMBER_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "EQUALITY_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.EQUALITY_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "COMPARISON_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.COMPARISON_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "BOOLEAN_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.BOOLEAN_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "NUMBER_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.NUMBER_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "BOOLEAN_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.BOOLEAN_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "NUMBER_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.NUMBER_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "STRING_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.STRING_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Fe.UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(y, "INHERIT_KEYS", { enumerable: true, get: i(function() {
        return Fe.INHERIT_KEYS;
      }, "get") });
      Object.defineProperty(y, "BLOCK_SCOPED_SYMBOL", { enumerable: true, get: i(function() {
        return Fe.BLOCK_SCOPED_SYMBOL;
      }, "get") });
      Object.defineProperty(y, "NOT_LOCAL_BINDING", { enumerable: true, get: i(function() {
        return Fe.NOT_LOCAL_BINDING;
      }, "get") });
      y.is = p2;
      y.isType = uA;
      y.validate = aA;
      y.shallowEqual = E2;
      y.appendToMemberExpression = d2;
      y.prependToMemberExpression = m2;
      y.ensureBlock = D2;
      y.clone = oA;
      y.cloneWithoutLoc = A2;
      y.cloneDeep = h2;
      y.buildMatchMemberExpression = y2;
      y.removeComments = T2;
      y.inheritsComments = x2;
      y.inheritTrailingComments = lA;
      y.inheritLeadingComments = cA;
      y.inheritInnerComments = pA;
      y.inherits = g2;
      y.assertNode = v2;
      y.isNode = fA;
      y.traverseFast = Us;
      y.removeProperties = dA;
      y.removePropertiesDeep = F2;
      var nA = Fa();
      Object.defineProperty(y, "getBindingIdentifiers", { enumerable: true, get: i(function() {
        return nA.getBindingIdentifiers;
      }, "get") });
      Object.defineProperty(y, "getOuterBindingIdentifiers", { enumerable: true, get: i(function() {
        return nA.getOuterBindingIdentifiers;
      }, "get") });
      var mt = n0();
      Object.defineProperty(y, "isBinding", { enumerable: true, get: i(function() {
        return mt.isBinding;
      }, "get") });
      Object.defineProperty(y, "isReferenced", { enumerable: true, get: i(function() {
        return mt.isReferenced;
      }, "get") });
      Object.defineProperty(y, "isValidIdentifier", { enumerable: true, get: i(function() {
        return mt.isValidIdentifier;
      }, "get") });
      Object.defineProperty(y, "isLet", { enumerable: true, get: i(function() {
        return mt.isLet;
      }, "get") });
      Object.defineProperty(y, "isBlockScoped", { enumerable: true, get: i(function() {
        return mt.isBlockScoped;
      }, "get") });
      Object.defineProperty(y, "isVar", { enumerable: true, get: i(function() {
        return mt.isVar;
      }, "get") });
      Object.defineProperty(y, "isSpecifierDefault", { enumerable: true, get: i(function() {
        return mt.isSpecifierDefault;
      }, "get") });
      Object.defineProperty(y, "isScope", { enumerable: true, get: i(function() {
        return mt.isScope;
      }, "get") });
      Object.defineProperty(y, "isImmutable", { enumerable: true, get: i(function() {
        return mt.isImmutable;
      }, "get") });
      Object.defineProperty(y, "isNodesEquivalent", { enumerable: true, get: i(function() {
        return mt.isNodesEquivalent;
      }, "get") });
      var Rt = k0();
      Object.defineProperty(y, "toComputedKey", { enumerable: true, get: i(function() {
        return Rt.toComputedKey;
      }, "get") });
      Object.defineProperty(y, "toSequenceExpression", { enumerable: true, get: i(function() {
        return Rt.toSequenceExpression;
      }, "get") });
      Object.defineProperty(y, "toKeyAlias", { enumerable: true, get: i(function() {
        return Rt.toKeyAlias;
      }, "get") });
      Object.defineProperty(y, "toIdentifier", { enumerable: true, get: i(function() {
        return Rt.toIdentifier;
      }, "get") });
      Object.defineProperty(y, "toBindingIdentifierName", { enumerable: true, get: i(function() {
        return Rt.toBindingIdentifierName;
      }, "get") });
      Object.defineProperty(y, "toStatement", { enumerable: true, get: i(function() {
        return Rt.toStatement;
      }, "get") });
      Object.defineProperty(y, "toExpression", { enumerable: true, get: i(function() {
        return Rt.toExpression;
      }, "get") });
      Object.defineProperty(y, "toBlock", { enumerable: true, get: i(function() {
        return Rt.toBlock;
      }, "get") });
      Object.defineProperty(y, "valueToNode", { enumerable: true, get: i(function() {
        return Rt.valueToNode;
      }, "get") });
      var oo = M0();
      Object.defineProperty(y, "createUnionTypeAnnotation", { enumerable: true, get: i(function() {
        return oo.createUnionTypeAnnotation;
      }, "get") });
      Object.defineProperty(y, "removeTypeDuplicates", { enumerable: true, get: i(function() {
        return oo.removeTypeDuplicates;
      }, "get") });
      Object.defineProperty(y, "createTypeAnnotationBasedOnTypeof", { enumerable: true, get: i(function() {
        return oo.createTypeAnnotationBasedOnTypeof;
      }, "get") });
      var n2 = G0(), iA = Nr(n2), i2 = ED(), s2 = Nr(i2), u2 = MD(), a2 = Nr(u2);
      zD();
      var pn = _t(), o2 = ZD(), l2 = c2(o2);
      function c2(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(c2, "_interopRequireWildcard");
      function Nr(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Nr, "_interopRequireDefault");
      var w = y;
      function sA(e) {
        var t = w["is" + e];
        t || (t = w["is" + e] = function(r, n) {
          return w.is(e, r, n);
        }), w["assert" + e] = function(r, n) {
          if (n = n || {}, !t(r, n))
            throw new Error("Expected type " + (0, eA.default)(e) + " with option " + (0, eA.default)(n));
        };
      }
      i(sA, "registerType");
      y.VISITOR_KEYS = pn.VISITOR_KEYS;
      y.ALIAS_KEYS = pn.ALIAS_KEYS;
      y.NODE_FIELDS = pn.NODE_FIELDS;
      y.BUILDER_KEYS = pn.BUILDER_KEYS;
      y.DEPRECATED_KEYS = pn.DEPRECATED_KEYS;
      y.react = l2;
      for (tA in w.VISITOR_KEYS)
        sA(tA);
      var tA;
      w.FLIPPED_ALIAS_KEYS = {};
      (0, br.default)(w.ALIAS_KEYS).forEach(function(e) {
        w.ALIAS_KEYS[e].forEach(function(t) {
          var r = w.FLIPPED_ALIAS_KEYS[t] = w.FLIPPED_ALIAS_KEYS[t] || [];
          r.push(e);
        });
      });
      (0, br.default)(w.FLIPPED_ALIAS_KEYS).forEach(function(e) {
        w[e.toUpperCase() + "_TYPES"] = w.FLIPPED_ALIAS_KEYS[e], sA(e);
      });
      var j4 = y.TYPES = (0, br.default)(w.VISITOR_KEYS).concat((0, br.default)(w.FLIPPED_ALIAS_KEYS)).concat((0, br.default)(w.DEPRECATED_KEYS));
      function p2(e, t, r) {
        if (!t)
          return false;
        var n = uA(t.type, e);
        return n ? typeof r > "u" ? true : w.shallowEqual(t, r) : false;
      }
      i(p2, "is");
      function uA(e, t) {
        if (e === t)
          return true;
        if (w.ALIAS_KEYS[t])
          return false;
        var r = w.FLIPPED_ALIAS_KEYS[t];
        if (r) {
          if (r[0] === e)
            return true;
          for (var u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, dt.default)(u); ; ) {
            var a;
            if (n) {
              if (s >= u.length)
                break;
              a = u[s++];
            } else {
              if (s = u.next(), s.done)
                break;
              a = s.value;
            }
            var l = a;
            if (e === l)
              return true;
          }
        }
        return false;
      }
      i(uA, "isType");
      (0, br.default)(w.BUILDER_KEYS).forEach(function(e) {
        var t = w.BUILDER_KEYS[e];
        function r() {
          if (arguments.length > t.length)
            throw new Error("t." + e + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + t.length));
          var n = {};
          n.type = e;
          for (var s = 0, l = t, u = Array.isArray(l), a = 0, l = u ? l : (0, dt.default)(l); ; ) {
            var p;
            if (u) {
              if (a >= l.length)
                break;
              p = l[a++];
            } else {
              if (a = l.next(), a.done)
                break;
              p = a.value;
            }
            var f = p, m = w.NODE_FIELDS[e][f], h = arguments[s++];
            h === void 0 && (h = (0, s2.default)(m.default)), n[f] = h;
          }
          for (var E in n)
            aA(n, E, n[E]);
          return n;
        }
        i(r, "builder"), w[e] = r, w[e[0].toLowerCase() + e.slice(1)] = r;
      });
      var f2 = i(function(t) {
        var r = w.DEPRECATED_KEYS[t];
        function n(s) {
          return function() {
            return console.trace("The node type " + t + " has been renamed to " + r), s.apply(this, arguments);
          };
        }
        i(n, "proxy"), w[t] = w[t[0].toLowerCase() + t.slice(1)] = n(w[r]), w["is" + t] = n(w["is" + r]), w["assert" + t] = n(w["assert" + r]);
      }, "_loop");
      for (rA in w.DEPRECATED_KEYS)
        f2(rA);
      var rA;
      function aA(e, t, r) {
        if (!!e) {
          var n = w.NODE_FIELDS[e.type];
          if (!!n) {
            var s = n[t];
            !s || !s.validate || s.optional && r == null || s.validate(e, t, r);
          }
        }
      }
      i(aA, "validate");
      function E2(e, t) {
        for (var r = (0, br.default)(t), u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, dt.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var l = a;
          if (e[l] !== t[l])
            return false;
        }
        return true;
      }
      i(E2, "shallowEqual");
      function d2(e, t, r) {
        return e.object = w.memberExpression(e.object, e.property, e.computed), e.property = t, e.computed = !!r, e;
      }
      i(d2, "appendToMemberExpression");
      function m2(e, t) {
        return e.object = w.memberExpression(t, e.object), e;
      }
      i(m2, "prependToMemberExpression");
      function D2(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "body";
        return e[t] = w.toBlock(e[t], e);
      }
      i(D2, "ensureBlock");
      function oA(e) {
        if (!e)
          return e;
        var t = {};
        for (var r in e)
          r[0] !== "_" && (t[r] = e[r]);
        return t;
      }
      i(oA, "clone");
      function A2(e) {
        var t = oA(e);
        return delete t.loc, t;
      }
      i(A2, "cloneWithoutLoc");
      function h2(e) {
        if (!e)
          return e;
        var t = {};
        for (var r in e)
          if (r[0] !== "_") {
            var n = e[r];
            n && (n.type ? n = w.cloneDeep(n) : Array.isArray(n) && (n = n.map(w.cloneDeep))), t[r] = n;
          }
        return t;
      }
      i(h2, "cloneDeep");
      function y2(e, t) {
        var r = e.split(".");
        return function(n) {
          if (!w.isMemberExpression(n))
            return false;
          for (var s = [n], u = 0; s.length; ) {
            var a = s.shift();
            if (t && u === r.length)
              return true;
            if (w.isIdentifier(a)) {
              if (r[u] !== a.name)
                return false;
            } else if (w.isStringLiteral(a)) {
              if (r[u] !== a.value)
                return false;
            } else if (w.isMemberExpression(a)) {
              if (a.computed && !w.isStringLiteral(a.property))
                return false;
              s.push(a.object), s.push(a.property);
              continue;
            } else
              return false;
            if (++u > r.length)
              return false;
          }
          return true;
        };
      }
      i(y2, "buildMatchMemberExpression");
      function T2(e) {
        for (var n = w.COMMENT_KEYS, t = Array.isArray(n), r = 0, n = t ? n : (0, dt.default)(n); ; ) {
          var s;
          if (t) {
            if (r >= n.length)
              break;
            s = n[r++];
          } else {
            if (r = n.next(), r.done)
              break;
            s = r.value;
          }
          var u = s;
          delete e[u];
        }
        return e;
      }
      i(T2, "removeComments");
      function x2(e, t) {
        return lA(e, t), cA(e, t), pA(e, t), e;
      }
      i(x2, "inheritsComments");
      function lA(e, t) {
        lo("trailingComments", e, t);
      }
      i(lA, "inheritTrailingComments");
      function cA(e, t) {
        lo("leadingComments", e, t);
      }
      i(cA, "inheritLeadingComments");
      function pA(e, t) {
        lo("innerComments", e, t);
      }
      i(pA, "inheritInnerComments");
      function lo(e, t, r) {
        t && r && (t[e] = (0, a2.default)([].concat(t[e], r[e]).filter(Boolean)));
      }
      i(lo, "_inheritComments");
      function g2(e, t) {
        if (!e || !t)
          return e;
        for (var s = w.INHERIT_KEYS.optional, r = Array.isArray(s), n = 0, s = r ? s : (0, dt.default)(s); ; ) {
          var u;
          if (r) {
            if (n >= s.length)
              break;
            u = s[n++];
          } else {
            if (n = s.next(), n.done)
              break;
            u = n.value;
          }
          var a = u;
          e[a] == null && (e[a] = t[a]);
        }
        for (var l in t)
          l[0] === "_" && (e[l] = t[l]);
        for (var m = w.INHERIT_KEYS.force, p = Array.isArray(m), f = 0, m = p ? m : (0, dt.default)(m); ; ) {
          var h;
          if (p) {
            if (f >= m.length)
              break;
            h = m[f++];
          } else {
            if (f = m.next(), f.done)
              break;
            h = f.value;
          }
          var E = h;
          e[E] = t[E];
        }
        return w.inheritsComments(e, t), e;
      }
      i(g2, "inherits");
      function v2(e) {
        if (!fA(e))
          throw new TypeError("Not a valid node " + (e && e.type));
      }
      i(v2, "assertNode");
      function fA(e) {
        return !!(e && pn.VISITOR_KEYS[e.type]);
      }
      i(fA, "isNode");
      (0, iA.default)(w);
      (0, iA.default)(w.VISITOR_KEYS);
      function Us(e, t, r) {
        if (!!e) {
          var n = w.VISITOR_KEYS[e.type];
          if (!!n) {
            r = r || {}, t(e, r);
            for (var a = n, s = Array.isArray(a), u = 0, a = s ? a : (0, dt.default)(a); ; ) {
              var l;
              if (s) {
                if (u >= a.length)
                  break;
                l = a[u++];
              } else {
                if (u = a.next(), u.done)
                  break;
                l = u.value;
              }
              var p = l, f = e[p];
              if (Array.isArray(f))
                for (var E = f, m = Array.isArray(E), h = 0, E = m ? E : (0, dt.default)(E); ; ) {
                  var x;
                  if (m) {
                    if (h >= E.length)
                      break;
                    x = E[h++];
                  } else {
                    if (h = E.next(), h.done)
                      break;
                    x = h.value;
                  }
                  var F = x;
                  Us(F, t, r);
                }
              else
                Us(f, t, r);
            }
          }
        }
      }
      i(Us, "traverseFast");
      var EA = ["tokens", "start", "end", "loc", "raw", "rawValue"], S2 = w.COMMENT_KEYS.concat(["comments"]).concat(EA);
      function dA(e, t) {
        t = t || {};
        for (var r = t.preserveComments ? EA : S2, u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, dt.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var l = a;
          e[l] != null && (e[l] = void 0);
        }
        for (var p in e)
          p[0] === "_" && e[p] != null && (e[p] = void 0);
        for (var f = (0, ZR.default)(e), E = f, m = Array.isArray(E), h = 0, E = m ? E : (0, dt.default)(E); ; ) {
          var x;
          if (m) {
            if (h >= E.length)
              break;
            x = E[h++];
          } else {
            if (h = E.next(), h.done)
              break;
            x = h.value;
          }
          var F = x;
          e[F] = null;
        }
      }
      i(dA, "removeProperties");
      function F2(e, t) {
        return Us(e, dA, t), e;
      }
      i(F2, "removePropertiesDeep");
    });
    var re = c((V) => {
      "use strict";
      Object.defineProperty(V, "__esModule", { value: true });
      var C2 = It(), J = i(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }, "classCallCheck"), ee = i(function(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }, "inherits"), te = i(function(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e;
      }, "possibleConstructorReturn"), mA = /* @__PURE__ */ Object.create(null), Ys = /* @__PURE__ */ Object.create(null), DA = Symbol(), ci = /* @__PURE__ */ Object.create(null), ie = function() {
        function e() {
          J(this, e), this.loc = { source: null, start: { line: 0, column: 0 }, end: { line: 0, column: 0 } }, this[DA] = [];
        }
        return i(e, "Node"), e.prototype.toJSON = i(function() {
          var r = this;
          return Object.getOwnPropertyNames(this).reduce(function(n, s) {
            if (s === "loc" || s === "parent")
              return n;
            var u = r[s];
            return Array.isArray(u) ? n[s] = u.map(function(a) {
              return a.toJSON();
            }) : n[s] = u && u.toJSON ? u.toJSON() : u, n;
          }, { type: this.type });
        }, "toJSON"), e.registerType = i(function(r) {
          e["is" + r] || (e["is" + r] = function(n) {
            return js(n, r);
          });
        }, "registerType"), e;
      }();
      ie.registerType("Scope");
      function js(e, t) {
        return e ? e.type === t || ci[t] && ci[t][e.type] || C2.is(t, e) : false;
      }
      i(js, "is");
      function he(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          r[n - 1] = arguments[n];
        e.prototype.visitorKeys = r;
      }
      i(he, "visitor");
      function me(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          r[n - 1] = arguments[n];
        e.prototype.aliases = r;
        for (var s = 0, u = r.length; s < u; s++) {
          var a = r[s];
          Ys[a] || (Ys[a] = []), Ys[a].push(e.prototype.type), ci[a] || (ci[a] = {}), ci[a][e.prototype.type] = true, ie.registerType(a);
        }
      }
      i(me, "alias");
      function Q(e, t) {
        e.prototype.type = t, mA[t] = e, ie.registerType(t);
      }
      i(Q, "type");
      var Vs = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "Fragment"), t;
      }(ie);
      Q(Vs, "Fragment");
      me(Vs, "Statement");
      he(Vs, "value");
      var Ks = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "PrintExpressionStatement"), t;
      }(ie);
      Q(Ks, "PrintExpressionStatement");
      me(Ks, "Statement", "PrintStatement");
      he(Ks, "value");
      var Ws = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "PrintTextStatement"), t;
      }(ie);
      Q(Ws, "PrintTextStatement");
      me(Ws, "Statement", "PrintStatement");
      he(Ws, "value");
      var Ir = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "ConstantValue"), t.prototype.toString = i(function() {
          return "Const(" + this.value + ")";
        }, "toString"), t;
      }(ie);
      Q(Ir, "ConstantValue");
      me(Ir, "Expression", "Literal", "Immutable");
      var co = function(e) {
        ee(t, e);
        function t() {
          return J(this, t), te(this, e.apply(this, arguments));
        }
        return i(t, "StringLiteral"), t;
      }(Ir);
      Q(co, "StringLiteral");
      me(co, "Expression", "Literal", "Immutable");
      var po = function(e) {
        ee(t, e);
        function t() {
          return J(this, t), te(this, e.apply(this, arguments));
        }
        return i(t, "NumericLiteral"), t;
      }(Ir);
      Q(po, "NumericLiteral");
      me(po, "Expression", "Literal", "Immutable");
      var fo = function(e) {
        ee(t, e);
        function t(r) {
          return J(this, t), te(this, e.call(this, r));
        }
        return i(t, "BooleanLiteral"), t;
      }(Ir);
      Q(fo, "BooleanLiteral");
      me(fo, "Expression", "Literal", "Immutable");
      var Eo = function(e) {
        ee(t, e);
        function t() {
          return J(this, t), te(this, e.call(this, null));
        }
        return i(t, "NullLiteral"), t;
      }(Ir);
      Q(Eo, "NullLiteral");
      me(Eo, "Expression", "Literal", "Immutable");
      var mo = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.name = r, n;
        }
        return i(t, "Identifier"), t;
      }(ie);
      Q(mo, "Identifier");
      me(mo, "Expression");
      var Hs = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.operator = r, s.argument = n, s;
        }
        return i(t, "UnaryExpression"), t;
      }(ie);
      Q(Hs, "UnaryExpression");
      me(Hs, "Expression", "UnaryLike");
      he(Hs, "argument");
      var pi = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.operator = r, u.left = n, u.right = s, u;
        }
        return i(t, "BinaryExpression"), t;
      }(ie);
      Q(pi, "BinaryExpression");
      me(pi, "Binary", "Expression");
      he(pi, "left", "right");
      var Xs = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this, "~", r, n));
          return s.wasImplicitConcatenation = false, s;
        }
        return i(t, "BinaryConcatExpression"), t;
      }(pi);
      Q(Xs, "BinaryConcatExpression");
      me(Xs, "BinaryExpression", "Binary", "Expression");
      he(Xs, "left", "right");
      var $s = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.test = r, u.consequent = n, u.alternate = s, u;
        }
        return i(t, "ConditionalExpression"), t;
      }(ie);
      Q($s, "ConditionalExpression");
      me($s, "Expression", "Conditional");
      he($s, "test", "consequent", "alternate");
      var Js = function(e) {
        ee(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          J(this, t);
          var n = te(this, e.call(this));
          return n.elements = r, n;
        }
        return i(t, "ArrayExpression"), t;
      }(ie);
      Q(Js, "ArrayExpression");
      me(Js, "Expression");
      he(Js, "elements");
      var Qs = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.object = r, u.property = n, u.computed = s, u;
        }
        return i(t, "MemberExpression"), t;
      }(ie);
      Q(Qs, "MemberExpression");
      me(Qs, "Expression", "LVal");
      he(Qs, "object", "property");
      var zs = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.callee = r, s.arguments = n, s;
        }
        return i(t, "CallExpression"), t;
      }(ie);
      Q(zs, "CallExpression");
      me(zs, "Expression", "FunctionInvocation");
      he(zs, "callee", "arguments");
      var Zs = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.name = r, s.value = n, s;
        }
        return i(t, "NamedArgumentExpression"), t;
      }(ie);
      Q(Zs, "NamedArgumentExpression");
      me(Zs, "Expression");
      he(Zs, "name", "value");
      var eu = function(e) {
        ee(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          J(this, t);
          var n = te(this, e.call(this));
          return n.properties = r, n;
        }
        return i(t, "ObjectExpression"), t;
      }(ie);
      Q(eu, "ObjectExpression");
      me(eu, "Expression");
      he(eu, "properties");
      var tu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.key = r, u.value = n, u.computed = s, u;
        }
        return i(t, "ObjectProperty"), t;
      }(ie);
      Q(tu, "ObjectProperty");
      me(tu, "Property", "ObjectMember");
      he(tu, "key", "value");
      var ru = function(e) {
        ee(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          J(this, t);
          var n = te(this, e.call(this));
          return n.expressions = r, n;
        }
        return i(t, "SequenceExpression"), t.prototype.add = i(function(n) {
          this.expressions.push(n), this.loc.end = n.loc.end;
        }, "add"), t;
      }(ie);
      Q(ru, "SequenceExpression");
      me(ru, "Expression", "Scope");
      he(ru, "expressions");
      var nu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.target = r, u.start = n, u.end = s, u;
        }
        return i(t, "SliceExpression"), t;
      }(ie);
      Q(nu, "SliceExpression");
      me(nu, "Expression");
      he(nu, "source", "start", "end");
      var iu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.target = r, u.name = n, u.arguments = s, u;
        }
        return i(t, "FilterExpression"), t;
      }(ie);
      Q(iu, "FilterExpression");
      me(iu, "Expression");
      he(iu, "target", "arguments");
      var su = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.name = r, n.attributes = [], n.children = [], n.selfClosing = false, n;
        }
        return i(t, "Element"), t;
      }(ie);
      Q(su, "Element");
      me(su, "Expression");
      he(su, "attributes", "children");
      var Do = function(e) {
        ee(t, e);
        function t(r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          J(this, t);
          var s = te(this, e.call(this));
          return s.name = r, s.value = n, s;
        }
        return i(t, "Attribute"), t.prototype.isImmutable = i(function() {
          return js(this.name, "Identifier") && js(this.value, "Immutable");
        }, "isImmutable"), t;
      }(ie);
      Q(Do, "Attribute");
      he(Do, "name", "value");
      var Ao = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "TwigComment"), t;
      }(ie);
      Q(Ao, "TwigComment");
      he(Ao, "value");
      var ho = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "HtmlComment"), t;
      }(ie);
      Q(ho, "HtmlComment");
      he(ho, "value");
      var yo = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.declarationType = r, n.parts = [], n;
        }
        return i(t, "Declaration"), t;
      }(ie);
      Q(yo, "Declaration");
      he(yo, "parts");
      var AA = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.tagName = r, n.parts = [], n.sections = [], n;
        }
        return i(t, "GenericTwigTag"), t;
      }(ie);
      Q(AA, "GenericTwigTag");
      var hA = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.tokenType = r, s.tokenText = n, s;
        }
        return i(t, "GenericToken"), t;
      }(ie);
      Q(hA, "GenericToken");
      V.TYPE_MAP = mA;
      V.ALIAS_TO_TYPE = Ys;
      V.PATH_CACHE_KEY = DA;
      V.Node = ie;
      V.is = js;
      V.visitor = he;
      V.alias = me;
      V.type = Q;
      V.Fragment = Vs;
      V.PrintExpressionStatement = Ks;
      V.PrintTextStatement = Ws;
      V.ConstantValue = Ir;
      V.StringLiteral = co;
      V.NumericLiteral = po;
      V.BooleanLiteral = fo;
      V.NullLiteral = Eo;
      V.Identifier = mo;
      V.UnaryExpression = Hs;
      V.BinaryExpression = pi;
      V.BinaryConcatExpression = Xs;
      V.ConditionalExpression = $s;
      V.ArrayExpression = Js;
      V.MemberExpression = Qs;
      V.CallExpression = zs;
      V.NamedArgumentExpression = Zs;
      V.ObjectExpression = eu;
      V.ObjectProperty = tu;
      V.SequenceExpression = ru;
      V.SliceExpression = nu;
      V.FilterExpression = iu;
      V.Element = su;
      V.Attribute = Do;
      V.TwigComment = Ao;
      V.HtmlComment = ho;
      V.Declaration = yo;
      V.GenericTwigTag = AA;
      V.GenericToken = hA;
    });
    var _A = c((x9, IA) => {
      function Y2(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n; )
          s[r] = t(e[r], r, e);
        return s;
      }
      i(Y2, "arrayMap");
      IA.exports = Y2;
    });
    var yu = c((g9, RA) => {
      var j2 = nr(), V2 = ft(), K2 = "[object Symbol]";
      function W2(e) {
        return typeof e == "symbol" || V2(e) && j2(e) == K2;
      }
      i(W2, "isSymbol");
      RA.exports = W2;
    });
    var Tu = c((v9, kA) => {
      var PA = zr(), H2 = _A(), X2 = rt(), $2 = yu(), J2 = 1 / 0, LA = PA ? PA.prototype : void 0, wA = LA ? LA.toString : void 0;
      function qA(e) {
        if (typeof e == "string")
          return e;
        if (X2(e))
          return H2(e, qA) + "";
        if ($2(e))
          return wA ? wA.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -J2 ? "-0" : t;
      }
      i(qA, "baseToString");
      kA.exports = qA;
    });
    var GA = c((S9, MA) => {
      function Q2(e, t, r) {
        var n = -1, s = e.length;
        t < 0 && (t = -t > s ? 0 : s + t), r = r > s ? s : r, r < 0 && (r += s), s = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var u = Array(s); ++n < s; )
          u[n] = e[n + t];
        return u;
      }
      i(Q2, "baseSlice");
      MA.exports = Q2;
    });
    var Oo = c((F9, UA) => {
      var z2 = GA();
      function Z2(e, t, r) {
        var n = e.length;
        return r = r === void 0 ? n : r, !t && r >= n ? e : z2(e, t, r);
      }
      i(Z2, "castSlice");
      UA.exports = Z2;
    });
    var jA = c((C9, YA) => {
      var e8 = ws();
      function t8(e, t) {
        for (var r = e.length; r-- && e8(t, e[r], 0) > -1; )
          ;
        return r;
      }
      i(t8, "charsEndIndex");
      YA.exports = t8;
    });
    var KA = c((B9, VA) => {
      function r8(e) {
        return e.split("");
      }
      i(r8, "asciiToArray");
      VA.exports = r8;
    });
    var HA = c((O9, WA) => {
      var n8 = "\\ud800-\\udfff", i8 = "\\u0300-\\u036f", s8 = "\\ufe20-\\ufe2f", u8 = "\\u20d0-\\u20ff", a8 = i8 + s8 + u8, o8 = "\\ufe0e\\ufe0f", l8 = "\\u200d", c8 = RegExp("[" + l8 + n8 + a8 + o8 + "]");
      function p8(e) {
        return c8.test(e);
      }
      i(p8, "hasUnicode");
      WA.exports = p8;
    });
    var th = c((b9, eh) => {
      var XA = "\\ud800-\\udfff", f8 = "\\u0300-\\u036f", E8 = "\\ufe20-\\ufe2f", d8 = "\\u20d0-\\u20ff", m8 = f8 + E8 + d8, D8 = "\\ufe0e\\ufe0f", A8 = "[" + XA + "]", bo = "[" + m8 + "]", No = "\\ud83c[\\udffb-\\udfff]", h8 = "(?:" + bo + "|" + No + ")", $A = "[^" + XA + "]", JA = "(?:\\ud83c[\\udde6-\\uddff]){2}", QA = "[\\ud800-\\udbff][\\udc00-\\udfff]", y8 = "\\u200d", zA = h8 + "?", ZA = "[" + D8 + "]?", T8 = "(?:" + y8 + "(?:" + [$A, JA, QA].join("|") + ")" + ZA + zA + ")*", x8 = ZA + zA + T8, g8 = "(?:" + [$A + bo + "?", bo, JA, QA, A8].join("|") + ")", v8 = RegExp(No + "(?=" + No + ")|" + g8 + x8, "g");
      function S8(e) {
        return e.match(v8) || [];
      }
      i(S8, "unicodeToArray");
      eh.exports = S8;
    });
    var Io = c((N9, rh) => {
      var F8 = KA(), C8 = HA(), B8 = th();
      function O8(e) {
        return C8(e) ? B8(e) : F8(e);
      }
      i(O8, "stringToArray");
      rh.exports = O8;
    });
    var xu = c((I9, nh) => {
      var b8 = Tu();
      function N8(e) {
        return e == null ? "" : b8(e);
      }
      i(N8, "toString");
      nh.exports = N8;
    });
    var sh = c((_9, ih) => {
      var I8 = /\s/;
      function _8(e) {
        for (var t = e.length; t-- && I8.test(e.charAt(t)); )
          ;
        return t;
      }
      i(_8, "trimmedEndIndex");
      ih.exports = _8;
    });
    var oh = c((R9, ah) => {
      var R8 = Tu(), P8 = Oo(), L8 = jA(), uh = Io(), w8 = xu(), q8 = sh();
      function k8(e, t, r) {
        if (e = w8(e), e && (r || t === void 0))
          return e.slice(0, q8(e) + 1);
        if (!e || !(t = R8(t)))
          return e;
        var n = uh(e), s = L8(n, uh(t)) + 1;
        return P8(n, 0, s).join("");
      }
      i(k8, "trimEnd");
      ah.exports = k8;
    });
    var ch = c((P9, lh) => {
      var M8 = ws();
      function G8(e, t) {
        for (var r = -1, n = e.length; ++r < n && M8(t, e[r], 0) > -1; )
          ;
        return r;
      }
      i(G8, "charsStartIndex");
      lh.exports = G8;
    });
    var Eh = c((L9, fh) => {
      var U8 = Tu(), Y8 = Oo(), j8 = ch(), ph = Io(), V8 = xu(), K8 = /^\s+/;
      function W8(e, t, r) {
        if (e = V8(e), e && (r || t === void 0))
          return e.replace(K8, "");
        if (!e || !(t = U8(t)))
          return e;
        var n = ph(e), s = j8(n, ph(t));
        return Y8(n, s).join("");
      }
      i(W8, "trimStart");
      fh.exports = W8;
    });
    var zh = c((m7, Qh) => {
      function J8(e) {
        return function(t, r, n) {
          for (var s = -1, u = Object(t), a = n(t), l = a.length; l--; ) {
            var p = a[e ? l : ++s];
            if (r(u[p], p, u) === false)
              break;
          }
          return t;
        };
      }
      i(J8, "createBaseFor");
      Qh.exports = J8;
    });
    var ey = c((D7, Zh) => {
      var Q8 = zh(), z8 = Q8();
      Zh.exports = z8;
    });
    var ry = c((A7, ty) => {
      var Z8 = ey(), eP = un();
      function tP(e, t) {
        return e && Z8(e, t, eP);
      }
      i(tP, "baseForOwn");
      ty.exports = tP;
    });
    var iy = c((h7, ny) => {
      var rP = Ns();
      function nP(e, t) {
        return function(r, n) {
          if (r == null)
            return r;
          if (!rP(r))
            return e(r, n);
          for (var s = r.length, u = t ? s : -1, a = Object(r); (t ? u-- : ++u < s) && n(a[u], u, a) !== false; )
            ;
          return r;
        };
      }
      i(nP, "createBaseEach");
      ny.exports = nP;
    });
    var uy = c((y7, sy) => {
      var iP = ry(), sP = iy(), uP = sP(iP);
      sy.exports = uP;
    });
    var oy = c((T7, ay) => {
      var aP = uy();
      function oP(e, t) {
        var r = [];
        return aP(e, function(n, s, u) {
          t(n, s, u) && r.push(n);
        }), r;
      }
      i(oP, "baseFilter");
      ay.exports = oP;
    });
    var cy = c((x7, ly) => {
      function lP(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e))
            return true;
        return false;
      }
      i(lP, "arraySome");
      ly.exports = lP;
    });
    var Uo = c((g7, py) => {
      var cP = io(), pP = cy(), fP = so(), EP = 1, dP = 2;
      function mP(e, t, r, n, s, u) {
        var a = r & EP, l = e.length, p = t.length;
        if (l != p && !(a && p > l))
          return false;
        var f = u.get(e), m = u.get(t);
        if (f && m)
          return f == t && m == e;
        var h = -1, E = true, x = r & dP ? new cP() : void 0;
        for (u.set(e, t), u.set(t, e); ++h < l; ) {
          var F = e[h], O = t[h];
          if (n)
            var g = a ? n(O, F, h, t, e, u) : n(F, O, h, e, t, u);
          if (g !== void 0) {
            if (g)
              continue;
            E = false;
            break;
          }
          if (x) {
            if (!pP(t, function(U, X) {
              if (!fP(x, X) && (F === U || s(F, U, r, n, u)))
                return x.push(X);
            })) {
              E = false;
              break;
            }
          } else if (!(F === O || s(F, O, r, n, u))) {
            E = false;
            break;
          }
        }
        return u.delete(e), u.delete(t), E;
      }
      i(mP, "equalArrays");
      py.exports = mP;
    });
    var Ey = c((v7, fy) => {
      function DP(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n, s) {
          r[++t] = [s, n];
        }), r;
      }
      i(DP, "mapToArray");
      fy.exports = DP;
    });
    var hy = c((S7, Ay) => {
      var dy = zr(), my = no(), AP = vs(), hP = Uo(), yP = Ey(), TP = qs(), xP = 1, gP = 2, vP = "[object Boolean]", SP = "[object Date]", FP = "[object Error]", CP = "[object Map]", BP = "[object Number]", OP = "[object RegExp]", bP = "[object Set]", NP = "[object String]", IP = "[object Symbol]", _P = "[object ArrayBuffer]", RP = "[object DataView]", Dy = dy ? dy.prototype : void 0, Yo = Dy ? Dy.valueOf : void 0;
      function PP(e, t, r, n, s, u, a) {
        switch (r) {
          case RP:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return false;
            e = e.buffer, t = t.buffer;
          case _P:
            return !(e.byteLength != t.byteLength || !u(new my(e), new my(t)));
          case vP:
          case SP:
          case BP:
            return AP(+e, +t);
          case FP:
            return e.name == t.name && e.message == t.message;
          case OP:
          case NP:
            return e == t + "";
          case CP:
            var l = yP;
          case bP:
            var p = n & xP;
            if (l || (l = TP), e.size != t.size && !p)
              return false;
            var f = a.get(e);
            if (f)
              return f == t;
            n |= gP, a.set(e, t);
            var m = hP(l(e), l(t), n, s, u, a);
            return a.delete(e), m;
          case IP:
            if (Yo)
              return Yo.call(e) == Yo.call(t);
        }
        return false;
      }
      i(PP, "equalByTag");
      Ay.exports = PP;
    });
    var xy = c((F7, Ty) => {
      var yy = Ja(), LP = 1, wP = Object.prototype, qP = wP.hasOwnProperty;
      function kP(e, t, r, n, s, u) {
        var a = r & LP, l = yy(e), p = l.length, f = yy(t), m = f.length;
        if (p != m && !a)
          return false;
        for (var h = p; h--; ) {
          var E = l[h];
          if (!(a ? E in t : qP.call(t, E)))
            return false;
        }
        var x = u.get(e), F = u.get(t);
        if (x && F)
          return x == t && F == e;
        var O = true;
        u.set(e, t), u.set(t, e);
        for (var g = a; ++h < p; ) {
          E = l[h];
          var U = e[E], X = t[E];
          if (n)
            var z = a ? n(X, U, E, t, e, u) : n(U, X, E, e, t, u);
          if (!(z === void 0 ? U === X || s(U, X, r, n, u) : z)) {
            O = false;
            break;
          }
          g || (g = E == "constructor");
        }
        if (O && !g) {
          var ke = e.constructor, We = t.constructor;
          ke != We && "constructor" in e && "constructor" in t && !(typeof ke == "function" && ke instanceof ke && typeof We == "function" && We instanceof We) && (O = false);
        }
        return u.delete(e), u.delete(t), O;
      }
      i(kP, "equalObjects");
      Ty.exports = kP;
    });
    var by = c((C7, Oy) => {
      var jo = Cs(), MP = Uo(), GP = hy(), UP = xy(), gy = oi(), vy = rt(), Sy = Bs(), YP = ja(), jP = 1, Fy = "[object Arguments]", Cy = "[object Array]", vu = "[object Object]", VP = Object.prototype, By = VP.hasOwnProperty;
      function KP(e, t, r, n, s, u) {
        var a = vy(e), l = vy(t), p = a ? Cy : gy(e), f = l ? Cy : gy(t);
        p = p == Fy ? vu : p, f = f == Fy ? vu : f;
        var m = p == vu, h = f == vu, E = p == f;
        if (E && Sy(e)) {
          if (!Sy(t))
            return false;
          a = true, m = false;
        }
        if (E && !m)
          return u || (u = new jo()), a || YP(e) ? MP(e, t, r, n, s, u) : GP(e, t, p, r, n, s, u);
        if (!(r & jP)) {
          var x = m && By.call(e, "__wrapped__"), F = h && By.call(t, "__wrapped__");
          if (x || F) {
            var O = x ? e.value() : e, g = F ? t.value() : t;
            return u || (u = new jo()), s(O, g, r, n, u);
          }
        }
        return E ? (u || (u = new jo()), UP(e, t, r, n, s, u)) : false;
      }
      i(KP, "baseIsEqualDeep");
      Oy.exports = KP;
    });
    var Vo = c((B7, _y) => {
      var WP = by(), Ny = ft();
      function Iy(e, t, r, n, s) {
        return e === t ? true : e == null || t == null || !Ny(e) && !Ny(t) ? e !== e && t !== t : WP(e, t, r, n, Iy, s);
      }
      i(Iy, "baseIsEqual");
      _y.exports = Iy;
    });
    var Py = c((O7, Ry) => {
      var HP = Cs(), XP = Vo(), $P = 1, JP = 2;
      function QP(e, t, r, n) {
        var s = r.length, u = s, a = !n;
        if (e == null)
          return !u;
        for (e = Object(e); s--; ) {
          var l = r[s];
          if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
            return false;
        }
        for (; ++s < u; ) {
          l = r[s];
          var p = l[0], f = e[p], m = l[1];
          if (a && l[2]) {
            if (f === void 0 && !(p in e))
              return false;
          } else {
            var h = new HP();
            if (n)
              var E = n(f, m, p, e, t, h);
            if (!(E === void 0 ? XP(m, f, $P | JP, n, h) : E))
              return false;
          }
        }
        return true;
      }
      i(QP, "baseIsMatch");
      Ry.exports = QP;
    });
    var Ko = c((b7, Ly) => {
      var zP = Br();
      function ZP(e) {
        return e === e && !zP(e);
      }
      i(ZP, "isStrictComparable");
      Ly.exports = ZP;
    });
    var qy = c((N7, wy) => {
      var e6 = Ko(), t6 = un();
      function r6(e) {
        for (var t = t6(e), r = t.length; r--; ) {
          var n = t[r], s = e[n];
          t[r] = [n, s, e6(s)];
        }
        return t;
      }
      i(r6, "getMatchData");
      wy.exports = r6;
    });
    var Wo = c((I7, ky) => {
      function n6(e, t) {
        return function(r) {
          return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
        };
      }
      i(n6, "matchesStrictComparable");
      ky.exports = n6;
    });
    var Gy = c((_7, My) => {
      var i6 = Py(), s6 = qy(), u6 = Wo();
      function a6(e) {
        var t = s6(e);
        return t.length == 1 && t[0][2] ? u6(t[0][0], t[0][1]) : function(r) {
          return r === e || i6(r, e, t);
        };
      }
      i(a6, "baseMatches");
      My.exports = a6;
    });
    var Su = c((R7, Uy) => {
      var o6 = rt(), l6 = yu(), c6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, p6 = /^\w*$/;
      function f6(e, t) {
        if (o6(e))
          return false;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || l6(e) ? true : p6.test(e) || !c6.test(e) || t != null && e in Object(t);
      }
      i(f6, "isKey");
      Uy.exports = f6;
    });
    var Vy = c((P7, jy) => {
      var Yy = Fs(), E6 = "Expected a function";
      function Ho(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new TypeError(E6);
        var r = i(function() {
          var n = arguments, s = t ? t.apply(this, n) : n[0], u = r.cache;
          if (u.has(s))
            return u.get(s);
          var a = e.apply(this, n);
          return r.cache = u.set(s, a) || u, a;
        }, "memoized");
        return r.cache = new (Ho.Cache || Yy)(), r;
      }
      i(Ho, "memoize");
      Ho.Cache = Yy;
      jy.exports = Ho;
    });
    var Wy = c((L7, Ky) => {
      var d6 = Vy(), m6 = 500;
      function D6(e) {
        var t = d6(e, function(n) {
          return r.size === m6 && r.clear(), n;
        }), r = t.cache;
        return t;
      }
      i(D6, "memoizeCapped");
      Ky.exports = D6;
    });
    var Xy = c((w7, Hy) => {
      var A6 = Wy(), h6 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, y6 = /\\(\\)?/g, T6 = A6(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(h6, function(r, n, s, u) {
          t.push(s ? u.replace(y6, "$1") : n || r);
        }), t;
      });
      Hy.exports = T6;
    });
    var Xo = c((q7, $y) => {
      var x6 = rt(), g6 = Su(), v6 = Xy(), S6 = xu();
      function F6(e, t) {
        return x6(e) ? e : g6(e, t) ? [e] : v6(S6(e));
      }
      i(F6, "castPath");
      $y.exports = F6;
    });
    var Oi = c((k7, Jy) => {
      var C6 = yu(), B6 = 1 / 0;
      function O6(e) {
        if (typeof e == "string" || C6(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -B6 ? "-0" : t;
      }
      i(O6, "toKey");
      Jy.exports = O6;
    });
    var $o = c((M7, Qy) => {
      var b6 = Xo(), N6 = Oi();
      function I6(e, t) {
        t = b6(t, e);
        for (var r = 0, n = t.length; e != null && r < n; )
          e = e[N6(t[r++])];
        return r && r == n ? e : void 0;
      }
      i(I6, "baseGet");
      Qy.exports = I6;
    });
    var Zy = c((G7, zy) => {
      var _6 = $o();
      function R6(e, t, r) {
        var n = e == null ? void 0 : _6(e, t);
        return n === void 0 ? r : n;
      }
      i(R6, "get");
      zy.exports = R6;
    });
    var t1 = c((U7, e1) => {
      function P6(e, t) {
        return e != null && t in Object(e);
      }
      i(P6, "baseHasIn");
      e1.exports = P6;
    });
    var n1 = c((Y7, r1) => {
      var L6 = Xo(), w6 = Ua(), q6 = rt(), k6 = Ya(), M6 = Os(), G6 = Oi();
      function U6(e, t, r) {
        t = L6(t, e);
        for (var n = -1, s = t.length, u = false; ++n < s; ) {
          var a = G6(t[n]);
          if (!(u = e != null && r(e, a)))
            break;
          e = e[a];
        }
        return u || ++n != s ? u : (s = e == null ? 0 : e.length, !!s && M6(s) && k6(a, s) && (q6(e) || w6(e)));
      }
      i(U6, "hasPath");
      r1.exports = U6;
    });
    var s1 = c((j7, i1) => {
      var Y6 = t1(), j6 = n1();
      function V6(e, t) {
        return e != null && j6(e, t, Y6);
      }
      i(V6, "hasIn");
      i1.exports = V6;
    });
    var a1 = c((V7, u1) => {
      var K6 = Vo(), W6 = Zy(), H6 = s1(), X6 = Su(), $6 = Ko(), J6 = Wo(), Q6 = Oi(), z6 = 1, Z6 = 2;
      function eL(e, t) {
        return X6(e) && $6(t) ? J6(Q6(e), t) : function(r) {
          var n = W6(r, e);
          return n === void 0 && n === t ? H6(r, e) : K6(t, n, z6 | Z6);
        };
      }
      i(eL, "baseMatchesProperty");
      u1.exports = eL;
    });
    var l1 = c((K7, o1) => {
      function tL(e) {
        return e;
      }
      i(tL, "identity");
      o1.exports = tL;
    });
    var p1 = c((W7, c1) => {
      function rL(e) {
        return function(t) {
          return t?.[e];
        };
      }
      i(rL, "baseProperty");
      c1.exports = rL;
    });
    var E1 = c((H7, f1) => {
      var nL = $o();
      function iL(e) {
        return function(t) {
          return nL(t, e);
        };
      }
      i(iL, "basePropertyDeep");
      f1.exports = iL;
    });
    var m1 = c((X7, d1) => {
      var sL = p1(), uL = E1(), aL = Su(), oL = Oi();
      function lL(e) {
        return aL(e) ? sL(oL(e)) : uL(e);
      }
      i(lL, "property");
      d1.exports = lL;
    });
    var A1 = c(($7, D1) => {
      var cL = Gy(), pL = a1(), fL = l1(), EL = rt(), dL = m1();
      function mL(e) {
        return typeof e == "function" ? e : e == null ? fL : typeof e == "object" ? EL(e) ? pL(e[0], e[1]) : cL(e) : dL(e);
      }
      i(mL, "baseIteratee");
      D1.exports = mL;
    });
    var y1 = c((J7, h1) => {
      var DL = Ka(), AL = oy(), hL = A1(), yL = rt();
      function TL(e, t) {
        var r = yL(e) ? DL : AL;
        return r(e, hL(t, 3));
      }
      i(TL, "filter");
      h1.exports = TL;
    });
    var Rw = {};
    al(Rw, { EXPRESSION_NEEDED: () => Y, FILTER_BLOCK: () => Ln, GROUP_TOP_LEVEL_LOGICAL: () => hr, INSIDE_OF_STRING: () => pt, IS_ROOT_LOGICAL_EXPRESSION: () => yr, NEWLINES_ONLY: () => wn, OVERRIDE_QUOTE_CHAR: () => Pn, PRESERVE_LEADING_WHITESPACE: () => Dr, PRESERVE_TRAILING_WHITESPACE: () => Ar, STRING_NEEDS_QUOTES: () => L, countNewlines: () => it, createTextGroups: () => So, findParentNode: () => sr, firstValueInAncestorChain: () => Dt, getDeepProperty: () => di, hasAtLeastTwoNewlines: () => N2, hasNoNewlines: () => lu, indentWithHardline: () => Dn, isContractableNodeType: () => fi, isEmptySequence: () => Fo, isHtmlCommentEqualTo: () => mi, isInlineElement: () => Ai, isMelodyNode: () => En, isMultipartExpression: () => Ei, isNotExpression: () => xo, isRootNode: () => vo, isTwigCommentEqualTo: () => Di, isValidIdentifierName: () => go, isWhitespaceNode: () => dn, isWhitespaceOnly: () => _r, languages: () => vw, normalizeHtmlComment: () => fu, normalizeTwigComment: () => Eu, options: () => _w, parsers: () => Bw, printChildBlock: () => Re, printChildGroups: () => An, printers: () => Iw, quoteChar: () => fn, registerContractableNodeType: () => O2, removeSurroundingWhitespace: () => mn, setDeepProperty: () => FA, shouldExpressionsBeWrapped: () => au, someParentNode: () => uu, stripHtmlCommentChars: () => cu, stripTwigCommentChars: () => pu, testCurrentAndParentNodes: () => b2, testCurrentNode: () => xA, walkParents: () => TA, wrapExpressionIfNeeded: () => qe, wrapInEnvironment: () => gA, wrapInStringInterpolation: () => ou });
    module.exports = zT(Rw);
    function Nn(e) {
      if (typeof e != "string") {
        if (Array.isArray(e)) {
          for (let t of e)
            Nn(t);
          return;
        }
        if (!(e && typeof e.type == "string"))
          throw new Error("Value " + JSON.stringify(e) + " is not a valid document");
      }
    }
    i(Nn, "assertDoc");
    function d(e) {
      if (process.env.NODE_ENV !== "production")
        for (let t of e)
          Nn(t);
      return { type: "concat", parts: e };
    }
    i(d, "concat");
    function I(e) {
      return process.env.NODE_ENV !== "production" && Nn(e), { type: "indent", contents: e };
    }
    i(I, "indent");
    function C(e, t = {}) {
      return process.env.NODE_ENV !== "production" && Nn(e), { type: "group", id: t.id, contents: e, break: Boolean(t.shouldBreak), expandedStates: t.expandedStates };
    }
    i(C, "group");
    function Kr(e) {
      if (process.env.NODE_ENV !== "production")
        for (let t of e)
          Nn(t);
      return { type: "fill", parts: e };
    }
    i(Kr, "fill");
    var ll = { type: "break-parent" };
    var ZT = { type: "line", hard: true };
    var ex = { type: "line", hard: true, literal: true };
    var B = { type: "line" };
    var ne = { type: "line", soft: true };
    var P = d([ZT, ll]);
    var Lw = d([ex, ll]);
    var ww = { type: "cursor", placeholder: Symbol("cursor") };
    function Ee(e, t) {
      let r = [];
      for (let n = 0; n < t.length; n++)
        n !== 0 && r.push(e), r.push(t[n]);
      return d(r);
    }
    i(Ee, "join");
    var qi = H(require("path"));
    var jl = H(Yl());
    var ki = i((e) => e.twigMelodyPlugins && Array.isArray(e.twigMelodyPlugins) ? e.twigMelodyPlugins.map((t) => t.trim()) : [], "getPluginPathsFromOptions");
    var Kx = i(() => {
      let e = __dirname.split(qi.default.sep), t = e.length - 1, r = e[t];
      for (; r !== "node_modules" && t > 0; )
        t--, r = e[t];
      t === 0 && (t = e.length - 2);
      let n = e.slice(0, t), s = qi.default.join(...n), u = __dirname.indexOf(s);
      return __dirname.slice(0, u) + s;
    }, "getProjectRoot");
    var Wx = i((pluginPath) => {
      try {
        let projectRoot = Kx(), requirePath = jl.default.sync(qi.default.resolve(projectRoot, pluginPath));
        return eval("require")(requirePath);
      } catch (e) {
        console.error("Could not load plugin path " + pluginPath);
        return;
      }
    }, "tryLoadPlugin");
    var ku = i((e) => {
      let t = [];
      return e && Array.isArray(e) && e.forEach((r) => {
        let n = Wx(r);
        n && t.push(n);
      }), t;
    }, "loadPlugins");
    var Vl = i((e) => {
      let t = [];
      return ku(e).forEach((n) => {
        t = t.concat(n.melodyExtensions);
      }), t.filter((n) => !!n);
    }, "getAdditionalMelodyExtensions");
    var L = Symbol("STRING_NEEDS_QUOTES");
    var Pn = Symbol("OVERRIDE_QUOTE_CHAR");
    var Y = Symbol("EXPRESSION_NEEDED");
    var pt = Symbol("INSIDE_OF_STRING");
    var Ln = Symbol("FILTER_BLOCK");
    var Dr = Symbol("PRESERVE_LEADING_WHITESPACE");
    var Ar = Symbol("PRESERVE_TRAILING_WHITESPACE");
    var wn = Symbol("NEWLINES_ONLY");
    var hr = Symbol("GROUP_TOP_LEVEL_LOGICAL");
    var yr = Symbol("IS_ROOT_LOGICAL_EXPRESSION");
    var Ce = H(re());
    var B2 = ["title", "h1", "h2", "h3", "h4", "h5", "h6", "a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dd", "dfn", "em", "i", "img", "kbd", "label", "li", "mark", "q", "s", "samp", "strong", "sup", "sub", "small", "span", "time", "tt", "var"];
    var To = ["ObjectExpression", "BinaryExpression", "ConditionalExpression", "ArrayExpression"];
    var O2 = i((e) => {
      To.push(e);
    }, "registerContractableNodeType");
    var fi = i((e) => {
      for (let t = 0; t < To.length; t++) {
        let r = To[t], n = "is" + r;
        if (Ce.Node[n] && Ce.Node[n].call(null, e))
          return true;
      }
      return !!Ce.Node.isUnaryLike(e);
    }, "isContractableNodeType");
    var xo = i((e) => Ce.Node.isUnaryLike(e) && e.operator === "not", "isNotExpression");
    var Ei = i((e) => Ce.Node.isBinaryExpression(e) || Ce.Node.isConditionalExpression(e) || Ce.Node.isUnaryLike(e), "isMultipartExpression");
    var TA = i((e, t, r = false) => {
      let n = e.stack.length - 1;
      for (r || (n -= 1); n >= 0; ) {
        let s = e.stack[n];
        if (En(s) && t(s) === false)
          return;
        n--;
      }
    }, "walkParents");
    var Dt = i((e, t, r) => {
      let n = e.stack.length - 2;
      for (; n >= 0; ) {
        let s = e.stack[n];
        if (En(s) && s[t] !== void 0)
          return s[t];
        n--;
      }
      return r;
    }, "firstValueInAncestorChain");
    var fn = i((e) => e && e.twigSingleQuote ? "'" : '"', "quoteChar");
    var go = i((e) => typeof e == "string" && /^[A-Z][0-9A-Z_$]*$/i.test(e), "isValidIdentifierName");
    var En = i((e) => {
      let t = e.__proto__;
      return typeof e == "object" && t.type && typeof Ce.Node["is" + t.type] == "function";
    }, "isMelodyNode");
    var sr = i((e) => {
      let t = e.stack.length - 2;
      for (; t >= 0; ) {
        let r = e.stack[t];
        if (En(r))
          return r;
        t--;
      }
      return null;
    }, "findParentNode");
    var vo = i((e) => sr(e) === null, "isRootNode");
    var b2 = i((e, t) => xA(e, t) || uu(e, t), "testCurrentAndParentNodes");
    var xA = i((e, t) => {
      let r = e.stack.length - 1;
      if (r >= 0) {
        let n = e.stack[r];
        return En(n) && t(n);
      }
      return false;
    }, "testCurrentNode");
    var uu = i((e, t) => {
      let r = e.stack.length - 2;
      for (; r >= 0; ) {
        let n = e.stack[r];
        if (En(n) && t(n))
          return true;
        r--;
      }
      return false;
    }, "someParentNode");
    var au = i((e) => {
      let t = false;
      return TA(e, (r) => {
        if (r[pt] === true)
          return t = pt, false;
        if (r[Y] === true)
          return t = Y, false;
        if (r[Y] === false || r[pt] === false)
          return false;
      }), t;
    }, "shouldExpressionsBeWrapped");
    var qe = i((e, t, r = {}) => {
      let n = au(e);
      return n === Y ? gA(t, r.trimLeft, r.trimRight) : n === pt && ou(t), t;
    }, "wrapExpressionIfNeeded");
    var gA = i((e, t = false, r = false) => {
      let n = t ? "{{-" : "{{", s = r ? "-}}" : "}}";
      e.unshift(n, B), e.push(B, s);
    }, "wrapInEnvironment");
    var ou = i((e) => {
      e.unshift("#{"), e.push("}");
    }, "wrapInStringInterpolation");
    var _r = i((e) => typeof e == "string" && e.trim() === "", "isWhitespaceOnly");
    var it = i((e) => (e.match(/\n/g) || "").length, "countNewlines");
    var lu = i((e) => it(e) === 0, "hasNoNewlines");
    var N2 = i((e) => it(e) >= 2, "hasAtLeastTwoNewlines");
    var vA = i((e) => e.split(/([\s\n]+)/gm), "splitByWhitespace");
    var SA = i((e, t = " ") => vA(e).filter((r) => !_r(r)).join(t), "unifyWhitespace");
    var I2 = i((e) => {
      let t = it(e);
      return t > 0 ? t > 1 ? [P, P] : [P] : [B];
    }, "normalizeWhitespace");
    var So = i((e, t, r) => {
      let n = vA(e), s = [], u = [], a = n.length;
      return n.forEach((l, p) => {
        if (l !== "")
          if (_r(l)) {
            let f = s.length === 0 && u.length === 0, m = p === a - 1 || p === a - 2 && n[a - 1] === "";
            f && t || m && r ? u.push(...I2(l)) : !f && !m && (it(l) <= 1 ? u.push(B) : (s.push(u), u = []));
          } else
            u.push(l);
      }), u.length > 0 && s.push(u), s.map((l) => Kr(l));
    }, "createTextGroups");
    var dn = i((e) => Ce.Node.isPrintTextStatement(e) && _r(e.value.value) || Ce.Node.isStringLiteral(e) && _r(e.value), "isWhitespaceNode");
    var Fo = i((e) => Ce.Node.isSequenceExpression(e) && e.expressions.length === 0, "isEmptySequence");
    var mn = i((e) => {
      if (!Array.isArray(e))
        return e;
      let t = [];
      return e.forEach((r, n) => {
        (n === 0 || n === e.length - 1) && dn(r) || t.push(r);
      }), t;
    }, "removeSurroundingWhitespace");
    var di = i((e, ...t) => {
      let r = e;
      return t.forEach((n) => {
        r = r[n];
      }), r;
    }, "getDeepProperty");
    var FA = i((e, t, ...r) => {
      let n = e, s = r.length;
      for (let u = 0; u < s - 1; u++)
        n = n[r[u]];
      n[r[s - 1]] = t;
    }, "setDeepProperty");
    var Re = i((e, t, r, ...n) => {
      let s = di(e, ...n);
      FA(e, mn(s), ...n);
      let u = An(e, t, r, ...n);
      return I(C(d([P, ...u])));
    }, "printChildBlock");
    var _2 = i((e) => {
      e.length > 0 && e.push(P);
    }, "addNewlineIfNotEmpty");
    var R2 = i((e) => e.endsWith("-->"), "endsWithHtmlComment");
    var P2 = i((e, t) => (r) => {
      let n = r;
      return n.startsWith(e) && (n = n.slice(e.length)), n.endsWith(t) && (n = n.slice(0, 0 - t.length)), n;
    }, "stripCommentChars");
    var cu = P2("<!--", "-->");
    var pu = i((e) => {
      let t = e;
      return t.startsWith("{#") && (t = t.slice(2)), t.startsWith("-") && (t = t.slice(1)), t.endsWith("#}") && (t = t.slice(0, -2)), t.endsWith("-") && (t = t.slice(0, -1)), t;
    }, "stripTwigCommentChars");
    var fu = i((e) => {
      let t = cu(e);
      return "<!-- " + SA(t) + " -->";
    }, "normalizeHtmlComment");
    var Eu = i((e, t, r) => {
      let n = pu(e), s = t ? "{#-" : "{#", u = r ? "-#}" : "#}";
      return s + " " + SA(n) + " " + u;
    }, "normalizeTwigComment");
    var mi = i((e) => (t) => t.constructor.name === "HtmlComment" && t.value.value && fu(t.value.value) === "<!-- " + e + " -->", "isHtmlCommentEqualTo");
    var Di = i((e) => (t) => t.constructor.name === "TwigComment" && t.value.value && Eu(t.value.value) === "{# " + e + " #}", "isTwigCommentEqualTo");
    var L2 = i((e) => {
      if (!Ce.Node.isPrintTextStatement(e))
        return false;
      let t = typeof e.value.value == "string" && e.value.value.trim();
      return !R2(t);
    }, "isInlineTextStatement");
    var Ai = i((e) => Ce.Node.isElement(e) && B2.indexOf(e.name) >= 0 || Ce.Node.isPrintExpressionStatement(e) || L2(e), "isInlineElement");
    var yA = i((e) => Ce.Node.isTwigComment(e) || Ce.Node.isHtmlComment(e), "isCommentNode");
    var w2 = i((e) => e.map((t) => Ai(t)), "createInlineMap");
    var q2 = i((e) => {
      e.forEach((t) => {
        Ce.Node.isPrintTextStatement(t) && (t[wn] = true);
      });
    }, "textStatementsOnlyNewlines");
    var k2 = i((e, t) => {
      t.forEach((r, n) => {
        let s = n > 0 && yA(t[n - 1]), u = n < t.length - 1 && yA(t[n + 1]);
        Ce.Node.isPrintTextStatement(r) && ((n > 0 && e[n - 1] || s) && (r[Dr] = true), (n < e.length - 1 && e[n + 1] || u) && (r[Ar] = true));
      });
    }, "addPreserveWhitespaceInfo");
    var Dn = i((e) => I(d([P, e])), "indentWithHardline");
    var An = i((e, t, r, ...n) => {
      let s = di(e, ...n), u = w2(s);
      k2(u, s), q2(s);
      let a = t.map(r, ...n), l = [], p = [];
      return a.forEach((f, m) => {
        u[m] ? l.push(f) : (l.length > 0 && (p.push(Kr(l)), l = []), p.length > 0 && !u[m - 1] && _2(p), p.push(f));
      }), l.length > 0 && p.push(Kr(l)), p;
    }, "printChildGroups");
    var CA = H(re());
    var M2 = { ",": true };
    var BA = i((e, t, r) => {
      let s = [e.trimLeft ? "{%-" : "{%", " ", e.tagName], u = t.map(r, "parts");
      u.length > 0 && s.push(" ", u[0]);
      let a = [];
      for (let p = 1; p < e.parts.length; p++) {
        let f = e.parts[p], h = CA.Node.isGenericToken(f) && M2[f.tokenText] ? "" : B;
        a.push(h, u[p]);
      }
      e.parts.length > 1 && s.push(I(d(a)));
      let l = e.trimRight ? "-%}" : "%}";
      return s.push(B, l), C(d(s));
    }, "printSingleTwigTag");
    var OA = i((e, t, r) => {
      e[L] = false, e.expressions = mn(e.expressions);
      let n = An(e, t, r, "expressions");
      return vo(t) ? d([...n, P]) : d(n);
    }, "printSequenceExpression");
    var fr = H(re());
    var ve = H(re());
    var S = H(re());
    var D = {};
    al(D, { ASSIGNMENT: () => wr, COLON: () => ut, COMMA: () => lr, COMMENT: () => Pt, DECLARATION_START: () => hi, DOT: () => xn, ELEMENT_END: () => xt, ELEMENT_START: () => gn, ENTITY: () => Ti, EOF: () => at, EOF_TOKEN: () => kr, ERROR: () => vn, ERROR_TABLE: () => du, EXPRESSION_END: () => Ye, EXPRESSION_START: () => Qe, FALSE: () => gi, HTML_COMMENT: () => Rr, INTERPOLATION_END: () => yn, INTERPOLATION_START: () => hn, LBRACE: () => Lr, LBRACKET: () => Tn, LPAREN: () => Tt, NULL: () => vi, NUMBER: () => qr, OPERATOR: () => Pr, PIPE: () => cr, QUESTION_MARK: () => Si, RBRACE: () => st, RBRACKET: () => or, RPAREN: () => ar, SLASH: () => Lt, STRING: () => yt, STRING_END: () => ht, STRING_START: () => Ze, SYMBOL: () => Oe, TAG_END: () => ze, TAG_START: () => At, TEXT: () => ur, TRUE: () => xi, WHITESPACE: () => yi });
    var Qe = "expressionStart";
    var Ye = "expressionEnd";
    var At = "tagStart";
    var ze = "tagEnd";
    var hn = "interpolationStart";
    var yn = "interpolationEnd";
    var Ze = "stringStart";
    var ht = "stringEnd";
    var hi = "declarationStart";
    var Pt = "comment";
    var yi = "whitespace";
    var Rr = "htmlComment";
    var ur = "text";
    var Ti = "entity";
    var Oe = "symbol";
    var yt = "string";
    var Pr = "operator";
    var xi = "true";
    var gi = "false";
    var vi = "null";
    var Lr = "[";
    var st = "]";
    var Tt = "(";
    var ar = ")";
    var Tn = "{";
    var or = "}";
    var ut = ":";
    var lr = ",";
    var xn = ".";
    var cr = "|";
    var Si = "?";
    var wr = "=";
    var gn = "<";
    var Lt = "/";
    var xt = ">";
    var qr = "number";
    var at = "EOF";
    var vn = "ERROR";
    var kr = { type: at, pos: { index: -1, line: -1, pos: -1 }, end: -1, length: 0, source: null, text: "" };
    var du = { [Ye]: 'expression end "}}"', [Qe]: 'expression start "{{"', [At]: 'tag start "{%"', [ze]: 'tag end "%}"', [hn]: 'interpolation start "#{"', [yn]: 'interpolation end "}"' };
    var $ = Symbol();
    var G2 = Symbol();
    function _(e, { pos: { index: t, line: r, column: n } }) {
      return e.loc.start = { line: r, column: n, index: t }, e;
    }
    i(_, "setStartFromToken");
    function b(e, { pos: { line: t, column: r }, end: n }) {
      return e.loc.end = { line: t, column: r, index: n }, e;
    }
    i(b, "setEndFromToken");
    function Co(e, t, { pos: { index: r, line: n, column: s } }) {
      return e[t] = { line: n, column: s, index: r }, e;
    }
    i(Co, "setMarkFromToken");
    function je(e, { loc: { start: { line: t, column: r, index: n } } }) {
      return e.loc.start.line = t, e.loc.start.column = r, e.loc.start.index = n, e;
    }
    i(je, "copyStart");
    function Pe(e, t) {
      return e.loc.end.line = t.loc.end.line, e.loc.end.column = t.loc.end.column, e.loc.end.index = t.loc.end.index, e;
    }
    i(Pe, "copyEnd");
    function Sn(e, { loc: { start: t, end: r } }) {
      return e.loc.start.line = t.line, e.loc.start.column = t.column, e.loc.start.index = t.index, e.loc.end.line = r.line, e.loc.end.column = r.column, e.loc.end.index = r.index, e;
    }
    i(Sn, "copyLoc");
    function R(e, t, ...r) {
      return b(_(new e(...r), t), t);
    }
    i(R, "createNode");
    function se(e) {
      return e.text.endsWith("-");
    }
    i(se, "hasTagStartTokenTrimLeft");
    function ue(e) {
      return e.text.startsWith("-");
    }
    i(ue, "hasTagEndTokenTrimRight");
    var mu = H(re());
    var Fi = { name: "genericTwigTag", parse(e) {
      let t = e.tokens, r = t.la(-2), n, s = new mu.GenericTwigTag(t.la(-1).text);
      for (; (n = t.la(0)) && n.type !== ze; )
        try {
          s.parts.push(e.matchExpression());
        } catch (u) {
          if (u.errorType === "UNEXPECTED_TOKEN")
            s.parts.push(new mu.GenericToken(u.tokenType, u.tokenText)), t.next();
          else
            throw u;
        }
      return t.expect(ze), s.trimLeft = se(r), s.trimRight = ue(n), s;
    } };
    var U2 = i((e, t) => {
      for (let r = 0; r < t.length; r++)
        if (e.test(Oe, t[r]))
          return true;
      return false;
    }, "tagMatchesOneOf");
    var bA = i((e, t = []) => ({ name: "genericTwigMultiTag", parse(r, n) {
      let s = r.tokens, u = s.la(-1);
      t.length === 0 && t.push("end" + e);
      let a = Fi.parse(r, n), l = e, p = t[t.length - 1];
      for (; l !== p; ) {
        a.sections.push(r.parse((m, h, E) => h.type === At && U2(E, t))), s.next();
        let f = Fi.parse(r);
        a.sections.push(f), l = f.tagName;
      }
      return _(a, u), b(a, s.la(0)), a;
    } }), "createMultiTagParser");
    var NA = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    var Du = Symbol();
    var Bo = Symbol();
    var Au = Symbol();
    var hu = Symbol();
    var Mr = class {
      constructor(t, r) {
        this.tokens = t, this[Du] = {}, this[Bo] = {}, this[Au] = {}, this[hu] = {}, this.options = Object.assign({}, { ignoreComments: true, ignoreHtmlComments: true, ignoreDeclarations: true, decodeEntities: true, preserveSourceLiterally: false, allowUnknownTags: false, multiTags: {} }, r), Object.keys(this.options.multiTags).length > 0 && (this.options.allowUnknownTags = true);
      }
      applyExtension(t) {
        if (t.tags)
          for (let r of t.tags)
            this.addTag(r);
        if (t.unaryOperators)
          for (let r of t.unaryOperators)
            this.addUnaryOperator(r);
        if (t.binaryOperators)
          for (let r of t.binaryOperators)
            this.addBinaryOperator(r);
        if (t.tests)
          for (let r of t.tests)
            this.addTest(r);
      }
      addUnaryOperator(t) {
        return this[Du][t.text] = t, this;
      }
      addBinaryOperator(t) {
        return this[Bo][t.text] = t, this;
      }
      addTag(t) {
        return this[Au][t.name] = t, this;
      }
      addTest(t) {
        this[hu][t.text] = t;
      }
      hasTest(t) {
        return !!this[hu][t];
      }
      getTest(t) {
        return this[hu][t];
      }
      isUnary(t) {
        return t.type === Pr && !!this[Du][t.text];
      }
      getBinaryOperator(t) {
        return t.type === Pr && this[Bo][t.text];
      }
      parse(t = null) {
        let r = this.tokens, n = _(new S.SequenceExpression(), r.la(0));
        for (; !r.test(at); ) {
          let s = r.next();
          if (n || (n = _(new S.SequenceExpression(), s)), t && t(r.la(0).text, s, r))
            return b(n, s), n;
          switch (s.type) {
            case Qe: {
              let u = this.matchExpression(), a = new S.PrintExpressionStatement(u), l = r.expect(Ye);
              _(a, s), b(a, l), b(n, l), a.trimLeft = !!u.trimLeft, a.trimRight = !!u.trimRight, n.add(a);
              break;
            }
            case At:
              n.add(this.matchTag());
              break;
            case ur: {
              let u = R(S.StringLiteral, s, s.text), a = R(S.PrintTextStatement, s, u);
              n.add(a);
              break;
            }
            case Ti: {
              let u = R(S.StringLiteral, s, s.text), a = R(S.PrintTextStatement, s, u);
              n.add(a);
              break;
            }
            case gn:
              n.add(this.matchElement());
              break;
            case hi: {
              let u = this.matchDeclaration();
              this.options.ignoreDeclarations || n.add(u);
              break;
            }
            case Pt:
              if (!this.options.ignoreComments) {
                let u = R(S.StringLiteral, s, s.text), a = R(S.TwigComment, s, u);
                n.add(a);
              }
              break;
            case Rr:
              if (!this.options.ignoreHtmlComments) {
                let u = R(S.StringLiteral, s, s.text), a = R(S.HtmlComment, s, u);
                n.add(a);
              }
              break;
          }
        }
        return n;
      }
      matchDeclaration() {
        let t = this.tokens, r = t.la(-1), n = null, s = null;
        (n = t.nextIf(Oe)) || this.error({ title: "Expected declaration start", pos: r.pos, advice: "After '<!', an unquoted symbol like DOCTYPE is expected" });
        let u = new S.Declaration(n.text);
        for (; s = t.next(); )
          if (s.type === Oe) {
            let a = R(S.Identifier, s, s.text);
            u.parts.push(a);
          } else if (s.type === Ze) {
            let a = t.expect(yt);
            u.parts.push(R(S.StringLiteral, a, a.text)), t.expect(ht);
          } else if (s.type === Qe) {
            let a = this.matchExpression();
            u.parts.push(Sn(new S.PrintExpressionStatement(a), a)), t.expect(Ye);
          } else {
            if (s.type === xt)
              break;
            this.error({ title: "Expected string, symbol, or expression", pos: s.pos, advice: "Only strings or symbols can be part of a declaration" });
          }
        return _(u, r), b(u, s), u;
      }
      matchElement() {
        let t = this.tokens, r = t.la(0), n = t.la(-1), s;
        (s = t.nextIf(Oe)) || this.error({ title: "Expected element start", pos: r.pos, advice: t.lat(0) === Lt ? `Unexpected closing "${t.la(1).text}" tag. Seems like your DOM is out of control.` : "Expected an element to start" });
        let u = new S.Element(s.text);
        return this.matchAttributes(u, t), t.nextIf(Lt) ? (t.expect(xt), u.selfClosing = true) : (t.expect(xt), NA[s.text] ? u.selfClosing = true : u.children = this.parse(function(a, l, p) {
          if (l.type === gn && p.lat(0) === Lt) {
            let f = p.la(1);
            if (f.type === Oe && f.text === s.text)
              return p.next(), p.next(), p.expect(xt), true;
          }
          return false;
        }).expressions), _(u, n), b(u, t.la(-1)), Co(u, "elementNameLoc", r), u;
      }
      matchAttributes(t, r) {
        for (; r.lat(0) !== Lt && r.lat(0) !== xt; ) {
          let n = r.nextIf(Oe);
          if (n) {
            let s = new S.Identifier(n.text);
            if (_(s, n), b(s, n), r.nextIf(wr)) {
              let u = r.expect(Ze), a = true, l = [], p;
              for (; !r.test(ht); )
                if (a && (p = r.nextIf(yt)))
                  l[l.length] = R(S.StringLiteral, p, p.text), a = false;
                else if (p = r.nextIf(Qe))
                  l[l.length] = this.matchExpression(), r.expect(Ye), a = true;
                else
                  break;
              if (r.expect(ht), !l.length) {
                let h = R(S.StringLiteral, u, "");
                l.push(h);
              }
              let f = l[0];
              for (let h = 1, E = l.length; h < E; h++) {
                let { line: x, column: F } = f.loc.start;
                f = new S.BinaryConcatExpression(f, l[h]), f.loc.start.line = x, f.loc.start.column = F, Pe(f, f.right);
              }
              l.length > 1 && (f.wasImplicitConcatenation = true);
              let m = new S.Attribute(s, f);
              je(m, s), Pe(m, f), t.attributes.push(m);
            } else
              t.attributes.push(Sn(new S.Attribute(s), s));
          } else
            r.nextIf(Qe) ? (t.attributes.push(this.matchExpression()), r.expect(Ye)) : this.error({ title: "Invalid token", pos: r.la(0).pos, advice: "A tag must consist of attributes or expressions. Twig Tags are not allowed." });
        }
      }
      error(t, r = {}) {
        this.tokens.error(t.title, t.pos, t.advice, 1, r);
      }
      getGenericParserFor(t) {
        return this.options.multiTags[t] ? bA(t, this.options.multiTags[t]) : Fi;
      }
      matchTag() {
        let t = this.tokens, r = t.la(-1), n = t.expect(Oe), s = this[Au][n.text], u = false;
        s || (this.options.allowUnknownTags ? (s = this.getGenericParserFor(n.text), u = true) : t.error(`Unknown tag "${n.text}"`, n.pos, `Expected a known tag such as
- ${Object.getOwnPropertyNames(this[Au]).join(`
- `)}`, n.length));
        let a = s.parse(this, n), l = t.la(-1);
        return u || (a.trimLeft = r.text.endsWith("-"), a.trimRight = l.text.startsWith("-")), _(a, r), b(a, l), Co(a, "tagNameLoc", n), a;
      }
      matchExpression(t = 0) {
        let r = this.tokens, n = r.la(0), s, u, a = false;
        r.la(-1).type === Qe && r.la(-1).text.endsWith("-") && (a = true);
        let l = this.getPrimary();
        for (; (s = r.la(0)) && s.type !== at && (u = this.getBinaryOperator(s)) && u.precedence >= t; ) {
          let m = r.next();
          if (u.parse)
            l = u.parse(this, m, l);
          else {
            let h = this.matchExpression(u.associativity === $ ? u.precedence + 1 : u.precedence);
            l = u.createNode(s, l, h);
          }
          s = r.la(0);
        }
        var p = l;
        t === 0 && (b(l, r.la(-1)), p = this.matchConditionalExpression(l), s = r.la(0)), s.type === Ye && s.text.startsWith("-") && (p.trimRight = true), a && (p.trimLeft = a);
        let f = r.la(-1);
        return _(p, n), b(p, f), p;
      }
      getPrimary() {
        let t = this.tokens, r = t.la(0);
        if (this.isUnary(r)) {
          let n = this[Du][r.text];
          t.next();
          let s = this.matchExpression(n.precedence);
          return this.matchPostfixExpression(n.createNode(r, s));
        } else if (t.test(Tt)) {
          t.next();
          let n = this.matchExpression();
          return t.expect(ar), this.matchPostfixExpression(n);
        }
        return this.matchPrimaryExpression();
      }
      matchPrimaryExpression() {
        let t = this.tokens, r = t.la(0), n;
        switch (r.type) {
          case vi:
            n = R(S.NullLiteral, t.next());
            break;
          case gi:
            n = R(S.BooleanLiteral, t.next(), false);
            break;
          case xi:
            n = R(S.BooleanLiteral, t.next(), true);
            break;
          case Oe:
            t.next(), t.test(Tt) ? (n = new S.CallExpression(R(S.Identifier, r, r.text), this.matchArguments()), je(n, n.callee), b(n, t.la(-1))) : n = R(S.Identifier, r, r.text);
            break;
          case qr:
            n = R(S.NumericLiteral, r, Number(t.next()));
            break;
          case Ze:
            n = this.matchStringExpression();
            break;
          default:
            r.type === Lr ? n = this.matchArray() : r.type === Tn ? n = this.matchMap() : this.error({ title: 'Unexpected token "' + r.type + '" of value "' + r.text + '"', pos: r.pos }, { errorType: "UNEXPECTED_TOKEN", tokenText: r.text, tokenType: r.type });
            break;
        }
        return this.matchPostfixExpression(n);
      }
      matchStringExpression() {
        let t = true, r, n = this.tokens, s = [], u = n.expect(Ze);
        for (; !n.test(ht); )
          if (t && (r = n.nextIf(yt)))
            s[s.length] = R(S.StringLiteral, r, r.text), t = false;
          else if (r = n.nextIf(hn))
            s[s.length] = this.matchExpression(), n.expect(yn), t = true;
          else
            break;
        let a = n.expect(ht);
        if (!s.length)
          return b(R(S.StringLiteral, u, ""), a);
        let l = s[0];
        for (let p = 1, f = s.length; p < f; p++) {
          let { line: m, column: h } = l.loc.start;
          l = new S.BinaryConcatExpression(l, s[p]), l.loc.start.line = m, l.loc.start.column = h, Pe(l, l.right);
        }
        return s.length > 1 && (l.wasImplicitConcatenation = true), _(l, u), b(l, a), l;
      }
      matchConditionalExpression(t) {
        let r = this.tokens, n = t, s, u;
        for (; r.nextIf(Si); ) {
          r.nextIf(ut) ? (s = null, u = this.matchExpression()) : (s = this.matchExpression(), r.nextIf(ut) ? u = this.matchExpression() : u = null);
          let { line: a, column: l } = n.loc.start;
          n = new S.ConditionalExpression(n, s, u), n.loc.start = { line: a, column: l }, Pe(n, u || s);
        }
        return n;
      }
      matchArray() {
        let t = this.tokens, r = new S.ArrayExpression(), n = t.expect(Lr);
        for (_(r, n); !t.test(st) && !t.test(at) && (r.elements.push(this.matchExpression()), !(!t.test(st) && (t.expect(lr), t.test(st)))); )
          ;
        return b(r, t.expect(st)), r;
      }
      matchMap() {
        let t = this.tokens, r, n = new S.ObjectExpression(), s = t.expect(Tn);
        for (_(n, s); !t.test(or) && !t.test(at); ) {
          let u = false, a, l;
          t.test(Ze) ? (a = this.matchStringExpression(), S.is(a, "StringLiteral") || (u = true)) : (r = t.nextIf(Oe)) ? a = R(S.Identifier, r, r.text) : (r = t.nextIf(qr)) ? a = R(S.NumericLiteral, r, Number(r.text)) : t.test(Tt) ? (a = this.matchExpression(), u = true) : this.error({ title: "Invalid map key", pos: t.la(0).pos, advice: "Key must be a string, symbol or a number but was " + t.next() }), t.expect(ut), l = this.matchExpression();
          let p = new S.ObjectProperty(a, l, u);
          if (je(p, a), Pe(p, l), n.properties.push(p), !t.test(or) && (t.expect(lr), t.test(or)))
            break;
        }
        return b(n, t.expect(or)), n;
      }
      matchPostfixExpression(t) {
        let r = this.tokens, n = t;
        for (; !r.test(at); )
          if (r.test(xn) || r.test(Lr))
            n = this.matchSubscriptExpression(n);
          else if (r.test(cr))
            r.next(), n = this.matchFilterExpression(n);
          else
            break;
        return n;
      }
      matchSubscriptExpression(t) {
        let r = this.tokens;
        if (r.next().type === xn) {
          let s = r.next(), u = false, a;
          s.type === Oe ? a = R(S.Identifier, s, s.text) : s.type === qr ? (a = R(S.NumericLiteral, s, Number(s.text)), u = true) : this.error({ title: "Invalid token", pos: s.pos, advice: "Expected number or symbol, found " + s + " instead" });
          let l = new S.MemberExpression(t, a, u);
          if (je(l, t), Pe(l, a), r.test(Tt)) {
            let p = new S.CallExpression(l, this.matchArguments());
            return je(p, l), b(p, r.la(-1)), p;
          }
          return l;
        } else {
          let s, u;
          if (r.test(ut) ? (r.next(), u = null) : (s = this.matchExpression(), r.test(ut) && (u = s, s = null, r.next())), s)
            return b(je(new S.MemberExpression(t, s, true), t), r.expect(st));
          {
            let a = new S.SliceExpression(t, u, r.test(st) ? null : this.matchExpression());
            return je(a, t), b(a, r.expect(st)), a;
          }
        }
      }
      matchFilterExpression(t) {
        let r = this.tokens, n = t;
        for (; !r.test(at); ) {
          let u = r.expect(Oe), a = R(S.Identifier, u, u.text), l;
          var s = false;
          r.test(Tt) ? l = this.matchArguments() : r.test(ut) ? (l = this.matchDjangoFilterArguments(), s = true) : l = [];
          let p = new S.FilterExpression(n, a, l);
          if (je(p, n), p.arguments.length ? Pe(p, p.arguments[p.arguments.length - 1]) : Pe(p, n), n = p, n.isDjango = s, !r.test(cr) || r.test(at))
            break;
          r.next();
        }
        return n;
      }
      matchArguments() {
        let t = this.tokens, r = [];
        for (t.expect(Tt); !t.test(ar) && !t.test(at); ) {
          if (t.test(Oe) && t.lat(1) === wr) {
            let n = t.next();
            t.next();
            let s = this.matchExpression(), u = new S.NamedArgumentExpression(R(S.Identifier, n, n.text), s);
            Pe(u, s), r.push(u);
          } else
            r.push(this.matchExpression());
          if (!t.test(lr))
            return t.expect(ar), r;
          t.expect(lr);
        }
        return t.expect(ar), r;
      }
      matchDjangoFilterArguments() {
        let t = this.tokens, r = [];
        for (t.expect(ut); !t.test(cr) && !t.test(Ye) && !t.test(ze); )
          r.push(this.matchExpression());
        return t.expect([cr, Ye, ze]), t.index--, r;
      }
    };
    i(Mr, "Parser");
    var Ro = H(oh());
    var dh = H(Eh());
    var wt = Symbol();
    var _o = Symbol();
    var Gr = class {
      constructor(t, r) {
        this.input = t, this.index = 0;
        let n = Object.assign({}, { ignoreComments: true, ignoreHtmlComments: true, ignoreWhitespace: true, applyWhitespaceTrimming: true }, r);
        if (this[wt] = H8(t, n), this[_o] = this[wt].length, this[wt].length && this[wt][this[wt].length - 1].type === vn) {
          let s = this[wt][this[wt].length - 1];
          this.error(s.message, s.pos, s.advice, s.endPos.index - s.pos.index || 1);
        }
      }
      la(t) {
        var r = this.index + t;
        return r < this[_o] ? this[wt][r] : kr;
      }
      lat(t) {
        return this.la(t).type;
      }
      test(t, r) {
        let n = this.la(0);
        return n.type === t && (!r || n.text === r);
      }
      next() {
        if (this.index === this[_o])
          return kr;
        let t = this[wt][this.index];
        return this.index++, t;
      }
      nextIf(t, r) {
        return this.test(t, r) ? this.next() : false;
      }
      expect(t, r = null, n = null) {
        let s = this.la(0);
        if (Array.isArray(t) || (t = [t]), t.includes(s.type) && (!r || s.text === r))
          return this.next();
        var u = t[0], a = du[u] || u || r;
        a != r && a + "" + r;
        var l = s.pos;
        l.line == -1 && n && (l = n.pos), this.error("Invalid Token", l, `Expected ${a} but found ${du[s.type] || s.type || s.text} instead.`, s.length);
      }
      error(t, r, n, s = 1, u = {}) {
        let a = `ERROR: ${t}. `;
        n && (a += n);
        let l = new Error(a + " 	 ");
        throw Object.assign(l, u), l.loc = { start: { line: Math.max(1, r.line || 0), column: Math.max(0, r.column || 0) + 1 }, end: { line: Math.max(1, r.line || 0) + 1, column: 1 } }, l;
      }
    };
    i(Gr, "TokenStream");
    function H8(e, t) {
      let r, n = [], s = false, u = false;
      for (; (r = e.next()) !== kr; ) {
        let a = u;
        if (u = false, s)
          switch (r.type) {
            case Qe:
            case At:
              r.text[r.text.length - 1] === "-" && (n[n.length - 1].text = (0, Ro.default)(n[n.length - 1].text));
              break;
            case Ye:
            case ze:
              r.text[0] === "-" && (u = true);
              break;
            case Pt:
              n[n.length - 1].type === ur && (n[n.length - 1].text = (0, Ro.default)(n.text)), u = true;
              break;
          }
        if (a && (r.type === ur || r.type === yt) && (r.text = (0, dh.default)(r.text)), (r.type !== Pt || !t.ignoreComments) && (r.type !== yi || !t.ignoreWhitespace) && (r.type !== Rr || !t.ignoreHtmlComments) && (n[n.length] = r), s = t.applyWhitespaceTrimming, r.type === vn)
          return n;
      }
      return n;
    }
    i(H8, "getAllTokens");
    var Le = Symbol();
    var Fn = class {
      constructor(t) {
        this.input = String(t), this.length = this.input.length, this.index = 0, this.position = { line: 1, column: 0 };
      }
      get source() {
        return this.input;
      }
      reset() {
        this.rewind({ line: 1, column: 0, index: 0 });
      }
      mark() {
        let { line: t, column: r } = this.position, n = this.index;
        return { line: t, column: r, index: n };
      }
      rewind(t) {
        this.position.line = t.line, this.position.column = t.column, this.index = t.index;
      }
      la(t) {
        var r = this.index + t;
        return r < this.length ? this.input.charAt(r) : Le;
      }
      lac(t) {
        var r = this.index + t;
        return r < this.length ? this.input.charCodeAt(r) : Le;
      }
      next() {
        if (this.index === this.length)
          return Le;
        var t = this.input.charAt(this.index);
        return this.index++, this.position.column++, t === `
` && (this.position.line += 1, this.position.column = 0), t;
      }
      match(t) {
        let r = this.mark();
        for (let n = 0, s = t.length; n < s; n++) {
          let u = this.next();
          if (u !== t.charAt(n) || u === Le)
            return this.rewind(r), false;
        }
        return true;
      }
    };
    i(Fn, "CharStream");
    var ae = { TEXT: "TEXT", EXPRESSION: "EXPRESSION", TAG: "TAG", INTERPOLATION: "INTERPOLATION", STRING_SINGLE: "STRING_SINGLE", STRING_DOUBLE: "STRING_DOUBLE", ELEMENT: "ELEMENT", ATTRIBUTE_VALUE: "ATTRIBUTE_VALUE", DECLARATION: "DECLARATION" };
    var Cn = Symbol();
    var gu = Symbol();
    var X8 = Symbol();
    var mh = { "[": Lr, "]": st, "(": Tt, ")": ar, "{": Tn, "}": or, ":": ut, ".": xn, "|": cr, ",": lr, "?": Si, "=": wr, "/": Lt };
    var Yr = class {
      constructor(t, { preserveSourceLiterally: r = false } = {}) {
        this.input = t, this[Cn] = [ae.TEXT], this[gu] = [], this[X8] = null, this.options = { preserveSourceLiterally: r === true };
      }
      applyExtension(t) {
        t.unaryOperators && this.addOperators(...t.unaryOperators.map((r) => r.text)), t.binaryOperators && this.addOperators(...t.binaryOperators.map((r) => r.text));
      }
      reset() {
        this.input.reset(), this[Cn] = [ae.TEXT];
      }
      get source() {
        return this.input.source;
      }
      addOperators(...t) {
        this[gu].push(...t), this[gu].sort((r, n) => r.length > n.length ? -1 : 1);
      }
      get state() {
        return this[Cn][this[Cn].length - 1];
      }
      pushState(t) {
        this[Cn].push(t);
      }
      popState() {
        this[Cn].length--;
      }
      createToken(t, r) {
        let n = this.input, s = n.mark(), u = s.index;
        return { type: t, pos: r, endPos: s, end: u, length: u - r.index, source: n.input, text: n.input.substr(r.index, u - r.index), toString: function() {
          return this.text;
        } };
      }
      next() {
        let t = this.input, r, n;
        for (; (n = t.la(0)) !== Le; ) {
          if (r = t.mark(), this.state !== ae.TEXT && this.state !== ae.STRING_DOUBLE && this.state !== ae.STRING_SINGLE && this.state !== ae.ATTRIBUTE_VALUE && Po(n)) {
            for (t.next(); (n = t.la(0)) !== Le && Po(n); )
              t.next();
            return this.createToken(yi, r);
          }
          if (n === "{" && t.la(1) === "#")
            for (t.next(), t.next(), t.la(0) === "-" && t.next(); (n = t.la(0)) !== Le; ) {
              if (n === "#" && t.la(1) === "}" || n === "-" && t.la(1) === "#" && t.la(2) === "}")
                return n === "-" && t.next(), t.next(), t.next(), this.createToken(Pt, r);
              t.next();
            }
          if (this.state === ae.TEXT) {
            let s;
            if (n === "<") {
              if (t.la(1) === "{" || Ur(t.lac(1)) || t.la(1) === "/")
                return t.next(), this.pushState(ae.ELEMENT), this.createToken(gn, r);
              if (t.la(1) === "!" && t.la(2) === "-" && t.la(3) === "-") {
                for (t.next(), t.next(), t.next(), t.next(); (n = t.la(0)) !== Le; ) {
                  if (n === "-" && t.la(1) === "-") {
                    t.next(), t.next(), !(n = t.next()) === ">" && this.error("Unexpected end for HTML comment", t.mark(), `Expected comment to end with '>' but found '${n}' instead.`);
                    break;
                  }
                  t.next();
                }
                return this.createToken(Rr, r);
              } else
                return t.la(1) === "!" && (Ur(t.lac(2)) || Po(t.la(2))) ? (t.next(), t.next(), this.pushState(ae.DECLARATION), this.createToken(hi, r)) : this.matchText(r);
            } else
              return n === "{" ? this.matchExpressionToken(r) : n === "&" && (s = this.matchEntity(r)) ? s : this.matchText(r);
          } else {
            if (this.state === ae.EXPRESSION)
              return n === "}" && t.la(1) === "}" || n === "-" && t.la(1) === "}" && t.la(2) === "}" ? (n === "-" && t.next(), t.next(), t.next(), this.popState(), this.createToken(Ye, r)) : this.matchExpression(r);
            if (this.state === ae.TAG)
              return n === "%" && t.la(1) === "}" || n === "-" && t.la(1) === "%" && t.la(2) === "}" ? (n === "-" && t.next(), t.next(), t.next(), this.popState(), this.createToken(ze, r)) : this.matchExpression(r);
            if (this.state === ae.STRING_SINGLE || this.state === ae.STRING_DOUBLE)
              return this.matchString(r, true);
            if (this.state === ae.INTERPOLATION)
              return n === "}" ? (t.next(), this.popState(), this.createToken(yn, r)) : this.matchExpression(r);
            if (this.state === ae.ELEMENT)
              switch (n) {
                case "/":
                  return t.next(), this.createToken(Lt, r);
                case "{":
                  return this.matchExpressionToken(r);
                case ">":
                  return t.next(), this.popState(), this.createToken(xt, r);
                case '"':
                  return t.next(), this.pushState(ae.ATTRIBUTE_VALUE), this.createToken(Ze, r);
                case "=":
                  return t.next(), this.createToken(wr, r);
                default:
                  return this.matchSymbol(r);
              }
            else {
              if (this.state === ae.ATTRIBUTE_VALUE)
                return n === '"' ? (t.next(), this.popState(), this.createToken(ht, r)) : this.matchAttributeValue(r);
              if (this.state === ae.DECLARATION)
                switch (n) {
                  case ">":
                    return t.next(), this.popState(), this.createToken(xt, r);
                  case '"':
                    return t.next(), this.pushState(ae.STRING_DOUBLE), this.createToken(Ze, r);
                  case "{":
                    return this.matchExpressionToken(r);
                  default:
                    return this.matchSymbol(r);
                }
              else
                return this.error(`Invalid state ${this.state}`, r);
            }
          }
        }
        return kr;
      }
      matchExpressionToken(t) {
        let r = this.input;
        switch (r.la(1)) {
          case "{":
            return r.next(), r.next(), this.pushState(ae.EXPRESSION), r.la(0) === "-" && r.next(), this.createToken(Qe, t);
          case "%":
            return r.next(), r.next(), this.pushState(ae.TAG), r.la(0) === "-" && r.next(), this.createToken(At, t);
          case "#":
            return r.next(), r.next(), r.la(0) === "-" && r.next(), this.matchComment(t);
          default:
            return this.matchText(t);
        }
      }
      matchExpression(t) {
        let r = this.input, n = r.la(0);
        switch (n) {
          case "'":
            return this.pushState(ae.STRING_SINGLE), r.next(), this.createToken(Ze, t);
          case '"':
            return this.pushState(ae.STRING_DOUBLE), r.next(), this.createToken(Ze, t);
          default: {
            if (gt(r.lac(0)))
              return r.next(), this.matchNumber(t);
            if (n === "t" && r.match("true") || n === "T" && r.match("TRUE"))
              return this.createToken(xi, t);
            if (n === "f" && r.match("false") || n === "F" && r.match("FALSE"))
              return this.createToken(gi, t);
            if (n === "n" && (r.match("null") || r.match("none")) || n === "N" && (r.match("NULL") || r.match("NONE")))
              return this.createToken(vi, t);
            let { longestMatchingOperator: s, longestMatchEndPos: u } = this.findLongestMatchingOperator(), a = r.lac(0);
            if (a === 95 || Ur(a) || gt(a)) {
              r.next();
              let l = this.matchSymbol(t);
              return l.text.length <= s.length ? (r.rewind(u), this.createToken(Pr, t)) : l;
            } else
              return s ? (r.rewind(u), this.createToken(Pr, t)) : mh.hasOwnProperty(n) ? (r.next(), this.createToken(mh[n], t)) : n === "\xA0" ? this.error("Unsupported token: Non-breaking space", t) : this.error(`Unknown token ${n}`, t);
          }
        }
      }
      findLongestMatchingOperator() {
        let t = this.input, r = t.mark(), n = "", s = null;
        for (let u = 0, a = this[gu], l = a.length; u < l; u++) {
          let p = a[u];
          if (p.length > n.length && t.match(p)) {
            let f = t.lac(0);
            (p.indexOf(" ") === -1 || !(Ur(f) || gt(f))) && (n = p, s = t.mark()), t.rewind(r);
          }
        }
        return t.rewind(r), { longestMatchingOperator: n, longestMatchEndPos: s };
      }
      error(t, r, n = "") {
        let s = this.createToken(vn, r);
        return s.message = t, s.advice = n, s;
      }
      matchEntity(t) {
        let r = this.input;
        if (r.next(), r.la(0) === "#")
          if (r.next(), r.la(0) === "x") {
            r.next();
            let n = r.la(0);
            for (; "a" <= n && n <= "f" || "A" <= n && n <= "F" || gt(r.lac(0)); )
              r.next(), n = r.la(0);
            if (r.la(0) === ";")
              r.next();
            else
              return r.rewind(t), null;
          } else if (gt(r.lac(0))) {
            do
              r.next();
            while (gt(r.lac(0)));
            if (r.la(0) === ";")
              r.next();
            else
              return r.rewind(t), null;
          } else
            return r.rewind(t), null;
        else {
          for (; Ur(r.lac(0)); )
            r.next();
          if (r.la(0) === ";")
            r.next();
          else
            return r.rewind(t), null;
        }
        return this.createToken(Ti, t);
      }
      matchSymbol(t) {
        let r = this.input, n = this.state === ae.ELEMENT, s;
        for (; (s = r.lac(0)) && (s === 95 || Ur(s) || gt(s) || n && (s === 45 || s === 58)); )
          r.next();
        var u = r.mark();
        return t.index === u.index ? this.error("Expected an Identifier", t, n ? `Expected a valid attribute name, but instead found "${r.la(0)}", which is not part of a valid attribute name.` : `Expected letter, digit or underscore but found ${r.la(0)} instead.`) : this.createToken(Oe, t);
      }
      matchString(t, r = true) {
        let n = this.input, s = this.state === ae.STRING_SINGLE ? "'" : '"', u;
        if (r && n.la(0) === "#" && n.la(1) === "{")
          return this.pushState(ae.INTERPOLATION), n.next(), n.next(), this.createToken(hn, t);
        if (n.la(0) === s)
          return n.next(), this.popState(), this.createToken(ht, t);
        for (; (u = n.la(0)) !== s && u !== Le; )
          if (u === "\\" && n.la(1) === s)
            n.next(), n.next();
          else {
            if (r && u === "#" && n.la(1) === "{")
              break;
            n.next();
          }
        var a = this.createToken(yt, t);
        return this.options.preserveSourceLiterally || (a.text = a.text.replace(new RegExp("(?:\\\\)(" + s + ")", "g"), "$1")), a;
      }
      matchAttributeValue(t) {
        let r = this.input, n = this.state === ae.STRING_SINGLE ? "'" : '"', s;
        if (r.la(0) === "{")
          return this.matchExpressionToken(t);
        for (; (s = r.la(0)) !== n && s !== Le; )
          if (s === "\\" && r.la(1) === n)
            r.next(), r.next();
          else {
            if (s === "{")
              break;
            if (s === n)
              break;
            r.next();
          }
        var u = this.createToken(yt, t);
        return this.options.preserveSourceLiterally || (u.text = u.text.replace(new RegExp("(?:\\\\)(" + n + ")", "g"), "$1")), u;
      }
      matchNumber(t) {
        let r = this.input, n;
        for (; (n = r.lac(0)) !== Le && gt(n); )
          r.next();
        if (r.la(0) === "." && gt(r.lac(1)))
          for (r.next(); (n = r.lac(0)) !== Le && gt(n); )
            r.next();
        return this.createToken(qr, t);
      }
      matchText(t) {
        let r = this.input, n;
        for (; (n = r.la(0)) && n !== Le; ) {
          if (n === "{") {
            let s = r.la(1);
            if (s === "{" || s === "#" || s === "%")
              break;
          } else if (n === "<") {
            let s = r.la(1);
            if (s === "/" || s === "!" || Ur(r.lac(1)))
              break;
            if (r.la(1) === "{") {
              let u = r.la(1);
              if (u === "{" || u === "#" || u === "%")
                break;
            }
          }
          r.next();
        }
        return this.createToken(ur, t);
      }
      matchComment(t) {
        let r = this.input, n;
        for (; (n = r.next()) !== Le; )
          if (n === "#" && r.la(0) === "}") {
            r.next();
            break;
          }
        return this.createToken(Pt, t);
      }
    };
    i(Yr, "Lexer");
    function Po(e) {
      return e === `
` || e === " " || e === "	";
    }
    i(Po, "isWhitespace");
    function Ur(e) {
      return 65 <= e && e <= 90 || 97 <= e && e <= 122;
    }
    i(Ur, "isAlpha");
    function gt(e) {
      return 48 <= e && e <= 57;
    }
    i(gt, "isDigit");
    var Lo = [];
    var Ci = [];
    var Bn = [];
    var wo = Go("not", "UnaryNotExpression", 50);
    var Dh = Go("-", "UnaryNeqExpression", 500);
    var Ah = Go("+", "UnaryPosExpression", 500);
    var hh = fe({ text: "or", type: "BinaryOrExpression", precedence: 10, associativity: $ });
    var yh = fe({ text: "and", type: "BinaryAndExpression", precedence: 15, associativity: $ });
    var Th = fe({ text: "b-or", type: "BitwiseOrExpression", precedence: 16, associativity: $ });
    var xh = fe({ text: "b-xor", type: "BitwiseXOrExpression", precedence: 17, associativity: $ });
    var gh = fe({ text: "b-and", type: "BitwiseAndExpression", precedence: 18, associativity: $ });
    var vh = fe({ text: "==", type: "BinaryEqualsExpression", precedence: 20, associativity: $ });
    var Sh = fe({ text: "!=", type: "BinaryNotEqualsExpression", precedence: 20, associativity: $ });
    var Fh = fe({ text: "<", type: "BinaryLessThanExpression", precedence: 20, associativity: $ });
    var Ch = fe({ text: ">", type: "BinaryGreaterThanExpression", precedence: 20, associativity: $ });
    var Bh = fe({ text: "<=", type: "BinaryLessThanOrEqualExpression", precedence: 20, associativity: $ });
    var Oh = fe({ text: ">=", type: "BinaryGreaterThanOrEqualExpression", precedence: 20, associativity: $ });
    var bh = fe({ text: "not in", type: "BinaryNotInExpression", precedence: 20, associativity: $ });
    var Nh = fe({ text: "in", type: "BinaryInExpression", precedence: 20, associativity: $ });
    var Ih = fe({ text: "matches", type: "BinaryMatchesExpression", precedence: 20, associativity: $ });
    var _h = fe({ text: "starts with", type: "BinaryStartsWithExpression", precedence: 20, associativity: $ });
    var Rh = fe({ text: "ends with", type: "BinaryEndsWithExpression", precedence: 20, associativity: $ });
    var Ph = fe({ text: "..", type: "BinaryRangeExpression", precedence: 25, associativity: $ });
    var Lh = fe({ text: "+", type: "BinaryAddExpression", precedence: 30, associativity: $ });
    var Q9 = fe({ text: "-", type: "BinarySubExpression", precedence: 30, associativity: $ });
    Ci.push({ text: "~", precedence: 40, associativity: $, createNode(e, t, r) {
      let n = new ve.BinaryConcatExpression(t, r);
      return je(n, t), Pe(n, r), n;
    } });
    var wh = fe({ text: "*", type: "BinaryMulExpression", precedence: 60, associativity: $ });
    var qh = fe({ text: "/", type: "BinaryDivExpression", precedence: 60, associativity: $ });
    var kh = fe({ text: "//", type: "BinaryFloorDivExpression", precedence: 60, associativity: $ });
    var Mh = fe({ text: "%", type: "BinaryModExpression", precedence: 60, associativity: $ });
    Ci.push({ text: "is", precedence: 100, associativity: $, parse(e, t, r) {
      let n = e.tokens, s = false;
      n.nextIf(D.OPERATOR, "not") && (s = true);
      let u = $8(e), a = null;
      n.test(D.LPAREN) && (a = e.matchArguments());
      let l = u.createNode(r, a);
      return _(l, t), b(l, n.la(-1)), s ? Sn(new wo(l), l) : l;
    } });
    function $8(e) {
      let t = e.tokens, r = t.la(0);
      r.type !== D.NULL ? t.expect(D.SYMBOL) : t.next();
      let n = r.text;
      if (!e.hasTest(n)) {
        let s = t.expect(D.SYMBOL);
        n += " " + s.text, e.hasTest(n) || e.error({ title: `Unknown test "${n}"`, pos: r.pos });
      }
      return e.getTest(n);
    }
    i($8, "getTest");
    var Gh = fe({ text: "**", type: "BinaryPowerExpression", precedence: 200, associativity: $ });
    var Uh = fe({ text: "??", type: "BinaryNullCoalesceExpression", precedence: 300, associativity: $ });
    var Yh = qt("even", "TestEvenExpression");
    var jh = qt("odd", "TestOddExpression");
    var Vh = qt("defined", "TestDefinedExpression");
    var qo = qt("same as", "TestSameAsExpression");
    Bn.push({ text: "sameas", createNode(e, t) {
      return new qo(e, t);
    } });
    var ko = qt("null", "TestNullExpression");
    Bn.push({ text: "none", createNode(e, t) {
      return new ko(e, t);
    } });
    var Mo = qt("divisible by", "TestDivisibleByExpression");
    Bn.push({ text: "divisibleby", createNode(e, t) {
      return new Mo(e, t);
    } });
    var Kh = qt("constant", "TestConstantExpression");
    var Wh = qt("empty", "TestEmptyExpression");
    var Hh = qt("iterable", "TestIterableExpression");
    function qt(e, t) {
      let r = i(class extends ve.Node {
        constructor(n, s) {
          super(), this.expression = n, this.arguments = s;
        }
      }, "TestExpression");
      return (0, ve.type)(r, t), (0, ve.alias)(r, "Expression", "TestExpression"), (0, ve.visitor)(r, "expression", "arguments"), Bn.push({ text: e, createNode(n, s) {
        return new r(n, s);
      } }), r;
    }
    i(qt, "createTest");
    function fe(e) {
      let { text: t, precedence: r, associativity: n } = e, s = i(class extends ve.BinaryExpression {
        constructor(a, l) {
          super(t, a, l);
        }
      }, "BinarySubclass");
      (0, ve.type)(s, e.type), (0, ve.alias)(s, "BinaryExpression", "Binary", "Expression"), (0, ve.visitor)(s, "left", "right");
      let u = { text: t, precedence: r, associativity: n };
      return e.parse ? u.parse = e.parse : e.createNode ? u.createNode = e.createNode : u.createNode = (a, l, p) => new s(l, p), Ci.push(u), s;
    }
    i(fe, "createBinaryOperatorNode");
    function Go(e, t, r) {
      let n = i(class extends ve.UnaryExpression {
        constructor(s) {
          super(e, s);
        }
      }, "UnarySubclass");
      return (0, ve.type)(n, t), (0, ve.alias)(n, "Expression", "UnaryLike"), (0, ve.visitor)(n, "argument"), Lo.push({ text: e, precedence: r, createNode(s, u) {
        let a = new n(u);
        return _(a, s), Pe(a, u), a;
      } }), n;
    }
    i(Go, "createUnaryOperator");
    var v = H(re());
    var kt = class extends v.Node {
      constructor(t, r) {
        super(), this.escapeType = t, this.expressions = r;
      }
    };
    i(kt, "AutoescapeBlock");
    (0, v.type)(kt, "AutoescapeBlock");
    (0, v.alias)(kt, "Block", "Escape");
    (0, v.visitor)(kt, "expressions");
    var vt = class extends v.Node {
      constructor(t, r) {
        super(), this.name = t, this.body = r;
      }
    };
    i(vt, "BlockStatement");
    (0, v.type)(vt, "BlockStatement");
    (0, v.alias)(vt, "Statement", "Scope", "RootScope");
    (0, v.visitor)(vt, "body");
    var jr = class extends v.Node {
      constructor(t, r = []) {
        super(), this.callee = t, this.arguments = r;
      }
    };
    i(jr, "BlockCallExpression");
    (0, v.type)(jr, "BlockCallExpression");
    (0, v.alias)(jr, "Expression", "FunctionInvocation");
    (0, v.visitor)(jr, "arguments");
    var Mt = class extends v.Node {
      constructor(t, r, n, s, u, a) {
        super(), this.name = t, this.source = r, this.key = n, this.argument = s, this.async = u, this.delayBy = a, this.errorVariableName = null, this.body = null, this.otherwise = null;
      }
    };
    i(Mt, "MountStatement");
    (0, v.type)(Mt, "MountStatement");
    (0, v.alias)(Mt, "Statement", "Scope");
    (0, v.visitor)(Mt, "name", "source", "key", "argument", "body", "otherwise");
    var Gt = class extends v.Node {
      constructor(t) {
        super(), this.value = t;
      }
    };
    i(Gt, "DoStatement");
    (0, v.type)(Gt, "DoStatement");
    (0, v.alias)(Gt, "Statement");
    (0, v.visitor)(Gt, "value");
    var Ut = class extends v.Node {
      constructor(t) {
        super(), this.parent = t, this.argument = null, this.contextFree = false, this.ignoreMissing = false, this.blocks = null;
      }
    };
    i(Ut, "EmbedStatement");
    (0, v.type)(Ut, "EmbedStatement");
    (0, v.alias)(Ut, "Statement", "Include");
    (0, v.visitor)(Ut, "argument", "blocks");
    var Yt = class extends v.Node {
      constructor(t) {
        super(), this.parentName = t;
      }
    };
    i(Yt, "ExtendsStatement");
    (0, v.type)(Yt, "ExtendsStatement");
    (0, v.alias)(Yt, "Statement", "Include");
    (0, v.visitor)(Yt, "parentName");
    var jt = class extends v.Node {
      constructor(t, r) {
        super(), this.filterExpression = t, this.body = r;
      }
    };
    i(jt, "FilterBlockStatement");
    (0, v.type)(jt, "FilterBlockStatement");
    (0, v.alias)(jt, "Statement", "Block");
    (0, v.visitor)(jt, "filterExpression", "body");
    var pr = class extends v.Node {
      constructor() {
        super();
      }
    };
    i(pr, "FlushStatement");
    (0, v.type)(pr, "FlushStatement");
    (0, v.alias)(pr, "Statement");
    var Vt = class extends v.Node {
      constructor(t = null, r = null, n = null, s = null, u = null, a = null) {
        super(), this.keyTarget = t, this.valueTarget = r, this.sequence = n, this.condition = s, this.body = u, this.otherwise = a;
      }
    };
    i(Vt, "ForStatement");
    (0, v.type)(Vt, "ForStatement");
    (0, v.alias)(Vt, "Statement", "Scope", "Loop");
    (0, v.visitor)(Vt, "keyTarget", "valueTarget", "sequence", "condition", "body", "otherwise");
    var ot = class extends v.Node {
      constructor(t, r) {
        super(), this.key = t, this.alias = r;
      }
    };
    i(ot, "ImportDeclaration");
    (0, v.type)(ot, "ImportDeclaration");
    (0, v.alias)(ot, "VariableDeclaration");
    (0, v.visitor)(ot, "key", "value");
    var Kt = class extends v.Node {
      constructor(t, r) {
        super(), this.source = t, this.imports = r;
      }
    };
    i(Kt, "FromStatement");
    (0, v.type)(Kt, "FromStatement");
    (0, v.alias)(Kt, "Statement");
    (0, v.visitor)(Kt, "source", "imports");
    var St = class extends v.Node {
      constructor(t, r = null, n = null) {
        super(), this.test = t, this.consequent = r, this.alternate = n;
      }
    };
    i(St, "IfStatement");
    (0, v.type)(St, "IfStatement");
    (0, v.alias)(St, "Statement", "Conditional");
    (0, v.visitor)(St, "test", "consequent", "alternate");
    var Wt = class extends v.Node {
      constructor(t) {
        super(), this.source = t, this.argument = null, this.contextFree = false, this.ignoreMissing = false;
      }
    };
    i(Wt, "IncludeStatement");
    (0, v.type)(Wt, "IncludeStatement");
    (0, v.alias)(Wt, "Statement", "Include");
    (0, v.visitor)(Wt, "source", "argument");
    var Ht = class extends v.Node {
      constructor(t, r, n) {
        super(), this.name = t, this.arguments = r, this.body = n;
      }
    };
    i(Ht, "MacroDeclarationStatement");
    (0, v.type)(Ht, "MacroDeclarationStatement");
    (0, v.alias)(Ht, "Statement", "Scope", "RootScope");
    (0, v.visitor)(Ht, "name", "arguments", "body");
    var Xt = class extends v.Node {
      constructor(t, r) {
        super(), this.name = t, this.value = r;
      }
    };
    i(Xt, "VariableDeclarationStatement");
    (0, v.type)(Xt, "VariableDeclarationStatement");
    (0, v.alias)(Xt, "Statement");
    (0, v.visitor)(Xt, "name", "value");
    var $t = class extends v.Node {
      constructor(t) {
        super(), this.assignments = t;
      }
    };
    i($t, "SetStatement");
    (0, v.type)($t, "SetStatement");
    (0, v.alias)($t, "Statement", "ContextMutation");
    (0, v.visitor)($t, "assignments");
    var Jt = class extends v.Node {
      constructor(t = null) {
        super(), this.body = t;
      }
    };
    i(Jt, "SpacelessBlock");
    (0, v.type)(Jt, "SpacelessBlock");
    (0, v.alias)(Jt, "Statement", "Block");
    (0, v.visitor)(Jt, "body");
    var Qt = class extends v.Node {
      constructor(t, r) {
        super(), this.name = t, this.alias = r;
      }
    };
    i(Qt, "AliasExpression");
    (0, v.type)(Qt, "AliasExpression");
    (0, v.alias)(Qt, "Expression");
    (0, v.visitor)(Qt, "name", "alias");
    var zt = class extends v.Node {
      constructor(t, r) {
        super(), this.source = t, this.aliases = r;
      }
    };
    i(zt, "UseStatement");
    (0, v.type)(zt, "UseStatement");
    (0, v.alias)(zt, "Statement", "Include");
    (0, v.visitor)(zt, "source", "aliases");
    var Xh = { name: "autoescape", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = null, u, a, l;
      r.nextIf(D.TAG_END) ? (a = r.la(-1), s = null) : (u = r.nextIf(D.STRING_START)) ? (s = r.expect(D.STRING).text, r.nextIf(D.STRING_END) || e.error({ title: "autoescape type declaration must be a simple string", pos: r.la(0).pos, advice: `The type declaration for autoescape must be a simple string such as 'html' or 'js'.
I expected the current string to end with a ${u.text} but instead found ${D.ERROR_TABLE[r.lat(0)] || r.lat(0)}.` }), a = r.la(0)) : r.nextIf(D.FALSE) ? (s = false, a = r.la(0)) : r.nextIf(D.TRUE) ? (s = true, a = r.la(0)) : e.error({ title: "Invalid autoescape type declaration", pos: r.la(0).pos, advice: `Expected type of autoescape to be a string, boolean or not specified. Found ${r.la(0).type} instead.` });
      let p = new kt(s);
      _(p, t);
      let f;
      return p.expressions = e.parse((m, h, E) => h.type === D.TAG_START && E.nextIf(D.SYMBOL, "endautoescape") ? (l = h, f = E.expect(D.TAG_END, "", n), true) : false).expressions, b(p, f), p.trimRightAutoescape = ue(a), p.trimLeftEndautoescape = se(l), p;
    } };
    var Bi = H(re());
    var $h = { name: "block", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = r.expect(D.SYMBOL), u, a, l;
      if (a = r.nextIf(D.TAG_END)) {
        if (u = new vt(R(Bi.Identifier, s, s.text), e.parse((p, f, m) => {
          let h = !!(f.type === D.TAG_START && m.nextIf(D.SYMBOL, "endblock"));
          return h && (l = f), h;
        }).expressions), r.nextIf(D.SYMBOL, s.text) && r.lat(0) !== D.TAG_END) {
          let p = r.next();
          e.error({ title: "Block name mismatch", pos: p.pos, advice: p.type == D.SYMBOL ? `Expected end of block ${s.text} but instead found end of block ${r.la(0).text}.` : `endblock must be followed by either '%}' or the name of the open block. Found a token of type ${D.ERROR_TABLE[p.type] || p.type} instead.` });
        }
      } else
        u = new vt(R(Bi.Identifier, s, s.text), new Bi.PrintExpressionStatement(e.matchExpression()));
      return _(u, t), b(u, r.expect(D.TAG_END, null, n)), u.trimRightBlock = a && ue(a), u.trimLeftEndblock = !!(l && se(l)), u;
    } };
    var Jh = { name: "do", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = new Gt(e.matchExpression());
      return _(s, t), b(s, r.expect(D.TAG_END, "", n)), s;
    } };
    var T1 = H(re());
    var x1 = H(y1());
    var g1 = { name: "embed", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = new Ut(e.matchExpression());
      r.nextIf(D.SYMBOL, "ignore") && (r.expect(D.SYMBOL, "missing"), s.ignoreMissing = true), r.nextIf(D.SYMBOL, "with") && (s.argument = e.matchExpression()), r.nextIf(D.SYMBOL, "only") && (s.contextFree = true), r.expect(D.TAG_END);
      let u = r.la(-1), a;
      return s.blocks = (0, x1.default)(e.parse((l, p, f) => {
        let m = !!(p.type === D.TAG_START && f.nextIf(D.SYMBOL, "endembed"));
        return m && (a = p), m;
      }).expressions, T1.Node.isBlockStatement), _(s, t), b(s, r.expect(D.TAG_END, "", n)), s.trimRightEmbed = ue(u), s.trimLeftEndembed = a && se(a), s;
    } };
    var v1 = { name: "extends", parse(e, t) {
      let r = e.tokens, n = new Yt(e.matchExpression());
      return _(n, t), b(n, r.expect(D.TAG_END)), n;
    } };
    var S1 = H(re());
    var F1 = { name: "filter", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = R(S1.Identifier, t, "filter"), u = e.matchFilterExpression(s);
      r.expect(D.TAG_END);
      let a = r.la(-1), l, p = e.parse((m, h, E) => {
        let x = h.type === D.TAG_START && E.nextIf(D.SYMBOL, "endfilter");
        return x && (l = h), x;
      }).expressions, f = new jt(u, p);
      return _(f, t), b(f, r.expect(D.TAG_END, "", n)), f.trimRightFilter = ue(a), f.trimLeftEndfilter = l && se(l), f;
    } };
    var C1 = { name: "flush", parse(e, t) {
      let r = e.tokens, n = new pr();
      return _(n, t), b(n, r.expect(D.TAG_END)), n;
    } };
    var Fu = H(re());
    var B1 = { name: "for", parse(e, t) {
      let r = e.tokens, n = new Vt(), s = r.la(-2), u = r.expect(D.SYMBOL);
      if (r.nextIf(D.COMMA)) {
        n.keyTarget = R(Fu.Identifier, u, u.text);
        let m = r.expect(D.SYMBOL);
        n.valueTarget = R(Fu.Identifier, m, m.text);
      } else
        n.keyTarget = null, n.valueTarget = R(Fu.Identifier, u, u.text);
      r.expect(D.OPERATOR, "in"), n.sequence = e.matchExpression(), r.nextIf(D.SYMBOL, "if") && (n.condition = e.matchExpression()), r.expect(D.TAG_END);
      let a = r.la(-1), l, p;
      n.body = e.parse((m, h, E) => {
        let x = h.type === D.TAG_START && (E.test(D.SYMBOL, "else") || E.test(D.SYMBOL, "endfor"));
        return x && E.test(D.SYMBOL, "else") && (l = h), x;
      }), r.nextIf(D.SYMBOL, "else") && (r.expect(D.TAG_END), p = r.la(-1), n.otherwise = e.parse((m, h, E) => h.type === D.TAG_START && E.test(D.SYMBOL, "endfor")));
      let f = r.la(-1);
      return r.expect(D.SYMBOL, "endfor", s), _(n, t), b(n, r.expect(D.TAG_END)), n.trimRightFor = ue(a), n.trimLeftElse = !!(l && se(l)), n.trimRightElse = !!(p && ue(p)), n.trimLeftEndfor = se(f), n;
    } };
    var Jo = H(re());
    var O1 = { name: "from", parse(e, t) {
      let r = e.tokens, n = e.matchExpression(), s = [];
      r.expect(D.SYMBOL, "import");
      do {
        let a = r.expect(D.SYMBOL), l = a;
        r.nextIf(D.SYMBOL, "as") && (l = r.expect(D.SYMBOL));
        let p = new ot(R(Jo.Identifier, a, a.text), R(Jo.Identifier, l, l.text));
        if (_(p, a), b(p, l), s.push(p), !r.nextIf(D.COMMA))
          break;
      } while (!r.test(D.EOF));
      let u = new Kt(n, s);
      return _(u, t), b(u, r.expect(D.TAG_END)), u;
    } };
    var N1 = { name: "if", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = e.matchExpression(), u = null;
      r.expect(D.TAG_END);
      let a = r.la(-1), l = new St(s, e.parse(b1).expressions), p, f, m, h;
      do {
        if (r.nextIf(D.SYMBOL, "else"))
          p = r.la(-2), r.expect(D.TAG_END), f = r.la(-1), (u || l).alternate = e.parse(xL).expressions;
        else if (r.nextIf(D.SYMBOL, "elseif")) {
          m = r.la(-2), s = e.matchExpression(), r.expect(D.TAG_END), h = r.la(-1);
          let x = e.parse(b1).expressions;
          u = (u || l).alternate = new St(s, x), u.trimLeft = se(m), u.trimRightIf = ue(h);
        }
        if (r.nextIf(D.SYMBOL, "endif"))
          break;
      } while (!r.test(D.EOF));
      let E = r.la(-2);
      return _(l, t), b(l, r.expect(D.TAG_END, "", n)), l.trimRightIf = ue(a), l.trimLeftElse = !!(p && se(p)), l.trimRightElse = !!(f && ue(f)), l.trimLeftEndif = se(E), l;
    } };
    function b1(e, t, r) {
      if (t.type === D.TAG_START) {
        let n = r.la(0).text;
        return n === "else" || n === "endif" || n === "elseif";
      }
      return false;
    }
    i(b1, "matchConsequent");
    function xL(e, t, r) {
      return t.type === D.TAG_START && r.test(D.SYMBOL, "endif");
    }
    i(xL, "matchAlternate");
    var I1 = H(re());
    var _1 = { name: "import", parse(e, t) {
      let r = e.tokens, n = e.matchExpression();
      r.expect(D.SYMBOL, "as");
      let s = r.expect(D.SYMBOL), u = new ot(n, R(I1.Identifier, s, s.text));
      return _(u, t), b(u, r.expect(D.TAG_END)), u;
    } };
    var R1 = { name: "include", parse(e, t) {
      let r = e.tokens, n = new Wt(e.matchExpression());
      return r.nextIf(D.SYMBOL, "ignore") && (r.expect(D.SYMBOL, "missing"), n.ignoreMissing = true), r.nextIf(D.SYMBOL, "with") && (n.argument = e.matchExpression()), r.nextIf(D.SYMBOL, "only") && (n.contextFree = true), _(n, t), b(n, r.expect(D.TAG_END)), n;
    } };
    var Qo = H(re());
    var P1 = { name: "macro", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = r.expect(D.SYMBOL), u = [];
      for (r.expect(D.LPAREN); !r.test(D.RPAREN) && !r.test(D.EOF); ) {
        let h = r.expect(D.SYMBOL);
        u.push(R(Qo.Identifier, h, h.text)), !r.nextIf(D.COMMA) && !r.test(D.RPAREN) && e.error({ title: 'Expected comma or ")"', pos: r.la(0).pos, advice: "The argument list of a macro can only consist of parameter names separated by commas." });
      }
      r.expect(D.RPAREN);
      let a = r.la(0), l, p = e.parse((h, E, x) => {
        let F = !!(E.type === D.TAG_START && x.nextIf(D.SYMBOL, "endmacro"));
        return F && (l = E), F;
      });
      if (r.test(D.SYMBOL)) {
        var f = r.next();
        s.text !== f.text && e.error({ title: `Macro name mismatch, expected "${s.text}" but found "${f.text}"`, pos: f.pos });
      }
      let m = new Ht(R(Qo.Identifier, s, s.text), u, p);
      return _(m, t), b(m, r.expect(D.TAG_END, "", n)), m.trimRightMacro = ue(a), m.trimLeftEndmacro = se(l), m;
    } };
    var L1 = H(re());
    var w1 = { name: "set", parse(e, t) {
      let r = e.tokens, n = [], s = [], u, a;
      do {
        let f = r.expect(D.SYMBOL);
        n.push(R(L1.Identifier, f, f.text));
      } while (r.nextIf(D.COMMA));
      if (r.nextIf(D.ASSIGNMENT))
        do
          s.push(e.matchExpression());
        while (r.nextIf(D.COMMA));
      else
        n.length !== 1 && e.error({ title: "Illegal multi-set", pos: r.la(0).pos, advice: "When using set with a block, you cannot have multiple targets." }), r.expect(D.TAG_END), u = r.la(-1), s[0] = e.parse((f, m, h) => {
          let E = !!(m.type === D.TAG_START && h.nextIf(D.SYMBOL, "endset"));
          return E && (a = m), E;
        }).expressions;
      n.length !== s.length && e.error({ title: "Mismatch of set names and values", pos: t.pos, advice: `When using set, you must ensure that the number of
assigned variable names is identical to the supplied values. However, here I've found
${n.length} variable names and ${s.length} values.` });
      let l = [];
      for (let f = 0, m = n.length; f < m; f++)
        l[f] = new Xt(n[f], s[f]);
      let p = new $t(l);
      return _(p, t), b(p, r.expect(D.TAG_END)), p.trimRightSet = !!(u && ue(u)), p.trimLeftEndset = !!(a && se(a)), p;
    } };
    var q1 = { name: "spaceless", parse(e, t) {
      let r = e.tokens, n = r.la(-2);
      r.expect(D.TAG_END);
      let s = r.la(-1), u, a = e.parse((p, f, m) => {
        let h = !!(f.type === D.TAG_START && m.nextIf(D.SYMBOL, "endspaceless"));
        return u = f, h;
      }).expressions, l = new Jt(a);
      return _(l, t), b(l, r.expect(D.TAG_END, "", n)), r.expect(D.SYMBOL, "endfor", n), l.trimRightSpaceless = ue(s), l.trimLeftEndspaceless = !!(u && se(u)), l;
    } };
    var zo = H(re());
    var k1 = { name: "use", parse(e, t) {
      let r = e.tokens, n = e.matchExpression(), s = [];
      if (r.nextIf(D.SYMBOL, "with"))
        do {
          let a = r.expect(D.SYMBOL), l = R(zo.Identifier, a, a.text), p = l;
          if (r.nextIf(D.SYMBOL, "as")) {
            let m = r.expect(D.SYMBOL);
            p = R(zo.Identifier, m, m.text);
          }
          let f = new Qt(l, p);
          je(f, l), Pe(f, p), s.push(f);
        } while (r.nextIf(D.COMMA));
      let u = new zt(n, s);
      return _(u, t), b(u, r.expect(D.TAG_END)), u;
    } };
    var Zo = H(re());
    var M1 = { name: "mount", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = null, u = null, a = null, l = false, p = 0, f = null;
      if (r.test(D.SYMBOL, "async") && r.la(1).type === D.STRING_START && (l = true, r.next()), r.test(D.STRING_START))
        u = e.matchStringExpression();
      else {
        let O = r.expect(D.SYMBOL);
        s = R(Zo.Identifier, O, O.text), r.nextIf(D.SYMBOL, "from") && (u = e.matchStringExpression());
      }
      r.nextIf(D.SYMBOL, "as") && (a = e.matchExpression()), r.nextIf(D.SYMBOL, "with") && (f = e.matchExpression()), l && r.nextIf(D.SYMBOL, "delay") && (r.expect(D.SYMBOL, "placeholder"), r.expect(D.SYMBOL, "by"), p = Number.parseInt(r.expect(D.NUMBER).text, 10), r.nextIf(D.SYMBOL, "s") ? p *= 1e3 : r.expect(D.SYMBOL, "ms"));
      let m = new Mt(s, u, a, f, l, p), h, E, x, F;
      if (l) {
        if (r.expect(D.TAG_END), h = r.la(-1), m.body = e.parse((O, g, U) => g.type === D.TAG_START && (U.test(D.SYMBOL, "catch") || U.test(D.SYMBOL, "endmount"))), r.nextIf(D.SYMBOL, "catch")) {
          E = r.la(-2);
          let O = r.expect(D.SYMBOL);
          m.errorVariableName = R(Zo.Identifier, O, O.text), r.expect(D.TAG_END), x = r.la(-1), m.otherwise = e.parse((g, U, X) => U.type === D.TAG_START && X.test(D.SYMBOL, "endmount"));
        }
        r.expect(D.SYMBOL, "endmount"), F = r.la(-2);
      }
      return _(m, t), b(m, r.expect(D.TAG_END, "", n)), m.trimRightMount = !!(h && ue(h)), m.trimLeftCatch = !!(E && se(E)), m.trimRightCatch = !!(x && ue(x)), m.trimLeftEndmount = !!(F && se(F)), m;
    } };
    var Cu = { tags: [Xh, $h, Jh, g1, v1, F1, C1, B1, O1, N1, _1, R1, P1, w1, q1, k1, M1], unaryOperators: Lo, binaryOperators: Ci, tests: Bn };
    var G1 = Symbol("ALREADY_INDENTED");
    var gL = Symbol("OPERATOR_PRECEDENCE");
    var vL = [".."];
    var el = Cu.binaryOperators.reduce((e, t) => (e[t.text] = t.precedence, e), {});
    var SL = i((e, t, r, n) => {
      e[L] = false, e[pt] = true;
      let s = ['"'], u = e, a = [];
      for (; fr.Node.isBinaryConcatExpression(u); )
        s.unshift(t.call(r, ...a, "right")), a.push("left"), u = u.left;
      return s.unshift(t.call(r, ...a)), s.unshift('"'), d(s);
    }, "printInterpolatedString");
    var FL = i((e) => vL.indexOf(e) < 0, "operatorNeedsSpaces");
    var CL = i((e) => e.operator === "or" || e.operator === "and", "hasLogicalOperator");
    var U1 = i((e, t) => {
      let r = e[t], n = fr.Node.isBinaryExpression(r), s = el[e.operator], u = n ? el[e[t].operator] : Number.MAX_SAFE_INTEGER;
      return u < s || u > s && n && CL(r) || fr.Node.isFilterExpression(r) || fr.Node.isBinaryConcatExpression(e) && fr.Node.isConditionalExpression(r);
    }, "otherNeedsParentheses");
    var BL = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = fr.Node.isBinaryExpression(e.right), s = ["and", "or"].indexOf(e.operator) > -1, u = FL(e.operator), a = Dt(t, G1, false);
      !a && n && (e.right[G1] = true);
      let l = Dt(t, yr, false), f = sr(t)[hr] !== false;
      l || (e[yr] = true);
      let m = l ? Dt(t, "operator") : "";
      e[gL] = el[e.operator];
      let h = t.call(r, "left"), E = t.call(r, "right"), x = [], F = U1(e, "left"), O = U1(e, "right");
      F && x.push("("), x.push(h), F && x.push(")");
      let g = [u ? B : ne, e.operator, u ? " " : ""];
      O && g.push("("), g.push(E), O && g.push(")");
      let U = a ? d(g) : I(d(g)), X = d(qe(t, [...x, U], e)), z = !l && f, ke = s && e.operator !== m;
      return z || !s || l && ke ? C(X) : X;
    }, "_printBinaryExpression");
    var Bu = i((e, t, r, n) => fr.Node.isBinaryConcatExpression(e) && e.wasImplicitConcatenation ? SL(e, t, r, n) : BL(e, t, r), "printBinaryExpression");
    var Y1 = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = [B, "?"];
      e.consequent && n.push(d([" ", t.call(r, "consequent")])), e.alternate && n.push(B, ": ", t.call(r, "alternate"));
      let s = [t.call(r, "test"), I(d(n))];
      return qe(t, s, e), C(d(s));
    }, "printConditionalExpression");
    var tl = i((e, t, r) => {
      let n = "<" + e.name, s = OL(t, r, "", "attributes"), u = e.selfClosing ? " />" : ">";
      return e.attributes && e.attributes.length > 0 ? d([n, I(d([" ", s])), u]) : d([n, u]);
    }, "printOpeningTag");
    var OL = i((e, t, r, n) => Ee(d([r, B]), e.map(t, n)), "printSeparatedList");
    var j1 = i((e, t, r) => {
      e[Y] = true;
      let n = C(tl(e, t, r));
      e[Y] = false, e[L] = false;
      let s = e.name.toLowerCase();
      if (s == "script" || s == "style") {
        let { value: a } = e.children?.[0]?.value || {};
        return a ? [n, a, d(["</", e.name, ">"])] : [n, d(["</", e.name, ">"])];
      }
      if (!e.selfClosing) {
        e.children = mn(e.children);
        let a = An(e, t, r, "children"), l = d(["</", e.name, ">"]), p = [n], f = d(a);
        if (Ai(e))
          p.push(I(d([ne, f])), ne);
        else {
          let m = [];
          var u = e.children.findIndex((h) => h.type != "PrintExpressionStatement" && h.type != "PrintTextStatement") == -1;
          a.length > 0 && (u || m.push(P)), m.push(f), p.push(I(d(m))), a.length > 0 && (u || p.push(P));
        }
        return p.push(l), Ai(e) ? C(d(p)) : d(p);
      }
      return n;
    }, "printElement");
    var Ou = H(re());
    var bL = i((e) => ["id", "class", "type"].indexOf(e) > -1, "mayCorrectWhitespace");
    var NL = i((e) => e.replace(/\s+/g, " ").trim(), "sanitizeWhitespace");
    var IL = i((e, t, r, ...n) => {
      let s = [], u = e, a = n;
      for (; Ou.Node.isBinaryConcatExpression(u); )
        s.unshift(t.call(r, ...a, "right")), a.push("left"), u = u.left;
      return s.unshift(t.call(r, ...a)), d(s);
    }, "printConcatenatedString");
    var V1 = i((e, t, r = r) => {
      e[Y] = false;
      let n = [t.call(r, "name")];
      if (e[Y] = true, e[L] = false, e.value) {
        if (n.push('="'), Ou.Node.isBinaryConcatExpression(e.value) && e.value.wasImplicitConcatenation)
          n.push(IL(e.value, t, r, "value"));
        else {
          let s = Ou.Node.isStringLiteral(e.value);
          bL(e.name.name) && s && (e.value.value = NL(e.value.value)), n.push(t.call(r, "value"));
        }
        n.push('"');
      }
      return d(n);
    }, "printAttribute");
    var K1 = i((e, t) => {
      e[Y] = false;
      let r = [e.name];
      qe(t, r, e);
      let n = d(r);
      return r.length === 1 ? n : C(n);
    }, "printIdentifier");
    var W1 = H(re());
    var H1 = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = e.trimLeft ? "{{-" : "{{", s = e.trimRight ? "-}}" : "}}", u = fi(e.value) && !W1.Node.isObjectExpression(e.value), a = u ? " " : B, l = d([a, t.call(r, "value")]), p = u ? l : I(l);
      return C(d([n, p, a, s]));
    }, "printExpressionStatement");
    var X1 = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = [t.call(r, "object")];
      return n.push(e.computed ? "[" : "."), n.push(t.call(r, "property")), e.computed && n.push("]"), qe(t, n, e), C(d(n));
    }, "printMemberExpression");
    var rl = H(re());
    var _L = i((e) => uu(e, (t) => t[Ln] === true), "isInFilterBlock");
    var RL = i((e, t, r, n) => {
      if (!(e.arguments && e.arguments.length > 0))
        return "";
      let u = t.map(r, ...n, "arguments");
      return e.arguments.length === 1 && rl.Node.isObjectExpression(e.arguments[0]) ? e.isDjango ? C(d([":", u[0]])) : C(d(["(", u[0], ")"])) : e.isDjango ? C(d([":", I(d([ne, Ee(d([",", B]), u)])), ne])) : C(d(["(", I(d([ne, Ee(d([",", B]), u)])), ne, ")"]));
    }, "printArguments");
    var $1 = i((e, t, r, n) => {
      let s = RL(e, t, r, n), u = t.call(r, ...n, "name");
      return d([u, s]);
    }, "printOneFilterExpression");
    var PL = i((e, t = "") => Ee(d([t === "" ? ne : B, "|", t]), e), "joinFilters");
    var J1 = i((e, t, r, n) => {
      let s = e;
      e[Y] = false, e[L] = true;
      let u = n.twigFollowOfficialCodingStandards === false, a = u ? " " : "", l = ["target"], p = [$1(e, t, r, [])];
      for (; rl.Node.isFilterExpression(s.target); )
        p.unshift($1(s.target, t, r, l)), l.push("target"), s = s.target;
      let f = t.call(r, ...l), m = _L(t), h = Ei(di(e, ...l)), E = [];
      if (h && E.push("("), E.push(f), h && E.push(")"), m && (E.push(d([" ", p[0]])), p = p.slice(1)), p.length === 1)
        E.push(`${a}|${a}`, p[0]);
      else if (p.length > 1) {
        let F = d([u ? B : ne, `|${a}`, PL(p, a)]);
        E.push(I(F));
      }
      let x = au(t);
      return x === Y ? (E.push(" }}"), E.unshift("{{ ")) : x === pt && ou(E), C(d(E));
    }, "printFilterExpression");
    var Q1 = i((e, t, r, n) => {
      if (e.properties.length === 0)
        return "{}";
      e[Y] = false;
      let s = t.map(r, "properties"), u = n.twigAlwaysBreakObjects ? P : B, a = d([B, Ee(d([",", u]), s)]), l = ["{", I(a), u, "}"];
      return qe(t, l, e), C(d(l));
    }, "printObjectExpression");
    var z1 = H(re());
    var Z1 = i((e, t, r, n) => {
      e[L] = !e.computed && z1.Node.isStringLiteral(e.key) && !go(e.key.value);
      let s = e.key.wasImplicitConcatenation, u = e.computed && !s, a = [];
      return u && a.push("("), a.push(t.call(r, "key")), u && a.push(")"), a.push(": "), e[L] = true, a.push(t.call(r, "value")), d(a);
    }, "printObjectProperty");
    var eT = H(re());
    var tT = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = t.map(r, "arguments"), s = [t.call(r, "callee"), "("];
      return e.arguments.length === 0 ? s.push(")") : e.arguments.length === 1 && eT.Node.isObjectExpression(e.arguments[0]) ? s.push(n[0], ")") : s.push(I(d([ne, Ee(d([",", B]), n)])), ne, ")"), qe(t, s, e), C(d(s));
    }, "printCallExpression");
    var rT = { TestNullExpression: "null", TestDivisibleByExpression: "divisible by", TestDefinedExpression: "defined", TestEmptyExpression: "empty", TestEvenExpression: "even", TestOddExpression: "odd", TestIterableExpression: "iterable", TestSameAsExpression: "same as" };
    var LL = i((e) => e.constructor.name === "UnarySubclass" && e.operator === "not", "isNegator");
    var nT = i((e, t, r) => {
      let n = e.__proto__.type, s = [t.call(r, "expression"), " is "], u = sr(t), a = Array.isArray(e.arguments) && e.arguments.length > 0;
      if (LL(u) && s.push("not "), rT[n] ? s.push(rT[n]) : console.error("TestExpression: No text for " + n + " defined"), a) {
        let l = t.map(r, "arguments"), p = Ee(d([",", B]), l);
        s.push(C(d(["(", I(d([ne, p])), ne, ")"])));
      }
      return d(s);
    }, "printTestExpression");
    var iT = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = [e.operator, t.call(r, "argument")];
      return qe(t, n, e), C(d(n));
    }, "printUnaryExpression");
    var sT = H(re());
    var wL = i((e) => Ei(e), "argumentNeedsParentheses");
    var qL = i((e) => e === "not", "isLogicalOperator");
    var kL = i((e, t, r) => {
      let n = Dt(t, yr, false);
      n || (e[yr] = true);
      let u = sr(t)[hr] !== false, a = [e.operator, " "], l = wL(e.argument), p = t.call(r, "argument");
      l ? a.push("(", I(d([ne, p])), d([ne, ")"])) : a.push(p);
      let f = d(a);
      return !n && u ? C(f) : f;
    }, "printLogicalExpression");
    var uT = i((e, t, r) => {
      let n = [], s = sT.Node.isTestExpression(e.argument);
      return qL(e.operator) && !s ? kL(e, t, r) : (s || n.push(e.operator, " "), n.push(t.call(r, "argument")), d(n));
    }, "printUnarySubclass");
    var ML = i((e, t = true) => {
      let r = it(e);
      return r === 0 ? t ? B : "" : r === 1 ? P : d([P, P]);
    }, "newlinesOnly");
    var aT = i((e, t, r) => {
      let n = e[Dr] === true, s = e[Ar] === true, u = t.call(r, "value");
      if (_r(u) && e[wn])
        return ML(u);
      let a = So(u, n, s);
      return Ee(d([P, P]), a);
    }, "printTextStatement");
    var GL = i((e, t) => t === 0 || e[t - 1] !== "\\", "isUnmaskedOccurrence");
    var oT = i((e) => (t) => {
      let r = t.indexOf(e);
      for (; r >= 0; ) {
        if (GL(t, r))
          return true;
        r = t.indexOf(e, r + 1);
      }
      return false;
    }, "containsUnmasked");
    var UL = oT("'");
    var YL = oT('"');
    var jL = i((e, t) => UL(e) ? '"' : YL(e) ? "'" : fn(t), "getQuoteChar");
    var lT = i((e, t, r, n) => {
      let s = Dt(t, L, false), u = Dt(t, Pn, null);
      if (s) {
        let a = u || jL(e.value, n);
        return a + e.value + a;
      }
      return e.value;
    }, "printStringLiteral");
    var cT = i((e, t, r) => {
      e[L] = true;
      let n = t.map(r, "elements"), s = d([ne, Ee(d([",", B]), n)]);
      return C(d(["[", I(s), ne, "]"]));
    }, "printArrayExpression");
    var pT = i((e, t, r) => {
      let n = t.call(r, "target"), s = e.start ? t.call(r, "start") : "", u = e.end ? t.call(r, "end") : "";
      return d([n, "[", s, ":", u, "]"]);
    }, "printSliceExpression");
    var fT = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", ' use "', t.call(r, "source"), '"'];
      if (e.aliases && e.aliases.length > 0) {
        n.push(" with");
        let u = t.map(r, "aliases");
        n.push(I(d([B, Ee(d([",", B]), u)]))), n.push(B);
      } else
        n.push(" ");
      return n.push(e.trimRight ? "-%}" : "%}"), C(d(n));
    }, "printUseStatement");
    var ET = i((e, t, r) => d([t.call(r, "name"), " as ", t.call(r, "alias")]), "printAliasExpression");
    var dT = H(re());
    var mT = i((e, t, r, n) => {
      e[Y] = false;
      let s = Array.isArray(e.body), u = n.twigOutputEndblockName === true;
      if (s) {
        let a = t.call(r, "name"), p = [d([e.trimLeft ? "{%-" : "{%", " block ", a, e.trimRightBlock ? " -%}" : " %}"])];
        if (e.body.length > 0) {
          let m = Re(e, t, r, "body");
          p.push(m);
        }
        return p.push(P), p.push(e.trimLeftEndblock ? "{%-" : "{%", " endblock", u ? d([" ", a]) : "", e.trimRight ? " -%}" : " %}"), C(d(p));
      } else if (dT.Node.isPrintExpressionStatement(e.body)) {
        let a = [e.trimLeft ? "{%-" : "{%", " block ", t.call(r, "name"), " ", t.call(r, "body", "value"), e.trimRight ? " -%}" : " %}"];
        return d(a);
      }
    }, "printBlockStatement");
    var DT = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " spaceless ", e.trimRightSpaceless ? "-%}" : "%}"];
      return n.push(Re(e, t, r, "body")), n.push(P), n.push(e.trimLeftEndspaceless ? "{%-" : "{%", " endspaceless ", e.trimRight ? "-%}" : "%}"), C(d(n));
    }, "printSpacelessBlock");
    var VL = i((e, t) => d([e.trimLeft ? "{%-" : "{%", " autoescape ", fn(t), e.escapeType || "html", fn(t), " ", e.trimRightAutoescape ? "-%}" : "%}"]), "createOpener");
    var AT = i((e, t, r, n) => {
      let s = [VL(e, n)];
      return s.push(Re(e, t, r, "expressions")), s.push(P, e.trimLeftEndautoescape ? "{%-" : "{%", " endautoescape ", e.trimRight ? "-%}" : "%}"), d(s);
    }, "printAutoescapeBlock");
    var hT = i((e, t, r) => {
      let n = e.trimLeft ? "-" : "", s = e.trimRight ? "-" : "";
      return `{%${n} flush ${s}%}`;
    }, "printFlushStatement");
    var yT = i((e, t, r) => {
      e[L] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " include ", t.call(r, "source")];
      if (e.argument) {
        let s = t.call(r, "argument");
        n.push(" with "), n.push(s);
      }
      return e.contextFree && n.push(" only"), n.push(e.trimRight ? " -%}" : " %}"), C(d(n));
    }, "printIncludeStatement");
    var bi = H(re());
    var TT = Symbol("IS_ELSEIF");
    var xT = i((e, t, r) => {
      e[Y] = false;
      let n = Array.isArray(e.alternate) && e.alternate.length > 0, s = bi.Node.isIfStatement(e.alternate), u = e[TT] === true, a = e.consequent.length === 0, l = e.consequent.length === 1, p = e.consequent[0], f = !u && !e.alternate && (a || l && !bi.Node.isElement(p) && (!bi.Node.isPrintTextStatement(p) || lu(p.value.value)));
      l && bi.Node.isPrintTextStatement(p) && lu(p.value.value) && (p[Dr] = true, p[Ar] = true);
      let m = C(d([e.trimLeft ? "{%- " : "{% ", u ? "elseif" : "if", I(d([B, t.call(r, "test")])), " ", e.trimRightIf ? "-%}" : "%}"])), h = f ? a ? "" : t.call(r, "consequent", "0") : Re(e, t, r, "consequent"), E = [m, h];
      return n ? (E.push(P, e.trimLeftElse ? "{%-" : "{%", " else ", e.trimRightElse ? "-%}" : "%}"), E.push(Re(e, t, r, "alternate"))) : s && (e.alternate[TT] = true, E.push(P), E.push(t.call(r, "alternate"))), u || E.push(f ? "" : P, e.trimLeftEndif ? "{%-" : "{%", " endif ", e.trimRight ? "-%}" : "%}"), d(E);
    }, "printIfStatement");
    var KL = i((e) => "" + e / 1e3 + "s", "formatDelay");
    var WL = i((e, t, r) => {
      let n = [], s = [e.trimLeft ? "{%-" : "{%", " mount"];
      e.async === true && s.push(" async"), e.name && s.push(" ", t.call(r, "name")), e.name && e.source && s.push(" from"), e.source && s.push(" ", t.call(r, "source")), e.key && s.push(I(d([B, "as ", t.call(r, "key")]))), n.push(C(d(s))), e.argument && n.push(I(d([" with ", t.call(r, "argument")]))), e.delayBy && n.push(I(d([B, "delay placeholder by ", KL(e.delayBy)])));
      let u = e.body || e.otherwise ? e.trimRightMount : e.trimRight;
      return n.push(d([B, u ? "-%}" : "%}"])), C(d(n));
    }, "buildOpener");
    var HL = i((e, t) => I(d([P, e.call(t, "body")])), "buildBody");
    var XL = i((e, t, r) => {
      let n = [];
      return n.push(d([P, e.trimLeftCatch ? "{%-" : "{%", " catch "])), e.errorVariableName && n.push(t.call(r, "errorVariableName"), " "), n.push(e.trimRightCatch ? "-%}" : "%}"), n.push(I(d([P, t.call(r, "otherwise")]))), d(n);
    }, "buildErrorHandling");
    var gT = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = [WL(e, t, r)];
      return e.body && n.push(HL(t, r)), e.otherwise && n.push(XL(e, t, r)), (e.body || e.otherwise) && n.push(d([P, e.trimLeftEndmount ? "{%-" : "{%", " endmount ", e.trimRight ? "-%}" : "%}"])), d(n);
    }, "printMountStatement");
    var $L = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " for "];
      return e.keyTarget && n.push(t.call(r, "keyTarget"), ", "), n.push(t.call(r, "valueTarget"), " in ", t.call(r, "sequence")), e.condition && n.push(I(d([B, "if ", t.call(r, "condition")]))), n.push(d([" ", e.trimRightFor ? "-%}" : "%}"])), C(d(n));
    }, "printFor");
    var vT = i((e, t, r) => {
      e[Y] = false;
      let n = [$L(e, t, r)], s = e.body.expressions.length === 0 || e.body.expressions.length === 1 && dn(e.body.expressions[0]), u = t.call(r, "body");
      if ((!s || e.otherwise) && n.push(Dn(u)), e.otherwise) {
        n.push(P, e.trimLeftElse ? "{%-" : "{%", " else ", e.trimRightElse ? "-%}" : "%}");
        let a = t.call(r, "otherwise");
        n.push(Dn(a));
      }
      return n.push(s ? "" : P, e.trimLeftEndfor ? "{%-" : "{%", " endfor ", e.trimRight ? "-%}" : "%}"), d(n);
    }, "printForStatement");
    var nl = H(re());
    var JL = i((e) => nl.Node.isObjectExpression(e) || xo(e) || nl.Node.isArrayExpression(e), "shouldAvoidBreakBeforeClosing");
    var QL = i((e, t, r, n) => {
      let s = e.assignments[n];
      s[hr] = false;
      let u = JL(s.value);
      return C(d([e.trimLeft ? "{%-" : "{%", " set ", t.call(r, "assignments", n), u ? " " : B, e.trimRight ? "-%}" : "%}"]));
    }, "buildSetStatement");
    var zL = i((e) => Array.isArray(e.assignments) && e.assignments.length === 1 && Array.isArray(e.assignments[0].value), "isEmbracingSet");
    var ZL = i((e, t, r) => {
      let n = [];
      return Array.isArray(e.assignments) && e.assignments.length > 0 && e.assignments.forEach((u, a) => {
        n.length > 0 && n.push(P), n.push(QL(e, t, r, a));
      }), d(n);
    }, "printRegularSet");
    var ew = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " set ", t.call(r, "assignments", "0", "name"), e.trimRightSet ? " -%}" : " %}"];
      e[L] = false;
      let s = Re(e, t, r, "assignments", "0", "value");
      return n.push(s), n.push(P, e.trimLeftEndset ? "{%-" : "{%", " endset ", e.trimRight ? "-%}" : "%}"), d(n);
    }, "printEmbracingSet");
    var ST = i((e, t, r) => (e[L] = true, zL(e) ? ew(e, t, r) : ZL(e, t, r)), "printSetStatement");
    var FT = i((e, t, r) => d([e.trimLeft ? "{%-" : "{%", " do ", t.call(r, "value"), e.trimRight ? " -%}" : " %}"]), "printDoStatement");
    var CT = i((e, t, r) => (e[L] = true, d([e.trimLeft ? "{%-" : "{%", " extends ", t.call(r, "parentName"), e.trimRight ? " -%}" : " %}"])), "printExtendsStatement");
    var tw = i((e, t, r) => {
      e[Y] = false, e[L] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " embed ", t.call(r, "parent")];
      return e.argument && n.push(I(d([B, "with ", t.call(r, "argument")]))), n.push(d([B, e.trimRightEmbed ? "-%}" : "%}"])), C(d(n));
    }, "printOpener");
    var BT = i((e, t, r) => {
      let n = Re(e, t, r, "blocks"), s = tw(e, t, r), u = d([P, e.trimLeftEndembed ? "{%-" : "{%", " endembed ", e.trimRight ? "-%}" : "%}"]);
      return d([s, n, u]);
    }, "printEmbedStatement");
    var OT = i((e, t, r) => (e[L] = true, C(d([e.trimLeft ? "{%-" : "{%", " import ", t.call(r, "key"), I(d([B, "as ", t.call(r, "alias")])), B, e.trimRight ? "-%}" : "%}"]))), "printImportDeclaration");
    var rw = i((e) => {
      let t = [e.key.name];
      return e.key.name !== e.alias.name && t.push(" as ", e.alias.name), d(t);
    }, "printImportDeclaration");
    var bT = i((e, t, r) => {
      e[L] = true;
      let n = e.imports.map(rw), s = I(d([B, Ee(d([",", B]), n)]));
      return C(d([e.trimLeft ? "{%-" : "{%", " from ", t.call(r, "source"), " import", s, B, e.trimRight ? "-%}" : "%}"]));
    }, "printFromStatement");
    var NT = i((e) => {
      let t = e.value.value || "", r = pu(t), n = t.length >= 3 ? t[2] === "-" : false, s = t.length >= 3 ? t.slice(-3, -2) === "-" : false;
      return it(r) === 0 ? Eu(r, n, s) : d([n ? "{#-" : "{#", r, s ? "-#}" : "#}"]);
    }, "printTwigComment");
    var IT = i((e, t, r) => {
      let n = cu(e.value.value || "");
      return it(n) === 0 ? fu(n) : d(["<!-- ", n, " -->"]);
    }, "printHtmlComment");
    var _T = i((e, t, r) => {
      e[L] = true, e[Pn] = '"';
      let n = "<!" + (e.declarationType || "").toUpperCase(), s = t.map(r, "parts");
      return Kr([n, " ", Ee(" ", s), ">"]);
    }, "printDeclaration");
    var RT = H(re());
    var PT = i((e, t, r) => {
      e[L] = true;
      let s = [BA(e, t, r)], u = t.map(r, "sections");
      return e.sections.forEach((a, l) => {
        RT.Node.isGenericTwigTag(a) ? s.push(d([P, u[l]])) : Fo(a) || s.push(Dn(u[l]));
      }), d(s);
    }, "printGenericTwigTag");
    var LT = i((e, t, r) => e.tokenText, "printGenericToken");
    var nw = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " macro ", t.call(r, "name"), "("], s = t.map(r, "arguments"), u = Ee(d([",", B]), s);
      return n.push(I(d([ne, u]))), n.push(")", B, e.trimRightMacro ? "-%}" : "%}"), C(d(n));
    }, "printOpener");
    var wT = i((e, t, r) => {
      let n = [nw(e, t, r)];
      return n.push(I(d([P, t.call(r, "body")]))), n.push(P, e.trimLeftEndmacro ? "{%-" : "{%", " endmacro ", e.trimRight ? "-%}" : "%}"), d(n);
    }, "printMacroDeclarationStatement");
    var iw = i((e, t, r) => {
      let n = [e.trimLeft ? "{%- " : "{% "], s = t.call(r, "filterExpression");
      return n.push(s, B, e.trimRightFilter ? "-%}" : "%}"), C(d(n));
    }, "printOpeningGroup");
    var qT = i((e, t, r) => {
      e[Ln] = true;
      let n = iw(e, t, r), s = Re(e, t, r, "body"), u = d([P, e.trimLeftEndfilter ? "{%-" : "{%", " endfilter ", e.trimRight ? "-%}" : "%}"]);
      return d([n, s, u]);
    }, "printFilterBlockStatement");
    var kT = i((e, t, r) => {
      let n = t.call(r, "name");
      e[L] = true;
      let s = t.call(r, "value"), a = fi(e.value) ? d([" ", s]) : I(d([B, s]));
      return d([n, " =", a]);
    }, "printVariableDeclarationStatement");
    var MT = i((e, t, r) => {
      e[L] = true;
      let n = t.call(r, "name"), s = t.call(r, "value");
      return d([n, " = ", s]);
    }, "printNamedArgumentExpression");
    var bu = "ORIGINAL_SOURCE";
    var sw = i((e, ...t) => {
      let r = new Yr(new Fn(e));
      for (let n of t)
        n.unaryOperators && r.addOperators(...n.unaryOperators.map((s) => s.text)), n.binaryOperators && r.addOperators(...n.binaryOperators.map((s) => s.text));
      return r;
    }, "createConfiguredLexer");
    var uw = i((e, ...t) => {
      for (let r of t) {
        if (r.tags)
          for (let n of r.tags)
            e.addTag(n);
        if (r.unaryOperators)
          for (let n of r.unaryOperators)
            e.addUnaryOperator(n);
        if (r.binaryOperators)
          for (let n of r.binaryOperators)
            e.addBinaryOperator(n);
        if (r.tests)
          for (let n of r.tests)
            e.addTest(n);
      }
    }, "applyParserExtensions");
    var aw = i((e, t, ...r) => {
      let n = new Mr(new Gr(sw(e, ...r), { ignoreWhitespace: true, ignoreComments: false, ignoreHtmlComments: false, applyWhitespaceTrimming: false }), { ignoreComments: false, ignoreHtmlComments: false, ignoreDeclarations: false, decodeEntities: false, multiTags: t, allowUnknownTags: true });
      return uw(n, ...r), n;
    }, "createConfiguredParser");
    var ow = i((e = []) => e.reduce((t, r) => {
      let n = r.split(",");
      return t[n[0].trim()] = n.slice(1).map((s) => s.trim()), t;
    }, {}), "getMultiTagConfig");
    var GT = i((e, t, r) => {
      let n = ki(r), s = ow(r.twigMultiTags || []), u = [Cu, ...Vl(n)], l = aw(e, s, ...u).parse();
      return l[bu] = e, l;
    }, "parse");
    var N = {};
    var lw = i((e) => {
      if (e && e.printers)
        for (let t of Object.keys(e.printers))
          N[t] = e.printers[t];
    }, "applyPlugin");
    var cw = i((e) => {
      let t = ki(e);
      ku(t).forEach((n) => {
        lw(n);
      });
    }, "applyPlugins");
    var pw = mi("prettier-ignore");
    var fw = mi("prettier-ignore-start");
    var Ew = mi("prettier-ignore-end");
    var dw = Di("prettier-ignore");
    var mw = Di("prettier-ignore-start");
    var Dw = Di("prettier-ignore-end");
    var Aw = i((e) => pw(e) || dw(e), "isIgnoreNextComment");
    var hw = i((e) => fw(e) || mw(e), "isIgnoreRegionStartComment");
    var yw = i((e) => Ew(e) || Dw(e), "isIgnoreRegionEndComment");
    var sl = "";
    var Ni = false;
    var il = false;
    var UT = i((e) => {
      il = il && !YT(e) || Aw(e), Ni = Ni || hw(e);
    }, "checkForIgnoreStart");
    var Tw = i((e) => {
      Ni && yw(e) && (Ni = false);
    }, "checkForIgnoreEnd");
    var YT = i((e) => !dn(e), "shouldApplyIgnoreNext");
    var jT = i((e, t, r) => {
      cw(t);
      let n = e.getValue(), s = n.constructor.name;
      n[bu] && (sl = n[bu]), t.twigPrintWidth && (t.printWidth = t.twigPrintWidth), Tw(n);
      let u = YT(n) && il || Ni, a = N[s];
      return !u && a ? (UT(n), N[s](n, e, r, t)) : (a || console.warn(`No print function available for node type "${s}"`), UT(n), gw(n) ? xw(n) : "");
    }, "print");
    var xw = i((e) => sl.substring(e.loc.start.index, e.loc.end.index), "getSubstringForNode");
    var gw = i((e) => sl && e.loc && e.loc.start && e.loc.end && e.loc.start.index && e.loc.end.index, "canGetSubstringForNode");
    N.SequenceExpression = OA;
    N.ConstantValue = (e) => e.value;
    N.StringLiteral = lT;
    N.Identifier = K1;
    N.UnaryExpression = iT;
    N.BinaryExpression = Bu;
    N.BinarySubclass = Bu;
    N.UnarySubclass = uT;
    N.TestExpression = nT;
    N.ConditionalExpression = Y1;
    N.Element = j1;
    N.Attribute = V1;
    N.PrintTextStatement = aT;
    N.PrintExpressionStatement = H1;
    N.MemberExpression = X1;
    N.FilterExpression = J1;
    N.ObjectExpression = Q1;
    N.ObjectProperty = Z1;
    var VT = i((e) => "" + e.value, "returnNodeValue");
    N.Fragment = (e, t, r) => t.call(r, "value");
    N.NumericLiteral = VT;
    N.BooleanLiteral = VT;
    N.NullLiteral = () => "null";
    N.ArrayExpression = cT;
    N.CallExpression = tT;
    N.NamedArgumentExpression = MT;
    N.SliceExpression = pT;
    N.UseStatement = fT;
    N.AliasExpression = ET;
    N.BlockStatement = mT;
    N.SpacelessBlock = DT;
    N.AutoescapeBlock = AT;
    N.FlushStatement = hT;
    N.IncludeStatement = yT;
    N.IfStatement = xT;
    N.MountStatement = gT;
    N.ForStatement = vT;
    N.BinaryConcatExpression = Bu;
    N.SetStatement = ST;
    N.VariableDeclarationStatement = kT;
    N.DoStatement = FT;
    N.ExtendsStatement = CT;
    N.EmbedStatement = BT;
    N.FilterBlockStatement = qT;
    N.ImportDeclaration = OT;
    N.FromStatement = bT;
    N.MacroDeclarationStatement = wT;
    N.TwigComment = NT;
    N.HtmlComment = IT;
    N.Declaration = _T;
    N.GenericTwigTag = (e, t, r, n) => {
      let s = e.tagName;
      return N[s + "Tag"] ? N[s + "Tag"](e, t, r, n) : PT(e, t, r, n);
    };
    N.GenericToken = LT;
    N.String = (e) => e;
    var KT = H(re());
    function WT(e, t, r, n) {
      let s = e.getValue();
      if (n.twigPrintEmbedElements && s instanceof KT.Element) {
        let u = s.name.toLowerCase();
        if (u == "script" || u == "style") {
          let a = u == "script" ? "babel" : "css", { value: l } = s.children?.[0].value;
          if (l) {
            let p = C(tl(s, e, t)), f = I([ne, r(l, { ...n, parser: a }, { stripTrailingHardline: true })]);
            return [p, f, P, d(["</", s.name, ">"])];
          }
        }
      }
      return false;
    }
    i(WT, "embed");
    var vw = [{ name: "melody", parsers: ["melody"], group: "Melody", tmScope: "melody.twig", aceMode: "html", codemirrorMode: "clike", codemirrorMimeType: "text/melody-twig", extensions: [".melody.twig", ".html.twig", ".twig", ".django", ".jinja"], linguistLanguageId: 0, vscodeLanguageIds: ["twig", "django", "django-html"] }];
    function Sw() {
      return false;
    }
    i(Sw, "hasPragma");
    function Fw() {
      return -1;
    }
    i(Fw, "locStart");
    function Cw() {
      return -1;
    }
    i(Cw, "locEnd");
    var Bw = { melody: { parse: GT, astFormat: "melody", hasPragma: Sw, locStart: Fw, locEnd: Cw } };
    function Ow(e) {
      return e.ast_type && e.ast_type !== "comment";
    }
    i(Ow, "canAttachComment");
    function bw(e) {
      let t = e.getValue();
      switch (t.ast_type) {
        case "comment":
          return t.value;
        default:
          throw new Error("Not a comment: " + JSON.stringify(t));
      }
    }
    i(bw, "printComment");
    function Nw(e, t) {
      delete t.lineno, delete t.col_offset;
    }
    i(Nw, "clean");
    var Iw = { melody: { print: jT, embed: WT, printComment: bw, canAttachComment: Ow, massageAstNode: Nw, willPrintOwnComments: () => true } };
    var _w = { twigMelodyPlugins: { type: "path", category: "Global", array: true, default: [{ value: [] }], description: "Provide additional plugins for Melody. Relative file path from the project root." }, twigMultiTags: { type: "path", category: "Global", array: true, default: [{ value: [] }], description: "Make custom Twig tags known to the parser." }, twigSingleQuote: { type: "boolean", category: "Global", default: true, description: "Use single quotes in Twig files?" }, twigAlwaysBreakObjects: { type: "boolean", category: "Global", default: true, description: "Should objects always break in Twig files?" }, twigPrintWidth: { type: "int", category: "Global", default: 80, description: "Print width for Twig files" }, twigFollowOfficialCodingStandards: { type: "boolean", category: "Global", default: true, description: "See https://twig.symfony.com/doc/2.x/coding_standards.html" }, twigOutputEndblockName: { type: "boolean", category: "Global", default: false, description: "Output the Twig block name in the 'endblock' tag" }, twigPrintEmbedElements: { type: "boolean", category: "Global", default: true, description: "whether print embeded element, such as styles and scripts" } };
  }
});

// src/extension.js
var import_vscode3 = __toESM(require("vscode"));

// src/hover/filters.json
var filters_default = {
  abs: {
    text: "abs",
    body: "abs",
    description: "filter returns the absolute value"
  },
  batch: {
    prefix: "batch",
    body: "batch(${size}, ${fill})",
    text: "batch(size, fill)",
    description: 'filter "batches" items by returning a list of lists with the given number of items. A second parameter can be provided and used to fill in missing items'
  },
  capitalize: {
    text: "capitalize",
    body: "capitalize",
    description: "filter capitalizes a value. The first character will be uppercase, all others lowercase"
  },
  convert_encoding: {
    prefix: "convert_encoding",
    body: "convert_encoding('${to}', '${from}')",
    text: "convert_encoding('to', 'from')",
    description: "filter converts a string from one encoding to another. The first argument is the expected output charset and the second one is the input charset"
  },
  date: {
    prefix: "date",
    body: 'date("${m/d/Y}")',
    text: 'date("m/d/Y")',
    description: "filter formats a date to a given format"
  },
  date_modify: {
    prefix: "date_modify",
    body: 'date_modify("${+1 day}")',
    text: 'date_modify("+1 day")',
    description: "filter modifies a date with a given modifier string"
  },
  default: {
    prefix: "default",
    body: "default('${default value}')",
    text: "default('default value')",
    description: "filter returns the passed default value if the value is undefined or empty, otherwise the value of the variable"
  },
  escape: {
    text: "escape",
    body: "escape",
    description: "filter escapes a string for safe insertion into the final output. It supports different escaping strategies depending on the template context"
  },
  first: {
    text: "first",
    body: "first",
    description: 'filter returns the first "element" of a sequence, a mapping, or a string'
  },
  format: {
    prefix: "format",
    body: "format($1)",
    text: "format()",
    description: "filter formats a given string by replacing the placeholders (placeholders follows the sprintf notation)",
    example: '{% set foo = "foo" %}\n{{ "I like %s and %s."| format(foo, "bar") }}\n\n{# outputs I like foo and bar #}'
  },
  join: {
    prefix: "join",
    body: "join${('optional')}",
    text: "join",
    description: "filter returns a string which is the concatenation of the items of a sequence"
  },
  json_encode: {
    prefix: "json_encode",
    body: "json_encode()",
    text: "json_encode()",
    description: "filter returns the JSON representation of a value. Internally, Twig uses the PHP json_encode function."
  },
  keys: {
    text: "keys",
    body: "keys",
    description: "filter returns the keys of an array. It is useful when you want to iterate over the keys of an array"
  },
  last: {
    text: "last",
    body: "last",
    description: 'filter returns the last "element" of a sequence, a mapping, or a string'
  },
  length: {
    text: "length",
    body: "length",
    description: "filter returns the number of items of a sequence or mapping, or the length of a string"
  },
  lower: {
    text: "lower",
    body: "lower",
    description: "filter converts a value to lowercase"
  },
  merge: {
    prefix: "merge",
    body: "merge(${array})",
    text: "merge(array)",
    description: "filter merges an array with another array"
  },
  nl2br: {
    text: "nl2br",
    body: "nl2br",
    description: "filter inserts HTML line breaks before all newlines in a string"
  },
  number_format: {
    prefix: "number_format",
    body: "number_format(${0}, '${.}', '${,}')",
    text: "number_format",
    description: "filter formats numbers. It is a wrapper around PHP's number_format function"
  },
  raw: {
    text: "raw",
    body: "raw",
    description: 'filter marks the value as being "safe", which means that in an environment with automatic escaping enabled this variable will not be escaped if raw is the last filter applied to it.'
  },
  replace: {
    prefix: "replace",
    body: "replace('${search}' : '${replace}')",
    text: "replace('search' : 'replace')",
    description: "filter formats a given string by replacing the placeholders."
  },
  reverse: {
    text: "reverse",
    body: "reverse",
    description: "filter reverses a sequence, a mapping, or a string"
  },
  round: {
    prefix: "round",
    body: "${0} | round(1, '${floor}')",
    text: "round",
    description: "filter rounds a number to a given precision"
  },
  slice: {
    prefix: "slice",
    body: "slice(${start}, ${length})",
    text: "slice(start, length)",
    description: "filter extracts a slice of a sequence, a mapping, or a string"
  },
  "slice [] notation": {
    prefix: "slice [] notation",
    body: "[${start}:${length}]",
    description: "filter extracts a slice of a sequence, a mapping, or a string"
  },
  sort: {
    text: "sort",
    body: "sort",
    description: "filter sorts an array"
  },
  split: {
    prefix: "split",
    body: "split('$1')",
    text: "split('')",
    description: "filter splits a string by the given delimiter and returns a list of strings"
  },
  striptags: {
    text: "striptags",
    body: "striptags",
    description: "filter strips SGML/XML tags and replace adjacent whitespace by one space"
  },
  title: {
    text: "title",
    body: "title",
    description: "filter returns a titlecased version of the value. Words will start with uppercase letters, all remaining characters are lowercase"
  },
  trim: {
    text: "trim",
    body: "trim",
    description: "filter strips whitespace (or other characters) from the beginning and end of a string"
  },
  "trim()": {
    prefix: "trim()",
    body: "trim('$1')",
    description: "filter strips whitespace (or other characters) from the beginning and end of a string"
  },
  upper: {
    text: "upper",
    body: "upper",
    description: "filter converts a value to uppercase"
  },
  url_encode: {
    text: "url_encode",
    body: "url_encode",
    description: "filter percent encodes a given string as URL segment or an array as query string"
  }
};

// src/hover/functions.json
var functions_default = {
  attribute: {
    prefix: "attribute",
    body: "{{ attribute($1) }}$2",
    description: 'The attribute function can be used to access a "dynamic" attribute of a variable',
    example: ""
  },
  block: {
    prefix: "block",
    body: "{{ block('${block name}') }}$1",
    description: "When a template uses inheritance and if you want to print a block multiple times, use the block function",
    example: ""
  },
  constant: {
    prefix: "constant",
    body: "{{ constant('${const name}') }}$1",
    description: "constant returns the constant value for a given string",
    example: "{{ some_date | date(constant('DATE_W3C')) }}\n{{ constant('Namespace\\Classname::CONSTANT_NAME') }}"
  },
  cycle: {
    prefix: "cycle",
    body: "{{ cycle(${array}, ${position}) }}$1",
    description: "The cycle function cycles on an array of values",
    example: ""
  },
  date: {
    prefix: "date",
    body: "{% set ${currentDate} = date($1) %}$2",
    description: "Converts an argument to a date to allow date comparison",
    example: "{% date() %}\n{% date('-2days') %}\n{% date('-2days', 'Europe/Paris') %}"
  },
  dump: {
    prefix: "dump",
    body: "{{ dump(${array}) }}$1",
    description: "(function) dumps information about a template variable. This is mostly useful to debug a template that does not behave as expected by introspecting its variables",
    example: ""
  },
  include: {
    prefix: "include function",
    body: "{{ include('${filename}.twig') }}$1",
    description: "(function) returns the rendered content of a template",
    example: ""
  },
  max: {
    prefix: "max",
    body: "{% set ${result} = max(${array}) %}$1",
    description: "(function) returns the biggest value of a sequence or a set of values",
    example: '{{ max(1, 3, 2) }}\n{# returns "3" #}\n\n{{ max({2: "e", 3: "a", 1: "b", 5: "d", 4: "c"}) }}\n{# returns "e" #}'
  },
  min: {
    prefix: "min",
    body: "{% set ${result} = min(${array}) %}$1",
    description: "(function) returns the lowest value of a sequence or a set of values",
    example: '{{ min(1, 3, 2) }}\n{# returns "1" #}\n\n{{ min({2: "e", 3: "a", 1: "b", 5: "d", 4: "c"}) }}\n{# returns "a" #}'
  },
  parent: {
    prefix: "parent",
    body: "{{ parent() }}",
    description: "(function) return the content of the block as defined in the base template",
    example: '{% extends "base.html" %}\n\n{% block sidebar %}\n	<h3>Table Of Contents</h3>\n	...\n	{{ parent() }}\n{% endblock %}'
  },
  random: {
    prefix: "random",
    hover: "",
    body: "{% set ${result} = random($1) %}$2",
    description: "(function) returns a random value depending on the supplied parameter type",
    example: "{{ random(['apple', 'orange', 'citrus']) }}\n{# example output: orange #}\n\n{{ random('ABC') }}\n{# example output: C #}\n\n{{ random() }}\n{# example output: 15386094 (works as the native PHP mt_rand function) #}\n\n{{ random(5) }}\n{# example output: 3 #}"
  },
  "range set": {
    prefix: "range set",
    body: "{% set ${result} = range(${low}, ${high}, ${step}) %}$1",
    description: "(function) Returns an array of elements from low to high, inclusive",
    example: "{% set result = range(0, 6, 2) %}\n{% dump(result) %}\n{# output: array(0, 2, 4, 6) #}"
  },
  range: {
    prefix: "range",
    body: "range(${low}, ${high}, ${step})",
    description: "(function) Returns an array of elements from low to high, inclusive",
    example: "{% set result = range(0, 6, 2) %}\n{% dump(result) %}\n{# output: array(0, 2, 4, 6) #}"
  },
  source: {
    prefix: "source",
    body: "{{ source('${template}.twig') }}$1",
    description: "(function) returns the content of a template without rendering it",
    example: ""
  },
  template_from_string: {
    prefix: "template_from_string",
    body: '{{ include(template_from_string("$1")) }}$2',
    description: "(function) loads a template from a string",
    example: '{{ include(template_from_string("Hello {{ name }}")) }}'
  }
};

// src/hover/twig.json
var twig_default = {
  show: {
    prefix: "show",
    body: "{{ $1 }}",
    description: "{{ }}"
  },
  execute: {
    prefix: "execute",
    body: "{% $1 %}",
    description: "{% %}"
  },
  autoescape: {
    prefix: "autoescape",
    body: ["{% autoescape %}", "	$1", "{% endautoescape %}"],
    description: "Whether automatic escaping is enabled or not, you can mark a section of a template to be escaped or not by using the autoescape tag",
    example: "{% autoescape %}\n    Everything will be automatically escaped in this block\n    using the HTML strategy\n{% endautoescape %}\n\n{% autoescape 'html' %}\n    Everything will be automatically escaped in this block\n    using the HTML strategy\n{% endautoescape %}\n\n{% autoescape 'js' %}\n    Everything will be automatically escaped in this block\n    using the js escaping strategy\n{% endautoescape %}\n\n{% autoescape false %}\n    Everything will be outputted as is in this block\n{% endautoescape %}"
  },
  block: {
    prefix: "block",
    body: ["{% block ${name} %}", "	$1", "{% endblock ${name} %}"],
    description: "When a template uses inheritance and if you want to print a block multiple times, use the block function"
  },
  do: {
    prefix: "do",
    body: ["{% do $1 %}"],
    description: "The do tag works exactly like the regular variable expression ({{ ... }}) just that it doesn't print anything",
    example: "{% do 1 + 2 %}"
  },
  embed: {
    prefix: "embed",
    body: ['{% embed "${filename}.twig" %}', "	$1", "{% endembed  %}"],
    description: "The embed tag combines the behaviour of include and extends. It allows you to include another template's contents, just like include does. But it also allows you to override any block defined inside the included template, like when extending a template"
  },
  extends: {
    prefix: "extends",
    body: '{% extends "${filename}.twig" %}',
    description: "Twig snippets"
  },
  filter: {
    prefix: "filter",
    body: ["{% filter ${filter name} %}", "	$1", "{% endfilter  %}"],
    description: "Filter sections allow you to apply regular Twig filters on a block of template data. Just wrap the code in the special filter section",
    example: '{% filter lower | escape %}\n    <strong>SOME TEXT</strong>\n{% endfilter %}\n\n{# outputs "&lt;strong&gt;some text&lt;/strong&gt;" #}'
  },
  flush: {
    prefix: "flush",
    body: ["{% flush %}"],
    description: "The flush tag tells Twig to flush the output buffer",
    example: "{% flush %}"
  },
  for: {
    prefix: "for",
    body: ["{% for ${row} in ${array} %}", "	$1", "{% endfor %}"],
    description: "Loop over each item in a sequence"
  },
  "for if": {
    prefix: "for if",
    body: [
      "{% for ${row} in ${array} if ${condition} %}",
      "	$1",
      "{% endfor %}"
    ],
    description: "Loop over each item in a sequence"
  },
  "for else": {
    prefix: "for else",
    body: [
      "{% for ${row} in ${array} %}",
      "	$1",
      "{% else %}",
      "	$2",
      "{% endfor %}"
    ],
    description: "Loop over each item in a sequence"
  },
  "for if else": {
    prefix: "for if else",
    body: [
      "{% for ${row} in ${array} if ${condition} %}",
      "	$1",
      "{% else %}",
      "	$2",
      "{% endfor %}"
    ],
    description: "Loop over each item in a sequence"
  },
  loop: {
    prefix: "loop",
    body: "loop.",
    description: "special variables inside of a for loop block"
  },
  if: {
    prefix: "if",
    body: ["{% if ${condition} %}", "	$1", "{% endif %}"],
    description: "The if statement in Twig is comparable with the if statements of PHP"
  },
  "if else": {
    prefix: "if else",
    body: [
      "{% if ${condition} %}",
      "	$1",
      "{% else %}",
      "	$2",
      "{% endif %}"
    ],
    description: "The if statement in Twig is comparable with the if statements of PHP"
  },
  else: {
    prefix: "else",
    body: "{% else %}",
    description: "The if statement in Twig is comparable with the if statements of PHP"
  },
  "else if": {
    prefix: "else if",
    body: "{% elseif ${condition} %}",
    description: "The if statement in Twig is comparable with the if statements of PHP"
  },
  import: {
    prefix: "import",
    body: '{% import "${filename}.twig" as ${alias}%}',
    description: "Twig supports putting often used code into macros. These macros can go into different templates and get imported from there."
  },
  _self: {
    prefix: "_self",
    body: "_self",
    description: "To import macros from the current file, use the special _self variable for the source"
  },
  include: {
    prefix: "include",
    body: '{% include "${filename}.twig" %}',
    description: "The include statement includes a template and returns the rendered content of that file into the current namespace"
  },
  macro: {
    prefix: "macro",
    body: ["{% macro ${name}($1) %}", "	$2", "{% endmacro %}"],
    description: "Twig snippets"
  },
  sandbox: {
    prefix: "sandbox",
    body: ["{% sandbox %}", "	$1", "{% endsandbox %}"],
    description: "The sandbox tag can be used to enable the sandboxing mode for an included template, when sandboxing is not enabled globally for the Twig environment"
  },
  set: {
    prefix: "set",
    body: ["{% set ${name} = ${value} %}$1"],
    description: "Assign values to variables"
  },
  "set block": {
    prefix: "set (block)",
    body: ["{% set ${name} %}", "	$1", "{% endset %}"],
    description: "Inside code blocks you can also assign values to variables. Assignments use the set tag and can have multiple targets"
  },
  spaceless: {
    prefix: "spaceless",
    body: ["{% spaceless %}", "	$1", "{% endspaceless %}"],
    description: "Use the spaceless tag to remove whitespace between HTML tags, not whitespace within HTML tags or whitespace in plain text"
  },
  use: {
    prefix: "use",
    body: '{% use "${filename}.twig" %}',
    description: "Twig snippets"
  },
  verbatim: {
    prefix: "verbatim",
    body: ["{% verbatim %}", "	$1", "{% endverbatim %}"],
    description: "The verbatim tag marks sections as being raw text that should not be parsed. For example to put Twig syntax as example into a template you can use this snippet"
  }
};

// src/formatting.ts
var import_prettier = require("prettier");
var import_vscode = require("vscode");
var htmlPlugin = __toESM(require("prettier/parser-html"));
var djangoPlugin = __toESM(require_out());
function formatting(document, diagnosticCollection) {
  const options2 = {
    "tabWidth": 2,
    "printWidth": 5e3,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none",
    "twigPrintWidth": 5e3,
    "twigMultiTags": [
      "with,endwith"
    ],
    "twigAlwaysBreakObjects": false,
    "twigSingleQuote": true,
    "parser": "melody",
    "plugins": [],
    "htmlWhitespaceSensitivity": "ignore",
    "twigPrintEmbedElements": false
  };
  Object.assign(options2, import_prettier.resolveConfig.sync(document.uri.fsPath) ?? []);
  options2.twigSingleQuote = true;
  options2.plugins = [djangoPlugin];
  options2.parser = "melody";
  options2.htmlWhitespaceSensitivity = "ignore";
  const doc = { text: document.getText() };
  try {
    doc.text = (0, import_prettier.format)(doc.text, options2);
    if (!doc.text) {
      throw new Error("django-html: formatting failed");
    }
    formatStyleAndScript(doc, options2);
    diagnosticCollection?.clear();
  } catch (error) {
    if (diagnosticCollection && error.loc) {
      diagnosticCollection.clear();
      const loc = error.loc;
      if (!loc.end) {
        loc.end = { line: loc.start.line, column: loc.start.column + 1 };
      }
      let line = loc.start.line - 1, col = loc.start.column - 1;
      let line2 = loc.end.line - 1, col2 = loc.end.column - 1;
      let range = new import_vscode.Range(line, col, line2, col2);
      setTimeout(() => diagnosticCollection.set(document.uri, [new import_vscode.Diagnostic(range, error.message.split(" 	 ")[0].split("\n")[0], 0)]), 250);
    } else {
      console.log(error);
    }
  }
  return doc.text;
}
function formatStyleAndScript(doc, options2) {
  let indent = "  ";
  if (options2.useTabs) {
    indent = "	";
  } else {
    if (options2.tabWidth) {
      indent = " ".repeat(options2.tabWidth);
    }
  }
  let eol = doc.text.includes("\r\n") ? "\r\n" : "\n";
  let result = htmlPlugin.parsers.html.parse(doc.text, null, {});
  let incrChars = 0;
  let incrLines = 0;
  const doFormat = (root) => {
    if (!root.children)
      return;
    for (let i2 = 0; i2 < root.children.length; i2++) {
      const node = root.children[i2];
      if (node.type == "element" && (node.name == "script" || node.name == "style")) {
        if (node.children.length == 0) {
          continue;
        }
        if (node.prev && node.prev.value) {
          let pv = node.prev.value.trim();
          if (pv.endsWith("{# prettier-ignore #}") || pv.endsWith("{% comment %}")) {
            continue;
          }
        }
        let tagOffset = node.sourceSpan.start.offset;
        let tagOffset2 = tagOffset;
        while (tagOffset2 > -1) {
          if (doc.text[tagOffset2] == "\n") {
            break;
          }
          tagOffset2--;
        }
        let tagIndent = doc.text.slice(tagOffset2 + 1, tagOffset).replace(/\S/g, " ");
        options2.parser = node.name == "script" ? "babel" : "css";
        let child = node.children[0];
        let ctext = "\n".repeat(child.sourceSpan.start.line + incrLines) + " ".repeat(child.sourceSpan.start.col) + child.value;
        ctext = eol + (0, import_prettier.format)(ctext, options2).trim().split(eol).map((line) => tagIndent + indent + line).join(eol) + eol + tagIndent;
        const start = child.sourceSpan.start.offset;
        doc.text = doc.text.slice(0, start + incrChars) + ctext + doc.text.slice(start + child.value.length + incrChars);
        incrChars += ctext.length - child.value.length;
        incrLines += ctext.split("\n").length - child.value.split("\n").length;
      } else {
        doFormat(node);
      }
    }
  };
  doFormat(result);
}

// src/virtualDocument.ts
var import_vscode2 = require("vscode");
var virtualDocumentContents = /* @__PURE__ */ new Map();
var virtualDocumentPaths = /* @__PURE__ */ new Map();
import_vscode2.workspace.registerTextDocumentContentProvider("dj-embedded-content", {
  provideTextDocumentContent: (uri) => {
    const i2 = uri.path.lastIndexOf("/");
    const originalUri = uri.path.slice(1).slice(0, i2 - 1);
    const decodedUri = decodeURIComponent(originalUri);
    return virtualDocumentContents.get(decodedUri);
  }
});
function registerTextDocumentEvents(context, languageIds) {
  context.subscriptions.push(import_vscode2.workspace.onDidChangeTextDocument((event) => {
    if (languageIds.includes(event.document.languageId)) {
      virtualDocumentPaths.delete(event.document.uri.toString());
    }
  }));
  context.subscriptions.push(import_vscode2.workspace.onDidCloseTextDocument((doc) => {
    if (doc.languageId == "html") {
      virtualDocumentContents.delete(doc.uri.toString());
    }
  }));
  context.subscriptions.push(import_vscode2.workspace.onDidRenameFiles((event) => {
    event.files.forEach((f) => {
      virtualDocumentContents.delete(f.oldUri.toString());
    });
  }));
}
function createVirtualDoc(document, languageId) {
  languageId = languageId ?? "html";
  let originalUri = document.uri.toString();
  if (languageId != "html") {
    originalUri += "." + languageId;
  }
  virtualDocumentContents.set(originalUri, document.getText());
  let path;
  if (virtualDocumentPaths.has(originalUri)) {
    path = virtualDocumentPaths.get(originalUri);
  } else {
    path = `/${encodeURIComponent(originalUri)}/${Math.random()}.${languageId}`;
    virtualDocumentPaths.set(originalUri, path);
  }
  return import_vscode2.Uri.from({
    scheme: "dj-embedded-content",
    authority: "django-html",
    path
  });
}
function clearVirtualDocumentContents() {
  virtualDocumentContents.clear();
}

// src/extension.js
var config = import_vscode3.default.workspace.getConfiguration("twig-language");
function createHover(snippet, type) {
  const example = typeof snippet.example == "undefined" ? "" : snippet.example;
  const description = typeof snippet.description == "undefined" ? "" : snippet.description;
  return new import_vscode3.default.Hover({
    language: type,
    value: description + "\n\n" + example
  });
}
function activate(context) {
  const active = import_vscode3.default.window.activeTextEditor;
  if (!active || !active.document)
    return;
  registerDocType("twig");
  registerTextDocumentEvents(context, ["twig"]);
  const diagnosticCollection = import_vscode3.languages.createDiagnosticCollection("twig");
  context.subscriptions.push(diagnosticCollection);
  function registerDocType(type) {
    if (config.hover === true) {
      context.subscriptions.push(import_vscode3.default.languages.registerHoverProvider(type, {
        async provideHover(document, position) {
          const range = document.getWordRangeAtPosition(position);
          const word = document.getText(range);
          for (const snippet in filters_default) {
            if (filters_default[snippet].prefix == word || filters_default[snippet].hover == word) {
              return createHover(filters_default[snippet], type);
            }
          }
          for (const snippet in functions_default) {
            if (functions_default[snippet].prefix == word || functions_default[snippet].hover == word) {
              return createHover(functions_default[snippet], type);
            }
          }
          for (const snippet in twig_default) {
            if (twig_default[snippet].prefix == word || twig_default[snippet].hover == word) {
              return createHover(twig_default[snippet], type);
            }
          }
          const vdocUri = createVirtualDoc(document);
          const hs = await import_vscode3.commands.executeCommand("vscode.executeHoverProvider", vdocUri, position);
          return hs?.[0];
        }
      }));
    }
    if (config.formatting === true) {
      context.subscriptions.push(import_vscode3.default.languages.registerDocumentFormattingEditProvider(type, {
        provideDocumentFormattingEdits: async (document, options2, token) => {
          const otext = document.getText();
          if (!otext) {
            return;
          }
          let newDoc = document;
          const text = formatting(newDoc, diagnosticCollection);
          if (text && text != otext) {
            const range = new import_vscode3.Range(document.positionAt(0), document.positionAt(otext.length));
            return [new import_vscode3.TextEdit(range, text)];
          } else {
            return [];
          }
        }
      }));
      context.subscriptions.push(import_vscode3.languages.registerCompletionItemProvider(type, {
        provideCompletionItems: async (document, position, token, context2) => {
          const vdocUri = createVirtualDoc(document);
          return await import_vscode3.commands.executeCommand("vscode.executeCompletionItemProvider", vdocUri, position, context2.triggerCharacter);
        }
      }, ".", "(", ":", "<"));
    }
  }
}
exports.activate = activate;
exports.deactivate = function() {
  clearVirtualDocumentContents();
  return void 0;
};
//# sourceMappingURL=extension.js.map
