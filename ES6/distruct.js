arr=[1,2,3];
var[a,b,c]=arr
console.log(a);

var h,j =arr;
console.log(j); //h undefiened becuse withour squar

 var [e,,f]=arr
 console.log(f)

 //object destructuring with same variable name 
 const{username,city}={username:'Raju',city:'Bangalore'} 
 console.log(username,city);
 const{username:uname,city:ucity}={username:'Raju',city:'Bangalore'} 
 console.log(uname,ucity);

 var student={ name:'Raju',city:'Chennai',hobby:['Sports','Music'] }
  var details = (s)=>{ console.log(s.hobby) } 
  details(student); 
  var ndetails = ({name,city,hobby})=>{ console.log(hobby) } 
  ndetails(student); 
  var firstName = 'Kumaran' 
  let greeting= `Hi ${firstName}`; 
  console.log(greeting)

  //default parameter
  