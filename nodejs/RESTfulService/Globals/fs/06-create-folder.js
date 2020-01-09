const fs = require("fs");

const folderName = '/Users/roynunez/Rohan/nodejs/RESTfulService/Globals/fs/second'

try {
    if (!fs.existsSync(folderName)){
        fs.mkdirSync(folderName)
    }
} catch (err) {
    console.error(err);
}

