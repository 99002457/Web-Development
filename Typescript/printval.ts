var printval =(val:string|number)=>{
    if(typeof(val)=='string')
    {
        console.log('welcome'+val);
    }
    if(typeof(val)=='number')
    {
        console.log('your score is '+val);
    }
}
printval('kumaran')
printval(100)

let printvalues=(val:string|number|object)=>{
    if(Array.isArray(val))
    {
        // console.log('Array is '+ val)

        console.log('Array is ',...val)
        // console.log(val)
        // console.log(...val)
    }
    console.log(typeof(val))
    if(typeof(val)=='object' && !Array.isArray(val))
    {
        console.log(val);
    }

}

printvalues(['raj','ram']);
printvalues({name:'kumu'});