$(document).ready(function() {
	$('.module-annonces-homepage').each(function() {
		$(this).hover(
			function() {
				if($(this).find('.img-homepage').find('.display-none').length > 0) {
					$(this).find('.img-homepage').find('.picture-responsive').first().hide();
					$(this).find('.img-homepage').find('.picture-responsive').last().show();
				}
			},
			function() {
				if($(this).find('.img-homepage').find('.display-none').length > 0) {
					$(this).find('.img-homepage').find('.picture-responsive').first().show();
					$(this).find('.img-homepage').find('.picture-responsive').last().hide();
				}
			}
		)
	});
	if(winW > 600) {
		/* BTN VIDEO/360/PDF */
		$('.module-annonces-homepage').on('click','.bouton-video-360',function() {
			$(this).colorbox({iframe:true, innerWidth: 720, innerHeight:490,fastIframe:false});
		});
	}	
});