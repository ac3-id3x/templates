	function favoris()
		{ 
			if ( navigator.appName != 'Microsoft Internet Explorer' )
				{ 
					window.sidebar.addPanel('Orpi Immobilier : $$SRV$$','http://$$SRV$$',''); 
				} 
			else 
				{ 
					window.external.AddFavorite("http://$$SRV$$","Orpi Immobilier : $$SRV$$"); 
				} 
		} 

function affichage_popupoutils(Outils, Services)
				{
				window.open (Outils, Services, config='height=550, width=750, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no')
				}

function changeDIV ( idtt ) 
{
	

	if (idtt == "1")
	{
		// cas location
		
		// imput hidden
		elt_moteur = document.getElementById("idtt_moteur");
		if(elt_moteur)
		{
			elt_moteur.value="1";
		}
		
		// image de fond
		elt_moteur = document.getElementById("Moteur");		
		if(elt_moteur)
		{
			elt_moteur.id = "Moteur2";
		}
		
		// lien direct
		elt_moteur = document.getElementById("PlusRecherche");		
		if(elt_moteur)
		{
			elt_moteur.innerHTML = "<a href=\"http://$$SRV$$/recherche,classic.htm?idtt=1$$IF:FORM:LANG$$&amp;lang=$$FORM:LANG$$$$END$$\" title=\"$$PAGE:DESCRIPTION$$\">$$LG:NOSANNONCESLOC pcase$$</a>";
		}
	}
	
		

	if (idtt == "2")
	{
		// cas vente
		elt_moteur = document.getElementById("idtt_moteur");
		if(elt_moteur)
		{
			elt_moteur.value="2";
		}		
		elt_moteur = document.getElementById("Moteur2");
		
		if(elt_moteur)
		{
			elt_moteur.id = "Moteur";
		}
		
		// lien direct
		elt_moteur = document.getElementById("PlusRecherche");		
		if(elt_moteur)
		{
			elt_moteur.innerHTML = "<a href=\"http://$$SRV$$/recherche,classic.htm?idtt=2$$IF:FORM:LANG$$&amp;lang=$$FORM:LANG$$$$END$$\" title=\"$$PAGE:DESCRIPTION$$\">$$LG:NOSANNVEN pcase$$</a>";
		}
	}
}