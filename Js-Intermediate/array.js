/*Importent Point/*/
const myArray=[0,1,2,3,4,5,6]
const myString=["abc","fvr","efre"]
const myArray2=new Array(1,2,3,4,5) //Differnent ways to array
//console.log(myArray[0])

//Array Methods
// myArray.push(7) It add a value in existing array
// myArray.pop(8) It removes a value from existing array

// myArray.unshift(4)
// myArray.shift(4)

// console.log(myArray.includes(7))
// console.log(myArray.indexOf(4))

// const newArray= myArray.join() //It converts datatype to string 
// console.log(myArray) 
// console.log(newArray)

const myarr1= myArray.slice(1,3)
console.log(myarr1)
console.log("B",myArray)
const myarr2=myArray.splice(1,3)
console.log(myarr2)
console.log("B",myArray)

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

// const arr = [5, 10, 15, 20];
// const filtered = arr.filter(num => num > 10);
// console.log(filtered);
// console.log(arr)

const items=["a","b","c","d"]
items.length=1
console.log(items)