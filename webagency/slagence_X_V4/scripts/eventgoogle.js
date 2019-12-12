$(document).ready(function() { 
	
                //$('#BoutonContactAnnonce').click(function() { 
                //            _gaq.push(['_trackEvent', 'Formulaire_annonce', 'annonce:$$REP:1$$']); 
                //}) 
                //$('#boutonEnvoiAmi').click(function() { 
                //            _gaq.push(['_trackEvent', 'envoi_ami', 'annonce:$$REP:1$$']); 
                //}) 
                //$('#boutonEnvoiEstimation').click(function() { 
                //            _gaq.push(['_trackEvent', 'formulaire_estimation', 'estimation']); 
                //}) 
                //$('#boutonEnvoiAgence').click(function() { 
                //            _gaq.push(['_trackEvent', 'formulaire_contact', 'contact']); 
                //}) 
                // SENTO
                $('#BoutonContactAnnonce').click(function() { 
					ga('send', 'pageview', '/formulaire_annonce.htm');
                    //_gaq.push(['_trackPageview', '/formulaire_annonce.htm']); 
                }) 
                /*$('#boutonEnvoiAmi').click(function() { 
                              _gaq.push(['_trackPageview', '/envoi_a_un_ami.htm']); 
                })*/ 
                $('#boutonEnvoiEstimation').click(function() { 
					ga('send', 'pageview', '/virtual_detail/Estimation/formulaire_estimation.htm');
                    //_gaq.push(['_trackPageview', '/virtual_detail/Estimation/formulaire_estimation.htm']); 
                }) 
                $('#boutonEnvoiAgence').click(function() { 
					ga('send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm');
                    //_gaq.push(['_trackPageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_agence.htm']);
                }) 
	// DETAIL COMPACT
	$('.BtnTel').click(function() {
		ga('send', 'pageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm');
		//_gaq.push(['_trackPageview', '/virtual_detail/Voir_Telephone_agence/demande_de_telephone.htm']);
	});
	$('.WrapBtnSelect').click(function() {
		ga('send', 'pageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm');
		//_gaq.push(['_trackPageview', '/virtual_detail/Selection_annonce/annonce_selectionnee.htm']);
	});
	$('.qrcodeBtn').click(function() {
		ga('send', 'pageview', '/virtual_detail/Voir_QRcode/qrcode.htm');
		//_gaq.push(['_trackPageview', '/virtual_detail/Voir_QRcode/qrcode.htm']);
	});
	$('.FancyBoxPrint').click(function() {
		ga('send', 'pageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm');
		//_gaq.push(['_trackPageview', '/virtual_detail/Imprimer_fiche/imprimer_la_fiche.htm']);
	});
	// FORM COMPACT
	$('#boutonEnvoyerFormulaireCompact').click(function() {
		var valueSelect = parseInt($('#SelectSujet').val());
		switch(valueSelect) {
			case 1:
				ga('send', 'pageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm');
				//_gaq.push(['_trackPageview', '/virtual_detail/Demande_de_Rappel/demande_de_rappel.htm']);
				break;
			case 2:
				ga('send', 'pageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm');
				//_gaq.push(['_trackPageview', '/virtual_detail/Plus_de_details/demande_plus_de_details.htm']);
				break;
			case 3:
				ga('send', 'pageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm');
				//_gaq.push(['_trackPageview', '/virtual_detail/Demande_de_Visite/demande_de_visite.htm']);
				break;
			default:
				break;
		};
	});
	// DETAIL COMPACT + SENTO
	$('#boutonEnvoiAmi').click(function() {
		ga('send', 'pageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm');
		//_gaq.push(['_trackPageview', '/virtual_detail/Envoyer_a_un_ami/envoi_ami.htm']);
	});
	//FORM DE CONTACT AI
	$('#boutoncntArthur').click(function() { 
		ga('send', 'pageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_arthur.htm');
   		//_gaq.push(['_trackPageview', '/virtual_detail/Formulaire_Contact/formulaire_contact_arthur.htm']);
   }) ;
}) ;