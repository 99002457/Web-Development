"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function checkVowel(string) {
  count = 0;
  constd = 0;

  for (var _i = 0, _arr = _toConsumableArray(string); _i < _arr.length; _i++) {
    c = _arr[_i];

    if (/[aeiou]/.test(c)) {
      count += 1;
    } else {
      constd += 1;
    }
  }

  console.log("consonant ", constd);
  return count;
}

console.log(checkVowel("this is the one with vowels")); //8

console.log(checkVowel("aeiou")); //5

console.log(checkVowel("\n\n\n\naeiou rest package in the system")); //12