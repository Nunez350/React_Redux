const ourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
         return reject(new Error('Good bye, world'));
    },1000);
});

ourPromise.then(data => {
    console.log("Success");
},
err => {
    console.log(err);
});