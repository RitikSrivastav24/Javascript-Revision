let age = "21sss";
console.log(typeof(age))

let getAge= Number(age)
console.log(typeof(getAge))
console.log(getAge)

/*In the above code there is a problem "21sss" is not a number but in 
javascript it is issue it is easily converted to number but when we check'
that what we are getting inside age variable we see that "NaN". So everytime 
we have to check that what is it's value and type. Do not always rely on
numbers.

example 
trying to convert these into number
"33"=> 33
"33sss" => NaN
true=1 , false => 0  
null=undefined
*/

let num = 1;
console.log(num)

let booleanValue= Boolean(num);
console.log(booleanValue)
console.log(typeof(booleanValue))

/*
1 => true;
0 => false
"" => false
"rgr" => true
*/

let numd = 45;
console.log(numd)

let StringValue= String(numd);
console.log(StringValue)
console.log(typeof(StringValue))  

//operations with conversion

console.log("2" + 3)
console.log(2+ "3")
console.log("2" +5 +7)
console.log(2 + 5 + "7")
/*in the above code js takes the first value and treat according
to their datatype. 
*/


/*
Q.1 What is type conversion in JavaScript, and what are the common ways 
to convert between types?
Ans- Type conversion(type casting) in js is the process of converting a 
value from one datatype to another.
JavaScript can perform implicit conversion (type coercion) or explicit 
conversion (manual using functions).
key concepts
Non-numeric strings convert to NaN when cast to Number.
Truthy/Falsy values convert according to rules when cast to Boolean.
Strings and numbers behave differently in arithmetic and concatenation.

Q.2 let value = "50abc";
let converted = Number(value);
console.log(converted);
console.log(typeof converted);
Ans- 
1. value is "50abc" — a string that cannot be fully converted to a valid number.
2. Number("50abc") results in NaN (Not-a-Number).
3. Even though it says "Not-a-Number", the type of NaN is still number in JavaScript.
4. So, console.log(converted) prints NaN, and console.log(typeof converted) prints "number".

Q.3 let value = false;
let converted = Number(value);
console.log(converted);
console.log(typeof converted);
Ans- value is false.
Number(false) converts false to 0.
console.log(converted) prints 0.
typeof converted is "number" because the conversion result is numeric.

Q.4 let value = 0;
let converted = Boolean(value);
console.log(converted);
console.log(typeof converted);
Ans- value is 0.
Boolean(0) converts 0 to false.
console.log(converted) prints false.
typeof converted is "boolean" because the result is now a boolean.

Q.5 How many types of conversion in js?
Ans- there are two types of conversion in js
1- explicit conversion :- This is when you manually convert a value 
from one type to another using functions like:
let str = "123";
let num = Number(str);   // explicit conversion to number
console.log(num);        // 123
console.log(typeof num); // "number"

let n = 0;
let bool = Boolean(n);   // explicit conversion to boolean
console.log(bool);       // false
console.log(typeof bool); // "boolean"

2. implicit conversion :- This is when JavaScript automatically converts
types for you during operations, without you calling a function.
console.log("5" + 2); // "52"  → number 2 is converted to string
console.log("5" - 2); // 3     → string "5" is converted to number
console.log(true + 1); // 2     → true is converted to 1
console.log(null + 5); // 5     → null is converted to 0

*/







