var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><p>This the home page</p></html> ')
        res.end();
    }
    else if(req.url=='/student'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><p>This the student page</p></html> ')
        res.end();
    }
    else if(req.url=='/admin'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><p>This the admin page</p></html> ')
        res.end();
    }
    else    
        res.end("invalid Request");
}).listen(8080);