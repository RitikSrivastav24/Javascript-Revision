function multiply(a){
    return a*3;
}
// console.log(multiply(5)); //15
multiply.power=3; //adding property to function. everything in js is object including function
// console.log(multiply.power); //3
console.log(multiply.prototype) //{} every function has prototype property which is an object by default empty object

// console.log(multiply.prototype === Object.getPrototypeOf(multiply)) //false because prototype is for objects created using constructor function not for function itself

// console.log(Object.getPrototypeOf(multiply)) //[Function] every function is created using Function constructor so its prototype is Function.prototype

// console.log(Object.getPrototypeOf(multiply) === Function.prototype) //true'



function userDetails(username, score){
    this.username=username;
    this.score=score;
}

userDetails.prototype.incrementScore=function(){
    this.score++ //this refers to the object which calls this method
}
userDetails.prototype.printMe=function(){
    console.log(`username: ${this.username}, score: ${this.score}`);
}

const user1= new userDetails("Ritik", 5); //undefined undefined because we didn't use new keyword so this is undefined in strict
const user2= new userDetails("Rahul", 10); //here this refers to the newly created object

user1.printMe()