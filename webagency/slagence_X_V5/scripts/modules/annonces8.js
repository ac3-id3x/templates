$(document).ready(function() {
	$('.img-homepage').each(function() {
		$(this).hover(
			function() {
				if($(this).find('.display-none').length > 0) {
					$(this).find('.picture-responsive').first().hide();
					$(this).find('.picture-responsive').last().show();
				}
			},
			function() {
				if($(this).find('.display-none').length > 0) {
					$(this).find('.picture-responsive').first().show();
					$(this).find('.picture-responsive').last().hide();
				}
			}
		)
	});
});