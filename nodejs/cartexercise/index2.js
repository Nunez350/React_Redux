module.exports = class Cart {
    constructor () {
        this.lineitems = [];
    }
    addProduct(item){
        this.lineitems.push(item);
    }
}