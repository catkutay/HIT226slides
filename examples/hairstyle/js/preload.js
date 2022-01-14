
var images = new Array(); 
function preloadImages(){    
 for (i=0; i < preloadImages.arguments.length; i++){ 
         images[i] = new Image();        
      images[i].src = preloadImages.arguments[i];     } 
} 

var images = new Array(); 
function preloadImages(){    
 for (i=0; i < preloadImages.arguments.length; i++){ 
         images[i] = new Image();        
      images[i].src = preloadImages.arguments[i];     } 
} 
preloadImages("../images/great-hairstyle.jpg", "../images/hairstyle17.jpg", "../images/hairstyle18.jpg", "../images/hairstyle19.jpg","../images/hairstyle20.jpg","../images/featured.jpg","../images/skinhead.png",); 
