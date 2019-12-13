//$$DYN:ID3:NOFOOTER$$

// Hash implementation : http://www.mojavelinux.com/articles/javascript_hashes.html
function Hash() {
	this.length = 0;
	this.items = new Array();
	for (var i = 0; i < arguments.length; i += 2) {
		if (typeof(arguments[i + 1]) != 'undefined') {
			this.items[arguments[i]] = arguments[i + 1];
			this.length++;
		}
	}
   
	this.removeItem = function(in_key) {
		var tmp_value;
		if (typeof(this.items[in_key]) != 'undefined') {
			this.length--;
			var tmp_value = this.items[in_key];
			delete this.items[in_key];
		}
		return tmp_value;
	}

	this.getItem = function(in_key) {
		return this.items[in_key];
	}

	this.setItem = function(in_key, in_value) {
		if (typeof(in_value) != 'undefined') {
			if (typeof(this.items[in_key]) == 'undefined') {
				this.length++;
			}
			this.items[in_key] = in_value;
		}
		return in_value;
	}

	this.hasItem = function(in_key) {
		return typeof(this.items[in_key]) != 'undefined';
	}
}

	var _carto_markers = new Hash();
	var	_carto_mapG = null;
	var _carto_geocoder = new GClientGeocoder();

function loadG( eltId ) {
    if (GBrowserIsCompatible()) {
      _carto_mapG = new GMap2(document.getElementById( eltId ));
      //mapG.setMapType( GMapType.G_HYBRID_MAP );
$$IF:PAGE:MAP_MAPCONTROL$$
			_carto_mapG.addControl(new GSmallMapControl());
			_carto_mapG.addControl(new GMapTypeControl());
$$END$$
      _carto_mapG.setCenter(new GLatLng( $$PAGE:MAP_CENTER_LATITUDE$$, $$PAGE:MAP_CENTER_LONGITUDE$$), $$PAGE:MAP_ZOOM$$ + 1);
    }
}

// Creates a marker at the given point with the given number label
function createGoogleMarker(point, label, html, id) {
  var marker = new GMarker(point, {title: label });
 	var f = function() {
    marker.openInfoWindowHtml( html );
  }
  //alert("adding : " + id );
 	_carto_markers.setItem( id, marker );
  GEvent.addListener(marker, "click", f);
  return marker;
}

function addGoogleMarkerAddress(address, label, html, id) {
  _carto_geocoder.getLatLng(
    address,
    function(point) {
      if (!point) {
        //alert(address + " not found");
      } else {
      	var marker = createGoogleMarker( point, label, html, id );
        _carto_mapG.addOverlay( marker );
$$IF:PAGE:MAP_AUTOCENTER$$
        GoogleAutocenter();
$$END:MAP_AUTOCENTER$$
      }
    }
  );
}

function addGoogleMarkerLatLon(lat, lon, label, html, id) {
  	var marker = createGoogleMarker( new GLatLng(lat, lon), label, html, id );
    _carto_mapG.addOverlay( marker );
}

function showGoogleMarker( id ) {
	if( _carto_markers.hasItem( id ) ) {
/*		var f = _carto_markers.getItem( id );
		f();*/
		var marker = _carto_markers.getItem( id );
		GEvent.trigger( marker, "click" );
	}
}

function GoogleAutocenter() {
	var bounds = new GLatLngBounds();
	if( _carto_markers != null ) {
		var marker = null;
		var pt = null;
		//alert( _carto_markers.length );
		for (var i in _carto_markers.items) {
			marker = _carto_markers.items[i];
			//alert( marker );
			if( marker ) {
				pt = marker.getPoint();
				bounds.extend(pt);
			}
		}

		var center_lat = (bounds.getNorthEast().lat() + bounds.getSouthWest().lat()) / 2.0;
		var center_lng = (bounds.getNorthEast().lng() + bounds.getSouthWest().lng()) / 2.0;
		var zoom = _carto_mapG.getBoundsZoomLevel(bounds);
		//alert( center_lat + " / " + center_lng + " / " + zoom );
		_carto_mapG.setCenter(new GLatLng(center_lat, center_lng), zoom);
	}
}



