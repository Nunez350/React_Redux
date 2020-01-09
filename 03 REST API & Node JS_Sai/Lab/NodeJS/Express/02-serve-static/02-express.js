var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ab?cd',function(req,res){
    res.send('ab?cd');
})
.get('/ab+cd', function(req,res){
    res.send('ab+cd');
})
.get('/ab*cd', function (req, res){
    res.send('ab*cd');
})
.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
})
// .get('/response/append', (req, res) => {
//     res.append('Link', ['http://localhost/>', '<http:localhost:3000/>']) 
//     res.append('Set-Cookie','foo=bar; Path=/; HttpOnly') 
//     res.append('Warning', '199 Mics warnining')
//     res.end()
// })
.get('/response/set', (req , res) =>{
    res.set('Content-Type', 'text/plain')

    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
    })
    
    res.end("Reg");
})
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});