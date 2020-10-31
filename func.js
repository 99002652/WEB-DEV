//IIFE
(function greet(name){
    console.log('hello ' +name);
})('Priya');
var total = (function(n1,n2,n3){
    return n1+n2+n3;
})(10,20,30);
console.log(total);
function avgOfNum(x,y){
    var sum=function(){
        return x+y;
    }
    return sum()/2;
}
var result=avgOfNum(10,20);
console.log(result);