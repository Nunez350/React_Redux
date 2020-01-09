module.exports = class Cart {
	
	constructor(){
		this.lineItems[];
	}

	addProduct(item){
		this.lineItems.push(item);
	}

	removeProduct(item){
		this.lineItems = this.lineItems.filter((p)=>{
			return p.productName != pName;
		});
	}
	
	totalAmount(){
		let total = 0;
		this.lineItems.forEach(function (p){
			total = total + (p.productPrice * p.quantity);
		});
		return total;
	}
}