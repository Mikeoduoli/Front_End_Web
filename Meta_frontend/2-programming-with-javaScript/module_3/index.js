// Introduction To Functional Programming
let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

 function convertCurrency(amount, rate) {
    return amount * rate;
 }

 currencyTwo = convertCurrency(currencyOne, exchangeRate)

 console.log(currencyTwo);


//  Function calling and recursion - When a function calls itself repeatedly

let count = 3;
function exampleRecursion () {
    console.log(count);
    count --;
    if (count === 0) return;
    exampleRecursion();
}


// Introduction To Object Oriented Programming
// The idea of organising programs using objects to group related data and functionality

// OOP Example
// let purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function() {
//         let calculation = purchase2.shoes * purchase2.stateTax;
//         console.log(`Total Price: ${calculation}`);
        
//     }
// }

// console.log(purchase2.totalPrice());

// Alternatively, "this" keyword is used to reference the object itself instead of calling the name of the object.

let purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        let calculation = this.shoes * this.stateTax;
        console.log(`Total Price: ${calculation}`);
        
    }
}

purchase2.totalPrice();

// Classes -A class defines the shape of a type of object - what methods and properties it has. Such an object is called instance of the class
//  built using the "class" keyword
// constructor function accepts as many parameters as needed.
// The role of a constructor function is to assign the passed parameter to the future object properties
// The constructor function is used to instantiate new Objects  - instance of a given class

class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn (){
        console.log("Turbo is on!");
    }
}

const car1 = new Car("Red", 120);

car1.turboOn();

// Inheritance - acquiring possession from past generation
// Prototype an object that can hold properties to be shared by multiple other objects
// You can create a new object by using Object.create method

let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

let eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings:", eagle1.hasWings)
console.log("eagle1 can fly:", eagle1.canFly)
console.log("eagle1 has feathers:", eagle1.hasFeathers)

let eagle2 = Object.create(bird);
console.log("eagle2 has wings:", eagle2.hasWings);

let penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin has wings:", penguin)
console.log("penguin can fly:", penguin.canFly)
console.log("penguin has feathers:", penguin.hasFeathers)


// Advanced JavaScript Features
// Destructuring arrays and objects

let {PI} = Math

console.log(PI)

// For of loops and objects
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('---for-in is unreliable---');
for(prop in sportsCar) {
    console.log(prop);
}

console.log('***', "Iterating over object AND its prototype!");

console.log('---for-of is reliable---');
for(prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}

console.log('****', "Iterating over object's OWN PROPERTIES only!");

// Data Structures
// A way to organize data in programming
// Data can organized into Arrays, Objects, Maps and Sets. This are commonly used in JavaScript.

// Spread Operator - Used to spread array item and join objects together.
// Represented with three dots followed by property structure name (...top7)


// Rest Operator. Also uses the dots naming convention.


// JavaScript in the browser.
// Modules - 


// JavaScript DOM Manipulation. Allowss change of property on a Webpage to happen.


// Event Handling - Listening to activities triggered by the users or clients


// JavaScript Object Notation