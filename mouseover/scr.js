let abc = document.querySelector("#abc"); 
window.addEventListener("mousemove", function(details){
  
   abc.style.left = details.clientX +  "px" ;

   abc.style.top = details.clientY + "px" ;
});
