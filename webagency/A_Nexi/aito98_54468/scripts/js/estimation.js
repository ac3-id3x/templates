var stepCheck = 0;
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^[0-9]{4,}$','i');
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
			validation.surface = $('#surface').val();
			validation.villebien = $('#villeBien').val();
			validation.pieces = $('#pieces').val();
			if(getForm == 'acquerir') {
				validation.budget = $('#budget').val();
				validation.etage = $('#etage').val();
			}
			validation.codepostal = $('#cp').val();
			if($('#message').val().length > 0) {
				validation.message = $('#message').val();
			}
			
			// FIN
			if(getForm == 'estimation') {
				
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
				
			} else if(getForm == 'acquerir') {
				
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
				
			} else {
				return false;
			}
		}
	});
	/*Ancienne version*/
	// $('.btn-estimation-transaction').on('click',function(e) {
	// 	var btn = $(this);
	// 	e.preventDefault();
	// 	if(btn.hasClass('transactionOK')) {
	// 		btn.addClass('btn-neutre').removeClass('btn-action').removeClass('transactionOK');
	// 		validation.idtt = '';
	// 		$('#typetransaction').val('');
	// 	} else {
	// 		btn.addClass('btn-action').addClass('transactionOK').removeClass('btn-neutre');
	// 		$('.btn-estimation-transaction').each(function() {
	// 			$(this).not(btn).addClass('btn-neutre').removeClass('btn-action').removeClass('transactionOK');
	// 		});
	// 		validation.idtt = btn.attr('data-idtt');
	// 		$('#typetransaction').val(validation.idtt);
	// 	}
	// });
	/*-------------------*/
	/*Nouvelle version*/
	$('.btn-estimation-transaction').on('click',function(e) {
		var btn = $(this);
		e.preventDefault();
		if(btn.hasClass('transactionOK')) {
			btn.addClass('btn-yellow').removeClass('btn-red').removeClass('transactionOK');
			validation.idtt = '';
			$('#typetransaction').val('');
		} else {
			btn.addClass('btn-red').addClass('transactionOK').removeClass('btn-yellow');
			$('.btn-estimation-transaction').each(function() {
				$(this).not(btn).addClass('btn-yellow').removeClass('btn-red').removeClass('transactionOK');
			});
			validation.idtt = btn.attr('data-idtt');
			$('#typetransaction').val(validation.idtt);
		}
	});
	/*-------------------*/
	/*Ancienne version*/
/*	$('.btn-estimation-bien').on('click',function(e) {
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
	});*/
	/*-------------------*/
	/*Nouvelle version*/
	$('.btn-estimation-bien').on('click',function(e) {
		var btn = $(this);
		e.preventDefault();
		if(btn.hasClass('bienOK')) {
			btn.addClass('btn-yellow').removeClass('btn-red').removeClass('bienOK');
			validation.idtypebien = '';
			$('#typebien').val('');
		} else {
			btn.addClass('btn-red').addClass('bienOK').removeClass('btn-yellow');
			$('.btn-estimation-bien').each(function() {
				$(this).not(btn).addClass('btn-yellow').removeClass('btn-red').removeClass('bienOK');
			});
			validation.idtypebien = btn.attr('data-idtypebien');
			$('#typebien').val(validation.idtypebien);
		}
	});
	/*-------------------*/
	$('.btn-estimation-envoyer').on('click',function(e) {
		e.preventDefault();
		/* CHECK STEP 3*/
		validation.nom = $('#nom').val();		
		validation.ville = $('#ville').val();		
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
		if(validation.telephone.length > 0 && validation.email.length > 0 && regEmail.test(validation.email)) {
			stepCheck = 3;
		}
		/* CHECK ALL BEFORE SEND */
		if(stepCheck == 3) {
			// CHANGE STEP 3
			$('.etape-3').addClass('valid');
			var btn = $(this);
			btn.button('loading');
			$.ajax({
			type: "POST",
			data : $('#form-estimation').serialize(),
			dataType:'json',
			url: '/estimation,estimation_verif.htm',
			beforeSend: function() {
				$('.message-erreur-form').html('');
			},
			success: function(data) {
				console.log(data);
				if(data.message.length == 0) {
					$('.message-erreur-form').html(messageOK);
					btn.button('reset');
					btn.html(boutonOK);
					btn.unbind('click');
					btn.css('cursor','hand');
				} else {
					$('.message-erreur-form').html(data.message);
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
                //console.log(jqXHR, textStatus, errorThrown);
                btn.button('reset');
					btn.html(boutonOK);
					btn.unbind('click');
					btn.css('cursor','hand');
			},
			complete: function() {
				$('.message-erreur-form').show('slow');
			}
		});
		}
	});
});
/* FUNCTION */
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
