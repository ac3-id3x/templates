function gestionControlZoom(controlDiv, map) {
	// Creating divs & styles for custom zoom control
	controlDiv.style.padding = '5px';
	// Set CSS for the control wrapper
	var controlWrapper = document.createElement('div');
	controlWrapper.style.backgroundColor = 'white';
	controlWrapper.style.cursor = 'pointer';
	controlWrapper.style.textAlign = 'center';
	controlWrapper.style.width = '32px'; 
	controlWrapper.style.height = '64px';
	controlWrapper.style.borderStyle = 'solid';
	controlWrapper.style.borderWidth = '1px';
	controlWrapper.style.borderColor = '#c0c0c0';
	controlDiv.appendChild(controlWrapper);

	// Set CSS for the zoomIn
	var zoomInButton = document.createElement('div');
	zoomInButton.style.width = '32px'; 
	zoomInButton.style.height = '32px';
	/* Change this to be the .png image you want to use */
	zoomInButton.style.backgroundImage = 'url("assets/plus32bis.png")';
	controlWrapper.appendChild(zoomInButton);

	// Set CSS for the zoomOut
	var zoomOutButton = document.createElement('div');
	zoomOutButton.style.width = '32px'; 
	zoomOutButton.style.height = '32px';
	/* Change this to be the .png image you want to use */
	zoomOutButton.style.backgroundImage = 'url("assets/moins32bis.png")';
	controlWrapper.appendChild(zoomOutButton);

	// Setup the click event listener - zoomIn
	google.maps.event.addDomListener(zoomInButton, 'click', function() {
		map.setZoom(map.getZoom() + 1);
	});

	// Setup the click event listener - zoomOut
	google.maps.event.addDomListener(zoomOutButton, 'click', function() {
		map.setZoom(map.getZoom() - 1);
	});
}

function gestionControlView(controlDiv, map) {
	controlDiv.style.padding = '5px';


	//Div conteneur
	var controlWrapper = document.createElement('div');
	controlWrapper.style.cursor = 'pointer';
	controlWrapper.style.textAlign = 'center';
	controlWrapper.style.color = '#556A92';
	controlWrapper.style.fontSize = '14px';
	controlWrapper.style.fontFamily = '__Titillium Web_5_semi_bold';
	controlDiv.appendChild(controlWrapper);

	//Div bouton qui affiche la vue satellite
	var controlSatellite = document.createElement('div');
	controlSatellite.style.paddingLeft = '5px';
	controlSatellite.style.paddingRight = '5px';
	controlSatellite.style.backgroundColor = 'white';
	controlSatellite.style.height = '30px';
	controlSatellite.style.lineHeight = '30px';
	controlSatellite.innerHTML = 'Satellite';
	controlSatellite.className = 'bouton_carte';
	controlSatellite.style.float = 'left';	
	controlSatellite.style.borderWidth = '1px';
	controlSatellite.style.borderRightWidth = '0px';
	controlSatellite.style.borderColor = '#c0c0c0';
	controlSatellite.style.borderStyle = 'solid';
	$(controlSatellite).click(function() {
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE)
		map.setTilt(0);
		ObliqueMode = 0;
	});
	controlWrapper.appendChild(controlSatellite);

	//Div bouton qui affiche la vue plan
	var controlPlan = document.createElement('div');
	controlPlan.style.paddingLeft = '5px';
	controlPlan.style.paddingRight = '5px';
	controlPlan.style.backgroundColor = 'white';
	controlPlan.style.height = '30px';
	controlPlan.style.lineHeight = '30px';
	controlPlan.innerHTML = 'Plan';
	controlPlan.className = 'bouton_carte';
	controlPlan.style.float = 'left';	
	controlPlan.style.borderWidth = '1px';
	controlPlan.style.borderRightWidth = '0px';
	controlPlan.style.borderColor = '#c0c0c0';
	controlPlan.style.borderStyle = 'solid';
	$(controlPlan).click(function() {
		map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
		map.setTilt(0);
		ObliqueMode = 0;
	});
	controlWrapper.appendChild(controlPlan);

	//Div bouton qui autorise/ interdit la vue 45°
	var controlOblique = document.createElement('div');
	controlOblique.style.paddingLeft = '5px';
	controlOblique.style.paddingRight = '5px';
	controlOblique.style.backgroundColor = 'white';
	controlOblique.style.height = '30px';
	controlOblique.style.lineHeight = '30px';
	controlOblique.innerHTML = 'Vue oblique';
	controlOblique.className = 'bouton_carte';
	controlOblique.style.float = 'left';	
	controlOblique.style.borderWidth = '1px';
	controlOblique.style.borderColor = '#c0c0c0';
	$(controlOblique).click(function() {
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE)
		if(ObliqueMode == 0){
			map.setTilt(45);
			ObliqueMode = 1;
		}else{
			map.setTilt(0);
			ObliqueMode = 0;
		};
	});
	controlOblique.style.borderStyle = 'solid';
	controlWrapper.appendChild(controlOblique);
}