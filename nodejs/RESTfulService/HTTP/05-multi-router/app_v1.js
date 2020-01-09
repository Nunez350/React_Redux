var express = require('express');
// var path= require('path');

var app_v1 = express.Router();


app_v1.get('/test', (req, res) =>{
    res.send("from test")
}
);

module.exports = app_v1;


// router.route('users/:user_id')
//     .all(function (req,res,next){
//         console.log("hello");
//         next()
//     })

//     .get(function (req,res,next ){
//         res.json(req.user)
//     })