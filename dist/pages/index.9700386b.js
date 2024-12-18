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
})({"j3EBk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6b17d5ca9700386b";
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

},{}],"HH6XE":[function(require,module,exports) {
var _navigation = require("./navigation");
var _mainApplication = require("./main-application");

},{"./navigation":"f8xTW","./main-application":"kOcZZ"}],"f8xTW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VerticalNavBar", ()=>(0, _verticalNavbar1.VerticalNavBar));
parcelHelpers.export(exports, "HorizontalNavBar", ()=>(0, _horizontalNavbar1.HorizontalNavBar));
parcelHelpers.export(exports, "MainApplication", ()=>(0, _mainApplication.MainApplication));
var _verticalNavbar = require("./vertical-navbar");
var _horizontalNavbar = require("./horizontal-navbar");
var _mainApplication = require("../main-application");
var _verticalNavbar1 = require("./vertical-navbar/vertical-navbar");
var _horizontalNavbar1 = require("./horizontal-navbar/horizontal-navbar");

},{"./vertical-navbar":"2Sdb0","./horizontal-navbar":"fnQOT","../main-application":"kOcZZ","./vertical-navbar/vertical-navbar":"umROp","./horizontal-navbar/horizontal-navbar":"kQn45","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Sdb0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _verticalNavbar = require("./vertical-navbar");
parcelHelpers.exportAll(_verticalNavbar, exports);

},{"./vertical-navbar":"umROp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"umROp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VerticalNavBar", ()=>VerticalNavBar);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class VerticalNavBar extends (0, _core.WebComponent) {
    connectedCallback() {
        super.connectedCallback();
        console.log("vertical navbar connect\xe9");
        this.onMounting();
        // Écoute l'événement 'close-navbars' sur le document
        document.addEventListener("close-navbars", this.handleCloseNavbars.bind(this));
        document.addEventListener("open-navbars", this.handleOpenNavbars.bind(this));
    }
    onMounting() {
        const navbarState = JSON.parse(localStorage.getItem("navigation"));
        if (navbarState.horizontal_vertical_state === false) this.Minimize();
        else if (navbarState.horizontal_vertical_state === true) this.Expand();
    }
    handleCloseNavbars(event) {
        // Fermer la navigation si elle est ouverte
        if (this.isOpen === true) {
            this.isOpen = false;
            this.open = "false";
        }
        // Sauvegarder l'état de la navigation seulement si la barre horizontale est active et la verticale ouverte
        if (event.detail.horizontalstate === false && this.isOpen === false) {
            const navigation = {
                horizontal_vertical_state: this.isOpen
            };
            this.Minimize();
            localStorage.setItem("navigation", JSON.stringify(navigation));
        }
    }
    handleOpenNavbars(event) {
        if (this.isOpen === false) {
            this.isOpen = true;
            this.open = "true";
        }
        // Sauvegarder l'état de la navigation seulement si la barre horizontale est active et la verticale ouverte
        if (event.detail.horizontalstate === true && this.isOpen === true) {
            const navigation = {
                horizontal_vertical_state: this.isOpen
            };
            this.Expand();
            localStorage.setItem("navigation", JSON.stringify(navigation));
        }
    }
    Minimize() {
        const sidebar = this.shadowRoot?.querySelectorAll("#sidebar")[0];
        const links = this.shadowRoot?.querySelectorAll("a");
        const ul = this.shadowRoot?.querySelectorAll("ul")[0];
        const dropdown = this.shadowRoot?.querySelectorAll(".dropdown-btn")[0];
        links.forEach((link)=>{
            link.classList.toggle("close");
            link.parentElement.classList.toggle("close");
        });
        dropdown.parentElement.classList.toggle("close");
        sidebar.classList.toggle("close");
        ul.classList.toggle("close");
    }
    Expand() {
        const sidebar = this.shadowRoot?.querySelectorAll("#sidebar")[0];
        const links = this.shadowRoot?.querySelectorAll("a");
        const ul = this.shadowRoot?.querySelectorAll("ul")[0];
        const dropdown = this.shadowRoot?.querySelectorAll(".dropdown-btn")[0];
        links.forEach((link)=>{
            link.classList.remove("close");
            link.parentElement.classList.remove("close");
        });
        dropdown.parentElement.classList.toggle("close");
        sidebar.classList.remove("close");
        ul.classList.remove("close");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "isopen") // Assigner directement la valeur de newValue à this.open
        this.open = newValue;
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    show(index) {
        const subMenus = this.shadowRoot?.querySelectorAll(".sub-menu");
        if (subMenus) {
            const targetIndex = index !== undefined ? index : 0;
            if (subMenus[targetIndex]) {
                const svg = subMenus[targetIndex].parentElement.children[0].children[2].classList.toggle("rotate");
                subMenus[targetIndex].classList.toggle("show");
            } else console.error("Sous-menu introuvable \xe0 l'index", targetIndex);
        }
    }
    constructor(...args){
        super(...args);
        this.isOpen = true;
        this.open = null;
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], VerticalNavBar.prototype, "isOpen", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], VerticalNavBar.prototype, "open", void 0);
VerticalNavBar = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "vertical-navbar",
        template: (0, _core.html)`${(verticalNavBar)=>{
            return (0, _core.html)`
        <nav id="sidebar">
         <ul id="top-sidebar">
            <li>
               <a href="/pages/">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                  <span>Accueil</span>
               </a>
            </li>
            <li>
               <button class="dropdown-btn" @click="${()=>verticalNavBar.show(0)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
                  <span>Cours</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>S'inscrire</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un professeur</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Supprimer un cours</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <a href="/pages/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                  <span>Dashboard</span>
               </a>
            </li>
            <li>
               <button class="dropdown-btn" @click="${()=>verticalNavBar.show(1)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Administration</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Evènements</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un évènement</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>supprimer un évènement</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <button class="dropdown-btn" @click="${()=>verticalNavBar.show(2)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg>
                  <span>Magasin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Articles</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un article</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Supprimer un article</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <button class="dropdown-btn" @click="${()=>verticalNavBar.show(3)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                  <span>Evènements</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Evènements</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un évènement</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>supprimer un évènement</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <a href="/pages/chat">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                  <span>Messages</span>
               </a>
            </li>
         </ul>
        </nav>
      `;
        }}`,
        styles: [
            (0, _core.css)`
      #sidebar{
         box-sizing: border-box;
         height: 100%;
         width: 250px;
         padding: 5px 1em;
         background-color: #11121a;
         border-right: 1px solid #42434a;
         display: flex;
         flex-direction: column;
         justify-content: center;
         transition: all 0.3s ease;

         overflow: hidden;
         text-wrap: nowrap;
      }
      #sidebar.close{
         width: 84px;
      }
      .header{
         border: 1px solid #42434a;
      }
      #sidebar ul{
         list-style:none;
         padding: 0 ;
         transition: all 0.3s ease;
         display: flex;
         flex-direction: column;
      }
      #sidebar ul.close {
         overflow: hidden;
      }     
      #sidebar a.close{
         width: 150px;
         overflow: hidden;
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
         }
      }
      #sidebar a, #sidebar .dropdown-btn, #sidebar span{
         padding: 10px 10px;
         text-decoration: none;
         color: #e6e6ef;
         display: flex;
         align-items: center;
         gap: 10px;

         svg{
            fill: #e6e6ef;
         }
      }
      .dropdown-btn{
         width: 100%;
         text-align: left;
         background: none;
         border: none;
         font-family: Poppins, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
         cursor: pointer;
      }
      button.dropdown-btn > svg {
         transition: 200ms ease;
      }
      button.dropdown-btn > svg.rotate {
         rotate: 180deg;
      }
      button.dropdown-btn.close {

      }
      #sidebar ul li.close {
         width: 227px;
      }
      #sidebar ul li{
         
      } 
      .dropdown-btn > span{
         font-size: 16px;
      }
      #sidebar a span, #sidebar .dropdown-btn span{
         flex-grow: 1;
      }
      #sidebar a:hover, #sidebar .dropdown-btn:hover{
         background-color: #222533;
      }
      #sidebar .sub-menu{
         display: grid;
         grid-template-rows: 0fr;
         transition: 300ms ease-in-out;

         > div{
            overflow: hidden;
         }
      }
      #sidebar .sub-menu a{
         padding-left: 3em;
      }
      #sidebar .sub-menu.show{
         grid-template-rows: 1fr;
      }
      `
        ]
    })
], VerticalNavBar);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnQOT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _horizontalNavbar = require("./horizontal-navbar");
parcelHelpers.exportAll(_horizontalNavbar, exports);

},{"./horizontal-navbar":"kQn45","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQn45":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HorizontalNavBar", ()=>HorizontalNavBar);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class HorizontalNavBar extends (0, _core.WebComponent) {
    connectedCallback() {
        super.connectedCallback();
        console.log("horizontal navbar connect\xe9");
        this.onMounting();
    }
    onMounting() {
        const navbarState = JSON.parse(localStorage.getItem("navigation"));
        if (navbarState.horizontal_vertical_state === false) this.Minimize();
        else if (navbarState.horizontal_vertical_state === true) this.Expand();
    }
    toggleButton() {
        const navbarState = JSON.parse(localStorage.getItem("navigation"));
        console.log("toggle initial", this.open, navbarState?.horizontal_vertical_state, this.isOpen);
        // Cas où open est null et isOpen est true (Initialisation avec état synchronisé)
        if (this.open === null && this.isOpen === true) {
            console.log("Synchronisation initiale : open est null et isOpen est true");
            this.open = "true"; // Synchronisation de l'état 'open'
            this.isOpen = true; // Assurez-vous que isOpen est aussi 'true'
            this.openEmitSignal(this.isOpen); // Emission du signal pour signaler l'ouverture
            return;
        }
        // Cas où open est null et isOpen est false (Initialisation avec état synchronisé)
        if (this.open === null && this.isOpen === false) {
            console.log("Synchronisation initiale : open est null et isOpen est false");
            this.open = "false"; // Synchronisation de l'état 'open'
            this.isOpen = false; // Assurez-vous que isOpen est aussi 'false'
            this.closeEmitSignal(this.isOpen); // Emission du signal pour signaler la fermeture
            return;
        }
        // Cas où open est 'true' et isOpen est true (Fermeture de la navigation)
        if (this.open === "true" && this.isOpen === true) {
            console.log("Fermeture de la navigation");
            this.isOpen = false;
            this.open = "false";
            this.closeEmitSignal(this.isOpen); // Fermeture de la navigation
            return;
        }
        // Cas où open est 'false' et isOpen est false (Ouverture de la navigation)
        if (this.open === "false" && this.isOpen === false) {
            console.log("Ouverture de la navigation");
            this.isOpen = true;
            this.open = "true";
            this.openEmitSignal(this.isOpen); // Ouverture de la navigation
            return;
        }
        // Cas par défaut : quand open et isOpen ne sont ni 'true' ni 'false', basculer l'état
        console.log("Basculer l'\xe9tat : toggle");
        this.isOpen = !this.isOpen; // Inverser l'état de isOpen
        this.open = this.isOpen ? "true" : "false"; // Synchroniser open avec isOpen
        // Après le basculement, envoyer le signal approprié
        if (this.isOpen) {
            console.log("Ouverture de la navigation apr\xe8s basculement");
            this.openEmitSignal(this.isOpen);
        } else {
            console.log("Fermeture de la navigation apr\xe8s basculement");
            this.closeEmitSignal(this.isOpen);
        }
    }
    switchMode() {}
    closeEmitSignal(state) {
        // Émettre un événement personnalisé pour notifier qu'il faut manipuler les navbars à l'extérieur
        const event = new CustomEvent("close-navbars", {
            bubbles: true,
            composed: true,
            detail: {
                message: "Close all external navbars",
                horizontalstate: this.isOpen
            }
        });
        this.Minimize();
        console.log(event);
        // Dispatch l'événement depuis le composant
        this.dispatchEvent(event);
    }
    openEmitSignal(state) {
        // Émettre un événement personnalisé pour notifier qu'il faut manipuler les navbars à l'extérieur
        const event = new CustomEvent("open-navbars", {
            bubbles: true,
            composed: true,
            detail: {
                message: "Open all external navbars",
                horizontalstate: this.isOpen
            }
        });
        this.Expand();
        console.log(event);
        // Dispatch l'événement depuis le composant
        this.dispatchEvent(event);
    }
    Minimize() {
        const btn = this.shadowRoot?.querySelectorAll(".toggle-btn")[0];
        const sidebar = this.shadowRoot?.querySelectorAll("#sidebar")[0];
        btn.classList.toggle("close");
        sidebar.classList.toggle("close");
    }
    Expand() {
        const btn = this.shadowRoot?.querySelectorAll(".toggle-btn")[0];
        const sidebar = this.shadowRoot?.querySelectorAll("#sidebar")[0];
        btn.classList.remove("close");
        sidebar.classList.remove("close");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "isopen") // Assigner directement la valeur de newValue à this.open
        this.open = newValue;
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    constructor(...args){
        super(...args);
        this.isOpen = true;
        this.open = null;
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], HorizontalNavBar.prototype, "isOpen", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], HorizontalNavBar.prototype, "open", void 0);
HorizontalNavBar = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "horizontal-navbar",
        template: (0, _core.html)`${(horizontalNavBar)=>{
            return (0, _core.html)`
        <nav id="sidebar">
         <ul class="header-sidebar">
            <li>
               <a class="member-info-initial" href="/pages/profil">HB</a>
               <button class="toggle-btn" @click="${()=>horizontalNavBar.toggleButton()}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
               </button>
            </li>
         </ul>
         <ul id="right-sidebar">
            <li>
               <div class="member-infos">
                  <span class="member-info-nom"><a href="/pages/profil">Houthoofd Benoit</a></span>
               </div>
            </li>
            <li>
               <a href="/pages/messages">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
               </a>
            </li>
            <li>
               <a href="/pages/notifications">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
               </a>
            </li>
            <li>
               <a>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
               </a>
            </li>
            <li id="switch-mode" @click="${()=>horizontalNavBar.switchMode()}">
               <div class="moon-sun">
                  <div class="moon-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                  </div>
                  <div class="sun-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                  </div>
               </div>
            </li>
         </ul>
        </nav>
      `;
        }}`,
        styles: [
            (0, _core.css)`
      #sidebar{
         box-sizing: border-box;
         background-color: #11121a;
         display: grid;
         grid-template-columns: 250px 1fr;
         align-items: center;
         height: 10vh;
         border-bottom: 1px solid #42434a;
         transition: all 0.3s ease;
      }
      #sidebar.close{
         grid-template-columns: 84px 1fr;
      }
      .header-sidebar{
         padding: 0;
         border-right: 1px solid #42434a;
         justify-content: space-between;
         align-items: center;
         display: flex;
         background-color: #222533;
      }
      .header-sidebar li{
         list-style: none;
         width: 100%;
         padding: 0;
         margin: 0;
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      #sidebar ul{
         list-style: none;
         height: 100%;
         padding: 0;
         margin: 0;
      }
      #sidebar ul li.active a{
         color: #5e63ff;

         svg{
            fill: #5e63ff;
         }
      }
      #sidebar a{
         padding: .85rem;
         text-decoration: none;
         color: #e6e6ef;
         display: flex;
         align-items: center;
         gap: 1em;
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
         }
      }
      .toggle-btn{
         width: 35px;
         height: 35px;
         border-radius: 50%;
         border: none;
         background-color: #5e63ff;
         transform: translateX(18px) translateY(0px);
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
            transform: translateX(0px) translateY(2px);
         }
      }
      .toggle-btn.close{
         width: 23px;
         height: 23px;
         transform: translateX(12px) translateY(0px);

         svg{
            width: 15px;
            height: 15px;
            transform: translateX(-1px) translateY(2px);
         }
      }
      #right-sidebar{
         display: flex;
         align-items: center;
         justify-content: flex-end;
      }
      .member-info-initial{
         background-color: #5e63ff;
         border-radius: 10px;
         /* margin-left: 20px; */
         transform: translateX(19px);
      }
      #switch-mode{
         background-color: #222533;
         display: flex;
         padding: 10px 10px;
         justify-content: space-between;
         align-items: center;
         border-radius: 10px;
         transition: all 0.3s ease;
      }
      #switch-mode.close{
         width: 130px;
      }
      .moon-sun{
         display: grid;
         align-items: center;
         transform: translateX(2px) translateY(3px);
         transition: all 0.3s ease;

         .moon-icon, .sun-icon {
            grid-column: 1;
            grid-row: 1;

            svg{
               fill: #e6e6ef;
            }
         }
      }
      .moon-sun.close{
         width: 150px;
      }
      .sun-icon{
         opacity: 0;
      }
      `
        ]
    })
], HorizontalNavBar);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOcZZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainApplication = require("./main-application");
parcelHelpers.exportAll(_mainApplication, exports);

},{"./main-application":"4VLX2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VLX2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainApplication", ()=>MainApplication);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
var _navigation = require("../navigation");
class MainApplication extends (0, _core.WebComponent) {
    connectedCallback() {
        super.connectedCallback();
        console.log("main-application connect\xe9");
        this.onMounting();
        // Écoute l'événement 'close-navbars' et 'open-navbars' sur le document
        document.addEventListener("close-navbars", this.handleRemoveExpanseContent.bind(this));
        document.addEventListener("open-navbars", this.handleExpanseContent.bind(this));
    }
    onMounting() {
        const navbarState = JSON.parse(localStorage.getItem("navigation"));
        if (navbarState.horizontal_vertical_state === false) this.Expand();
        else if (navbarState.horizontal_vertical_state === true) this.Minimize();
    }
    handleRemoveExpanseContent(event) {
        if (event.detail?.horizontalstate === false) {
            this.isExpanse = false;
            this.expanse = "false";
            this.Expand();
        }
    }
    handleExpanseContent(event) {
        if (event.detail?.horizontalstate === true) {
            this.isExpanse = true;
            this.expanse = "true";
            this.Minimize();
        }
    }
    Expand() {
        const rightContent = this.shadowRoot?.querySelectorAll(".right-content")[0];
        rightContent.classList.toggle("expand");
    }
    Minimize() {
        const rightContent = this.shadowRoot?.querySelectorAll(".right-content")[0];
        rightContent.classList.remove("expand");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "expanse") this.expanse = newValue;
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    constructor(...args){
        super(...args);
        this.isExpanse = true;
        this.expanse = null;
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], MainApplication.prototype, "isExpanse", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], MainApplication.prototype, "expanse", void 0);
MainApplication = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "main-application",
        template: (0, _core.html)`${(main)=>{
            return (0, _core.html)`
        <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <slot></slot>
               </div>
            </div>
        </div>
      `;
        }}`,
        styles: [
            (0, _core.css)`
      #application{
         min-height: 100vh;
         background-color: var(--base-clr);
         color: var(--text-clr);
         display: grid;
         grid-template-rows: 10vh 1fr;
      }
      .content{
         margin-left: 10px;
         margin-top: 10px;
      }
      .right-content{
         display: grid;
         grid-template-columns: 250px 1fr;
         transition: all 0.3s ease;
      }
      .right-content.expand{
         grid-template-columns: 84px 1fr;
      }
      `
        ]
    })
], MainApplication);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","../navigation":"f8xTW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j3EBk"], null, "parcelRequire1c26")

//# sourceMappingURL=index.9700386b.js.map
