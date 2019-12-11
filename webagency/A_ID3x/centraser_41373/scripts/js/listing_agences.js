var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');
var pageEstimation;
var pageAcquerir;

var htmlPins = [];
var mapLayerHtml;

$(document).ready(function() {
	if( $('#experts-region').val() ){		
		$("#searchGeolocUser").val( $('#experts-region').find(':selected').data("region") + " FRANCE" );
		getGeoloc();
		maj_lib();
	}
	
});


$('#experts-region').on('change',function(){
	window.location.href = $(this).val();
});
$('#experts-byname').on('change',function(){
	window.location.href = $(this).val();
});


$('#experts-bydpt').on('change',function(){
	maj_ville();
	maj_lib();	
	$("#searchGeolocUser").val( $('#experts-bydpt').val() );
	getGeoloc();
	maj_agences();
});
$('#experts-byville').on('change',function(){
	maj_lib();	
	$("#searchGeolocUser").val( $('#experts-byville').val() );
	getGeoloc();
	maj_agences();
});


function maj_agences(){	
	var content_load = '<div class="pagination-centered"><img src="/z/webagency/slagence_X_V5/images/carto/ajax-loader.gif"></div>';
	var region = "";
	var departement = $('#experts-bydpt').find(':selected').data("cp");	
	var ville = $('#experts-byville').find(':selected').data("cp");	
	var langue = $('#langue').val();	
	var cp = ville;
	
	var url = '/experts,liste-ajax.htm';
	
	if( !cp ){
		cp = departement;
	}
	if( !cp ){
		cp = "";
		region = $('#experts-region').find(':selected').data("region");
	}
	
	
  console.log(cp);
	
	var xhr = $.ajax({
		type: 'GET',
		data:"cp="+cp+"&langue="+langue+"&region="+region,
		dataType: 'html',
		url: url,
		beforeSend: function() {
			//avant le chargement de l'ajax on descend plus bas et on affiche le loader
			$('html,body').animate({scrollTop: $("#agences-liste-anchor").offset().top},'slow');
			$('#agences-liste-wrap').html(content_load);
		},
		success: function(data) {
			$('#agences-liste-wrap').html(data);
		},
		error:function() {
			alert("Une erreur est survenue");
		},
		complete:function() {
			//à la fin du chargement, on descend au niveau du titre H2.
			$('html,body').animate({scrollTop: $("#agences-liste-anchor").offset().top},'slow');
		}
	});
	
}
function maj_lib(){
	var lib = "";
	var chem = $("#chem").val();
	if( $('#experts-byville').val() ){
		lib = $('#experts-byville').find(':selected').html();
		urlcarte = $('#experts-byville').find(':selected').data("dep");
	}else if( !$('#experts-byville').val() && $('#experts-bydpt').val() ){
		lib = $('#experts-bydpt').find(':selected').html();
		urlcarte = $('#experts-bydpt').find(':selected').data("cp");
	}else	if( !$('#experts-bydpt').val() && $('#experts-region').val() ){
		lib = $('#experts-region').find(':selected').html();
		urlcarte = $('#experts-region').find(':selected').data("region");
		if( urlcarte ){
			urlcarte = urlcarte.toLowerCase();
		}
	}else{
		lib = "FRANCE";		
	}
	if( urlcarte ){
		$("#agences-liste-carte").html('<img src="'+chem+'/images/cartes/'+urlcarte+'.png" alt="">');
	}else{
		$("#agences-liste-carte").html('');
	}
	$(".secteur-recherche").html(lib);
}
function maj_ville(){
	var region = $('#experts-region').find(':selected').data("region");
	var departement = $('#experts-bydpt').find(':selected').data("cp");	
	var cp = departement;
	var url = '/scripts,ajax_ville.htm';
	
	if( !cp ){
		cp = region;
		url = '/scripts,ajax_ville_byreg.htm';
	}
	
	var xhr = $.ajax({
		type: 'GET',
		data:"cp="+cp,
		dataType: 'html',
		url: url,
		beforeSend: function() {
			$('#experts-byville').html("<option value=''>chargement</option>");
		},
		success: function(data) {
			$('#experts-byville').html(data);
		},error:function() {
		},complete:function() {
		}
	});
}
function maj_dep() {
	var deptreg = $('#experts-region').find(':selected').data("region");
		var xhr = $.ajax({
			type: 'GET',
			data:"region="+deptreg,
			dataType: 'html',
			url: '/scripts,ajax_dept.htm',
			beforeSend: function() {
				$('#experts-bydpt').html("<option value=''>chargement</option>");
			},
			success: function(data) {
				$('#experts-bydpt').html(data);
			},error:function() {
			},complete:function() {
			}
		});
}



