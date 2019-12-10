	var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');

	$('.form-envoi-message-perso').on('click','.bouton-envoyer-message-agence', function (e) {
		e.preventDefault();
		var btn = $(this);
		btn.button('loading');
		$.ajax({
			type: "POST",
			data : $(this).closest('.form-envoi-message-perso').serialize(),
			dataType:'json',
			url: '/agence,incl_belvia_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');		
			},
			success: function(data) {
				var idpublication = data.idpublication;
				console.log(data);
				if(data.message.length > 0) {
					$('.message-erreur-alerte').html(data.message);
					if(data.nom.length <= 0) {
						$('#nom-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#nom-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.prenom.length <= 0) {
						$('#prenom-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#prenom-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$('#email-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#email-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.telephone.length <= 0 || regTel.test(data.telephone) == false) {
						$('#telephone-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#telephone-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.message_user.length <= 0) {
						$('#message-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#message-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					btn.button('reset');
				} else {
					btn.button('reset');
					$('.message-erreur-alerte').html(messageOK);	
					$('.bouton-envoyer-message-agence').html(boutonOK);					
					$('.form-envoi-message-perso .btn-action').removeClass('bouton-envoyer-message-agence').css('cursor','not-allowed');
					$('#nom-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#prenom-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#email-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#telephone-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#message-message'+idpublication).parent().removeClass('error').removeClass('success');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		btn.button('reset');
                console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//btn.button('reset');
				$('.message-erreur-alerte').show('slow').delay(2500).hide('slow');
			}
		});
	});
	
	
		$('.form-envoi-message-syndic').on('click','.bouton-envoyer-message-agence', function (e) {
		e.preventDefault();
		var btn = $(this);
		btn.button('loading');
		$.ajax({
			type: "POST",
			data : $(this).closest('.form-envoi-message-syndic').serialize(),
			dataType:'json',
			url: '/agence,incl_syndic_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');		
			},
			success: function(data) {
				console.log(data);
				var idpublication = data.idpublication;
				console.log(data.message);
				if(data.message.length > 0) {
					$('.message-erreur-alerte').html(data.message);
					if(data.nom.length <= 0) {
						$('#nom-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#nom-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.prenom.length <= 0) {
						$('#prenom-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#prenom-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$('#email-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#email-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.telephone.length <= 0 || regTel.test(data.telephone) == false) {
						$('#telephone-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#telephone-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					if(data.message_user.length <= 0) {
						$('#message-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#message-message'+idpublication).parent().removeClass('error').addClass('success');
					}	
					btn.button('reset');
				} else {
					btn.button('reset');
					$('.message-erreur-alerte').html(messageOK);	
					$('.bouton-envoyer-message-agence').html(boutonOK);
					$('.form-envoi-message-syndic .btn-action').removeClass('bouton-envoyer-message-agence').css('cursor','not-allowed');
					$('#nom-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#prenom-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#email-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#telephone-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#message-message'+idpublication).parent().removeClass('error').removeClass('success');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		btn.button('reset');
        console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//btn.button('reset');
				$('.message-erreur-alerte').show('slow').delay(2500).hide('slow');
			}
		});
	});
	
	
	$('.form-news-footer').submit(function( event ) {
		var erreur = 0;
		var cp = $(this).find("input[name='cp']").val();
		if( $(this).find("input[name='email']").val()==""  ||  cp=="" ){
			alert("Vous devez indiquer une adresse email et un code postal");
			erreur = 1;
		}else{
			if( cp.length !== 5 ){
				alert("Le code postal ne semble pas valide.");
				erreur = 1;
			}else{
				 if( isNaN(cp) ){
				 	alert("Le code postal ne semble pas valide.");
					erreur = 1;
				 } 
			}
		}
		
		if(erreur==1){
			event.preventDefault();		
		}
	});
	
	$('.bouton-alerte-moteur-belvia').on('click',function(e) {
		var erreur = 0;
		var cp = $(this).closest("form").find("input[name='cp']").val();
		if( $(this).closest("form").find("input[name='email']").val()==""  ||  cp=="" ){
			alert("Vous devez indiquer une adresse email et un code postal");
			erreur = 1;
		}else{
			if( cp.length !== 5 ){
				alert("Le code postal ne semble pas valide.");
				erreur = 1;
			}else{
				 if( isNaN(cp) ){
				 	alert("Le code postal ne semble pas valide.");
					erreur = 1;
				 } 
			}
		}
		
		if(erreur==1){
			e.preventDefault();		
			e.stopPropagation();
			return false;
		}else{
			
				e.preventDefault();
				var btn = $(this);
				btn.button('loading');
				/* SEND FORM ALERT MAIL WITH AJAX + JSON */
				$.ajax({
					type: "POST",
					data : $('#form-alerte-moteur').serialize(),
					dataType:'json',
					url: '/alerte,incl_creation.htm',
					beforeSend: function() {
						$('.message-erreur-alerte').html('');		
					},
					success: function(data) {
						if(data.message.length > 0) {
							$('.message-erreur-alerte').html(data.message);
							// TEST NOM
							if(data.nom.length <= 0) {
								$('#nom-alerte').parent().addClass('error').removeClass('success');;
							} else {
								$('#nom-alerte').parent().removeClass('error').addClass('success');
							}
							// TEST EMAIL
							if(data.email.length <= 0 || regEmail.test(data.email) == false) {
								$('#email-alerte').parent().addClass('error').removeClass('success');;
							} else {
								$('#email-alerte').parent().removeClass('error').addClass('success');
							}
						} else if(data.idInscription.length > 0) {
							$('#nom-alerte').parent().removeClass('error').removeClass('success');
							$('#email-alerte').parent().removeClass('error').removeClass('success');
							$('.message-erreur-alerte').html(inscriptionOK)
						}
			 	 	},
			 	 	error : function (jqXHR, textStatus, errorThrown) {
		                console.log(jqXHR, textStatus, errorThrown);
					},
					complete: function() {
						btn.button('reset');
						$('.message-erreur-alerte').show('slow').delay(1500).hide('slow');
					}
				});
				
		}
	});
	
	
	