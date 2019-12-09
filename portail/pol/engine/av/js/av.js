function DeleteRecherche(Text) {
	var macro = document.getElementById('macro');
	var idrecherche = document.getElementById('idrecherche');
	idrecherche.value = Text;
	if (confirm("Etes-vous sûr de vouloir d'effacer cette recherche ?")) {
		macro.value = 'ALERTESVENDEURS:RECHERCHE_SUPPRIME';
		document.forms.listeRecherche.submit();		
	}
	
}

function EditRecherche(Text){
	var macro =document.getElementById('macro');
	var idrecherche=document.getElementById('idrecherche');
	idrecherche.value=Text;
	alert(idrecherche.value);
	macro.value='ALERTESVENDEURS:RECHERCHE_EDIT';	
	document.forms.listeRecherche.submit();
	
}

function delete_recherche_detail() {
	var macro = document.getElementById('macro');
	if (confirm("Etes-vous sûr de vouloir d'effacer cette recherche ?")) {
		macro.value='ALERTESVENDEURS:RECHERCHE_SUPPRIME';
		document.forms.listeRecherche.submit();			
	}
}

function edit_recherche_detail(){
	var macro =document.getElementById('macro')
	macro.value='ALERTESVENDEURS:RECHERCHE_EDIT'	
	document.forms.listeRecherche.submit()	
}