$(function(){
	$('.europe_map').mobilymap({
		position: '327 314',
		popupClass: 'bubble',
		markerClass: 'point',
		popup: true,
		cookies: false,
		caption: false,
		setCenter: true,
		navigation: true,
		navSpeed: 1000,
		navBtnClass: 'navBtn',
		outsideButtons: '.map_buttons a',
		onMarkerClick: function(){},
		onPopupClose: function(){},
		onMapLoad: function(){}
	});
});
