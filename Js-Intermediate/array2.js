const marverHeros=["thor","ironman","loki"]
const dcheros=["superman","batman","flash"]

//marverHeros.push(dcheros) //It gives array with subarray
// const allHeros=marverHeros.concat(dcheros)
// console.log(allHeros)
// console.log(allHeros[5])

// spread operater is also used to combine two or more arrays
// const allNewHeros=[...marverHeros,...dcheros]
// console.log(allNewHeros)

// const anotherArray=[1,2,3,[5,6],7,[5,6],8]
// const subArrayToSingleArray=anotherArray.flat(Infinity) //flat converts all subarray into a one single array
// console.log(subArrayToSingleArray)


console.log(Array.isArray("Ritik"))
console.log(Array.from("Ritik"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
