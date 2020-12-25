function generate (){
   var box = document.getElementById("white-box");

   var num = Math.ceil(Math.random() * 6)
   
   switch (num) {
      case 1:
         box.innerHTML = "Azaléia"
      break;
      
      case 2:
         box.innerHTML = "Begônia"
      break;
      
      case 3:
         box.innerHTML = "Jasmim"
      break;
      
      case 4:
         box.innerHTML = "Orquídea"
      break;

      case 5:
         box.innerHTML = "Rosa"
      break;

      case 6:
         box.innerHTML = "Magnólia"
      break;
   }
}

