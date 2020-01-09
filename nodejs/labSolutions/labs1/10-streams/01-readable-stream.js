const fs = require('fs')

let data = ''
const readerStream = fs.createReadStream(__dirname + '/data.txt')
//readerStream.setEncoding('UTF8');
readerStream.on('data', (chunk) => {
   data += chunk
})
readerStream.on('end',() => {
   console.log(data)
})
readerStream.on('error', (err) => {
   console.log(err.stack)
})

console.log('Node readerStream');