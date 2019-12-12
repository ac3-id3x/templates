$(document).ready(function(){
	$('.form-envoi-message-vente').on('click','.bouton-envoyer-message-agence', function (e) {
		e.preventDefault();
		var btn = $(this);
		btn.button('loading');
		$.ajax({
			type: "POST",
			data : $(this).parent().parent().parent().parent('.form-envoi-message-vente').serialize(),
			dataType:'json',
			url: '/agence,incl_contact_vente_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');		
			},
			success: function(data) {
				var idpublication = data.idpublication;
				if(data.message.length > 0) {
					$('.message-erreur-alerte').html(data.message);
					if(data.nom.length <= 0) {
						$('#nom-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#nom-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$('#email-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#email-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.telephone.length <= 0 || regTel.test(data.telephone) == false) {
						$('#telephone-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#telephone-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.message_user.length <= 0) {
						$('#message-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#message-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.ville.length <= 0) {
						$('#ville-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#ville-message'+idpublication).parent().removeClass('error').addClass('success');
					}												
				} else {
					$('.message-erreur-alerte').html(messageOK);	
					$('#nom-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#email-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#telephone-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#message-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#ville-message'+idpublication).parent().removeClass('error').addClass('success');
					btn.html(boutonOK);
					btn.unbind('click');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	              //console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//btn.button('reset');
				btn.unbind('click');
				$('.message-erreur-alerte').show('slow');
			}
		});
	});
});