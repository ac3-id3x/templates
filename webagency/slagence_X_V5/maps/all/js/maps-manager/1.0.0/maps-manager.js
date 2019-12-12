// Prerequisities :
// The following will simulate the « CustomEvent()» constructor feature (for the version 9, 10 or 11 of the navigator Microsoft Internet Explorer.)
(function () {
  if ( typeof window.CustomEvent === "function" ) return false;
  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~ maps-manager v1.0.0 ~~~

// The "mapDataList" object will contain an array of struct. These struct will be set like below :
// mapData = {
//    id: String            // unique key
// }

// this is the object which manages every maps on the HTML page. (default value is Object : null)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function mapsManagerConstructor(p) {
	
	// internal purposes only !!
	var cPath = { X_V5: '/z/webagency/slagence_X_V5'
		,leaflet_styles: '/css/leaflet', leaflet_scripts: '/scripts/libs/leaflet', leaflet_1_4_0: '/1.4.0', leaflet_1_5_1: '/1.5.1'
	};
	var vPath = {
		 leaflet_CSS: cPath.X_V5 + cPath.leaflet_styles +  cPath.leaflet_1_4_0
		,leaflet_JS:  cPath.X_V5 + cPath.leaflet_scripts + cPath.leaflet_1_4_0
	};
	
	// internal purposes only !!
	this.mapLibraries = {
		 BINGMAP: {
			 genericName: 'BINGMAP'
			,defaultOptions: {}
			,libraries: {
				 autoComplete: { libraryReady: false, libraryEval: 'ok', nbFiles: 0, list: [] }
				,drawing: { libraryReady: false, libraryEval: 'ok', nbFiles: 0, list: [] }
				,main: { libraryReady: false, libraryEval: 'ok', nbFiles: 0, list: [] }
			}
		 }
		,OPENSTREETMAP: {
			 genericName: 'OPENSTREETMAP'
			,defaultOptions: {
				 attribution: '&copy; <a href="http://www.ac3-groupe.com/">Groupe AC3</a>'
				,tilesServerUrl: 'https://osm.immo-facile.com/osm_tiles/{z}/{x}/{y}.png'
				,zoomLevel: 15
			}
			,defaultViews: [
				 { name: "FRANCE", zoomLevel:  5, lat: 46.198591232299805, lon: 2.17726731300354 }
				,{ name: "WORLD",  zoomLevel:  2, lat: 32,                 lon: 0 }
			]
			,libraries: {
				 autoComplete: {
					 libraryReady: false
					,libraryEval: 'EasyAutocomplete'
					,nbFiles: 0
					,list: [
						 { type: 'css', url: cPath.X_V5 + '/css/jquery/easy-autocomplete.min.css' }
						,{ type: 'js',  url: cPath.X_V5 + '/scripts/libs/jquery/jquery.easy-autocomplete.min.js' }
					]
				}
				,drawing: {
					 libraryReady: false
					,libraryEval: 'ok'
					,nbFiles: 0
					,list: [
						 { type: 'css', url: vPath.leaflet_CSS + '/leaflet.draw.css' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/Leaflet.draw.js' }
						
						// Leaflet drawing localization (current implementation is shitty, I know -_- )
						,{ type: 'js',  url: vPath.leaflet_JS + '/locales.draw/draw.en.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/locales.draw/draw.es.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/locales.draw/draw.fr.js' }
						
						// Leaflet drawing components
						,{ type: 'js',  url: vPath.leaflet_JS + '/Control.Draw.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/Leaflet.Draw.Event.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/Toolbar.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/Tooltip.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/ext/GeometryUtil.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/ext/LatLngUtil.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/ext/LineUtil.Intersect.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/ext/Polygon.Intersect.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/ext/Polyline.Intersect.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/ext/TouchEvents.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/DrawToolbar.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.Feature.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.SimpleShape.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.Circle.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.Marker.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.CircleMarker.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.Polyline.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.Polygon.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/draw/handler/Draw.Rectangle.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/EditToolbar.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/EditToolbar.Delete.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/EditToolbar.Edit.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/Edit.SimpleShape.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/Edit.CircleMarker.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/Edit.Circle.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/Edit.Marker.js' }
						
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/Edit.Poly.js' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/edit/handler/Edit.Rectangle.js' }
					] 
				}
				,main: {
					 libraryReady: false
					,libraryEval: 'L'
					,nbFiles: 0
					,list: [
						 { type: 'css', url: vPath.leaflet_CSS + '/leaflet.css' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/leaflet.js' }
					] 
				}
				,zoomBar: {
					 libraryReady: false
					,libraryEval: 'L.Control.ZoomBar'
					,nbFiles: 0
					,list: [
						 { type: 'css', url: vPath.leaflet_CSS + '/L.Control.ZoomBar.css' }
						,{ type: 'js',  url: vPath.leaflet_JS + '/L.Control.ZoomBar.js' }
					] 
				}
			}
		}
	};
	
	// The following array is necessary, because of the different size of icons
	// >>  these are located in '/z/webagency/slagence_X_V5/images/carto/'
	this.id3xIconsList = [
		 { width:31, height:31, name:'ajax-loader.gif' }
		,{ width:16, height:16, name:'ajax-loader-small.gif' }
		,{ width:32, height:47, name:'ajout_ville.png' }
		,{ width:32, height:47, name:'pinAgence_bleu.png' }
		,{ width:32, height:47, name:'pinAgence_bleu_clair.png' }
		,{ width:50, height:50, name:'pinAgence_confiance.png' }
		,{ width:44, height:34, name:'pinAgence_cph.png' }
		,{ width:27, height:42, name:'pinAgence_gi.png' }
		,{ width:32, height:47, name:'pinAgence_gris.png' }
		,{ width:32, height:47, name:'pinAgence_gris_clair.png' }
		,{ width:32, height:47, name:'pinAgence_gris_fonce.png' }
		,{ width:32, height:47, name:'pinAgence_gris_marron.png' }
		,{ width:32, height:47, name:'pinAgence_jaune.png' }
		,{ width:25, height:25, name:'pinAgence_laforet.png' }
		,{ width:32, height:47, name:'pinAgence_or.png' }
		,{ width:32, height:47, name:'pinAgence_orange.png' }
		,{ width:25, height:31, name:'pinAgence_orpi.png' }
		,{ width:32, height:47, name:'pinAgence_rose.png' }
		,{ width:32, height:47, name:'pinAgence_rouge.png' }
		,{ width:32, height:47, name:'pinAgence_vert.png' }
		,{ width:32, height:47, name:'pinAgence_vert_clair.png' }
		,{ width:32, height:47, name:'pinAgence_violet.png' }
		,{ width:15, height:15, name:'pinDraw.png' }
		,{ width:25, height:25, name:'pinDrawStart.png' }
		,{ width:32, height:47, name:'user.png' }
	];
	
	// Referenced APIs
	this.api = {
		geolocation: {
			url: 'https://mgt-apim.pericles.fr/public/addok/1.0.0/search?'   // API to get geolocation coordinates from a given addres
		}
	};
	
	// Traductions
	this.translations = {
		 en: {
			noCoordinates: "<b>no coordinates availables :<br />the map can not be precise.</b>"
		}
		,fr: {
			noCoordinates: "<b>aucune coordonnée disponible :<br />la carte ne peut pas être précise.</b>"
		}
	};
	
	// constants
	this.mapDataType = {
		 ADMINISTRATIVE_DIVISION: 'ADMINISTRATIVE_DIVISION'   // used to get a « city »/« department »/« region » coordinates.
		,AGENCIES:                'AGENCIES'                  // list of all agencies
		,NONE:                    'NONE'                      // default (no data)
		,ONLINE_ESTIMATE:         'ONLINE_ESTIMATE'           // used on every « online estimate » forms
		,REALESTATES:             'REALESTATES'               // list of all real estates
		,SINGLE_REALESTATE:       'SINGLE_REALESTATE'         // single real estate
	};
	this.processingStatus = {
		 EMPTY:   'EMPTY'
		,LOADING: 'LOADING'
		,READY:   'READY'
	};
	
	
	// configurable parts.
	// default values :
	var listDV = {
		 name: "#"
		,autoCompleteFeature: {
			enabled: false
		}
		,addDrawingFeatureToMaps: false
		,defaultMapLibrary: 'OPENSTREETMAP'
		,language: ''
		,mapDataList: {
			 administrative_division: { processingStatus: this.processingStatus.EMPTY, data: [] }
			,agencies:                { processingStatus: this.processingStatus.EMPTY, data: [], url: '/maps,ag.js' }
			,onlineEstimate:          { processingStatus: this.processingStatus.EMPTY, data: [], itemsList: [] }
			,realEstates:             { processingStatus: this.processingStatus.EMPTY, data: [] }
			,singleRealEstate:        { processingStatus: this.processingStatus.EMPTY, data: [] }
		}
		,mapObjectList: []                                // array of "mapObject" (see above)
		,outputDebug: {
			 api: false
			,data: false
			,map: false
			,manager: false
			,marker: false
		}
	};
	
	var pP = { mapDataList:{ administrative_division:{}, agencies:{}, onlineEstimate:{}, realEstates:{}, singleRealEstate:{} } }; 
	this.observeTreeParameters(pP, p);
	
	if (p.autoCompleteFeature !== undefined) {
		this.autoCompleteFeature = {
			enabled: this.setPropertyValue(listDV.autoCompleteFeature.enabled, (pP.autoCompleteFeature?p.autoCompleteFeature.enabled:undefined))
		};
	}
	
	this.addDrawingFeatureToMaps = this.setPropertyValue(listDV.addDrawingFeatureToMaps, p.addDrawingFeatureToMaps);
	this.deviceGeolocation = { accuracy: '', allowed: false, latitude: null, longitude: null };
	this.defaultMapLibrary = this.setPropertyValue(listDV.defaultMapLibrary, p.defaultMapLibrary);
	this.httpsContext = false;
	this.language = this.setPropertyValue(listDV.language, p.language);
	//this.loadRessourcesFileTimeOut = this.setPropertyValue(listDV.loadRessourcesFileTimeOut, p.loadRessourcesFileTimeOut);   // NOT IMPLEMENTED
	
	this.mapDataList = this.setPropertyValue(listDV.mapDataList, p.mapDataList);
	if (p.mapDataList !== undefined) {
		this.mapDataList = {
			 administrative_division: this.setPropertyValue(listDV.mapDataList.administrative_division, (pP.mapDataList?p.mapDataList.administrative_division:undefined))
			,agencies:                this.setPropertyValue(listDV.mapDataList.agencies,                (pP.mapDataList?p.mapDataList.agencies:undefined))
			,onlineEstimate:          this.setPropertyValue(listDV.mapDataList.onlineEstimate,          (pP.mapDataList?p.mapDataList.onlineEstimate:undefined))
			,realEstates:             this.setPropertyValue(listDV.mapDataList.realEstates,             (pP.mapDataList?p.mapDataList.realEstates:undefined))
			,singleRealEstate:        this.setPropertyValue(listDV.mapDataList.singleRealEstate,        (pP.mapDataList?p.mapDataList.singleRealEstate:undefined))
		};
		
		if (p.mapDataList.administrative_division !== undefined) {
			this.mapDataList.administrative_division = {
				 processingStatus: this.processingStatus.EMPTY
				,data: this.setPropertyValue(listDV.mapDataList.administrative_division.data, (pP.mapDataList.administrative_division?p.mapDataList.administrative_division.data:undefined))
			};
		}
		
		if (p.mapDataList.agencies !== undefined) {
			this.mapDataList.agencies = {
				 processingStatus: this.processingStatus.EMPTY
				,data: this.setPropertyValue(listDV.mapDataList.agencies.data, (pP.mapDataList.agencies?p.mapDataList.agencies.data:undefined))
			};
		}
		
		if (p.mapDataList.onlineEstimate !== undefined) {
			this.mapDataList.onlineEstimate = {
				 processingStatus: this.processingStatus.EMPTY
				,data: this.setPropertyValue(listDV.mapDataList.onlineEstimate.data, (pP.mapDataList.onlineEstimate?p.mapDataList.onlineEstimate.data:undefined))
			};
		}
		
		if (p.mapDataList.realEstates !== undefined) {
			this.mapDataList.realEstates = {
				 processingStatus: this.processingStatus.EMPTY
				,data: this.setPropertyValue(listDV.mapDataList.realEstates.data, (pP.mapDataList.realEstates?p.mapDataList.realEstates.data:undefined))
			};
		}
		
		if (p.mapDataList.singleRealEstate !== undefined) {
			this.mapDataList.singleRealEstate = {
				 processingStatus: this.processingStatus.EMPTY
				,data: this.setPropertyValue(listDV.mapDataList.singleRealEstate.data, (pP.mapDataList.singleRealEstate?p.mapDataList.singleRealEstate.data:undefined))
			};
		}
	}
	
	this.mapObjectList = this.setPropertyValue(listDV.mapObjectList, p.mapObjectList);
	this.name = this.setPropertyValue(listDV.name, p.name);
	this.outputDebug = this.setPropertyValue(listDV.outputDebug, p.outputDebug);
	this.version = "1.0.0";
	
	// execute the following methods right now
	this.initComponent();
	
	if (this.outputDebug.manager) this.showOutputDebug({ shortName: 'mapsManagerConstructor()', objectValue: this });
	//return this;
}

mapsManagerConstructor.prototype.initComponent = function() {
	this.httpsContext = this.isHttps();
	if (this.language == '') this.language = this.getPageLanguage();
	
	var _mapDataList = this.mapDataList;
	if (_mapDataList.administrative_division.data.length > 0) _mapDataList.administrative_division.processingStatus = this.processingStatus.READY;
	if (_mapDataList.agencies.data.length > 0) _mapDataList.agencies.processingStatus = this.processingStatus.READY;
	if (_mapDataList.onlineEstimate.data.length > 0) _mapDataList.onlineEstimate.processingStatus = this.processingStatus.READY;
	if (_mapDataList.realEstates.data.length > 0) _mapDataList.realEstates.processingStatus = this.processingStatus.READY;
	if (_mapDataList.singleRealEstate.data.length > 0) _mapDataList.singleRealEstate.processingStatus = this.processingStatus.READY;
	//this.initStringFromDate();
}

mapsManagerConstructor.prototype.observeTreeParameters = function(treeObject, pParams) {
	for (var property in treeObject) {
		if ( !!eval("pParams."+property) ) { 
			this.observeTreeParameters( treeObject.property, eval("pParams."+property));
		}
		else { 
			treeObject[property] = false; 
		}
	}
};

mapsManagerConstructor.prototype.markerIcon = function(p) {
	// configurable parts.
	// default icon values :
	var obj = {
		defaultIcon: {
			 classCss: ''
			,color: 'gris'
			,pictureName: 'pinAgence_gris.png'
			,size: { height: 47, width: 32 }   // of course, size is declared as pixels (px)
			,styleCss: ''
			,url: '/z/webagency/slagence_X_V5/images/carto/'
		}
	};
	
	// affectation des propriétés + vérification des paramètres (passation optionelle de valeurs)
	var pP = { defaultIcon:{ size:{} } };
	this.observeTreeParameters(pP, p);
	
	// PARAMETERS
	if (p.defaultIcon !== undefined) {
		obj.defaultIcon = {
			 classCss:    this.setPropertyValue(obj.defaultIcon.classCss,    (pP.defaultIcon?p.defaultIcon.classCss:undefined))
			,color:       this.setPropertyValue(obj.defaultIcon.color,       (pP.defaultIcon?p.defaultIcon.color:undefined))
			,pictureName: this.setPropertyValue(obj.defaultIcon.pictureName, (pP.defaultIcon?p.defaultIcon.pictureName:undefined))
			,size:        this.setPropertyValue(obj.defaultIcon.size,        (pP.defaultIcon?p.defaultIcon.size:undefined))
			,styleCss:    this.setPropertyValue(obj.defaultIcon.styleCss,    (pP.defaultIcon?p.defaultIcon.styleCss:undefined))
			,url:         this.setPropertyValue(obj.defaultIcon.url,         (pP.defaultIcon?p.defaultIcon.url:undefined))
		};
		
		if (p.defaultIcon.size !== undefined) {
			obj.defaultIcon.size = {
				 height: this.setPropertyValue(obj.defaultIcon.size.height, (pP.defaultIcon.size?p.defaultIcon.size.height:undefined))
				,width:  this.setPropertyValue(obj.defaultIcon.size.width,  (pP.defaultIcon.size?p.defaultIcon.size.width:undefined))
			};
		}
	}
	
	// ID3X templates legacy :
	// ... get the full picture's name by its "color" String value
	if (obj.defaultIcon.color != 'gris' && obj.defaultIcon.color != '') obj.defaultIcon.pictureName = 'pinAgence_' + obj.defaultIcon.color + '.png';
	
	// ... manage the icons messed sizes :(
	// >>  they are located in '/z/webagency/slagence_X_V5/images/carto/'
	// >>  default size will be 32px * 47px
	var s = 0, _list = this.id3xIconsList, notFound = true;
	while (notFound && s < _list.length) {
		if (_list[s].name == obj.defaultIcon.pictureName) {
			obj.defaultIcon.size = { height: _list[s].height, width: _list[s].width };
			notFound = false;
		}
		s++;
	}
	
	return obj;
}

mapsManagerConstructor.prototype.getMapObject = function(p) {
	// p = { typeSearch: Integer, search: String }
	
	var mapObject = null;
	
	for (m = 0; m < this.mapObjectList.length; m++) {
		if (p.typeSearch == 1) if (this.mapObjectList[m].container.id == p.search) mapObject = this.mapObjectList[m];
	}
	
	return mapObject;
}

mapsManagerConstructor.prototype.addMapObject = function(p) {
	var isMapObjectValid = true;
	
	var _id = ((p.container !== undefined) ? ((p.container.id !== undefined) ? p.container.id : null) : null);
	if (_id != null) {
		// check if the map already exists.
		var exists = false;
		for (m = 0; m < this.mapObjectList.length; m++) {
			if (this.mapObjectList[m].container.id == _id && this.mapObjectList[m].isLoaded) exists = true;
		}
		
		// if not exists, then add that map
		if (!exists) {
			// default values
			var mapObject = {
				 container: {
					 cssClass: {
						 addClass: ''
						,removeClass: ''
						,replaceClass: []
					}
					,cssStyle: {
						 addStyle: ''
						,removeStyle: ''
						,replaceStyle: []
					}
					,domElement: null                                      // the container of the map. (initialized from JavaScript)
					,id: ''                                                // the element Id wich refer to the DOM element containing the map.
				}
				,idMap: ''                                                 // unique key.
				,isLoaded: false                                           // It is used to check if the map is loaded.
				//,language: ''                                            // NOT IMPLEMENTED : use the global value from the « mapsManager object »
				,map: null                                                 // the map. (as constructed from JavaScript)
				,mapData: []                                               // refers to one (or multiple) data from the "mapDataList" object.
				,mapLibrary: this.mapLibraries.OPENSTREETMAP.genericName   // optional. It is used when you need another library (other than the default OpenStreetMap) for the map to use. (value is 'BINGMAP' or 'OPENSTREETMAP')
				,markerList: []                                            // The « markerList » object is only used for internal purposes.
				,options: null                                             // options of the map : it is set by choosing one out of the two library ('BINGMAP' or 'OPENSTREETMAP')
				,readyToLoad: false                                        // It is used to check if all the needed libraries were properly loaded. (there is no point to load something unusable, be it the map or its features :)
			};
			
			mapObject.idMap = 'map-' + (this.mapObjectList.length+1).toString();
			
			// Example of an item in the array : [   { mapDataType: String, marker: { icon: « Struct "markerIcon" » } }   ]
			// => Code below will check every item in the array
			if (p.mapData !== undefined) {
				var _mapData = p.mapData;
				if (Array.isArray(_mapData)) {
					var _validObject= null, _item = null;
					for (d = 0; d < _mapData.length; d++) {
						_item = _mapData[d];
						
						// Test if the required mapDataType is there
						if (_item.mapDataType !== undefined) {
							_validObject = null;
							
							// Set the definitive « mapData » object.
							if (_item.mapDataType == this.mapDataType.ADMINISTRATIVE_DIVISION) {
								_validObject = {
									mapDataType: _item.mapDataType, filters: [], data: { events: null }, marker: { events: null, icon: null, popup: false },
									division: {
										 city:       { label: '', zoomLevel: 13 }
										,country:    { label: '', zoomLevel:  5 }
										,department: { label: '', zoomLevel: 12 }
										,region:     { label: '', zoomLevel:  7 }
									} 
								};
							}
							
							if (_item.mapDataType == this.mapDataType.AGENCIES) {
								_validObject = {
									mapDataType: _item.mapDataType, filters: [], data: { events: null, url: null }, marker: { events: null, icon: null, popup: false }
								};
							}
							
							if (_item.mapDataType == this.mapDataType.ONLINE_ESTIMATE) {
								_validObject = {
									mapDataType: _item.mapDataType, filters: [], data: { events: null }, marker: { events: null, icon: null, popup: false }
								};
							}
							
							if (_item.mapDataType == this.mapDataType.REALESTATES) {
								_validObject = {
									mapDataType: _item.mapDataType, filters: [], data: { events: null }, marker: { events: null, icon: null, popup: false }, pinVille: 0, transactionTypeSelectorId: ''
								};
							}
							
							if (_item.mapDataType == this.mapDataType.SINGLE_REALESTATE) {
								_validObject = {
									mapDataType: _item.mapDataType, filters: [], data: { events: null }, marker: { events: null, icon: null, popup: false }
								};
							}
							
							// Finally
							if (_validObject != null) {
								if (_validObject.marker.icon !== undefined) {
									// Test the icon's options
									var _markerIcon = _item.marker.icon;
									if (_markerIcon === undefined) {
										_validObject.marker.icon = this.markerIcon({});
									}
									else {
										_validObject.marker.icon =  ((_markerIcon != null) ? this.markerIcon(_markerIcon) : null);
									}
								}
								
								// Test if specified single marker
								if (_validObject.division !== undefined) {
									var _division = _item.division;
									if (_division !== undefined) {
										var _city = _division.city, _country = _division.country, _department = _division.department, _region = _division.region;
										
										if (_city !== undefined) {
											if (_city.label !== undefined) _validObject.division.city.label = _city.label;
											if (_city.zoomLevel !== undefined) _validObject.division.city.zoomLevel = _city.zoomLevel;
										}
										
										if (_country !== undefined) {
											if (_country.label !== undefined) _validObject.division.country.label = _country.label;
											if (_country.zoomLevel !== undefined) _validObject.division.country.zoomLevel = _country.zoomLevel;
										}
										
										if (_department !== undefined) {
											if (_department.label !== undefined) _validObject.division.department.label = _department.label;
											if (_department.zoomLevel !== undefined) _validObject.division.department.zoomLevel = _department.zoomLevel;
										}
										
										if (_region !== undefined) {
											if (_region.label !== undefined) _validObject.division.region.label = _region.label;
											if (_region.zoomLevel !== undefined) _validObject.division.region.zoomLevel = _region.zoomLevel;
										}
									}
								}
								
								// description of the « filters » object : it is an Array of multiples Key/Value pairs with some options;
								// for example >>   filters: [ {action: String, key: String, value: String}, ... ]
								//
								// «action» default value is : '' (Empty String) => exclude all others values (than this one), for this key.
								//                             'exclude'         => exclude this value (for the given key) from the list.
								//                             'single'          => first item found will be used, and nothing else.
								// => You understand the importance of using carefully the «action» Object.
								// => Remember : each rule will apply according to its index in the Array. (from first, to last)
								if (_validObject.filters !== undefined) {
									var _filters = _item.filters;
									if (_filters !== undefined) {
										if (Array.isArray(_filters)) {
											var _action = null, _key = null, _value = null;
											for (f = 0; f < _filters.length; f++) {
												_key = _filters[f].key;
												_value = _filters[f].value;
												if (_key !== undefined && _value !== undefined) {
													if (_key.trim() != '') {
														_action = _filters[f].action;
														_validObject.filters.push({
															 action: ((_action !== undefined) ? _action : '')
															,key: _key.trim()
															,value: (typeof(_value) != 'string' ? _value : _value.trim())
														});
													}
												}
												
											}
										}
									}
								}
								
								// Search Engine : test if specified pinVille (VERY necessary for query url)
								if (_validObject.pinVille !== undefined) _validObject.pinVille = (_item.pinVille !== undefined) ? (_item.pinVille == '1' ? 1:0) : 0;
								
								// Search Engine : needed to get the selected « type of transaction » ('idtt=x')
								if (_validObject.transactionTypeSelectorId !== undefined) _validObject.transactionTypeSelectorId = (_item.transactionTypeSelectorId !== undefined) ? _item.transactionTypeSelectorId : '';
								
								
								
								// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
								// add some personalized events, for that map only
								// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
								
								// DATA events
								if (_item.data !== undefined) {
									var _events = _item.data.events;
									if (_events !== undefined) {
										_validObject.data.events = {
											enableDataLoad: false, onDataLoad: function(mapObject, data) {}
											//,enableSomeEvent: false, onSomeEvent: function(e) {}
										};
										
										if (_events.onDataLoad !== undefined) {
											_validObject.data.events.enableDataLoad = true;
											_validObject.data.events.onDataLoad = _events.onDataLoad;
										}
									}
									
									var _url = _item.data.url;
									if (_url !== undefined) {
										_validObject.data.url = _url;
									}
									
								}
								
								// MARKER events
								if (_item.marker !== undefined) {
									var _events = _item.marker.events;
									if (_events !== undefined) {
										_validObject.marker.events = {
											enableMarkerClick: false, onMarkerClick: function(e) {}
											//,enableSomeEvent: false, onSomeEvent: function(e) {}
										};
										
										if (_events.onMarkerClick !== undefined) {
											_validObject.marker.events.enableMarkerClick = true;
											_validObject.marker.events.onMarkerClick = _events.onMarkerClick;
										}
									}
								}
								
								
								// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
								// set a popup for each marker (this mapData only)
								// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
								var _popup = _item.marker.popup;
								if (_popup !== undefined) _validObject.marker.popup = _popup;
								
								
								mapObject.mapData.push(_validObject);
							}
						}
					}
				}
			}
			
			mapObject.mapLibrary = this.setPropertyValue(mapObject.mapLibrary, p.mapLibrary);
			
			// options
			if (mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
				// BING (no implementation)
			}
			
			if (mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
				var pP = { container:{ cssClass:{}, cssStyle:{} }, options: { fixes:{}, toolBar:{ buttons:{ zoomIn:{}, zoomOut:{}, zoomStart:{}, zoomArea:{} } } } }; 
				this.observeTreeParameters(pP, p);
				
				// default
				mapObject.options = {
					autoCompleteFeature: {                                 // optional. activates an autoComplete module to select some item in the map.
						 autoCompleteMarker: null
						,enabled: false
						,inputContainerId: ''
					}
					,addDrawingFeatureToMap: false                         // optional. activates an drawing module on the map.
					,fixes: { zIndexFix: true }
					,listing: false
					,pageAcquerir:   (id3xContent.values.acquerirIdt != '' ? true : false)
					,pageEstimation: (id3xContent.values.estimationIdt != '' ? true : false)
					,toolBar: {
						 fixCssToolbar: true
						,position: 'topright'
						,buttons: {
							 zoomIn: { title: "Zoom avant" }
							,zoomOut: { title: "Zoom arrière" }
							,zoomStart: { title: "Revenir à la position initiale" }
							,zoomArea: { enableGeolocation: true, title: "Me localiser", titleAccuracy: "Me localiser (précision à {0}m)", zoomLevel: 13 }
						}
					}
				};
				
				if (p.container !== undefined) {
					// content of container
					mapObject.container.domElement = this.setPropertyValue(mapObject.container.domElement, (pP.container?p.container.domElement:undefined));
					mapObject.container.id =         this.setPropertyValue(mapObject.container.id,         (pP.container?p.container.id:undefined));
					
					if (p.container.cssClass !== undefined) {
						// content of container > cssClass
						mapObject.container.cssClass = {
							 addClass:     this.setPropertyValue(mapObject.container.cssClass.addClass,     (pP.container.cssClass?p.container.cssClass.addClass:undefined))
							,removeClass:  this.setPropertyValue(mapObject.container.cssClass.removeClass,  (pP.container.cssClass?p.container.cssClass.removeClass:undefined))
							,replaceClass: this.setPropertyValue(mapObject.container.cssClass.replaceClass, (pP.container.cssClass?p.container.cssClass.replaceClass:undefined))
						};
					}
					
					if (p.container.cssStyle !== undefined) {
						// content of container > cssStyle
						mapObject.container.cssStyle = {
							 addStyle:     this.setPropertyValue(mapObject.container.cssStyle.addStyle,     (pP.container.cssStyle?p.container.cssStyle.addStyle:undefined))
							,removeStyle:  this.setPropertyValue(mapObject.container.cssStyle.removeStyle,  (pP.container.cssStyle?p.container.cssStyle.removeStyle:undefined))
							,replaceStyle: this.setPropertyValue(mapObject.container.cssStyle.replaceStyle, (pP.container.cssStyle?p.container.cssStyle.replaceStyle:undefined))
						};
					}
				}
				
				if (p.options !== undefined) {
					// content of options
					mapObject.options = {
						 autoCompleteFeature:    this.setPropertyValue(mapObject.options.autoCompleteFeature,    (pP.options?p.options.autoCompleteFeature:undefined))
						,addDrawingFeatureToMap: this.setPropertyValue(mapObject.options.addDrawingFeatureToMap, (pP.options?p.options.addDrawingFeatureToMap:undefined))
						,fixes:                  this.setPropertyValue(mapObject.options.fixes,                  (pP.options?p.options.fixes:undefined))
						,listing:                this.setPropertyValue(mapObject.options.listing,                (pP.options?p.options.listing:undefined))
						,pageAcquerir:           this.setPropertyValue(mapObject.options.pageAcquerir,           (pP.options?p.options.pageAcquerir:undefined))
						,pageEstimation:         this.setPropertyValue(mapObject.options.pageEstimation,         (pP.options?p.options.pageEstimation:undefined))
						,toolBar:                this.setPropertyValue(mapObject.options.toolBar,                (pP.options?p.options.toolBar:undefined))
					};
					
					if (p.options.autoCompleteFeature !== undefined) {
						// content of options > autoCompleteFeature
						mapObject.options.autoCompleteFeature = {
							 enabled:          this.setPropertyValue(mapObject.options.autoCompleteFeature.enabled,          (pP.options.autoCompleteFeature?p.options.autoCompleteFeature.enabled:undefined))
							,inputContainerId: this.setPropertyValue(mapObject.options.autoCompleteFeature.inputContainerId, (pP.options.autoCompleteFeature?p.options.autoCompleteFeature.inputContainerId:undefined))
						};
					}
					
					if (p.options.fixes !== undefined) {
						// content of options > fixes
						mapObject.options.fixes = {
							zIndexFix: this.setPropertyValue(mapObject.options.fixes.zIndexFix, (pP.options.fixes?p.options.fixes.zIndexFix:undefined))
						};
					}
					
					if (p.options.toolBar !== undefined) {
						// content of options > toolBar
						mapObject.options.toolBar = {
							 fixCssToolbar: this.setPropertyValue(mapObject.options.toolBar.fixCssToolbar, (pP.options.toolBar?p.options.toolBar.fixCssToolbar:undefined))
							,position:      this.setPropertyValue(mapObject.options.toolBar.position,      (pP.options.toolBar?p.options.toolBar.position:undefined))
							,buttons:       this.setPropertyValue(mapObject.options.toolBar.buttons,       (pP.options.toolBar?p.options.toolBar.buttons:undefined))
						};
						
						if (p.options.toolBar.buttons !== undefined) {
							// content of options > toolBar > buttons
							mapObject.options.toolBar.buttons = {
								 zoomIn:    this.setPropertyValue(mapObject.options.toolBar.buttons.zoomIn,    (pP.options.buttons?p.options.toolBar.buttons.zoomIn:undefined))
								,zoomOut:   this.setPropertyValue(mapObject.options.toolBar.buttons.zoomOut,   (pP.options.buttons?p.options.toolBar.buttons.zoomOut:undefined))
								,zoomStart: this.setPropertyValue(mapObject.options.toolBar.buttons.zoomStart, (pP.options.buttons?p.options.toolBar.buttons.zoomStart:undefined))
								,zoomArea:  this.setPropertyValue(mapObject.options.toolBar.buttons.zoomArea,  (pP.options.buttons?p.options.toolBar.buttons.zoomArea:undefined))
							};
							
							if (p.options.toolBar.buttons.zoomIn !== undefined) {
								// content of options > toolBar > buttons > zoomIn
								mapObject.options.toolBar.buttons.zoomIn = {
									title: this.setPropertyValue(mapObject.options.toolBar.buttons.zoomIn.title, (pP.options.toolBar.buttons.zoomIn?p.options.toolBar.buttons.zoomIn.title:undefined))
								};
							}
							
							if (p.options.toolBar.buttons.zoomOut !== undefined) {
								// content of options > toolBar > buttons > zoomOut
								mapObject.options.toolBar.buttons.zoomOut = {
									title: this.setPropertyValue(mapObject.options.toolBar.buttons.zoomOut.title, (pP.options.toolBar.buttons.zoomOut?p.options.toolBar.buttons.zoomOut.title:undefined))
								};
							}
							
							if (p.options.toolBar.buttons.zoomStart !== undefined) {
								// content of options > toolBar > buttons > zoomStart
								mapObject.options.toolBar.buttons.zoomStart = {
									title: this.setPropertyValue(mapObject.options.toolBar.buttons.zoomStart.title, (pP.options.toolBar.buttons.zoomStart?p.options.toolBar.buttons.zoomStart.title:undefined))
								};
							}
							
							if (p.options.toolBar.buttons.zoomArea !== undefined) {
								// content of options > toolBar > buttons > zoomArea
								mapObject.options.toolBar.buttons.zoomArea = {
									 enableGeolocation: this.setPropertyValue(mapObject.options.toolBar.buttons.zoomArea.enableGeolocation, (pP.options.toolBar.buttons.zoomArea?p.options.toolBar.buttons.zoomArea.enableGeolocation:undefined))
									,title:             this.setPropertyValue(mapObject.options.toolBar.buttons.zoomArea.title,             (pP.options.toolBar.buttons.zoomArea?p.options.toolBar.buttons.zoomArea.title:undefined))
									,titleAccuracy:     this.setPropertyValue(mapObject.options.toolBar.buttons.zoomArea.titleAccuracy,     (pP.options.toolBar.buttons.zoomArea?p.options.toolBar.buttons.zoomArea.titleAccuracy:undefined))
									,zoomLevel:         this.setPropertyValue(mapObject.options.toolBar.buttons.zoomArea.zoomLevel,         (pP.options.toolBar.buttons.zoomArea?p.options.toolBar.buttons.zoomArea.zoomLevel:undefined))
								};
							}
						}
					}
				} // END for 'options'
			}
			
			if (this.outputDebug.map) this.showOutputDebug({ shortName: 'mapsManagerConstructor.addMapObject()', objectValue: mapObject });
			
			if (mapObject.mapLibrary != this.mapLibraries.BINGMAP.genericName && mapObject.mapLibrary != this.mapLibraries.OPENSTREETMAP.genericName) isMapObjectValid = false;
			if (isMapObjectValid) this.includeMapsLibraries({ mapObject: mapObject });
			if (isMapObjectValid) this.mapObjectList.push(mapObject);
		}
	}
}

mapsManagerConstructor.prototype.includeMapsLibraries = function(p) {
	// p = { mapObject: mapObject }
	
	if (p.mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (p.mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _libraries = this.mapLibraries.OPENSTREETMAP.libraries, librariesReady = true;
		
		if (!_libraries.main.libraryReady) {
			librariesReady = false;
			this.injectMapLibrariesToHtml({ library: _libraries.main, mapObject: p.mapObject });
		}
		
		if (!_libraries.zoomBar.libraryReady) {
			librariesReady = false;
			this.injectMapLibrariesToHtml({ library: _libraries.zoomBar, mapObject: p.mapObject });
		}
		
		if (p.mapObject.options.addDrawingFeatureToMap) {
			if (!_libraries.drawing.libraryReady) {
				librariesReady = false;
				this.injectMapLibrariesToHtml({ library: _libraries.drawing, mapObject: p.mapObject });
			}
		}
		
		if (p.mapObject.options.autoCompleteFeature.enabled) {
			if (!_libraries.autoComplete.libraryReady) {
				librariesReady = false;
				this.injectMapLibrariesToHtml({ library: _libraries.autoComplete, mapObject: p.mapObject });
			}
		}
		
		if (librariesReady) {
			p.mapObject.readyToLoad = true;
			this.loadMap({ mapObject: p.mapObject });
		}
	}
	
	if (this.outputDebug.manager) this.showOutputDebug({ shortName: 'mapsManagerConstructor.includeMapsLibraries()', objectValue: this });
}

mapsManagerConstructor.prototype.injectMapLibrariesToHtml = function(p) {
	// p = { 
	//     library:   this.mapLibraries.{libraryGenericName}.libraries.{library},
	//     mapObject: mapObject
	//     }
	
	if (!p.library.libraryReady) {
		p.library.nbFiles = p.library.list.length;
		for (i = 0; i < p.library.list.length; i++) {
			this.addRessourcesToHtml({ index: i, library: p.library, mapObject: p.mapObject });
		}
	}
}

mapsManagerConstructor.prototype.addRessourcesToHtml = function(p) {
	// p = { 
	//     index:   Integer,
	//     library:   { libraryReady: Boolean, libraryEval: String, nbFiles: Integer, list: Array },
	//     mapObject: mapObject
	//     }
	
	if (this.outputDebug.manager) { console.log("\r\nFile library call :"); console.log(p.library.list[p.index]); }
	var _this = this, ressourcesFile = null;
	if (p.library.list[p.index].type == 'js') {
		ressourcesFile = document.createElement('script');
		ressourcesFile.type = 'text/javascript';
		ressourcesFile.async = false;
		ressourcesFile.src = p.library.list[p.index].url;
	}
	else {
		if (p.library.list[p.index].type == 'css') {
			ressourcesFile = document.createElement('link');
			ressourcesFile.type = 'text/css';
			ressourcesFile.rel = 'stylesheet';
			ressourcesFile.href = p.library.list[p.index].url;
		}
	}
	
	if (ressourcesFile != null) {
		document.getElementsByTagName('head')[0].appendChild(ressourcesFile);
		
		ressourcesFile.onload = function () {
			if (p.index+1 == p.library.nbFiles) {
				if (eval(p.library.libraryEval) !== undefined) {
					p.library.libraryReady = true;
					if (_this.outputDebug.manager) console.log('\r\n~> Loading finished for '+(p.index+1).toString()+' files. Check on eval('+p.library.libraryEval+') : ok.');
					
					// if prerequisites are ready, then load map.
					if (p.mapObject.mapLibrary == _this.mapLibraries.BINGMAP.genericName) {
						// BING (no implementation)
					}
					
					if (p.mapObject.mapLibrary == _this.mapLibraries.OPENSTREETMAP.genericName) {
						var _libraries = _this.mapLibraries.OPENSTREETMAP.libraries;
						
						// "main" library and "zoomBar" library are both needed.
						if (_libraries.main.libraryReady && _libraries.zoomBar.libraryReady) {
							p.mapObject.readyToLoad = true;
							
							// check if the "drawing feature" library is ready.
							if (p.mapObject.options.addDrawingFeatureToMap && !_libraries.drawing.libraryReady) p.mapObject.readyToLoad = false;
							
							// check if the "autoComplete feature" library is ready.
							if (p.mapObject.options.autoCompleteFeature.enabled) {
								if (_libraries.autoComplete.libraryReady) {
									_this.initializeAutoComplete({ mapObject: p.mapObject });
								}
								else {
									p.mapObject.readyToLoad = false;
								}
							}
							
							// a this point, you should be able to load a first map.
							if (p.mapObject.readyToLoad) _this.loadMap({ mapObject: p.mapObject });
						}
					}
				}
			}
		};
	}
	else {
		if (_this.outputDebug.manager) {
			console.log("(!) The file no "+(p.index+1).toString()+" is not identified as 'css' or 'js' in the library object :");
			console.log(p.library.list[p.index]);
		}
	}
}

mapsManagerConstructor.prototype.initStringFromDate = function() {
	var newDate = new Date();
	var result = ''
		+ newDate.getFullYear()
		+ newDate.getMonth()
		+ newDate.getDay()
		+ newDate.getHours()
		+ newDate.getMinutes()
		+ newDate.getSeconds()
		+ newDate.getMilliseconds();
	if (this.outputDebug.manager) this.showOutputDebug({ shortName: 'initStringFromDate()', stringValue: result });
	return result;
}

mapsManagerConstructor.prototype.isHttps = function() {
	var result = (document.location.protocol == 'https:' ? true : false);
	if (this.outputDebug.manager) this.showOutputDebug({ shortName: 'isHttps()', stringValue: result });
	return result;
}

mapsManagerConstructor.prototype.getPageLanguage = function() {
	var result = $('html').attr('lang');
	result = ( result != '' ? result : $(this).attr('data-langue') );
	if (this.outputDebug.manager) this.showOutputDebug({ shortName: 'getPageLanguage()', stringValue: result });
	return result;
}

// set basic configuration stuff for a map
mapsManagerConstructor.prototype.loadMap = function(p) {
	// p = { mapObject: mapObject }
	
	var _mapObject = p.mapObject;
	var _mapDomID = _mapObject.container.id;
	
	// BUSINESS : Web Design (BEGIN)
	if (document.getElementById(_mapDomID)) {
		// CSS classes
		var _cssClass = _mapObject.container.cssClass, _cssStyle = _mapObject.container.cssStyle, _domElement = null;
		if ( (_cssClass.replaceClass.length == 2) || (_cssClass.removeClass != '') || (_cssClass.addClass != '') ) {
			// specific rule (BEGIN)
			var _doReplace = (id3xContent.values.winW < id3xContent.values.tailleW) ? true : false;
			// specific rule (END)
			
			if (_doReplace && _cssClass.replaceClass.length == 2) {
				_domElement = $('#' + _mapDomID);
				if (_domElement.hasClass(_cssClass.replaceClass[0]) && !_domElement.hasClass(_cssClass.replaceClass[1])) {
					_domElement.removeClass(_cssClass.replaceClass[0]).addClass(_cssClass.replaceClass[1]);
				}
			}
			
			if (_cssClass.removeClass != '') {
				if (_domElement == null) _domElement = $('#' + _mapDomID);
				if (_domElement.hasClass(_cssClass.removeClass)) _domElement.removeClass(_cssClass.removeClass);
			}
			
			if (_cssClass.addClass != '') {
				if (_domElement == null) _domElement = $('#' + _mapDomID);
				if (!_domElement.hasClass(_cssClass.addClass)) _domElement.addClass(_cssClass.addClass);
			}
		}
		
		// CSS styles
		if ( (_cssStyle.replaceStyle.length == 2) || (_cssStyle.removeStyle != '') || (_cssStyle.addClass != '') ) {
			var _cssText = document.getElementById(_mapDomID).style.cssText;
			if (_cssStyle.replaceStyle.length == 2) document.getElementById(_mapDomID).style = _cssText.replace(_cssStyle.replaceStyle[0], _cssStyle.replaceStyle[0]);
			if (_cssStyle.removeStyle != '') document.getElementById(_mapDomID).style = _cssText.replace(_cssStyle.removeStyle, '');
			if (_cssStyle.addStyle != '') document.getElementById(_mapDomID).style = _cssText + _cssStyle.addStyle;
		}
	}
	// BUSINESS : Web Design (END)
	
	
	if (this.outputDebug.map) {
		console.log("\r\nloadMap(p); object in parameter 'p' is :"); console.log(_mapObject);
		console.log("\r\ncheck container with ID '" + _mapDomID + "'"); console.log(document.getElementById(_mapDomID));
	}
	
	if (_mapObject.readyToLoad) {
		if (_mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
			// BING (no implementation)
		}
		
		if (_mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
			var _defaultOptions = this.mapLibraries.OPENSTREETMAP.defaultOptions;
			
			if (document.getElementById(_mapDomID) != null) {
				_mapObject.map = new L.map(_mapDomID, { zoomControl: false });
				
				if (_mapObject.map != null) {
					
					// set view. (default is "WORLD" (at index 1). "FRANCE" is at index 0.)
					var viewIndex = (_mapDomID != 'geomap-online-estimate') ? 1 : 0;
					var _defaultView = this.mapLibraries.OPENSTREETMAP.defaultViews[viewIndex];
					
					_mapObject.map.setView([_defaultView.lat, _defaultView.lon], _defaultView.zoomLevel);
					
					L.tileLayer(_defaultOptions.tilesServerUrl, { attribution: _defaultOptions.attribution }).addTo(_mapObject.map);
					L.control.scale().addTo(_mapObject.map);
					
					_mapObject.container.domElement = document.getElementById(_mapDomID);
					
					// complementary stuff (it IS usefull !)
					this.loadMapToolBar({ mapObject: _mapObject });
					this.fixCssMap({ mapObject: _mapObject });
					
					// finally, set the markers on the map, according to the needed data
					var _mapData = _mapObject.mapData;
					if (_mapData.length > 0) {
						var _mapDataList = this.mapDataList;
						for (d = 0; d < _mapData.length; d++) {
							// ADMINISTRATIVE_DIVISION
							if (_mapData[d].mapDataType == this.mapDataType.ADMINISTRATIVE_DIVISION) {
								var _administrative_division = _mapDataList.administrative_division;
								if (_administrative_division.processingStatus == this.processingStatus.READY) {
									// no need to load, just add the markers
									if (this.outputDebug.data) console.log('ADMINISTRATIVE_DIVISION : There is actually ' + _administrative_division.data.length.toString() + ' item(s).');
									this.addMarkers({ mapObject: _mapObject, mapDataIndex: d });
								}
								else {
									if (_administrative_division.processingStatus == this.processingStatus.EMPTY) {
										_administrative_division.processingStatus = this.processingStatus.LOADING;
										this.loadMarkersData({ mapObject: _mapObject, mapDataIndex: d });
									}
								}
							}
							
							// AGENCIES
							if (_mapData[d].mapDataType == this.mapDataType.AGENCIES) {
								var _agencies = _mapDataList.agencies;
								if (_agencies.processingStatus == this.processingStatus.READY) {
									// no need to load, just add the markers
									if (this.outputDebug.data) console.log('AGENCIES : There is actually ' + _agencies.data.length.toString() + ' item(s).');
									this.addMarkers({ mapObject: _mapObject, mapDataIndex: d });
								}
								else {
									if (_agencies.processingStatus == this.processingStatus.EMPTY) {
										_agencies.processingStatus = this.processingStatus.LOADING;
										this.loadMarkersData({ mapObject: _mapObject, mapDataIndex: d });
									}
								}
							}
							
							// ONLINE_ESTIMATE
							if (_mapData[d].mapDataType == this.mapDataType.ONLINE_ESTIMATE) {
								var _onlineEstimate = _mapDataList.onlineEstimate;
								if (_onlineEstimate.processingStatus == this.processingStatus.READY) {
									// no need to load, just add the markers
									if (this.outputDebug.data) console.log('ONLINE_ESTIMATE : There is actually ' + _onlineEstimate.data.length.toString() + ' item(s).');
									this.addMarkers({ mapObject: _mapObject, mapDataIndex: d });
								}
								else {
									if (_onlineEstimate.processingStatus == this.processingStatus.EMPTY) {
										_onlineEstimate.processingStatus = this.processingStatus.LOADING;
										this.loadMarkersData({ mapObject: _mapObject, mapDataIndex: d });
									}
								}
							}
							
							// REALESTATES
							if (_mapData[d].mapDataType == this.mapDataType.REALESTATES) {
								if (_mapDataList.realEstates.data.length > 0) {
									_mapDataList.realEstates.data = [];
									_mapDataList.realEstates.processingStatus = this.processingStatus.EMPTY;
								}
								this.loadMarkersData({ mapObject: _mapObject, mapDataIndex: d });
							}
							
							// SINGLE_REALESTATE
							if (_mapData[d].mapDataType == this.mapDataType.SINGLE_REALESTATE) {
								var _singleRealEstate = _mapDataList.singleRealEstate;
								if (_singleRealEstate.processingStatus == this.processingStatus.READY) {
									if (this.outputDebug.data) console.log('SINGLE_REALESTATE : There is actually ' + _singleRealEstate.data.length.toString() + ' item(s).');
									
									// no need to load, just add the markers
									this.addMarkers({ mapObject: _mapObject, mapDataIndex: d });
								}
								else {
									if (_singleRealEstate.processingStatus == this.processingStatus.EMPTY) {
										var coords = null, _ANNONCE = id3xContent.macro.E.ANNONCE;
										if (_ANNONCE.PUBLICLAT != '' && _ANNONCE.PUBLICLNG != '') coords = { lat: _ANNONCE.PUBLICLAT, lon: _ANNONCE.PUBLICLNG };
										if (coords == null) {
											if (_ANNONCE.LATITUDE_CARTO != '' && _ANNONCE.LONGITUDE_CARTO != '') coords = { lat: _ANNONCE.LATITUDE_CARTO, lon: _ANNONCE.LONGITUDE_CARTO };
										}
										
										if (coords != null) {
											_singleRealEstate.data.push({
												latitude: parseFloat(coords.lat.replace(',', '.')),
												longitude: parseFloat(coords.lon.replace(',', '.'))
											});
											_singleRealEstate.processingStatus = this.processingStatus.READY;
											this.addMarkers({ mapObject: _mapObject, mapDataIndex: d });
										}
										else {
											_singleRealEstate.processingStatus = this.processingStatus.LOADING;
											this.loadMarkersData({ mapObject: _mapObject, mapDataIndex: d });
										}
									}
								}
							}
							// SINGLE_REALESTATE (end)
							
							
							// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
							// ~~ if needed, attach events to the map ~~
							// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
							this.initializeMapEvents({ mapObject: _mapObject, mapDataIndex: d });
						}
					}
					
					_mapObject.isLoaded = true;
				}
			}
		}
	}
}

// load the data, in order to prepare the markers
mapsManagerConstructor.prototype.initializeMapEvents = function(p) {
	// p = { mapObject: mapObject, mapDataIndex: Integer }
	
	var _mapObject = p.mapObject, _mapDataIndex = p.mapDataIndex;
	var _mapData = _mapObject.mapData[_mapDataIndex];
	
	if (_mapData.mapDataType == this.mapDataType.ONLINE_ESTIMATE) {
		// check if element « address » exists
		var _inputAddress = document.getElementById('address');
		if (_inputAddress != null) {
			// check if element « form-group required » exists
			var _elements = document.getElementsByClassName("form-group required");
			if (_elements.length > 0) {
				var _this = this, onKeyUpExpr = '', onMouseEnterExpr = '', onMouseLeaveExpr = '';
				onKeyUpExpr = "_this.sendRequestToGeolocationApi({ mapObject: _mapObject, mapDataIndex: " + _mapDataIndex.toString() + ", address: $('#address').val().trim(), business: '4' });";
				onKeyUpExpr = "_elements[0].addEventListener('keyup', function(e){" + onKeyUpExpr + "}, false)";
				eval(onKeyUpExpr);
				
				var _as = document.getElementById('addressSuggestions');
				if (_as != null) {
					onMouseEnterExpr  = "var _as = document.getElementById('addressSuggestions'); ";
					onMouseEnterExpr += "if (_as.style.display == 'none' || _as.style.visibility == 'hidden') { ";
					onMouseEnterExpr += "_as.style.cssText += 'display: inline; visibility: visible;'; ";
					onMouseEnterExpr += "} ";
					onMouseEnterExpr = "_elements[0].addEventListener('mouseenter', function(e){" + onMouseEnterExpr + "}, false)";
					eval(onMouseEnterExpr);
					
					_elements[0].onmouseleave = function () { document.getElementById('addressSuggestions').style.cssText += 'display: none; visibility: hidden;'; };
				}
			}
		}
	}
}

// load the data, in order to prepare the markers
mapsManagerConstructor.prototype.loadMarkersData = function(p) {
	// p = { mapObject: mapObject, mapDataIndex: Integer }
	
	var _mapObject = p.mapObject, _mapDataIndex = p.mapDataIndex;
	var _mapData = _mapObject.mapData[_mapDataIndex];
	
	if (_mapData.mapDataType == this.mapDataType.ADMINISTRATIVE_DIVISION) {
		var callApi = true, _administrative_division = this.mapDataList.administrative_division;
		
		if (window.location.search != '') {
			var coords = this.getCoordinatesFromUrl();
			if (coords != null) {
				callApi = false;
				_administrative_division.data.push({ latitude: coords.latitude, longitude: coords.longitude, zoomLevel: 14 });
				_administrative_division.processingStatus = this.processingStatus.READY;
				
				// personalized events
				if (_mapData.data.events) if (_mapData.data.events.enableDataLoad) _mapData.data.events.onDataLoad(_mapObject, _administrative_division.data);
				
				this.addMarkers({ mapObject: _mapObject, mapDataIndex: _mapDataIndex });
			}
			// implementation like below :
			// www.arthurimmo.com/quartier.htm?ville=Lorgues&quartier=Lorgues&lon=6.36001274345207&lat=43.4946393037748
		}
		
		if (callApi) {
			var _this = this, dataString = '', _division = _mapData.division, _zoomLevel = 1;
			
			// set the address to look for
			if (_division.city.label != '') {
				_zoomLevel = _division.city.zoomLevel;
				dataString = _division.city.label + '&type=municipality';
			}
			if (dataString == '' && _division.department.label != '') {
				_zoomLevel = _division.department.zoomLevel;
				dataString = _division.department.label;
			}
			if (dataString == '' && _division.region.label != '') {
				_zoomLevel = _division.region.zoomLevel;
				dataString = _division.region.label;
			}
			if (dataString == '' && _division.country.label != '') {
				_zoomLevel = _division.country.zoomLevel;
				dataString = _division.country.label;
			}
			
			if (dataString.length > 2) {
				this.sendRequestToGeolocationApi({ mapObject: _mapObject, mapDataIndex: _mapDataIndex, address: dataString.trim(), business: '3' });
			}
			
			// implementation like below :
			// www.arthurimmo.com/immobilier/tout/immo-boulogne-billancourt-92/
			// ../webagency/A_Nexi/arthurimmo_2016_nat/detail/incl_poi.htm
		}
	}
	
	if (_mapData.mapDataType == this.mapDataType.AGENCIES) {
		var _mapDataType = (this.outputDebug.data) ? _mapData.mapDataType : null;
		
		var _this = this, dataReady = false;
		if (this.outputDebug.data) console.log(_mapDataType + ' data : Loading has begun...');
		$.ajax({
			type: 'GET',
			url: (!_mapData.data.url ? this.mapDataList.agencies.url : _mapData.data.url),
			cache: false,
			contentType: 'text/plain',
			dataType: 'text',
			complete: function() {
				if (_this.outputDebug.data) console.log('complete');
			},
			error : function (jqXHR, textStatus, errorThrown) {
				if (_this.outputDebug.data) console.log('error');
			},
			success: function(data) {
				if (_this.outputDebug.data) { console.log(_mapDataType + ' RAW data :'); console.log(data); }
				if (data.toString().length > 0) {
					var json = jQuery.parseJSON(data);
					if (_this.outputDebug.data) { console.log(_mapDataType + ' JSON data :'); console.log(json); }
					if (json.success) {
						var _agency = null, _agencies = _this.mapDataList.agencies;
						
						for (j = 0; j < json.list.length; j++) {
							_agency = json.list[j];
							_agencies.data.push({
								idPublication: parseInt(_agency.idp, 10),
								latitude: parseFloat(_agency.lat.replace(',', '.')),
								longitude: parseFloat(_agency.lon.replace(',', '.')),
								cp:   (_agency.cp ? _agency.cp : ''),
								city: (_agency.v  ? _agency.v  : ''),
								name: _agency.nom,
								url: _agency.url
							});
						}
						
						// The following is a feature to update some agency data
						// In order to ease its use, it is put separately from the "maps manager" sources ; and is located at :
						// \\x-ext\e$\base-svn\work\template\webagency\slagence_X_V5\maps\all\js\maps-manager-data-manipulation.js
						_this.updateAgenciesData();
						
						_agencies.processingStatus = _this.processingStatus.READY;
						dataReady = true;
						
						// personalized events
						if (_mapData.data.events) if (_mapData.data.events.enableDataLoad) _mapData.data.events.onDataLoad(_mapObject, _agencies.data);
						
						if (_this.outputDebug.data) { console.log(_mapDataType + ' data pushed into "this.mapDataList" object :'); console.log(_agencies); }
						
						// try and add markers
						if (dataReady) _this.addMarkers({ mapObject: _mapObject, mapDataIndex: _mapDataIndex });
					}
				}
			}
		});
	}
	
	//if (_mapData.mapDataType == this.mapDataType.ONLINE_ESTIMATE) {
	//	var _onlineEstimate = this.mapDataList.onlineEstimate;
	//	_onlineEstimate.data.push({ address: '', addressWithoutCountry: '', city: '', latitude: 46.198591232299805, longitude: 2.17726731300354, postalCode: '', zoomLevel: 5 });
	//	_onlineEstimate.processingStatus = this.processingStatus.READY;
	//	// personalized events
	//	if (_mapData.data.events) if (_mapData.data.events.enableDataLoad) _mapData.data.events.onDataLoad(_mapObject, _onlineEstimate.data);
	//	this.addMarkers({ mapObject: _mapObject, mapDataIndex: _mapDataIndex });
	//}
	
	if (_mapData.mapDataType == this.mapDataType.REALESTATES) {
		if (document.getElementById('polygon')) $('#polygon').val('');
		
		var _macro = id3xContent.macro.E.CARTO_ANNONCES_INIT, latitudeMax = '', latitudeMin = '', longitudeMax = '', longitudeMin = '',
			domElement = document.getElementById(_mapObject.container.id);
		
		if (_macro.LATITUDEMAX != '') latitudeMax = _macro.LATITUDEMAX.replace(',', '.');
		if (_macro.LATITUDEMIN != '') latitudeMin = _macro.LATITUDEMIN.replace(',', '.');
		if (_macro.LONGITUDEMAX != '') longitudeMax = _macro.LONGITUDEMAX.replace(',', '.');
		if (_macro.LONGITUDEMIN != '') longitudeMin = _macro.LONGITUDEMIN.replace(',', '.');
		
		var query = this.getQueryForEngine({ elementId: _mapData.transactionTypeSelectorId });
		var dataString = 'height=' + domElement.offsetHeight + '&width=' + domElement.offsetWidth
			+ '&latMin=' + latitudeMin
			+ '&lonMin=' + longitudeMin
			+ '&latMax=' + latitudeMax
			+ '&lonMax=' + longitudeMax
			+ '&' + query;
		
		var _this = this, dataReady = false;
		$.ajax({
			type: "GET",
			url: ((_mapData.pinVille == 1) ? '/moteur,incl_pin_ville.htm' : '/moteur,incl_pin.htm'),
			cache : "true",
			dataType: "json",
			contentType: "application/json",
			data: dataString,
			beforeSend:function() {
				if (document.getElementById('map-layer'))$('#map-layer').show();
			},
			success:function(data) {
				// DEBUG VAL POLYGON BACK BROWSER
				if (document.getElementById('polygon')) $('#polygon').val('');
				if (document.getElementById('map-layer')) $('#map-layer').hide();
								
				if (data != null) {
					var _list = (typeof data.list != 'undefined') ? data.list : [];
					if (_list.length > 0) {
						// remove previous data
						var _realEstates = _this.mapDataList.realEstates;
						if (_realEstates.data.length > 0) _this.mapDataList.realEstates.data = [];
						
						// specific rules (BEGIN)
						$('.saisie-suggest').val('');
						var titleQuery = $('#phrase-query').val();
						var baseQuery = _this.getQueryForEngine({ elementId: _mapData.transactionTypeSelectorId });
						$('.saisie-suggest').val($('.saisie-suggest').attr('data-value'));
						// specific rules (END)
						
						var _addPopup = false, _query = '';
						for (j = 0; j < _list.length; j++) {
							
							// specific rules (BEGIN)
							_addPopup = false;
							_query = '';
							
							if (_list[j].type == "reg" && _list[j].region != 0) {
								_query = baseQuery + '&div=' + _list[j].region;
								_addPopup = true;
							} else if(_list[j].type == "dep" && _list[j].departement != 0) {
								_query = baseQuery + '&cp=' + _list[j].departement;
								_addPopup = true;
							} else if(_list[j].type == "vil" && _list[j].ci != 0) {
								_query = baseQuery + '&ci=' + _list[j].ci;
								_addPopup = true;
							} else if(_list[j].type == "qrt" && _list[j].idquartier != 0) {
								_query = baseQuery + '&ci=' + _list[j].ci + '&idq=' + _list[j].idquartier;
								_addPopup = true;
							}
							// specific rules (END)
							
							_realEstates.data.push({
								 ci:        _list[j].ci
								,dep:       _list[j].departement
								,idq:       _list[j].idquartier
								,latitude:  parseFloat(_list[j].latitude)
								,longitude: parseFloat(_list[j].longitude)
								,nb:        _list[j].nb
								,nom:       _list[j].nom
								,reg:       _list[j].region
								,typ:       _list[j].type
								,vnb:       _list[j].valuenb
								,addPopup:  _addPopup
								,query: _query
								,titleQuery: (_addPopup ? titleQuery : '')
							});
						}
						
						_realEstates.processingStatus = _this.processingStatus.READY;
						dataReady = true;
						
						// personalized events
						if (_mapData.data.events) if (_mapData.data.events.enableDataLoad) _mapData.data.events.onDataLoad(_mapObject, _realEstates.data);
						
						if (_this.outputDebug.data) { console.log(_mapDataType + ' data pushed into "_this.mapDataList" object :'); console.log(_realEstates); }
						
						// try and add markers
						if (dataReady) _this.addMarkers({ mapObject: _mapObject, mapDataIndex: _mapDataIndex });
					}
				}
				
			},
			error : function (jqXHR, textStatus, errorThrown) {
				if (_this.outputDebug.data) { console.log(jqXHR); console.log(textStatus); console.log(errorThrown); }
			},
			complete : function (jqXHR, textStatus) {
				if (_this.outputDebug.data) { console.log(jqXHR); console.log(textStatus); }
			}
		});
	}
	
	if (_mapData.mapDataType == this.mapDataType.SINGLE_REALESTATE) {
		var _singleRealEstate = this.mapDataList.singleRealEstate;
		
		var callApi = true, place = id3xContent.macro.E.ANNONCE.VILLE.trim();
		if (place.length <= 2) {
			// PAGE "DESCRIPTION VILLE"
			var coords = this.getCoordinatesFromUrl();
			if (coords != null) {
				callApi = false;
				_singleRealEstate.data.push(coords);
				_singleRealEstate.processingStatus = this.processingStatus.READY;
				
				// personalized events
				if (_mapData.data.events) if (_mapData.data.events.enableDataLoad) _mapData.data.events.onDataLoad(_mapObject, _singleRealEstate.data);
				
				this.addMarkers({ mapObject: _mapObject, mapDataIndex: _mapDataIndex });
			}
		}
		
		if (callApi && (place.length > 2)) {
			// PAGE "AUTOUR DU BIEN"
			this.sendRequestToGeolocationApi({ mapObject: _mapObject, mapDataIndex: _mapDataIndex, address: place, business: '2' });
		}
		
		// implementation like below :
		// www.arthurimmo.com/annonces/investissement/appartement/meaux-77/croix-saint-loup-saint-nicolas/151387201.htm
	}
}

// get the marker's icon
mapsManagerConstructor.prototype.getMarkerIcon = function(p) {
	// p = { mapObject: mapObject, markerIcon: « Struct "markerIcon" » }
	
	var _mapObject = p.mapObject, _markerIcon = p.markerIcon, L_icon = null;
	
	if (_mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (_mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _iconProperties = _markerIcon.defaultIcon;
		L_icon = L.icon({
			iconUrl: _iconProperties.url + _iconProperties.pictureName
			//,shadowUrl: 'leaf-shadow.png',
			,iconSize:     [_iconProperties.size.width, _iconProperties.size.height]       // size of the icon
			,shadowSize:   [12, 16]                                                        // size of the shadow
			,iconAnchor:   [_iconProperties.size.width / 2, _iconProperties.size.height]   // point of the icon which will correspond to marker's location
			//,shadowAnchor: [4, 62]                                                       // same as above, for the shadow
			,popupAnchor:  [0, _iconProperties.size.height * -1]                           // point from which the popup should open relative to the iconAnchor
		});
	}
	
	return L_icon;
}

mapsManagerConstructor.prototype.setMarkerPopup = function(p) {
	// p = { mapObject: mapObject, marker: L.marker, markerData: « Struct "from item in array" » }
	
	var _mapObject = p.mapObject, _marker = p.marker, _markerData = p.markerData;
	
	if (_mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (_mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		_marker.bindPopup('<div>' + id3xContent.texts.clicMore + '</div><div><b>' + _markerData.name + '</b></div>');
		_marker._popup.options.closeButton = false;
	}
}

mapsManagerConstructor.prototype.setMarkerHtml = function(p) {
	// p = { mapObject: mapObject, marker: L.marker, markerData: « Struct "from item in array" » }
	
	var _mapObject = p.mapObject, _marker = p.marker, _markerData = p.markerData;
	
	if (_mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (_mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _options = _mapObject.options;
		
		_marker.HTML = '<div class="bg-white typo-black small font-body height-75 width-200 round-5 padding-10">'
			+ ( _options.pageEstimation ? id3xContent.texts.clicEstimation : (_options.pageAcquerir ? id3xContent.texts.clicAcquerir : id3xContent.texts.clicMore) )
			+ '<strong>' + _markerData.name + '</strong></div>';
	}
}

mapsManagerConstructor.prototype.setMarkerEvents = function(p) {
	// p = { mapObject: mapObject, mapData: mapData, marker: L.marker, markerData: « Struct "from item in array" » }
	
	var _mapObject = p.mapObject, _mapData = p.mapData, _marker = p.marker, _markerData = p.markerData;
	
	if (_mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (_mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _this = this, eventExpr = '';
		
		
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		// ~~~~~~~~ event : click ~~~~~~~~
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		if (_mapData.marker.events === null) {
			// set default event
			
			// marker's HTML
			var _options = _mapObject.options;
			
			// manage the event
			if (_options.listing) {
				if (_options.pageEstimation || _options.pageAcquerir) {
					var _urlRredirect = ( _options.pageEstimation ? '/estimation,immobiliere.htm' : (_options.pageAcquerir ? '/acquereur,demande.htm' : '') );
					eventExpr = "_marker.on('click', function(e) { window.location.href = '/" + _markerData.idPublication + _urlRredirect + "'; })";
				} else {
					var _classCSS = 'zone-agence-ajax';
					var _domElement = _mapObject.container.domElement.getElementsByClassName(_classCSS);
					if (_domElement !== undefined && _domElement != null && _domElement.length > 0) {
						eventExpr = "mapObject: _mapObject";
						eventExpr = ", marker: _marker";
						eventExpr += ", idPublication:" + _markerData.idPublication.toString();
						eventExpr += ", latitude:" + _markerData.latitude.toString();
						eventExpr += ", longitude:" + _markerData.longitude.toString();
						eventExpr += ", url:'" + _markerData.url + "'";
						eventExpr = "_marker.on('click', function(e) { _this.showMarkerInfo({ " + eventExpr + " }); })";
					}
					else {
						eventExpr = "_marker.on('click', function(e) { window.location.href = '" + _markerData.url + "'; })";
					}
				}
			} 
			else {
				eventExpr = "_marker.on('click', function(e) { window.location.href = '" + _markerData.url + "'; })";
			}
			eval(eventExpr);
			
		}
		else {
			// personalized events
			if (_mapData.marker.events.enableMarkerClick) {
				_marker.idP = _markerData.idPublication.toString();
				_marker.url = _markerData.url;
				_marker.lang = this.language;
				_marker.addEventListener('click', _mapData.marker.events.onMarkerClick, false);
			}
		}
		
		
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		// ~~~~~~~~ event : mouseout ~~~~~~~~
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		if (_mapData.marker.events === null) {
			// set default event
			if (_mapData.marker.popup) eval("_marker.on('mouseout', function(e) { this.closePopup(); })");
		}
		else {
			// personalized events
		}
		
		
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		// ~~~~~~~~ event : mouseover ~~~~~~~~
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		if (_mapData.marker.events === null) {
			// set default event
			if (_mapData.marker.popup) eval("_marker.on('mouseover', function(e) { this.openPopup(); })");
		}
		else {
			// personalized events
		}
		
	}
}

mapsManagerConstructor.prototype.showMarkerInfo = function(p) {
	// p = { mapObject: mapObject, marker: markerObject, containerClass: String, idPublication: Integer, latitude: Float, longitude: Float, url: String }
	
	var container = $('.' + containerClass);
			
	// Fix center
	p.mapObject.map.setView([p.latitude, p.longitude], 13);
	container.html('').show();
	$.ajax({
		type: 'GET',
		data : 'idpublication=' + p.idPublication + '&lang=' + this.language,
		dataType:'html',
		url: '/carto,incl_search_agence.htm',
		beforeSend: function() {
			container.html('<div class="pagination-centered"><img src="/z/webagency/slagence_X_V5/images/carto/ajax-loader.gif"></div>');
		},
		success: function(data) {
			container.html(data).show();
		},
		error : function (jqXHR, textStatus, errorThrown) {console.log(jqXHR, textStatus, errorThrown);},
		complete: function() {
			// Fix hash
			var _position = container.position();
			if (_position !== undefined) {
				$("html, body").animate({ scrollTop: _position.top }, 600);
				return false;
			}
		}
	});
}

// add markers to the map
mapsManagerConstructor.prototype.addMarkers = function(p) {
	// p = { mapObject: mapObject, mapDataIndex: mapDataIndex }
	
	var _mapObject = p.mapObject, _mapDataIndex = p.mapDataIndex;
	
	if (_mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (_mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _defaultOptions = this.mapLibraries.OPENSTREETMAP.defaultOptions;
		var _mapData = _mapObject.mapData[_mapDataIndex];
		var _mapDataType = _mapData.mapDataType;
		
		// First, remove previous markers.
		if (_mapObject.markerList.length > 0) {
			for (r = 0; r < _mapObject.markerList.length; r++) {
				_mapObject.map.removeLayer(_mapObject.markerList[r]);
			}
		}
		
		
		var rawData = [];
		switch (_mapDataType) {
			case this.mapDataType.ADMINISTRATIVE_DIVISION: rawData = this.mapDataList.administrative_division.data; break;
			case this.mapDataType.AGENCIES:                rawData = this.mapDataList.agencies.data; break;
			case this.mapDataType.ONLINE_ESTIMATE:         rawData = this.mapDataList.onlineEstimate.data; break;
			case this.mapDataType.REALESTATES:             rawData = this.mapDataList.realEstates.data; break;
			case this.mapDataType.SINGLE_REALESTATE:       rawData = this.mapDataList.singleRealEstate.data; break;
			default: break;
		}
		
		if (this.outputDebug.marker) this.showOutputDebug({ shortName: 'RAW DATA for markers', objectValue: rawData });
		
		
		// apply the optional filters
		var _data = null, _filters = _mapData.filters;
		if (_filters.length > 0) {
			if (this.outputDebug.marker) this.showOutputDebug({ shortName: 'Filters', objectValue: _filters });
			_data = this.filterData({ filters: _filters, data: rawData });
			if (this.outputDebug.marker) this.showOutputDebug({ shortName: 'Filtered data', objectValue: _data });
		}
		else {
			if (this.outputDebug.marker) console.log("No filtering.");
			_data = rawData;
		}
		
		
		// Array of data with (at least) one item.
		if (_data.length > 0) {
			var nRecords = false;
			
			// ... finally, use the selected data
			var L_marker = null, L_icon = null, _markerIcon = '0', _zoomLevel = 0, _zoomLatitude = 0, _zoomLongitude = 0;
			
			// set the marker's icon
			if (_mapDataType != this.mapDataType.REALESTATES) {
				// AGENCIES or SINGLE_REALESTATE
				_markerIcon = _mapData.marker.icon;
				if (_markerIcon != null) L_icon = this.getMarkerIcon({ mapObject: _mapObject, markerIcon: _markerIcon });
			}
			
			// array has many records ?
			if (_data.length > 1) nRecords = true;
			
			// construct the markers
			if (this.outputDebug.marker) console.log("~> List of markers :");
			for (g = 0; g < _data.length; g++) {
				
				// initialize zoom coordinates
				_zoomLatitude = _zoomLatitude + _data[g].latitude;
				_zoomLongitude = _zoomLongitude + _data[g].longitude;
				
				
				// set the marker
				if (_mapDataType != this.mapDataType.REALESTATES) {
					// AGENCIES or SINGLE_REALESTATE or something else
					L_marker = (L_icon != null) ? (new L.marker([_data[g].latitude, _data[g].longitude], {icon: L_icon})) : (new L.marker([_data[g].latitude, _data[g].longitude]));
					
					if (_mapDataType === this.mapDataType.ONLINE_ESTIMATE) {
						L_marker.bindPopup("<div>" + _data[g].label + "</div><div><b>" + _data[g].context + "</b></div>");
						L_marker._popup.options.closeButton = false;
						eval("L_marker.on('mouseout', function(e) { this.closePopup(); })");
						eval("L_marker.on('mouseover', function(e) { this.openPopup(); })");
					}
					
					// if more than one marker, add feature to the marker
					if (nRecords) {
						this.setMarkerHtml({ mapObject: _mapObject, marker: L_marker, markerData: _data[g] });
						if (_mapData.marker.popup) this.setMarkerPopup({ mapObject: _mapObject, marker: L_marker, markerData: _data[g] });
						this.setMarkerEvents({ mapObject: _mapObject, mapData: _mapData, marker: L_marker, markerData: _data[g] }); // ALWAYS set the markers events at the end !
					}
				}
				else {
					// REALESTATES only
					L_icon = new L.DivIcon({ className: 'div.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive',
						html: '<div class="btn btn-action btn-small small font-body box-shadow" style="border-radius:4px;">' + _data[g].vnb + '</div>'
					});
					
					L_marker = new L.marker([_data[g].latitude, _data[g].longitude], {icon: L_icon});
					
					if (_data[g].addPopup) {
						var _engineLink = _data[g].nom;
						if (_data[g].titleQuery) {
							_engineLink += '<br><a href="' + ('/recherche,basic.htm?' + _data[g].query) + '" title="' + _data[g].titleQuery + '">' + _data[g].titleQuery + '</a>';
						}
						
						L_marker.bindPopup('<div class="z50 pinQuartier typo-black font-body height-100-pourcent width-100-pourcent round-5 normal padding-10 ellipsis relative pagination-centered bg-white">'
							+ _engineLink + '</div>');
					}
				}
				
				if (this.outputDebug.marker) console.log(L_marker);
				
				// add the marker to the « markerList » Array
				_mapObject.markerList.push(L_marker);
			}
			if (this.outputDebug.marker) console.log("~> End of list (markers).");
			
			
			// calculate the correct view coordinates
			if (nRecords) {
				if (this.outputDebug.marker) {
					console.log("~> Map view coordinates (correction) : algorithm");
					console.log("   _zoomLatitude = _zoomLatitude / _data.length; _zoomLongitude = _zoomLongitude / _data.length;");
					console.log("   _zoomLatitude = " +  _zoomLatitude.toString()  + " / " + _data.length.toString()
							+ "; _zoomLongitude = " + _zoomLongitude.toString() + " / " + _data.length.toString() + ";");
				}
				
				_zoomLatitude = _zoomLatitude / _data.length; _zoomLongitude = _zoomLongitude / _data.length;
				
				if (this.outputDebug.marker) console.log("   _zoomLatitude = " + _zoomLatitude.toString() + "; _zoomLongitude = " + _zoomLongitude.toString() + ";");
			}
			
			
			// set map zoom level
			_zoomLevel = (_data[0].zoomLevel === undefined) ? _defaultOptions.zoomLevel : _data[0].zoomLevel;
			if (this.outputDebug.marker) {
				console.log("~> Map zoom level : " + _zoomLevel.toString());
				console.log("   _zoomLevel = (_data[0].zoomLevel === undefined) ? _defaultOptions.zoomLevel (= " + (_defaultOptions.zoomLevel === undefined ? "undefined" : _defaultOptions.zoomLevel.toString())
					+ ") : _data[0].zoomLevel (= " + (_data[0].zoomLevel === undefined ? "undefined" : _data[0].zoomLevel.toString()) + ");");
			}
			
			// set map view
			_mapObject.map.setView([_zoomLatitude, _zoomLongitude], _zoomLevel);
			
			
			// use the markers
			var marker = null;
			for (g = 0; g < _mapObject.markerList.length; g++) {
				marker = _mapObject.markerList[g];
				
				// add the markers to the map
				marker.addTo(_mapObject.map);
				
				// if no icon, then hide marker.   // (markerIcon == null)
				if (_markerIcon === null) _mapObject.map.removeLayer(marker);
			}
			
			
			// if more than one marker, make all of them appear on the map.
			if (nRecords) this.fitMap({ mapObject: _mapObject });
			
			// update the coordinates for the toolbar's "Home" button
			var _this = this, onClickExpr = '', zoomStart = _mapObject.container.domElement.getElementsByClassName('leaflet-control-zoom-to-start');
			if (zoomStart !== undefined && zoomStart != null && zoomStart.length > 0) {
				onClickExpr = "_mapObject.map.setView([" + _zoomLatitude + ", " + _zoomLongitude + "], " + _zoomLevel + "); ";
				onClickExpr += "_this.fitMap({ mapObject: _mapObject }); ";
				onClickExpr = "zoomStart[0].onclick = function(e){ " + onClickExpr + "};";
				eval(onClickExpr);
			}
		}
		else {
			// show message about "no coordinates"
			var _mapCenter = _mapObject.map.getCenter();
			if (_mapCenter != null) {
				var _translation = (this.language != '') ? eval('this.translations.' + this.language) : this.translations.en;
				var _textTooltip = (_translation !== undefined) ? _translation.noCoordinates : this.translations.en.noCoordinates;
				
				new L.marker([_mapCenter.lat, _mapCenter.lng], { opacity: 0.01 })
					.bindTooltip(_textTooltip, { direction: 'top', permanent: true, offset: [0, 0], opacity: 0.6 })
					.addTo(_mapObject.map);
			}
		}

	}
}

mapsManagerConstructor.prototype.newGeolocationSearch = function(p) {
	// p = { mapObject: mapObject }
	
	// Reset
	$('.erreur-saisie-geo').hide();
	
	var inputElement = $('#' + p.mapObject.options.autoCompleteFeature.inputContainerId);
	
	var inputVal = inputElement.val();
	if (inputVal.length > 2) {
		if (inputVal.toLowerCase().match(/^(ain|finistere|somme|nord)$/)) inputVal = inputVal + ' FRANCE';
		this.sendRequestToGeolocationApi({ mapObject: p.mapObject, address: inputVal.trim(), business: '1' });
	}
}

// Get geolocation coordinates from a given address
mapsManagerConstructor.prototype.sendRequestToGeolocationApi = function(p) {
	// p = { mapObject: mapObject, mapDataIndex: Integer, address: String, business: String }
	
	if (this.outputDebug.api) this.showOutputDebug({ shortName: 'sendRequestToGeolocationApi()', objectValue: p });
	
	var _address = p.address;
	
	if (_address.length > 2) {
		var _this = this, ajaxUrl = this.api.geolocation.url, ajaxData = "q=" + _address;
		if (p.postCode !== undefined) if (p.postCode != null) ajaxData += "&type=housenumber&postcode=" + p.postCode.toString();
		
		if (_this.outputDebug.api) console.log("\r\nAPI call : " + ajaxUrl + ajaxData);
		
		$.ajax({
			type: 'GET',
			data : ajaxData,
			dataType: 'json',
			url: ajaxUrl,
			beforeSend: function() {},
			success: function(data) {
				if (_this.outputDebug.api) { console.log("\r\nAPI : ajax success :"); console.log(data); }
				if (data != null) {
					if (data.features != null) {
						// BUSINESS : (BEGIN)
						if (p.business.match(/^(1|2|3)$/) ) {
							
							// BUSINESS : (1, 2 or 3)
							var features = (Array.isArray(data.features) ? (data.features.length > 0 ? data.features[0] : null) : null);
							if (features) {
								if (features.geometry != null) {
									var coord = (features.geometry.coordinates != null) ? features.geometry.coordinates : null;
									if (coord != null) {
										
										switch (p.business) {
											case '1':
												// autoComplete initialization
												p.mapObject.map.setView([ coord[1], coord[0] ], 14);
												break;
											
											case '2':
												// loadMarkersData() for SINGLE_REALESTATE
												var _singleRealEstate = _this.mapDataList.singleRealEstate;
												_singleRealEstate.data.push({ latitude: coord[1], longitude: coord[0] });
												_singleRealEstate.processingStatus = _this.processingStatus.READY;
												_this.addMarkers({ mapObject: p.mapObject, mapDataIndex: p.mapDataIndex });
												break;
											
											case '3':
												// loadMarkersData() for ADMINISTRATIVE_DIVISION
												var _administrative_division = _this.mapDataList.administrative_division;
												_administrative_division.data.push({ latitude: coord[1], longitude: coord[0], zoomLevel: 14 });
												_administrative_division.processingStatus = _this.processingStatus.READY;
												_this.addMarkers({ mapObject: p.mapObject, mapDataIndex: p.mapDataIndex });
												break;
											
											default: break;
										}
									}
								}
							}
							// BUSINESS : (1, 2 or 3 : END)
							
						}
						else {
							// ONLINE_ESTIMATE
							//if (p.mapObject.mapData[p.mapDataIndex] == this.mapDataType.ONLINE_ESTIMATE) {} // to be used if you need to be sure :)
							
							// a) copy the data from the array
							var _onlineEstimate = _this.mapDataList.onlineEstimate;
							_onlineEstimate.itemsList = data.features;
							
							// b) update the UI list
							var _DomList = _this.get_onlineEstimate_DomList();
							if (_DomList != undefined && _DomList != null) {
								// remove all content from list
								while (_DomList.firstChild) {
									_DomList.removeChild(_DomList.firstChild);
								}
								
								// add new items to list
								_this.initialize_onlineEstimate_DomList({ mapObject: p.mapObject, mapDataIndex: p.mapDataIndex, ulElement: _DomList, data: data.features });
								
								// show list
								var element_AS = document.getElementById('addressSuggestions');
								if (element_AS.style.display == 'none' || element_AS.style.visibility == 'hidden') { 
									element_AS.style.cssText += 'display: inline; visibility: visible;'; 
								}
							}
						}
						// BUSINESS : (END)
					}
				}
			},
			error : function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
			}
		});
	}
}

mapsManagerConstructor.prototype.get_onlineEstimate_DomList = function() {
	var result = document.getElementById('addressSuggestionsList');
	
	if (result == undefined || result == null) {
		var element_AS = document.getElementById('addressSuggestions');
		element_AS.style.cssText += 'position: absolute; z-index: 1500; width: 100%;';
		
		// remove all content from list
		while (element_AS.firstChild) {
			element_AS.removeChild(element_AS.firstChild);
		}
		
		// add event
		element_AS.onmouseleave = function () { 
			this.style.cssText += 'display: none; visibility: hidden;';
		};
		
		// add list for Ajax items
		// (by the way, I had to use the previous templates used for BingMap)
		var divMsMap1 = document.createElement('div'),
			divMsMap2 = document.createElement('div'),
			divAsContainer = document.createElement('div'),
			
			divAsOuterContainer = document.createElement('div'),
			divClear = document.createElement('div'),
			
			divNearBySearchText = document.createElement('div'),
			pNearBySearchText = document.createElement('p'),
			
			result = document.createElement('ul');
		
		// set stuff's properties and attributes
		divMsMap1.className = 'MicrosoftMap';
		divMsMap2.className = 'MicrosoftMap';
		
		divAsContainer.id = 'as_container';
		divAsContainer.className = 'as_container_search as_container';
		divAsContainer.setAttribute('data-tag', 'as_container');
		
		divAsOuterContainer.className = 'asOuterContainer';
		divClear.className = 'clear';
		
		divNearBySearchText.style.cssText += 'display: none;';
		pNearBySearchText.className = 'nearBySearchText b_secondaryText';
		
		result.id = 'addressSuggestionsList';
		
		// add everything to "addressSuggestions" element
		divNearBySearchText.appendChild(pNearBySearchText);
		
		divAsOuterContainer.appendChild(divNearBySearchText);
		divAsOuterContainer.appendChild(result);
		
		divAsContainer.appendChild(divAsOuterContainer);
		divAsContainer.appendChild(divClear);
		
		divMsMap2.appendChild(divAsContainer);
		
		element_AS.appendChild(divMsMap1);
		element_AS.appendChild(divMsMap2);
		
		result = document.getElementById('addressSuggestionsList');
	}
	
	return result;
}

mapsManagerConstructor.prototype.initialize_onlineEstimate_DomList = function(p) {
	// p : { mapObject: mapObject, mapDataIndex: Integer, ulElement: DomElement, data: Array }
	
	var liItem = null, divItem = null, tableItem = null, trItem1 = null, tdItem1 = null, trItem2 = null, tdItem2 = null;
	
	for (var q = 0; q < p.data.length; q++) { 
		liItem = document.createElement('li');
		divItem = document.createElement('div');
		tableItem = document.createElement('table');
		trItem1 = document.createElement('tr'); tdItem1 = document.createElement('td');
		trItem2 = document.createElement('tr'); tdItem2 = document.createElement('td');
		
		// set stuff's properties and attributes
		divItem.style.cssText += 'margin-top: 5px; margin-left: 20px;';
		tableItem.style.cssText += 'width: 96%;';
		
		tdItem1.style.cssText += 'cursor: pointer; color: #170000; width: 100%;';
		if (q > 0) tdItem1.style.cssText += 'border-top: 1px solid #E3E3E3; padding-top: 5px;';
		tdItem1.innerHTML = p.data[q].properties.label;
		eval('tdItem1.onclick = function () { id3xContent.geolocation.manager.update_onlineEstimate_geoMap({mapObject: p.mapObject, mapDataIndex: ' + p.mapDataIndex.toString() + ', part:0, index:'+q.toString()+'}); };');
		
		tdItem2.style.cssText += 'cursor: pointer; color: #170000; width: 100%;';
		tdItem2.innerHTML = p.data[q].properties.context;
		eval('tdItem2.onclick = function () { id3xContent.geolocation.manager.update_onlineEstimate_geoMap({mapObject: p.mapObject, mapDataIndex: ' + p.mapDataIndex.toString() + ', part:1, index:'+q.toString()+'}); };');
		
		// add everything to "li" element
		trItem1.appendChild(tdItem1);
		trItem2.appendChild(tdItem2);
		
		tableItem.appendChild(trItem1);
		tableItem.appendChild(trItem2);
		
		divItem.appendChild(tableItem);
		liItem.appendChild(divItem);
		
		p.ulElement.appendChild(liItem);
	}
}

mapsManagerConstructor.prototype.update_onlineEstimate_geoMap = function(p) {
	// p : { mapObject: mapObject, mapDataIndex: p.mapDataIndex, part: Integer, index: Integer }
	
	// hide list
	var element_AS = document.getElementById('addressSuggestions');
	element_AS.style.cssText += 'display: none; visibility: hidden;';
	
	var _onlineEstimate = this.mapDataList.onlineEstimate;
	var itemData = _onlineEstimate.itemsList[p.index];
	if (itemData != undefined && itemData != null) {
		var itemCrds = itemData.geometry.coordinates;
		
		// VERY important : set property coordinates.
		coordinatesEstate.latitude = parseFloat(itemCrds[1]);
		coordinatesEstate.longitude = parseFloat(itemCrds[0]);
		
		// VERY important : these values are mandatory.
		var infoEstate = itemData.properties;
		coordinatesEstate.postalCode = infoEstate.postcode;
		coordinatesEstate.city = infoEstate.city;
		coordinatesEstate.address = infoEstate.city +', '+ infoEstate.housenumber +' '+ infoEstate.street;
		coordinatesEstate.addressWithoutCountry = infoEstate.label.replace('France', '');
		
		// update the 'address' input content
		var _inputAddress = document.getElementById('address');
		if (_inputAddress != undefined && _inputAddress != null) {
			if (p.part == 0) _inputAddress.value = infoEstate.label;
			if (p.part == 1) _inputAddress.value = infoEstate.context;
		}
		
		_onlineEstimate.data = [{
			address: "",
			addressWithoutCountry: "",
			city: "",
			context: infoEstate.context,
			label: infoEstate.label,
			latitude: coordinatesEstate.latitude,
			longitude: coordinatesEstate.longitude,
			postalCode: "",
			zoomLevel: 12
		}];
		
		this.addMarkers({ mapObject: p.mapObject, mapDataIndex: p.mapDataIndex });
	}
}

mapsManagerConstructor.prototype.initializeAutoComplete = function(p) {
	// p = { mapObject: mapObject }
	
	var _mapObject = p.mapObject;
	var _autoCompleteFeature = _mapObject.options.autoCompleteFeature;
	
	var _inputContainerId = _autoCompleteFeature.inputContainerId;
	if (_autoCompleteFeature.enabled && _inputContainerId != '') {
		if (document.getElementById(_inputContainerId)) {
			// checking of prerequisities is done.
			
			
			if (p.mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
				// BING (no implementation)
			}
			
			
			if (p.mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
				var _this = this;
				
				$('#'+_inputContainerId).easyAutocomplete({
					ajaxSettings: { 
						dataType: 'json' 
						//, method:'POST', data: {apiKey: "myapikey"} 
					},
					getValue: function(item) {
						return item.properties.label + ' | ' + item.properties.context;
					},
					listLocation: function(data) {
						return data.features;
					},
					requestDelay: 300,
					//theme: 'round',
					url: function(urlParameter) { 
						var searchString = urlParameter.trim();
						if (searchString.length > 1) {
							if ((searchString.split(' ').length - 1) == 0) {
								if (_this.language == 'fr') {
									if ( searchString.toLowerCase().match(/^(ain|finistere|somme|nord)$/) ) searchString = searchString + ' FRANCE';
								}
							}
							return _this.api.geolocation.url + 'q=' + encodeURI(searchString);
						}
						else {
							return '';
						}
					},
					list: {
						onClickEvent: function() {
							var gsid = $('#'+_inputContainerId).getSelectedItemData();
							if (gsid !== undefined && gsid != null) {
								if (gsid.geometry != null) {
									var coord = gsid.geometry.coordinates != null ? gsid.geometry.coordinates : null;
									if (coord != null) { 
										if (_autoCompleteFeature.autoCompleteMarker != null) _mapObject.map.removeLayer(_autoCompleteFeature.autoCompleteMarker);
										_autoCompleteFeature.autoCompleteMarker = new L.marker([ coord[1], coord[0] ], {}).addTo(_mapObject.map);
										_mapObject.map.setView([ coord[1], coord[0] ], 9); 
									}
								}
							}
						}	
					}
				});
				
				// attach event to some HTML controls
				$(document).ready(function() {
					if (document.getElementById('bouton-search-user')) {
						$('#bouton-search-user').click(function(e) {
							e.preventDefault();
							_this.newGeolocationSearch({ mapObject: _mapObject });
						});
					}
					
					if (document.getElementById(_inputContainerId)) {
						$('#'+_inputContainerId).keydown(function(e) {
							if (e.keyCode == 13) {
								_this.newGeolocationSearch({ mapObject: _mapObject });
							}
						});
					}
				});
			}
		
		
		}
	}
}

mapsManagerConstructor.prototype.getCoordinatesFromUrl = function() {
	var result = null;
	
	var s0 = window.location.search;
	if (s0 != null) {
		var s1 = s0.replace('?', '');
		var s2 = s1.split('&');
		if (s2.length > 0) {
			var s3 = null, coord = { lat: null, lon: null };
			for (var i = 0; i < s2.length; i++) { 
				s3 = s2[i].split('=');
				if (s3[0] == 'ville') { place = s3[1].replace('-', '+'); }
				else { 
					if (s3[0] == 'lat') { coord.lat = s3[1]; }
					if (s3[0] == 'lon') { coord.lon = s3[1]; }
				}
			}
			
			// finally
			if (coord.lat != null && coord.lon != null) result = { latitude: parseFloat(coord.lat), longitude: parseFloat(coord.lon) };
		}
	}
	
	return result;
}

mapsManagerConstructor.prototype.getQueryForEngine = function(p) {
	// p = { elementId: String}
	
	var result = '';
	
	if ($('#' + p.elementId).length) {
		result = $('#' + p.elementId).filter(function(){ return $(this).val(); }).serialize(); // templates v5
	}
	else {
		result = querypreliste; // templates v4
	}
	if (this.outputDebug.data) console.log("getQueryForEngine() = '" + result + "'"); // qry = 'idtt=x'
	
	return result;
}

mapsManagerConstructor.prototype.updateFilters = function(p) {
	// p = { mapObject: mapObject, mapDataIndex: mapDataIndex, toDo: String,
	//       newFilter: {action: String, key: String, value: String}
	//     }
	
	var _mapObject = p.mapObject, _mapDataIndex = p.mapDataIndex, _newFilter = p.newFilter;
	var _filters = _mapObject.mapData[_mapDataIndex].filters;
	
	var k = 0, _found = false;
	while (!_found && (k < _filters.length)) {
		if (_filters[k].key == _newFilter.key) {
			if (_newFilter.value === '') {
				// item is removed
				_filters[k].splice(k, 1);
			}
			else {
				// item is updated
				_filters[k].action = _newFilter.action;
				_filters[k].value = _newFilter.value;
			}
			_found = true;
		}
		k++;
	}
	
	// if not found, then add
	if (!_found && _newFilter.value != '') _filters.push({action: _newFilter.action, key: _newFilter.key, value: _newFilter.value});
	
	this.addMarkers({ mapObject: p.mapObject, mapDataIndex: p.mapDataIndex });
}


mapsManagerConstructor.prototype.filterData = function(p) {
	// p = { filters: Array, data: Array }
	
	var _filters = p.filters, _data = p.data, results = [];
	
	var f = 0, toNextFilter = true, filtered = false, _valueData = null;
	while (toNextFilter && (f < _filters.length)) {
		switch (_filters[f].action) {
			case 'exclude':
				// no implementation
				results = _data;
				break;
			
			case 'single':
				for (h = 0; h < _data.length; h++) {
					_valueData = eval('_data[h].' + _filters[f].key);
					if (_valueData !== undefined) {
						if (!filtered) if (_filters[f].value === _valueData.toString()) filtered = true;
						if (filtered) {
							results.push(_data[h]);
							break;
						}
					}
				}
				
				toNextFilter = false;
				break;
			
			case '':
				for (h = 0; h < _data.length; h++) {
					_valueData = eval('_data[h].' + _filters[f].key);
					if (_valueData == _filters[f].value) {
						results.push(_data[h]);
					}
				}
				break;
			
			default: 
				results = _data;
				break;
		}
		
		f++;
	}
	
	return results;
}

mapsManagerConstructor.prototype.fixCssMap = function(p) {
	// p = { mapObject: mapObject }
	
	if (p.mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (p.mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _fixes = p.mapObject.options.fixes;
		
		if (_fixes.zIndexFix) {
			// z-index fix (otherwise the map's element(s) will overlap above header)
			//    => see yourself if needed.
			//    => unused in the estimation context, but if needed you can use it.
			
			var mapElements = new Array();
			var elementsClasses = [ 'leaflet-pane leaflet-map-pane', 'leaflet-top leaflet-left', 'leaflet-top leaflet-right', 'leaflet-bottom leaflet-left', 'leaflet-bottom leaflet-right', 
				'leaflet-control-zoom leaflet-bar leaflet-control', 'leaflet-control-scale leaflet-control', 'leaflet-control-attribution leaflet-control' ];
			
			for (var i = 0; i < elementsClasses.length; i++) {
				mapElements.push(p.mapObject.container.domElement.getElementsByClassName(elementsClasses[i]));
			}
			
			for (var i = 0; i < mapElements.length; i++) {
				if (mapElements[i] !== undefined && mapElements[i] != null && mapElements[i].length > 0) {
					mapElements[i][0].style.zIndex = 'auto';
				}
			}
		}
	}
}

mapsManagerConstructor.prototype.fixCssToolbar = function(p) {
	// p = { enableFix: Boolean = true, domElement: DomElement }
	// OPENSTREETMAP only
	if (p.enableFix && p.domElement !== undefined) {
		p.domElement.style.cssText += "background-color: #FFF; text-decoration: none; color: black; font-size: 22px !important;";
	}
}

// to fit the map
mapsManagerConstructor.prototype.fitMap = function(p) {
	// p = { mapObject: mapObject }
	
	if (p.mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
		
	if (p.mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		var _markerList = p.mapObject.markerList;
		if (_markerList.length > 1) {
			var L_featureGroup = new L.featureGroup(_markerList);
			p.mapObject.map.fitBounds(L_featureGroup.getBounds());
		}
	}
}

mapsManagerConstructor.prototype.setCurrentPosition = function(p) {
	// p = { mapObject: mapObject, domElement: DomElement }
	
	var HTMLcontrol = p.domElement, _map = p.mapObject.map, _options = p.mapObject.options.toolBar;
	
	if (p.mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
		// BING (no implementation)
	}
	
	if (p.mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
		if (HTMLcontrol) {
			HTMLcontrol.setAttribute('title', _options.buttons.zoomArea.titleAccuracy.replace('{0}', this.deviceGeolocation.accuracy));
			
			// set view
			var currentPositionExpr = "[" + this.deviceGeolocation.latitude.toString() + "," + this.deviceGeolocation.longitude.toString() + "]";
			currentPositionExpr = "_map.setView(" + currentPositionExpr + ", " + _options.buttons.zoomArea.zoomLevel.toString() + " );";
			eval(currentPositionExpr);
			
			// override previous function
			currentPositionExpr = "HTMLcontrol.onclick = function(e) {" + currentPositionExpr + "}";
			eval(currentPositionExpr);
		}
	}
}

mapsManagerConstructor.prototype.getCurrentPosition = function(p) {
	// p = { mapObject: mapObject, domElement: DomElement }
	
	if (this.deviceGeolocation.allowed) {
		this.setCurrentPosition({ mapObject: p.mapObject, domElement: p.domElement });
	}
	else {
		var _this = this;
		
		navigator.geolocation.getCurrentPosition(
			function (success) {
				var crd = success.coords;
				//console.log('Position actuelle :');
				//console.log('Latitude : ${crd.latitude}');
				//console.log('Longitude : ${crd.longitude}');
				//console.log('Précision de ${crd.accuracy} mètres.');
				
				_this.deviceGeolocation.accuracy = crd.accuracy.toString();
				_this.deviceGeolocation.allowed = true;
				_this.deviceGeolocation.latitude = crd.latitude;
				_this.deviceGeolocation.longitude = crd.longitude;
				
				_this.setCurrentPosition({ mapObject: p.mapObject, domElement: p.domElement });
			}, 
			function (error) {
				//console.log('error'); console.log(error);
				//console.warn('ERREUR (${err.code}): ${err.message}');
				if (p.domElement) p.domElement.style.cssText += "display: none; visibility: hidden;";
			}, 
			{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
		);
	}
}

// set basic configuration stuff for a map
mapsManagerConstructor.prototype.loadMapToolBar = function(p) {
	// p = { mapObject: mapObject }
	
	if (this.outputDebug.map) { console.log("\r\nloadMapToolBar(p); object in parameter 'p' is :"); console.log(p.mapObject); }
	
	if (p.mapObject.readyToLoad) {
		if (p.mapObject.mapLibrary == this.mapLibraries.BINGMAP.genericName) {
			// BING (no implementation)
		}
		
		if (p.mapObject.mapLibrary == this.mapLibraries.OPENSTREETMAP.genericName) {
			var _options = p.mapObject.options.toolBar;
	
			// buttons (zoom, ...)
			new L.Control.ZoomBar({ position: _options.position }).addTo(p.mapObject.map);
			
			var zoomStart = p.mapObject.container.domElement.getElementsByClassName('leaflet-control-zoom-to-start'), 
				zoomArea = p.mapObject.container.domElement.getElementsByClassName('leaflet-control-zoom-to-area'), 
				zoomIn = p.mapObject.container.domElement.getElementsByClassName('leaflet-control-zoom-in'), 
				zoomOut = p.mapObject.container.domElement.getElementsByClassName('leaflet-control-zoom-out');
			
			if (zoomIn !== undefined && zoomIn != null && zoomIn.length > 0) { 
				//zoomIn[0].innerHTML = "+";
				if (_options.fixCssToolbar) this.fixCssToolbar({ enableFix: _options.fixCssToolbar, domElement: zoomIn[0] });
				zoomIn[0].setAttribute('title', _options.buttons.zoomIn.title);
			}
			
			if (zoomOut !== undefined && zoomOut != null && zoomOut.length > 0) { 
				//zoomOut[0].innerHTML = "-";
				if (_options.fixCssToolbar) this.fixCssToolbar({ enableFix: _options.fixCssToolbar, domElement: zoomOut[0] });
				zoomOut[0].setAttribute('title', _options.buttons.zoomOut.title);
			}
			
			if (zoomStart !== undefined && zoomStart != null && zoomStart.length > 0) { 
				if (_options.fixCssToolbar) this.fixCssToolbar({ enableFix: _options.fixCssToolbar, domElement: zoomStart[0] });
				zoomStart[0].setAttribute('title', _options.buttons.zoomStart.title); 
				var _this = this;
				zoomStart[0].onclick = function(e){ _this.fitMap({ mapObject: p.mapObject }); };
			}
			
			if (zoomArea !== undefined && zoomArea != null && zoomArea.length > 0) { 
				if (this.httpsContext && _options.buttons.zoomArea.enableGeolocation) {
					if (_options.fixCssToolbar) this.fixCssToolbar({ enableFix: _options.fixCssToolbar, domElement: zoomArea[0] });
					zoomArea[0].setAttribute('title', _options.buttons.zoomArea.title);
					
					var _this = this;
					zoomArea[0].onclick = function(e) {
						_this.getCurrentPosition({ mapObject: p.mapObject, domElement: zoomArea[0] });
					};
				}
				else {
					zoomArea[0].style.visibility = "hidden";
					zoomArea[0].style.display = "none";
				}
			} // END for "zoomArea" object
		}
	}
}

// set properties + check parameters (set optional values)
mapsManagerConstructor.prototype.setPropertyValue = function(defaultValue, paramValue) {
	var result = (paramValue===undefined ? defaultValue : (paramValue ? paramValue : defaultValue) );
	//if (this.outputDebug.manager) this.showOutputDebug({ shortName: 'setPropertyValue()', objectValue: { defaultValue: defaultValue, paramValue: paramValue, result: result } });
	return result;
};

// output debugging
mapsManagerConstructor.prototype.showOutputDebug = function(p) {
	//       p : { shortName: string, stringValue: string, objectValue: object };
	// example : this.showOutputDebug({ shortName: 'isHttps()', value: result });
	
	var sn = (p.shortName !== undefined ? p.shortName : '<shortName is undefined>'), 
		sv = (p.stringValue !== undefined ? p.stringValue : ''), 
		ov = (p.objectValue !== undefined ? p.objectValue : '<objectValue is undefined>');
	
	if (p.objectValue !== undefined) {
		console.log('~> object "' +sn+ (sv.length>0?'" with value : "'+sv+'"' : '"'));
		console.log(ov);
		console.log('   END "' +sn+ '".');
	}
	else {
		console.log('~> ' +sn+ ' : ' +sv);
	}
}

//if (mapsManager != null) {}
