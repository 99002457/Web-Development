"use strict";

//using the backicks to say its a single string 
//console lo g is used to the 9string1`+string2 or sring1, string 2
// template strings should in the backtick
var name = "Manu";
var classs = 3; // console.log(name," is from class ", classs);
// console.log(name+" is from class "+ classs);
//backtick

var msg = "i am \nan \nalien \non this world";
console.log(msg); // template string

var str = "".concat(name, " is from class ").concat(classs);
console.log(str);
var other = 'he bought the car';
var price = 500000;
console.log("".concat(str, " ").concat(other, " for rupees ").concat(price)); // var name='Raju' var city = 'Bangalore'; var msg='Have a good day.'+ 'welcome to jS'; //using backticks var msg=`Have a good day. welcome to jS`; var details = name+' is from '+city; console.log(details); console.log(name,'is from',city) console.log(msg); { const a=20; } // console.log(a); //template strings var details = `${name} is from ${city}`; console.log(details); console.log(`${name} is from ${city}`); console.log(msg); let price = 90; let quantity =45; console.log(`Total cost is, ${price*quantity}`); console.log('Total cost is',(price*quantity));