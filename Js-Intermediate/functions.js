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
    let result= number * number * number
    return result
}
const result = getCubeofNum(5);
//console.log("Result :", result)

function loginMessage(userMessage)
{
    if(!userMessage){
        console.log("Enter a username")
        return
    }
     return `${userMessage} logged in`
}
//console.log(loginMessage('Ritik'))
//when we do not pass anyhting in argument then it gives undefined then we if else statement to handle this 
console.log(loginMessage())