const getData = async() => { 
	var data = "Hello World"; 
	return data; 
} 

getData().then(data => console.log(data)); 


/**
 * Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.
 */