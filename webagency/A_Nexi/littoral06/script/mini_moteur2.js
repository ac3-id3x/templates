/* 04.01.2011 debugg c/o Lisbonne
defini les onglets carte ou liste */
	function ChoixTypeRech(id){
 		var pageResultat = document.getElementById('minimoteur');
      if(id == 'l'){
        		pageResultat.action = '/mini_moteur2,prevalidation.htm';		
     }else if(id == 'c'){
     		$$IF=:V1:FORM:WAG_GEOLOC$$
     				pageResultat.action = '/mini_moteur2,prevalidation_carte_old.htm';
     		$$END$$
     		$$IF=:V2:FORM:WAG_GEOLOC$$
     				pageResultat.action = '/mini_moteur2,prevalidation_carte.htm';
     		$$END$$
     }
 	}

/* 06.07.2007 
				il semble que ce script �tait bugg�, pourquoi on sait pas
				mais on l'a remplac� par celui ci-dessus
				sign� Lisbonne et Christophe
*/
/*defini les onglets carte ou liste */
//	function ChoixTypeRech(id){
// 		var page_ok = document.getElementsByName('page_ok')[0];
//      if(id == 'l'){
//        		document.getElementById('MiniChoixListe').style.backgroundPosition='bottom left';
//        		page_ok.value = '/recherche$$FORM:WAGSTYLE$$.htm';
//        		document.forms['minimoteur'].action = '/recherche$$FORM:WAGSTYLE$$.htm';
//        		document.getElementById('MiniChoixCarte').style.backgroundPosition='top left'; 			
//   		
//     	}else if(id == 'c'){
//       		document.getElementById('MiniChoixCarte').style.backgroundPosition='bottom left';
//      		page_ok.value = '/map,recherche.htm';
//        	document.forms['minimoteur'].action = '/map,recherche.htm';
//      		document.getElementById('MiniChoixListe').style.backgroundPosition='top left';
//   	}
//	}


/* d�fini les types d'activit� en fonction du type de commerce */
function ListeTypeActivite(elt, idtacache){
	mesparametres = "lang=$$FORM:LANG$$&idtc=" + elt + "&idtacache=" + idtacache ;
	monurl = "/mini_moteur2,incl_mini_typeactivite.htm";
	
	if(elt != ""){
			divminitypeactivite.style.display = "inline";
		}else{
			divminitypeactivite.style.display = "none";
		}
	
	new Insertion.Top('MiniTypeActivite', '<span class="Patientez" id="PatientezTypeActivite">Patientez, chargement en cours...<br/></span>');
	var myAjax = new Ajax.Updater(
	'MiniTypeActivite', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});	
	}


/* d�fini les types de biens en fonction du type de trans */
function ListeTypeBien(elt) {
	mesparametres = "lang=$$FORM:LANG$$&idtt=" + elt + "&idtbcache=$$FORM:MINIIDTBCACHE$$&nbannvisible=$$FORM:NBANNVISIBLE$$" ;
	monurl = "/mini_moteur2,incl_mini_typedebien.htm";
	if(elt != ""){
		divminitypebien.style.display = "inline";
	}else{
		divminitypebien.style.display = "none";
	}
	
	new Insertion.Top('MiniTypeBien', '<span class="Patientez" id="PatientezTypeBien">Patientez, chargement en cours...<br/></span>');
	var myAjax = new Ajax.Updater(
	'MiniTypeBien', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});	
}

/* d�fini les sous types de biens en fonction du type de bien */
function ListeSousTypeBien(elt, idtt) {
	if(divminisoustypebien){
	mesparametres = "lang=$$FORM:LANG$$&idtb=" + elt + "&idtt=" + idtt + "&idsoustbcache=$$FORM:MINISOUSTBCACHE$$&nbannvisible=$$FORM:NBANNVISIBLE$$" ;
	monurl = "/mini_moteur2,incl_mini_soustypedebien.htm";
	
	if(elt != ""){
		divminisoustypebien.style.display = "inline";
	}else{
		divminisoustypebien.style.display = "none";
	}
	
	new Insertion.Top('MiniSousTypeBien', '<span class="Patientez" id="PatientezSousTypeBien">Patientez, chargement en cours...<br/></span>');
	var myAjax = new Ajax.Updater(
	'MiniSousTypeBien', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});	
		}
}