$$REM:YAHOO$$
function loadY( eltId ) {
	// Create a latitude/longitude object 
	var latlon = new YGeoPoint( $$PAGE:MAP_CENTER_LATITUDE$$, $$PAGE:MAP_CENTER_LONGITUDE$$ );
	
	// Display the map centered on that location with zoom level 3.
	// Include your application ID. 
	var mapY = new YMap( document.getElementById( eltId ) );
	//map.setMapType( YAHOO_MAP_HYB );
$$IF:PAGE:MAP_MAPCONTROL$$
	mapY.addPanControl();
	mapY.addZoomLong(); 
$$END$$
	mapY.drawZoomAndCenter( latlon, $$PAGE:MAP_ZOOM$$-1);
	function createYahooMarker( address, label, html) {
	  var marker = new YMarker( address );
	  marker.addLabel(label);
	  YEvent.Capture(marker,EventsList.MouseClick, 
	    function() { marker.openSmartWindow( html ) });
	  return marker;
	}
	function addYahooMarkerAddress(address, label, html) {
		mapY.addOverlay( createYahooMarker( address, label, html ) );
	}
/*
	showYahooAddress( "$$IMMOBW:AGENCES:CP:ADRESSE crlf2br replace <br/> &nbsp; replace ' \' nbsp2sp rxreplace \d\d\d\d\d , rxreplace ' ,' ,$$, France",
	"$$IMMOBW:AGENCES:CP:NOM$$",
"<span class=\"liste_agences_nom\">$$IMMOBW:AGENCES:CP:NOM$$</span><br /><strong>$$IMMOBW:AGENCES:CP:ADRESSE htmlencode crlf2br$$<br /></strong><font class=\"liste_agences_info\">$$LG:MINITEL$$ :</font> $$IMMOBW:AGENCES:CP:TEL formattel$$<br /><font class=\"liste_agences_info\">Fax :</font> $$IMMOBW:AGENCES:CP:FAX formattel$$<br />$$IF:IMMOBW:AGENCES:CP:EMAIL$$<font class=\"liste_agences_info\">E-mail : </font>$$IMMOBW:AGENCES:CP:EMAIL$$<br />$$END$$<font class=\"liste_agences_info\">$$LG:NOMRESP$$</font> $$IMMOBW:AGENCES:CP:RESPAG$$<br />" );	
*/
}
$$END:YAHOO$$

// Fonction publiques
function maps_load( elt_id ) {
$$IF=:G:PAGE:MAP_PROVIDER$$
	loadG( elt_id );
$$END:MAP_PROVIDER$$
$$IF=:Y:PAGE:MAP_PROVIDER$$
	loadY( elt_id );
$$END:MAP_PROVIDER$$
}

function maps_unload() {
$$IF=:G:PAGE:MAP_PROVIDER$$
	GUnload();
$$END:MAP_PROVIDER$$
}

function maps_addMarkerAddress(address, label, html, id) {
$$IF=:G:PAGE:MAP_PROVIDER$$
	addGoogleMarkerAddress(address, label, html, id);
$$END:MAP_PROVIDER$$
$$IF=:Y:PAGE:MAP_PROVIDER$$
	addYahooMarkerAddress(address, label, html);
$$END:MAP_PROVIDER$$
}

function maps_addMarkerLatLon(lat, lon, label, html, id) {
$$IF=:G:PAGE:MAP_PROVIDER$$
	addGoogleMarkerLatLon(lat, lon, label, html, id);
$$END:MAP_PROVIDER$$
$$IF=:Y:PAGE:MAP_PROVIDER$$
	addYahooMarkerLatLon(lat, lon, label, html);
$$END:MAP_PROVIDER$$
}

function maps_showMarker( id ) {
$$IF=:G:PAGE:MAP_PROVIDER$$
	showGoogleMarker( id );
$$END:MAP_PROVIDER$$
$$IF=:Y:PAGE:MAP_PROVIDER$$

$$END:MAP_PROVIDER$$
}

function maps_autocenter() {
$$IF=:G:PAGE:MAP_PROVIDER$$
	GoogleAutocenter();
$$END:MAP_PROVIDER$$
$$IF=:Y:PAGE:MAP_PROVIDER$$

$$END:MAP_PROVIDER$$
}
