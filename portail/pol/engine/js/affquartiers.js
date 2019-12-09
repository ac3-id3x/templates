	
	var lastidq;
	var lastlibelle;
	
	function showQ(idq, libelle)
	{
		//var formulaire = document.forms["f_quartiers"];		
		if(lastidq)	
		{
			var ol = 	document.getElementById("quartierlibelle_"+lastidq);
			if(ol)
				ol.innerHTML = lastlibelle;
		}
				
		var quartier = document.getElementById("quartierlibelle_"+idq);		
		if(quartier)
		{
			lastlibelle = quartier.innerHTML;
			lastidq = idq;
			quartier.innerHTML = "<b>"+quartier.innerHTML+"</b>";								
		}
		else
		{
			lastidq = null;
			lastlibelle = null;
		}					
	}
	
	function selectQ(idq)
	{
		var quartier = document.getElementById("quartier_"+idq);
		if (quartier){
			quartier.checked = true;			
			document.getElementById("si_quartier_saisi").value = 1;
		}
	}	

