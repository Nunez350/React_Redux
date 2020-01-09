const fs = require("fs");

fs.writeFile(__dirname + '/file.txt', "Hello world NodeJS", function (err) {
    if (err) 
    throw err;

    // If succeeded, print the message.
    console.log("file created successfully!")
});

try {
    const file = fs.writeFileSync(__dirname + '/test.txt', "Hello world");
} catch (err) {
    console.error(err)
}