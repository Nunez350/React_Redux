var express = require('express');


var routerV1 = express.Router();

routerV1.get('user', (res, req) => {
    res.send("This is the get request from the version 1");
    console.log("You are in the version 1 get request")
})

 module.exports = routerV1;

// app.listen(5000, () => {
//     console.log("The port is active");
// })