const http = require('http')

const req = http.get({ host: 'webcode.me', path: '/'}, (res) => {
    let content = '';
    
    res.on('data', (chunk)=> {
        content += chunk;
    });

    res.on('end',() => {
        console.log(content);
    });
});

req.end();