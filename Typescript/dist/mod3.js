"use strict";
exports.__esModule = true;
var trial = require("./module");
console.log(trial.greeting);
trial.greet();
var prod = new trial.Product('laptop', 2000);
prod.getinfo();
