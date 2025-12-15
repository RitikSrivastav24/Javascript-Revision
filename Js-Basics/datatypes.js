//There are two types of datatypes in JS
/*Promitive Datatypes are the fundamental blocks to store simple data values. These are
immutable means they cannot be change after creation. If we want to change then it creates a new string*/
//Primitive : 7 types. String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const isLoggedIn=true

const temp=null
// console.log(typeof temp)

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



/* 
Q.1 What are the differences between primitive and non-primitive data
types in JavaScript?
Ans-Primitive data types (String, Number, Boolean, null, undefined, 
Symbol, BigInt) store simple values, are immutable, and are stored in 
stack memory. Modifying them creates a new value, so the original is 
unaffected.
Non-primitive data types (Objects, Arrays, Functions) store references 
in heap memory. Modifying a copy affects the original because both 
variables point to the same memory location.

Q.2 What is a Symbol in JavaScript, and why is it used?
Ans- A Symbol is a unique and immutable primitive value in JavaScript.
Even if two Symbols have the same description, they are not equal.
Symbols are often used as unique object keys to avoid name collisions.
const empId = Symbol('5564');
const empId1 = Symbol('5564');
console.log(empId == empId1);
Each Symbol is unique, even if the description is the same.
So empId == empId1 is false because they are two distinct Symbols.

Q.3 What is BigInt in JavaScript, and when would you use it?
Ans- BigInt is a primitive data type in JavaScript used to represent 
integers larger than Number.MAX_SAFE_INTEGER.
It’s useful when dealing with very large numbers, e.g., financial 
applications, cryptocurrencies, or precise calculations that exceed
normal Number limits.

Q.4 What is difference between null and undefined ?
Ans:- ## undefined--------
Means a variable has been declared but not assigned a value.
It is a primitive type.
typeof undefined → "undefined"
------------------------------------------------------------
## null------------------
Represents the intentional absence of any value.
It is also a primitive type, but typeof null → "object" 
(this is a historical JavaScript bug).

Key difference: undefined is usually uninitialized, null is explicitly 
assigned to indicate “no value”

Q.5 What are the key differences between Strings and Numbers in
JavaScript?
Ans- Feature     	    String	                     Number
    Definition	     Sequence of characters	    Numeric value (integer or floating-point)
    Data type	       Primitive	            Primitive
    Operations	     Can concatenate using +	Can do arithmetic operations (+, -, *, /)
    Memory Stored     in stack (primitive)	    Stored in stack (primitive)
    Example	            "Ritik", "123"	         123, 45.67

Q.6 What are Boolean values in JavaScript, and how are they used in conditional statements?
Ans-: Boolean values represent true or false in JavaScript.
Often used to control program flow in conditions, loops, and 
logical operation
*/

