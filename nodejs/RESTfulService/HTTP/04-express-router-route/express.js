var express = require('express');
var path= require('path');
var app = express();
var bodyParser = require("body-parser");

let users = [
    {name: 'john'},
    {name: 'rohan'},
    {name: 'Roy'}
]


app.get('/response/append', function (req,res){
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
    res.append('Warning', '199 Miscellaneaous warning')

    res.end()
})


app.get('/response/set', function (req,res){
    res.set('Content-type', 'text/plain')
    res.set({
        'Content-Type': 'text/plain',
        'Content-length': '123',
        'ETaq': '12345'
    })

    res.end()
})



var server = app.listen(5001, function () {
    console.log('Node server is running...');
});
