var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');

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
					container.html(container.html() + html);
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
				if (hasMaps) {
					// render map if needed.
					var mapContainer = (slider ?
						(slider.children() ?
							(slider.children().children() ?
								slider.children().children()[0]
								: null)
							: null) 
						: null);
					
					if (mapContainer != null && id3xContent != null) {
						id3xContent.addMap({
							container: {id: mapContainer.id},
							mapData: [{
								mapDataType: 'AGENCIES',
								marker: { icon: {defaultIcon: {color: id3xContent.values.colorMarker}}, popup: true },
								filters: [ {action: 'single', key: 'idPublication', value: mapContainer.dataset.rel} ]
							}]
						});
					}
					// map rendering (END)
				}
			});
		}
	}
	if(callback) {
		callback();
	}
}

$(document).ready(function () {
    // BOUTON SLIDER
    $('.zone-agence-ajax, .detail-agence-liste').on('click', '.bouton-message-agence, .bouton-carte-agence, .bouton-biens-agence, div[class*="bouton-biens-agence"]', function (e) {
        e.preventDefault();
        var testBiens = 0, testCarte = 0, className = $(this).attr('class');
        
        if ($(this).hasClass('bouton-carte-agence')) {
            var ThisBloc = $(this).parent().parent().parent().children('.zone-carte-agence');
            testCarte = 1;
        } else if (className.indexOf('bouton-biens-agence') > -1) {
            var ThisBloc = $(this).parent().parent().parent().children('.zone-biens-agence');
            var testBiens = 1;
        } else {
            var ThisBloc = $(this).parent().parent().parent().children('.zone-message-agence');
        }
        // IF TEST CARTE
        if (testCarte == 1) {
            hasMaps = true;
        } else if (testBiens == 1) {
            searchListeBiens($(this).attr('data-rel'), ThisBloc, $(this).attr('data-langue'));
        }
        var blocOpen = $('div').find('.blocOpen');
        if (blocOpen.hasClass('blocOpen')) {
            sliderAgence(blocOpen, function () {
                sliderAgence(ThisBloc);
            });
        } else {
            sliderAgence(ThisBloc);
        }
    });

    // TRI AGENCES
    $('#triAgences').change(function () {
        var valTri = $(this).val();
        var lien = $('#form-tri').attr('action');
        if (valTri.length > 0) {
            if (lien.indexOf('?') > 0) {
                lien += '&tri=' + valTri;
            } else {
                lien += '?tri=' + valTri;
            }
        }
        window.location.href = lien;
    });

    // TRI AGENCES
    $('.filtre-agence').change(function () {
        if ($(this).attr("name") == "cp") {
            $("#filtre-ci").val("");
        }
        var cp = $("#filtre-cp").val();
        var ci = $("#filtre-ci").val();
        if (ci) {
            var filtre = "?cp=" + ci + "&dep=" + cp;
        } else if (cp) {
            var filtre = "?cp=" + cp + "&dep=" + cp;
        } else {
            var filtre = "";
        }
        //console.log('/agences,liste.htm' + filtre);
        window.location.href = '/agences,liste.htm' + filtre;
    });

    // AFFICHAGE/MASQUAGE TEXTE SUR MOBILE
    if (winW < 840) {
        $('.txt-agence').removeClass('hidden-phone');
        $('.txt-agence').addClass('display-none');
        $('.plus-text').addClass('general typoicon-plus');
        $('.phrase-agences').on('click', function () {
            if ($(this).parent().children('.plus-text ').html() == '+') {
                $(this).parent().children('.plus-text ').html('-');
            } else {
                $(this).parent().children('.plus-text ').html('+');
            }
            $('.txt-agence').slideToggle();
        });
    }
});
