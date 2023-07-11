function myFunction() {
    var x = document.getElementById("name").value;
     var salary = document.getElementById("myInput").value;
     var text;
   
    
     if (salary<=300000) {
       text = "You are tax free. ";
       
    
     } else if (salary<=600000) {
      let amount = (salary - 300000)*0.1;
       text = "Your salary is less than 6lpa you need to pay tax" + amount;
       
    
     } else if(salary>=600000){
           let deduction1 = 300000;
           let deduction2 = (salary - 300000)*0.2;
           let total = deduction1 + deduction2;
           text = "Your salary is greater than 6lpa you need to pay tax" + total;
     }
     document.getElementById("output").innerHTML = x;
     document.getElementById("demo").innerHTML = text;
   }