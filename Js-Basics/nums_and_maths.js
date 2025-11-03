//const num= 500
//console.log(num)
//we can define number in other way also.
//const accountBalance=new Number(8000)
//console.log(accountBalance)
//console.log(accountBalance.toString())

//toFixed() basically formats a number to a fixed number of digits after the decimal.
//console.log(accountBalance.toFixed(2))
//toExponential() converts a number into exponential (scientific) notation and returns it as a string.
//console.log(accountBalance.toExponential(3))

//toPrecision() formats a number to a specified total number of significant digits (not just decimals), and returns it as a string.
//const totalAmount=4568.456
//console.log(totalAmount.toPrecision(3))

//toLocaleString() is like the classy formatting tool for numbers. It converts a number into a locale-aware string, meaning it formats it based on country style (commas, decimals, currency, etc.)
//const totalBill=8000000
//console.log(totalBill.toLocaleString()) //by default it takes US format
//console.log(totalBill.toLocaleString("en-IN"))
//console.log(totalBill.valueOf())

//Maths-----
//console.log(Math.PI)
//console.log(Math.abs(-7))
//console.log(Math.round(7.8))
//console.log(Math.ceil(7.8))
//console.log(Math.floor(7.8))
//console.log(Math.sqrt(50))

//It always gives value between 0 to 1
console.log(Math.random())
console.log((Math.random() *10) + 1) 

const min=10
const max=20
console.log(Math.floor((Math.random()) * (max-min + 1) + min))