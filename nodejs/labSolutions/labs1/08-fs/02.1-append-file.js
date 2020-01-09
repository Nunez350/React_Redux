const fs = require("fs");

fs.appendFile(__dirname + '/file.txt', "Hello world NodeJS", function (err) {
    if (err)  throw err;;

    // If succeeded, print the message.
    console.log("file created successfully!")
});

try {
    const file = fs.appendsFileSync(__dirname + '/test.txt', "Hello world");
} catch (err) {
    console.error(err)
}