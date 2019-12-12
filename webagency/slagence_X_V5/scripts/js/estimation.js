var stepCheck = 0;
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^[0-9]{4,}$','i');
var params_estimation_ajax_post = null;

$(document).ready(function() {
	// BOUTON SLIDER
	$('.bouton-etape').on('click',function(e) {
		e.preventDefault();
		var getForm = $('#form-estimation').attr('data-rel');
		var step = $(this).attr('data-step');
		$('.tooltip').hide();
		// STEP 2
		if(step == 2) {
			if(validation.idtt.length > 0) {
				$('.message-erreur-step-1-idtt').hide();
			} else {
				$('.message-erreur-step-1-idtt').show();
			}
			if(validation.idtypebien.length > 0) {
				$('.message-erreur-step-1-idtypebien').hide();
			} else {
				$('.message-erreur-step-1-idtypebien').show();
			}
			if(validation.idtypebien.length > 0 && validation.idtt.length > 0) {
				// SLIDER
				sliderEtape($('#'+$(this).attr('data-rel')));
				// CHANGE BUTTON
				var boutonEtape = $('.'+$(this).attr('data-rel'));
				$(this).parent().children(boutonEtape).removeClass('display-none');
				$(this).remove();
				// GO HASH
				goHash('#'+$(this).attr('data-rel'));
				// CHANGE STEP 1
				$('.etape-1').addClass('valid');
				stepCheck = 1;
				if(validation.idtypebien == 2){
					if($('#etage').length > 0){
						var houseLabel= $('#etage').parent().children('label').attr('data-house');
						$('#etage').parent().children('label').html(houseLabel);
					}
				}
			}
		// STEP 3
		} else if(step == 3) {
			if($('#surface').val().length > 0) {
				// CSS
				if(isNaN($('#surface').val())) {
					$('.message-erreur-step-2-surface').show();
					$('#surface').parent().addClass('error');
				} else {
					$('.message-erreur-step-2-surface').hide();
					$('#surface').parent().addClass('success').removeClass('error');
					validation.surface = $('#surface').val();
				}
			} else {
				$('.message-erreur-step-2-surface').show();
				$('#surface').parent().addClass('error');
			}
			if($('#villeBien').val().length > 0) {
				$('.message-erreur-step-2-ville').hide();
				$('#villeBien').parent().addClass('success').removeClass('error');
				validation.villebien = $('#villeBien').val();
			} else {
				$('.message-erreur-step-2-ville').show();
				$('#villeBien').parent().addClass('error');
			}
			if($('#pieces').val().length > 0) {
				if(isNaN($('#pieces').val())) {
					$('.message-erreur-step-2-pieces').show();
					$('#pieces').parent().addClass('error');
				} else {
					$('.message-erreur-step-2-pieces').hide();
					$('#pieces').parent().addClass('success').removeClass('error');
					validation.pieces = $('#pieces').val();
				}
			} else {
				$('.message-erreur-step-2-pieces').show();
				$('#pieces').parent().addClass('error');
			}
			if(getForm == 'acquerir') {
				if($('#budget').val().length > 0) {
					$('.message-erreur-step-2-budget').hide();
					$('#budget').parent().addClass('success').removeClass('error');
					validation.budget = $('#budget').val();
				} else {
					$('.message-erreur-step-2-budget').show();
					$('#budget').parent().addClass('error');
				}
				if($('#etage').hasClass('required')) {
					if($('#etage').val().length > 0) {
						$('.message-erreur-step-2-etage').hide();
						$('#etage').parent().addClass('success').removeClass('error');
						validation.etage = $('#etage').val();
					} else {
						$('.message-erreur-step-2-etage').show();
						$('#etage').parent().addClass('error');
					}
				}else{
					$('.message-erreur-step-2-etage').hide();
					$('#etage').parent().addClass('success').removeClass('error');
					if($('#etage').val().length > 0) {
						validation.etage = $('#etage').val();
					} else {
						validation.etage = '*';
					}
				}
			}
			if($('#cp').val().length > 0) {
				if(isNaN($('#cp').val())) {
					$('.message-erreur-step-2-cp').show();
					$('#cp').parent().addClass('error');
				} else {
					$('.message-erreur-step-2-cp').hide();
					$('#cp').parent().addClass('success').removeClass('error');
					validation.codepostal = $('#cp').val();
				}
			} else {
				$('.message-erreur-step-2-cp').show();
				$('#cp').parent().addClass('error');
			}
			if($('#message').val().length > 0) {
				validation.message = $('#message').val();
			}
			// FIN
			if(getForm == 'estimation') {
				if(validation.surface.length > 0 && validation.villebien.length > 0 && validation.pieces.length > 0 && validation.codepostal.length > 0) {
					// SLIDER
					sliderEtape($('#'+$(this).attr('data-rel')));
					// CHANGE BUTTON
					var boutonEtape = $('.'+$(this).attr('data-rel'));
					$(this).parent().children(boutonEtape).removeClass('display-none');
					$(this).remove();
					// GO HASH
					goHash('#'+$(this).attr('data-rel'));
					// CHANGE STEP 2
					$('.etape-2').addClass('valid');
					// ADD STEP
					stepCheck = 2;
				}
			} else if(getForm == 'acquerir') {
				if(validation.surface.length > 0 && validation.villebien.length > 0 && validation.pieces.length > 0 && validation.codepostal.length > 0 && validation.budget.length > 0 && validation.etage.length > 0) {
					// SLIDER
					sliderEtape($('#'+$(this).attr('data-rel')));
					// CHANGE BUTTON
					var boutonEtape = $('.'+$(this).attr('data-rel'));
					$(this).parent().children(boutonEtape).removeClass('display-none');
					$(this).remove();
					// GO HASH
					goHash('#'+$(this).attr('data-rel'));
					// CHANGE STEP 2
					$('.etape-2').addClass('valid');
					// ADD STEP
					stepCheck = 2;
				}
			} else {
				return false;
			}
		}
	});
	$('.btn-estimation-transaction').on('click',function(e) {
		var btn = $(this);
		e.preventDefault();
		if(btn.hasClass('transactionOK')) {
			btn.addClass('btn-neutre').removeClass('btn-action').removeClass('transactionOK');
			validation.idtt = '';
			$('#typetransaction').val('');
		} else {
			btn.addClass('btn-action').addClass('transactionOK').removeClass('btn-neutre');
			$('.btn-estimation-transaction').each(function() {
				$(this).not(btn).addClass('btn-neutre').removeClass('btn-action').removeClass('transactionOK');
			});
			validation.idtt = btn.attr('data-idtt');
			$('#typetransaction').val(validation.idtt);
		}
	});
	$('.btn-estimation-bien').on('click',function(e) {
		var btn = $(this);
		e.preventDefault();
		if(btn.hasClass('bienOK')) {
			btn.addClass('btn-neutre').removeClass('btn-action').removeClass('bienOK');
			validation.idtypebien = '';
			$('#typebien').val('');
		} else {
			btn.addClass('btn-action').addClass('bienOK').removeClass('btn-neutre');
			$('.btn-estimation-bien').each(function() {
				$(this).not(btn).addClass('btn-neutre').removeClass('btn-action').removeClass('bienOK');
			});
			validation.idtypebien = btn.attr('data-idtypebien');
			$('#typebien').val(validation.idtypebien);
		}
	});
	$('.btn-estimation-envoyer').on('click',function(e) {
		e.preventDefault();
		// CHECK STEP 3
		if($('#nom').val().length > 0) {
			$('.message-erreur-step-3-nom').hide();
			$('#nom').parent().addClass('success').removeClass('error');
			validation.nom = $('#nom').val();
		} else {
			$('.message-erreur-step-3-nom').show();
			$('#nom').parent().addClass('error');
		}
		if($('#ville').val().length > 0) {
			$('.message-erreur-step-3-ville').hide();
			$('#ville').parent().addClass('success').removeClass('error');
			validation.ville = $('#ville').val();
		} else {
			$('.message-erreur-step-3-ville').show();
			$('#ville').parent().addClass('error');
		}
		if($('#tel').val().length > 0) {
			if(regTel.test($('#tel').val())) {
				$('.message-erreur-step-3-tel').hide();
				$('#tel').parent().addClass('success').removeClass('error');
				validation.telephone = $('#tel').val();
			} else {
				$('.message-erreur-step-3-tel').show();
				$('#tel').parent().addClass('error');
			}
		} else {
			$('.message-erreur-step-3-tel').show();
			$('#tel').parent().addClass('error');
		}
		if($('#email').val().length > 0) {
			if(regEmail.test($('#email').val())) {
				$('.message-erreur-step-3-email').hide();
				$('#email').parent().addClass('success').removeClass('error');
				validation.email = $('#email').val();
			} else {
				$('.message-erreur-step-3-email').show();
				$('#email').parent().addClass('error');
			}
		} else {
			$('.message-erreur-step-3-email').show();
			$('#email').parent().addClass('error');
		}
		if(validation.nom.length > 0 && validation.ville.length > 0 && validation.telephone.length > 0 && validation.email.length > 0 && regEmail.test(validation.email)) {
			stepCheck = 3;
		}
		// CHECK ALL BEFORE SEND
		if(stepCheck == 3) {
			// CHANGE STEP 3
			$('.etape-3').addClass('valid');
			var btn = $(this);
			btn.button('loading');
			
			// standard mode, OR use Recaptcha Google
			if (recaptcha_google_disabled) {
				sendAjaxPostEstimation({ btn: btn });
			}
			else {
				params_estimation_ajax_post = { btn: btn };
				useGoogleRecaptcha({ final_steps: "sendAjaxPostEstimation(params_estimation_ajax_post);" });
			}
		}
	});
});
// FUNCTION
function sendAjaxPostEstimation(p) {
    // p = { btn: Object }
	$.ajax({
		type: "POST",
		data : $('#form-estimation').serialize(),
		dataType:'json',
		url: '/estimation,estimation_verif.htm',
		beforeSend: function() {
			$('.message-erreur-form').html('');
		},
		success: function(data) {
			if(data.message.length == 0) {
				$('.message-erreur-form').html(messageOK);
				p.btn.button('reset');
				p.btn.html(boutonOK);
				p.btn.unbind('click');
				p.btn.css('cursor','hand');
			} else {
				$('.message-erreur-form').html(data.message);
			}
		},
		error : function (jqXHR, textStatus, errorThrown) {
			//console.log(jqXHR, textStatus, errorThrown);
		},
		complete: function() {
			$('.message-erreur-form').show('slow');
		}
	});
}

function sliderEtape(slider) {
	slider.show(100);
}
function goHash(idHash) {
	if($('.txt-estimation').length>0){
		var txtHeight = $('.txt-estimation').height();
		var positionElement = parseInt($(idHash).position().top) + txtHeight;
		$("html, body").animate({ scrollTop: positionElement }, 600);
		
	}else{
		var positionElement = $(idHash).position();
		$("html, body").animate({ scrollTop: positionElement.top }, 600);
	}
	return false;
}
