$(document).ready(function() {
	// NAV ESTIMATION
	$('input').each(function() {
		$(this).attr('autocomplete','off');
	});
	$('#navEstimation').children('li').each(function() {
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
			if(!$(this).hasClass('startLi')) {
				$(this).addClass('onLi');
			}
		});
		$(this).mouseout(function() {
			$(this).removeClass('onLi');
		});
		$(this).click(function() {
			var $current = $(this).parent().find('.startLi');
			var $index = $current.index();
			$(this).parent().parent().find('#formEstimation').children('fieldset').eq($index).hide();
			$current.removeClass('startLi');
			$(this).addClass('startLi');
			var $new_index= $(this).index();
			$(this).parent().parent().find('#formEstimation').children('fieldset').eq($new_index).show();
		});
	});
	$('#formEstimation').find('fieldset').each(function() {
		if($(this).index() == 0) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
	// EFFECT LABEL
	$('label').each(function() {
		$(this).mouseover(function() {
			$(this).addClass('hightLightRow');
			if($(this).parent().find('.pictoValidation').css('display') == 'none') {
				$(this).parent().find('.aideEstimation').show();
			}
		});
		$(this).mouseout(function() {
			$(this).removeClass('hightLightRow');
			if($(this).parent().find('.pictoValidation').css('display') == 'none') {
				$(this).parent().find('.aideEstimation').hide();
			}
		});
	});
	// TEST VALIDATION BOUTON
	$('.validateBouton').each(function() {
		var error;
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
			$(this).addClass('validateBoutonOn');
		});
		$(this).mouseout(function() {
			$(this).removeClass('validateBoutonOn');
		});
		/*$(this).click(function() {
			var validation = 0;
			var maxInput = $(this).parent().find("input[type=text]").length;
			$(this).parent().find("input[type=text]").each(function() {
				if($(this).val() == '') {
					$(this).parent().find('.pictoValidation').css('background','url(z/webagency/slagence_X_V4/images/pictos/errorEstimation.png)');
					$(this).parent().find('.aideEstimation').show();
				} else {
					$(this).attr('disabled',true);
					$(this).addClass('validationInput');
					$(this).parent().find('.pictoValidation').css('background','url(z/webagency/slagence_X_V4/images/pictos/okEstimation.png)');
					$(this).parent().find('.aideEstimation').hide();
					validation += 1;
				}
				$(this).parent().find('.pictoValidation').show();
			});
			if(validation == maxInput) {
				$(this).hide();
				$(this).parent().find('.modifyBouton').show();
			} else {
				return false;
			}
		});*/
	});
	// MODIFICATION BOUTON
	$('.modifyBouton').click(function() {
		$(this).parent().find("input[type=text]").each(function() {
			$(this).parent().find('.pictoValidation').css('background','url()');
			$(this).attr('disabled',false);
			$(this).removeClass('validationInput');
		});
		$(this).hide();
		$(this).parent().find('.validateBouton').show();
	});
	
});
$('form#formEstimation').submit(function(e) {
	e.preventDefault();
	var datas  = $(this).serialize();
   datas  = decodeURIComponent(datas);
	$.ajax({
          type: 'POST',      // envoi des données en POST
          url: 'estimation,geoloc.htm',     // envoi au fichier défini dans l'attribut action
          data: datas,     // sélection des champs à envoyer
          dataType:'html',
          success: function(msg) {     // callback en cas de succès
              // alert('success : '+datas);
          }
     });
});