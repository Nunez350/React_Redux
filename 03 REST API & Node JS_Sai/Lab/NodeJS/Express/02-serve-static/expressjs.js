var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

let users = {
    name: 'john',
    name: 'Sai',
    name: 'Allala'
};


app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req, res){
    res.send('The id you specified is ' + req.query.name + " " + req.query.location);
})
.post('/submit-data', function(req,res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' submitted sucessfully!');
})
.get('/',(req, res)=>{
    res.send('This is Home');
})
.get('/error',(req, res)=>{
    res.redirect('/');
})
.get('/users/:id([0-9]{5})', function(req, res){
    res.send("the id you specidfied is " + req.params.id);
    console.log("Regular Expression")
})
.get('/users/:id', function(req, res){
    res.send("the id you specidfied is " + req.params.id);
    console.log("The Basic One")
})
.get('*', function(req,res){
    res.send('Sorry, tis an invalid URL:' );
});

var server = app.listen(5001, function () {
    console.log('Node server is running..');
});

//http://localhost:5000/hello.txt
//http://localhost:5000/css/style.css   
//http://localhost:5000/js/app.js