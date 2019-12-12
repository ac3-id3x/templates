function openCodes_Postaux() {
			window.open('/moteur,codes_postaux.htm?lang=$$LANGUE$$', 'cdp', ',height=400, width=360, scrollbars=yes, resizable=no, toolbar=no, status=no, menubar=no');
		}
		
// deselection bouton radio
var desact = false;

// CheckBoxTerrain
function disableTerrain(id){
	if(id.checked == true){
		document.getElementById('InputSurfaceTerrain').style.display= 'block';
		document.getElementById('CheckBoxTerrainConstructible').style.display= 'block';
		
	}
	else{
		document.getElementById('InputSurfaceTerrain').style.display= 'none';
		document.getElementById('CheckBoxTerrainConstructible').style.display= 'none';
	}
} 

// affiche criteres appart
function afficheCriteresAppart(id){
		if(id.checked == true){
			document.getElementById('inputDuplex').style.display= 'block';				
		}
		else{
			document.getElementById('inputDuplex').style.display= 'none';
		}
	}



/*==================================================REGION - DEPT - VILLES - QUARTIER======================================================*/

/* défini les pays en fonction du type de trans et/ou type de bien */


function MoteurListePays(idtt, langue) {
		mesparametres = "lang=" + langue + "&idtt=" + idtt;
		//monurl = "/moteur,incl_pays.htm";
		if(idtt != '') {		
		//new Insertion.Top('MiniPays', '<div class="miniDiv patientez">$$LG:VEUILLEZPATIENTER pcase$$, $$LG:CHARGEMENTENCOURS lcase$$...</div>');
		//var myAjax = new Ajax.Updater('MiniPays', 
			//monurl, 
			//{
				//method: 'get', 
				//parameters: mesparametres,
				//onComplete:function () { alert("ok");TestPays(idtt);}
				
			//});
			MoteurTestPays(idtt,langue);		
	}
}


function MoteurTestPays (idtt,langue){
	if(divminipays){
		var idpays = divminipays.getElementsByTagName("input");
		var selidpays = divminipays.getElementsByTagName("select");
		if(idtt != ""){
			divminipays.style.display = "block";
			var selectpays = divminipays.getElementsByTagName("select"); // tableau qui définit l'existence du select pays
				if(selectpays){	// condition si il y a des annonces et donc des pays
							
					if(idpays.length == 1){ // si il y a un champs hidden pays soit 1 seul pays*
						
							if(idpays[0].value == "250"){	// si le seul pays est la france
										if(divminiregion){ // si region existe
												MoteurListeRegion(idpays[0].value, idtt, langue);
												if(divminidep){divminidep.style.display = "none";}
												if(divminivilles){divminivilles.style.display = "none";}
												if(divminiquartiers){divminiquartiers.style.display = "none";}
										}else if(divminidep){// si dep existe
												MoteurListeDep(idtt, '',langue);
												if(divminivilles){divminivilles.style.display = "none";}
												if(divminiquartiers){divminiquartiers.style.display = "none";}
										}else if(divminivilles){// si villes existe
												MoteurListeVilles(idtt, '',langue);
												if(divminiquartiers){divminiquartiers.style.display = "none";}
										}

							}else{// si le seul pays est étranger
									if(divminiregionetr){
										MoteurListeRegionEtr(idpays[0].value, idtt, langue);
									}
							}
									
					}else if(selidpays[0].value == ""){
						if(divminiregion){divminiregion.style.display = "none";}
						if(divminiregionetr){divminiregionetr.style.display = "none";}
						if(divminidep){divminidep.style.display = "none";}
						if(divminivilles){divminivilles.style.display = "none";}
						if(divminiquartiers){divminiquartiers.style.display = "none";}
					}
			}
		}else{
			divminipays.style.display = "none";
		}	
		
	}else{
		if(divminiregion){ // si region existe
				MoteurListeRegion('250', idtt, langue);
				if(divminidep){divminidep.style.display = "none";}
				if(divminivilles){divminivilles.style.display = "none";}
				if(divminiquartiers){divminiquartiers.style.display = "none";}
		}else if(divminidep){// si dep existe
				MoteurListeDep(idtt, '',langue);
				if(divminivilles){divminivilles.style.display = "none";}
				if(divminiquartiers){divminiquartiers.style.display = "none";}
		}else if(divminivilles){// si villes existe
				MoteurListeVilles(idtt, '',langue);;
				if(divminiquartiers){divminiquartiers.style.display = "none";}
		}
	}
	
}


