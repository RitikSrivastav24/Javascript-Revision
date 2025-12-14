// ======================= USING CLASS KEYWORD =======================
// `class` is just SYNTACTIC SUGAR in JavaScript
// Internally, JS still uses constructor functions and prototypes

class User {
    // constructor() runs automatically when `new User()` is called
    constructor(username, email, password){
        // properties are attached to `this`
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods written inside class are automatically added to prototype
    encryptPassword(){
        return `${this.password}xxxxx`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

// Creating an object using class
const userExample = new User("abc","abc@abc.com","12345");

console.log(userExample.encryptPassword());
console.log(userExample.changeUserName());


// ==================================================================
// ================= WITHOUT CLASS KEYWORD (BEHIND THE SCENES) =======
// ==================================================================

// This is a CONSTRUCTOR FUNCTION
// It does the same job as `constructor()` in class
function User1(username, email, password){
    // Properties are attached to `this`
    this.username = username;
    this.email = email;
    this.password = password;
}

// Methods are added manually to the prototype
// So they are shared by all objects created using User1
User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

// Another prototype method
User1.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

// Creating an object using constructor function
const user2Exp = new User1("abc","abc@abc.com","12345875");

console.log(user2Exp.encryptPassword());
console.log(user2Exp.changeUserName());


// ==================================================================
// ========================= KEY DIFFERENCES =========================
// ==================================================================

/*
1️⃣ class keyword
   - Cleaner and more readable
   - Automatically uses prototype internally
   - Preferred in modern JavaScript

2️⃣ Constructor function + prototype
   - Older style (ES5)
   - Shows how JavaScript actually works internally
   - More verbose and manual

3️⃣ IMPORTANT:
   👉 There is NO real "class" in JavaScript
   👉 JS is prototype-based
   👉 class = syntax sugar over constructor + prototype
*/
