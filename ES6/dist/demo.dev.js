"use strict";

var x = 20;
x = 200;
console.log(x);
{
  var _x = 2;
}
console.log(x); //can add elements to the array but not to the HObbies or constant variable cannot be edited

var HOBBIES = ["sports", "music", "dance"]; // HOBBIES = "Reading"; 

HOBBIES.push("Reading");
console.log(HOBBIES);
HOBBIES.pop();
console.log(HOBBIES); // HOBBIES=[]; 

var student = {
  name: 'Ram',
  age: 20
};
student.age = 21;
console.log(student);