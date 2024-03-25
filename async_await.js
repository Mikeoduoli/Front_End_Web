// creating a Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise-Resolved Value!");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise-Resolved Value!");
    }, 5000);
});

//async await always return a Promise
async function getData() {
    return "Hello", p;
}

//How to get data or values out of a Promise
const dataPromise = getData();
dataPromise.then((res) => console.log(res));


// using async await
async function handlePromise() {

    console.log("Hello World") //This will be printed first

    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript");
    console.log(val2);
}

handlePromise();

// How the Promise used to be handled before
function getData() {
    p.then((res) => (console.log));

    console.log("Namaste JavaSCript");
}

getData();