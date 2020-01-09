for(var i = 0; i < 20 ;i++){
const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var randomVal = Math.random();
        console.log(randomVal);
        if( randomVal >= 0.5){
             resolve("The number is greater than 0.5");
        }
        else{
            reject("Your number sucks");
        }
    },1000)
})

randomPromise.then(
    data => {
        console.log(data);
    },
    err  => {
        console.log(err);
    }
)}