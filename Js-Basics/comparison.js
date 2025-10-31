/*This is a normal comparison 
console.log(2>1);
console.log(2<1);
console.log(2==1)
*/

/*problem is that when we compare different datatypes.In this javascript
//automatically converts string into int but sometimes it does not give
predictable result. So it is better before comparing must check values have
same datatypes.*/
console.log("4" > 3);

/*
console.log("7"== 4)
console.log("7" === 4)
in above code console.log("7" == 4);

"7" is a string, 4 is a number.

The == operator tries to convert "7" → 7 (number).

Then it compares 7 == 4, which is false.

So, output → false

console.log("7" === 4);

"7" (string) and 4 (number) have different types.

The === operator does not do type conversion.

Since type differs, it’s false immediately.
*/