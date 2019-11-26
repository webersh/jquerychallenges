 /* ch3form.onsubmit = function() {
    var fruit = 
    document.querySelectorAll('input[name="fruit"]')


    for (let i = 0; i < fruit.length;i++){
        if (fruit[i].checked)
            return true;
    }

    alert("You must pick a fruit!")
    return false; */

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;}
  

  // Need to have alert if a fruit is not selected. Doesn't apply to current class standing // 

$("form").submit(function(event){
	if (!$('input[name="fruit"]').is(':checked')){
		alert("You must pick a fruit!");
		event.preventDefault();
	}
})




//$("form").submit(function(event){
	//if (!$('fruit').is(':not(:checked)')){
		//alert("You must pick a fruit!");
		//event.preventDefault();
	//}
	//}); 