/* d�fini les pays en fonction du type de trans et/ou type de bien */
function ListePays(idtt, elt) {
	if(divminipays){
	mesparametres = "lang=$$FORM:LANG$$&idtypebien=" + elt + "&idtt=" + idtt;
	monurl = "/mini_moteur2,incl_mini_pays.htm";
	
	new Insertion.Top('MiniPays', '<span class="Patientez" id="PatientezPays">Patientez, chargement en cours...<br/></span>');

	var myAjax = new Ajax.Updater(
	'MiniPays', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres,
				onComplete:function () { TestPays(idtt);}
				
			});		
			
		}else{
			TestPays (idtt);
			}
}

function TestPays (idtt){
	
	if(divminipays){
		var idpays = divminipays.getElementsByTagName("input");
		var selidpays = divminipays.getElementsByTagName("select");
		if(idtt != ""){
			divminipays.style.display = "inline";
			var selectpays = divminipays.getElementsByTagName("select");/* tableau qui d�finit l'existence du select pays */
				if(selectpays){	/* condition si il y a des annonces et donc des pays */
							
					if(idpays.length == 1){ /* si il y a un champs hidden pays soit 1 seul pays*/ 
						
							if(idpays[0].value == "250"){	/* si le seul pays est la france */ 
										if(divminiregion){ /* si region existe */
												ListeRegion(idpays[0].value, idtt, '');
												if(divminidep){divminidep.style.display = "none";}
												if(divminivilles){divminivilles.style.display = "none";}
												if(divminiquartiers){divminiquartiers.style.display = "none";}
												if(divminirayon){divminirayon.style.display = "none";}
										}else if(divminidep){/* si dep existe */
												ListeDep(idtt, '');
												if(divminivilles){divminivilles.style.display = "none";}
												if(divminiquartiers){divminiquartiers.style.display = "none";}
												if(divminirayon){divminirayon.style.display = "none";}
										}else if(divminivilles){/* si villes existe */
												ListeVilles(idtt, '');
												if(divminiquartiers){divminiquartiers.style.display = "none";}
												if(divminirayon){divminirayon.style.display = "none";}
										}

							}else{/* si le seul pays est �tranger */ 
									if(divminiregionetr){
										ListeRegionEtr(idpays[0].value, idtt, '');
									}
							}
									
					}else if(selidpays[0].value == ""){
						if(divminiregion){divminiregion.style.display = "none";}
						if(divminiregionetr){divminiregionetr.style.display = "none";}
						if(divminidep){divminidep.style.display = "none";}
						if(divminivilles){divminivilles.style.display = "none";}
						if(divminiquartiers){divminiquartiers.style.display = "none";}
						if(divminirayon){divminirayon.style.display = "none";}
					}
			}
		}else{
			divminipays.style.display = "none";
		}	
		
	}else{
		if(divminiregion){ /* si region existe */
				ListeRegion('250', idtt, '');
				if(divminidep){divminidep.style.display = "none";}
				if(divminivilles){divminivilles.style.display = "none";}
				if(divminiquartiers){divminiquartiers.style.display = "none";}
				if(divminirayon){divminirayon.style.display = "none";}
		}else if(divminidep){/* si dep existe */
				ListeDep(idtt, '');
				if(divminivilles){divminivilles.style.display = "none";}
				if(divminiquartiers){divminiquartiers.style.display = "none";}
				if(divminirayon){divminirayon.style.display = "none";}
		}else if(divminivilles){/* si villes existe */
				ListeVilles(idtt, '');
				if(divminiquartiers){divminiquartiers.style.display = "none";}
				if(divminirayon){divminirayon.style.display = "none";}
		}
	}
	
}


