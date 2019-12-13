function checkVilles_trouver_agence(check_page) {
	var perform_search = false;
	var nb_ambiguites_ville = 0;
	
	url = check_page + '?';
	
	champ_cp = document.getElementById("code_postal").value;
	if (champ_cp.length == 2) {
		url = url + "num_dep=" + champ_cp + "&";
	}
	
	
	ville_or_num = trim(document.getElementById("ville").value.toUpperCase());
	if(!ville_or_num.match(/^\d+$/) && ville_or_num != "" && ville_or_num != 'PARIS' && ville_or_num != 'LYON' && ville_or_num != 'MARSEILLE'){ 
		if (perform_search){
			url += '&';
		} else {
			perform_search = true;
		}
		url += "nom_ville1=" + escape(ville_or_num);
		nb_ambiguites_ville++;
	} else {
		//ambiguite levee
		document.getElementById("villes_trouvees").innerHTML = '';
	}

	if(perform_search) {
		loadXML(url, villesHandler,  nb_ambiguites_ville);
	} else {
		return true;
	}
	return false;
}
