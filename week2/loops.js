//reppitions
//examples of loops in our daily life
// waking up in th morning
//brushing
//eating breakfirst
//going for  class
// having lunch
// going for a walk
// having dinner
// going to sleep
// loop continues as one wakes up again the following morning.

//six major loops in js
//and other minors.


//for loop, while and do while loop
//for loop is used when we knowthe number of iterations
// while loop is used when we do not know th number of iterations
//do while loop is used when we want to execute the code atleat  once before checking the condition

//syntax for the for loop 
// for(initialization;  condition; increment/decrement ){
// //code here
// }


// //initialise a variable
// while(condition){
//   //syntax  for while loop

//   //code here
//   //increment/decrement 
// }

// //do while syntax
// //initialisation is done befor the loop starts

// do{
//   //code here
// //then increment or  dcrement
// }while(condition);

// //example of for loop

// c

// let i = 0;
// for(i=0; i<=10; i++){
//   console.log(`1 x ${i} = ${1 * i}`);
// }


//while loop in js

let correctPassword = "Refactory123";
let userInput = prompt("Enter your password:");

while (userInput !== correctPassword) {
  alert("Incorrect password, try again.");
  userInput = prompt("Enter your password:");
}

alert("Access granted!");
