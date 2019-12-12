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
});