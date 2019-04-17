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
    (__webpack_require__.s = "./src/scheduling.ts")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/d3-array/index.js":
      /*!****************************************!*\
  !*** ./node_modules/d3-array/index.js ***!
  \****************************************/
      /*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/bisect */ "./node_modules/d3-array/src/bisect.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "bisect",
          function() {
            return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "bisectRight",
          function() {
            return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "bisectLeft",
          function() {
            return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"];
          }
        );

        /* harmony import */ var _src_ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/ascending */ "./node_modules/d3-array/src/ascending.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "ascending",
          function() {
            return _src_ascending__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/bisector */ "./node_modules/d3-array/src/bisector.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "bisector",
          function() {
            return _src_bisector__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/cross */ "./node_modules/d3-array/src/cross.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "cross",
          function() {
            return _src_cross__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/descending */ "./node_modules/d3-array/src/descending.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "descending",
          function() {
            return _src_descending__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony import */ var _src_deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/deviation */ "./node_modules/d3-array/src/deviation.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "deviation",
          function() {
            return _src_deviation__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony import */ var _src_extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/extent */ "./node_modules/d3-array/src/extent.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "extent",
          function() {
            return _src_extent__WEBPACK_IMPORTED_MODULE_6__["default"];
          }
        );

        /* harmony import */ var _src_histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/histogram */ "./node_modules/d3-array/src/histogram.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "histogram",
          function() {
            return _src_histogram__WEBPACK_IMPORTED_MODULE_7__["default"];
          }
        );

        /* harmony import */ var _src_threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "thresholdFreedmanDiaconis",
          function() {
            return _src_threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "thresholdScott",
          function() {
            return _src_threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"];
          }
        );

        /* harmony import */ var _src_threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./src/threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "thresholdSturges",
          function() {
            return _src_threshold_sturges__WEBPACK_IMPORTED_MODULE_10__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./src/max */ "./node_modules/d3-array/src/max.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "max",
          function() {
            return _src_max__WEBPACK_IMPORTED_MODULE_11__["default"];
          }
        );

        /* harmony import */ var _src_mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./src/mean */ "./node_modules/d3-array/src/mean.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "mean",
          function() {
            return _src_mean__WEBPACK_IMPORTED_MODULE_12__["default"];
          }
        );

        /* harmony import */ var _src_median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./src/median */ "./node_modules/d3-array/src/median.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "median",
          function() {
            return _src_median__WEBPACK_IMPORTED_MODULE_13__["default"];
          }
        );

        /* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./src/merge */ "./node_modules/d3-array/src/merge.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "merge",
          function() {
            return _src_merge__WEBPACK_IMPORTED_MODULE_14__["default"];
          }
        );

        /* harmony import */ var _src_min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./src/min */ "./node_modules/d3-array/src/min.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "min",
          function() {
            return _src_min__WEBPACK_IMPORTED_MODULE_15__["default"];
          }
        );

        /* harmony import */ var _src_pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./src/pairs */ "./node_modules/d3-array/src/pairs.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "pairs",
          function() {
            return _src_pairs__WEBPACK_IMPORTED_MODULE_16__["default"];
          }
        );

        /* harmony import */ var _src_permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./src/permute */ "./node_modules/d3-array/src/permute.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "permute",
          function() {
            return _src_permute__WEBPACK_IMPORTED_MODULE_17__["default"];
          }
        );

        /* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./src/quantile */ "./node_modules/d3-array/src/quantile.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "quantile",
          function() {
            return _src_quantile__WEBPACK_IMPORTED_MODULE_18__["default"];
          }
        );

        /* harmony import */ var _src_range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./src/range */ "./node_modules/d3-array/src/range.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "range",
          function() {
            return _src_range__WEBPACK_IMPORTED_MODULE_19__["default"];
          }
        );

        /* harmony import */ var _src_scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./src/scan */ "./node_modules/d3-array/src/scan.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scan",
          function() {
            return _src_scan__WEBPACK_IMPORTED_MODULE_20__["default"];
          }
        );

        /* harmony import */ var _src_shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./src/shuffle */ "./node_modules/d3-array/src/shuffle.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "shuffle",
          function() {
            return _src_shuffle__WEBPACK_IMPORTED_MODULE_21__["default"];
          }
        );

        /* harmony import */ var _src_sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./src/sum */ "./node_modules/d3-array/src/sum.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "sum",
          function() {
            return _src_sum__WEBPACK_IMPORTED_MODULE_22__["default"];
          }
        );

        /* harmony import */ var _src_ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./src/ticks */ "./node_modules/d3-array/src/ticks.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "ticks",
          function() {
            return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "tickIncrement",
          function() {
            return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "tickStep",
          function() {
            return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"];
          }
        );

        /* harmony import */ var _src_transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./src/transpose */ "./node_modules/d3-array/src/transpose.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "transpose",
          function() {
            return _src_transpose__WEBPACK_IMPORTED_MODULE_24__["default"];
          }
        );

        /* harmony import */ var _src_variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./src/variance */ "./node_modules/d3-array/src/variance.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "variance",
          function() {
            return _src_variance__WEBPACK_IMPORTED_MODULE_25__["default"];
          }
        );

        /* harmony import */ var _src_zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./src/zip */ "./node_modules/d3-array/src/zip.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "zip",
          function() {
            return _src_zip__WEBPACK_IMPORTED_MODULE_26__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-array/src/array.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
      /*! exports provided: slice, map */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slice",
          function() {
            return slice;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "map",
          function() {
            return map;
          }
        );
        var array = Array.prototype;

        var slice = array.slice;
        var map = array.map;

        /***/
      },

    /***/ "./node_modules/d3-array/src/ascending.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/bisect.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
      /*! exports provided: bisectRight, bisectLeft, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bisectRight",
          function() {
            return bisectRight;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bisectLeft",
          function() {
            return bisectLeft;
          }
        );
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ascending */ "./node_modules/d3-array/src/ascending.js"
        );
        /* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./bisector */ "./node_modules/d3-array/src/bisector.js"
        );

        var ascendingBisect = Object(
          _bisector__WEBPACK_IMPORTED_MODULE_1__["default"]
        )(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
        var bisectRight = ascendingBisect.right;
        var bisectLeft = ascendingBisect.left;
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = bisectRight;

        /***/
      },

    /***/ "./node_modules/d3-array/src/bisector.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ascending */ "./node_modules/d3-array/src/ascending.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          compare
        ) {
          if (compare.length === 1) compare = ascendingComparator(compare);
          return {
            left: function(a, x, lo, hi) {
              if (lo == null) lo = 0;
              if (hi == null) hi = a.length;
              while (lo < hi) {
                var mid = (lo + hi) >>> 1;
                if (compare(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
              }
              return lo;
            },
            right: function(a, x, lo, hi) {
              if (lo == null) lo = 0;
              if (hi == null) hi = a.length;
              while (lo < hi) {
                var mid = (lo + hi) >>> 1;
                if (compare(a[mid], x) > 0) hi = mid;
                else lo = mid + 1;
              }
              return lo;
            }
          };
        };

        function ascendingComparator(f) {
          return function(d, x) {
            return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(
              f(d),
              x
            );
          };
        }

        /***/
      },

    /***/ "./node_modules/d3-array/src/constant.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
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

    /***/ "./node_modules/d3-array/src/cross.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./pairs */ "./node_modules/d3-array/src/pairs.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values0,
          values1,
          reduce
        ) {
          var n0 = values0.length,
            n1 = values1.length,
            values = new Array(n0 * n1),
            i0,
            i1,
            i,
            value0;

          if (reduce == null)
            reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

          for (i0 = i = 0; i0 < n0; ++i0) {
            for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
              values[i] = reduce(value0, values1[i1]);
            }
          }

          return values;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/descending.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/deviation.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./variance */ "./node_modules/d3-array/src/variance.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          array,
          f
        ) {
          var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(
            array,
            f
          );
          return v ? Math.sqrt(v) : v;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/extent.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            i = -1,
            value,
            min,
            max;

          if (valueof == null) {
            while (++i < n) {
              // Find the first comparable value.
              if ((value = values[i]) != null && value >= value) {
                min = max = value;
                while (++i < n) {
                  // Compare the remaining values.
                  if ((value = values[i]) != null) {
                    if (min > value) min = value;
                    if (max < value) max = value;
                  }
                }
              }
            }
          } else {
            while (++i < n) {
              // Find the first comparable value.
              if (
                (value = valueof(values[i], i, values)) != null &&
                value >= value
              ) {
                min = max = value;
                while (++i < n) {
                  // Compare the remaining values.
                  if ((value = valueof(values[i], i, values)) != null) {
                    if (min > value) min = value;
                    if (max < value) max = value;
                  }
                }
              }
            }
          }

          return [min, max];
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/histogram.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-array/src/array.js"
        );
        /* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./bisect */ "./node_modules/d3-array/src/bisect.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-array/src/constant.js"
        );
        /* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./extent */ "./node_modules/d3-array/src/extent.js"
        );
        /* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./identity */ "./node_modules/d3-array/src/identity.js"
        );
        /* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./range */ "./node_modules/d3-array/src/range.js"
        );
        /* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ticks */ "./node_modules/d3-array/src/ticks.js"
        );
        /* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
            domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
            threshold =
              _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

          function histogram(data) {
            var i,
              n = data.length,
              x,
              values = new Array(n);

            for (i = 0; i < n; ++i) {
              values[i] = value(data[i], i, data);
            }

            var xz = domain(values),
              x0 = xz[0],
              x1 = xz[1],
              tz = threshold(values, x0, x1);

            // Convert number of thresholds into uniform thresholds.
            if (!Array.isArray(tz)) {
              tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(
                x0,
                x1,
                tz
              );
              tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(
                Math.ceil(x0 / tz) * tz,
                Math.floor(x1 / tz) * tz,
                tz
              ); // exclusive
            }

            // Remove any thresholds outside the domain.
            var m = tz.length;
            while (tz[0] <= x0) tz.shift(), --m;
            while (tz[m - 1] > x1) tz.pop(), --m;

            var bins = new Array(m + 1),
              bin;

            // Initialize bins.
            for (i = 0; i <= m; ++i) {
              bin = bins[i] = [];
              bin.x0 = i > 0 ? tz[i - 1] : x0;
              bin.x1 = i < m ? tz[i] : x1;
            }

            // Assign data to bins by value, ignoring any outside the domain.
            for (i = 0; i < n; ++i) {
              x = values[i];
              if (x0 <= x && x <= x1) {
                bins[
                  Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(
                    tz,
                    x,
                    0,
                    m
                  )
                ].push(data[i]);
              }
            }

            return bins;
          }

          histogram.value = function(_) {
            return arguments.length
              ? ((value =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        _
                      )),
                histogram)
              : value;
          };

          histogram.domain = function(_) {
            return arguments.length
              ? ((domain =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        [_[0], _[1]]
                      )),
                histogram)
              : domain;
          };

          histogram.thresholds = function(_) {
            return arguments.length
              ? ((threshold =
                  typeof _ === "function"
                    ? _
                    : Array.isArray(_)
                      ? Object(
                          _constant__WEBPACK_IMPORTED_MODULE_2__["default"]
                        )(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_))
                      : Object(
                          _constant__WEBPACK_IMPORTED_MODULE_2__["default"]
                        )(_)),
                histogram)
              : threshold;
          };

          return histogram;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/identity.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return x;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/max.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            i = -1,
            value,
            max;

          if (valueof == null) {
            while (++i < n) {
              // Find the first comparable value.
              if ((value = values[i]) != null && value >= value) {
                max = value;
                while (++i < n) {
                  // Compare the remaining values.
                  if ((value = values[i]) != null && value > max) {
                    max = value;
                  }
                }
              }
            }
          } else {
            while (++i < n) {
              // Find the first comparable value.
              if (
                (value = valueof(values[i], i, values)) != null &&
                value >= value
              ) {
                max = value;
                while (++i < n) {
                  // Compare the remaining values.
                  if (
                    (value = valueof(values[i], i, values)) != null &&
                    value > max
                  ) {
                    max = value;
                  }
                }
              }
            }
          }

          return max;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/mean.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-array/src/number.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            m = n,
            i = -1,
            value,
            sum = 0;

          if (valueof == null) {
            while (++i < n) {
              if (
                !isNaN(
                  (value = Object(
                    _number__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(values[i]))
                )
              )
                sum += value;
              else --m;
            }
          } else {
            while (++i < n) {
              if (
                !isNaN(
                  (value = Object(
                    _number__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(valueof(values[i], i, values)))
                )
              )
                sum += value;
              else --m;
            }
          }

          if (m) return sum / m;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/median.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ascending */ "./node_modules/d3-array/src/ascending.js"
        );
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-array/src/number.js"
        );
        /* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./quantile */ "./node_modules/d3-array/src/quantile.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            i = -1,
            value,
            numbers = [];

          if (valueof == null) {
            while (++i < n) {
              if (
                !isNaN(
                  (value = Object(
                    _number__WEBPACK_IMPORTED_MODULE_1__["default"]
                  )(values[i]))
                )
              ) {
                numbers.push(value);
              }
            }
          } else {
            while (++i < n) {
              if (
                !isNaN(
                  (value = Object(
                    _number__WEBPACK_IMPORTED_MODULE_1__["default"]
                  )(valueof(values[i], i, values)))
                )
              ) {
                numbers.push(value);
              }
            }
          }

          return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(
            numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]),
            0.5
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/merge.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          arrays
        ) {
          var n = arrays.length,
            m,
            i = -1,
            j = 0,
            merged,
            array;

          while (++i < n) j += arrays[i].length;
          merged = new Array(j);

          while (--n >= 0) {
            array = arrays[n];
            m = array.length;
            while (--m >= 0) {
              merged[--j] = array[m];
            }
          }

          return merged;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/min.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            i = -1,
            value,
            min;

          if (valueof == null) {
            while (++i < n) {
              // Find the first comparable value.
              if ((value = values[i]) != null && value >= value) {
                min = value;
                while (++i < n) {
                  // Compare the remaining values.
                  if ((value = values[i]) != null && min > value) {
                    min = value;
                  }
                }
              }
            }
          } else {
            while (++i < n) {
              // Find the first comparable value.
              if (
                (value = valueof(values[i], i, values)) != null &&
                value >= value
              ) {
                min = value;
                while (++i < n) {
                  // Compare the remaining values.
                  if (
                    (value = valueof(values[i], i, values)) != null &&
                    min > value
                  ) {
                    min = value;
                  }
                }
              }
            }
          }

          return min;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/number.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return x === null ? NaN : +x;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/pairs.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
      /*! exports provided: default, pair */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pair",
          function() {
            return pair;
          }
        );
        /* harmony default export */ __webpack_exports__["default"] = function(
          array,
          f
        ) {
          if (f == null) f = pair;
          var i = 0,
            n = array.length - 1,
            p = array[0],
            pairs = new Array(n < 0 ? 0 : n);
          while (i < n) pairs[i] = f(p, (p = array[++i]));
          return pairs;
        };

        function pair(a, b) {
          return [a, b];
        }

        /***/
      },

    /***/ "./node_modules/d3-array/src/permute.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          array,
          indexes
        ) {
          var i = indexes.length,
            permutes = new Array(i);
          while (i--) permutes[i] = array[indexes[i]];
          return permutes;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/quantile.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-array/src/number.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          p,
          valueof
        ) {
          if (valueof == null)
            valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
          if (!(n = values.length)) return;
          if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
          if (p >= 1) return +valueof(values[n - 1], n - 1, values);
          var n,
            i = (n - 1) * p,
            i0 = Math.floor(i),
            value0 = +valueof(values[i0], i0, values),
            value1 = +valueof(values[i0 + 1], i0 + 1, values);
          return value0 + (value1 - value0) * (i - i0);
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/range.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          start,
          stop,
          step
        ) {
          (start = +start),
            (stop = +stop),
            (step =
              (n = arguments.length) < 2
                ? ((stop = start), (start = 0), 1)
                : n < 3
                  ? 1
                  : +step);

          var i = -1,
            n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
            range = new Array(n);

          while (++i < n) {
            range[i] = start + i * step;
          }

          return range;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/scan.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ascending */ "./node_modules/d3-array/src/ascending.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          compare
        ) {
          if (!(n = values.length)) return;
          var n,
            i = 0,
            j = 0,
            xi,
            xj = values[j];

          if (compare == null)
            compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

          while (++i < n) {
            if (compare((xi = values[i]), xj) < 0 || compare(xj, xj) !== 0) {
              (xj = xi), (j = i);
            }
          }

          if (compare(xj, xj) === 0) return j;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/shuffle.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          array,
          i0,
          i1
        ) {
          var m =
              (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
            t,
            i;

          while (m) {
            i = (Math.random() * m--) | 0;
            t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
          }

          return array;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/sum.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            i = -1,
            value,
            sum = 0;

          if (valueof == null) {
            while (++i < n) {
              if ((value = +values[i])) sum += value; // Note: zero and null are equivalent.
            }
          } else {
            while (++i < n) {
              if ((value = +valueof(values[i], i, values))) sum += value;
            }
          }

          return sum;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../array */ "./node_modules/d3-array/src/array.js"
        );
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../ascending */ "./node_modules/d3-array/src/ascending.js"
        );
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../number */ "./node_modules/d3-array/src/number.js"
        );
        /* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../quantile */ "./node_modules/d3-array/src/quantile.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          min,
          max
        ) {
          values = _array__WEBPACK_IMPORTED_MODULE_0__["map"]
            .call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"])
            .sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
          return Math.ceil(
            (max - min) /
              (2 *
                (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  values,
                  0.75
                ) -
                  Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(
                    values,
                    0.25
                  )) *
                Math.pow(values.length, -1 / 3))
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/threshold/scott.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../deviation */ "./node_modules/d3-array/src/deviation.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          min,
          max
        ) {
          return Math.ceil(
            (max - min) /
              (3.5 *
                Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  values
                ) *
                Math.pow(values.length, -1 / 3))
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/threshold/sturges.js":
      /*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          values
        ) {
          return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/ticks.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
      /*! exports provided: default, tickIncrement, tickStep */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tickIncrement",
          function() {
            return tickIncrement;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tickStep",
          function() {
            return tickStep;
          }
        );
        var e10 = Math.sqrt(50),
          e5 = Math.sqrt(10),
          e2 = Math.sqrt(2);

        /* harmony default export */ __webpack_exports__["default"] = function(
          start,
          stop,
          count
        ) {
          var reverse,
            i = -1,
            n,
            ticks,
            step;

          (stop = +stop), (start = +start), (count = +count);
          if (start === stop && count > 0) return [start];
          if ((reverse = stop < start)) (n = start), (start = stop), (stop = n);
          if (
            (step = tickIncrement(start, stop, count)) === 0 ||
            !isFinite(step)
          )
            return [];

          if (step > 0) {
            start = Math.ceil(start / step);
            stop = Math.floor(stop / step);
            ticks = new Array((n = Math.ceil(stop - start + 1)));
            while (++i < n) ticks[i] = (start + i) * step;
          } else {
            start = Math.floor(start * step);
            stop = Math.ceil(stop * step);
            ticks = new Array((n = Math.ceil(start - stop + 1)));
            while (++i < n) ticks[i] = (start - i) / step;
          }

          if (reverse) ticks.reverse();

          return ticks;
        };

        function tickIncrement(start, stop, count) {
          var step = (stop - start) / Math.max(0, count),
            power = Math.floor(Math.log(step) / Math.LN10),
            error = step / Math.pow(10, power);
          return power >= 0
            ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) *
                Math.pow(10, power)
            : -Math.pow(10, -power) /
                (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
        }

        function tickStep(start, stop, count) {
          var step0 = Math.abs(stop - start) / Math.max(0, count),
            step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
            error = step0 / step1;
          if (error >= e10) step1 *= 10;
          else if (error >= e5) step1 *= 5;
          else if (error >= e2) step1 *= 2;
          return stop < start ? -step1 : step1;
        }

        /***/
      },

    /***/ "./node_modules/d3-array/src/transpose.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./min */ "./node_modules/d3-array/src/min.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          matrix
        ) {
          if (!(n = matrix.length)) return [];
          for (
            var i = -1,
              m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(
                matrix,
                length
              ),
              transpose = new Array(m);
            ++i < m;

          ) {
            for (
              var j = -1, n, row = (transpose[i] = new Array(n));
              ++j < n;

            ) {
              row[j] = matrix[j][i];
            }
          }
          return transpose;
        };

        function length(d) {
          return d.length;
        }

        /***/
      },

    /***/ "./node_modules/d3-array/src/variance.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-array/src/number.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values,
          valueof
        ) {
          var n = values.length,
            m = 0,
            i = -1,
            mean = 0,
            value,
            delta,
            sum = 0;

          if (valueof == null) {
            while (++i < n) {
              if (
                !isNaN(
                  (value = Object(
                    _number__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(values[i]))
                )
              ) {
                delta = value - mean;
                mean += delta / ++m;
                sum += delta * (value - mean);
              }
            }
          } else {
            while (++i < n) {
              if (
                !isNaN(
                  (value = Object(
                    _number__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(valueof(values[i], i, values)))
                )
              ) {
                delta = value - mean;
                mean += delta / ++m;
                sum += delta * (value - mean);
              }
            }
          }

          if (m > 1) return sum / (m - 1);
        };

        /***/
      },

    /***/ "./node_modules/d3-array/src/zip.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./transpose */ "./node_modules/d3-array/src/transpose.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(
            arguments
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-axis/index.js":
      /*!***************************************!*\
  !*** ./node_modules/d3-axis/index.js ***!
  \***************************************/
      /*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/axis */ "./node_modules/d3-axis/src/axis.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "axisTop",
          function() {
            return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisTop"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "axisRight",
          function() {
            return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisRight"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "axisBottom",
          function() {
            return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisBottom"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "axisLeft",
          function() {
            return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisLeft"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-axis/src/array.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-axis/src/array.js ***!
  \*******************************************/
      /*! exports provided: slice */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slice",
          function() {
            return slice;
          }
        );
        var slice = Array.prototype.slice;

        /***/
      },

    /***/ "./node_modules/d3-axis/src/axis.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-axis/src/axis.js ***!
  \******************************************/
      /*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "axisTop",
          function() {
            return axisTop;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "axisRight",
          function() {
            return axisRight;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "axisBottom",
          function() {
            return axisBottom;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "axisLeft",
          function() {
            return axisLeft;
          }
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-axis/src/array.js"
        );
        /* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./identity */ "./node_modules/d3-axis/src/identity.js"
        );

        var top = 1,
          right = 2,
          bottom = 3,
          left = 4,
          epsilon = 1e-6;

        function translateX(x) {
          return "translate(" + (x + 0.5) + ",0)";
        }

        function translateY(y) {
          return "translate(0," + (y + 0.5) + ")";
        }

        function number(scale) {
          return function(d) {
            return +scale(d);
          };
        }

        function center(scale) {
          var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
          if (scale.round()) offset = Math.round(offset);
          return function(d) {
            return +scale(d) + offset;
          };
        }

        function entering() {
          return !this.__axis;
        }

        function axis(orient, scale) {
          var tickArguments = [],
            tickValues = null,
            tickFormat = null,
            tickSizeInner = 6,
            tickSizeOuter = 6,
            tickPadding = 3,
            k = orient === top || orient === left ? -1 : 1,
            x = orient === left || orient === right ? "x" : "y",
            transform =
              orient === top || orient === bottom ? translateX : translateY;

          function axis(context) {
            var values =
                tickValues == null
                  ? scale.ticks
                    ? scale.ticks.apply(scale, tickArguments)
                    : scale.domain()
                  : tickValues,
              format =
                tickFormat == null
                  ? scale.tickFormat
                    ? scale.tickFormat.apply(scale, tickArguments)
                    : _identity__WEBPACK_IMPORTED_MODULE_1__["default"]
                  : tickFormat,
              spacing = Math.max(tickSizeInner, 0) + tickPadding,
              range = scale.range(),
              range0 = +range[0] + 0.5,
              range1 = +range[range.length - 1] + 0.5,
              position = (scale.bandwidth ? center : number)(scale.copy()),
              selection = context.selection ? context.selection() : context,
              path = selection.selectAll(".domain").data([null]),
              tick = selection
                .selectAll(".tick")
                .data(values, scale)
                .order(),
              tickExit = tick.exit(),
              tickEnter = tick
                .enter()
                .append("g")
                .attr("class", "tick"),
              line = tick.select("line"),
              text = tick.select("text");

            path = path.merge(
              path
                .enter()
                .insert("path", ".tick")
                .attr("class", "domain")
                .attr("stroke", "#000")
            );

            tick = tick.merge(tickEnter);

            line = line.merge(
              tickEnter
                .append("line")
                .attr("stroke", "#000")
                .attr(x + "2", k * tickSizeInner)
            );

            text = text.merge(
              tickEnter
                .append("text")
                .attr("fill", "#000")
                .attr(x, k * spacing)
                .attr(
                  "dy",
                  orient === top
                    ? "0em"
                    : orient === bottom
                      ? "0.71em"
                      : "0.32em"
                )
            );

            if (context !== selection) {
              path = path.transition(context);
              tick = tick.transition(context);
              line = line.transition(context);
              text = text.transition(context);

              tickExit = tickExit
                .transition(context)
                .attr("opacity", epsilon)
                .attr("transform", function(d) {
                  return isFinite((d = position(d)))
                    ? transform(d)
                    : this.getAttribute("transform");
                });

              tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
                var p = this.parentNode.__axis;
                return transform(p && isFinite((p = p(d))) ? p : position(d));
              });
            }

            tickExit.remove();

            path.attr(
              "d",
              orient === left || orient == right
                ? "M" +
                  k * tickSizeOuter +
                  "," +
                  range0 +
                  "H0.5V" +
                  range1 +
                  "H" +
                  k * tickSizeOuter
                : "M" +
                  range0 +
                  "," +
                  k * tickSizeOuter +
                  "V0.5H" +
                  range1 +
                  "V" +
                  k * tickSizeOuter
            );

            tick.attr("opacity", 1).attr("transform", function(d) {
              return transform(position(d));
            });

            line.attr(x + "2", k * tickSizeInner);

            text.attr(x, k * spacing).text(format);

            selection
              .filter(entering)
              .attr("fill", "none")
              .attr("font-size", 10)
              .attr("font-family", "sans-serif")
              .attr(
                "text-anchor",
                orient === right ? "start" : orient === left ? "end" : "middle"
              );

            selection.each(function() {
              this.__axis = position;
            });
          }

          axis.scale = function(_) {
            return arguments.length ? ((scale = _), axis) : scale;
          };

          axis.ticks = function() {
            return (
              (tickArguments = _array__WEBPACK_IMPORTED_MODULE_0__[
                "slice"
              ].call(arguments)),
              axis
            );
          };

          axis.tickArguments = function(_) {
            return arguments.length
              ? ((tickArguments =
                  _ == null
                    ? []
                    : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)),
                axis)
              : tickArguments.slice();
          };

          axis.tickValues = function(_) {
            return arguments.length
              ? ((tickValues =
                  _ == null
                    ? null
                    : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)),
                axis)
              : tickValues && tickValues.slice();
          };

          axis.tickFormat = function(_) {
            return arguments.length ? ((tickFormat = _), axis) : tickFormat;
          };

          axis.tickSize = function(_) {
            return arguments.length
              ? ((tickSizeInner = tickSizeOuter = +_), axis)
              : tickSizeInner;
          };

          axis.tickSizeInner = function(_) {
            return arguments.length
              ? ((tickSizeInner = +_), axis)
              : tickSizeInner;
          };

          axis.tickSizeOuter = function(_) {
            return arguments.length
              ? ((tickSizeOuter = +_), axis)
              : tickSizeOuter;
          };

          axis.tickPadding = function(_) {
            return arguments.length ? ((tickPadding = +_), axis) : tickPadding;
          };

          return axis;
        }

        function axisTop(scale) {
          return axis(top, scale);
        }

        function axisRight(scale) {
          return axis(right, scale);
        }

        function axisBottom(scale) {
          return axis(bottom, scale);
        }

        function axisLeft(scale) {
          return axis(left, scale);
        }

        /***/
      },

    /***/ "./node_modules/d3-axis/src/identity.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-axis/src/identity.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return x;
        };

        /***/
      },

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

    /***/ "./node_modules/d3-color/index.js":
      /*!****************************************!*\
  !*** ./node_modules/d3-color/index.js ***!
  \****************************************/
      /*! exports provided: color, rgb, hsl, lab, hcl, cubehelix */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/color */ "./node_modules/d3-color/src/color.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "color",
          function() {
            return _src_color__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "rgb",
          function() {
            return _src_color__WEBPACK_IMPORTED_MODULE_0__["rgb"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "hsl",
          function() {
            return _src_color__WEBPACK_IMPORTED_MODULE_0__["hsl"];
          }
        );

        /* harmony import */ var _src_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/lab */ "./node_modules/d3-color/src/lab.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "lab",
          function() {
            return _src_lab__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "hcl",
          function() {
            return _src_lab__WEBPACK_IMPORTED_MODULE_1__["hcl"];
          }
        );

        /* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/cubehelix */ "./node_modules/d3-color/src/cubehelix.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "cubehelix",
          function() {
            return _src_cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-color/src/color.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
      /*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Color",
          function() {
            return Color;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "darker",
          function() {
            return darker;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "brighter",
          function() {
            return brighter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return color;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rgbConvert",
          function() {
            return rgbConvert;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rgb",
          function() {
            return rgb;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rgb",
          function() {
            return Rgb;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hslConvert",
          function() {
            return hslConvert;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hsl",
          function() {
            return hsl;
          }
        );
        /* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./define */ "./node_modules/d3-color/src/define.js"
        );

        function Color() {}

        var darker = 0.7;
        var brighter = 1 / darker;

        var reI = "\\s*([+-]?\\d+)\\s*",
          reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          reHex3 = /^#([0-9a-f]{3})$/,
          reHex6 = /^#([0-9a-f]{6})$/,
          reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
          reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
          reRgbaInteger = new RegExp(
            "^rgba\\(" + [reI, reI, reI, reN] + "\\)$"
          ),
          reRgbaPercent = new RegExp(
            "^rgba\\(" + [reP, reP, reP, reN] + "\\)$"
          ),
          reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
          reHslaPercent = new RegExp(
            "^hsla\\(" + [reN, reP, reP, reN] + "\\)$"
          );

        var named = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 0x00ffff,
          aquamarine: 0x7fffd4,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0x000000,
          blanchedalmond: 0xffebcd,
          blue: 0x0000ff,
          blueviolet: 0x8a2be2,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 0x5f9ea0,
          chartreuse: 0x7fff00,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 0x6495ed,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 0x00ffff,
          darkblue: 0x00008b,
          darkcyan: 0x008b8b,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 0x006400,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 0x8b008b,
          darkolivegreen: 0x556b2f,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 0x8b0000,
          darksalmon: 0xe9967a,
          darkseagreen: 0x8fbc8f,
          darkslateblue: 0x483d8b,
          darkslategray: 0x2f4f4f,
          darkslategrey: 0x2f4f4f,
          darkturquoise: 0x00ced1,
          darkviolet: 0x9400d3,
          deeppink: 0xff1493,
          deepskyblue: 0x00bfff,
          dimgray: 0x696969,
          dimgrey: 0x696969,
          dodgerblue: 0x1e90ff,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 0x228b22,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 0x808080,
          green: 0x008000,
          greenyellow: 0xadff2f,
          grey: 0x808080,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 0x4b0082,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 0x7cfc00,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 0x90ee90,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 0x20b2aa,
          lightskyblue: 0x87cefa,
          lightslategray: 0x778899,
          lightslategrey: 0x778899,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 0x00ff00,
          limegreen: 0x32cd32,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 0x800000,
          mediumaquamarine: 0x66cdaa,
          mediumblue: 0x0000cd,
          mediumorchid: 0xba55d3,
          mediumpurple: 0x9370db,
          mediumseagreen: 0x3cb371,
          mediumslateblue: 0x7b68ee,
          mediumspringgreen: 0x00fa9a,
          mediumturquoise: 0x48d1cc,
          mediumvioletred: 0xc71585,
          midnightblue: 0x191970,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 0x000080,
          oldlace: 0xfdf5e6,
          olive: 0x808000,
          olivedrab: 0x6b8e23,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 0x800080,
          rebeccapurple: 0x663399,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 0x4169e1,
          saddlebrown: 0x8b4513,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 0x2e8b57,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 0x87ceeb,
          slateblue: 0x6a5acd,
          slategray: 0x708090,
          slategrey: 0x708090,
          snow: 0xfffafa,
          springgreen: 0x00ff7f,
          steelblue: 0x4682b4,
          tan: 0xd2b48c,
          teal: 0x008080,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 0x40e0d0,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32
        };

        Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
          displayable: function() {
            return this.rgb().displayable();
          },
          toString: function() {
            return this.rgb() + "";
          }
        });

        function color(format) {
          var m;
          format = (format + "").trim().toLowerCase();
          return (m = reHex3.exec(format))
            ? ((m = parseInt(m[1], 16)),
              new Rgb(
                ((m >> 8) & 0xf) | ((m >> 4) & 0x0f0),
                ((m >> 4) & 0xf) | (m & 0xf0),
                ((m & 0xf) << 4) | (m & 0xf),
                1
              )) // #f00
            : (m = reHex6.exec(format))
              ? rgbn(parseInt(m[1], 16)) // #ff0000
              : (m = reRgbInteger.exec(format))
                ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
                : (m = reRgbPercent.exec(format))
                  ? new Rgb(
                      (m[1] * 255) / 100,
                      (m[2] * 255) / 100,
                      (m[3] * 255) / 100,
                      1
                    ) // rgb(100%, 0%, 0%)
                  : (m = reRgbaInteger.exec(format))
                    ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
                    : (m = reRgbaPercent.exec(format))
                      ? rgba(
                          (m[1] * 255) / 100,
                          (m[2] * 255) / 100,
                          (m[3] * 255) / 100,
                          m[4]
                        ) // rgb(100%, 0%, 0%, 1)
                      : (m = reHslPercent.exec(format))
                        ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
                        : (m = reHslaPercent.exec(format))
                          ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
                          : named.hasOwnProperty(format)
                            ? rgbn(named[format])
                            : format === "transparent"
                              ? new Rgb(NaN, NaN, NaN, 0)
                              : null;
        }

        function rgbn(n) {
          return new Rgb((n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff, 1);
        }

        function rgba(r, g, b, a) {
          if (a <= 0) r = g = b = NaN;
          return new Rgb(r, g, b, a);
        }

        function rgbConvert(o) {
          if (!(o instanceof Color)) o = color(o);
          if (!o) return new Rgb();
          o = o.rgb();
          return new Rgb(o.r, o.g, o.b, o.opacity);
        }

        function rgb(r, g, b, opacity) {
          return arguments.length === 1
            ? rgbConvert(r)
            : new Rgb(r, g, b, opacity == null ? 1 : opacity);
        }

        function Rgb(r, g, b, opacity) {
          this.r = +r;
          this.g = +g;
          this.b = +b;
          this.opacity = +opacity;
        }

        Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(
          Rgb,
          rgb,
          Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
            brighter: function(k) {
              k = k == null ? brighter : Math.pow(brighter, k);
              return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
            },
            darker: function(k) {
              k = k == null ? darker : Math.pow(darker, k);
              return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
            },
            rgb: function() {
              return this;
            },
            displayable: function() {
              return (
                0 <= this.r &&
                this.r <= 255 &&
                (0 <= this.g && this.g <= 255) &&
                (0 <= this.b && this.b <= 255) &&
                (0 <= this.opacity && this.opacity <= 1)
              );
            },
            toString: function() {
              var a = this.opacity;
              a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
              return (
                (a === 1 ? "rgb(" : "rgba(") +
                Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                (a === 1 ? ")" : ", " + a + ")")
              );
            }
          })
        );

        function hsla(h, s, l, a) {
          if (a <= 0) h = s = l = NaN;
          else if (l <= 0 || l >= 1) h = s = NaN;
          else if (s <= 0) h = NaN;
          return new Hsl(h, s, l, a);
        }

        function hslConvert(o) {
          if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
          if (!(o instanceof Color)) o = color(o);
          if (!o) return new Hsl();
          if (o instanceof Hsl) return o;
          o = o.rgb();
          var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            h = NaN,
            s = max - min,
            l = (max + min) / 2;
          if (s) {
            if (r === max) h = (g - b) / s + (g < b) * 6;
            else if (g === max) h = (b - r) / s + 2;
            else h = (r - g) / s + 4;
            s /= l < 0.5 ? max + min : 2 - max - min;
            h *= 60;
          } else {
            s = l > 0 && l < 1 ? 0 : h;
          }
          return new Hsl(h, s, l, o.opacity);
        }

        function hsl(h, s, l, opacity) {
          return arguments.length === 1
            ? hslConvert(h)
            : new Hsl(h, s, l, opacity == null ? 1 : opacity);
        }

        function Hsl(h, s, l, opacity) {
          this.h = +h;
          this.s = +s;
          this.l = +l;
          this.opacity = +opacity;
        }

        Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(
          Hsl,
          hsl,
          Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
            brighter: function(k) {
              k = k == null ? brighter : Math.pow(brighter, k);
              return new Hsl(this.h, this.s, this.l * k, this.opacity);
            },
            darker: function(k) {
              k = k == null ? darker : Math.pow(darker, k);
              return new Hsl(this.h, this.s, this.l * k, this.opacity);
            },
            rgb: function() {
              var h = (this.h % 360) + (this.h < 0) * 360,
                s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
                l = this.l,
                m2 = l + (l < 0.5 ? l : 1 - l) * s,
                m1 = 2 * l - m2;
              return new Rgb(
                hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
                hsl2rgb(h, m1, m2),
                hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
                this.opacity
              );
            },
            displayable: function() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                (0 <= this.l && this.l <= 1) &&
                (0 <= this.opacity && this.opacity <= 1)
              );
            }
          })
        );

        /* From FvD 13.37, CSS Color Module Level 3 */
        function hsl2rgb(h, m1, m2) {
          return (
            (h < 60
              ? m1 + ((m2 - m1) * h) / 60
              : h < 180
                ? m2
                : h < 240
                  ? m1 + ((m2 - m1) * (240 - h)) / 60
                  : m1) * 255
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-color/src/cubehelix.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
      /*! exports provided: default, Cubehelix */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return cubehelix;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Cubehelix",
          function() {
            return Cubehelix;
          }
        );
        /* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./define */ "./node_modules/d3-color/src/define.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-color/src/color.js"
        );
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./math */ "./node_modules/d3-color/src/math.js"
        );

        var A = -0.14861,
          B = +1.78277,
          C = -0.29227,
          D = -0.90649,
          E = +1.97294,
          ED = E * D,
          EB = E * B,
          BC_DA = B * C - D * A;

        function cubehelixConvert(o) {
          if (o instanceof Cubehelix)
            return new Cubehelix(o.h, o.s, o.l, o.opacity);
          if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"]))
            o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
          var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
            bl = b - l,
            k = (E * (g - l) - C * bl) / D,
            s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
            h = s
              ? Math.atan2(k, bl) *
                  _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] -
                120
              : NaN;
          return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
        }

        function cubehelix(h, s, l, opacity) {
          return arguments.length === 1
            ? cubehelixConvert(h)
            : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
        }

        function Cubehelix(h, s, l, opacity) {
          this.h = +h;
          this.s = +s;
          this.l = +l;
          this.opacity = +opacity;
        }

        Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(
          Cubehelix,
          cubehelix,
          Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(
            _color__WEBPACK_IMPORTED_MODULE_1__["Color"],
            {
              brighter: function(k) {
                k =
                  k == null
                    ? _color__WEBPACK_IMPORTED_MODULE_1__["brighter"]
                    : Math.pow(
                        _color__WEBPACK_IMPORTED_MODULE_1__["brighter"],
                        k
                      );
                return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
              },
              darker: function(k) {
                k =
                  k == null
                    ? _color__WEBPACK_IMPORTED_MODULE_1__["darker"]
                    : Math.pow(
                        _color__WEBPACK_IMPORTED_MODULE_1__["darker"],
                        k
                      );
                return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
              },
              rgb: function() {
                var h = isNaN(this.h)
                    ? 0
                    : (this.h + 120) *
                      _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
                  l = +this.l,
                  a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
                  cosh = Math.cos(h),
                  sinh = Math.sin(h);
                return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
                  255 * (l + a * (A * cosh + B * sinh)),
                  255 * (l + a * (C * cosh + D * sinh)),
                  255 * (l + a * (E * cosh)),
                  this.opacity
                );
              }
            }
          )
        );

        /***/
      },

    /***/ "./node_modules/d3-color/src/define.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
      /*! exports provided: default, extend */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "extend",
          function() {
            return extend;
          }
        );
        /* harmony default export */ __webpack_exports__["default"] = function(
          constructor,
          factory,
          prototype
        ) {
          constructor.prototype = factory.prototype = prototype;
          prototype.constructor = constructor;
        };

        function extend(parent, definition) {
          var prototype = Object.create(parent.prototype);
          for (var key in definition) prototype[key] = definition[key];
          return prototype;
        }

        /***/
      },

    /***/ "./node_modules/d3-color/src/lab.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
      /*! exports provided: default, Lab, hcl, Hcl */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return lab;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Lab",
          function() {
            return Lab;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hcl",
          function() {
            return hcl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Hcl",
          function() {
            return Hcl;
          }
        );
        /* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./define */ "./node_modules/d3-color/src/define.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-color/src/color.js"
        );
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./math */ "./node_modules/d3-color/src/math.js"
        );

        var Kn = 18,
          Xn = 0.95047, // D65 standard referent
          Yn = 1,
          Zn = 1.08883,
          t0 = 4 / 29,
          t1 = 6 / 29,
          t2 = 3 * t1 * t1,
          t3 = t1 * t1 * t1;

        function labConvert(o) {
          if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
          if (o instanceof Hcl) {
            var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
            return new Lab(
              o.l,
              Math.cos(h) * o.c,
              Math.sin(h) * o.c,
              o.opacity
            );
          }
          if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"]))
            o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
          var b = rgb2xyz(o.r),
            a = rgb2xyz(o.g),
            l = rgb2xyz(o.b),
            x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
            y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.072175 * l) / Yn),
            z = xyz2lab((0.0193339 * b + 0.119192 * a + 0.9503041 * l) / Zn);
          return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
        }

        function lab(l, a, b, opacity) {
          return arguments.length === 1
            ? labConvert(l)
            : new Lab(l, a, b, opacity == null ? 1 : opacity);
        }

        function Lab(l, a, b, opacity) {
          this.l = +l;
          this.a = +a;
          this.b = +b;
          this.opacity = +opacity;
        }

        Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(
          Lab,
          lab,
          Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(
            _color__WEBPACK_IMPORTED_MODULE_1__["Color"],
            {
              brighter: function(k) {
                return new Lab(
                  this.l + Kn * (k == null ? 1 : k),
                  this.a,
                  this.b,
                  this.opacity
                );
              },
              darker: function(k) {
                return new Lab(
                  this.l - Kn * (k == null ? 1 : k),
                  this.a,
                  this.b,
                  this.opacity
                );
              },
              rgb: function() {
                var y = (this.l + 16) / 116,
                  x = isNaN(this.a) ? y : y + this.a / 500,
                  z = isNaN(this.b) ? y : y - this.b / 200;
                y = Yn * lab2xyz(y);
                x = Xn * lab2xyz(x);
                z = Zn * lab2xyz(z);
                return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
                  xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
                  xyz2rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z),
                  xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
                  this.opacity
                );
              }
            }
          )
        );

        function xyz2lab(t) {
          return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
        }

        function lab2xyz(t) {
          return t > t1 ? t * t * t : t2 * (t - t0);
        }

        function xyz2rgb(x) {
          return (
            255 *
            (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055)
          );
        }

        function rgb2xyz(x) {
          return (x /= 255) <= 0.04045
            ? x / 12.92
            : Math.pow((x + 0.055) / 1.055, 2.4);
        }

        function hclConvert(o) {
          if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
          if (!(o instanceof Lab)) o = labConvert(o);
          var h =
            Math.atan2(o.b, o.a) *
            _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
          return new Hcl(
            h < 0 ? h + 360 : h,
            Math.sqrt(o.a * o.a + o.b * o.b),
            o.l,
            o.opacity
          );
        }

        function hcl(h, c, l, opacity) {
          return arguments.length === 1
            ? hclConvert(h)
            : new Hcl(h, c, l, opacity == null ? 1 : opacity);
        }

        function Hcl(h, c, l, opacity) {
          this.h = +h;
          this.c = +c;
          this.l = +l;
          this.opacity = +opacity;
        }

        Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(
          Hcl,
          hcl,
          Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(
            _color__WEBPACK_IMPORTED_MODULE_1__["Color"],
            {
              brighter: function(k) {
                return new Hcl(
                  this.h,
                  this.c,
                  this.l + Kn * (k == null ? 1 : k),
                  this.opacity
                );
              },
              darker: function(k) {
                return new Hcl(
                  this.h,
                  this.c,
                  this.l - Kn * (k == null ? 1 : k),
                  this.opacity
                );
              },
              rgb: function() {
                return labConvert(this).rgb();
              }
            }
          )
        );

        /***/
      },

    /***/ "./node_modules/d3-color/src/math.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
      /*! exports provided: deg2rad, rad2deg */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deg2rad",
          function() {
            return deg2rad;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rad2deg",
          function() {
            return rad2deg;
          }
        );
        var deg2rad = Math.PI / 180;
        var rad2deg = 180 / Math.PI;

        /***/
      },

    /***/ "./node_modules/d3-dispatch/index.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-dispatch/index.js ***!
  \*******************************************/
      /*! exports provided: dispatch */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/dispatch */ "./node_modules/d3-dispatch/src/dispatch.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "dispatch",
          function() {
            return _src_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-dispatch/src/dispatch.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var noop = {value: function() {}};

        function dispatch() {
          for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
            if (!(t = arguments[i] + "") || t in _)
              throw new Error("illegal type: " + t);
            _[t] = [];
          }
          return new Dispatch(_);
        }

        function Dispatch(_) {
          this._ = _;
        }

        function parseTypenames(typenames, types) {
          return typenames
            .trim()
            .split(/^|\s+/)
            .map(function(t) {
              var name = "",
                i = t.indexOf(".");
              if (i >= 0) (name = t.slice(i + 1)), (t = t.slice(0, i));
              if (t && !types.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
              return {type: t, name: name};
            });
        }

        Dispatch.prototype = dispatch.prototype = {
          constructor: Dispatch,
          on: function(typename, callback) {
            var _ = this._,
              T = parseTypenames(typename + "", _),
              t,
              i = -1,
              n = T.length;

            // If no callback was specified, return the callback of the given type and name.
            if (arguments.length < 2) {
              while (++i < n)
                if (
                  (t = (typename = T[i]).type) &&
                  (t = get(_[t], typename.name))
                )
                  return t;
              return;
            }

            // If a type was specified, set the callback for the given type and name.
            // Otherwise, if a null callback was specified, remove callbacks of the given name.
            if (callback != null && typeof callback !== "function")
              throw new Error("invalid callback: " + callback);
            while (++i < n) {
              if ((t = (typename = T[i]).type))
                _[t] = set(_[t], typename.name, callback);
              else if (callback == null)
                for (t in _) _[t] = set(_[t], typename.name, null);
            }

            return this;
          },
          copy: function() {
            var copy = {},
              _ = this._;
            for (var t in _) copy[t] = _[t].slice();
            return new Dispatch(copy);
          },
          call: function(type, that) {
            if ((n = arguments.length - 2) > 0)
              for (var args = new Array(n), i = 0, n, t; i < n; ++i)
                args[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(type))
              throw new Error("unknown type: " + type);
            for (t = this._[type], i = 0, n = t.length; i < n; ++i)
              t[i].value.apply(that, args);
          },
          apply: function(type, that, args) {
            if (!this._.hasOwnProperty(type))
              throw new Error("unknown type: " + type);
            for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
              t[i].value.apply(that, args);
          }
        };

        function get(type, name) {
          for (var i = 0, n = type.length, c; i < n; ++i) {
            if ((c = type[i]).name === name) {
              return c.value;
            }
          }
        }

        function set(type, name, callback) {
          for (var i = 0, n = type.length; i < n; ++i) {
            if (type[i].name === name) {
              (type[i] = noop),
                (type = type.slice(0, i).concat(type.slice(i + 1)));
              break;
            }
          }
          if (callback != null) type.push({name: name, value: callback});
          return type;
        }

        /* harmony default export */ __webpack_exports__["default"] = dispatch;

        /***/
      },

    /***/ "./node_modules/d3-ease/index.js":
      /*!***************************************!*\
  !*** ./node_modules/d3-ease/index.js ***!
  \***************************************/
      /*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/linear */ "./node_modules/d3-ease/src/linear.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeLinear",
          function() {
            return _src_linear__WEBPACK_IMPORTED_MODULE_0__["linear"];
          }
        );

        /* harmony import */ var _src_quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/quad */ "./node_modules/d3-ease/src/quad.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeQuad",
          function() {
            return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeQuadIn",
          function() {
            return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeQuadOut",
          function() {
            return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeQuadInOut",
          function() {
            return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"];
          }
        );

        /* harmony import */ var _src_cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/cubic */ "./node_modules/d3-ease/src/cubic.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCubic",
          function() {
            return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCubicIn",
          function() {
            return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCubicOut",
          function() {
            return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCubicInOut",
          function() {
            return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"];
          }
        );

        /* harmony import */ var _src_poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/poly */ "./node_modules/d3-ease/src/poly.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easePoly",
          function() {
            return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easePolyIn",
          function() {
            return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easePolyOut",
          function() {
            return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easePolyInOut",
          function() {
            return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"];
          }
        );

        /* harmony import */ var _src_sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/sin */ "./node_modules/d3-ease/src/sin.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeSin",
          function() {
            return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeSinIn",
          function() {
            return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeSinOut",
          function() {
            return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeSinInOut",
          function() {
            return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"];
          }
        );

        /* harmony import */ var _src_exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/exp */ "./node_modules/d3-ease/src/exp.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeExp",
          function() {
            return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeExpIn",
          function() {
            return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeExpOut",
          function() {
            return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeExpInOut",
          function() {
            return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"];
          }
        );

        /* harmony import */ var _src_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/circle */ "./node_modules/d3-ease/src/circle.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCircle",
          function() {
            return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCircleIn",
          function() {
            return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCircleOut",
          function() {
            return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeCircleInOut",
          function() {
            return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"];
          }
        );

        /* harmony import */ var _src_bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/bounce */ "./node_modules/d3-ease/src/bounce.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBounce",
          function() {
            return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBounceIn",
          function() {
            return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBounceOut",
          function() {
            return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBounceInOut",
          function() {
            return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"];
          }
        );

        /* harmony import */ var _src_back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/back */ "./node_modules/d3-ease/src/back.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBack",
          function() {
            return _src_back__WEBPACK_IMPORTED_MODULE_8__["backInOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBackIn",
          function() {
            return _src_back__WEBPACK_IMPORTED_MODULE_8__["backIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBackOut",
          function() {
            return _src_back__WEBPACK_IMPORTED_MODULE_8__["backOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeBackInOut",
          function() {
            return _src_back__WEBPACK_IMPORTED_MODULE_8__["backInOut"];
          }
        );

        /* harmony import */ var _src_elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/elastic */ "./node_modules/d3-ease/src/elastic.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeElastic",
          function() {
            return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeElasticIn",
          function() {
            return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticIn"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeElasticOut",
          function() {
            return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "easeElasticInOut",
          function() {
            return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-ease/src/back.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
      /*! exports provided: backIn, backOut, backInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "backIn",
          function() {
            return backIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "backOut",
          function() {
            return backOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "backInOut",
          function() {
            return backInOut;
          }
        );
        var overshoot = 1.70158;

        var backIn = (function custom(s) {
          s = +s;

          function backIn(t) {
            return t * t * ((s + 1) * t - s);
          }

          backIn.overshoot = custom;

          return backIn;
        })(overshoot);

        var backOut = (function custom(s) {
          s = +s;

          function backOut(t) {
            return --t * t * ((s + 1) * t + s) + 1;
          }

          backOut.overshoot = custom;

          return backOut;
        })(overshoot);

        var backInOut = (function custom(s) {
          s = +s;

          function backInOut(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((s + 1) * t - s)
                : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2
            );
          }

          backInOut.overshoot = custom;

          return backInOut;
        })(overshoot);

        /***/
      },

    /***/ "./node_modules/d3-ease/src/bounce.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
      /*! exports provided: bounceIn, bounceOut, bounceInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bounceIn",
          function() {
            return bounceIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bounceOut",
          function() {
            return bounceOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bounceInOut",
          function() {
            return bounceInOut;
          }
        );
        var b1 = 4 / 11,
          b2 = 6 / 11,
          b3 = 8 / 11,
          b4 = 3 / 4,
          b5 = 9 / 11,
          b6 = 10 / 11,
          b7 = 15 / 16,
          b8 = 21 / 22,
          b9 = 63 / 64,
          b0 = 1 / b1 / b1;

        function bounceIn(t) {
          return 1 - bounceOut(1 - t);
        }

        function bounceOut(t) {
          return (t = +t) < b1
            ? b0 * t * t
            : t < b3
              ? b0 * (t -= b2) * t + b4
              : t < b6
                ? b0 * (t -= b5) * t + b7
                : b0 * (t -= b8) * t + b9;
        }

        function bounceInOut(t) {
          return (
            ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-ease/src/circle.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
      /*! exports provided: circleIn, circleOut, circleInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "circleIn",
          function() {
            return circleIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "circleOut",
          function() {
            return circleOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "circleInOut",
          function() {
            return circleInOut;
          }
        );
        function circleIn(t) {
          return 1 - Math.sqrt(1 - t * t);
        }

        function circleOut(t) {
          return Math.sqrt(1 - --t * t);
        }

        function circleInOut(t) {
          return (
            ((t *= 2) <= 1
              ? 1 - Math.sqrt(1 - t * t)
              : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-ease/src/cubic.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
      /*! exports provided: cubicIn, cubicOut, cubicInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cubicIn",
          function() {
            return cubicIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cubicOut",
          function() {
            return cubicOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cubicInOut",
          function() {
            return cubicInOut;
          }
        );
        function cubicIn(t) {
          return t * t * t;
        }

        function cubicOut(t) {
          return --t * t * t + 1;
        }

        function cubicInOut(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        }

        /***/
      },

    /***/ "./node_modules/d3-ease/src/elastic.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
      /*! exports provided: elasticIn, elasticOut, elasticInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "elasticIn",
          function() {
            return elasticIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "elasticOut",
          function() {
            return elasticOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "elasticInOut",
          function() {
            return elasticInOut;
          }
        );
        var tau = 2 * Math.PI,
          amplitude = 1,
          period = 0.3;

        var elasticIn = (function custom(a, p) {
          var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

          function elasticIn(t) {
            return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
          }

          elasticIn.amplitude = function(a) {
            return custom(a, p * tau);
          };
          elasticIn.period = function(p) {
            return custom(a, p);
          };

          return elasticIn;
        })(amplitude, period);

        var elasticOut = (function custom(a, p) {
          var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

          function elasticOut(t) {
            return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
          }

          elasticOut.amplitude = function(a) {
            return custom(a, p * tau);
          };
          elasticOut.period = function(p) {
            return custom(a, p);
          };

          return elasticOut;
        })(amplitude, period);

        var elasticInOut = (function custom(a, p) {
          var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

          function elasticInOut(t) {
            return (
              ((t = t * 2 - 1) < 0
                ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
                : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2
            );
          }

          elasticInOut.amplitude = function(a) {
            return custom(a, p * tau);
          };
          elasticInOut.period = function(p) {
            return custom(a, p);
          };

          return elasticInOut;
        })(amplitude, period);

        /***/
      },

    /***/ "./node_modules/d3-ease/src/exp.js":
      /*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
      /*! exports provided: expIn, expOut, expInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "expIn",
          function() {
            return expIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "expOut",
          function() {
            return expOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "expInOut",
          function() {
            return expInOut;
          }
        );
        function expIn(t) {
          return Math.pow(2, 10 * t - 10);
        }

        function expOut(t) {
          return 1 - Math.pow(2, -10 * t);
        }

        function expInOut(t) {
          return (
            ((t *= 2) <= 1
              ? Math.pow(2, 10 * t - 10)
              : 2 - Math.pow(2, 10 - 10 * t)) / 2
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-ease/src/linear.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
      /*! exports provided: linear */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "linear",
          function() {
            return linear;
          }
        );
        function linear(t) {
          return +t;
        }

        /***/
      },

    /***/ "./node_modules/d3-ease/src/poly.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
      /*! exports provided: polyIn, polyOut, polyInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "polyIn",
          function() {
            return polyIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "polyOut",
          function() {
            return polyOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "polyInOut",
          function() {
            return polyInOut;
          }
        );
        var exponent = 3;

        var polyIn = (function custom(e) {
          e = +e;

          function polyIn(t) {
            return Math.pow(t, e);
          }

          polyIn.exponent = custom;

          return polyIn;
        })(exponent);

        var polyOut = (function custom(e) {
          e = +e;

          function polyOut(t) {
            return 1 - Math.pow(1 - t, e);
          }

          polyOut.exponent = custom;

          return polyOut;
        })(exponent);

        var polyInOut = (function custom(e) {
          e = +e;

          function polyInOut(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            );
          }

          polyInOut.exponent = custom;

          return polyInOut;
        })(exponent);

        /***/
      },

    /***/ "./node_modules/d3-ease/src/quad.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
      /*! exports provided: quadIn, quadOut, quadInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "quadIn",
          function() {
            return quadIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "quadOut",
          function() {
            return quadOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "quadInOut",
          function() {
            return quadInOut;
          }
        );
        function quadIn(t) {
          return t * t;
        }

        function quadOut(t) {
          return t * (2 - t);
        }

        function quadInOut(t) {
          return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
        }

        /***/
      },

    /***/ "./node_modules/d3-ease/src/sin.js":
      /*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
      /*! exports provided: sinIn, sinOut, sinInOut */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sinIn",
          function() {
            return sinIn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sinOut",
          function() {
            return sinOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sinInOut",
          function() {
            return sinInOut;
          }
        );
        var pi = Math.PI,
          halfPi = pi / 2;

        function sinIn(t) {
          return 1 - Math.cos(t * halfPi);
        }

        function sinOut(t) {
          return Math.sin(t * halfPi);
        }

        function sinInOut(t) {
          return (1 - Math.cos(pi * t)) / 2;
        }

        /***/
      },

    /***/ "./node_modules/d3-format/index.js":
      /*!*****************************************!*\
  !*** ./node_modules/d3-format/index.js ***!
  \*****************************************/
      /*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/defaultLocale */ "./node_modules/d3-format/src/defaultLocale.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "formatDefaultLocale",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "format",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["format"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "formatPrefix",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__[
              "formatPrefix"
            ];
          }
        );

        /* harmony import */ var _src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/locale */ "./node_modules/d3-format/src/locale.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "formatLocale",
          function() {
            return _src_locale__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_formatSpecifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "formatSpecifier",
          function() {
            return _src_formatSpecifier__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_precisionFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/precisionFixed */ "./node_modules/d3-format/src/precisionFixed.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "precisionFixed",
          function() {
            return _src_precisionFixed__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_precisionPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/precisionPrefix */ "./node_modules/d3-format/src/precisionPrefix.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "precisionPrefix",
          function() {
            return _src_precisionPrefix__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony import */ var _src_precisionRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/precisionRound */ "./node_modules/d3-format/src/precisionRound.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "precisionRound",
          function() {
            return _src_precisionRound__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-format/src/defaultLocale.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
      /*! exports provided: format, formatPrefix, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "format",
          function() {
            return format;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "formatPrefix",
          function() {
            return formatPrefix;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return defaultLocale;
          }
        );
        /* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./locale */ "./node_modules/d3-format/src/locale.js"
        );

        var locale;
        var format;
        var formatPrefix;

        defaultLocale({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["$", ""]
        });

        function defaultLocale(definition) {
          locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(
            definition
          );
          format = locale.format;
          formatPrefix = locale.formatPrefix;
          return locale;
        }

        /***/
      },

    /***/ "./node_modules/d3-format/src/exponent.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return (
            (x = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(
              Math.abs(x)
            )),
            x ? x[1] : NaN
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatDecimal.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // Computes the decimal coefficient and exponent of the specified number x with
        // significant digits p, where x is positive and p is in [1, 21] or undefined.
        // For example, formatDecimal(1.23) returns ["123", 0].
        /* harmony default export */ __webpack_exports__["default"] = function(
          x,
          p
        ) {
          if (
            (i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null; // NaN, ±Infinity
          var i,
            coefficient = x.slice(0, i);

          // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
          // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
          return [
            coefficient.length > 1
              ? coefficient[0] + coefficient.slice(2)
              : coefficient,
            +x.slice(i + 1)
          ];
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatDefault.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDefault.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x,
          p
        ) {
          x = x.toPrecision(p);

          out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
            switch (x[i]) {
              case ".":
                i0 = i1 = i;
                break;
              case "0":
                if (i0 === 0) i0 = i;
                i1 = i;
                break;
              case "e":
                break out;
              default:
                if (i0 > 0) i0 = 0;
                break;
            }
          }

          return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatGroup.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          grouping,
          thousands
        ) {
          return function(value, width) {
            var i = value.length,
              t = [],
              j = 0,
              g = grouping[0],
              length = 0;

            while (i > 0 && g > 0) {
              if (length + g + 1 > width) g = Math.max(1, width - length);
              t.push(value.substring((i -= g), i + g));
              if ((length += g + 1) > width) break;
              g = grouping[(j = (j + 1) % grouping.length)];
            }

            return t.reverse().join(thousands);
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatNumerals.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          numerals
        ) {
          return function(value) {
            return value.replace(/[0-9]/g, function(i) {
              return numerals[+i];
            });
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
      /*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
      /*! exports provided: prefixExponent, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "prefixExponent",
          function() {
            return prefixExponent;
          }
        );
        /* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js"
        );

        var prefixExponent;

        /* harmony default export */ __webpack_exports__["default"] = function(
          x,
          p
        ) {
          var d = Object(
            _formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(x, p);
          if (!d) return x + "";
          var coefficient = d[0],
            exponent = d[1],
            i =
              exponent -
              (prefixExponent =
                Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) +
              1,
            n = coefficient.length;
          return i === n
            ? coefficient
            : i > n
              ? coefficient + new Array(i - n + 1).join("0")
              : i > 0
                ? coefficient.slice(0, i) + "." + coefficient.slice(i)
                : "0." +
                  new Array(1 - i).join("0") +
                  Object(
                    _formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(x, Math.max(0, p + i - 1))[0]; // less than 1y!
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatRounded.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          x,
          p
        ) {
          var d = Object(
            _formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(x, p);
          if (!d) return x + "";
          var coefficient = d[0],
            exponent = d[1];
          return exponent < 0
            ? "0." + new Array(-exponent).join("0") + coefficient
            : coefficient.length > exponent + 1
              ? coefficient.slice(0, exponent + 1) +
                "." +
                coefficient.slice(exponent + 1)
              : coefficient +
                new Array(exponent - coefficient.length + 2).join("0");
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatSpecifier.js":
      /*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return formatSpecifier;
          }
        );
        /* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./formatTypes */ "./node_modules/d3-format/src/formatTypes.js"
        );

        // [[fill]align][sign][symbol][0][width][,][.precision][type]
        var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

        function formatSpecifier(specifier) {
          return new FormatSpecifier(specifier);
        }

        formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

        function FormatSpecifier(specifier) {
          if (!(match = re.exec(specifier)))
            throw new Error("invalid format: " + specifier);

          var match,
            fill = match[1] || " ",
            align = match[2] || ">",
            sign = match[3] || "-",
            symbol = match[4] || "",
            zero = !!match[5],
            width = match[6] && +match[6],
            comma = !!match[7],
            precision = match[8] && +match[8].slice(1),
            type = match[9] || "";

          // The "n" type is an alias for ",g".
          if (type === "n") (comma = true), (type = "g");
          // Map invalid types to the default format.
          else if (!_formatTypes__WEBPACK_IMPORTED_MODULE_0__["default"][type])
            type = "";

          // If zero fill is specified, padding goes after sign and before digits.
          if (zero || (fill === "0" && align === "="))
            (zero = true), (fill = "0"), (align = "=");

          this.fill = fill;
          this.align = align;
          this.sign = sign;
          this.symbol = symbol;
          this.zero = zero;
          this.width = width;
          this.comma = comma;
          this.precision = precision;
          this.type = type;
        }

        FormatSpecifier.prototype.toString = function() {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (this.width == null ? "" : Math.max(1, this.width | 0)) +
            (this.comma ? "," : "") +
            (this.precision == null
              ? ""
              : "." + Math.max(0, this.precision | 0)) +
            this.type
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/formatTypes.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _formatDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./formatDefault */ "./node_modules/d3-format/src/formatDefault.js"
        );
        /* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js"
        );
        /* harmony import */ var _formatRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./formatRounded */ "./node_modules/d3-format/src/formatRounded.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = {
          "": _formatDefault__WEBPACK_IMPORTED_MODULE_0__["default"],
          "%": function(x, p) {
            return (x * 100).toFixed(p);
          },
          b: function(x) {
            return Math.round(x).toString(2);
          },
          c: function(x) {
            return x + "";
          },
          d: function(x) {
            return Math.round(x).toString(10);
          },
          e: function(x, p) {
            return x.toExponential(p);
          },
          f: function(x, p) {
            return x.toFixed(p);
          },
          g: function(x, p) {
            return x.toPrecision(p);
          },
          o: function(x) {
            return Math.round(x).toString(8);
          },
          p: function(x, p) {
            return Object(
              _formatRounded__WEBPACK_IMPORTED_MODULE_2__["default"]
            )(x * 100, p);
          },
          r: _formatRounded__WEBPACK_IMPORTED_MODULE_2__["default"],
          s: _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_1__["default"],
          X: function(x) {
            return Math.round(x)
              .toString(16)
              .toUpperCase();
          },
          x: function(x) {
            return Math.round(x).toString(16);
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/identity.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return x;
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/locale.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./exponent */ "./node_modules/d3-format/src/exponent.js"
        );
        /* harmony import */ var _formatGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./formatGroup */ "./node_modules/d3-format/src/formatGroup.js"
        );
        /* harmony import */ var _formatNumerals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./formatNumerals */ "./node_modules/d3-format/src/formatNumerals.js"
        );
        /* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js"
        );
        /* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./formatTypes */ "./node_modules/d3-format/src/formatTypes.js"
        );
        /* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js"
        );
        /* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./identity */ "./node_modules/d3-format/src/identity.js"
        );

        var prefixes = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y"
        ];

        /* harmony default export */ __webpack_exports__["default"] = function(
          locale
        ) {
          var group =
              locale.grouping && locale.thousands
                ? Object(_formatGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(
                    locale.grouping,
                    locale.thousands
                  )
                : _identity__WEBPACK_IMPORTED_MODULE_6__["default"],
            currency = locale.currency,
            decimal = locale.decimal,
            numerals = locale.numerals
              ? Object(_formatNumerals__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  locale.numerals
                )
              : _identity__WEBPACK_IMPORTED_MODULE_6__["default"],
            percent = locale.percent || "%";

          function newFormat(specifier) {
            specifier = Object(
              _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(specifier);

            var fill = specifier.fill,
              align = specifier.align,
              sign = specifier.sign,
              symbol = specifier.symbol,
              zero = specifier.zero,
              width = specifier.width,
              comma = specifier.comma,
              precision = specifier.precision,
              type = specifier.type;

            // Compute the prefix and suffix.
            // For SI-prefix, the suffix is lazily computed.
            var prefix =
                symbol === "$"
                  ? currency[0]
                  : symbol === "#" && /[boxX]/.test(type)
                    ? "0" + type.toLowerCase()
                    : "",
              suffix =
                symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

            // What format function should we use?
            // Is this an integer type?
            // Can this type generate exponential notation?
            var formatType =
                _formatTypes__WEBPACK_IMPORTED_MODULE_4__["default"][type],
              maybeSuffix = !type || /[defgprs%]/.test(type);

            // Set the default precision if not specified,
            // or clamp the specified precision to the supported range.
            // For significant precision, it must be in [1, 21].
            // For fixed precision, it must be in [0, 20].
            precision =
              precision == null
                ? type
                  ? 6
                  : 12
                : /[gprs]/.test(type)
                  ? Math.max(1, Math.min(21, precision))
                  : Math.max(0, Math.min(20, precision));

            function format(value) {
              var valuePrefix = prefix,
                valueSuffix = suffix,
                i,
                n,
                c;

              if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
              } else {
                value = +value;

                // Perform the initial formatting.
                var valueNegative = value < 0;
                value = formatType(Math.abs(value), precision);

                // If a negative value rounds to zero during formatting, treat as positive.
                if (valueNegative && +value === 0) valueNegative = false;

                // Compute the prefix and suffix.
                valuePrefix =
                  (valueNegative
                    ? sign === "("
                      ? sign
                      : "-"
                    : sign === "-" || sign === "("
                      ? ""
                      : sign) + valuePrefix;
                valueSuffix =
                  (type === "s"
                    ? prefixes[
                        8 +
                          _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_5__[
                            "prefixExponent"
                          ] /
                            3
                      ]
                    : "") +
                  valueSuffix +
                  (valueNegative && sign === "(" ? ")" : "");

                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                  (i = -1), (n = value.length);
                  while (++i < n) {
                    if (((c = value.charCodeAt(i)), 48 > c || c > 57)) {
                      valueSuffix =
                        (c === 46
                          ? decimal + value.slice(i + 1)
                          : value.slice(i)) + valueSuffix;
                      value = value.slice(0, i);
                      break;
                    }
                  }
                }
              }

              // If the fill character is not "0", grouping is applied before padding.
              if (comma && !zero) value = group(value, Infinity);

              // Compute the padding.
              var length =
                  valuePrefix.length + value.length + valueSuffix.length,
                padding =
                  length < width
                    ? new Array(width - length + 1).join(fill)
                    : "";

              // If the fill character is "0", grouping is applied after padding.
              if (comma && zero)
                (value = group(
                  padding + value,
                  padding.length ? width - valueSuffix.length : Infinity
                )),
                  (padding = "");

              // Reconstruct the final output based on the desired alignment.
              switch (align) {
                case "<":
                  value = valuePrefix + value + valueSuffix + padding;
                  break;
                case "=":
                  value = valuePrefix + padding + value + valueSuffix;
                  break;
                case "^":
                  value =
                    padding.slice(0, (length = padding.length >> 1)) +
                    valuePrefix +
                    value +
                    valueSuffix +
                    padding.slice(length);
                  break;
                default:
                  value = padding + valuePrefix + value + valueSuffix;
                  break;
              }

              return numerals(value);
            }

            format.toString = function() {
              return specifier + "";
            };

            return format;
          }

          function formatPrefix(specifier, value) {
            var f = newFormat(
                ((specifier = Object(
                  _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"]
                )(specifier)),
                (specifier.type = "f"),
                specifier)
              ),
              e =
                Math.max(
                  -8,
                  Math.min(
                    8,
                    Math.floor(
                      Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(
                        value
                      ) / 3
                    )
                  )
                ) * 3,
              k = Math.pow(10, -e),
              prefix = prefixes[8 + e / 3];
            return function(value) {
              return f(k * value) + prefix;
            };
          }

          return {
            format: newFormat,
            formatPrefix: formatPrefix
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/precisionFixed.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./exponent */ "./node_modules/d3-format/src/exponent.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          step
        ) {
          return Math.max(
            0,
            -Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(
              Math.abs(step)
            )
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/precisionPrefix.js":
      /*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./exponent */ "./node_modules/d3-format/src/exponent.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          step,
          value
        ) {
          return Math.max(
            0,
            Math.max(
              -8,
              Math.min(
                8,
                Math.floor(
                  Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    value
                  ) / 3
                )
              )
            ) *
              3 -
              Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(
                Math.abs(step)
              )
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-format/src/precisionRound.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./exponent */ "./node_modules/d3-format/src/exponent.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          step,
          max
        ) {
          (step = Math.abs(step)), (max = Math.abs(max) - step);
          return (
            Math.max(
              0,
              Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(max) -
                Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(step)
            ) + 1
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/index.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-interpolate/index.js ***!
  \**********************************************/
      /*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, quantize */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/value */ "./node_modules/d3-interpolate/src/value.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolate",
          function() {
            return _src_value__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony import */ var _src_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/array */ "./node_modules/d3-interpolate/src/array.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateArray",
          function() {
            return _src_array__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/basis */ "./node_modules/d3-interpolate/src/basis.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateBasis",
          function() {
            return _src_basis__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateBasisClosed",
          function() {
            return _src_basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/date */ "./node_modules/d3-interpolate/src/date.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateDate",
          function() {
            return _src_date__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/number */ "./node_modules/d3-interpolate/src/number.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateNumber",
          function() {
            return _src_number__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony import */ var _src_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/object */ "./node_modules/d3-interpolate/src/object.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateObject",
          function() {
            return _src_object__WEBPACK_IMPORTED_MODULE_6__["default"];
          }
        );

        /* harmony import */ var _src_round__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/round */ "./node_modules/d3-interpolate/src/round.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateRound",
          function() {
            return _src_round__WEBPACK_IMPORTED_MODULE_7__["default"];
          }
        );

        /* harmony import */ var _src_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/string */ "./node_modules/d3-interpolate/src/string.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateString",
          function() {
            return _src_string__WEBPACK_IMPORTED_MODULE_8__["default"];
          }
        );

        /* harmony import */ var _src_transform_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/transform/index */ "./node_modules/d3-interpolate/src/transform/index.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateTransformCss",
          function() {
            return _src_transform_index__WEBPACK_IMPORTED_MODULE_9__[
              "interpolateTransformCss"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateTransformSvg",
          function() {
            return _src_transform_index__WEBPACK_IMPORTED_MODULE_9__[
              "interpolateTransformSvg"
            ];
          }
        );

        /* harmony import */ var _src_zoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./src/zoom */ "./node_modules/d3-interpolate/src/zoom.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateZoom",
          function() {
            return _src_zoom__WEBPACK_IMPORTED_MODULE_10__["default"];
          }
        );

        /* harmony import */ var _src_rgb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./src/rgb */ "./node_modules/d3-interpolate/src/rgb.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateRgb",
          function() {
            return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateRgbBasis",
          function() {
            return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["rgbBasis"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateRgbBasisClosed",
          function() {
            return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["rgbBasisClosed"];
          }
        );

        /* harmony import */ var _src_hsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./src/hsl */ "./node_modules/d3-interpolate/src/hsl.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateHsl",
          function() {
            return _src_hsl__WEBPACK_IMPORTED_MODULE_12__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateHslLong",
          function() {
            return _src_hsl__WEBPACK_IMPORTED_MODULE_12__["hslLong"];
          }
        );

        /* harmony import */ var _src_lab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./src/lab */ "./node_modules/d3-interpolate/src/lab.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateLab",
          function() {
            return _src_lab__WEBPACK_IMPORTED_MODULE_13__["default"];
          }
        );

        /* harmony import */ var _src_hcl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./src/hcl */ "./node_modules/d3-interpolate/src/hcl.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateHcl",
          function() {
            return _src_hcl__WEBPACK_IMPORTED_MODULE_14__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateHclLong",
          function() {
            return _src_hcl__WEBPACK_IMPORTED_MODULE_14__["hclLong"];
          }
        );

        /* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./src/cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateCubehelix",
          function() {
            return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateCubehelixLong",
          function() {
            return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__[
              "cubehelixLong"
            ];
          }
        );

        /* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./src/quantize */ "./node_modules/d3-interpolate/src/quantize.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "quantize",
          function() {
            return _src_quantize__WEBPACK_IMPORTED_MODULE_16__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/array.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./value */ "./node_modules/d3-interpolate/src/value.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          var nb = b ? b.length : 0,
            na = a ? Math.min(nb, a.length) : 0,
            x = new Array(na),
            c = new Array(nb),
            i;

          for (i = 0; i < na; ++i)
            x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(
              a[i],
              b[i]
            );
          for (; i < nb; ++i) c[i] = b[i];

          return function(t) {
            for (i = 0; i < na; ++i) c[i] = x[i](t);
            return c;
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/basis.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
      /*! exports provided: basis, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "basis",
          function() {
            return basis;
          }
        );
        function basis(t1, v0, v1, v2, v3) {
          var t2 = t1 * t1,
            t3 = t2 * t1;
          return (
            ((1 - 3 * t1 + 3 * t2 - t3) * v0 +
              (4 - 6 * t2 + 3 * t3) * v1 +
              (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 +
              t3 * v3) /
            6
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          values
        ) {
          var n = values.length - 1;
          return function(t) {
            var i =
                t <= 0
                  ? (t = 0)
                  : t >= 1
                    ? ((t = 1), n - 1)
                    : Math.floor(t * n),
              v1 = values[i],
              v2 = values[i + 1],
              v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
              v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
            return basis((t - i / n) * n, v0, v1, v2, v3);
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/basisClosed.js":
      /*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./basis */ "./node_modules/d3-interpolate/src/basis.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          values
        ) {
          var n = values.length;
          return function(t) {
            var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
              v0 = values[(i + n - 1) % n],
              v1 = values[i % n],
              v2 = values[(i + 1) % n],
              v3 = values[(i + 2) % n];
            return Object(_basis__WEBPACK_IMPORTED_MODULE_0__["basis"])(
              (t - i / n) * n,
              v0,
              v1,
              v2,
              v3
            );
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/color.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
      /*! exports provided: hue, gamma, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hue",
          function() {
            return hue;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "gamma",
          function() {
            return gamma;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return nogamma;
          }
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-interpolate/src/constant.js"
        );

        function linear(a, d) {
          return function(t) {
            return a + t * d;
          };
        }

        function exponential(a, b, y) {
          return (
            (a = Math.pow(a, y)),
            (b = Math.pow(b, y) - a),
            (y = 1 / y),
            function(t) {
              return Math.pow(a + t * b, y);
            }
          );
        }

        function hue(a, b) {
          var d = b - a;
          return d
            ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d)
            : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                isNaN(a) ? b : a
              );
        }

        function gamma(y) {
          return (y = +y) === 1
            ? nogamma
            : function(a, b) {
                return b - a
                  ? exponential(a, b, y)
                  : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                      isNaN(a) ? b : a
                    );
              };
        }

        function nogamma(a, b) {
          var d = b - a;
          return d
            ? linear(a, d)
            : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                isNaN(a) ? b : a
              );
        }

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/constant.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
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

    /***/ "./node_modules/d3-interpolate/src/cubehelix.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
      /*! exports provided: default, cubehelixLong */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cubehelixLong",
          function() {
            return cubehelixLong;
          }
        );
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-interpolate/src/color.js"
        );

        function cubehelix(hue) {
          return (function cubehelixGamma(y) {
            y = +y;

            function cubehelix(start, end) {
              var h = hue(
                  (start = Object(
                    d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"]
                  )(start)).h,
                  (end = Object(
                    d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"]
                  )(end)).h
                ),
                s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  start.s,
                  end.s
                ),
                l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  start.l,
                  end.l
                ),
                opacity = Object(
                  _color__WEBPACK_IMPORTED_MODULE_1__["default"]
                )(start.opacity, end.opacity);
              return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
              };
            }

            cubehelix.gamma = cubehelixGamma;

            return cubehelix;
          })(1);
        }

        /* harmony default export */ __webpack_exports__["default"] = cubehelix(
          _color__WEBPACK_IMPORTED_MODULE_1__["hue"]
        );
        var cubehelixLong = cubehelix(
          _color__WEBPACK_IMPORTED_MODULE_1__["default"]
        );

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/date.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          var d = new Date();
          return (
            (a = +a),
            (b -= a),
            function(t) {
              return d.setTime(a + b * t), d;
            }
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/hcl.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
      /*! exports provided: default, hclLong */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hclLong",
          function() {
            return hclLong;
          }
        );
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-interpolate/src/color.js"
        );

        function hcl(hue) {
          return function(start, end) {
            var h = hue(
                (start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(
                  start
                )).h,
                (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(
                  end
                )).h
              ),
              c = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                start.c,
                end.c
              ),
              l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                start.l,
                end.l
              ),
              opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                start.opacity,
                end.opacity
              );
            return function(t) {
              start.h = h(t);
              start.c = c(t);
              start.l = l(t);
              start.opacity = opacity(t);
              return start + "";
            };
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = hcl(
          _color__WEBPACK_IMPORTED_MODULE_1__["hue"]
        );
        var hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/hsl.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
      /*! exports provided: default, hslLong */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hslLong",
          function() {
            return hslLong;
          }
        );
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-interpolate/src/color.js"
        );

        function hsl(hue) {
          return function(start, end) {
            var h = hue(
                (start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(
                  start
                )).h,
                (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(
                  end
                )).h
              ),
              s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                start.s,
                end.s
              ),
              l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                start.l,
                end.l
              ),
              opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
                start.opacity,
                end.opacity
              );
            return function(t) {
              start.h = h(t);
              start.s = s(t);
              start.l = l(t);
              start.opacity = opacity(t);
              return start + "";
            };
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = hsl(
          _color__WEBPACK_IMPORTED_MODULE_1__["hue"]
        );
        var hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/lab.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return lab;
          }
        );
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-interpolate/src/color.js"
        );

        function lab(start, end) {
          var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
              (start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(
                start
              )).l,
              (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end))
                .l
            ),
            a = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
              start.a,
              end.a
            ),
            b = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
              start.b,
              end.b
            ),
            opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(
              start.opacity,
              end.opacity
            );
          return function(t) {
            start.l = l(t);
            start.a = a(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
          };
        }

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/number.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          return (
            (a = +a),
            (b -= a),
            function(t) {
              return a + b * t;
            }
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/object.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./value */ "./node_modules/d3-interpolate/src/value.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          var i = {},
            c = {},
            k;

          if (a === null || typeof a !== "object") a = {};
          if (b === null || typeof b !== "object") b = {};

          for (k in b) {
            if (k in a) {
              i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(
                a[k],
                b[k]
              );
            } else {
              c[k] = b[k];
            }
          }

          return function(t) {
            for (k in i) c[k] = i[k](t);
            return c;
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/quantize.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          interpolator,
          n
        ) {
          var samples = new Array(n);
          for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
          return samples;
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/rgb.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
      /*! exports provided: default, rgbBasis, rgbBasisClosed */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rgbBasis",
          function() {
            return rgbBasis;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rgbBasisClosed",
          function() {
            return rgbBasisClosed;
          }
        );
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./basis */ "./node_modules/d3-interpolate/src/basis.js"
        );
        /* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js"
        );
        /* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./color */ "./node_modules/d3-interpolate/src/color.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function rgbGamma(y) {
          var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

          function rgb(start, end) {
            var r = color(
                (start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(
                  start
                )).r,
                (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(
                  end
                )).r
              ),
              g = color(start.g, end.g),
              b = color(start.b, end.b),
              opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__["default"])(
                start.opacity,
                end.opacity
              );
            return function(t) {
              start.r = r(t);
              start.g = g(t);
              start.b = b(t);
              start.opacity = opacity(t);
              return start + "";
            };
          }

          rgb.gamma = rgbGamma;

          return rgb;
        })(1);

        function rgbSpline(spline) {
          return function(colors) {
            var n = colors.length,
              r = new Array(n),
              g = new Array(n),
              b = new Array(n),
              i,
              color;
            for (i = 0; i < n; ++i) {
              color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(
                colors[i]
              );
              r[i] = color.r || 0;
              g[i] = color.g || 0;
              b[i] = color.b || 0;
            }
            r = spline(r);
            g = spline(g);
            b = spline(b);
            color.opacity = 1;
            return function(t) {
              color.r = r(t);
              color.g = g(t);
              color.b = b(t);
              return color + "";
            };
          };
        }

        var rgbBasis = rgbSpline(
          _basis__WEBPACK_IMPORTED_MODULE_1__["default"]
        );
        var rgbBasisClosed = rgbSpline(
          _basisClosed__WEBPACK_IMPORTED_MODULE_2__["default"]
        );

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/round.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          return (
            (a = +a),
            (b -= a),
            function(t) {
              return Math.round(a + b * t);
            }
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/string.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-interpolate/src/number.js"
        );

        var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          reB = new RegExp(reA.source, "g");

        function zero(b) {
          return function() {
            return b;
          };
        }

        function one(b) {
          return function(t) {
            return b(t) + "";
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          var bi = (reA.lastIndex = reB.lastIndex = 0), // scan index for next number in b
            am, // current match in a
            bm, // current match in b
            bs, // string preceding current number in b, if any
            i = -1, // index in s
            s = [], // string constants and placeholders
            q = []; // number interpolators

          // Coerce inputs to strings.
          (a = a + ""), (b = b + "");

          // Interpolate pairs of numbers in a & b.
          while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
            if ((bs = bm.index) > bi) {
              // a string precedes the next number in b
              bs = b.slice(bi, bs);
              if (s[i]) s[i] += bs;
              // coalesce with previous string
              else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
              // numbers in a & b match
              if (s[i]) s[i] += bm;
              // coalesce with previous string
              else s[++i] = bm;
            } else {
              // interpolate non-matching numbers
              s[++i] = null;
              q.push({
                i: i,
                x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  am,
                  bm
                )
              });
            }
            bi = reB.lastIndex;
          }

          // Add remains of b.
          if (bi < b.length) {
            bs = b.slice(bi);
            if (s[i]) s[i] += bs;
            // coalesce with previous string
            else s[++i] = bs;
          }

          // Special optimization for only a single match.
          // Otherwise, interpolate each of the numbers and rejoin the string.
          return s.length < 2
            ? q[0]
              ? one(q[0].x)
              : zero(b)
            : ((b = q.length),
              function(t) {
                for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
                return s.join("");
              });
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
      /*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
      /*! exports provided: identity, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "identity",
          function() {
            return identity;
          }
        );
        var degrees = 180 / Math.PI;

        var identity = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b,
          c,
          d,
          e,
          f
        ) {
          var scaleX, scaleY, skewX;
          if ((scaleX = Math.sqrt(a * a + b * b))) (a /= scaleX), (b /= scaleX);
          if ((skewX = a * c + b * d)) (c -= a * skewX), (d -= b * skewX);
          if ((scaleY = Math.sqrt(c * c + d * d)))
            (c /= scaleY), (d /= scaleY), (skewX /= scaleY);
          if (a * d < b * c)
            (a = -a), (b = -b), (skewX = -skewX), (scaleX = -scaleX);
          return {
            translateX: e,
            translateY: f,
            rotate: Math.atan2(b, a) * degrees,
            skewX: Math.atan(skewX) * degrees,
            scaleX: scaleX,
            scaleY: scaleY
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/transform/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
      /*! exports provided: interpolateTransformCss, interpolateTransformSvg */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateTransformCss",
          function() {
            return interpolateTransformCss;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateTransformSvg",
          function() {
            return interpolateTransformSvg;
          }
        );
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../number */ "./node_modules/d3-interpolate/src/number.js"
        );
        /* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./parse */ "./node_modules/d3-interpolate/src/transform/parse.js"
        );

        function interpolateTransform(parse, pxComma, pxParen, degParen) {
          function pop(s) {
            return s.length ? s.pop() + " " : "";
          }

          function translate(xa, ya, xb, yb, s, q) {
            if (xa !== xb || ya !== yb) {
              var i = s.push("translate(", null, pxComma, null, pxParen);
              q.push(
                {
                  i: i - 4,
                  x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    xa,
                    xb
                  )
                },
                {
                  i: i - 2,
                  x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    ya,
                    yb
                  )
                }
              );
            } else if (xb || yb) {
              s.push("translate(" + xb + pxComma + yb + pxParen);
            }
          }

          function rotate(a, b, s, q) {
            if (a !== b) {
              if (a - b > 180) b += 360;
              else if (b - a > 180) a += 360; // shortest path
              q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)
              });
            } else if (b) {
              s.push(pop(s) + "rotate(" + b + degParen);
            }
          }

          function skewX(a, b, s, q) {
            if (a !== b) {
              q.push({
                i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)
              });
            } else if (b) {
              s.push(pop(s) + "skewX(" + b + degParen);
            }
          }

          function scale(xa, ya, xb, yb, s, q) {
            if (xa !== xb || ya !== yb) {
              var i = s.push(pop(s) + "scale(", null, ",", null, ")");
              q.push(
                {
                  i: i - 4,
                  x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    xa,
                    xb
                  )
                },
                {
                  i: i - 2,
                  x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    ya,
                    yb
                  )
                }
              );
            } else if (xb !== 1 || yb !== 1) {
              s.push(pop(s) + "scale(" + xb + "," + yb + ")");
            }
          }

          return function(a, b) {
            var s = [], // string constants and placeholders
              q = []; // number interpolators
            (a = parse(a)), (b = parse(b));
            translate(
              a.translateX,
              a.translateY,
              b.translateX,
              b.translateY,
              s,
              q
            );
            rotate(a.rotate, b.rotate, s, q);
            skewX(a.skewX, b.skewX, s, q);
            scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
            a = b = null; // gc
            return function(t) {
              var i = -1,
                n = q.length,
                o;
              while (++i < n) s[(o = q[i]).i] = o.x(t);
              return s.join("");
            };
          };
        }

        var interpolateTransformCss = interpolateTransform(
          _parse__WEBPACK_IMPORTED_MODULE_1__["parseCss"],
          "px, ",
          "px)",
          "deg)"
        );
        var interpolateTransformSvg = interpolateTransform(
          _parse__WEBPACK_IMPORTED_MODULE_1__["parseSvg"],
          ", ",
          ")",
          ")"
        );

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/transform/parse.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
      /*! exports provided: parseCss, parseSvg */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "parseCss",
          function() {
            return parseCss;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "parseSvg",
          function() {
            return parseSvg;
          }
        );
        /* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./decompose */ "./node_modules/d3-interpolate/src/transform/decompose.js"
        );

        var cssNode, cssRoot, cssView, svgNode;

        function parseCss(value) {
          if (value === "none")
            return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
          if (!cssNode)
            (cssNode = document.createElement("DIV")),
              (cssRoot = document.documentElement),
              (cssView = document.defaultView);
          cssNode.style.transform = value;
          value = cssView
            .getComputedStyle(cssRoot.appendChild(cssNode), null)
            .getPropertyValue("transform");
          cssRoot.removeChild(cssNode);
          value = value.slice(7, -1).split(",");
          return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(
            +value[0],
            +value[1],
            +value[2],
            +value[3],
            +value[4],
            +value[5]
          );
        }

        function parseSvg(value) {
          if (value == null)
            return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
          if (!svgNode)
            svgNode = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "g"
            );
          svgNode.setAttribute("transform", value);
          if (!(value = svgNode.transform.baseVal.consolidate()))
            return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
          value = value.matrix;
          return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(
            value.a,
            value.b,
            value.c,
            value.d,
            value.e,
            value.f
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/value.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-interpolate/src/array.js"
        );
        /* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./date */ "./node_modules/d3-interpolate/src/date.js"
        );
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-interpolate/src/number.js"
        );
        /* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./object */ "./node_modules/d3-interpolate/src/object.js"
        );
        /* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./string */ "./node_modules/d3-interpolate/src/string.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-interpolate/src/constant.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          var t = typeof b,
            c;
          return b == null || t === "boolean"
            ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
            : (t === "number"
                ? _number__WEBPACK_IMPORTED_MODULE_4__["default"]
                : t === "string"
                  ? (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(
                      b
                    ))
                    ? ((b = c), _rgb__WEBPACK_IMPORTED_MODULE_1__["default"])
                    : _string__WEBPACK_IMPORTED_MODULE_6__["default"]
                  : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"]
                    ? _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]
                    : b instanceof Date
                      ? _date__WEBPACK_IMPORTED_MODULE_3__["default"]
                      : Array.isArray(b)
                        ? _array__WEBPACK_IMPORTED_MODULE_2__["default"]
                        : (typeof b.valueOf !== "function" &&
                            typeof b.toString !== "function") ||
                          isNaN(b)
                          ? _object__WEBPACK_IMPORTED_MODULE_5__["default"]
                          : _number__WEBPACK_IMPORTED_MODULE_4__["default"])(
                a,
                b
              );
        };

        /***/
      },

    /***/ "./node_modules/d3-interpolate/src/zoom.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var rho = Math.SQRT2,
          rho2 = 2,
          rho4 = 4,
          epsilon2 = 1e-12;

        function cosh(x) {
          return ((x = Math.exp(x)) + 1 / x) / 2;
        }

        function sinh(x) {
          return ((x = Math.exp(x)) - 1 / x) / 2;
        }

        function tanh(x) {
          return ((x = Math.exp(2 * x)) - 1) / (x + 1);
        }

        // p0 = [ux0, uy0, w0]
        // p1 = [ux1, uy1, w1]
        /* harmony default export */ __webpack_exports__["default"] = function(
          p0,
          p1
        ) {
          var ux0 = p0[0],
            uy0 = p0[1],
            w0 = p0[2],
            ux1 = p1[0],
            uy1 = p1[1],
            w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;

          // Special case for u0 ≅ u1.
          if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
              return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
            };
          }

          // General case.
          else {
            var d1 = Math.sqrt(d2),
              b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
              b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
              r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
              r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
              var s = t * S,
                coshr0 = cosh(r0),
                u =
                  (w0 / (rho2 * d1)) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
              return [
                ux0 + u * dx,
                uy0 + u * dy,
                (w0 * coshr0) / cosh(rho * s + r0)
              ];
            };
          }

          i.duration = S * 1000;

          return i;
        };

        /***/
      },

    /***/ "./node_modules/d3-path/index.js":
      /*!***************************************!*\
  !*** ./node_modules/d3-path/index.js ***!
  \***************************************/
      /*! exports provided: path */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/path */ "./node_modules/d3-path/src/path.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "path",
          function() {
            return _src_path__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-path/src/path.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var pi = Math.PI,
          tau = 2 * pi,
          epsilon = 1e-6,
          tauEpsilon = tau - epsilon;

        function Path() {
          this._x0 = this._y0 = this._x1 = this._y1 = null; // start of current subpath // end of current subpath
          this._ = "";
        }

        function path() {
          return new Path();
        }

        Path.prototype = path.prototype = {
          constructor: Path,
          moveTo: function(x, y) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +x) +
              "," +
              (this._y0 = this._y1 = +y);
          },
          closePath: function() {
            if (this._x1 !== null) {
              (this._x1 = this._x0), (this._y1 = this._y0);
              this._ += "Z";
            }
          },
          lineTo: function(x, y) {
            this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
          },
          quadraticCurveTo: function(x1, y1, x, y) {
            this._ +=
              "Q" +
              +x1 +
              "," +
              +y1 +
              "," +
              (this._x1 = +x) +
              "," +
              (this._y1 = +y);
          },
          bezierCurveTo: function(x1, y1, x2, y2, x, y) {
            this._ +=
              "C" +
              +x1 +
              "," +
              +y1 +
              "," +
              +x2 +
              "," +
              +y2 +
              "," +
              (this._x1 = +x) +
              "," +
              (this._y1 = +y);
          },
          arcTo: function(x1, y1, x2, y2, r) {
            (x1 = +x1), (y1 = +y1), (x2 = +x2), (y2 = +y2), (r = +r);
            var x0 = this._x1,
              y0 = this._y1,
              x21 = x2 - x1,
              y21 = y2 - y1,
              x01 = x0 - x1,
              y01 = y0 - y1,
              l01_2 = x01 * x01 + y01 * y01;

            // Is the radius negative? Error.
            if (r < 0) throw new Error("negative radius: " + r);

            // Is this path empty? Move to (x1,y1).
            if (this._x1 === null) {
              this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
            }

            // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
            else if (!(l01_2 > epsilon)) {
            }

            // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
            // Equivalently, is (x1,y1) coincident with (x2,y2)?
            // Or, is the radius zero? Line to (x1,y1).
            else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
              this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
            }

            // Otherwise, draw an arc!
            else {
              var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l =
                  r *
                  Math.tan(
                    (pi -
                      Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) /
                      2
                  ),
                t01 = l / l01,
                t21 = l / l21;

              // If the start tangent is not coincident with (x0,y0), line to.
              if (Math.abs(t01 - 1) > epsilon) {
                this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
              }

              this._ +=
                "A" +
                r +
                "," +
                r +
                ",0,0," +
                +(y01 * x20 > x01 * y20) +
                "," +
                (this._x1 = x1 + t21 * x21) +
                "," +
                (this._y1 = y1 + t21 * y21);
            }
          },
          arc: function(x, y, r, a0, a1, ccw) {
            (x = +x), (y = +y), (r = +r);
            var dx = r * Math.cos(a0),
              dy = r * Math.sin(a0),
              x0 = x + dx,
              y0 = y + dy,
              cw = 1 ^ ccw,
              da = ccw ? a0 - a1 : a1 - a0;

            // Is the radius negative? Error.
            if (r < 0) throw new Error("negative radius: " + r);

            // Is this path empty? Move to (x0,y0).
            if (this._x1 === null) {
              this._ += "M" + x0 + "," + y0;
            }

            // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
            else if (
              Math.abs(this._x1 - x0) > epsilon ||
              Math.abs(this._y1 - y0) > epsilon
            ) {
              this._ += "L" + x0 + "," + y0;
            }

            // Is this arc empty? We’re done.
            if (!r) return;

            // Does the angle go the wrong way? Flip the direction.
            if (da < 0) da = (da % tau) + tau;

            // Is this a complete circle? Draw two arcs to complete the circle.
            if (da > tauEpsilon) {
              this._ +=
                "A" +
                r +
                "," +
                r +
                ",0,1," +
                cw +
                "," +
                (x - dx) +
                "," +
                (y - dy) +
                "A" +
                r +
                "," +
                r +
                ",0,1," +
                cw +
                "," +
                (this._x1 = x0) +
                "," +
                (this._y1 = y0);
            }

            // Is this arc non-empty? Draw an arc!
            else if (da > epsilon) {
              this._ +=
                "A" +
                r +
                "," +
                r +
                ",0," +
                +(da >= pi) +
                "," +
                cw +
                "," +
                (this._x1 = x + r * Math.cos(a1)) +
                "," +
                (this._y1 = y + r * Math.sin(a1));
            }
          },
          rect: function(x, y, w, h) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +x) +
              "," +
              (this._y0 = this._y1 = +y) +
              "h" +
              +w +
              "v" +
              +h +
              "h" +
              -w +
              "Z";
          },
          toString: function() {
            return this._;
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = path;

        /***/
      },

    /***/ "./node_modules/d3-scale/index.js":
      /*!****************************************!*\
  !*** ./node_modules/d3-scale/index.js ***!
  \****************************************/
      /*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, schemeCategory10, schemeCategory20b, schemeCategory20c, schemeCategory20, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, scaleSequential */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/band */ "./node_modules/d3-scale/src/band.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleBand",
          function() {
            return _src_band__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scalePoint",
          function() {
            return _src_band__WEBPACK_IMPORTED_MODULE_0__["point"];
          }
        );

        /* harmony import */ var _src_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/identity */ "./node_modules/d3-scale/src/identity.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleIdentity",
          function() {
            return _src_identity__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/linear */ "./node_modules/d3-scale/src/linear.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleLinear",
          function() {
            return _src_linear__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/log */ "./node_modules/d3-scale/src/log.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleLog",
          function() {
            return _src_log__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/ordinal */ "./node_modules/d3-scale/src/ordinal.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleOrdinal",
          function() {
            return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleImplicit",
          function() {
            return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"];
          }
        );

        /* harmony import */ var _src_pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/pow */ "./node_modules/d3-scale/src/pow.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scalePow",
          function() {
            return _src_pow__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleSqrt",
          function() {
            return _src_pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"];
          }
        );

        /* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/quantile */ "./node_modules/d3-scale/src/quantile.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleQuantile",
          function() {
            return _src_quantile__WEBPACK_IMPORTED_MODULE_6__["default"];
          }
        );

        /* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/quantize */ "./node_modules/d3-scale/src/quantize.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleQuantize",
          function() {
            return _src_quantize__WEBPACK_IMPORTED_MODULE_7__["default"];
          }
        );

        /* harmony import */ var _src_threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/threshold */ "./node_modules/d3-scale/src/threshold.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleThreshold",
          function() {
            return _src_threshold__WEBPACK_IMPORTED_MODULE_8__["default"];
          }
        );

        /* harmony import */ var _src_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/time */ "./node_modules/d3-scale/src/time.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleTime",
          function() {
            return _src_time__WEBPACK_IMPORTED_MODULE_9__["default"];
          }
        );

        /* harmony import */ var _src_utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./src/utcTime */ "./node_modules/d3-scale/src/utcTime.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleUtc",
          function() {
            return _src_utcTime__WEBPACK_IMPORTED_MODULE_10__["default"];
          }
        );

        /* harmony import */ var _src_category10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./src/category10 */ "./node_modules/d3-scale/src/category10.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "schemeCategory10",
          function() {
            return _src_category10__WEBPACK_IMPORTED_MODULE_11__["default"];
          }
        );

        /* harmony import */ var _src_category20b__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./src/category20b */ "./node_modules/d3-scale/src/category20b.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "schemeCategory20b",
          function() {
            return _src_category20b__WEBPACK_IMPORTED_MODULE_12__["default"];
          }
        );

        /* harmony import */ var _src_category20c__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./src/category20c */ "./node_modules/d3-scale/src/category20c.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "schemeCategory20c",
          function() {
            return _src_category20c__WEBPACK_IMPORTED_MODULE_13__["default"];
          }
        );

        /* harmony import */ var _src_category20__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./src/category20 */ "./node_modules/d3-scale/src/category20.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "schemeCategory20",
          function() {
            return _src_category20__WEBPACK_IMPORTED_MODULE_14__["default"];
          }
        );

        /* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./src/cubehelix */ "./node_modules/d3-scale/src/cubehelix.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateCubehelixDefault",
          function() {
            return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["default"];
          }
        );

        /* harmony import */ var _src_rainbow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./src/rainbow */ "./node_modules/d3-scale/src/rainbow.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateRainbow",
          function() {
            return _src_rainbow__WEBPACK_IMPORTED_MODULE_16__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateWarm",
          function() {
            return _src_rainbow__WEBPACK_IMPORTED_MODULE_16__["warm"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateCool",
          function() {
            return _src_rainbow__WEBPACK_IMPORTED_MODULE_16__["cool"];
          }
        );

        /* harmony import */ var _src_viridis__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./src/viridis */ "./node_modules/d3-scale/src/viridis.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateViridis",
          function() {
            return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateMagma",
          function() {
            return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["magma"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolateInferno",
          function() {
            return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["inferno"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interpolatePlasma",
          function() {
            return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["plasma"];
          }
        );

        /* harmony import */ var _src_sequential__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./src/sequential */ "./node_modules/d3-scale/src/sequential.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "scaleSequential",
          function() {
            return _src_sequential__WEBPACK_IMPORTED_MODULE_18__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-scale/src/array.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
      /*! exports provided: map, slice */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "map",
          function() {
            return map;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slice",
          function() {
            return slice;
          }
        );
        var array = Array.prototype;

        var map = array.map;
        var slice = array.slice;

        /***/
      },

    /***/ "./node_modules/d3-scale/src/band.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
      /*! exports provided: default, point */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return band;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "point",
          function() {
            return point;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js"
        );

        function band() {
          var scale = Object(
              _ordinal__WEBPACK_IMPORTED_MODULE_1__["default"]
            )().unknown(undefined),
            domain = scale.domain,
            ordinalRange = scale.range,
            range = [0, 1],
            step,
            bandwidth,
            round = false,
            paddingInner = 0,
            paddingOuter = 0,
            align = 0.5;

          delete scale.unknown;

          function rescale() {
            var n = domain().length,
              reverse = range[1] < range[0],
              start = range[reverse - 0],
              stop = range[1 - reverse];
            step =
              (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
            if (round) step = Math.floor(step);
            start += (stop - start - step * (n - paddingInner)) * align;
            bandwidth = step * (1 - paddingInner);
            if (round)
              (start = Math.round(start)), (bandwidth = Math.round(bandwidth));
            var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(
              n
            ).map(function(i) {
              return start + step * i;
            });
            return ordinalRange(reverse ? values.reverse() : values);
          }

          scale.domain = function(_) {
            return arguments.length ? (domain(_), rescale()) : domain();
          };

          scale.range = function(_) {
            return arguments.length
              ? ((range = [+_[0], +_[1]]), rescale())
              : range.slice();
          };

          scale.rangeRound = function(_) {
            return (range = [+_[0], +_[1]]), (round = true), rescale();
          };

          scale.bandwidth = function() {
            return bandwidth;
          };

          scale.step = function() {
            return step;
          };

          scale.round = function(_) {
            return arguments.length ? ((round = !!_), rescale()) : round;
          };

          scale.padding = function(_) {
            return arguments.length
              ? ((paddingInner = paddingOuter = Math.max(0, Math.min(1, _))),
                rescale())
              : paddingInner;
          };

          scale.paddingInner = function(_) {
            return arguments.length
              ? ((paddingInner = Math.max(0, Math.min(1, _))), rescale())
              : paddingInner;
          };

          scale.paddingOuter = function(_) {
            return arguments.length
              ? ((paddingOuter = Math.max(0, Math.min(1, _))), rescale())
              : paddingOuter;
          };

          scale.align = function(_) {
            return arguments.length
              ? ((align = Math.max(0, Math.min(1, _))), rescale())
              : align;
          };

          scale.copy = function() {
            return band()
              .domain(domain())
              .range(range)
              .round(round)
              .paddingInner(paddingInner)
              .paddingOuter(paddingOuter)
              .align(align);
          };

          return rescale();
        }

        function pointish(scale) {
          var copy = scale.copy;

          scale.padding = scale.paddingOuter;
          delete scale.paddingInner;
          delete scale.paddingOuter;

          scale.copy = function() {
            return pointish(copy());
          };

          return scale;
        }

        function point() {
          return pointish(band().paddingInner(1));
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/category10.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/category10.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "./node_modules/d3-scale/src/colors.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _colors__WEBPACK_IMPORTED_MODULE_0__["default"]
        )("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

        /***/
      },

    /***/ "./node_modules/d3-scale/src/category20.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/category20.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "./node_modules/d3-scale/src/colors.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _colors__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
        );

        /***/
      },

    /***/ "./node_modules/d3-scale/src/category20b.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-scale/src/category20b.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "./node_modules/d3-scale/src/colors.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _colors__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
        );

        /***/
      },

    /***/ "./node_modules/d3-scale/src/category20c.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-scale/src/category20c.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "./node_modules/d3-scale/src/colors.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _colors__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
        );

        /***/
      },

    /***/ "./node_modules/d3-scale/src/colors.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/colors.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          s
        ) {
          return s.match(/.{6}/g).map(function(x) {
            return "#" + x;
          });
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/constant.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
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

    /***/ "./node_modules/d3-scale/src/continuous.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
      /*! exports provided: deinterpolateLinear, copy, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deinterpolateLinear",
          function() {
            return deinterpolateLinear;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "copy",
          function() {
            return copy;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return continuous;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-scale/src/constant.js"
        );
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-scale/src/number.js"
        );

        var unit = [0, 1];

        function deinterpolateLinear(a, b) {
          return (b -= a = +a)
            ? function(x) {
                return (x - a) / b;
              }
            : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(b);
        }

        function deinterpolateClamp(deinterpolate) {
          return function(a, b) {
            var d = deinterpolate((a = +a), (b = +b));
            return function(x) {
              return x <= a ? 0 : x >= b ? 1 : d(x);
            };
          };
        }

        function reinterpolateClamp(reinterpolate) {
          return function(a, b) {
            var r = reinterpolate((a = +a), (b = +b));
            return function(t) {
              return t <= 0 ? a : t >= 1 ? b : r(t);
            };
          };
        }

        function bimap(domain, range, deinterpolate, reinterpolate) {
          var d0 = domain[0],
            d1 = domain[1],
            r0 = range[0],
            r1 = range[1];
          if (d1 < d0)
            (d0 = deinterpolate(d1, d0)), (r0 = reinterpolate(r1, r0));
          else (d0 = deinterpolate(d0, d1)), (r0 = reinterpolate(r0, r1));
          return function(x) {
            return r0(d0(x));
          };
        }

        function polymap(domain, range, deinterpolate, reinterpolate) {
          var j = Math.min(domain.length, range.length) - 1,
            d = new Array(j),
            r = new Array(j),
            i = -1;

          // Reverse descending domains.
          if (domain[j] < domain[0]) {
            domain = domain.slice().reverse();
            range = range.slice().reverse();
          }

          while (++i < j) {
            d[i] = deinterpolate(domain[i], domain[i + 1]);
            r[i] = reinterpolate(range[i], range[i + 1]);
          }

          return function(x) {
            var i =
              Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(
                domain,
                x,
                1,
                j
              ) - 1;
            return r[i](d[i](x));
          };
        }

        function copy(source, target) {
          return target
            .domain(source.domain())
            .range(source.range())
            .interpolate(source.interpolate())
            .clamp(source.clamp());
        }

        // deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
        // reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
        function continuous(deinterpolate, reinterpolate) {
          var domain = unit,
            range = unit,
            interpolate =
              d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
            clamp = false,
            piecewise,
            output,
            input;

          function rescale() {
            piecewise =
              Math.min(domain.length, range.length) > 2 ? polymap : bimap;
            output = input = null;
            return scale;
          }

          function scale(x) {
            return (output ||
              (output = piecewise(
                domain,
                range,
                clamp ? deinterpolateClamp(deinterpolate) : deinterpolate,
                interpolate
              )))(+x);
          }

          scale.invert = function(y) {
            return (input ||
              (input = piecewise(
                range,
                domain,
                deinterpolateLinear,
                clamp ? reinterpolateClamp(reinterpolate) : reinterpolate
              )))(+y);
          };

          scale.domain = function(_) {
            return arguments.length
              ? ((domain = _array__WEBPACK_IMPORTED_MODULE_2__["map"].call(
                  _,
                  _number__WEBPACK_IMPORTED_MODULE_4__["default"]
                )),
                rescale())
              : domain.slice();
          };

          scale.range = function(_) {
            return arguments.length
              ? ((range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_)),
                rescale())
              : range.slice();
          };

          scale.rangeRound = function(_) {
            return (
              (range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_)),
              (interpolate =
                d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[
                  "interpolateRound"
                ]),
              rescale()
            );
          };

          scale.clamp = function(_) {
            return arguments.length ? ((clamp = !!_), rescale()) : clamp;
          };

          scale.interpolate = function(_) {
            return arguments.length
              ? ((interpolate = _), rescale())
              : interpolate;
          };

          return rescale();
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/cubehelix.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-scale/src/cubehelix.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = Object(
          d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[
            "interpolateCubehelixLong"
          ]
        )(
          Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(
            300,
            0.5,
            0.0
          ),
          Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(
            -240,
            0.5,
            1.0
          )
        );

        /***/
      },

    /***/ "./node_modules/d3-scale/src/identity.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return identity;
          }
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );
        /* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./linear */ "./node_modules/d3-scale/src/linear.js"
        );
        /* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./number */ "./node_modules/d3-scale/src/number.js"
        );

        function identity() {
          var domain = [0, 1];

          function scale(x) {
            return +x;
          }

          scale.invert = scale;

          scale.domain = scale.range = function(_) {
            return arguments.length
              ? ((domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(
                  _,
                  _number__WEBPACK_IMPORTED_MODULE_2__["default"]
                )),
                scale)
              : domain.slice();
          };

          scale.copy = function() {
            return identity().domain(domain);
          };

          return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(
            scale
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/linear.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
      /*! exports provided: linearish, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "linearish",
          function() {
            return linearish;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return linear;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );
        /* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./continuous */ "./node_modules/d3-scale/src/continuous.js"
        );
        /* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js"
        );

        function linearish(scale) {
          var domain = scale.domain;

          scale.ticks = function(count) {
            var d = domain();
            return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(
              d[0],
              d[d.length - 1],
              count == null ? 10 : count
            );
          };

          scale.tickFormat = function(count, specifier) {
            return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(
              domain(),
              count,
              specifier
            );
          };

          scale.nice = function(count) {
            if (count == null) count = 10;

            var d = domain(),
              i0 = 0,
              i1 = d.length - 1,
              start = d[i0],
              stop = d[i1],
              step;

            if (stop < start) {
              (step = start), (start = stop), (stop = step);
              (step = i0), (i0 = i1), (i1 = step);
            }

            step = Object(
              d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"]
            )(start, stop, count);

            if (step > 0) {
              start = Math.floor(start / step) * step;
              stop = Math.ceil(stop / step) * step;
              step = Object(
                d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"]
              )(start, stop, count);
            } else if (step < 0) {
              start = Math.ceil(start * step) / step;
              stop = Math.floor(stop * step) / step;
              step = Object(
                d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"]
              )(start, stop, count);
            }

            if (step > 0) {
              d[i0] = Math.floor(start / step) * step;
              d[i1] = Math.ceil(stop / step) * step;
              domain(d);
            } else if (step < 0) {
              d[i0] = Math.ceil(start * step) / step;
              d[i1] = Math.floor(stop * step) / step;
              domain(d);
            }

            return scale;
          };

          return scale;
        }

        function linear() {
          var scale = Object(
            _continuous__WEBPACK_IMPORTED_MODULE_2__["default"]
          )(
            _continuous__WEBPACK_IMPORTED_MODULE_2__["deinterpolateLinear"],
            d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
          );

          scale.copy = function() {
            return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(
              scale,
              linear()
            );
          };

          return linearish(scale);
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/log.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return log;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-format */ "./node_modules/d3-format/index.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-scale/src/constant.js"
        );
        /* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./nice */ "./node_modules/d3-scale/src/nice.js"
        );
        /* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./continuous */ "./node_modules/d3-scale/src/continuous.js"
        );

        function deinterpolate(a, b) {
          return (b = Math.log(b / a))
            ? function(x) {
                return Math.log(x / a) / b;
              }
            : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(b);
        }

        function reinterpolate(a, b) {
          return a < 0
            ? function(t) {
                return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
              }
            : function(t) {
                return Math.pow(b, t) * Math.pow(a, 1 - t);
              };
        }

        function pow10(x) {
          return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
        }

        function powp(base) {
          return base === 10
            ? pow10
            : base === Math.E
              ? Math.exp
              : function(x) {
                  return Math.pow(base, x);
                };
        }

        function logp(base) {
          return base === Math.E
            ? Math.log
            : (base === 10 && Math.log10) ||
                (base === 2 && Math.log2) ||
                ((base = Math.log(base)),
                function(x) {
                  return Math.log(x) / base;
                });
        }

        function reflect(f) {
          return function(x) {
            return -f(-x);
          };
        }

        function log() {
          var scale = Object(
              _continuous__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(deinterpolate, reinterpolate).domain([1, 10]),
            domain = scale.domain,
            base = 10,
            logs = logp(10),
            pows = powp(10);

          function rescale() {
            (logs = logp(base)), (pows = powp(base));
            if (domain()[0] < 0) (logs = reflect(logs)), (pows = reflect(pows));
            return scale;
          }

          scale.base = function(_) {
            return arguments.length ? ((base = +_), rescale()) : base;
          };

          scale.domain = function(_) {
            return arguments.length ? (domain(_), rescale()) : domain();
          };

          scale.ticks = function(count) {
            var d = domain(),
              u = d[0],
              v = d[d.length - 1],
              r;

            if ((r = v < u)) (i = u), (u = v), (v = i);

            var i = logs(u),
              j = logs(v),
              p,
              k,
              t,
              n = count == null ? 10 : +count,
              z = [];

            if (!(base % 1) && j - i < n) {
              (i = Math.round(i) - 1), (j = Math.round(j) + 1);
              if (u > 0)
                for (; i < j; ++i) {
                  for (k = 1, p = pows(i); k < base; ++k) {
                    t = p * k;
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                  }
                }
              else
                for (; i < j; ++i) {
                  for (k = base - 1, p = pows(i); k >= 1; --k) {
                    t = p * k;
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                  }
                }
            } else {
              z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(
                i,
                j,
                Math.min(j - i, n)
              ).map(pows);
            }

            return r ? z.reverse() : z;
          };

          scale.tickFormat = function(count, specifier) {
            if (specifier == null) specifier = base === 10 ? ".0e" : ",";
            if (typeof specifier !== "function")
              specifier = Object(
                d3_format__WEBPACK_IMPORTED_MODULE_1__["format"]
              )(specifier);
            if (count === Infinity) return specifier;
            if (count == null) count = 10;
            var k = Math.max(1, (base * count) / scale.ticks().length); // TODO fast estimate?
            return function(d) {
              var i = d / pows(Math.round(logs(d)));
              if (i * base < base - 0.5) i *= base;
              return i <= k ? specifier(d) : "";
            };
          };

          scale.nice = function() {
            return domain(
              Object(_nice__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), {
                floor: function(x) {
                  return pows(Math.floor(logs(x)));
                },
                ceil: function(x) {
                  return pows(Math.ceil(logs(x)));
                }
              })
            );
          };

          scale.copy = function() {
            return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(
              scale,
              log().base(base)
            );
          };

          return scale;
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/nice.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          domain,
          interval
        ) {
          domain = domain.slice();

          var i0 = 0,
            i1 = domain.length - 1,
            x0 = domain[i0],
            x1 = domain[i1],
            t;

          if (x1 < x0) {
            (t = i0), (i0 = i1), (i1 = t);
            (t = x0), (x0 = x1), (x1 = t);
          }

          domain[i0] = interval.floor(x0);
          domain[i1] = interval.ceil(x1);
          return domain;
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/number.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return +x;
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/ordinal.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
      /*! exports provided: implicit, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "implicit",
          function() {
            return implicit;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ordinal;
          }
        );
        /* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );

        var implicit = {name: "implicit"};

        function ordinal(range) {
          var index = Object(
              d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"]
            )(),
            domain = [],
            unknown = implicit;

          range =
            range == null
              ? []
              : _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(range);

          function scale(d) {
            var key = d + "",
              i = index.get(key);
            if (!i) {
              if (unknown !== implicit) return unknown;
              index.set(key, (i = domain.push(d)));
            }
            return range[(i - 1) % range.length];
          }

          scale.domain = function(_) {
            if (!arguments.length) return domain.slice();
            (domain = []),
              (index = Object(
                d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"]
              )());
            var i = -1,
              n = _.length,
              d,
              key;
            while (++i < n)
              if (!index.has((key = (d = _[i]) + "")))
                index.set(key, domain.push(d));
            return scale;
          };

          scale.range = function(_) {
            return arguments.length
              ? ((range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)),
                scale)
              : range.slice();
          };

          scale.unknown = function(_) {
            return arguments.length ? ((unknown = _), scale) : unknown;
          };

          scale.copy = function() {
            return ordinal()
              .domain(domain)
              .range(range)
              .unknown(unknown);
          };

          return scale;
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/pow.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
      /*! exports provided: default, sqrt */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return pow;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sqrt",
          function() {
            return sqrt;
          }
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-scale/src/constant.js"
        );
        /* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./linear */ "./node_modules/d3-scale/src/linear.js"
        );
        /* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./continuous */ "./node_modules/d3-scale/src/continuous.js"
        );

        function raise(x, exponent) {
          return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
        }

        function pow() {
          var exponent = 1,
            scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(
              deinterpolate,
              reinterpolate
            ),
            domain = scale.domain;

          function deinterpolate(a, b) {
            return (b = raise(b, exponent) - (a = raise(a, exponent)))
              ? function(x) {
                  return (raise(x, exponent) - a) / b;
                }
              : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
          }

          function reinterpolate(a, b) {
            b = raise(b, exponent) - (a = raise(a, exponent));
            return function(t) {
              return raise(a + b * t, 1 / exponent);
            };
          }

          scale.exponent = function(_) {
            return arguments.length
              ? ((exponent = +_), domain(domain()))
              : exponent;
          };

          scale.copy = function() {
            return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(
              scale,
              pow().exponent(exponent)
            );
          };

          return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(
            scale
          );
        }

        function sqrt() {
          return pow().exponent(0.5);
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/quantile.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return quantile;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );

        function quantile() {
          var domain = [],
            range = [],
            thresholds = [];

          function rescale() {
            var i = 0,
              n = Math.max(1, range.length);
            thresholds = new Array(n - 1);
            while (++i < n)
              thresholds[i - 1] = Object(
                d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"]
              )(domain, i / n);
            return scale;
          }

          function scale(x) {
            if (!isNaN((x = +x)))
              return range[
                Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(
                  thresholds,
                  x
                )
              ];
          }

          scale.invertExtent = function(y) {
            var i = range.indexOf(y);
            return i < 0
              ? [NaN, NaN]
              : [
                  i > 0 ? thresholds[i - 1] : domain[0],
                  i < thresholds.length
                    ? thresholds[i]
                    : domain[domain.length - 1]
                ];
          };

          scale.domain = function(_) {
            if (!arguments.length) return domain.slice();
            domain = [];
            for (var i = 0, n = _.length, d; i < n; ++i)
              if (((d = _[i]), d != null && !isNaN((d = +d)))) domain.push(d);
            domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
            return rescale();
          };

          scale.range = function(_) {
            return arguments.length
              ? ((range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)),
                rescale())
              : range.slice();
          };

          scale.quantiles = function() {
            return thresholds.slice();
          };

          scale.copy = function() {
            return quantile()
              .domain(domain)
              .range(range);
          };

          return scale;
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/quantize.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return quantize;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );
        /* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./linear */ "./node_modules/d3-scale/src/linear.js"
        );

        function quantize() {
          var x0 = 0,
            x1 = 1,
            n = 1,
            domain = [0.5],
            range = [0, 1];

          function scale(x) {
            if (x <= x)
              return range[
                Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(
                  domain,
                  x,
                  0,
                  n
                )
              ];
          }

          function rescale() {
            var i = -1;
            domain = new Array(n);
            while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
            return scale;
          }

          scale.domain = function(_) {
            return arguments.length
              ? ((x0 = +_[0]), (x1 = +_[1]), rescale())
              : [x0, x1];
          };

          scale.range = function(_) {
            return arguments.length
              ? ((n =
                  (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_))
                    .length - 1),
                rescale())
              : range.slice();
          };

          scale.invertExtent = function(y) {
            var i = range.indexOf(y);
            return i < 0
              ? [NaN, NaN]
              : i < 1
                ? [x0, domain[0]]
                : i >= n
                  ? [domain[n - 1], x1]
                  : [domain[i - 1], domain[i]];
          };

          scale.copy = function() {
            return quantize()
              .domain([x0, x1])
              .range(range);
          };

          return Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(
            scale
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/rainbow.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/rainbow.js ***!
  \**********************************************/
      /*! exports provided: warm, cool, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "warm",
          function() {
            return warm;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cool",
          function() {
            return cool;
          }
        );
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );

        var warm = Object(
          d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[
            "interpolateCubehelixLong"
          ]
        )(
          Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(
            -100,
            0.75,
            0.35
          ),
          Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(
            80,
            1.5,
            0.8
          )
        );

        var cool = Object(
          d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[
            "interpolateCubehelixLong"
          ]
        )(
          Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(
            260,
            0.75,
            0.35
          ),
          Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(
            80,
            1.5,
            0.8
          )
        );

        var rainbow = Object(
          d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"]
        )();

        /* harmony default export */ __webpack_exports__["default"] = function(
          t
        ) {
          if (t < 0 || t > 1) t -= Math.floor(t);
          var ts = Math.abs(t - 0.5);
          rainbow.h = 360 * t - 100;
          rainbow.s = 1.5 - 1.5 * ts;
          rainbow.l = 0.8 - 0.9 * ts;
          return rainbow + "";
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/sequential.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return sequential;
          }
        );
        /* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./linear */ "./node_modules/d3-scale/src/linear.js"
        );

        function sequential(interpolator) {
          var x0 = 0,
            x1 = 1,
            clamp = false;

          function scale(x) {
            var t = (x - x0) / (x1 - x0);
            return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
          }

          scale.domain = function(_) {
            return arguments.length
              ? ((x0 = +_[0]), (x1 = +_[1]), scale)
              : [x0, x1];
          };

          scale.clamp = function(_) {
            return arguments.length ? ((clamp = !!_), scale) : clamp;
          };

          scale.interpolator = function(_) {
            return arguments.length
              ? ((interpolator = _), scale)
              : interpolator;
          };

          scale.copy = function() {
            return sequential(interpolator)
              .domain([x0, x1])
              .clamp(clamp);
          };

          return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(
            scale
          );
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/threshold.js":
      /*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return threshold;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );

        function threshold() {
          var domain = [0.5],
            range = [0, 1],
            n = 1;

          function scale(x) {
            if (x <= x)
              return range[
                Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(
                  domain,
                  x,
                  0,
                  n
                )
              ];
          }

          scale.domain = function(_) {
            return arguments.length
              ? ((domain = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(
                  _
                )),
                (n = Math.min(domain.length, range.length - 1)),
                scale)
              : domain.slice();
          };

          scale.range = function(_) {
            return arguments.length
              ? ((range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)),
                (n = Math.min(domain.length, range.length - 1)),
                scale)
              : range.slice();
          };

          scale.invertExtent = function(y) {
            var i = range.indexOf(y);
            return [domain[i - 1], domain[i]];
          };

          scale.copy = function() {
            return threshold()
              .domain(domain)
              .range(range);
          };

          return scale;
        }

        /***/
      },

    /***/ "./node_modules/d3-scale/src/tickFormat.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-format */ "./node_modules/d3-format/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          domain,
          count,
          specifier
        ) {
          var start = domain[0],
            stop = domain[domain.length - 1],
            step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(
              start,
              stop,
              count == null ? 10 : count
            ),
            precision;
          specifier = Object(
            d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"]
          )(specifier == null ? ",f" : specifier);
          switch (specifier.type) {
            case "s": {
              var value = Math.max(Math.abs(start), Math.abs(stop));
              if (
                specifier.precision == null &&
                !isNaN(
                  (precision = Object(
                    d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"]
                  )(step, value))
                )
              )
                specifier.precision = precision;
              return Object(
                d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"]
              )(specifier, value);
            }
            case "":
            case "e":
            case "g":
            case "p":
            case "r": {
              if (
                specifier.precision == null &&
                !isNaN(
                  (precision = Object(
                    d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"]
                  )(step, Math.max(Math.abs(start), Math.abs(stop))))
                )
              )
                specifier.precision = precision - (specifier.type === "e");
              break;
            }
            case "f":
            case "%": {
              if (
                specifier.precision == null &&
                !isNaN(
                  (precision = Object(
                    d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"]
                  )(step))
                )
              )
                specifier.precision = precision - (specifier.type === "%") * 2;
              break;
            }
          }
          return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(
            specifier
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/time.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
      /*! exports provided: calendar, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "calendar",
          function() {
            return calendar;
          }
        );
        /* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );
        /* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! d3-time */ "./node_modules/d3-time/index.js"
        );
        /* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! d3-time-format */ "./node_modules/d3-time-format/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-scale/src/array.js"
        );
        /* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./continuous */ "./node_modules/d3-scale/src/continuous.js"
        );
        /* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./nice */ "./node_modules/d3-scale/src/nice.js"
        );

        var durationSecond = 1000,
          durationMinute = durationSecond * 60,
          durationHour = durationMinute * 60,
          durationDay = durationHour * 24,
          durationWeek = durationDay * 7,
          durationMonth = durationDay * 30,
          durationYear = durationDay * 365;

        function date(t) {
          return new Date(t);
        }

        function number(t) {
          return t instanceof Date ? +t : +new Date(+t);
        }

        function calendar(
          year,
          month,
          week,
          day,
          hour,
          minute,
          second,
          millisecond,
          format
        ) {
          var scale = Object(
              _continuous__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _continuous__WEBPACK_IMPORTED_MODULE_5__["deinterpolateLinear"],
              d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
            ),
            invert = scale.invert,
            domain = scale.domain;

          var formatMillisecond = format(".%L"),
            formatSecond = format(":%S"),
            formatMinute = format("%I:%M"),
            formatHour = format("%I %p"),
            formatDay = format("%a %d"),
            formatWeek = format("%b %d"),
            formatMonth = format("%B"),
            formatYear = format("%Y");

          var tickIntervals = [
            [second, 1, durationSecond],
            [second, 5, 5 * durationSecond],
            [second, 15, 15 * durationSecond],
            [second, 30, 30 * durationSecond],
            [minute, 1, durationMinute],
            [minute, 5, 5 * durationMinute],
            [minute, 15, 15 * durationMinute],
            [minute, 30, 30 * durationMinute],
            [hour, 1, durationHour],
            [hour, 3, 3 * durationHour],
            [hour, 6, 6 * durationHour],
            [hour, 12, 12 * durationHour],
            [day, 1, durationDay],
            [day, 2, 2 * durationDay],
            [week, 1, durationWeek],
            [month, 1, durationMonth],
            [month, 3, 3 * durationMonth],
            [year, 1, durationYear]
          ];

          function tickFormat(date) {
            return (second(date) < date
              ? formatMillisecond
              : minute(date) < date
                ? formatSecond
                : hour(date) < date
                  ? formatMinute
                  : day(date) < date
                    ? formatHour
                    : month(date) < date
                      ? week(date) < date
                        ? formatDay
                        : formatWeek
                      : year(date) < date
                        ? formatMonth
                        : formatYear)(date);
          }

          function tickInterval(interval, start, stop, step) {
            if (interval == null) interval = 10;

            // If a desired tick count is specified, pick a reasonable tick interval
            // based on the extent of the domain and a rough estimate of tick size.
            // Otherwise, assume interval is already a time interval and use it.
            if (typeof interval === "number") {
              var target = Math.abs(stop - start) / interval,
                i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(
                  function(i) {
                    return i[2];
                  }
                ).right(tickIntervals, target);
              if (i === tickIntervals.length) {
                step = Object(
                  d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"]
                )(start / durationYear, stop / durationYear, interval);
                interval = year;
              } else if (i) {
                i =
                  tickIntervals[
                    target / tickIntervals[i - 1][2] <
                    tickIntervals[i][2] / target
                      ? i - 1
                      : i
                  ];
                step = i[1];
                interval = i[0];
              } else {
                step = Math.max(
                  Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(
                    start,
                    stop,
                    interval
                  ),
                  1
                );
                interval = millisecond;
              }
            }

            return step == null ? interval : interval.every(step);
          }

          scale.invert = function(y) {
            return new Date(invert(y));
          };

          scale.domain = function(_) {
            return arguments.length
              ? domain(
                  _array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, number)
                )
              : domain().map(date);
          };

          scale.ticks = function(interval, step) {
            var d = domain(),
              t0 = d[0],
              t1 = d[d.length - 1],
              r = t1 < t0,
              t;
            if (r) (t = t0), (t0 = t1), (t1 = t);
            t = tickInterval(interval, t0, t1, step);
            t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
            return r ? t.reverse() : t;
          };

          scale.tickFormat = function(count, specifier) {
            return specifier == null ? tickFormat : format(specifier);
          };

          scale.nice = function(interval, step) {
            var d = domain();
            return (interval = tickInterval(
              interval,
              d[0],
              d[d.length - 1],
              step
            ))
              ? domain(
                  Object(_nice__WEBPACK_IMPORTED_MODULE_6__["default"])(
                    d,
                    interval
                  )
                )
              : scale;
          };

          scale.copy = function() {
            return Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["copy"])(
              scale,
              calendar(
                year,
                month,
                week,
                day,
                hour,
                minute,
                second,
                millisecond,
                format
              )
            );
          };

          return scale;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return calendar(
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeYear"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMonth"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeWeek"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeDay"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeHour"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMinute"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeSecond"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMillisecond"],
            d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]
          ).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/utcTime.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./time */ "./node_modules/d3-scale/src/time.js"
        );
        /* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-time-format */ "./node_modules/d3-time-format/index.js"
        );
        /* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! d3-time */ "./node_modules/d3-time/index.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"],
            d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"],
            d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]
          ).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
        };

        /***/
      },

    /***/ "./node_modules/d3-scale/src/viridis.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/viridis.js ***!
  \**********************************************/
      /*! exports provided: default, magma, inferno, plasma */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "magma",
          function() {
            return magma;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "inferno",
          function() {
            return inferno;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "plasma",
          function() {
            return plasma;
          }
        );
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "./node_modules/d3-scale/src/colors.js"
        );

        function ramp(range) {
          var n = range.length;
          return function(t) {
            return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = ramp(
          Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
          )
        );

        var magma = ramp(
          Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
          )
        );

        var inferno = ramp(
          Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
          )
        );

        var plasma = ramp(
          Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
          )
        );

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

    /***/ "./node_modules/d3-shape/index.js":
      /*!****************************************!*\
  !*** ./node_modules/d3-shape/index.js ***!
  \****************************************/
      /*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/arc */ "./node_modules/d3-shape/src/arc.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "arc",
          function() {
            return _src_arc__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony import */ var _src_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/area */ "./node_modules/d3-shape/src/area.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "area",
          function() {
            return _src_area__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/line */ "./node_modules/d3-shape/src/line.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "line",
          function() {
            return _src_line__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/pie */ "./node_modules/d3-shape/src/pie.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "pie",
          function() {
            return _src_pie__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony import */ var _src_areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/areaRadial */ "./node_modules/d3-shape/src/areaRadial.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "areaRadial",
          function() {
            return _src_areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "radialArea",
          function() {
            return _src_areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony import */ var _src_lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/lineRadial */ "./node_modules/d3-shape/src/lineRadial.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "lineRadial",
          function() {
            return _src_lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "radialLine",
          function() {
            return _src_lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony import */ var _src_pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/pointRadial */ "./node_modules/d3-shape/src/pointRadial.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "pointRadial",
          function() {
            return _src_pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"];
          }
        );

        /* harmony import */ var _src_link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/link/index */ "./node_modules/d3-shape/src/link/index.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "linkHorizontal",
          function() {
            return _src_link_index__WEBPACK_IMPORTED_MODULE_7__[
              "linkHorizontal"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "linkVertical",
          function() {
            return _src_link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "linkRadial",
          function() {
            return _src_link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"];
          }
        );

        /* harmony import */ var _src_symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/symbol */ "./node_modules/d3-shape/src/symbol.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbol",
          function() {
            return _src_symbol__WEBPACK_IMPORTED_MODULE_8__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbols",
          function() {
            return _src_symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"];
          }
        );

        /* harmony import */ var _src_symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolCircle",
          function() {
            return _src_symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"];
          }
        );

        /* harmony import */ var _src_symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./src/symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolCross",
          function() {
            return _src_symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"];
          }
        );

        /* harmony import */ var _src_symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./src/symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolDiamond",
          function() {
            return _src_symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"];
          }
        );

        /* harmony import */ var _src_symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./src/symbol/square */ "./node_modules/d3-shape/src/symbol/square.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolSquare",
          function() {
            return _src_symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"];
          }
        );

        /* harmony import */ var _src_symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./src/symbol/star */ "./node_modules/d3-shape/src/symbol/star.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolStar",
          function() {
            return _src_symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"];
          }
        );

        /* harmony import */ var _src_symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./src/symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolTriangle",
          function() {
            return _src_symbol_triangle__WEBPACK_IMPORTED_MODULE_14__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./src/symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "symbolWye",
          function() {
            return _src_symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"];
          }
        );

        /* harmony import */ var _src_curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./src/curve/basisClosed */ "./node_modules/d3-shape/src/curve/basisClosed.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveBasisClosed",
          function() {
            return _src_curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./src/curve/basisOpen */ "./node_modules/d3-shape/src/curve/basisOpen.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveBasisOpen",
          function() {
            return _src_curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./src/curve/basis */ "./node_modules/d3-shape/src/curve/basis.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveBasis",
          function() {
            return _src_curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"];
          }
        );

        /* harmony import */ var _src_curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./src/curve/bundle */ "./node_modules/d3-shape/src/curve/bundle.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveBundle",
          function() {
            return _src_curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"];
          }
        );

        /* harmony import */ var _src_curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./src/curve/cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveCardinalClosed",
          function() {
            return _src_curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./src/curve/cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveCardinalOpen",
          function() {
            return _src_curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./src/curve/cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveCardinal",
          function() {
            return _src_curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"];
          }
        );

        /* harmony import */ var _src_curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./src/curve/catmullRomClosed */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveCatmullRomClosed",
          function() {
            return _src_curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./src/curve/catmullRomOpen */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveCatmullRomOpen",
          function() {
            return _src_curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./src/curve/catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveCatmullRom",
          function() {
            return _src_curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./src/curve/linearClosed */ "./node_modules/d3-shape/src/curve/linearClosed.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveLinearClosed",
          function() {
            return _src_curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./src/curve/linear */ "./node_modules/d3-shape/src/curve/linear.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveLinear",
          function() {
            return _src_curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"];
          }
        );

        /* harmony import */ var _src_curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./src/curve/monotone */ "./node_modules/d3-shape/src/curve/monotone.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveMonotoneX",
          function() {
            return _src_curve_monotone__WEBPACK_IMPORTED_MODULE_28__[
              "monotoneX"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveMonotoneY",
          function() {
            return _src_curve_monotone__WEBPACK_IMPORTED_MODULE_28__[
              "monotoneY"
            ];
          }
        );

        /* harmony import */ var _src_curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./src/curve/natural */ "./node_modules/d3-shape/src/curve/natural.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveNatural",
          function() {
            return _src_curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"];
          }
        );

        /* harmony import */ var _src_curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./src/curve/step */ "./node_modules/d3-shape/src/curve/step.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveStep",
          function() {
            return _src_curve_step__WEBPACK_IMPORTED_MODULE_30__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveStepAfter",
          function() {
            return _src_curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "curveStepBefore",
          function() {
            return _src_curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"];
          }
        );

        /* harmony import */ var _src_stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./src/stack */ "./node_modules/d3-shape/src/stack.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stack",
          function() {
            return _src_stack__WEBPACK_IMPORTED_MODULE_31__["default"];
          }
        );

        /* harmony import */ var _src_offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./src/offset/expand */ "./node_modules/d3-shape/src/offset/expand.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOffsetExpand",
          function() {
            return _src_offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"];
          }
        );

        /* harmony import */ var _src_offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./src/offset/diverging */ "./node_modules/d3-shape/src/offset/diverging.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOffsetDiverging",
          function() {
            return _src_offset_diverging__WEBPACK_IMPORTED_MODULE_33__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./src/offset/none */ "./node_modules/d3-shape/src/offset/none.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOffsetNone",
          function() {
            return _src_offset_none__WEBPACK_IMPORTED_MODULE_34__["default"];
          }
        );

        /* harmony import */ var _src_offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./src/offset/silhouette */ "./node_modules/d3-shape/src/offset/silhouette.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOffsetSilhouette",
          function() {
            return _src_offset_silhouette__WEBPACK_IMPORTED_MODULE_35__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./src/offset/wiggle */ "./node_modules/d3-shape/src/offset/wiggle.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOffsetWiggle",
          function() {
            return _src_offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"];
          }
        );

        /* harmony import */ var _src_order_ascending__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./src/order/ascending */ "./node_modules/d3-shape/src/order/ascending.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOrderAscending",
          function() {
            return _src_order_ascending__WEBPACK_IMPORTED_MODULE_37__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_order_descending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./src/order/descending */ "./node_modules/d3-shape/src/order/descending.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOrderDescending",
          function() {
            return _src_order_descending__WEBPACK_IMPORTED_MODULE_38__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_order_insideOut__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./src/order/insideOut */ "./node_modules/d3-shape/src/order/insideOut.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOrderInsideOut",
          function() {
            return _src_order_insideOut__WEBPACK_IMPORTED_MODULE_39__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_order_none__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./src/order/none */ "./node_modules/d3-shape/src/order/none.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOrderNone",
          function() {
            return _src_order_none__WEBPACK_IMPORTED_MODULE_40__["default"];
          }
        );

        /* harmony import */ var _src_order_reverse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ./src/order/reverse */ "./node_modules/d3-shape/src/order/reverse.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "stackOrderReverse",
          function() {
            return _src_order_reverse__WEBPACK_IMPORTED_MODULE_41__["default"];
          }
        );

        // Note: radialArea is deprecated!
        // Note: radialLine is deprecated!

        /***/
      },

    /***/ "./node_modules/d3-shape/src/arc.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-path */ "./node_modules/d3-path/index.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-shape/src/constant.js"
        );
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./math */ "./node_modules/d3-shape/src/math.js"
        );

        function arcInnerRadius(d) {
          return d.innerRadius;
        }

        function arcOuterRadius(d) {
          return d.outerRadius;
        }

        function arcStartAngle(d) {
          return d.startAngle;
        }

        function arcEndAngle(d) {
          return d.endAngle;
        }

        function arcPadAngle(d) {
          return d && d.padAngle; // Note: optional!
        }

        function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
          var x10 = x1 - x0,
            y10 = y1 - y0,
            x32 = x3 - x2,
            y32 = y3 - y2,
            t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
          return [x0 + t * x10, y0 + t * y10];
        }

        // Compute perpendicular offset line of length rc.
        // http://mathworld.wolfram.com/Circle-LineIntersection.html
        function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
          var x01 = x0 - x1,
            y01 = y0 - y1,
            lo =
              (cw ? rc : -rc) /
              Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(
                x01 * x01 + y01 * y01
              ),
            ox = lo * y01,
            oy = -lo * x01,
            x11 = x0 + ox,
            y11 = y0 + oy,
            x10 = x1 + ox,
            y10 = y1 + oy,
            x00 = (x11 + x10) / 2,
            y00 = (y11 + y10) / 2,
            dx = x10 - x11,
            dy = y10 - y11,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x11 * y10 - x10 * y11,
            d =
              (dy < 0 ? -1 : 1) *
              Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(
                Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(
                  0,
                  r * r * d2 - D * D
                )
              ),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x00,
            dy0 = cy0 - y00,
            dx1 = cx1 - x00,
            dy1 = cy1 - y00;

          // Pick the closer of the two intersection points.
          // TODO Is there a faster way to determine which intersection to use?
          if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
            (cx0 = cx1), (cy0 = cy1);

          return {
            cx: cx0,
            cy: cy0,
            x01: -ox,
            y01: -oy,
            x11: cx0 * (r1 / r - 1),
            y11: cy0 * (r1 / r - 1)
          };
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var innerRadius = arcInnerRadius,
            outerRadius = arcOuterRadius,
            cornerRadius = Object(
              _constant__WEBPACK_IMPORTED_MODULE_1__["default"]
            )(0),
            padRadius = null,
            startAngle = arcStartAngle,
            endAngle = arcEndAngle,
            padAngle = arcPadAngle,
            context = null;

          function arc() {
            var buffer,
              r,
              r0 = +innerRadius.apply(this, arguments),
              r1 = +outerRadius.apply(this, arguments),
              a0 =
                startAngle.apply(this, arguments) -
                _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
              a1 =
                endAngle.apply(this, arguments) -
                _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
              da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
              cw = a1 > a0;

            if (!context)
              context = buffer = Object(
                d3_path__WEBPACK_IMPORTED_MODULE_0__["path"]
              )();

            // Ensure that the outer radius is always larger than the inner radius.
            if (r1 < r0) (r = r1), (r1 = r0), (r0 = r);

            // Is it a point?
            if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]))
              context.moveTo(0, 0);
            // Or is it a circle or annulus?
            else if (
              da >
              _math__WEBPACK_IMPORTED_MODULE_2__["tau"] -
                _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]
            ) {
              context.moveTo(
                r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0),
                r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0)
              );
              context.arc(0, 0, r1, a0, a1, !cw);
              if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                context.moveTo(
                  r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1),
                  r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1)
                );
                context.arc(0, 0, r0, a1, a0, cw);
              }
            }

            // Or is it a circular or annular sector?
            else {
              var a01 = a0,
                a11 = a1,
                a00 = a0,
                a10 = a1,
                da0 = da,
                da1 = da,
                ap = padAngle.apply(this, arguments) / 2,
                rp =
                  ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] &&
                  (padRadius
                    ? +padRadius.apply(this, arguments)
                    : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(
                        r0 * r0 + r1 * r1
                      )),
                rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(
                  Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) /
                    2,
                  +cornerRadius.apply(this, arguments)
                ),
                rc0 = rc,
                rc1 = rc,
                t0,
                t1;

              // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
              if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(
                    (rp / r0) *
                      Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)
                  ),
                  p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(
                    (rp / r1) *
                      Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)
                  );
                if (
                  (da0 -= p0 * 2) >
                  _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]
                )
                  (p0 *= cw ? 1 : -1), (a00 += p0), (a10 -= p0);
                else (da0 = 0), (a00 = a10 = (a0 + a1) / 2);
                if (
                  (da1 -= p1 * 2) >
                  _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]
                )
                  (p1 *= cw ? 1 : -1), (a01 += p1), (a11 -= p1);
                else (da1 = 0), (a01 = a11 = (a0 + a1) / 2);
              }

              var x01 =
                  r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
                y01 =
                  r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
                x10 =
                  r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
                y10 =
                  r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

              // Apply rounded corners?
              if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                var x11 =
                    r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
                  y11 =
                    r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
                  x00 =
                    r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
                  y00 =
                    r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00);

                // Restrict the corner radius according to the sector angle.
                if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) {
                  var oc =
                      da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]
                        ? intersect(x01, y01, x00, y00, x11, y11, x10, y10)
                        : [x10, y10],
                    ax = x01 - oc[0],
                    ay = y01 - oc[1],
                    bx = x11 - oc[0],
                    by = y11 - oc[1],
                    kc =
                      1 /
                      Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(
                        Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])(
                          (ax * bx + ay * by) /
                            (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(
                              ax * ax + ay * ay
                            ) *
                              Object(
                                _math__WEBPACK_IMPORTED_MODULE_2__["sqrt"]
                              )(bx * bx + by * by))
                        ) / 2
                      ),
                    lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(
                      oc[0] * oc[0] + oc[1] * oc[1]
                    );
                  rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(
                    rc,
                    (r0 - lc) / (kc - 1)
                  );
                  rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(
                    rc,
                    (r1 - lc) / (kc + 1)
                  );
                }
              }

              // Is the sector collapsed to a line?
              if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]))
                context.moveTo(x01, y01);
              // Does the sector’s outer ring have rounded corners?
              else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

                // Have the corners merged?
                if (rc1 < rc)
                  context.arc(
                    t0.cx,
                    t0.cy,
                    rc1,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.y01,
                      t0.x01
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.y01,
                      t1.x01
                    ),
                    !cw
                  );
                // Otherwise, draw the two corners and the ring.
                else {
                  context.arc(
                    t0.cx,
                    t0.cy,
                    rc1,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.y01,
                      t0.x01
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.y11,
                      t0.x11
                    ),
                    !cw
                  );
                  context.arc(
                    0,
                    0,
                    r1,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.cy + t0.y11,
                      t0.cx + t0.x11
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.cy + t1.y11,
                      t1.cx + t1.x11
                    ),
                    !cw
                  );
                  context.arc(
                    t1.cx,
                    t1.cy,
                    rc1,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.y11,
                      t1.x11
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.y01,
                      t1.x01
                    ),
                    !cw
                  );
                }
              }

              // Or is the outer ring just a circular arc?
              else
                context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

              // Is there no inner ring, and it’s a circular sector?
              // Or perhaps it’s an annular sector collapsed due to padding?
              if (
                !(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) ||
                !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])
              )
                context.lineTo(x10, y10);
              // Does the sector’s inner ring (or point) have rounded corners?
              else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

                // Have the corners merged?
                if (rc0 < rc)
                  context.arc(
                    t0.cx,
                    t0.cy,
                    rc0,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.y01,
                      t0.x01
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.y01,
                      t1.x01
                    ),
                    !cw
                  );
                // Otherwise, draw the two corners and the ring.
                else {
                  context.arc(
                    t0.cx,
                    t0.cy,
                    rc0,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.y01,
                      t0.x01
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.y11,
                      t0.x11
                    ),
                    !cw
                  );
                  context.arc(
                    0,
                    0,
                    r0,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t0.cy + t0.y11,
                      t0.cx + t0.x11
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.cy + t1.y11,
                      t1.cx + t1.x11
                    ),
                    cw
                  );
                  context.arc(
                    t1.cx,
                    t1.cy,
                    rc0,
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.y11,
                      t1.x11
                    ),
                    Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(
                      t1.y01,
                      t1.x01
                    ),
                    !cw
                  );
                }
              }

              // Or is the inner ring just a circular arc?
              else context.arc(0, 0, r0, a10, a00, cw);
            }

            context.closePath();

            if (buffer) return (context = null), buffer + "" || null;
          }

          arc.centroid = function() {
            var r =
                (+innerRadius.apply(this, arguments) +
                  +outerRadius.apply(this, arguments)) /
                2,
              a =
                (+startAngle.apply(this, arguments) +
                  +endAngle.apply(this, arguments)) /
                  2 -
                _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
            return [
              Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r,
              Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r
            ];
          };

          arc.innerRadius = function(_) {
            return arguments.length
              ? ((innerRadius =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                arc)
              : innerRadius;
          };

          arc.outerRadius = function(_) {
            return arguments.length
              ? ((outerRadius =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                arc)
              : outerRadius;
          };

          arc.cornerRadius = function(_) {
            return arguments.length
              ? ((cornerRadius =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                arc)
              : cornerRadius;
          };

          arc.padRadius = function(_) {
            return arguments.length
              ? ((padRadius =
                  _ == null
                    ? null
                    : typeof _ === "function"
                      ? _
                      : Object(
                          _constant__WEBPACK_IMPORTED_MODULE_1__["default"]
                        )(+_)),
                arc)
              : padRadius;
          };

          arc.startAngle = function(_) {
            return arguments.length
              ? ((startAngle =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                arc)
              : startAngle;
          };

          arc.endAngle = function(_) {
            return arguments.length
              ? ((endAngle =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                arc)
              : endAngle;
          };

          arc.padAngle = function(_) {
            return arguments.length
              ? ((padAngle =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                arc)
              : padAngle;
          };

          arc.context = function(_) {
            return arguments.length
              ? ((context = _ == null ? null : _), arc)
              : context;
          };

          return arc;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/area.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-path */ "./node_modules/d3-path/index.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-shape/src/constant.js"
        );
        /* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js"
        );
        /* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./line */ "./node_modules/d3-shape/src/line.js"
        );
        /* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./point */ "./node_modules/d3-shape/src/point.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
            x1 = null,
            y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
            y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
            defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
              true
            ),
            context = null,
            curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
            output = null;

          function area(data) {
            var i,
              j,
              k,
              n = data.length,
              d,
              defined0 = false,
              buffer,
              x0z = new Array(n),
              y0z = new Array(n);

            if (context == null)
              output = curve(
                (buffer = Object(
                  d3_path__WEBPACK_IMPORTED_MODULE_0__["path"]
                )())
              );

            for (i = 0; i <= n; ++i) {
              if (!(i < n && defined((d = data[i]), i, data)) === defined0) {
                if ((defined0 = !defined0)) {
                  j = i;
                  output.areaStart();
                  output.lineStart();
                } else {
                  output.lineEnd();
                  output.lineStart();
                  for (k = i - 1; k >= j; --k) {
                    output.point(x0z[k], y0z[k]);
                  }
                  output.lineEnd();
                  output.areaEnd();
                }
              }
              if (defined0) {
                (x0z[i] = +x0(d, i, data)), (y0z[i] = +y0(d, i, data));
                output.point(
                  x1 ? +x1(d, i, data) : x0z[i],
                  y1 ? +y1(d, i, data) : y0z[i]
                );
              }
            }

            if (buffer) return (output = null), buffer + "" || null;
          }

          function arealine() {
            return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])()
              .defined(defined)
              .curve(curve)
              .context(context);
          }

          area.x = function(_) {
            return arguments.length
              ? ((x0 =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                (x1 = null),
                area)
              : x0;
          };

          area.x0 = function(_) {
            return arguments.length
              ? ((x0 =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                area)
              : x0;
          };

          area.x1 = function(_) {
            return arguments.length
              ? ((x1 =
                  _ == null
                    ? null
                    : typeof _ === "function"
                      ? _
                      : Object(
                          _constant__WEBPACK_IMPORTED_MODULE_1__["default"]
                        )(+_)),
                area)
              : x1;
          };

          area.y = function(_) {
            return arguments.length
              ? ((y0 =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                (y1 = null),
                area)
              : y0;
          };

          area.y0 = function(_) {
            return arguments.length
              ? ((y0 =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                area)
              : y0;
          };

          area.y1 = function(_) {
            return arguments.length
              ? ((y1 =
                  _ == null
                    ? null
                    : typeof _ === "function"
                      ? _
                      : Object(
                          _constant__WEBPACK_IMPORTED_MODULE_1__["default"]
                        )(+_)),
                area)
              : y1;
          };

          area.lineX0 = area.lineY0 = function() {
            return arealine()
              .x(x0)
              .y(y0);
          };

          area.lineY1 = function() {
            return arealine()
              .x(x0)
              .y(y1);
          };

          area.lineX1 = function() {
            return arealine()
              .x(x1)
              .y(y0);
          };

          area.defined = function(_) {
            return arguments.length
              ? ((defined =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        !!_
                      )),
                area)
              : defined;
          };

          area.curve = function(_) {
            return arguments.length
              ? ((curve = _),
                context != null && (output = curve(context)),
                area)
              : curve;
          };

          area.context = function(_) {
            return arguments.length
              ? (_ == null
                  ? (context = output = null)
                  : (output = curve((context = _))),
                area)
              : context;
          };

          return area;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/areaRadial.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js"
        );
        /* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./area */ "./node_modules/d3-shape/src/area.js"
        );
        /* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(
              _curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]
            ),
            c = a.curve,
            x0 = a.lineX0,
            x1 = a.lineX1,
            y0 = a.lineY0,
            y1 = a.lineY1;

          (a.angle = a.x), delete a.x;
          (a.startAngle = a.x0), delete a.x0;
          (a.endAngle = a.x1), delete a.x1;
          (a.radius = a.y), delete a.y;
          (a.innerRadius = a.y0), delete a.y0;
          (a.outerRadius = a.y1), delete a.y1;
          (a.lineStartAngle = function() {
            return Object(
              _lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"]
            )(x0());
          }),
            delete a.lineX0;
          (a.lineEndAngle = function() {
            return Object(
              _lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"]
            )(x1());
          }),
            delete a.lineX1;
          (a.lineInnerRadius = function() {
            return Object(
              _lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"]
            )(y0());
          }),
            delete a.lineY0;
          (a.lineOuterRadius = function() {
            return Object(
              _lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"]
            )(y1());
          }),
            delete a.lineY1;

          a.curve = function(_) {
            return arguments.length
              ? c(
                  Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    _
                  )
                )
              : c()._curve;
          };

          return a;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/array.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
      /*! exports provided: slice */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slice",
          function() {
            return slice;
          }
        );
        var slice = Array.prototype.slice;

        /***/
      },

    /***/ "./node_modules/d3-shape/src/constant.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x
        ) {
          return function constant() {
            return x;
          };
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/basis.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
      /*! exports provided: point, Basis, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "point",
          function() {
            return point;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Basis",
          function() {
            return Basis;
          }
        );
        function point(that, x, y) {
          that._context.bezierCurveTo(
            (2 * that._x0 + that._x1) / 3,
            (2 * that._y0 + that._y1) / 3,
            (that._x0 + 2 * that._x1) / 3,
            (that._y0 + 2 * that._y1) / 3,
            (that._x0 + 4 * that._x1 + x) / 6,
            (that._y0 + 4 * that._y1 + y) / 6
          );
        }

        function Basis(context) {
          this._context = context;
        }

        Basis.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 3:
                point(this, this._x1, this._y1); // proceed
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            }
            if (this._line || (this._line !== 0 && this._point === 1))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                this._line
                  ? this._context.lineTo(x, y)
                  : this._context.moveTo(x, y);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                ); // proceed
              default:
                point(this, x, y);
                break;
            }
            (this._x0 = this._x1), (this._x1 = x);
            (this._y0 = this._y1), (this._y1 = y);
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new Basis(context);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
      /*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../noop */ "./node_modules/d3-shape/src/noop.js"
        );
        /* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js"
        );

        function BasisClosed(context) {
          this._context = context;
        }

        BasisClosed.prototype = {
          areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
          areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 1: {
                this._context.moveTo(this._x2, this._y2);
                this._context.closePath();
                break;
              }
              case 2: {
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                );
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                );
                this._context.closePath();
                break;
              }
              case 3: {
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                break;
              }
            }
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                (this._x2 = x), (this._y2 = y);
                break;
              case 1:
                this._point = 2;
                (this._x3 = x), (this._y3 = y);
                break;
              case 2:
                this._point = 3;
                (this._x4 = x), (this._y4 = y);
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + x) / 6,
                  (this._y0 + 4 * this._y1 + y) / 6
                );
                break;
              default:
                Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(
                  this,
                  x,
                  y
                );
                break;
            }
            (this._x0 = this._x1), (this._x1 = x);
            (this._y0 = this._y1), (this._y1 = y);
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new BasisClosed(context);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js"
        );

        function BasisOpen(context) {
          this._context = context;
        }

        BasisOpen.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            if (this._line || (this._line !== 0 && this._point === 3))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var x0 = (this._x0 + 4 * this._x1 + x) / 6,
                  y0 = (this._y0 + 4 * this._y1 + y) / 6;
                this._line
                  ? this._context.lineTo(x0, y0)
                  : this._context.moveTo(x0, y0);
                break;
              case 3:
                this._point = 4; // proceed
              default:
                Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(
                  this,
                  x,
                  y
                );
                break;
            }
            (this._x0 = this._x1), (this._x1 = x);
            (this._y0 = this._y1), (this._y1 = y);
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new BasisOpen(context);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/bundle.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js"
        );

        function Bundle(context, beta) {
          this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](
            context
          );
          this._beta = beta;
        }

        Bundle.prototype = {
          lineStart: function() {
            this._x = [];
            this._y = [];
            this._basis.lineStart();
          },
          lineEnd: function() {
            var x = this._x,
              y = this._y,
              j = x.length - 1;

            if (j > 0) {
              var x0 = x[0],
                y0 = y[0],
                dx = x[j] - x0,
                dy = y[j] - y0,
                i = -1,
                t;

              while (++i <= j) {
                t = i / j;
                this._basis.point(
                  this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
                  this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
                );
              }
            }

            this._x = this._y = null;
            this._basis.lineEnd();
          },
          point: function(x, y) {
            this._x.push(+x);
            this._y.push(+y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(beta) {
          function bundle(context) {
            return beta === 1
              ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context)
              : new Bundle(context, beta);
          }

          bundle.beta = function(beta) {
            return custom(+beta);
          };

          return bundle;
        })(0.85);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/cardinal.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
      /*! exports provided: point, Cardinal, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "point",
          function() {
            return point;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Cardinal",
          function() {
            return Cardinal;
          }
        );
        function point(that, x, y) {
          that._context.bezierCurveTo(
            that._x1 + that._k * (that._x2 - that._x0),
            that._y1 + that._k * (that._y2 - that._y0),
            that._x2 + that._k * (that._x1 - x),
            that._y2 + that._k * (that._y1 - y),
            that._x2,
            that._y2
          );
        }

        function Cardinal(context, tension) {
          this._context = context;
          this._k = (1 - tension) / 6;
        }

        Cardinal.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                point(this, this._x1, this._y1);
                break;
            }
            if (this._line || (this._line !== 0 && this._point === 1))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                this._line
                  ? this._context.lineTo(x, y)
                  : this._context.moveTo(x, y);
                break;
              case 1:
                this._point = 2;
                (this._x1 = x), (this._y1 = y);
                break;
              case 2:
                this._point = 3; // proceed
              default:
                point(this, x, y);
                break;
            }
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
            (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(tension) {
          function cardinal(context) {
            return new Cardinal(context, tension);
          }

          cardinal.tension = function(tension) {
            return custom(+tension);
          };

          return cardinal;
        })(0);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
      /*! exports provided: CardinalClosed, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CardinalClosed",
          function() {
            return CardinalClosed;
          }
        );
        /* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../noop */ "./node_modules/d3-shape/src/noop.js"
        );
        /* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js"
        );

        function CardinalClosed(context, tension) {
          this._context = context;
          this._k = (1 - tension) / 6;
        }

        CardinalClosed.prototype = {
          areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
          areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 1: {
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
              case 2: {
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
              case 3: {
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
              }
            }
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                (this._x3 = x), (this._y3 = y);
                break;
              case 1:
                this._point = 2;
                this._context.moveTo((this._x4 = x), (this._y4 = y));
                break;
              case 2:
                this._point = 3;
                (this._x5 = x), (this._y5 = y);
                break;
              default:
                Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(
                  this,
                  x,
                  y
                );
                break;
            }
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
            (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(tension) {
          function cardinal(context) {
            return new CardinalClosed(context, tension);
          }

          cardinal.tension = function(tension) {
            return custom(+tension);
          };

          return cardinal;
        })(0);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
      /*! exports provided: CardinalOpen, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CardinalOpen",
          function() {
            return CardinalOpen;
          }
        );
        /* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js"
        );

        function CardinalOpen(context, tension) {
          this._context = context;
          this._k = (1 - tension) / 6;
        }

        CardinalOpen.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            if (this._line || (this._line !== 0 && this._point === 3))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4; // proceed
              default:
                Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(
                  this,
                  x,
                  y
                );
                break;
            }
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
            (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(tension) {
          function cardinal(context) {
            return new CardinalOpen(context, tension);
          }

          cardinal.tension = function(tension) {
            return custom(+tension);
          };

          return cardinal;
        })(0);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
      /*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
      /*! exports provided: point, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "point",
          function() {
            return point;
          }
        );
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../math */ "./node_modules/d3-shape/src/math.js"
        );
        /* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js"
        );

        function point(that, x, y) {
          var x1 = that._x1,
            y1 = that._y1,
            x2 = that._x2,
            y2 = that._y2;

          if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
            var a =
                2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
              n = 3 * that._l01_a * (that._l01_a + that._l12_a);
            x1 =
              (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
            y1 =
              (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
          }

          if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
            var b =
                2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
              m = 3 * that._l23_a * (that._l23_a + that._l12_a);
            x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
            y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
          }

          that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
        }

        function CatmullRom(context, alpha) {
          this._context = context;
          this._alpha = alpha;
        }

        CatmullRom.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                this.point(this._x2, this._y2);
                break;
            }
            if (this._line || (this._line !== 0 && this._point === 1))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);

            if (this._point) {
              var x23 = this._x2 - x,
                y23 = this._y2 - y;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
              );
            }

            switch (this._point) {
              case 0:
                this._point = 1;
                this._line
                  ? this._context.lineTo(x, y)
                  : this._context.moveTo(x, y);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3; // proceed
              default:
                point(this, x, y);
                break;
            }

            (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
            (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
            (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(alpha) {
          function catmullRom(context) {
            return alpha
              ? new CatmullRom(context, alpha)
              : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](
                  context,
                  0
                );
          }

          catmullRom.alpha = function(alpha) {
            return custom(+alpha);
          };

          return catmullRom;
        })(0.5);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
      /*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js"
        );
        /* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../noop */ "./node_modules/d3-shape/src/noop.js"
        );
        /* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js"
        );

        function CatmullRomClosed(context, alpha) {
          this._context = context;
          this._alpha = alpha;
        }

        CatmullRomClosed.prototype = {
          areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
          areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 1: {
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
              case 2: {
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
              case 3: {
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
              }
            }
          },
          point: function(x, y) {
            (x = +x), (y = +y);

            if (this._point) {
              var x23 = this._x2 - x,
                y23 = this._y2 - y;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
              );
            }

            switch (this._point) {
              case 0:
                this._point = 1;
                (this._x3 = x), (this._y3 = y);
                break;
              case 1:
                this._point = 2;
                this._context.moveTo((this._x4 = x), (this._y4 = y));
                break;
              case 2:
                this._point = 3;
                (this._x5 = x), (this._y5 = y);
                break;
              default:
                Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(
                  this,
                  x,
                  y
                );
                break;
            }

            (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
            (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
            (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(alpha) {
          function catmullRom(context) {
            return alpha
              ? new CatmullRomClosed(context, alpha)
              : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__[
                  "CardinalClosed"
                ](context, 0);
          }

          catmullRom.alpha = function(alpha) {
            return custom(+alpha);
          };

          return catmullRom;
        })(0.5);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js"
        );
        /* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js"
        );

        function CatmullRomOpen(context, alpha) {
          this._context = context;
          this._alpha = alpha;
        }

        CatmullRomOpen.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
          },
          lineEnd: function() {
            if (this._line || (this._line !== 0 && this._point === 3))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);

            if (this._point) {
              var x23 = this._x2 - x,
                y23 = this._y2 - y;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
              );
            }

            switch (this._point) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4; // proceed
              default:
                Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(
                  this,
                  x,
                  y
                );
                break;
            }

            (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
            (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
            (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = (function custom(alpha) {
          function catmullRom(context) {
            return alpha
              ? new CatmullRomOpen(context, alpha)
              : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](
                  context,
                  0
                );
          }

          catmullRom.alpha = function(alpha) {
            return custom(+alpha);
          };

          return catmullRom;
        })(0.5);

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/linear.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function Linear(context) {
          this._context = context;
        }

        Linear.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._point = 0;
          },
          lineEnd: function() {
            if (this._line || (this._line !== 0 && this._point === 1))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                this._line
                  ? this._context.lineTo(x, y)
                  : this._context.moveTo(x, y);
                break;
              case 1:
                this._point = 2; // proceed
              default:
                this._context.lineTo(x, y);
                break;
            }
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new Linear(context);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../noop */ "./node_modules/d3-shape/src/noop.js"
        );

        function LinearClosed(context) {
          this._context = context;
        }

        LinearClosed.prototype = {
          areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
          areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
          lineStart: function() {
            this._point = 0;
          },
          lineEnd: function() {
            if (this._point) this._context.closePath();
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            if (this._point) this._context.lineTo(x, y);
            else (this._point = 1), this._context.moveTo(x, y);
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new LinearClosed(context);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/monotone.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
      /*! exports provided: monotoneX, monotoneY */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "monotoneX",
          function() {
            return monotoneX;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "monotoneY",
          function() {
            return monotoneY;
          }
        );
        function sign(x) {
          return x < 0 ? -1 : 1;
        }

        // Calculate the slopes of the tangents (Hermite-type interpolation) based on
        // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
        // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
        // NOV(II), P. 443, 1990.
        function slope3(that, x2, y2) {
          var h0 = that._x1 - that._x0,
            h1 = x2 - that._x1,
            s0 = (that._y1 - that._y0) / (h0 || (h1 < 0 && -0)),
            s1 = (y2 - that._y1) / (h1 || (h0 < 0 && -0)),
            p = (s0 * h1 + s1 * h0) / (h0 + h1);
          return (
            (sign(s0) + sign(s1)) *
              Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0
          );
        }

        // Calculate a one-sided slope.
        function slope2(that, t) {
          var h = that._x1 - that._x0;
          return h ? ((3 * (that._y1 - that._y0)) / h - t) / 2 : t;
        }

        // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
        // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
        // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
        function point(that, t0, t1) {
          var x0 = that._x0,
            y0 = that._y0,
            x1 = that._x1,
            y1 = that._y1,
            dx = (x1 - x0) / 3;
          that._context.bezierCurveTo(
            x0 + dx,
            y0 + dx * t0,
            x1 - dx,
            y1 - dx * t1,
            x1,
            y1
          );
        }

        function MonotoneX(context) {
          this._context = context;
        }

        MonotoneX.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                point(this, this._t0, slope2(this, this._t0));
                break;
            }
            if (this._line || (this._line !== 0 && this._point === 1))
              this._context.closePath();
            this._line = 1 - this._line;
          },
          point: function(x, y) {
            var t1 = NaN;

            (x = +x), (y = +y);
            if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
            switch (this._point) {
              case 0:
                this._point = 1;
                this._line
                  ? this._context.lineTo(x, y)
                  : this._context.moveTo(x, y);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                point(this, slope2(this, (t1 = slope3(this, x, y))), t1);
                break;
              default:
                point(this, this._t0, (t1 = slope3(this, x, y)));
                break;
            }

            (this._x0 = this._x1), (this._x1 = x);
            (this._y0 = this._y1), (this._y1 = y);
            this._t0 = t1;
          }
        };

        function MonotoneY(context) {
          this._context = new ReflectContext(context);
        }

        (MonotoneY.prototype = Object.create(
          MonotoneX.prototype
        )).point = function(x, y) {
          MonotoneX.prototype.point.call(this, y, x);
        };

        function ReflectContext(context) {
          this._context = context;
        }

        ReflectContext.prototype = {
          moveTo: function(x, y) {
            this._context.moveTo(y, x);
          },
          closePath: function() {
            this._context.closePath();
          },
          lineTo: function(x, y) {
            this._context.lineTo(y, x);
          },
          bezierCurveTo: function(x1, y1, x2, y2, x, y) {
            this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
          }
        };

        function monotoneX(context) {
          return new MonotoneX(context);
        }

        function monotoneY(context) {
          return new MonotoneY(context);
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/natural.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function Natural(context) {
          this._context = context;
        }

        Natural.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x = [];
            this._y = [];
          },
          lineEnd: function() {
            var x = this._x,
              y = this._y,
              n = x.length;

            if (n) {
              this._line
                ? this._context.lineTo(x[0], y[0])
                : this._context.moveTo(x[0], y[0]);
              if (n === 2) {
                this._context.lineTo(x[1], y[1]);
              } else {
                var px = controlPoints(x),
                  py = controlPoints(y);
                for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
                  this._context.bezierCurveTo(
                    px[0][i0],
                    py[0][i0],
                    px[1][i0],
                    py[1][i0],
                    x[i1],
                    y[i1]
                  );
                }
              }
            }

            if (this._line || (this._line !== 0 && n === 1))
              this._context.closePath();
            this._line = 1 - this._line;
            this._x = this._y = null;
          },
          point: function(x, y) {
            this._x.push(+x);
            this._y.push(+y);
          }
        };

        // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
        function controlPoints(x) {
          var i,
            n = x.length - 1,
            m,
            a = new Array(n),
            b = new Array(n),
            r = new Array(n);
          (a[0] = 0), (b[0] = 2), (r[0] = x[0] + 2 * x[1]);
          for (i = 1; i < n - 1; ++i)
            (a[i] = 1), (b[i] = 4), (r[i] = 4 * x[i] + 2 * x[i + 1]);
          (a[n - 1] = 2), (b[n - 1] = 7), (r[n - 1] = 8 * x[n - 1] + x[n]);
          for (i = 1; i < n; ++i)
            (m = a[i] / b[i - 1]), (b[i] -= m), (r[i] -= m * r[i - 1]);
          a[n - 1] = r[n - 1] / b[n - 1];
          for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
          b[n - 1] = (x[n] + a[n - 1]) / 2;
          for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
          return [a, b];
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new Natural(context);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/radial.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
      /*! exports provided: curveRadialLinear, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "curveRadialLinear",
          function() {
            return curveRadialLinear;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return curveRadial;
          }
        );
        /* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./linear */ "./node_modules/d3-shape/src/curve/linear.js"
        );

        var curveRadialLinear = curveRadial(
          _linear__WEBPACK_IMPORTED_MODULE_0__["default"]
        );

        function Radial(curve) {
          this._curve = curve;
        }

        Radial.prototype = {
          areaStart: function() {
            this._curve.areaStart();
          },
          areaEnd: function() {
            this._curve.areaEnd();
          },
          lineStart: function() {
            this._curve.lineStart();
          },
          lineEnd: function() {
            this._curve.lineEnd();
          },
          point: function(a, r) {
            this._curve.point(r * Math.sin(a), r * -Math.cos(a));
          }
        };

        function curveRadial(curve) {
          function radial(context) {
            return new Radial(curve(context));
          }

          radial._curve = curve;

          return radial;
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/curve/step.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
      /*! exports provided: default, stepBefore, stepAfter */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "stepBefore",
          function() {
            return stepBefore;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "stepAfter",
          function() {
            return stepAfter;
          }
        );
        function Step(context, t) {
          this._context = context;
          this._t = t;
        }

        Step.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            this._x = this._y = NaN;
            this._point = 0;
          },
          lineEnd: function() {
            if (0 < this._t && this._t < 1 && this._point === 2)
              this._context.lineTo(this._x, this._y);
            if (this._line || (this._line !== 0 && this._point === 1))
              this._context.closePath();
            if (this._line >= 0)
              (this._t = 1 - this._t), (this._line = 1 - this._line);
          },
          point: function(x, y) {
            (x = +x), (y = +y);
            switch (this._point) {
              case 0:
                this._point = 1;
                this._line
                  ? this._context.lineTo(x, y)
                  : this._context.moveTo(x, y);
                break;
              case 1:
                this._point = 2; // proceed
              default: {
                if (this._t <= 0) {
                  this._context.lineTo(this._x, y);
                  this._context.lineTo(x, y);
                } else {
                  var x1 = this._x * (1 - this._t) + x * this._t;
                  this._context.lineTo(x1, this._y);
                  this._context.lineTo(x1, y);
                }
                break;
              }
            }
            (this._x = x), (this._y = y);
          }
        };

        /* harmony default export */ __webpack_exports__["default"] = function(
          context
        ) {
          return new Step(context, 0.5);
        };

        function stepBefore(context) {
          return new Step(context, 0);
        }

        function stepAfter(context) {
          return new Step(context, 1);
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/descending.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/identity.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          d
        ) {
          return d;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/line.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-path */ "./node_modules/d3-path/index.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-shape/src/constant.js"
        );
        /* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js"
        );
        /* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./point */ "./node_modules/d3-shape/src/point.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
            y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
            defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
              true
            ),
            context = null,
            curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
            output = null;

          function line(data) {
            var i,
              n = data.length,
              d,
              defined0 = false,
              buffer;

            if (context == null)
              output = curve(
                (buffer = Object(
                  d3_path__WEBPACK_IMPORTED_MODULE_0__["path"]
                )())
              );

            for (i = 0; i <= n; ++i) {
              if (!(i < n && defined((d = data[i]), i, data)) === defined0) {
                if ((defined0 = !defined0)) output.lineStart();
                else output.lineEnd();
              }
              if (defined0) output.point(+x(d, i, data), +y(d, i, data));
            }

            if (buffer) return (output = null), buffer + "" || null;
          }

          line.x = function(_) {
            return arguments.length
              ? ((x =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                line)
              : x;
          };

          line.y = function(_) {
            return arguments.length
              ? ((y =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                line)
              : y;
          };

          line.defined = function(_) {
            return arguments.length
              ? ((defined =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        !!_
                      )),
                line)
              : defined;
          };

          line.curve = function(_) {
            return arguments.length
              ? ((curve = _),
                context != null && (output = curve(context)),
                line)
              : curve;
          };

          line.context = function(_) {
            return arguments.length
              ? (_ == null
                  ? (context = output = null)
                  : (output = curve((context = _))),
                line)
              : context;
          };

          return line;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/lineRadial.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
      /*! exports provided: lineRadial, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lineRadial",
          function() {
            return lineRadial;
          }
        );
        /* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js"
        );
        /* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./line */ "./node_modules/d3-shape/src/line.js"
        );

        function lineRadial(l) {
          var c = l.curve;

          (l.angle = l.x), delete l.x;
          (l.radius = l.y), delete l.y;

          l.curve = function(_) {
            return arguments.length
              ? c(
                  Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    _
                  )
                )
              : c()._curve;
          };

          return l;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return lineRadial(
            Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(
              _curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]
            )
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/link/index.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
      /*! exports provided: linkHorizontal, linkVertical, linkRadial */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "linkHorizontal",
          function() {
            return linkHorizontal;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "linkVertical",
          function() {
            return linkVertical;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "linkRadial",
          function() {
            return linkRadial;
          }
        );
        /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-path */ "./node_modules/d3-path/index.js"
        );
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../array */ "./node_modules/d3-shape/src/array.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../constant */ "./node_modules/d3-shape/src/constant.js"
        );
        /* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../point */ "./node_modules/d3-shape/src/point.js"
        );
        /* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../pointRadial */ "./node_modules/d3-shape/src/pointRadial.js"
        );

        function linkSource(d) {
          return d.source;
        }

        function linkTarget(d) {
          return d.target;
        }

        function link(curve) {
          var source = linkSource,
            target = linkTarget,
            x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
            y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
            context = null;

          function link() {
            var buffer,
              argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(
                arguments
              ),
              s = source.apply(this, argv),
              t = target.apply(this, argv);
            if (!context)
              context = buffer = Object(
                d3_path__WEBPACK_IMPORTED_MODULE_0__["path"]
              )();
            curve(
              context,
              +x.apply(this, ((argv[0] = s), argv)),
              +y.apply(this, argv),
              +x.apply(this, ((argv[0] = t), argv)),
              +y.apply(this, argv)
            );
            if (buffer) return (context = null), buffer + "" || null;
          }

          link.source = function(_) {
            return arguments.length ? ((source = _), link) : source;
          };

          link.target = function(_) {
            return arguments.length ? ((target = _), link) : target;
          };

          link.x = function(_) {
            return arguments.length
              ? ((x =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        +_
                      )),
                link)
              : x;
          };

          link.y = function(_) {
            return arguments.length
              ? ((y =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        +_
                      )),
                link)
              : y;
          };

          link.context = function(_) {
            return arguments.length
              ? ((context = _ == null ? null : _), link)
              : context;
          };

          return link;
        }

        function curveHorizontal(context, x0, y0, x1, y1) {
          context.moveTo(x0, y0);
          context.bezierCurveTo((x0 = (x0 + x1) / 2), y0, x0, y1, x1, y1);
        }

        function curveVertical(context, x0, y0, x1, y1) {
          context.moveTo(x0, y0);
          context.bezierCurveTo(x0, (y0 = (y0 + y1) / 2), x1, y0, x1, y1);
        }

        function curveRadial(context, x0, y0, x1, y1) {
          var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(
              x0,
              y0
            ),
            p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(
              x0,
              (y0 = (y0 + y1) / 2)
            ),
            p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(
              x1,
              y0
            ),
            p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(
              x1,
              y1
            );
          context.moveTo(p0[0], p0[1]);
          context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
        }

        function linkHorizontal() {
          return link(curveHorizontal);
        }

        function linkVertical() {
          return link(curveVertical);
        }

        function linkRadial() {
          var l = link(curveRadial);
          (l.angle = l.x), delete l.x;
          (l.radius = l.y), delete l.y;
          return l;
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/math.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
      /*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "abs",
          function() {
            return abs;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "atan2",
          function() {
            return atan2;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cos",
          function() {
            return cos;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "max",
          function() {
            return max;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "min",
          function() {
            return min;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sin",
          function() {
            return sin;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sqrt",
          function() {
            return sqrt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "epsilon",
          function() {
            return epsilon;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pi",
          function() {
            return pi;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "halfPi",
          function() {
            return halfPi;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tau",
          function() {
            return tau;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "acos",
          function() {
            return acos;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "asin",
          function() {
            return asin;
          }
        );
        var abs = Math.abs;
        var atan2 = Math.atan2;
        var cos = Math.cos;
        var max = Math.max;
        var min = Math.min;
        var sin = Math.sin;
        var sqrt = Math.sqrt;

        var epsilon = 1e-12;
        var pi = Math.PI;
        var halfPi = pi / 2;
        var tau = 2 * pi;

        function acos(x) {
          return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
        }

        function asin(x) {
          return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/noop.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {};

        /***/
      },

    /***/ "./node_modules/d3-shape/src/offset/diverging.js":
      /*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          series,
          order
        ) {
          if (!((n = series.length) > 1)) return;
          for (
            var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length;
            j < m;
            ++j
          ) {
            for (yp = yn = 0, i = 0; i < n; ++i) {
              if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
                (d[0] = yp), (d[1] = yp += dy);
              } else if (dy < 0) {
                (d[1] = yn), (d[0] = yn += dy);
              } else {
                d[0] = yp;
              }
            }
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/offset/expand.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./none */ "./node_modules/d3-shape/src/offset/none.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series,
          order
        ) {
          if (!((n = series.length) > 0)) return;
          for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
            for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
            if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
          }
          Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/offset/none.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          series,
          order
        ) {
          if (!((n = series.length) > 1)) return;
          for (
            var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length;
            i < n;
            ++i
          ) {
            (s0 = s1), (s1 = series[order[i]]);
            for (j = 0; j < m; ++j) {
              s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
            }
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/offset/silhouette.js":
      /*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./none */ "./node_modules/d3-shape/src/offset/none.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series,
          order
        ) {
          if (!((n = series.length) > 0)) return;
          for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
            for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
            s0[j][1] += s0[j][0] = -y / 2;
          }
          Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/offset/wiggle.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./none */ "./node_modules/d3-shape/src/offset/none.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series,
          order
        ) {
          if (
            !((n = series.length) > 0) ||
            !((m = (s0 = series[order[0]]).length) > 0)
          )
            return;
          for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
            for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
              var si = series[order[i]],
                sij0 = si[j][1] || 0,
                sij1 = si[j - 1][1] || 0,
                s3 = (sij0 - sij1) / 2;
              for (var k = 0; k < i; ++k) {
                var sk = series[order[k]],
                  skj0 = sk[j][1] || 0,
                  skj1 = sk[j - 1][1] || 0;
                s3 += skj0 - skj1;
              }
              (s1 += sij0), (s2 += s3 * sij0);
            }
            s0[j - 1][1] += s0[j - 1][0] = y;
            if (s1) y -= s2 / s1;
          }
          s0[j - 1][1] += s0[j - 1][0] = y;
          Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/order/ascending.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
      /*! exports provided: default, sum */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sum",
          function() {
            return sum;
          }
        );
        /* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./none */ "./node_modules/d3-shape/src/order/none.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series
        ) {
          var sums = series.map(sum);
          return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(
            series
          ).sort(function(a, b) {
            return sums[a] - sums[b];
          });
        };

        function sum(series) {
          var s = 0,
            i = -1,
            n = series.length,
            v;
          while (++i < n) if ((v = +series[i][1])) s += v;
          return s;
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/order/descending.js":
      /*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series
        ) {
          return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(
            series
          ).reverse();
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/order/insideOut.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./none */ "./node_modules/d3-shape/src/order/none.js"
        );
        /* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series
        ) {
          var n = series.length,
            i,
            j,
            sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
            order = Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(
              series
            ).sort(function(a, b) {
              return sums[b] - sums[a];
            }),
            top = 0,
            bottom = 0,
            tops = [],
            bottoms = [];

          for (i = 0; i < n; ++i) {
            j = order[i];
            if (top < bottom) {
              top += sums[j];
              tops.push(j);
            } else {
              bottom += sums[j];
              bottoms.push(j);
            }
          }

          return bottoms.reverse().concat(tops);
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/order/none.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          series
        ) {
          var n = series.length,
            o = new Array(n);
          while (--n >= 0) o[n] = n;
          return o;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/order/reverse.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./none */ "./node_modules/d3-shape/src/order/none.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          series
        ) {
          return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(
            series
          ).reverse();
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/pie.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-shape/src/constant.js"
        );
        /* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./descending */ "./node_modules/d3-shape/src/descending.js"
        );
        /* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./identity */ "./node_modules/d3-shape/src/identity.js"
        );
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./math */ "./node_modules/d3-shape/src/math.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
            sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
            sort = null,
            startAngle = Object(
              _constant__WEBPACK_IMPORTED_MODULE_0__["default"]
            )(0),
            endAngle = Object(
              _constant__WEBPACK_IMPORTED_MODULE_0__["default"]
            )(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
            padAngle = Object(
              _constant__WEBPACK_IMPORTED_MODULE_0__["default"]
            )(0);

          function pie(data) {
            var i,
              n = data.length,
              j,
              k,
              sum = 0,
              index = new Array(n),
              arcs = new Array(n),
              a0 = +startAngle.apply(this, arguments),
              da = Math.min(
                _math__WEBPACK_IMPORTED_MODULE_3__["tau"],
                Math.max(
                  -_math__WEBPACK_IMPORTED_MODULE_3__["tau"],
                  endAngle.apply(this, arguments) - a0
                )
              ),
              a1,
              p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
              pa = p * (da < 0 ? -1 : 1),
              v;

            for (i = 0; i < n; ++i) {
              if ((v = arcs[(index[i] = i)] = +value(data[i], i, data)) > 0) {
                sum += v;
              }
            }

            // Optionally sort the arcs by previously-computed values or by data.
            if (sortValues != null)
              index.sort(function(i, j) {
                return sortValues(arcs[i], arcs[j]);
              });
            else if (sort != null)
              index.sort(function(i, j) {
                return sort(data[i], data[j]);
              });

            // Compute the arcs! They are stored in the original data's order.
            for (
              i = 0, k = sum ? (da - n * pa) / sum : 0;
              i < n;
              ++i, a0 = a1
            ) {
              (j = index[i]),
                (v = arcs[j]),
                (a1 = a0 + (v > 0 ? v * k : 0) + pa),
                (arcs[j] = {
                  data: data[j],
                  index: i,
                  value: v,
                  startAngle: a0,
                  endAngle: a1,
                  padAngle: p
                });
            }

            return arcs;
          }

          pie.value = function(_) {
            return arguments.length
              ? ((value =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                        +_
                      )),
                pie)
              : value;
          };

          pie.sortValues = function(_) {
            return arguments.length
              ? ((sortValues = _), (sort = null), pie)
              : sortValues;
          };

          pie.sort = function(_) {
            return arguments.length
              ? ((sort = _), (sortValues = null), pie)
              : sort;
          };

          pie.startAngle = function(_) {
            return arguments.length
              ? ((startAngle =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                        +_
                      )),
                pie)
              : startAngle;
          };

          pie.endAngle = function(_) {
            return arguments.length
              ? ((endAngle =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                        +_
                      )),
                pie)
              : endAngle;
          };

          pie.padAngle = function(_) {
            return arguments.length
              ? ((padAngle =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(
                        +_
                      )),
                pie)
              : padAngle;
          };

          return pie;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/point.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
      /*! exports provided: x, y */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "x",
          function() {
            return x;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "y",
          function() {
            return y;
          }
        );
        function x(p) {
          return p[0];
        }

        function y(p) {
          return p[1];
        }

        /***/
      },

    /***/ "./node_modules/d3-shape/src/pointRadial.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          x,
          y
        ) {
          return [(y = +y) * Math.cos((x -= Math.PI / 2)), y * Math.sin(x)];
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/stack.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./array */ "./node_modules/d3-shape/src/array.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-shape/src/constant.js"
        );
        /* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js"
        );
        /* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./order/none */ "./node_modules/d3-shape/src/order/none.js"
        );

        function stackValue(d, key) {
          return d[key];
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
              []
            ),
            order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
            offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
            value = stackValue;

          function stack(data) {
            var kz = keys.apply(this, arguments),
              i,
              m = data.length,
              n = kz.length,
              sz = new Array(n),
              oz;

            for (i = 0; i < n; ++i) {
              for (
                var ki = kz[i], si = (sz[i] = new Array(m)), j = 0, sij;
                j < m;
                ++j
              ) {
                si[j] = sij = [0, +value(data[j], ki, j, data)];
                sij.data = data[j];
              }
              si.key = ki;
            }

            for (i = 0, oz = order(sz); i < n; ++i) {
              sz[oz[i]].index = i;
            }

            offset(sz, oz);
            return sz;
          }

          stack.keys = function(_) {
            return arguments.length
              ? ((keys =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)
                      )),
                stack)
              : keys;
          };

          stack.value = function(_) {
            return arguments.length
              ? ((value =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        +_
                      )),
                stack)
              : value;
          };

          stack.order = function(_) {
            return arguments.length
              ? ((order =
                  _ == null
                    ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"]
                    : typeof _ === "function"
                      ? _
                      : Object(
                          _constant__WEBPACK_IMPORTED_MODULE_1__["default"]
                        )(
                          _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)
                        )),
                stack)
              : order;
          };

          stack.offset = function(_) {
            return arguments.length
              ? ((offset =
                  _ == null
                    ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"]
                    : _),
                stack)
              : offset;
          };

          return stack;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
      /*! exports provided: symbols, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "symbols",
          function() {
            return symbols;
          }
        );
        /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-path */ "./node_modules/d3-path/index.js"
        );
        /* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js"
        );
        /* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js"
        );
        /* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js"
        );
        /* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js"
        );
        /* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js"
        );
        /* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js"
        );
        /* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js"
        );
        /* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./constant */ "./node_modules/d3-shape/src/constant.js"
        );

        var symbols = [
          _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"],
          _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"],
          _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"],
          _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"],
          _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"],
          _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
          _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]
        ];

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(
              _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]
            ),
            size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(
              64
            ),
            context = null;

          function symbol() {
            var buffer;
            if (!context)
              context = buffer = Object(
                d3_path__WEBPACK_IMPORTED_MODULE_0__["path"]
              )();
            type
              .apply(this, arguments)
              .draw(context, +size.apply(this, arguments));
            if (buffer) return (context = null), buffer + "" || null;
          }

          symbol.type = function(_) {
            return arguments.length
              ? ((type =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(
                        _
                      )),
                symbol)
              : type;
          };

          symbol.size = function(_) {
            return arguments.length
              ? ((size =
                  typeof _ === "function"
                    ? _
                    : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(
                        +_
                      )),
                symbol)
              : size;
          };

          symbol.context = function(_) {
            return arguments.length
              ? ((context = _ == null ? null : _), symbol)
              : context;
          };

          return symbol;
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/circle.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../math */ "./node_modules/d3-shape/src/math.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
            context.moveTo(r, 0);
            context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/cross.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var r = Math.sqrt(size / 5) / 2;
            context.moveTo(-3 * r, -r);
            context.lineTo(-r, -r);
            context.lineTo(-r, -3 * r);
            context.lineTo(r, -3 * r);
            context.lineTo(r, -r);
            context.lineTo(3 * r, -r);
            context.lineTo(3 * r, r);
            context.lineTo(r, r);
            context.lineTo(r, 3 * r);
            context.lineTo(-r, 3 * r);
            context.lineTo(-r, r);
            context.lineTo(-3 * r, r);
            context.closePath();
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/diamond.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var tan30 = Math.sqrt(1 / 3),
          tan30_2 = tan30 * 2;

        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var y = Math.sqrt(size / tan30_2),
              x = y * tan30;
            context.moveTo(0, -y);
            context.lineTo(x, 0);
            context.lineTo(0, y);
            context.lineTo(-x, 0);
            context.closePath();
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/square.js":
      /*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var w = Math.sqrt(size),
              x = -w / 2;
            context.rect(x, x, w, w);
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/star.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../math */ "./node_modules/d3-shape/src/math.js"
        );

        var ka = 0.8908130915292852281,
          kr =
            Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) /
            Math.sin((7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"]) / 10),
          kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
          ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var r = Math.sqrt(size * ka),
              x = kx * r,
              y = ky * r;
            context.moveTo(0, -r);
            context.lineTo(x, y);
            for (var i = 1; i < 5; ++i) {
              var a = (_math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i) / 5,
                c = Math.cos(a),
                s = Math.sin(a);
              context.lineTo(s * r, -c * r);
              context.lineTo(c * x - s * y, s * x + c * y);
            }
            context.closePath();
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/triangle.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var sqrt3 = Math.sqrt(3);

        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var y = -Math.sqrt(size / (sqrt3 * 3));
            context.moveTo(0, y * 2);
            context.lineTo(-sqrt3 * y, -y);
            context.lineTo(sqrt3 * y, -y);
            context.closePath();
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-shape/src/symbol/wye.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var c = -0.5,
          s = Math.sqrt(3) / 2,
          k = 1 / Math.sqrt(12),
          a = (k / 2 + 1) * 3;

        /* harmony default export */ __webpack_exports__["default"] = {
          draw: function(context, size) {
            var r = Math.sqrt(size / a),
              x0 = r / 2,
              y0 = r * k,
              x1 = x0,
              y1 = r * k + r,
              x2 = -x1,
              y2 = y1;
            context.moveTo(x0, y0);
            context.lineTo(x1, y1);
            context.lineTo(x2, y2);
            context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
            context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
            context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
            context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
            context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
            context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
            context.closePath();
          }
        };

        /***/
      },

    /***/ "./node_modules/d3-time-format/index.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-time-format/index.js ***!
  \**********************************************/
      /*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeFormatDefaultLocale",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeFormat",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__[
              "timeFormat"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeParse",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeParse"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcFormat",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcParse",
          function() {
            return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcParse"];
          }
        );

        /* harmony import */ var _src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/locale */ "./node_modules/d3-time-format/src/locale.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeFormatLocale",
          function() {
            return _src_locale__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_isoFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "isoFormat",
          function() {
            return _src_isoFormat__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_isoParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/isoParse */ "./node_modules/d3-time-format/src/isoParse.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "isoParse",
          function() {
            return _src_isoParse__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-time-format/src/defaultLocale.js":
      /*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
      /*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timeFormat",
          function() {
            return timeFormat;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timeParse",
          function() {
            return timeParse;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcFormat",
          function() {
            return utcFormat;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcParse",
          function() {
            return utcParse;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return defaultLocale;
          }
        );
        /* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./locale */ "./node_modules/d3-time-format/src/locale.js"
        );

        var locale;
        var timeFormat;
        var timeParse;
        var utcFormat;
        var utcParse;

        defaultLocale({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        });

        function defaultLocale(definition) {
          locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(
            definition
          );
          timeFormat = locale.format;
          timeParse = locale.parse;
          utcFormat = locale.utcFormat;
          utcParse = locale.utcParse;
          return locale;
        }

        /***/
      },

    /***/ "./node_modules/d3-time-format/src/isoFormat.js":
      /*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
      /*! exports provided: isoSpecifier, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isoSpecifier",
          function() {
            return isoSpecifier;
          }
        );
        /* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js"
        );

        var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

        function formatIsoNative(date) {
          return date.toISOString();
        }

        var formatIso = Date.prototype.toISOString
          ? formatIsoNative
          : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(
              isoSpecifier
            );

        /* harmony default export */ __webpack_exports__["default"] = formatIso;

        /***/
      },

    /***/ "./node_modules/d3-time-format/src/isoParse.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js"
        );
        /* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js"
        );

        function parseIsoNative(string) {
          var date = new Date(string);
          return isNaN(date) ? null : date;
        }

        var parseIso = +new Date("2000-01-01T00:00:00.000Z")
          ? parseIsoNative
          : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(
              _isoFormat__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]
            );

        /* harmony default export */ __webpack_exports__["default"] = parseIso;

        /***/
      },

    /***/ "./node_modules/d3-time-format/src/locale.js":
      /*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return formatLocale;
          }
        );
        /* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-time */ "./node_modules/d3-time/index.js"
        );

        function localDate(d) {
          if (0 <= d.y && d.y < 100) {
            var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
            date.setFullYear(d.y);
            return date;
          }
          return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
        }

        function utcDate(d) {
          if (0 <= d.y && d.y < 100) {
            var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
            date.setUTCFullYear(d.y);
            return date;
          }
          return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
        }

        function newYear(y) {
          return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
        }

        function formatLocale(locale) {
          var locale_dateTime = locale.dateTime,
            locale_date = locale.date,
            locale_time = locale.time,
            locale_periods = locale.periods,
            locale_weekdays = locale.days,
            locale_shortWeekdays = locale.shortDays,
            locale_months = locale.months,
            locale_shortMonths = locale.shortMonths;

          var periodRe = formatRe(locale_periods),
            periodLookup = formatLookup(locale_periods),
            weekdayRe = formatRe(locale_weekdays),
            weekdayLookup = formatLookup(locale_weekdays),
            shortWeekdayRe = formatRe(locale_shortWeekdays),
            shortWeekdayLookup = formatLookup(locale_shortWeekdays),
            monthRe = formatRe(locale_months),
            monthLookup = formatLookup(locale_months),
            shortMonthRe = formatRe(locale_shortMonths),
            shortMonthLookup = formatLookup(locale_shortMonths);

          var formats = {
            a: formatShortWeekday,
            A: formatWeekday,
            b: formatShortMonth,
            B: formatMonth,
            c: null,
            d: formatDayOfMonth,
            e: formatDayOfMonth,
            f: formatMicroseconds,
            H: formatHour24,
            I: formatHour12,
            j: formatDayOfYear,
            L: formatMilliseconds,
            m: formatMonthNumber,
            M: formatMinutes,
            p: formatPeriod,
            Q: formatUnixTimestamp,
            s: formatUnixTimestampSeconds,
            S: formatSeconds,
            u: formatWeekdayNumberMonday,
            U: formatWeekNumberSunday,
            V: formatWeekNumberISO,
            w: formatWeekdayNumberSunday,
            W: formatWeekNumberMonday,
            x: null,
            X: null,
            y: formatYear,
            Y: formatFullYear,
            Z: formatZone,
            "%": formatLiteralPercent
          };

          var utcFormats = {
            a: formatUTCShortWeekday,
            A: formatUTCWeekday,
            b: formatUTCShortMonth,
            B: formatUTCMonth,
            c: null,
            d: formatUTCDayOfMonth,
            e: formatUTCDayOfMonth,
            f: formatUTCMicroseconds,
            H: formatUTCHour24,
            I: formatUTCHour12,
            j: formatUTCDayOfYear,
            L: formatUTCMilliseconds,
            m: formatUTCMonthNumber,
            M: formatUTCMinutes,
            p: formatUTCPeriod,
            Q: formatUnixTimestamp,
            s: formatUnixTimestampSeconds,
            S: formatUTCSeconds,
            u: formatUTCWeekdayNumberMonday,
            U: formatUTCWeekNumberSunday,
            V: formatUTCWeekNumberISO,
            w: formatUTCWeekdayNumberSunday,
            W: formatUTCWeekNumberMonday,
            x: null,
            X: null,
            y: formatUTCYear,
            Y: formatUTCFullYear,
            Z: formatUTCZone,
            "%": formatLiteralPercent
          };

          var parses = {
            a: parseShortWeekday,
            A: parseWeekday,
            b: parseShortMonth,
            B: parseMonth,
            c: parseLocaleDateTime,
            d: parseDayOfMonth,
            e: parseDayOfMonth,
            f: parseMicroseconds,
            H: parseHour24,
            I: parseHour24,
            j: parseDayOfYear,
            L: parseMilliseconds,
            m: parseMonthNumber,
            M: parseMinutes,
            p: parsePeriod,
            Q: parseUnixTimestamp,
            s: parseUnixTimestampSeconds,
            S: parseSeconds,
            u: parseWeekdayNumberMonday,
            U: parseWeekNumberSunday,
            V: parseWeekNumberISO,
            w: parseWeekdayNumberSunday,
            W: parseWeekNumberMonday,
            x: parseLocaleDate,
            X: parseLocaleTime,
            y: parseYear,
            Y: parseFullYear,
            Z: parseZone,
            "%": parseLiteralPercent
          };

          // These recursive directive definitions must be deferred.
          formats.x = newFormat(locale_date, formats);
          formats.X = newFormat(locale_time, formats);
          formats.c = newFormat(locale_dateTime, formats);
          utcFormats.x = newFormat(locale_date, utcFormats);
          utcFormats.X = newFormat(locale_time, utcFormats);
          utcFormats.c = newFormat(locale_dateTime, utcFormats);

          function newFormat(specifier, formats) {
            return function(date) {
              var string = [],
                i = -1,
                j = 0,
                n = specifier.length,
                c,
                pad,
                format;

              if (!(date instanceof Date)) date = new Date(+date);

              while (++i < n) {
                if (specifier.charCodeAt(i) === 37) {
                  string.push(specifier.slice(j, i));
                  if ((pad = pads[(c = specifier.charAt(++i))]) != null)
                    c = specifier.charAt(++i);
                  else pad = c === "e" ? " " : "0";
                  if ((format = formats[c])) c = format(date, pad);
                  string.push(c);
                  j = i + 1;
                }
              }

              string.push(specifier.slice(j, i));
              return string.join("");
            };
          }

          function newParse(specifier, newDate) {
            return function(string) {
              var d = newYear(1900),
                i = parseSpecifier(d, specifier, (string += ""), 0),
                week,
                day;
              if (i != string.length) return null;

              // If a UNIX timestamp is specified, return it.
              if ("Q" in d) return new Date(d.Q);

              // The am-pm flag is 0 for AM, and 1 for PM.
              if ("p" in d) d.H = (d.H % 12) + d.p * 12;

              // Convert day-of-week and week-of-year to day-of-year.
              if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                  (week = utcDate(newYear(d.y))), (day = week.getUTCDay());
                  week =
                    day > 4 || day === 0
                      ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(
                          week
                        )
                      : Object(
                          d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"]
                        )(week);
                  week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(
                    week,
                    (d.V - 1) * 7
                  );
                  d.y = week.getUTCFullYear();
                  d.m = week.getUTCMonth();
                  d.d = week.getUTCDate() + ((d.w + 6) % 7);
                } else {
                  (week = newDate(newYear(d.y))), (day = week.getDay());
                  week =
                    day > 4 || day === 0
                      ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(
                          week
                        )
                      : Object(
                          d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"]
                        )(week);
                  week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(
                    week,
                    (d.V - 1) * 7
                  );
                  d.y = week.getFullYear();
                  d.m = week.getMonth();
                  d.d = week.getDate() + ((d.w + 6) % 7);
                }
              } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day =
                  "Z" in d
                    ? utcDate(newYear(d.y)).getUTCDay()
                    : newDate(newYear(d.y)).getDay();
                d.m = 0;
                d.d =
                  "W" in d
                    ? ((d.w + 6) % 7) + d.W * 7 - ((day + 5) % 7)
                    : d.w + d.U * 7 - ((day + 6) % 7);
              }

              // If a time zone is specified, all fields are interpreted as UTC and then
              // offset according to the specified time zone.
              if ("Z" in d) {
                d.H += (d.Z / 100) | 0;
                d.M += d.Z % 100;
                return utcDate(d);
              }

              // Otherwise, all fields are in local time.
              return newDate(d);
            };
          }

          function parseSpecifier(d, specifier, string, j) {
            var i = 0,
              n = specifier.length,
              m = string.length,
              c,
              parse;

            while (i < n) {
              if (j >= m) return -1;
              c = specifier.charCodeAt(i++);
              if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
              } else if (c != string.charCodeAt(j++)) {
                return -1;
              }
            }

            return j;
          }

          function parsePeriod(d, string, i) {
            var n = periodRe.exec(string.slice(i));
            return n
              ? ((d.p = periodLookup[n[0].toLowerCase()]), i + n[0].length)
              : -1;
          }

          function parseShortWeekday(d, string, i) {
            var n = shortWeekdayRe.exec(string.slice(i));
            return n
              ? ((d.w = shortWeekdayLookup[n[0].toLowerCase()]),
                i + n[0].length)
              : -1;
          }

          function parseWeekday(d, string, i) {
            var n = weekdayRe.exec(string.slice(i));
            return n
              ? ((d.w = weekdayLookup[n[0].toLowerCase()]), i + n[0].length)
              : -1;
          }

          function parseShortMonth(d, string, i) {
            var n = shortMonthRe.exec(string.slice(i));
            return n
              ? ((d.m = shortMonthLookup[n[0].toLowerCase()]), i + n[0].length)
              : -1;
          }

          function parseMonth(d, string, i) {
            var n = monthRe.exec(string.slice(i));
            return n
              ? ((d.m = monthLookup[n[0].toLowerCase()]), i + n[0].length)
              : -1;
          }

          function parseLocaleDateTime(d, string, i) {
            return parseSpecifier(d, locale_dateTime, string, i);
          }

          function parseLocaleDate(d, string, i) {
            return parseSpecifier(d, locale_date, string, i);
          }

          function parseLocaleTime(d, string, i) {
            return parseSpecifier(d, locale_time, string, i);
          }

          function formatShortWeekday(d) {
            return locale_shortWeekdays[d.getDay()];
          }

          function formatWeekday(d) {
            return locale_weekdays[d.getDay()];
          }

          function formatShortMonth(d) {
            return locale_shortMonths[d.getMonth()];
          }

          function formatMonth(d) {
            return locale_months[d.getMonth()];
          }

          function formatPeriod(d) {
            return locale_periods[+(d.getHours() >= 12)];
          }

          function formatUTCShortWeekday(d) {
            return locale_shortWeekdays[d.getUTCDay()];
          }

          function formatUTCWeekday(d) {
            return locale_weekdays[d.getUTCDay()];
          }

          function formatUTCShortMonth(d) {
            return locale_shortMonths[d.getUTCMonth()];
          }

          function formatUTCMonth(d) {
            return locale_months[d.getUTCMonth()];
          }

          function formatUTCPeriod(d) {
            return locale_periods[+(d.getUTCHours() >= 12)];
          }

          return {
            format: function(specifier) {
              var f = newFormat((specifier += ""), formats);
              f.toString = function() {
                return specifier;
              };
              return f;
            },
            parse: function(specifier) {
              var p = newParse((specifier += ""), localDate);
              p.toString = function() {
                return specifier;
              };
              return p;
            },
            utcFormat: function(specifier) {
              var f = newFormat((specifier += ""), utcFormats);
              f.toString = function() {
                return specifier;
              };
              return f;
            },
            utcParse: function(specifier) {
              var p = newParse(specifier, utcDate);
              p.toString = function() {
                return specifier;
              };
              return p;
            }
          };
        }

        var pads = {"-": "", _: " ", "0": "0"},
          numberRe = /^\s*\d+/, // note: ignores next directive
          percentRe = /^%/,
          requoteRe = /[\\^$*+?|[\]().{}]/g;

        function pad(value, fill, width) {
          var sign = value < 0 ? "-" : "",
            string = (sign ? -value : value) + "",
            length = string.length;
          return (
            sign +
            (length < width
              ? new Array(width - length + 1).join(fill) + string
              : string)
          );
        }

        function requote(s) {
          return s.replace(requoteRe, "\\$&");
        }

        function formatRe(names) {
          return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
        }

        function formatLookup(names) {
          var map = {},
            i = -1,
            n = names.length;
          while (++i < n) map[names[i].toLowerCase()] = i;
          return map;
        }

        function parseWeekdayNumberSunday(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 1));
          return n ? ((d.w = +n[0]), i + n[0].length) : -1;
        }

        function parseWeekdayNumberMonday(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 1));
          return n ? ((d.u = +n[0]), i + n[0].length) : -1;
        }

        function parseWeekNumberSunday(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.U = +n[0]), i + n[0].length) : -1;
        }

        function parseWeekNumberISO(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.V = +n[0]), i + n[0].length) : -1;
        }

        function parseWeekNumberMonday(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.W = +n[0]), i + n[0].length) : -1;
        }

        function parseFullYear(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 4));
          return n ? ((d.y = +n[0]), i + n[0].length) : -1;
        }

        function parseYear(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n
            ? ((d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000)), i + n[0].length)
            : -1;
        }

        function parseZone(d, string, i) {
          var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
          return n
            ? ((d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), i + n[0].length)
            : -1;
        }

        function parseMonthNumber(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.m = n[0] - 1), i + n[0].length) : -1;
        }

        function parseDayOfMonth(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.d = +n[0]), i + n[0].length) : -1;
        }

        function parseDayOfYear(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 3));
          return n ? ((d.m = 0), (d.d = +n[0]), i + n[0].length) : -1;
        }

        function parseHour24(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.H = +n[0]), i + n[0].length) : -1;
        }

        function parseMinutes(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.M = +n[0]), i + n[0].length) : -1;
        }

        function parseSeconds(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 2));
          return n ? ((d.S = +n[0]), i + n[0].length) : -1;
        }

        function parseMilliseconds(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 3));
          return n ? ((d.L = +n[0]), i + n[0].length) : -1;
        }

        function parseMicroseconds(d, string, i) {
          var n = numberRe.exec(string.slice(i, i + 6));
          return n ? ((d.L = Math.floor(n[0] / 1000)), i + n[0].length) : -1;
        }

        function parseLiteralPercent(d, string, i) {
          var n = percentRe.exec(string.slice(i, i + 1));
          return n ? i + n[0].length : -1;
        }

        function parseUnixTimestamp(d, string, i) {
          var n = numberRe.exec(string.slice(i));
          return n ? ((d.Q = +n[0]), i + n[0].length) : -1;
        }

        function parseUnixTimestampSeconds(d, string, i) {
          var n = numberRe.exec(string.slice(i));
          return n ? ((d.Q = +n[0] * 1000), i + n[0].length) : -1;
        }

        function formatDayOfMonth(d, p) {
          return pad(d.getDate(), p, 2);
        }

        function formatHour24(d, p) {
          return pad(d.getHours(), p, 2);
        }

        function formatHour12(d, p) {
          return pad(d.getHours() % 12 || 12, p, 2);
        }

        function formatDayOfYear(d, p) {
          return pad(
            1 +
              d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(
                Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d),
                d
              ),
            p,
            3
          );
        }

        function formatMilliseconds(d, p) {
          return pad(d.getMilliseconds(), p, 3);
        }

        function formatMicroseconds(d, p) {
          return formatMilliseconds(d, p) + "000";
        }

        function formatMonthNumber(d, p) {
          return pad(d.getMonth() + 1, p, 2);
        }

        function formatMinutes(d, p) {
          return pad(d.getMinutes(), p, 2);
        }

        function formatSeconds(d, p) {
          return pad(d.getSeconds(), p, 2);
        }

        function formatWeekdayNumberMonday(d) {
          var day = d.getDay();
          return day === 0 ? 7 : day;
        }

        function formatWeekNumberSunday(d, p) {
          return pad(
            d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(
              Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d),
              d
            ),
            p,
            2
          );
        }

        function formatWeekNumberISO(d, p) {
          var day = d.getDay();
          d =
            day >= 4 || day === 0
              ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d)
              : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
          return pad(
            d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(
              Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d),
              d
            ) +
              (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(
                d
              ).getDay() ===
                4),
            p,
            2
          );
        }

        function formatWeekdayNumberSunday(d) {
          return d.getDay();
        }

        function formatWeekNumberMonday(d, p) {
          return pad(
            d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(
              Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d),
              d
            ),
            p,
            2
          );
        }

        function formatYear(d, p) {
          return pad(d.getFullYear() % 100, p, 2);
        }

        function formatFullYear(d, p) {
          return pad(d.getFullYear() % 10000, p, 4);
        }

        function formatZone(d) {
          var z = d.getTimezoneOffset();
          return (
            (z > 0 ? "-" : ((z *= -1), "+")) +
            pad((z / 60) | 0, "0", 2) +
            pad(z % 60, "0", 2)
          );
        }

        function formatUTCDayOfMonth(d, p) {
          return pad(d.getUTCDate(), p, 2);
        }

        function formatUTCHour24(d, p) {
          return pad(d.getUTCHours(), p, 2);
        }

        function formatUTCHour12(d, p) {
          return pad(d.getUTCHours() % 12 || 12, p, 2);
        }

        function formatUTCDayOfYear(d, p) {
          return pad(
            1 +
              d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(
                Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d),
                d
              ),
            p,
            3
          );
        }

        function formatUTCMilliseconds(d, p) {
          return pad(d.getUTCMilliseconds(), p, 3);
        }

        function formatUTCMicroseconds(d, p) {
          return formatUTCMilliseconds(d, p) + "000";
        }

        function formatUTCMonthNumber(d, p) {
          return pad(d.getUTCMonth() + 1, p, 2);
        }

        function formatUTCMinutes(d, p) {
          return pad(d.getUTCMinutes(), p, 2);
        }

        function formatUTCSeconds(d, p) {
          return pad(d.getUTCSeconds(), p, 2);
        }

        function formatUTCWeekdayNumberMonday(d) {
          var dow = d.getUTCDay();
          return dow === 0 ? 7 : dow;
        }

        function formatUTCWeekNumberSunday(d, p) {
          return pad(
            d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(
              Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d),
              d
            ),
            p,
            2
          );
        }

        function formatUTCWeekNumberISO(d, p) {
          var day = d.getUTCDay();
          d =
            day >= 4 || day === 0
              ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d)
              : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
          return pad(
            d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(
              Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d),
              d
            ) +
              (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(
                d
              ).getUTCDay() ===
                4),
            p,
            2
          );
        }

        function formatUTCWeekdayNumberSunday(d) {
          return d.getUTCDay();
        }

        function formatUTCWeekNumberMonday(d, p) {
          return pad(
            d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(
              Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d),
              d
            ),
            p,
            2
          );
        }

        function formatUTCYear(d, p) {
          return pad(d.getUTCFullYear() % 100, p, 2);
        }

        function formatUTCFullYear(d, p) {
          return pad(d.getUTCFullYear() % 10000, p, 4);
        }

        function formatUTCZone() {
          return "+0000";
        }

        function formatLiteralPercent() {
          return "%";
        }

        function formatUnixTimestamp(d) {
          return +d;
        }

        function formatUnixTimestampSeconds(d) {
          return Math.floor(+d / 1000);
        }

        /***/
      },

    /***/ "./node_modules/d3-time/index.js":
      /*!***************************************!*\
  !*** ./node_modules/d3-time/index.js ***!
  \***************************************/
      /*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeInterval",
          function() {
            return _src_interval__WEBPACK_IMPORTED_MODULE_0__["default"];
          }
        );

        /* harmony import */ var _src_millisecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/millisecond */ "./node_modules/d3-time/src/millisecond.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMillisecond",
          function() {
            return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMilliseconds",
          function() {
            return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__[
              "milliseconds"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMillisecond",
          function() {
            return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMilliseconds",
          function() {
            return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__[
              "milliseconds"
            ];
          }
        );

        /* harmony import */ var _src_second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/second */ "./node_modules/d3-time/src/second.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeSecond",
          function() {
            return _src_second__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeSeconds",
          function() {
            return _src_second__WEBPACK_IMPORTED_MODULE_2__["seconds"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSecond",
          function() {
            return _src_second__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSeconds",
          function() {
            return _src_second__WEBPACK_IMPORTED_MODULE_2__["seconds"];
          }
        );

        /* harmony import */ var _src_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/minute */ "./node_modules/d3-time/src/minute.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMinute",
          function() {
            return _src_minute__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMinutes",
          function() {
            return _src_minute__WEBPACK_IMPORTED_MODULE_3__["minutes"];
          }
        );

        /* harmony import */ var _src_hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./src/hour */ "./node_modules/d3-time/src/hour.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeHour",
          function() {
            return _src_hour__WEBPACK_IMPORTED_MODULE_4__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeHours",
          function() {
            return _src_hour__WEBPACK_IMPORTED_MODULE_4__["hours"];
          }
        );

        /* harmony import */ var _src_day__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./src/day */ "./node_modules/d3-time/src/day.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeDay",
          function() {
            return _src_day__WEBPACK_IMPORTED_MODULE_5__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeDays",
          function() {
            return _src_day__WEBPACK_IMPORTED_MODULE_5__["days"];
          }
        );

        /* harmony import */ var _src_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./src/week */ "./node_modules/d3-time/src/week.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeWeek",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["sunday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeWeeks",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["sundays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeSunday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["sunday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeSundays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["sundays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMonday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["monday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMondays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["mondays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeTuesday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["tuesday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeTuesdays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["tuesdays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeWednesday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["wednesday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeWednesdays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["wednesdays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeThursday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["thursday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeThursdays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["thursdays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeFriday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["friday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeFridays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["fridays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeSaturday",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["saturday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeSaturdays",
          function() {
            return _src_week__WEBPACK_IMPORTED_MODULE_6__["saturdays"];
          }
        );

        /* harmony import */ var _src_month__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./src/month */ "./node_modules/d3-time/src/month.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMonth",
          function() {
            return _src_month__WEBPACK_IMPORTED_MODULE_7__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeMonths",
          function() {
            return _src_month__WEBPACK_IMPORTED_MODULE_7__["months"];
          }
        );

        /* harmony import */ var _src_year__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./src/year */ "./node_modules/d3-time/src/year.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeYear",
          function() {
            return _src_year__WEBPACK_IMPORTED_MODULE_8__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeYears",
          function() {
            return _src_year__WEBPACK_IMPORTED_MODULE_8__["years"];
          }
        );

        /* harmony import */ var _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./src/utcMinute */ "./node_modules/d3-time/src/utcMinute.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMinute",
          function() {
            return _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMinutes",
          function() {
            return _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"];
          }
        );

        /* harmony import */ var _src_utcHour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./src/utcHour */ "./node_modules/d3-time/src/utcHour.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcHour",
          function() {
            return _src_utcHour__WEBPACK_IMPORTED_MODULE_10__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcHours",
          function() {
            return _src_utcHour__WEBPACK_IMPORTED_MODULE_10__["utcHours"];
          }
        );

        /* harmony import */ var _src_utcDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./src/utcDay */ "./node_modules/d3-time/src/utcDay.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcDay",
          function() {
            return _src_utcDay__WEBPACK_IMPORTED_MODULE_11__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcDays",
          function() {
            return _src_utcDay__WEBPACK_IMPORTED_MODULE_11__["utcDays"];
          }
        );

        /* harmony import */ var _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./src/utcWeek */ "./node_modules/d3-time/src/utcWeek.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcWeek",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcWeeks",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSunday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSundays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMonday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMonday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMondays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMondays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcTuesday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcTuesdays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcWednesday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcWednesdays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcThursday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcThursdays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcFriday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFriday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcFridays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFridays"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSaturday",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSaturdays",
          function() {
            return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"];
          }
        );

        /* harmony import */ var _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./src/utcMonth */ "./node_modules/d3-time/src/utcMonth.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMonth",
          function() {
            return _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMonths",
          function() {
            return _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__["utcMonths"];
          }
        );

        /* harmony import */ var _src_utcYear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./src/utcYear */ "./node_modules/d3-time/src/utcYear.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcYear",
          function() {
            return _src_utcYear__WEBPACK_IMPORTED_MODULE_14__["default"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "utcYears",
          function() {
            return _src_utcYear__WEBPACK_IMPORTED_MODULE_14__["utcYears"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-time/src/day.js":
      /*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
      /*! exports provided: default, days */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "days",
          function() {
            return days;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var day = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setHours(0, 0, 0, 0);
          },
          function(date, step) {
            date.setDate(date.getDate() + step);
          },
          function(start, end) {
            return (
              (end -
                start -
                (end.getTimezoneOffset() - start.getTimezoneOffset()) *
                  _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"]
            );
          },
          function(date) {
            return date.getDate() - 1;
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = day;
        var days = day.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/duration.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
      /*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "durationSecond",
          function() {
            return durationSecond;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "durationMinute",
          function() {
            return durationMinute;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "durationHour",
          function() {
            return durationHour;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "durationDay",
          function() {
            return durationDay;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "durationWeek",
          function() {
            return durationWeek;
          }
        );
        var durationSecond = 1e3;
        var durationMinute = 6e4;
        var durationHour = 36e5;
        var durationDay = 864e5;
        var durationWeek = 6048e5;

        /***/
      },

    /***/ "./node_modules/d3-time/src/hour.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
      /*! exports provided: default, hours */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hours",
          function() {
            return hours;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var hour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            var offset =
              (date.getTimezoneOffset() *
                _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) %
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
            if (offset < 0)
              offset += _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
            date.setTime(
              Math.floor(
                (+date - offset) /
                  _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]
              ) *
                _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"] +
                offset
            );
          },
          function(date, step) {
            date.setTime(
              +date +
                step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]
            );
          },
          function(start, end) {
            return (
              (end - start) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]
            );
          },
          function(date) {
            return date.getHours();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = hour;
        var hours = hour.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/interval.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return newInterval;
          }
        );
        var t0 = new Date(),
          t1 = new Date();

        function newInterval(floori, offseti, count, field) {
          function interval(date) {
            return floori((date = new Date(+date))), date;
          }

          interval.floor = interval;

          interval.ceil = function(date) {
            return (
              floori((date = new Date(date - 1))),
              offseti(date, 1),
              floori(date),
              date
            );
          };

          interval.round = function(date) {
            var d0 = interval(date),
              d1 = interval.ceil(date);
            return date - d0 < d1 - date ? d0 : d1;
          };

          interval.offset = function(date, step) {
            return (
              offseti(
                (date = new Date(+date)),
                step == null ? 1 : Math.floor(step)
              ),
              date
            );
          };

          interval.range = function(start, stop, step) {
            var range = [],
              previous;
            start = interval.ceil(start);
            step = step == null ? 1 : Math.floor(step);
            if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
            do
              range.push((previous = new Date(+start))),
                offseti(start, step),
                floori(start);
            while (previous < start && start < stop);
            return range;
          };

          interval.filter = function(test) {
            return newInterval(
              function(date) {
                if (date >= date)
                  while ((floori(date), !test(date))) date.setTime(date - 1);
              },
              function(date, step) {
                if (date >= date) {
                  if (step < 0)
                    while (++step <= 0) {
                      while ((offseti(date, -1), !test(date))) {} // eslint-disable-line no-empty
                    }
                  else
                    while (--step >= 0) {
                      while ((offseti(date, +1), !test(date))) {} // eslint-disable-line no-empty
                    }
                }
              }
            );
          };

          if (count) {
            interval.count = function(start, end) {
              t0.setTime(+start), t1.setTime(+end);
              floori(t0), floori(t1);
              return Math.floor(count(t0, t1));
            };

            interval.every = function(step) {
              step = Math.floor(step);
              return !isFinite(step) || !(step > 0)
                ? null
                : !(step > 1)
                  ? interval
                  : interval.filter(
                      field
                        ? function(d) {
                            return field(d) % step === 0;
                          }
                        : function(d) {
                            return interval.count(0, d) % step === 0;
                          }
                    );
            };
          }

          return interval;
        }

        /***/
      },

    /***/ "./node_modules/d3-time/src/millisecond.js":
      /*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
      /*! exports provided: default, milliseconds */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "milliseconds",
          function() {
            return milliseconds;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );

        var millisecond = Object(
          _interval__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          function() {
            // noop
          },
          function(date, step) {
            date.setTime(+date + step);
          },
          function(start, end) {
            return end - start;
          }
        );

        // An optimized implementation for this simple case.
        millisecond.every = function(k) {
          k = Math.floor(k);
          if (!isFinite(k) || !(k > 0)) return null;
          if (!(k > 1)) return millisecond;
          return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
            function(date) {
              date.setTime(Math.floor(date / k) * k);
            },
            function(date, step) {
              date.setTime(+date + step * k);
            },
            function(start, end) {
              return (end - start) / k;
            }
          );
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = millisecond;
        var milliseconds = millisecond.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/minute.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
      /*! exports provided: default, minutes */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "minutes",
          function() {
            return minutes;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var minute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setTime(
              Math.floor(
                date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]
              ) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]
            );
          },
          function(date, step) {
            date.setTime(
              +date +
                step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]
            );
          },
          function(start, end) {
            return (
              (end - start) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]
            );
          },
          function(date) {
            return date.getMinutes();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = minute;
        var minutes = minute.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/month.js":
      /*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
      /*! exports provided: default, months */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "months",
          function() {
            return months;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );

        var month = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setDate(1);
            date.setHours(0, 0, 0, 0);
          },
          function(date, step) {
            date.setMonth(date.getMonth() + step);
          },
          function(start, end) {
            return (
              end.getMonth() -
              start.getMonth() +
              (end.getFullYear() - start.getFullYear()) * 12
            );
          },
          function(date) {
            return date.getMonth();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = month;
        var months = month.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/second.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
      /*! exports provided: default, seconds */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "seconds",
          function() {
            return seconds;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var second = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setTime(
              Math.floor(
                date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]
              ) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]
            );
          },
          function(date, step) {
            date.setTime(
              +date +
                step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]
            );
          },
          function(start, end) {
            return (
              (end - start) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]
            );
          },
          function(date) {
            return date.getUTCSeconds();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = second;
        var seconds = second.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/utcDay.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
      /*! exports provided: default, utcDays */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcDays",
          function() {
            return utcDays;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var utcDay = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setUTCHours(0, 0, 0, 0);
          },
          function(date, step) {
            date.setUTCDate(date.getUTCDate() + step);
          },
          function(start, end) {
            return (
              (end - start) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"]
            );
          },
          function(date) {
            return date.getUTCDate() - 1;
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = utcDay;
        var utcDays = utcDay.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/utcHour.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
      /*! exports provided: default, utcHours */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcHours",
          function() {
            return utcHours;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var utcHour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setUTCMinutes(0, 0, 0);
          },
          function(date, step) {
            date.setTime(
              +date +
                step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]
            );
          },
          function(start, end) {
            return (
              (end - start) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]
            );
          },
          function(date) {
            return date.getUTCHours();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = utcHour;
        var utcHours = utcHour.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/utcMinute.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
      /*! exports provided: default, utcMinutes */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMinutes",
          function() {
            return utcMinutes;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        var utcMinute = Object(
          _interval__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          function(date) {
            date.setUTCSeconds(0, 0);
          },
          function(date, step) {
            date.setTime(
              +date +
                step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]
            );
          },
          function(start, end) {
            return (
              (end - start) /
              _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]
            );
          },
          function(date) {
            return date.getUTCMinutes();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = utcMinute;
        var utcMinutes = utcMinute.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/utcMonth.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
      /*! exports provided: default, utcMonths */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMonths",
          function() {
            return utcMonths;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );

        var utcMonth = Object(
          _interval__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          function(date) {
            date.setUTCDate(1);
            date.setUTCHours(0, 0, 0, 0);
          },
          function(date, step) {
            date.setUTCMonth(date.getUTCMonth() + step);
          },
          function(start, end) {
            return (
              end.getUTCMonth() -
              start.getUTCMonth() +
              (end.getUTCFullYear() - start.getUTCFullYear()) * 12
            );
          },
          function(date) {
            return date.getUTCMonth();
          }
        );

        /* harmony default export */ __webpack_exports__["default"] = utcMonth;
        var utcMonths = utcMonth.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/utcWeek.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
      /*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSunday",
          function() {
            return utcSunday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMonday",
          function() {
            return utcMonday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcTuesday",
          function() {
            return utcTuesday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcWednesday",
          function() {
            return utcWednesday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcThursday",
          function() {
            return utcThursday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcFriday",
          function() {
            return utcFriday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSaturday",
          function() {
            return utcSaturday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSundays",
          function() {
            return utcSundays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcMondays",
          function() {
            return utcMondays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcTuesdays",
          function() {
            return utcTuesdays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcWednesdays",
          function() {
            return utcWednesdays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcThursdays",
          function() {
            return utcThursdays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcFridays",
          function() {
            return utcFridays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcSaturdays",
          function() {
            return utcSaturdays;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        function utcWeekday(i) {
          return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
            function(date) {
              date.setUTCDate(
                date.getUTCDate() - ((date.getUTCDay() + 7 - i) % 7)
              );
              date.setUTCHours(0, 0, 0, 0);
            },
            function(date, step) {
              date.setUTCDate(date.getUTCDate() + step * 7);
            },
            function(start, end) {
              return (
                (end - start) /
                _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"]
              );
            }
          );
        }

        var utcSunday = utcWeekday(0);
        var utcMonday = utcWeekday(1);
        var utcTuesday = utcWeekday(2);
        var utcWednesday = utcWeekday(3);
        var utcThursday = utcWeekday(4);
        var utcFriday = utcWeekday(5);
        var utcSaturday = utcWeekday(6);

        var utcSundays = utcSunday.range;
        var utcMondays = utcMonday.range;
        var utcTuesdays = utcTuesday.range;
        var utcWednesdays = utcWednesday.range;
        var utcThursdays = utcThursday.range;
        var utcFridays = utcFriday.range;
        var utcSaturdays = utcSaturday.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/utcYear.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
      /*! exports provided: default, utcYears */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "utcYears",
          function() {
            return utcYears;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );

        var utcYear = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setUTCMonth(0, 1);
            date.setUTCHours(0, 0, 0, 0);
          },
          function(date, step) {
            date.setUTCFullYear(date.getUTCFullYear() + step);
          },
          function(start, end) {
            return end.getUTCFullYear() - start.getUTCFullYear();
          },
          function(date) {
            return date.getUTCFullYear();
          }
        );

        // An optimized implementation for this simple case.
        utcYear.every = function(k) {
          return !isFinite((k = Math.floor(k))) || !(k > 0)
            ? null
            : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
                function(date) {
                  date.setUTCFullYear(
                    Math.floor(date.getUTCFullYear() / k) * k
                  );
                  date.setUTCMonth(0, 1);
                  date.setUTCHours(0, 0, 0, 0);
                },
                function(date, step) {
                  date.setUTCFullYear(date.getUTCFullYear() + step * k);
                }
              );
        };

        /* harmony default export */ __webpack_exports__["default"] = utcYear;
        var utcYears = utcYear.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/week.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
      /*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sunday",
          function() {
            return sunday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "monday",
          function() {
            return monday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tuesday",
          function() {
            return tuesday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "wednesday",
          function() {
            return wednesday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "thursday",
          function() {
            return thursday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "friday",
          function() {
            return friday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "saturday",
          function() {
            return saturday;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sundays",
          function() {
            return sundays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "mondays",
          function() {
            return mondays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tuesdays",
          function() {
            return tuesdays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "wednesdays",
          function() {
            return wednesdays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "thursdays",
          function() {
            return thursdays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fridays",
          function() {
            return fridays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "saturdays",
          function() {
            return saturdays;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-time/src/duration.js"
        );

        function weekday(i) {
          return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
            function(date) {
              date.setDate(date.getDate() - ((date.getDay() + 7 - i) % 7));
              date.setHours(0, 0, 0, 0);
            },
            function(date, step) {
              date.setDate(date.getDate() + step * 7);
            },
            function(start, end) {
              return (
                (end -
                  start -
                  (end.getTimezoneOffset() - start.getTimezoneOffset()) *
                    _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) /
                _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"]
              );
            }
          );
        }

        var sunday = weekday(0);
        var monday = weekday(1);
        var tuesday = weekday(2);
        var wednesday = weekday(3);
        var thursday = weekday(4);
        var friday = weekday(5);
        var saturday = weekday(6);

        var sundays = sunday.range;
        var mondays = monday.range;
        var tuesdays = tuesday.range;
        var wednesdays = wednesday.range;
        var thursdays = thursday.range;
        var fridays = friday.range;
        var saturdays = saturday.range;

        /***/
      },

    /***/ "./node_modules/d3-time/src/year.js":
      /*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
      /*! exports provided: default, years */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "years",
          function() {
            return years;
          }
        );
        /* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./interval */ "./node_modules/d3-time/src/interval.js"
        );

        var year = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
          function(date) {
            date.setMonth(0, 1);
            date.setHours(0, 0, 0, 0);
          },
          function(date, step) {
            date.setFullYear(date.getFullYear() + step);
          },
          function(start, end) {
            return end.getFullYear() - start.getFullYear();
          },
          function(date) {
            return date.getFullYear();
          }
        );

        // An optimized implementation for this simple case.
        year.every = function(k) {
          return !isFinite((k = Math.floor(k))) || !(k > 0)
            ? null
            : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(
                function(date) {
                  date.setFullYear(Math.floor(date.getFullYear() / k) * k);
                  date.setMonth(0, 1);
                  date.setHours(0, 0, 0, 0);
                },
                function(date, step) {
                  date.setFullYear(date.getFullYear() + step * k);
                }
              );
        };

        /* harmony default export */ __webpack_exports__["default"] = year;
        var years = year.range;

        /***/
      },

    /***/ "./node_modules/d3-timer/index.js":
      /*!****************************************!*\
  !*** ./node_modules/d3-timer/index.js ***!
  \****************************************/
      /*! exports provided: now, timer, timerFlush, timeout, interval */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/timer */ "./node_modules/d3-timer/src/timer.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "now",
          function() {
            return _src_timer__WEBPACK_IMPORTED_MODULE_0__["now"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timer",
          function() {
            return _src_timer__WEBPACK_IMPORTED_MODULE_0__["timer"];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timerFlush",
          function() {
            return _src_timer__WEBPACK_IMPORTED_MODULE_0__["timerFlush"];
          }
        );

        /* harmony import */ var _src_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/timeout */ "./node_modules/d3-timer/src/timeout.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "timeout",
          function() {
            return _src_timeout__WEBPACK_IMPORTED_MODULE_1__["default"];
          }
        );

        /* harmony import */ var _src_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/interval */ "./node_modules/d3-timer/src/interval.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interval",
          function() {
            return _src_interval__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-timer/src/interval.js":
      /*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./timer */ "./node_modules/d3-timer/src/timer.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          callback,
          delay,
          time
        ) {
          var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"](),
            total = delay;
          if (delay == null) return t.restart(callback, delay, time), t;
          (delay = +delay),
            (time =
              time == null
                ? Object(_timer__WEBPACK_IMPORTED_MODULE_0__["now"])()
                : +time);
          t.restart(
            function tick(elapsed) {
              elapsed += total;
              t.restart(tick, (total += delay), time);
              callback(elapsed);
            },
            delay,
            time
          );
          return t;
        };

        /***/
      },

    /***/ "./node_modules/d3-timer/src/timeout.js":
      /*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./timer */ "./node_modules/d3-timer/src/timer.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          callback,
          delay,
          time
        ) {
          var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"]();
          delay = delay == null ? 0 : +delay;
          t.restart(
            function(elapsed) {
              t.stop();
              callback(elapsed + delay);
            },
            delay,
            time
          );
          return t;
        };

        /***/
      },

    /***/ "./node_modules/d3-timer/src/timer.js":
      /*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
      /*! exports provided: now, Timer, timer, timerFlush */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "now",
          function() {
            return now;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Timer",
          function() {
            return Timer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timer",
          function() {
            return timer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timerFlush",
          function() {
            return timerFlush;
          }
        );
        var frame = 0, // is an animation frame pending?
          timeout = 0, // is a timeout pending?
          interval = 0, // are any timers active?
          pokeDelay = 1000, // how frequently we check for clock skew
          taskHead,
          taskTail,
          clockLast = 0,
          clockNow = 0,
          clockSkew = 0,
          clock =
            typeof performance === "object" && performance.now
              ? performance
              : Date,
          setFrame =
            typeof window === "object" && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function(f) {
                  setTimeout(f, 17);
                };

        function now() {
          return (
            clockNow ||
            (setFrame(clearNow), (clockNow = clock.now() + clockSkew))
          );
        }

        function clearNow() {
          clockNow = 0;
        }

        function Timer() {
          this._call = this._time = this._next = null;
        }

        Timer.prototype = timer.prototype = {
          constructor: Timer,
          restart: function(callback, delay, time) {
            if (typeof callback !== "function")
              throw new TypeError("callback is not a function");
            time =
              (time == null ? now() : +time) + (delay == null ? 0 : +delay);
            if (!this._next && taskTail !== this) {
              if (taskTail) taskTail._next = this;
              else taskHead = this;
              taskTail = this;
            }
            this._call = callback;
            this._time = time;
            sleep();
          },
          stop: function() {
            if (this._call) {
              this._call = null;
              this._time = Infinity;
              sleep();
            }
          }
        };

        function timer(callback, delay, time) {
          var t = new Timer();
          t.restart(callback, delay, time);
          return t;
        }

        function timerFlush() {
          now(); // Get the current time, if not already set.
          ++frame; // Pretend we’ve set an alarm, if we haven’t already.
          var t = taskHead,
            e;
          while (t) {
            if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
            t = t._next;
          }
          --frame;
        }

        function wake() {
          clockNow = (clockLast = clock.now()) + clockSkew;
          frame = timeout = 0;
          try {
            timerFlush();
          } finally {
            frame = 0;
            nap();
            clockNow = 0;
          }
        }

        function poke() {
          var now = clock.now(),
            delay = now - clockLast;
          if (delay > pokeDelay) (clockSkew -= delay), (clockLast = now);
        }

        function nap() {
          var t0,
            t1 = taskHead,
            t2,
            time = Infinity;
          while (t1) {
            if (t1._call) {
              if (time > t1._time) time = t1._time;
              (t0 = t1), (t1 = t1._next);
            } else {
              (t2 = t1._next), (t1._next = null);
              t1 = t0 ? (t0._next = t2) : (taskHead = t2);
            }
          }
          taskTail = t0;
          sleep(time);
        }

        function sleep(time) {
          if (frame) return; // Soonest alarm already set, or will be.
          if (timeout) timeout = clearTimeout(timeout);
          var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
          if (delay > 24) {
            if (time < Infinity)
              timeout = setTimeout(wake, time - clock.now() - clockSkew);
            if (interval) interval = clearInterval(interval);
          } else {
            if (!interval)
              (clockLast = clock.now()),
                (interval = setInterval(poke, pokeDelay));
            (frame = 1), setFrame(wake);
          }
        }

        /***/
      },

    /***/ "./node_modules/d3-transition/index.js":
      /*!*********************************************!*\
  !*** ./node_modules/d3-transition/index.js ***!
  \*********************************************/
      /*! exports provided: transition, active, interrupt */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _src_selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./src/selection/index */ "./node_modules/d3-transition/src/selection/index.js"
        );
        /* harmony import */ var _src_transition_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./src/transition/index */ "./node_modules/d3-transition/src/transition/index.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "transition",
          function() {
            return _src_transition_index__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ];
          }
        );

        /* harmony import */ var _src_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./src/active */ "./node_modules/d3-transition/src/active.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "active",
          function() {
            return _src_active__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        );

        /* harmony import */ var _src_interrupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./src/interrupt */ "./node_modules/d3-transition/src/interrupt.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "interrupt",
          function() {
            return _src_interrupt__WEBPACK_IMPORTED_MODULE_3__["default"];
          }
        );

        /***/
      },

    /***/ "./node_modules/d3-transition/src/active.js":
      /*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./transition/index */ "./node_modules/d3-transition/src/transition/index.js"
        );
        /* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        var root = [null];

        /* harmony default export */ __webpack_exports__["default"] = function(
          node,
          name
        ) {
          var schedules = node.__transition,
            schedule,
            i;

          if (schedules) {
            name = name == null ? null : name + "";
            for (i in schedules) {
              if (
                (schedule = schedules[i]).state >
                  _transition_schedule__WEBPACK_IMPORTED_MODULE_1__[
                    "SCHEDULED"
                  ] &&
                schedule.name === name
              ) {
                return new _transition_index__WEBPACK_IMPORTED_MODULE_0__[
                  "Transition"
                ]([[node]], root, name, +i);
              }
            }
          }

          return null;
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/interrupt.js":
      /*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          node,
          name
        ) {
          var schedules = node.__transition,
            schedule,
            active,
            empty = true,
            i;

          if (!schedules) return;

          name = name == null ? null : name + "";

          for (i in schedules) {
            if ((schedule = schedules[i]).name !== name) {
              empty = false;
              continue;
            }
            active =
              schedule.state >
                _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["STARTING"] &&
              schedule.state <
                _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDING"];
            schedule.state =
              _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDED"];
            schedule.timer.stop();
            if (active)
              schedule.on.call(
                "interrupt",
                node,
                node.__data__,
                schedule.index,
                schedule.group
              );
            delete schedules[i];
          }

          if (empty) delete node.__transition;
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/selection/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./interrupt */ "./node_modules/d3-transition/src/selection/interrupt.js"
        );
        /* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./transition */ "./node_modules/d3-transition/src/selection/transition.js"
        );

        d3_selection__WEBPACK_IMPORTED_MODULE_0__[
          "selection"
        ].prototype.interrupt =
          _interrupt__WEBPACK_IMPORTED_MODULE_1__["default"];
        d3_selection__WEBPACK_IMPORTED_MODULE_0__[
          "selection"
        ].prototype.transition =
          _transition__WEBPACK_IMPORTED_MODULE_2__["default"];

        /***/
      },

    /***/ "./node_modules/d3-transition/src/selection/interrupt.js":
      /*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../interrupt */ "./node_modules/d3-transition/src/interrupt.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          name
        ) {
          return this.each(function() {
            Object(
              _interrupt__WEBPACK_IMPORTED_MODULE_0__["default"]
            )(this, name);
          });
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/selection/transition.js":
      /*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../transition/index */ "./node_modules/d3-transition/src/transition/index.js"
        );
        /* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );
        /* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! d3-ease */ "./node_modules/d3-ease/index.js"
        );
        /* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! d3-timer */ "./node_modules/d3-timer/index.js"
        );

        var defaultTiming = {
          time: null, // Set on use.
          delay: 0,
          duration: 250,
          ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubicInOut"]
        };

        function inherit(node, id) {
          var timing;
          while (!(timing = node.__transition) || !(timing = timing[id])) {
            if (!(node = node.parentNode)) {
              return (
                (defaultTiming.time = Object(
                  d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"]
                )()),
                defaultTiming
              );
            }
          }
          return timing;
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name
        ) {
          var id, timing;

          if (
            name instanceof
            _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]
          ) {
            (id = name._id), (name = name._name);
          } else {
            (id = Object(
              _transition_index__WEBPACK_IMPORTED_MODULE_0__["newId"]
            )()),
              ((timing = defaultTiming).time = Object(
                d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"]
              )()),
              (name = name == null ? null : name + "");
          }

          for (
            var groups = this._groups, m = groups.length, j = 0;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j], n = group.length, node, i = 0;
              i < n;
              ++i
            ) {
              if ((node = group[i])) {
                Object(
                  _transition_schedule__WEBPACK_IMPORTED_MODULE_1__["default"]
                )(node, name, id, i, group, timing || inherit(node, id));
              }
            }
          }

          return new _transition_index__WEBPACK_IMPORTED_MODULE_0__[
            "Transition"
          ](groups, this._parents, name, id);
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/attr.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js"
        );
        /* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./interpolate */ "./node_modules/d3-transition/src/transition/interpolate.js"
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

        function attrConstant(name, interpolate, value1) {
          var value00, interpolate0;
          return function() {
            var value0 = this.getAttribute(name);
            return value0 === value1
              ? null
              : value0 === value00
                ? interpolate0
                : (interpolate0 = interpolate((value00 = value0), value1));
          };
        }

        function attrConstantNS(fullname, interpolate, value1) {
          var value00, interpolate0;
          return function() {
            var value0 = this.getAttributeNS(fullname.space, fullname.local);
            return value0 === value1
              ? null
              : value0 === value00
                ? interpolate0
                : (interpolate0 = interpolate((value00 = value0), value1));
          };
        }

        function attrFunction(name, interpolate, value) {
          var value00, value10, interpolate0;
          return function() {
            var value0,
              value1 = value(this);
            if (value1 == null) return void this.removeAttribute(name);
            value0 = this.getAttribute(name);
            return value0 === value1
              ? null
              : value0 === value00 && value1 === value10
                ? interpolate0
                : (interpolate0 = interpolate(
                    (value00 = value0),
                    (value10 = value1)
                  ));
          };
        }

        function attrFunctionNS(fullname, interpolate, value) {
          var value00, value10, interpolate0;
          return function() {
            var value0,
              value1 = value(this);
            if (value1 == null)
              return void this.removeAttributeNS(
                fullname.space,
                fullname.local
              );
            value0 = this.getAttributeNS(fullname.space, fullname.local);
            return value0 === value1
              ? null
              : value0 === value00 && value1 === value10
                ? interpolate0
                : (interpolate0 = interpolate(
                    (value00 = value0),
                    (value10 = value1)
                  ));
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value
        ) {
          var fullname = Object(
              d3_selection__WEBPACK_IMPORTED_MODULE_1__["namespace"]
            )(name),
            i =
              fullname === "transform"
                ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[
                    "interpolateTransformSvg"
                  ]
                : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
          return this.attrTween(
            name,
            typeof value === "function"
              ? (fullname.local ? attrFunctionNS : attrFunction)(
                  fullname,
                  i,
                  Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(
                    this,
                    "attr." + name,
                    value
                  )
                )
              : value == null
                ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
                : (fullname.local ? attrConstantNS : attrConstant)(
                    fullname,
                    i,
                    value + ""
                  )
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/attrTween.js":
      /*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );

        function attrTweenNS(fullname, value) {
          function tween() {
            var node = this,
              i = value.apply(node, arguments);
            return (
              i &&
              function(t) {
                node.setAttributeNS(fullname.space, fullname.local, i(t));
              }
            );
          }
          tween._value = value;
          return tween;
        }

        function attrTween(name, value) {
          function tween() {
            var node = this,
              i = value.apply(node, arguments);
            return (
              i &&
              function(t) {
                node.setAttribute(name, i(t));
              }
            );
          }
          tween._value = value;
          return tween;
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value
        ) {
          var key = "attr." + name;
          if (arguments.length < 2)
            return (key = this.tween(key)) && key._value;
          if (value == null) return this.tween(key, null);
          if (typeof value !== "function") throw new Error();
          var fullname = Object(
            d3_selection__WEBPACK_IMPORTED_MODULE_0__["namespace"]
          )(name);
          return this.tween(
            key,
            (fullname.local ? attrTweenNS : attrTween)(fullname, value)
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/delay.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        function delayFunction(id, value) {
          return function() {
            Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(
              this,
              id
            ).delay = +value.apply(this, arguments);
          };
        }

        function delayConstant(id, value) {
          return (
            (value = +value),
            function() {
              Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(
                this,
                id
              ).delay = value;
            }
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          var id = this._id;

          return arguments.length
            ? this.each(
                (typeof value === "function" ? delayFunction : delayConstant)(
                  id,
                  value
                )
              )
            : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(
                this.node(),
                id
              ).delay;
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/duration.js":
      /*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        function durationFunction(id, value) {
          return function() {
            Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(
              this,
              id
            ).duration = +value.apply(this, arguments);
          };
        }

        function durationConstant(id, value) {
          return (
            (value = +value),
            function() {
              Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(
                this,
                id
              ).duration = value;
            }
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          var id = this._id;

          return arguments.length
            ? this.each(
                (typeof value === "function"
                  ? durationFunction
                  : durationConstant)(id, value)
              )
            : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(
                this.node(),
                id
              ).duration;
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/ease.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        function easeConstant(id, value) {
          if (typeof value !== "function") throw new Error();
          return function() {
            Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(
              this,
              id
            ).ease = value;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          var id = this._id;

          return arguments.length
            ? this.each(easeConstant(id, value))
            : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(
                this.node(),
                id
              ).ease;
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/filter.js":
      /*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-transition/src/transition/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          match
        ) {
          if (typeof match !== "function")
            match = Object(
              d3_selection__WEBPACK_IMPORTED_MODULE_0__["matcher"]
            )(match);

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

          return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](
            subgroups,
            this._parents,
            this._name,
            this._id
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
      /*! exports provided: Transition, default, newId */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Transition",
          function() {
            return Transition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return transition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "newId",
          function() {
            return newId;
          }
        );
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./attr */ "./node_modules/d3-transition/src/transition/attr.js"
        );
        /* harmony import */ var _attrTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./attrTween */ "./node_modules/d3-transition/src/transition/attrTween.js"
        );
        /* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./delay */ "./node_modules/d3-transition/src/transition/delay.js"
        );
        /* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./duration */ "./node_modules/d3-transition/src/transition/duration.js"
        );
        /* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./ease */ "./node_modules/d3-transition/src/transition/ease.js"
        );
        /* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./filter */ "./node_modules/d3-transition/src/transition/filter.js"
        );
        /* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./merge */ "./node_modules/d3-transition/src/transition/merge.js"
        );
        /* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./on */ "./node_modules/d3-transition/src/transition/on.js"
        );
        /* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./remove */ "./node_modules/d3-transition/src/transition/remove.js"
        );
        /* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./select */ "./node_modules/d3-transition/src/transition/select.js"
        );
        /* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./selectAll */ "./node_modules/d3-transition/src/transition/selectAll.js"
        );
        /* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./selection */ "./node_modules/d3-transition/src/transition/selection.js"
        );
        /* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./style */ "./node_modules/d3-transition/src/transition/style.js"
        );
        /* harmony import */ var _styleTween__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./styleTween */ "./node_modules/d3-transition/src/transition/styleTween.js"
        );
        /* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./text */ "./node_modules/d3-transition/src/transition/text.js"
        );
        /* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./transition */ "./node_modules/d3-transition/src/transition/transition.js"
        );
        /* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js"
        );

        var id = 0;

        function Transition(groups, parents, name, id) {
          this._groups = groups;
          this._parents = parents;
          this._name = name;
          this._id = id;
        }

        function transition(name) {
          return Object(
            d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"]
          )().transition(name);
        }

        function newId() {
          return ++id;
        }

        var selection_prototype =
          d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype;

        Transition.prototype = transition.prototype = {
          constructor: Transition,
          select: _select__WEBPACK_IMPORTED_MODULE_10__["default"],
          selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_11__["default"],
          filter: _filter__WEBPACK_IMPORTED_MODULE_6__["default"],
          merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
          selection: _selection__WEBPACK_IMPORTED_MODULE_12__["default"],
          transition: _transition__WEBPACK_IMPORTED_MODULE_16__["default"],
          call: selection_prototype.call,
          nodes: selection_prototype.nodes,
          node: selection_prototype.node,
          size: selection_prototype.size,
          empty: selection_prototype.empty,
          each: selection_prototype.each,
          on: _on__WEBPACK_IMPORTED_MODULE_8__["default"],
          attr: _attr__WEBPACK_IMPORTED_MODULE_1__["default"],
          attrTween: _attrTween__WEBPACK_IMPORTED_MODULE_2__["default"],
          style: _style__WEBPACK_IMPORTED_MODULE_13__["default"],
          styleTween: _styleTween__WEBPACK_IMPORTED_MODULE_14__["default"],
          text: _text__WEBPACK_IMPORTED_MODULE_15__["default"],
          remove: _remove__WEBPACK_IMPORTED_MODULE_9__["default"],
          tween: _tween__WEBPACK_IMPORTED_MODULE_17__["default"],
          delay: _delay__WEBPACK_IMPORTED_MODULE_3__["default"],
          duration: _duration__WEBPACK_IMPORTED_MODULE_4__["default"],
          ease: _ease__WEBPACK_IMPORTED_MODULE_5__["default"]
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/interpolate.js":
      /*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-color */ "./node_modules/d3-color/index.js"
        );
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          a,
          b
        ) {
          var c;
          return (typeof b === "number"
            ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
            : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"]
              ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"]
              : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b))
                ? ((b = c),
                  d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"])
                : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[
                    "interpolateString"
                  ])(a, b);
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/merge.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-transition/src/transition/index.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          transition
        ) {
          if (transition._id !== this._id) throw new Error();

          for (
            var groups0 = this._groups,
              groups1 = transition._groups,
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

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](
            merges,
            this._parents,
            this._name,
            this._id
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/on.js":
      /*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        function start(name) {
          return (name + "")
            .trim()
            .split(/^|\s+/)
            .every(function(t) {
              var i = t.indexOf(".");
              if (i >= 0) t = t.slice(0, i);
              return !t || t === "start";
            });
        }

        function onFunction(id, name, listener) {
          var on0,
            on1,
            sit = start(name)
              ? _schedule__WEBPACK_IMPORTED_MODULE_0__["init"]
              : _schedule__WEBPACK_IMPORTED_MODULE_0__["set"];
          return function() {
            var schedule = sit(this, id),
              on = schedule.on;

            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

            schedule.on = on1;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          listener
        ) {
          var id = this._id;

          return arguments.length < 2
            ? Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(
                this.node(),
                id
              ).on.on(name)
            : this.each(onFunction(id, name, listener));
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/remove.js":
      /*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function removeFunction(id) {
          return function() {
            var parent = this.parentNode;
            for (var i in this.__transition) if (+i !== id) return;
            if (parent) parent.removeChild(this);
          };
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return this.on("end.remove", removeFunction(this._id));
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/schedule.js":
      /*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
      /*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CREATED",
          function() {
            return CREATED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SCHEDULED",
          function() {
            return SCHEDULED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "STARTING",
          function() {
            return STARTING;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "STARTED",
          function() {
            return STARTED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RUNNING",
          function() {
            return RUNNING;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ENDING",
          function() {
            return ENDING;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ENDED",
          function() {
            return ENDED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "init",
          function() {
            return init;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "set",
          function() {
            return set;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "get",
          function() {
            return get;
          }
        );
        /* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-dispatch */ "./node_modules/d3-dispatch/index.js"
        );
        /* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-timer */ "./node_modules/d3-timer/index.js"
        );

        var emptyOn = Object(
          d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"]
        )("start", "end", "interrupt");
        var emptyTween = [];

        var CREATED = 0;
        var SCHEDULED = 1;
        var STARTING = 2;
        var STARTED = 3;
        var RUNNING = 4;
        var ENDING = 5;
        var ENDED = 6;

        /* harmony default export */ __webpack_exports__["default"] = function(
          node,
          name,
          id,
          index,
          group,
          timing
        ) {
          var schedules = node.__transition;
          if (!schedules) node.__transition = {};
          else if (id in schedules) return;
          create(node, id, {
            name: name,
            index: index, // For context during callback.
            group: group, // For context during callback.
            on: emptyOn,
            tween: emptyTween,
            time: timing.time,
            delay: timing.delay,
            duration: timing.duration,
            ease: timing.ease,
            timer: null,
            state: CREATED
          });
        };

        function init(node, id) {
          var schedule = get(node, id);
          if (schedule.state > CREATED)
            throw new Error("too late; already scheduled");
          return schedule;
        }

        function set(node, id) {
          var schedule = get(node, id);
          if (schedule.state > STARTING)
            throw new Error("too late; already started");
          return schedule;
        }

        function get(node, id) {
          var schedule = node.__transition;
          if (!schedule || !(schedule = schedule[id]))
            throw new Error("transition not found");
          return schedule;
        }

        function create(node, id, self) {
          var schedules = node.__transition,
            tween;

          // Initialize the self timer when the transition is created.
          // Note the actual delay is not known until the first callback!
          schedules[id] = self;
          self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(
            schedule,
            0,
            self.time
          );

          function schedule(elapsed) {
            self.state = SCHEDULED;
            self.timer.restart(start, self.delay, self.time);

            // If the elapsed delay is less than our first sleep, start immediately.
            if (self.delay <= elapsed) start(elapsed - self.delay);
          }

          function start(elapsed) {
            var i, j, n, o;

            // If the state is not SCHEDULED, then we previously errored on start.
            if (self.state !== SCHEDULED) return stop();

            for (i in schedules) {
              o = schedules[i];
              if (o.name !== self.name) continue;

              // While this element already has a starting transition during this frame,
              // defer starting an interrupting transition until that transition has a
              // chance to tick (and possibly end); see d3/d3-transition#54!
              if (o.state === STARTED)
                return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(
                  start
                );

              // Interrupt the active transition, if any.
              // Dispatch the interrupt event.
              if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
              }

              // Cancel any pre-empted transitions. No interrupt event is dispatched
              // because the cancelled transitions never started. Note that this also
              // removes this transition from the pending list!
              else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                delete schedules[i];
              }
            }

            // Defer the first tick to end of the current frame; see d3/d3#1576.
            // Note the transition may be canceled after start and before the first tick!
            // Note this must be scheduled before the start event; see d3/d3-transition#16!
            // Assuming this is successful, subsequent callbacks go straight to tick.
            Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(
              function() {
                if (self.state === STARTED) {
                  self.state = RUNNING;
                  self.timer.restart(tick, self.delay, self.time);
                  tick(elapsed);
                }
              }
            );

            // Dispatch the start event.
            // Note this must be done before the tween are initialized.
            self.state = STARTING;
            self.on.call("start", node, node.__data__, self.index, self.group);
            if (self.state !== STARTING) return; // interrupted
            self.state = STARTED;

            // Initialize the tween, deleting null tween.
            tween = new Array((n = self.tween.length));
            for (i = 0, j = -1; i < n; ++i) {
              if (
                (o = self.tween[i].value.call(
                  node,
                  node.__data__,
                  self.index,
                  self.group
                ))
              ) {
                tween[++j] = o;
              }
            }
            tween.length = j + 1;
          }

          function tick(elapsed) {
            var t =
                elapsed < self.duration
                  ? self.ease.call(null, elapsed / self.duration)
                  : (self.timer.restart(stop), (self.state = ENDING), 1),
              i = -1,
              n = tween.length;

            while (++i < n) {
              tween[i].call(null, t);
            }

            // Dispatch the end event.
            if (self.state === ENDING) {
              self.on.call("end", node, node.__data__, self.index, self.group);
              stop();
            }
          }

          function stop() {
            self.state = ENDED;
            self.timer.stop();
            delete schedules[id];
            for (var i in schedules) return; // eslint-disable-line no-unused-vars
            delete node.__transition;
          }
        }

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/select.js":
      /*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-transition/src/transition/index.js"
        );
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          select
        ) {
          var name = this._name,
            id = this._id;

          if (typeof select !== "function")
            select = Object(
              d3_selection__WEBPACK_IMPORTED_MODULE_0__["selector"]
            )(select);

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
                Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  subgroup[i],
                  name,
                  id,
                  i,
                  subgroup,
                  Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(
                    node,
                    id
                  )
                );
              }
            }
          }

          return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](
            subgroups,
            this._parents,
            name,
            id
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/selectAll.js":
      /*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-transition/src/transition/index.js"
        );
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          select
        ) {
          var name = this._name,
            id = this._id;

          if (typeof select !== "function")
            select = Object(
              d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectorAll"]
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
                for (
                  var children = select.call(node, node.__data__, i, group),
                    child,
                    inherit = Object(
                      _schedule__WEBPACK_IMPORTED_MODULE_2__["get"]
                    )(node, id),
                    k = 0,
                    l = children.length;
                  k < l;
                  ++k
                ) {
                  if ((child = children[k])) {
                    Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(
                      child,
                      name,
                      id,
                      k,
                      children,
                      inherit
                    );
                  }
                }
                subgroups.push(children);
                parents.push(node);
              }
            }
          }

          return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](
            subgroups,
            parents,
            name,
            id
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/selection.js":
      /*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );

        var Selection =
          d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype
            .constructor;

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return new Selection(this._groups, this._parents);
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/style.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );
        /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        /* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js"
        );
        /* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./interpolate */ "./node_modules/d3-transition/src/transition/interpolate.js"
        );

        function styleRemove(name, interpolate) {
          var value00, value10, interpolate0;
          return function() {
            var value0 = Object(
                d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"]
              )(this, name),
              value1 = (this.style.removeProperty(name),
              Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(
                this,
                name
              ));
            return value0 === value1
              ? null
              : value0 === value00 && value1 === value10
                ? interpolate0
                : (interpolate0 = interpolate(
                    (value00 = value0),
                    (value10 = value1)
                  ));
          };
        }

        function styleRemoveEnd(name) {
          return function() {
            this.style.removeProperty(name);
          };
        }

        function styleConstant(name, interpolate, value1) {
          var value00, interpolate0;
          return function() {
            var value0 = Object(
              d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"]
            )(this, name);
            return value0 === value1
              ? null
              : value0 === value00
                ? interpolate0
                : (interpolate0 = interpolate((value00 = value0), value1));
          };
        }

        function styleFunction(name, interpolate, value) {
          var value00, value10, interpolate0;
          return function() {
            var value0 = Object(
                d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"]
              )(this, name),
              value1 = value(this);
            if (value1 == null)
              value1 = (this.style.removeProperty(name),
              Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(
                this,
                name
              ));
            return value0 === value1
              ? null
              : value0 === value00 && value1 === value10
                ? interpolate0
                : (interpolate0 = interpolate(
                    (value00 = value0),
                    (value10 = value1)
                  ));
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value,
          priority
        ) {
          var i =
            (name += "") === "transform"
              ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[
                  "interpolateTransformCss"
                ]
              : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
          return value == null
            ? this.styleTween(name, styleRemove(name, i)).on(
                "end.style." + name,
                styleRemoveEnd(name)
              )
            : this.styleTween(
                name,
                typeof value === "function"
                  ? styleFunction(
                      name,
                      i,
                      Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(
                        this,
                        "style." + name,
                        value
                      )
                    )
                  : styleConstant(name, i, value + ""),
                priority
              );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/styleTween.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function styleTween(name, value, priority) {
          function tween() {
            var node = this,
              i = value.apply(node, arguments);
            return (
              i &&
              function(t) {
                node.style.setProperty(name, i(t), priority);
              }
            );
          }
          tween._value = value;
          return tween;
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value,
          priority
        ) {
          var key = "style." + (name += "");
          if (arguments.length < 2)
            return (key = this.tween(key)) && key._value;
          if (value == null) return this.tween(key, null);
          if (typeof value !== "function") throw new Error();
          return this.tween(
            key,
            styleTween(name, value, priority == null ? "" : priority)
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/text.js":
      /*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js"
        );

        function textConstant(value) {
          return function() {
            this.textContent = value;
          };
        }

        function textFunction(value) {
          return function() {
            var value1 = value(this);
            this.textContent = value1 == null ? "" : value1;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          value
        ) {
          return this.tween(
            "text",
            typeof value === "function"
              ? textFunction(
                  Object(_tween__WEBPACK_IMPORTED_MODULE_0__["tweenValue"])(
                    this,
                    "text",
                    value
                  )
                )
              : textConstant(value == null ? "" : value + "")
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/transition.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index */ "./node_modules/d3-transition/src/transition/index.js"
        );
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          var name = this._name,
            id0 = this._id,
            id1 = Object(_index__WEBPACK_IMPORTED_MODULE_0__["newId"])();

          for (
            var groups = this._groups, m = groups.length, j = 0;
            j < m;
            ++j
          ) {
            for (
              var group = groups[j], n = group.length, node, i = 0;
              i < n;
              ++i
            ) {
              if ((node = group[i])) {
                var inherit = Object(
                  _schedule__WEBPACK_IMPORTED_MODULE_1__["get"]
                )(node, id0);
                Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  node,
                  name,
                  id1,
                  i,
                  group,
                  {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                  }
                );
              }
            }
          }

          return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](
            groups,
            this._parents,
            name,
            id1
          );
        };

        /***/
      },

    /***/ "./node_modules/d3-transition/src/transition/tween.js":
      /*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
      /*! exports provided: default, tweenValue */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tweenValue",
          function() {
            return tweenValue;
          }
        );
        /* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js"
        );

        function tweenRemove(id, name) {
          var tween0, tween1;
          return function() {
            var schedule = Object(
                _schedule__WEBPACK_IMPORTED_MODULE_0__["set"]
              )(this, id),
              tween = schedule.tween;

            // If this node shared tween with the previous node,
            // just assign the updated shared tween and we’re done!
            // Otherwise, copy-on-write.
            if (tween !== tween0) {
              tween1 = tween0 = tween;
              for (var i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                  tween1 = tween1.slice();
                  tween1.splice(i, 1);
                  break;
                }
              }
            }

            schedule.tween = tween1;
          };
        }

        function tweenFunction(id, name, value) {
          var tween0, tween1;
          if (typeof value !== "function") throw new Error();
          return function() {
            var schedule = Object(
                _schedule__WEBPACK_IMPORTED_MODULE_0__["set"]
              )(this, id),
              tween = schedule.tween;

            // If this node shared tween with the previous node,
            // just assign the updated shared tween and we’re done!
            // Otherwise, copy-on-write.
            if (tween !== tween0) {
              tween1 = (tween0 = tween).slice();
              for (
                var t = {name: name, value: value}, i = 0, n = tween1.length;
                i < n;
                ++i
              ) {
                if (tween1[i].name === name) {
                  tween1[i] = t;
                  break;
                }
              }
              if (i === n) tween1.push(t);
            }

            schedule.tween = tween1;
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = function(
          name,
          value
        ) {
          var id = this._id;

          name += "";

          if (arguments.length < 2) {
            var tween = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(
              this.node(),
              id
            ).tween;
            for (var i = 0, n = tween.length, t; i < n; ++i) {
              if ((t = tween[i]).name === name) {
                return t.value;
              }
            }
            return null;
          }

          return this.each(
            (value == null ? tweenRemove : tweenFunction)(id, name, value)
          );
        };

        function tweenValue(transition, name, value) {
          var id = transition._id;

          transition.each(function() {
            var schedule = Object(
              _schedule__WEBPACK_IMPORTED_MODULE_0__["set"]
            )(this, id);
            (schedule.value || (schedule.value = {}))[name] = value.apply(
              this,
              arguments
            );
          });

          return function(node) {
            return Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(
              node,
              id
            ).value[name];
          };
        }

        /***/
      },

    /***/ "./src/DiskSpaceAnimator.ts":
      /*!**********************************!*\
  !*** ./src/DiskSpaceAnimator.ts ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_array_1 = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        var d3_collection_1 = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        var d3_interpolate_1 = __webpack_require__(
          /*! d3-interpolate */ "./node_modules/d3-interpolate/index.js"
        );
        var d3_scale_1 = __webpack_require__(
          /*! d3-scale */ "./node_modules/d3-scale/index.js"
        );
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var d3_shape_1 = __webpack_require__(
          /*! d3-shape */ "./node_modules/d3-shape/index.js"
        );
        __webpack_require__(
          /*! d3-transition */ "./node_modules/d3-transition/index.js"
        );
        var diskModels_1 = __webpack_require__(
          /*! ./diskModels */ "./src/diskModels.ts"
        );
        var OldPieChart = /** @class */ (function() {
          function OldPieChart() {
            this.colorScale = d3_scale_1.scaleOrdinal(
              d3_scale_1.schemeCategory20
            );
            this.transitionDuration = 500;
          }
          /**
           * Set the duration in ms for all the animations done by a DiskSpace animator.
           * @param {number} n - duration in ms
           */
          OldPieChart.prototype.setTransitionDuration = function(n) {
            this.transitionDuration = n;
          };
          /**
           * Called during the initialization phase which is at the beginning of a new simulation run.
           * @param {Disk} disk
           */
          OldPieChart.prototype.initDiskSpaceVisually = function(disk) {
            var margin = {top: 10, right: 10, bottom: 10, left: 10};
            var svgWidth = 900 + margin.left + margin.right;
            var svgHeight = 500 + margin.top + margin.bottom;
            var radius = Math.min(svgWidth, svgHeight) / 2;
            this.mainArc = d3_shape_1
              .arc()
              .outerRadius(radius * 0.8)
              .innerRadius(0);
            this.label = d3_shape_1
              .arc()
              .outerRadius(radius * 0.9)
              .innerRadius(radius * 0.9);
            this.svg = d3_selection_1
              .select("#diskSpaceSvg")
              .attr("width", svgWidth)
              .attr("height", svgHeight)
              .append("g")
              .attr(
                "transform",
                "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")"
              );
            this.pie = d3_shape_1
              .pie()
              .sort(null)
              .value(
                function(d) {
                  return d.size;
                } /*d.index ?*/
              );
            this.changeColor(disk);
          };
          /**
           * This method gets called when a process is supposed to be allocated on disk.
           * type represents before and after the allocation.
           * Do note that the allocation might fail and a "pre" event might never get a "post" event
           * @param {Process} process - the process to be allocated
           * @param {Disk} disk - context for the allocation
           * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
           * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
           */
          OldPieChart.prototype.animateDiskSpaceAllocation = function(
            process,
            disk,
            color,
            type
          ) {
            if (type === "pre") {
              return;
            }
            this.colorScale = color;
            this.changeColor(disk);
          };
          /**
           * This method gets called when a process is supposed to be deallocated.
           * @param {Process} process - the process to be deallocated
           * @param {Disk} disk - context for the deallocation
           * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
           */
          OldPieChart.prototype.animateDiskSpaceDeallocation = function(
            process,
            disk,
            type
          ) {
            if (type === "pre") {
              return;
            }
            var pieData = disk.toPieDataOld();
            if (pieData.length === 1 && pieData[0].owner === "") {
              // do not animate de-allocation of a single element
              // it causes flickering as allocation gets called immediately afterwards
              return;
            }
            this.changeColor(disk);
          };
          OldPieChart.prototype.resetDiskSpaceAnimation = function(disk) {
            d3_selection_1
              .select("#diskSpaceSvg")
              .selectAll("*")
              .remove();
          };
          OldPieChart.prototype.changeColor = function(disk, duration) {
            if (duration === void 0) {
              duration = this.transitionDuration;
            }
            this.change(disk.toPieDataOld(), duration);
          };
          OldPieChart.prototype.change = function(data, duration) {
            var _this_1 = this;
            if (duration === void 0) {
              duration = this.transitionDuration;
            }
            var path = this.svg
              .datum(data)
              .selectAll("path.slice")
              .data(this.pie);
            path.selectAll("text").remove();
            path
              .enter()
              .append("path")
              .attr("class", "slice")
              .attr("d", this.mainArc)
              .attr("stroke", "#ffffff")
              .attr("fill", "#555555") // default path color
              .each(function(d) {
                this._current = d;
              });
            // redo color for all path elements
            path.attr("fill", function(d) {
              var dataEl = d.data;
              if (dataEl.owner === "") {
                return "#555555";
              }
              return _this_1.colorScale(dataEl.owner);
            });
            path
              .transition()
              .duration(duration)
              .attrTween("d", this.createArcTween(this));
            path.exit().remove();
            // TODO: following does not work currently
            path
              .append("text")
              .attr("transform", function(d) {
                return "translate(" + _this_1.label.centroid(d) + ")";
              })
              .attr("text-anchor", "middle")
              .attr("fill", "#ffffff")
              .text(function(d) {
                return d.data.owner;
              });
          };
          // from http://jsbin.com/hegob/1/edit?js,console,output
          // Store the displayed angles in _current.
          // Then, interpolate from _current to the new angles.
          // During the transition, _current is updated in-place by d3.interpolate.
          OldPieChart.prototype.createArcTween = function(self) {
            return function(a) {
              var i = d3_interpolate_1.interpolate(this._current, a);
              this._current = i(0);
              return function(t) {
                return self.mainArc(i(t));
              };
            };
          };
          return OldPieChart;
        })();
        exports.OldPieChart = OldPieChart;
        var DiskUsagePieChart = /** @class */ (function() {
          function DiskUsagePieChart() {
            this.colorScale = d3_scale_1.scaleOrdinal(
              d3_scale_1.schemeCategory20
            );
            this.transitionDuration = 500;
            this.radius = 250;
          }
          /**
           * Set the duration in ms for all the animations done by a DiskSpace animator.
           * @param {number} n - duration in ms
           */
          DiskUsagePieChart.prototype.setTransitionDuration = function(n) {
            this.transitionDuration = n;
          };
          /**
           * Called during the initialization phase which is at the beginning of a new simulation run.
           * @param {Disk} disk
           */
          DiskUsagePieChart.prototype.initDiskSpaceVisually = function(disk) {
            var margin = {top: 10, right: 10, bottom: 10, left: 10};
            var svgWidth = 900 + margin.left + margin.right;
            var svgHeight = 500 + margin.top + margin.bottom;
            this.radius = Math.min(svgWidth, svgHeight) / 2;
            this.mainArc = d3_shape_1
              .arc()
              .outerRadius(this.radius * 0.8)
              .innerRadius(this.radius * 0.5);
            this.label = d3_shape_1
              .arc()
              .outerRadius(this.radius * 0.9)
              .innerRadius(this.radius * 0.9);
            this.svg = d3_selection_1
              .select("#diskSpaceSvg")
              .attr("width", svgWidth)
              .attr("height", svgHeight)
              .append("g")
              .attr(
                "transform",
                "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")"
              );
            this.svg.append("g").attr("class", "slices");
            this.svg.append("g").attr("class", "labels");
            this.svg.append("g").attr("class", "lines");
            this.pie = d3_shape_1
              .pie()
              .sort(null)
              .value(
                function(d) {
                  return d.size;
                } /*d.index ?*/
              );
            this.changeColor(disk);
          };
          /**
           * This method gets called when a process is supposed to be allocated on disk.
           * type represents before and after the allocation.
           * Do note that the allocation might fail and a "pre" event might never get a "post" event
           * @param {Process} process - the process to be allocated
           * @param {Disk} disk - context for the allocation
           * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
           * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
           */
          DiskUsagePieChart.prototype.animateDiskSpaceAllocation = function(
            process,
            disk,
            color,
            type
          ) {
            if (type === "pre") {
              return;
            }
            this.colorScale = color;
            this.changeColor(disk);
          };
          /**
           * This method gets called when a process is supposed to be deallocated.
           * @param {Process} process - the process to be deallocated
           * @param {Disk} disk - context for the deallocation
           * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
           */
          DiskUsagePieChart.prototype.animateDiskSpaceDeallocation = function(
            process,
            disk,
            type
          ) {
            if (type === "pre") {
              return;
            }
            var pieData = disk.toPieData();
            if (pieData.length === 1 && pieData[0].owner === "") {
              // do not animate de-allocation of a single element
              // it causes flickering as allocation gets called immediately afterwards
              return;
            }
            this.changeColor(disk);
          };
          /**
           * Called at the end of a simulation run for cleanup purposes.
           * @param {Disk} disk
           */
          DiskUsagePieChart.prototype.resetDiskSpaceAnimation = function(disk) {
            d3_selection_1
              .select("#diskSpaceSvg")
              .selectAll("*")
              .remove();
          };
          DiskUsagePieChart.prototype.changeColor = function(disk) {
            var pieData = disk.toPieData().sort(function(a, b) {
              return d3_array_1.ascending(a.owner, b.owner);
            });
            this.change(pieData);
          };
          DiskUsagePieChart.prototype.change = function(data) {
            var _this_1 = this;
            var data0 = this.svg
              .select(".slices")
              .selectAll("path.slice")
              .data()
              .map(function(d) {
                return d.data;
              });
            if (data0.length === 0) {
              data0 = data;
            }
            var was = mergeWithFirstEqualZero(data, data0);
            var is = mergeWithFirstEqualZero(data0, data);
            /* ------- SLICE ARCS -------*/
            var slice = this.svg
              .select(".slices")
              .selectAll("path.slice")
              .data(this.pie(was), keyOwner);
            slice
              .enter()
              .insert("path")
              .attr("class", "slice")
              .style("fill", function(d) {
                if (d.data.owner === "") {
                  return "#555555";
                }
                return _this_1.colorScale(d.data.owner);
              })
              .each(function(d) {
                this._current = d;
              });
            slice = this.svg
              .select(".slices")
              .selectAll("path.slice")
              .data(this.pie(is), keyOwner);
            slice
              .transition()
              .duration(this.transitionDuration)
              .attrTween("d", this.sliceTween(this));
            slice = this.svg
              .select(".slices")
              .selectAll("path.slice")
              .data(this.pie(data), keyOwner);
            slice
              .exit()
              .transition()
              .delay(this.transitionDuration)
              .duration(0)
              .remove();
            /* ------- TEXT LABELS -------*/
            var text = this.svg
              .select(".labels")
              .selectAll("text")
              .data(this.pie(was), keyOwner);
            text
              .enter()
              .append("text")
              .attr("dy", ".35em")
              .style("opacity", 0)
              .text(function(d) {
                return d.data.owner === "" ? "(empty)" : d.data.owner;
              })
              .each(function(d) {
                this._current = d;
              });
            text = this.svg
              .select(".labels")
              .selectAll("text")
              .data(this.pie(is), keyOwner);
            text
              .transition()
              .duration(this.transitionDuration)
              .style("opacity", function(d) {
                return d.data.size === 0 ? 0 : 1;
              })
              .attrTween("transform", this.textTween(this))
              .styleTween("text-anchor", function(d) {
                var i = d3_interpolate_1.interpolate(this._current, d);
                return function(t) {
                  var d2 = i(t);
                  return midAngle(d2) < Math.PI ? "start" : "end";
                };
              });
            text = this.svg
              .select(".labels")
              .selectAll("text")
              .data(this.pie(data), keyOwner);
            text
              .exit()
              .transition()
              .delay(this.transitionDuration)
              .remove();
            /* ------- SLICE TO TEXT POLYLINES -------*/
            var polyline = this.svg
              .select(".lines")
              .selectAll("polyline")
              .data(this.pie(was), keyOwner);
            polyline
              .enter()
              .append("polyline")
              .style("opacity", 0)
              .each(function(d) {
                this._current = d;
              });
            polyline = this.svg
              .select(".lines")
              .selectAll("polyline")
              .data(this.pie(is), keyOwner);
            polyline
              .transition()
              .duration(this.transitionDuration)
              .style("opacity", function(d) {
                return d.data.value === 0 ? 0 : 0.5;
              })
              .attrTween("points", this.polylineTween(this));
            polyline = this.svg
              .select(".lines")
              .selectAll("polyline")
              .data(this.pie(data), keyOwner);
            polyline
              .exit()
              .transition()
              .duration(this.transitionDuration)
              .style("opacity", 0)
              .transition()
              .duration(0)
              .remove();
          };
          DiskUsagePieChart.prototype.sliceTween = function(self) {
            return function(d) {
              var i = d3_interpolate_1.interpolate(this._current, d);
              var _this = this;
              return function(t) {
                _this._current = i(t);
                return self.mainArc(_this._current);
              };
            };
          };
          DiskUsagePieChart.prototype.textTween = function(self) {
            return function(d) {
              var i = d3_interpolate_1.interpolate(this._current, d);
              var _this = this;
              return function(t) {
                var d2 = i(t);
                _this._current = d2;
                var pos = self.label.centroid(d2);
                pos[0] = self.radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
              };
            };
          };
          DiskUsagePieChart.prototype.polylineTween = function(self) {
            return function(d) {
              var i = d3_interpolate_1.interpolate(this._current, d);
              var _this = this;
              return function(t) {
                var d2 = i(t);
                _this._current = d2;
                var pos = self.label.centroid(d2);
                pos[0] = self.radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return (
                  [self.mainArc.centroid(d2), self.label.centroid(d2), pos] + ""
                );
              };
            };
          };
          return DiskUsagePieChart;
        })();
        exports.DiskUsagePieChart = DiskUsagePieChart;
        var FixedSegmentDonutChart = /** @class */ (function() {
          function FixedSegmentDonutChart() {
            this.colorScale = d3_scale_1.scaleOrdinal(
              d3_scale_1.schemeCategory20
            );
            this.transitionDuration = 500;
            this.radius = 250;
            this.colorEmpty = "#555555";
            this.currentData = [];
          }
          /**
           * Set the duration in ms for all the animations done by a DiskSpace animator.
           * @param {number} n - duration in ms
           */
          FixedSegmentDonutChart.prototype.setTransitionDuration = function(n) {
            this.transitionDuration = n;
          };
          /**
           * Called during the initialization phase which is at the beginning of a new simulation run.
           * @param {Disk} disk
           */
          FixedSegmentDonutChart.prototype.initDiskSpaceVisually = function(
            disk
          ) {
            var margin = {top: 10, bottom: 10, left: 10, right: 10};
            var svgWidth = 900 + margin.left + margin.right;
            var svgHeight = 500 + margin.top + margin.bottom;
            this.radius = Math.min(svgWidth, svgHeight) / 2;
            this.mainArc = d3_shape_1
              .arc()
              .outerRadius(this.radius * 0.8)
              .innerRadius(this.radius * 0.5);
            this.label = d3_shape_1
              .arc()
              .outerRadius(this.radius * 0.9)
              .innerRadius(this.radius * 0.9);
            this.svg = d3_selection_1
              .select("#diskSpaceSvg")
              .attr("width", svgWidth)
              .attr("height", svgHeight)
              .append("g")
              .attr(
                "transform",
                "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")"
              );
            this.svg.append("g").attr("class", "slices");
            this.pie = d3_shape_1
              .pie()
              .sort(null)
              .value(function(d) {
                return d.size;
              });
            // setup tooltip
            var tooltip = d3_selection_1
              .select("#diskSpaceSvgContainer")
              .append("div")
              .attr("id", "diskSpaceSvgTooltip")
              .classed("tooltip", true)
              .style("display", "none");
            tooltip
              .append("div")
              .classed("headline", true)
              .append("p")
              .append("strong")
              .classed("headline-value", true)
              .text("Block info");
            tooltip
              .append("div")
              .classed("process-name", true)
              .append("p")
              .html('Process: <span class="process-name-value"></span>');
            tooltip
              .append("div")
              .classed("size-used", true)
              .append("p")
              .html('Blocks used: <span class="size-used-value"></span>');
            tooltip
              .append("div")
              .classed("disk-type", true)
              .append("p")
              .html(
                'Type of Data stored: <span class="disk-type-value"></span>'
              );
            this.updateChart(disk, true);
          };
          /**
           * This method gets called when a process is supposed to be allocated on disk.
           * type represents before and after the allocation.
           * Do note that the allocation might fail and a "pre" event might never get a "post" event
           * @param {Process} process - the process to be allocated
           * @param {Disk} disk - context for the allocation
           * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
           * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
           */
          FixedSegmentDonutChart.prototype.animateDiskSpaceAllocation = function(
            process,
            disk,
            color,
            type
          ) {
            if (type === "pre") {
              return;
            }
            this.colorScale = color;
            this.updateChart(disk);
          };
          /**
           * This method gets called when a process is supposed to be deallocated.
           * @param {Process} process - the process to be deallocated
           * @param {Disk} disk - context for the deallocation
           * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
           */
          FixedSegmentDonutChart.prototype.animateDiskSpaceDeallocation = function(
            process,
            disk,
            type
          ) {
            if (type === "pre") {
              return;
            }
            this.updateChart(disk);
          };
          /**
           * Called at the end of a simulation run for cleanup purposes.
           * @param {Disk} disk
           */
          FixedSegmentDonutChart.prototype.resetDiskSpaceAnimation = function(
            disk
          ) {
            d3_selection_1
              .select("#diskSpaceSvg")
              .selectAll("*")
              .remove();
            d3_selection_1.select("#diskSpaceSvgTooltip").remove();
          };
          FixedSegmentDonutChart.prototype.calculatePieData = function(disk) {
            var ownerOrEmpty = function(p) {
              return p ? p.getName() : "";
            };
            var pieData = [];
            disk.blocks.forEach(function(value, index) {
              var owner = ownerOrEmpty(value.owner);
              pieData.push({
                owner: owner,
                index: index,
                size: 1,
                state: value.state
              });
            });
            return pieData;
          };
          FixedSegmentDonutChart.prototype.updateChart = function(
            disk,
            addMouseListener
          ) {
            var _this_1 = this;
            if (addMouseListener === void 0) {
              addMouseListener = false;
            }
            this.currentData = this.calculatePieData(disk);
            var slice = this.svg
              .select(".slices")
              .selectAll("path.slice")
              .data(this.pie(this.currentData), function(d) {
                return d.data.index + "";
              });
            slice = slice
              .enter()
              .insert("path")
              .attr("class", "slice")
              .attr("d", this.mainArc)
              .merge(slice);
            slice.style("fill", function(datum) {
              if (datum.data.owner === "") {
                return _this_1.colorEmpty;
              }
              return _this_1.colorScale(datum.data.owner);
            });
            slice.exit().remove();
            if (!addMouseListener) {
              return;
            }
            var tooltip = d3_selection_1.select("#diskSpaceSvgTooltip");
            slice.on("mouseenter", function() {
              tooltip.style("display", "block").style("opacity", 1);
              tooltip.transition(); // this removes the scheduled transition in mouseleave
            });
            slice.on("mouseover", this.tooltipMouseOver(this));
            slice.on("mousemove", function() {
              tooltip
                .style("top", d3_selection_1.event.layerY + 10 + "px")
                .style("left", d3_selection_1.event.layerX + 10 + "px");
            });
            slice.on("mouseleave", function() {
              tooltip
                .transition()
                .delay(3000)
                .style("display", "none");
            });
          };
          FixedSegmentDonutChart.prototype.tooltipMouseOver = function(self) {
            return function(d) {
              var processName = nonEmpty(d.data.owner);
              var blocksUsed = self.currentData
                .filter(function(v) {
                  return v.owner === d.data.owner;
                })
                .filter(function(v) {
                  return v.state === d.data.state;
                })
                .reduce(function(prev, curr) {
                  return prev + curr.size;
                }, 0);
              var readableState = blockStateToString(d.data.state);
              var tooltip = d3_selection_1.select("#diskSpaceSvgTooltip");
              tooltip.select(".process-name-value").text(processName);
              tooltip.select(".size-used-value").text(blocksUsed);
              tooltip.select(".disk-type-value").text(readableState);
            };
          };
          return FixedSegmentDonutChart;
        })();
        exports.FixedSegmentDonutChart = FixedSegmentDonutChart;
        var keyOwner = function(d) {
          return d.data.owner;
        };
        function mergeWithFirstEqualZero(first, second) {
          var secondSet = d3_collection_1.set();
          second.forEach(function(d) {
            return secondSet.add(d.owner);
          });
          var onlyFirst = first
            .filter(function(d) {
              return !secondSet.has(d.owner);
            })
            .map(function(_a) {
              var owner = _a.owner;
              return {owner: owner, size: 0};
            });
          var result = d3_array_1.merge([second, onlyFirst]);
          return result.sort(function(a, b) {
            return d3_array_1.ascending(a.owner, b.owner);
          });
        }
        function midAngle(d) {
          return d.startAngle + (d.endAngle - d.startAngle) / 2;
        }
        function nonEmpty(value, emptyAlternative) {
          if (emptyAlternative === void 0) {
            emptyAlternative = "(empty)";
          }
          return value === "" ? emptyAlternative : value;
        }
        function blockStateToString(state) {
          switch (state) {
            case diskModels_1.BlockState.EMPTY:
              return "EMPTY";
            case diskModels_1.BlockState.DISK:
              return "DISK";
            case diskModels_1.BlockState.SWAP:
              return "SWAP";
            default:
              return "???";
          }
        }

        /***/
      },

    /***/ "./src/MemoryAnimator.ts":
      /*!*******************************!*\
  !*** ./src/MemoryAnimator.ts ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_scale_1 = __webpack_require__(
          /*! d3-scale */ "./node_modules/d3-scale/index.js"
        );
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        function createFilterByName(process) {
          return function(mb) {
            return (
              mb.getProcess() != null &&
              mb.getProcess().getName() === process.getName()
            );
          };
        }
        exports.createFilterByName = createFilterByName;
        var blockWidth = 10;
        var blockHeight = 20;
        var blockOffsetX = 15; // remember: real offset = blockOffsetX - Blockwidth!
        var blockOffsetY = 25; // -"-
        var DefaultMemoryAnimator = /** @class */ (function() {
          function DefaultMemoryAnimator() {}
          DefaultMemoryAnimator.prototype.initMemoryVisually = function(
            memory
          ) {
            // calculate boundaries for svg "container"
            var margin = {top: 10, right: 10, bottom: 10, left: 10};
            var rect = document
              .getElementById("memSvg")
              .getBoundingClientRect();
            var width = rect.width - margin.left - margin.right;
            var blocksPerRow = Math.floor(
              width / (blockWidth + (blockOffsetX - blockWidth))
            );
            var rows = Math.ceil(memory.getSize() / blocksPerRow);
            var svgHeight = rows * blockOffsetY + margin.top + margin.bottom;
            // fill svg with
            var listItems = d3_selection_1
              .select("#memSvg")
              .attr("width", rect.width)
              .attr("height", svgHeight + "px") // set svg boundaries
              .selectAll("rect")
              .data(memory.getMemoryList(), function(mb) {
                return mb.getId() + "";
              });
            listItems
              .enter()
              .append("rect")
              .attr("class", "memory-block")
              .attr("id", function(mb) {
                return "memory-block-id-" + mb.getId();
              })
              .attr("width", blockWidth)
              .attr("height", blockHeight)
              .attr("ry", 1)
              .attr("rx", 1)
              .attr("x", function(d) {
                return (d.getId() % blocksPerRow) * blockOffsetX;
              })
              .attr("y", function(d) {
                return Math.floor(d.getId() / blocksPerRow) * blockOffsetY;
              })
              .style("fill", "#ffffff");
          };
          DefaultMemoryAnimator.prototype.animateMemoryAllocation = function(
            process,
            memory,
            color,
            type
          ) {
            if (type === "pre") {
              return;
            }
            var filterFunc = createFilterByName(process);
            this.changeColor(memory, filterFunc, color(process.getName()));
          };
          DefaultMemoryAnimator.prototype.animateMemoryDeallocation = function(
            process,
            memory,
            type
          ) {
            if (type === "post") {
              return;
            }
            // we need the old memory to remove the process properly
            var filterFunc = createFilterByName(process);
            this.changeColor(memory, filterFunc);
          };
          DefaultMemoryAnimator.prototype.resetMemoryAnimation = function(
            memory
          ) {
            this.changeColor(memory);
          };
          DefaultMemoryAnimator.prototype.changeColor = function(
            memory,
            pred,
            color
          ) {
            if (pred === void 0) {
              pred = function() {
                return true;
              };
            }
            if (color === void 0) {
              color = "#ffffff";
            }
            memory
              .getMemoryList()
              .filter(pred)
              .forEach(function(mb) {
                d3_selection_1
                  .select("#memSvg")
                  .select("rect[id='memory-block-id-" + mb.getId() + "']")
                  .style("fill", color);
              });
          };
          return DefaultMemoryAnimator;
        })();
        exports.DefaultMemoryAnimator = DefaultMemoryAnimator;
        var BuddySystemAnimator = /** @class */ (function() {
          function BuddySystemAnimator() {
            this.scaleWidth = d3_scale_1
              .scaleLinear()
              .domain([0, 0])
              .rangeRound([0, 0]);
            this.colorScaler = d3_scale_1.scaleOrdinal();
            this.rowHeight = 25;
            // different from the defined padding to properly render the borders
            this.margin = {top: 15, right: 15, bottom: 15, left: 10};
          }
          BuddySystemAnimator.prototype.initMemoryVisually = function(memory) {
            var rect = document
              .getElementById("memSvg")
              .getBoundingClientRect();
            var width = rect.width - this.margin.left - this.margin.right;
            var svgHeight =
              this.rowHeight + this.margin.top + this.margin.bottom;
            d3_selection_1
              .select("#memSvg")
              .attr("width", rect.width)
              .attr("height", svgHeight);
            var sum = memory
              .getMemoryList()
              .map(function(v) {
                return v.size;
              })
              .reduce(function(prev, curr) {
                return prev + curr;
              });
            this.scaleWidth = d3_scale_1
              .scaleLinear()
              .domain([0, sum])
              .rangeRound([0, width]);
            this.change(memory);
          };
          BuddySystemAnimator.prototype.animateMemoryAllocation = function(
            process,
            memory,
            color,
            type
          ) {
            if (type === "pre") {
              return;
            }
            this.colorScaler = color;
            this.change(memory);
          };
          BuddySystemAnimator.prototype.animateMemoryDeallocation = function(
            process,
            memory,
            type
          ) {
            if (type === "pre") {
              d3_selection_1
                .select("#memSvg")
                .selectAll("rect[data-proc-name=" + this.getName(process) + "]")
                .attr("fill", "#ffffff");
            } else {
              this.change(memory);
            }
          };
          BuddySystemAnimator.prototype.resetMemoryAnimation = function(
            memory
          ) {
            d3_selection_1
              .select("#memSvg")
              .selectAll("*")
              .remove();
          };
          BuddySystemAnimator.prototype.change = function(memory) {
            var _this = this;
            var listItems = d3_selection_1
              .select("#memSvg")
              .selectAll("rect")
              .data(memory.getMemoryList(), function(mb) {
                return mb.getId() + "-" + mb.size;
              });
            listItems
              .enter()
              .append("rect")
              .attr("class", "memory-block-buddy")
              .attr("width", function(d) {
                return _this.scaleWidth(d.size);
              })
              .attr("height", this.rowHeight)
              .attr("x", function(d) {
                return _this.scaleWidth(d.getId());
              })
              .attr("y", 0)
              .merge(listItems)
              .attr("fill", function(d) {
                return _this.getColor(d.getProcess());
              })
              .attr("data-proc-name", function(d) {
                return _this.getName(d.getProcess());
              });
            listItems.exit().remove();
          };
          BuddySystemAnimator.prototype.getName = function(process) {
            if (process) {
              return process.getName();
            }
            return "(empty)";
          };
          BuddySystemAnimator.prototype.getColor = function(process) {
            if (process === void 0) {
              process = null;
            }
            if (process) {
              return this.colorScaler(process.getName());
            }
            return "#ffffff";
          };
          return BuddySystemAnimator;
        })();
        exports.BuddySystemAnimator = BuddySystemAnimator;

        /***/
      },

    /***/ "./src/algorithms.ts":
      /*!***************************!*\
  !*** ./src/algorithms.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var __extends =
          (this && this.__extends) ||
          (function() {
            var extendStatics =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(d, b) {
                  d.__proto__ = b;
                }) ||
              function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        Object.defineProperty(exports, "__esModule", {value: true});
        var processHelpers_1 = __webpack_require__(
          /*! ./util/processHelpers */ "./src/util/processHelpers.ts"
        );
        var SchedulingAlgorithm = /** @class */ (function() {
          function SchedulingAlgorithm() {
            this.preEmption = false;
          }
          SchedulingAlgorithm.prototype.setPreEmption = function(b) {
            this.preEmption = b;
          };
          SchedulingAlgorithm.prototype.handleFinishedProcesses = function(
            list,
            timePassed
          ) {
            var finishedProcesses = this.removeFinishedProcesses(
              list,
              timePassed
            );
            finishedProcesses.forEach(function(p) {
              return p.setFinishedTime(timePassed);
            });
          };
          return SchedulingAlgorithm;
        })();
        exports.SchedulingAlgorithm = SchedulingAlgorithm;
        var Fifo = /** @class */ (function(_super) {
          __extends(Fifo, _super);
          function Fifo() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Fifo.prototype.addProcesses = function(additions, list) {
            list.push.apply(list, additions);
          };
          Fifo.prototype.updateProcessList = function(list) {};
          Fifo.prototype.removeFinishedProcesses = function(list) {
            if (list.length > 0 && list[0].getRemainingLength() <= 0) {
              return list.splice(0, 1);
            }
            return [];
          };
          Fifo.prototype.getName = function() {
            return "fifo";
          };
          Fifo.prototype.handleRamShortage = function(processes) {};
          return Fifo;
        })(SchedulingAlgorithm);
        exports.Fifo = Fifo;
        var Lifo = /** @class */ (function(_super) {
          __extends(Lifo, _super);
          function Lifo() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Lifo.prototype.addProcesses = function(additions, list) {
            list.splice.apply(list, [1, 0].concat(additions));
          };
          Lifo.prototype.updateProcessList = function(list) {};
          Lifo.prototype.removeFinishedProcesses = function(list) {
            if (list.length > 0 && list[0].getRemainingLength() <= 0) {
              return list.splice(0, 1);
            }
            return [];
          };
          Lifo.prototype.getName = function() {
            return "lifo";
          };
          Lifo.prototype.handleRamShortage = function(processes) {};
          return Lifo;
        })(SchedulingAlgorithm);
        exports.Lifo = Lifo;
        var RR = /** @class */ (function(_super) {
          __extends(RR, _super);
          function RR(quantum) {
            var _this = _super.call(this) || this;
            _this.quantum = quantum;
            _this.nextDeadline = quantum;
            return _this;
          }
          RR.prototype.addProcesses = function(additions, list) {
            list.push.apply(list, additions);
          };
          RR.prototype.updateProcessList = function(list, timePassed) {
            if (list.length === 0) {
              this.nextDeadline = timePassed + this.quantum;
              return;
            }
            if (timePassed >= this.nextDeadline) {
              this.nextDeadline += this.quantum;
              processHelpers_1.interruptActiveProcess(list, list.length - 1);
            }
          };
          RR.prototype.removeFinishedProcesses = function(list, timePassed) {
            if (list.length > 0 && list[0].getRemainingLength() <= 0) {
              this.nextDeadline = timePassed + this.quantum;
              return list.splice(0, 1);
            }
            return [];
          };
          RR.prototype.getName = function() {
            return "rr";
          };
          RR.prototype.handleRamShortage = function(processes) {
            var p = processes.shift();
            if (p) {
              processes.push(p);
            }
          };
          return RR;
        })(SchedulingAlgorithm);
        exports.RR = RR;
        var Priority = /** @class */ (function(_super) {
          __extends(Priority, _super);
          function Priority(preEmption) {
            var _this = _super.call(this) || this;
            _this.preEmption = preEmption;
            return _this;
          }
          Priority.prototype.addProcesses = function(additions, list) {
            additions.sort(function(a, b) {
              return b.getPriority() - a.getPriority();
            });
            for (var i = 0; i < additions.length; i++) {
              this.addProcess(additions[i], list);
            }
          };
          Priority.prototype.addProcess = function(p, list) {
            if (
              this.preEmption &&
              list[0] &&
              list[0].getPriority() < p.getPriority()
            ) {
              // interrupt running process
              processHelpers_1.interruptActiveProcess(list, 0);
              list.splice(0, 0, p);
              return;
            }
            var n = 1;
            while (
              n < list.length &&
              list[n].getPriority() >= p.getPriority()
            ) {
              n++;
            }
            list.splice(n, 0, p);
          };
          Priority.prototype.updateProcessList = function(list) {};
          Priority.prototype.removeFinishedProcesses = function(list) {
            if (list.length > 0 && list[0].getRemainingLength() <= 0) {
              return list.splice(0, 1);
            }
            return [];
          };
          Priority.prototype.getName = function() {
            return "priority";
          };
          Priority.prototype.handleRamShortage = function(processes) {
            var i = 0;
            var posFound = false;
            var inProgress = false; // at least on process above the new position has to be in progress already
            var p = processes.shift();
            if (!p) {
              return;
            }
            while (!posFound) {
              if (
                processes[i].getRemainingLength() < processes[i].getLength()
              ) {
                inProgress = true;
              }
              console.log(i);
              if (processes[i].getPriority() <= p.getPriority() && inProgress) {
                posFound = true;
              } else if (i === processes.length) {
                posFound = true;
              } else {
                i++;
              }
            }
            processes.splice(i + 1, 0, p);
          };
          return Priority;
        })(SchedulingAlgorithm);
        exports.Priority = Priority;
        var SJN = /** @class */ (function(_super) {
          __extends(SJN, _super);
          function SJN(preEmption) {
            var _this = _super.call(this) || this;
            _this.preEmption = preEmption;
            return _this;
          }
          SJN.prototype.addProcesses = function(additions, list) {
            additions.sort(function(a, b) {
              return a.getLength() - b.getLength();
            });
            for (var i = 0; i < additions.length; i++) {
              this.addProcess(additions[i], list);
            }
          };
          SJN.prototype.addProcess = function(p, list) {
            if (
              this.preEmption &&
              list[0] &&
              list[0].getLength() > p.getLength()
            ) {
              // interrupt running process
              processHelpers_1.interruptActiveProcess(list, 0);
              list.splice(0, 0, p);
              return;
            }
            var n = 1;
            while (n < list.length && list[n].getLength() <= p.getLength()) {
              n++;
            }
            list.splice(n, 0, p);
          };
          SJN.prototype.updateProcessList = function(list) {};
          SJN.prototype.removeFinishedProcesses = function(list) {
            if (list.length > 0 && list[0].getRemainingLength() <= 0) {
              return list.splice(0, 1);
            }
            return [];
          };
          SJN.prototype.getName = function() {
            return "sjn";
          };
          SJN.prototype.handleRamShortage = function(processes) {
            var i = 0;
            var posFound = false;
            var inProgress = false; // at least on process above the new position has to be in progress already
            var p = processes.shift();
            if (!p) {
              return;
            }
            while (!posFound) {
              if (
                processes[i].getRemainingLength() < processes[i].getLength()
              ) {
                inProgress = true;
              }
              console.log(i);
              if (
                processes[i].getRemainingLength() <= p.getRemainingLength() &&
                inProgress
              ) {
                posFound = true;
              } else if (i === processes.length) {
                posFound = true;
              } else {
                i++;
              }
            }
            processes.splice(i + 1, 0, p);
          };
          return SJN;
        })(SchedulingAlgorithm);
        exports.SJN = SJN;

        /***/
      },

    /***/ "./src/diskAlgorithms.ts":
      /*!*******************************!*\
  !*** ./src/diskAlgorithms.ts ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var __extends =
          (this && this.__extends) ||
          (function() {
            var extendStatics =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(d, b) {
                  d.__proto__ = b;
                }) ||
              function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by Clemens Gläser on 25.01.17
         */
        var diskModels_1 = __webpack_require__(
          /*! ./diskModels */ "./src/diskModels.ts"
        );
        var DiskSpaceAllocationAlgorithm = /** @class */ (function() {
          function DiskSpaceAllocationAlgorithm() {}
          DiskSpaceAllocationAlgorithm.getNewDiskBlocks = function(
            disk,
            process,
            newState
          ) {
            var diskUsage =
              newState === diskModels_1.BlockState.SWAP
                ? process.getMemoryUsage()
                : process.diskUsage;
            var amountParts = Math.ceil(diskUsage / disk.sizePerBlock);
            var newDiskBlocks = [];
            for (var i = 0; i < amountParts; i++) {
              newDiskBlocks.push(
                new diskModels_1.DiskBlock(process, i, -1, newState)
              );
            }
            return newDiskBlocks;
          };
          return DiskSpaceAllocationAlgorithm;
        })();
        exports.DiskSpaceAllocationAlgorithm = DiskSpaceAllocationAlgorithm;
        var DiskSpaceFirstFit = /** @class */ (function(_super) {
          __extends(DiskSpaceFirstFit, _super);
          function DiskSpaceFirstFit() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          DiskSpaceFirstFit.findFirstFreeSlot = function(disk) {
            var el = disk.blocks
              .filter(function(b) {
                return b.owner == null;
              })
              .shift();
            return el ? el.index : -1;
          };
          DiskSpaceFirstFit.prototype.addProcess = function(
            disk,
            process,
            type
          ) {
            var newDiskBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
              disk,
              process,
              type
            );
            var freeSlots = disk.getFreeSpace();
            var alreadyAdded = disk.hasProcess(process, type);
            if (alreadyAdded) {
              return false;
            }
            if (freeSlots < newDiskBlocks.length) {
              // process does not fit on disk
              return false;
            }
            var element = newDiskBlocks.shift();
            var addedAtLeastOnce = false;
            while (element !== undefined) {
              var index = DiskSpaceFirstFit.findFirstFreeSlot(disk);
              var block = disk.blocks[index];
              block.update(element);
              addedAtLeastOnce = true;
              element = newDiskBlocks.shift();
            }
            return addedAtLeastOnce;
          };
          DiskSpaceFirstFit.prototype.removeProcess = function(
            disk,
            process,
            type
          ) {
            disk.blocks.forEach(function(value) {
              if (value.owner === process && value.state === type) {
                value.clear();
              }
            });
          };
          DiskSpaceFirstFit.prototype.getName = function() {
            return "disk-space-first-fit";
          };
          DiskSpaceFirstFit.prototype.hasSpaceForProcess = function(
            disk,
            process,
            type
          ) {
            var newBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
              disk,
              process,
              type
            );
            var freeSlots = disk.getFreeSpace();
            return newBlocks.length <= freeSlots;
          };
          return DiskSpaceFirstFit;
        })(DiskSpaceAllocationAlgorithm);
        exports.DiskSpaceFirstFit = DiskSpaceFirstFit;
        var DiskSpaceFirstCompleteFit = /** @class */ (function(_super) {
          __extends(DiskSpaceFirstCompleteFit, _super);
          function DiskSpaceFirstCompleteFit() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          DiskSpaceFirstCompleteFit.prototype.addProcess = function(
            disk,
            process,
            type
          ) {
            var newDiskBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
              disk,
              process,
              type
            );
            var freeSlots = disk.getFreeSpace();
            var alreadyAdded = disk.hasProcess(process, type);
            if (alreadyAdded) {
              return false;
            }
            if (freeSlots < newDiskBlocks.length) {
              // process does not fit on the disk
              return false;
            }
            var validLocations = this.getValidLocations(
              disk,
              newDiskBlocks.length
            );
            if (validLocations.length <= 0) {
              // no continuous position found
              return false;
            }
            var index = validLocations.shift();
            for (var i = 0; i < newDiskBlocks.length; i++) {
              disk.blocks[i + index].update(newDiskBlocks[i]);
            }
            return true;
          };
          DiskSpaceFirstCompleteFit.prototype.removeProcess = function(
            disk,
            process,
            type
          ) {
            disk.blocks.forEach(function(value) {
              if (value.owner === process && value.state === type) {
                value.clear();
              }
            });
          };
          DiskSpaceFirstCompleteFit.prototype.getName = function() {
            return "disk-space-first-complete-fit";
          };
          DiskSpaceFirstCompleteFit.prototype.hasSpaceForProcess = function(
            disk,
            process,
            type
          ) {
            var newBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
              disk,
              process,
              type
            );
            var freeSlots = disk.getFreeSpace();
            return (
              newBlocks.length <= freeSlots &&
              this.getValidLocations(disk, newBlocks.length).length > 0
            );
          };
          DiskSpaceFirstCompleteFit.prototype.getValidLocations = function(
            disk,
            consecutiveBlocks
          ) {
            var result = [];
            disk.blocks.forEach(function(v, i, array) {
              if (v.owner == null) {
                var valid = array
                  .slice(i, i + consecutiveBlocks)
                  .every(function(b) {
                    return b.owner == null;
                  });
                if (valid) {
                  result.push(i);
                }
              }
            });
            return result;
          };
          return DiskSpaceFirstCompleteFit;
        })(DiskSpaceAllocationAlgorithm);
        exports.DiskSpaceFirstCompleteFit = DiskSpaceFirstCompleteFit;
        // See http://www.cs.iit.edu/~cs561/cs450/disksched/disksched.html for disk scheduling algorithms
        // TODO: Look into merging DiskSpaceAllocationAlgorithm and DiskScheduleAlgorithm
        var DiskScheduleAlgorithm = /** @class */ (function() {
          function DiskScheduleAlgorithm(queue) {
            this._queue = queue;
          }
          DiskScheduleAlgorithm.prototype.removeAllRequestsFromProcess = function(
            process
          ) {
            this.queue = this.queue.filter(function(value) {
              return value.owner !== process;
            });
          };
          Object.defineProperty(DiskScheduleAlgorithm.prototype, "queue", {
            get: function() {
              return this._queue;
            },
            set: function(value) {
              this._queue = value;
            },
            enumerable: true,
            configurable: true
          });
          return DiskScheduleAlgorithm;
        })();
        exports.DiskScheduleAlgorithm = DiskScheduleAlgorithm;

        /***/
      },

    /***/ "./src/diskModels.ts":
      /*!***************************!*\
  !*** ./src/diskModels.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /*
 * Created by Clemens Gläser on 25.01.18
 */
        var d3_collection_1 = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        var Disk = /** @class */ (function() {
          function Disk(
            name,
            spaceAllocationAlgorithm,
            diskScheduleAlgorithm,
            size,
            sizePerBlock /* KB*/
          ) {
            if (sizePerBlock === void 0) {
              sizePerBlock = 4;
            }
            this.name = name;
            this.spaceAllocationAlgorithm = spaceAllocationAlgorithm;
            this.diskScheduleAlgorithm = diskScheduleAlgorithm;
            this.size = size;
            this.sizePerBlock = sizePerBlock;
            this._blocks = [];
          }
          Disk.prototype.initDisk = function() {
            this._blocks = [];
            for (var i = 0; i < this.size / this.sizePerBlock; i++) {
              this._blocks.push(new DiskBlock(null, -1, i));
            }
          };
          Disk.prototype.isValidDisk = function() {
            return this._blocks.length === this.size / this.sizePerBlock;
          };
          Disk.prototype.requestPart = function(process, part) {
            if (this.diskScheduleAlgorithm == null) {
              return false;
            }
            return this.diskScheduleAlgorithm.addRequest(
              new DiskBlock(process, part)
            );
          };
          Disk.prototype.removeRequest = function(process, part) {
            if (this.diskScheduleAlgorithm != null) {
              this.diskScheduleAlgorithm.removeRequestFromProcess(
                new DiskBlock(process, part)
              );
            }
          };
          Disk.prototype.allocateSpace = function(process, type) {
            if (type === void 0) {
              type = BlockState.DISK;
            }
            if (this.spaceAllocationAlgorithm == null) {
              return false;
            }
            return this.spaceAllocationAlgorithm.addProcess(
              this,
              process,
              type
            );
          };
          Disk.prototype.removeFromDisk = function(process, type) {
            if (type === void 0) {
              type = BlockState.DISK;
            }
            if (this.diskScheduleAlgorithm != null) {
              this.diskScheduleAlgorithm.removeAllRequestsFromProcess(process);
            }
            if (this.spaceAllocationAlgorithm != null) {
              this.spaceAllocationAlgorithm.removeProcess(this, process, type);
            }
          };
          Disk.prototype.hasProcess = function(process, type) {
            return (
              this.blocks
                .filter(function(v) {
                  return v.owner === process;
                })
                .filter(function(v) {
                  return v.state === type;
                }).length > 0
            );
          };
          Disk.prototype.hasSpaceForProcess = function(process, type) {
            if (type === void 0) {
              type = BlockState.DISK;
            }
            if (!this.spaceAllocationAlgorithm) {
              return false;
            }
            return this.spaceAllocationAlgorithm.hasSpaceForProcess(
              this,
              process,
              type
            );
          };
          /**
           * Returns the amount of free slots available
           * @returns {number}
           */
          Disk.prototype.getFreeSpace = function() {
            return this.blocks.filter(function(value) {
              return value.owner == null;
            }).length;
          };
          Disk.prototype.toPieDataOld = function() {
            var ownerOrEmpty = function(p) {
              return p ? p.getName() : "";
            };
            var pieData = [];
            this.blocks.forEach(function(value) {
              var owner = ownerOrEmpty(value.owner);
              var ownerIndex = pieData
                .map(function(d) {
                  return d.owner;
                })
                .lastIndexOf(owner);
              if (ownerIndex !== pieData.length - 1 || pieData.length === 0) {
                // previous element has a different owner -> new segment
                pieData.push({owner: owner, size: 1});
              } else {
                // previous element has the same owner
                pieData[ownerIndex].size++;
              }
            });
            return pieData;
          };
          Disk.prototype.toPieData = function() {
            var ownerOrEmpty = function(p) {
              return p ? p.getName() : "";
            };
            var pieData = [];
            var ownerNameSet = d3_collection_1.set();
            this.blocks
              .map(function(v) {
                return v.owner;
              })
              .forEach(function(v) {
                return ownerNameSet.add(ownerOrEmpty(v));
              });
            this.blocks.forEach(function(value) {
              var ownerName = ownerOrEmpty(value.owner);
              if (ownerNameSet.has(ownerName)) {
                ownerNameSet.remove(ownerName);
                pieData.push({owner: ownerName, size: 1});
              } else {
                pieData
                  .filter(function(v) {
                    return v.owner === ownerName;
                  })
                  .forEach(function(v) {
                    return v.size++;
                  });
              }
            });
            return pieData;
          };
          Object.defineProperty(Disk.prototype, "blocks", {
            // Getter & Setter
            get: function() {
              return this._blocks;
            },
            enumerable: true,
            configurable: true
          });
          return Disk;
        })();
        exports.Disk = Disk;
        var DiskBlock = /** @class */ (function() {
          function DiskBlock(owner, part, index, state) {
            if (part === void 0) {
              part = -1;
            }
            if (index === void 0) {
              index = -1;
            }
            if (state === void 0) {
              state = BlockState.EMPTY;
            }
            this.owner = owner;
            this.part = part;
            this.index = index;
            this.state = state;
          }
          DiskBlock.prototype.clear = function() {
            this.owner = null;
            this.part = -1;
            this.state = BlockState.EMPTY;
          };
          DiskBlock.prototype.update = function(block) {
            if (block !== undefined) {
              this.owner = block.owner;
              this.part = block.part;
              this.state = block.state;
            }
          };
          Object.defineProperty(DiskBlock.prototype, "id", {
            // Custom Getter
            get: function() {
              return "disk-block-" + this.index;
            },
            enumerable: true,
            configurable: true
          });
          return DiskBlock;
        })();
        exports.DiskBlock = DiskBlock;
        var BlockState;
        (function(BlockState) {
          BlockState[(BlockState["EMPTY"] = 0)] = "EMPTY";
          BlockState[(BlockState["DISK"] = 1)] = "DISK";
          BlockState[(BlockState["SWAP"] = 2)] = "SWAP";
        })(BlockState || (BlockState = {}));
        exports.BlockState = BlockState;

        /***/
      },

    /***/ "./src/diskSpaceAnimations.ts":
      /*!************************************!*\
  !*** ./src/diskSpaceAnimations.ts ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 06.02.18 11:10
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var factoryMethods_1 = __webpack_require__(
          /*! ./factoryMethods */ "./src/factoryMethods.ts"
        );
        var diskSpaceAnimator = factoryMethods_1.createDiskSpaceAnimator();
        function updateDiskSpaceAnimator(disk) {
          diskSpaceAnimator = factoryMethods_1.createDiskSpaceAnimator();
        }
        exports.updateDiskSpaceAnimator = updateDiskSpaceAnimator;
        function setTransitionDuration(n) {
          diskSpaceAnimator.setTransitionDuration(n);
        }
        exports.setTransitionDuration = setTransitionDuration;
        function addDiskVisually(disk) {
          diskSpaceAnimator.initDiskSpaceVisually(disk);
        }
        exports.addDiskVisually = addDiskVisually;
        function animateDiskSpaceAllocation(process, disk, color, type) {
          diskSpaceAnimator.animateDiskSpaceAllocation(
            process,
            disk,
            color,
            type
          );
        }
        exports.animateDiskSpaceAllocation = animateDiskSpaceAllocation;
        function animateDiskSpaceDeallocation(process, disk, type) {
          diskSpaceAnimator.animateDiskSpaceDeallocation(process, disk, type);
        }
        exports.animateDiskSpaceDeallocation = animateDiskSpaceDeallocation;
        function resetDiskSpaceAnimation(disk) {
          diskSpaceAnimator.resetDiskSpaceAnimation(disk);
        }
        exports.resetDiskSpaceAnimation = resetDiskSpaceAnimation;

        /***/
      },

    /***/ "./src/factoryMethods.ts":
      /*!*******************************!*\
  !*** ./src/factoryMethods.ts ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_collection_1 = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        var algorithms_1 = __webpack_require__(
          /*! ./algorithms */ "./src/algorithms.ts"
        );
        var diskAlgorithms_1 = __webpack_require__(
          /*! ./diskAlgorithms */ "./src/diskAlgorithms.ts"
        );
        var DiskSpaceAnimator_1 = __webpack_require__(
          /*! ./DiskSpaceAnimator */ "./src/DiskSpaceAnimator.ts"
        );
        var keys_1 = __webpack_require__(
          /*! ./localStorage/keys */ "./src/localStorage/keys.ts"
        );
        var TypedLocalStorage_1 = __webpack_require__(
          /*! ./localStorage/TypedLocalStorage */ "./src/localStorage/TypedLocalStorage.ts"
        );
        var memoryAlgorithms_1 = __webpack_require__(
          /*! ./memoryAlgorithms */ "./src/memoryAlgorithms.ts"
        );
        var MemoryAnimator_1 = __webpack_require__(
          /*! ./MemoryAnimator */ "./src/MemoryAnimator.ts"
        );
        var processor_1 = __webpack_require__(
          /*! ./processor */ "./src/processor.ts"
        );
        var scheduling_1 = __webpack_require__(
          /*! ./scheduling */ "./src/scheduling.ts"
        );
        var collectionHelpers_1 = __webpack_require__(
          /*! ./util/collectionHelpers */ "./src/util/collectionHelpers.ts"
        );
        function createSchedulingAlgorithm() {
          switch (document.getElementById("schedulingAlgorithm").value) {
            case "fifo":
              return new algorithms_1.Fifo();
            case "lifo":
              return new algorithms_1.Lifo();
            case "rr":
              return new algorithms_1.RR(
                parseInt(document.getElementById("quantum").value, 10)
              );
            case "priority":
              return new algorithms_1.Priority(
                document.getElementById("interruptCheckBox").checked
              );
            case "sjn":
              return new algorithms_1.SJN(
                document.getElementById("interruptCheckBox").checked
              );
          }
          return undefined;
        }
        exports.createSchedulingAlgorithm = createSchedulingAlgorithm;
        function createMemoryAlgorithm() {
          switch (document.getElementById("memoryAlgorithm").value) {
            case "FirstFit":
              return new memoryAlgorithms_1.FirstFit();
            case "BestFit":
              return new memoryAlgorithms_1.BestFit();
            case "Worst Fit":
              return new memoryAlgorithms_1.WorstFit();
            case "Rotating First Fit":
              return new memoryAlgorithms_1.RotatingFirstFit();
            case "Buddy System":
              var canOverstep = document.getElementById("buddyOverstep")
                .checked;
              var minSize = document.getElementById("buddyMinSize")
                .valueAsNumber;
              return new memoryAlgorithms_1.BuddySystem(canOverstep, minSize);
          }
          return undefined;
        }
        exports.createMemoryAlgorithm = createMemoryAlgorithm;
        function createDiskSpaceAllocationAlgorithm() {
          switch (document.getElementById("diskAllocAlgorithm").value) {
            case "disk-space-first-fit":
              return new diskAlgorithms_1.DiskSpaceFirstFit();
            case "disk-space-first-complete-fit":
              return new diskAlgorithms_1.DiskSpaceFirstCompleteFit();
          }
          return undefined;
        }
        exports.createDiskSpaceAllocationAlgorithm = createDiskSpaceAllocationAlgorithm;
        function createAndAddProcess(
          duration,
          arrival,
          priority,
          name,
          memoryUsage,
          diskUsage
        ) {
          if (diskUsage === void 0) {
            diskUsage = 0;
          }
          var newProcess = new processor_1.Process(
            arrival,
            duration,
            priority,
            name,
            memoryUsage,
            diskUsage
          );
          scheduling_1.getProcessList().push(newProcess);
          scheduling_1.addProcessVisually(newProcess);
        }
        exports.createAndAddProcess = createAndAddProcess;
        var defaultMemoryAnimator = new MemoryAnimator_1.DefaultMemoryAnimator();
        var memoryAnimators = d3_collection_1
          .map()
          .set("Buddy System", new MemoryAnimator_1.BuddySystemAnimator());
        function createMemoryAnimator() {
          var selected = document.getElementById("memoryAlgorithm").value;
          return collectionHelpers_1.getOrDefault(
            memoryAnimators,
            selected,
            defaultMemoryAnimator
          );
        }
        exports.createMemoryAnimator = createMemoryAnimator;
        var diskSpaceAnimators = d3_collection_1
          .map()
          .set(
            keys_1.DiskSpaceAnimatorKeys.DISK_USAGE,
            new DiskSpaceAnimator_1.DiskUsagePieChart()
          )
          .set(
            keys_1.DiskSpaceAnimatorKeys.FIXED_SEGMENTS,
            new DiskSpaceAnimator_1.FixedSegmentDonutChart()
          )
          .set(
            keys_1.DiskSpaceAnimatorKeys.OLD_PIE,
            new DiskSpaceAnimator_1.OldPieChart()
          );
        function createDiskSpaceAnimator() {
          var key = TypedLocalStorage_1.getOrElse(
            keys_1.LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR,
            keys_1.DiskSpaceAnimatorKeys.FIXED_SEGMENTS
          );
          return diskSpaceAnimators.get(key);
        }
        exports.createDiskSpaceAnimator = createDiskSpaceAnimator;

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

    /***/ "./src/memoryAlgorithms.ts":
      /*!*********************************!*\
  !*** ./src/memoryAlgorithms.ts ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var __extends =
          (this && this.__extends) ||
          (function() {
            var extendStatics =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(d, b) {
                  d.__proto__ = b;
                }) ||
              function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by Joe on 30.11.17.
         */
        var memoryController_1 = __webpack_require__(
          /*! ./memoryController */ "./src/memoryController.ts"
        );
        var mathHelper_1 = __webpack_require__(
          /*! ./util/mathHelper */ "./src/util/mathHelper.ts"
        );
        var MemoryAlgorithm = /** @class */ (function() {
          function MemoryAlgorithm() {}
          /**
           * This method gets called to set the initial MemoryList state.
           * Do note that you do not have to create as many blocks as requested.
           * @param {number} size - the desired size
           * @returns {MemoryBlock[]} - the new memoryList
           */
          MemoryAlgorithm.prototype.initMemory = function(size) {
            var newMemBlocks = [];
            for (var i = 0; i < size; i++) {
              newMemBlocks.push(new memoryController_1.MemoryBlock(null, i));
            }
            return newMemBlocks;
          };
          // we need to find the longest continuous chain of blocks
          MemoryAlgorithm.prototype.hasSpaceForProcess = function(
            memoryList,
            process
          ) {
            var continuous = [];
            var counter = 0;
            memoryList.forEach(function(v) {
              if (v.getProcess() == null) {
                counter++;
              } else {
                continuous.push(counter);
                counter = 0;
              }
            });
            continuous.push(counter);
            var max = continuous.reduce(function(prev, curr) {
              return Math.max(prev, curr);
            }, 0);
            return max >= process.getMemoryUsage();
          };
          return MemoryAlgorithm;
        })();
        exports.MemoryAlgorithm = MemoryAlgorithm;
        var FirstFit = /** @class */ (function(_super) {
          __extends(FirstFit, _super);
          function FirstFit() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          FirstFit.prototype.addProcess = function(memoryList, process) {
            var i = 0;
            var allocSize = process.getMemoryUsage();
            var freeIds = [];
            while (i <= memoryList.length - allocSize && !process.hasMemory) {
              if (!memoryList[i].getProcess()) {
                var sliced = memoryList.slice(i, i + allocSize);
                if (
                  sliced.every(function(mb) {
                    return mb.getProcess() == null;
                  })
                ) {
                  sliced.forEach(function(mb) {
                    process.setHasMemory(true); // not important yet, just done for consistency. memoryList processes and processor processes are not equal!
                    memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                      process,
                      mb.getId()
                    );
                  });
                }
              }
              i++;
            }
            if (process.hasMemory) {
              return true;
            } else {
              process.reject();
              console.log("not enough or no suitable space");
              return false;
            }
          };
          FirstFit.prototype.removeProcess = function(memoryList, process) {
            memoryList.forEach(function(mb) {
              if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                  null,
                  mb.getId()
                );
              }
            });
          };
          FirstFit.prototype.getName = function() {
            return "FirstFit";
          };
          return FirstFit;
        })(MemoryAlgorithm);
        exports.FirstFit = FirstFit;
        var BestFit = /** @class */ (function(_super) {
          __extends(BestFit, _super);
          function BestFit() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          BestFit.prototype.addProcess = function(memoryList, process) {
            var start = 0;
            var end = 0;
            var finalStart = 0;
            var finalEnd = 0;
            while (end < memoryList.length) {
              if (memoryList[start].getProcess()) {
                // finding startIndex for free blocks
                start++;
                end = start;
              } else {
                while (
                  end < memoryList.length &&
                  !memoryList[end].getProcess()
                ) {
                  end++;
                }
                // end now identifies the last free blockindex from start to and end in one row.
                end--;
                if (end - start >= process.memoryUsage) {
                  // first match
                  if (finalEnd === 0 && finalStart === 0) {
                    finalEnd = end;
                    finalStart = start;
                    // better match
                  } else if (finalEnd - finalStart > end - start) {
                    finalStart = start;
                    finalEnd = end;
                  }
                }
                end++;
                start = end;
              }
            }
            console.log("finalStart: " + finalStart);
            console.log("finalEnd: " + (finalStart + process.memoryUsage - 1));
            if (
              finalEnd - finalStart >= process.memoryUsage &&
              memoryList.every(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                  return !mb.getProcess();
                } else {
                  return true;
                }
              })
            ) {
              process.hasMemory = true;
              memoryList.forEach(function(mb) {
                if (
                  finalStart <= mb.getId() &&
                  mb.getId() <= finalStart + process.memoryUsage - 1
                ) {
                  memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                    process,
                    mb.getId()
                  );
                }
              });
              return true;
            } else {
              process.reject();
              return false;
            }
          };
          BestFit.prototype.removeProcess = function(memoryList, process) {
            memoryList.forEach(function(mb) {
              if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                  null,
                  mb.getId()
                );
              }
            });
          };
          BestFit.prototype.getName = function() {
            return "BestFit";
          };
          return BestFit;
        })(MemoryAlgorithm);
        exports.BestFit = BestFit;
        var WorstFit = /** @class */ (function(_super) {
          __extends(WorstFit, _super);
          function WorstFit() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          WorstFit.prototype.addProcess = function(memoryList, process) {
            var start = 0;
            var end = 0;
            var finalStart = 0;
            var finalEnd = 0;
            while (end < memoryList.length) {
              if (memoryList[start].getProcess()) {
                // finding startIndex for free blocks
                start++;
                end = start;
              } else {
                while (
                  end < memoryList.length &&
                  !memoryList[end].getProcess()
                ) {
                  end++;
                }
                // end now identifies the last free blockindex from start to and end in one row.
                end--;
                if (end - start >= process.memoryUsage) {
                  // first match
                  if (finalEnd === 0 && finalStart === 0) {
                    finalEnd = end;
                    finalStart = start;
                    // better match
                  } else if (finalEnd - finalStart < end - start) {
                    finalStart = start;
                    finalEnd = end;
                  }
                }
                end++;
                start = end;
              }
            }
            console.log("finalStart: " + finalStart);
            console.log("finalEnd: " + (finalStart + process.memoryUsage - 1));
            if (
              finalEnd - finalStart >= process.memoryUsage &&
              memoryList.every(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                  return !mb.getProcess();
                } else {
                  return true;
                }
              })
            ) {
              process.hasMemory = true;
              memoryList.forEach(function(mb) {
                if (
                  finalStart <= mb.getId() &&
                  mb.getId() <= finalStart + process.memoryUsage - 1
                ) {
                  memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                    process,
                    mb.getId()
                  );
                }
              });
              return true;
            } else {
              process.reject();
              return false;
            }
          };
          WorstFit.prototype.removeProcess = function(memoryList, process) {
            memoryList.forEach(function(mb) {
              if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                  null,
                  mb.getId()
                );
              }
            });
          };
          WorstFit.prototype.getName = function() {
            return "Worst Fit";
          };
          return WorstFit;
        })(MemoryAlgorithm);
        exports.WorstFit = WorstFit;
        var RotatingFirstFit = /** @class */ (function(_super) {
          __extends(RotatingFirstFit, _super);
          function RotatingFirstFit() {
            var _this =
              (_super !== null && _super.apply(this, arguments)) || this;
            _this.lastAllocated = -1;
            return _this;
          }
          RotatingFirstFit.prototype.addProcess = function(
            memoryList,
            process
          ) {
            var i;
            var allocSize = process.getMemoryUsage();
            var freeIds = [];
            if (this.lastAllocated === memoryList.length - 1) {
              i = 0;
            } else {
              i = this.lastAllocated + 1;
            }
            console.log(i);
            // eine runde rum
            while (i !== this.lastAllocated) {
              // linke seite
              if (i < this.lastAllocated) {
                // genug platz
                if (i <= this.lastAllocated - allocSize) {
                  // [i , i + allocSize] ist frei
                  var sliced = memoryList.slice(i, i + allocSize);
                  if (
                    sliced.every(function(mb) {
                      return mb.getProcess() == null;
                    })
                  ) {
                    sliced.forEach(function(mb) {
                      process.setHasMemory(true); // not important yet, just done for consistency. memoryList processes and processor processes are not equal!
                      memoryList[
                        mb.getId()
                      ] = new memoryController_1.MemoryBlock(
                        process,
                        mb.getId()
                      );
                    });
                    this.lastAllocated = i + allocSize - 1;
                    break;
                  }
                }
                // rechte seite
              } else {
                // genug platz
                if (i <= memoryList.length - allocSize) {
                  var sliced = memoryList.slice(i, i + allocSize);
                  if (
                    sliced.every(function(mb) {
                      return mb.getProcess() == null;
                    })
                  ) {
                    sliced.forEach(function(mb) {
                      process.setHasMemory(true);
                      memoryList[
                        mb.getId()
                      ] = new memoryController_1.MemoryBlock(
                        process,
                        mb.getId()
                      );
                    });
                    this.lastAllocated = i + allocSize - 1;
                    break;
                  }
                }
              }
              // iteration
              if (i === memoryList.length - 1) {
                i = 0;
              } else {
                i++;
              }
            }
            if (process.hasMemory) {
              return true;
            } else {
              process.reject();
              console.log("not enough or no suitable space");
              return false;
            }
          };
          RotatingFirstFit.prototype.removeProcess = function(
            memoryList,
            process
          ) {
            memoryList.forEach(function(mb) {
              if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new memoryController_1.MemoryBlock(
                  null,
                  mb.getId()
                );
              }
            });
          };
          RotatingFirstFit.prototype.getName = function() {
            return "Rotating First Fit";
          };
          return RotatingFirstFit;
        })(MemoryAlgorithm);
        exports.RotatingFirstFit = RotatingFirstFit;
        var BuddySystem = /** @class */ (function(_super) {
          __extends(BuddySystem, _super);
          function BuddySystem(canOverstepSize, minSize) {
            if (minSize === void 0) {
              minSize = 1;
            }
            var _this = _super.call(this) || this;
            _this.canOverstepSize = canOverstepSize;
            _this.minSize = minSize;
            _this.buddies = [];
            return _this;
          }
          BuddySystem.prototype.addProcess = function(memoryList, process) {
            var memRequirements = mathHelper_1.findUpperPowerOfTwo(
              process.getMemoryUsage()
            );
            var maxMemAvailable = memoryList
              .filter(function(v) {
                return v.getProcess() === null;
              })
              .reduce(function(prev, curr) {
                return Math.max(prev, curr.size);
              }, 0);
            var actualMemRequirements = Math.max(memRequirements, this.minSize);
            if (maxMemAvailable < actualMemRequirements) {
              process.reject();
              return false;
            }
            var desiredSize = actualMemRequirements;
            var index = this.findMatchingBlockIndex(desiredSize, memoryList);
            var iterations = 0;
            while (index === -1) {
              desiredSize *= 2;
              index = this.findMatchingBlockIndex(desiredSize, memoryList);
              iterations++;
            }
            var newAdditions = [];
            newAdditions.unshift(
              new memoryController_1.MemoryBlock(
                null,
                memoryList[index].getId(),
                desiredSize
              )
            );
            while (iterations >= 1) {
              var mb = newAdditions.shift();
              var halvedSize = mb.size / 2;
              newAdditions.unshift(
                new memoryController_1.MemoryBlock(
                  null,
                  mb.getId() + halvedSize,
                  halvedSize
                )
              );
              newAdditions.unshift(
                new memoryController_1.MemoryBlock(null, mb.getId(), halvedSize)
              );
              this.buddies.push({
                first: mb.getId(),
                second: mb.getId() + halvedSize,
                size: halvedSize
              });
              iterations--;
            }
            var finalMb = newAdditions.shift();
            newAdditions.unshift(
              new memoryController_1.MemoryBlock(
                process,
                finalMb.getId(),
                finalMb.size
              )
            );
            memoryList.splice.apply(
              memoryList,
              [index, 1].concat(newAdditions)
            );
            process.hasMemory = true;
            console.table(memoryList);
            return true;
          };
          BuddySystem.prototype.removeProcess = function(memoryList, process) {
            var index = this.findIndexOfProcess(process, memoryList);
            if (index === -1) {
              return;
            }
            var oldMb = memoryList[index];
            memoryList.splice(
              index,
              1,
              new memoryController_1.MemoryBlock(
                null,
                oldMb.getId(),
                oldMb.size
              )
            );
            var buddyEntry = this.findBuddyEntry(oldMb);
            while (buddyEntry) {
              var firstBuddyIndex = memoryList
                .map(function(mb) {
                  return mb.getId();
                })
                .indexOf(buddyEntry.first);
              if (firstBuddyIndex === -1) {
                break;
              }
              var firstBuddy = memoryList[firstBuddyIndex];
              var okToRemove =
                firstBuddy.getProcess() == null &&
                memoryList[firstBuddyIndex + 1].getProcess() == null;
              if (okToRemove) {
                var newMb = new memoryController_1.MemoryBlock(
                  null,
                  firstBuddy.getId(),
                  firstBuddy.size * 2
                );
                memoryList.splice(firstBuddyIndex, 2, newMb);
                this.removeBuddyEntry(firstBuddy.getId(), firstBuddy.size);
                buddyEntry = this.findBuddyEntry(newMb);
              } else {
                buddyEntry = undefined;
              }
            }
            console.table(memoryList);
          };
          BuddySystem.prototype.getName = function() {
            return "Buddy System";
          };
          BuddySystem.prototype.initMemory = function(size) {
            var newSizes = mathHelper_1.approximateAsPowersOfTwo(
              size,
              this.minSize,
              this.canOverstepSize
            );
            console.log("newSizes", newSizes);
            var newMemBlocks = [];
            newSizes.forEach(function(v, i) {
              var sum = newSizes
                .filter(function(value, index) {
                  return index < i;
                })
                .reduce(function(prev, curr) {
                  return prev + curr;
                }, 0);
              newMemBlocks.push(
                new memoryController_1.MemoryBlock(null, sum, v)
              );
            });
            console.table(newMemBlocks);
            return newMemBlocks;
          };
          BuddySystem.prototype.hasSpaceForProcess = function(
            memoryList,
            process
          ) {
            var memRequirements = mathHelper_1.findUpperPowerOfTwo(
              process.getMemoryUsage()
            );
            var maxMemAvailable = memoryList
              .filter(function(v) {
                return v.getProcess() == null;
              })
              .reduce(function(prev, curr) {
                return Math.max(prev, curr.size);
              }, 0);
            return memRequirements <= maxMemAvailable;
          };
          BuddySystem.prototype.findMatchingBlockIndex = function(
            desiredSize,
            memoryList
          ) {
            var index = -1;
            var done = false;
            memoryList.forEach(function(value, i) {
              if (
                value.size === desiredSize &&
                !done &&
                value.getProcess() == null
              ) {
                index = i;
                done = true;
              }
            });
            return index;
          };
          BuddySystem.prototype.findIndexOfProcess = function(
            process,
            memoryList
          ) {
            var index = -1;
            var done = false;
            memoryList.forEach(function(v, i) {
              if (v.getProcess() === process && !done) {
                index = i;
                done = true;
              }
            });
            return index;
          };
          BuddySystem.prototype.findBuddyEntry = function(mb) {
            var result = this.buddies.filter(function(v) {
              return (
                (v.first === mb.getId() || v.second === mb.getId()) &&
                v.size === mb.size
              );
            });
            return result.pop();
          };
          BuddySystem.prototype.removeBuddyEntry = function(first, size) {
            var targetIndex = -1;
            this.buddies.forEach(function(v, i) {
              if (v.first === first && v.size === size) {
                targetIndex = i;
              }
            });
            if (targetIndex >= 0) {
              this.buddies.splice(targetIndex, 1);
            }
          };
          return BuddySystem;
        })(MemoryAlgorithm);
        exports.BuddySystem = BuddySystem;

        /***/
      },

    /***/ "./src/memoryAnimations.ts":
      /*!*********************************!*\
  !*** ./src/memoryAnimations.ts ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        var factoryMethods_1 = __webpack_require__(
          /*! ./factoryMethods */ "./src/factoryMethods.ts"
        );
        var memoryAnimator = factoryMethods_1.createMemoryAnimator();
        function updateMemoryAnimator() {
          memoryAnimator = factoryMethods_1.createMemoryAnimator();
        }
        exports.updateMemoryAnimator = updateMemoryAnimator;
        function addMemoryVisually(m) {
          memoryAnimator.initMemoryVisually(m);
        }
        exports.addMemoryVisually = addMemoryVisually;
        function animateMemoryAllocation(process, memory, color, type) {
          memoryAnimator.animateMemoryAllocation(process, memory, color, type);
        }
        exports.animateMemoryAllocation = animateMemoryAllocation;
        function animateMemoryDeallocation(process, memory, type) {
          memoryAnimator.animateMemoryDeallocation(process, memory, type);
        }
        exports.animateMemoryDeallocation = animateMemoryDeallocation;
        function resetMemoryAnimation(memory) {
          memoryAnimator.resetMemoryAnimation(memory);
        }
        exports.resetMemoryAnimation = resetMemoryAnimation;

        /***/
      },

    /***/ "./src/memoryController.ts":
      /*!*********************************!*\
  !*** ./src/memoryController.ts ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by Johannes Ohlemacher on 28.11.17.
         */
        var Memory = /** @class */ (function() {
          function Memory(memoryList, memoryAlgorithm, size) {
            if (size === void 0) {
              size = 1000;
            }
            this.memoryList = memoryList;
            this.memoryAlgorithm = memoryAlgorithm;
            this.size = size;
          }
          Memory.prototype.getMemoryList = function() {
            return this.memoryList;
          };
          Memory.prototype.getSize = function() {
            return this.size;
          };
          Memory.prototype.setSize = function(size) {
            this.size = size;
          };
          Memory.prototype.initMemory = function() {
            this.memoryList = [];
            if (this.memoryAlgorithm) {
              this.memoryList = this.memoryAlgorithm.initMemory(this.size);
            }
          };
          Memory.prototype.addProcess = function(process) {
            if (!this.memoryAlgorithm) {
              return false;
            }
            return this.memoryAlgorithm.addProcess(this.memoryList, process);
          };
          Memory.prototype.removeProcess = function(process) {
            if (this.memoryAlgorithm) {
              this.memoryAlgorithm.removeProcess(this.memoryList, process);
            }
          };
          Memory.prototype.hasProcess = function(process) {
            return (
              this.memoryList.filter(function(v) {
                return v.getProcess() === process;
              }).length > 0
            );
          };
          Memory.prototype.hasSpaceForProcess = function(process) {
            if (!this.memoryAlgorithm) {
              return false;
            }
            return this.memoryAlgorithm.hasSpaceForProcess(
              this.memoryList,
              process
            );
          };
          return Memory;
        })();
        exports.Memory = Memory;
        var MemoryBlock = /** @class */ (function() {
          function MemoryBlock(process, id, size) {
            if (size === void 0) {
              size = 1;
            }
            this.size = size;
            this.process = process;
            this.id = id;
          }
          MemoryBlock.prototype.getId = function() {
            return this.id;
          };
          MemoryBlock.prototype.getProcess = function() {
            return this.process;
          };
          return MemoryBlock;
        })();
        exports.MemoryBlock = MemoryBlock;

        /***/
      },

    /***/ "./src/names.ts":
      /*!**********************!*\
  !*** ./src/names.ts ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by vhenning on 07.06.17.
         */
        var names = [
          "JAMES",
          "JOHN",
          "ROBERT",
          "MICHAEL",
          "WILLIAM",
          "DAVID",
          "RICHARD",
          "CHARLES",
          "JOSEPH",
          "THOMAS",
          "CHRISTOPHER",
          "DANIEL",
          "PAUL",
          "MARK",
          "DONALD",
          "GEORGE",
          "KENNETH",
          "STEVEN",
          "EDWARD",
          "BRIAN",
          "RONALD",
          "ANTHONY",
          "KEVIN",
          "JASON",
          "MATTHEW",
          "GARY",
          "TIMOTHY",
          "JOSE",
          "LARRY",
          "JEFFREY",
          "FRANK",
          "SCOTT",
          "ERIC",
          "STEPHEN",
          "ANDREW",
          "RAYMOND",
          "GREGORY",
          "JOSHUA",
          "JERRY",
          "DENNIS",
          "WALTER",
          "PATRICK",
          "PETER",
          "HAROLD",
          "DOUGLAS",
          "HENRY",
          "CARL",
          "ARTHUR",
          "RYAN",
          "ROGER",
          "JOE",
          "JUAN",
          "JACK",
          "ALBERT",
          "JONATHAN",
          "JUSTIN",
          "TERRY",
          "GERALD",
          "KEITH",
          "SAMUEL",
          "WILLIE",
          "RALPH",
          "LAWRENCE",
          "NICHOLAS",
          "ROY",
          "BENJAMIN",
          "BRUCE",
          "BRANDON",
          "ADAM",
          "HARRY",
          "FRED",
          "WAYNE",
          "BILLY",
          "STEVE",
          "LOUIS",
          "JEREMY",
          "AARON",
          "RANDY",
          "HOWARD",
          "EUGENE",
          "CARLOS",
          "RUSSELL",
          "BOBBY",
          "VICTOR",
          "MARTIN",
          "ERNEST",
          "PHILLIP",
          "TODD",
          "JESSE",
          "CRAIG",
          "ALAN",
          "SHAWN",
          "CLARENCE",
          "SEAN",
          "PHILIP",
          "CHRIS",
          "JOHNNY",
          "EARL",
          "JIMMY",
          "ANTONIO",
          "DANNY",
          "BRYAN",
          "TONY",
          "LUIS",
          "MIKE",
          "STANLEY",
          "LEONARD",
          "NATHAN",
          "DALE",
          "MANUEL",
          "RODNEY",
          "CURTIS",
          "NORMAN",
          "ALLEN",
          "MARVIN",
          "VINCENT",
          "GLENN",
          "JEFFERY",
          "TRAVIS",
          "JEFF",
          "CHAD",
          "JACOB",
          "LEE",
          "MELVIN",
          "ALFRED",
          "KYLE",
          "FRANCIS",
          "BRADLEY",
          "JESUS",
          "HERBERT",
          "FREDERICK",
          "RAY",
          "JOEL",
          "EDWIN",
          "DON",
          "EDDIE",
          "RICKY",
          "TROY",
          "RANDALL",
          "BARRY",
          "ALEXANDER",
          "BERNARD",
          "MARIO",
          "LEROY",
          "FRANCISCO",
          "MARCUS",
          "MICHEAL",
          "THEODORE",
          "CLIFFORD",
          "MIGUEL",
          "OSCAR",
          "JAY",
          "JIM",
          "TOM",
          "CALVIN",
          "ALEX",
          "JON",
          "RONNIE",
          "BILL",
          "LLOYD",
          "TOMMY",
          "LEON",
          "DEREK",
          "WARREN",
          "DARRELL",
          "JEROME",
          "FLOYD",
          "LEO",
          "ALVIN",
          "TIM",
          "WESLEY",
          "GORDON",
          "DEAN",
          "GREG",
          "JORGE",
          "DUSTIN",
          "PEDRO",
          "DERRICK",
          "DAN",
          "LEWIS",
          "ZACHARY",
          "COREY",
          "HERMAN",
          "MAURICE",
          "VERNON",
          "ROBERTO",
          "CLYDE",
          "GLEN",
          "HECTOR",
          "SHANE",
          "RICARDO",
          "SAM",
          "RICK",
          "LESTER",
          "BRENT",
          "RAMON",
          "CHARLIE",
          "TYLER",
          "GILBERT",
          "GENE",
          "MARC",
          "REGINALD",
          "RUBEN",
          "BRETT",
          "ANGEL",
          "NATHANIEL",
          "RAFAEL",
          "LESLIE",
          "EDGAR",
          "MILTON",
          "RAUL",
          "BEN",
          "CHESTER",
          "CECIL",
          "DUANE",
          "FRANKLIN",
          "ANDRE",
          "ELMER",
          "BRAD",
          "GABRIEL",
          "RON",
          "MITCHELL",
          "ROLAND",
          "ARNOLD",
          "HARVEY",
          "JARED",
          "ADRIAN",
          "KARL",
          "CORY",
          "CLAUDE",
          "ERIK",
          "DARRYL",
          "JAMIE",
          "NEIL",
          "JESSIE",
          "CHRISTIAN",
          "JAVIER",
          "FERNANDO",
          "CLINTON",
          "TED",
          "MATHEW",
          "TYRONE",
          "DARREN",
          "LONNIE",
          "LANCE",
          "CODY",
          "JULIO",
          "KELLY",
          "KURT",
          "ALLAN",
          "NELSON",
          "GUY",
          "CLAYTON",
          "HUGH",
          "MAX",
          "DWAYNE",
          "DWIGHT",
          "ARMANDO",
          "FELIX",
          "JIMMIE",
          "EVERETT",
          "JORDAN",
          "IAN",
          "WALLACE",
          "KEN",
          "BOB",
          "JAIME",
          "CASEY",
          "ALFREDO",
          "ALBERTO",
          "DAVE",
          "IVAN",
          "JOHNNIE",
          "SIDNEY",
          "BYRON",
          "JULIAN",
          "ISAAC",
          "MORRIS",
          "CLIFTON",
          "WILLARD",
          "DARYL",
          "ROSS",
          "VIRGIL",
          "ANDY",
          "MARSHALL",
          "SALVADOR",
          "PERRY",
          "KIRK",
          "SERGIO",
          "MARION",
          "TRACY",
          "SETH",
          "KENT",
          "TERRANCE",
          "RENE",
          "EDUARDO",
          "TERRENCE",
          "ENRIQUE",
          "FREDDIE",
          "WADE",
          "MARY",
          "PATRICIA",
          "LINDA",
          "BARBARA",
          "ELIZABETH",
          "JENNIFER",
          "MARIA",
          "SUSAN",
          "MARGARET",
          "DOROTHY",
          "LISA",
          "NANCY",
          "KAREN",
          "BETTY",
          "HELEN",
          "SANDRA",
          "DONNA",
          "CAROL",
          "RUTH",
          "SHARON",
          "MICHELLE",
          "LAURA",
          "SARAH",
          "KIMBERLY",
          "DEBORAH",
          "JESSICA",
          "SHIRLEY",
          "CYNTHIA",
          "ANGELA",
          "MELISSA",
          "BRENDA",
          "AMY",
          "ANNA",
          "REBECCA",
          "VIRGINIA",
          "KATHLEEN",
          "PAMELA",
          "MARTHA",
          "DEBRA",
          "AMANDA",
          "STEPHANIE",
          "CAROLYN",
          "CHRISTINE",
          "MARIE",
          "JANET",
          "CATHERINE",
          "FRANCES",
          "ANN",
          "JOYCE",
          "DIANE",
          "ALICE",
          "JULIE",
          "HEATHER",
          "TERESA",
          "DORIS",
          "GLORIA",
          "EVELYN",
          "JEAN",
          "CHERYL",
          "MILDRED",
          "KATHERINE",
          "JOAN",
          "ASHLEY",
          "JUDITH",
          "ROSE",
          "JANICE",
          "KELLY",
          "NICOLE",
          "JUDY",
          "CHRISTINA",
          "KATHY",
          "THERESA",
          "BEVERLY",
          "DENISE",
          "TAMMY",
          "IRENE",
          "JANE",
          "LORI",
          "RACHEL",
          "MARILYN",
          "ANDREA",
          "KATHRYN",
          "LOUISE",
          "SARA",
          "ANNE",
          "JACQUELINE",
          "WANDA",
          "BONNIE",
          "JULIA",
          "RUBY",
          "LOIS",
          "TINA",
          "PHYLLIS",
          "NORMA",
          "PAULA",
          "DIANA",
          "ANNIE",
          "LILLIAN",
          "EMILY",
          "ROBIN",
          "PEGGY",
          "CRYSTAL",
          "GLADYS",
          "RITA",
          "DAWN",
          "CONNIE",
          "FLORENCE",
          "TRACY",
          "EDNA",
          "TIFFANY",
          "CARMEN",
          "ROSA",
          "CINDY",
          "GRACE",
          "WENDY",
          "VICTORIA",
          "EDITH",
          "KIM",
          "SHERRY",
          "SYLVIA",
          "JOSEPHINE",
          "THELMA",
          "SHANNON",
          "SHEILA",
          "ETHEL",
          "ELLEN",
          "ELAINE",
          "MARJORIE",
          "CARRIE",
          "CHARLOTTE",
          "MONICA",
          "ESTHER",
          "PAULINE",
          "EMMA",
          "JUANITA",
          "ANITA",
          "RHONDA",
          "HAZEL",
          "AMBER",
          "EVA",
          "DEBBIE",
          "APRIL",
          "LESLIE",
          "CLARA",
          "LUCILLE",
          "JAMIE",
          "JOANNE",
          "ELEANOR",
          "VALERIE",
          "DANIELLE",
          "MEGAN",
          "ALICIA",
          "SUZANNE",
          "MICHELE",
          "GAIL",
          "BERTHA",
          "DARLENE",
          "VERONICA",
          "JILL",
          "ERIN",
          "GERALDINE",
          "LAUREN",
          "CATHY",
          "JOANN",
          "LORRAINE",
          "LYNN",
          "SALLY",
          "REGINA",
          "ERICA",
          "BEATRICE",
          "DOLORES",
          "BERNICE",
          "AUDREY",
          "YVONNE",
          "ANNETTE",
          "JUNE",
          "SAMANTHA",
          "MARION",
          "DANA",
          "STACY",
          "ANA",
          "RENEE",
          "IDA",
          "VIVIAN",
          "ROBERTA",
          "HOLLY",
          "BRITTANY",
          "MELANIE",
          "LORETTA",
          "YOLANDA",
          "JEANETTE",
          "LAURIE",
          "KATIE",
          "KRISTEN",
          "VANESSA",
          "ALMA",
          "SUE",
          "ELSIE",
          "BETH",
          "JEANNE",
          "VICKI",
          "CARLA",
          "TARA",
          "ROSEMARY",
          "EILEEN",
          "TERRI",
          "GERTRUDE",
          "LUCY",
          "TONYA",
          "ELLA",
          "STACEY",
          "WILMA",
          "GINA",
          "KRISTIN",
          "JESSIE",
          "NATALIE",
          "AGNES",
          "VERA",
          "WILLIE",
          "CHARLENE",
          "BESSIE",
          "DELORES",
          "MELINDA",
          "PEARL",
          "ARLENE",
          "MAUREEN",
          "COLLEEN",
          "ALLISON",
          "TAMARA",
          "JOY",
          "GEORGIA",
          "CONSTANCE",
          "LILLIE",
          "CLAUDIA",
          "JACKIE",
          "MARCIA",
          "TANYA",
          "NELLIE",
          "MINNIE",
          "MARLENE",
          "HEIDI",
          "GLENDA",
          "LYDIA",
          "VIOLA",
          "COURTNEY",
          "MARIAN",
          "STELLA",
          "CAROLINE",
          "DORA",
          "JO",
          "VICKIE",
          "MATTIE",
          "TERRY",
          "MAXINE",
          "IRMA",
          "MABEL",
          "MARSHA",
          "MYRTLE",
          "LENA",
          "CHRISTY",
          "DEANNA",
          "PATSY",
          "HILDA",
          "GWENDOLYN",
          "JENNIE",
          "NORA",
          "MARGIE",
          "NINA",
          "CASSANDRA",
          "LEAH",
          "PENNY",
          "KAY",
          "PRISCILLA",
          "NAOMI",
          "CAROLE",
          "BRANDY",
          "OLGA",
          "BILLIE",
          "DIANNE",
          "TRACEY",
          "LEONA",
          "JENNY",
          "FELICIA",
          "SONIA",
          "MIRIAM",
          "VELMA",
          "BECKY",
          "BOBBIE",
          "VIOLET",
          "KRISTINA",
          "TONI",
          "MISTY",
          "MAE",
          "SHELLY",
          "DAISY",
          "RAMONA",
          "SHERRI",
          "ERIKA",
          "KATRINA",
          "CLAIRE"
        ];
        exports.names = names;

        /***/
      },

    /***/ "./src/processor.ts":
      /*!**************************!*\
  !*** ./src/processor.ts ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by Vincent Hennig on 30.05.17.
         */
        var Processor = /** @class */ (function() {
          function Processor(schedulingAlgorithm) {
            this.schedulingAlgorithm = schedulingAlgorithm;
            this.processes = [];
            this.swappingProcesses = [];
          }
          Processor.prototype.addProcesses = function(additions) {
            var _a;
            var special = additions.every(function(v) {
              return v.isSwappingProcess() || v.isRestoringProcess();
            });
            if (special) {
              (_a = this.swappingProcesses).push.apply(_a, additions);
              return;
            }
            if (!this.schedulingAlgorithm) {
              return;
            }
            this.schedulingAlgorithm.addProcesses(additions, this.processes);
          };
          Processor.prototype.calculationStep = function() {
            if (this.swappingProcesses.length > 0) {
              this.swappingProcesses[0].decreaseRemainingLength();
              return;
            }
            if (this.processes.length > 0) {
              this.processes[0].decreaseRemainingLength();
              // console.log("working on process " + this.processes[0].getName() + " ("+ this.processes[0].getRemainingLength() +"ms left)");
            }
          };
          Processor.prototype.getProcessList = function() {
            var _a;
            return (_a = this.swappingProcesses).concat.apply(
              _a,
              this.processes
            );
          };
          Processor.prototype.updateProcessList = function(timePassed) {
            if (!this.schedulingAlgorithm) {
              return;
            }
            if (this.swappingProcesses.length > 0) {
              return;
            }
            this.schedulingAlgorithm.updateProcessList(
              this.processes,
              timePassed
            );
          };
          Processor.prototype.removeFinishedProcesses = function(timePassed) {
            if (!this.schedulingAlgorithm) {
              return;
            }
            if (this.swappingProcesses.length > 0) {
              this.schedulingAlgorithm.handleFinishedProcesses(
                this.swappingProcesses,
                timePassed
              );
              return;
            }
            this.schedulingAlgorithm.handleFinishedProcesses(
              this.processes,
              timePassed
            );
          };
          Processor.prototype.handleRamShortage = function() {
            /*
         let p = this.processes.shift();
         this.processes.push(p);
         */
            if (!this.schedulingAlgorithm) {
              return;
            }
            this.schedulingAlgorithm.handleRamShortage(this.processes);
          };
          return Processor;
        })();
        exports.Processor = Processor;
        var Process = /** @class */ (function() {
          function Process(
            arrival,
            length,
            priority,
            name,
            memoryUsage,
            diskUsage
          ) {
            this.diskUsage = 0;
            this.listIndex = -1;
            this.hasMemory = false;
            this.finishedTime = -1;
            this.interruptCount = 0;
            this.rejectCount = 0;
            this.arrival = arrival;
            this.length = length;
            this.remainingLength = length;
            this.priority = priority;
            this.name = name;
            this.memoryUsage = memoryUsage;
            this.diskUsage = diskUsage;
          }
          Process.prototype.getPriority = function() {
            return this.priority;
          };
          Process.prototype.getArrival = function() {
            return this.arrival;
          };
          Process.prototype.getLength = function() {
            return this.length;
          };
          Process.prototype.getRemainingLength = function() {
            return this.remainingLength;
          };
          Process.prototype.decreaseRemainingLength = function() {
            this.remainingLength--;
          };
          Process.prototype.getName = function() {
            return this.name;
          };
          Process.prototype.resetRemainingLength = function() {
            this.remainingLength = this.length;
          };
          Process.prototype.setFinishedTime = function(time) {
            this.finishedTime = time;
          };
          Process.prototype.getFinishedTime = function() {
            return this.finishedTime;
          };
          Process.prototype.interrupt = function() {
            this.interruptCount++;
          };
          Process.prototype.getInterruptCount = function() {
            return this.interruptCount;
          };
          Process.prototype.resetInterruptCount = function() {
            this.interruptCount = 0;
          };
          Process.prototype.getMemoryUsage = function() {
            return this.memoryUsage;
          };
          Process.prototype.setHasMemory = function(b) {
            this.hasMemory = b;
          };
          Process.prototype.reject = function() {
            this.rejectCount++;
          };
          Process.prototype.getRejectCount = function() {
            return this.rejectCount;
          };
          Process.prototype.resetRejectCount = function() {
            this.rejectCount = 0;
          };
          Process.prototype.isSwappingProcess = function() {
            return this.name.indexOf("SWAPPING") !== -1;
          };
          Process.prototype.isRestoringProcess = function() {
            return this.name.indexOf("RESTORING") !== -1;
          };
          return Process;
        })();
        exports.Process = Process;

        /***/
      },

    /***/ "./src/saveLoad.ts":
      /*!*************************!*\
  !*** ./src/saveLoad.ts ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var factoryMethods_1 = __webpack_require__(
          /*! ./factoryMethods */ "./src/factoryMethods.ts"
        );
        var TypedLocalStorage_1 = __webpack_require__(
          /*! ./localStorage/TypedLocalStorage */ "./src/localStorage/TypedLocalStorage.ts"
        );
        var scheduling_1 = __webpack_require__(
          /*! ./scheduling */ "./src/scheduling.ts"
        );
        var saveLoadHelpers_1 = __webpack_require__(
          /*! ./util/saveLoadHelpers */ "./src/util/saveLoadHelpers.ts"
        );
        var typeHelpers_1 = __webpack_require__(
          /*! ./util/typeHelpers */ "./src/util/typeHelpers.ts"
        );
        function saveConfig() {
          var saveFile = createSaveFileJson();
          // colons (':') are not valid on windows
          var friendlyDate = new Date().toISOString().replace(/:/g, ".");
          var fileName = "scheduling_config_" + friendlyDate + ".json";
          saveToDisk(saveFile, fileName);
        }
        exports.saveConfig = saveConfig;
        /**
         * Saves the given content to disk named as fileName.
         * Based on https://stackoverflow.com/a/48918200
         * @param {string} content - the content of the file
         * @param {string} fileName - defaults to "scheduling_config.json"
         */
        function saveToDisk(content, fileName) {
          if (fileName === void 0) {
            fileName = "scheduling_config.json";
          }
          var workElement = document.createElement("a");
          if ("download" in workElement) {
            workElement.href =
              "data:" + "text/plain" + "charset=utf-8," + escape(content);
            workElement.setAttribute("download", fileName);
            document.body.appendChild(workElement);
            var eventMouse = document.createEvent("MouseEvents");
            eventMouse.initMouseEvent(
              "click",
              true,
              false,
              window,
              0,
              0,
              0,
              0,
              0,
              false,
              false,
              false,
              false,
              0,
              null
            );
            workElement.dispatchEvent(eventMouse);
            document.body.removeChild(workElement);
          } else {
            throw new Error("file saving not supported in this browser!");
          }
        }
        function loadConfig() {
          var fr = new FileReader();
          var savePlain = "";
          // extract Data;
          var x = document.getElementById("inputID").files[0];
          fr.onload = function(e) {
            savePlain = e.target.result;
            readSaveFileJson(savePlain);
          };
          fr.readAsText(x, "UTF-8");
        }
        exports.loadConfig = loadConfig;
        function createSaveFileJson() {
          var save = {
            disk: saveLoadHelpers_1.getDiskFields(),
            localStorage: saveLoadHelpers_1.getSerializedLocalStorage(),
            memory: saveLoadHelpers_1.getMemoryFields(),
            processes: saveLoadHelpers_1.getDefinedProcesses(),
            processor: saveLoadHelpers_1.getProcessorFields(),
            swapping: saveLoadHelpers_1.getSwappingFields(),
            version: 1
          };
          return JSON.stringify(save);
        }
        function readSaveFileJson(saveJsonText) {
          var save = JSON.parse(saveJsonText);
          switch (save.version) {
            case 0:
              handleSaveVersion0(save);
              break;
            case 1:
              handleSaveVersion1(save);
              break;
          }
        }
        function malformedSave(key, name, expected, actual) {
          throw new Error(
            "Save is malformed! For key '" +
              key +
              "' and algorithm '" +
              name +
              "' type '" +
              expected +
              "' was expected but we got '" +
              actual +
              "'"
          );
        }
        function handleSaveVersion0(save) {
          var processes = save.processes,
            processor = save.processor,
            memory = save.memory,
            disk = save.disk,
            localStorage = save.localStorage;
          restoreProcesses(processes);
          restoreProcessor(processor);
          restoreMemory(memory);
          restoreDisk(disk);
          restoreLocalStorage(localStorage);
        }
        function handleSaveVersion1(save) {
          var processes = save.processes,
            processor = save.processor,
            memory = save.memory,
            disk = save.disk,
            localStorage = save.localStorage,
            swapping = save.swapping;
          restoreProcesses(processes);
          restoreProcessor(processor);
          restoreMemory(memory);
          restoreDisk(disk);
          restoreLocalStorage(localStorage);
          restoreSwapping(swapping);
        }
        function restoreProcesses(processes) {
          if (processes) {
            // wipe current processes
            scheduling_1.clearListItems();
            var oldProcesses = scheduling_1.getProcessList();
            oldProcesses.splice(0, oldProcesses.length);
            // add processes from save
            processes.forEach(function(v) {
              return factoryMethods_1.createAndAddProcess(
                v.duration,
                v.arrival,
                v.priority,
                v.name,
                v.memoryUsage,
                v.diskUsage
              );
            });
          }
        }
        function restoreProcessor(processor) {
          if (processor) {
            var algo_1 = processor.algorithm;
            saveLoadHelpers_1.toggleProcessorExtra(algo_1.name);
            d3_selection_1
              .select("#schedulingAlgorithm")
              .selectAll("option")
              .attr("selected", function() {
                return this.value === algo_1.name ? "selected" : null;
              });
            if (algo_1.name === "sjn" || algo_1.name === "priority") {
              if (!typeHelpers_1.requireBoolean(algo_1.extra)) {
                malformedSave(
                  "processor.algorithm.extra",
                  algo_1.name,
                  "boolean",
                  typeof algo_1.extra
                );
              }
              var interrupt = algo_1.extra;
              d3_selection_1
                .select("#interruptCheckBox")
                .attr("checked", interrupt);
            }
            if (algo_1.name === "rr") {
              if (!typeHelpers_1.requireNumber(algo_1.extra)) {
                malformedSave(
                  "processor.algorithm.extra",
                  algo_1.name,
                  "number",
                  typeof algo_1.extra
                );
              }
              var q = algo_1.extra;
              d3_selection_1.select("#quantum").attr("value", q);
            }
          }
        }
        function restoreMemory(memory) {
          if (memory) {
            var algo_2 = memory.algorithm;
            saveLoadHelpers_1.toggleMemoryExtra(algo_2.name);
            d3_selection_1
              .select("#memoryAlgorithm")
              .selectAll("option")
              .attr("selected", function() {
                return this.value === algo_2.name ? "selected" : null;
              });
            if (algo_2.name === "Buddy System") {
              if (typeof algo_2.extra === "undefined") {
                malformedSave(
                  "memory.algorithm.extra",
                  algo_2.name,
                  "BuddySystemExtra",
                  "undefined"
                );
              }
              var extra = algo_2.extra;
              d3_selection_1
                .select("#buddyOverstep")
                .attr("checked", extra.canOverstep);
              d3_selection_1
                .select("#buddyMinSize")
                .attr("value", extra.minSize);
            }
          }
        }
        function restoreDisk(disk) {
          if (disk) {
            var algo_3 = disk.algorithm;
            saveLoadHelpers_1.toggleDiskExtra(algo_3.name);
            d3_selection_1
              .select("#diskAllocAlgorithm")
              .selectAll("option")
              .attr("selected", function() {
                return this.value === algo_3.name ? "selected" : null;
              });
          }
        }
        function restoreLocalStorage(localStorage) {
          if (localStorage) {
            for (var key in localStorage) {
              if (localStorage.hasOwnProperty(key)) {
                TypedLocalStorage_1.setItem(key, JSON.parse(localStorage[key]));
              }
            }
          }
        }
        function restoreSwapping(swapping) {
          if (swapping) {
            var algo_4 = swapping.algorithm;
            saveLoadHelpers_1.toggleSwappingExtra(algo_4.name);
            d3_selection_1
              .select("#swappingStrategy")
              .selectAll("option")
              .attr("selected", function() {
                return this.value === algo_4.name ? "selected" : null;
              });
          }
        }

        /***/
      },

    /***/ "./src/scheduling.ts":
      /*!***************************!*\
  !*** ./src/scheduling.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by Vincent Hennig on 30.05.17.
         */
        var d3_ease_1 = __webpack_require__(
          /*! d3-ease */ "./node_modules/d3-ease/index.js"
        );
        var d3_scale_1 = __webpack_require__(
          /*! d3-scale */ "./node_modules/d3-scale/index.js"
        );
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        __webpack_require__(
          /*! d3-transition */ "./node_modules/d3-transition/index.js"
        );
        var diskModels_1 = __webpack_require__(
          /*! ./diskModels */ "./src/diskModels.ts"
        );
        var pieChart = __webpack_require__(
          /*! ./diskSpaceAnimations */ "./src/diskSpaceAnimations.ts"
        );
        var factoryMethods_1 = __webpack_require__(
          /*! ./factoryMethods */ "./src/factoryMethods.ts"
        );
        var helpers_1 = __webpack_require__(
          /*! ./localStorage/helpers */ "./src/localStorage/helpers.ts"
        );
        var keys_1 = __webpack_require__(
          /*! ./localStorage/keys */ "./src/localStorage/keys.ts"
        );
        __webpack_require__(
          /*! ./localStorage/setupDefaults */ "./src/localStorage/setupDefaults.ts"
        );
        var memoryAnimations_1 = __webpack_require__(
          /*! ./memoryAnimations */ "./src/memoryAnimations.ts"
        );
        var memoryController_1 = __webpack_require__(
          /*! ./memoryController */ "./src/memoryController.ts"
        );
        var names_1 = __webpack_require__(/*! ./names */ "./src/names.ts");
        var processor_1 = __webpack_require__(
          /*! ./processor */ "./src/processor.ts"
        );
        var saveLoad_1 = __webpack_require__(
          /*! ./saveLoad */ "./src/saveLoad.ts"
        );
        var diskStatistics_1 = __webpack_require__(
          /*! ./statistics/diskStatistics */ "./src/statistics/diskStatistics.ts"
        );
        var memoryStatistics_1 = __webpack_require__(
          /*! ./statistics/memoryStatistics */ "./src/statistics/memoryStatistics.ts"
        );
        var processorStatistics_1 = __webpack_require__(
          /*! ./statistics/processorStatistics */ "./src/statistics/processorStatistics.ts"
        );
        var memoryManager = __webpack_require__(
          /*! ./swapping */ "./src/swapping/index.ts"
        );
        var swapping_1 = __webpack_require__(
          /*! ./swapping */ "./src/swapping/index.ts"
        );
        var mathHelper_1 = __webpack_require__(
          /*! ./util/mathHelper */ "./src/util/mathHelper.ts"
        );
        var processHelpers_1 = __webpack_require__(
          /*! ./util/processHelpers */ "./src/util/processHelpers.ts"
        );
        var n = 0;
        var color = d3_scale_1.scaleOrdinal(d3_scale_1.schemeCategory20);
        var processList = [];
        var algorithm;
        var processor;
        var timePassed = 0;
        var index = 0;
        var simulationSpeed;
        var simulationTimeout;
        var transitionDuration;
        var simulationPaused = false;
        var simulationStopped = true;
        var simulationStepRunning = false;
        var nextSimulationFunction;
        var memory;
        var memoryAlgorithm;
        var disk;
        var diskSpaceAllocationAlgorithm;
        // adding listeners to html
        d3_selection_1.select("#processForm").on("submit", function() {
          d3_selection_1.event.preventDefault();
          addProcess();
          return false;
        });
        d3_selection_1.select("#openProcessFormBtn").on("click", function() {
          toggleProcessForm();
        });
        d3_selection_1.select("#startSimulation").on("click", function() {
          if (simulationStopped) {
            startSimulation();
          } else if (simulationPaused) {
            resumeSimulation();
            console.log("resuming simulation");
          }
        });
        d3_selection_1.select("#pauseSimulation").on("click", function() {
          if (!simulationStopped && !simulationPaused) {
            pauseSimulation();
            console.log("pausing simulation");
          }
        });
        d3_selection_1.select("#stopSimulation").on("click", function() {
          if (!simulationStopped) {
            stopSimulation();
            console.log("stopping simulation");
          }
        });
        d3_selection_1.select("#animationSpeed").on("change", function() {
          var value = parseInt(this.value, 10);
          setSimulationSpeed(value);
        });
        d3_selection_1.select("#schedulingAlgorithm").on("change", function() {
          var value = this.value;
          if (value === "rr") {
            d3_selection_1
              .select("#rrQuantumContainer")
              .style("opacity", 0)
              .style("display", "flex")
              .transition()
              .style("opacity", 1);
          } else {
            d3_selection_1
              .select("#rrQuantumContainer")
              .style("display", "none");
          }
          if (value === "priority" || value === "sjn") {
            d3_selection_1
              .select("#interruptCheckBoxContainer")
              .style("opacity", 0)
              .style("display", "flex")
              .transition()
              .style("opacity", 1);
          } else {
            d3_selection_1
              .select("#interruptCheckBoxContainer")
              .style("display", "none");
          }
        });
        /*
 Use if mem-algorithms need additional choices
 */
        d3_selection_1.select("#memoryAlgorithm").on("change", function() {
          var value = this.value;
          if (value === "Buddy System") {
            d3_selection_1
              .select("#buddyContainer")
              .style("opacity", 0)
              .style("display", "flex")
              .transition()
              .style("opacity", 1);
          } else {
            d3_selection_1.select("#buddyContainer").style("display", "none");
          }
          memoryAnimations_1.updateMemoryAnimator();
        });
        d3_selection_1
          .select("#addRandomProcesses")
          .on("click", addRandomProcesses);
        d3_selection_1.select("#saveButton").on("click", saveLoad_1.saveConfig);
        d3_selection_1.select("#loadButton").on("click", function() {
          console.log("#loadButton clicked");
          document.getElementById("inputID").click();
        });
        d3_selection_1.select("#inputID").on("change", function() {
          saveLoad_1.loadConfig();
          console.log("loadconfig");
        });
        /*
select("#plottedStat").selectAll("option").data(statNames).enter().append("option").text(function(d) {
    return d;
});*/
        d3_selection_1.select("#settingsButton").on("click", function() {
          window.location.href = "/settings.html";
        });
        // showing and hiding elements
        if (document.getElementById("schedulingAlgorithm").value === "rr") {
          document.getElementById("rrQuantumContainer").style.display = "flex";
        }
        if (
          document.getElementById("schedulingAlgorithm").value === "priority"
        ) {
          document.getElementById("interruptCheckBoxContainer").style.display =
            "flex";
        }
        if (
          document.getElementById("memoryAlgorithm").value === "Buddy System"
        ) {
          document.getElementById("buddyContainer").style.display = "flex";
        }
        // hide swapping strategy selection if disabled
        var swappingEnabled = helpers_1.get(
          keys_1.LocalStorageKeys.SWAPPING_ENABLED
        );
        if (!swappingEnabled) {
          d3_selection_1
            .select("#swappingStrategyContainer")
            .style("display", "none");
        }
        function addProcess() {
          if (!simulationStopped) {
            return;
          }
          n++;
          var duration = parseInt(
            document.getElementById("duration").value,
            10
          );
          var arrival = parseInt(document.getElementById("arrival").value, 10);
          var priority = parseInt(
            document.getElementById("priority").value,
            10
          );
          var name = generateRandomName();
          var memoryUsage = parseInt(
            document.getElementById("memoryUsage").value,
            10
          );
          var diskUsage = document.getElementById("diskUsage").valueAsNumber;
          factoryMethods_1.createAndAddProcess(
            duration,
            arrival,
            priority,
            name,
            memoryUsage,
            diskUsage
          );
        }
        function addRandomProcesses() {
          if (!simulationStopped) {
            return;
          }
          for (var i = 0; i < 10; i++) {
            var duration = mathHelper_1.randomInt(1, 11);
            var arrival = mathHelper_1.randomInt(0, 11);
            var priority = mathHelper_1.randomInt(1, 11);
            var name_1 = generateRandomName();
            var memoryUsage = generateRandomMemory();
            var diskUsage = mathHelper_1.randomInt(1, 51);
            factoryMethods_1.createAndAddProcess(
              duration,
              arrival,
              priority,
              name_1,
              memoryUsage,
              diskUsage
            );
          }
        }
        function addProcessVisually(p) {
          d3_selection_1
            .select(".list-group")
            .append("a")
            .attr("id", p.getName())
            .attr("href", "#")
            .on("click", removeProcess)
            .classed("list-group-item process-list-item", true)
            .html(getListItemHTML(p))
            .style("opacity", 0)
            .transition()
            .duration(400)
            .style("opacity", 1);
          d3_selection_1.select(".list-group").transition();
        }
        exports.addProcessVisually = addProcessVisually;
        function generateRandomName() {
          var name =
            names_1.names[Math.floor(Math.random() * names_1.names.length)];
          while (
            processList.filter(function(p) {
              return p.getName() === name;
            }).length !== 0
          ) {
            name += Math.floor(Math.random() * 10);
          }
          return name;
        }
        /*
    Generates random memoryneeds for random generated processes.
 */
        function generateRandomMemory() {
          var min = 1;
          var max = 51; // 201
          // var rand = Math.random() * ((min - max)+1) + min; //wert aus [min, max[
          return mathHelper_1.randomInt(min, max); // wert aus [min, max[
        }
        function removeProcess() {
          if (!simulationStopped) {
            return;
          }
          var elem = d3_selection_1.select(this);
          var name = elem.attr("id");
          for (var i = 0; i < processList.length; i++) {
            if (processList[i].getName() === name) {
              processList.splice(i, 1);
              break;
            }
          }
          elem
            .transition()
            .style("opacity", 0)
            .duration(100)
            .remove();
        }
        function toggleProcessForm() {
          d3_selection_1.select("#processForm").classed("hidden", function() {
            return !d3_selection_1.select(this).classed("hidden");
          });
          d3_selection_1
            .select("#processList")
            .classed("shortened", function() {
              return !d3_selection_1.select(this).classed("shortened");
            });
          d3_selection_1
            .select("#openProcessFormBtn")
            .selectAll("span")
            .classed("hidden", function() {
              return !d3_selection_1.select(this).classed("hidden");
            });
        }
        function startSimulation() {
          simulationStopped = false;
          algorithm = factoryMethods_1.createSchedulingAlgorithm();
          memoryAlgorithm = factoryMethods_1.createMemoryAlgorithm();
          diskSpaceAllocationAlgorithm = factoryMethods_1.createDiskSpaceAllocationAlgorithm();
          processor = new processor_1.Processor(algorithm);
          memory = new memoryController_1.Memory(
            [],
            memoryAlgorithm,
            helpers_1.get(keys_1.LocalStorageKeys.MEMORY_SIZE)
          );
          memory.initMemory();
          disk = new diskModels_1.Disk(
            "demo",
            diskSpaceAllocationAlgorithm,
            null,
            helpers_1.get(keys_1.LocalStorageKeys.DISK_SIZE),
            helpers_1.get(keys_1.LocalStorageKeys.DISK_SIZE_PER_BLOCK)
          );
          disk.initDisk();
          memoryManager.init(memory, disk);
          processList.sort(function(a, b) {
            return a.getArrival() - b.getArrival();
          });
          clearListItems();
          processorStatistics_1.clearStats();
          memoryStatistics_1.clearMemStats();
          diskStatistics_1.clearDiskStats();
          startSimulationStep();
        }
        function resumeSimulation() {
          simulationPaused = false;
          nextSimulationFunction();
        }
        function pauseSimulation() {
          simulationPaused = true;
        }
        function stopSimulation() {
          simulationStopped = true;
          if (!simulationStepRunning) {
            window.clearTimeout(simulationTimeout);
            resetVisualization();
          }
        }
        function resetVisualization() {
          simulationStepRunning = false;
          simulationPaused = false;
          clearListItems();
          processList.forEach(function(p, i) {
            p.resetRemainingLength();
            p.listIndex = i;
            p.resetInterruptCount();
            p.hasMemory = false;
          });
          processList.forEach(addProcessVisually);
          timePassed = 0;
          index = 0;
          memoryManager.reset();
        }
        function setSimulationSpeed(value) {
          simulationSpeed = 2000 - (value * 1980) / 100;
          transitionDuration = simulationSpeed / 4;
          pieChart.setTransitionDuration(transitionDuration);
        }
        function startSimulationStep() {
          if (simulationStepRunning) {
            console.log("step skipped");
            return;
          }
          simulationStepRunning = true;
          // console.log("updatingStats " + timePassed);
          processorStatistics_1.updateStats(timePassed, processList);
          processorStatistics_1.drawStats();
          memoryStatistics_1.updateMemStats(timePassed, processList);
          memoryStatistics_1.drawMemStats();
          diskStatistics_1.updateDiskStats(timePassed, processList, disk);
          diskStatistics_1.drawDiskStats();
          if (
            simulationStopped ||
            (index === processList.length &&
              processor.getProcessList().length === 0)
          ) {
            // simulation is done or stopped by user
            simulationStepRunning = false;
            stopSimulation();
          } else {
            // update the order of active processes
            simulateListReorder();
          }
        }
        function simulateListReorder() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          processor.updateProcessList(timePassed);
          animateListReorder();
        }
        function animateListReorder() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var currentProcesses = processor.getProcessList();
          var listItems = d3_selection_1
            .select("#simulatedProcesses")
            .selectAll("a")
            .data(currentProcesses, function(p) {
              return p.getName();
            });
          var reorder = false;
          var nextFunctionCalled = false;
          if (algorithm.getName() === "rr") {
            // reorder list items on screen based on their position in the list
            listItems.each(function(d, i) {
              if (d.listIndex !== undefined && d.listIndex < i) {
                reorder = true;
                d3_selection_1
                  .select(this)
                  .transition()
                  .style("left", "-100px")
                  .style("opacity", 0)
                  .duration(transitionDuration)
                  .remove()
                  .on("end", function() {
                    if (!nextFunctionCalled) {
                      nextFunctionCalled = true;
                      if (simulationPaused) {
                        nextSimulationFunction = simulateNewProcesses;
                        console.log("paused at simulateNewProcesses");
                      } else {
                        simulateNewProcesses();
                      }
                    }
                  });
              }
              d.listIndex = i;
            });
          }
          if (!reorder) {
            simulateNewProcesses();
          }
        }
        function simulateNewProcesses() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          // add all processes that are arriving now
          var additions = [];
          while (
            processList[index] &&
            processList[index].getArrival() === timePassed
          ) {
            additions.push(processList[index]);
            index++;
          }
          processor.addProcesses(additions);
          animateNewProcesses();
        }
        function animateNewProcesses() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var nextFunctionCalled = false;
          _animateNewProcesses(
            function() {
              if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if (simulationPaused) {
                  nextSimulationFunction = simulateProgress;
                  console.log("paused at simulateProgress");
                } else {
                  simulateProgress();
                }
              }
            },
            function() {
              return simulateProgress();
            }
          );
        }
        function _animateNewProcesses(onEnterEnd, onEnterEmpty) {
          if (onEnterEnd === void 0) {
            onEnterEnd = function() {};
          }
          if (onEnterEmpty === void 0) {
            onEnterEmpty = function() {};
          }
          var currentProcesses = processor.getProcessList();
          var listItems = d3_selection_1
            .select(".list-group")
            .selectAll("a")
            .data(currentProcesses, function(p) {
              return p.getName();
            });
          listItems
            .enter()
            .append("a")
            .attr("href", "#")
            .attr("id", function(p) {
              return p.getName();
            })
            .on("click", removeProcess)
            .classed("list-group-item process-list-item", true)
            .html(getListItemHTML)
            .style("opacity", 0)
            .style("left", "-100px")
            .transition()
            .duration(transitionDuration)
            .style("opacity", 1)
            .style("left", "0px")
            .on("end", function() {
              onEnterEnd();
            });
          if (listItems.enter().empty()) {
            onEnterEmpty();
          }
        }
        function simulateProgress() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var process = processor.getProcessList()[0];
          /*
        if (process != null && !process.hasMemory) {
            animateMemoryAllocation(process, memory, color, "pre");
            const x = memory.addProcess(process);
            if (x) {
                process.setHasMemory(true);
                animateMemoryAllocation(process, memory, color, "post");

                processor.calculationStep();
                timePassed++;
                animateProgress();
            } else {
                simulateRamShortage();
            }
        } else {
            processor.calculationStep();
            timePassed++;
            animateProgress();
        }

        // todo add condition for hasDiskSpace when added
        if (process != null) {
            pieChart.animateDiskSpaceAllocation(process, disk, color, "pre");
            const added = disk.allocateSpace(process);
            if (added) {
                pieChart.animateDiskSpaceAllocation(process, disk, color, "post");
            }
        }
    */
          if (process) {
            var _a = memoryManager.addProcess(process, color),
              status_1 = _a.status,
              swapTargets = _a.swapTargets;
            if (memoryManager.isFailure(status_1)) {
              simulateRamShortage(); // todo: no calculationStep intentional in case of ram shortage?
              return;
            }
            if (swapTargets.length > 0) {
              var added = false;
              if (status_1 === swapping_1.Success.NEED_SWAP_OTHERS) {
                var toSwappingProcess = processHelpers_1.swappingProcess(
                  timePassed
                );
                processor.addProcesses(swapTargets.map(toSwappingProcess));
                added = true;
              }
              if (status_1 === swapping_1.Success.RETRIEVE_FROM_SWAP) {
                var toRestoreProcess = processHelpers_1.restoringProcess(
                  timePassed
                );
                processor.addProcesses(swapTargets.map(toRestoreProcess));
                added = true;
              }
              if (added) {
                _animateNewProcesses();
              }
            }
          }
          // TODO: Test new swapping system
          processor.calculationStep();
          timePassed++;
          animateProgress();
        }
        // reordes processor -> processlist
        function simulateRamShortage() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          processor.handleRamShortage();
          animateRamShortage();
        }
        // reorders rejected prozess and resumes with simulation
        function animateRamShortage() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var rejectedProcess = processor.getProcessList()[
            processor.getProcessList().length - 1
          ];
          var nextfunctioncalled = false;
          d3_selection_1
            .select("#simulatedProcesses")
            .select("a")
            .transition()
            .duration(transitionDuration)
            .style("border-color", "red")
            .transition()
            .duration(transitionDuration)
            .style("border-color", "#7aff63")
            .transition()
            .style("left", "-100px")
            .style("opacity", 0)
            .duration(transitionDuration)
            .remove()
            .on("end", function() {
              if (!nextfunctioncalled) {
                nextfunctioncalled = true;
                if (simulationPaused) {
                  simulationStepRunning = false;
                  nextSimulationFunction = startSimulationStep;
                  console.log("simulateProgress");
                } else {
                  simulationStepRunning = false;
                  startSimulationStep();
                }
              }
            });
        }
        function animateProgress() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var currentProcesses = processor.getProcessList();
          var listItems = d3_selection_1
            .select(".list-group")
            .selectAll("a")
            .data(currentProcesses, function(p) {
              return p.getName();
            });
          var nextFunctionCalled = false;
          listItems
            .select(".progress-bar")
            .transition()
            .duration(transitionDuration)
            .style("width", function(p) {
              return 100 * (1 - p.getRemainingLength() / p.getLength()) + "%";
            })
            .ease(d3_ease_1.easeLinear)
            .on("end", function() {
              if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if (simulationPaused) {
                  nextSimulationFunction = simulateFinishedProcess;
                  console.log("pausing at simulateFinishedProcess");
                } else {
                  simulateFinishedProcess();
                }
              }
            });
          listItems.select("#remainingLength").text(function(p) {
            return "Remaining Length: " + p.getRemainingLength() + "ms";
          });
          if (listItems.empty()) {
            simulateFinishedProcess();
          }
        }
        var count = 0;
        function simulateFinishedProcess() {
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var currentProcess = processor.getProcessList()[0];
          if (
            currentProcess != null &&
            currentProcess.getRemainingLength() <= 0
          ) {
            count++;
            memoryManager.removeProcess(currentProcess);
          }
          processor.removeFinishedProcesses(timePassed);
          animateFinishedProcess();
        }
        function animateFinishedProcess() {
          // --------------------------------
          // last function of simulation step
          // --------------------------------
          if (simulationStopped) {
            simulationStepRunning = false;
            stopSimulation();
            return;
          }
          var currentProcesses = processor.getProcessList();
          var listItems = d3_selection_1
            .select(".list-group")
            .selectAll("a")
            .data(currentProcesses, function(p) {
              return p.getName();
            });
          if (listItems.exit().empty()) {
            simulationStepRunning = false;
            simulationTimeout = window.setTimeout(startSimulationStep, 100);
          } else {
            listItems
              .exit()
              .transition()
              .style("left", "-100px")
              .style("opacity", 0)
              .duration(transitionDuration)
              .remove()
              .on("end", function() {
                simulationStepRunning = false;
                simulationTimeout = window.setTimeout(startSimulationStep, 100);
              });
          }
        }
        function clearListItems() {
          d3_selection_1
            .select(".list-group")
            .selectAll("a")
            .remove();
        }
        exports.clearListItems = clearListItems;
        function getListItemHTML(p) {
          var percentageDone =
            100 * (1 - p.getRemainingLength() / p.getLength());
          return (
            '\n<div class="progress progress-custom">\n    <div class="process-list-item-content">\n        <div class="row">\n            <div class="col-md-6">\n                <h5 class="list-group-item-heading">Process: ' +
            p.getName() +
            '</h5>\n                <p class="list-group-item-text">Priority: ' +
            p.getPriority() +
            '</p>\n            </div>\n            <div class="col-md-6">\n                <p class="list-group-item-text">Arrival: ' +
            p.getArrival() +
            'ms</p>\n                <p class="list-group-item-text" id="remainingLength">Remaining Length: ' +
            p.getRemainingLength() +
            'ms</p>\n                <p class="list-group-item-text" id="memoryUSage">Memory Usage: ' +
            p.getMemoryUsage() +
            'MB</p>\n                <p class="list-group-item-text">Disk Usage: ' +
            p.diskUsage +
            'MB</p>\n            </div>\n        </div>\n    </div>\n    <div class="progress-bar progress-bar-striped process-list-progress-bar" role="progressbar" style="width:' +
            percentageDone +
            "%; background-color:" +
            color(p.getName()) +
            '">\n    </div>\n</div>'
          );
        }
        function getProcessList() {
          return processList;
        }
        exports.getProcessList = getProcessList;
        /*
todolist

TODO ram gitter anzeigen bevor simulation gestartet wird. -> nicht so einfach wegen Buddy System
TODO ramblockgröße variable? -> Schon variable für Buddy System
TODO -> einheiten abschaffen weil sie eh sinnlos sind? (mb usw)

 */

        /***/
      },

    /***/ "./src/statistics/StatNames.ts":
      /*!*************************************!*\
  !*** ./src/statistics/StatNames.ts ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by vhenning on 03.08.17.
         */
        exports.statNames = [
          "avgWaitingTime",
          "totalWaitingTime",
          "totalInterruptions",
          "avgInterruptions",
          "longestWaitingTime",
          "longestLivingTime"
        ];
        exports.memStatNames = [
          "memoryUsage",
          "avgMemUsage(abs)",
          "maxMemoryUsage",
          "totalRejects",
          "avgRejects(%)"
        ];
        exports.diskStatNames = [
          "pureDiskUsage",
          "pureAvgDiskUsage(abs)",
          "pureMaxDiskUsage",
          "effectiveDiskUsage",
          "effectiveAvgDiskUsage(abs)",
          "effectiveMaxDiskUsage"
        ];

        /***/
      },

    /***/ "./src/statistics/StatisticsDrawer.ts":
      /*!********************************************!*\
  !*** ./src/statistics/StatisticsDrawer.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 08.04.18 12:58
 */
        var __assign =
          (this && this.__assign) ||
          Object.assign ||
          function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_array_1 = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        var d3_axis_1 = __webpack_require__(
          /*! d3-axis */ "./node_modules/d3-axis/index.js"
        );
        var d3_scale_1 = __webpack_require__(
          /*! d3-scale */ "./node_modules/d3-scale/index.js"
        );
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var d3_shape_1 = __webpack_require__(
          /*! d3-shape */ "./node_modules/d3-shape/index.js"
        );
        var getX = function(d) {
          return d.x;
        };
        var getY = function(d) {
          return d.y;
        };
        var index0 = function(d) {
          return d[0];
        };
        var index1 = function(d) {
          return d[1];
        };
        var StatisticsDrawer = /** @class */ (function() {
          function StatisticsDrawer(htmlId, statArray, options) {
            if (options === void 0) {
              options = {};
            }
            var _this = this;
            this.htmlId = htmlId;
            this.statArray = statArray;
            this.disabledStats = [];
            this.svgWidth = 0;
            this.svgHeight = 0;
            this.options = {
              margin: {
                bottom: 30,
                left: 50,
                right: 20,
                top: 20
              },
              maxX: 20,
              maxY: 30
            };
            this.domainX = [];
            this.domainY = [];
            this.colorScale = d3_scale_1.scaleOrdinal(
              d3_scale_1.schemeCategory20
            );
            this.getLineGen = function(d) {
              return _this.lineGenerator(d.coordinates);
            };
            this.options = __assign({}, this.options, options);
            var rect = document.getElementById(htmlId).getBoundingClientRect();
            var margin = this.options.margin;
            this.svgWidth = rect.width - margin.left - margin.right;
            this.svgHeight = rect.height - margin.top - margin.bottom;
            this.svg = d3_selection_1.select("#" + htmlId);
            this.drawingArea = this.svg
              .append("g")
              .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
              );
            this.xAxisGroup = this.drawingArea
              .append("g")
              .attr("transform", "translate(0," + this.svgHeight + ")")
              .attr("class", "x axis");
            this.yAxisGroup = this.drawingArea
              .append("g")
              .attr("class", "y axis");
            this.legendGroup = this.drawingArea
              .append("g")
              .attr("transform", "translate(10, 10)");
            this.pathGroup = this.drawingArea.append("g");
            this.lineGenerator = d3_shape_1
              .line()
              .x(function(d) {
                return _this.xScaler(d.x);
              })
              .y(function(d) {
                return _this.yScaler(d.y);
              });
            this.resetScales();
            this.initLegend();
          }
          StatisticsDrawer.prototype.draw = function() {
            var _this = this;
            var filteredStats = this.statArray.filter(function(s) {
              return _this.disabledStats.lastIndexOf(s.statName) === -1;
            });
            this.drawPath(filteredStats, this.getLineGen);
          };
          StatisticsDrawer.prototype.resetScales = function() {
            this.domainX = [0, this.options.maxX];
            this.domainY = [0, this.options.maxY];
            this.xScaler = d3_scale_1
              .scaleLinear()
              .rangeRound([0, this.svgWidth])
              .domain(this.domainX);
            this.yScaler = d3_scale_1
              .scaleLinear()
              .rangeRound([this.svgHeight, 0])
              .domain(this.domainY);
            this.xAxisGroup.call(this.newXAxis());
            this.yAxisGroup.call(this.newYAxis());
          };
          StatisticsDrawer.prototype.drawPath = function(
            stats,
            lineGenAccessor
          ) {
            var _this = this;
            var paths = this.pathGroup
              .selectAll("path")
              .data(stats, function(d) {
                return d.statName;
              });
            paths.exit().remove();
            paths = paths
              .enter()
              .append("path")
              .attr("fill", "none")
              .attr("stroke", function(d) {
                return _this.colorScale(d.statName);
              })
              .attr("stroke-linejoin", "round")
              .attr("stroke-width", 1.5)
              .merge(paths);
            // update paths
            paths.each(function() {
              d3_selection_1.select(this).attr("d", lineGenAccessor);
            });
            var newDomain = this.updateDomains(stats);
            var scaleChangedX = newDomain.updated.x;
            var scaleChangedY = newDomain.updated.y;
            // update if they domains were changed
            if (scaleChangedX || scaleChangedY) {
              if (scaleChangedX) {
                this.xScaler.domain(this.domainX);
                this.xAxisGroup
                  .transition()
                  .duration(100)
                  .call(this.newXAxis());
              }
              if (scaleChangedY) {
                this.yScaler.domain(this.domainY);
                this.yAxisGroup
                  .transition()
                  .duration(100)
                  .call(this.newYAxis());
              }
              // redraw paths
              paths.each(function() {
                d3_selection_1
                  .select(this)
                  .transition()
                  .duration(100)
                  .attr("d", lineGenAccessor);
              });
            }
          };
          StatisticsDrawer.prototype.updateDomains = function(stats) {
            var _a = extents(stats),
              xMax = _a[1],
              yMax = _a[3];
            var changedX = false;
            var changedY = false;
            // scale down if data range is significantly smaller than current domain
            if (
              (xMax * 1.5 < this.domainX[1] &&
                (xMax > this.options.maxX ||
                  this.domainX[1] > this.options.maxX)) ||
              (yMax * 1.5 < this.domainY[1] &&
                (yMax > this.options.maxY ||
                  this.domainY[1] > this.options.maxY))
            ) {
              // scale down x
              while (xMax * 1.5 < this.domainX[1]) {
                this.domainX[1] /= 1.5;
                changedX = true;
              }
              // scale down y
              while (yMax * 1.5 < this.domainY[1]) {
                this.domainY[1] /= 1.5;
                changedY = true;
              }
            } else if (xMax > this.domainX[1] || yMax > this.domainY[1]) {
              // data range is bigger than current domain
              // scale up x
              while (xMax > this.domainX[1]) {
                this.domainX[1] *= 1.5;
                changedX = true;
              }
              // scale up y
              while (yMax > this.domainY[1]) {
                this.domainY[1] *= 1.5;
                changedY = true;
              }
            }
            // New Domain cannot be smaller than the default domain
            if (changedX) {
              this.domainX[1] = Math.max(this.domainX[1], this.options.maxX);
            }
            if (changedY) {
              this.domainY[1] = Math.max(this.domainY[1], this.options.maxY);
            }
            return {
              updated: {
                x: changedX,
                y: changedY
              }
            };
          };
          StatisticsDrawer.prototype.initLegend = function() {
            var _this = this;
            var lineCount = -0.2;
            var lineHeight = 20;
            this.statArray
              .map(function(v) {
                return v.statName;
              })
              .forEach(function(s) {
                lineCount++;
                var g = _this.legendGroup
                  .append("g")
                  .on("click", createToggleCallback(_this))
                  .attr(
                    "transform",
                    "translate(10, " + lineCount * lineHeight + ")"
                  )
                  .style("cursor", "pointer");
                g.append("circle")
                  .attr("fill", _this.colorScale(s))
                  .attr("r", 5);
                g.append("text")
                  .text(s)
                  .attr("transform", "translate(10, " + lineHeight / 4 + ")");
              });
            // TODO testing
            this.legendGroup
              .insert("rect", "g")
              .attr("width", 200)
              .attr(
                "height",
                this.legendGroup.node().getBBox().height + lineHeight
              )
              .attr("class", "legend-box");
          };
          // creates new axis objects every time if necessary, so the numbers update properly
          StatisticsDrawer.prototype.newXAxis = function() {
            return d3_axis_1.axisBottom(this.xScaler);
          };
          StatisticsDrawer.prototype.newYAxis = function() {
            return d3_axis_1
              .axisLeft(this.yScaler)
              .ticks(10)
              .tickSize(-this.svgWidth);
          };
          return StatisticsDrawer;
        })();
        exports.StatisticsDrawer = StatisticsDrawer;
        function createToggleCallback(drawer) {
          return function() {
            var statName = d3_selection_1
              .select(this)
              .select("text")
              .text();
            var idx = drawer.disabledStats.lastIndexOf(statName);
            d3_selection_1.select(this).classed("faded", function() {
              return idx === -1;
            });
            if (idx !== -1) {
              drawer.disabledStats.splice(idx, 1);
            } else {
              drawer.disabledStats.push(statName);
            }
            drawer.draw();
          };
        }
        function extents(stats) {
          var xExtents = stats.map(function(stat) {
            return d3_array_1.extent(stat.coordinates, getX);
          });
          var yExtents = stats.map(function(stat) {
            return d3_array_1.extent(stat.coordinates, getY);
          });
          if (!xExtents || !yExtents) {
            throw new Error("Stats mapping not possible!");
          }
          var xExtent = [
            d3_array_1.min(xExtents, index0),
            d3_array_1.max(xExtents, index1)
          ];
          var yExtent = [
            d3_array_1.min(yExtents, index0),
            d3_array_1.max(yExtents, index1)
          ];
          return [xExtent[0], xExtent[1], yExtent[0], yExtent[1]];
        }

        /***/
      },

    /***/ "./src/statistics/diskStatistics.ts":
      /*!******************************************!*\
  !*** ./src/statistics/diskStatistics.ts ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 08.04.18 12:58
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
        var helpers_2 = __webpack_require__(
          /*! ./helpers */ "./src/statistics/helpers.ts"
        );
        var models_1 = __webpack_require__(
          /*! ./models */ "./src/statistics/models.ts"
        );
        var StatisticsDrawer_1 = __webpack_require__(
          /*! ./StatisticsDrawer */ "./src/statistics/StatisticsDrawer.ts"
        );
        var StatNames_1 = __webpack_require__(
          /*! ./StatNames */ "./src/statistics/StatNames.ts"
        );
        var pureDisk = new models_1.Stat(StatNames_1.diskStatNames[0]);
        var pureAvgDisk = new models_1.Stat(StatNames_1.diskStatNames[1]);
        var pureMaxDisk = new models_1.Stat(StatNames_1.diskStatNames[2]);
        var effectiveDisk = new models_1.Stat(StatNames_1.diskStatNames[3]);
        var effectiveAvgDisk = new models_1.Stat(StatNames_1.diskStatNames[4]);
        var effectiveMaxDisk = new models_1.Stat(StatNames_1.diskStatNames[5]);
        var diskStatArray = [
          pureDisk,
          pureAvgDisk,
          pureMaxDisk,
          effectiveDisk,
          effectiveAvgDisk,
          effectiveMaxDisk
        ];
        var drawer = new StatisticsDrawer_1.StatisticsDrawer(
          "diskStats",
          diskStatArray
        );
        function updateDiskStats(currentTime, processList, disk) {
          calculateDiskStats(currentTime, processList, disk);
          var add = helpers_2.addListEntryCurry(
            d3_selection_1.select("#statsList")
          );
          var diskSize = helpers_1.get(keys_1.LocalStorageKeys.DISK_SIZE);
          if (pureDisk.last) {
            add("pure disk usage: " + pureDisk.last.y + "/" + diskSize);
          }
          if (pureAvgDisk.last) {
            var value = ((pureAvgDisk.last.y / diskSize) * 100).toFixed(3);
            add("pure disk usage (avg.): " + value + "%");
          }
          if (pureMaxDisk.last) {
            add("pure disk usage (max.): " + pureMaxDisk.last.y);
          }
          if (effectiveDisk.last) {
            add(
              "effective disk usage: " + effectiveDisk.last.y + "/" + diskSize
            );
          }
          if (effectiveAvgDisk.last) {
            var value = ((effectiveAvgDisk.last.y / diskSize) * 100).toFixed(3);
            add("effective disk usage (avg.): " + value + "%");
          }
          if (effectiveMaxDisk.last) {
            add("effective disk usage (max.): " + effectiveMaxDisk.last.y);
          }
        }
        exports.updateDiskStats = updateDiskStats;
        function calculateDiskStats(currentTime, processList, disk) {
          var pureUsed = processList
            .filter(function(process) {
              return process.hasMemory;
            })
            .reduce(function(prev, curr) {
              return prev + curr.diskUsage;
            }, 0);
          helpers_2.addBaseAndMaxAndAvg(currentTime, pureUsed, [
            pureDisk,
            pureMaxDisk,
            pureAvgDisk
          ]);
          /* Effective stats */
          var effectiveUsed = disk
            .toPieData()
            .filter(function(v) {
              return v.owner !== "";
            })
            .reduce(function(prev, curr) {
              return prev + curr.size * disk.sizePerBlock;
            }, 0); // pieData's size refers to amount of blocks
          helpers_2.addBaseAndMaxAndAvg(currentTime, effectiveUsed, [
            effectiveDisk,
            effectiveMaxDisk,
            effectiveAvgDisk
          ]);
        }
        function clearDiskStats() {
          d3_selection_1.select("#statsList").html("");
          diskStatArray.forEach(function(stat) {
            return stat.clear();
          });
          drawer.resetScales();
        }
        exports.clearDiskStats = clearDiskStats;
        function drawDiskStats() {
          drawer.draw();
        }
        exports.drawDiskStats = drawDiskStats;

        /***/
      },

    /***/ "./src/statistics/helpers.ts":
      /*!***********************************!*\
  !*** ./src/statistics/helpers.ts ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 08.04.18 13:10
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_array_1 = __webpack_require__(
          /*! d3-array */ "./node_modules/d3-array/index.js"
        );
        var models_1 = __webpack_require__(
          /*! ./models */ "./src/statistics/models.ts"
        );
        function addListEntry(selector, text) {
          selector
            .append("li")
            .attr("class", "item")
            .text(text);
        }
        exports.addListEntry = addListEntry;
        function addListEntryCurry(selector) {
          return function(text) {
            addListEntry(selector, text);
          };
        }
        exports.addListEntryCurry = addListEntryCurry;
        function addBaseAndMaxAndAvg(currentTime, baseValue, stats) {
          stats[0].add(new models_1.Coordinate(currentTime, baseValue));
          var max = Math.max(
            baseValue,
            stats[1].last == null ? baseValue : stats[1].last.y
          );
          stats[1].add(new models_1.Coordinate(currentTime, max));
          var calculatedAvg = d3_array_1.mean(stats[0].coordinates, function(
            datum
          ) {
            return datum.y;
          });
          var avg = calculatedAvg ? calculatedAvg : 0;
          stats[2].add(new models_1.Coordinate(currentTime, avg));
        }
        exports.addBaseAndMaxAndAvg = addBaseAndMaxAndAvg;

        /***/
      },

    /***/ "./src/statistics/memoryStatistics.ts":
      /*!********************************************!*\
  !*** ./src/statistics/memoryStatistics.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        /**
         * Created by Joe on 16.01.18.
         */
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var helpers_1 = __webpack_require__(
          /*! ../localStorage/helpers */ "./src/localStorage/helpers.ts"
        );
        var keys_1 = __webpack_require__(
          /*! ../localStorage/keys */ "./src/localStorage/keys.ts"
        );
        var helpers_2 = __webpack_require__(
          /*! ./helpers */ "./src/statistics/helpers.ts"
        );
        var models_1 = __webpack_require__(
          /*! ./models */ "./src/statistics/models.ts"
        );
        var StatisticsDrawer_1 = __webpack_require__(
          /*! ./StatisticsDrawer */ "./src/statistics/StatisticsDrawer.ts"
        );
        var StatNames_1 = __webpack_require__(
          /*! ./StatNames */ "./src/statistics/StatNames.ts"
        );
        // vars------------------
        var memoryUsage = new models_1.Stat(StatNames_1.memStatNames[0]);
        var avgMemUsage = new models_1.Stat(StatNames_1.memStatNames[1]);
        var maxMemUsage = new models_1.Stat(StatNames_1.memStatNames[2]);
        var totalRejects = new models_1.Stat(StatNames_1.memStatNames[3]);
        var avgRejects = new models_1.Stat(StatNames_1.memStatNames[4]);
        var memStatArray = [
          memoryUsage,
          avgMemUsage,
          maxMemUsage,
          totalRejects,
          avgRejects
        ];
        var drawer = new StatisticsDrawer_1.StatisticsDrawer(
          "memStats",
          memStatArray
        );
        // ----------------------
        function updateMemStats(currentTime, processList) {
          calculateMemStats(currentTime, processList);
          var add = helpers_2.addListEntryCurry(
            d3_selection_1.select("#statsList")
          );
          var memorySize = helpers_1.get(keys_1.LocalStorageKeys.MEMORY_SIZE);
          if (memoryUsage.last) {
            add("memory usage: " + memoryUsage.last.y + "/" + memorySize);
          }
          if (avgMemUsage.last) {
            var value = ((avgMemUsage.last.y / memorySize) * 100).toFixed(3);
            add("memory usage (avg.): " + value + "%");
          }
          if (maxMemUsage.last) {
            add("memory usage (max.): " + maxMemUsage.last.y);
          }
          if (totalRejects.last) {
            add("rejections: " + totalRejects.last.y);
          }
          if (avgRejects.last) {
            add("rejections (avg.): " + avgRejects.last.y + "%");
          }
        }
        exports.updateMemStats = updateMemStats;
        /*
TODO: add the stats you want.
 */
        function calculateMemStats(currentTime, processList) {
          var usedMemory = 0;
          var rejectCount = 0;
          processList.forEach(function(currentProcess) {
            // Usage
            if (currentProcess.hasMemory) {
              usedMemory += currentProcess.memoryUsage;
            }
            // totalRejectsCount
            rejectCount += currentProcess.getRejectCount();
          });
          helpers_2.addBaseAndMaxAndAvg(currentTime, usedMemory, [
            memoryUsage,
            maxMemUsage,
            avgMemUsage
          ]);
          // totalRejects
          totalRejects.coordinates.push(
            new models_1.Coordinate(currentTime, rejectCount)
          );
          // avgRejects
          avgRejects.coordinates.push(
            new models_1.Coordinate(
              currentTime,
              (totalRejects.last.y / avgMemUsage.coordinates.length) * 100 || 0
            )
          );
        }
        function clearMemStats() {
          d3_selection_1.select("#statsList").html("");
          memStatArray.forEach(function(v) {
            return v.clear();
          });
          drawer.resetScales();
        }
        exports.clearMemStats = clearMemStats;
        function drawMemStats() {
          drawer.draw();
        }
        exports.drawMemStats = drawMemStats;

        /***/
      },

    /***/ "./src/statistics/models.ts":
      /*!**********************************!*\
  !*** ./src/statistics/models.ts ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 08.04.18 13:01
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var Coordinate = /** @class */ (function() {
          function Coordinate(x, y) {
            this.x = x;
            this.y = y;
          }
          return Coordinate;
        })();
        exports.Coordinate = Coordinate;
        var Stat = /** @class */ (function() {
          function Stat(statName) {
            this.statName = statName;
            this.coordinates = [];
          }
          Stat.prototype.clear = function() {
            this.coordinates = [];
          };
          Stat.prototype.add = function(coordinate) {
            this.coordinates.push(coordinate);
          };
          Object.defineProperty(Stat.prototype, "size", {
            get: function() {
              return this.coordinates.length;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(Stat.prototype, "last", {
            get: function() {
              if (this.size <= 0) {
                return undefined;
              }
              return this.coordinates[this.size - 1];
            },
            enumerable: true,
            configurable: true
          });
          return Stat;
        })();
        exports.Stat = Stat;

        /***/
      },

    /***/ "./src/statistics/processorStatistics.ts":
      /*!***********************************************!*\
  !*** ./src/statistics/processorStatistics.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /**
         * Created by Vincent Hennig on 13.07.17.
         */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var helpers_1 = __webpack_require__(
          /*! ./helpers */ "./src/statistics/helpers.ts"
        );
        var models_1 = __webpack_require__(
          /*! ./models */ "./src/statistics/models.ts"
        );
        var StatisticsDrawer_1 = __webpack_require__(
          /*! ./StatisticsDrawer */ "./src/statistics/StatisticsDrawer.ts"
        );
        var StatNames_1 = __webpack_require__(
          /*! ./StatNames */ "./src/statistics/StatNames.ts"
        );
        var avgWaitTime = new models_1.Stat(StatNames_1.statNames[0]);
        var totalWaitingTime = new models_1.Stat(StatNames_1.statNames[1]);
        var totalInterruptions = new models_1.Stat(StatNames_1.statNames[2]);
        var avgInterruptions = new models_1.Stat(StatNames_1.statNames[3]);
        var longestWaitingTime = new models_1.Stat(StatNames_1.statNames[4]);
        var longestLivingTime = new models_1.Stat(StatNames_1.statNames[5]);
        var avgProcessLength = 0;
        var longestWaitingProcess = "";
        var longestLivingProcess = "";
        var statArray = [
          avgWaitTime,
          totalWaitingTime,
          totalInterruptions,
          avgInterruptions,
          longestWaitingTime,
          longestLivingTime
        ];
        var drawer = new StatisticsDrawer_1.StatisticsDrawer(
          "stats",
          statArray
        );
        function updateStats(currentTime, processList) {
          calculateStats(currentTime, processList);
          var selector = d3_selection_1.select("#statsList");
          selector.html("");
          var add = helpers_1.addListEntryCurry(selector);
          add("calculation time (total): " + currentTime);
          add("process length (avg.): " + avgProcessLength);
          if (totalWaitingTime.last) {
            add("waiting time (total): " + totalWaitingTime.last.y);
          }
          if (avgWaitTime.last) {
            add("waiting time (avg.): " + avgWaitTime.last.y);
          }
          if (longestWaitingTime.last) {
            add(
              "longest waiting process: " +
                longestWaitingProcess +
                " with " +
                longestWaitingTime.last.y
            );
          }
          if (longestLivingTime.last) {
            add(
              "longest living time: " +
                longestLivingProcess +
                " with " +
                longestLivingTime.last.y
            );
          }
          if (totalInterruptions.last) {
            add("interruptions: " + totalInterruptions.last.y);
          }
          if (avgInterruptions.last) {
            add("interruptions (avg.): " + avgInterruptions.last.y);
          }
        }
        exports.updateStats = updateStats;
        function clearStats() {
          d3_selection_1.select("#statsList").html("");
          statArray.forEach(function(v) {
            return v.clear();
          });
          avgProcessLength = 0;
          longestWaitingProcess = "";
          longestLivingProcess = "";
          drawer.resetScales();
        }
        exports.clearStats = clearStats;
        function calculateStats(currentTime, processList) {
          var totalWait = 0;
          var totalInterrupt = 0;
          var longestWait = 0;
          var longestLiving = 0;
          var arrivedProcesses = 0;
          var totalProcessLength = 0;
          var currentWaitingTime = 0;
          var currentLivingTime = 0;
          processList.forEach(function(currentProcess) {
            totalProcessLength += currentProcess.getLength();
            if (currentProcess.getArrival() < currentTime) {
              arrivedProcesses++;
              if (currentProcess.getRemainingLength() > 0) {
                currentLivingTime = currentTime - currentProcess.getArrival();
              } else {
                currentLivingTime =
                  currentProcess.getFinishedTime() -
                  currentProcess.getArrival();
              }
              currentWaitingTime =
                currentLivingTime -
                (currentProcess.getLength() -
                  currentProcess.getRemainingLength());
              totalWait += currentWaitingTime;
              if (currentWaitingTime > longestWait) {
                longestWait = currentWaitingTime;
                longestWaitingProcess = currentProcess.getName();
              }
              if (currentLivingTime > longestLiving) {
                longestLiving = currentLivingTime;
                longestLivingProcess = currentProcess.getName();
              }
              totalInterrupt += currentProcess.getInterruptCount();
            }
          });
          totalWaitingTime.add(new models_1.Coordinate(currentTime, totalWait));
          avgWaitTime.add(
            new models_1.Coordinate(
              currentTime,
              totalWait / arrivedProcesses || 0
            )
          );
          totalInterruptions.add(
            new models_1.Coordinate(currentTime, totalInterrupt)
          );
          avgInterruptions.add(
            new models_1.Coordinate(
              currentTime,
              totalInterrupt / arrivedProcesses || 0
            )
          );
          longestWaitingTime.add(
            new models_1.Coordinate(currentTime, longestWait)
          );
          longestLivingTime.add(
            new models_1.Coordinate(currentTime, longestLiving)
          );
          avgProcessLength = totalProcessLength / processList.length;
        }
        function drawStats() {
          drawer.draw();
        }
        exports.drawStats = drawStats;

        /***/
      },

    /***/ "./src/swapping/SwappingStrategy.ts":
      /*!******************************************!*\
  !*** ./src/swapping/SwappingStrategy.ts ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 19.04.18 19:49
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_collection_1 = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var collectionHelpers_1 = __webpack_require__(
          /*! ../util/collectionHelpers */ "./src/util/collectionHelpers.ts"
        );
        var nonNullProcesses = function(memBlocks, p) {
          return memBlocks
            .map(function(v) {
              return v.getProcess();
            })
            .filter(function(v) {
              return v != null;
            })
            .filter(function(v) {
              return v !== p;
            });
        };
        var pickFirst = function(pList) {
          var p = pList.shift();
          return p ? [p] : [];
        };
        var pickLast = function(pList) {
          var p = pList.pop();
          return p ? [p] : [];
        };
        // the resulting memory might not be continuous!
        var pickLowestPriority = function(pList) {
          var minIndex = collectionHelpers_1.indexOfMin(pList, function(t) {
            return t.getPriority();
          });
          if (minIndex === -1) {
            return [];
          }
          return pList.splice(minIndex, 1);
        };
        /**
         * Applies a picker repeatedly until the memory requirement is fulfilled or until the picker fails.
         * @param {ProcessPicker} picker
         * @returns {(m, p) => Process[]}
         */
        var applyPicker = function(picker) {
          return function(m, p) {
            var possibleSwapTargets = nonNullProcesses(m, p);
            var swapTargets = [];
            var memRequirement = p.getMemoryUsage();
            var currentMemory = 0;
            while (currentMemory < memRequirement) {
              var picked = picker(possibleSwapTargets);
              if (picked.length > 0) {
                swapTargets.push.apply(swapTargets, picked);
                currentMemory += picked.reduce(function(prev, curr) {
                  return prev + curr.getMemoryUsage();
                }, 0);
              } else {
                break;
              }
            }
            if (currentMemory < memRequirement) {
              return [];
            }
            return swapTargets;
          };
        };
        var firstProcesses = applyPicker(pickFirst);
        var lastProcesses = applyPicker(pickLast);
        var lowestPriorityProcesses = applyPicker(pickLowestPriority);
        var useFirst = true;
        var alternateFirstLast = function(m, p) {
          var strategy = lastProcesses;
          if (useFirst) {
            strategy = firstProcesses;
          }
          useFirst = !useFirst;
          return strategy(m, p);
        };
        var strategies = d3_collection_1
          .map()
          .set("first", firstProcesses)
          .set("last", lastProcesses)
          .set("alternate-first-last", alternateFirstLast)
          .set("lowest-priority", lowestPriorityProcesses);
        function createSwapStrategy() {
          var selected = d3_selection_1.select("#swappingStrategy").node()
            .value;
          return collectionHelpers_1.getOrDefault(
            strategies,
            selected,
            firstProcesses
          );
        }
        exports.createSwapStrategy = createSwapStrategy;

        /***/
      },

    /***/ "./src/swapping/index.ts":
      /*!*******************************!*\
  !*** ./src/swapping/index.ts ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 16.04.18 19:01
 */
        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, "__esModule", {value: true});
        __export(
          __webpack_require__(/*! ./swapping */ "./src/swapping/swapping.ts")
        );
        var SwappingStrategy_1 = __webpack_require__(
          /*! ./SwappingStrategy */ "./src/swapping/SwappingStrategy.ts"
        );
        exports.createSwapStrategy = SwappingStrategy_1.createSwapStrategy;

        /***/
      },

    /***/ "./src/swapping/swapping.ts":
      /*!**********************************!*\
  !*** ./src/swapping/swapping.ts ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 16.04.18 16:51
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var diskModels_1 = __webpack_require__(
          /*! ../diskModels */ "./src/diskModels.ts"
        );
        var diskViz = __webpack_require__(
          /*! ../diskSpaceAnimations */ "./src/diskSpaceAnimations.ts"
        );
        var helpers_1 = __webpack_require__(
          /*! ../localStorage/helpers */ "./src/localStorage/helpers.ts"
        );
        var keys_1 = __webpack_require__(
          /*! ../localStorage/keys */ "./src/localStorage/keys.ts"
        );
        var memoryViz = __webpack_require__(
          /*! ../memoryAnimations */ "./src/memoryAnimations.ts"
        );
        var processHelpers_1 = __webpack_require__(
          /*! ../util/processHelpers */ "./src/util/processHelpers.ts"
        );
        var SwappingStrategy_1 = __webpack_require__(
          /*! ./SwappingStrategy */ "./src/swapping/SwappingStrategy.ts"
        );
        var memory;
        var disk;
        var memoryEnabled;
        var diskEnabled;
        var swappingEnabled;
        var Success;
        (function(Success) {
          Success[(Success["ADDED"] = 1)] = "ADDED";
          Success[(Success["NEED_SWAP_OTHERS"] = 2)] = "NEED_SWAP_OTHERS";
          Success[(Success["RETRIEVE_FROM_SWAP"] = 3)] = "RETRIEVE_FROM_SWAP";
        })((Success = exports.Success || (exports.Success = {})));
        var Noop;
        (function(Noop) {
          Noop[(Noop["PROCESS_ALREADY_ADDED"] = 50)] = "PROCESS_ALREADY_ADDED";
          Noop[(Noop["IS_SWAPPING_PROCESS"] = 51)] = "IS_SWAPPING_PROCESS";
          Noop[(Noop["IS_RESTORING_PROCESS"] = 52)] = "IS_RESTORING_PROCESS";
        })((Noop = exports.Noop || (exports.Noop = {})));
        var Failure;
        (function(Failure) {
          Failure[(Failure["DISK_NO_SPACE"] = 100)] = "DISK_NO_SPACE";
          Failure[(Failure["MEMORY_NO_SPACE"] = 101)] = "MEMORY_NO_SPACE";
          Failure[(Failure["SWAP_IMPOSSIBLE"] = 102)] = "SWAP_IMPOSSIBLE";
        })((Failure = exports.Failure || (exports.Failure = {})));
        function isSuccess(result) {
          var status = typeof result === "number" ? result : result.status;
          return 0 < status && status < 50;
        }
        exports.isSuccess = isSuccess;
        function isNoop(result) {
          var status = typeof result === "number" ? result : result.status;
          return 50 <= status && status < 100;
        }
        exports.isNoop = isNoop;
        function isFailure(result) {
          var status = typeof result === "number" ? result : result.status;
          return 100 <= status;
        }
        exports.isFailure = isFailure;
        function done(status, swapTargets) {
          if (swapTargets === void 0) {
            swapTargets = [];
          }
          return {
            status: status,
            swapTargets: swapTargets
          };
        }
        function init(m, d) {
          memory = m;
          disk = d;
          memoryViz.addMemoryVisually(m);
          diskViz.updateDiskSpaceAnimator(d);
          diskViz.addDiskVisually(d);
          memoryEnabled = helpers_1.get(keys_1.LocalStorageKeys.MEMORY_ENABLED);
          diskEnabled = helpers_1.get(keys_1.LocalStorageKeys.DISK_ENABLED);
          swappingEnabled = helpers_1.get(
            keys_1.LocalStorageKeys.SWAPPING_ENABLED
          );
        }
        exports.init = init;
        function addProcess(process, color) {
          if (process.isSwappingProcess()) {
            if (process.hasMemory) {
              return done(Noop.IS_SWAPPING_PROCESS);
            }
            var op = processHelpers_1.swapNameToOriginalProcess.get(
              process.getName()
            );
            if (!op) {
              throw new Error("Illegal swapping process");
            }
            removeFromMemory(op);
            addToDiskCurried(color)(diskModels_1.BlockState.SWAP)(op);
            process.setHasMemory(true);
            processHelpers_1.swapNameToOriginalProcess.remove(
              process.getName()
            );
            return done(Noop.IS_SWAPPING_PROCESS);
          }
          if (process.isRestoringProcess()) {
            if (process.hasMemory) {
              return done(Noop.IS_RESTORING_PROCESS);
            }
            var op = processHelpers_1.restoreNameToOriginalProcess.get(
              process.getName()
            );
            if (!op) {
              throw new Error("Illegal restoring process");
            }
            removeFromDiskCurried(diskModels_1.BlockState.SWAP)(op);
            addToMemoryCurried(color)(op);
            process.setHasMemory(true);
            processHelpers_1.restoreNameToOriginalProcess.remove(
              process.getName()
            );
            return done(Noop.IS_RESTORING_PROCESS);
          }
          if (memoryEnabled && diskEnabled && swappingEnabled) {
            return addProcessConsiderSwap(process, color);
          }
          if (process.hasMemory) {
            handleProcessAlreadyAllocated(process);
            return done(Noop.PROCESS_ALREADY_ADDED);
          }
          var allocatedMemory = !memoryEnabled;
          var allocatedDisk = !diskEnabled;
          if (memoryEnabled) {
            memoryViz.animateMemoryAllocation(process, memory, color, "pre");
            var added = memory.addProcess(process);
            allocatedMemory = allocatedMemory || added;
            process.setHasMemory(added);
          }
          // add to disk only if disk is enabled
          // and memory is either disabled
          // or the process got added to memory successfully
          if (diskEnabled && allocatedMemory) {
            diskViz.animateDiskSpaceAllocation(process, disk, color, "pre");
            var added = disk.allocateSpace(process);
            allocatedDisk = allocatedDisk || added;
          }
          // animate post state
          if (memoryEnabled && allocatedMemory) {
            memoryViz.animateMemoryAllocation(process, memory, color, "post");
          }
          if (diskEnabled && allocatedDisk) {
            diskViz.animateDiskSpaceAllocation(process, disk, color, "post");
          }
          return done(Success.ADDED);
        }
        exports.addProcess = addProcess;
        /**
         * Tries adding a process to memory and disk and will also attempt to swap other processes from memory to disk
         * @param {Process} process - the process to be added
         * @param {ScaleOrdinal<string, string>} color - maps from a processes' name to its color
         */
        function addProcessConsiderSwap(process, color) {
          var d = debug(process);
          if (process.hasMemory) {
            d("memory already allocated");
            handleProcessAlreadyAllocated(process);
            return done(Noop.PROCESS_ALREADY_ADDED);
          }
          var inSwap = disk.hasProcess(process, diskModels_1.BlockState.SWAP);
          var addToMemory = addToMemoryCurried(color);
          var addToDisk = addToDiskCurried(color)(diskModels_1.BlockState.DISK);
          if (inSwap) {
            d("found process in swap");
            if (!disk.hasProcess(process, diskModels_1.BlockState.DISK)) {
              throw new Error(
                "Illegal state: process '" +
                  process.getName() +
                  "' was swapped without having regular disk space allocated"
              );
            }
            // restoring process is not directly possible
            if (!memory.hasSpaceForProcess(process)) {
              d("direct restore not possible, trying to swap other processes");
              // try swapping processes in memory to disk
              var swapTargets = SwappingStrategy_1.createSwapStrategy()(
                memory.getMemoryList(),
                process
              );
              if (swapTargets.length === 0) {
                // swapping failed
                d("direct restore swap failed, no swap targets found");
                process.reject();
                return done(Failure.MEMORY_NO_SPACE);
              }
              return done(Success.NEED_SWAP_OTHERS, swapTargets);
            }
            // restore process
            d("retrieving process from swap");
            return done(Success.RETRIEVE_FROM_SWAP, [process]);
          }
          d("process not found in swap");
          if (!memory.hasSpaceForProcess(process)) {
            // swap another process to disk to make space
            d("trying swapping to make space for process");
            var swapTargets = SwappingStrategy_1.createSwapStrategy()(
              memory.getMemoryList(),
              process
            );
            if (swapTargets.length === 0) {
              d("swapping failed: no targets found");
              process.reject();
              return done(Failure.SWAP_IMPOSSIBLE);
            }
            return done(Success.NEED_SWAP_OTHERS, swapTargets);
          } else {
            // normal case, process not in swap and memory has space for it
            d("Normal case, process not in swap and memory has space");
            if (
              !disk.hasSpaceForProcess(process, diskModels_1.BlockState.DISK)
            ) {
              d("Disk has no space for process");
              process.reject();
              return done(Failure.DISK_NO_SPACE);
            }
            addToMemory(process);
            addToDisk(process);
            d("Added successfully");
            return done(Success.ADDED);
          }
        }
        function handleProcessAlreadyAllocated(process) {
          if (!diskEnabled) {
            return;
          }
          var onDisk = disk.hasProcess(process, diskModels_1.BlockState.DISK);
          if (!onDisk) {
            throw new Error(
              "Illegal state: process '" +
                process.getName() +
                "' has memory but not disk space allocated!"
            );
          }
          var removeFromSwap = removeFromDiskCurried(
            diskModels_1.BlockState.SWAP
          );
          // handle swap deletion if it exists for the process
          if (disk.hasProcess(process, diskModels_1.BlockState.SWAP)) {
            removeFromSwap(process);
          }
        }
        function removeProcess(process) {
          var removeFromDisk = removeFromDiskCurried(
            diskModels_1.BlockState.DISK
          );
          var removeFromSwap = removeFromDiskCurried(
            diskModels_1.BlockState.SWAP
          );
          if (memoryEnabled) {
            removeFromMemory(process);
            process.setHasMemory(false);
          }
          if (diskEnabled) {
            removeFromDisk(process);
          }
          if (swappingEnabled) {
            removeFromSwap(process);
          }
        }
        exports.removeProcess = removeProcess;
        function reset() {
          memoryViz.resetMemoryAnimation(memory);
          memory.initMemory();
          diskViz.resetDiskSpaceAnimation(disk);
          disk.initDisk();
        }
        exports.reset = reset;
        function addToMemoryCurried(color) {
          return function(p) {
            return _addToMemoryNoCurry(p, color);
          };
        }
        var removeFromMemory = _removeFromMemoryNoCurry;
        function _addToMemoryNoCurry(process, color) {
          memoryViz.animateMemoryAllocation(process, memory, color, "pre");
          memory.addProcess(process);
          memoryViz.animateMemoryAllocation(process, memory, color, "post");
        }
        function _removeFromMemoryNoCurry(process) {
          memoryViz.animateMemoryDeallocation(process, memory, "pre");
          memory.removeProcess(process);
          process.setHasMemory(false);
          memoryViz.animateMemoryDeallocation(process, memory, "post");
        }
        function addToDiskCurried(color) {
          return function(state) {
            return function(p) {
              return _addToDiskNoCurry(p, color, state);
            };
          };
        }
        function removeFromDiskCurried(state) {
          return function(p) {
            return _removeFromDiskNoCurry(p, state);
          };
        }
        function _addToDiskNoCurry(process, color, state) {
          diskViz.animateDiskSpaceAllocation(process, disk, color, "pre");
          disk.allocateSpace(process, state);
          diskViz.animateDiskSpaceAllocation(process, disk, color, "post");
        }
        function _removeFromDiskNoCurry(process, state) {
          diskViz.animateDiskSpaceDeallocation(process, disk, "pre");
          disk.removeFromDisk(process, state);
          diskViz.animateDiskSpaceDeallocation(process, disk, "post");
        }
        function debug(p) {
          return function(message) {
            return console.log("Swap:", p.getName(), ":", message);
          };
        }

        /***/
      },

    /***/ "./src/util/collectionHelpers.ts":
      /*!***************************************!*\
  !*** ./src/util/collectionHelpers.ts ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 29.03.18 12:17
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        function getOrDefault(map, key, defaultValue) {
          var result = map.get(key);
          return result ? result : defaultValue;
        }
        exports.getOrDefault = getOrDefault;
        function genericIndexOf(comparator) {
          return function(array, accessor) {
            if (array.length === 0) {
              return -1;
            }
            var target = accessor(array[0]);
            var targetIndex = 0;
            for (var i = 1; i < array.length; i++) {
              var value = accessor(array[i]);
              if (comparator(target, value)) {
                targetIndex = i;
                target = value;
              }
            }
            return targetIndex;
          };
        }
        // maybe also write lastIndexOfMin, indexOfMax, lastIndexOfMax
        exports.indexOfMin = genericIndexOf(function(bestValue, current) {
          return current < bestValue;
        });

        /***/
      },

    /***/ "./src/util/mathHelper.ts":
      /*!********************************!*\
  !*** ./src/util/mathHelper.ts ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {value: true});
        function closestPowerOfTwo(size, canOverstep) {
          if (!canOverstep) {
            return findLowerPowerOfTwo(size);
          }
          var lower = findLowerPowerOfTwo(size);
          var upper = findUpperPowerOfTwo(size);
          var diffLower = size - lower;
          var diffUpper = upper - size;
          if (diffLower <= diffUpper) {
            return lower;
          }
          return upper;
        }
        exports.closestPowerOfTwo = closestPowerOfTwo;
        function exponent(base, num) {
          return Math.floor(Math.log(num) / Math.log(base));
        }
        exports.exponent = exponent;
        function findLowerPowerOfTwo(size) {
          return Math.pow(2, Math.floor(Math.log(size) / Math.log(2)));
        }
        exports.findLowerPowerOfTwo = findLowerPowerOfTwo;
        function findUpperPowerOfTwo(size) {
          return Math.pow(2, Math.ceil(Math.log(size) / Math.log(2)));
        }
        exports.findUpperPowerOfTwo = findUpperPowerOfTwo;
        /**
         * This method splits a number (size) into powers of two, not going lower as minSize.
         * It might create a bigger sum of numbers than size if canOverstep is true.
         * @param {number} size - the number to be split
         * @param {number} minSize - the smallest a part can be
         * @param {boolean} canOverstep - if true
         * this method creates an array with a bigger number than size when appropriate.
         * @returns {number[]} - the number split into parts
         */
        function approximateAsPowersOfTwo(size, minSize, canOverstep) {
          if (size <= 0 || size <= minSize) {
            return [];
          }
          if (canOverstep) {
            var closest = closestPowerOfTwo(size, canOverstep);
            if (closest >= size) {
              return [closest];
            }
          }
          var result = [];
          var counter = size;
          while (counter >= minSize) {
            var lower = findLowerPowerOfTwo(counter);
            result.push(lower);
            counter -= lower;
          }
          return result;
        }
        exports.approximateAsPowersOfTwo = approximateAsPowersOfTwo;
        /**
         * Returns an int in the range of [min, max)
         * @param {number} min - lower bound int, inclusive
         * @param {number} max - upper bound int, exclusive
         * @returns {number} - an int between [min, max) / [min, max - 1]
         *
         * Copied from https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
         */
        function randomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }
        exports.randomInt = randomInt;

        /***/
      },

    /***/ "./src/util/processHelpers.ts":
      /*!************************************!*\
  !*** ./src/util/processHelpers.ts ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 15.05.18 14:47
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_collection_1 = __webpack_require__(
          /*! d3-collection */ "./node_modules/d3-collection/index.js"
        );
        var processor_1 = __webpack_require__(
          /*! ../processor */ "./src/processor.ts"
        );
        exports.swapNameToOriginalProcess = d3_collection_1.map();
        function swappingProcess(timePassed) {
          return function(process) {
            var duration = Math.ceil(process.getMemoryUsage() / 10);
            var name = "SWAPPING-" + process.getName();
            exports.swapNameToOriginalProcess.set(name, process);
            return new processor_1.Process(
              timePassed,
              duration,
              999,
              name,
              0,
              0
            );
          };
        }
        exports.swappingProcess = swappingProcess;
        exports.restoreNameToOriginalProcess = d3_collection_1.map();
        function restoringProcess(timePassed) {
          return function(process) {
            var duration = Math.ceil(process.getMemoryUsage() / 10);
            var name = "RESTORING-" + process.getName();
            exports.restoreNameToOriginalProcess.set(name, process);
            return new processor_1.Process(
              timePassed,
              duration,
              999,
              name,
              0,
              0
            );
          };
        }
        exports.restoringProcess = restoringProcess;
        /**
         * Adds the process to the beginning of the list if the process is a swapping process
         * @param {Process} process - the process to be added
         * @param {Process[]} list - the list of processes
         * @returns {boolean} - if the process has been added to the list
         */
        function handleSwappingProcess(process, list) {
          if (!process.isSwappingProcess()) {
            return false;
          }
          list.unshift(process);
          return true;
        }
        exports.handleSwappingProcess = handleSwappingProcess;
        /**
         * interrupts the currently running process and inserts it at newIndex in the processList
         * @param {Process[]} processList
         * @param {number} newIndex
         */
        function interruptActiveProcess(processList, newIndex) {
          processList[0].interrupt();
          processList.splice.apply(
            processList,
            [newIndex, 0].concat(processList.splice(0, 1))
          );
        }
        exports.interruptActiveProcess = interruptActiveProcess;

        /***/
      },

    /***/ "./src/util/saveLoadHelpers.ts":
      /*!*************************************!*\
  !*** ./src/util/saveLoadHelpers.ts ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 11.04.18 14:51
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        var d3_selection_1 = __webpack_require__(
          /*! d3-selection */ "./node_modules/d3-selection/index.js"
        );
        var factoryMethods_1 = __webpack_require__(
          /*! ../factoryMethods */ "./src/factoryMethods.ts"
        );
        var helpers_1 = __webpack_require__(
          /*! ../localStorage/helpers */ "./src/localStorage/helpers.ts"
        );
        var keys_1 = __webpack_require__(
          /*! ../localStorage/keys */ "./src/localStorage/keys.ts"
        );
        var scheduling_1 = __webpack_require__(
          /*! ../scheduling */ "./src/scheduling.ts"
        );
        function processLikeFrom(process) {
          return {
            arrival: process.getArrival(),
            diskUsage: process.diskUsage,
            duration: process.getLength(),
            memoryUsage: process.getMemoryUsage(),
            name: process.getName(),
            priority: process.getPriority()
          };
        }
        exports.processLikeFrom = processLikeFrom;
        function getDefinedProcesses() {
          var result = [];
          scheduling_1.getProcessList().forEach(function(value) {
            return result.push(processLikeFrom(value));
          });
          return result;
        }
        exports.getDefinedProcesses = getDefinedProcesses;
        function getProcessorFields() {
          var algorithm = factoryMethods_1.createSchedulingAlgorithm();
          if (!algorithm) {
            return undefined;
          }
          var name = algorithm.getName();
          return {
            algorithm: {
              extra: determineProcessorExtra(name),
              name: name
            }
          };
        }
        exports.getProcessorFields = getProcessorFields;
        function determineProcessorExtra(name) {
          if (name === "sjn" || name === "priority") {
            return document.getElementById("interruptCheckBox").checked;
          }
          if (name === "rr") {
            return document.getElementById("quantum").valueAsNumber;
          }
          return undefined;
        }
        function toggleProcessorExtra(name) {
          document.getElementById("interruptCheckBoxContainer").style.display =
            name === "sjn" || name === "priority" ? "flex" : "none";
          document.getElementById("rrQuantumContainer").style.display =
            name === "rr" ? "flex" : "none";
        }
        exports.toggleProcessorExtra = toggleProcessorExtra;
        function getMemoryFields() {
          var algorithm = factoryMethods_1.createMemoryAlgorithm();
          if (!algorithm) {
            return undefined;
          }
          var name = algorithm.getName();
          var extra = determineMemoryExtra(name);
          return {
            algorithm: {
              extra: extra,
              name: name
            }
          };
        }
        exports.getMemoryFields = getMemoryFields;
        function determineMemoryExtra(name) {
          if (name !== "Buddy System") {
            return undefined;
          }
          var canOverstep = document.getElementById("buddyOverstep").checked;
          var minSize = document.getElementById("buddyMinSize").valueAsNumber;
          return {
            canOverstep: canOverstep,
            minSize: minSize
          };
        }
        function toggleMemoryExtra(name) {
          document.getElementById("buddyContainer").style.display =
            name === "Buddy System" ? "flex" : "none";
        }
        exports.toggleMemoryExtra = toggleMemoryExtra;
        function getDiskFields() {
          var algorithm = factoryMethods_1.createDiskSpaceAllocationAlgorithm();
          if (!algorithm) {
            return undefined;
          }
          var name = algorithm.getName();
          var extra = determineDiskExtra(name);
          return {
            algorithm: {
              extra: extra,
              name: name
            }
          };
        }
        exports.getDiskFields = getDiskFields;
        // in case if extra algorithm data is needed in the save file
        function determineDiskExtra(name) {
          if (name === void 0) {
            name = "";
          }
          if (!name) {
          } // ensure name is used to prevent warning
          return undefined;
        }
        function toggleDiskExtra(name) {
          if (name === void 0) {
            name = "";
          }
          if (!name) {
          } // ensure name is used to prevent warning
          // placeholder for future extension
        }
        exports.toggleDiskExtra = toggleDiskExtra;
        function getSerializedLocalStorage() {
          var result = {};
          helpers_1.allLocalStorageKeys().forEach(function(v) {
            result[v] = JSON.stringify(helpers_1.get(v));
          });
          return result;
        }
        exports.getSerializedLocalStorage = getSerializedLocalStorage;
        function getSwappingFields() {
          var name = d3_selection_1.select("#swappingStrategy").node().value;
          var extra = determineSwappingExtra(name);
          return {
            algorithm: {
              extra: extra,
              name: name
            }
          };
        }
        exports.getSwappingFields = getSwappingFields;
        function determineSwappingExtra(name) {
          if (name === void 0) {
            name = "";
          }
          if (!name) {
          } // ensure name is used to prevent warning
          return undefined;
        }
        exports.determineSwappingExtra = determineSwappingExtra;
        function toggleSwappingExtra(name) {
          if (name === void 0) {
            name = "";
          }
          if (!name) {
          } // ensure name is used to prevent warning
          d3_selection_1
            .select("#swappingStrategyContainer")
            .style("display", function() {
              return helpers_1.get(keys_1.LocalStorageKeys.SWAPPING_ENABLED)
                ? "flex"
                : "none";
            });
        }
        exports.toggleSwappingExtra = toggleSwappingExtra;

        /***/
      },

    /***/ "./src/util/typeHelpers.ts":
      /*!*********************************!*\
  !*** ./src/util/typeHelpers.ts ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
 * Created by Clemens Gläser on 11.04.18 16:21
 */
        Object.defineProperty(exports, "__esModule", {value: true});
        function requireNumber(value) {
          return typeof value === "number";
        }
        exports.requireNumber = requireNumber;
        function requireBoolean(value) {
          return typeof value === "boolean";
        }
        exports.requireBoolean = requireBoolean;
        function requireString(value) {
          return typeof value === "string";
        }
        exports.requireString = requireString;

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=main.bundle.js.map
