var foo = require('./foo03');

var obj1 = foo();
var obj2 = foo();

obj2.something = 456;

console.log('initial something:',obj1.something);
console.log('initial something:',obj2.something);
