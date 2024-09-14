// Arrays, Objects and Functions

// Functions - A chunk of reusable block of code
function addTwoNum (a, b, c) {
    c = a + b
    console.log(c);
}

addTwoNum(2, 5)

// Storing data in Arrays
// An array literal syntax [] - (square brackets) 

arr1 = ["wheat", "barley", "salt", "potato", "rocks"]

console.log(arr1[3])

// Introduction to Objects
// Objects are collections of related properties

let storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills= 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "Finding Business Opportunities";
storeManager.greetong = "Let's make money"


// more objects

let assistantMAnager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

console.log(`\n ${assistantMAnager.health}`);

// Adding properties to an object using a dot notation
assistantMAnager.nextAchievement = "Open a new store"

console.log(assistantMAnager.nextAchievement)
console.log(assistantMAnager)

// Math Object
Math.random();

let decimal = Math.random();

console.log(decimal)
console.log(decimal * 100);

// Math.ceil
let rounded = Math.ceil(0.001)


// Iterables

// Iterating over an array with a for loop

let letters = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}

// Array/String concatenation with .concat

let greeting = 'Namaste';
let name = 'Mike';

console.log(`First way to Concatenate, ${greeting.concat(' '.concat(name))}`);

// TypeOf operator

// let test = typeof("Hello World!");
// let test = typeof(10);  
// let test = typeof(55.6);
// let test = typeof(true);
// let test = typeof(1 < 2);
// let test = typeof([1, 2, 3, 4, 5]); //Arrays in JavaScript are actually objects! Suprisingly
let test = typeof({ firstProperty: 1});

console.log(test);


// Bugs and errors - Error Handling
try {
    console.log(a + b);
    console.log("This will not stop even on stumbling the error!")
    
} catch (error) {
    console.log(typeof(error));
    console.log("There was ", error);
}

console.log("Everything is run to last execution");
