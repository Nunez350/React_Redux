const getData = async() => { 
	var y = await "Hello World"; 
	console.log(y); 
} 

console.log(1); 
getData(); 
console.log(2); 

/**
 * Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
 */