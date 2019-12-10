var $j = jQuery.noConflict();
var obj = null;
function checkHover() {
	if (obj) {
		obj.find('.smenu').fadeOut('fast');	
	} //if
} //checkHover


$j(document).ready(function() {
	$j('#menu .sousMenu').hover(function() {
		if (obj) {
			obj.find('.smenu').slideUp('fast');
			obj = null;
		} //if
		$j(this).find('.smenu').slideDown('fast');
	}, function() {
		obj = $j(this);
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	});
});