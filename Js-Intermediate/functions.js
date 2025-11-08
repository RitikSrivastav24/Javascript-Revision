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