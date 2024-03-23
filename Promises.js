const cart = ["shoes", "pants", "fleece-jacket"]

createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
})

const promise = createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId)
});

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

//our promise is "user"
const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data) {
    console.log(data)
})

// Promise chaining solves a callback hell (Pyramid of Doom)

promise
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updatedWalletBalance(paymentInfo)
    })

    // With Promise chaining we solve the problem of 
    // callback hell in a much cleaner, fashionable 
    // and easily understable manner.