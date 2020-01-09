var foo = require('./foo');

// create a new object
var obj1 = foo();
var obj2 = foo();

obj2.something = 456;
// use it
console.log(obj1.something); // 123
console.log(obj2.something); // 456
