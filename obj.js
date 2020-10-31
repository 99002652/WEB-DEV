var student={
    name:"Ram",
    age:20,
    hobbies:["dance","music"],
    greet:function(){
        console.log("Good day")
    },
    address:{
        city:"Bangalore",
        state:"KAR"
    }
}

console.log(student.name);
console.log(student.age);
console.log(student.hobbies[1]);
console.log(student.address.city);
student.greet();



for(const stud in student){
    var prop = student[stud];
    if(prop instanceof Array){
    for(let i in prop){
    console.log(prop[i])
     }
     }
    else if(typeof stud=="object"){
        for(const key in stud){
            console.log(key+' : '+stud[key]);
        }
    }else if(typeof stud == 'function'){
        stud();
}else   
   console.log(stud);
}


// for(const prop in students){
//     var stud=student[prop];
//     if(stud instanceof Array){
//         for(const i in stud)
//         console.log("hobby: " +stud[i]);
//     }
//     else if(typeof stud=="object"){
//         for(const key)
//     }
// }