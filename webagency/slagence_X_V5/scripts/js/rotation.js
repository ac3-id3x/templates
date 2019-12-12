var maxSize = 767;
function module(el) {
	if(el.length > 0) {
		// GET MAX HEIGHT
		var getHeight = new Array();
		el.find('.module-annonces-homepage').each(function() {
			getHeight.push($(this).outerHeight());
		});
		getHeight.sort().reverse();
		// GET SPEED + FX
		var getSpeed = parseInt(el.attr('data-rotation'));
		var fx = el.attr('data-fx');
		// LAUNCH
		el.css('height',getHeight[0]).cycle({
			fx:fx,
			timeout:getSpeed,
			slideExpr: '.ligne-cycle',
			pager:'.nav-rotation',
			next:   '.next-module', 
   			prev:   '.prev-module',
			speed:1000,
			slideResize: 0,
			fit:1
		});
		// PAUSE + RESUME
		el.each(function() {
			$(this).hover(
				function() { 
					el.cycle('pause'); 
			    }, 
			    function() { 
			       el.cycle('resume'); 
			    } 
		    )
		});
	}
}
function launchModule(){
	if(winW > maxSize) {
		var mod = $('.rotation-module');
		if(mod.length > 1) {
			$('.next-module, .prev-module').remove();
			module(mod);
		} else {
			module(mod);
			if (window.addEventListener) {
				window.addEventListener("orientationchange", function() {
					detectionWindow();
					if(winW > maxSize) {
						// MODULE ADS RESTART
						mod.cycle('destroy');
						module(mod);
					}
				}, false);
			}
		}		
	}
	launched = 1 ;
}
launched = 0 ;
$(window).load(function() {
	if (launched == 0) {launchModule();};
});

$(document).ajaxComplete(function() {
	if (launched == 0) {launchModule();};
});

$(window).ready(function() {
    if (launched == 0) {launchModule();};
});