var Student =function (name,city)
{
    this.name=name
    this.city=city
    this.getDetails= function() {
        console.log(this.name,this.city)
    }
}
student=new Student('raju','bang');
console.log(student.name, student.city);
student.getDetails();
Student.prototype.age=20;
Student.prototype.greet= function (message){
    console.log(message,this.name);
}
console.log(student.age);
student.greet('welcome ');

student1=new Student('Ram','Ooty');
student1.age=30;
student1.greet('Greet Day');
console.log(student1.name,student1.age,student1.city);
