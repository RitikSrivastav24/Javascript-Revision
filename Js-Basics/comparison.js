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



/*
Q.1 What is the difference between == and === operators in JavaScript,
and why is it recommended to use one over the other? 
Ans- ==(Loose Equality)
Compares values after type coercion.
Different types can be converted to the same type before comparison.

===(strict equality)
compares values and types before type conversion
Both type and value must be identical for it to return true.

key points :- Always prefer === for predictable results and to 
avoid unexpected bugs due to type coercion.

Q.2 What are the logical operators in JavaScript, and how do they work?
Ans- Logical operators are used to combine or invert Boolean values.
JavaScript has three main logical operators:
&& (AND) → Returns the first falsy value or the last truthy value.
|| (OR) → Returns the first truthy value or the last falsy value.
! (NOT) → Inverts the Boolean value.
*/