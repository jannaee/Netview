// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/en_US.json":[function(require,module,exports) {
module.exports = {
  "heading": "Stranger Things in RTP",
  "description": "The Duffer Brothers, born and raised in Durham, drop quite a few Durham-area references in the Emmy-winning hit sci-fi series 'Stranger Things' that they write, direct and produce.",
  "snippets": ["It's where Cornwallis and Kerley meet. - Hopper", "Described as 'A love letter to the ’80s classics that captivated a generation,' \"Stranger Things\" is set in 1983 in Indiana, \"where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.\"", "Despite the fact that none of the series was filmed in Durham or North Carolina (it was filmed in Georgia), a ton of references to the region are hidden in the show."],
  "locations": ["Kerley Road, Durham", "Loch Ora", "Eno River", "Forest Hills Park", "Jordan Lake"],
  "video-embed": "https://www.newsobserver.com/news/local/article182498126.html/video-embed",
  "quote": {
    "text": "We have Mirkwood which is, of course, at the intersection of Cornwallis and Kerley, which is really close to where we grew up",
    "author": "Matt Duffer"
  },
  "gallery": [{
    "src": "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/The_Vanishing_of_Will_Byers_S01-E01_SS_005.png/revision/latest/scale-to-width-down/620",
    "text": "Intersection of Cornwallis and Kerley"
  }, {
    "src": "https://www.newsobserver.com/news/local/rjhbpb/picture182497786/alternates/FREE_768/IMG_DISPLAY-ST_201-202_U_2_1_C9CM2NMI_L350297312",
    "text": "Trick-or-treating on Loch Nora"
  }, {
    "src": "https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1",
    "reference": "https://nationalpost.com/entertainment/television/inside-the-upside-down-the-life-of-will-byers-continues-to-spiral-in-episode-5-of-stranger-things-2",
    "text": "Drawings on the wall between Eno river and Jordan Lake"
  }, {
    "src": "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/1d/ST-Hawkins-Map.png",
    "text": "Map of Hawkins"
  }],
  "episode-list": [{
    "season": 2,
    "name": "Chapter Nine: The Gate",
    "rating": 9.4
  }, {
    "season": 2,
    "name": "Chapter Eight: The Mind Flayer",
    "rating": 9.3
  }, {
    "season": 1,
    "name": "Chapter Eight: The Upside Down",
    "rating": 9.3
  }, {
    "season": 2,
    "name": "Chapter Six: The Spy",
    "rating": 9.2
  }, {
    "season": 1,
    "name": "Chapter Seven: The Bathtub",
    "rating": 9.1
  }, {
    "season": 2,
    "name": "Chapter Five: Dig Dug",
    "rating": 8.9
  }, {
    "season": 1,
    "name": "Chapter Three: Holly, Jolly",
    "rating": 8.9
  }, {
    "season": 1,
    "name": "Chapter Four: The Body",
    "rating": 8.9
  }, {
    "season": 1,
    "name": "Chapter Six: The Monster",
    "rating": 8.8
  }, {
    "season": 2,
    "name": "Chapter Four: Will the Wise",
    "rating": 8.7
  }, {
    "season": 2,
    "name": "Chapter Three: The Pollywog",
    "rating": 8.7
  }, {
    "season": 1,
    "name": "Chapter Five: The Flea and the Acrobat",
    "rating": 8.7
  }, {
    "season": 1,
    "name": "Chapter One: The Vanishing of Will Byers",
    "rating": 8.6
  }, {
    "season": 2,
    "name": "Chapter Two: Trick or Treat, Freak",
    "rating": 8.5
  }, {
    "season": 1,
    "name": "Chapter Two: The Weirdo on Maple Street",
    "rating": 8.5
  }, {
    "season": 2,
    "name": "Chapter One: MADMAX",
    "rating": 8.4
  }, {
    "season": 2,
    "name": "Chapter Seven: The Lost Sister",
    "rating": 6.1
  }]
};
},{}],"scripts/data.js":[function(require,module,exports) {
"use strict";

var _en_US = _interopRequireDefault(require("/data/en_US.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.table(_en_US.default.heading); // const idb = require('/idb')
// const eng_data = require("../data/en_US.json")
// const openRequest = indexedDB.open('testData', 1);
// // success (database is ready and database object exist in openRequest.result)
// openRequest.onsuccess = function() {
//   let db = openRequest.result;
//   // continue to work with database using db object
//  db.onversionchange = function() {
//     db.close();
//     console.log("Out of Date Database")
//     //this will trigger a parallel update in the case a user
//     //has two browsers open at the same time with differnt versions
//   };
// };
// // error (opening of database fail)
// openRequest.onerror = function() {
//   console.error("Error", openRequest.error);
// };
// // upgradeneeded (database is ready but version is old)
// openRequest.onupgradeneeded = function() {
//   // triggers if the client had no database
//   // ...perform initialization...
// };
// openRequest.onblocked = function() {
//   //if another connection is still open and the db.close doesn't work or isn't used this will closed
// };
// // Now create and object store
// // Neat things primitive data types can be stored
// // Note: there needs to be a unique key for every value in the store and this option is asyncrhounous so no
// //await is needed
// // db.createObjectStore('netflixoriginals', {keyPath, keyOptions});
},{"/data/en_US.json":"data/en_US.json"}],"../../../.nvm/versions/node/v8.9.4/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61326" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v8.9.4/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/data.js"], null)
//# sourceMappingURL=/data.f6c2d177.js.map