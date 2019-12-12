//$$DYN:ID3:NOFOOTER$$
	function transaction(idtt){
		var valeur = idtt;
		var typebien = document.getElementById("NeufsTypeDeBien");
		var pieces = document.getElementById("NeufsPieces");
		var surface = document.getElementById("NeufsSurface");
		var surfaceterrain = document.getElementById("NeufsSurfaceTerrain");
		var budget = document.getElementById("NeufsBudget");
		var formulaire = document.getElementById("BoiteNeufsClassic");
		var champs = formulaire.getElementsByTagName("input");
		
		var neuf = document.annonces.si_neuf;
		
		var villes = document.getElementById("NeufsListeVilles");
		var chaineville = "villesidtt" + valeur;
		var div = document.getElementById(chaineville);
		var tableville = div.getElementsByTagName("select");/* tableau listant le nombre d'options villes */
		var sel1 = tableville.length;
		var tableville2 = div.getElementsByTagName("input");/* tableau listant le nombre de cases à cocher villes */
		var sel2 = tableville2.length;
		
		var pays = document.getElementById("NeufsPays");
		var chainepays = "paysidtt" + valeur;
		if(pays){
		var divpays = document.getElementById(chainepays);
		var tablepays = divpays.getElementsByTagName("select");/* tableau listant le nombre d'options villes */
		var sel3 = tablepays.length;
		}
		
			if (valeur == 9){
				if (typebien){typebien.style.display="none";}
				if (pieces){pieces.style.display="none";}
				if (surface){surface.style.display="none";}
				if (surfaceterrain){surfaceterrain.style.display="none";}
				if (budget){budget.style.display="none";}
				neuf.value="0";
					for(var i=0; i<champs.length; i++){
						if(champs[i].name == "surfacemin" || champs[i].name == "surfacemax" || champs[i].name == "surf_terrainmin" || champs[i].name == "surf_terrainmax" || champs[i].name == "refannonce" || champs[i].name == "pxmin" || champs[i].name == "pxmax"){
						champs[i].value= "";
					}else{
						champs[i].checked= false;
					}
					}
					/* condition si le nombre d'options (villes) est egale à 0 */
								if (sel1 !== 0 || sel2 !== 0){
									villes.style.display = "block";
									div.style.display = "block";
								}else{villes.style.display = "none";}
				document.getElementById("villesidtt2").style.display = "none";
				document.getElementById("villesidtt6").style.display = "none";
						/* condition si le nombre d'options (pays) est egale à 0 */		
							if(pays){
							if (sel3 !== 0){
									pays.style.display = "block";
									divpays.style.display = "block";
								}else{pays.style.display = "none";}
				document.getElementById("paysidtt2").style.display = "none";
				document.getElementById("paysidtt6").style.display = "none";
			}
			}else if (valeur==2){
				if (typebien){typebien.style.display="inline";}
				if (pieces){pieces.style.display="inline";}
				if (surface){surface.style.display="inline";}
				if (surfaceterrain){surfaceterrain.style.display="inline";}
				if (budget){budget.style.display="inline";}
				formulaire.getElementsByTagName("input").value="";
				neuf.value="1";
					for(var i=0; i<champs.length; i++){
						if(champs[i].name == "surfacemin" || champs[i].name == "surfacemax" || champs[i].name == "surf_terrainmin" || champs[i].name == "surf_terrainmax" || champs[i].name == "refannonce" || champs[i].name == "pxmin" || champs[i].name == "pxmax"){
						champs[i].value= "";
					}else{
						champs[i].checked= false;
					}
					}
					/* condition si le nombre d'options (villes) est egale à 0 */
								if (sel1 !== 0 || sel2 !== 0){
									villes.style.display = "block";
									div.style.display = "block";
								}else{villes.style.display = "none";}
				document.getElementById("villesidtt9").style.display = "none";
				document.getElementById("villesidtt6").style.display = "none";
					
					/* condition si le nombre d'options (pays) est egale à 0 */		
							if(pays){
							if (sel3 !== 0){
									pays.style.display = "block";
									divpays.style.display = "block";
								}else{pays.style.display = "none";}
				document.getElementById("paysidtt9").style.display = "none";
				document.getElementById("paysidtt6").style.display = "none";
			}
			}
			else if (valeur==6){
				if (typebien){typebien.style.display="inline";}
				if (pieces){pieces.style.display="inline";}
				if (surface){surface.style.display="inline";}
				if (surfaceterrain){surfaceterrain.style.display="inline";}
				if (budget){budget.style.display="inline";}
				formulaire.getElementsByTagName("input").value="";
				neuf.value="1";
					for(var i=0; i<champs.length; i++){
						if(champs[i].name == "surfacemin" || champs[i].name == "surfacemax" || champs[i].name == "surf_terrainmin" || champs[i].name == "surf_terrainmax" || champs[i].name == "refannonce" || champs[i].name == "pxmin" || champs[i].name == "pxmax"){
						champs[i].value= "";
					}else{
						champs[i].checked= false;
					}
					}
					/* condition si le nombre d'options (villes) est egale à 0 */
								if (sel1 !== 0 || sel2 !== 0){
									villes.style.display = "block";
									div.style.display = "block";
								}else{villes.style.display = "none";}
						document.getElementById("villesidtt9").style.display = "none";
						document.getElementById("villesidtt2").style.display = "none";
				
				/* condition si le nombre d'options (pays) est egale à 0 */		
						if(pays){
						if (sel3 !== 0){
									pays.style.display = "block";
									divpays.style.display = "block";
								}else{pays.style.display = "none";}
				document.getElementById("paysidtt2").style.display = "none";
				document.getElementById("paysidtt9").style.display = "none";
			}
		}
		}
		
		function pays(){
			var trans2 = document.getElementById("trans2");
			var trans6 = document.getElementById("trans6");
			var trans9 = document.getElementById("trans9");
			
			var opt2 = document.getElementById("selpays2");
			var opt6 = document.getElementById("selpays6");
			var opt9 = document.getElementById("selpays9");
			
			
			if(trans9.checked){
				opt2[opt2.selectedIndex].value = "";
				opt6[opt6.selectedIndex].value = "";
			}
			if (trans2.checked){
				opt9[opt9.selectedIndex].value = "";
				opt6[opt6.selectedIndex].value = "";
			}
			if (trans6.checked){
				opt9[opt9.selectedIndex].value = "";
				opt2[opt2.selectedIndex].value = "";
			}

		}
		