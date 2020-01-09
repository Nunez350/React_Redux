var express = require('express');
var app = express();


const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');

app.set('view engine','pug');

var mysql = require('mysql')
var connection = mysql.createConnection((
    host: localhost,
))
