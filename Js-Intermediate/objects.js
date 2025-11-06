//object literals

//---interesting topic for interview for symbol
const mySym=Symbol("test1")
//-- If we declare obejct like then this non singleton object(object literals)
const user={
    name:"Ritik",
    "full name":"Ritik Shrivastav",
    [mySym]:"myTest1",
    age:23,
    email:"abc@gmail.com",
    isloogedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

//----first method to access object this is not a good idea because some values cannot be accessded
//console.log(user.email)
//console.log(user.full name) --we cannot access full through this method so it is better for production enviroment we use second method. 
//second method
// console.log(user["email"])
//console.log(user[mySym]) //----We cannot access symbol through first method it will return undefined 

//-----------change values of object 

user.email="hello@test.com"
// console.log(user.email)
//Object.freeze(user)
user.email="testdd@gmail.com"
// console.log(user)

//functions with object
user.myFunction= function(){
    console.log("Hello I am function!!")
}
user.myFunction2= function()
{
    console.log(`Hello I am ${this.name} and my email is ${this.email}`)
}
console.log(user.myFunction())
console.log(user.myFunction2())
console.log(user)