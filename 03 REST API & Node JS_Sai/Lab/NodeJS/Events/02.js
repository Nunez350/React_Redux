var EventEmitter = require('events');

var ee = new EventEmitter();

ee.on("error", (error)=>{
    console.log("ERR:", error)
});

ee.on("error", ()=>{
    console.log("Time of Error:", Date(2018, 11, 24));
});

ee.emit("error", 'this is the first error message');
ee.emit("error", 'this is the second error message');
 
//Remvoe listeners\
console.log(EventEmitter.listenerCount(ee,'error'));
ee.removeAllListeners('error');
console.log(EventEmitter.listenerCount(ee,'error'));
