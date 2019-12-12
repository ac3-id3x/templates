// This file contains variables and functions that are accessibles from anywhere within the HTML page.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~ GEOLOCATION (maps) ~~~

// there are maps location on the page. (default value is Boolean : false)
var hasMaps = false;

// "colorMarker" is used to define an url for a specific pin's picture. (default value is String : Empty)
var colorPin = ''; // old
var colorMarker = '';

// « engineGeoMap » is used to define the map which use the « moteur.js » features.
// (default value is Struct : { mapObject: Object, mapDataIndex: Integer })
var engineGeoMap = { mapObject: null, mapDataIndex: -1 };

// pinville is used everywhere the maps are used. (default value is Integer : 0)
var pinville = 0;

// "zoomPoi" is used to define the zoom level for the map. (default value is Integer : 15)
var zoomPoi = 15;

// "detailAnnGeo" is used to define the geolocation coordinates for a given real estate. (a.k.a. "détail de l'annonce") (default value is Object : null)
// filled values are :       detailAnnGeo = { lat: Float, lon: Float }
var detailAnnGeo = null;

// "macro_e_page" is used to define the geolocation coordinates for a given real estate. (a.k.a. "détail de l'annonce") (default value is Object : null)
// filled values are :       macro_e_page = { map_center_latitude: Integer, map_center_longitude: Integer }
var macro_e_page = null;

// ~~~ GEOLOCATION (maps) ~~~ END OF VARIABLES ~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~
// ~~~ ID3X ~~~

// "tailleW" is used for screen size purposes. (default value is Integer : 600)
var tailleW = 600;

// "winW" is used for screen size purposes. (default value is Integer : 0)
var winW = 0;

// "id3xContent" is used for values returned by macros. (default value is Object : null)
var id3xContent = null;

// ~~~ ID3X ~~~ END OF VARIABLES ~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~ RECAPTCHA (Google) ~~~

// "recaptcha_google_disabled" is used for every Recaptcha Google on the HTML page. (default value is Boolean : true)
var recaptcha_google_disabled = true;

// ~~~ RECAPTCHA (Google) ~~~ END OF VARIABLES ~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~ Templates slagence_X_V4 ~~~

// used for the real estates engine :
var annPluriel = "", annSingulier = "", cesAnnonces = "", cetteAnnonce = "", divminivilles = "", 
	langue = "", linkPlusDetails = "", querypreliste = "", urlDetail = "", urlpreliste = "", urlRecherche = "", zoomerSurAnn = "";


// ~~~ Templates slagence_X_V4 ~~~ END OF VARIABLES ~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~
// ~~~ FUNCTIONS ~~~



// Fixes for jQuery :

// >>> passive event 'touchmove'
jQuery.event.special.touchmove = {setup: function(_, ns, handle) {this.addEventListener('touchmove', handle, {passive: (ns.includes('noPreventDefault')?false:true) }); }};

// >>> passive event 'touchstart'
jQuery.event.special.touchstart = {setup: function(_, ns, handle) {this.addEventListener('touchstart', handle, {passive: (ns.includes('noPreventDefault')?false:true) }); }};

// >>> passive event 'wheel'
jQuery.event.special.wheel = {setup: function(_, ns, handle) {this.addEventListener('wheel', handle, {passive: (ns.includes('noPreventDefault')?false:true) }); }};



// function to replace document.write() ; it is used to add scripts tags in the HTML page. (Pff...)
function createScript(url, async){
	var sNew = document.createElement("script");
	sNew.type = "text/javascript";
	sNew.async = async;
	sNew.src = url;
	var s0 = document.getElementsByTagName('script')[0];
	s0.parentNode.insertBefore(sNew, s0);
}

// function to detect if the device is using a landscape rotation
function getDeviceRotation() {
	var device = null;
	if (window.innerHeight > 0 && window.innerWidth > 0) {
		device = {
			 landscape: (window.innerHeight >= window.innerWidth ? false : true)
			,xAxis: window.innerWidth
			,yAxis: window.innerHeight
		};
	}
	return device;
}

