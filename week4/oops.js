//fiveways of creating objects
//plain paranthesis or using literals
myObject = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
myObject.greet(); // Output: Hello, my name is John

//2 obect.create method() inherintace from the 
const animal ={
  sound :"generic sound",
  makeSound: function() {
    console.log(this.sound);//this refers to the object const animal
 
  } 
  /*makesound(){
    return `${this.sound}`
  }*/
}

let dog = Object.create(animal);
dog.sound = "bark";
dog.makeSound(); // Output: bark
console.log(dog); // Output: { sound: 'generic sound', makeSound: [Function] }
//3 constructer function
function Person(name, age){
this.name=name;
this.age=age;
this.greet = function() {
    console.log(`hello, my name is ${this.name} and i am ${this.age} years`);
  };
}
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);
let person3 = new Person("Charlie", 35);
console.log(person1); // Output: Person { name: 'Alice', age: 25, greet: [Function] }
person1.greet(); // Output: hello, my name is Alice and i am 25 years

//syntacting sugar 
//using Es6 classes
class car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  start(make, model) {
    console.log(`The ${this.make} ${this.model} is starting.`);
  }
}
const car1 = new car("Toyota", "Camry");
const car2 = new car("Honda", "Civic");
car1.start(); // Output: The Toyota Camry is starting.

//factory function based on encapsulating.
function createProdduct(name, price){
  return{
    name: name,
    price: price,
    displayInfo: function() {
      console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
  }
}

const product1 = createProdduct("Laptop", 999);
const product2 = createProdduct("Smartphone", 699);
product1.displayInfo(); // Output: Product: Laptop, Price: $999

//encapsulation
// helps in data hiding

//inheritance
class Animal{//parent class.
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  constructor(breed) {
    super(breed); // Call the constructor of the parent class
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}
let daisy = new Dog("Daisy");
daisy.speak(); // Output: Daisy barks.
