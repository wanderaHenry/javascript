//let emailPattern;
let phonePattern;
//let ninPattern;
let urlPattern;
let farmerNamePattern = /^[A-Za-z]+$/;
let farmerName = prompt("Enter your name: ");
// let farmerName = "wandera";
console.log(farmerNamePattern.test(farmerName)); // true if valid, false if invalid

let ninPattern = /^[A-Za-z0-9]{14}$/;
console.log(ninPattern.test("12345678901234")); // true if valid, false if invalid
let emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//simpler email pattern
let emailPattern2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

