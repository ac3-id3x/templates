$(document).ready(function() {
	// TELEPHONE DETAIL
	$('.bloc-detail-telephone').on('click',function() {
		ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
        if (keyRegion){
		    ga('general.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
            ga('general2.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
			ga('ref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
			ga('noref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
        };
	});
    // TELEPHONE DETAIL AGENCE
	$('#bouton-telephonez-nous').on('click',function() {
	  ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence_detail/demande_de_telephone.htm');
         if (keyRegion){
            ga('general.send', 'pageview', '/virtual_detail/Voir_Telephone_agence_detail/demande_de_telephone.htm');
            ga('general2.send', 'pageview', '/virtual_detail/Voir_Telephone_agence_detail/demande_de_telephone.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/Voir_Telephone_agence_detail/demande_de_telephone.htm');
			ga('ref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence_detail/demande_de_telephone.htm');
			ga('noref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence_detail/demande_de_telephone.htm');
		 };
	  $(this).attr('id','');
	  $(this).unbind('click');
	});
    $('#bouton-telephonez-nous').on('click',function() {
      ga('send', 'pageview', '/virtual_detail/Voir_Email_agence_detail/demande_de_email.htm');
	  if (keyRegion){
            ga('general.send', 'pageview', '/virtual_detail/Voir_Email_agence_detail/demande_de_email.htm');
            ga('general2.send', 'pageview', '/virtual_detail/Voir_Email_agence_detail/demande_de_email.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/Voir_Email_agence_detail/demande_de_email.htm');
			ga('ref.send', 'pageview', '/virtual_detail/Voir_Email_agence_detail/demande_de_email.htm');
			ga('noref.send', 'pageview', '/virtual_detail/Voir_Email_agence_detail/demande_de_email.htm');
		 };
      $(this).attr('id','');
      $(this).unbind('click');
    });
	$('.container').on('click','#bouton-telephonez-nous-footer',function() {
	  ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_footer.htm');
	  	if (keyRegion){
            ga('general.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_footer.htm');
            ga('general2.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_footer.htm');
		 };
	  $(this).attr('id','');
	  $(this).unbind('click');
	});
	$('#bouton-telephonez-nous-txt').on('click',function() {
	  ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_txt.htm');
	  	if (keyRegion){
            ga('general.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_txt.htm');
            ga('general2.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_txt.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_txt.htm');
			ga('ref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_txt.htm');
			ga('noref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_txt.htm');
		};
	  $(this).attr('id','');
	  $(this).unbind('click');
	});
	$('.zone-message-agence, .bouton-agence, .form-envoi-message, .zone-agence-ajax, .detail-agence-liste').on('click','div[id*="bouton-telephonez-nous"]',function() {
		var cutId = $(this).attr('id').split('-');
		var a = '-'+cutId[3];
		if (isNaN(a)) {
			ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_liste.htm');
			if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_liste.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_liste.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_liste.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_liste.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_liste.htm');
			};
			$(this).attr('id','');
		  	$(this).unbind('click');
		}
	});
	$('.zone-message-agence, .bouton-agence, .form-envoi-message, .zone-agence-ajax, .detail-agence-liste, .container').on('click','div[id*="bouton-telephonez-nous"]',function() {
		var cutId = $(this).attr('id').split('-');
		var a = '-'+cutId[3]+'-'+cutId[4];
		if (isNaN(a)) {
			ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_header.htm');
			if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_header.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_header.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_header.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_header.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone_header.htm');
			};
			$(this).attr('id','');
		  	$(this).unbind('click');
		}
	});
	// AJOUT SELECTION
	$('.bouton-ajouter-selection-detail').on('click',function() {
		ga('send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
		if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
			};
	});
	// PRINT
	$('.bouton-video-imprimer').on('click',function() {
		ga('send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
		if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
			};
	});
	// GO PRINT
	$('.goprint').on('click',function() {
		ga('send', 'pageview', '/virtual_detail/Imprimer_fiche/lancer_impression_fiche.htm');
		if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Imprimer_fiche/lancer_impression_fiche.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Imprimer_fiche/lancer_impression_fiche.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Imprimer_fiche/lancer_impression_fiche.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Imprimer_fiche/lancer_impression_fiche.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Imprimer_fiche/lancer_impression_fiche.htm');
			};
	});
	// SEND FRIEND
	$('.bouton-form-envoyer-ami').on('submit',function() {
		ga('send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
		if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
			};
	});
	 $('.btn-estimation-envoyer').on('click',function() {
		ga('send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm'); 
			if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm');
			};
	});
	// BOUTON ALERT
	 $('.bouton-alerte-moteur').on('click',function() { 
		ga('send', 'pageview', '/virtual_detail/alerteimmo/alerte_immo.htm');
			if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/alerteimmo/alerte_immo.htm');
				ga('general2.send', 'pageview', '/virtual_detail/alerteimmo/alerte_immo.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/alerteimmo/alerte_immo.htm');
				ga('ref.send', 'pageview', '/virtual_detail/alerteimmo/alerte_immo.htm');
				ga('noref.send', 'pageview', '/virtual_detail/alerteimmo/alerte_immo.htm');
			};
	});
	// BOUTON SEND AGENCE LIST
	$('.bouton-envoyer-message-agence').on('submit',function() {
		ga('send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
			if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
			};
	})
	// PAGE PRECEDENTE
	$('.btn-retour-detail').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/detail/detail_page_precedente.htm');
		    if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/detail/detail_page_precedente.htm');
				ga('general2.send', 'pageview', '/virtual_detail/detail/detail_page_precedente.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/detail/detail_page_precedente.htm');
				ga('ref.send', 'pageview', '/virtual_detail/detail/detail_page_precedente.htm');
				ga('noref.send', 'pageview', '/virtual_detail/detail/detail_page_precedente.htm');
			};
    //_gaq.push(['_trackEvent', 'Bouton', 'Clic', 'Page precedente']);
	});
	// DESSINER MAP
	$('.bouton-dessiner-start').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/moteur/dessin_carto.htm');
		    if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/moteur/dessin_carto.htm');
				ga('general2.send', 'pageview', '/virtual_detail/moteur/dessin_carto.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/moteur/dessin_carto.htm');
				ga('ref.send', 'pageview', '/virtual_detail/moteur/dessin_carto.htm');
				ga('noref.send', 'pageview', '/virtual_detail/moteur/dessin_carto.htm');
			};
    //_gaq.push(['_trackEvent', 'Bouton', 'Clic', 'Je dessine']); 
	});
	// FORM DETAIL ANNONCE
	var idTracking = $('input[name=type-message]:checked', '#form-contact-agence').val();
	$('.bouton-formulaire-agence').on('click',function() {
        idTracking = parseInt($(this).attr('data-message'));
        // ESTIMATION CASE
        if(idTracking == 4) {
            ga('send', 'pageview', '/virtual_detail/Demande_d_estimation/demande_d_estimation.htm'); 
			if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Demande_d_estimation/demande_d_estimation.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Demande_d_estimation/demande_d_estimation.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Demande_d_estimation/demande_d_estimation.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Demande_d_estimation/demande_d_estimation.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Demande_d_estimation/demande_d_estimation.htm');
			};
        }
	});

	$('.radio').children('input').on('change',function() {
        idTracking = parseInt($(this).val());
	});
	$(".detail-form-nav").find(".btn").click(function(){
		idTracking = parseInt($(this).find("input").val());
	});
	//BTN ESPACE PERSO
	$('.btn-espace-perso').on('click', function () {
     	ga('send', 'pageview', '/virtual_detail/espace_perso/acces_login.htm'); 
		if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/espace_perso/acces_login.htm');
				ga('general2.send', 'pageview', '/virtual_detail/espace_perso/acces_login.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/espace_perso/acces_login.htm');
				ga('ref.send', 'pageview', '/virtual_detail/espace_perso/acces_login.htm');
				ga('noref.send', 'pageview', '/virtual_detail/espace_perso/acces_login.htm');
			};
	});
	//RAPPEL
	$('.rappel').on('click', function () {
     	ga('send', 'pageview', '/virtual_detail/rappel/call_back.htm'); 
		if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/rappel/call_back.htm');
				ga('general2.send', 'pageview', '/virtual_detail/rappel/call_back.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/rappel/call_back.htm');
				ga('ref.send', 'pageview', '/virtual_detail/rappel/call_back.htm');
				ga('noref.send', 'pageview', '/virtual_detail/rappel/call_back.htm');
			};
	});
	//CONTACT AGENCE
	$('.btn-send-contact').on('click',function() {
        trackingDetail(idTracking);

        // Commentaire suite bug du 15/06/2018 sur votre maison, envoi du form détail annonce (Cédric Nexi)
		// s.linkTrackVars = "eVar51";
		// s.eVar51 = "Erreur Formulaire : " + data;
		
	});

		//BTN CREER ALERT
	$('.bouton-alerte-moteur-ga, .bouton-alerte-moteur2-ga').on('click', function () {
    ga('send', 'pageview', '/virtual_detail/creation_Alerte/alerte_immo.htm'); 
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/creation_Alerte/alerte_immo.htm');
			ga('general2.send', 'pageview', '/virtual_detail/creation_Alerte/alerte_immo.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/creation_Alerte/alerte_immo.htm');
			ga('ref.send', 'pageview', '/virtual_detail/creation_Alerte/alerte_immo.htm');
			ga('noref.send', 'pageview', '/virtual_detail/creation_Alerte/alerte_immo.htm');
		};
	});
	/*
	###################### SOCIAL FOOTER #############################
	*/

	// facebook-footer
	$('.facebook-footer').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/facebook-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/facebook-footer.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/facebook-footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/facebook-footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/facebook-footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/facebook-footer.htm');
		};
	});
	// twitter-footer
	$('.twitter-footer').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
		};
	});
	// linkedin-footer
	$('.linkedin-footer').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
		};
	});
	// youtube-footer
	$('.youtube-footer').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/youtube-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/youtube-footer.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/youtube-footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/youtube-footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/youtube-footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/youtube-footer.htm');
		};
	});
	// dailymotion-footer
	$('.dailymotion-footer').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/dailymotion-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/dailymotion-footer.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/dailymotion-footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/dailymotion-footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/dailymotion-footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/dailymotion-footer.htm');
		};
	});
	// googleplus-footer
	$('.googleplus-footer').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
		};
	});
	/*
		###################### SOCIAL LATERAL #############################
	 */
	// facebook-lateral
	$('.facebook').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/facebook-lateral.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/facebook-lateral.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/facebook-lateral.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/facebook-lateral.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/facebook-lateral.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/facebook-lateral.htm');
		};
	});
	// twitter-footer
	$('.twitter').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/twitter-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/twitter-lateral.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-lateral.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-lateral.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-lateral.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-lateral.htm');
		};
	});
	// linkedin-footer
	$('.linkedin').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/linkedin-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/linkedin-lateral.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/linkedin-lateral.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/linkedin-lateral.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/linkedin-lateral.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/linkedin-lateral.htm');
		};
	});
	// googleplus-footer
	$('.googleplus').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/social_alerte/googleplus-footer.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/social_alerte/googleplus-lateral.htm');
			ga('general2.send', 'pageview', '/virtual_detail/social_alerte/googleplus-lateral.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/social_alerte/googleplus-lateral.htm');
			ga('ref.send', 'pageview', '/virtual_detail/social_alerte/googleplus-lateral.htm');
			ga('noref.send', 'pageview', '/virtual_detail/social_alerte/googleplus-lateral.htm');
		};
	});
	/*
		###################### SOCIAL PARTAGE #############################
	 */
	// facebook-jaime
	$('.nav-social-detail').on('click','#u_0_3',function(){
		ga('send', 'pageview', '/virtual_detail/partage_alerte/facebook-jaime-partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_alerte/facebook-jaime-partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_alerte/facebook-jaime-partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_alerte/facebook-jaime-partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_alerte/facebook-jaime-partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_alerte/facebook-jaime-partage.htm');
		};
	});

	// btn-partage
	$('.detail-annonce').on('click',"button[data-title*='Partagez']", function () {
		ga('send', 'pageview', '/virtual_detail/partage_alerte/partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_alerte/partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_alerte/partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_alerte/partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_alerte/partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_alerte/partage.htm');
		};
	});
	// facebook-partage
	$('.nav-social-detail').on('click',"button[title*='J'aime']", function () {
		ga('send', 'pageview', '/virtual_detail/partage_alerte/facebook-partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_alerte/facebook-partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_alerte/facebook-partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_alerte/facebook-partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_alerte/facebook-partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_alerte/facebook-partage.htm');
		};
	});
	// twitter-partage
	$('.social').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/partage_Alerte/twitter-partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_Alerte/twitter-partage.htm');
		};
	});
	// linkedin-footer
	$('.IN-2bc0215c-7188-4274-b598-1969e06d4d7c-1G9ISYhSF8XoOmdcl0yKDu').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/partage_Alerte/linkedin-partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_Alerte/linkedin-partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_Alerte/linkedin-partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_Alerte/linkedin-partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_Alerte/linkedin-partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_Alerte/linkedin-partage.htm');
		};
	});
	// pinterest-partage
	$('.pinit').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/partage_Alerte/pinterest-partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_Alerte/pinterest-partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_Alerte/pinterest-partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_Alerte/pinterest-partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_Alerte/pinterest-partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_Alerte/pinterest-partage.htm');
		};
	});
	// googleplus-partage
	$('.gplus').on('click', function () {
		ga('send', 'pageview', '/virtual_detail/partage_Alerte/googleplus-partage.htm');
		if (keyRegion){
			ga('general.send', 'pageview', '/virtual_detail/partage_Alerte/googleplus-partage.htm');
			ga('general2.send', 'pageview', '/virtual_detail/partage_Alerte/googleplus-partage.htm');
			ga('generalall.send', 'pageview', '/virtual_detail/partage_Alerte/googleplus-partage.htm');
			ga('ref.send', 'pageview', '/virtual_detail/partage_Alerte/googleplus-partage.htm');
			ga('noref.send', 'pageview', '/virtual_detail/partage_Alerte/googleplus-partage.htm');
		};
	});


});
function trackingDetail(valueSelect) {
	var valueSelect = parseInt(valueSelect,10);
  switch(valueSelect) {
  case 1:
    ga('send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
	if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
			};
    break;
  case 2:
    ga('send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
	if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
			};
    break;
  case 3:
    ga('send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
	if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
				ga('general2.send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
				ga('ref.send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
				ga('noref.send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
			};
    break;
  default:
  	 ga('send', 'pageview', '/virtual_detail/contact/annonce.htm');
	 if (keyRegion){
				ga('general.send', 'pageview', '/virtual_detail/contact/annonce.htm');
				ga('general2.send', 'pageview', '/virtual_detail/contact/annonce.htm');
				ga('generalall.send', 'pageview', '/virtual_detail/contact/annonce.htm');
				ga('ref.send', 'pageview', '/virtual_detail/contact/annonce.htm');
				ga('noref.send', 'pageview', '/virtual_detail/contact/annonce.htm');
			};
    break;
  };
}
