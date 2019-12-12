$(document).ready(function(){
	RepositionNav('parallax');
	detectScroll();
	$(window).resize(function(){
		RepositionNav('parallax');
		detectScroll();
	});	
//ANIMATION PARALLAX
	$('#section0').parallax("50%", 800, 0.1, true);
	//$('#section1').parallax("50%", 2000, 0.1, true);
	$('.slide-parallax-bg-1').parallax("50%", 4000, 0.2, false);
	$('#section2').parallax("50%", 2700, 0.1, true);
	$('.slide-parallax-bg-2').parallax("right", 3000, 0.2, false);
	$('#section3').parallax("50%", 3400, 0.1, true);
	$('.slide-parallax-bg-3').parallax("65%", 2400, 0.2, false);
	$('#section4').parallax("50%", 4300, 0.1, true);
	//$('#section5').parallax("50%", 4700, 0.1, true);
});
function detectScroll() {
	var deck = new $.scrolldeck({
    	buttons: '.nav-button',
    	slides: '.slide',
    	duration: 1000,
    	easing: 'easeInOutExpo',
    	offset: -1 * parseInt($('.nav-parallax').height())
	});

	var windowHeight = $(window).height();
	var containerHeight = 0;
	$('.conteneur-parallax').children().each(function() {
		containerHeight += $(this).outerHeight();
	});
	var heightLast = $('.last-parallax').outerHeight();
	var footerHeight = $('.last-parallax').children('section').outerHeight();
	var limitScroll = parseInt(containerHeight - windowHeight - heightLast + footerHeight);
	$(window).scroll(function(){
		if($(window).scrollTop()>=limitScroll){
			$('.last-parallax').children('section').css('position','relative').css('bottom');
			$('.last-parallax').children('section').addClass('margin-top-50');
		}else{
			$('.last-parallax').children('section').css('position','fixed').css('bottom','0');
		}
	});
}