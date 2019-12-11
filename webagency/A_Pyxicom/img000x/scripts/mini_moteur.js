var tab_tb_tt = [ /*App Lof Mai Ter Com Bou Bur Par Loc Imm Bat Cha Hot Div Pro */ 
       	/* Loc */ [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0  ],
       	/* Ven */ [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0  ],
       	/* Tmp */ [  1,  1,  1,  1,  0,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0  ],
       	/* Vac */ [  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0  ],
       	/* Via */ [  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0  ],
       	/* PI  */ [  1,  1,  1,  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  0  ],
       	/* LPr */ [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0  ],
       	/* Pre */ [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  0,  1,  1,  1,  0  ],
       	/* Neu */ [  1,  1,  1,  1,  0,  0,  0,  1,  0,  1,  0,  0,  1,  1,  1  ],
       	/* Fdc */ [  0,  0,  0,  1,  1,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0  ]
       ];
var tab_idtb = [
	appartement,
	loft,
	maison,
	terrain,
	commerce,
	boutique,
	bureau,
	parking,
	local,
	immeuble,
	batiment,
	chateau,
	hotel,
	divers,
	programmes
];
/* défini les types de biens en fonction du type de trans */

function Parametres(idtt){
	var valeur = idtt; /* recuperation de la valeur de l'idtt choisi */
	/*var typebien = document.minimoteur.idtypebien;*/
	var typebienparam = document.getElementById("typesdebienparam");
	
	var compteur = 1;
	if (typebienparam){
		for (var j=1; j<typebienparam.length; j++){
				typebienparam.options[j] = null;
		}
		typebienparam.length = 1;
		
		if( idtt > 0 ) {
			// On regarde les autorisations Type de Bien / Type de Transac
			var ligne_idtt =  tab_tb_tt[ idtt-1 ];
			
			for( var i=0; i< ligne_idtt.length; i++ ) {
				if( ligne_idtt[ i ] == 1 ) {
					if( typeof( tab_param ) != "undefined" ) {
						if( tab_param[ idtt-1 ] && tab_param[ idtt-1 ][ i ] == 1 ) {
							typebienparam.options[ compteur++ ] = tab_idtb[ i ];
						}
					} else {
						typebienparam.options[ compteur++ ] = tab_idtb[ i ];
					}
				}
			}
		}
	}
}

function Typebien(idtt){
	var chiffre = idtt; /* recuperation de la valeur de l'idtt choisi */
	var biens = document.getElementById("MiniTypeDeBien");
	var typesbienparam = document.getElementById("typesdebienparam");
	
	if (chiffre){
		for (var i=1; i<11; i++){
				
			if(chiffre == i){
				var divbien = document.getElementById("typedebien");
				var chainetypesbien = "typesbienauto" + i;
				var div = document.getElementById(chainetypesbien);
				
					if(divbien){
						if(typesbienparam){
							var longueur = typesbienparam.length;
							
							if (longueur !== 0){
								biens.style.display = "block";
								divbien.style.display = "block";
							}else{
								biens.style.display = "none";
							}
						}

						if(div){
							var tabletypebienauto = div.getElementsByTagName("select");
							var sel1 = tabletypebienauto.length;
								if (sel1 !== 0){
									biens.style.display = "block";
									divbien.style.display = "block";
									div.style.display = "block";
								}else{
									biens.style.display = "none";
								}
						}
					}else{alert("Error div type de bien");}
			}else{
				if(biens){
					var chainetypesbien2 = "typesbienauto" + i;
					var divbienauto2 = document.getElementById(chainetypesbien2);
					if(divbienauto2){
						var tabletypebienauto2 = divbienauto2.getElementsByTagName("select");
						var sel2 = tabletypebienauto2.length;
							if(sel2){
								divbienauto2.style.display = "none";	
								tabletypebienauto2.idtypebien.selectedIndex = 0;
							}
					}
				}	
			}
		
		}
	}else{biens.style.display = "none";}
}

