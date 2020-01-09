var express = require('express');
var path= require('path');
var app = express();
var bodyParser = require("body-parser");

let users = [
    {name: 'john'},
    {name: 'rohan'},
    {name: 'Roy'}
]


app.use(express.static(path.join(__dirname, 'public')));

// this route path will match acd and abcd
app.get('/ab?cd', function(req,res){
    res.send('ab?cd' );
    console.log('users');
});

// will match abcd, abbcd, abbcd, abbbcd, 
app.get('/ab+cd', function(req,res){
    res.send('ab?cd' );
    console.log('users');
});

// abcd, abxcd, abRANDOMcd, ab123cd,
app.get('/ab*cd', function(req,res){
    res.send('ab?cd' );
    console.log('users');
});

// this match /abe and abcde
app.get('/ab(cd)?e', function(req,res){
    res.send('ab?cd' );
    console.log('users');
});

var server = app.listen(5001, function () {
    console.log('Node server is running...');
});

