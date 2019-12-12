jQuery.noConflict();
var obj = null;
function checkHover() {
	if (obj) {
		obj.find('.smenu').fadeOut('fast');	
		obj.removeClass("actif");
	} //if
} //checkHover

jQuery(document).ready(function() {
	jQuery('#menu .sousMenu').hover(function() {
		if (obj) {
			obj.find('.smenu').slideUp('fast');
			jQuery(this).removeClass("actif");
			obj = null;
		} //if
		jQuery(this).find('.smenu').slideDown('fast');
		jQuery(this).addClass("actif");
	}, function() {
		obj = jQuery(this);
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	});
	
	
	/* page estimation */
	//$("td:contains('Vous souhaitez mettre en'),td:contains('vente'),.inputSelect[name='typetransaction']").hide();
	//$(".inputSelect[name='typetransaction']").hide();
});