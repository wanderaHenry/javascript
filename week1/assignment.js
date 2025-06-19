/*//ASSIGNMENT
// casting and datatype conversion with understanding truthy and falsy values.
// in javascript, type conversion is the process of converting a value from one data  type to another.
// this can happen automatically (implicit conversion) or explicitly by the developer (explicit conversion)
// examples  of implicit conversion
let num = "0"; //string
let num1 = "5.4"; //string
let num2 = 5; //number

console.log(1 + num); // implicit conversion from number to string.
console.log(num2 + 1.2); // implicit convesrsion of floating values
console.log(2 + 1.5);
console.log(String(num2) + 2);
console.log(num2.toString());
console.log(Boolean(num));
//Explicit type casting

// Converting Strings to Numbers === we use global method Number(), parseInt(), or parseFloat() {"2.4" to 2.4, "" to 0, "hello" to NaN}
// Converting Numbers to Strings === we use global method String(), toString() {2.4 to "2.4", 0 to "0", NaN to "NaN"}
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers === we use global mthod Number(), we  can also convert booleans to  strings.
// Converting Numbers to Booleans

let a = "hello";

console.log(1 + Number(a));

//Booleans to numbers
let isSingle = false;
console.log(Number(isSingle));
console.log(isSingle.toString());

//converting dates to numbers
let d = new Date(); // convert dates to strings and numbers
console.log(d);
console.log(Number(d));
console.log(String(d));

//truthy values and falsy values

const falsy = [0, false, -0, "", null, undefined, NaN, 0n, document.all];

if (0) {
  console.log("Falsy");
} // Not executed
if ("") {
  console.log("Falsy");
} // Not executed
if (null) {
  console.log("Falsy");
} // Not executed 
// 
Non-zero numbers (e.g., 1, -5)

Non-empty strings (e.g., "hello")

Non-empty arrays/objects (e.g., [1], {})

true

Infinity, -Infinity/

Falsy

0

"" (empty string)

null

undefined

NaN

false*/


// let x=3;
// let b=3.4;
// let c= "5";
// let d= "hello";

// //console.log(x=b)
// console.log(c+x);
  
// //explicit conversion
// //conversion of strings to numbers
// console.log(String(x))

// let d = new Date();
// console.log(Number(d))
// console.log(String(d));
// console.log(Boolean(d));

//truthy and falsy
let name ="";
if(name){
  console}
console.log(name)