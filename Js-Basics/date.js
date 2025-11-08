let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//code to get define exact date
let mydefinedDate= new Date(2025, 0,7)
// let mydefinedDate= new Date(2025, 0,7,7,8)
// let mydefinedDate= new Date("04-12-2025")
// console.log(mydefinedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(mydefinedDate.getTime())
// console.log(Math.floor((Date.now())/1000))

let newDate=new Date()
// console.log(newDate.getDay())


const createdAt = new Date();
const expiresAt = new Date(createdAt.getTime() + 5 * 60000); 
// console.log(createdAt)
// console.log(expiresAt)