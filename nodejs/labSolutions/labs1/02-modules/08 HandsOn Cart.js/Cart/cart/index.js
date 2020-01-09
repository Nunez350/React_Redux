
var Cart = function () {
	this.lineItems = [];
    this.lineItem = {
        productName: null,
        productPrice: null,
        quantity: null
    };
    this.addProduct = function(item){
        this.lineItems.push(item);
    }
    this.removeProduct = function(pName){
       this.lineItems = this.lineItems.filter((p)=>{
            return p.productName != pName;
        });
    }
    this.totalAmount = function(){
        let total = 0;
        this.lineItems.forEach(function (p) {
            total = total + (p.productPrice * p.quantity);
          });
          return total;
    }
    this.productCount = function(){
        return this.lineItems.length;
    }
};

exports.create = function () {
	var instance = new Cart();
	return instance;
};
