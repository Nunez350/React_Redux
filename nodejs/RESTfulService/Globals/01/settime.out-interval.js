var count = 0;

setInterval(()=> {
    if (count <5){
        console.log("count value " + count);

    } else {
        clearInterval(inter);
    }
    count++;
}, 5000)


