function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }

  doubleAfter2Seconds(10).then((r) => {
    console.log(r);
  });

  let sum =   doubleAfter2Seconds(10)
          + doubleAfter2Seconds(20)
          + doubleAfter2Seconds(30);
console.log(sum);

  //Double after 2 seconds
  //The problem with the above code is it doesn’t actually wait for our promises to resolve before logging to the console.