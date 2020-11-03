var student = {

    name: 'Ram',
    age:20,
    hobbies:['dance','music'],
    greet:function(){
        console.log('Good day');
    },
    address:{
        city:'Bangalore',
        state:'KAR'
    }
}

//console.log(student.address);

    for(const prop in student)
    {
    var stud=student[prop];
    if(stud instanceof Array)
    {
    for (const i in stud)
    {
    console.log("Hobby:"+stud[i])
    }
    }
    else if(typeof stud=='object')
    {
     for (key in stud)
     {
        console.log(key+':'+stud[key]);
     }
    }
    else if(typeof stud=='function'){
       stud();
    }
    else
    {
        console.log(prop+":"+stud)
    }
  
    }
    //console.log(student.name);
   // console.log(student.address.city);
   // student.greet();
