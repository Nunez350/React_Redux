var express = require('express');
var path= require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req,res){
    res.send('the id you specified is' + req.query.name + " " + req.query.location);

});

app.get('/users/:id', function(req,res){
    res.send('the id you specified is' + req.query.name + " " + req.params.id);

});

var server = app.listen(5001, function () {
    console.log('Node server is running...');
});

