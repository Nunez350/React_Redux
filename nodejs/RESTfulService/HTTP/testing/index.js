var my_module = require('./mymodule'); 
console.log((function(settings){
    return settings.split('').reverse().join('')
    })(my_module.name));