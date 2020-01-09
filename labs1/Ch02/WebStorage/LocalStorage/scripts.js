var person = {
    Name: 'John Doe',
    Age: 24,
    Gender: 'Male',
    Nationality: 'Nigerian'
}

if(typeof(Storage)!=="undefined") {  
    localStorage.setItem('person', JSON.stringify(person));
    
     alert(localStorage.getItem('person'));  
  }  
   else{  
    alert("Sorry! your browser is not supporting the browser")  
   }  