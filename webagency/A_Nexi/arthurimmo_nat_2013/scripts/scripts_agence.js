$(document).ready(function(){
	$('.map-region').hover(function(){
		
		$('.carto-phrase').hide();
		var region= $(this).attr('data-region-img');
		CarteOver(region);
		$(this).mouseout(function(){
			CarteOut()
		});
	});
	$('.map-region').on('click',function(){
		var zoomregion= $(this).attr('data-region');
		$('#searchGeolocUser').val(zoomregion);
		getGeoloc();
	});
});
function CarteOver(id){
	$('.mini-map-agence').attr('src','/z/webagency/A_Nexi/arthurimmo_2013/images/agences/picto-agence-carto-'+id+'.png');
}
function CarteOut(){
	$('.mini-map-agence').attr('src','/z/webagency/A_Nexi/arthurimmo_2013/images/agences/picto-agence-carto.png');
}