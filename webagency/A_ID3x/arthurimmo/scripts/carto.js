
	function getVar(nomVariable){
		var infos = location.href.substring(location.href.indexOf("?")+1, location.href.length)+"&"
		if (infos.indexOf("#")!=-1)
			infos = infos.substring(0,infos.indexOf("#"))+"&"
		var variable=0
		{
			nomVariable = nomVariable + "="
			var taille = nomVariable.length
			if (infos.indexOf(nomVariable)!=-1)
				variable = infos.substring(infos.indexOf(nomVariable)+taille,infos.length).substring(0,infos.substring(infos.indexOf(nomVariable)+taille,infos.length).indexOf("&"))
		}
		return variable
	}
	
	function ListeReg(elt,lg){
		document.location.href = "/carto.htm?lang="+lg+"&region=" + elt.value + "&posreg=" + elt.selectedIndex;
		}
	function ListeDep(elt,lg){		
		document.location.href = "/carto.htm?lang="+lg+"&cp=" + elt.value + "&region=" + document.getElementById("region").value + "&posdep=" + elt.selectedIndex + "&posreg=" + document.getElementById("region").selectedIndex;
		}
	function ListeVilles(elt,lg){
		document.location.href = "/liste-agences-immobilieres.htm?lang="+lg+"&cp=" + elt.value;
		}	
	if(getVar('posreg')){
		document.getElementById("region").selectedIndex = getVar('posreg');
	}
	if(getVar('posdep')){
		document.getElementById("dep").selectedIndex = getVar('posdep');
	}
	
	function change_carte( oldidcarte, newidcarte ) {
	var elt_oldcarte = document.getElementById( oldidcarte );
	var elt_newcarte = document.getElementById( newidcarte );
	if( elt_oldcarte && elt_newcarte ) {
		elt_oldcarte.style.visibility="hidden";
		elt_oldcarte.style.display="none";
		elt_newcarte.style.visibility="visible";
		elt_newcarte.style.display="inline";
	}
}
function writeIntitule(name,cp) {
	var elt_intitule = document.getElementById( "intitule" );
	var elt_intitule2 = document.getElementById( "intitule2" );
	if ( elt_intitule) {
	if ( name !='' )
	elt_intitule.innerHTML = name.alt;
	else
	elt_intitule.innerHTML = '&nbsp;';
	}
	if ( elt_intitule2) {
	if ( name !='' )
	elt_intitule2.innerHTML = cp;
	else
	elt_intitule2.innerHTML = '&nbsp;';
	}

}