var Stream = require('stream');
var stream = new Stream();
stream.readable = true;


var c = 64;
var timer = setInterval(function () {
    if (++c >= 85 ){
        clearInterval(timer);
        stream.emit('end');
    }
    else stream.emit('data',String.fromCharCode(c));
},100);
stream.pipe(process.stdout);
