const fs = require('fs');

fs.stat(__dirname + '/test.txt',(err,stats) => {
    if(err){
        console.error(err)
            return
    }
    console.log(stats.isFile());
    console.log(stats.isSymbolicLink());
    console.log(stats.isDirectory());
});