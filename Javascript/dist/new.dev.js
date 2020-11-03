"use strict";

function checkVowel() {
  for (var _len = arguments.length, string = new Array(_len), _key = 0; _key < _len; _key++) {
    string[_key] = arguments[_key];
  }

  for (var _i = 0, _string = string; _i < _string.length; _i++) {
    c = _string[_i];

    if (['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1) {
      count += 1;
    }
  }

  return count;
}

console.log(checkVowel("this is the one with vowels"));