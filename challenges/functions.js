// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
// 
function consume(param1, param2, callback) {
  return callback(param1, param2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a, b) {
  return a + b;
}


// * Create a function named multiply that returns the product of two numbers

function multiply(a, b) {
  return a * b;
}

// * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
// */

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}
// greeting('Anthony', 'Campbell', (callBack) => {
//   console.log(callBack);
// })

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add));
console.log(consume(10,16,multiply));  // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// The code inside block scope can refer to and use variables and functions in the outside/global scope.  But the variables/functions/code within global scope can't see the code within the block scope.  
// It's like CCTV, the block scope is in the HQ watching what’s happening outside, and the outside doesn't know what's going on inside.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();