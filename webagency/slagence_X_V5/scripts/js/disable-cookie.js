// variables
var deviceDisableCookie = detectDevice();

// size
function setDisableCookieSize() {
	var mwTop = 10, mwWidth = 1, mwMarginLeft = 1, mwbMaxHeight = 1, _dr = getDeviceRotation();
	switch (deviceDisableCookie) {
		case 0: // desktop
			mwTop = 10;
			mwWidth = 560;
			mwMarginLeft = -280;
			mwbMaxHeight = 600;
			break;
		case 1: // smartphone
			mwTop =  3;
			mwWidth = _dr.xAxis - 20;
			mwMarginLeft = mwWidth / 2 * -1;
			mwbMaxHeight = (_dr.yAxis - 180 > 20 ? _dr.yAxis - 180 : 20);
			break;
		case 2: // tablet PC
			mwTop = 10;
			mwWidth = 560;
			mwMarginLeft = -280;
			mwbMaxHeight = 600;
			break;
	}
	
	var mwDisableCookie = document.getElementById('modalDisableCookie'), mwbDisableCookie = document.getElementById('modalDisableCookie-body');
	if (mwDisableCookie)  mwDisableCookie.style.cssText += "top:" + mwTop.toString() + "%;width:" + mwWidth.toString() + "px;margin-left:" + mwMarginLeft.toString() + "px;";
	if (mwbDisableCookie) mwbDisableCookie.style.cssText += "max-height:" + mwbMaxHeight.toString() + "px;";
}
setDisableCookieSize();


// detect screen rotation on devices
window.addEventListener('resize', function(e) { setDisableCookieSize(); }, false);


// ~~~~~~~~~~~~~~~~ BUSINESS ~~~~~~~~~~~~~~~~

// cookie's expiration forced values
var pde = ";path=/"                            // path
	+ ";domain=." + document.location.hostname  // domain
	+ ";expires=Thu, 01-Jan-1970 00:00:01 GMT"; // expiration


// get buttons
var btnCookieGoogleAnalytics = document.getElementById('btnCookieGoogleAnalytics');


// get hidden input
var cookieGoogleAnalytics = document.getElementsByName('cookieGoogleAnalytics');
if (cookieGoogleAnalytics.length > 0) cookieGoogleAnalytics = cookieGoogleAnalytics[0];


// set buttons events
function enableCookie(btn, hiddenInput) {
	//if (btn && hiddenInput) hiddenInput.value = (hiddenInput.value == '1' ? '0':'1');
	
	if (btn && hiddenInput) {
		var btnIcon = btn.children[0];
		if (hiddenInput.value == '1') {
			hiddenInput.value = '0';
			btnIcon.className = "cookieRemove";
			btnIcon.innerHTML = "&#10006;";
		}
		else {
			hiddenInput.value = '1';
			btnIcon.className = "cookieKeep";
			btnIcon.innerHTML = "&#10004;";
		}
	}
}


// DOMElement ... as String : it means you HAVE TO use the variable's name as a String, because it will be used in a « eval() » expression.
var _cookies = [
	[ 'btnCookieGoogleAnalytics', 'cookieGoogleAnalytics', ["__utma","__utmb","__utmc","__utmz","_ga"] ]
	// , [ DOMElement someButton as String, DOMElement hiddenInput as String, Array[String] cookieNames ]
	// , ...
];


_cookies.forEach(function(el) {
	if (el[0]) {
		eval(el[0] + '.addEventListener("click", function() { enableCookie(' + el[0] + ', ' + el[1] + '); }, false);');
	}
});


function disableCookies() {
	var hiddenInput = null, cookieNames = null;
	
	for (var dc = 0; dc < _cookies.length; dc++) {
		
		hiddenInput = eval(_cookies[dc][1]);
		if (hiddenInput) {
			if (hiddenInput.value != "1") {
				
				cookieNames = _cookies[dc][2];
				// Erase these cookies
				for (var ck = 0; ck < cookieNames.length; ck++) {
					document.cookie = cookieNames[ck] + "=" + pde;
				}
			}
		}
	}
}

var btnDisableCookieAccept = document.getElementById('btnDisableCookieAccept');
if (btnDisableCookieAccept) btnDisableCookieAccept.addEventListener('click', function() { disableCookies(); }, false);
