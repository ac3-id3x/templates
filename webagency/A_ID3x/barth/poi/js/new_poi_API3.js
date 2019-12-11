function init_TabEquiv(){
	TabEquiv = new Array();
	for(var i=0; i<11; i++)TabEquiv[i]=new Array();
	
	TabEquiv[1][64] = 'poi_aeroport';
	TabEquiv[1][1] = 'poi_bus';
	TabEquiv[1][46] = 'poi_autolib';
	TabEquiv[1][16] = 'poi_gare_ferroviaire';
	TabEquiv[1][33] = 'poi_location_velo';
	TabEquiv[1][20] = 'poi_metro';
	TabEquiv[1][23] = 'poi_parking';
	TabEquiv[1][24] = 'poi_parking_velo';
	TabEquiv[1][65] = 'poi_rer';
	TabEquiv[1][28] = 'poi_taxi';
	TabEquiv[1][32] = 'poi_essence';
	TabEquiv[1][21] = 'poi_ferry';
	TabEquiv[1][22] = 'poi_tramway';
	TabEquiv[1][34] = 'poi_velib';

	TabEquiv[2][49] = 'poi_banque';
	TabEquiv[2][2] = 'poi_bar';
	TabEquiv[2][4] = 'poi_boucherie';
	TabEquiv[2][5] = 'poi_boulangerie';
	TabEquiv[2][27] = 'poi_poste';
	TabEquiv[2][19] = 'poi_marche';
	TabEquiv[2][50] = 'poi_presse_tabac';
	TabEquiv[2][26] = 'poi_restaurant';
	TabEquiv[2][30] = 'poi_superette';
	TabEquiv[2][29] = 'poi_super_hyper';

	TabEquiv[5][12] = 'poi_bibliotheque';
	TabEquiv[5][13] = 'poi_monument';
	TabEquiv[5][31] = 'poi_theatre';

	TabEquiv[3][18] = 'poi_casino';
	TabEquiv[3][3] = 'poi_cinema';
	TabEquiv[3][15] = 'poi_parc';
	TabEquiv[3][14] = 'poi_sport';

	TabEquiv[4][6] = 'poi_college';
	TabEquiv[4][7] = 'poi_maternelle';
	TabEquiv[4][8] = 'poi_primaire';
	TabEquiv[4][9] = 'poi_ens_superieur';
	TabEquiv[4][10] = 'poi_lycee';

	TabEquiv[9][52] = 'poi_camping';
	TabEquiv[9][51] = 'poi_hotel';
	TabEquiv[9][54] = 'poi_tourisme';

	TabEquiv[7][17] = 'poi_hopital';
	TabEquiv[7][35] = 'poi_med_generaliste';
	TabEquiv[7][36] = 'poi_med_specialiste';
	TabEquiv[7][25] = 'poi_pharmacie';

	TabEquiv[8][63] = 'poi_creche';
	TabEquiv[8][47] = 'poi_ludotheque';

	TabEquiv[10][56] = 'poi_caf';
	TabEquiv[10][58] = 'poi_cpam';
	TabEquiv[10][59] = 'poi_gendarmerie';
	TabEquiv[10][48] = 'poi_mairie';
	TabEquiv[10][60] = 'poi_pole_emploi';
	TabEquiv[10][57] = 'poi_police';
	TabEquiv[10][61] = 'poi_impot_entreprise';
	TabEquiv[10][62] = 'poi_impot_particulier';
}

//Fonction qui permet de selectionner toutes les sous cat?ories d'une cat?orie en une seul requ?e serveur
function chkClick2(source){
	
	//Pour éviter les infobulles zombies
	if(infowindow){
		infowindow.close();
		infowindow = null;
	}

	var Suffixe = source.id
	valueCat = $("#"+Suffixe).attr("value").split('|');
	var chk_box = $('#chk_poi_'+Suffixe.substring(0,Suffixe.indexOf("Title")).toLowerCase());
	
	if(!chk_box.prop( "checked")){
		get_POI(valueCat[0], valueCat[1], 0);
		$(source).find(".miniatureTitle2").removeClass('invisible');
		$(source).find(".miniatureTitle").addClass('invisible');
		chk_box.prop( "checked",true);
	}
	else{
		$(source).find(".miniatureTitle").removeClass('invisible');
		$(source).find(".miniatureTitle2").addClass('invisible');
		chk_box.prop( "checked",false);
		
		
		$.each(TabEquiv[valueCat[0]], function( index, value ) { 
			if(value !== undefined && TabDataMarker["c_"+value] !== undefined){
				$.each(TabDataMarker["c_"+value], function( index, obj ) { 
					obj.setVisible(false);
				});
			}
		});
	}
}

//Lorsque l'on clique sur l'option de s?ection d'une cat?orie, une requ?e g??ale est envoyer, il faut donc traiter le retour de cette requ?e
function separePOI(infos){
	listePoi = new Array();
	var i = 0;
	//On classe les r?ultats par sous theme
	while(infos[i] != null){
		if(TabEquiv[infos[i].id_theme_1][infos[i].id_theme_2] !== undefined){
			if (listePoi[infos[i].theme_2] != null){
				listePoi[infos[i].theme_2].push(infos[i]);
			}
			else{
				listePoi[infos[i].theme_2] = [infos[i]];
			}
		}
		i += 1;
	}
	//Pour chaque th?e on cr? tous les marqueurs et on rempli le tableau global
	for (var key in listePoi){
		if(TabEquiv[listePoi[key][0].id_theme_1][listePoi[key][0].id_theme_2] !== undefined){
			creation_Marker(listePoi[key], TabEquiv[parseInt(listePoi[key][0].id_theme_1)][listePoi[key][0].id_theme_2]);
		}
	}
}