//Conditional Statement
// if...else
let num = 15;

if(num < 15) {
    console.log("Number is less than 15")
} else {
    console.log("umber is great than 15");
    
}

//Switch statement

let place = 'first';

switch (place) {
    case 'first' :
        console.log('Gold');
        break;
    case 'second' :
        console.log('Silver');
        break;
    case 'third' :
        console.log('Bronze');
        break;
    default:
        console.log('Try Next time');
        break;
}

// Looping Constructs - Loops to help developers continuously execute a certain piece of code until a given condition is met
// for loop  - has counter, helps where to start and when to stop execution
let i;
for(i = 0; i < 10; i++) {
    console.log(i);
    i++;
}

// The while Loop
let w = 1;

while (w < 4) {
    console.log(w);
    w++;
}

// Example, for Loop
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

console.log("Go");


// Example, While Loop
let count = 3;

while(count > 0) {
    console.log(count);
    count--;
    
}


// Nested Loops, loops within a loop
for(let year = 2024; year < 2027; year++){
    console.log(year);
    for(let month = 6; month < 9; month++){
        console.log("*************", month)
    }
}
