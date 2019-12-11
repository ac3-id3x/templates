function chkClick2(source){
	var catTitle = $(source);
	var idCatTitle = $(source).attr("id");
	$(".catContent").each(function() {
		$(this).addClass("invisible");
	});
	$(".catTitle_selected").each(function() {
		$(this).removeClass("catTitle_selected");
		$(this).addClass("catTitle");
		$(this).find(":checkbox").prop("checked",false);
	});
	$("#"+idCatTitle.substring(0 ,idCatTitle.indexOf("Title"))+"Content").removeClass("invisible");
	if(!$(source).find(":checkbox").prop("checked")){
		$(source).addClass("catTitle_selected");
		$(source).removeClass("catTitle");
		$(source).find(":checkbox").prop("checked",false);
	}
	else{
		$(source).removeClass("catTitle_selected");
		$(source).addClass("catTitle");
		$(source).find(":checkbox").prop("checked",true);
	}
}

//Fonction apellée au chargement de la page
function initialize() {
	var Lat = '48.8913255';
	var Lng = '2.3484281';
	//var Adresse = '104 rue de Hochfelden, 67200 Strasbourg';
	var Adresse = '';

	get_Profil(Lat, Lng, Adresse);
}

//Récupération des données via getPortait
function get_Profil(Lat, Lng, Adresse){
	
	var url = domaineURL+'recuperationPortrait.php';

	var Request = $.ajax({
		url : url,
		type: "POST",
		dataType : 'json',
		data : {lon: Lng, lat: Lat, adresse: Adresse, format: 'json'},
	})
	
	Request.done(function(data){
			chargementData(data);
		}
	);
	
	Request.fail(function(jqXHR, textStatus){
			alert('erreur : '+textStatus);//data - response from server
		}
	);
}

