// Classes are built using the "class" keyword.

class Car {
    constructor (colour, speed) {
        this.colour = colour;
        this.speed = speed;
    }

    // Method here doesn't require the function keyword
    turboOn () {
        console.log("Turbo is on!");
    }
}

// after defining class build a car object

const car1 = new Car("red", 120);