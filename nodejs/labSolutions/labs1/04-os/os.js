const os = require('os');

//	Total and free memory
console.log(os.totalmem());
console.log(os.freemem());

//	Information about CPUs
// console.log(os.cpus());
// console.log(os.networkInterfaces());


//OS Information
console.log(os.hostname());
console.log(os.type());
console.log(os.endianness());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
