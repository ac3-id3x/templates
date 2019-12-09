function addPublication()
{
	var myForm = document.getElementById('frmenregistrement');
	var elt_u = document.getElementById('u');
	var elt_chselection = document.getElementById('chselection');
	var elt_type = document.getElementById('type');
//	var elt_iddossier = document.getElementById('iddossier');
	
	
	// Le formulaire est-il présent ?
	if(myForm)
	{
		// A-t-on une balise u ? 
		if (elt_u)
		{
			if(elt_chselection) {
				elt_chselection.value = addListId('frmenregistrement', 'checkbox', 'chselection');
			}
			
			if( (elt_chselection.value != 0) && (elt_type.value != '') )
			{
				myParams = buildParams('', '&', 'u', 'page_ok', 'page_err', 'chselection', 'type', 'iddossier' );
				validateFormOnSuccess('', 'incl_result_agence.htm' ,myParams);
				
			} else { alert('Impossible de récupérer les publications. Veuillez séléctionner les publications à ajouter.\n\nSi le problème persiste, contactez le service informatique de gestion'); return 0; }
		}
	}
}
	
function addTypePublication()
{
	var myForm = document.getElementById('formrecord');
	var elt_u = document.getElementById('u');
	var elt_chselection = document.getElementById('chselection');
	var elt_type = document.getElementById('type');
	
	// Le formulaire est-il présent ?
	if(myForm)
	{
		// A-t-on une balise u ? 
		if (elt_u)
		{
			if(elt_chselection) {
				elt_chselection.value = addListId('formrecord', 'checkbox', 'chselection');
			}
			
			if( (elt_chselection.value != 0) && (elt_type.value != '') )
			{
				myParams = buildParams('&', 'u', 'page_ok', 'page_err', 'chselection', 'type', 'iddossier' );
				validateFormOnSuccess('', 'incl_result_groupement.htm' ,myParams);
				
			} else { alert('Impossible de récupérer les publications. Veuillez séléctionner les publications à ajouter.\n\nSi le problème persiste, contactez le service informatique de gestion'); return 0; }
		}
	}
}