//Mise en forme des données dans les différents onglets
function chargementData(data){
	//Test si les données sont correctes
	if($.isArray(data)){
		if(data[0].hasOwnProperty('erreur')){
			alert(data[0].erreur);
			return;
		}
	}
	
	var TabStats = data.Stats;
	var typeInfo = data.Polygone[0].id_type;
	var urlImage = data.Photos[0].photo_file_url;

	var $id_photo_par_defaut = data.Polygone[0].id_photo;

	// //On parcours les photos pour récupérer celle qui est le plus large
	// var widthMax = 0;
	// for(var i=0; i<data.Photos.length; i++){
	// 	if(data.Photos[i].width >= widthMax && data.Photos[i].width > data.Photos[i].height){
	// 		widthMax = data.Photos[i].width;
	// 		urlImage = data.Photos[i].photo_file_url;
	// 	}
	// }

	//On parcours les photos pour récupérer celle qui possède l'id photo par défaut
	for(var i=0; i<data.Photos.length; i++){
		if(data.Photos[i].id_photo == $id_photo_par_defaut){
			urlImage = data.Photos[i].photo_file_url;
		}
	}

	// On insère l'image dans le code html
	var image = "<img src="+urlImage+" ></br>";
	$("#imageQuartier").html(image);

	// Récupération du descriptif du quartier
	var descriptif = data.Polygone[0].descriptif;
	var titre = descriptif.split("</br>")[0];
	var courteDescription = descriptif.split("</br>")[1];
	var longueDescription = descriptif.split("</br>").slice(2);
	$("#titreDescription").html(titre);
	$("#courteDesc").html(courteDescription);
	$("#longueDesc").html(longueDescription);

	// On récupère la commune de rattachement
	var commune = data.Polygone[0].libelle_commune_rattachement;

	//On récupère le departement de rattachement
	var numeroDep = data.Polygone[0].cp.substring(0,2);

	//On récupère les données
	var TabStatsComp = data.StatsComm;
	var colonne3;
	for(var i=0; i<TabStats.length; i++){
		var id_tab = TabStats[i].thematique;
		var sChaine = '';

		while((i+1) < TabStats.length && TabStats[(i+1)].thematique == TabStats[i].thematique){
			colonne3 = "";
			for(var j=0; j<TabStatsComp.length; j++){
				if(TabStatsComp[j].id == TabStats[i].id){
					if( TabStatsComp[j].carte_comp == "ND"){
						colonne3 = "Valeur non disponible";
					}
					else if( TabStatsComp[j].carte_comp == "NA"){
						colonne3 = "Valeur non applicable";
					}
					else{
						//alert(TabStatsComp[j].carte_comp);
						colonne3 = TabStatsComp[j].carte_comp;
						jaugeColonne3 = TabStatsComp[j].id_jauge_comp;
					}
				}
			}

			//La stat du quartier
			var indexCarteStat = getIndexSplitValue(TabStats[i].carte_stat);

			//La stat de la commune
			var indexCarteComp = getIndexSplitValue(TabStats[i].carte_comp);

			var jaugeStat = TabStats[i].id_jauge;
			var jaugeComp = TabStats[i].id_jauge_comp;
	
			sChaine += '<tr><td class="nomCarte"><div class="valNomCarte">'+TabStats[i].nom1_carte+'</div><div class="remplissageTitle"></div></td></tr><tr><td><div class="info1">'+injectImage(TabStats[i].id, TabStats[i].carte_stat.substring(0,indexCarteStat), 1, jaugeStat)+'<div class="textVal"><div class="valeur">'+TabStats[i].carte_stat.substring(0,indexCarteStat) +'</div><div class="uniteTexte">'+ TabStats[i].carte_stat.substring(indexCarteStat) +'</div></div></div><div class="info2">'+injectImage(TabStats[i].id, TabStats[i].carte_comp.substring(0,indexCarteComp), 2, jaugeComp) +'<div class="textVal"><div class="valeurGris">'+ TabStats[i].carte_comp.substring(0,indexCarteComp) +'</div><div class="uniteTexte">'+TabStats[i].carte_comp.substring(indexCarteComp) +'</div></div></div>';
		
			//Si les données concernant le département sont disponibles alors on les récupère
			if(typeInfo == 1 || typeInfo == 9){
				//On augmente la taille pour la colonne supplémentaire
				var indexCol3 = getIndexSplitValue(colonne3);
				if(indexCol3 == colonne3.length && (indexCarteStat < TabStats[i].carte_stat.length || indexCarteComp < TabStats[i].carte_comp.length)){//Pour éviter le décalge de ligne
					sChaine += '<div class="info3"><div class="textVal"><div class="valeurGris">'+colonne3+'</div><div class="uniteTexte">'+TabStats[i].carte_comp.substring(indexCarteComp)+'</div></div></div>';
				}
				else{
					sChaine += '<div class="info3">'+injectImage(TabStats[i].id, colonne3.substring(0,indexCol3), 3, jaugeColonne3) +'<div class="textVal"><div class="valeurGris">'+colonne3.substring(0,indexCol3) +'</div><div class="uniteTexte">'+colonne3.substring(indexCol3)+'</div></div></div>';
				}
			}
			sChaine += "</td></tr>";
			i++;
		//	if((i)>= TabStats.length) break;
		}
		sChaine += "</td></tr>";

		// Si la colonne département existe
		var titre3 = "";
		if(typeInfo == 1 || typeInfo == 9){
			titre = '<div class="titreCol"><div id="nomDepartement">Comparé au département '+numeroDep+'</div></div>';
		}

		//Le titre des colonnes
		sChaine = '<div class="titreCol"><div id="nomQuartier">Nom quartier</div></div><div class="titreCol"><div id="nomCommune">Comparé à la commune '+commune+'</div></div>'+titre+'<div id="ligneTab"><table class="tabData">'+sChaine+'</table></div>';
		$("#"+id_tab+"Content").html(sChaine);
	}

	//Si il ya une troisième colonne on met à jour la taille du remplissage
	if(typeInfo == 1 || typeInfo == 9){
		$(".remplissageTitle").each(function(){ this.style.width = "520px";});
	}
}

