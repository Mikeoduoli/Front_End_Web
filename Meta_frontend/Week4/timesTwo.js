// Task 1: Code the timesTwo function declaration
function timesTwo(num) {
    return num * 2;
}

timesTwo();
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;

// In Node.js environments or when using CommonJS 
// modules (as indicated by the require syntax in the test file), 
// you should use module.exports instead of export default.