const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream(__dirname + '/big.file');
  src.pipe(res);
});

server.listen(8000);