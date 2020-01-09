var cart = require('./cart');

var pl = cart.create();

pl.addProduct({
    productName: "laptop",
    productPrice: 1000,
    quantity: 2
});
pl.addProduct({
    productName: "iphone",
    productPrice: 1200,
    quantity: 2
});
console.log(pl.productCount());
pl.removeProduct('iphone');
console.log(pl.productCount());
//console.log(pl.totalAmount());

