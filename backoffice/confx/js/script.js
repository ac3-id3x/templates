
// fonction de suppression d'une conf.
function suppConf(linkConf)
{
	// demande de confirmation
	if (confirm("Pour supprimer la conf. vous devez la supprimer via WebDeploy à l'aide de la croix rouge.\r\nVoulez vous continuer ?"))
	{
		// redirecte vers la page de suppression
		document.location = linkConf;
	}
}

// focntion de validation du changement de nombre de ligne vierge.
function changeNbLigne(sel)
{
	// récupération du formulaire
	var frm = sel.form;
	
	alert(frm.name + '\r\n' + frm.action);
	
}
