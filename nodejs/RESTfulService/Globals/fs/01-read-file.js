const fs = require("fs");

fs.readFile('file.txt', "utf8", function(err, data){
    if (err){
        return callback(err)
    };

    console.log(data);
});

const data = fs.readFileSync(__dirname +"/text.txt", "utf8");
console.log(data)

