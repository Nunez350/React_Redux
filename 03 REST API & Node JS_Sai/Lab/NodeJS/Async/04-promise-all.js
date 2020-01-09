const myPromiseFunction = () => {
    console.log("MyPromiseFunction()");

    return new Promise((resolve,reject) => {
        setTimeout(resolve, 1000,"resolve");
    });
};

const myRejectingFunction = () => {
    console.log("my rejecting function");
    return new Promise((resolve,reject) => {
        setTimeout(reject,10, "rejected");
    });
};

Promise.all([myPromiseFunction(), myPromiseFunction(), myRejectingFunction()])
    .then((val) => {
        console.log(val);
    })
    .catch((val) => {
        console.log(val);
    });