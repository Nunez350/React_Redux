const fs = require('fs');

var file = fs.createWriteStream(__dirname + '/bigfile.file');

for(let i=0; i<=1e5; i++){
    file.write("The U.K.'s Competition and Markets Authority on Wednesday outlined a series of preliminary proposals to regulate online platforms and digital advertising, as regulators worldwide tighten their grip on the tech industry.");
}
file.end();