/* START HOME */
function constructHome(divid,idtt,query,langue,maxAnnonces) {
	var search_full = 'idtt='+idtt+'&query='+query;
	var xhr = $.ajax({
		type: 'GET',
		data: search_full,
		dataType: 'html',
		url: '/module,berlin,home.htm?lang='+langue+'&maxmoduleberlin='+maxAnnonces,
		beforeSend: function() {
			$('#'+divid).addClass('waitModule');
			$('#'+divid).html('');
		},
		success: function(data) {
			$('#requete').val(search_full);
			$('#'+divid).html(data);
			$('#'+divid).removeClass('waitModule');
		},
		error: function(xhr,statusText) {
			//console.log(xhr.status);
		},
		complete: function(xhr,statusText) {
			//console.log(xhr.status);
		}
	});
}
/* GO AJAX SEARCH */
function searchAjax(divid) {
	$('.Bouton_Moteur').css('cursor','pointer');
	$('.Bouton_Moteur').click(function() {
		$(this).css('cursor','auto');
		$(this).attr('disabled',true);
		// DETERMINE VAR
		/*var idtt = 'idtt='+$('#idtt').val();
		var lang_sel = 'lang='+$('#lang').val();
		var idtb = 'idtypebien='+$('#idtypebien').val();
		var var_search = idtt+'&'+lang_sel+'&'+idtb;
		if($('#cp').val() != '') {
			var_search += '&cp='+$('#cp').val();
		}
		if($('#div').val() != '') {
			var_search += '&div='+$('#div').val();
		}
		if($('#ci').val() != '') {
			var_search += '&ci='+$('#ci').val();
		}
		if($('#idq').val() != '') {
			var_search += '&idq='+$('#idq').val();
		}*/
		$('#Moteur_Suggest').submit();
		/*var xhr = $.ajax({
			type: 'GET',
			data: var_search,
			dataType: 'html',
			url: '/module,berlin,recherche.htm',
			beforeSend: function() {
				$('#'+divid).html('');
				$('#'+divid).addClass('waitModule');
			},
			success: function(data) {
				$('#requete').val(var_search);
				$('.blocSearch').find('li').remove();
				$('#'+divid).removeClass('waitModule');
				$('#'+divid).html(data);
			},
			error: function(xhr,statusText) {
				$('#'+divid).addClass('waitModule');
				//console.log(xhr.status);
			},
			complete: function(xhr,statusText) {
				//console.log(xhr.status);
				$('.Bouton_Moteur').css('cursor','pointer');
				$('.Bouton_Moteur').attr('disabled',false);
			}
		});*/
	});
}
/* GO DETAIL */
function detailAnnonce(divid,idAnnonce) {
	var annonce = idAnnonce.split('annonce');
	var xhr = $.ajax({
			type: 'GET',
			data: 'idannonce='+annonce[1],
			dataType: 'html',
			url: '/module,berlin,detail.htm',
			beforeSend: function() {
				$('#'+divid).html('');
				$('#'+divid).addClass('waitModule');
			},
			success: function(data) {
				$('#'+divid).removeClass('waitModule');
				$('#'+divid).html(data);
			},
			error: function(xhr,statusText) {
				$('#'+divid).addClass('waitModule');
				//console.log(xhr.status);
			},
			complete: function(xhr,statusText) {
				//console.log(xhr.status);
				$('.Bouton_Moteur').css('cursor','pointer');
				$('.Bouton_Moteur').attr('disabled',false);
			}
	});
}
/* GESTION DES BLOCS ANNONCES */
function gestionAnnonce(divid) {
	$('.'+divid).each(function() {
	$(this).css('cursor','pointer');
		$(this).mouseover(function() {
			$(this).addClass('borderModuleOn');
			$(this).children('.infoModule').show();
		});
		$(this).mouseout(function() {
			$(this).removeClass('borderModuleOn');
			$(this).children('.infoModule').hide();
		});
		/*$(this).click(function() {
			detailAnnonce('blocCentral',$(this).attr('id'));
		});*/
	});
}
/* START AGAIN EX SEARCH */
function rechercherIdem(bouton,divid) {
	$('.'+bouton).css('cursor','pointer');
	$('.'+bouton).mouseover(function (){
		$(this).addClass('effectRolloverTxt');
	});
	$('.'+bouton).mouseout(function (){
		$(this).removeClass('effectRolloverTxt');
	});
	$('.'+bouton).click(function() {
		var xhr = $.ajax({
			type: 'GET',
			data: $('#requete').val(),
			dataType: 'html',
			url: '/module,berlin,recherche.htm',
			beforeSend: function() {
				$('#'+divid).html('');
				$('#'+divid).addClass('waitModule');
			},
			success: function(data) {
				$('#'+divid).removeClass('waitModule');
				$('#'+divid).html(data);
			},
			error: function(xhr,statusText) {
				$('#'+divid).addClass('waitModule');
				//console.log(xhr.status);
			},
			complete: function(xhr,statusText) {
				//console.log(xhr.status);
				$('.'+bouton).css('cursor','pointer');
				$('.'+bouton).attr('disabled',false);
			}
		});
	});
}
/* FUNCTION DETAIL PAGE */
function detailPage() {
	$('.eye').css('cursor','pointer');
	$('.eye').width(parseInt($('.ctn_detail img').attr('width')));
	$('.eye').height(parseInt($('.ctn_detail img').attr('height')));
	$('.eye').click(function() {
		if($('.test').hasClass('menuGalerieOn')) {
			$('.test').slideUp();
			$('.test').removeClass('menuGalerieOn');
		} else {
			$('.test').slideDown();
			$('.test').addClass('menuGalerieOn');
			$('#galeriePhoto li img').each(function() {
				$t = $(this);
				$t.css('cursor','pointer');
				$t.mouseover(function() {
					$(this).next('div').css('z-index','1000000');
					$(this).next('div').slideDown('fast');
				});
				$t.mouseout(function() {
					$(this).next('div').css('z-index','10000');
					$(this).next('div').fadeOut('fast');
				});
			});
		}
	});
}
/* FUNCTION GLOBAL RESIZE */
function resize() {
	
}