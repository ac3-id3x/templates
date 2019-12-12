/* SCRIPT MINI MOTEUR */
function ajaxGet(value_select, lng, divid, url_get, type_moteur, style_budget, val) {
	// HIDE TERRAIN
	$('#Mini_Surface_Terrain').hide();
	var split_elem = value_select.split('|');
	var length_elem = split_elem.length;
	var dataSend = '';
	for(i = 0; i < length_elem; i ++) {
			var value_elem = $("#"+split_elem[i]).val();
			var name_elem = $("#"+split_elem[i]).attr("name");
			dataSend += dataSend+name_elem+'='+value_elem+'&';
	}
	if(val) {
	  dataSend += val + '&';
	}
	if(style_budget != undefined) {
		dataSend += 'typemoteur='+type_moteur+'&lang='+lng+'&style_budget='+style_budget;
	} else {
		dataSend += 'typemoteur='+type_moteur+'&lang='+lng;
	}
	if($('#'+split_elem[0]).val() != '') {
		$("."+divid).each(function() {
		    $(this).show();
		});
		$.ajax({
			type: "GET",
			data: dataSend,
			dataType: "html",
			url: '/moteur,mini,incl_'+url_get+'.htm',
			beforeSend: function() {
				$("."+divid).each(function() {
					$(this).show();
				});
			},
			success: function(data) {
				$("."+divid).each(function() {
					$(this).show();
					$(this).html(data);
					if($("."+divid).find('select').hasClass("multiselect")){
						$("."+divid+" .multiselect").multipleSelect();
					};
				});
	 	 	},
	 	 	error: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	},
	 	 	complete: function(xhr,statusText) {
	 	 	}
		});
	}
}
/* CHOIX URL */
function ChoixURL(type_url) {
	var $div = $(".mini-moteur");
	if($div.length > 0) {
		if(type_url == 'carte') {
			$(".mini-moteur").attr("action","/recherche,carte.htm");
		} else {
			$(".mini-moteur").attr("action","/moteur,mini,prevalidation.htm");
		}
	}
}

//MINI MOTEUR MOBILE
var miniMoteurOther = $('#mini-mobile-type-other');
function changeMiniMobileType(type, el) {
      $(el).parent().siblings()
      		.removeClass('bg-block')
          .addClass('bg-block-gradient')
          .children('a')
              .removeClass('btn-idtt-selected')
              .removeClass('bold');     
      $(el)
          .parent()
          	  .addClass('bg-block')
              .removeClass('bg-block-gradient')
              .children('a')
              	 .addClass('btn-idtt-selected')
              	 .addClass('bold');

      var idttFieldMini = $('#idtt-mobile');
      if(type === 'other') {
          miniMoteurOther.slideDown();
          idttFieldMini.val(miniMoteurOther.find('select').val());  
      } else {
          miniMoteurOther.slideUp();
          idttFieldMini.val(''+type);
      }
  }
function changeSelectMiniMobileType(el) {
      $('#idtt-mobile').val($(el).val());
      $('.btn-other').attr('data-idtt',$(el).val())
  }
  
function initIdttField(){
	if($('#idtt-mobile').length) {	
		$('#idtt-mobile').val($('.btn-idtt-selected').attr('data-idtt'));
	}
}
//FIN MINI MOTEUR MOBILE
$(document).ready(function() {
	 initIdttField()
	//SWITCH TO PX MIN IF XXX€ ET +
	$('.moteur-avantage').on('change','#MiniSelectBudget',function () {
		if($(this).val().indexOf("/") == -1){
			var selectName = $('#MiniSelectBudget');
			selectName.attr('name','pxmin');
		}
	});
	//affiche param viager
	$('.moteur-avantage').on('change','#idtt',function () {
		if( $(this).val() == "5" ){
			$("#Mini_Typeviager").show();
		}else{
			$("#Mini_Typeviager").hide();
		}
	});
	if( $("#idtt").val() == "5" ){
		$("#Mini_Typeviager").show();
	}else{
		$("#Mini_Typeviager").hide();
	}

	$('.bouton-rechercher-moteur').on('click',function () {
		// DELETE VAL
		$('#saisie-suggest').val('');
		if($(this).closest('form').find('.placeholder')){
			$(this).closest('form').find('.placeholder').each(function() {
		    var input = $(this);
		    if (input.val() == input.attr('data-value')) {
		      input.val('');
		    }
		  });
		}
		// LOADING BTN
		var btn = $(this)
		btn.button('loading');
		// FIXING TO ROLLBACK STATUS BTN
		setTimeout(function () {
            btn.button('reset');
            $('#saisie-suggest').val($('#saisie-suggest').attr('data-value'));
        }, 2000)
		$(btn).closest("form").submit();
		
	})
	$('.mini-moteur').on('focusin','.moteur-input-change', function(e) {
		this.getValue = $(this).attr('data-placeholder');
		$(this).val('');
		$(this).on('focusout',function () {
			if($(this).val() == '') {
				$(this).val(this.getValue);
			}
		});
	});
	$('.mini-moteur').on('change','#idtypebien', function(e) {
		if($(this).val() == 4) {
			$('#Mini_Surface_Terrain').show();
		} else {
			$('#Mini_Surface_Terrain').hide();
		}
	});
	//SI DEPT ET VILLE PASSAGE DE DEPT A VIDE POUR REPONSE DE RECHERCHE EXACTE
	$('.mini-moteur').on('change','#ciDept', function(e) {
		$('#cp').children('option:selected').attr('selected',false);
	});
	//UNIQUEMENT SI MOTEUR PERSO
	$('#moteur-recherche-perso').on('change','#cpVilles', function(e) {
		$('#cp').children('option:selected').attr('selected',false);
	});
	$('#moteur-recherche-perso').on('change','#ciDept', function(e) {
		$('#cp').children('option:selected').attr('selected',false);
	});
	//CHANGE IDTT VIDE ACTIVIT2S
	$('.mini-moteur').on('change','#idtt', function(e) {
		$('#Mini_Activites').html('');
	});
	//GESTION FAKE PLACEHOLDER VILLE LIBRE
	$('.moteur-avantage').on('focus','.placeholder',function(e) {
	  var input = $(this);
	  if (input.val() == input.attr('data-value')) {
	    input.val('');
	  }
	}).on('blur','.placeholder',function(e) {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('data-value')) {
	    input.val(input.attr('data-value'));
	  }
	});
});