/* d�fini les regions en fonction du type de trans */
function ListeRegion(elt, idtt, idtb) {
	mesparametres = "lang=$$FORM:LANG$$&idpays=" + elt + "&idtt=" + idtt + "&idtypebien=" + idtb;
	if(elt == "250"){
		if(divminiregion){
		monurl = "/mini_moteur2,incl_mini_region.htm";
		
		if(elt != ""){
			divminiregion.style.display = "inline";
			if(divminiregionetr){divminiregionetr.style.display = "none";
			var selectregetr = divminiregionetr.getElementsByTagName("select");
				if(selectregetr.length != 0){
						selectregetr.iddivision.selectedIndex = 0;
				}
			}
			if(divminidep){divminidep.style.display = "none";}
			if(divminivilles){divminivilles.style.display = "none";}
			if(divminiquartiers){divminiquartiers.style.display = "none";}
			if(divminirayon){divminirayon.style.display = "none";}
		}else{
			divminiregion.style.display = "none";
		}
		
		new Insertion.Top('MiniRegion', '<span class="Patientez" id="PatientezRegion">Patientez, chargement en cours...<br/></span>');
		var myAjax = new Ajax.Updater(
		'MiniRegion', 
		monurl, 
				{
					method: 'get', 
					parameters: mesparametres
				});	
		}else if(divminidep){
				ListeDep(idtt, '');
		}else if(divminivilles){
				ListeVilles(idtt, '');
		}
	}else{
		if(divminiregionetr){
			monurl = "/mini_moteur2,incl_mini_regionetr.htm";
		
		if(elt != ""){
				divminiregionetr.style.display = "inline";
				if(divminiregion){divminiregion.style.display = "none";
				var selectreg = divminiregion.getElementsByTagName("select");
				if(selectreg.length != 0){
					selectreg.cp.selectedIndex = 0;
				}
				}
			}else{
				divminiregionetr.style.display = "none";
			}
			
	new Insertion.Top('MiniRegionEtr', '<span class="Patientez" id="PatientezRegionEtr">Patientez, chargement en cours...<br/></span>');
	var myAjax = new Ajax.Updater(
	'MiniRegionEtr', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});	
		}
	}
}


/* d�fini les departements en fonction du type de trans et/ou region */
function ListeDep(idtt, elt) {
		if(divminidep){
			if(idtt){
				if(divminiregion){
					if(elt){
						divminidep.style.display = "inline";
						ListeVilles('', '');
					}else{
						divminidep.style.display = "none";
						ListeVilles('', '');
					}
				}else{
					divminidep.style.display = "inline";
				}
			}else{
				divminidep.style.display = "none";	
				ListeVilles('', '');
			}
		
	mesparametres = "lang=$$FORM:LANG$$&cp=" + elt + "&idtt=" + idtt;
	monurl = "/mini_moteur2,incl_mini_dep.htm";
	
	new Insertion.Top('MiniDep', '<span class="Patientez" id="PatientezDep">Patientez, chargement en cours...<br/></span>');

	var myAjax = new Ajax.Updater(
	'MiniDep', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
			});		
		}else{
			if(idtt){
				if(divminiregion){
					if(elt != ""){
						ListeVilles(idtt, elt);
					}else{
						ListeVilles('', '');
					}
				}
			}
		}
}

/* d�fini les villes en fonction du type de trans et/ou region/dep/pays/rien */
function ListeVilles(idtt, elt) {
		if(divminivilles){/* si affichage villes = 1 */
		if(idtt){
			if(divminidep){
					if(elt){
						divminivilles.style.display = "inline";
						ListeQuartiers(''); /* fait disparaitre les quartiers si villes non selectionn�e*/
						Rayon('');/* fait disparaitre le rayon si villes non selectionn�e*/
					}else{
						divminivilles.style.display = "none";
						ListeQuartiers(''); /* fait disparaitre les quartiers si villes disparait*/
						Rayon('');/* fait disparaitre le rayon si villes disparait*/
					}
			}else{
				divminivilles.style.display = "inline";
				if(!elt){
					ListeQuartiers(''); /* fait disparaitre les quartiers si villes disparait*/
					Rayon('');/* fait disparaitre le rayon si villes disparait*/
					}
				}	 
		}else{
			divminivilles.style.display = "none";	
			ListeQuartiers(''); /* fait disparaitre les quartiers si villes disparait*/
			Rayon('');/* fait disparaitre le rayon si villes disparait*/
		}
	mesparametres = "lang=$$FORM:LANG$$&cp=" + elt + "&idtt=" + idtt;
	monurl = "/mini_moteur2,incl_mini_villes.htm";
	
	new Insertion.Top('MiniVilles', '<span class="Patientez" id="PatientezVilles">Patientez, chargement en cours...<br/></span>');

	var myAjax = new Ajax.Updater(
	'MiniVilles', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
				
			});	
	}	
}

