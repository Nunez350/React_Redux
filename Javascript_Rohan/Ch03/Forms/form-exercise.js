function validation(form) {
    var from = document.getElementById('from'),
    var to = document.getElementById('to'),
  
 
      d1  = new Date('from').getTime(),
      d2   = new Date('to').getTime();

   if (d1 < d2 ) {
       return true;
   }else{
       alert("date is not in valid range")
   }
}



document.getElementsByTagName('button')[0].onclick = validate;