"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mobile = {
  brand: 'Samsung',
  price: 19500,
  features: {
    ram: '4GB',
    camera: '64MP',
    screensize: '6 inch'
  },
  accessories: ['earphone', 'flipcase', 'charger']
};

for (var prop in mobile) {
  var mob = mobile[prop];

  if (mob instanceof Array) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = mob[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var acs = _step.value;
        console.log(acs);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (_typeof(mob) == 'object') {
    for (var key in mob) {
      console.log(key + ':' + mob[key]);
    }
  } else {
    console.log(prop + ":" + mobile[prop]);
  }
}