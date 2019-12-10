var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');
$(document).ready(function(){
	$('.form-envoi-message-vente').on('click','.bouton-envoyer-vente-agence', function (e) {
		e.preventDefault();
		if($("textarea[name='message']").html() == ""){
			$("textarea[name='message']").html("Pas de pr\351cisions");
		}
		var btn = $(this);
		btn.button('loading');
		$.ajax({
			type: "POST",
			data : $(this).closest('.form-envoi-message-vente').serialize(),
			dataType:'json',
			url: '/agence,incl_contact_vente_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');		
				btn.removeClass("bouton-envoyer-vente-agence");
			},
			success: function(data) {
				var idpublication = data.idpublication;
				if(data.message.length > 0) {
					$('.message-erreur-alerte').html(data.message);
					
					btn.button('reset');
					btn.addClass("bouton-envoyer-vente-agence");
					
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
					
					if(data.surface.length <= 0) {
						$('#surface-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#surface-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.terrain.length <= 0) {
						$('#terrain-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#terrain-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.pieces.length <= 0) {
						$('#pieces-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#pieces-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.dept.length <= 0) {
						$('#dept-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#dept-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.prix.length <= 0) {
						$('#prix-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#prix-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.adresse.length <= 0) {
						$('#adresse-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#adresse-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.cp.length <= 0) {
						$('#cp-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#cp-message'+idpublication).parent().removeClass('error').addClass('success');
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
					$('#surface-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#terrain-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#pieces-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#dept-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#prix-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#adresse-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#cp-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#ville-message'+idpublication).parent().removeClass('error').addClass('success');
					btn.button('reset');
					btn.html(boutonOK);
					btn.unbind('click');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				$('.message-erreur-alerte').show('slow').delay(2500).hide('slow');
			}
		});
	});
//FORM REJOINDRE
	$('.form-envoi-message-rejoindre').on('click','.bouton-envoyer-rejoindre-agence', function (e) {
		e.preventDefault();
		var btn = $(this);
		btn.button('loading');
		$.ajax({
			type: "POST",
			data : $(this).parent().parent().parent().parent('.form-envoi-message-rejoindre').serialize(),
			dataType:'json',
			url: '/agence,incl_contact_vente_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');	
				btn.removeClass('bouton-envoyer-rejoindre-agence');	
			},
			success: function(data) {
				var idpublication = data.idpublication;
				if(data.message.length > 0) {
					btn.addClass('bouton-envoyer-rejoindre-agence');	
					$('.message-erreur-alerte').html(data.message);
					if(data.nomAgence.length <= 0) {
						$('#nomAgence-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#nomAgence-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.ville.length <= 0) {
						$('#ville-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#ville-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.nomFamille.length <= 0) {
						$('#nomFamille-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#nomFamille-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.telephone.length <= 0 || regTel.test(data.telephone) == false) {
						$('#telephone-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#telephone-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$('#email-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#email-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.msg.length <= 10) {
						$('#message-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#message-message'+idpublication).parent().removeClass('error').addClass('success');
					}			
					btn.button('reset');			
				} else {
					$('.message-erreur-alerte').html(messageOK);	
					$('#nomAgence-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#ville-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#nomFamille-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#telephone-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#email-message'+idpublication).parent().removeClass('error').addClass('success');
					$('#message-message'+idpublication).parent().removeClass('error').addClass('success');
					$(".bouton-envoyer-rejoindre-agence").hide();
					btn.button('reset');
					btn.html(boutonOK);
					btn.unbind('click');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
                
								btn.button('reset');
                btn.addClass('bouton-envoyer-rejoindre-agence');	
			},
			complete: function() {
				$('.message-erreur-alerte').show('slow');
			}
		});
	});
});