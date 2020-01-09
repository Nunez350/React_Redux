var foo = require('./foo03');
console.log('initial something:',foo.something);

foo.something = 456;

var bas = require('./bar03');