const fs = require("fs");

process.on('exit', function () {
    fs.writeFileSync(__dirname + '/myfile.txt', 
                    'This MUST be saved on exit.');
  });