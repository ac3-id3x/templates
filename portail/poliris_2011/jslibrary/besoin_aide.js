$().ready(function(){
	
	//div.bgrepeat p div.shinyform_select ul.shinyform_select_list li a
	/*
	$(".shinyform_select_list li a").click(function () {
		alert('test');
		alert($(this).children("a").attr('href'));
	});
	$("shinyform_select span").change(function() {
		
		console.info($(this).html());
	});*/
	$(".form02").mouseover(function(){
		$(this).find('#at1').children('option:selected').each(function(){
			if($(this).val() == "formation"){
				$('#sendTo').val('atelier-pericles@poliris.fr,avisdevaleur@poliris.fr,marie.defonvielle@poliris.fr ');
			}
			else if($(this).val() == "administratif"){
				if($('#at24').children('option:selected').val() == "comptabilite"){
					$('#sendTo').val('recouvrement@poliris.fr');
				}else{
					$('#sendTo').val('adv@poliris.fr')
				}
			}
			else if($(this).val() == "commerciale"){
				if($('#at17').children('option:selected').val() == "produits_tarifs"){
					if($('#at18').children('option:selected').val() == "produits_logiciels_pericles"){
						$('#produits_tarifs').val('adv@poliris.fr');
					}else{
						$('#sendTo').val('asco@poliris.fr')
					}
				}else{
					$('#sendTo').val('asco@poliris.fr')
				}
			}
			else if($(this).val() == "assistance_technique"){
				if($('#at2').children('option:selected').val() == "site_internet_agence"){
					$('#sendTo').val('supportweb@poliris.fr')
				}else if($('#at2').children('option:selected').val() == "mon_referencement"){
					$('#sendTo').val('audience@poliris.fr')
				}else if($('#at2').children('option:selected').val() == "noms_de_domaine"){
					$('#sendTo').val('domaine-email@poliris.fr')
				}else if($('#at2').children('option:selected').val() == "gestion_de_mes_emails"){
					$('#sendTo').val('domaine-email@poliris.fr')
				}else if($('#at2').children('option:selected').val() == "mes_coordonnees"){
					$('#sendTo').val('adv@poliris.fr')
				}else if($('#at2').children('option:selected').val() == "diffusion_de_mes_annonces"){
					if($('#at6').children('option:selected').val() == "passerelles_pericles_net_vers_portails" || $('#at6').children('option:selected').val() == "les_biens_vendus"){
						$('#sendTo').val('multidiff@poliris.fr')
					}else{
						$('#sendTo').val('support@poliris.fr')
					}
				}else if($('#at2').children('option:selected').val() == "logiciels_pericles"){
					if($('#at3').children('option:selected').val() == "multidiffusion"){
						$('#sendTo').val('multidiff@poliris.fr')
					}else if($('#at3').children('option:selected').val() == "Demande_evolution"){
						$('#sendTo').val('serviceclients@poliris.fr')
					}else if($('#at3').children('option:selected').val() == "rdv" || $('#at3').children('option:selected').val() == "gestion_des_licences" || $('#at3').children('option:selected').val() == "support_sur_logiciel"){
						$('#sendTo').val('supportn2@poliris.fr')
					}else{
						$('#sendTo').val('support@poliris.fr')
					}
				}else{
					$('#sendTo').val('support@poliris.fr')
				}
			}
		});
	});
	
});