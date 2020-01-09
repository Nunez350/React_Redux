// buf = new Buffer(256);
// len = buf.write("Simply Easy Learning");
// console.log("octets written :" + len);
// console.log(buf);

// const os = require('os');
// console.log(os.cpus());

const path = require('path');

// let join = path.join("../","one", "two","three.html");
// console.log(join);

// let dname = path.dirname("../one", "two","three.html");
// console.log(join);

// let bname = path.basename("../one/two/three.html");
// console.log(bname);

console.log(path.resolve('/one/two/three/four'));

path.resolve('/one','/two/three/','four');

console.log(path.resolve('one','two/three','four'));