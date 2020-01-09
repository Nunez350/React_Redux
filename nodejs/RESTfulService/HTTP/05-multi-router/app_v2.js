var express = require('express');
var app_v2 = express.Router();


app_v2.get('/test', (req, res) =>{
    res.send("from test")
}
);

module.exports = app_v2;
