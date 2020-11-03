function addall(...args:number[]){
    return function(){
        var summ=0;
        for (var ele of args)
        {
          summ+=ele;
        }
        return summ;
    }
}
function addalld(a:number,b:number){
        return a+b;
    
}

console.log(addalld(10,20));
console.log(addall(10,20,30,40,50));

function userDetails(name:string,city:string='bangalore'){
    console.log(`name ${name}`);
    console.log(`city ${city}`);
}
// must provide one parameterr or else error
userDetails('raju');
userDetails('raju','otty')

//anonymous functions
var greet= function(msg:string){
    return msg;
}

console.log(greet('have a nice day'));
console.log();

//using lambda
    greet=(msg:string)=>{
        return 'welcome'+msg;
    }
console.log(greet('hello'));

console.log();

//single statement
var show= ()=> console.log('hi')
show();

console.log();

//check type
var checkType=(a,b)=>{
    console.log(a+b);   //a:numbe rcomiler is giving output but the manual compilator error.
}


checkType(10,20);
checkType(10,'Ram');
checkType('Ram','Tom');