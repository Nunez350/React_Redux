const http = require('http')

const req = http.get({host: 'localhost:8080', path: '/'}, (res) => {
    let content = '';

    res.on('data', (chunk) => {
        content += chunk;
    });

    res.on('end',  () => {
        console.log(content);
    });
});