function updateNbBiens(form){
	/*
	 * Envoie une requête HTTP et charge le contenu du resultat dans l'indicateur de nombre de bien selectionnés
	 */
	sendXMLHTTPRequest('../nb_bien_prerecherched41d.html?' + formToHTTPGET(form), 'nb-biens-prerecherche');
}

function swapPrix(field, prix, selectedIndex){
	while (field.length > 0){
		field.options[0] = null;
	}

	for (i = 1; i < prix.length; i++ ){
		field[field.length] = new Option(prix[i], i, false, true);
	}
	field.selectedIndex = selectedIndex;
}

function checkVilles(check_page) {
	var perform_search = false;
	var nb_ambiguites_ville = 0;
	
	url = check_page + '?';
	ref_region = document.getElementById("ref_region").value;
	if (ref_region != 0) {
		url = url + "ref_region=" + ref_region + "&";
	}
	
	for (i = 1; i < 5; i++) {
		ville_or_num = trim(document.getElementById("ville_dep_cp" + i).value.toUpperCase());
		if(!ville_or_num.match(/^\d+$/) && ville_or_num != "" && ville_or_num != 'PARIS' && ville_or_num != 'LYON' && ville_or_num != 'MARSEILLE'){ 
			if (perform_search){
				url += '&';
			} else {
				perform_search = true;
			}
			url += "nom_ville" + i + "=" + escape(ville_or_num);
			nb_ambiguites_ville++;
		} else {
			//ambiguite levee
			document.getElementById("villes_trouvees_" + i).innerHTML = '';
		}
	}
	
	if(perform_search) {
		loadXML(url, villesHandler,  nb_ambiguites_ville);
	} else {
		return true;
	}
	return false;
}