/* défini les regions en fonction du type de trans */
function MoteurListeRegion(elt, idtt, langue) {
	mesparametres = "lang=" + langue + "&idpays=" + elt + "&idtt=" + idtt ;
	if(elt == "250"){
		if(divminiregion){

		monurl = "/moteur,incl_region.htm";
		
		if(elt != ""){
			divminiregion.style.display = "block";
			if(divminiregionetr){divminiregionetr.style.display = "none";
			var selectregetr = divminiregionetr.getElementsByTagName("select");
				if(selectregetr.length != 0){
						selectregetr.iddivision.selectedIndex = 0;
				}
			}
			if(divminidep){divminidep.style.display = "none";}
			if(divminivilles){divminivilles.style.display = "none";}
			if(divminiquartiers){divminiquartiers.style.display = "none";}
		}else{
			divminiregion.style.display = "none";
		}
		
		new Insertion.Top('MoteurRegion', '<div class="miniDiv patientez">Veullez patienter, chargement en cours...</div>');
		var myAjax = new Ajax.Updater(
		'MoteurRegion', 
		monurl, 
				{
					method: 'get', 
					parameters: mesparametres	
				});		
		}else if(divminidep){
				MoteurListeDep(idtt, langue);
		}else if(divminivilles){
				MoteurListeVilles(idtt, langue);
		}
	}else{
		if(divminiregionetr){
			monurl = "/moteur,incl_region_etr.htm";
		
		if(elt != ""){
				divminiregionetr.style.display = "block";
				if(divminiregion){divminiregion.style.display = "none";
				var selectreg = divminiregion.getElementsByTagName("select");
				if(selectreg.length != 0){
					selectreg.cp.selectedIndex = 0;
				}
				}
			}else{
				divminiregionetr.style.display = "none";
			}
			
	new Insertion.Top('MoteurRegionEtr', '<div class="miniDiv patientez">Veullez patienter, chargement en cours...</div>');
	var myAjax = new Ajax.Updater(
	'MoteurRegionEtr', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});	
		}
	}
}

/* défini les departements en fonction du type de trans et/ou region */
function MoteurListeDep(idtt, elt, langue) {
		if(divminidep){
			if(idtt){
				if(divminiregion){
					if(elt){
						divminidep.style.display = "block";
						MoteurListeVilles('', '', langue);
					}else{
						divminidep.style.display = "none";
						MoteurListeVilles('', '', langue);
					}
				}else{
					divminidep.style.display = "block";
				}
			}else{
				divminidep.style.display = "none";	
				MoteurListeVilles('', '', langue);
			}
		
	mesparametres = "lang=" + langue + "&cp=" + elt + "&idtt=" + idtt;
	monurl = "/moteur,incl_dep.htm";
	
	new Insertion.Top('MoteurDep', '<div class="miniDiv patientez">Veullez patienter, chargement en cours...</div>');

	var myAjax = new Ajax.Updater(
	'MoteurDep', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});		
		}else{
			if(idtt){
				if(divminiregion){
					if(elt != ""){
						MoteurListeVilles(idtt, elt, langue);
					}else{
						MoteurListeVilles('', '', langue);
					}
				}
			}
		}
}

