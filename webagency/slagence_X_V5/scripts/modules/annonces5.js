$(document).ready(function() {
	$('.module-annonces-homepage').each(function() {
		$(this).hover(
			function() {
				$(this).find('.hover-infos-bien').show();
				if($(this).find('.img-homepage').find('.display-none').length > 0) {
					$(this).find('.img-homepage').find('.picture-responsive').first().hide();
					$(this).find('.img-homepage').find('.picture-responsive').last().show();
				}
			},
			function() {
				$(this).find('.hover-infos-bien').hide();
				if($(this).find('.img-homepage').find('.display-none').length > 0) {
					$(this).find('.img-homepage').find('.picture-responsive').first().show();
					$(this).find('.img-homepage').find('.picture-responsive').last().hide();
				}
			}
		)
	});
});