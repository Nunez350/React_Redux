const fs = require("fs");

fs.unlink(__dirname + '/test.txt', (err) => {
    if (err) throw err;
    console.log('test.txt was removed');
  });
  
  fs.unlinkSync(__dirname + '/file.txt');