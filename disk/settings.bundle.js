/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", {value: true});
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/settings/index.ts")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/d3-collection/index.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-collection/index.js ***!
  \*********************************************/
      /*! exports provided: nest, set, map, keys, values, entries */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/nest */ "./node_modules/d3-collection/src/nest.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "nest",
          function() {
            return _src_nest__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony import */ var _src_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/set */ "./node_modules/d3-collection/src/set.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "set",
          function() {
            return _src_set__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/map */ "./node_modules/d3-collection/src/map.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "map",
          function() {
            return _src_map__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/keys */ "./node_modules/d3-collection/src/keys.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "keys",
          function() {
            return _src_keys__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/values */ "./node_modules/d3-collection/src/values.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "values",
          function() {
            return _src_values__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony import */ var _src_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/entries */ "./node_modules/d3-collection/src/entries.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "entries",
          function() {
            return _src_entries__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-collection/src/entries.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          map
        ) {
          var entries = [];
          for (var key in map) entries.push({key: key, value: map[key]});
          return entries;
        };

        /***/
      },

    /***/ "./node_modules/d3-collection/src/keys.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          map
        ) {
          var keys = [];
          for (var key in map) keys.push(key);
          return keys;
        };

        /***/
      },

    /***/ "./node_modules/d3-collection/src/map.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
      /*! exports provided: prefix, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "prefix",
          function() {
            return prefix;
          }
        );
        var prefix = "$";

        function Map() {}

        Map.prototype = map.prototype = {
          constructor: Map,
          has: function(key) {
            return prefix + key in this;
          },
          get: function(key) {
            return this[prefix + key];
          },
          set: function(key, value) {
            this[prefix + key] = value;
            return this;
          },
          remove: function(key) {
            var property = prefix + key;
            return property in this && delete this[property];
          },
          clear: function() {
            for (var property in this)
              if (property[0] === prefix) delete this[property];
          },
          keys: function() {
            var keys = [];
            for (var property in this)
              if (property[0] === prefix) keys.push(property.slice(1));
            return keys;
          },
          values: function() {
            var values = [];
            for (var property in this)
              if (property[0] === prefix) values.push(this[property]);
            return values;
          },
          entries: function() {
            var entries = [];
            for (var property in this)
              if (property[0] === prefix)
                entries.push({key: property.slice(1), value: this[property]});
            return entries;
          },
          size: function() {
            var size = 0;
            for (var property in this) if (property[0] === prefix) ++size;
            return size;
          },
          empty: function() {
            for (var property in this) if (property[0] === prefix) return false;
            return true;
          },
          each: function(f) {
            for (var property in this)
              if (property[0] === prefix)
                f(this[property], property.slice(1), this);
          }
        };

        function map(object, f) {
          var map = new Map();

          // Copy constructor.
          if (object instanceof Map)
            object.each(function(value, key) {
              map.set(key, value);
            });
          // Index array by numeric index or specified key function.
          else if (Array.isArray(object)) {
            var i = -1,
              n = object.length,
              o;

            if (f == null) while (++i < n) map.set(i, object[i]);
            else while (++i < n) map.set(f((o = object[i]), i, object), o);
          }

          // Convert object to map.
          else if (object) for (var key in object) map.set(key, object[key]);

          return map;
        }

        /* harmony default export */ __webpack_exports__["default"] = map;

        /***/
      },

    /***/ "./node_modules/d3-collection/src/nest.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./map */ "./node_modules/d3-collection/src/map.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var keys = [],
            sortKeys = [],
            sortValues,
            rollup,
            nest;

          function apply(array, depth, createResult, setResult) {
            if (depth >= keys.length) {
              if (sortValues != null) array.sort(sortValues);
              return rollup != null ? rollup(array) : array;
            }

            var i = -1,
              n = array.length,
              key = keys[depth++],
              keyValue,
              value,
              valuesByKey = Object(
                _map__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(),
              values,
              result = createResult();

            while (++i < n) {
              if (
                (values = valuesByKey.get(
                  (keyValue = key((value = array[i])) + "")
                ))
              ) {
                values.push(value);
              } else {
                valuesByKey.set(keyValue, [value]);
              }
            }

            valuesByKey.each(function(values, key) {
              setResult(
                result,
                key,
                apply(values, depth, createResult, setResult)
              );
            });

            return result;
          }

          function entries(map, depth) {
            if (++depth > keys.length) return map;
            var array,
              sortKey = sortKeys[depth - 1];
            if (rollup != null && depth >= keys.length) array = map.entries();
            else
              (array = []),
                map.each(function(v, k) {
                  array.push({key: k, values: entries(v, depth)});
                });
            return sortKey != null
              ? array.sort(function(a, b) {
                  return sortKey(a.key, b.key);
                })
              : array;
          }

          return (nest = {
            object: function(array) {
              return apply(array, 0, createObject, setObject);
            },
            map: function(array) {
              return apply(array, 0, createMap, setMap);
            },
            entries: function(array) {
              return entries(apply(array, 0, createMap, setMap), 0);
            },
            key: function(d) {
              keys.push(d);
              return nest;
            },
            sortKeys: function(order) {
              sortKeys[keys.length - 1] = order;
              return nest;
            },
            sortValues: function(order) {
              sortValues = order;
              return nest;
            },
            rollup: function(f) {
              rollup = f;
              return nest;
            }
          });
        };

        function createObject() {
          return {};
        }

        function setObject(object, key, value) {
          object[key] = value;
        }

        function createMap() {
          return Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }

        function setMap(map, key, value) {
          map.set(key, value);
        }

        /***/
      },

    /***/ "./node_modules/d3-collection/src/set.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./map */ "./node_modules/d3-collection/src/map.js"
        );

        function Set() {}

        var proto = _map__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

        Set.prototype = set.prototype = {
          constructor: Set,
          has: proto.has,
          add: function(value) {
            value += "";
            this[_map__WEBPACK_IMPORTED_MODULE_0__["prefix"] + value] = value;
            return this;
          },
          remove: proto.remove,
          clear: proto.clear,
          values: proto.keys,
          size: proto.size,
          empty: proto.empty,
          each: proto.each
        };

        function set(object, f) {
          var set = new Set();

          // Copy constructor.
          if (object instanceof Set)
            object.each(function(value) {
              set.add(value);
            });
          // Otherwise, assume it’s an array.
          else if (object) {
            var i = -1,
              n = object.length;
            if (f == null) while (++i < n) set.add(object[i]);
            else while (++i < n) set.add(f(object[i], i, object));
          }

          return set;
        }

        /* harmony default export */ __webpack_exports__["default"] = set;

        /***/
      },

    /***/ "./node_modules/d3-collection/src/values.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          map
        ) {
          var values = [];
          for (var key in map) values.push(map[key]);
          return values;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/index.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-selection/index.js ***!
  \********************************************/
      /*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/create */ "./node_modules/d3-selection/src/create.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "create",
          function() {
            return _src_create__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony import */ var _src_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/creator */ "./node_modules/d3-selection/src/creator.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "creator",
          function() {
            return _src_creator__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/local */ "./node_modules/d3-selection/src/local.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "local",
          function() {
            return _src_local__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/matcher */ "./node_modules/d3-selection/src/matcher.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "matcher",
          function() {
            return _src_matcher__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/mouse */ "./node_modules/d3-selection/src/mouse.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "mouse",
          function() {
            return _src_mouse__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony import */ var _src_namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/namespace */ "./node_modules/d3-selection/src/namespace.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "namespace",
          function() {
            return _src_namespace__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony import */ var _src_namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/namespaces */ "./node_modules/d3-selection/src/namespaces.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "namespaces",
          function() {
            return _src_namespaces__WEBPACK_IMPORTED_MODULE_6__["default"];
          }
        );

        /* harmony import */ var _src_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/point */ "./node_modules/d3-selection/src/point.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "clientPoint",
          function() {
            return _src_point__WEBPACK_IMPORTED_MODULE_7__["default"];
          }
        );

        /* harmony import */ var _src_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/select */ "./node_modules/d3-selection/src/select.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "select",
          function() {
            return _src_select__WEBPACK_IMPORTED_MODULE_8__["default"];
          }
        );

        /* harmony import */ var _src_selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/selectAll */ "./node_modules/d3-selection/src/selectAll.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "selectAll",
          function() {
            return _src_selectAll__WEBPACK_IMPORTED_MODULE_9__["default"];
          }
        );

        /* harmony import */ var _src_selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./src/selection/index */ "./node_modules/d3-selection/src/selection/index.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "selection",
          function() {
            return _src_selection_index__WEBPACK_IMPORTED_MODULE_10__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./src/selector */ "./node_modules/d3-selection/src/selector.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "selector",
          function() {
            return _src_selector__WEBPACK_IMPORTED_MODULE_11__["default"];
          }
        );

        /* harmony import */ var _src_selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./src/selectorAll */ "./node_modules/d3-selection/src/selectorAll.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "selectorAll",
          function() {
            return _src_selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"];
          }
        );

        /* harmony import */ var _src_selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./src/selection/style */ "./node_modules/d3-selection/src/selection/style.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "style",
          function() {
            return _src_selection_style__WEBPACK_IMPORTED_MODULE_13__[
              "styleValue"
            ];
          }
        );

        /* harmony import */ var _src_touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./src/touch */ "./node_modules/d3-selection/src/touch.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "touch",
          function() {
            return _src_touch__WEBPACK_IMPORTED_MODULE_14__["default"];
          }
        );

        /* harmony import */ var _src_touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./src/touches */ "./node_modules/d3-selection/src/touches.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "touches",
          function() {
            return _src_touches__WEBPACK_IMPORTED_MODULE_15__["default"];
          }
        );

        /* harmony import */ var _src_window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./src/window */ "./node_modules/d3-selection/src/window.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "window",
          function() {
            return _src_window__WEBPACK_IMPORTED_MODULE_16__["default"];
          }
        );

        /* harmony import */ var _src_selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./src/selection/on */ "./node_modules/d3-selection/src/selection/on.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "event",
          function() {
            return _src_selection_on__WEBPACK_IMPORTED_MODULE_17__["event"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "customEvent",
          function() {
            return _src_selection_on__WEBPACK_IMPORTED_MODULE_17__[
              "customEvent"
            ];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-selection/src/constant.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return function() {
            return x;
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/create.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./creator */ "./node_modules/d3-selection/src/creator.js"
        );
        /* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./select */ "./node_modules/d3-selection/src/select.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          name
        ) {
          return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(
            Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(
              document.documentElement
            )
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/creator.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./namespace */ "./node_modules/d3-selection/src/namespace.js"
        );
        /* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js"
        );

        function creatorInherit(name) {
          return function() {
            var document = this.ownerDocument,
              uri = this.namespaceURI;
            return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] &&
              document.documentElement.namespaceURI ===
                _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
              ? document.createElement(name)
              : document.createElementNS(uri, name);
          };
        }

        function creatorFixed(fullname) {
          return function() {
            return this.ownerDocument.createElementNS(
              fullname.space,
              fullname.local
            );
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name
        ) {
          var fullname = Object(
            _namespace__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(name);
          return (fullname.local ? creatorFixed : creatorInherit)(fullname);
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/local.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return local;
          }
        );
        var nextId = 0;

        function local() {
          return new Local();
        }

        function Local() {
          this._ = "@" + (++nextId).toString(36);
        }

        Local.prototype = local.prototype = {
          constructor: Local,
          get: function(node) {
            var id = this._;
            while (!(id in node)) if (!(node = node.parentNode)) return;
            return node[id];
          },
          set: function(node, value) {
            return (node[this._] = value);
          },
          remove: function(node) {
            return this._ in node && delete node[this._];
          },
          toString: function() {
            return this._;
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/matcher.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var matcher = function(selector) {
          return function() {
            return this.matches(selector);
          };
        };

        if (typeof document !== "undefined") {
          var element = document.documentElement;
          if (!element.matches) {
            var vendorMatches =
              element.webkitMatchesSelector ||
              element.msMatchesSelector ||
              element.mozMatchesSelector ||
              element.oMatchesSelector;
            matcher = function(selector) {
              return function() {
                return vendorMatches.call(this, selector);
              };
            };
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = matcher;

        /***/
      },

    /***/ "./node_modules/d3-selection/src/mouse.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js"
        );
        /* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./point */ "./node_modules/d3-selection/src/point.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          node
        ) {
          var event = Object(
            _sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"]
          )();
          if (event.changedTouches) event = event.changedTouches[0];
          return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(
            node,
            event
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/namespace.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          name
        ) {
          var prefix = (name += ""),
            i = prefix.indexOf(":");
          if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
            name = name.slice(i + 1);
          return _namespaces__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].hasOwnProperty(prefix)
            ? {
                space:
                  _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix],
                local: name
              }
            : name;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/namespaces.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
      /*! exports provided: xhtml, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "xhtml",
          function() {
            return xhtml;
          }
        );
        var xhtml = "http://www.w3.org/1999/xhtml";

        /* harmony default export */ __webpack_exports__["default"] = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: xhtml,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/point.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          node,
          event
        ) {
          var svg = node.ownerSVGElement || node;

          if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            (point.x = event.clientX), (point.y = event.clientY);
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [point.x, point.y];
          }

          var rect = node.getBoundingClientRect();
          return [
            event.clientX - rect.left - node.clientLeft,
            event.clientY - rect.top - node.clientTop
          ];
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/select.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          selector
        ) {
          return typeof selector === "string"
            ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
                [[document.querySelector(selector)]],
                [document.documentElement]
              )
            : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
                [[selector]],
                _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]
              );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selectAll.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          selector
        ) {
          return typeof selector === "string"
            ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
                [document.querySelectorAll(selector)],
                [document.documentElement]
              )
            : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
                [selector == null ? [] : selector],
                _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]
              );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/append.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../creator */ "./node_modules/d3-selection/src/creator.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          name
        ) {
          var create =
            typeof name === "function"
              ? name
              : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
          return this.select(function() {
            return this.appendChild(create.apply(this, arguments));
          });
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/attr.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../namespace */ "./node_modules/d3-selection/src/namespace.js"
        );

        function attrRemove(name) {
          return function() {
            this.removeAttribute(name);
          };
        }

        function attrRemoveNS(fullname) {
          return function() {
            this.removeAttributeNS(fullname.space, fullname.local);
          };
        }

        function attrConstant(name, value) {
          return function() {
            this.setAttribute(name, value);
          };
        }

        function attrConstantNS(fullname, value) {
          return function() {
            this.setAttributeNS(fullname.space, fullname.local, value);
          };
        }

        function attrFunction(name, value) {
          return function() {
            var v = value.apply(this, arguments);
            if (v == null) this.removeAttribute(name);
            else this.setAttribute(name, v);
          };
        }

        function attrFunctionNS(fullname, value) {
          return function() {
            var v = value.apply(this, arguments);
            if (v == null)
              this.removeAttributeNS(fullname.space, fullname.local);
            else this.setAttributeNS(fullname.space, fullname.local, v);
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value
        ) {
          var fullname = Object(
            _namespace__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(name);

          if (arguments.length < 2) {
            var node = this.node();
            return fullname.local
              ? node.getAttributeNS(fullname.space, fullname.local)
              : node.getAttribute(fullname);
          }

          return this.each(
            (value == null
              ? fullname.local
                ? attrRemoveNS
                : attrRemove
              : typeof value === "function"
                ? fullname.local
                  ? attrFunctionNS
                  : attrFunction
                : fullname.local
                  ? attrConstantNS
                  : attrConstant)(fullname, value)
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/call.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var callback = arguments[0];
          arguments[0] = this;
          callback.apply(null, arguments);
          return this;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/classed.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function classArray(string) {
          return string.trim().split(/^|\s+/);
        }

        function classList(node) {
          return node.classList || new ClassList(node);
        }

        function ClassList(node) {
          this._node = node;
          this._names = classArray(node.getAttribute("class") || "");
        }

        ClassList.prototype = {
          add: function(name) {
            var i = this._names.indexOf(name);
            if (i < 0) {
              this._names.push(name);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          remove: function(name) {
            var i = this._names.indexOf(name);
            if (i >= 0) {
              this._names.splice(i, 1);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          contains: function(name) {
            return this._names.indexOf(name) >= 0;
          }
        };

        function classedAdd(node, names) {
          var list = classList(node),
            i = -1,
            n = names.length;
          while (++i < n) list.add(names[i]);
        }

        function classedRemove(node, names) {
          var list = classList(node),
            i = -1,
            n = names.length;
          while (++i < n) list.remove(names[i]);
        }

        function classedTrue(names) {
          return function() {
            classedAdd(this, names);
          };
        }

        function classedFalse(names) {
          return function() {
            classedRemove(this, names);
          };
        }

        function classedFunction(names, value) {
          return function() {
            (value.apply(this, arguments) ? classedAdd : classedRemove)(
              this,
              names
            );
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value
        ) {
          var names = classArray(name + "");

          if (arguments.length < 2) {
            var list = classList(this.node()),
              i = -1,
              n = names.length;
            while (++i < n) if (!list.contains(names[i])) return false;
            return true;
          }

          return this.each(
            (typeof value === "function"
              ? classedFunction
              : value
                ? classedTrue
                : classedFalse)(names, value)
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/clone.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function selection_cloneShallow() {
          return this.parentNode.insertBefore(
            this.cloneNode(false),
            this.nextSibling
          );
        }

        function selection_cloneDeep() {
          return this.parentNode.insertBefore(
            this.cloneNode(true),
            this.nextSibling
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          deep
        ) {
          return this.select(
            deep ? selection_cloneDeep : selection_cloneShallow
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/data.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );
        /* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../constant */ "./node_modules/d3-selection/src/constant.js"
        );

        var keyPrefix = "$"; // Protect against keys like “__proto__”.

        function bindIndex(parent, group, enter, update, exit, data) {
          var i = 0,
            node,
            groupLength = group.length,
            dataLength = data.length;

          // Put any non-null nodes that fit into update.
          // Put any null nodes into enter.
          // Put any remaining data into enter.
          for (; i < dataLength; ++i) {
            if ((node = group[i])) {
              node.__data__ = data[i];
              update[i] = node;
            } else {
              enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](
                parent,
                data[i]
              );
            }
          }

          // Put any non-null nodes that don’t fit into exit.
          for (; i < groupLength; ++i) {
            if ((node = group[i])) {
              exit[i] = node;
            }
          }
        }

        function bindKey(parent, group, enter, update, exit, data, key) {
          var i,
            node,
            nodeByKeyValue = {},
            groupLength = group.length,
            dataLength = data.length,
            keyValues = new Array(groupLength),
            keyValue;

          // Compute the key for each node.
          // If multiple nodes have the same key, the duplicates are added to exit.
          for (i = 0; i < groupLength; ++i) {
            if ((node = group[i])) {
              keyValues[i] = keyValue =
                keyPrefix + key.call(node, node.__data__, i, group);
              if (keyValue in nodeByKeyValue) {
                exit[i] = node;
              } else {
                nodeByKeyValue[keyValue] = node;
              }
            }
          }

          // Compute the key for each datum.
          // If there a node associated with this key, join and add it to update.
          // If there is not (or the key is a duplicate), add it to enter.
          for (i = 0; i < dataLength; ++i) {
            keyValue = keyPrefix + key.call(parent, data[i], i, data);
            if ((node = nodeByKeyValue[keyValue])) {
              update[i] = node;
              node.__data__ = data[i];
              nodeByKeyValue[keyValue] = null;
            } else {
              enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](
                parent,
                data[i]
              );
            }
          }

          // Add any remaining nodes that were not bound to data to exit.
          for (i = 0; i < groupLength; ++i) {
            if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
              exit[i] = node;
            }
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value,
          key
        ) {
          if (!value) {
            (data = new Array(this.size())), (j = -1);
            this.each(function(d) {
              data[++j] = d;
            });
            return data;
          }

          var bind = key ? bindKey : bindIndex,
            parents = this._parents,
            groups = this._groups;

          if (typeof value !== "function")
            value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(
              value
            );

          for (
            var m = groups.length,
              update = new Array(m),
              enter = new Array(m),
              exit = new Array(m),
              j = 0;
            j < m;
            ++j
          ) {
            var parent = parents[j],
              group = groups[j],
              groupLength = group.length,
              data = value.call(parent, parent && parent.__data__, j, parents),
              dataLength = data.length,
              enterGroup = (enter[j] = new Array(dataLength)),
              updateGroup = (update[j] = new Array(dataLength)),
              exitGroup = (exit[j] = new Array(groupLength));

            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
              if ((previous = enterGroup[i0])) {
                if (i0 >= i1) i1 = i0 + 1;
                while (!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
              }
            }
          }

          update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
            update,
            parents
          );
          update._enter = enter;
          update._exit = exit;
          return update;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/datum.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          return arguments.length
            ? this.property("__data__", value)
            : this.node().__data__;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/dispatch.js":
      /*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../window */ "./node_modules/d3-selection/src/window.js"
        );

        function dispatchEvent(node, type, params) {
          var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(
              node
            ),
            event = window.CustomEvent;

          if (typeof event === "function") {
            event = new event(type, params);
          } else {
            event = window.document.createEvent("Event");
            if (params)
              event.initEvent(type, params.bubbles, params.cancelable),
                (event.detail = params.detail);
            else event.initEvent(type, false, false);
          }

          node.dispatchEvent(event);
        }

        function dispatchConstant(type, params) {
          return function() {
            return dispatchEvent(this, type, params);
          };
        }

        function dispatchFunction(type, params) {
          return function() {
            return dispatchEvent(this, type, params.apply(this, arguments));
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          type,
          params
        ) {
          return this.each(
            (typeof params === "function"
              ? dispatchFunction
              : dispatchConstant)(type, params)
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/each.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          callback
        ) {
          for (
            var groups = this._groups, j = 0, m = groups.length;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j], i = 0, n = group.length, node;
              i < n;
              ++i
            ) {
              if ((node = group[i]))
                callback.call(node, node.__data__, i, group);
            }
          }

          return this;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/empty.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return !this.node();
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/enter.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
      /*! exports provided: default, EnterNode */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EnterNode",
          function() {
            return EnterNode;
          }
        );
        /* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js"
        );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](
            this._enter ||
              this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]),
            this._parents
          );
        };

        function EnterNode(parent, datum) {
          this.ownerDocument = parent.ownerDocument;
          this.namespaceURI = parent.namespaceURI;
          this._next = null;
          this._parent = parent;
          this.__data__ = datum;
        }

        EnterNode.prototype = {
          constructor: EnterNode,
          appendChild: function(child) {
            return this._parent.insertBefore(child, this._next);
          },
          insertBefore: function(child, next) {
            return this._parent.insertBefore(child, next);
          },
          querySelector: function(selector) {
            return this._parent.querySelector(selector);
          },
          querySelectorAll: function(selector) {
            return this._parent.querySelectorAll(selector);
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/exit.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js"
        );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](
            this._exit ||
              this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]),
            this._parents
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/filter.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );
        /* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../matcher */ "./node_modules/d3-selection/src/matcher.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          match
        ) {
          if (typeof match !== "function")
            match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(
              match
            );

          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j],
                n = group.length,
                subgroup = (subgroups[j] = []),
                node,
                i = 0;
              i < n;
              ++i
            ) {
              if (
                (node = group[i]) &&
                match.call(node, node.__data__, i, group)
              ) {
                subgroup.push(node);
              }
            }
          }

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
            subgroups,
            this._parents
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/html.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function htmlRemove() {
          this.innerHTML = "";
        }

        function htmlConstant(value) {
          return function() {
            this.innerHTML = value;
          };
        }

        function htmlFunction(value) {
          return function() {
            var v = value.apply(this, arguments);
            this.innerHTML = v == null ? "" : v;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          return arguments.length
            ? this.each(
                value == null
                  ? htmlRemove
                  : (typeof value === "function" ? htmlFunction : htmlConstant)(
                      value
                    )
              )
            : this.node().innerHTML;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/index.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
      /*! exports provided: root, Selection, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "root",
          function() {
            return root;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Selection",
          function() {
            return Selection;
          }
        );
        /* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./select */ "./node_modules/d3-selection/src/selection/select.js"
        );
        /* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js"
        );
        /* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js"
        );
        /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./data */ "./node_modules/d3-selection/src/selection/data.js"
        );
        /* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js"
        );
        /* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js"
        );
        /* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js"
        );
        /* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./order */ "./node_modules/d3-selection/src/selection/order.js"
        );
        /* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js"
        );
        /* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./call */ "./node_modules/d3-selection/src/selection/call.js"
        );
        /* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js"
        );
        /* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./node */ "./node_modules/d3-selection/src/selection/node.js"
        );
        /* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./size */ "./node_modules/d3-selection/src/selection/size.js"
        );
        /* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js"
        );
        /* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./each */ "./node_modules/d3-selection/src/selection/each.js"
        );
        /* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js"
        );
        /* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./style */ "./node_modules/d3-selection/src/selection/style.js"
        );
        /* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./property */ "./node_modules/d3-selection/src/selection/property.js"
        );
        /* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js"
        );
        /* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./text */ "./node_modules/d3-selection/src/selection/text.js"
        );
        /* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./html */ "./node_modules/d3-selection/src/selection/html.js"
        );
        /* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js"
        );
        /* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js"
        );
        /* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./append */ "./node_modules/d3-selection/src/selection/append.js"
        );
        /* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js"
        );
        /* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js"
        );
        /* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js"
        );
        /* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js"
        );
        /* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./on */ "./node_modules/d3-selection/src/selection/on.js"
        );
        /* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js"
        );

        var root = [null];

        function Selection(groups, parents) {
          this._groups = groups;
          this._parents = parents;
        }

        function selection() {
          return new Selection([[document.documentElement]], root);
        }

        Selection.prototype = selection.prototype = {
          constructor: Selection,
          select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
          selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
          filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
          data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
          enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
          exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
          merge: _merge__WEBPACK_IMPORTED_MODULE_6__["default"],
          order: _order__WEBPACK_IMPORTED_MODULE_7__["default"],
          sort: _sort__WEBPACK_IMPORTED_MODULE_8__["default"],
          call: _call__WEBPACK_IMPORTED_MODULE_9__["default"],
          nodes: _nodes__WEBPACK_IMPORTED_MODULE_10__["default"],
          node: _node__WEBPACK_IMPORTED_MODULE_11__["default"],
          size: _size__WEBPACK_IMPORTED_MODULE_12__["default"],
          empty: _empty__WEBPACK_IMPORTED_MODULE_13__["default"],
          each: _each__WEBPACK_IMPORTED_MODULE_14__["default"],
          attr: _attr__WEBPACK_IMPORTED_MODULE_15__["default"],
          style: _style__WEBPACK_IMPORTED_MODULE_16__["default"],
          property: _property__WEBPACK_IMPORTED_MODULE_17__["default"],
          classed: _classed__WEBPACK_IMPORTED_MODULE_18__["default"],
          text: _text__WEBPACK_IMPORTED_MODULE_19__["default"],
          html: _html__WEBPACK_IMPORTED_MODULE_20__["default"],
          raise: _raise__WEBPACK_IMPORTED_MODULE_21__["default"],
          lower: _lower__WEBPACK_IMPORTED_MODULE_22__["default"],
          append: _append__WEBPACK_IMPORTED_MODULE_23__["default"],
          insert: _insert__WEBPACK_IMPORTED_MODULE_24__["default"],
          remove: _remove__WEBPACK_IMPORTED_MODULE_25__["default"],
          clone: _clone__WEBPACK_IMPORTED_MODULE_26__["default"],
          datum: _datum__WEBPACK_IMPORTED_MODULE_27__["default"],
          on: _on__WEBPACK_IMPORTED_MODULE_28__["default"],
          dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_29__["default"]
        };

        /* harmony default export */ __webpack_exports__["default"] = selection;

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/insert.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../creator */ "./node_modules/d3-selection/src/creator.js"
        );
        /* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../selector */ "./node_modules/d3-selection/src/selector.js"
        );

        function constantNull() {
          return null;
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          before
        ) {
          var create =
              typeof name === "function"
                ? name
                : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    name
                  ),
            select =
              before == null
                ? constantNull
                : typeof before === "function"
                  ? before
                  : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(
                      before
                    );
          return this.select(function() {
            return this.insertBefore(
              create.apply(this, arguments),
              select.apply(this, arguments) || null
            );
          });
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/lower.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function lower() {
          if (this.previousSibling)
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return this.each(lower);
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/merge.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          selection
        ) {
          for (
            var groups0 = this._groups,
              groups1 = selection._groups,
              m0 = groups0.length,
              m1 = groups1.length,
              m = Math.min(m0, m1),
              merges = new Array(m0),
              j = 0;
            j < m;
            ++j
          ) {
            for (
              var group0 = groups0[j],
                group1 = groups1[j],
                n = group0.length,
                merge = (merges[j] = new Array(n)),
                node,
                i = 0;
              i < n;
              ++i
            ) {
              if ((node = group0[i] || group1[i])) {
                merge[i] = node;
              }
            }
          }

          for (; j < m0; ++j) {
            merges[j] = groups0[j];
          }

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
            merges,
            this._parents
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/node.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          for (
            var groups = this._groups, j = 0, m = groups.length;
            j < m;
            ++j
          ) {
            for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
              var node = group[i];
              if (node) return node;
            }
          }

          return null;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/nodes.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var nodes = new Array(this.size()),
            i = -1;
          this.each(function() {
            nodes[++i] = this;
          });
          return nodes;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/on.js":
      /*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
      /*! exports provided: event, default, customEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "event",
          function() {
            return event;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "customEvent",
          function() {
            return customEvent;
          }
        );
        var filterEvents = {};

        var event = null;

        if (typeof document !== "undefined") {
          var element = document.documentElement;
          if (!("onmouseenter" in element)) {
            filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
          }
        }

        function filterContextListener(listener, index, group) {
          listener = contextListener(listener, index, group);
          return function(event) {
            var related = event.relatedTarget;
            if (
              !related ||
              (related !== this && !(related.compareDocumentPosition(this) & 8))
            ) {
              listener.call(this, event);
            }
          };
        }

        function contextListener(listener, index, group) {
          return function(event1) {
            var event0 = event; // Events can be reentrant (e.g., focus).
            event = event1;
            try {
              listener.call(this, this.__data__, index, group);
            } finally {
              event = event0;
            }
          };
        }

        function parseTypenames(typenames) {
          return typenames
            .trim()
            .split(/^|\s+/)
            .map(function(t) {
              var name = "",
                i = t.indexOf(".");
              if (i >= 0) (name = t.slice(i + 1)), (t = t.slice(0, i));
              return {type: t, name: name};
            });
        }

        function onRemove(typename) {
          return function() {
            var on = this.__on;
            if (!on) return;
            for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
              if (
                ((o = on[j]),
                (!typename.type || o.type === typename.type) &&
                  o.name === typename.name)
              ) {
                this.removeEventListener(o.type, o.listener, o.capture);
              } else {
                on[++i] = o;
              }
            }
            if (++i) on.length = i;
            else delete this.__on;
          };
        }

        function onAdd(typename, value, capture) {
          var wrap = filterEvents.hasOwnProperty(typename.type)
            ? filterContextListener
            : contextListener;
          return function(d, i, group) {
            var on = this.__on,
              o,
              listener = wrap(value, i, group);
            if (on)
              for (var j = 0, m = on.length; j < m; ++j) {
                if (
                  (o = on[j]).type === typename.type &&
                  o.name === typename.name
                ) {
                  this.removeEventListener(o.type, o.listener, o.capture);
                  this.addEventListener(
                    o.type,
                    (o.listener = listener),
                    (o.capture = capture)
                  );
                  o.value = value;
                  return;
                }
              }
            this.addEventListener(typename.type, listener, capture);
            o = {
              type: typename.type,
              name: typename.name,
              value: value,
              listener: listener,
              capture: capture
            };
            if (!on) this.__on = [o];
            else on.push(o);
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          typename,
          value,
          capture
        ) {
          var typenames = parseTypenames(typename + ""),
            i,
            n = typenames.length,
            t;

          if (arguments.length < 2) {
            var on = this.node().__on;
            if (on)
              for (var j = 0, m = on.length, o; j < m; ++j) {
                for (i = 0, o = on[j]; i < n; ++i) {
                  if ((t = typenames[i]).type === o.type && t.name === o.name) {
                    return o.value;
                  }
                }
              }
            return;
          }

          on = value ? onAdd : onRemove;
          if (capture == null) capture = false;
          for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
          return this;
        };

        function customEvent(event1, listener, that, args) {
          var event0 = event;
          event1.sourceEvent = event;
          event = event1;
          try {
            return listener.apply(that, args);
          } finally {
            event = event0;
          }
        }

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/order.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          for (
            var groups = this._groups, j = -1, m = groups.length;
            ++j < m;

          ) {
            for (
              var group = groups[j],
                i = group.length - 1,
                next = group[i],
                node;
              --i >= 0;

            ) {
              if ((node = group[i])) {
                if (next && next !== node.nextSibling)
                  next.parentNode.insertBefore(node, next);
                next = node;
              }
            }
          }

          return this;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/property.js":
      /*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function propertyRemove(name) {
          return function() {
            delete this[name];
          };
        }

        function propertyConstant(name, value) {
          return function() {
            this[name] = value;
          };
        }

        function propertyFunction(name, value) {
          return function() {
            var v = value.apply(this, arguments);
            if (v == null) delete this[name];
            else this[name] = v;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value
        ) {
          return arguments.length > 1
            ? this.each(
                (value == null
                  ? propertyRemove
                  : typeof value === "function"
                    ? propertyFunction
                    : propertyConstant)(name, value)
              )
            : this.node()[name];
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/raise.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function raise() {
          if (this.nextSibling) this.parentNode.appendChild(this);
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return this.each(raise);
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/remove.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function remove() {
          var parent = this.parentNode;
          if (parent) parent.removeChild(this);
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return this.each(remove);
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/select.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );
        /* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../selector */ "./node_modules/d3-selection/src/selector.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          select
        ) {
          if (typeof select !== "function")
            select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(
              select
            );

          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j],
                n = group.length,
                subgroup = (subgroups[j] = new Array(n)),
                node,
                subnode,
                i = 0;
              i < n;
              ++i
            ) {
              if (
                (node = group[i]) &&
                (subnode = select.call(node, node.__data__, i, group))
              ) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
              }
            }
          }

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
            subgroups,
            this._parents
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/selectAll.js":
      /*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );
        /* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          select
        ) {
          if (typeof select !== "function")
            select = Object(
              _selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"]
            )(select);

          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = [],
              parents = [],
              j = 0;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j], n = group.length, node, i = 0;
              i < n;
              ++i
            ) {
              if ((node = group[i])) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
              }
            }
          }

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
            subgroups,
            parents
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/size.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var size = 0;
          this.each(function() {
            ++size;
          });
          return size;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/sort.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-selection/src/selection/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          compare
        ) {
          if (!compare) compare = ascending;

          function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
          }

          for (
            var groups = this._groups,
              m = groups.length,
              sortgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j],
                n = group.length,
                sortgroup = (sortgroups[j] = new Array(n)),
                node,
                i = 0;
              i < n;
              ++i
            ) {
              if ((node = group[i])) {
                sortgroup[i] = node;
              }
            }
            sortgroup.sort(compareNode);
          }

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](
            sortgroups,
            this._parents
          ).order();
        };

        function ascending(a, b) {
          return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/sparse.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          update
        ) {
          return new Array(update.length);
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/style.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
      /*! exports provided: default, styleValue */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "styleValue",
          function() {
            return styleValue;
          }
        );
        /* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../window */ "./node_modules/d3-selection/src/window.js"
        );

        function styleRemove(name) {
          return function() {
            this.style.removeProperty(name);
          };
        }

        function styleConstant(name, value, priority) {
          return function() {
            this.style.setProperty(name, value, priority);
          };
        }

        function styleFunction(name, value, priority) {
          return function() {
            var v = value.apply(this, arguments);
            if (v == null) this.style.removeProperty(name);
            else this.style.setProperty(name, v, priority);
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value,
          priority
        ) {
          return arguments.length > 1
            ? this.each(
                (value == null
                  ? styleRemove
                  : typeof value === "function"
                    ? styleFunction
                    : styleConstant)(
                  name,
                  value,
                  priority == null ? "" : priority
                )
              )
            : styleValue(this.node(), name);
        };

        function styleValue(node, name) {
          return (
            node.style.getPropertyValue(name) ||
            Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node)
              .getComputedStyle(node, null)
              .getPropertyValue(name)
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selection/text.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function textRemove() {
          this.textContent = "";
        }

        function textConstant(value) {
          return function() {
            this.textContent = value;
          };
        }

        function textFunction(value) {
          return function() {
            var v = value.apply(this, arguments);
            this.textContent = v == null ? "" : v;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          return arguments.length
            ? this.each(
                value == null
                  ? textRemove
                  : (typeof value === "function" ? textFunction : textConstant)(
                      value
                    )
              )
            : this.node().textContent;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selector.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function none() {}

        /* harmony default export */ __webpack_exports__["default"] = function(
          selector
        ) {
          return selector == null
            ? none
            : function() {
                return this.querySelector(selector);
              };
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/selectorAll.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function empty() {
          return [];
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          selector
        ) {
          return selector == null
            ? empty
            : function() {
                return this.querySelectorAll(selector);
              };
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/sourceEvent.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"],
            source;
          while ((source = current.sourceEvent)) current = source;
          return current;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/touch.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js"
        );
        /* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./point */ "./node_modules/d3-selection/src/point.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          node,
          touches,
          identifier
        ) {
          if (arguments.length < 3)
            (identifier = touches),
              (touches = Object(
                _sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"]
              )().changedTouches);

          for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
              return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(
                node,
                touch
              );
            }
          }

          return null;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/touches.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js"
        );
        /* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./point */ "./node_modules/d3-selection/src/point.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          node,
          touches
        ) {
          if (touches == null)
            touches = Object(
              _sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"]
            )().touches;

          for (
            var i = 0, n = touches ? touches.length : 0, points = new Array(n);
            i < n;
            ++i
          ) {
            points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(
              node,
              touches[i]
            );
          }

          return points;
        };

        /***/
      },

    /***/ "./node_modules/d3-selection/src/window.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          node
        ) {
          return (
            (node.ownerDocument && node.ownerDocument.defaultView) || // node is a Node
            (node.document && node) || // node is a Window
            node.defaultView
          ); // node is a Document
        };

        /***/
      },

    /***/ "./src/localStorage/LocalStorage.ts":
      /*!******************************************!*\
  !*** ./src/localStorage/LocalStorage.ts ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 28.03.18 16:21
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        exports.LOCAL_STORAGE_NOT_AVAILABLE =
          "window.localStorage is not available";
        exports.KEY_NOT_FOUND = "Key '{{}}' was not found in the local storage";
        function isAvailable() {
          return window.localStorage != null;
        }
        exports.isAvailable = isAvailable;
        function hasKey(key) {
          if (!isAvailable()) {
            return false;
          }
          return window.localStorage.getItem(key) !== null;
        }
        exports.hasKey = hasKey;
        function getOrThrow(key) {
          if (!isAvailable() || !hasKey(key)) {
            throw new Error(exports.KEY_NOT_FOUND.replace("{{}}", key));
          }
          return window.localStorage.getItem(key);
        }
        exports.getOrThrow = getOrThrow;
        function getOrElse(key, defaultValue) {
          if (!isAvailable() || !hasKey(key)) {
            return defaultValue;
          }
          return window.localStorage.getItem(key);
        }
        exports.getOrElse = getOrElse;
        function setItem(key, data) {
          if (!isAvailable()) {
            throw new Error(exports.LOCAL_STORAGE_NOT_AVAILABLE);
          }
          window.localStorage.setItem(key, data);
        }
        exports.setItem = setItem;
        function setItemIfNull(key, data) {
          if (!isAvailable()) {
            throw new Error(exports.LOCAL_STORAGE_NOT_AVAILABLE);
          }
          if (!hasKey(key)) {
            window.localStorage.setItem(key, data);
            return true;
          }
          return false;
        }
        exports.setItemIfNull = setItemIfNull;

        /***/
      },

    /***/ "./src/localStorage/TypedLocalStorage.ts":
      /*!***********************************************!*\
  !*** ./src/localStorage/TypedLocalStorage.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 03.04.18 13:40
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var local = __webpack_require__(
          /*! ./LocalStorage */ "./src/localStorage/LocalStorage.ts"
        );
        function isAvailable() {
          return local.isAvailable();
        }
        exports.isAvailable = isAvailable;
        function hasKey(key) {
          return local.hasKey(key);
        }
        exports.hasKey = hasKey;
        function getOrThrow(key) {
          return JSON.parse(local.getOrThrow(key));
        }
        exports.getOrThrow = getOrThrow;
        function getOrElse(key, defaultValue) {
          if (!isAvailable() || !hasKey(key)) {
            return defaultValue;
          }
          var defaultJson = JSON.stringify(defaultValue);
          return JSON.parse(local.getOrElse(key, defaultJson));
        }
        exports.getOrElse = getOrElse;
        function setItem(key, data) {
          local.setItem(key, JSON.stringify(data));
        }
        exports.setItem = setItem;
        function setItemIfNull(key, data) {
          return local.setItemIfNull(key, JSON.stringify(data));
        }
        exports.setItemIfNull = setItemIfNull;

        /***/
      },

    /***/ "./src/localStorage/helpers.ts":
      /*!*************************************!*\
  !*** ./src/localStorage/helpers.ts ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /*
 * Created by Clemens Gläser on 03.04.18 17:26
 */
        var setupDefaults_1 = __webpack_require__(
          /*! ./setupDefaults */ "./src/localStorage/setupDefaults.ts"
        );
        var TypedLocalStorage_1 = __webpack_require__(
          /*! ./TypedLocalStorage */ "./src/localStorage/TypedLocalStorage.ts"
        );
        function get(key, defaultValue) {
          if (!setupDefaults_1.mapOfDefaults.has(key) && !defaultValue) {
            throw new Error(
              "Key '" +
                key +
                "' has no default registered and no default value specified!"
            );
          }
          var def = setupDefaults_1.mapOfDefaults.has(key)
            ? setupDefaults_1.mapOfDefaults.get(key).value
            : defaultValue;
          return TypedLocalStorage_1.getOrElse(key, def);
        }
        exports.get = get;
        function allLocalStorageKeys() {
          var result = [];
          for (var key in window.localStorage) {
            if (
              window.localStorage.hasOwnProperty(key) &&
              key.lastIndexOf("webpack") === -1
            ) {
              result.push(key);
            }
          }
          return result;
        }
        exports.allLocalStorageKeys = allLocalStorageKeys;

        /***/
      },

    /***/ "./src/localStorage/keys.ts":
      /*!**********************************!*\
  !*** ./src/localStorage/keys.ts ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 03.04.18 17:18
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var DiskSpaceAnimatorKeys;
        (function(DiskSpaceAnimatorKeys) {
          DiskSpaceAnimatorKeys["OLD_PIE"] = "diskSpaceAnimators--oldPie";
          DiskSpaceAnimatorKeys["DISK_USAGE"] = "diskSpaceAnimators--diskUsage";
          DiskSpaceAnimatorKeys["FIXED_SEGMENTS"] =
            "diskSpaceAnimators--fixedSegments";
        })(
          (DiskSpaceAnimatorKeys =
            exports.DiskSpaceAnimatorKeys ||
            (exports.DiskSpaceAnimatorKeys = {}))
        );
        var LocalStorageKeys;
        (function(LocalStorageKeys) {
          LocalStorageKeys["MEMORY_ENABLED"] = "memory--enabled";
          LocalStorageKeys["MEMORY_SIZE"] = "memory--size";
          LocalStorageKeys["DISK_ENABLED"] = "disk--enabled";
          LocalStorageKeys["DISK_SIZE"] = "disk--size";
          LocalStorageKeys["DISK_SIZE_PER_BLOCK"] = "disk--sizePerBlock";
          LocalStorageKeys["SWAPPING_ENABLED"] = "swapping--enabled";
          LocalStorageKeys["VISUALS_SELECTED_DISK_SPACE_ANIMATOR"] =
            "visuals--selectedDiskSpaceAnimator";
        })(
          (LocalStorageKeys =
            exports.LocalStorageKeys || (exports.LocalStorageKeys = {}))
        );

        /***/
      },

    /***/ "./src/localStorage/setupDefaults.ts":
      /*!*******************************************!*\
  !*** ./src/localStorage/setupDefaults.ts ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 29.03.18 14:23
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_collection_1 = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        var keys_1 = __webpack_require__(
          /*! ./keys */ "./src/localStorage/keys.ts"
        );
        var TypedLocalStorage_1 = __webpack_require__(
          /*! ./TypedLocalStorage */ "./src/localStorage/TypedLocalStorage.ts"
        );
        function setupLocalStorageDefaults() {
          exports.mapOfDefaults.each(function(value, key) {
            return TypedLocalStorage_1.setItemIfNull(key, value.value);
          });
        }
        exports.setupLocalStorageDefaults = setupLocalStorageDefaults;
        function createDefaults() {
          var defaults = d3_collection_1.map();
          defaults
            .set(keys_1.LocalStorageKeys.MEMORY_ENABLED, {
              type: "boolean",
              value: true
            })
            .set(keys_1.LocalStorageKeys.MEMORY_SIZE, {
              type: "number",
              value: 1000
            })
            .set(keys_1.LocalStorageKeys.DISK_ENABLED, {
              type: "boolean",
              value: true
            })
            .set(keys_1.LocalStorageKeys.DISK_SIZE, {
              type: "number",
              value: 1000
            })
            .set(keys_1.LocalStorageKeys.DISK_SIZE_PER_BLOCK, {
              type: "number",
              value: 4
            })
            .set(keys_1.LocalStorageKeys.SWAPPING_ENABLED, {
              type: "boolean",
              value: true
            })
            .set(keys_1.LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR, {
              type: "string",
              value: keys_1.DiskSpaceAnimatorKeys.FIXED_SEGMENTS
            });
          return defaults;
        }
        exports.mapOfDefaults = createDefaults();
        function restoreLocalStorageDefaults() {
          exports.mapOfDefaults.each(function(value, key) {
            return TypedLocalStorage_1.setItem(key, value.value);
          });
        }
        exports.restoreLocalStorageDefaults = restoreLocalStorageDefaults;
        setupLocalStorageDefaults();

        /***/
      },

    /***/ "./src/settings/formListeners.ts":
      /*!***************************************!*\
  !*** ./src/settings/formListeners.ts ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 26.03.18 15:29
 *
 * This file sets up the form event listeners for settings.html
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var helpers_1 = __webpack_require__(
          /*! ../localStorage/helpers */ "./src/localStorage/helpers.ts"
        );
        var keys_1 = __webpack_require__(
          /*! ../localStorage/keys */ "./src/localStorage/keys.ts"
        );
        var TypedLocalStorage_1 = __webpack_require__(
          /*! ../localStorage/TypedLocalStorage */ "./src/localStorage/TypedLocalStorage.ts"
        );
        d3_selection_1.select("#formGeneral").on("submit", function() {
          d3_selection_1.event.preventDefault();
          return false;
        });
        d3_selection_1.select("#formMemory").on("submit", function() {
          var isEnabled = d3_selection_1.select("#memoryEnabled").node()
            .checked;
          var swappingEnabled = d3_selection_1.select("#swappingEnabled").node()
            .checked;
          var size = d3_selection_1.select("#memorySize").node().valueAsNumber;
          TypedLocalStorage_1.setItem(
            keys_1.LocalStorageKeys.MEMORY_ENABLED,
            isEnabled
          );
          TypedLocalStorage_1.setItem(
            keys_1.LocalStorageKeys.SWAPPING_ENABLED,
            swappingEnabled
          );
          TypedLocalStorage_1.setItem(
            keys_1.LocalStorageKeys.MEMORY_SIZE,
            size
          );
          d3_selection_1.event.preventDefault();
          return false;
        });
        d3_selection_1.select("#formDisk").on("submit", function() {
          var isEnabled = d3_selection_1.select("#diskEnabled").node().checked;
          var size = d3_selection_1.select("#diskSize").node().valueAsNumber;
          var sizePerBlock = d3_selection_1.select("#diskSizePerBlock").node()
            .valueAsNumber;
          TypedLocalStorage_1.setItem(
            keys_1.LocalStorageKeys.DISK_ENABLED,
            isEnabled
          );
          TypedLocalStorage_1.setItem(keys_1.LocalStorageKeys.DISK_SIZE, size);
          TypedLocalStorage_1.setItem(
            keys_1.LocalStorageKeys.DISK_SIZE_PER_BLOCK,
            sizePerBlock
          );
          d3_selection_1.event.preventDefault();
          return false;
        });
        d3_selection_1.select("#formVisuals").on("submit", function() {
          var selected = d3_selection_1
            .select("#visualsDiskSpaceAnimator")
            .node().value;
          TypedLocalStorage_1.setItem(
            keys_1.LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR,
            selected
          );
          d3_selection_1.event.preventDefault();
          return false;
        });
        var boolToChecked = function(bool) {
          return bool ? "checked" : null;
        };
        function setFormStateFromLocalStorage() {
          var memoryEnabled = helpers_1.get(
            keys_1.LocalStorageKeys.MEMORY_ENABLED
          );
          d3_selection_1.select("#memoryEnabled").attr("checked", function() {
            return boolToChecked(memoryEnabled);
          });
          var swappingEnabled = helpers_1.get(
            keys_1.LocalStorageKeys.SWAPPING_ENABLED
          );
          d3_selection_1.select("#swappingEnabled").attr("checked", function() {
            return boolToChecked(swappingEnabled);
          });
          d3_selection_1
            .select("#memorySize")
            .attr("value", helpers_1.get(keys_1.LocalStorageKeys.MEMORY_SIZE));
          var diskEnabled = helpers_1.get(keys_1.LocalStorageKeys.DISK_ENABLED);
          d3_selection_1.select("#diskEnabled").attr("checked", function() {
            return boolToChecked(diskEnabled);
          });
          d3_selection_1
            .select("#diskSize")
            .attr("value", helpers_1.get(keys_1.LocalStorageKeys.DISK_SIZE));
          d3_selection_1
            .select("#diskSizePerBlock")
            .attr(
              "value",
              helpers_1.get(keys_1.LocalStorageKeys.DISK_SIZE_PER_BLOCK)
            );
          var selectedDiskSpaceAnimator = helpers_1.get(
            keys_1.LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR
          );
          d3_selection_1
            .select("#visualsDiskSpaceAnimator")
            .selectAll("option")
            .attr("selected", function() {
              return this.value === selectedDiskSpaceAnimator
                ? "selected"
                : null;
            });
        }
        exports.setFormStateFromLocalStorage = setFormStateFromLocalStorage;

        /***/
      },

    /***/ "./src/settings/index.ts":
      /*!*******************************!*\
  !*** ./src/settings/index.ts ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /*
 * Created by Clemens Gläser on 26.03.18 12:12
 *
 * This is the entry file for the settings.html page.
 */
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var setupDefaults_1 = __webpack_require__(
          /*! ../localStorage/setupDefaults */ "./src/localStorage/setupDefaults.ts"
        );
        var formListeners_1 = __webpack_require__(
          /*! ./formListeners */ "./src/settings/formListeners.ts"
        );
        d3_selection_1.select("#btnBack").on("click", function() {
          window.location.href = "/scheduling.html";
        });
        d3_selection_1.select("#btnRestoreDefaults").on("click", function() {
          var yes = confirm("Are you sure you want to restore the defaults?");
          if (yes) {
            setupDefaults_1.restoreLocalStorageDefaults();
            formListeners_1.setFormStateFromLocalStorage();
          }
        });
        var categories = ["General", "Memory", "Disk", "Visuals"];
        // btnCatGeneral is the button opening a category
        categories.forEach(function(v) {
          d3_selection_1.select("#btnCat" + v).on("click", function() {
            return handleCategoryButton(v);
          });
        });
        function handleCategoryButton(category) {
          // hide all category containers
          d3_selection_1
            .selectAll(".container-settings")
            .classed("hidden", true);
          // open / show selected category
          d3_selection_1.select("#opts" + category).classed("hidden", false);
          // switch selected button to be active
          d3_selection_1
            .selectAll(".categories>li>button")
            .classed("active", false);
          d3_selection_1.select("#btnCat" + category).classed("active", true);
        }
        formListeners_1.setFormStateFromLocalStorage();

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=settings.bundle.js.map
