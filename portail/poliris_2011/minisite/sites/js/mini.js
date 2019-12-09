jQuery(document).ready(function(){		  
	
	$('.go-to-top2 a').click(function() {
		$('html,body').animate({
			scrollTop: $(".container").offset().top - 70
		}, 'slow');
	});
	
});

