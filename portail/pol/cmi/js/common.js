function del_ann (urlpage){
	var tabann = document.getElementById('tabann');
	var listeadel = "";
	var sepa = "";
	/*with(document.forms["tabann"]){
		for(i in elements){
	  	if(elements[i].checked == true){
	  		if(listeadel != ""){sepa =",";}
	    	listeadel = listeadel + sepa + elements[i].value;
	    }
	 	}
	}	*/
	oForm = document.forms["tabann"];
	oElement = oForm.elements["delann"];
	if(oElement.length == undefined){
		var one = document.getElementById('delann_1');
		if(one){
			if(one.checked == true){
				listeadel = one.value;
			}
		}
	}else{
		if(oElement.length) {
			for(var i = 0; i < oElement.length; i++) {
				//oElement[i].checked = false;
				if(oElement[i].checked == true){
		  		if(listeadel != ""){sepa =",";}
		    	listeadel = listeadel + sepa + oElement[i].value;
		    }
			}
		}
	}


	if(listeadel != ""){
		if (confirm("!!! CONFIRMATION DE SUPPRESSION !!! \n Etes-vous sûr de vouloir effacer la ou les annonce(s) sélectionnée(s) ?")) {
	 	//	alert("/liste_annonces_del.htm?idannonces=" + listeadel + "&url=" + urlpage);
	 		document.location.href = "/liste_annonces_del.htm?idannonces=" + listeadel + "&url=" + urlpage;
	 	}else {
	 		//return false;
	 	}
	 }else {
	 	alert("Veuillez sélectionner le ou les annonce(s) à supprimer, puis valider.");
	 }

}


function restore_ann (urlpage){
	//var tabann = document.getElementById('tabann');
	var listeadel = "";
	var sepa = "";
	/*
	with(document.forms["tabann"]){
		for(i in elements){
	  	if(elements[i].checked == true){
	  		if(listeadel != ""){sepa =",";}
	    	listeadel = listeadel + sepa + elements[i].value;
	    }
	 	}
	}
	*/

	oForm = document.forms["tabann"];
	oElement = oForm.elements["delann"];
	if(oElement.length == undefined){
		var one = document.getElementById('delann_1');
		if(one){
			if(one.checked == true){
				listeadel = one.value;
			}
		}
	}else{
		if(oElement.length) {
			for(var i = 0; i < oElement.length; i++) {
				//oElement[i].checked = false;
				if(oElement[i].checked == true){
		  		if(listeadel != ""){sepa =",";}
		    	listeadel = listeadel + sepa + oElement[i].value;
		    }
			}
		}
	}



	if(listeadel != ""){
		if (confirm("!!! CONFIRMATION DE RESTAURATION !!! \n Etes-vous sûr de vouloir restaurer la ou les annonce(s) sélectionnée(s) ?")) {

	 		document.location.href = "/liste_annonces_restore.htm?idannonces=" + listeadel + "&url=" + urlpage;
	 	}else {
	 		//return false;
	 	}
	 }else {
	 	alert("Veuillez sélectionner le ou les annonce(s) à restaurer, puis valider.");
	 }

}

function editlegend(idvisuel,legende,num,typevisuel,idtypevisuel) {
		var o = document.getElementById('tabeditlegend');
		var o1 = document.getElementById('legende');
		var o2 = document.getElementById('idvisuel');
		var o3 = document.getElementById('numphoto');
		var o4 = document.getElementById('idtypevisuel');
		o1.value = legende;
		o.style.display = "block";
		o2.value = idvisuel;
		o3.innerHTML = num + " de " + typevisuel;
		for(var i=0;i<o4.options.length;i++){
			if(idtypevisuel == o4.options[i].value){
				o4.options[i].selected = true;
			}
		}
}

function m_etage(){
	var o = document.getElementById('nbetages');
	var o1 = document.getElementById('typeetage');
	for(var i=0;i<o.options.length;i++){
			if(o.options[i].selected == true){
				if(o.options[i].value != 0){
					o1.style.display = "inline";
				}else{
					o1.style.display = "none";
				}
			}
	}
}

function m_garage(r_value){

	var o1 = document.getElementById('idtypegarage');
	if(r_value == "true"){
		o1.style.display = "inline";
	}else {
		o1.style.display = "none";
	}
}