/* défini les villes en fonction du type de trans et/ou region/dep/pays/rien */
function MoteurListeVilles(idtt, elt, langue) {
		if(divminivilles){// si affichage villes = 1 
		if(idtt){
			if(divminidep){
					if(elt){
						divminivilles.style.display = "block";
						MoteurListeQuartiers('',langue); // fait disparaitre les quartiers si villes non selectionnée
					}else{
						divminivilles.style.display = "none";
						MoteurListeQuartiers('',langue); // fait disparaitre les quartiers si villes disparait
					}
			}else{
				divminivilles.style.display = "block";
				if(!elt){
					MoteurListeQuartiers('',langue); // fait disparaitre les quartiers si villes disparait
					}
				}	 
		}else{
			divminivilles.style.display = "none";	
			MoteurListeQuartiers('',langue); // fait disparaitre les quartiers si villes disparait
		}
	mesparametres = "lang=" + langue + "&cp=" + elt + "&idtt=" + idtt;
	monurl = "/moteur,incl_villes.htm";
	
	new Insertion.Top('MoteurVilles', '<div class="miniDiv patientez">Veullez patienter, chargement en cours...</div>');

	var myAjax = new Ajax.Updater(
	'MoteurVilles', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});	
	}	
}

/* défini les quartiers en fonction du type de trans et/ou region/dep/pays/rien */
function MoteurListeQuartiers(elt, langue) {
		if(divminiquartiers){
		if(elt){
				divminiquartiers.style.display = "block";
		}else{
			divminiquartiers.style.display = "none";	
		}

	mesparametres = "lang=" +langue+ "&ci=" + elt;
	monurl = "/moteur,incl_quartiers.htm";
	
	new Insertion.Top('MoteurQuartiers', '<div class="miniDiv patientez">Veullez patienter, chargement en cours...</div>');

	var myAjax = new Ajax.Updater(
	'MoteurQuartiers', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
				
			});		
		}
}

var lgmini='$$LG:MINI pcase$$';
var lgmaxi='$$LG:MAXI pcase$$';

/*Fonction qui permet de ne pas envoyer les champs input si il n'y pas de valeur */
function Envoi(){
	var boite = document.getElementById("Moteur");
	var tableau = boite.getElementsByTagName("input");
		if(boite && tableau){
			for(var i=0; i<tableau.length; i++){
				if(tableau[i].value == lgmini || tableau[i].value == lgmaxi){
					tableau[i].value= "";
				}
			}
			
		/* FIXING CHROME / SAFARI = ERREUR SUR (getElementsByTagName)*/
			if(divminivilles){ 
					var selectvilles = document.getElementById("MoteurSelectVilles");
					//var selectvilles = divselminivilles.getElementsByTagName("select");
					if(selectvilles.value != 0){
						if(divminidep){
							var selectdep = document.getElementById("MoteurSelectDep");
							//var selectdep = divminidep.getElementsByTagName("select");
							selectdep.value = '';
						}
						if(divminiregion){
							var selectregion = document.getElementById("MoteurSelectRegion");
							selectregion.value = '';
						}
					}else{
						if(divminidep){
							//var selectdep = divminidep.getElementsByTagName("select");
							var selectdep = document.getElementById("MoteurSelectDep");
							if(selectdep.value != ''){
								if(divminiregion){
									var selectregion = document.getElementById("MoteurSelectRegion");
									selectregion.value = '';
								}
							}
						}
					}
			}	
			/* END FIXING */
			
		var surf = document.getElementById("MiniSurface");
		if(surf){
			var surfmin = document.getElementById("MiniInputSurfaceMin");
			var surfmax = document.getElementById("MiniInputSurfaceMax");
		}
		
		var budg = document.getElementById("MiniBudget");
		if(budg){
			var ventediv = document.getElementById("MiniDivSelectBudgetVente");
			var locdiv = document.getElementById("MiniDivSelectBudgetLoc");
			var budgmin = document.getElementById("pxhidden");// FIXME: pxhidden apparemment introuvable dans la source HTML
			if(ventediv){
				var ventesel = document.getElementById("MiniSelectBudgetVente");
				var ventevaleur = ventesel.value;
				if((ventevaleur.indexOf('/') == -1) && (ventevaleur != '')){
					budgmin.value = ventevaleur;
					ventesel.selectedIndex = 0;
				}
			}else if (locdiv){
				var locsel = document.getElementById("MiniSelectBudgetLoc");
				var locvaleur = locsel.value;
				if((locvaleur.indexOf('/') == -1) && (locvaleur != '')){
					budgmin.value = locvaleur;
					locsel.selectedIndex = 0;
				}
			}
		}
		
		}else{alert("Error Envoi");}
}
/*==================================================MOTEUR COMMERCE======================================================*/


