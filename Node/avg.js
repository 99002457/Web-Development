//normal
function average(num1,num2,num3)
{

    return (num1+num2+num3)/3;
}


console.log(average(10,20,30));
//imetadelly invoke javascript function IIFE
avg= (function(n1,n2,n3){
    return (n1+n2+n3)/3;
})(10,20,30);

console.log(avg);
//nested function
function avgOfNum(x,y){
    var sum= function()
    {
        return x+y;
    }
    return sum()/2;
}

var result = avgOfNum(10,20);
console.log(result)

//function expression of nested functions
var avgg=function(x,y){
    var sum= function()
    {
        return x+y;
    }
    return sum()/2;
}

var result = avgg(10,20);
console.log(result)


//function returning 
function avgOf(x,y){
    return function()
    {
        return x+y;
    }()/2;
}

console.log(avgOf(20,30));

function sum(x,y){
    return function()
    {
        return x+y;
    };
}

var result=sum(10,20);
console.log(result());

function sum1(x,y){
    return function()
    {
        return x+y;
    };
}

var result=sum1(50,20)();
console.log(result);

//IIFE
var a=(function(x,y){
    return function()
    {
        return x+y;
    };
})(100,20)();


console.log(a);



