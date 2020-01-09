const delayWithRandom = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      return resolve();
    }
    return reject();
  }, 1000);
});


delayWithRandom
  .then(() => {
    console.log("success");
  }, () => {
    console.log("err");
  });

