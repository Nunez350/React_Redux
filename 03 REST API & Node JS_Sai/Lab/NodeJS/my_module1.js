let http = require("http");

let commonResponse = function(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Request Complete");
};

let handleApi = function(req, res) {
  if (req.method == "POST") {
    commonResponse(res);
    res.end();
  }
};

let handleWeb = function(req, res) {
  commonResponse(res);

  res.end();
};

http.createServer(handleApi).listen(4513);
http.createServer(handleWeb).listen(4514);
