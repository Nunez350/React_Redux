var EventEmitter = require('events');
var logger = new EventEmitter();


logger.once('error', function(message){
    setImmediate(()=> {
        console.log('Err: ' + message);

    })
});


logger.emit('error', 'this is the first error');

//logger.emit('error', 'this is the second error');