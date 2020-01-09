var cluster = require('cluster');
const http = require('http');
var numCPUs = require('os').cpus().length;
console.log(numCPUs);
if (cluster.isMaster) {
   // fork workers
   for ( var i = 0; i < numCPUs; i++){
       cluster.fork();

   } 
   cluster.on('online', function(worker){
       console.log('Worker' + worker.process.pid + ' is online');

   });
   cluster.on('exit', function (worker) {
       console.log('worker' + worker.process.pid + ' died');
   });
} else {
    http.createServer((request, response) => {
        response.end('hello world');
    }).listen(8080);
}

cluster.workers[id].kill();