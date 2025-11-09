// let a=100;
// const b=200;
// var c=300

// if(true)
// {
//     let a=10
//     const b=2
//     console.log(a) //This is called block scope 
// }

// console.log(a) //This is called  global scope 



function test1(){
    const firstname="Ritik"

    function test2(){
        //const secondName="Srivastav"
        console.log(firstname)
    }
    //console.log(secondName) It gives error bacuase we are outside of scope of function test2
    test2()
}
test1()


if(true)
{
    const firstname="Ritik"
    if(firstname == "Ritik")
    {
        const secondname=" Srivastav"
        console.log(`My full name is ${firstname + secondname}`)
    }
    //console.log(secondname)
}
//console.log(firstname)


//hoisting in js?

addone()
function addone(num){
    return num + 1
}

//addTwo()
const addTwo= function(num)
{
    return num + 2
}

/*Hoisting means that variable and function declarations are moved (hoisted) to the top of their scope (before code execution).
However — only declarations are hoisted, not initializations or assignments.*/

// addThree()
// var addThree= function(num)
// {
//     return num+ 3
// }

