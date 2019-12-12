//CAROUSEL HOME PAGE
function carousel(el) {
	if(el.length > 0) {
		// GET SPEED + FX
		var getSpeed = parseInt(el.attr('data-rotation'));
		var fx = el.attr('data-fx');
		var height = 'auto';
		// fade works fine, unlike all other animations 
		if(fx !== 'fade') {
			height = '100%';
		}
		// LAUNCH
		el.cycle({
			fx:fx,
			height:height,
			speed:1000,
	        timeout: getSpeed,
	        slideResize: 0,
			fit:1
		});
	}
}
$(document).ready(function() {
	var container = $('.carousel');
	if(winW > 767) {
		carousel(container);
		
	}
	// Listen for orientation changes
	if (window.addEventListener) {
		window.addEventListener("orientationchange", function() {
			detectionWindow();
			if(winW > 767) {
				// MODULE BANNER RESTART
				container.cycle('destroy');
				carousel(container);
			}
		}, false);
	}
	$(window).resize(function() {
		// MODULE BANNER RESTART
		container.cycle('destroy');
		carousel(container);
	});
	
});