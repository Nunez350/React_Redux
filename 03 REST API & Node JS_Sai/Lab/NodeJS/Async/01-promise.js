const ourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    },1000);
});

ourPromise.then(data => {
    console.log(data);
});