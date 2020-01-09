var Calculator = function (sum) {
    this.sum = sum;
  
};


Calculator.prototype = {
    add : function (x,y) {
        var val = x +y ;
        this.sum = val;
        return val;
    },

    sub: function(x,y){
        var val = x-y;
        this.sum = val;
        return val;
    }


}

var calc = new Calculator(0.0);
console.log(calc.sum);
calc.add(40,2);
calc.sub(40,2);