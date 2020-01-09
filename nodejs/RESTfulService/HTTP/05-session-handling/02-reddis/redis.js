
const express = require('express')
const logger = require('morgan')
const session = require('express-session')
const redis = require('redis')
var RedisStore = require('connect-redis')(session);
var app = express();
app.use(logger('dev'));


var client  = redis.createClient();
app.use(session({
    resave: false,// dont save session if unmodifie
    saveUninitialized: false,//dont create session until something stored
    secret:'keyboard cat',//encryption
    //store: new RedisStore
   // store: new RedisStore({ client: client, logErrors: true})
   store : new RedisStore({ host: 'localhost', port: 6379, client: client, ttl: 20})
}));

app.get('/', function(req,res){
    var body = '';
    if ( req.session.views){
        ++req.session.views;
        if(req.session.views > 10 )
            req.session.destroy();
    }else {
        req.session.views=1;
        body += '<p> First time visiting? view this page in several browsers :) </p>';
    }
    res.send(body + '<p> viewed <strong>' + req.session.views + '</strong> times. </p>' );

});

app.listen(3001);


