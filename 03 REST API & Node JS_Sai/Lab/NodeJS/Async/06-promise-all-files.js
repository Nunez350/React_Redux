const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const files = [
    'temp/sample1.txt',
    'temp/sample2.txt',
    'temp/sample3.txt',
];

const promises = files.map(file => readFile(`${__dirname}/${file}`, 'utf8'));

Promise.all(promises)
    .then(data => {
        data.forEach(text => console.log(text));
    }) 
    .catch(error => console.log('err: ', error));

