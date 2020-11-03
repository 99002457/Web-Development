"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findmod = exports.divdeall = exports.mulall = exports.message = exports.sum = exports.ms = exports.greet = void 0;

var greet = function greet() {
  return console.log('hello how are you');
};

exports.greet = greet;
var ms = "new mobile iphone X";
exports.ms = ms;

var sum = function sum(a, b) {
  return a + b;
};

exports.sum = sum;
var message = 'great day';
exports.message = message;

var divdeall = function divdeall(a, b) {
  return a / b;
};

exports.divdeall = divdeall;

var mulall = function mulall(a, b) {
  return a * b;
};

exports.mulall = mulall;

var findmod = function findmod(a, b) {
  return a % b;
};

exports.findmod = findmod;