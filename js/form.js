$(document).ready(function(){

	$("td").on("click", "a", function(ev){
		ev.preventDefault();
		//show the contact form
		$("#contact-form").slideToggle();
		
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});

});