// function to detect the type of device
function detectDevice() {
	var codeTypeDevice = 0;
	
	// 0 : desktop
	// 1 : mobile phone
	// 2 : tablet PC
	
	var _ua = navigator.userAgent;
	var _device = {
		all: (_ua.match(/Android|BlackBerry|IEMobile|iPad|iPhone|iPod|Kindle|Mobile|Opera Mini|Silk|Tablet/i) ? true : false)
		,android: (_ua.match(/Android/i) ? true : false)
		,blackBerry: (_ua.match(/BB10|Tablet|Mobile/i) ? true : false)
		,ios: (_ua.match(/iPhone|iPad|iPod/i) ? true : false)
		,kindle: (_ua.match(/Kindle/i) ? true : false)
		,kindlesilk: (_ua.match(/Silk/i) ? true : false)
		//,smartphone: ((window.innerWidth <= 400 && window.innerHeight <= 820) ? true : false)
		//,tablet: ((_ua.match(/Tablet|iPad|iPod/i) && window.innerWidth <= 1024 && window.innerHeight <= 1024) ? true : false)
		,windows: (_ua.match(/IEMobile/i) ? true : false)
	};
	
	if (_device.all) {
		codeTypeDevice = _ua.match(/Tablet|iPad/i) ? 2 : 1;
		if (codeTypeDevice == 1) {
			// complementary test for Tablet PC :/
			var _dr = getDeviceRotation();
			if (_dr) {
				var axisMax = _dr.landscape ? _dr.xAxis : _dr.yAxis;
				if (axisMax > 820) codeTypeDevice = 2;
			}
		}
	}
	
	return codeTypeDevice;
}

// function to initialize the "winW" variable, which is used for screen size purposes.
function detectionWindow(){
	var objDw = document.documentElement;
	if (objDw) {
		if (objDw.clientWidth || objDw.clientHeight) {
			winW = objDw.clientWidth;
		}
	}
	else {
		objDw = document.body;
		if (objDw){
			if (objDw.clientWidth || objDw.clientHeight){
				winW = objDw.clientWidth;
			}
		}
	}
}
detectionWindow();


