
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

logger.emit('error', 'This is the first error');
logger.emit('error', 'This is the second error');

console.log(EventEmitter.listenerCount(logger, 'error'));