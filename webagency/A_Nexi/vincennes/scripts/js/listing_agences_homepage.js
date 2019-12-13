var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');

$(document).ready(function() {
   // BOUTON SLIDER
   $('.zone-agence-ajax, .detail-agence-liste').on('click','.bouton-message-agence, .bouton-carte-agence, .bouton-biens-agence, div[class*="bouton-biens-agence"]', function(e) {
      e.preventDefault();
      var testCarte = 0;
      var testBiens = 0;
      var className = $(this).attr('class');
      //console.log($(this).attr('class'));
      if($(this).hasClass('bouton-carte-agence')) {
         var ThisBloc = $(this).parent().parent().parent().children('.zone-carte-agence');
         testCarte = 1;
      } else if(className.indexOf('bouton-biens-agence')>-1) {
         var ThisBloc = $(this).parent().parent().parent().children('.zone-biens-agence');
         var testBiens = 1;
      } else {
         var ThisBloc = $(this).parent().parent().parent().children('.zone-message-agence');
      }
	  
      // IF TEST BIENS
	  if(testBiens == 1) {
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
   
   // GEOLOC
   if (navigator.geolocation) {
      var btn = $('.bouton-geolocalisation');
      btn.click(function(e) {
         e.preventDefault();
         var watchId = navigator.geolocation.getCurrentPosition(successGeoloc,errorGeoloc,{enableHighAccuracy:true,timeout:10000,maximumAge:120000})
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


// FUNCTION

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

// FUNCTION GEO
var firstMap = null;
function getGeoloc() {
	// RESET
	if (firstMap == null) {
		var _list = id3xContent.geolocation.manager.mapObjectList;
		if (_list.length > 0) firstMap = _list[0].map;
	}
	
	if (firstMap != null) {
		var place = '';
		var cp = $('.select-dept').find("option:selected").data("cp");
		var ville = $('.select-ville').find("option:selected").data("ville");
		var region = $('.select-reg').val();
		var valeurcp = $('.select-dept').val();
		var valeurville = $('.select-ville').val();

		if (region && region != "undefined") place = region;
		if (valeurcp && valeurcp != "undefined" && region) place = place + " " + cp;
		if (valeurville && valeurville != "undefined" && region  && valeurcp) place = place + " " + ville;
		if (region && !valeurcp && !valeurville ) place = "Région " + place;
		place = place + " FRANCE";
		
		if (place.length > 2) {
			$.ajax({
				type: "GET",
				data : 'q='+encodeURI(place),
				dataType:'json',
				url: id3xContent.geolocation.manager.api.geolocation.url,
				beforeSend: function() {},
				success: function(result) {
					if (result != null) {
						if (result.features != null) {
							var _features = Array.isArray(result.features) ? result.features[0] : result.features;
							if (_features.geometry != null) {
								var coord = _features.geometry.coordinates != null ? _features.geometry.coordinates : null;
								if (coord != null) { firstMap.setView([coord[1], coord[0]], (ville != null && ville != undefined ? 13 : 8)); }
							}
						}
					}
				},
				error : function (jqXHR, textStatus, errorThrown) {console.log(jqXHR, textStatus, errorThrown);},
				complete: function() {}
			});
		} 
		else {
			console.log("ERREUR GEOLOC");
		}
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
