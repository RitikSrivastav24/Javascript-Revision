//There are two types of datatypes in JS
/*Promitive Datatypes are the fundamental blocks to store simple data values. These are
immutable means they cannot be change after creation. If we want to change then it creates a new string*/
//Primitive : 7 types. String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const isLoggedIn=true

const temp=null

let empName;
const empId=Symbol('5564')
const empId1=Symbol('5564')
console.log(empId==empId1)

//const bigNumber=5651549541219451445614n
//Reference Type(Non-Primitive)
//Array
const students =["Rohan","Ankit","Nikhil"]
//Object
const myObj ={
    name:"Test",
    id:55,
    email:"abc@gmail.com"
}
//Functions

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof temp)

//--------------------------------------
/*Stack and Heap Memories
Primitive data types in JavaScript are stored in stack memory. When we copy or modify them,
a new value is created so changes do not affect the original.
*/
let userOne="Ritik"
let userTwo=userOne
userTwo="Nitin"
console.log(userOne)
console.log(userTwo)

/* Non-primitive data types (objects, arrays, functions) are stored in heap memory. Variables 
store a reference to the original object, so when we copy or modify them, we work with the 
same reference and changes reflect on the original object.
*/

let employe1={
empEmail:"ritik@gmail.com"
}
let employee2=employe1

employee2.empEmail="abc@google.com"
console.log(employe1)
console.log(employee2)
