var $j = jQuery.noConflict();
function ShowHideDiv(divID) {
     div0 = $j('#'+divID+'_0');
     if (div0.css('display') == "block") {
         div0.css('display','none');
       }
     else {
				div0.css('display','block');
      }
}
$j(document).ready(function() {
	$j('.bouton_action').each(function() {
		var $bouton = 0;
		$j(this).click(function() {
			if($bouton == 0) {
				$j(this).find('img').attr('src','z/webagency/slagence_X_V4/images/suivi/voir_moins.gif');
				$bouton = 1;
			} else {
				$j(this).find('img').attr('src','z/webagency/slagence_X_V4/images/suivi/voir_plus.gif');
				$bouton = 0;
			}
		});
	});
});