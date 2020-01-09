
// const fs = require('fs');

// const server = require('http').createServer();

// server.on('request', (req,res) => {
//     fs.readFile(__dirname + '/big.file', (err,data) => {
//         if (err) throw err;
//         res.end(data);
//     });
// });

// server.listen(8000);



// const fs = require('fs');

// const file = fs.createWriteStream(__dirname + '/big.file');

// for (let i=0; i <= 1e6; i++){
//     file.write(

//         "Lorem ipsum, or lipsum as it is sometimes known,  is dummy text used "
        
//     )
// }


// file.end();


const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,res) => {
    const src = fs.createReadStream(__dirname + '/big.file');
    src.pipe(res);
});

server.listen(8000);

