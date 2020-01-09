var express = require('express');
var path= require('path');
var app = express();

var router = express.Router();
app.use('/', router);

router.param('user_id', function (req, res, next, id ){
    req.user = {
        id: id,
        name: 'Tj',
    }
        next()
});

router.get('/test', (req, res) =>{
    res.send("from test")
}
);

router.route('users/:user_id')
    .all(function (req,res,next){
        console.log("hello");
        next()
    })

    .get(function (req,res,next ){
        res.json(req.user)
    })
    .put(function (req,res,next) {
        req.user.name = req.params.name
        res.json(req.user)
    })

    .post(function (req,res,next) {
        next(new Error('not implmented'))
    })
    .delete(function (req,res,next ){
        next(new Error('not implmented'))
    })

    var server = app.listen(5001, function ( ) {
        console.log('node server is running')
    });




