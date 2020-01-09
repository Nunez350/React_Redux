var EventEmitter = require('events');
var logger = new EventEmitter();


logger.on('error', function(message){
        console.log('Err: ' + message);
});

logger.on('error', function(){
    console.log('Generic Err: ' );
});

logger.on('error', function(){
    console.log('Err:  ' + Date.now() );
});




logger.emit('error', 'this is the first error');

//logger.emit('error', 'this is the second error');

console.log(EventEmitter.listenerCount(logger, 'error'));
logger.removeAllListeners('error');
console.log(EventEmitter.listenerCount(logger, 'error'));