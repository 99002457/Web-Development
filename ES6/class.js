// class Person{ 
//     constructor(name,city)
//     { this.city =city; this.name = name; }
//      getName(){ 
//          return this.name; 
//         }
//      setName(name)
//      { this.name = name;
//      }
//      }
// var person = new Person();
//  person.setName('Marley'); 
//  console.log(person.getName());




class Person
{
    constructor(name,city)
    {
        this.name= name;
        this.city= city;
    }
    set fname(n)
    {
        this.name=n;
    }
    get fname()
        {
return this.name.toUpperCase();
        }
}

var person=new Person("manu");
console.log(person.fname)
person.fname='raju';
console.log(person.fname)
