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
})({"89kOC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "dc665938462f004f";
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

},{}],"03LU1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home);
parcelHelpers.export(exports, "Section", ()=>Section);
parcelHelpers.export(exports, "Footer", ()=>Footer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
var _url = require("../../url");
class Home extends (0, _core.WebComponent) {
}
Home = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "main-home",
        template: (0, _core.html)`${(home)=>{
            const buttons = [
                {
                    label: "Connexion",
                    ref: "/pages/connexion"
                }
            ];
            const schedule = [
                {
                    day: "Lundi",
                    time: "19h30-21h15"
                },
                {
                    day: "jeudi",
                    time: "19h30-21h15"
                },
                {
                    day: "Samedi",
                    time: "12h00-13h30"
                },
                {
                    day: "Dimanche",
                    time: "14h15-16h00"
                }
            ];
            const plans = [
                {
                    number: 1,
                    text: "Plan mensuel",
                    montant: "40 euros/mois"
                },
                {
                    number: 2,
                    text: "Plan trimestriel",
                    montant: "100 euros",
                    mois: "30 euros/mois"
                },
                {
                    number: 3,
                    text: "Plan annuel",
                    montant: "300 euros",
                    mois: "25 euros/mois"
                }
            ];
            return (0, _core.html)`<div>
            <pf-masthead display-inline>
                <div slot="brand">
                    <div class="logo"></div>
                </div>
                <pf-action-list>
                    ${(0, _core.repeat)(buttons, (0, _core.html)`${(button)=>{
                return (0, _core.html)`<pf-action-list><pf-button><a class="link" href=${button.ref}>${button.label}</a></pf-button></pf-action-list>`;
            }}`)}
                </pf-action-list>
            </pf-masthead>

            <section>
                <h1>Plongez dans l'univers implacable du jiu jitsu Brésilien</h1>
            </section>

            <section>
                <h1>Entraînez-vous avec les meilleurs</h1>
                <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
            </section>

            <section id="schedule">
                <h1>Grille horaires</h1>
                <div class="schedule-container">
                    ${(0, _core.repeat)(schedule, (0, _core.html)`${(jour)=>{
                return (0, _core.html)`
                            <div class="schedule-row">
                                <div class="day">${jour.day}</div>
                                <div class="time">${jour.time}</div>
                                <div class="arrow">→</div>
                            </div>
                            `;
            }}`)}
                </div>
            </section>

            <section id="tarifs">
                <div class="container">
                    <div class="header">
                        <h2>Tarifs</h2>
                        <h1>Choisissez parmi trois plans adaptés à vos besoins et votre budget.</h1>
                    </div>
                    <div class="plans-container">
                        ${(0, _core.repeat)(plans, (0, _core.html)`${(plan)=>{
                return (0, _core.html)`
                                    <div class="plan">
                                        <div class="plan-content">
                                            <span class="number">${plan.number}</span>
                                            <p>${plan.text}</p>
                                        </div>
                                        <div class="plan-montant">
                                            <p>${plan.montant}</p>
                                        </div>
                                        <div class="plan-mois">
                                            <p>${plan.mois}</p>
                                        </div>
                                </div>
                                `;
            }}`)}
                    </div>
                </div>
            </section>

            <special-section></special-section>
            <main-footer></main-footer>
        </div>`;
        }}`,
        styles: [
            (0, _core.css)`
        section{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
            margin: 50px auto;
            padding: 10px;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        section > h1{
            font-size: 36px;
            color: #ffffff;
        }
        section > h3{
            font-size: 24px;
            color: #ffffff;
        }
        .schedule-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #004080;
            padding: 10px;
        }
        .schedule-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #004080;
            padding: 15px 0;
        }
        .schedule-row:last-child {
            border-bottom: none;
        }

        .day, .time, .arrow {
            font-size: 18px;
        }

        .arrow {
            font-size: 24px;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 50px auto;
            text-align: center;
        }

        .header h1 {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .header h2 {
            font-size: 36px;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .plans-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 30px;
        }
        .plan {
            background-color: #003366;
            border-radius: 15px;
            padding: 20px;
            width: 300px;
            margin: 10px;
            text-align: center;
        }

        .plan-content .number {
            font-size: 48px;
            font-weight: bold;
            color: #66ccff;
        }

        .plan-content p {
            font-size: 16px;
            margin: 15px 0;
        }

        .plan-image img {
            width: 80px;
            height: auto;
            margin-top: 10px;
        }

        .logo{
            background-image: url(/images/logo3.png);
            background-size: contain;
            aspect-ratio: 1/1;
            height: 70px;
            background-repeat: no-repeat;
            background-position: center;
            margin: 10px 20px;
        }
        .link{
            text-decoration: none;
        }
        `
        ],
        shadowOptions: {
            mode: "open"
        }
    })
], Home);
class Section extends (0, _core.WebComponent) {
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "visible") this.isVisible = newValue === "true";
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    displayForm() {
        this.isVisible = !this.isVisible;
        this.visible = this.isVisible ? "true" : "false";
    }
    async send() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const nameValue = inputs?.[0].value || "";
        const emailValue = inputs?.[1].value || "";
        if (!nameValue || !emailValue) {
            alert("Vous devez remplir les champs");
            return;
        }
        if (this.currentSelection.length === 0) {
            alert("Veuillez s\xe9lectionner au moins un cours d'essai.");
            return;
        }
        this.utilisateur.push({
            nom: nameValue,
            email: emailValue,
            cours: this.currentSelection
        });
        console.log("Utilisateur et cours s\xe9lectionn\xe9s :", this.utilisateur);
        const isEligible = await this.verification(nameValue, emailValue);
        console.log(isEligible);
        if (isEligible === true) try {
            const response = await fetch(`${(0, _url.url)}reservations/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.utilisateur)
            });
            if (response.ok) {
                const result = await response.json();
                console.log("Utilisateur enregistr\xe9 avec succ\xe8s !", result);
                if (result.role) {
                    const userInfos = this.utilisateur.map((user)=>({
                            nom: user.nom,
                            email: user.email,
                            cours: user.cours
                        }));
                    const dataToStore = {
                        users: userInfos,
                        role: result.role
                    };
                    localStorage.setItem("userStatus", JSON.stringify(dataToStore));
                }
                this.currentSelection = [];
                this.utilisateur = [];
            } else {
                console.error("Erreur lors de l'enregistrement :", response.statusText);
                alert("Une erreur s'est produite. Veuillez r\xe9essayer.");
            }
        } catch (error) {
            console.error("Erreur lors de la requ\xeate :", error);
            alert("Impossible d'enregistrer la r\xe9servation.");
        }
        else alert("Vous avez d\xe9j\xe0 r\xe9serv\xe9 un cours d'essai.");
    }
    selectRow(cour) {
        if (this.currentSelection.length >= 1) {
            alert("Vous ne pouvez s\xe9lectionner qu'un seul cours d'essai");
            return;
        }
        this.currentSelection = [
            ...this.currentSelection,
            cour
        ];
        console.log("Cours s\xe9lectionn\xe9:", cour);
    }
    deleteRow(cour) {
        const courDate = cour.date_cours;
        this.currentSelection = this.currentSelection.filter((selectedCour)=>selectedCour.date_cours !== courDate);
        console.log("Liste de s\xe9lection mise \xe0 jour apr\xe8s suppression:", this.currentSelection);
    }
    async verification(nameValue, emailValue) {
        const usersInformations = {
            nom: nameValue,
            email: emailValue
        };
        try {
            const response = await fetch(`${(0, _url.url)}reservations/verification/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usersInformations)
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result.canRegister);
                if (result.canRegister === true) return true;
                else {
                    alert("Vous avez d\xe9j\xe0 r\xe9serv\xe9 un cours d'essai.");
                    return false;
                }
            } else {
                console.error("Erreur lors de la v\xe9rification :", response.statusText);
                alert("Une erreur s'est produite lors de la v\xe9rification. Veuillez r\xe9essayer.");
                return false;
            }
        } catch (error) {
            console.error("Erreur lors de la requ\xeate :", error);
            alert("Impossible de v\xe9rifier la r\xe9servation.");
            return false;
        }
    }
    async preloadData() {
        try {
            const response = await fetch(`${(0, _url.url)}cours/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                const errorText = await response.text(); // Récupère le texte d'erreur pour plus de détails
                throw new Error(`Erreur serveur: ${response.status} - ${errorText}`);
            }
            const data = await response.json();
            console.log("Donn\xe9es r\xe9cup\xe9r\xe9es:", data);
            // Vérifie si 'cours' est présent et si sa longueur est > 0
            if (data && data.cours && Array.isArray(data.cours) && data.cours.length > 0) return data.cours;
            else {
                console.warn("Aucun cours trouv\xe9.");
                return []; // Retourne un tableau vide si aucune donnée
            }
        } catch (error) {
            console.error("Erreur lors de la requ\xeate fetch:", error);
            return []; // Retourne un tableau vide en cas d'erreur
        }
    }
    formatDateFromISO(isoDateString) {
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    convertToISODate(dateString) {
        const [year, month, day] = dateString.split("-");
        return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
    }
    constructor(...args){
        super(...args);
        this.utilisateur = [];
        this.currentSelection = [];
        this.visible = null;
        this.isVisible = false;
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], Section.prototype, "currentSelection", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)
], Section.prototype, "visible", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Section.prototype, "isVisible", void 0);
Section = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "special-section",
        template: (0, _core.html)`${(section)=>{
            return (0, _core.html)`
        <section id="reservation">
            <h3>Réservez maintenant</h3>
            <span>Ne manquez pas cette occasion d'essayer un cours gratuit</span>
            <pf-button @click="${()=>section.displayForm()}">Cliquez-ici</pf-button>
            ${section.isVisible ? (0, _core.html)`
                <form>
                    <div>
                        <input type='text' placeholder="Nom">
                    </div>
                    <div>
                        <input type='email' placeholder="E-mail">
                    </div>
                    <pf-panel scrollable class="result-box">
                        <slot name="header">
                            <h3>Ma réservation</h3>
                        </slot>
                        <slot>
                            <div class="table-infos">
                                ${(0, _core.asyncAppend)(section.preloadData(), (result)=>{
                return (0, _core.html)`
                                    <div class="raw-infos">
                                        ${(0, _core.repeat)(result, (0, _core.html)`${(cour)=>{
                    return (0, _core.html)`
                                                        <div class="row" @click="${(cour)=>section.selectRow(cour)}">
                                                            <div class="type-de-cours">${cour.type_cours}</div>
                                                            <div class="date">${section.formatDateFromISO(cour.date_cours)}</div>
                                                            <div class="heure-debut">${cour.heure_debut}</div>
                                                            <div class="heure-fin">${cour.heure_fin}</div>
                                                        </div>`;
                }}`)}
                                    </div>
                                    `;
            })}
                            </div>
                        </slot>
                        <slot name="extra-slot">
                             <div class="selection">
                                ${(0, _core.repeat)(section.currentSelection, (0, _core.html)`${(cour)=>{
                console.log(cour);
                return (0, _core.html)`
                                                <div class="selection">
                                                    <div class="type-de-cours">${cour.type_cours}</div>
                                                    <div class="date">${section.formatDateFromISO(cour.date_cours)}</div>
                                                    <div class="heure-debut">${cour.heure_debut}</div>
                                                    <div class="heure-fin">${cour.heure_fin}</div>
                                                    <div class="icon" @click="${(cour)=>section.deleteRow(cour)}"><pf-icons-trash-alt></pf-icons-trash-alt></div>
                                                </div>
                                            `;
            }}`)}
                             </div>
                        </slot>
                    </pf-panel>
                    <pf-button @click="${()=>section.send()}">Réservez</pf-button>
                </form>
            ` : ""}
        </section>
        `;
        }}`,
        styles: [
            (0, _core.css)`
        section#reservation {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
        }
        section#reservation > h3{
            font-size: 36px;
        }
        section#reservation > form {
            min-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        section#reservation > form.active {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }
        .table-infos {
            display: grid;
            align-items: center;
            width: 100%;
        }
        section#réservation > form > .table-infos .raw-infos {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            padding: 10px 10px;
        }
        section#réservation > form > .table-infos .raw-infos {
            justify-content: space-between;
            align-items: center;
            display: flex;
            padding: 10px 10px;
            cursor: pointer;
        }
        section#réservation > form > .table-infos .raw-infos:nth-child(odd) {
            background-color: #9e9e9e59;
        }

        section#réservation > form > .table-infos .raw-infos:nth-child(even) {
            background-color: #9e9e9e17;
        }
        .type-de-cours-infos {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 10px 10px;
            width: 12ch;
        }
        .heure-fin-infos {
            padding: 10px 10px;
            width: 12ch;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .heure-debut-infos {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 10px 10px;
            width: 12ch;
        }
        .date-infos {
            display: flex;
            align-items: center;
            align-items: center;
            justify-content: center;
            padding: 10px 10px;
        }
        .down-arrow {
            cursor: pointer;
            background-color: #0350f4b0;
            justify-content: center;
            padding: 10px 10px;
            border-radius: 3px;
        }
        button.inscription {
            padding: 10px 10px;
            border: none;
            border-radius: 3px;
            background-color: #5b32a3b8;
            color: #ffff;
            cursor: pointer;
        }
        .raw-infos {
            cursor: pointer;
            justify-content: space-between;
            display: flex;
            flex-direction: column-reverse;
        }
        .row:nth-child(even){
             background-color:#004080;
        }
        .row:nth-child(odd){
            background-color:#0958a7;
        }
        .course-container {
            color: black;
        }

        .row {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px;
            gap: 10px;
            text-align: center;
        }

        pf-modal.result-box {
            display: none;
        }
        pf-modal.result-box.active {
            display: block;
        }       
        .selection {
            color: #3e8635;
            display: flex;
            justify-content: space-around;
            padding: 10px 10px;
            background-color: #f3faf2;
            margin-top: 10px;
        }
        input[type="text"]{
        border: none;
        background-color: #fafbfe;
        width: 47ch;
        padding: 20px 10px;
        border-radius: 3px;
      }
      input[type="text"]::placeholder {
        color: #a2adbe;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 47ch;
        padding: 20px 10px;
        border-radius: 3px;
      }

      input[type="email"]::placeholder {
        color: #a2adbe;
      }
        `
        ]
    })
], Section);
class Footer extends (0, _core.WebComponent) {
}
Footer = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "main-footer",
        template: (0, _core.html)`${(footer)=>{
            return (0, _core.html)`
            <footer>
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>Emplacement</h3>
                        <ul>
                            <li><a href="#">Nous trouver</a></li>
                            <li><a href="#">Plan d'accès</a></li>
                            <li><a href="#">Transports</a></li>
                        </ul>
                </div>
                <div class="footer-column">
                        <h3>Cours</h3>
                        <ul>
                            <li><a href="#">Horaires</a></li>
                            <li><a href="#">Prix</a></li>
                            <li><a href="#">Instructeurs</a></li>
                        </ul>
                </div>
                <div class="footer-column">
                        <h3>Extras</h3>
                        <ul>
                            <li><a href="#">Galerie photo</a></li>
                            <li><a href="#">Événements</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Tous les droits sont réservés</p>
                <div class="footer-icons">
                    <a href="https://www.instagram.com/octopusteambjj_belgium_braine/"><pf-icons-instagram></pf-icons-instagram></a>
                </div>
            </div>
        </footer>`;
        }}`,
        styles: [
            (0, _core.css)`
        footer {
            background-color: #002244;
            color: white;
            padding: 20px;
            font-family: 'Arial', sans-serif;
        }

        .footer-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .footer-column {
            width: 30%;
        }

        .footer-column h3 {
            margin-bottom: 15px;
            font-size: 18px;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
        }

        .footer-column ul li {
            margin-bottom: 10px;
        }

        .footer-column ul li a {
            color: white;
            text-decoration: none;
        }

        .footer-column ul li a:hover {
            text-decoration: underline;
        }

        .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-bottom p {
            margin: 0;
        }

        .footer-icons {
            display: flex;
        }

        .footer-icons a {
            margin-left: 15px;
        }

        .footer-icons img {
            width: 24px;
            height: 24px;
        }
        `
        ]
    })
], Footer);
(0, _core.render)((0, _core.html)`<main-home></main-home>`, document.body);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","../../url":"2Klj6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Klj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "url", ()=>url);
const url = "http://ec2-18-185-136-232.eu-central-1.compute.amazonaws.com:3000/";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["89kOC","03LU1"], "03LU1", "parcelRequire1c26")

//# sourceMappingURL=index.462f004f.js.map
