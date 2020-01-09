const ourPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        i = Math.random();
        if (i >=.5){
             resolve("success1");
        } else {

         reject(new Error("Goodbye, world!"));}
    }, 10);
    });
    
    ourPromise.then(
        (data) => {
        console.log(data);
    },
    err => {
        console.log(err);
    });
