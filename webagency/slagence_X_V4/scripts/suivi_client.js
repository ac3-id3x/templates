function ShowHideDiv(divID) {
     div0 = $('#'+divID);
     if (div0.css('display') == "block") {
         div0.css('display','none');
       }
     else {
				div0.css('display','block');
      }
}
$(document).ready(function() {
	$('.bouton_action').each(function() {
		var $bouton = 0;
		$(this).click(function() {
			if($bouton == 0) {
				$(this).find('img').attr('src','z/webagency/slagence_X_V4/images/suivi/voir_moins.gif');
				$bouton = 1;
			} else {
				$(this).find('img').attr('src','z/webagency/slagence_X_V4/images/suivi/voir_plus.gif');
				$bouton = 0;
			}
		});
	});
});