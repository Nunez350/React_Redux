var EventEmitter = require('events');
var logger = new EventEmitter();

logger.on('error', function(message) {
    console.log('ERR: ' + message);
});
logger.on('error', function() {
    console.log('Generic ERR: ');
});
logger.on('error', function() {
    console.log('ERR: ' + Date.now());
});


console.log(EventEmitter.listenerCount(logger, 'error'));
logger.removeAllListeners('error');
console.log(EventEmitter.listenerCount(logger, 'error'));

