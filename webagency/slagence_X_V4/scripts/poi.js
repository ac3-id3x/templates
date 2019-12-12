/* MAPS */
var arrayAnnonce = arrayAnnonce || [];
arrayAnnonce.push({"latitude":detailLat,"longitude":detailLon});
var layerPoi = new MM.EntityCollection({zIndex: 50});
var layerInfoBox = new MM.EntityCollection({zIndex: 100});
var pinInfobox = new MM.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false });
var pinAnnonce = null;
layerInfoBox.push(pinInfobox);
$(document).ready(function (){
	GetDetailMap(arrayAnnonce,'100%',400,1);
	$("[class*='poi-family-']").on('click',function(){
		var idFamily = $(this).attr('id');
		hidePinFamily(idFamily);
	});
})
//show map
function GetDetailMap(arrayAnnonce,widthCarto,heightCarto,carte) {
	if(heightCarto <= 250) {
		var panning = true;
	}
	startMap.empty();
		map = new MM.Map(document.getElementById("map_poi"), {
			mapTypeId: MM.MapTypeId.road,
			credentials:MyBingMapsCredentials,
			isRotationEnabled:true,
			enableClickableLogo: false,
	   		enableSearchLogo: false,
	   		showCopyright: false,
	   		showDashboard: true,
	   		showMapTypeSelector:false,
	   		fixedMapPosition:true,
	   		disablePanning:panning,
	   		useInertia:false,
	   		showLogo: false,
	   		zoom:zoomPoi,
	   		width:widthCarto,
	   		height:heightCarto
		}
	);
	map.setView({center:new MM.Location(arrayAnnonce[0].latitude,arrayAnnonce[0].longitude),zoom:zoomPoi});
	if(carte == 1) {
		// EVENTS
		MM.Events.addHandler(map,'dblclick',DoubleClick);
	}
	MM.Events.addThrottledHandler(map, 'viewchangeend', initPoi,1);
	// Hide the infobox when the map is moved.
   MM.Events.addHandler(map, 'viewchange', hideInfobox);
}
//disable double click
function DoubleClick(e) {
	e.handled = true;
}
//show infobox
function displayInfobox(e){
	pinInfobox.setOptions({title:e.target.Title, visible:true,offset: new Microsoft.Maps.Point(-3,33),height:60,zIndex:100});
	pinInfobox.setLocation(e.target.getLocation());
	layerInfoBox.push(pinInfobox);
};
//hide infobox
function hideInfobox(e){
  pinInfobox.setOptions({ visible: false });
};
// hide pin by family
function hidePinFamily(idFamily){
	var len = layerPoi.getLength(), entity;
	for(var i = 0; i < len; i++){
		entity = layerPoi.get(i);
		if (entity.Id===idFamily){
			if(entity.getVisible()===true){
				entity.setOptions({visible:false})
			}else{
				entity.setOptions({visible:true})
			}
		}
	}
}
//get and show pin
function initPoi() {
	//clear
	var poi = {
		entityId: [],
		config: {
			key: 'c2ae584bbccc4916a0acf75d1e6947b4',
			pois: [
				{
					filter: 'EntityTypeID eq \'4013\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/train-station.png'
				},
				{
					filter: 'EntityTypeID eq \'4170\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/bus-station.png'
				},
				{
					filter: 'EntityTypeID eq \'5400\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/grocery-store.png'
				},
				{
					filter: 'EntityTypeID eq \'5800\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/restaurant.png'
				},
				{
					filter: 'EntityTypeID eq \'6512\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/shopping.png'
				},
				{
					filter: 'EntityTypeID eq \'7832\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/cinema.png'
				},
				{
					filter: 'EntityTypeID eq \'7947\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/park.png'
				},
				{
					filter: 'EntityTypeID eq \'8200\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/higher-education.png'
				},
				{
					filter: 'EntityTypeID eq \'8211\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/school.png'
				},
				{
					filter: 'EntityTypeID eq \'8231\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/library.png'
				},
				{
					filter: 'EntityTypeID eq \'9121\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/city-hall.png'
				},
				{
					filter: 'EntityTypeID eq \'9530\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/post-office.png'
				},
				{
					filter: 'EntityTypeID eq \'9532\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/bar.png'
				},
				{
					filter: 'EntityTypeID eq \'9545\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/department-store.png'
				},
				{
					filter: 'EntityTypeID eq \'9565\'',
					top: 10,
					icon: '/z/webagency/slagence_X_V5/images/poi/pharmacy.png'
				}
			]
		},
		loader: function(options, icon) {
			$('[class*="poi-family-"]').addClass('display-none');
			return $.ajax({
				url:'http://spatial.virtualearth.net/REST/v1/data/'+poi.config.key+'/NavteqEU/NavteqPOIs?',
				dataType: "jsonp",
				data: options,
				jsonp: "jsonp",
				success: function(data) {
					data.d.results.forEach(function(item) {
						pinAnnonce= new MM.Pushpin(new MM.Location(item.Latitude,item.Longitude),{icon:icon,height:45,width:35});
						pinAnnonce.Title=item.Name;
						pinAnnonce.Id=item.EntityTypeID;
						// Add handler for the pushpin click event.
						MM.Events.addHandler(pinAnnonce, 'click', displayInfobox);
						// push available poi
						layerName = item.EntityTypeID;
						if(poi.entityId.indexOf(item.EntityTypeID) === -1){
							poi.entityId.push(item.EntityTypeID);
							// poi show
							poi.show(item.EntityTypeID);

						}else{
							/*window['poi-family-'+item.EntityTypeID].push(pinAnnonce);*/
						}
						//push in global layer
						layerPoi.push(pinAnnonce);
					});
				}
			});
		},
		show: function(poi){
			$('.poi-family-'+poi).show();
		},
		init: function() {
			// reset array
			poi.entityId = [];
			// get bounds
			var bounds = map.getBounds(),
			boundString = 'bbox(' + bounds.getSouth() + ',' + bounds.getWest() + ',' + bounds.getNorth() + ',' + bounds.getEast() + ')';
			// clear layer
			layerPoi.clear();
			// set item
			poi.config.pois.forEach(function(item) {
				poi.loader({
					key:MyBingMapsCredentials,
					$format:'json',
					spatialFilter: boundString,
					$filter: item.filter,
					$top: item.top || 10,
				}, item.icon);
			});
			// push in map
			map.entities.push(layerPoi);
			map.entities.push(layerInfoBox);
		}
	}

	poi.init();
};
