//In JavaScript, a function is a block of organized, reusable code designed to perform a specific task.
function myFun() {
    console.log("r")
    console.log("i")
    console.log("t")
    console.log("i")
    console.log("k")
}
// myFun()

// function getCubeofNum(number)
// {
//     console.log(number*number*number);
// }
// getCubeofNum(5);

//if we store function in a variable  then --

/*function getCubeofNum(number)
{
    console.log(number*number*number);
}
const result =getCubeofNum(5);
console.log("Result :", result)  It gives undefined because function
must return a value. function getCubeofNum prints (console.log) the cube of the number, but it does not return anything.
In JavaScript, when a function doesn’t explicitly return a value, it automatically returns undefined */

function getCubeofNum(number) {
    //first method :-return number * number * number
    //second method 
    let result = number * number * number
    return result
}
const result = getCubeofNum(5);
//console.log("Result :", result)

function loginMessage(userMessage) {
    if (!userMessage) {
        console.log("Enter a username")
        return
    }
    return `${userMessage} logged in`
}
//console.log(loginMessage('Ritik'))
//when we do not pass anyhting in argument then it gives undefined then we if else statement to handle this 
// console.log(loginMessage())


//function to create cart operator  
// function cartShopping(...cart1){ in this case cart1 only assign to 500 so in this we use rest operater(...) it is like spread operater but the only difference is use case where we using this.
function cartShopping(...cart1) {
    return cart1
}
//console.log(cartShopping(500, 400, 600, 800))

//handle objects in functions

const myCart={
    itemName:"Book",
    price:999
}

function objFunction(anyObject){
   console.log(`The Item is ${anyObject.itemName} and it's price is ${anyObject.price}` )
}

objFunction(myCart)


//pass array to function

const myarr=[200,300,400,500]
function returnArray(getArray)
{
    return getArray[2]
}
console.log(returnArray(myarr))




/*
Q.1 What is a function in JavaScript? Why do we use functions?
Ans-A function is a block of reusable and organized code that performs
 a specific task. We use functions to avoid code repetition, 
 improve readability, and make the program easier to maintain.

Q.2 What is difference between function declaration and function expression?
Ans- Function Declaration---
Defined using the function keyword
Hoisted (can be called before definition)

example
        function add(a, b) {
          return a + b;
        }
    Function Expression----
    Function is assigned to a variable
    Not hoisted (cannot be used before definition)
example 
       const add = function (a, b) {
         return a + b;
       };

In simple words we can say that Function declaration is hoisted and 
defined using the function keyword, whereas a function expression is 
assigned to a variable and is not hoisted.

Q.3 What is the difference between console.log() and return inside a 
function?
Ans-console.log() only prints a value to the console, whereas return 
sends a value back to the place where the function was called.

example :- function test() {
  console.log(10); // only prints
  return 20;       // sends value
}

const result = test();
console.log(result); // 20

What happens when fewer arguments are passed than parameters?
function multiply(a, b) {
  return a * b;
}
multiply(5);
Ans- When fewer arguments are passed, missing parameters become 
undefined, and mathematical operations with undefined return NaN.
 */

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5));