/* d�fini les quartiers en fonction du type de trans et/ou region/dep/pays/rien */
function ListeQuartiers(elt) {
		if(divminiquartiers){
		if(elt){
				divminiquartiers.style.display = "inline";
		}else{
			divminiquartiers.style.display = "none";	
		}

	mesparametres = "lang=$$FORM:LANG$$&ci=" + elt;
	monurl = "/mini_moteur2,incl_mini_quartiers.htm";
	
	new Insertion.Top('MiniQuartiers', '<span class="Patientez" id="PatientezQuartiers">Patientez, chargement en cours...<br/></span>');

	var myAjax = new Ajax.Updater(
	'MiniQuartiers', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres
				
			});		
		}
}

function Rayon(elt) {
	var divminirayon = document.getElementById("MiniRayon");
	if(divminirayon){
		
		if(elt != ""){
			divminirayon.style.display = "inline";
		}else{
			divminirayon.style.display = "none";
		}
	}
}

/* (changement de type de transaction) */
function Change(idtt){
	var chiffre = idtt; /* recuperation de la valeur de l'idtt choisi */
	var budgvac = document.getElementById("MiniBudgetVac");
	var budg = document.getElementById("MiniBudget");
	var typeloi = document.getElementById("MiniTypeLoi");
	var typecommerce = document.getElementById("MiniTypeCommerce");
	var soustype = document.getElementById("MiniSousTypeBien");
	var nbpers = document.getElementById("MiniNbPers");
	var typeviager = document.getElementById("MiniTypeViager");
	var budgviager = document.getElementById("MiniBudgetViager");
			
		/* apparition des sous types de biens */
		if (soustype){
				ListeSousTypeBien('','');
		}	
		
		/* apparition des types de commerces */
		if(typecommerce){
			if(idtt == "10"){
				typecommerce.style.display = "inline";
			}else{
				typecommerce.style.display = "none";
				var seltypecommerce = typecommerce.getElementsByTagName("select");
				if(seltypecommerce.length != 0){seltypecommerce.idtypecommerce.selectedIndex = 0;}
				if(divminitypeactivite){
					divminitypeactivite.style.display = "none";
					var seltypeactivite = divminitypeactivite.getElementsByTagName("select");
					if(seltypeactivite.length != 0){seltypeactivite.idtypeactivite.selectedIndex = 0;}
				}
			}
		}
				
		/* apparition des types de lois */
		if (typeloi){
			var tabletypeloi = typeloi.getElementsByTagName("select");
				if (chiffre == 6 || chiffre == 9){
				typeloi.style.display = "block";
				}else{
					tabletypeloi.idtypeinvestissement.selectedIndex = 0; /* remet la liste � 0 */
					typeloi.style.display = "none";
				}
		}
		
		/* apparition des types de viager */
		if (typeviager){
			var tabletypeviager = typeviager.getElementsByTagName("select");
				if (chiffre == 5){
				typeviager.style.display = "block";
				}else{
					tabletypeviager.si_libre.selectedIndex = 0; /* remet la liste � 0 */
					typeviager.style.display = "none";
				}
		}
		
		/* apparition des budgets de viager */
		if (budgviager){
				if (chiffre == 5){
					budgviager.style.display = "block";
					if(budgvac){
						budgvac.style.display = "none";
						document.getElementById("MiniInputBudgetVacMin").value = lgmini;
						document.getElementById("MiniInputBudgetVacMax").value = lgmaxi;
					}
					if (budg){
						budg.style.display = "none";
						if(document.getElementById("MiniDivChampTextBudget")){
							document.getElementById("MiniInputBudgetMin").value = lgmini;
							document.getElementById("MiniInputBudgetMax").value = lgmaxi;
						}
						if(document.getElementById("MiniDivBudgetTranche")){
							var selectbudget = budg.getElementsByTagName("select");
								if(selectbudget.length != 0){
									selectbudget.pxbtw.selectedIndex = 0;
								}
						}
					}
				}else{
					document.getElementById("MiniInputBouquetMin").value = lgmini;
					document.getElementById("MiniInputBouquetMax").value = lgmaxi;
					document.getElementById("MiniInputRenteMin").value = lgmini;
					document.getElementById("MiniInputRenteMax").value = lgmaxi;
					budgviager.style.display = "none";
				}
		}
				
		/* apparition ou disparition du budget vacances */
		if(budgvac || budg){
		if (budg){
			if (chiffre == 3 || chiffre == 4 || chiffre == 5 || chiffre == ''){
				budg.style.display = "none";
				/* V2 tranche de prix ou non */
				if(document.getElementById("MiniDivChampTextBudget")){
					document.getElementById("MiniInputBudgetMin").value = lgmini;
					document.getElementById("MiniInputBudgetMax").value = lgmaxi;
				}else{
					var selectbudget = budg.getElementsByTagName("select");
						if(selectbudget.length != 0){
							selectbudget.pxbtw.selectedIndex = 0;
						}
					}
			}else{
				budg.style.display = "block";
				BudgetTranche(chiffre);
			}
		}
		if (budgvac){
			if (chiffre == 3 || chiffre == 4){
				budgvac.style.display = "block";
			}else{
				budgvac.style.display = "none";
				document.getElementById("MiniInputBudgetVacMin").value = lgmini;
				document.getElementById("MiniInputBudgetVacMax").value = lgmaxi;
			}
		}
		}
		if(nbpers){
			if(chiffre == 4){
				nbpers.style.display = "block";
			}else{
				nbpers.style.display = "none";
				document.getElementById("MiniInputNbPersMin").value = lgmini;
				document.getElementById("MiniInputNbPersMax").value = lgmaxi;
			}
		}
}

