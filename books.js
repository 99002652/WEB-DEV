var Employee = function(){}
Employee.prototype.name='Raju';
Employee.prototype.printName=function(){
    console.log('Welcome'+this.name);
};
emp1= new Employee('Ram');
emp1.printName();
 
var Product = function(){}
Product.prototype={
    name:'Laptop',
    showDesc:function(){
        console.log('15 inch in 12GB' +this.name);
    },
    printStock:function(stock){
        console.log('Stock available' +stock);
    }
}