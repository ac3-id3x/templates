jQuery.noConflict();
var obj = null;
function checkHover() {
	if (obj) {
		obj.find('.smenu').fadeOut('fast');	
		obj.children('a').removeClass('actif');
	} //if
} //checkHover

jQuery(document).ready(function() {
	jQuery('#menu .sousMenu').hover(function() {
		if (obj) {
			obj.find('.smenu').slideUp('fast');
			jQuery(this).children('a').removeClass('actif');
			obj = null;
		} //if
		jQuery(this).find('.smenu').slideDown('fast');
		jQuery(this).children('a').addClass('actif');
	}, function() {
		obj = jQuery(this);
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	});
});