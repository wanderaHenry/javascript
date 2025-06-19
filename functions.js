function greet(name){
  console.log(`hello, ${name}`);
}
greet('henry');

//anonymousfunctions
//they are used where the function is not reused
//forexample
//When you don’t need to reuse the function elsewhere

//Useful for one-time tasks or short logic

//Keeps your code cleaner and shorter

//Great for passing into functions (like event listeners or timers)
const greet2 = function(name){
  console.log(`hello, ${name}`);
}
greet2(`henry`);

//local  scope functions
function test() {
  let message = "Inside function";
  console.log(message);
}
test();


//global scope functions
//we need to have a  global variable
let userName = 'henry';
function hiUser(){
  console.log(`hi, ${userName}`);
}
hiUser();

//Arrow functions. modern javascript
const functionMultiply = (a, b) => a * b;
console.log(functionMultiply(4,0))

//callback functions
//functions passed through another function as an agrgument
setTimeout(() => {
  console.log("Runs after 3 seconds");
}, 1000);


//recursive functions
//function calls itself
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(7));
