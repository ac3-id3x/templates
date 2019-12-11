var obj = null;
function checkHover() {
	if (obj) {
		obj.find('.smenu').fadeOut('fast');
		jQuery(".ssm a").removeClass('hov');
	} //if
} //checkHover

jQuery(document).ready(function() {
	jQuery('ul > li').hover(function() {
		if (obj) {
			obj.find('.smenu').slideUp('fast');
			jQuery(".ssm a").removeClass('hov');
			obj = null;
		} //if
		jQuery(this).find('.smenu').slideDown('fast');
		jQuery(".ssm a").addClass('hov');
	}, function() {
		obj = jQuery(this);
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	});
});