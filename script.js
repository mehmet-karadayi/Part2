function myKeyPress(e){

    /* TODO: retrieve the value from the text input */
    var mytextbox = document.getElementById("textinput").value;
    
    
        
  
    // TODO: set the value of the textbox with the formatted value
  
    var keyPressed;
    if(window.event) { // IE
      keyPressed = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keyPressed = e.which;
    }
  
    var x = String.fromCharCode(keyPressed);
    var y = formatPhoneNumber(mytextbox);
  
  
    console.log("Key Pressed = " + x);
    console.log("  Formatted = " + y);
    
  
    
    document.getElementById('textinput').value = y;
    

}
  
    function formatPhoneNumber(value){
        var regex = /[^0-9]/gi;
        if(value.search(regex) > -1) {
            value = value.replace(regex, "");
            return value;
        
        }

	    
        if(value.length > 3 && value.length <= 6 ){
            
            value = value.replace("-", "");
            value = value.slice(0,3) + "-" + value.slice(3);}
        
        
        else if(value.length > 6){
            
            value = value.replace("-", "");
            value = value.replace("-", "");
            
            value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
        }
        //return value.replace(regex, "");
        return value;
    
    }
  
    
    
 