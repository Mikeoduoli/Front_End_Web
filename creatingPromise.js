const cart = ["monitor", "light", "mouse", "keyboard"]


// const promise = createOrder(cart);

createOrder(cart)
.then(function () {
    proceedToPayment(orderId);
})
.then(function(orderId) {
    console.log(orderId);
    // proceedToPayment(orderId)
    return orderId;
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    console.log(paymentInfo);
} )
.catch(function (err) {
    console.log(err.message);
});


// 

function createOrder(cart) { //createOrder is our API
    const pr = new Promise(function(resolve, reject) {
        // createOrder
        // validateCart
        // orderId

        if(!validateCart (cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // the logic for success
        const orderId = "234";
        if (orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
        }
    })

    return pr;
}

function proceedToPayment (orderId) {
    // 

    return new Promise(function(resolve, reject) {
        resolve("Payment Successful!")
    })
}

function validateCart(cart) {
    return true;
}