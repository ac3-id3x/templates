//BOUTON POUR AFFICHER LES LISTE DE TYPEBIEN PACK1
$(document).ready(function() {
	$('.bouton-plus-topville').each(function() {
		$(this).on('click',function() {
				$(this).parent().children('.element-liste').show();
				$(this).remove();
		});
	});
	//BOUTON DE VALIDATION MOTEUR SUR PACK1
	$('.bouton-moteur-recherche, .bouton-moteur-recherche-carte, .bouton-moteur-recherche-liste').on('click',function(e) {
		$('#moteur-recherche').submit();
	});
	// REF
	$('.bouton-search-ref-envoi').on('click',function(e) {
		e.stopPropagation();
		var valueRef = $('#refannonce').val(); //.toLowerCase();
		$('#refannonce').val(valueRef);
		if(valueRef.length < 2) {
			$('.erreur-saisie-ref').show();
		} else {
			$('.erreur-saisie-ref').hide();
			$('#moteur-reference').submit();
		}
	});
	$('#moteur-carte-idtypebien').change(function() {
		//affichage du sous type de bien si présence dans le DOM
		if( $("#SousTypesBiens").length ) {
			dataSend="idtypebien="+$(this).val()+"&lang=fr&idtt="+$("#idtt").val();
			$.ajax({
				type: "GET",
				data: dataSend,
				dataType: "html",
				url: '/moteur,incl_soustypesbiens_select.htm',
				success: function(data) {
					$("#SousTypesBiens").html(data);
					$("#SousTypesBiens").find('.multiselect').multipleSelect();
		 	 	},
		 	 	error: function(xhr,statusText) {
		 	 		//console.log(xhr.status);
		 	 	},
		 	 	complete: function(xhr,statusText) {
		 	 	}
			});
		}
	});
});