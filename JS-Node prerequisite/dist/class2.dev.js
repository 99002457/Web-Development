"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name, city) {
  _classCallCheck(this, Student);

  this.name = name;
  this.city = city;

  this.greet = function () {
    console.log("welocome" + name);
  };
};

Student.prototype.age = 20;
student = new Student('raju', 'bang');
console.log(student.age);