const user={
    username:"Ritik",
    price :999,

    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}

// user.welcomemessage()
// user.username="Nitin"
// user.welcomemessage()

//console.log(this)

/*this refers to the object that is currently calling the function.
The value of this depends on how and where the function is called.*/



/*function example1()
{
    let username="Ritik"
    console.log(this.username)
}
example1()

for interview explanation:-In JavaScript, the value of this depends on how a function is called, not where it is defined.

When a function is called as a method of an object, this refers to that object.
But when a function is called normally (not through an object), this refers to the global object in non-strict mode, or undefined in strict mode.

That’s why, inside a standalone function, we cannot access local variables using this.*/



//--------Arrow Function
// An arrow function is a shorter way to write functions in JavaScript.
// It was introduced in ES6 (ECMAScript 2015) and is often used for cleaner and simpler code.

// const example1=() =>{
//     let username="Ritik"
//     console.log(this.username)
// }
// example1()  //same result undefined

//const addNum=(num1,num2) =>
// {
//     return num1+ num2; explicit return :- we can define arrow function in more ways also.It is used when function bosy have line, it must to use to return keyword with this.
// }
//const addNum=(num1,num2) => num1+ num2  //implicit return Used when you have a single-line return statement.JavaScript automatically returns the value.
const addNum=(num1,num2)=>(num1+ num2)  //Same as above — parentheses are often used to make the return more readable.
console.log(addNum(4,8))


