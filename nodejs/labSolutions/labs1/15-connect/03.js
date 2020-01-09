var connect = require("connect");

connect()
    .use(connect.query()) // gives us req.query
    .use(connect.bodyParser())  // gives us req.body
    .use(connect.cookieParser()) // for session
    .use(connect.session({ secret: "asdf" }))     // gives us req.session
    .use(function (req, res) {
        res.write("req.url: " + req.url + "\n\n");
        res.write("req.method: " + req.method + "\n\n");
        res.write("req.headers: " + JSON.stringify(req.headers) + "\n\n");
        res.write("req.query: " + JSON.stringify(req.query) + "\n\n");
        res.write("req.body: " + JSON.stringify(req.body) + "\n\n");
        res.write("req.cookies: " + JSON.stringify(req.cookies) + "\n\n");
        res.write("req.session: " + JSON.stringify(req.session));
        res.end();
    }).listen(3000);