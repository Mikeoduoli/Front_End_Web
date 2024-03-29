// Working with Functions

function addNums(a, b) {
    var c = a +b;
    console.log(c);
}

addNums(5, 5);


var result = null;
console.log(result);


try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }

//   try {
//     console.log('hello)
//     } catch(e) {
//     console.log('caught')
//     }


    var bicycle = {
        wheels: 2,
        start: function() {
  
        },
        stop: function() {
  
        }
    };


    try {
        throw new Error();
        console.log('Hello');
      } catch(err) {
        console.log('Goodbye');
      }

      
  function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");

  var str = "Hello";
str.match("jello");

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }