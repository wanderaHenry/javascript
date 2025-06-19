// /*// //datatypes and variables in javascript
// // console.log("henry");
// // let name = "wandera henry"; //sting
// // const Country = "Uganda"; //constant
// // let age = 25; //integer
// // let isMarried = false; //boolean
// // let bigNumber = 123456789012345678901234567890n; //big number
// // let id = Symbol("userId"); //symbol

// let myAge = 25;
// let yourAge = 30;
// // //object
// // let user = {
// //   name: "John",
// //   age: 30,
// //   isMember: true,
// // };

// // let response = null; //intentional absence of value
// // let score; //undefined
// // let greeting = "Hello, world!"; //string
// // console.log({
// //   name,
// //   Country,
// //   age,
// //   isMarried,
// //   bigNumber,
// //   id: id.toString(), // Convert symbol to string for display
// //   user,
// //   response,
// //   score,
// //   greeting,
// // });

// // //non premitive data types
// // //objects and arrays
// // //mutable datatypes
// // //comments can make code readable

// console.log("I am " + myAge + " years old.");
// console.log("You are " + yourAge + " years old.");
// let a = 5;
// let b = "5";
// console.log(a == b);
// console.log(a===b);

// // functions in  javascript
// // they are reusable
// // perform spacific tasks
// // takes inputs and returns outputs
// // A function in programming is a reusable block of code designed to perform a specific task. Instead of writing the same code over and over, you define it once as a function and call it whenever needed.

// //declaration functions
// // function  functionName(){
// //   // put code here
// // }

// //function   to  add  two numbers
// // function addNumbers(num, num2){
// //   return num + num2;
// // }

// function addTwoNumbers(){
//   let num1 =1;
//   let num2 =2;
//   let sum = num1 +num2;
//   console.log(sum);
// }

// //function  to  square anumber
// function squareNumber(number){ 
//   return number * number;
// }

// squareNumber(2)// square of two
// squareNumber(4)//square of 4
// squareNumber(13)//square of 13
// console.log(squareNumber(2));
// console.log(squareNumber(4));
// console.log(squareNumber(13));*/

//ASSIGNMENT
// casting and datatype conversion with understanding truthy and falsy values.
// in javascript, type conversion is the process of converting a value from one data  type to another. 
// this can happen automatically (implicit conversion) or explicitly by the developer (explicit conversion)
// examples  of implicit conversion 
 let num = "0";//string
let num1 = "5.4"//string
 let num2 = 5;//number

 console.log(1 +num) // implicit conversion from number to string.
 console.log(num2 + 1.2)// implicit convesrsion of floating values
console.log(2+1.5)
 console.log(String(num2)+ 2)
 console.log((num2).toString())
 console.log(Boolean(num))
 //Explicit type casting


// Converting Strings to Numbers === we use global method Number(), parseInt(), or parseFloat() {"2.4" to 2.4, "" to 0, "hello" to NaN}
// Converting Numbers to Strings === we use global method String(), toString() {2.4 to "2.4", 0 to "0", NaN to "NaN"}
 // Converting Dates to Numbers  
// Converting Numbers to Dates
 // Converting Booleans to Numbers === we use global mthod Number(), we  can also convert booleans to  strings.
// Converting Numbers to Booleans

 let a="hello";

 console.log(1+Number(a))

//Booleans to numbers
 let isSingle =false;
 console.log(Number(isSingle))
 console.log((isSingle).toString())

// //converting dates to numbers
 let d = new Date();// convert dates to strings and numbers
console.log(d);
console.log(Number(d));
console.log(String(d)); 

// //truthy values and falsy values

 false        // the boolean false itself
 0            // the number zero
 -0           // negative zero
 0n           // BigInt zero
 ""           // empty string
 null         // absence of value
 undefined    // variable not assigned
 NaN          // Not a Number


 if (0) {
   console.log("Truthy");
 } else {
  console.log("Falsy"); // This will run
 }



 true
 {}          // empty object
 []          // empty array
 " "         // non-empty string (even just space)
 "false"     // non-empty string
 42          // any non-zero number
 -42         // negative numbers
 3.14        // floats
 Infinity
// -new Date() // a valid object
// function addNumber(){} // any function

 if ("0") {
  console.log("Truthy");  // This will run
  } else {
   console.log("Falsy");
 }