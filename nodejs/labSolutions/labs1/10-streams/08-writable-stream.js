const Stream = require('stream')

const readableStream = new Stream.Readable()
const writableStream = new Stream.Writable()

readableStream._read = () => (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.end()