const Stream = require('stream')
const readableStream = new Stream.Readable()
readableStream.setEncoding('utf8');


readableStream.push('hi!');
readableStream.push('ho!');


readableStream.on('readable', () => {
    console.log(readableStream.read())
  })

  
readableStream._read = () => {
   
}