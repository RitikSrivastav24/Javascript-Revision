 // can we change Math.pi value in javascript
    //console.log(Math.PI); // it will still print 3.141592653589793
    Math.PI=33;
    //console.log(Math.PI); // it will still print 33  

// Why we cannot change Math.PI value in javascript?
// because in depth pi written property of Math object is non-writable and non-configurable. So we cannot change its value.
// practically it is not possible to change the value of pi because it is a mathematical constant.
//example

const descriptor=Object.getOwnPropertyDescriptor(Math,'PI');
//console.log(descriptor);
//output
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

// So like can we make this in our own object?
const user ={
    name:"nitin",
    age:23,
    passion:"coding",

    function1:function(){
        console.log("hello world");
    }
}

//console.log(Object.getOwnPropertyDescriptor(user,'name')) // by default all properties are writable, enumerable and configurable
const changeuserDescriptor=Object.defineProperty(user,'name',{
    //writable:false,
    //configurable:false,
    enumerable:true // loop only works when enumerable is true
})

//console.log(user);
//console.log(Object.getOwnPropertyDescriptor(changeuserDescriptor,'name'));

//So yes we can make our own properties non-writable and non-configurable like Math.PI property.


// But why we need to do this?
// To prevent accidental changes to important properties that should remain constant throughout the program.
// To enhance security by preventing unauthorized modifications to critical properties.
// To maintain data integrity by ensuring that certain values remain unchanged.
// To create read-only properties that provide information without allowing modifications.

//loop on this

for(let [key,value] of Object.entries(user)){
    //console.log(key,value); // TypeError: user is not iterable
    if(typeof value !=='function'){
        console.log(key,value);
    }
}


// notes 
// 1. Math.PI is a non-writable and non-configurable property of the Math object in JavaScript, which means its value cannot be changed.
// 2. We can create our own object properties and make them non-writable and non-configurable using Object.defineProperty() method.
// 3. Making properties non-writable and non-configurable helps in preventing accidental changes, enhancing security, maintaining data integrity, and creating read-only properties.
// 4. We can loop through object properties using Object.entries() method, but we need to check the type of value to avoid errors when encountering functions.