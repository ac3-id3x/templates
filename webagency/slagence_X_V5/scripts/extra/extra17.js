function carouselExtra17(el) {
	if(el.length > 0) {
		// GET SPEED + FX
		
		var getTimeout = parseInt(el.attr('data-rotation'));
		if( ! getTimeout ){
			getTimeout=5000;
		}
		var fx = el.attr('data-fx');
		if( ! fx ){
			fx='scrollHorz';
		}
		var getSpeed = el.attr('data-speed');
		if( ! getSpeed ){
			getSpeed = 400;
		}
		el.cycle({
			fx:fx,
			speed:getSpeed,
	    timeout: getTimeout,
	    slideResize: 0,
			fit:1,
			next:   "#next", 
			prev:   "#prev"
		});
	}
}
$(window).load(function() {
	var containerExtra17 = $('.extra17-slideshow');
	if(winW > 767) {
		carouselExtra17(containerExtra17);
	}
	if (window.addEventListener) {
		window.addEventListener("orientationchange", function() {
			detectionWindow();
			if(winW > 767) {
				containerExtra17.cycle('destroy');
				carouselExtra17(containerExtra17);
			}
		}, false);
	}
	$(window).resize(function() {
		containerExtra17.cycle('destroy');
		carouselExtra17(containerExtra17);
	});
});