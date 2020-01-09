const fs = require("fs");

fs.appendFile('file.txt', "Hello world nodejs", function(err){
    if (err){
        throw err;
    };

    console.log("file created successfully");
});

try {
    const file = fs.appendFileSync('test.txt', "hello world");
} catch (err){
    console.log(err)
}