var express = require('express');
var path= require('path');

var app = express();

//app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(5000, function (){
    console.log('Node server is running...');
});



//http://localhost:5000/hello.txt
//http://localhost:500/js/app.js
// http://localhost:5000/CSS/style.css