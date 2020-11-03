// var sum= (a,b,c)=>{console.log(a+b+c)}

// sum(10,20,30);
// sum(10,20);
// sum(10);

var sum= (...args)=>{
    return function(){
        summ=0;
        for (ele of args)
        {
          summ+=ele;
        }
        return summ;
    }
}

var sumtype2=()=>{
    let args=Array.from(arguments);
        for (ele of args)
        {
          summ+=ele;
        }
        return summ;
}

var sumtype3=()=>{
        for (ele of arguments)
        {
          summ+=ele;
        }
        return summ;
}

console.log(sum(10,20,30)());
console.log(sum(10,20)());
console.log(sum(10)());
console.log(sum(30,40,70,90,100,200,300)());
console.log(sumtype2(10,20,30,40));
console.log(sumtype3(10,20,30,40));