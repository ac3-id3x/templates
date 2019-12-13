jQuery.noConflict();
var obj = null;
function checkHover() {
	if (obj) {
		obj.find('.smenu').fadeOut('fast');	
	} //if
} //checkHover

jQuery(document).ready(function() {
	jQuery('#menu .sousMenu').hover(function() {
		if (obj) {
			obj.find('.smenu').slideUp('fast');
			obj = null;
		} //if
		jQuery(this).find('.smenu').slideDown('fast');
	}, function() {
		obj = jQuery(this);
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	});
});