/*
The EventEmitter calls all listeners synchronously in the order in which they were registered. 
This ensures the proper sequencing of events and helps avoid race conditions and logic 
errors. When appropriate, listener functions can switch to an asynchronous mode of 
operation using the setImmediate() or process.nextTick() methods:

*/
var EventEmitter = require('events');
var logger = new EventEmitter();

logger.on('error', function(message) {
    setImmediate(()=> {
        console.log('ERR: ' + message);
    })
    
});

logger.emit('error', 'This is the first error');
logger.emit('error', 'This is the second error');