var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');

// FUNCTION GEO
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

// AJAX / JSON SEARCH BIENS
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

$(document).ready(function() {
	// BOUTON SLIDER
	$('.detail-agence-liste').on('click','.bouton-message-agence, .bouton-carte-agence, .bouton-biens-agence, div[class*="bouton-biens-agence"]', function(e) {		
		e.preventDefault();
		var testCarte = 0;
		var testBiens = 0;
		var className = $(this).attr('class');
		if($(this).hasClass('bouton-carte-agence')) {
			var ThisBloc = $(this).parent().parent().parent().children('.zone-carte-agence');
			testCarte = 1;
		} else if(className.indexOf('bouton-biens-agence')>-1) {
			var ThisBloc = $(this).closest(".detail-agence-liste").children('.zone-biens-agence');
			var testBiens = 1;
		} else {
			var ThisBloc = $(this).parent().parent().parent().children('.zone-message-agence');
		}
		// IF TEST CARTE
		if (testBiens == 1) {
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
	// TRI AGENCES
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
	// TRI AGENCES
	$('.filtre-agence').change(function() {
		if( $(this).attr("name") == "cp" ){
			$("#filtre-ci").val("");
		}
		var cp = $("#filtre-cp").val();
		var ci = $("#filtre-ci").val();
		if( ci ){
			var filtre = "?cp="+ci+"&dep="+cp;
		}else if(cp){
			var filtre = "?cp="+cp+"&dep="+cp;
		}else{
			var filtre = "";
		}
		//console.log('/agences,liste.htm' + filtre);
		window.location.href = '/agences,liste.htm' + filtre;
	});
	
	// GEOLOC
	if(navigator.geolocation) {
		var btn = $('.bouton-geolocalisation');
		btn.click(function(e) {
			e.preventDefault();
			var watchId = navigator.geolocation.getCurrentPosition(successGeoloc, errorGeoloc, {enableHighAccuracy:true, timeout:10000, maximumAge:120000});
		});
	} else {
		$('.bouton-geolocalisation').remove();
	}
	// AFFICHAGE/MASQUAGE TEXT SUR MOBILE
	if(winW<840){
		$('.txt-agence').removeClass('hidden-phone');
		$('.txt-agence').addClass('display-none');
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
