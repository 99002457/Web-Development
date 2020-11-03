"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Moter =
/*#__PURE__*/
function () {
  function Moter(brand, price) {
    _classCallCheck(this, Moter);

    this.brand = brand;
    this.price = price;
  }

  _createClass(Moter, [{
    key: "discount",
    set: function set(dis) {
      this.brand = this.brand;
      this.price = this.price - dis;
    }
  }, {
    key: "details",
    get: function get() {
      return this.brand + " " + this.price;
    }
  }, {
    key: "sbrand",
    set: function set(brand) {
      this.brand = brand;
    },
    get: function get() {
      return this.brand;
    }
  }]);

  return Moter;
}();

var motor = new Moter('bajaj', 50000);
motor.discount = 6000;
console.log(motor.details);