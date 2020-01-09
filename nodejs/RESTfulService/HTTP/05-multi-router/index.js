var express = require('express');
var app = express();
// var path= require('path');
app.use('/app_v1', require('./app_v1'));


//app.use('/api/v2', require('./controlers/api_v2'));

app.get('/', function(req,res){
    res.send('hello from root route')


});

// app.listen(3000);
// console.group('express started on port 3000');
var server = app.listen(5001, function ( ) {
    console.log('node server is running')
});

