var moteur  = $('.bloc-moteur');
function sliderMoteur(){
	if($('html').hasClass('ie7')) {
		if(moteur.hasClass('open')) {
			moteur.hide();
			moteur.removeClass('open');
		} else {
			moteur.show();
			moteur.addClass('open');
		}
	} else {
		if(moteur.hasClass('open')) {
			moteur.slideUp(200,'swing', function() {
				$(this).removeClass('open');
			});
		} else {
			moteur.slideDown(400,'swing', function() {
				$(this).addClass('open');
			});
		}	
	}
}