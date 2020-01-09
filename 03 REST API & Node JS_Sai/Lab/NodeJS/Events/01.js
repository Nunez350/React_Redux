var EventEmitter = require('events');

var ee = new EventEmitter();

ee.on("message", (text) => {
    console.log(text);
})

ee.emit("message", 'hello world');