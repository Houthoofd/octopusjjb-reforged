// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2yv2t":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 8080;
var HMR_SECURE = false;
var HMR_ENV_HASH = "7b4c78780e548846";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a33cbb4682fd622e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lLvi7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _cookieParser = require("cookie-parser");
var _cookieParserDefault = parcelHelpers.interopDefault(_cookieParser);
var _morgan = require("morgan");
var _morganDefault = parcelHelpers.interopDefault(_morgan);
var _cors = require("cors");
var _corsDefault = parcelHelpers.interopDefault(_cors);
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
var _routes = require("./routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
const __server_dirname = process.cwd ? process.cwd() : process.env.PWD;
const app = (0, _expressDefault.default)();
app.use((0, _corsDefault.default)({
    origin: "http://ec2-18-185-136-232.eu-central-1.compute.amazonaws.com/"
}));
app.use((0, _morganDefault.default)("dev"));
app.use((0, _expressDefault.default).json());
app.use((0, _expressDefault.default).urlencoded({
    extended: false
}));
app.use((0, _cookieParserDefault.default)());
app.use((0, _expressDefault.default).static((0, _pathDefault.default).join(__server_dirname, "/server/public")));
app.use("/", (0, _routesDefault.default));
app.listen(3000);

},{"express":"express","cookie-parser":"cookie-parser","morgan":"morgan","cors":"cors","path":"path","./routes":"51LTF","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"51LTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _connexion = require("./connexion");
var _connexionDefault = parcelHelpers.interopDefault(_connexion);
var _cours = require("./cours");
var _coursDefault = parcelHelpers.interopDefault(_cours);
var _inscriptions = require("./inscriptions");
var _inscriptionsDefault = parcelHelpers.interopDefault(_inscriptions);
var _reservations = require("./reservations");
var _reservationsDefault = parcelHelpers.interopDefault(_reservations);
var _profile = require("./profile");
var _profileDefault = parcelHelpers.interopDefault(_profile);
var _compte = require("./compte");
var _compteDefault = parcelHelpers.interopDefault(_compte);
var _infos = require("./infos");
var _infosDefault = parcelHelpers.interopDefault(_infos);
var _newPassword = require("./new-password");
var _newPasswordDefault = parcelHelpers.interopDefault(_newPassword);
var _users = require("./users");
var _usersDefault = parcelHelpers.interopDefault(_users);
const router = (0, _expressDefault.default).Router();
// Routes principales
router.use("/connexion", (0, _connexionDefault.default));
router.use("/cours", (0, _coursDefault.default));
router.use("/inscriptions", (0, _inscriptionsDefault.default));
router.use("/reservations", (0, _reservationsDefault.default));
router.use("/password", (0, _newPasswordDefault.default));
router.use("/profile", (0, _profileDefault.default));
router.use("/compte", (0, _compteDefault.default));
router.use("/informations", (0, _infosDefault.default));
router.use("/users", (0, _usersDefault.default));
exports.default = router;

},{"express":"express","./connexion":"60fcK","./cours":"a6APd","./inscriptions":"4x4tx","./reservations":"l5JrX","./profile":"g6BAY","./compte":"59CY8","./infos":"lq7bg","./new-password":"hhwxc","./users":"7oh3P","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"60fcK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _dotenv = require("dotenv");
var _dotenvDefault = parcelHelpers.interopDefault(_dotenv);
var _jsonwebtoken = require("jsonwebtoken");
var _jsonwebtokenDefault = parcelHelpers.interopDefault(_jsonwebtoken);
var _bcrypt = require("bcrypt");
var _bcryptDefault = parcelHelpers.interopDefault(_bcrypt);
var _client = require("../packages/db/client");
// Charger les variables d'environnement
(0, _dotenvDefault.default).config();
const router = (0, _expressDefault.default).Router();
router.post("/", async (req, res)=>{
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Email et mot de passe sont requis");
    const client = new (0, _client.Client)();
    try {
        const query = "SELECT * FROM utilisateurs WHERE email = ?";
        const values = [
            email
        ];
        const results = await client.query(query, values);
        if (results.length === 0) return res.status(401).send("Utilisateur non trouv\xe9");
        const user = results[0];
        const match = await (0, _bcryptDefault.default).compare(password, user.password);
        console.log(user);
        if (!match) return res.status(401).send("Mot de passe incorrect");
        // Vérification de TOKEN_SECRET
        const tokenSecret = process.env.TOKEN_SECRET;
        if (!tokenSecret) {
            console.error("Erreur : TOKEN_SECRET est undefined");
            return res.status(500).send("Erreur de configuration serveur");
        }
        // Génération du token JWT
        const token = (0, _jsonwebtokenDefault.default).sign({
            email: user.email,
            role: user.status
        }, tokenSecret, {
            expiresIn: "1h"
        });
        console.log("Cookie set:", "token=" + token);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            maxAge: 3600000,
            domain: ".octopusjjb.ovh"
        });
        // Envoi du token également dans la réponse JSON
        res.status(200).json({
            message: "Connexion r\xe9ussie",
            userData: {
                email: user.email,
                role: user.status,
                nom: user.last_name,
                prenom: user.first_name,
                isloged: true
            }
        });
    } catch (err) {
        console.error("Erreur lors de la v\xe9rification de l'utilisateur", err);
        res.status(500).send("Erreur lors de la v\xe9rification de l'utilisateur");
    }
});
exports.default = router;

},{"express":"express","dotenv":"dotenv","jsonwebtoken":"jsonwebtoken","bcrypt":"bcrypt","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"lxff2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Client", ()=>Client);
var _mysqlconnector = require("./mysqlconnector");
var _mysqlconnectorDefault = parcelHelpers.interopDefault(_mysqlconnector);
class Client {
    VerificationUtilisateur(sql, values) {
        return new Promise((resolve, reject)=>{
            const mysqlConnector = new (0, _mysqlconnectorDefault.default)();
            console.log("\xe9x\xe9cution du query");
            console.log(sql, values);
            mysqlConnector.query(sql, values, (error, results)=>{
                if (error) {
                    console.error("Erreur lors de l'ex\xe9cution de la requ\xeate : " + error.message);
                    reject(error);
                } else {
                    console.log("R\xe9sultats de la requ\xeate :", results);
                    resolve(results);
                }
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
    Insert(sql, values) {
        return new Promise((resolve, reject)=>{
            const mysqlConnector = new (0, _mysqlconnectorDefault.default)();
            console.log("\xe9x\xe9cution du query Insert");
            mysqlConnector.query(sql, values, (error, results)=>{
                if (error) {
                    console.error("Erreur lors de l'ex\xe9cution de la requ\xeate : " + error.message);
                    reject(error);
                } else {
                    console.log("R\xe9sultats de la requ\xeate :", results);
                    resolve(results);
                }
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
    query(sql, values) {
        return new Promise((resolve, reject)=>{
            const mysqlConnector = new (0, _mysqlconnectorDefault.default)();
            console.log("\xe9x\xe9cution du query");
            mysqlConnector.query(sql, values, (error, results)=>{
                if (error) {
                    console.error("Erreur lors de l'ex\xe9cution de la requ\xeate : " + error.message);
                    reject(error);
                } else {
                    console.log("R\xe9sultats de la requ\xeate :", results);
                    resolve(results);
                }
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
}

},{"./mysqlconnector":"gkI6C","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"gkI6C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mysql = require("mysql");
var _mysqlDefault = parcelHelpers.interopDefault(_mysql);
class MysqlConnector {
    connection;
    constructor(){
        // Configuration de la connexion à la base de données MySQL
        this.connection = (0, _mysqlDefault.default).createConnection({
            host: "dbserver.c54ksqmeed2b.eu-central-1.rds.amazonaws.com",
            port: 3306,
            user: "admin",
            password: "PtW143kjkS3F",
            database: "octopus_jjb"
        });
        // Établir la connexion à la base de données
        this.connection.connect((err)=>{
            if (err) {
                console.error("Erreur de connexion \xe0 la base de donn\xe9es : " + err.stack);
                return;
            }
            console.log("Connect\xe9 \xe0 la base de donn\xe9es MySQL avec l'ID : " + this.connection.threadId);
        });
    }
    query(sql, values, callback) {
        // Exécuter la requête SQL avec les valeurs échappées
        this.connection.query(sql, values, (error, results, fields)=>{
            callback(error, results, fields);
        });
    }
    close() {
        // Fermer la connexion à la base de données
        this.connection.end((err)=>{
            if (err) {
                console.error("Erreur lors de la fermeture de la connexion : " + err.stack);
                return;
            }
            console.log("Connexion \xe0 la base de donn\xe9es MySQL ferm\xe9e");
        });
    }
}
exports.default = MysqlConnector;

},{"mysql":"mysql","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"i8bdk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a6APd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
// Endpoint pour la vérification de l'utilisateur
router.get("/", async (req, res)=>{
    // Créer une instance du client SQL
    const client = new (0, _client.Client)();
    try {
        // Première requête : récupérer les cours à venir
        const queryCours = "SELECT * FROM cours WHERE date_cours >= CURDATE() LIMIT 12";
        const coursResults = await client.query(queryCours); // Récupère tous les cours à venir
        if (coursResults.length === 0) return res.status(404).send("Aucun cours trouv\xe9.");
        // Retourner la liste des cours
        res.json({
            cours: coursResults
        });
    } catch (err) {
        console.error("Erreur lors du chargement des cours:", err);
        res.status(500).send("Erreur lors du chargement des cours.");
    }
});
router.post("/participant", async (req, res)=>{
    const { cour_id } = req.body; // Récupérer l'ID du cours depuis le corps de la requête
    console.log(cour_id);
    if (!cour_id) return res.status(400).json({
        message: "L'ID du cours est requis."
    });
    try {
        // Créer une instance du client SQL (en supposant que tu utilises mysql2 ou mysql)
        const client = new (0, _client.Client)(); // Assure-toi que ce client est bien configuré pour ta base de données
        // Requête SQL pour récupérer les participants inscrits à ce cours
        const query = `
      SELECT utilisateurs.id AS participant_id, utilisateurs.last_name, utilisateurs.first_name, utilisateurs.email
      FROM utilisateurs
      JOIN inscriptions ON utilisateurs.id = inscriptions.utilisateur_id
      WHERE inscriptions.cours_id = ?;
    `;
        // Exécuter la requête avec l'ID du cours
        const results = await client.query(query, [
            cour_id
        ]);
        // Vérifier si les résultats sont valides
        if (!results || results.length === 0) return res.status(404).json({
            message: "Aucun participant trouv\xe9 pour ce cours."
        });
        // Utilisation sécurisée de 'participants'
        const participants = results;
        console.log(participants);
        // Réponse avec les participants trouvés
        res.status(200).json({
            participants: participants,
            message: "Participants trouv\xe9s avec succ\xe8s."
        });
    } catch (error) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des participants:", error);
        return res.status(500).json({
            message: "Erreur serveur lors de la r\xe9cup\xe9ration des participants."
        });
    }
});
router.post("/inscription", async (req, res)=>{
    const { last_name, first_name, email } = req.body.user;
    const { id: coursId } = req.body.cours;
    if (!last_name || !first_name || !email || !coursId) return res.status(400).json({
        message: "Des informations sont manquantes."
    });
    try {
        const client = new (0, _client.Client)();
        // Requête pour récupérer l'ID de l'utilisateur
        const queryUser = `
      SELECT id FROM utilisateurs 
      WHERE last_name = ? AND first_name = ? AND email = ?;
    `;
        const resultUser = await client.query(queryUser, [
            last_name,
            first_name,
            email
        ]);
        if (resultUser.length === 0) return res.status(404).json({
            message: "Utilisateur non trouv\xe9."
        });
        const userId = resultUser[0].id;
        // Vérification si l'utilisateur est déjà inscrit au cours
        const queryCheck = `
      SELECT * FROM inscriptions 
      WHERE utilisateur_id = ? AND cours_id = ?;
    `;
        const resultCheck = await client.query(queryCheck, [
            userId,
            coursId
        ]);
        console.log(resultCheck);
        if (resultCheck.length > 0) {
            // Informer que l'utilisateur est déjà inscrit
            console.log(`Utilisateur d\xe9j\xe0 inscrit au cours ${coursId}`);
            return res.status(409).json({
                info_message: `Vous \xeates d\xe9j\xe0 inscrit au cours ${coursId}`
            });
        }
        // Inscription de l'utilisateur
        const queryInsert = `
      INSERT INTO inscriptions (utilisateur_id, cours_id) 
      VALUES (?, ?);
    `;
        await client.query(queryInsert, [
            userId,
            coursId
        ]);
        // Réponse de succès
        res.status(200).json({
            success_message: "Inscription r\xe9ussie",
            userId,
            coursId
        });
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        res.status(500).json({
            message: "Erreur serveur lors de l'inscription."
        });
    }
});
// Route pour valider la présence d'un participant
router.post("/participant/cancel", async (req, res)=>{
    const { courId, participantId } = req.body; // Récupère les données envoyées par le front
    if (!courId || !participantId) return res.status(400).json({
        message: "Cour ID et Participant ID sont requis."
    });
    try {
        const client = new (0, _client.Client)();
        // Exécution de la requête d'update avec les paramètres
        const result = await client.query("UPDATE inscriptions SET status = FALSE WHERE cours_id = ? AND utilisateur_id = ?", [
            courId,
            participantId
        ]);
        // Vérifie si des lignes ont été réellement modifiées
        if (result.changedRows === 0) return res.status(404).json({
            message: "Aucun changement n'a eu lieu, v\xe9rifie si le participant est d\xe9j\xe0 valid\xe9."
        });
        // Si un changement a eu lieu
        return res.status(200).json({
            message: "Participant supprim\xe9 avec succ\xe8s."
        });
    } catch (error) {
        console.error("Erreur lors de la mise \xe0 jour du statut :", error);
        return res.status(500).json({
            message: "Erreur serveur."
        });
    }
});
router.post("/participant/validation", async (req, res)=>{
    const { courId, participantId } = req.body; // Récupère les données envoyées par le front
    if (!courId || !participantId) return res.status(400).json({
        message: "Cour ID et Participant ID sont requis."
    });
    try {
        const client = new (0, _client.Client)();
        // Exécution de la requête d'update avec les paramètres
        const result = await client.query("UPDATE inscriptions SET status = TRUE WHERE cours_id = ? AND utilisateur_id = ?", [
            courId,
            participantId
        ]);
        // Vérifie si des lignes ont été réellement modifiées
        if (result.changedRows === 0) return res.status(404).json({
            message: "Aucun changement n'a eu lieu, v\xe9rifie si le participant est d\xe9j\xe0 valid\xe9."
        });
        // Si un changement a eu lieu
        return res.status(200).json({
            message: "Participant valid\xe9 avec succ\xe8s."
        });
    } catch (error) {
        console.error("Erreur lors de la mise \xe0 jour du statut :", error);
        return res.status(500).json({
            message: "Erreur serveur."
        });
    }
});
exports.default = router;

},{"express":"express","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"4x4tx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _bcrypt = require("bcrypt");
var _bcryptDefault = parcelHelpers.interopDefault(_bcrypt);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
router.post("/", async (req, res)=>{
    const { firstName, lastName, email, password, date, tarif, genre } = req.body;
    console.log(firstName, lastName, email, password, date, tarif, genre);
    // Vérification des champs requis
    if (!firstName || !lastName || !email || !password || !date || !tarif || !genre) return res.status(400).send("Tous les champs sont requis");
    const client = new (0, _client.Client)();
    try {
        // Vérifier si l'utilisateur existe déjà
        const userExistsQuery = "SELECT * FROM utilisateurs WHERE email = ?";
        const existingUsers = await client.query(userExistsQuery, [
            email
        ]);
        if (existingUsers.length > 0) return res.status(400).send("Un utilisateur avec cet email existe d\xe9j\xe0");
        // Récupérer l'ID du genre sélectionné
        const genreQuery = "SELECT id FROM genres WHERE genre_name = ?";
        const genreResult = await client.query(genreQuery, [
            genre
        ]);
        if (genreResult.length === 0) return res.status(400).send("Genre invalide");
        const genreId = genreResult[0].id;
        // Récupérer l'ID du tarif sélectionné
        const tarifQuery = "SELECT id FROM plans_tarifaires WHERE nom_plan = ?";
        const tarifResult = await client.query(tarifQuery, [
            tarif
        ]);
        if (tarifResult.length === 0) return res.status(400).send("Tarif invalide");
        const tarifId = tarifResult[0].id;
        console.log(tarifId, genreId);
        // Hash du mot de passe
        const saltRounds = 10;
        const hashedPassword = await (0, _bcryptDefault.default).hash(password, saltRounds);
        // Insérer l'utilisateur avec les IDs du genre et du tarif, et abonnement à la fin
        const insertQuery = `
            INSERT INTO utilisateurs (first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement)
            VALUES (?, ?, ?, ?, ?, ?, 'user', '1', ?)
        `;
        await client.query(insertQuery, [
            firstName,
            lastName,
            email,
            hashedPassword,
            genreId,
            date,
            tarifId
        ]);
        res.status(201).json({
            message: "Utilisateur enregistr\xe9 avec succ\xe8s"
        });
    } catch (error) {
        console.error("Erreur lors de l'inscription", error);
        res.status(500).send("Erreur lors de l'inscription");
    }
});
exports.default = router;

},{"express":"express","bcrypt":"bcrypt","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"l5JrX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
router.post("/", async (req, res)=>{
    const utilisateurs = req.body;
    const client = new (0, _client.Client)();
    try {
        for (const utilisateur of utilisateurs){
            const { nom, email, cours } = utilisateur;
            // Vérifier si l'utilisateur existe déjà
            const userQuery = `SELECT * FROM utilisateurs WHERE email = ?`;
            const userValues = [
                email
            ];
            const existingUser = await client.query(userQuery, userValues);
            if (existingUser.length > 0) {
                console.log(`L'utilisateur avec l'email ${email} existe d\xe9j\xe0.`);
                return res.status(400).json({
                    message: `L'utilisateur avec cet email existe d\xe9j\xe0.`
                });
            }
            // Insérer l'utilisateur
            const insertUserQuery = `INSERT INTO utilisateurs (first_name, email, status) VALUES (?, ?, 'visitor')`;
            const userResult = await client.query(insertUserQuery, [
                nom,
                email
            ]);
            const utilisateurId = userResult.insertId; // Récupérer l'ID de l'utilisateur
            console.log("Utilisateur ins\xe9r\xe9 avec succ\xe8s, ID:", utilisateurId);
            for (const cour of cours){
                const { id: coursId } = cour;
                // Vérifier si l'utilisateur a déjà réservé ce cours
                const checkQuery = `
                    SELECT * FROM reservations 
                    WHERE utilisateur_id = ? AND cours_id = ?
                `;
                const checkValues = [
                    utilisateurId,
                    coursId
                ];
                const existingReservation = await client.query(checkQuery, checkValues);
                if (existingReservation.length > 0) {
                    console.log(`L'utilisateur ID: ${utilisateurId} a d\xe9j\xe0 r\xe9serv\xe9 ce cours ID: ${coursId}`);
                    return res.status(400).json({
                        message: `L'utilisateur a d\xe9j\xe0 r\xe9serv\xe9 ce cours.`
                    });
                }
                // Créer la réservation
                await client.query("INSERT INTO reservations (utilisateur_id, cours_id) VALUES (?, ?)", [
                    utilisateurId,
                    coursId
                ]);
                console.log(`R\xe9servation cr\xe9\xe9e pour l'utilisateur ID: ${utilisateurId} et le cours ID: ${coursId}`);
            }
            // Vérifier le statut de l'utilisateur après insertion
            const statusQuery = `SELECT status FROM utilisateurs WHERE id = ?`;
            const statusResult = await client.query(statusQuery, [
                utilisateurId
            ]);
            const userStatus = statusResult[0] ? statusResult[0].status : null; // Obtenir le statut
            res.status(200).json({
                message: "Utilisateurs et r\xe9servations cr\xe9\xe9s avec succ\xe8s.",
                role: userStatus
            });
        }
    } catch (error) {
        console.error("Erreur lors de la cr\xe9ation des utilisateurs et r\xe9servations:", error);
        res.status(500).json({
            error: "Erreur serveur lors de la cr\xe9ation."
        });
    } finally{
    // Optionnel : fermer la connexion à la base de données si nécessaire
    // await client.close();
    }
});
router.post("/verification", async (req, res)=>{
    const { nom, email } = req.body;
    console.log("Nom:", nom, "Email:", email);
    console.log("V\xe9rification en cours...");
    const client = new (0, _client.Client)();
    try {
        // Étape 1: Vérifier si l'utilisateur existe
        const userQuery = `
            SELECT * FROM utilisateurs 
            WHERE email = ?
        `;
        const userValues = [
            email
        ];
        const existingUser = await client.query(userQuery, userValues);
        // Étape 2: Si l'utilisateur n'existe pas, permettre l'inscription
        if (existingUser.length === 0) {
            console.log(`L'utilisateur ${nom} (${email}) n'est pas inscrit.`);
            return res.status(200).json({
                canRegister: true
            }); // Indique que l'utilisateur peut s'inscrire
        }
        // Étape 3: Si l'utilisateur existe, vérifier les réservations
        const utilisateurId = existingUser[0].id;
        const reservationQuery = `
            SELECT * FROM reservations 
            WHERE utilisateur_id = ?
        `;
        const reservationValues = [
            utilisateurId
        ];
        const reservations = await client.query(reservationQuery, reservationValues);
        // Étape 4: Si l'utilisateur a déjà réservé, renvoyer un message d'erreur
        if (reservations.length > 0) {
            console.log(`L'utilisateur ${nom} (${email}) a d\xe9j\xe0 r\xe9serv\xe9 un cours.`);
            return res.status(400).json({
                message: "Vous avez d\xe9j\xe0 r\xe9serv\xe9 un cours d'essai.",
                canRegister: false
            }); // Indique que l'utilisateur ne peut pas s'inscrire
        }
        // Étape 5: Aucune réservation existante
        res.status(200).json({
            message: "Aucune r\xe9servation existante pour cet utilisateur.",
            canRegister: true
        }); // Indique que l'utilisateur peut réserver
    } catch (error) {
        console.error("Erreur lors de la v\xe9rification des r\xe9servations:", error);
        res.status(500).json({
            error: "Erreur serveur lors de la v\xe9rification."
        });
    } finally{}
});
exports.default = router;

},{"express":"express","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"g6BAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
function formatDate(dateString, format = "YYYY-MM-DD") {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    if (format === "YYYY-MM") return `${year}-${month}`;
    return `${year}-${month}-${day}`;
}
router.get("/", async (req, res)=>{
    const { email, nom, prenom } = req.query;
    console.log("Requ\xeate re\xe7ue:", req.query); // Log pour vérifier les paramètres reçus
    try {
        const client = new (0, _client.Client)();
        // Requête pour récupérer l'ID de l'utilisateur
        const userIdQuery = `
      SELECT id
      FROM utilisateurs
      WHERE email = ? AND last_name = ? AND first_name = ?;
    `;
        // Exécuter la requête pour récupérer l'ID de l'utilisateur
        const [user] = await client.query(userIdQuery, [
            email,
            nom,
            prenom
        ]);
        console.log("Utilisateur trouv\xe9:", user);
        // Si l'utilisateur n'est pas trouvé, renvoyer une erreur
        if (!user) return res.status(404).json({
            message: "Utilisateur non trouv\xe9"
        });
        const userId = user.id; // Obtenir l'ID de l'utilisateur
        // Requête pour récupérer les inscriptions aux cours, incluant les informations des participants
        const presencesQuery = `
      SELECT 
        i.id AS inscription_id, 
        i.cours_id, 
        c.date_cours, 
        c.type_cours, 
        c.heure_debut, 
        c.heure_fin, 
        i.status, 
        u.first_name AS participant_first_name, 
        u.last_name AS participant_last_name 
      FROM inscriptions i
      JOIN cours c ON i.cours_id = c.id
      JOIN utilisateurs u ON i.utilisateur_id = u.id
      WHERE i.utilisateur_id = ?;
    `;
        const presences = await client.query(presencesQuery, [
            userId
        ]);
        console.log("Pr\xe9sences r\xe9cup\xe9r\xe9es:", presences);
        // Si aucune présence n'est trouvée
        if (!presences.length) console.log("Aucune inscription trouv\xe9e pour cet utilisateur.");
        // Requête pour récupérer le nombre total de cours par mois
        const totalCoursesQuery = `
      SELECT DATE_FORMAT(date_cours, '%Y-%m') AS month, COUNT(*) AS total_courses
      FROM cours
      GROUP BY DATE_FORMAT(date_cours, '%Y-%m')
      ORDER BY month ASC;
    `;
        const totalCourses = await client.query(totalCoursesQuery);
        // Parcourir chaque cours dans totalCourses
        const totalCoursesWithPresences = totalCourses.map((course)=>{
            const courseMonth = course.month; // Déjà formaté en 'YYYY-MM'
            const participantsForCourse = []; // Tableau pour stocker les participants pour ce mois
            // Parcourir les présences (participants)
            presences.forEach((participant)=>{
                const participantMonth = formatDate(participant.date_cours, "YYYY-MM"); // Formater la date de présence en 'YYYY-MM'
                // Si le mois de la présence et du cours correspondent
                if (courseMonth === participantMonth) // Ajouter le participant à la liste des présences pour ce cours
                participantsForCourse.push({
                    inscription_id: participant.inscription_id,
                    cours_id: participant.cours_id,
                    date_cours: participant.date_cours,
                    type_cours: participant.type_cours,
                    heure_debut: participant.heure_debut,
                    heure_fin: participant.heure_fin,
                    status: participant.status,
                    participant_first_name: participant.participant_first_name,
                    participant_last_name: participant.participant_last_name
                });
            });
            // Retourner le cours avec les participants ajoutés
            return {
                month: courseMonth,
                total_courses: course.total_courses,
                presences: participantsForCourse // Ajouter les participants (présences)
            };
        });
        // Renvoyer les données au front-end
        res.json({
            totalCourses: totalCoursesWithPresences
        });
    } catch (error) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es :", error);
        res.status(500).json({
            message: "Erreur interne du serveur"
        });
    }
});
router.post("/", async (req, res)=>{
    const { email, last_name, first_name } = req.body;
    console.log("Donn\xe9es re\xe7ues via body:", {
        email,
        last_name,
        first_name
    });
    try {
        const client = new (0, _client.Client)();
        // Requête pour récupérer l'ID de l'utilisateur
        const userIdQuery = `
      SELECT id
      FROM utilisateurs
      WHERE email = ? AND last_name = ? AND first_name = ?;
    `;
        // Exécuter la requête pour récupérer l'ID de l'utilisateur
        const [user] = await client.query(userIdQuery, [
            email,
            last_name,
            first_name
        ]);
        console.log("Utilisateur trouv\xe9:", user);
        // Si l'utilisateur n'est pas trouvé, renvoyer une erreur
        if (!user) return res.status(404).json({
            message: "Utilisateur non trouv\xe9"
        });
        const userId = user.id; // Obtenir l'ID de l'utilisateur
        // Requête pour récupérer les inscriptions aux cours, incluant les informations des participants
        const presencesQuery = `
      SELECT 
        i.id AS inscription_id, 
        i.cours_id, 
        c.date_cours, 
        c.type_cours, 
        c.heure_debut, 
        c.heure_fin, 
        i.status, 
        u.first_name AS participant_first_name, 
        u.last_name AS participant_last_name 
      FROM inscriptions i
      JOIN cours c ON i.cours_id = c.id
      JOIN utilisateurs u ON i.utilisateur_id = u.id
      WHERE i.utilisateur_id = ?;
    `;
        const presences = await client.query(presencesQuery, [
            userId
        ]);
        console.log("Pr\xe9sences r\xe9cup\xe9r\xe9es:", presences);
        // Si aucune présence n'est trouvée
        if (!presences.length) console.log("Aucune inscription trouv\xe9e pour cet utilisateur.");
        // Requête pour récupérer le nombre total de cours par mois
        const totalCoursesQuery = `
      SELECT DATE_FORMAT(date_cours, '%Y-%m') AS month, COUNT(*) AS total_courses
      FROM cours
      GROUP BY DATE_FORMAT(date_cours, '%Y-%m')
      ORDER BY month ASC;
    `;
        const totalCourses = await client.query(totalCoursesQuery);
        // Parcourir chaque cours dans totalCourses
        const totalCoursesWithPresences = totalCourses.map((course)=>{
            const courseMonth = course.month; // Déjà formaté en 'YYYY-MM'
            const participantsForCourse = []; // Tableau pour stocker les participants pour ce mois
            // Parcourir les présences (participants)
            presences.forEach((participant)=>{
                const participantMonth = formatDate(participant.date_cours, "YYYY-MM"); // Formater la date de présence en 'YYYY-MM'
                // Si le mois de la présence et du cours correspondent
                if (courseMonth === participantMonth) // Ajouter le participant à la liste des présences pour ce cours
                participantsForCourse.push({
                    inscription_id: participant.inscription_id,
                    cours_id: participant.cours_id,
                    date_cours: participant.date_cours,
                    type_cours: participant.type_cours,
                    heure_debut: participant.heure_debut,
                    heure_fin: participant.heure_fin,
                    status: participant.status,
                    participant_first_name: participant.participant_first_name,
                    participant_last_name: participant.participant_last_name
                });
            });
            // Retourner le cours avec les participants ajoutés
            return {
                month: courseMonth,
                total_courses: course.total_courses,
                presences: participantsForCourse // Ajouter les participants (présences)
            };
        });
        // Renvoyer les données au front-end
        res.json({
            totalCourses: totalCoursesWithPresences
        });
    } catch (error) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es :", error);
        res.status(500).json({
            message: "Erreur interne du serveur"
        });
    }
});
exports.default = router;

},{"express":"express","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"59CY8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
// Appliquer le middleware de vérification du token sur ce routeur
router.post("/", async (req, res)=>{
    const { email } = req.body;
    if (!email) return res.status(400).send("Email requis.");
    const client = new (0, _client.Client)();
    try {
        const query = `
      SELECT email, first_name, last_name, created_at 
      FROM utilisateurs 
      WHERE email = ?`;
        const values = [
            email
        ];
        const results = await client.query(query, values);
        if (results.length === 0) return res.status(404).send("Utilisateur non trouv\xe9.");
        const userInfo = {
            email: results[0].email,
            first_name: results[0].first_name,
            last_name: results[0].last_name,
            created_at: results[0].created_at // Date de création du compte
        };
        console.log("Informations utilisateur trouv\xe9es :", userInfo);
        return res.status(200).json(userInfo);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des informations utilisateur:", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des informations.");
    }
});
exports.default = router;

},{"express":"express","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"lq7bg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
router.post("/", async (req, res)=>{
    const { email, first_name, last_name } = req.body;
    console.log("Requ\xeate re\xe7ue avec les donn\xe9es :", req.body);
    console.log(email, first_name, last_name);
    if (!email || !first_name || !last_name) return res.status(400).send("Tous les champs sont requis.");
    const client = new (0, _client.Client)();
    try {
        // Requête pour récupérer l'utilisateur
        const query = `
      SELECT * FROM utilisateurs 
      WHERE email = ? AND first_name = ? AND last_name = ?`;
        const values = [
            email,
            first_name,
            last_name
        ];
        const results = await client.query(query, values);
        if (results.length === 0) return res.status(404).send("Utilisateur non trouv\xe9.");
        console.log(results);
        const userInfo = {
            email: results[0].email,
            first_name: results[0].first_name,
            last_name: results[0].last_name,
            role: results[0].status,
            gender: results[0].gender,
            date_of_birth: results[0].date_of_birth,
            grade: null,
            abonnement: null
        };
        // Requête pour récupérer le nom du grade à partir de l'ID du grade
        const gradeQuery = `
      SELECT grade FROM grades WHERE id = ?`; // Recherche par ID du grade
        const gradeResults = await client.query(gradeQuery, [
            results[0].grade
        ]);
        console.log(gradeResults);
        if (gradeResults.length > 0) userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade dans 'grade'
        else userInfo.grade = null; // Valeur par défaut si aucune correspondance
        // Requête pour récupérer le nom du genre à partir de l'ID du genre
        const genreQuery = `SELECT genre_name FROM genres WHERE id = ?`;
        const genreResults = await client.query(genreQuery, [
            results[0].gender
        ]);
        if (genreResults.length > 0) userInfo.gender = genreResults[0].genre_name; // Ajout du nom du genre dans 'gender'
        // Requête pour récupérer le type d'abonnement à partir de l'ID d'abonnement
        const abonnementQuery = `SELECT nom_plan FROM plans_tarifaires WHERE id = ?`;
        const abonnementResults = await client.query(abonnementQuery, [
            results[0].abonnement
        ]);
        if (abonnementResults.length > 0) userInfo.abonnement = abonnementResults[0].nom_plan; // Ajout du nom du plan d'abonnement
        console.log("Informations utilisateur trouv\xe9es :", userInfo);
        return res.status(200).json(userInfo);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des informations utilisateur:", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des informations.");
    }
});
// Appliquer le middleware de vérification du token sur ce routeur
router.get("/abonnement", async (req, res)=>{
    const client = new (0, _client.Client)();
    try {
        // Requête pour récupérer les noms des abonnements et leurs prix
        const query = `
      SELECT nom_plan, prix
      FROM plans_tarifaires`;
        const results = await client.query(query);
        if (results.length === 0) return res.status(404).send("Aucun plan tarifaire trouv\xe9.");
        // Extraire les noms des abonnements et les prix sous forme d'objets
        const abonnements = results.map((plan)=>({
                nom_plan: plan.nom_plan,
                prix: plan.prix
            }));
        console.log("Plans tarifaires trouv\xe9s :", abonnements);
        return res.status(200).json(abonnements);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des plans tarifaires:", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des plans tarifaires.");
    }
});
// Appliquer le middleware de vérification du token sur ce routeur
router.get("/gender", async (req, res)=>{
    const client = new (0, _client.Client)();
    try {
        // Requête pour récupérer les noms des abonnements et leurs prix
        const query = `
      SELECT genre_name
      FROM genres`;
        const results = await client.query(query);
        if (results.length === 0) return res.status(404).send("Aucun plan tarifaire trouv\xe9.");
        // Extraire les noms des abonnements et les prix sous forme d'objets
        const genres = results.map((genre)=>({
                genre: genre.genre_name
            }));
        console.log("Plans genres trouv\xe9s :", genres);
        return res.status(200).json(genres);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des plans tarifaires:", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des plans tarifaires.");
    }
});
// Appliquer le middleware de vérification du token sur ce routeur
router.get("/grade", async (req, res)=>{
    const client = new (0, _client.Client)();
    try {
        // Requête pour récupérer les noms des abonnements et leurs prix
        const query = `
      SELECT *
      FROM grades`;
        const results = await client.query(query);
        if (results.length === 0) return res.status(404).send("Aucun plan tarifaire trouv\xe9.");
        console.log("grades trouv\xe9s :", results);
        return res.status(200).json(results);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des plans tarifaires:", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des plans tarifaires.");
    }
});
exports.default = router;

},{"express":"express","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"hhwxc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _bcrypt = require("bcrypt");
var _bcryptDefault = parcelHelpers.interopDefault(_bcrypt);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
router.post("/", async (req, res)=>{
    const { email, newpassword } = req.body;
    console.log(email, newpassword);
    if (!email || !newpassword) return res.status(400).json({
        message: "Email et mot de passe sont requis"
    });
    try {
        // Recherche l'utilisateur dans la base de données
        const client = new (0, _client.Client)();
        const query = "SELECT * FROM utilisateurs WHERE email = ?";
        const values = [
            email
        ];
        const results = await client.query(query, values);
        console.log(results);
        if (results.length === 0) return res.status(404).json({
            message: "Utilisateur non trouv\xe9"
        });
        const user = results[0];
        // Vérification du nouveau mot de passe (exemple de validation)
        if (newpassword.length < 8) return res.status(400).json({
            message: "Le mot de passe doit contenir au moins 8 caract\xe8res"
        });
        // Hachage du nouveau mot de passe avec bcrypt
        const hashedPassword = await (0, _bcryptDefault.default).hash(newpassword, 10);
        // Mise à jour du mot de passe dans la base de données
        const updateQuery = "UPDATE utilisateurs SET password = ? WHERE email = ?";
        await client.query(updateQuery, [
            hashedPassword,
            email
        ]);
        // Réponse de succès
        res.status(200).json({
            message: "Mot de passe chang\xe9 avec succ\xe8s"
        });
    } catch (err) {
        console.error("Erreur lors de la mise \xe0 jour du mot de passe", err);
        res.status(500).json({
            message: "Erreur serveur lors de la mise \xe0 jour du mot de passe"
        });
    }
});
exports.default = router;

},{"express":"express","bcrypt":"bcrypt","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}],"7oh3P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _jsonwebtoken = require("jsonwebtoken");
var _jsonwebtokenDefault = parcelHelpers.interopDefault(_jsonwebtoken);
var _client = require("../packages/db/client");
const router = (0, _expressDefault.default).Router();
// Middleware pour vérifier le token JWT
const verifyToken = (req, res, next)=>{
    const token = req.cookies.token;
    if (!token) return res.status(403).send("Token manquant, veuillez vous connecter.");
    const secretKey = process.env.TOKEN_SECRET;
    if (!secretKey) return res.status(500).send("Cl\xe9 secr\xe8te JWT manquante.");
    (0, _jsonwebtokenDefault.default).verify(token, secretKey, (err, decoded)=>{
        if (err) return res.status(403).send("Token invalide ou expir\xe9.");
        req.user = decoded; // Ajoute l'utilisateur décodé à la requête
        next();
    });
};
router.get("/", async (req, res)=>{
    const client = new (0, _client.Client)();
    try {
        // Requête pour récupérer tous les utilisateurs
        const query = `
      SELECT * FROM utilisateurs`;
        const results = await client.query(query); // Pas besoin de `values` ici
        if (results.length === 0) return res.status(404).send("Aucun utilisateur trouv\xe9.");
        console.log(results);
        // Tableau pour stocker les informations des utilisateurs
        const usersInfo = [];
        // Boucle pour récupérer les informations de chaque utilisateur
        for (const user of results){
            const userInfo = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                gender: user.gender,
                grade: null // Initialisé à null
            };
            // Requête pour récupérer le nom du grade à partir de l'ID du grade
            const gradeQuery = `
        SELECT grade FROM grades WHERE id = ?`;
            const gradeResults = await client.query(gradeQuery, [
                user.grade
            ]);
            if (gradeResults.length > 0) userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade
            // Ajouter l'objet utilisateur avec le grade au tableau
            usersInfo.push(userInfo);
        }
        console.log("Informations utilisateurs trouv\xe9es :", usersInfo);
        return res.status(200).json(usersInfo);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des informations des utilisateurs :", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des informations.");
    }
});
router.post("/infos", async (req, res)=>{
    const { user_id } = req.body;
    console.log("Requ\xeate re\xe7ue avec les donn\xe9es :", req.body);
    const client = new (0, _client.Client)();
    try {
        // Requête pour récupérer un utilisateur en fonction de son ID
        const query = `SELECT * FROM utilisateurs WHERE id = ?`;
        const results = await client.query(query, [
            user_id
        ]); // Utilisation de l'ID de l'utilisateur
        if (results.length === 0) return res.status(404).send("Utilisateur non trouv\xe9.");
        const userInfo = {
            email: results[0].email,
            first_name: results[0].first_name,
            last_name: results[0].last_name,
            role: results[0].status,
            gender: null,
            date_of_birth: results[0].date_of_birth,
            grade: null,
            abonnement: null
        };
        // Requête pour récupérer le nom du grade à partir de l'ID du grade
        const gradeQuery = `SELECT grade FROM grades WHERE id = ?`;
        const gradeResults = await client.query(gradeQuery, [
            results[0].grade
        ]);
        if (gradeResults.length > 0) userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade dans 'grade'
        // Requête pour récupérer le nom du genre à partir de l'ID du genre
        const genreQuery = `SELECT genre_name FROM genres WHERE id = ?`;
        const genreResults = await client.query(genreQuery, [
            results[0].gender
        ]);
        if (genreResults.length > 0) userInfo.gender = genreResults[0].genre_name; // Ajout du nom du genre dans 'gender'
        // Requête pour récupérer le type d'abonnement à partir de l'ID d'abonnement
        const abonnementQuery = `SELECT nom_plan FROM plans_tarifaires WHERE id = ?`;
        const abonnementResults = await client.query(abonnementQuery, [
            results[0].abonnement
        ]);
        if (abonnementResults.length > 0) userInfo.abonnement = abonnementResults[0].nom_plan; // Ajout du nom du plan d'abonnement
        console.log("Informations utilisateur trouv\xe9es :", userInfo);
        return res.status(200).json(userInfo);
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des informations utilisateur:", err);
        return res.status(500).send("Erreur lors de la r\xe9cup\xe9ration des informations.");
    }
});
// Route pour récupérer et mettre à jour les informations utilisateur
router.patch("/update", async (req, res)=>{
    const { new_email, new_first_name, new_last_name, current_mail } = req.body;
    // Vérification que l'email actuel est présent
    if (!current_mail) return res.status(400).json({
        success: false,
        message: "L'email actuel est requis pour la mise \xe0 jour."
    });
    try {
        const client = new (0, _client.Client)();
        // Étape 1: Récupérer les informations actuelles de l'utilisateur
        const selectQuery = `SELECT * FROM utilisateurs WHERE email = ?;`;
        const resultUtilisateur = await client.query(selectQuery, [
            current_mail
        ]);
        // Vérifier si l'utilisateur existe
        if (resultUtilisateur.length === 0) return res.status(404).json({
            success: false,
            message: "Utilisateur non trouv\xe9."
        });
        const user = resultUtilisateur[0]; // Informations actuelles de l'utilisateur
        // Étape 2: Mettre à jour les informations de l'utilisateur
        const updatedFirstName = new_first_name || user.first_name;
        const updatedLastName = new_last_name || user.last_name;
        const updatedEmail = new_email || user.email;
        const updateQuery = `
      UPDATE utilisateurs
      SET first_name = ?, last_name = ?, email = ?
      WHERE email = ?;
    `;
        // Exécution de la mise à jour avec les nouvelles données
        const updateResult = await client.query(updateQuery, [
            updatedFirstName,
            updatedLastName,
            updatedEmail,
            current_mail
        ]);
        if (updateResult.affectedRows === 0) return res.status(500).json({
            success: false,
            message: "La mise \xe0 jour a \xe9chou\xe9."
        });
        // Étape 3: Récupérer les informations mises à jour
        const updatedRows = await client.query(selectQuery, [
            updatedEmail
        ]);
        const userInfo = {
            email: updatedRows[0].email,
            first_name: updatedRows[0].first_name,
            last_name: updatedRows[0].last_name,
            role: updatedRows[0].status
        };
        if (updatedRows.length === 0) return res.status(500).json({
            success: false,
            message: "Erreur lors de la r\xe9cup\xe9ration des donn\xe9es mises \xe0 jour."
        });
        // Répondre avec les informations mises à jour
        res.status(200).json({
            success: true,
            message: "Utilisateur mis \xe0 jour avec succ\xe8s.",
            data: userInfo
        });
    } catch (error) {
        console.error("Erreur lors de la mise \xe0 jour des informations utilisateur:", error);
        res.status(500).json({
            success: false,
            message: "Erreur serveur."
        });
    }
});
router.post("/infos/update", async (req, res)=>{
    const { user_id, data } = req.body;
    console.log("genre:" + data.genre, "r\xf4le:" + data.role);
    try {
        const client = new (0, _client.Client)();
        // 1. Récupérer les informations actuelles de l'utilisateur
        const userQuery = "SELECT * FROM utilisateurs WHERE id = ?";
        const [user] = await client.query(userQuery, [
            user_id
        ]);
        if (!user || user.length === 0) return res.status(404).json({
            success: false,
            message: "Utilisateur non trouv\xe9"
        });
        // Initialiser userInfo avec les données actuelles de l'utilisateur
        let userInfo = {
            ...user[0]
        }; // Utilisation de l'utilisateur actuel
        // 2. Récupérer le nom du grade à partir de l'ID du grade
        const gradeQuery = "SELECT grade FROM grades WHERE id = ?";
        const [gradeResults] = await client.query(gradeQuery, [
            userInfo.grade
        ]);
        if (gradeResults && gradeResults.length > 0) userInfo.grade = gradeResults[0].grade; // Ajouter le nom du grade
        else userInfo.grade = null; // Valeur par défaut si aucune correspondance
        // 3. Récupérer le nom du genre à partir de l'ID du genre
        const genreQuery = "SELECT genre_name FROM genres WHERE id = ?";
        const [genreResults] = await client.query(genreQuery, [
            userInfo.genre
        ]);
        if (genreResults && genreResults.length > 0) userInfo.gender = genreResults[0].genre_name; // Ajouter le nom du genre
        else userInfo.gender = null; // Valeur par défaut si aucune correspondance
        // 4. Récupérer le type d'abonnement à partir de l'ID d'abonnement
        const abonnementQuery = "SELECT nom_plan FROM plans_tarifaires WHERE id = ?";
        const [abonnementResults] = await client.query(abonnementQuery, [
            userInfo.abonnement
        ]);
        if (abonnementResults && abonnementResults.length > 0) userInfo.abonnement = abonnementResults[0].nom_plan; // Ajouter le nom du plan d'abonnement
        else userInfo.abonnement = null; // Valeur par défaut si aucune correspondance
        // 5. Mettre à jour les informations de l'utilisateur avec les nouvelles données
        const updateQuery = `
      UPDATE utilisateurs 
      SET 
        first_name = ?, 
        last_name = ?, 
        email = ?, 
        gender = ?, 
        date_of_birth = ?,
        status = ?,
        grade = ?, 
        abonnement = ?
      WHERE id = ?
    `;
        const { first_name, last_name, email, genre, date_of_birth, role, grade, abonnement } = data;
        console.log(first_name, last_name, email, genre, date_of_birth, role, grade, abonnement);
        const result = await client.query(updateQuery, [
            first_name,
            last_name,
            email,
            genre,
            date_of_birth,
            role,
            grade,
            abonnement,
            user_id
        ]);
        // 6. Vérifier si la mise à jour a réussi
        if (result.affectedRows > 0) return res.status(200).json({
            success: true,
            message: "Informations mises \xe0 jour avec succ\xe8s"
        });
        else return res.status(400).json({
            success: false,
            message: "Aucune donn\xe9e mise \xe0 jour"
        });
    } catch (error) {
        console.error("Erreur lors de la mise \xe0 jour des informations:", error);
        return res.status(500).json({
            success: false,
            message: "Erreur serveur"
        });
    }
});
// Exemple avec SQL
router.delete("/delete/:id", async (req, res)=>{
    const userId = req.params.id;
    try {
        const client = new (0, _client.Client)();
        // 1. Vérifier si l'utilisateur existe dans la base de données
        const userQuery = "SELECT * FROM utilisateurs WHERE id = ?";
        const [user] = await client.query(userQuery, [
            userId
        ]);
        if (!user || user.length === 0) return res.status(404).json({
            success: false,
            message: "Utilisateur non trouv\xe9"
        });
        // 2. Supprimer l'utilisateur de la base de données
        const deleteQuery = "DELETE FROM utilisateurs WHERE id = ?";
        const result = await client.query(deleteQuery, [
            userId
        ]);
        // 3. Vérifier si la suppression a réussi
        if (result.affectedRows > 0) return res.status(200).json({
            success: true,
            message: "Utilisateur supprim\xe9 avec succ\xe8s"
        });
        else return res.status(400).json({
            success: false,
            message: "Aucune donn\xe9e supprim\xe9e"
        });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
        return res.status(500).json({
            success: false,
            message: "Erreur serveur"
        });
    }
});
exports.default = router;

},{"express":"express","jsonwebtoken":"jsonwebtoken","../packages/db/client":"lxff2","@parcel/transformer-js/src/esmodule-helpers.js":"i8bdk"}]},["2yv2t","lLvi7"], "lLvi7", "parcelRequire1c26")

//# sourceMappingURL=index.js.map
