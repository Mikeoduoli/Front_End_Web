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

