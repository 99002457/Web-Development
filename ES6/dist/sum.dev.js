"use strict";

var _arguments = arguments;

// var sum= (a,b,c)=>{console.log(a+b+c)}
// sum(10,20,30);
// sum(10,20);
// sum(10);
var sum = function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function () {
    summ = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        ele = _step.value;
        summ += ele;
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

    return summ;
  };
};

var sumtype2 = function sumtype2() {
  var args = Array.from(_arguments);

  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    ele = _args[_i];
    summ += ele;
  }

  return summ;
};

var sumtype3 = function sumtype3() {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      ele = _step2.value;
      summ += ele;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return summ;
};

console.log(sum(10, 20, 30)());
console.log(sum(10, 20)());
console.log(sum(10)());
console.log(sum(30, 40, 70, 90, 100, 200, 300)());
console.log(sumtype2(10, 20, 30, 40));
console.log(sumtype3(10, 20, 30, 40));