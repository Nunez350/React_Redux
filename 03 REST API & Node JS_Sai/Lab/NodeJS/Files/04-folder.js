const fs = require('fs');

const folderName = __dirname + '/mkdirFolder';

try {
    if(!fs.existsSync(folderName))
        fs.mkdirSync(folderName);
} catch (error) {
    console.error(error)
}