function BudgetTranche(idtt){
	var divbudgettranche = document.getElementById("MiniDivBudgetTranche");
	var divlistebudget = document.getElementById("MiniDivSelectBudgetVente");
	var divlisteloyer = document.getElementById("MiniDivSelectBudgetLoyer");
	if(divlistebudget && divlisteloyer){
		var selectbudget = document.getElementById("MiniSelectBudgetVente");
		var selectloyer = document.getElementById("MiniSelectBudgetLoc");
		if(idtt){
		divbudgettranche.style.display = "inline";
		if(idtt == "1"){
		 divlisteloyer.style.display = "inline";
		 divlistebudget.style.display = "none";
		 if(selectbudget.length != 0){selectbudget.value = 0;}
		}else{
			 divlistebudget.style.display = "inline";
		 divlisteloyer.style.display = "none";
		if(selectloyer.length != 0){ selectloyer.value = 0;}
		}
	}else{
		divbudgettranche.style.display = "none";
		}
	}
}

/*Fonctions qui permettent d'afficher la surface/surface terrain ainsi que le nb de pieces en fonction du typedebien 
(changement de type de bien) */


function ChangeSurface(idtb){
	var chiffre = idtb;/* recuperation de la valeur de l'idtypebien choisi */
	var surf = document.getElementById("MiniSurface");
	var surfterr = document.getElementById("MiniSurfaceTerrain");
	
	if(surf || surfterr){
		if(surf){
			if (chiffre == 4){
				surf.style.display = "none";
				/* V2 tranche de surface ou non */
				if(document.getElementById("MiniDivChampTextSurface")){
				document.getElementById("MiniInputSurfaceMin").value = lgmini;
				document.getElementById("MiniInputSurfaceMax").value = lgmaxi;
			}else{
					var selectsurface = surf.getElementsByTagName("select");
						if(selectsurface.length != 0){
							selectsurface.surfacebtw.selectedIndex = 0;
						}
					}
			}else{
				surf.style.display = "block";
			}
		}
		if(surfterr){
			if (chiffre == 4){
				surfterr.style.display = "block";
			}else{
				surfterr.style.display = "none";
				document.getElementById("MiniInputSurfaceTerrainMin").value = lgmini;
				document.getElementById("MiniInputSurfaceTerrainMax").value = lgmaxi;
			}
		}
	}
}

function ChangePieces(idtb){	
	var chiffre = idtb;/* recuperation de la valeur de l'idtypebien choisi */
	var pieces = document.getElementById("MiniPieces");
	/* V2 N'affiche le nombre de pieces que si typebien = appartement */
	if(pieces){
			if (chiffre == 1){
				pieces.style.display = "block";
			}else{/* vide les champs et cache le crit�re nb de pi�ces */
				/* Liste d�roulante du nb de pi�ces */
					var selectpieces = pieces.getElementsByTagName("select");
					if(selectpieces.length != 0){
						selectpieces.nb_pieces.selectedIndex = 0;
					}
				/* checkbox du nb de pi�ces */	
					var checkboxpieces = pieces.getElementsByTagName("input");
					if(checkboxpieces.length != 0){
						for(var i=0; i<checkboxpieces.length; i++){
						checkboxpieces[i].checked = false;
						}
					}
				/* champ libre du nb de pi�ces */	
					var minpieces = document.getElementById("MiniInputPiecesMin");
					var maxpieces = document.getElementById("MiniInputPiecesMax");
					if(minpieces && maxpieces){
							minpieces.value = lgmini;
							maxpieces.value = lgmaxi;
					}
				pieces.style.display = "none";
			}
	}
}
	
