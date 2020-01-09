
function showMessage() {
    const messages= [
        'good morning',
        'good day',
        'good night',
        'good qeek'
    ]
    
    const mesageNo = Math.floor(Math.random() * messages.length);
    // document.getElementById('banner-image').setAttribute('src', IMAGE_BASE + banner[imageNo].image);
    // const link = document.getElementById('banner-link')
    // link.setAttribute('href', WIKI_BASE + banner[imageNo].href);
    // link.setAttribute('target', banner[imageNo].href);
    // document.getElementById('banner-description').innerHTML = banner[imageNo].desc;
    const now = new Date();
    document.getElementById('date').innerHTML = now.toString();
    // change to next image every 3 seconds
    setTimeout('showMessage()', 3000);
    messages[mesageNo];
     document.getElementById('msg').innerHTML = messages[mesageNo];
}
window.onload = showMessage;


// function sum(){
//     let total =0;
//     for ( let i =0; i< arguments.length; i++) {
// 		total += arguments[i];
// 	 }
// return total;}	
// undefined

// function outer(){
//     let x = 10;
//     function inner () {
//         let y = 5;
//         console.log(x+y);
//     }
//     return inner;
// }


//self-invoking function
var m = (function(){
    function sq(x) {
        return x * x ;
    }
    return{
        add: function(x,y){
            return x +y ;
        },
        sub: function(x,y){
            return x -y;
        },
        cube: function(x){
            return sq(x) * x;
        }
    }
})();

m.add(5,4);