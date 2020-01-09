var express = require('express');
var app = express();
// var path= require('path');


var users = [
    {id: 0, name: 'tj', email: 'tj@vision-MediaDeviceInfo.ca', role: 'member'},
    {id: 1, name: 'ciaran', email: 'ciara@gmail.com', role: 'member'},
    {id: 2, name: 'aaron', email: 'aaron@gmail.com', role: 'admin'}
];

function loadUser(req,res,next) {
    var user = users[req.params.id];
    if (user){
        req.user = user;
        next();
    } else {
        next(new Error('Failed to load user' + req.params.id));
    }
    
}
app.use(function(req,res,next) {
    req.authenticatedUser = users[0];
    next();
});

app.get('/',function(req,res) {
   res.redirect('/user/0');
});

app.get('/user/:id', loadUser, function(req,res) {
    res.send('Viewing user ' + req.user.name + req.user.email + " " +req.user.role);
    
});
app.listen(3000);

