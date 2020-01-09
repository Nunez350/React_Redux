// buf = new Buffer(256);  
// len = buf.write("Simply Easy Learning");  
// console.log("Octets written : "+  len);  
// console.log(buf);


buf = new Buffer(256);  
for (var i = 0 ; i < 256 ; i++) {  
  buf[i] = i+1;  
}  
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz  
console.log( buf.toString('ascii',0,5));   // outputs: abcde  
console.log( buf.toString('utf8',0,5));    // outputs: abcde  
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde  