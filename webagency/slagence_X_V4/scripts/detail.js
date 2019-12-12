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
		if (divAnnonce.length > 0){
			divAnnonce.html('<div class="pictoAjoutSelectionOK"></div><div class="textePicto">$$LG:ANNONCE pcase$$ $$LG:SELEC lcase$$</div><div style="clear:both;"></div>');
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
		document.getElementById('RechResultat').innerHTML='<div id="Loading">$$LG:VEUILLEZPATIENTER$$...</div>';
		//$$REM$$ il faut attendre qu'il ai vraiment vidé le panier avant de recharger donc on met 100ms (merci Erick)$$END$$
		window.setTimeout( "window.location.reload();", 100 );
	}	
/* GALERIE PHOTO/VIDEO */
$(document).ready(function() {
	$('#galerieVideo').hide();
	$('#galerieNav').children('li').each(function() {
		$(this).css('cursor','pointer');
		$(this).click(function() {
			var $index = $(this).index();
			if($index == 0) {
				$('#galeriePhoto').show();
				$('#galerieVideo').hide();
			} else {
				$('#galeriePhoto').hide();
				$('#galerieVideo').show();
			}
		});
	});
});
function go(url,n,w,h) {
	window.open(url,n,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+w+',height='+h);
}