function getIndexSplitValue(value){
	if(value.indexOf("%") != -1){//Information jauge
		return value.indexOf("%") + 1;
	}
	else if(isNaN(parseInt(value[0]))){//Information textuelle
		return value.length;
	}
	else if(value.indexOf(" ") == -1){//Information date ou nombre < 1 000
		return value.length;
	}
	else if(!isNaN(parseInt(value[value.indexOf(" ") + 1]))){//Information >= 1 000
		var indiceEspace = value.indexOf(" ") + 1;
		if(!isNaN(parseInt(value[value.substring(indiceEspace).indexOf(" ") + indiceEspace + 1]))){//Information >= 1 000 000 
			//alert("1 million : "+value);
			return value.substring(indiceEspace).indexOf(" ") + indiceEspace + 5;
		}
		else{
			return indiceEspace + 4;
		}
	}
	else{
		return value.indexOf(" ")+1;
	}
}

function injectImage(id, value, indiceCol, indiceJauge){
	indiceJauge = parseInt(indiceJauge);
	var suffixe ="";
	var couleur ="";
	if(indiceCol == 1){
		suffixe = "Bleu";
		couleur = "#536082";
	}
	else{
		suffixe = "Gris_Fonce";
		couleur = "#B3B3B3";
	}
	switch(id) {
		case "104"://Taux espaces verts et jardins
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = parseInt((30/100)*value);//Produit en croix
			return "<div class=\"inception\" style=\"float: center; width :  30px; height:  36px; background-image: url(assets/Espaces_Verts_Gris_Clair.png); display: inline-block;\"><div class=\"remplissage\" style=\"margin: 0px; padding: 0px; width: "+taille+"px; overflow: hidden;\"><img src=\"assets/Espaces_Verts_"+suffixe+".png\"/></div></div>";
			break;
		case "8"://Taux ne possède pas une voiture
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = parseInt((41/100)*value);//Produit en croix
			return "<div class=\"inception\" style=\"float: center; width :  41px; height:  27px; background-image: url(assets/Voiture_Gris_Clair.png); display: inline-block;\"><div class=\"remplissage\" style=\"margin: 0px; padding: 0px; width: "+taille+"px; overflow: hidden;\"><img src=\"assets/Voiture_"+suffixe+".png\"/></div></div>";
			break;
		case "100"://Taux pluie
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = parseInt((50/2280)*value);//Produit en croix (on considère 2280 mm / an comme le maximum car il s'agit du record de precipitation moyenne en france métropolitaine)
			return "<div class=\"inception\" style=\"float: center; width :  13px; height:  50px; background-color: #E7E7E7; display: inline-block; border-radius : 3px;\"><div class=\"remplissage\" style=\"margin: 0px; padding: 0px; height: "+taille+"px; overflow: hidden; background-color: "+couleur+"; border-bottom-left-radius : 3px; border-bottom-right-radius : 3px; margin-top: calc(50px - "+taille+"px);\"></div></div>";
			break;
		case "37"://Taux etablissements du bâtiments et des travaux publics
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = 33 - parseInt((33/100)*value);//Produit en croix
			return "<div class=\"inception\" style=\"float: center; width :  35px; height:  33px; background-image: url(assets/Etablissements_BTP_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:33px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img  src=\"assets/Etablissements_BTP_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			break;
		case "36"://Taux etablissements industriels
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = parseInt((30/100)*value);//Produit en croix
			return "<div class=\"inception\" style=\"float: center; width :  40px; height:  30px; background-image: url(assets/Etablissement_Industriels_Gris_Clair.png); display: inline-block;\"><div class=\"remplissage\" style=\"margin: 0px; padding: 0px; width: "+taille+"px; overflow: hidden;\"><img src=\"assets/Etablissement_Industriels_"+suffixe+".png\"/></div></div>";
			break;
		case "42"://Croissance taux etablissements industriels
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			if(value >= 0){
				var taille = parseInt((40/100)*value);//Produit en croix
				return "<div style=\"display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Haut_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center; width :  40px; height:  30px; background-image: url(assets/Etablissement_Industriels_Gris_Clair.png); display: inline-block;\"><div class=\"remplissage\" style=\"margin: 0px; padding: 0px; width: "+taille+"px; overflow: hidden;\"><img src=\"assets/Etablissement_Industriels_"+suffixe+".png\"/></div></div>";
			}
			else{
				var taille = parseInt((40/100)*(-value));//Produit en croix
				return "<div style=\" display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Bas_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center; width :  40px; height:  30px; background-image: url(assets/Etablissement_Industriels_Gris_Clair.png); display: inline-block;\"><div class=\"remplissage\" style=\"margin: 0px; padding: 0px; width: "+taille+"px; overflow: hidden;\"><img src=\"assets/Etablissement_Industriels_"+suffixe+".png\"/></div></div>";
			}
			break;
		case "44"://Taux etablissements commerciaux (de détail et de gros)
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			if(value >= 0){
				var taille = 33 - parseInt((33/100)*value);//Produit en croix
				return "<div style=\"display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Haut_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center;  height: 33px; background-image: url(assets/Taux_Commerces_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:33px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img src=\"assets/Taux_Commerces_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			}
			else{
				var taille = 33 - parseInt((33/100)*(-value));//Produit en croix
				return "<div style=\" display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Bas_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center;  height: 33px; background-image: url(assets/Taux_Commerces_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:33px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img src=\"assets/Taux_Commerces_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			}
			break;
		case "43"://Croissance des étab. du bâtiment et travaux publics
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage"
			if(value >= 0){
				var taille = 33 - parseInt((33/100)*value);//Produit en croix
				return "<div style=\"display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Haut_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center;height:  33px; background-image: url(assets/Etablissements_BTP_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:33px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img  src=\"assets/Etablissements_BTP_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			}
			else{
				var taille = 33 - parseInt((33/100)*(-value));//Produit en croix
				return "<div style=\" display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Bas_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center; height:  33px; background-image: url(assets/Etablissements_BTP_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:33px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img  src=\"assets/Etablissements_BTP_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			}
			return "Test";
			break;
		case "39"://Taux etablissements de services
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = 29 - parseInt((29/100)*value);//Produit en croix
			return "<div class=\"inception\" style=\"float: center;  height: 29px; background-image: url(assets/Etablissements_Service_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:29px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img src=\"assets/Etablissements_Service_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			break;
		case "38"://Croissance taux etablissements commerciaux (de détail et de gros)
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			var taille = 33 - parseInt((33/100)*value);//Produit en croix
			return "<div class=\"inception\" style=\"float: center;  height: 33px; background-image: url(assets/Taux_Commerces_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:33px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img src=\"assets/Taux_Commerces_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			break;
		case "45"://Croissance taux etablissements de services
			value = value.substring(0,value.indexOf(" "));//On récupère la valeur du pourcentage
			if(value >= 0){
				var taille = 29 - parseInt((29/100)*value);//Produit en croix
				return "<div style=\"display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Haut_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center;  height: 29px; background-image: url(assets/Etablissements_Service_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:29px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img src=\"assets/Etablissements_Service_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			}
			else{
				var taille = 29 - parseInt((29/100)*(-value));//Produit en croix
				return "<div style=\" display: inline-block; margin-right : 5px;\"><img style=\"vertical-align: middle;\" src=\"assets/Fleche_Bas_"+suffixe+".png\"/></div><div class=\"inception\" style=\"float: center;  height: 29px; background-image: url(assets/Etablissements_Service_"+suffixe+".png); display: inline-block; \"><div class=\"remplissage\" style=\"margin: 0px; line-height:29px; padding: 0px; height: "+taille+"px; overflow: hidden; text-align : bottom;\"><img src=\"assets/Etablissements_Service_Gris_Clair.png\"/></div></div>";//Pour que la jauge évolue verticalement du bas vers le haut il faut inverser les images et la hauteur de jauge
			}
			break;
		case "102"://Ecole et crèche
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Ecoles_"+suffixe+".png\"/></div>";
			break;
		case "146"://Etudiants inscrits dans l'enseignements supérieur
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Etudiants_"+suffixe+".png\"/></div>";
			break;
		case "147"://Universitaires
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Universitaires_"+suffixe+".png\"/></div>";
			break;
		case "148"://Ecoles de commerces d'ingéieurs et autres écoles
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Ecoles_de_Commerce_"+suffixe+".png\"/></div>";
			break;
		case "149"://Techniciens supérieurs
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Techniciens_Sup_"+suffixe+".png\"/></div>";
			break;
		case "150"://Ecoles paramédicales et sociales
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Ecoles_Paramedicales_"+suffixe+".png\"/></div>";
			break;
		case "151"://Classes préparatoires
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Classes_Prepa_"+suffixe+".png\"/></div>";
			break;
		case "34"://Restaurants et cafés
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Restaurants_"+suffixe+".png\"/></div>";
			break;
		case "35"://Commerces
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Commerces_"+suffixe+".png\"/></div>";
			break;
		case "106"://Capacité d'acceuil touristique
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Cap_Accueil_Tourist_"+suffixe+".png\"/></div>";
			break;
		case "105"://Transports publics
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Transports_"+suffixe+".png\"/></div>";
			break;
		case "103"://Terrains et salles de sport
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Sport_"+suffixe+".png\"/></div>";
			break;
		case "41"://Croissance économique
			value = value.substring(0,value.indexOf(" "));
			if(value >= 0){
				return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Croissance_Eco_"+suffixe+".png\"/></div>";
			}
			else{
				return "<div class=\"inception\" style=\"float: center; display: block; -webkit-transform:scaleY(-1);-moz-transform:scaleY(-1);-ms-transform:scaleY(-1);-o-transform:scaleY(-1); transform:scaleY(-1);\"><img src=\"assets/Croissance_Eco_"+suffixe+".png\"/></div>";
			}
			break;
		case "33"://Quartier animé
			if(indiceJauge == 1){//Très animé
				return "<div class=\"inception\" style=\"float: center; display: inline-block;\"><img src=\"assets/Quartier_Anime_"+suffixe+".png\"/></div>";
			}
			else if (indiceJauge == 6){//Moyennement animé
				return "<div class=\"inception\" style=\"float: center; display: inline-block;\"><img src=\"assets/Quartier_Anime_Moyen_"+suffixe+".png\"/></div>";
			}
			else{//Faiblement animé
				return "<div class=\"inception\" style=\"float: center; display: inline-block;\"><img src=\"assets/Quartier_Anime_Calme_"+suffixe+".png\"/></div>";
			}
			break;
		case "46"://Résultat des lycées
			var affichageLycee = "<div class=\"inception2\" style=\"float: center; display: block;\">";
			if(indiceJauge == 1){//Taux de réussite très élevé
				affichageLycee += injectJaugeEtoile(5, 0, suffixe);
			}
			else if(indiceJauge == 2){//Taux de réussite élevé
				affichageLycee += injectJaugeEtoile(4, 1, suffixe);
			}
			else if(indiceJauge == 3){//Taux de réussite élevé
				affichageLycee += injectJaugeEtoile(4, 0, suffixe);
			}
			else if(indiceJauge == 4){//Taux de réussite plutôt élevé
				affichageLycee += injectJaugeEtoile(3, 1, suffixe);
			}
			else if(indiceJauge == 5){//Taux de réussite plutôt élevé
				affichageLycee += injectJaugeEtoile(3, 0, suffixe);
			}
			else if(indiceJauge == 6){//Taux de réussite dans la moyenne française
				affichageLycee += injectJaugeEtoile(2, 1, suffixe);
			}
			else if(indiceJauge == 7){//Taux de réussite dans la moyenne française
				affichageLycee += injectJaugeEtoile(2, 0, suffixe);
			}
			else if(indiceJauge == 8){//Taux de réussite dans la moyenne française
				affichageLycee += injectJaugeEtoile(1, 1, suffixe);
			}
			else if(indiceJauge == 9){//Taux de réussite inférieur à la moyenne française
				affichageLycee += injectJaugeEtoile(1, 0, suffixe);
			}
			else if(indiceJauge == 10){//Taux de réussite faible
				affichageLycee += injectJaugeEtoile(1, 0, suffixe);
			}
			else if(indiceJauge == 11){//Taux de réussite faible
				affichageLycee += injectJaugeEtoile(0, 1, suffixe);
			}
			else if(indiceJauge == 12){//Taux de réussite très faible
				affichageLycee += injectJaugeEtoile(0, 0, suffixe);
			}
			return affichageLycee+"</div>";

		case "76"://Ville et villages fleuris
			var affichageFleurs = "<div class=\"inception2\" style=\"float: center; display: block;\">";
			var i = 0;
			if(indiceJauge == 12){//Taux de réussite très élevé
				// Pas de fleurs à afficher
			}
			else if(indiceJauge == 8){//Taux de réussite élevé
				affichageFleurs += "<img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/>";
			}
			else if(indiceJauge == 5){//Taux de réussite élevé
				affichageFleurs += "<img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/><img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/>";
			}
			else if(indiceJauge ==34){//Taux de réussite plutôt élevé
				affichageFleurs += "<img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/><img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/><img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/>";
			}
			else if(indiceJauge == 1){//Taux de réussite plutôt élevé
				affichageFleurs += "<img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/><img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/><img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/><img style=\"margin-right:3px;\"src=\"assets/Ville_Fleur_"+suffixe+".png\"/>";
			}
			return affichageFleurs + "</div>";
			break;
		case "47"://Sélectivité des lycées
			var affichageSelectivite = "<div class=\"inception\" style=\"float: center; display: block;\"><img style=\"margin-right:3px;\"src=\"assets/Etudiants_"+suffixe+".png\"/>";
			if(indiceJauge< 5){//Lycée accompagnateur
				affichageSelectivite += "A";
			}
			else if(indiceJauge > 8 && indiceJauge != 99){//Lycée séléctif
				affichageSelectivite += "S";
			}
			return affichageSelectivite + "</div>";
			break;
		case "57"://Type de paysage
			return "<div class=\"inception\" style=\"float: center; display: block;\"><img src=\"assets/Paysage_Ville_"+suffixe+".png\"/></div>";//A modifier lorsque Alexandra envera les nouvelles icônes et que Jean-Philippe aura mis à jour le serveur
			break;
		default:
			return "";
	}
}

function injectJaugeEtoile(nombreEtoilePleine, nombreEtoileDemie, suffixe){
	var htmlJauge = "";
	for(var i = 0 ; i < nombreEtoilePleine ; i ++){
		htmlJauge += "<img style=\"display: inline-block\" src=\"assets/Resultats_Lycees_"+suffixe+".png\"/>";
	}
	if(nombreEtoileDemie>0){
		htmlJauge += "<img style=\"display: inline-block\" src=\"assets/Resultats_Lycees_"+suffixe+"_demie.png\"/>";
	}
	for(var i = nombreEtoilePleine ; i < 5 -  nombreEtoileDemie; i ++){
		htmlJauge += "<img style=\"display: inline-block\" src=\"assets/Resultats_Lycees_Gris_Clair.png\"/>";
	}
	return htmlJauge;
}