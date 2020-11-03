"use strict";

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
};
var js = JSON.stringify(student);
console.log(js);
var obj = JSON.parse(js);
console.log(obj);