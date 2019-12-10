function menu() {
	$('#Menu_Ctn li').each(function() {
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
			$(this).addClass('liOnMenu');
			$(this).find('a').addClass('liOnMenu');
		});
		$(this).mouseout(function() {
			$(this).removeClass('liOnMenu');
			$(this).find('a').removeClass('liOnMenu');
		});
	});
	$('.Criteres_Moteur .moteurAction').css('cursor','pointer');
	$('.Criteres_Moteur .moteurAction').click(function() {
		if($('.Bloc_Criteres').css('display') == 'none') {
			$('.Bloc_Criteres').slideDown('fast').show(); 
		} else {
			$('.Bloc_Criteres').slideUp('fast');
		}
	});
}