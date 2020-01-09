const express = require('express')
const cors = require('express-session')
const app = express()


app.use(session({
    resave: false,// dont save session if unmodifie
    saveUnitialized: false,//dont create session until something stored
    secret:'keyboard cat' //encryption
}));

app.get('/', function(req,res){
    var body = '';
    if( req.session.views){
        ++req.session.views;

    }else {
        req.session.views=1;
        body += '<p> First time visiting? view this page in several browsers :) </p>';
    }
    res.send(body + '<p> viewed <strong>' + req.session.views + '</strong> times. /p>' );

});

app.listen(3001);


