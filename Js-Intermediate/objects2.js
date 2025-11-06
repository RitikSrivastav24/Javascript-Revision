//const myObj= new Object() This is how we declared object and is called singleton object

const myobj1= {}
myobj1.id=456
myobj1.name="Ritik"
myobj1.email="abc@gmail.com"
myobj1.isLoggedIn=false
// console.log(myobj1)

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ritik",
            lastname:"Shrivastav"
        }
    }
}
// access nested object
// console.log(regularUser.fullname.userfullname.firstname)\

// ----------conbine objects

const obj1={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}
//const obj3={obj1,obj2}  It gives object with sub-object
//const obj3= Object.assign({} ,obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)

console.log(Object.keys(myobj1))
console.log(Object.values(myobj1))
console.log(Object.entries(myobj1))


//check value is exist or not 
console.log(Object.hasOwnProperty('email'))