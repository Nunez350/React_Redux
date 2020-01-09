var express = require('express');
var path= require('path');
var app = express();
var bodyParser = require("body-parser");

let users = [
    {name: 'john'},
    {name: 'rohan'},
    {name: 'Roy'}
]

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('this is homeeeee id you specified is' );
    console.log('users');
});

app.post('/submit-data', function(req,res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + 'submitted successfullu');
  
    console.log('users');
});

// query strings
// send header information
// re 9params, body


app.get('/content', function(req,res,next){
    res.format({
        html:function (){
            res.send('<ul>' + users.map(function (user) { return '<li>' +
            user.name + '</li>' ; }).join('') + '</ul>');
        },
        text: function () {
            res.send(users.map(function (user) { return '-' + user.name + '\\n'; }).join(''));
        },
        json: function () { res.json(users);}       
    })
}



);
app.get('/users', function(req,res){
    res.send('the id you specified is' + req.query.name + " " + req.query.location);
    console.log('users');
});

app.get('/', function(req,res){
    res.send('this is home!');
    console.log('home');
});

app.get('/error', function(req,res){
    res.redirect("/");
    console.log('error');
});


app.get('/users/:id([0-9]{5})', function(req,res){
    res.send('id' + req.params.id);
    console.log('reg');
});

app.get('/users/:id', function(req,res){
    res.send('the id you specified is' + req.params.id);
    console.log('not reg');
});





app.get('*', function(req,res){
    res.send('sorry, this is an invalid url');
    console.log('not vali');
});

var server = app.listen(5001, function () {
    console.log('Node server is running...');
});

