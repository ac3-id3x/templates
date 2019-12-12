//// $$REM$$====================================================================
//// <summary>scripts pages resultats d'annonces</summary>
//// <remarks>
//// <para>Contient scripts servant à ajouter des annonces, et à compter le nb d'annonces réelles dans le panier</para>
//// <para>Contient scripts servant à supprimer des annonces, et à compter le nb d'annonces réelles dans le panier</para>
//// <para>Contient scripts servant à trier les annonces</para>
//// <para>2009-08-10 : correction du vidage du panier qui ne fonctionnait pas, ajout 100ms de délai</para>
//// </remarks>
//// <update date="2009-08-10" author="erick.barbant">Compilation</update>
//// <update date="2008-08-29" author="lisbonne.siriphol">Compilation</update>
//// ====================================================================$$END$$

//var ajax_img = '<div class="ajaxLoader"><img src="z/webagency/slagence_X_V4/images/moteur/ajax-loader.gif" /></div>';
	// OPEN POPUP
	$(document).ready(function() {
		$(".blocPhotoAnnonce").each(function() {
		if($(this).find(".blocPhoto").has("a").length > 0) {
				$(this).css("cursor","pointer");
				$(this).mouseover(function() {
					//$(this).children(".blocBigPhoto").show();
				});
			$(this).mouseout(function() {
					//$(this).children(".blocBigPhoto").hide();
				});
			$(this).click(function() {
					document.location.href = $(this).find(".blocPhoto a").attr("href");
				});
			}
		});
		$(".blocAnnonce").each(function() {
			var colorBG = $(this).css("background");
			$(this).mouseover(function() {
				$(this).addClass("rechercheOff");
			});
			$(this).mouseout(function() {
				$(this).removeClass("rechercheOff");
			});
		});
		$("div[class*='ongletRecherche']").each(function() {
			if($(this).hasClass("ongletRechercheOff") && $(this).has("a").length > 0){
				$(this).css("cursor","pointer");
			}
			$(this).mouseover(function() {
				if($(this).hasClass("ongletRechercheOff") && $(this).has("a").length > 0){
					$(this).removeClass("ongletRechercheOff");
					$(this).addClass("ongletRechercheOn");
				}
			});
			$(this).mouseout(function() {
				if($(this).hasClass("ongletRechercheOn") && $(this).has("a").length > 0){
					$(this).removeClass("ongletRechercheOn");
					$(this).addClass("ongletRechercheOff");
				}
			});
		});
		/*CHARGEMENT DES CONTACT VIA BOUCLE AGENCE*/
		$(".contactAnnoncesMajAgence").each(function() {
			var idpub = $(this).attr('data-idpub');
			var $this = $(this);
			if (idpub != undefined){
				$.ajax({
					type: "GET",
					data: 'idpublication='+idpub,
					dataType: "html",
					url: '/recherche,contact_liste_ajax.htm',
					beforeSend:function() {
						$this.html('...');
					},
					success: function(data) {
						$this.html(data);
			 	 	},
			 	 	error: function(xhr,statusText) {
			 	 		console.log('ko');
			 	 		//console.log(xhr.status);
			 	 	},
			 	 	complete: function(xhr,statusText) {
			 	 		//console.log(xhr.status);
			 	 	}
			 	});
			 }
		});
	});
	/* PANIER */
	var nbAnnPanier = $$BIF:CHECKBASKET$$$$CHECKBASKET:NBR$$$$DO$$$$LOOP$$$$BFIN$$$$BIF0:CHECKBASKET$$0$$BFIN$$;
	function selectionAnnoncePanier(idpublication,idannonce,nbAnnPanier) {
		nbAnnPanier++;
		$.ajax({
			type: "GET",
			data: 'nbannpanier='+nbAnnPanier,
			dataType: "html",
			url: ''+idpublication+'/'+idannonce+'/scripts,panier,selection_ajouter.htm',
			beforeSend:function() {
				//$("#selection"+idannonce).html(ajax_img);
			},
			success: function(data) {
				$('[id*=NbAnnPanier]').html(data);
				//nbAnnoncePanier($valueActuel);
				cacheLienPanier(idannonce);
	 	 	},
	 	 	error: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	},
	 	 	complete: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	}
		});
	}				
	function cacheLienPanier(idannonce){
		var divAnnonce = $('#selection'+idannonce);
		if (divAnnonce){
			divAnnonce.html('<div class="pictoAjoutSelectionOK"></div><div class="textePicto">$$LG:ANNONCE pcase$$ $$LG:SELEC lcase$$</div>');
		}							
	}
	function nbAnnoncePanier(nbAnnonce){
		$('[id*=NbAnnPanier]').each(function() {
			$(this).html(nbAnnonce);
		});
		/*var divAnnPanier = $('div[id*=hot]');
		if (divAnnPanier){
			divAnnPanier.innerHTML='('+nbAnnonce+')';		
		}	*/					
	}
	function deselectionAnnoncePanier(idpublication,idannonce){
		nbAnnPanier--;
		$.ajax({
			type: "GET",
			data: 'nbannpanier='+nbAnnPanier,
			dataType: "html",
			url: ''+idpublication+'/'+idannonce+'/scripts,panier,selection_supprimer.htm',
			success: function(data) {
				document.getElementById('Annonce'+idannonce).style.display='none';				
				if (nbAnnPanier <= 0){
					reloadPageVide();
				}
	 	 	},
	 	 	error: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	},
	 	 	complete: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	}
		});
	}
	function nbAnnonceSelection(nbAnnonce){
			// $$REM$$ div contenant le nb annonces du panier		$$END$$
			var divAnnPanier = document.getElementById('NbAnnSelection');
			// $$REM$$ on verifie si le div existe $$END$$
			if(divAnnPanier){
			if (nbAnnonce <= 1){
			divAnnPanier.innerHTML=nbAnnonce+' $$LG:ANNONCE lcase$$ $$LG:DANSVOTRESELEC lcase$$';
			}
			else{
				divAnnPanier.innerHTML=nbAnnonce+' $$LG:ANNONCES lcase$$ $$LG:DANSVOTRESELEC lcase$$';
				}
			}
	}
	function viderPanier(){
		$.ajax({
				type: "GET",
				data: null,
				dataType: "html",
				url: '/scripts,panier,selection_vider.htm',
				success: function(data) {
					reloadPageVide();
		 	 	},
		 	 	error: function(xhr,statusText) {
		 	 		//console.log(xhr.status);
		 	 	},
		 	 	complete: function(xhr,statusText) {
		 	 		//console.log(xhr.status);
		 	 	}
		});
	}
	function reloadPageVide() {
		//$$REM$$ a styliser$$END$$
		$('#RechResultat').html('<div id="Loading">$$LG:VEUILLEZPATIENTER$$...</div>');
		//$$REM$$ il faut attendre qu'il ai vraiment vidé le panier avant de recharger donc on met 100ms (merci Erick)$$END$$
		window.setTimeout( "window.location.reload();", 100 );
	}	
