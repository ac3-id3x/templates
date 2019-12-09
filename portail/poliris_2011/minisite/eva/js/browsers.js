// detect browsers
function browsersD(){
	var browsersD = {};
	var ua = navigator.userAgent;
	// add class to <html> tag
	if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)){
		jQuery('html').addClass('ios');
	}
	if(navigator.userAgent.match(/OS 6/i)){
		jQuery('html').addClass('ios6');
	}
	if((/Android/).test(ua)){
		jQuery('html').addClass('android');
	}
	if((/WebKit/).test(ua)){
		jQuery('html').addClass('webkit');
	}

	if((/Chrome/).test(ua)){
		jQuery('html').addClass('chrome');
	} else {
		if((/Firefox/).test(ua)){
			jQuery('html').addClass('firefox');
		} else {
			if((/Safari/).test(ua)){
				jQuery('html').addClass('safari');
			} else {
				if((/MSIE/).test(ua)){
					jQuery('html').addClass('ie');
				}
			}
		}
	}
	
	return browsersD;
}
browsersD();