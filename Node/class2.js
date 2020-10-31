class Student {
    constructor(name, city) {
        this.name = name;
        this.city = city;
        this.greet = function () {
            console.log("welocome" + name);
        };
    }
}
Student.prototype.age=20;
student=new Student('raju','bang')
console.log(student.age);