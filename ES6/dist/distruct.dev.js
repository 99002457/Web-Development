"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

arr = [1, 2, 3];

var _arr = arr,
    _arr2 = _slicedToArray(_arr, 3),
    a = _arr2[0],
    b = _arr2[1],
    c = _arr2[2];

console.log(a);
var h,
    j = arr;
console.log(j); //h undefiened becuse withour squar

var _arr3 = arr,
    _arr4 = _slicedToArray(_arr3, 3),
    e = _arr4[0],
    f = _arr4[2];

console.log(f); //object destructuring with same variable name 

var _username$city = {
  username: 'Raju',
  city: 'Bangalore'
},
    username = _username$city.username,
    city = _username$city.city;
console.log(username, city);
var _username$city2 = {
  username: 'Raju',
  city: 'Bangalore'
},
    uname = _username$city2.username,
    ucity = _username$city2.city;
console.log(uname, ucity);
var student = {
  name: 'Raju',
  city: 'Chennai',
  hobby: ['Sports', 'Music']
};

var details = function details(s) {
  console.log(s.hobby);
};

details(student);

var ndetails = function ndetails(_ref) {
  var name = _ref.name,
      city = _ref.city,
      hobby = _ref.hobby;
  console.log(hobby);
};

ndetails(student);
var firstName = 'Kumaran';
var greeting = "Hi ".concat(firstName);
console.log(greeting); //default parameter