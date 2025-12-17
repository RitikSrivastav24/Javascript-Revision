/*Importent Point/*/
const myArray=[0,1,2,3,4,5,6]
const myString=["abc","fvr","efre"]
const myArray2=new Array(1,2,3,4,5) //Differnent ways to array
//console.log(myArray[0])

//Array Methods
//myArray.push(7) //It add a value in existing array in the end
myArray.pop(8) //It removes a value from existing array in the end 

// myArray.unshift(4)
// myArray.shift(4)

// console.log(myArray.includes(7))
// console.log(myArray.indexOf(4))

// const newArray= myArray.join() //It converts datatype to string 
// console.log(myArray) 
// console.log(newArray)

const myarr1= myArray.slice(1,3)
 console.log(myarr1)
// console.log("B",myArray)
const myarr2=myArray.splice(1,3)
// console.log(myarr2)
// console.log("B",myArray)

//slice is a copy machine,
//splice is a surgeon who cuts and removes stuff from the original array.

// const arr1=[1,2,3]
// const arr2=arr1.push(4)
// const arr3=[3,4,5]
// console.log(arr1)
// console.log(arr2)
// const newArray=arr1.concat(arr3)
// console.log(newArray)
// console.log(arr1.length)

// const n1=arr1.map(n=>n*2) //.map() runs a function on each item and returns a brand-new array with the changed values.
// console.log(n1)
// const n2=arr1.forEach(n=>n*2) //.forEach() just runs a function on each item. It does not return a new array. We use it for doing something, like printing or updating UI, etc
// console.log(n2)

 const arr = [5, 10, 15, 20];
 const filtered = arr.filter(num => num > 10);
 console.log(filtered);
 console.log(arr)

const items=["a","b","c","d"]
items.length=1
// console.log(items)

/*
Q.1 What is an array in JavaScript, and how is it different from an 
    object? What kind of data can an array store? How are elements 
    accessed?
Ans- An Array is a data-structure is used to store multiple values into
    single variable.Arrays can store any type of data in JavaScript like 
    (numbers, strings, objects, functions, even mixed). Array elements 
    are accessed using index numbers, starting from 0.

    example :- const arr = [10, "JS", true, { role: "dev" }];
               console.log(arr[0]); // 10

Q.2 What is difference between array.push() and array.pop()?
Ans- Push() adds one or more element to the end of the array whereas 
Pop() removes the last element.

example :- const arr = [1, 2, 3];
           arr.push(4); // [1, 2, 3, 4]
           arr.pop();  // [1, 2, 3]
      Key point:- Both methods modify the original array.

Q.3 Difference between slice() and splice()?
Ans- slice() returns a portion of an array without modifying it, 
     whereas splice() modifies the original array by adding or removing
     elements

Q.4 What is the difference between map() and forEach()?Return value?
When should you use map() instead of forEach()?
Ans- forEach is used for looping and does not return anything while map
     retuens a new array after transforming element.

Q.5 What is filter() and why it is used ?
Ans- filter() is used to apply a condition on an array and returns a 
     new array containing only the elements that satisfy the condition.
     It does not modify the original array.

Q.6 What are falsy values?
Ans- Falsy values are values that evaluate to false in a boolean context.

Q.6 What is the difference between console.log() and return inside a 
function?
Ans-console.log() only prints a value to the console, whereas return 
sends a value back to the place where the function was called.

example :- function test() {
  console.log(10); // only prints
  return 20;       // sends value
}

const result = test();
console.log(result); // 20

 */


