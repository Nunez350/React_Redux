const fs = require("fs");

fs.stat(__dirname + '/test.txt', (err,stats) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(stats.isFile());
    console.log(stats.isSymbolicLink());
    console.log(stats.isDirectory());
    console.log(stats.size);
});

const status = fs.statSync(__dirname + '/test.txt');

console.log(status.isFile());
console.log(status.isSymbolicLink());
console.log(status.isDirectory());
//console.log(stats.size);
