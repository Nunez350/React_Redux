

module.exports = class Cart {
    constructor() {
        this.lineitems = [];
    }

   

    addProduct(item){
       this.lineitems.push(item);
    };
    
    getInformation() {
        return this.lineitems;
    };



}






// var Cart = function () {
//     this.lineitems = [];

//     this.data = {
//         product: null,
//         price: null,
//         quantity: null,
//         lineitem:  null
//     };

//     this.getInformation = function () {
//         return this.lineitems;
//     };
    
//     this.addProduct = function(lineitem){
//         this.lineitems.push(lineitem);
//     };
    
//     this.removeItem = function(pName){
//         this.lineitems = this.lineitems.filter((p)=> {
//             return p.product != pName;
//         });
//     }

//     this.cartTotal = function(){
//         let total = 0;
//         this.lineitems.forEach(function (p) {
//             total = total + (p.price * p.quantity)
//         });
//         return total;
//     }
// };



// exports.create = function () {
// 	var instance = new Cart();
// 	return instance;
// };

// // exports.getCount = function () {
// // 	return count;
// // };
