/* GESTION MESSAGE FORM */
var TexteDefault;
var TextePlusinfo;
/* START CONTAINER */
var container = $("#message");
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var backLinkSearch = 'recherche,basic';
// FIX STAR = DETAIL SELECTED
function fixStar() {
	var annonceBouton = $('.bouton-ajouter-selection-detail')
	var titleData = annonceBouton.attr('data-title-ok');
	annonceBouton.attr('data-original-title',titleData).tooltip('fixTitle').find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
};
function changeFormulaire(valueSelect) {
  // RESET HIDE/SHOW
	$('#container-form-contact-agence').show();
	$('#form-contact-agence').show();
	$('.message-erreur-alerte').hide();
	// TEST PRESTIGE
	var descriptif = $('.descriptif-annonce');
	switch(valueSelect) {
		 case "1":
		 	container.hide();
		 	$('#bloc-formulaire-plus-detail').hide();
		 	$('#bloc-formulaire-etre-rappele').show();
		 	$('#bloc-formulaire-visiter-bien').hide();
		 	if(descriptif.length > 0 ) {
		 		descriptif.hide();
		 	}
		 	TexteDefault = TexteRappel;
		 	break;
		 case "2":
		 	container.show();
		 	$('#bloc-formulaire-plus-detail').show();
		 	$('#bloc-formulaire-etre-rappele').hide();
		 	$('#bloc-formulaire-visiter-bien').hide();
		 	if(descriptif.length > 0 ) {
		 		descriptif.hide();
		 	}
		 	TexteDefault = TextePlusinfo;
		 	break;
		 case "3":
			 container.hide();
			 $('#bloc-formulaire-plus-detail').hide();
			 $('#bloc-formulaire-etre-rappele').hide();
			 $('#bloc-formulaire-visiter-bien').show();
			 if(descriptif.length > 0 ) {
		 		descriptif.hide();
		 	}
		 	TexteDefault = TexteVisiter;
		 	break;
		 case "4":
		 	 container.hide();
		 	 $("#container-form-contact-agence").hide();
		 	 $('#bloc-formulaire-plus-detail').hide();
		 	 $('#bloc-formulaire-etre-rappele').hide();
		 	 $('#bloc-formulaire-visiter-bien').hide();
		 	 // GO PAGE ESTIMATION
		 	window.location.href = $('#pageEstimationInput').val();
		 	break;
		 default:
			container.hide();
			 $('#bloc-formulaire-plus-detail').hide();
			 $('#bloc-formulaire-etre-rappele').hide();
			 $('#bloc-formulaire-visiter-bien').hide();
			 if(descriptif.length > 0 ) {
		 		descriptif.show();
		 	}
		 	$("#container-form-contact-agence").hide();
		 	break;
	}
	if(winW < 600) {
	  var getOffset = $('#container-form-contact-agence').offset();
  	$("html, body").animate({scrollTop: getOffset.top }, 600);return false;
  }
	$('#type-message').val(valueSelect);
	container.val(TexteDefault);
}
/* BTN NOUVEL ENVOI AMI */
	function sendNewFriend(btn,btnval){
		$('.nouvel-envoi-ami').on('click',function(e) {
			$("#toemail").val('');
			$("#tonom").val('');
			btn.button('reset');
			btn.html(btnval);
			btn.show('slow');
			$('.message-erreur-ami').hide('slow');
			$('.nouvel-envoi-ami').hide('slow');
			btn.button('reset');
		});
	}
