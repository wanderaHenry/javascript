// //conditions statements in javascript.
// //if
// //if else
// //if else...if
// //switch
// //ternary operator
// //syntax for if
// let a = 10;
// if (a>=5){
//   console.log("a is greater than 5");
// }

// if(condition){
//   //code here
// }
// if (condition) {
//   //code here
// } else {
//   //consolelogs the condition fior else
// }

// if (condition) {
//   //code here
// }else if (condition2){
//   //code here
// } else{
//   //codehere
// }

// //switch statement
// switch(expression){
//   case value1:
//   break;
//   case value2:
//     break;
// }

// //ternary operators
// //shorter if else statement
//  condition ? expressionifTrue : expressionifFalse;
   

 //Examples
 //if
 //program to check if a number is + or -
 let number =2;
 if (number > 0) {
  console.log(`${number} is a positive number`);//used backticks
 }

 let isRaining = true;
 if (isRaining){
  console.log(`${isRaining} remember to take your raincoat`); //used backticks for string

 }

 let age=20;
 if (age <= 20 && age >= 30){

  console.log("eligible for the chick requests");
 }

 //if someone is an adult
 if (age>=18){
  console.log("you  are an adult");

}

console.log("The number " + number + " is a positive number");