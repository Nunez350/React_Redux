// const os = require('os');

// console.log(os.cpus());
// //console.log(os.freemem());

// // console.log(os.hostname());
// // console.log(os.type());
// // console.log(os.endianness());

const path = require('path');

// //console.log(path.normalize("../one////two/./three.html"));

// console.log(path.normalize('\one\iwo\ihree.html'));
// //let join = path.join("../", "one","two", "three.html");


// let bname = path.basename("../one/two/three.html");
// console.log(bname);

// let pstring = "../one/two/three.html";
// console.log(path.extname(pstring));

console.log(path.resolve('/one/two', '/three/four'));
console.log(path.resolve('/one/two/three', '../','four'));
console.log(path.resolve('one',"two/three", "four"))