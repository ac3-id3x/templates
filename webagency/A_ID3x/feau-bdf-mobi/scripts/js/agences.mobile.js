// VARS AJAX REQUEST
$(document).delegate("#listeagences","pageshow", function (event) {
	var arrayOfAgencies = new Array;
	// ORIENTATION
	var heightMax = $(window).height();
	var widthMax = $(window).width();
	// GO AJAX
	$$B:IMMOBW:CARTO-AGENCES-MARKERS:~idPublication:QRY:IDP:ALIAS:CARTO$$
	$$BIF:CARTO$$
		$$DO$$
			$$IF:CARTO:LATITUDE$$
				$$IF=:459186:CARTO:IDPUBLICATION$$
					arrayOfAgencies.push({idPublication:$$CARTO:IDPUBLICATION$$,idAgence:$$CARTO:IDAGENCE$$,nom:'$$CARTO:NOM  escape htmlencode$$',tel:'$$CARTO:TEL formattel$$',fax:'$$CARTO:FAX formattel$$',email:'$$CARTO:EMAIL$$',surl:'http://www.belles-demeures-de-france.com',adresse:'$$CARTO:ADRESSE escape$$',respag:'',latitude:'$$CARTO:LATITUDE replace , .$$',longitude:'$$CARTO:LONGITUDE replace , .$$'});
				$$END$$
			$$END$$
		$$LOOP$$
	$$BFIN$$
	// PIN AGENCY
	GetAgencesMap(arrayOfAgencies,heightMax,widthMax);
	// GPS PERSO
	$$IF=:1:GEOLOCPERSONNE$$
		geoLoc();
	$$END$$
	// ORIENTATION
	window.onorientationchange = mapResize;
});