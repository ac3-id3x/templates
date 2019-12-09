var checkMotsCles = function (element)
{
	var idThematique = element.value;
	
	$$("input[name^='" + idThematique + "']").each(function(elt)
	{
		elt.checked == true ? elt.checked = false : elt.checked = true
	});
}

var addElement = function (elt) {
	var myclone = elt.cloneNode(true);
	$(elt).insert({after: myclone});
}



var delThematique = function (elt) {
	$('idThematique').value = elt;
	myParams = buildParams('', '&', 'u', 'page_ok', 'page_err', 'idThematique');
	
	var myAjax = new Ajax.Updater(
			'listeThematiqueValorisees',
			'incl_liste_thematique_valorisees.htm',
			{
				method: 'post',
				parameters: myParams,
				onSuccess: function(transport) { window.document.reload;  },
				onError: function(transport) { alert("Une erreur est survenue, veuillez contacter le service Informatique de Gestion.");  }
			});
}