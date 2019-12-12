// REGEXP
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

// FUNCTIONS
function updateEngineFilters(p) {
	// p = { toDo: String, newFilter: {action: String, key: String, value: String} }
	
	if (engineGeoMap.mapObject == null) {
		var _manager = null;
		if (id3xContent != null) _manager = (id3xContent.geolocation.manager != null ? id3xContent.geolocation.manager : null);
		// awful code below, in order to determine which map is concerned -_- (... by default, let's use the first one from the Array)
		if (_manager != null) engineGeoMap.mapObject = ((_manager.mapObjectList.length > 0) ? _manager.mapObjectList[0] : null);
		
		if (engineGeoMap.mapObject != null) {
			// set the mapDataIndex value
			var _mapData = engineGeoMap.mapObject.mapData;
			if (_mapData.length > 0) {
				// first index could be the good one...
				if (_mapData[0].mapDataType === _manager.mapDataType.REALESTATES) engineGeoMap.mapDataIndex = 0;
				// ... but there might be several others items.
				if (_mapData.length > 1) {
					for (i = 0; i < _mapData.length; i++) {
						if (_mapData[i].mapDataType === _manager.mapDataType.REALESTATES) {
							engineGeoMap.mapDataIndex = i;
							break;
						}
					}
				}
			}
		}
	}
	
	if (engineGeoMap.mapObject != null && engineGeoMap.mapDataIndex > -1) {
		id3xContent.geolocation.manager.updateFilters({
			 mapObject: engineGeoMap.mapObject
			,mapDataIndex: engineGeoMap.mapDataIndex
			,toDo: p.toDo
			,newFilter: p.newFilter
		});
	}
}

$(document).ready(function() {
	// CLICK "NOS VILLES" / "NOS QUARTIERS" :
	$('.message-suggest-liste').on('click', function(e){
		e.preventDefault();
		updateEngineFilters({ toDo: 'update', newFilter: {action: '', key: 'nom', value: $('.saisie-suggest').val().trim()} });
		//getPin();
	});
	
	// CLICK "NOS VILLES" / "NOS QUARTIERS" : REMOVE
	$('.ville-suggest-liste').on('click', function(e){
		e.preventDefault();
		
		//updateEngineFilters({ toDo: String, newFilter: {action: String, key: String, value: String} });
		//getPin();
	});
	
	// CLICK CRITERES
	$('.bouton-criteres').on('click', function(e){
		if($('#criteres-plus').hasClass('criteres-plus-open')) {
			$('#criteres-plus').hide();
			$('#criteres-plus').removeClass('criteres-plus-open');
		} else {
			$('#criteres-plus').show();
			$('#criteres-plus').addClass('criteres-plus-open');
		}
	});
	
	$('.bouton-moteur-recherche, .bouton-moteur-recherche-carte, .bouton-moteur-recherche-liste').on('click', function(e) {
		e.preventDefault();
		// DELETE INPUT
		$('#longitudeUser').remove();
		$('#latitudeUser').remove();
		// DEL VAL
		$('.saisie-suggest').val('');
		// SERIALIZE
		//var qry = getQueryForEngine();
		// LOADING BTN
		var btn = $(this)
		btn.button('loading');
		// SUBMIT
		$('#moteur-recherche').submit();
		// REINSERT
		$('.saisie-suggest').val($('.saisie-suggest').attr('data-value'));
	});
	
	// CLICK BUTTON BIEN
	$('.bouton-bien-recherche').on('click', function(e) {
		var btn = $(this);
		e.preventDefault();
		if(btn.hasClass('bienOK')) {
			btn.addClass('btn-neutre').removeClass('btn-action').removeClass('bienOK');
		} else {
			btn.addClass('btn-action').addClass('bienOK').removeClass('btn-neutre');
		}
	});
	
	// SELECT IDTYPEBIEN
	$('#moteur-carte-idtypebien').change(function() {
		//affichage du sous type de bien si présence dans le DOM
		if( $("#SousTypesBiens").length ) {
			dataSend="idtypebien="+$(this).val()+"&lang=fr&idtt="+$("#idtt").val();
			$.ajax({
				type: "GET",
				data: dataSend,
				dataType: "html",
				url: '/moteur,incl_soustypesbiens_select.htm',
				success: function(data) {
					$("#SousTypesBiens").html(data);
					$("#SousTypesBiens").find('.multiselect').multipleSelect();
		 	 	},
		 	 	error: function(xhr,statusText) {
		 	 		//console.log(xhr.status);
		 	 	},
		 	 	complete: function(xhr,statusText) {
		 	 	}
			});
		}
		
		//updateEngineFilters({ toDo: String, newFilter: {action: String, key: String, value: String} })
		//getPin();
	});
	
	// OK BUDGET/SURFACE
	$('.bouton-budget-moteur, .bouton-surface-moteur').on('click', function(e) {
		e.preventDefault();
		
		//updateEngineFilters({ toDo: String, newFilter: {action: String, key: String, value: String} })
		//getPin();
	});
	
	// REF
	$('.bouton-search-ref-envoi').on('click', function(e) {
		e.stopPropagation();
		var valueRef = $('#refannonce').val(); //.toLowerCase();
		$('#refannonce').val(valueRef);
		if(valueRef.length < 2) {
			$('.erreur-saisie-ref').show();
		} else {
			$('.erreur-saisie-ref').hide();
			$('#moteur-reference').submit();
		}
	});
	
	// DESSIN
	//$('.bouton-dessiner-end').on('click', function(e) {});
});

