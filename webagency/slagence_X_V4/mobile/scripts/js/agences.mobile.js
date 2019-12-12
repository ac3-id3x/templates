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
			arrayOfAgencies.push({idPublication:$$CARTO:IDPUBLICATION$$,idAgence:$$CARTO:IDAGENCE$$,nom:'$$CARTO:NOM  escape htmlencode$$',tel:'$$CARTO:TEL formattel$$',fax:'$$CARTO:FAX formattel$$',email:'$$CARTO:EMAIL$$',surl:'$$CARTO:URL$$',adresse:'$$CARTO:ADRESSE escape$$',respag:'$$CARTO:RESPAG  escape htmlencode$$',latitude:'$$CARTO:LATITUDE replace , .$$',longitude:'$$CARTO:LONGITUDE replace , .$$'});
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