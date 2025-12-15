const num= 500
//console.log(num)

//we can define number in other way also.
const accountBalance=new Number(8000)
//console.log(accountBalance)
//console.log(accountBalance.toString())

//toFixed() basically formats a number to a fixed number of digits after the decimal.
// console.log(accountBalance.toFixed(2))
// console.log(typeof accountBalance.toFixed(2)) string 

//toExponential() converts a number into exponential (scientific) notation and returns it as a string.
//console.log(accountBalance.toExponential(3))

//toPrecision() formats a number to a specified total number of significant digits (not just decimals), and returns it as a string.
const totalAmount=4568.456
console.log(totalAmount.toPrecision(3))

//oLocaleString() is like the classy formatting tool for numbers. It converts a number into a locale-aware string, meaning it formats it based on country style (commas, decimals, currency, etc.)
const totalBill=8000000
//console.log(totalBill.toLocaleString()) //by default it takes US format
//console.log(totalBill.toLocaleString("en-IN"))
//console.log(totalBill.valueOf())

/* Maths-----
console.log(Math.PI)
console.log(Math.abs(-7))
console.log(Math.round(7.8))
console.log(Math.ceil(7.8))
console.log(Math.floor(7.8))
console.log(Math.sqrt(50))


It always gives value between 0 to 1
console.log(Math.random())
console.log((Math.random() *10) + 1) 
*/
const min=10
const max=20
console.log(Math.floor((Math.random()) * (max-min + 1) + min))


/*
Q.1 const num = 500;
    const accountBalance = new Number(8000);
    What is the type of each?
    Which one is preferred in real projects, and why?

Ans- const num = 500
→ Primitive number type

const accountBalance = new Number(8000)
→ Number object (wrapper object)

| Point      | `500`                | `new Number(8000)`           |
| ---------- | -------------------- | ---------------------------- |
| Type       | `number` (primitive) | `object`                     |
| Memory     | Lightweight          | Heavier (object)             |
| Comparison | Works normally       | Can cause unexpected results |

Which is preferred & why?

Primitive number (500) is preferred
Because:
Faster
Less memory
No unexpected behavior during comparison

In other words we can say that JavaScript is dynamically typed, so 
numbers are usually primitives. new Number() creates an object, 
which is rarely needed and can cause comparison issues, 
so primitive numbers are preferred.

Q.2 What does toFixed()?
toFixed() formats a number to a fixed number of decimal places and 
returns the result as a string.

Q.3 What is Math.random()?
Ans- Math is a built-in JavaScript object, not a library.
Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).
*/