/*
function getQueryForEngine() {
	var qry = $('#moteur-recherche input,select').filter(function(){ return $(this).val(); }).serialize();
	return qry;
}

var mapOSM, listPinEstate = new Array();

function getPin() {
	// DEBUG VAL POLYGON BACK BROWSER
	$('#polygon').val('');
	var qry = getQueryForEngine();
	var heightMap = document.getElementById('geo-map-name').offsetHeight;
	var widthMap = document.getElementById('geo-map-name').offsetWidth;
	var urlJsonPin = '';
	if (pinville != null){
		urlJsonPin = (pinville == 1) ? '/moteur,incl_pin_ville.htm' : '/moteur,incl_pin.htm';
	}
	
	var bNE = null, bSW = null;
	var mapBounds = mapOSM.getBounds();
	if (mapBounds != null) {
		bNE = mapBounds._northEast;
		bSW = mapBounds._southWest;
	}
	
	$.ajax({
		type: "GET",
		url: urlJsonPin,
		cache : "true",
		dataType: "json",
		contentType: "application/json",
		data: 'height='+heightMap+'&width='+widthMap+'&latMin='+bSW.lat+'&lonMin='+bSW.lng+'&latMax='+bNE.lat+'&lonMax='+bNE.lng+'&'+qry,
		beforeSend:function() {
			$('#map-layer').show();
		},
		success:function(data) {
			// DEBUG VAL POLYGON BACK BROWSER
			$('#polygon').val('');
			$('#map-layer').hide();
			
			if(data.results != 0) {
				// remove previous pins
				for (i = 0; i < listPinEstate.length; i++) {
					mapOSM.removeLayer(listPinEstate[i]);
				}  
				
				// reset array of estate properties
				listPinEstate = new Array();
				
				// add list(s)
				for (i = 0; i < data.list.length; i++) {
					if(data.list[i].poly != "") {
						var pinType = data.list[i].type;
						var pinRegion = data.list[i].region;
						var pinDepartement = data.list[i].departement;
						var pinId = data.list[i].idquartier;
						var pinName = data.list[i].nom;
						var pinCI = data.list[i].ci;
						var pinNB = data.list[i].valuenb;
						var pinAnnonces = data.list[i].nb;
						var pinLatitude = data.list[i].latitude;
						var pinLongitude = data.list[i].longitude;
						//drawPin(pinType, pinRegion, pinDepartement, pinName, pinId, pinCI, pinNB, pinAnnonces, pinLatitude, pinLongitude);
					}
				}
				
				fitTheMap();
			}
		},
		error : function (jqXHR, textStatus, errorThrown) {
		},
		complete : function (jqXHR, textStatus) {
		}
	});
}
*/
