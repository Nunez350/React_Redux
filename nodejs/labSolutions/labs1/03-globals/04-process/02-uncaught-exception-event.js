

//It fires, as you might guess, whenever an exception has occurred that hasn't been 
//caught or dealt with somewhere else in your program. It's not the ideal way to 
//handle errors, but it can be very useful as a last line of defense if a program needs 
//to stay running indefinitely.

process.on('uncaughtException', function (err) {
  console.error('An uncaught error occurred!');
  console.error(err.stack);
});
//Uncaught Errors   
throw new Error('Custom err');