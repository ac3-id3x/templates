var obj = null;
function checkHover() {
	if (obj) {
		obj.find('div').fadeOut('fast');	
	} //if
} //checkHover

jQuery(document).ready(function() {
	jQuery('ul > li').hover(function() {
		if (obj) {
			obj.find('div').slideUp('fast');
			obj = null;
		} //if
		jQuery(this).find('div').slideDown('fast');
	}, function() {
		obj = jQuery(this);
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	});
});