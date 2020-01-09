var p1 = new Promise(function(resolve, reject){
    setTimeout(resolve,1000,"one");
});

var p2 = new Promise(function(resolve, reject){
    setTimeout(resolve,100,"two");
});

Promise.race([p1,p2]).then(function(val){
    console.log(val);
});