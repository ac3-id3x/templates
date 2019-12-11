<!--
function openCodes_Postaux() {
	window.open('/cp_frame.htm?lang=$$LANGUE$$', 'cdp', ',height=330, width=360, scrollbars=yes, resizable=no, toolbar=no, status=no, menubar=no');
}

function displayRadio(elt) {
	
	elt_radio=document.getElementsByName('rayon');
		if( elt_radio ) {
				for(var i=0; i<=4; i++){
					if( elt.value != "" ) {
							elt_radio[i].disabled = false;
					}else{
						elt_radio[i].checked = false;
						elt_radio[i].disabled = true;
						}
				}
		}
}


function affiche_dep( monurl, mesparametres, elt ) {
	var idtt = document.getElementById("ListeTypeTrans").value;
	mesparametres = "lang=$$LANGUE$$&idtt=" + idtt +"&deps=" + elt.value;
	document.getElementById("cpdep").disabled = "";
	var divdep = document.getElementById("listedep");
	if(elt.value != ""){
		divdep.style.display = "inline";
	}else{
		divdep.style.display = "none";
	}
	//new Insertion.Top('liste', '<tr><td class="patientez"><br/>Patientez, chargement en cours...<br/></td></tr>');
	
	new Insertion.Top('listedep', '<span class="patientez">Patientez, chargement en cours...<br/></span>');
	
	var myAjax = new Ajax.Updater(
	'listedep', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres,
				asynchronous: false
			});	

	elt_select=document.getElementById("cp1");
	if( elt_select ) 
	{
		elt_select.disabled = false;
		
	}
}


function affiche_listevilles( monurl, mesparametres, elt ) {
	var idtt = document.getElementById("ListeTypeTrans").value;
	mesparametres = "lang=$$LANGUE$$&idtt=" + idtt +"&villes=" + elt.value;
	document.getElementById("cpville").disabled = "";
	var divdep = document.getElementById("listevilles");
	if(elt.value != ""){
		divdep.style.display = "inline";
	}else{
		divdep.style.display = "none";
	}
	//new Insertion.Top('liste', '<tr><td class="patientez"><br/>Patientez, chargement en cours...<br/></td></tr>');
	
	new Insertion.Top('listevilles', '<span class="patientez">Patientez, chargement en cours...<br/></span>');
	
	var myAjax = new Ajax.Updater(
	'listevilles', 
	monurl, 
			{
				method: 'get', 
				parameters: mesparametres,
				asynchronous: false
			});	

}




function displayChampDep(elt) {	
	elt_select=document.getElementById("cpdep");
	if( elt_select ) 
	{
		elt_select.disabled = false;
	}
}


function displayChampVille(elt) {	
	elt_select=document.getElementById("cp1");
	if( elt_select ) 
	{
		elt_select.disabled = true;
		document.getElementById("cp1").style.border="1px solid #d5d5d5";
		document.getElementById("cp1").style.color="#d5d5d5";
	}
}











function Verif(){ //* Verifie qu'un type de transaction a bien été selectionné
	var typetrans = document.getElementById("ListeTypeTrans");
	var cp = 	document.getElementById("cpreg");
	var dep = document.getElementById("cpdep");
	var cp1 = document.getElementById("cp1");
	var ci = document.getElementById("cpville");
	
	
	if (ci.value!=null){
		if(ci.value!=""){
			cp.value="";
			dep.value="";
		}
	}
			if(typetrans){
				
				if(typetrans.value != ""){
					
					if(dep){
						if(dep.value != ""){
							cp.value = "";

						}
					}
					if(cp1.value != ""){
						cp.value = "";
						cp.removeAttribute("name");
						
						if(cp1.value.indexOf(",") != "-1"){
							var tabtest = new Array();
							tabtest = cp1.value.split(',');
							cp1.value = tabtest[0];
						}
					
					}
					if(cp.value == "" && cp1.value == ""){cp.removeAttribute("name");}
					if(cp.value != ""){cp1.removeAttribute("name");}
						return true;
				}else{
					alert("Vous devez choisir un type de transaction");
					return false;
					}
			}else{alert("Error Verif");}
			
} 
-->