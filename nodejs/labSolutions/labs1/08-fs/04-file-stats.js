const fs = require("fs");

fs.stat(__dirname + '/test.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stats.isFile());
    console.log(stats.isSymbolicLink());
    console.log(stats.isDirectory());
    console.log(stats.size);
  });

  const status = fs.statSync(__dirname + '/file.txt');

  console.log(status.isFile());
  console.log(status.isSymbolicLink());
  console.log(status.isDirectory());
  console.log(status.size);