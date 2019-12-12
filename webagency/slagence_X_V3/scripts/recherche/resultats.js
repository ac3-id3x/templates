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
	
	var $j = jQuery.noConflict();
	
	$j(document).ready(function() {
		$j(".blocPhotoAnnonce").each(function() {
		if($j(this).find(".blocPhoto").has("a").length > 0) {
				$j(this).css("cursor","pointer");
				$j(this).mouseover(function() {
					//$j(this).children(".blocBigPhoto").show();
				});
			$j(this).mouseout(function() {
					//$j(this).children(".blocBigPhoto").hide();
				});
			$j(this).click(function() {
					document.location.href = $j(this).find(".blocPhoto a").attr("href");
				});
			}
		});
		$j(".blocAnnonce").each(function() {
			var colorBG = $j(this).css("background");
			$j(this).mouseover(function() {
				$j(this).addClass("rechercheOff");
			});
			$j(this).mouseout(function() {
				$j(this).removeClass("rechercheOff");
			});
		});
		$j("div[class*='ongletRecherche']").each(function() {
			if($j(this).hasClass("ongletRechercheOff") && $j(this).has("a").length > 0){
				$j(this).css("cursor","pointer");
			}
			$j(this).mouseover(function() {
				if($j(this).hasClass("ongletRechercheOff") && $j(this).has("a").length > 0){
					$j(this).removeClass("ongletRechercheOff");
					$j(this).addClass("ongletRechercheOn");
				}
			});
			$j(this).mouseout(function() {
				if($j(this).hasClass("ongletRechercheOn") && $j(this).has("a").length > 0){
					$j(this).removeClass("ongletRechercheOn");
					$j(this).addClass("ongletRechercheOff");
				}
			});
		});
	});
	/* PANIER */
	var nbAnnPanier = $$BIF:CHECKBASKET$$$$CHECKBASKET:NBR$$$$DO$$$$LOOP$$$$BFIN$$$$BIF0:CHECKBASKET$$0$$BFIN$$;
	function selectionAnnoncePanier(idpublication,idannonce,nbAnnPanier) {
		nbAnnPanier++;
		$j.ajax({
			type: "GET",
			data: 'nbannpanier='+nbAnnPanier,
			dataType: "html",
			url: ''+idpublication+'/'+idannonce+'/scripts,selection_ann,selection_ajouter.htm',
			beforeSend:function() {
				//$j("#selection"+idannonce).html(ajax_img);
			},
			success: function(data) {
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
		var divAnnonce = $j('#selection'+idannonce);
		if (divAnnonce){
			divAnnonce.html('<p class="selectionOk"><span class="pictoSelection_Ok"><!-- --></span>$$LG:ANNONCE pcase$$ $$LG:SELEC lcase$$</p>');
		}							
	}
	function nbAnnoncePanier(nbAnnonce){
		var divAnnPanier = document.getElementById('NbAnnPanier');
		if (divAnnPanier){
			divAnnPanier.innerHTML='('+nbAnnonce+')';		
		}						
	}
	function deselectionAnnoncePanier(idpublication,idannonce){
		nbAnnPanier--;
		$j.ajax({
			type: "GET",
			data: 'nbannpanier='+nbAnnPanier,
			dataType: "html",
			url: ''+idpublication+'/'+idannonce+'/scripts,selection_ann,selection_supprimer.htm',
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
		$j.ajax({
				type: "GET",
				data: null,
				dataType: "html",
				url: '/scripts,selection_ann,selection_vider.htm',
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
		document.getElementById('RechResultat').innerHTML='<div id="Loading">$$LG:VEUILLEZPATIENTER$$...</div>';
		//$$REM$$ il faut attendre qu'il ai vraiment vidé le panier avant de recharger donc on met 100ms (merci Erick)$$END$$
		window.setTimeout( "window.location.reload();", 100 );
	}	
