function updateZoomToolbarOSM(params) {
	// params = { map: object, fixToolbarCss: bool }
	
	// buttons (zoom, ...)
	var zoom_bar = new L.Control.ZoomBar({position: 'topright'}).addTo(params.map);
	var zoomStart = document.getElementsByClassName('leaflet-control-zoom-to-start'), 
		zoomArea = document.getElementsByClassName('leaflet-control-zoom-to-area'), 
		zoomIn = document.getElementsByClassName('leaflet-control-zoom-in'), 
		zoomOut = document.getElementsByClassName('leaflet-control-zoom-out');
	
	if (zoomIn != undefined && zoomIn != null && zoomIn.length > 0) { 
		//zoomIn[0].innerHTML = "+";
		if (params.fixToolbarCss != undefined) addFixZoomBarCss({ fix: params.fixToolbarCss, element: zoomIn[0] });
		zoomIn[0].setAttribute('title', "Zoom avant");
	}
	if (zoomOut != undefined && zoomOut != null && zoomOut.length > 0) { 
		//zoomOut[0].innerHTML = "-";
		if (params.fixToolbarCss != undefined) addFixZoomBarCss({ fix: params.fixToolbarCss, element: zoomOut[0] });
		zoomOut[0].setAttribute('title', "Zoom arrière");
	}
	if (zoomStart != undefined && zoomStart != null && zoomStart.length > 0) { 
		if (params.fixToolbarCss != undefined) addFixZoomBarCss({ fix: params.fixToolbarCss, element: zoomStart[0] });
		zoomStart[0].setAttribute('title', "Revenir à la position initiale"); 
		zoomStart[0].onclick = function(e){ fitTheMap(); };
	}
	if (zoomArea != undefined && zoomArea != null && zoomArea.length > 0) { 
		var isHttps = (document.location.protocol == 'https:' ? true : false);
		if (isHttps) {
			if (params.fixToolbarCss != undefined) addFixZoomBarCss({ fix: params.fixToolbarCss, element: zoomArea[0] });
			zoomArea[0].setAttribute('title', "Me localiser");
			navigator.geolocation.getCurrentPosition(
				function (success) {
					var crd = success.coords;
					zoomArea[0].setAttribute('title', "Me localiser (précision à " + crd.accuracy + "m)");
					
					// override previous function
					zoomArea[0].onclick = function(e){ 
						params.map.setView([crd.latitude, crd.longitude], 13 );
					};
					
					//console.log('Position actuelle :');
					//console.log('Latitude : ${crd.latitude}');
					//console.log('Longitude : ${crd.longitude}');
					//console.log('Précision de ${crd.accuracy} mètres.');
				}, 
				function (error) {
					//console.warn('ERREUR (${err.code}): ${err.message}');
				}, 
				{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
			);
		}
		else {
			zoomArea[0].style.visibility = "hidden";
			zoomArea[0].style.display = "none";
		}
	}
}

function addFixZoomBarCss (params) {
	// params = { fix: true, element: DomElement }
	if (params.fix && params.element != undefined) {
		params.element.style.cssText += "background-color: #FFF; text-decoration: none; color: black; font-size: 22px !important;";
	}
}

function addFixesOSM(params) {
	// params = { zIndexFix: bool, map: object }
	
	// z-index fix (otherwise the map's element(s) will overlap above header)
	// => see yourself if needed.
	// => unused in the estimation context, but if needed you can use it.
	if (params.zIndexFix) {
		if (params.map != undefined && params.map != null) {
			var mapElements = new Array();
			var elementsClasses = [ 'leaflet-pane leaflet-map-pane', 'leaflet-top leaflet-left', 'leaflet-top leaflet-right', 'leaflet-bottom leaflet-left', 'leaflet-bottom leaflet-right', 
				'leaflet-control-zoom leaflet-bar leaflet-control', 'leaflet-control-scale leaflet-control', 'leaflet-control-attribution leaflet-control' ];
			
			for (var i = 0; i < elementsClasses.length; i++) { mapElements.push(document.getElementsByClassName(elementsClasses[i])); }
			for (var i = 0; i < mapElements.length; i++) { if (mapElements[i] != undefined && mapElements[i] != null && mapElements[i].length > 0) { mapElements[i][0].style.zIndex = 'auto'; } }
		}
	}
}