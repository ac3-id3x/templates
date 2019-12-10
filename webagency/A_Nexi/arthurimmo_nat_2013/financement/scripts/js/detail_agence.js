var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');
/* MAPS */
function GetAgencesMap(arrayAgence,widthCarto,heightCarto,carte) {
	if(heightCarto <= 250) {
		var panning = true;
	}
	startMap.empty();
		map = new MM.Map(document.getElementById("map-bing"), {
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
	   		zoom:15,
	   		width:widthCarto,
	   		height:heightCarto
		}
	);
	map.setView({center:new MM.Location(arrayAgence[0].latitude,arrayAgence[0].longitude),zoom:15});
	if(carte == 1) {
		pinAgence = new MM.Pushpin(new MM.Location(arrayAgence[0].latitude,arrayAgence[0].longitude),{icon:'/z/webagency/slagence_X_V5/images/carto/pinAgence_'+colorPin+'.png',height:35,width:25});
		map.entities.push(pinAgence);
		// EVENTS
		MM.Events.addHandler(map,'dblclick',DoubleClick);
	}
}
function DoubleClick(e) {
	e.handled = true;
}
$(document).ready(function() {
	
					
	/* Ligne du jour en gras */					
	dte = new Date();
	j=dte.getDay();								
	$(".table-agence-horaires tbody tr:eq("+(j-1)+")").addClass("bold");						
					
					
	/* EFFECT ROLLOVER ANNONCES */
	$('.ligne-annonces-agence').each(function() {
		$(this).hover(
			function() {
				if($(this).find('.img-annonces-agence').find('.display-none').length > 0) {
					$(this).find('.img-annonces-agence').find('.picture-responsive').first().hide();
					$(this).find('.img-annonces-agence').find('.picture-responsive').last().show();
				}
			},
			function() {
				if($(this).find('.img-annonces-agence').find('.display-none').length > 0) {
					$(this).find('.img-annonces-agence').find('.picture-responsive').first().show();
					$(this).find('.img-annonces-agence').find('.picture-responsive').last().hide();
				}
			}
		)
	});
	$('.accordion-group').each(function() {
		if($(this).children('.accordion-body').hasClass('in')) {
			$(this).find('.accordion-toggle').append('<div class="minus absolute top right margin-top-10 margin-right-10"><i class="opacity-3 right smallest general typoicon-minus"></i></div>');
		} else {
			$(this).find('.accordion-toggle').append('<div class="plus absolute top right margin-top-10 margin-right-10"><i class=" opacity-3 right smallest general typoicon-plus"></i></div>');
		}
	});
	$('.accordion-body').on('show',function(event){
		$(this).parent().find('.accordion-toggle').find('.minus').remove();
		$(this).parent().find('.accordion-toggle').find('.plus').remove();
        $(this).parent().find('.accordion-toggle').append('<div class="minus absolute top right margin-top-10 margin-right-10"><i class="opacity-3 right smallest general typoicon-minus"></i></div>');
	});
	$('.accordion-body').on('hide',function(event){
		$(this).parent().find('.accordion-toggle').find('.minus').remove();
		$(this).parent().find('.accordion-toggle').find('.plus').remove();
		$(this).parent().find('.accordion-toggle').append('<div class="plus absolute top right margin-top-10 margin-right-10"><i class=" opacity-3 right smallest general typoicon-plus"></i></div>');
	});
	$('.bouton-nous-rencontrer').magnificPopup({
		type: 'inline',
		preloader:'true',
		callbacks: {
		    open: function() {
		    	$('#map-bing').removeClass('hidden-phone');
		    },
			close: function() {
		    	$('#map-bing').addClass('hidden-phone');
		    }
		}
	});
	/*AFFICHAGE/MASQUAGE TEXT SUR MOBILE*/
	if(winW<840){
		$('.txt-agence').removeClass('hidden-phone');
		$('.txt-agence').addClass('display-none');
		$('.plus-text').addClass('general typoicon-plus');
		$('.bloc-txt-agence').on('click',function() {
			if($(this).children('.plus-text ').hasClass('typoicon-plus')){
				$(this).children('.plus-text ').removeClass('general typoicon-plus').addClass('general typoicon-minus');
			}else{
				$(this).children('.plus-text ').removeClass('general typoicon-minus').addClass('general typoicon-plus');
			}
			$('.txt-agence').slideToggle();
		});
		
	}
});