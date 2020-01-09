var stream = require('stream')

var stream = new stream();

stream.readable = true;

var c = 64;

var timer = setInterval(function(){
    if(++c >= 75){
        clearInterval(timer);
        stream.EventEmitter('end');
    }
    else stream.EventEmitter('data',String.fromCharCode(c));
},100);

stream.pipeline(process.stdout);