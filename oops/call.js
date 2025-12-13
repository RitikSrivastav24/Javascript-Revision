

/*
  =========================
  What is call() in JavaScript?
  call() is a method used to invoke a function with a specific `this` value and arguments
  provided individually.
*/



/*
  =========================
  Example Functions
  =========================
*/

// This function sets a username on `this`
function setUserName(username) {
  this.username = username;
  // console.log(this);
}

// Constructor function
function createUser(username, email, password) {

  // call() is used to explicitly bind `this`
  // of setUserName to the current object
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}



/*
  =========================
  Creating an object using new
  =========================
*/

const user = new createUser(
  "abc",
  "abc@google.com",
  "password123"
);

console.log(user);

/*
  Output:
  {
    username: "abc",
    email: "abc@google.com",
    password: "password123"
  }
*/



/*
  =========================
  Why call() is needed here?
  =========================

  Without call():

    setUserName(username);

  - `this` inside setUserName would refer to:
    - global object (non-strict mode), or
    - undefined (strict mode)

  Using call(this, username):

  - Ensures that `this` inside setUserName
    refers to the SAME object being created
    by createUser().
*/



/*
  =========================
  What call() does internally
  =========================

  setUserName.call(this, username)

  is equivalent to:

  this.setUserName(username)

  BUT without permanently attaching
  setUserName as a method on the object.
*/



/*
  =========================
  Interview One-Liners
  =========================

  ✔ call() allows a function to be invoked
    with an explicitly defined `this`.

  ✔ call() is commonly used for
    function borrowing and constructor chaining.

  ✔ call() passes arguments individually
    (unlike apply(), which takes an array).
*/



/*
  =========================
  call() vs apply() vs bind()
  =========================

  call(this, a, b)   → executes immediately
  apply(this, [a,b]) → executes immediately
  bind(this)         → returns a new function
*/



/*
  =========================
  Key Takeaway
  =========================

  In this example:
  - call() ensures setUserName() runs
    in the context of the createUser object.
  - This allows reuse of logic
    without duplicating code.
*/
