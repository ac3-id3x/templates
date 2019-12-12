var pinUser = null;
var pinArray = new Array();
var map = null;
var MM = Microsoft.Maps;
var MyBingMapsCredentials = "AtFiMyQZy6zCnIa4Z-wUSw_WzIpvtyT79ZD9IDlEDOiFK9-TzHBHdHjOn-A4eM1f";	
function GetMap(latbg,lonbg,lathd,lonhd,h,w) {
	$('#myMap').empty();
	map = new MM.Map(document.getElementById("myMap"), {
		credentials:MyBingMapsCredentials,
		center: new MM.Location(0, 0),
		height:h,
		width:w,
		mapTypeId: "r",
		isRotationEnabled:true,
		enableClickableLogo: false,
	   	enableSearchLogo: false,
	   	showCopyright: false,
	   	showDashboard: true,
	   	showMapTypeSelector:false,
	   	fixedMapPosition:true,
	   	useInertia:false,
	   	showLogo: false
		}
    );
    // FIX CENTER + ZONE
	loc1 = new MM.Location(lathd, lonbg);
	loc2 = new MM.Location(latbg, lonhd);
	loc3 = new MM.Location(lathd, lonhd);
	loc4 = new MM.Location(latbg, lonbg);
    var bestView = MM.LocationRect.fromLocations(loc1,loc2,loc3,loc4);
    map.setView({bounds:bestView,center:bestView.center});
    // ACTION ZOOM
    handlerMapEnd = MM.Events.addThrottledHandler(map, 'viewchangeend', refineZoom,500);
    handlerMapStart = MM.Events.addHandler(map, 'viewchangestart', deletePin);
}
function refineZoom() {
	MM.Events.removeHandler(handlerMapEnd);
	// RECT + LAT/LON
	var view = map.getBounds();
	var latlon0 = view.getNorthwest(); 
	var latlon1 = view.getSoutheast();
	// WIDTH/HEIGHT
	var bMapWidth = map.getWidth();
	var bMapHeight = map.getHeight();
	// ZOOM LEVEL
	var zoomLevel = map.getZoom();
	var getResearchCriteria = window.location.search.substring(1);
	var query = getResearchCriteria +"&zoom="+ zoomLevel +"&width="+ bMapWidth +"&height="+ bMapHeight +"&latMin="+ latlon1.latitude +"&lonMin="+latlon0.longitude+"&latMax="+latlon0.latitude+"&lonMax="+latlon1.longitude;
	// GO SEARCH BIEN
	$.ajax({
		type: "GET",
		data: query,
		dataType: "html",
		url: '/recherche,markers.htm',
		beforeSend: function() {
			loadingFunction();
		},
		success: function(data) {
			loadingFunction();
			eval(cleanJavascript(data));
		},
		error: function(xhr,statusText) {
		},
		complete: function(xhr,statusText) {
			handlerMapEnd = MM.Events.addThrottledHandler(map, 'viewchangeend', refineZoom,500);
			$('#myBox').parent().parent().css('z-index',5000);
		}
	});
}
function insertPinMap(oAnnonce) {
	var infos = oAnnonce.infos;
	var typePin = infos.localisation;
	switch(typePin) {
		case 'pays':
			var iconePin = "/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_pays.png";
			var heightPin = 68;
			var widthPin = 32;
		break;
		case 'reg':
			var iconePin = "/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_region.png";
			var heightPin = 52;
			var widthPin = 52;
		break;
		case 'dep':
			var iconePin = "/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_departement.png";
			var heightPin = 52;
			var widthPin = 50;
		break;
		case 'vil':
			var iconePin = "/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_ville.png";
			var heightPin = 52;
			var widthPin = 53;
		break;
		case 'qrt':
			var iconePin = "/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_quartier.png";
			var heightPin = 44;
			var widthPin = 46;
		break;		
		case 'ann':
			var iconePin = "/z/webagency/slagence_X_V4/images/cartos/"+colorPin+"_pin_annonce.png";
			var heightPin = 44;
			var widthPin = 44;
		break;	
	}
	var optionsPushPin	= {height:heightPin,width:widthPin,icon:iconePin,text:infos.nbAnnonces.toString()};
	var pushpin = new MM.Pushpin(oAnnonce.latlong,optionsPushPin);
	// ADD PIN
    map.entities.push(pushpin);
    pinArray.push(pushpin);
	// POPUP HTML
	pushpin.HTML = '<div id="myBox"><div class="closeMyBox"></div><h2>'+infos.libelle+'</h2><p>'+infos.nbAnnonces+ ' ' + getPluriel(infos.nbAnnonces,annSingulier,annPluriel)+'</p>';
	var localisation = getLocalisationForQry(oAnnonce);
	pushpin.HTML += '<div class="zoomArea"><img src="/z/webagency/slagence_X_V4/mobile/images/pictos/zoom-b-bd.png" alt="'+zoomerSurAnn+'" title="'+zoomerSurAnn+'" /></div>';
	pushpin.HTML += '<div class="rowDetails"><a href="recherche,mobi.htm?idtt=2&'+localisation+'&'+querypreliste+'" title="'+voirListe +'" alt="'+voirListe +'"><img src="/z/webagency/slagence_X_V4/mobile/images/pictos/plus-b-bd.png" /></a></div>';
	pushpin.HTML += '<div class="clear"></div>';
	pushpin.HTML += '</div>';
	// INFOBOX
    pinInfobox = new MM.Infobox(new MM.Location(0, 0),{visible: false,zIndex:2500});
	map.entities.push(pinInfobox);
	// EVENT CLICK
	clickPushinPin = MM.Events.addHandler(pushpin, 'click', displayInfoPin);
	// EVENT MOVE MAP
	$('#myBox').parent().parent().css('z-index',5000);
}
function displayInfoPin(e) {
	if (e.targetType == "pushpin") {
		pinInfobox.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		pinInfobox.setLocation(e.target.getLocation());
		$('.zoomArea').css('cursor','pointer');
		$('.zoomArea').click(function() {
			layoutZoom(e);
		});
		$('.closeMyBox').click(function() {
			//$(this).parent().parent().hide();
			closeInfoPin();
		});
		// VARS
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
				//map.setView({ centerOffset: new MM.Point(dx, dy), center: map.getCenter() });
			}
		}
	$('#myBox').parent().parent().css('z-index',5000);
}
function loadingFunction() {
	if($('#myLoading').css('display') == 'none') {
		$('#myTextLoading').show();
		$('#myLoading').show();
	} else {
		$('#myTextLoading').hide();
		$('#myLoading').hide();
	}
}
function errorFunction() {
	$('#myTextError').show(10).delay(1500).slideUp(150);
	$('#myLoading').show(10).delay(1500).slideUp(150);
}
function deletePin() {
	var lengthArray = pinArray.length;
	for(i = 0; i < lengthArray; i++) {
		map.entities.remove(pinArray[i]);
	}
}
function fixPinUser(lat,lon) {
	pinUser = new MM.Pushpin(new MM.Location(lat,lon),{icon:"/z/webagency/slagence_X_V4/mobile/images/geolocPin.png",height:32,width:35});
	// ADD PIN USER
    map.entities.push(pinUser);
}
function closeInfoPin() {
	pinInfobox.setOptions({visible:false});
}
function insertPolyon() {
	//console.log("polygon")
}
function insertPolygonVille () {
	//console.log("polygon ville")
}
function cleanJavascript(inStr) {
  	var comment = inStr.substring(inStr.indexOf("<!--",1),inStr.indexOf(">",1)+1);
	return inStr.replace(comment," ");
}
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
function getPluriel(nb,sing,plur) {
	if (!sing) sing='';
	if (!plur) plur='s';
	return (nb==1)?sing:plur;
}
function getLocalisationForQry(pin) {
	var localisation = null;
	switch(pin.infos.localisation)
	{
		case "pays":
			localisation = "idpays=" + pin.infos.id;
		break;
		case "reg":
			localisation = "div=" + pin.infos.id;
		break;
		case "dep":
			localisation = "sdiv=" + pin.infos.id;
		break;
		case "vil":
			localisation = "ci=" + pin.infos.id;
		break;
		case "qrt":
			localisation = "idqfix=1&idq=" + pin.infos.id+"&ci="+pin.infos.codeInsee;
		break;
		case "ann":
			localisation = "idannonce="+ pin.infos.id;
		break;	
	}
	return localisation;	
}
function layoutZoom(e) {
	if (e.targetType == "pushpin") {
		var GPS = e.target.getLocation();
		var lat = GPS.latitude;
		var lon = GPS.longitude;
		map.setView({center:new MM.Location(lat,lon),zoom:map.getZoom() + 1})
	}
	$('#myBox').parent().parent().css('z-index',5000);
}
function mapResize() {
	var heightMax = $(document).height();
	var widthMax = $(document).width();
	$('#myLoading').height(heightMax);
	$('#myTextLoading').height(heightMax);
	$('#myTextLoading').css('line-height',heightMax+'px');
	$('#myTextError').css('line-height',heightMax+'px');
	map.setView({height:heightMax,width:widthMax});
	$('#myBox').parent().parent().css('z-index',5000);
}