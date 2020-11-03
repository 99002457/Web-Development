"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class Person{ 
//     constructor(name,city)
//     { this.city =city; this.name = name; }
//      getName(){ 
//          return this.name; 
//         }
//      setName(name)
//      { this.name = name;
//      }
//      }
// var person = new Person();
//  person.setName('Marley'); 
//  console.log(person.getName());
var Person =
/*#__PURE__*/
function () {
  function Person(name, city) {
    _classCallCheck(this, Person);

    this.name = name;
    this.city = city;
  }

  _createClass(Person, [{
    key: "fname",
    set: function set(n) {
      this.name = n;
    },
    get: function get() {
      return this.name.toUpperCase();
    }
  }]);

  return Person;
}();

var person = new Person("manu");
console.log(person.fname);
person.fname = 'raju';
console.log(person.fname);