console.log(process.env)
console.log(process.env.HOME)
console.log(process.pid)
console.log(process.execPath)
console.log(process.version)
console.log(process.platform)
console.log(process.title)


process.chdir('/Users/roynunez/Rohan/nodejs/RESTfulService/Globals/process');
console.log(process.cwd());




console.log(process.argv.slice(2));

// const fs = require("fs");

// process.on('exit',function() {
//     fs.writeFileSync(_dirname + '/myfile.txt',
//                 'This must be saved on exit')
// });

// process.on('uncaughtException', function (err) {
//     console.error('An uncaught erroe occurred');
//     console.error(err.stack);
// })

// throw new Error('Custom err');


const data1 = require('./data.json');
console.log(require.cache)