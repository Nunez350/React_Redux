const url = require('url');
const http  = require('http');

http.createServer((request, response) =>{
    let cookies = request.headers.cookie;

    if(!cookies){
        let cookieName = "session";
        let cookieVal = "123456";
        let numOfDays = 4;
        let expiryDate = new Date();

        expiryDate.setDate(expiryDate.getDate() +numOfDays);
        
        let cookieText = `${cookieName} = ${cookieVal}; expires=${expiryDate.toUTCString()}`;

        response.setHeader('set-Cookie',cookieText);
        response.writeHead(302, {'Location': '/'});

        return response.end();
    }


cookies.split(';').forEach(cookie => {
    let m = cookie.match(/(.*?)=(.*)$/);
    cookies[m[1].trim()] = (m[2] || '').trim();
});

response.end(`Cookie set: ${cookies.toString()}`);
}).listen(8080);