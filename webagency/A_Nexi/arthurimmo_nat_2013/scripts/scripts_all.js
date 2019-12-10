$(document).ready(function() {


	$(".btn-show-hide-moteur").on("click",function(e) {
		e.preventDefault();
		sliderBloc(".bloc-moteur");
	});
	$(".low").hover(function(e) {
		$(".nb-annonce-home").addClass("low").removeClass("high");
		$(this).addClass("high").removeClass("remove");
	});
	$("#recherche-listing").on("click",".show-thumbs",function(e) {
		e.preventDefault();
		var blockthumb = $(this).parent("div").parent("div").parent("div").parent("div").parent("div").find(".block-thumb");
		if (blockthumb.hasClass("display-show")){
			blockthumb.removeClass("display-show");
		}else{
			blockthumb.addClass("display-show");
		}
	});

	function clicPhone(a,$this){
		$this.find(".texte-telephonez-nous-arth"+a).hide();
		$this.find(".numero-telephonez-nous-arth"+a).show();
		$this.attr("class","");
		$this.unbind("click");
	}
	$(".texte-telephonez-nous-arth").parent().click(function() {
		var a="";
		var $this = $(this);
		clicPhone(a,$this);
	});


	/*FORM ESTIMATION IMMOBILIERE.HTM (champs "autre")*/
	$(".bouton-estimation[data-idtt='6']").on("click",function() {
		$("#typetransactionautre").toggle();
	});
	$(".bouton-estimation[data-idtypebien='10']").on("click",function() {
		$("#typebienautre").toggle();
	});

	/* DEFILEMENT SLIDE AGENCE */
	$(".agence-multi-defile").cycle();

	/*FORM CONTACT VENTE*/
	$(".bouton-form-envoyer-vente-ami").on("click",function() {
		_gaq.push(["_trackPageview", "/virtual_detail/Envoyer_contact_vente/envoi_contact_vente.htm"]);
	});
	/*FORM NEWS*/
	$(".bouton-envoyer-news-agence").on("click",function() {
		_gaq.push(["_trackPageview", "/virtual_detail/Envoyer_contact_newsletter/envoi_contact_newsletter.htm"]);
	});
	/*FORM REJOINDRE*/
	$(".bouton-envoyer-rejoindre-agence").on("click",function() {
		_gaq.push(["_trackPageview", "/virtual_detail/Envoyer_contact_rejoindre/envoi_contact_rejoindre.htm"]);
	});
	/*FORM NEWSLETTER*/
	$("[placeholder]").focus(function() {
		var input = $(this);
		if (input.val() == input.attr("placeholder")) {
			input.val("");
			input.removeClass("placeholder");
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == "" || input.val() == input.attr("placeholder")) {
			input.addClass("placeholder");
			input.val(input.attr("placeholder"));
		}
	}).blur();
	$(".form-news-footer").on("click",".bouton-envoyer-news-agence", function (e) {
		e.preventDefault();
		var bton = $(this);
		//bton.button("loading");
		$.ajax({
			type: "POST",
			data : $(this).parent().parent(".form-news-footer").serialize(),
			dataType:"json",
			url: "/agence,incl_contact_news_email.htm",
			beforeSend: function() {
				$(".message-erreur-alerte-news").html("");
			},
			success: function(data) {
				var idpublication = data.idpublication;
				if(data.message.length > 0) {
					$(".message-erreur-alerte-news").html(data.message);
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$("#email-message").addClass("error").removeClass("success");
					} else {
						$("#email-message").removeClass("error").addClass("success");
					}
				} else {
					$(".message-erreur-alerte-news").html(messageOK);
					$("#email-message").val("");
					alert(messageOK);
					$("#email-message").removeClass("error").addClass("success");
				}
			},
			error : function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//bton.button("reset");
				$(".message-erreur-alerte-news").show("slow").delay(2500).hide("slow");
			}
		});
	});



	// FORMULAIRE FINANCEMENT

	//Classe générique pour gérer ACTIF/INACTIF
	$(".btn-financement").on("click",function(e) {
		e.preventDefault();
		var btn = $(this);
		var val = btn.data("value");
		var champ = btn.data("hidden");
		$("#"+champ).val(val);
		$(".btn-financement[data-hidden='"+champ+"']").removeClass("btn-action").addClass("btn-neutre");
		btn.addClass("btn-action").removeClass("btn-neutre");
	});


	// Classe spécifique pour gérer les 3 groupes.
	$(".btn-financement[data-hidden='FinTypeFinancement']").on("click",function() {
		$("."+$(this).data("hidden")).hide();
		$("#"+$(this).data("cible")).show();
		if($(this).data("cible") == 'FinTypeFinancement-2'){
			$(".SituationPerso").hide();
		} else {
			$(".SituationPerso").show();
		}

		$(".FinSituationPerso").show();
		$(".FinSubmit").show();
	});

	// Situation familiale
	$(".btn-financement[data-hidden='FinSituation']").on("click",function() {
		$("."+$(this).data("hidden")).hide();
		$("#"+$(this).data("cible")).show();
		if($(this).data("cible") == 'FinSituation-2'){
			$(".FinSituationConjoint").show();
		} else {
			$(".FinSituationConjoint").hide();
		}
	});

	// Situation professionnelle
	$("select[name='FinSituationPro']").on("change",function() {
		if($('option:selected',this).data("cible") == 'FinSituationSalarie'){
			$("#FinSituationSalarie").show();
		} else {
			$("#FinSituationSalarie").hide();
		}
		if($('option:selected',this).data("statut") == 'freelance'){
			$(".FinSituationFreelance").hide();
		} else {
			$(".FinSituationFreelance").show();
		}
	});

	// Signature
	$(".btn-financement[data-hidden='ProSign']").on("click",function() {
		$("."+$(this).data("hidden")).hide();
		$("#"+$(this).data("cible")).show();
	});

	// Autre type de projet
	$("select[name='ProTypeProjet']").on("change",function() {
		if($('option:selected',this).data("cible") == 'ProTypeProjetAutre'){
			$(".ProTypeProjetAutre").show();
		} else {
			$(".ProTypeProjetAutre").hide();
		}
	});

	// Autres charges
	$(".btn-financement[data-hidden='RegrpCharges']").on("click",function() {
		$("."+$(this).data("hidden")).hide();
		$("#"+$(this).data("cible")).show();
	});

	// Logement
	$(".btn-financement[data-hidden='RegrpLogement']").on("click",function() {
		$("."+$(this).data("hidden")).hide();
		$("#"+$(this).data("cible")).show();
	});

	$("#form-financement").submit(function(e){
		var error = false;
		$(".btn-financement-required").each(function(){
			if( $(this).is(":visible") ){
				var hid = $(this).data("hidden");
				var valhid = $("#"+hid).val();
				if( !valhid ){
					error = true;
					$(".btn-financement[data-hidden='"+hid+"']").addClass("btn-error");
				}
			}
		});
		$(".required").each(function(){
			if( $(this).is(":visible") ){
				if( !$(this).val() ){
					error = true;
					$(this).addClass("field-error");
				}
			}
		});
		if( error ){
			e.preventDefault();
			alert("Veuillez renseigner tous les champs obligatoires");
		}
	});



	if( $("#form-financement").length ){  //on vérifie qu'on est sur le form de financement.

	$(".btn-financement").each(function(){
		var hid = $(this).data("hidden");
		var valhid = $("#"+hid).val();
		var valbtn = $(this).data("value");
		if( valhid == valbtn ){
			$(this).click();
		}
	});

}











});
