// //datatypes and variables in javascript
// console.log("henry");
// let name = "wandera henry"; //sting
// const Country = "Uganda"; //constant
// let age = 25; //integer
// let isMarried = false; //boolean
// let bigNumber = 123456789012345678901234567890n; //big number
// let id = Symbol("userId"); //symbol

let myAge = 25;
let yourAge = 30;
// //object
// let user = {
//   name: "John",
//   age: 30,
//   isMember: true,
// };

// let response = null; //intentional absenceof value
// let score; //undefined
// let greeting = "Hello, world!"; //string
// console.log({
//   name,
//   Country,
//   age,
//   isMarried,
//   bigNumber,
//   id: id.toString(), // Convert symbol to string for display
//   user,
//   response,
//   score,
//   greeting,
// });

// //non premitive data types
// //objects and arrays
// //mutable datatypes
// //comments can make code readable

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");
let a = 5;
let b = "5";
console.log(a == b);
console.log(a===b);

// functions in  javascript
// they are reusable
// perform spacific tasks
// takes inputs and returns outputs
// A function in programming is a reusable block of code designed to perform a specific task. Instead of writing the same code over and over, you define it once as a function and call it whenever needed.

//declaration functions
// function  functionName(){
//   // put code here
// }

//function   to  add  two numbers
// function addNumbers(num, num2){
//   return num + num2;
// }

function addTwoNumbers(){
  let num1 =1;
  let num2 =2;
  let sum = num1 +num2;
  console.log(sum);
}

//function  to  square anumber
function squareNumber(number){ 
  return number * number;
}

squareNumber(2)// square of two
squareNumber(4)//square of 4
squareNumber(13)//square of 13
console.log(squareNumber(2));
console.log(squareNumber(4));
console.log(squareNumber(13));