$(document).ready(function() {
	container.val(TextePlusinfo);
	/* EFFECT SIMILAIRES */
	if(winW > 600) {
		$('.ligne-detail-bloc-annonce-similaire').each(function() {
			$(this).hover(
				function() {
					if($(this).find('.detail-bloc-annonce-similaire-photo').find('.display-none').length > 0) {
						$(this).find('.detail-bloc-annonce-similaire-photo').find('.picture-responsive').first().hide();
						$(this).find('.detail-bloc-annonce-similaire-photo').find('.picture-responsive').last().show();
					}
				},
				function() {
					if($(this).find('.detail-bloc-annonce-similaire-photo').find('.display-none').length > 0)  {
						$(this).find('.detail-bloc-annonce-similaire-photo').find('.picture-responsive').first().show();
						$(this).find('.detail-bloc-annonce-similaire-photo').find('.picture-responsive').last().hide();
					}
				}
			)
		});
		/* BTN VIDEO/360/PDF */
		$('.bouton-video-detail').on('click',function(e) {
			e.preventDefault();
			$('.bouton-video-detail').colorbox({iframe:true, innerWidth:720, innerHeight:480,fastIframe:false});
		});
		$('.bouton-video-360').on('click',function(e) {
			e.preventDefault();
			$('.bouton-video-360').colorbox({iframe:true, innerWidth: 720, innerHeight:490,fastIframe:false});
		});
		$('.bouton-pdf-detail').on('click',function(e) {
			e.preventDefault();
			$('.bouton-pdf-detail').colorbox({iframe:true, innerWidth: 720, innerHeight:576});
		});

	}
	/* INFOS LOCALES / POI */
	$('.titre-divers').each(function() {
		$(this).on('click',function() {
			rel = $(this).attr('data-rel');
			norel = $(this).attr('data-no-rel');
			// ADD / REMOVE
			$(this).parent().find('.actif-tab').addClass('inactif-tab').removeClass('actif-tab');
			$(this).removeClass('inactif-tab').addClass('actif-tab');
			// DISPLAY
			$('#'+rel).show();
			$('#'+norel).hide();
		});
	});
	/* ENVOI AMI */
	$('.bouton-form-envoyer-ami').on('click',function(e) {
		e.preventDefault();
		var btn = $(this);
		var boutonNotOk = btn.html();
		btn.button('loading');
		$.ajax({
			type: "POST",
			data : $('#form-envoi-ami').serialize(),
			dataType:'json',
			url: '/contact,ami_envoi.htm',
			beforeSend: function() {
				$('.message-erreur-ami').html('');
			},
			success: function(data) {
				if(data.envoi == 1) {
					$('.message-erreur-ami').html(messageAmiOK);
					btn.html(boutonOK);
					//btn.unbind('click');
					btn.hide('slow');
					$('.nouvel-envoi-ami').show('slow');
				} else {
					if(data.email_from.length <= 0) {
						$("#email_from").parent().addClass('error');
					} else {
						$("#email_from").parent().removeClass('error');
					}
					if(data.nom_from.length <= 0) {
						$("#nom_from").parent().addClass('error');
					} else {
						$("#nom_from").parent().removeClass('error');
					}
					if(data.email_to.length <= 0) {
						$("#toemail").parent().addClass('error');
					} else {
						$("#toemail").parent().removeClass('error');
					}
					if(data.nom_to.length <= 0) {
						$("#tonom").parent().addClass('error');
					} else {
						$("#tonom").parent().removeClass('error');
					}
					$('.message-erreur-ami').html(data.erreur);
					btn.button('reset');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
                //console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//btn.button('reset');
				$('.message-erreur-ami').show('slow');
				sendNewFriend(btn,boutonNotOk);
			}
		});
	});
	/* BTN AJOUT SELECTION */
	$('.bouton-ajouter-selection-detail').on('click',function(e) {
		e.preventDefault();
		var $this = $(this);
		var titleData = $this.attr('data-title-ok');
		var titleDone = $this.text();
		var thisIcone = $this.find('img').attr('src');
		var idAnnonce = $this.attr('data-idannonce');
		var idPublication = $this.attr('data-idpublication');
		if(thisIcone.indexOf('star_ok')>0){
			$.ajax({
				type: "GET",
				data: 'idannonce='+idAnnonce+'&idp='+idPublication,
				url: '/scripts,panier,selection_supprimer.htm',
				dataType: "json",
				cache:false,
				success: function(data) {
					//$this.unbind('click');
					$this.attr('data-original-title',titleDone).tooltip('fixTitle').find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/'+ iconColor +'/star.png');
		 	 		$('.fix-panier').attr('alt',data.nbAnnonces).attr('data-title',data.nbAnnonces).attr('title',data.nbAnnonces);
		 	 	}
			});
		}else{
			$.ajax({
				type: "GET",
				data : "idannonce="+idAnnonce+"&idpublication="+idPublication,
				url: '/scripts,panier,selection_ajouter.htm',
				dataType: "json",
				cache:false,
				success: function(data) {
					$this.attr('data-original-title',titleData).tooltip('fixTitle').find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
		 	 		$('.fix-panier').attr('alt',data.nbAnnonces).attr('data-title',data.nbAnnonces).attr('title',data.nbAnnonces);
		 	 	}
			});
		};

		//removeClass('bouton-ajouter-selection-detail')
	});
	/* CHANGER CONTAINER + MESSAGE */
	$('#SelectSujet').change(function() {
		changeFormulaire($(this).val());
	});
	$('.bouton-formulaire-agence').on('click',function() {
		changeFormulaire($(this).attr('data-message'));
	});
	/* CLOSE FORM */
	$('.bouton-formulaire-fermer').on('click',function() {
		changeFormulaire(0);
	});
	$('.message-erreur-alerte').on('click','.bouton-envoyer-nouveau-message',function(e) {
	  e.preventDefault();
	  $('#form-contact-agence').show();
	  $('.message-erreur-alerte').hide();
	});
	/* SEND FORM CONTACT AGENCE WITH AJAX + JSON */
	$('.bouton-contact-agence').on('click',function() {
		var btn = $(this);
		btn.button('loading');
		var contactForm = $('#form-contact-agence').serialize();
		var contactFormNoComa = contactForm.replace(',/g', '\,');
		var contactFormNoBackspace = contactFormNoComa.replace(/%0D%0A/g,' ');
		$.ajax({
			type: "POST",
			data : contactFormNoBackspace,
			dataType:'json',
			url: '/detail,incl_contact_agence_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');
			},
			success: function(data) {
				if(data.message.length > 0) {
					$('.message-erreur-alerte').html(data.message);
					if(data.nom.length <= 0) {
						$("#cnom").parent().addClass('error');
					} else {
						$("#cnom").parent().addClass('success').removeClass('error');
					}
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$("#from").parent().addClass('error');
					} else {
						$("#from").parent().addClass('success').removeClass('error');
					}
					if(data.message_user.length <= 10) {
						$("#message").parent().addClass('error');
					} else {
						$("#message").parent().addClass('success').removeClass('error');
					}
					$('.message-erreur-alerte').html(data.message);
				} else {
				  $('#form-contact-agence').hide();
					$('#cnom').parent().removeClass('error')
					$('#from').parent().removeClass('error');
					$('#message').parent().removeClass('error');
					$('.message-erreur-alerte').html(messageOK);
					btn.html(boutonOK);
					//btn.unbind('click');

				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
               // console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				btn.button('reset');
				$('.message-erreur-alerte').show();
			}
		});
	});
	/* DPE */
	$('.dpe-show').css('cursor','pointer');
	$('.dpe-show').on('click',function(e) {
		if($(this).parent().children('.containerDiagramme').hasClass('dpeOpen')) {
			$(this).parent().children('.containerDiagramme').hide().removeClass('dpeOpen');
		} else {
			$(this).parent().children('.containerDiagramme').show().addClass('dpeOpen');
		}
	});
	/* ACCORDION */
	$('.mentions').find('.accordion-group').each(function(e) {
		if($(this).children('.accordion-body').hasClass('in')) {
			$(this).find('.accordion-toggle').append('<div class="minus absolute top right margin-top-10 margin-right-10"><i class="opacity-3 right smallest general typoicon-minus"></i></div>');
		} else {
			$(this).find('.accordion-toggle').append('<div class="plus absolute top right margin-top-10 margin-right-10"><i class=" opacity-3 right smallest general typoicon-plus"></i></div>');
		}
	});
	$('.mentions').find('.accordion-body').on('show',function(e){
		$(this).parent().find('.accordion-toggle').find('.minus').remove();
		$(this).parent().find('.accordion-toggle').find('.plus').remove();
        $(this).parent().find('.accordion-toggle').append('<div class="minus absolute top right margin-top-10 margin-right-10"><i class="opacity-3 right smallest general typoicon-minus"></i></div>');
	});
	$('.mentions').find('.accordion-body').on('hide',function(e){
		$(this).parent().find('.accordion-toggle').find('.minus').remove();
		$(this).parent().find('.accordion-toggle').find('.plus').remove();
		$(this).parent().find('.accordion-toggle').append('<div class="plus absolute top right margin-top-10 margin-right-10"><i class="opacity-3 right smallest general typoicon-plus"></i></div>');
	});
	/* ZOOM */
	$('.bouton-zoom-detail').on('click',function(e) {
		e.preventDefault();
		// GET CURRENT ELEMENT
		var indexImg = $('.nivo-controlNav').find('.active').attr('rel');
		$('.gallery').eq(indexImg).click();
	});
	/* POI */
	$('.lien-poi').on('click',function(e) {
		e.preventDefault();
		var getOffset = $($(this).attr('href')).offset();
		$("html, body").animate({scrollTop: getOffset.top }, 600);return false;
	});
	/* BACK LINK */
	/*if(document.referrer.indexOf(backLinkSearch)  != -1) {
	  // CHANGE LINK
	  var btnBack = $('.btn-retour-detail');
	  var getTransac = btnBack.attr('data-transac');
	  var getBien = btnBack.attr('data-bien');
	  var getTitle = btnBack.attr('data-title');
	  btnBack.attr('href','/recherche,basic.htm?idtt='+getTransac+'&idtypebien='+getBien).attr('title',getTitle).html(getTitle);
	}*/
});
