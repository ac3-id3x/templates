// VARS AJAX REQUEST
$(document).delegate("#listeagences","pageshow", function (event) {
	var arrayOfAgencies = new Array;
	// ORIENTATION
	var heightMax = $(window).height();
	var widthMax = $(window).width();
	var langSite = '$$FORM:LANG$$';
	// GO AJAX
	$$B:IMMOBW:CARTO-AGENCES-MARKERS:~idPublication:QRY:IDP:ALIAS:CARTO$$
	$$BIF:CARTO$$
		$$DO$$
			$$IF:CARTO:LATITUDE$$
				$$IF=:459176$454845$454842$459182$454844$454847$459177$459181$460323$459178$459180$454843$454846$460341:CARTO:IDPUBLICATION$$
					arrayOfAgencies.push({idPublication:$$CARTO:IDPUBLICATION$$,idAgence:$$CARTO:IDAGENCE$$,nom:'$$CARTO:NOM  escape htmlencode$$',tel:'$$CARTO:TEL formattel$$',fax:'$$CARTO:FAX formattel$$',email:'',surl:'$$CARTO:URL$$',adresse:'$$CARTO:ADRESSE escape$$',respag:'$$CARTO:RESPAG  escape htmlencode$$',latitude:'$$CARTO:LATITUDE replace , .$$',longitude:'$$CARTO:LONGITUDE replace , .$$'});
				$$END$$
				$$IF=:460330:CARTO:IDPUBLICATION$$
					arrayOfAgencies.push({idPublication:$$CARTO:IDPUBLICATION$$,idAgence:$$CARTO:IDAGENCE$$,nom:'Daniel FEAU',tel:'$$CARTO:TEL formattel$$',fax:'$$CARTO:FAX formattel$$',email:'',surl:'$$CARTO:URL$$',adresse:'$$CARTO:ADRESSE escape$$',respag:'$$CARTO:RESPAG  escape htmlencode$$',latitude:'$$CARTO:LATITUDE replace , .$$',longitude:'$$CARTO:LONGITUDE replace , .$$'});
				$$END$$
				$$IF=:460342:CARTO:IDPUBLICATION$$
					arrayOfAgencies.push({idPublication:$$CARTO:IDPUBLICATION$$,idAgence:$$CARTO:IDAGENCE$$,nom:'Daniel FEAU Location',tel:'01 56 88 24 92',fax:'01 56 88 24 99',email:'feau-location@feau-immobilier.fr',surl:'$$CARTO:URL$$',adresse:'$$CARTO:ADRESSE escape$$',respag:'$$CARTO:RESPAG  escape htmlencode$$',latitude:'$$CARTO:LATITUDE replace , .$$',longitude:'$$CARTO:LONGITUDE replace , .$$'});
				$$END$$
			$$END$$
		$$LOOP$$
			if(langSite == 'fr') {
				arrayOfAgencies.push({idPublication:459186,idAgence:66880,nom:'Belles demeures de France',tel:'01 53 23 81 81',fax:'01 53 23 81 89',email:'bellesdemeuresdefrance@feau-immobilier.fr',surl:'http://www.belles-demeures-de-france.com',adresse:'30 av Pierre 1er de Serbie \r\n75008 Paris',respag:'Marie-Hélène LUNDGREEN',latitude:'48.867619',longitude:'2.2995895'});
				arrayOfAgencies.push({idPublication:459189,idAgence:66880,nom:'Belles demeures de France (Châteaux)',tel:'01 53 23 81 81',fax:'',email:'lmacaire@bdfrance.com',surl:'',adresse:'30 av Pierre 1er de Serbie \r\n75008 Paris',respag:'Lionel Macaire',latitude:'48.867219',longitude:'2.2995725'});
			} else {
				arrayOfAgencies.push({idPublication:459186,idAgence:66880,nom:'Belles demeures de France',tel:'01 53 23 81 81',fax:'01 53 23 81 89',email:'bellesdemeuresdefrance@feau-immobilier.fr',surl:'http://www.belles-demeures-de-france.com',adresse:'30 av Pierre 1er de Serbie \r\n75008 Paris',respag:'Marie-Hélène LUNDGREEN',latitude:'48.867619',longitude:'2.2995895'});
				arrayOfAgencies.push({idPublication:459189,idAgence:66880,nom:'Belles demeures de France (Chateaux)',tel:'01 53 23 81 81',fax:'',email:'lmacaire@bdfrance.com',surl:'',adresse:'30 av Pierre 1er de Serbie \r\n75008 Paris',respag:'Lionel Macaire',latitude:'48.867219',longitude:'2.2995725'});
			}
			arrayOfAgencies.push({idPublication:460342,idAgence:28720,nom:'Daniel FEAU Commercialisation',tel:'01 56 88 48 48',fax:'01 56 88 48 40',email:'d-legrand@feau-immobilier.fr',surl:'http://www.feau-immobilier.fr',adresse:'21 rue d\'Artois \r\n75008 Paris',respag:'Mr Nicolas Pettex',latitude:'48.873258',longitude:'2.307013'});
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