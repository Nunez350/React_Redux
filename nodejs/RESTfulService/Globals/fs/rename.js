const fs = require("fs");

fs.rename(__dirname + '/text.txt', __dirname + '/hello.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete');
});