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