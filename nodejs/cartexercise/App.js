var Cart = require('./Cart');

// var lineItem= [];

var items = {
	product: 'book',
    price: 4.00,
    quantity: 1,
    lineitem:  1
};


var items2 = {
	product: 'book2',
    price: 4.00,
    quantity: 1,
    lineitem:  2
};

var li = Cart.create();
// var li2 = Cart.create();


li.addProduct(items);
li.addProduct(items2);
console.log(li.getInformation());
console.log(li.cartTotal());




// console.log(li2.getInformation());
// li.removeItem('book');
// console.log(li.getInformation());




// console.log();
// for  ( var i in lineItem){
//     console.log(lineItem[i]);  
// };

//  console.log(lineItem.getInformation());
// console.log(li2.getInformation());
// console.log(li.getInformation());


// lineItem.push(li);

// var items2 = {
// 	product: 'bomagazineok',
//     price: 10.00,
//     quantity: 1,
//     lineitem:  2
// };
// var li2 = Cart.create(items2);
// lineItem.push(li2);
