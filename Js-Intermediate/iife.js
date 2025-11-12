/* What is iife=Immediatly invoked function expression.
a JavaScript function that runs as soon as it is defined. It is a 
design pattern used primarily to create a private scope for variables,
preventing them from interfering with the global scope*/

// function con()
// {
//     console.log("Database Connected Successfully")
// }
// con()

//iife function

(function con(){
    console.log("Database Connected Successfully")
})();

//IIFE = Immediate execution + Scope isolation + Data encapsulation

( (name) => {
    console.log(`DB Connected ${name}` )
})('Ritik')



const CounterModule = (function() {
  // 🔒 Private data (hidden from outside)
  let count = 0;

  // 🔒 Private helper function
  function log(message) {
    console.log("LOG:", message);
  }

  // ✅ Public API (only what's necessary)
  return {
    increment() {
      count++;
      log(`Incremented to ${count}`);
      return count;
    },
    reset() {
      count = 0;
      log("Reset counter");
    }
  };
})();