function ChangeChambres(idtb){	
	var chiffre = idtb;/* recuperation de la valeur de l'idtypebien choisi */	
	var chambres = document.getElementById("MiniChambres");
		/* V2 N'affiche le nombre de pieces que si typebien = maison */
	if(chambres){
			if (chiffre == 2){
				chambres.style.display = "block";
			}else{/* vide les champs et cache le crit�re nb de chambres */
				/* Liste d�roulante du nb de chambres */
					var selectchambres = chambres.getElementsByTagName("select");
					if(selectchambres.length != 0){
						selectchambres.nb_chambres.selectedIndex = 0;
					}
				/* checkbox du nb de chambres */	
					var checkboxchambres = chambres.getElementsByTagName("input");
					if(checkboxchambres.length != 0){
						for(var i=0; i<checkboxchambres.length; i++){
						checkboxchambres[i].checked = false;
						}
					}
				/* champ libre du nb de chambres */	
					var minchambres = document.getElementById("MiniInputChambresMin");
					var maxchambres = document.getElementById("MiniInputChambresMax");
					if(minchambres && maxchambres){
							minchambres.value = lgmini;
							maxchambres.value = lgmaxi;
					}
				chambres.style.display = "none";
			}
	}
	
}

function Verif(){ //* Verifie qu'un type de transaction a bien �t� selectionn�
	var typetrans = document.getElementById("MiniTypeTrans");
			if(typetrans){
				if(typetrans.value !== ""){
						return true;
				}else{
					alert("Vous devez choisir un type de transaction");
					return false;
					}
			}else{alert("Error Verif");}
} 

/*Fonction qui permet de ne pas envoyer les champs input si il n'y pas de valeur */
function Envoi(){
	var boite = document.getElementById("BoiteMiniMoteur");
	var tableau = boite.getElementsByTagName("input");
		if(boite && tableau){
			for(var i=0; i<tableau.length; i++){
				if(tableau[i].value == lgmini || tableau[i].value == lgmaxi){
					tableau[i].value= "";
				}
			}	
			/* FIXING CHROME / SAFARI = ERREUR SUR (getElementsByTagName)*/
			var divselminivilles = document.getElementById("MiniDivSelectVilles");
			if(divminivilles && divselminivilles){ 
					var selectvilles = document.getElementById("MiniSelectVilles");
					//var selectvilles = divselminivilles.getElementsByTagName("select");
					if(selectvilles.value != 0){
						if(divminidep){
							var selectdep = document.getElementById("MiniSelectDep");
							//var selectdep = divminidep.getElementsByTagName("select");
							selectdep.value = '';
						}
						if(divminiregion){
							var selectregion = document.getElementById("MiniSelectRegion");
							selectregion.value = '';
						}
					}else{
						if(divminidep){
							//var selectdep = divminidep.getElementsByTagName("select");
							var selectdep = document.getElementById("MiniSelectDep");
							if(selectdep.value != ''){
								if(divminiregion){
									var selectregion = document.getElementById("MiniSelectRegion");
									selectregion.value = '';
								}
							}
						}
					}
			}	
			/* END FIXING */
			
		var surf = document.getElementById("MiniSurface");
		if(surf){
			var surfsel = document.getElementById("MiniSelectSurface");
			var surfvaleur = surfsel.value;
			var surfmin = document.getElementById("surfhidden");
				if((surfvaleur.indexOf('/') == -1) && (surfvaleur != '')){
					surfmin.value = surfvaleur;
					surfsel.selectedIndex = 0;
				}
		}
		
		var budg = document.getElementById("MiniBudget");
		if(budg){
			var ventediv = document.getElementById("MiniDivSelectBudgetVente");
			var locdiv = document.getElementById("MiniDivSelectBudgetLoc");
			var budgmin = document.getElementById("budgmin");//frabad: pxhidden -> budgmin
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


/*test reglette
function RegletteBudget(){
	if ($('MiniDivRegleBudget')){
		new Draggable('MiniCursorGBudget',{constraint: 'horizontal', handle:'MiniDivRegleBudget' });
		new Draggable('MiniCursorDBudget',{constraint: 'horizontal'});
	}
}*/

