
const fs = require("fs");

fs.writeFile('file.txt', "Hello world nodejs", function(err){
    if (err){
        throw err;
    };

    console.log("file created successfully");
});

try {
    const file = fs.writeFileSync('test.txt', "hello world");
} catch (err){
    console.log(err)
}