var pinUser = null;
var map = null;
var MM = Microsoft.Maps;
var MyBingMapsCredentials = "AtFiMyQZy6zCnIa4Z-wUSw_WzIpvtyT79ZD9IDlEDOiFK9-TzHBHdHjOn-A4eM1f";	
function GetAgencesMap(pinArray,h,w) {
	$('#myMap').empty();
	map = new MM.Map(document.getElementById("myMap"), {
		credentials:MyBingMapsCredentials,
		mapTypeId: "r",
		height:h,
		width:w,
		isRotationEnabled:true,
		enableClickableLogo: false,
	   	enableSearchLogo: false,
	   	showCopyright: false,
	   	showDashboard: true,
	   	showMapTypeSelector:false,
	   	fixedMapPosition:true,
	   	useInertia:false,
	   	showLogo: false,
	   	zoom:9
		}
    );
    if(pinArray.length == 1) {
    	map.setView({center:new MM.Location(pinArray[0].latitude,pinArray[0].longitude)});	
    } else {
    	var bestView = MM.LocationRect.fromLocations(pinArray);
    	map.setView({bounds:bestView,center:bestView.center,zoom:9});	
    }
    for(i = 0; i < pinArray.length; i++) {
    	fixPinAgence(pinArray[i]);
    }
    // EVENT MOVE MAP
	// MM.Events.addHandler(map, 'viewchangestart', closeInfoPin);
}
function fixPinAgence(Agence) {
	// ADD PIN USER
	pinAgence = new MM.Pushpin(new MM.Location(Agence.latitude,Agence.longitude),{icon:"/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_agence.png",height:44,width:34});
    map.entities.push(pinAgence);
	// POPUP HTML
	pinAgence.HTML = '<div id="myBoxAgence" itemscope itemtype="http://schema.org/RealEstateAgent"><div class="closeMyBox"></div><h2 itemprop="name">'+Agence.nom+'</h2>';
	pinAgence.HTML += '<p id="rowAdresse" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">'+Agence.adresse+'</p>';
	if(Agence.respag != '' ) {
		pinAgence.HTML += '<p id="rowResponsable">'+responsable+' : '+Agence.respag+'</a></p>';
	}
	if(Agence.email != '' ) {
		pinAgence.HTML += '<p id="rowEmail">Email : <a href="/'+Agence.idPublication+'/contact,agence.htm?lang='+langue+'">'+Agence.email+'</a></p>';
	}
	if(Agence.surl != '' ) {
		pinAgence.HTML += '<p id="rowURL" itemprop="url">Web : <a href="'+Agence.surl+'" target="_blank">'+Agence.surl+'</a></p>';
	}
	if(Agence.tel != '' ) {
		pinAgence.HTML += '<p id="rowPhone" itemprop="telephone" >'+telephone+' : <a href="tel:'+Agence.tel+'">'+Agence.tel+'</a>';
	}
	if(Agence.fax != '' ) {
		pinAgence.HTML += '<p id="rowFax">Fax : '+Agence.fax+'</p>';
	}
	pinAgence.HTML += '<p id="rowContact"><a href="/'+Agence.idPublication+'/contact,agence.htm">'+contact+'</a></p>';
	// PATCH FEAU
	if(onlyPhoto == 1) {
		pinAgence.HTML += '<p id="rowContact"><a href="/recherche,mobi.htm?idtt=2&photo=10&idtypebien=1,2,13&idpublication='+Agence.idPublication+'">'+listeAnnoncesV+'</a></p>';
		pinAgence.HTML += '<p id="rowContact"><a href="/recherche,mobi.htm?idtt=1&photo=10&idtypebien=1,2,13&idpublication='+Agence.idPublication+'">'+listeAnnoncesL+'</a></p>';
	} else {
		pinAgence.HTML += '<p id="rowContact"><a href="/recherche,mobi.htm?idtt=2&idpublication='+Agence.idPublication+'">'+listeAnnoncesV+'</a></p>';
		pinAgence.HTML += '<p id="rowContact"><a href="/recherche,mobi.htm?idtt=1&idpublication='+Agence.idPublication+'">'+listeAnnoncesL+'</a></p>';	
	}
	pinAgence.HTML += '<p id="rowEstimation"><a href="/'+Agence.idPublication+'/contact,estimation.htm">'+estimation+'</a></p>';
	//pinAgence.HTML += '<p class="rowDetails"><a href="agence,immobiliere.htm?idp='+Agence.idPublication+'&lang='+langue+'" title="'+linkPlusDetails+'" alt="'+linkPlusDetails+'"><img src="/z/webagency/slagence_X_V4/mobile/images/more.png" /></a></p>';
	pinAgence.HTML += '</div>';
	pinInfobox = new MM.Infobox(new MM.Location(0, 0),{visible: false});
	map.entities.push(pinInfobox);
    // EVENT CLICK
	clickPushinPin = MM.Events.addHandler(pinAgence, 'click', displayInfoPin);
}
function displayInfoPin(e) {
	if (e.targetType == "pushpin") {
		pinInfobox.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		pinInfobox.setLocation(e.target.getLocation());
			$('.closeMyBox').click(function() {
				//$(this).parent().parent().hide();
				closeInfoPin(e);
			});
			var buffer = 25;
			var infoboxOffset = pinInfobox.getOffset();
			var infoboxAnchor = pinInfobox.getAnchor();
			var infoboxLocation = map.tryLocationToPixel(e.target.getLocation(), MM.PixelReference.control);
			var dx = infoboxLocation.x + infoboxOffset.x - infoboxAnchor.x;
			var dy = infoboxLocation.y - 25 - infoboxAnchor.y;
		if (dy < buffer) {
			dy *= -1;
			dy += buffer;
		} else {
			dy = 0;
		}
		if (dx < buffer) {
			dx *= -1;
			dx += buffer;
		} else {
			dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinInfobox.getWidth();
		if (dx > buffer) {
				dx = 0;
			} else {
				dx -= buffer;
			}
		}
		if (dx != 0 || dy != 0) {
				map.setView({ centerOffset: new MM.Point(dx, dy), center: map.getCenter() });
			}
		}
}
function closeInfoPin() {
	pinInfobox.setOptions({visible:false});
}
/* GEOLOC FUNCTION */
function geoLoc() {
	if (navigator.geolocation)
  		navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy : true, timeout:5000, maximumAge:600000})
	else
		return false;
  		//alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
 }
function successCallback(position){
	fixPinUser(position.coords.latitude,position.coords.longitude);
  	//alert("Latitude : " + position.coords.latitude + ", longitude : " + position.coords.longitude);
}; 
function errorCallback(error){
	switch(error.code){
		case error.PERMISSION_DENIED:
			//alert("L'utilisateur n'a pas autorisé l'accès à sa position");
		break;
		case error.POSITION_UNAVAILABLE:
			//alert("L'emplacement de l'utilisateur n'a pas pu être déterminé");
		break;
		case error.TIMEOUT:
			//alert("Le service n'a pas répondu à temps");
		break;
	}
};
function fixPinUser(lat,lon) {
	pinUser = new MM.Pushpin(new MM.Location(lat,lon),{icon:"/z/webagency/slagence_X_V4/mobile/images/geolocPin.png",height:16,width:16});
	// ADD PIN USER
    map.entities.push(pinUser);
}
function mapResize() {
	var heightMax = $(document).height();
	var widthMax = $(document).width();
	map.setView({height:heightMax,width:widthMax});
	bounds = map.getTargetBounds();
	map.setView({bounds:bounds,center:bounds.center,zoom:9})
}