//Promise is a JavaScript object that links producing code and consuming code asynchronous operations.

//A Promise is in one of these states:
//1. pending: initial state, neither fulfilled nor rejected.
//2. fulfilled: meaning that the operation was completed successfully.
//3. rejected: meaning that the operation failed.

//Creating a Promise
//Promise constructor takes a function as an argument with two parameters: resolve and reject.

const promiseOne = new Promise((resolved, rejected) => {
    setTimeout(function () {
        console.log("Async Task Invoked!!")
        resolved() //changes the state from pending to resolved
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise resolved") //then is connected to resolved state
})

//without declaring variable
new Promise((resolved, rejected) => {
    setTimeout(function () {
        console.log("Async Task Invoked without declaring variable!!")
        resolved()
    }, 1000)
}).then(function () {
    console.log("Promise resolved without variable")
})


//with accepting parameters
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "John", password: "1234" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

//PromiseFour

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({userName:"ritik",pass:123456})
        }
        else{
            reject('Something went wrong')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((userName)=>{
    console.log(userName)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally always executed weather the peomise is resolved or rejected!!")
})

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({userName:"Js",pass:123456})
        }
        else{
            reject('Js went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{
        const response= await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()



//-----------------------------------------------------
// async function getUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }
// getUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))