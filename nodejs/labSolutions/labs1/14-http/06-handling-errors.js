var http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello World!');
    res.end();
});

// It will handle the errors in server

server.on('error', (err) => {
    throw err;
});

server.listen(4200, () => {
    console.log('Server listening on port : 4000');
});