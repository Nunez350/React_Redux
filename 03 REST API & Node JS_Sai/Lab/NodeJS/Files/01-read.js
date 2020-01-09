const fs = require('fs');

// fs.readFile(__dirname + '/file.txt',"utf8", function(err,data){
//     if(err){
//         throw new Error(err);
//     };
//     console.log(data);
// });

// setImmediate(function () {
//     const data = fs.readFile(__dirname + "/test.txt","utf8", (err, data) => {
//         if(err){
//             throw new Error(err);
//         }
//     });
//     console.log(data);
// });


fs.writeFile(__dirname + '/file.txt',"Hello World Nodejs", function(err){
    if(err) 
        throw err;
    console.log("file created successfully");
});

try {
    const file = fs.writeFileSync(__dirname + '/test.txt', "Hello World");
} catch (error) {
    console.error(err);
}

//append
fs.appendFile(__dirname + '/file.txt'," This is the appened part of the file.txt", function(err){
    if(err) 
        throw err;
    console.log("file created successfully");
});

try {
    const file = fs.appendFileSync(__dirname + '/test.txt', " Lookie here, i just appened to the test.txt");
} catch (error) {
    console.error(err);
}

