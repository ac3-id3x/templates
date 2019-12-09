/**/
var current_cpa = null;

function launchcpa(){
	current_cpa = new cpa();  
}
function cpa(){
	this.initsupp_ann();
	this.initpublie_ann();
}
cpa.prototype.initsupp_ann = function(){
	var current_cpa = this;
	$j('.supp_visu_photo_cpa').click(function() {
		current_cpa.initAnnToSupp($j(this));
		return false;
	});
}
cpa.prototype.initAnnToSupp = function(obj){
	var idEtatAnnonce = obj.parent().find('.idetatannoncedel').val();
	var textConfirm = "Cette annonce n’est déjà plus en ligne.\nEtes-vous sur de vouloir la supprimer ?";
	if (idEtatAnnonce != 3) {
		textConfirm = "Vous allez arrêter la diffusion de votre annonce sur Belles Demeures.\nConfirmez-vous cette suppression ?";
	}
	if(confirm(textConfirm)) {
		var idAnnonce = obj.parent().find('.del').val();
		
		query_post = "u=PAUNIT:CPA-SUPPRIME-ANNONCES&page_ok=ajax_post_cpa_supp.htm&page_err=ajax_post_cpa_supp.htm&del="+idAnnonce;
			
	   $j.ajax({ 
			url: '/ajax_post_cpa_supp.htm',
			data: query_post,
			type: 'POST',
			dataType: 'html', 
			timeout: 5000,
			success: function(data) {
				if (data == 0){
					id3_go(document.location.href);
				} else if (data > 0){
					id3_go(document.location.href);
				}
			}, error: function() {
				id3_go(document.location.href);
			} 
		});	
	}
}


cpa.prototype.initpublie_ann = function(){
	var current_cpa = this;
	$j('.supp_cpa').click(function() {
		current_cpa.initAnnToSupp($j(this));
		return false;
	});
	$j('.publie_cpa').click(function() {
		current_cpa.initAnnToPublie($j(this));
		return false;
	});
}
cpa.prototype.initAnnToPublie = function(obj){
	var idEtatAnnonce = obj.parent().find('.idetatannonce').val();
	var textConfirm = 'Etes-vous sur de vouloir diffuser cette annonce sur Belles Demeures ?';
	if (idEtatAnnonce == 1) {
		textConfirm = "Vous allez prolonger d’1 mois la diffusion de votre annonce.\nConfirmez-vous cette action ?";
	}
	if (idEtatAnnonce == 2) {
		textConfirm = "Votre annonce va être traitée par le service qualité.\nVeuillez attendre la validation avant de prolonger la diffusion de cette annonce.";
		alert(textConfirm);
		return false;
	}
	if(confirm(textConfirm)) {
		var idAnnonce = obj.parent().find('.idannonce').val();
		var idTypeProduit = obj.parent().find('.idtypeproduit').val();
		
		query_post = "u=PAUNIT:PUBLICATION_ANNONCES&page_ok=ajax_post_cpa_publish.htm&page_err=ajax_post_cpa_publish.htm&idannonce="+idAnnonce+"&idtypeproduit="+idTypeProduit;
			
	   $j.ajax({ 
			url: '/ajax_post_cpa_publish.htm',
			data: query_post,
			type: 'POST',
			dataType: 'html', 
			timeout: 5000,
			success: function(data) {
				if (data == 0){
					id3_go(document.location.href);
				} else if (data > 0){
					id3_go(document.location.href);
				}
			}, error: function() {
				id3_go(document.location.href);
			}
		});
		
	}
}

$j(document).ready(function(){
	launchcpa();
});