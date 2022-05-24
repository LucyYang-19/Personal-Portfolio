// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// image caro

var slideIndex = 0;
showSlides(); // call showslide method
   
function showSlides()
{
    var i;
  
    // get the array of divs' with classname image-sliderfade
    var slides = document.getElementsByClassName("image-sliderfade"); 
      
    // get the array of divs' with classname dot
    var dots = document.getElementsByClassName("dot"); 
  
    for (i = 0; i < slides.length; i++) {
        // initially set the display to 
        // none for every image.
        slides[i].style.display = "none"; 
    }
   
     // increase by 1, Global variable
    slideIndex++; 
   
     // check for boundary
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    // Change image every 2 seconds
    setTimeout(showSlides, 2000); 
}

// contact form

function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }
    else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }
    else{
      document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }
    else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}



