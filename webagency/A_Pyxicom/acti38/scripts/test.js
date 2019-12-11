function changeListe(){
		document.getElementById('liste').src="images/img_resultatLiseActive.gif";
		document.getElementById('carte').src="images/img_resultatCarte.gif";
		document.getElementById('rechercheD').style.display="block";
		document.getElementById('rechercheD2').style.display="none";
}
function changeCarte(){
	document.getElementById('carte').src="images/img_resultatCarteActive.gif";
	document.getElementById('liste').src="images/img_resultatLise.gif";
	document.getElementById('rechercheD').style.display="none";
	document.getElementById('rechercheD2').style.display="block";
}