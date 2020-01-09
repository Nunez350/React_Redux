// let http = require('http');
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text.html'});
//     res.write('<h1> Hello World</h1>');
//     res.end('Hello World from the Server'); 
// });
// server.listen(8080);

const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Hello Express');
});
const server = app.listen(8081, () => {
    console.log('App Listening on port 8080');
});