const fs = require('fs')

const readerStream = fs.createReadStream('data.txt')

const writerStream = fs.createWriteStream('data2.txt')
readerStream.pipe(writerStream)
console.log('Piping ended')