$(document).delegate("#sharing","pageshow", function (event) {
	var nav = navigator.userAgent;
	if(nav.search("IEMobile") > - 1 || nav.search("BlackBerry") > - 1) {
		$("#boutonShareFacebook").hide();
		$("#boutonShareTwitter").hide();
		$("#titreSharePage").hide();
	};
});