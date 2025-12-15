const empId= 54123;
let empName="Ritik";
let empSalary=80000
/*Avoid using var because it overwrites the originbal value 
var empEmail="ritik@gmail.com"
var empEmail="nitin@gmail.com"
*/
//now let's chnage values 
/* empId=4561;
 i got an error :- Assignment to constant variable. It means we cannot change a value of a variable declared with const. It is not allowed in Javascript
*/

console.table([empId,empName,empSalary]);

console.log(typeof null)

let a=10;
let b=a;
b= 20;
console.log(b)


/*
Q.1 What is the difference between var, let, and const in JavaScript?
Ans-  var is function-scoped and allows redeclaration and reassignment, which can cause unexpected issues.
let is block-scoped and allows reassignment but not redeclaration in the same scope.
const is also block-scoped and does not allow reassignment or redeclaration, so it is used for fixed values.


Q.2 Why does JavaScript give an error when you try to reassign a const variable?
const empId = 54123;
empId = 12345;

Ans- Const is meant for values that should not chnage.
It throws an error because const creates a constant binding.
Once a value is assigned to a const variable, that binding cannot be
reassigned to a new value. Reassigning it breaks this rule, so 
JavaScript throws an error.
his helps prevent accidental changes and makes code more predictable.

Q.3 Is const completely immutable? Explain with an example?
Ans- It is not completely immutable. it prevents reassignment of a variable
but does not prevent modification of objects or arrays stores in it.
Example :- 
const accountId={
empId:356
}
accountId.empId=126 //This will change 

Q.4 What will be the output of this code and why?
Typeof null is object because to a legacy bug in JavaScript, 
even though null is a primitive value."

Q.5 Why does JavaScript allow redeclaration with var, and why is it considered a problem?
Ans- var is function scoped and allows redeclaration so if multiple developer
declare a same var in same scope then overwrite exiting values and caises 
multiple bugs.

Q.6 What is the difference between console.log and console.table, and why would you use console.table here?
Ans- console.log() prints values in a simple line-by-line format.
console.table() displays arrays or objects in a tabular format, 
making it easier to read multiple values at once.
*/