//What is "this"?
"use strict"

// this in global space

this

// this inside a function.
// The value depends on strict/non-strict mode
function xy () {
    this
}

xy();
// this inside an object's method

const obj = {
    a : 10, 
    // x is the method of an object obj. The value depends how the function is called.
    X :function () { 
        console.log(this);
    },
};

obj.X();

// the value of this keyword is object in our example.

const stud = {
    student: "Obed",
    printName: function () {
        console.log(this.student);
    },
}

stud.printName();

// Use of call apply nind methods (Sharing methods)
const stud2 = {
    student : "Deepika" 
};

stud.printName.call(stud2);

// this inside arrow function
// -> Enclosing Lexical Context
const obj1 ={
    a: 10,
    x: () => console.log(this),
};

obj1.x(); 
// -> window object

// this inside nested arrow function

const obj2 = {
    a : 10,
    x: function () {
        // Enclosing lexical context
        const y = () => {
            console.log(this);
        } 
        y();
    },
};

obj2.x();
// -> obj2


// this inside DOM elements

// this inside DOM elements => reference to HTMLelement