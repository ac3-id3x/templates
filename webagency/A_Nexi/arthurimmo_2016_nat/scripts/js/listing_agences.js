var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');
var geoMap = null, geoMapId = eval('geoMapId'), _FRANCE = " FRANCE", pageAcquerir, pageEstimation;

var regexesLocation = [
	 //[ Boolean, new RegExp(), String « new value » ]
	 [ false, new RegExp(/^(06000 nice|06200|nice)$/), "Grimaldi" ]
	,[ false, new RegExp(/^(06200 nice|06200|nice)$/), "Cordier" ]
	,[ false, new RegExp(/^(06270 villeneuve\+loubet|06270|villeneuve\+loubet)$/), "Juin" ]
	,[ false, new RegExp(/^(12100 millau|12100|millau)$/), "Barry" ]
	,[ false, new RegExp(/^(13500 martigues|13500|martigues)$/), "Chave" ]
	,[ false, new RegExp(/^(17000 la\+rochelle|17000|la\+rochelle)$/), "Joncs" ]
	,[ false, new RegExp(/^(17390 la\+tremblade|17390|la\+tremblade)$/), "Foran" ]
	,[ false, new RegExp(/^(20260 calvi|20260|calvi)$/), "Plena" ]
	,[ false, new RegExp(/^(25000 besancon|25000|besancon)$/), "Carmes" ]
	,[ false, new RegExp(/^(33230 coutras|33230|coutras)$/), "Valmy" ]
	,[ false, new RegExp(/^(34000 montpellier|34000|montpellier)$/), "Miro" ]
	,[ false, new RegExp(/^(34150 gignac|34150|gignac)$/), "Canalet" ]
	,[ true,  new RegExp(/^(38490 les abrets-en-dauphiné|38490|les abrets-en-dauphiné)$/), "38490 Les Abrets" + _FRANCE ]
	,[ false, new RegExp(/^(38510 vézeronce-curtin|38510|vézeronce-curtin)$/), "Levaz" ]
	,[ false, new RegExp(/^(40200 mimizan|40200|mimizan)$/), "Degas" ]
	,[ false, new RegExp(/^(42330 saint-galmier|42330|saint-galmier)$/), "Dupuy" ]
	,[ false, new RegExp(/^(45000 orléans|45000|orléans)$/), "Royale" ]
	,[ false, new RegExp(/^(47550 boé|47550|boé)$/), "Neveu" ]
	,[ false, new RegExp(/^(54000 nancy|54000|nancy)$/), "Lamour" ]
	,[ false, new RegExp(/^(56400 brech|brech)$/), "Roses" ]
	,[ false, new RegExp(/^(56400 le\+bono|le\+bono)$/), "Hoche" ]
	,[ false, new RegExp(/^(64000 pau|64000|pau)$/), "Garet" ]
	,[ false, new RegExp(/^(65800 orleix|65800|orleix)$/), "Cibat" ]
	,[ false, new RegExp(/^(67000 strasbourg|67000|strasbourg)$/), "Clément" ]
	,[ false, new RegExp(/^(67500 haguenau|67500|haguenau)$/), "Foch" ]
	,[ false, new RegExp(/^(73420 viviers-du-lac|73420|viviers-du-lac)$/), "Laitière" ]
	,[ false, new RegExp(/^(76600 le\+havre|76600|le\+havre)$/), "Chillou" ]
	,[ false, new RegExp(/^(77176 savigny-le-temple|77176|savigny-le-temple)$/), "Hulotte" ]
	,[ false, new RegExp(/^(77310 saint-fargeau-ponthierry|77310|saint-fargeau-ponthierry)$/), "Boulay" ]
	,[ true,  new RegExp(/^(77580 crécy-la-chapelle|77580 crécy la chapelle|77580 crecy-la-chapelle|77580 crecy la chapelle|crecy-la-chapelle|crecy la chapelle|crécy-la-chapelle|crécy la chapelle)$/), "Crécy-la-Chapelle Loges" ]
	,[ false, new RegExp(/^(83120 sainte-maxime|83120|sainte-maxime)$/), "Etienne" ]
	,[ false, new RegExp(/^(83140 six-fours-les-plages|83140|six-fours-les-plages)$/), "Stade" ]
	,[ false, new RegExp(/^(83170 brignoles|83170|brignoles)$/), "Broquier" ]
	,[ true,  new RegExp(/^(83371 saint-aygulf|83371|saint-aygulf)$/), "saint-aygulf var" + _FRANCE ]
	,[ false, new RegExp(/^(83600 fréjus|83600|fréjus)$/), "Couvent" ]
	,[ false, new RegExp(/^(83700 saint-raphaël|83700|saint-raphaël)$/), "Basso" ]
	,[ false, new RegExp(/^(83980 le\+lavandou|83980|le\+lavandou)$/), "Stade" ]
	,[ false, new RegExp(/^(85300 challans|85300|challans)$/), "Gobin" ]
	,[ false, new RegExp(/^(85470 bretignolles-sur-mer|85470|bretignolles-sur-mer)$/), "Bel Air" ]
	,[ true,  new RegExp(/^(87260|saint-paul|saint paul|st-paul|st paul)$/), "87260 Saint Paul" + _FRANCE ]
	,[ false, new RegExp(/^(91090 lisses|91090|lisses)$/), "Valois" ]
	,[ false, new RegExp(/^(94190 villeneuve-saint-georges|94190|villeneuve-saint-georges)$/), "Duruy" ]
	,[ true,  new RegExp(/^(97400|97400 saint-denis|97400 saint denis)$/), "Saint-Denis, La Réunion" ]
	,[ true,  new RegExp(/^(97410|97410 saint-pierre|97410 saint pierre)$/), "Saint-Pierre, La Réunion" ]
	,[ true,  new RegExp(/^(alpes-maritimes|alpes maritimes)$/), "Alpes-Maritimes paca" ]
	,[ true,  new RegExp(/^(aulnay)$/), "17470 Aulnay" ]
	,[ true,  new RegExp(/^(chambly)$/), "60 Chambly" + _FRANCE ]
	,[ true,  new RegExp(/^(laval)$/), "53000 Laval" + _FRANCE ]
	,[ true,  new RegExp(/^(la rochelle)$/), "17000 La Rochelle" + _FRANCE ]
	,[ true,  new RegExp(/^(la tour du pin')$/), "la Tour du Pin" + _FRANCE ]
	,[ true,  new RegExp(/^(loire)$/), "42" + _FRANCE ]
	,[ true,  new RegExp(/^(paris 11)$/), "rue Faidherbe Paris 11" + _FRANCE ]
	,[ true,  new RegExp(/^(paris 12)$/), "paris 12ème" + _FRANCE ]
	,[ true,  new RegExp(/^(pont de vaux)$/), "Pont de Vaux" + _FRANCE ]
	,[ true,  new RegExp(/^(salles)$/), "33770 Salles" + _FRANCE ]
];

// FUNCTION GEO
function setLocationUserVal(value, list) {
    var _value = decodeURI(value);
	var _matched = false, searchString = value, lrValue = _value.toLowerCase();
	//console.log(">>> VALUE : <>" + _value + "<>");
	
    if (lrValue.match(/^(ain|finistere|finistère|nord|somme|albert|ham)$/)) searchString = searchString + _FRANCE;
	
	for (v = 0; v < list.length; v++) {
		if (!_matched) {
			if (lrValue.match(list[v][1])) searchString = (list[v][0] ? list[v][2] : (searchString + " " + list[v][2]) );
		}
		else {
			break;
		}
	}
	
    return searchString;
}

function updateGeoMap(searchString, postCode) {
	if (geoMap == null) geoMap = id3xContent.getMap({ typeSearch: 1, search: geoMapId });
	if (geoMap != null) {
		var _postCode = null;
		if (postCode != null) _postCode = (postCode.toString().match(/^(13500|25000|29200|29600|33480|40200|40600|45000|65100|67500|77300|80200|83170|83700|92000)$/) ? postCode : null);
		
		id3xContent.geolocation.manager.sendRequestToGeolocationApi({
            address: setLocationUserVal(searchString.trim(), regexesLocation),
            business: '1',
            mapObject: geoMap,
			postCode: _postCode
        });
    }
}

// AJAX / JSON SEARCH BIENS
function searchListeBiens(idPublication, blocBiens, langue) {
    if (!blocBiens.hasClass('searchDone')) {
        $.ajax({
            type: "GET",
            data: 'idpublication=' + idPublication + '&lang=' + langue,
            dataType: 'json',
            url: '/agences,search_liste_biens.htm',
            beforeSend: function () { },
            success: function (data) {
                var container = blocBiens.children('.liste-biens');
                // IF TRANSACTION
                if (data.transaction) {
                    var idttLength = data.transaction.length;
                    var html = '<ul class="nav nav-pills nav-stacked nav-biens-agence">';
                    for (i = 0; i < idttLength; i++) {
                        html += '<li><a href="' + data.transaction[i].url + '">' + data.transaction[i].nbannonces + ' ' + data.transaction[i].name + '</a></li>';
                    }
                    html += '</ul>';
                    container.html(container.html() + html);
                } else {
                    container.append(data.message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR, textStatus, errorThrown); },
            complete: function () {
                blocBiens.addClass('searchDone');
            }
        });
    } else {
        return false;
    }
}

// SLIDER
function sliderAgence(slider, callback) {
    if ($('html').hasClass('ie7')) {
        if (slider.hasClass('blocOpen')) {
            slider.addClass('display-none').removeClass('blocOpen').removeClass('display-show');
        } else {
            slider.addClass('display-show').addClass('blocOpen');
        }
    } else {
        if (slider.hasClass('blocOpen')) {
            slider.slideUp(200, 'swing', function () {
                $(this).removeClass('blocOpen');
            });
        } else {
            slider.slideDown(300, 'swing', function () {
                $(this).addClass('blocOpen');
            });
        }
    }
    if (callback) {
        callback();
    }
}
	
function goEstimation(e) {
    if (pageEstimation == 1) {
        window.location.href = '/' + e.target.IDP + '/estimation,immobiliere.htm';
    } else if (pageAcquerir == 1) {
        window.location.href = '/' + e.target.IDP + '/acquereur,demande.htm';
    } else {
        return false;
    }
}

function btnclick(deptreg){
	//console.log('\r\ndeptreg'); console.log(deptreg);
	$('.bloc-btn-agence').on('click','.btn',function(e){
		e.preventDefault();
		document.location.href = "/agences,liste.htm?dept=" + deptreg;
	});
}

$(document).ready(function () {
    // ===============================================
    // == SELECT AGENCES ==
    // ===============================================
	//$('.select-regions').val("");
	//$('.select-regions').on('change',function(){
	//	var deptreg = $(this).val();
	//	var xhr = $.ajax({
	//		type: 'GET',
	//		data:"region="+deptreg,
	//		dataType: 'html',
	//		url: '/scripts,ajax_dept.htm',
	//		beforeSend: function() {
	//			$('.select-dept').html("<option>chargement</option>");
	//			$('.select-dept').addClass('opacity-2');
	//			$('.select-dept').prop('disabled', 'disabled');
	//		},
	//		success: function(data) {
	//			$('.select-dept').removeClass('opacity-2');
	//			$('.select-dept').prop('disabled', false);
	//			$('.select-dept').html(data);
	//		},error:function() {
	//		},complete:function() {
	//		}
	//	});
	//	btnclick(deptreg);
	//});
	
	//$('.select-agence').val("");
	//$('.select-agence').on('change',function(){
	//	var deptreg = $(this).val();
	//	//console.log("\r\ndeptreg");console.log(deptreg);
	//	btnclick(deptreg);
	//	updateGeoMap(deptreg, null);
	//});
	
	//$('.select-dept').val("");
	//$('.select-dept').on('change',function(e){
		//console.log("\r\nselected");console.log($(this).find(':selected')[0].innerHTML);
		
		//var deptreg = 'µ' + $(this).find(':selected').data("cp");
		//console.log("\r\ndeptreg");console.log(deptreg);
		//btnclick(deptreg);
		//updateGeoMap($(this).find(':selected')[0].innerHTML, null);
		
		//$.ajax({
		//	type: 'GET',
		//	data:"cp="+$(this).find(':selected').data("cp"),
		//	dataType: 'html',
		//	url: '/scripts,ajax_ville.htm',
		//	beforeSend: function() {
		//		$('.select-ville').html("<option>chargement</option>");
		//		$('.select-ville').addClass('opacity-2');
		//		$('.select-ville').prop('disabled', 'disabled');
		//	},
		//	complete:function() {},
		//	error:function() {},
		//	success: function(data) {
		//		//console.log("\r\ndata");console.log(data);
		//		$('.select-ville').removeClass('opacity-2');
		//		$('.select-ville').prop('disabled', false);
		//		$('.select-ville').html(data);
		//	}
		//});
	//});
	
	$('.select-ville').val("");
	$('.select-ville').on('change', function(e) {
		if (e.target.selectedIndex > 0) {
			var deptreg = $(this).val();
			//console.log("\r\ndeptreg");console.log(deptreg);
			btnclick(deptreg);
			updateGeoMap(deptreg, $(this).find(':selected').data("cp"));
			
			if ($('.select-agence').prop('selectedIndex') > 0) $('.select-agence').val('').trigger('change');
			if ($('.select-dept').prop('selectedIndex') > 0) $('.select-dept').val('').trigger('change');
		}
	});
	
	
    // BOUTON SLIDER
    $('.zone-agence-ajax, .detail-agence-liste').on('click', '.bouton-message-agence, .bouton-carte-agence, .bouton-biens-agence, div[class*="bouton-biens-agence"]', function (e) {
        e.preventDefault();
        var testCarte = 0;
        var testBiens = 0;
        var className = $(this).attr('class');
        //console.log($(this).attr('class'));
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
            var zoneMap = ThisBloc.children().children().attr('id');
            var idZoneMap = ThisBloc.children().children().attr('data-rel');
            fixPinAgenceClick(zoneMap, idZoneMap, arrayOfAgencies);
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

    // GEOLOC USER
    $('.bouton-search-user').click(function (e) {
        e.preventDefault();
        updateGeoMap($('#searchGeolocUser').val(), null);
    });

    $('#searchGeolocUser').keydown(function (e) {
        if (e.keyCode == 13) {
            updateGeoMap($('#searchGeolocUser').val(), null);
        }
    });

    //AFFICHAGE/MASQUAGE TEXT SUR MOBILE
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
