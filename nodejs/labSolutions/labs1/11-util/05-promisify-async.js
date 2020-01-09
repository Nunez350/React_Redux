const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
async function doFile() {
    try {
        const text = await readFile('./index.js', 'utf8');
        console.log(text);
    } catch (err) {
        console.log('Error', err);
    }
}
doFile();