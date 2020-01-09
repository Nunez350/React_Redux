
// process.on('exit',function() {
//     fs.writeFileSync(__dirname + '/myfile.txt', 'This Must be saved on exit');
// });

process.on('uncaughtException', function(err){
    console.error();
    console.error(err.stack);
});

throw new Error('Custom error, Dude wtf');