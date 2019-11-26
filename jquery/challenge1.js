/*subscribe.onchange = function() {
	var x = document.querySelector("#emailField");
	if (this.checked){
		console.log("selected");
    	x.style.display = "block";
  	} else {
  		console.log("Not selected");
    	x.style.display = "none";
  	} */ 


  	/* Do we need to do #1 */ 

  
$("#subscribe").click(function(){
	$("#emailField").toggle();
})