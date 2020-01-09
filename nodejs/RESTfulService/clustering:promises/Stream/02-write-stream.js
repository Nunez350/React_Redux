// const fs = require('fs')
// const data = 'Writable stream Example'
// const writerStream = fs.createWriteStream(__dirname = '/write.txt')
// writerStream.write(data, 'UTF-8');
// writerStream.end();
// writerStream.on('finish', function (){
//     console.log('Writing completed');
// })
// writerStream.on('error', function (err){
//     console.log(err.stack)
// })
// console.log('Streaming ended')



const fs = require('fs');
const data = 'writable Stream Example'
const writerStream = fs.createWriteStream(__dirname + '/write.txt');
writerStream.write(data, 'UTF-8');
writerStream.end();
writerStream.on('finish',function(){
    console.log('writing commpleted');
})
writerStream.on('error',function(err){
    console.log(err.stack);
})
console.log('streaming Ended');