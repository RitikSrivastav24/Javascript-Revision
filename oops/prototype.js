const myName="Ritik  "
//console.log(myName.length)


let myHeros=["Thor","Spiderman","Ironman","Black Panther"]

const heropowers={
    Thor:"Thunder",
    Spiderman:"Web",
    Ironman:"Money",
    BlackPanther:"Vibranium",

    getPowers:function(){
        console.log(`Thor's Power is ${this.Thor}`);
    }
}

Object.prototype.Ritik= function(){
    console.log("Hello Ritik"); 
}

// heropowers.Ritik();  heropowers gets Ritik because it inherits from Object.prototype through the prototype chain.
/* diagram 
  heropowers  ---> Object.prototype ---> null
    ^                ^
    |                |
  Thor, etc.        Ritik()
  */

myHeros.Ritik(); // myHeros gets Ritik because it inherits from Object.prototype through the prototype chain.
/* diagram 
  myHeros  ---> Array.prototype ---> Object.prototype ---> null
    ^                ^                  ^
    |                |                  |
  Thor, etc.      Array methods       Ritik()
  */

// Similarly, we can add methods to Array.prototype or any other prototype but it is not recommended to do so in real-world applications as it may lead to unexpected behavior.

Array.prototype.Nitin=function(){
    console.log("Hello Nitin from Array Prototype");
}

myHeros.Nitin(); // myHeros gets Nitin because it inherits from Array.prototype through the prototype chain.
// heropowers.Nitin(); // heropowers does not get Nitin because it does not inherit from Array.prototype. This will throw an error.



//---- Inheritance in JavaScript ----//
const user= {
    name:"Ritik",
    email:"abc@gmail.com"
}
const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const teacherSupport={
    makeAssignment:true,
    fullTime:true,
    __proto__:teachingSupport // teachingSupport is the prototype of teacherSupport it inherits properties from teachingSupport. in js we use __proto__ to inherit properties.

}

teacher.__proto__=user; // user is the prototype of teacher it inherits properties from user.

console.log(teacher.email); // teacher inherits email property from user object.
console.log(teacherSupport.isAvailable); // teacherSupport inherits isAvailable property from teachingSupport object.

// Note: The use of __proto__ is generally discouraged in favor of Object.create() or class syntax for setting up inheritance, as it can lead to performance issues and is not supported in all environments.

//modern syntax
Object.setPrototypeOf(teacher, user); // setting prototype of teacher to user using modern syntax
console.log(teacher.name); // teacher inherits name property from user object.


//-----

let anotherusername="abc    "
String.prototype.truelength=function(){
    console.log(`${this}`) // this refers to the string on which the method is called.
    console.log(this.trim().length) // length after trimming spaces 
}

anotherusername.truelength();
"rahul " .truelength();
"   hello   " .truelength();
