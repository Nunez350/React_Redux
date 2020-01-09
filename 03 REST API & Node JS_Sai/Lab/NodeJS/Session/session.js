var express = require('express');
var logger = require('morgan');
var session = require('express-session');
var redis = require('redis')

var RedisStore = require('connect-redis')(session);
var client = redis.createClient();
var app = express();

app.use(logger('dev'));

app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: 'keyboard cat',
    store: new RedisStore({host:"localhost", port: 6379, client: client, ttl: 30})
}));

app.get('/', (req, res) => {
    var body = '';
    if(req.session.views){
        ++req.session.views;
    }else{
        req.session.views  =1;
        body += '<p> First Time  visiting. View the page in serveral Browsers ;)</p>';
    }
    res.send(body + '<p> viewed <strong>' +  req.session.views + '</strong> times.</p>');
});

app.listen(3000, () => {
    console.log("Node is running on port 3000.....");
})