$('#agences-liste-wrap').on('click','.bouton-message-agence, .bouton-carte-agence, .bouton-biens-agence, div[class*="bouton-biens-agence"]', function(e) {
		e.preventDefault();
		var testCarte = 0;
		var testBiens = 0;
		var className = $(this).attr('class');
		if($(this).hasClass('bouton-carte-agence')) {
			var ThisBloc = $(this).parent().parent().parent().children('.zone-carte-agence');
			testCarte = 1;
		} else if(className.indexOf('bouton-biens-agence')>-1) {
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




/*********** MUTUALISE ****************/

var GetAgencesMapParams = {},
		fixPinUserParams = {};

function launchBingMap() {
   if (GetAgencesMapParams.arrayAgence) 
      GetAgencesMap(GetAgencesMapParams.arrayAgence, GetAgencesMapParams.widthCarto, GetAgencesMapParams.heightCarto, GetAgencesMapParams.carte, GetAgencesMapParams.listing);
}

function GetAgencesMap(arrayAgence,widthCarto,heightCarto,carte,listing) {
   GetAgencesMapParams.arrayAgence = arrayAgence;
   GetAgencesMapParams.widthCarto = widthCarto;
   GetAgencesMapParams.heightCarto = heightCarto;
   GetAgencesMapParams.carte = carte;
   GetAgencesMapParams.listing = listing;

   if (typeof(MM) === 'undefined') return;

   mapLayerHtml = new HtmlPushpinLayer();

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
	   		zoom:5,
	   		width:widthCarto,
	   		height:heightCarto
		}
	);

		for (var i =0; i< arrayAgence.length; i++) {
			arrayAgence[i].latitude = parseFloat(arrayAgence[i].latitude);
			arrayAgence[i].longitude = parseFloat(arrayAgence[i].longitude);
		}

	if(arrayAgence.length > 1) {
		var bestView = MM.LocationRect.fromLocations(arrayAgence);
		map.setView({bounds:bestView});
	} else {
		map.setView({center:new MM.Location(arrayAgence[0].latitude,arrayAgence[0].longitude),zoom:15});
	}
	if(carte == 1) {
		fixPinAgenceLoop(arrayAgence,listing);
		// EVENTS
		MM.Events.addHandler(map,'dblclick',DoubleClick);
	} else {
		startMap.hide();
	}

	map.layers.insert(mapLayerHtml);

	if (fixPinUserParams.latitude) 
    	fixPinUser(fixPinUserParams.latitude, fixPinUserParams.longitude, fixPinUserParams.viewBoundaries, fixPinUserParams.entityType);
}

function fixPinAgenceLoop(arrayAgence,listing) {
	map.entities.clear();
	for(i = 0; i < arrayAgence.length; i++) {
		if(arrayAgence[i].nom!="AGX"){
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
				MM.Events.addHandler(pinAgence, 'mouseout', closeInfoPin);
				MM.Events.addHandler(pinAgence, 'click', displayInfoAgence);
			}
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
	fixPinUserParams.latitude = latitude;
	fixPinUserParams.longitude = longitude; 
	fixPinUserParams.viewBoundaries = viewBoundaries; 
	fixPinUserParams.entityType = entityType;

	if (!map) return;

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

		htmlPins.push(new HtmlPushpin(e.target.getLocation(), e.target.HTML, new MM.Point(100, 115)));
      mapLayerHtml.setPushpins(htmlPins);

		// pinInfoAgence.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		// pinInfoAgence.setLocation(e.target.getLocation());
		// 	var buffer = 25;
		// 	var infoboxOffset = pinInfoAgence.getOffset();
		// 	var infoboxAnchor = pinInfoAgence.getAnchor();
		// 	var infoboxLocation = map.tryLocationToPixel(e.target.getLocation(), MM.PixelReference.control);
		// 	var dx = infoboxLocation.x + infoboxOffset.x - infoboxAnchor.x;
		// 	var dy = infoboxLocation.y - 25 - infoboxAnchor.y;
		// if (dy < buffer) {
		// 	dy *= -1;
		// 	dy += buffer;
		// } else {
		// 	dy = 0;
		// }
		// if (dx < buffer) {
		// 	dx *= -1;
		// 	dx += buffer;
		// } else {
		// 	dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinInfoAgence.getWidth();
		// if (dx > buffer) {
		// 		dx = 0;
		// 	} else {
		// 		dx -= buffer;
		// 	}
		// }
		// if (dx != 0 || dy != 0) {
		// 		map.setView({ centerOffset: new MM.Point(dx, dy), center: map.getCenter() });
		// 	}
	}
}
function displayUserPin(e) {
	if (e.targetType == "pushpin") {
		e.target.setOptions({zIndex:1500});

		htmlPins.push(new HtmlPushpin(e.target.getLocation(), e.target.HTML, new MM.Point(100, 115)));
      mapLayerHtml.setPushpins(htmlPins);

		// pinUserInfo.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		// pinUserInfo.setLocation(e.target.getLocation());
		// 	var buffer = 25;
		// 	var infoboxOffset = pinUserInfo.getOffset();
		// 	var infoboxAnchor = pinUserInfo.getAnchor();
		// 	var infoboxLocation = map.tryLocationToPixel(e.target.getLocation(), MM.PixelReference.control);
		// 	var dx = infoboxLocation.x + infoboxOffset.x - infoboxAnchor.x;
		// 	var dy = infoboxLocation.y - 25 - infoboxAnchor.y;
		// if (dy < buffer) {
		// 	dy *= -1;
		// 	dy += buffer;
		// } else {
		// 	dy = 0;
		// }
		// if (dx < buffer) {
		// 	dx *= -1;
		// 	dx += buffer;
		// } else {
		// 	dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinUserInfo.getWidth();
		// if (dx > buffer) {
		// 		dx = 0;
		// 	} else {
		// 		dx -= buffer;
		// 	}
		// }
		// if (dx != 0 || dy != 0) {
		// 		map.setView({ centerOffset: new MM.Point(dx, dy), center: map.getCenter() });
		// 	}
	}
}
function displayInfoPinAgence(e) {
	if (e.targetType == "pushpin") {
		htmlPins.push(new HtmlPushpin(e.target.getLocation(), e.target.HTML, new MM.Point(100, 115), displayInfoAgence));
      mapLayerHtml.setPushpins(htmlPins);

		// pinInfoAgence.setOptions({zIndex:2500,htmlContent:e.target.HTML,visible:true,offset: new MM.Point(20, 35)});
		// pinInfoAgence.setLocation(e.target.getLocation());
		// 	var buffer = 25;
		// 	var infoboxOffset = pinInfoAgence.getOffset();
		// 	var infoboxAnchor = pinInfoAgence.getAnchor();
		// 	var infoboxLocation = map.tryLocationToPixel(e.target.getLocation(), MM.PixelReference.control);
		// 	var dx = infoboxLocation.x + infoboxOffset.x - infoboxAnchor.x;
		// 	var dy = infoboxLocation.y - 25 - infoboxAnchor.y;
		// if (dy < buffer) {
		// 	dy *= -1;
		// 	dy += buffer;
		// } else {
		// 	dy = 0;
		// }
		// if (dx < buffer) {
		// 	dx *= -1;
		// 	dx += buffer;
		// } else {
		// 	dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - pinInfoAgence.getWidth();
		// if (dx > buffer) {
		// 		dx = 0;
		// 	} else {
		// 		dx -= buffer;
		// 	}
		// }
	}
}
function closeInfoPin(e) {
	pinInfoAgence.setOptions({visible:false});
	e.target.setOptions({zIndex:0});

   htmlPins.length = 0;
   mapLayerHtml.setPushpins(htmlPins);
}
function closeUserPin(e) {
	pinUserInfo.setOptions({visible:false});
	e.target.setOptions({zIndex:0});

   htmlPins.length = 0;
   mapLayerHtml.setPushpins(htmlPins);
}
function loadInfoPin(e) {
	window.location.href = e.target.urlagence;
	/*
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
	*/
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
	var times = 20;
	(function loop() {
	  if (typeof(MM) === 'undefined') {
	       if (times-- > 0) setTimeout(loop, 250);
	     return;
	  }

		var latUser = position.coords.latitude;
		var longUser = position.coords.longitude;
		var viewBoundaries = "";
		var entityType = "Address";
		fixPinUser(latUser,longUser,viewBoundaries,entityType);
	})();
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
			messageError = 'Le service de g\351olocalisation n\'a pas r�pondu \340 temps';
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
	if( locationUserVal == 'AIN' ||  locationUserVal == 'FINISTERE' ||  locationUserVal == 'SOMME' ||  locationUserVal == 'NORD' ){
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
	if( ! result.resourceSets[0] ){
		return;
	}
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
