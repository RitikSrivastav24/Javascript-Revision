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