var $j = jQuery.noConflict();
function gestionAnnonce(divid) {
	$j('.'+divid).each(function() {
		$j(this).css('cursor','pointer');
		$j(this).mouseover(function() {
			$j(this).addClass('borderModuleOn');
			$j(this).children('.infoModule').show();
		})
		$j(this).mouseout(function() {
			$j(this).removeClass('borderModuleOn');
			$j(this).children('.infoModule').hide();
		})
		$j(this).click(function() {
			detailAnnonce('blocCentral',$j(this).attr('id'));
		})
	})
}
$j(document).ready(function() {
	gestionAnnonce('blocModule');	
});