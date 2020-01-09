var express = require('express');


var routerV2 = express.Router();

routerV2.get('user', (res, req) => {
    res.send("This is the router from Version 2");
    console.log("You are in the version 2 get request")
})

module.exports = routerV2;

