const fs = require("fs");

fs.readFile(__dirname + '/file.tx',"utf8", function(err, data) {
    if (err) {
        throw err;
    };

    // If succeeded, print the contents.
    console.log(data);
});

const data = fs.readFileSync(__dirname + "/test.txt", "utf8");
console.log(data);




