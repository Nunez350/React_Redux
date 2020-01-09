var connect = require("Connect");

var app = connect();

function sayHello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Connect');
}

function processing(req, res, next){
    res.write("processing....! Wait for 3 seconds.");
    next(new Error('BOOM!'));
}

function sayGoodBye(req, res, next){
    res.end("GoodBye");
}

function onError(err, req, res, next){
    res.end(err);
}
app
    .use(sayHello)
    .use(processing)
    .use(sayGoodBye)
    .use(onError)
    .listen(3031);

console.log("Server is listening");