"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var student = {
  name: 'Ram',
  age: 20,
  hobbies: ['dance', 'music'],
  greet: function greet() {
    console.log('Good day');
  },
  address: {
    city: 'Bangalore',
    state: 'KAR'
  }
}; //console.log(student.address);

for (var prop in student) {
  var stud = student[prop];

  if (stud instanceof Array) {
    for (var i in stud) {
      console.log("Hobby:" + stud[i]);
    }
  } else if (_typeof(stud) == 'object') {
    for (key in stud) {
      console.log(key + ':' + stud[key]);
    }
  } else if (typeof stud == 'function') {
    stud();
  } else {
    console.log(prop + ":" + stud);
  }
} //console.log(student.name);
// console.log(student.address.city);
// student.greet();