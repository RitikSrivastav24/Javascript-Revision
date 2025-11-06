let name="Ritik"
let myAge=23

//This is older syntax. Do not wrote like this- console.log(name + myAge +" anyValue")

console.log(`Hello my name is ${name} and my age is ${myAge}`)

//Another way to define string 
const myJob= new String("Software Developer")
console.log(myJob[5])
console.log(myJob.toLowerCase())
console.log(myJob)

/* The anchor() method of String values creates a string that embeds this string in an <a> element with a name 
console.log(myJob.anchor("link"))
*/
console.log(myJob.charAt(4))
console.log(myJob.indexOf('S'))

/*The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
let sentence="Hello This is Javascript"
console.log(sentence.charCodeAt('J'))
*/

//console.log(sentence.endsWith("Javascript"))

/* The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
console.log(sentence.includes("This"))
*/
let sentence="Hello This is Javascript"

/*isWellFormed() is a new-ish JavaScript string method that checks whether a string contains valid Unicode characters.

In simple words:
It tells you if the string is properly formed with no broken or invalid characters.
let broken = "\uD83D"; 
console.log(broken,isWellFormed())
the output will be false
*/

/*It compares two strings and tells you which one comes first in alphabetical / locale-specific order.
let names=["Ritik","Nitin","Ankit"]
names.sort((a,b) =>a.localeCompare(b))
console.log(names)
*/
