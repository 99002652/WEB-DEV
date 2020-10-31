var Student = function(name,city){
    this.name=name;
    this.city=city;
    this.getDetails=function(){
        console.log(this.name,this.city);
    }
}
student=new Student('Raju','Banagalore');
console.log(student.name,student.city);
student.getDetails();
Student.prototype.age=20;
Student.prototype.greet=function(message){
    console.log(message, this.name);
}
console.log(student.age);
student.greet("Welcome ",this,name);
// studemy1=new 
// student1.age=30;
// studemy.greet("Grea")
// console.log(student.)