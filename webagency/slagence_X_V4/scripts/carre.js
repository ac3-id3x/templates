/* GESTION DES BLOCS ANNONCES */
function gestionAnnonce(divid) {
	$('.'+divid).each(function() {
	$(this).css('cursor','pointer');
		$(this).mouseover(function() {
			$(this).addClass('borderModuleOn');
			$(this).children('.infoModule').show();
			//$(this).children('.infoModule').css('opacity',0.5);
		});
		$(this).mouseout(function() {
			$(this).removeClass('borderModuleOn');
			$(this).children('.infoModule').hide();
			//$(this).children('.infoModule').css('opacity',1);
		});
		/*$(this).click(function() {
			detailAnnonce('blocCentral',$(this).attr('id'));
		});*/
	});
}