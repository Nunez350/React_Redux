var express = require('express');
var app = express();

app.use('/router/v1', require('./router1'));
app.use('/router/v2', require('./router2'));

app.get('/', (req, res) => {
    res.send('hello from the combined router');
    console.log("In the index get request");

});

app.listen(5000, () => {
    console.log("The port is active");
})