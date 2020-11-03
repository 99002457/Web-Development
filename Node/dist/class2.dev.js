"use strict";

var Person = require('./class');

var person = new Person('ram', 'bangalore');
person.printDetails();
person.greetMessage('have a good day ');
console.log(person.mobile); //capital letter it will not allow