// "id3xContent" is used for values returned by macros, and some global functionalities. (default value is Object : null)
function id3xContentConstructor(p){
	this.processingStatus = {
		 EMPTY:   'EMPTY'
		,LOADING: 'LOADING'
		,NULL: 'NULL'
		,READY:   'READY'
	};
	
	var vF = {
		 debug: false
		,geolocation: {
			 manager: null                                    // "manager" is used as the object which will manage every maps on the HTML page. (default value is Object : null)
			,processingStatus: null
		 }
		,macro: {
			 B: {
				AGENCES: {
					DATA: []
				}
			}
			,E: {
				AGENCE: {
					IDPUBLICATION: '',
					LATITUDE: '',
					LONGITUDE: '',
					NOM: ''
				}
				,ANNONCE: {
					AGLATITUDE: '',
					AGLONGITUDE: '',
					LATITUDE: '',
					LONGITUDE: '',
					LATITUDE_CARTO: '',
					LONGITUDE_CARTO: '',
					PUBLICLAT: '',
					PUBLICLNG: '',
					VILLE: ''
				}
				,CARTO_ANNONCES_INIT: {
					LATITUDEMAX: '',
					LATITUDEMIN: '',
					LONGITUDEMAX: '',
					LONGITUDEMIN: ''
				}
				,PAGE: {
					MAP_CENTER_LATITUDE: '',
					MAP_CENTER_LONGITUDE: '',
					WAG_STYLE_AGENCE: '',
					WAG_STYLE_DETAIL: '',
					WAG_STYLE_RECHERCHE: '',
					WAG_STYLE_RECHERCHE_DEFAULT: '',
					WAG_TYPE_PACK: ''
				}
			}
		}
		,texts: {
			 clicAcquerir: ''
			,clicEstimation: ''
			,clicMore: ''
		}
		,values: {
			 acquerirIdt: ''
			,colorMarker: ''
			,estimationIdt: ''
			,poi: {
				 jsPoi: ''
				,mapAnnonceHide: ''
			}
			,tailleW: 600        // "tailleW" is used for screen size purposes. (default value is Integer : 600)
			,winW: winW          // "winW" is used for screen size purposes. (default value is Integer : 0)
		}
	};
	
	// affectation des propriétés + vérification des paramètres (passation optionelle de valeurs)
	var pP = { geolocation:{}, macro:{ B:{ AGENCES:{} }, E:{ AGENCE:{}, ANNONCE:{}, CARTO_ANNONCES_INIT:{}, PAGE:{} } }, texts:{}, values:{ poi:{} } }; 
	this.observeTreeParameters(pP, p);
	
	
	// PARAMETERS
	this.debug = this.setPropertyValue(vF.debug, p.debug);
	
	// Geolocation features
	this.geolocation = {
		 manager: this.setPropertyValue(vF.geolocation.manager, (pP.geolocation?p.geolocation.manager:undefined))
		,processingStatus: this.processingStatus.NULL
	};
	
	
	// ID3X responses from macros
	this.macro = {
		 B: this.setPropertyValue(vF.macro.B, (pP.macro?p.macro.B:undefined))
		,E: this.setPropertyValue(vF.macro.E, (pP.macro?p.macro.E:undefined))
	};
	
	
	// macros B
	this.macro.B = {
		AGENCES: this.setPropertyValue(vF.macro.B.AGENCES, (pP.macro.B?p.macro.B.AGENCES:undefined))
	};
	
	this.macro.B.AGENCES = {
		DATA: this.setPropertyValue(vF.macro.B.AGENCES.DATA, (pP.macro.B.AGENCES?p.macro.B.AGENCES.DATA:undefined))
	};
	
	
	// macros E
	this.macro.E = {
		 AGENCE:  this.setPropertyValue(vF.macro.E.AGENCE,  (pP.macro.E?p.macro.E.AGENCE:undefined))
		,ANNONCE: this.setPropertyValue(vF.macro.E.ANNONCE, (pP.macro.E?p.macro.E.ANNONCE:undefined))
		,PAGE:    this.setPropertyValue(vF.macro.E.PAGE,    (pP.macro.E?p.macro.E.PAGE:undefined))
	};
	
	this.macro.E.AGENCE = {
		 IDPUBLICATION: this.setPropertyValue(vF.macro.E.AGENCE.IDPUBLICATION, (pP.macro.E.AGENCE?p.macro.E.AGENCE.IDPUBLICATION:undefined))
		,LATITUDE:      this.setPropertyValue(vF.macro.E.AGENCE.LATITUDE,      (pP.macro.E.AGENCE?p.macro.E.AGENCE.LATITUDE:undefined))
		,LONGITUDE:     this.setPropertyValue(vF.macro.E.AGENCE.LONGITUDE,     (pP.macro.E.AGENCE?p.macro.E.AGENCE.LONGITUDE:undefined))
		,NOM:           this.setPropertyValue(vF.macro.E.AGENCE.NOM,           (pP.macro.E.AGENCE?p.macro.E.AGENCE.NOM:undefined))
	};
	
	this.macro.E.ANNONCE = {
		 AGLATITUDE:      this.setPropertyValue(vF.macro.E.ANNONCE.AGLATITUDE,      (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.AGLATITUDE:undefined))
		,AGLONGITUDE:     this.setPropertyValue(vF.macro.E.ANNONCE.AGLONGITUDE,     (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.AGLONGITUDE:undefined))
		,LATITUDE:        this.setPropertyValue(vF.macro.E.ANNONCE.LATITUDE,        (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.LATITUDE:undefined))
		,LONGITUDE:       this.setPropertyValue(vF.macro.E.ANNONCE.LONGITUDE,       (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.LONGITUDE:undefined))
		,LATITUDE_CARTO:  this.setPropertyValue(vF.macro.E.ANNONCE.LATITUDE_CARTO,  (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.LATITUDE_CARTO:undefined))
		,LONGITUDE_CARTO: this.setPropertyValue(vF.macro.E.ANNONCE.LONGITUDE_CARTO, (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.LONGITUDE_CARTO:undefined))
		,PUBLICLAT:       this.setPropertyValue(vF.macro.E.ANNONCE.PUBLICLAT,       (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.PUBLICLAT:undefined))
		,PUBLICLNG:       this.setPropertyValue(vF.macro.E.ANNONCE.PUBLICLNG,       (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.PUBLICLNG:undefined))
		,VILLE:           this.setPropertyValue(vF.macro.E.ANNONCE.VILLE,           (pP.macro.E.ANNONCE?p.macro.E.ANNONCE.VILLE:undefined))
	};
	
	this.macro.E.CARTO_ANNONCES_INIT = {
		 LATITUDEMAX:  this.setPropertyValue(vF.macro.E.CARTO_ANNONCES_INIT.LATITUDEMAX,  (pP.macro.E.CARTO_ANNONCES_INIT?p.macro.E.CARTO_ANNONCES_INIT.LATITUDEMAX:undefined))
		,LATITUDEMIN:  this.setPropertyValue(vF.macro.E.CARTO_ANNONCES_INIT.LATITUDEMIN,  (pP.macro.E.CARTO_ANNONCES_INIT?p.macro.E.CARTO_ANNONCES_INIT.LATITUDEMIN:undefined))
		,LONGITUDEMAX: this.setPropertyValue(vF.macro.E.CARTO_ANNONCES_INIT.LONGITUDEMAX, (pP.macro.E.CARTO_ANNONCES_INIT?p.macro.E.CARTO_ANNONCES_INIT.LONGITUDEMAX:undefined))
		,LONGITUDEMIN: this.setPropertyValue(vF.macro.E.CARTO_ANNONCES_INIT.LONGITUDEMIN, (pP.macro.E.CARTO_ANNONCES_INIT?p.macro.E.CARTO_ANNONCES_INIT.LONGITUDEMIN:undefined))
	};
	
	this.macro.E.PAGE = {
		 MAP_CENTER_LATITUDE:         this.setPropertyValue(vF.macro.E.PAGE.MAP_CENTER_LATITUDE,         (pP.macro.E.PAGE?p.macro.E.PAGE.MAP_CENTER_LATITUDE:undefined))
		,MAP_CENTER_LONGITUDE:        this.setPropertyValue(vF.macro.E.PAGE.MAP_CENTER_LONGITUDE,        (pP.macro.E.PAGE?p.macro.E.PAGE.MAP_CENTER_LONGITUDE:undefined))
		,WAG_STYLE_AGENCE:            this.setPropertyValue(vF.macro.E.PAGE.WAG_STYLE_AGENCE,            (pP.macro.E.PAGE?p.macro.E.PAGE.WAG_STYLE_AGENCE:undefined))
		,WAG_STYLE_DETAIL:            this.setPropertyValue(vF.macro.E.PAGE.WAG_STYLE_DETAIL,            (pP.macro.E.PAGE?p.macro.E.PAGE.WAG_STYLE_DETAIL:undefined))
		,WAG_STYLE_RECHERCHE:         this.setPropertyValue(vF.macro.E.PAGE.WAG_STYLE_RECHERCHE,         (pP.macro.E.PAGE?p.macro.E.PAGE.WAG_STYLE_RECHERCHE:undefined))
		,WAG_STYLE_RECHERCHE_DEFAULT: this.setPropertyValue(vF.macro.E.PAGE.WAG_STYLE_RECHERCHE_DEFAULT, (pP.macro.E.PAGE?p.macro.E.PAGE.WAG_STYLE_RECHERCHE_DEFAULT:undefined))
		,WAG_TYPE_PACK:               this.setPropertyValue(vF.macro.E.PAGE.WAG_TYPE_PACK,               (pP.macro.E.PAGE?p.macro.E.PAGE.WAG_TYPE_PACK:undefined))
	};
	
	// Textes
	this.texts = {
		 clicAcquerir:   this.setPropertyValue(vF.texts.clicAcquerir,   (pP.texts?p.texts.clicAcquerir:undefined))
		,clicEstimation: this.setPropertyValue(vF.texts.clicEstimation, (pP.texts?p.texts.clicEstimation:undefined))
		,clicMore:       this.setPropertyValue(vF.texts.clicMore,       (pP.texts?p.texts.clicMore:undefined))
	};
	
	// Valeurs
	this.values = {
		 acquerirIdt:   this.setPropertyValue(vF.values.acquerirIdt,   (pP.values?p.values.acquerirIdt:undefined))
		,colorMarker:   this.setPropertyValue(vF.values.colorMarker,   (pP.values?p.values.colorMarker:undefined))
		,estimationIdt: this.setPropertyValue(vF.values.estimationIdt, (pP.values?p.values.estimationIdt:undefined))
		,poi: {
			 jsPoi:          this.setPropertyValue(vF.values.poi.jsPoi,          (pP.values?p.values.poi.jsPoi:undefined))
			,mapAnnonceHide: this.setPropertyValue(vF.values.poi.mapAnnonceHide, (pP.values?p.values.poi.mapAnnonceHide:undefined))
		}
		,tailleW:       this.setPropertyValue(vF.values.tailleW,       (pP.values?p.values.tailleW:undefined))
		,winW:          this.setPropertyValue(vF.values.winW,          (pP.values?p.values.winW:undefined))
	};
	
	if (this.debug) console.log(this);
	
	//return this; // uncomment if you really need it
}

