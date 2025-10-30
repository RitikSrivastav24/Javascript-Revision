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