var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');
var pageEstimation;
var pageAcquerir;
$(document).ready(function() {
	// BOUTON SLIDER
	$('.zone-agence-ajax, .detail-agence-liste').on('click','.bouton-message-agence, .bouton-carte-agence, .bouton-biens-agence', function(e) {
		e.preventDefault();
		var testCarte = 0;
		var testBiens = 0;
		if($(this).hasClass('bouton-carte-agence')) {
			var ThisBloc = $(this).parent().parent().parent().children('.zone-carte-agence');
			testCarte = 1;
		} else if($(this).hasClass('bouton-biens-agence')) {
			var ThisBloc = $(this).parent().parent().parent().children('.zone-biens-agence');
			var testBiens = 1;
		} else {
			var ThisBloc = $(this).parent().parent().parent().children('.zone-message-agence');
		}
		// IF TEST CARTE
		if(testCarte == 1) {
			var zoneMap = ThisBloc.children().children().attr('id');
			var idZoneMap = ThisBloc.children().children().attr('data-rel');
			fixPinAgenceClick(zoneMap,idZoneMap,arrayOfAgencies);
		} else if(testBiens == 1) {
			searchListeBiens($(this).attr('data-rel'),ThisBloc,$(this).attr('data-langue'));
		}
		var blocOpen = $('div').find('.blocOpen');
		if(blocOpen.hasClass('blocOpen')) {
			sliderAgence(blocOpen, function() {
				sliderAgence(ThisBloc);
			});
		} else {
			sliderAgence(ThisBloc);
		}
	});
	/* TRI AGENCES */
	$('#triAgences').change(function() {
		var valTri = $(this).val();
		var lien = $('#form-tri').attr('action');
		if(valTri.length > 0) {
			if(lien.indexOf('?') > 0) {
				lien += '&tri=' + valTri;
			} else {
				lien += '?tri=' + valTri;
			}
		}
		window.location.href = lien;
	});
	/* GEOLOC USER */
	$('.bouton-search-user').click(function(e) {
		e.preventDefault();
		getGeoloc();
	});
	$('#searchGeolocUser').keydown(function(e) {
		if(e.keyCode == 13) {
			getGeoloc();
		}
	});
	/* GEOLOC */
	if(navigator.geolocation) {
		var btn = $('.bouton-geolocalisation');
		btn.click(function(e) {
			e.preventDefault();
			var watchId = navigator.geolocation.getCurrentPosition(successGeoloc,errorGeoloc,{enableHighAccuracy:true,timeout:10000,maximumAge:120000})
		});
	} else {
		$('.bouton-geolocalisation').remove();
	}
	/*AFFICHAGE/MASQUAGE TEXT SUR MOBILE*/
	if(winW<840){
		$('.plus-text').addClass('general typoicon-plus');
		$('.phrase-agences').on('click',function() {
			if($(this).parent().children('.plus-text ').html() == '+'){
				$(this).parent().children('.plus-text ').html('-');
			}else{
				$(this).parent().children('.plus-text ').html('+');
			}
			$('.txt-agence').slideToggle();
		});
	}
});
/* FUNCTION */

function GetAgencesMap(arrayAgence,widthCarto,heightCarto,carte,listing) {
	startMap.empty();
		map = new MM.Map(document.getElementById("map-bing"), {
			mapTypeId: "r",
			credentials:MyBingMapsCredentials,
			isRotationEnabled:true,
			enableClickableLogo: false,
	   		enableSearchLogo: false,
	   		showCopyright: false,
	   		showDashboard: true,
	   		showMapTypeSelector:false,
	   		fixedMapPosition:true,
	   		useInertia:false,
	   		showLogo: false,
	   		zoom:2,
	   		width:widthCarto,
	   		height:heightCarto
		}
	);
	if(arrayAgence.length > 1) {
		var bestView = MM.LocationRect.fromLocations(arrayAgence);
		map.setView({bounds:bestView});
	} else {
		map.setView({center:new MM.Location(arrayAgence[0].latitude,arrayAgence[0].longitude),zoom:15});
	}
	map.setView({center:new Microsoft.Maps.Location(46.73986059969267, 2.35107421875),zoom:5});
	if(carte == 1) {
		fixPinAgenceLoop(arrayAgence,listing);
		// EVENTS
		MM.Events.addHandler(map,'dblclick',DoubleClick);
	} else {
		startMap.hide();
	}
}

