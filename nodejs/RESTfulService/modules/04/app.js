var foo = require('./foo');

var obj1 = foo();

var obj2 = foo();

obj2.something = 457;


console.log(obj1.something);
console.log(obj2.something);