var sum=function(n1,n2,n3){
    return n1+n2+n3;
}

var avgOfNum=function(x,y){
    return function(){
        return(x+y);
    };
}
var result=avgOfNum(10,20);
console.log(result());
console.log(avgOfNum(10,20)());