var connect = require('connect');
var app = connect();

function sayHello(req,res,next) {
    console.log("in heloo");
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello connect');
    next(new Error('boom'));
}

function processing(req,res, next){
    console.log("in processing");
    res.write("processing!...! wait for 3 seconds");
    new Error('boom')
    next();
}

function sayGoodBye(req,res, next){
    console.log("in Goodbye");
    res.end("GoodBye!");
}

function onError(err,req,res,next){
    console.log("error")
    res.end(err);
}
app
    .use("/hello",sayHello)
    .use(processing)
    .use(sayGoodBye)
    .use(onError)
    .listen(3031);

console.log("server is listening")