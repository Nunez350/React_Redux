var express = require('express');
let cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
router = express.Router();

var users = [
    {id: 0, name: 'Thomas Johnson', email: 'tj@gmail.com', role: 'member'},
    {id: 1, name: 'Ronald Wealsly', email: 'ron@gmail.com', role: 'member'},
    {id: 2, name: 'Steve Rodgers', email: 'steve@gmail.com', role: 'admin'},
];

function loadUser(req, res, next){
    var user = users[req.params.id];
    if(user){
        req.user = user;
        next();
    }
    else{
        next(new Error('Failed to load user' + req.params.id));
    }
}

app.get('/setuser/:id', (req, res) => {
    res.cookie("UserName", users);
    res.send("Cookie has been added to the user" + req.users.name);  
})

app.get('/getuser', (req,res) => {
    res.send(req.cookies);
})

app.use((req, res, next) => {
    req.authenticatedUser = users[0];
    next();
});

app.get(('/'),(req, res) => {
    res.redirect('/user/0');
});

app.get(('/user/:id'),loadUser, (req, res) => { 
    res.send('Viewing user ---   ' + req.user.name);
    console.log(req.params.id);
});

app.listen(3000, ()=>{
    console.log("Port 3000 is running........")
});
