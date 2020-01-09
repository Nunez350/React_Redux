// setTimeout(()=> {
//     console.log("hello");
// },5000);

var count = 0;
var inter = setInterval(()=>{
    if(count < 5){
        console.log("Count value is: " + count);
    } else {
        clearInterval(inter);
    }
    count++;
},1000);