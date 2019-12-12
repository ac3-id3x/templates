var idTracking = 0;
$(document).ready(function() {
	// TELEPHONE DETAIL
	$('.bloc-detail-telephone').on('click',function() {
		_gaq.push(['_trackEvent','virtual_detail','Voir_Telephone_agence']);
	});
	$('#bouton-telephonez-nous').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','Voir_Telephone_agence_detail']);
		$(this).attr('id','');
	  $(this).unbind('click');
	});
    $('#bouton-contactez-nous').on('click',function() {
        _gaq.push(['_trackEvent', 'virtual_detail','Voir_Email_agence_detail']);
        $(this).attr('id','');
      $(this).unbind('click');
    });
	// AJOUT SELECTION
	$('.bouton-ajouter-selection-detail').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','Selection_annonce']);
	});
	// PRINT
	$('.bouton-video-imprimer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','Imprimer_fiche']);
	});
	// SEND FRIEND
	$('.bouton-form-envoyer-ami').on('submit',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','Envoyer_a_un_ami']);
	});
	 $('.btn-estimation-envoyer').on('click',function() { 
		_gaq.push(['_trackEvent', 'virtual_detail','Estimation']); 
	});
	// BOUTON ALERT
	 $('.bouton-alerte-moteur').on('click',function() { 
		_gaq.push(['_trackEvent', 'virtual_detail','alerteimmo']);
	});
	// BOUTON SEND AGENCE LIST
	$('.bouton-envoyer-message-agence').on('submit',function() { 
		 _gaq.push(['_trackEvent', 'virtual_detail','Formulaire_Contact']);
	}) 
	// PAGE PRECEDENTE
	$('.btn-retour-detail').on('click', function () {
    _gaq.push(['_trackEvent', 'Bouton', 'Clic', 'Page precedente']); 
	});
	// DESSINER MAP
	$('.bouton-dessiner-start').on('click', function () {
    _gaq.push(['_trackEvent', 'Bouton', 'Clic', 'Je dessine']); 
	});
	// FORM DETAIL ANNONCE
	$('.bouton-formulaire-agence').on('click',function() {
        idTracking = parseInt($(this).attr('data-message'));
        // ESTIMATION CASE
        if(idTracking == 4) {
            _gaq.push(['_trackEvent', 'virtual_detail','Demande_d_estimation']); 
        }
	});
	$('.bouton-contact-agence').on('click',function() {
        trackingDetail(idTracking);
	});
	//Modif au 17/06/2019 viot
	/* 
	###################### SOCIAL FOOTER ############################# 
	*/
	// FACEBOOK-FOOTER
	$('.facebook-footer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','facebook-footer']);
	});
	// TWITTER-FOOTER
	$('.twitter-footer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','twitter-footer']);
	});
	// LINKEDIN-FOOTER
	$('.linkedin-footer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','linkedin-footer']);
	});
	// YOUTUBE-FOOTER
	$('.youtube-footer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','youtube-footer']);
	});
	// DAILYMOTION-FOOTER
	$('.dailymotion-footer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','dailymotion-footer']);
	});
	// GOOGLEPLUS-FOOTER
	$('.googleplus-footer').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','googleplus-footer']);
	});
	/* 
	###################### SOCIAL LATERAL ############################# 
	*/
	// FACEBOOK-LATERAL
	$('.facebook').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','facebook-lateral']);
	});
	// TWITTER-LATERAL
	$('.twitter').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','twitter-lateral']);
	});
	// LINKEDIN-LATERAL
	$('.linkedin').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','linkedin-lateral']);
	});
	// GOOGLEPLUS-LATERAL
	$('.googleplus').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','googleplus-lateral']);
	});
	/* 
	###################### SOCIAL PARTAGE ############################# 
	*/
	// LIKE-FACEBOOK-PARTAGE
	$('._49ve').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','like-facebook-partage']);
	});
	// FACEBOOK-PARTAGE
	$('._2tga').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','facebook-partage']);
	});
	// LINKEDIN-PARTAGE
	$('.IN-2bc0215c-7188-4274-b598-1969e06d4d7c-1G9ISYhSF8XoOmdcl0yKDu').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','linkedin-partage']);
	});
	// PINTEREST-PARTAGE
	$('.pin-it-button').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','pinterest-partage']);
	});
	// PINTEREST-PARTAGE
	$('.socialwhite-facebook').on('click',function() {
		_gaq.push(['_trackEvent', 'virtual_detail','pinterest-partage']);
	});
	/* 
	###################### SOCIAL PARTAGE ############################# 
	*/
	
	
});
function trackingDetail(valueSelect) {
  switch(valueSelect) {
  case 1:
    _gaq.push(['_trackEvent', 'virtual_detail','Demande_de_Rappel']);
    break;
  case 2:
    _gaq.push(['_trackEvent', 'virtual_detail','Plus_de_details']);
    break;
  case 3:
    _gaq.push(['_trackEvent', 'virtual_detail','Demande_de_Visite']);
    break;
  default:
    break;
  };
}