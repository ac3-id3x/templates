function getCarouPerso($data) {
		$split = $data.split('|');
		$id = $split[0];
		$type = $split[1];
		$.ajax({
			type:"GET",
			url:"/index,carrousel_favoris.htm",
			data:'idtt='+$id+'&'+$type+'&photo=10',
			beforeSend: function() {
				$('#containerAjaxCarrousel').html('<div style="text-align:center;"><img src="$$-$$images/loader-map.gif" /></div>');
			},
			success: function(data) {
				$('#containerAjaxCarrousel').html(data).trigger("create");
		 	 },
		 	 error: function(xhr,statusText) {
		 	 	//console.log(xhr.status);
		 	 },
		 	 complete: function(xhr,statusText) {
		 	 	//console.log(xhr.status);
		 	 }
		});
};
function changeURL($data) {
	$url = $('#lien_recherche').attr('href');
	$new_url = $url+'?'+$data+'&lang=$$FORM:LANG$$';
	$('#lien_recherche').attr('href',$new_url);
}
$(document).delegate("#index","pageshow", function (event) {
	$('#nos_dernieres_ventes').hide();
	var $recherche = localStorage['recherche'];
	var $lastRecherche = localStorage['derniererecherche'];
	if(typeof($recherche) != 'undefined') {
		//getCarouPerso($recherche);
	}
	if($lastRecherche != undefined){
		changeURL($lastRecherche);
		getsearch();
	} else {
		$('#nos_dernieres_ventes').show();
		$('#lien_recherche').hide();
	}
});
//RECUPERE L'INTITULE DE LA DERNIERE RECHERCHE
function getsearch(){
	var phrase = localStorage['phraserecherche'];
	if(phrase != undefined){
		$('#phrasesearch').html(phrase);
	} else {
		$('#lien_recherche').hide();
	}
}