id3xContentConstructor.prototype.observeTreeParameters = function(treeObject, pParams) {
	for (var property in treeObject) {
		if ( !!eval("pParams."+property) ) { 
			this.observeTreeParameters( treeObject.property, eval("pParams."+property));
		}
		else { 
			treeObject[property] = false; 
		}
	}
};

// set properties + check parameters (set optional values)
id3xContentConstructor.prototype.setPropertyValue = function(defaultValue, paramValue) {
	var result = (paramValue===undefined ? defaultValue : (paramValue ? paramValue : defaultValue) );
	return result;
};

// Geolocation features
id3xContentConstructor.prototype.addMap = function(p) {
	if (this.geolocation.manager != null) {
		this.geolocation.manager.addMapObject(p);
	}
	else {
		var _processingStatus = this.geolocation.processingStatus;
		if (_processingStatus != this.processingStatus.LOADING && _processingStatus != this.processingStatus.READY) {
			if (_processingStatus == this.processingStatus.NULL) _processingStatus = this.processingStatus.LOADING;
			
			var _this = this, mapsManagerScripts = [
				 { script: null, loaded: false, path: '/z/webagency/slagence_X_V5/maps/all/js/maps-manager/1.0.0/maps-manager.min.js' }
				,{ script: null, loaded: false, path: '/z/webagency/slagence_X_V5/maps/all/js/maps-manager-data-manipulation.js' }
			];
			
			for (s = 0; s < mapsManagerScripts.length; s++) {
				mapsManagerScripts[s].script = document.createElement('script');
				mapsManagerScripts[s].script.type = 'text/javascript';
				mapsManagerScripts[s].script.async = false;
				mapsManagerScripts[s].script.index = s;
				mapsManagerScripts[s].script.src = mapsManagerScripts[s].path;
				
				mapsManagerScripts[s].script.onload = function () {
					mapsManagerScripts[this.index].loaded = true;
					
					if (mapsManagerScripts[0].loaded && mapsManagerScripts[1].loaded) {
						// add new object "map-manager"
						_this.geolocation.manager = new mapsManagerConstructor({
							 name: "map manager"
							,addAutoCompleteToMaps: false
							,defaultMapLibrary: 'OPENSTREETMAP'
							,defaultMapDrawing: 0
							,mapData: []
							,mapList: []
							,outputDebug: {api: false, data: false, map: false, manager: false, marker: false}
						});
						
						_processingStatus = _this.processingStatus.READY;
						
						// ajout carte
						_this.geolocation.manager.addMapObject(p);
					}
				};
				
				document.getElementsByTagName('head')[0].appendChild(mapsManagerScripts[s].script);
			}
		}
	}
}

id3xContentConstructor.prototype.getMap = function(p) {
	// p = { typeSearch: Integer, search: String }
	
	var map = null;
	
	if (this.geolocation.manager != null) {
		map = this.geolocation.manager.getMapObject({ typeSearch: p.typeSearch, search: p.search });
	}
	
	return map;
}

// ~~~ FUNCTIONS ~~~ END OF FUNCTIONS ~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
