## is JS have classes??'
Yes javascript have classes but it is a prototype based lamguage not oops or functional.Even though it looks like classes in Java or C++, JavaScript is still prototype-based, not class-based under the hood.


## What is prototype based language?
A prototype-based language is one where objects inherit directly from other objects instead of classes, using prototypes for reuse and inheritance.

## What is object ?
In JavaScript, an object can be defined directly without a class.
An object is a collection of key–value pairs, and it can inherit behavior from another object via prototypes.

## parts of oops

## object literal
# An object literal in JavaScript is a collection of properties, where a property can store either a value or a function (method).
# example :- const user={
    userName:"Ritik",
    Age:21,

    getUserDetails: function(){
        //console.log("User details fetched succesfully")
        //console.log(`UserName : ${this.userName}`);
        console.log(this);
        
    }
}


- constructor 
# A constructor in JavaScript is a special method used to initialize objects when a class or constructor function is instantiated using new.
example :- class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Alice", 25);
- What happens internally when new is used?
  Creates an empty object {}
  Links it to Person.prototype  
  Binds this to that object
  Executes the constructor
  Returns the object (implicitly)



# prototypes
A prototype is an object from which other objects inherit properties and methods. In JavaScript, objects inherit from other objects, not from classes.
This inheritance happens through an internal link called [[Prototype]]
Every JavaScript object has a [[Prototype]] (except null).
In JS everything is object even functions. 

example :-
const animal = {
  speak() {
    console.log("Animal sound");
  }
};
const dog = {
  name: "Buddy"
};
dog.__proto__ = animal;
dog.speak(); // inherited from animal


- classes
- Instances (new, this )



-- four pillars of oops
- inheritance
- polymorphism
- abstraction
- encapsulation 








---Importent ----------------------------------------------
/********************************************************************
 *  JavaScript Prototypes & Inheritance – Interview Notes (Code Form)
 ********************************************************************/

/*
  =========================
  1️⃣ Strings in JavaScript
  =========================
*/

const myName = "Ritik  ";

// Strings are primitive types.
// JavaScript temporarily wraps them in String objects
// to allow access to properties and methods from String.prototype.

// console.log(myName.length); // includes spaces



/*
  =========================
  2️⃣ Arrays in JavaScript
  =========================
*/

let myHeros = ["Thor", "Spiderman", "Ironman", "Black Panther"];

// Arrays are objects in JavaScript.
// Prototype chain for arrays:
// myHeros → Array.prototype → Object.prototype → null



/*
  =========================
  3️⃣ Object with properties & methods
  =========================
*/

const heropowers = {
  Thor: "Thunder",
  Spiderman: "Web",
  Ironman: "Money",
  BlackPanther: "Vibranium",

  // Method (function stored as a property)
  getPowers: function () {
    console.log(`Thor's Power is ${this.Thor}`);
  }
};



/*
  =========================
  4️⃣ Adding method to Object.prototype
  =========================
*/

Object.prototype.Ritik = function () {
  console.log("Hello Ritik");
};

// All objects inherit from Object.prototype,
// so this method becomes available everywhere.

// heropowers.Ritik(); // works
myHeros.Ritik(); // works

/*
  Prototype chain (Object):
  heropowers → Object.prototype → null

  Prototype chain (Array):
  myHeros → Array.prototype → Object.prototype → null

  ⚠ Modifying Object.prototype is NOT recommended in real projects.
*/



/*
  =========================
  5️⃣ Adding method to Array.prototype
  =========================
*/

Array.prototype.Nitin = function () {
  console.log("Hello Nitin from Array Prototype");
};

// Only arrays inherit from Array.prototype
myHeros.Nitin(); // works

// heropowers.Nitin(); // ❌ Error (not an array)



/*
  =========================
  6️⃣ Prototype-based inheritance (Objects)
  =========================
*/

const user = {
  name: "Ritik",
  email: "abc@gmail.com"
};

const teacher = {
  makeVideo: true
};

// Old / discouraged way
teacher.__proto__ = user;

// teacher inherits properties from user
console.log(teacher.email); // abc@gmail.com



/*
  =========================
  7️⃣ Multi-level inheritance
  =========================
*/

const teachingSupport = {
  isAvailable: false
};

const teacherSupport = {
  makeAssignment: true,
  fullTime: true,

  // teachingSupport is the prototype
  __proto__: teachingSupport
};

console.log(teacherSupport.isAvailable); // false



/*
  =========================
  8️⃣ Modern way: Object.setPrototypeOf()
  =========================
*/

// Recommended approach
Object.setPrototypeOf(teacher, user);

console.log(teacher.name); // Ritik



/*
  =========================
  9️⃣ Extending String.prototype
  =========================
*/

let anotherusername = "abc    ";

String.prototype.truelength = function () {
  // `this` refers to the string on which the method is called
  console.log(`${this}`);
  console.log(this.trim().length);
};

// Works on all strings
anotherusername.truelength();
"rahul ".truelength();
"   hello   ".truelength();

/*
  ⚠ Extending built-in prototypes is powerful
  but NOT recommended in production code
  due to possible conflicts.
*/



/*
  =========================
  🔑 INTERVIEW SUMMARY
  =========================

  - JavaScript is prototype-based, not class-based.
  - Objects inherit properties via the prototype chain.
  - Object.prototype is the root of all objects.
  - Arrays inherit from Array.prototype.
  - Classes are syntactic sugar over prototypes.
  - Avoid modifying built-in prototypes in real applications.
*/
