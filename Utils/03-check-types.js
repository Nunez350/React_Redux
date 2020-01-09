var util = require('util');
console.log(util.isArray([]));
console.log(util.isArray({ length: 0}));

console.log(util.isDate(new Date()));

console.log(util.isError( new Error('this is an errro')));