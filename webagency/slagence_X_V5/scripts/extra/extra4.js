var maxSize = 767;
function moduleExtra(el) {
	if(el.length > 0) {
		// GET MAX HEIGHT
		var getHeight = new Array();
		el.find('.module-annonces-homepage-extra').each(function() {
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
			slideExpr: '.ligne-cycle-extra',
			pager:'.nav-rotation-extra',
			next:   '.next-module-extra', 
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
$(window).load(function() {
	if(winW > maxSize) {
		var mod = $('.rotation-module-extra');
		if(mod.length > 1) {
			//$('.next-module, .prev-module').remove();
		} else {
			moduleExtra(mod);
			if (window.addEventListener) {
				window.addEventListener("orientationchange", function() {
					detectionWindow();
					if(winW > maxSize) {
						// MODULE ADS RESTART
						mod.cycle('destroy');
						moduleExtra(mod);
					}
				}, false);
			}
		}		
	}
});
