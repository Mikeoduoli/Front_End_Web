var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {

    var message = "%c" + txt;

    var style = `color: ${color};`

    style += `background: ${background};`

    style += `fontSize: ${fontSize};`
    
    console.log(`message`, `style`);
}

consoleStyler(`message`);