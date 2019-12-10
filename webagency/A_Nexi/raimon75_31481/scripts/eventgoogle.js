$(document).ready(function() {
	//$('#BoutonContactAnnonce').click(function() {
	//	_gaq.push(['_trackEvent', 'Formulaire_annonce', 'annonce:$$REP:1$$']);
	//})
	//$('#boutonEnvoiAmi').click(function() {
	//	_gaq.push(['_trackEvent', 'envoi_ami', 'annonce:$$REP:1$$']);
	//})
	//$('#boutonEnvoiEstimation').click(function() {
	//	_gaq.push(['_trackEvent', 'formulaire_estimation', 'estimation']);
	//})
	//$('#boutonEnvoiAgence').click(function() {
	//	_gaq.push(['_trackEvent', 'formulaire_contact', 'contact']);
	//})
	
	$('#BoutonContactAnnonce').click(function() {
		_gaq.push(['_trackPageview', '/formulaire_annonce.htm']);
	})
	$('#boutonEnvoiAmi').click(function() {
		_gaq.push(['_trackPageview', '/envoi_a_un_ami.htm']);
	})
	$('#boutonEnvoiEstimation').click(function() {
		_gaq.push(['_trackPageview', '/contact_estimation.htm']);
	})
	$('#boutonEnvoiAgence').click(function() {
		_gaq.push(['_trackPageview', '/formulaire_contact_agence.htm']);
	})
	
	
})