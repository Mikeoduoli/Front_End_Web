console.log("Working Fetch API");

fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => console.log(data));

console.log('Our Valued Customer, Please give us a moment while I get some information back from the Records Dept')