/* (changement de type de transaction) */
function Change(idtt){
	var chiffre = idtt; /* recuperation de la valeur de l'idtt choisi */
	var budgvac = document.getElementById("MiniBudgetVac");
	var budg = document.getElementById("MiniBudget");
	var villes = document.getElementById("MiniListeVilles");
	var champsvilles = document.getElementById("MiniProximite");
	var pays = document.getElementById("MiniPays");
	
			if(chiffre){
				for (var i=1; i<11; i++){
					if(chiffre == i){
						var chaineville = "villesidtt" + i;
						var chainepays = "paysidtt" + i;
						var div = document.getElementById(chaineville);
						var divpays = document.getElementById(chainepays);
						
							if(div){
								var tableville = div.getElementsByTagName("select");/* tableau qui définit l'existence du select villes */
								var sel1 = tableville.length;
								/* condition si il y a des annonces et donc des villes */
								if (sel1 !== 0){
									villes.style.display = "block";
									div.style.display = "block";
								}else{
									villes.style.display = "none";
									}
							}
							
							if(champsvilles){champsvilles.style.display = "block";}
							
							if(divpays){/* condition si il y a des annonces et donc des pays */
								
								var tablepays = divpays.getElementsByTagName("select");/* tableau qui définit l'existence du select pays */
								var sel2 = tablepays.length;
								
								if(sel2 !== 0){
									var count = tablepays.idpays.options.length;/* tableau listant le nombre d'options pays */
									
								if (count >= 2){
									if(count == 2){
										if(tablepays.idpays.options[1].value == "250"){/* si l'unique option est la france on n'affiche pas le champ pays */
											pays.style.display = "none";
											if(champsvilles){champsvilles.style.display = "block";}
										}else{pays.style.display = "none";}
									}else{
										pays.style.display = "block";
										divpays.style.display = "block";
										if(villes){villes.style.display = "none";}
										if(champsvilles){champsvilles.style.display = "none";}
									}
								}else{pays.style.display = "none";}
							}
							}
							
					}else{
						/* rendre les autres listes de villes display=none */
						if(pays){
							var chainepays2 = "paysidtt" + i;
							var divpays2 = document.getElementById(chainepays2);
							var tablepays2 = divpays2.getElementsByTagName("select");
							var selbis = tablepays2.length;
							if(selbis){
								document.getElementById(chainepays2).style.display = "none";
								tablepays2.idpays.selectedIndex = 0;
							}
						}
						if(villes){
								var chaineville2 = "villesidtt" + i;
								var divville2 = document.getElementById(chaineville2);
								var tableville2 = divville2.getElementsByTagName("select");
								var selvilles = tableville2.length;
								if(selvilles){
								divville2.style.display = "none";	
								tableville2.ci.selectedIndex = 0;
								}
						}	
						if(champsvilles){
						document.getElementById( "cp1" ).value="";
						document.getElementById( "cp2" ).value="";
						document.getElementById( "cp3" ).value="";
						}
					}
				}	
			}else{
				if(champsvilles){champsvilles.style.display = "none";}
				if(villes){villes.style.display = "none";}
				if(pays){pays.style.display = "none";}
				}
		/* apparition ou disparition du budget vacances */
		if(budgvac || budg){
		if (budg){
			if (chiffre == 3 || chiffre == 4){
				budg.style.display = "none";
				document.getElementById("pxmin").value = lgmini;
				document.getElementById("pxmax").value = lgmaxi;
			}else{
				budg.style.display = "block";
			}
		}
		if (budgvac){
			if (chiffre == 3 || chiffre == 4){
				budgvac.style.display = "block";
			}else{
				budgvac.style.display = "none";
				document.getElementById("pxbssemainemin").value = lgmini;
				document.getElementById("pxbssemainemax").value = lgmaxi;
			}
		}
		}
		
}

/*Fonction qui permet d'afficher la surface/surface terrain ainsi que le nb de pieces en fonction du typedebien 
(changement de type de bien) */
function Change2(idtb){
	var chiffre = idtb; /* recuperation de la valeur de l'idtypebien choisi */
	var surf = document.getElementById("MiniSurface");
	var surfterr = document.getElementById("MiniSurfaceTerrain");
	var pieces = document.getElementById("MiniPieces");
	
	if(surf || surfterr){
		if(surf){
			if (chiffre == 4){
				surf.style.display = "none";
				document.getElementById("surfacemin").value = lgmini;
				document.getElementById("surfacemax").value = lgmaxi;
			}else{
				surf.style.display = "block";
			}
		}
		if(surfterr){
			if (chiffre == 4){
				surfterr.style.display = "block";
			}else{
				surfterr.style.display = "none";
				document.getElementById("surfterrainmin").value = lgmini;
				document.getElementById("surfterrainmax").value = lgmaxi;
			}
		}
	}
		
	if(pieces){
		var selectpieces = pieces.getElementsByTagName("select");
		var checkboxpieces = pieces.getElementsByTagName("input");
			if (chiffre == 3 || chiffre == 4 || chiffre == 11){
				pieces.style.display = "none";
				if(selectpieces.length != 0){
					selectpieces.nb_pieces.selectedIndex = 0;
				}
				if(checkboxpieces.length != 0){
						for(var i=0; i<checkboxpieces.length; i++){
						checkboxpieces[i].checked = false;
						}
				}
			}else{
				pieces.style.display = "block";
			}
	}
}

function Verif(){ //* Verifie qu'un type de transaction a bien été selectionné
	var typetrans = document.getElementById("ListeTypeTrans");
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
		}else{alert("Error Envoi");}
}

/*Fonction qui permet de faire disparaitre la liste deroulante des villes si le pays n'est pas la France (changement de pays)*/
function Etranger( elt ){
	
	if( elt ) {
		var idx = elt.selectedIndex;
		var elt_ville = document.getElementById( "MiniListeVilles" );
		var elt_champsville = document.getElementById( "MiniProximite" );
		if( idx > 0 ) {
			var opt = elt.options[ idx ];
			if( opt ) {
				if( elt_ville && elt_ville.style) {
					if( opt.value == 250 ) {
						elt_ville.style.display = "inline";
					} else {
						elt_ville.style.display = "none";	
					}
				}
				if( elt_champsville && elt_champsville.style ) {
					if( opt.value == 250 ) {
						elt_champsville.style.display = "inline";
					} else {
						elt_champsville.style.display = "none";
						elt_champsville.getElementsByTagName("input").value = "";
						document.getElementById( "cp1" ).value="";
						document.getElementById( "cp2" ).value="";
						document.getElementById( "cp3" ).value="";
					}
				}
			}
		} else {
				if( elt_ville && elt_ville.style) {
					elt_ville.style.display = "none";
				}
				if(elt_champsville && elt_champsville.style) {
					elt_champsville.style.display = "none";
					document.getElementById( "cp1" ).value="";
					document.getElementById( "cp2" ).value="";
					document.getElementById( "cp3" ).value="";
				}
		}
	}
}
