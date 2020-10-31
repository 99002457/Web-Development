var Employee=function()
{
 
}
Employee.prototype.name='Raju';
Employee.prototype.printname=function()
{
 console.log('welcome '+this.name);
};

emp1=new Employee('Ram');
emp1.printname();

 