function fixPinAgenceLoop(arrayAgence,listing) {
	map.entities.clear();
	for(i = 0; i < arrayAgence.length; i++) {
		pinAgence = new MM.Pushpin(new MM.Location(arrayAgence[i].latitude,arrayAgence[i].longitude),{icon:'/z/webagency/slagence_X_V5/images/carto/pinAgence_'+colorPin+'.png',height:heightPictoAgence,width:widthPictoAgence});
		if(pageEstimation == 1) {
			pinAgence.HTML = '<div class="bg-white typo-black small font-body height-75 width-200 round-5 padding-10">'+clickEstimate+' <strong>'+arrayAgence[i].nom+'</strong></div>';
		} else if(pageAcquerir == 1) {
			pinAgence.HTML = '<div class="bg-white typo-black small font-body height-75 width-200 round-5 padding-10">'+clickAcquerir+' <strong>'+arrayAgence[i].nom+'</strong></div>';
		} else {
			pinAgence.HTML = '<div class="bg-white typo-black small font-body height-75 width-200 round-5 padding-10">'+clickMore+' <strong>'+arrayAgence[i].nom+'</strong></div>';
		}
		// GET LANG
		var langue = $('html').attr('lang');
		// FIX VARS TO OBJECT E
		pinAgence.IDP = arrayAgence[i].idPublication;
		pinAgence.latitude = arrayAgence[i].latitude;
		pinAgence.longitude = arrayAgence[i].longitude;
		pinAgence.langue = langue;
		map.entities.push(pinAgence);
		// PUSH INFO
		pinInfoAgence = new MM.Infobox(new MM.Location(0, 0),{visible: false});
		map.entities.push(pinInfoAgence);
		// DECLARE EVENTS OVER/OUT/CLICK
		if(listing == 1) {
			MM.Events.addHandler(pinAgence, 'mouseover', displayInfoPin);
			MM.Events.addHandler(pinAgence, 'mouseout', closeInfoPin);
			if(pageEstimation == 1 || pageAcquerir == 1) {
				MM.Events.addHandler(pinAgence, 'click', goEstimation);
			} else {
				pinAgence.urlagence = arrayAgence[i].urlagence;
				MM.Events.addHandler(pinAgence, 'click', loadInfoPin);
			}
		} else {
			pinAgence.urlagence = arrayAgence[i].urlagence;
			MM.Events.addHandler(pinAgence, 'mouseover', displayInfoPinAgence);
			MM.Events.addHandler(pinAgence, 'click', displayInfoAgence);
		}
	}
}
function fixPinAgenceClick(zoneMap,idZoneMap,arrayAgence) {
	map.entities.clear();
	for(i = 0; i < arrayAgence.length; i++) {
		if(arrayAgence[i].idPublication == idZoneMap) {
			if(arrayAgence[i].latitude.length > 0 && arrayAgence[i].longitude.length > 0) {
				pinAgence = new MM.Pushpin(new MM.Location(arrayAgence[i].latitude,arrayAgence[i].longitude),{icon:'/z/webagency/slagence_X_V5/images/carto/pinAgence_'+colorPin+'.png',height:heightPictoAgence,width:widthPictoAgence});
				map.entities.push(pinAgence);
				map.setView({center:new MM.Location(arrayAgence[i].latitude,arrayAgence[i].longitude),zoom:15});
			} else {
				return false;
			}
		}
	}
	startMap.appendTo('#'+zoneMap).show();
}
function fixPinUser(latitude,longitude,viewBoundaries,entityType) {
	var bounds = viewBoundaries;
	// DELETE IF EXISTS PIN USER
	if(typeof(pinUser) != "undefined") {
		map.entities.remove(pinUser);
	}
	pinUser = new MM.Pushpin(new MM.Location(latitude,longitude),{icon:"/z/webagency/slagence_X_V5/images/carto/user.png",height:heightPictoUser,width:widthPictoUser,zIndex:1});
	map.setView({center:new MM.Location(latitude,longitude)});
	if(bounds ==""){
		map.setView({zoom:14});
	}else{
		map.setView({bounds:bounds});
	}
	if (entityType == "Address" || entityType == "RoadBlock"){
	map.entities.push(pinUser);
}
	// EVENTS USER
	MM.Events.addHandler(pinUser, 'mouseover', displayUserPin);
	MM.Events.addHandler(pinUser, 'mouseout', closeUserPin);
	// PUSH INFO
	pinUserInfo = new MM.Infobox(new MM.Location(0, 0),{visible: false});
	pinUser.HTML = '<div class="bg-white typo-block height-75 width-100 round-5 padding-10 small"><strong>'+youHere+'</strong></div>';
	map.entities.push(pinUserInfo);
}
function goEstimation(e) {
	if(pageEstimation == 1) {
		window.location.href = '/'+e.target.IDP+'/estimation,immobiliere.htm';
	} else if(pageAcquerir == 1) {
		window.location.href = '/'+e.target.IDP+'/acquereur,demande.htm';
	} else {
		return false;
	}
}
function displayInfoPin(e) {
	if (e.targetType == "pushpin") {
		e.target.setOptions({zIndex:1500});
		pinInfoAgence.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		pinInfoAgence.setLocation(e.target.getLocation());
			var buffer = 25;
			var infoboxOffset = pinInfoAgence.getOffset();
			var infoboxAnchor = pinInfoAgence.getAnchor();
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
			dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinInfoAgence.getWidth();
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
function displayUserPin(e) {
	if (e.targetType == "pushpin") {
		e.target.setOptions({zIndex:1500});
		pinUserInfo.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		pinUserInfo.setLocation(e.target.getLocation());
			var buffer = 25;
			var infoboxOffset = pinUserInfo.getOffset();
			var infoboxAnchor = pinUserInfo.getAnchor();
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
			dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinUserInfo.getWidth();
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
function displayInfoPinAgence(e) {
	if (e.targetType == "pushpin") {
		pinInfoAgence.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		pinInfoAgence.setLocation(e.target.getLocation());
			var buffer = 25;
			var infoboxOffset = pinInfoAgence.getOffset();
			var infoboxAnchor = pinInfoAgence.getAnchor();
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
			dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinInfoAgence.getWidth();
		if (dx > buffer) {
				dx = 0;
			} else {
				dx -= buffer;
			}
		}
	}
}
function closeInfoPin(e) {
	pinInfoAgence.setOptions({visible:false});
	e.target.setOptions({zIndex:0});
}
function closeUserPin(e) {
	pinUserInfo.setOptions({visible:false});
	e.target.setOptions({zIndex:0});
}
function loadInfoPin(e) {
	var container = $('.zone-agence-ajax');
	// FIX CENTER
	if(container.length > 0) {
		map.setView({center:new MM.Location(e.target.latitude,e.target.longitude),zoom:15});
		container.html('').show();
		$.ajax({
				type: "GET",
				data : 'idpublication='+e.target.IDP+'&lang='+e.target.langue,
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
					// FIX HASH
					goHash('.zone-agence-ajax')
				}
			});
	} else {
		displayInfoAgence(e);
	}
}
function displayInfoAgence(e) {
	window.location.href = e.target.urlagence;
}
function DoubleClick(e) {
	e.handled = true;
}
/* AJAX / JSON SEARCH BIENS */
function searchListeBiens(idPublication,blocBiens,langue) {
	if(!blocBiens.hasClass('searchDone')) {
		$.ajax({
			type: "GET",
			data : 'idpublication='+idPublication+'&lang='+langue,
			dataType:'json',
			url: '/agences,search_liste_biens.htm',
			beforeSend: function() {},
			success: function(data) {
				var container = blocBiens.children('.liste-biens');
				// IF TRANSACTION
				if(data.transaction) {
					var idttLength = data.transaction.length;
					var html = '<ul class="nav nav-pills nav-stacked nav-biens-agence">';
					for(i = 0; i  < idttLength; i ++) {
						html += '<li><a href="'+data.transaction[i].url+'">'+data.transaction[i].nbannonces+' '+data.transaction[i].name+'</a></li>';
					}
					html += '</ul>';
					container.html(container.html()+html);
				} else {
					container.append(data.message);
				}
			},
	 	 	error : function (jqXHR, textStatus, errorThrown) {console.log(jqXHR, textStatus, errorThrown);},
			complete: function() {
				blocBiens.addClass('searchDone');
			}
		});
	} else {
		return false;
	}
}
/* FUNCTION GEO */
function successGeoloc(position) {
	var latUser = position.coords.latitude;
	var longUser = position.coords.longitude;
	var viewBoundaries = "";
	var entityType = "Address";
	fixPinUser(latUser,longUser,viewBoundaries,entityType);
}
function errorGeoloc(error) {
	var messageError;
	if($('.message-erreur-geoloc').length > 0) {
		$('.message-erreur-geoloc').remove();
	}
	switch(error.code){
		case error.PERMISSION_DENIED:
			messageError = 'Vous n\'avez pas autoris\351 l\'acc\350s \340 votre position';
		break;
		case error.POSITION_UNAVAILABLE:
			messageError = 'Votre emplacement n\'a pas pu \352tre d\351termin\351';
		break;
		case error.TIMEOUT:
			messageError = 'Le service de g\351olocalisation n\'a pas répondu \340 temps';
		break;
	}
	$('.bouton-geolocalisation').after('<p class="margin-top-10 message-erreur-geoloc">'+messageError+'</p>');
}
function stopGeoloc() {
	navigator.geolocation.clearWatch(watchId);
}
function getGeoloc() {
	// RESET
	$('.erreur-saisie-geo').hide();
	var locationUser = $('#searchGeolocUser');
	var locationUserVal = locationUser.val();
	if(locationUserVal.toUpperCase() == 'REUNION' ||  locationUserVal.toUpperCase() == 'MARTINIQUE' ||  locationUserVal.toUpperCase() == 'GUADELOUPE'){
		
	}else{
		if(locationUserVal.toUpperCase() == 'ARDECHE' || locationUserVal.toUpperCase() == 'ARDÈCHE') {
			locationUserVal += ' departement';
		}
		locationUserVal = locationUserVal + ' FRANCE';
	}
	locationUser.attr('disabled','disabled');
	if(locationUserVal.length > 2) {
		 var geocodeRequest = "http://dev.virtualearth.net/REST/v1/Locations/?query=" + encodeURI(locationUserVal) + "&output=json&jsonp=callBackGeoc&maxResults=1&c=fr&key=" + MyBingMapsCredentials;
		 CallRestService(geocodeRequest);
	} else {
		$('.erreur-saisie-geo').show();
		$('#searchGeolocUser').removeAttr('disabled');
	}
}
function CallRestService(request) {
	// FUNCTION REST
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", request);
	document.body.appendChild(script);
}
function callBackGeoc(result) {
	var latUser = result.resourceSets[0].resources[0].point.coordinates[0];
	var longUser = result.resourceSets[0].resources[0].point.coordinates[1];
	var viewBoundaries =  Microsoft.Maps.LocationRect.fromLocations(new Microsoft.Maps.Location(result.resourceSets[0].resources[0].bbox[0], result.resourceSets[0].resources[0].bbox[1]), new Microsoft.Maps.Location(result.resourceSets[0].resources[0].bbox[2], result.resourceSets[0].resources[0].bbox[3]));
  	var entityType = result.resourceSets[0].resources[0].entityType;
  	fixPinUser(latUser,longUser,viewBoundaries,entityType);
  	// REMOVE DISABLED
  	 $('#searchGeolocUser').removeAttr('disabled');
}
// SLIDER
function sliderAgence(slider,callback) {
	if($('html').hasClass('ie7')) {
		if(slider.hasClass('blocOpen')) {
			slider.addClass('display-none').removeClass('blocOpen').removeClass('display-show');
		} else {
			slider.addClass('display-show').addClass('blocOpen');
		}
	} else {
		if(slider.hasClass('blocOpen')) {
			slider.slideUp(200,'swing', function() {
				$(this).removeClass('blocOpen');
			});
		} else {
			slider.slideDown(300,'swing', function() {
				$(this).addClass('blocOpen');
			});
		}
	}
	if(callback) {
		callback();
	}
}
// GO HASH
function goHash(idHash) {
	var positionElement = $(idHash).position();
	if(positionElement != undefined) {
		$("html, body").animate({ scrollTop: positionElement.top }, 600);
		return false;
	}
}
