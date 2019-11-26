/* console.log("here")
var imgs = document.querySelectorAll("img");
var msg = "Hover over an image below."
for (let i = 0; i < imgs.length;i++){
	imgs[i].onmouseover = function() {
	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
	 	document.querySelector('#image').innerHTML= imgs[i].alt;
	 }

	 imgs[i].onfocus = function() {
	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
	 	document.querySelector('#image').innerHTML= imgs[i].alt;
	 }

	 imgs[i].onmouseleave = function() {
	 	document.querySelector('#image').style.backgroundImage="url('')";
	 	document.querySelector('#image').innerHTML= msg;
	 }

	 imgs[i].onblur = function() {
	 	document.querySelector('#image').style.backgroundImage="url('')";
	 	document.querySelector('#image').innerHTML= msg;
	 }
} */

var msg = 'Hover over an image below' 

$("img").each(function() {
				$(this).mouseover(function(){
					$("#image").css('background-image', 'url(' + this.src + ')');
					console.log(this.src)
				$("#image").html(this.alt);
					console.log(this.alt)
					})
		});
		$("img").each(function() {
				$(this).focus(function(){
					$("#image").css('background-image', 'url(' + this.src + ')');
					console.log(this.src)
				$("#image").html(this.alt);
					console.log(this.alt)
					})
		});
		 $("img").each(function() {
		 		$(this).mouseleave(function(){
		 			$("#image").css('background-image', 'none');
		 		$("#image").html(msg);
				});
				});
				$("img").each(function() {
					 $(this).blur(function(){
						 $("#image").css('background-image', 'none');
					 $("#image").html(msg);
					 });
					 });


