$(document).ready(function() {	
	
	$('.form-envoi-message').find('.placeholder').on('click',function(){
		if( $(this).hasClass('placeholder') ) {
			$(this).removeClass('placeholder').html('');
		}
	});
	
	
	$('.btn-show-hide-moteur').on('click',function(e) {
		e.preventDefault();
		sliderBloc('.bloc-moteur');
	});
	$('.low').hover(function(e) {
		$('.nb-annonce-home').addClass('low').removeClass('high');
		$(this).addClass('high').removeClass('remove');
	});
	$('#recherche-listing').on('click','.show-thumbs',function(e) {
		e.preventDefault();
		var blockthumb = $(this).parent('div').parent('div').parent('div').parent('div').parent('div').find('.block-thumb');
		if (blockthumb.hasClass('display-show')){
			blockthumb.removeClass('display-show');
		}else{
			blockthumb.addClass('display-show');
		}
	});
/*FORM ESTIMATION IMMOBILIERE.HTM (champs "autre")*/	
$('.bouton-estimation[data-idtt="6"]').on('click',function() {
		$("#typetransactionautre").toggle();
});
$('.bouton-estimation[data-idtypebien="10"]').on('click',function() {
		$("#typebienautre").toggle();
});
/*FORM CONTACT VENTE*/
	$('.bouton-form-envoyer-vente-ami').on('click',function() {
		ga('send', '/virtual_detail/Envoyer_contact_vente/envoi_contact_vente.htm'); 
	});
/*FORM NEWS*/
	$('.bouton-envoyer-news-agence').on('click',function() {
		ga('send', '/virtual_detail/Envoyer_contact_newsletter/envoi_contact_newsletter.htm'); 
	});
/*FORM REJOINDRE*/
	$('.bouton-envoyer-rejoindre-agence').on('click',function() {
		ga('send', '/virtual_detail/Envoyer_contact_rejoindre/envoi_contact_rejoindre.htm'); 
	});
/*FORM NEWSLETTER*/
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('.form-news-footer').on('click','.bouton-envoyer-news-agence', function (e) {
		e.preventDefault();
		var bton = $(this);
		//bton.button('loading');
		$.ajax({
			type: "POST",
			data : $(this).parent().parent('.form-news-footer').serialize(),
			dataType:'json',
			url: '/agence,incl_contact_news_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte-news').html('');		
			},
			success: function(data) {
				var idpublication = data.idpublication;
				if(data.message.length > 0) {
					$('.message-erreur-alerte-news').html(data.message);
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$('#email-message').addClass('error').removeClass('success');
					} else {
						$('#email-message').removeClass('error').addClass('success');
					}
				} else {
					$('.message-erreur-alerte-news').html(messageOK);
					$('#email-message').val("");
					alert(messageOK);
					$('#email-message').removeClass('error').addClass('success');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//bton.button('reset');
				$('.message-erreur-alerte-news').show('slow').delay(2500).hide('slow');
			}
		});
	});
});