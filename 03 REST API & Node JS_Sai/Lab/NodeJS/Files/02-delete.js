const fs = require('fs');

fs.unlink(__dirname + '/file.txt', (err)=>{
    if(err) 
        throw err;
    console.log("file.txt removed successfully");
});