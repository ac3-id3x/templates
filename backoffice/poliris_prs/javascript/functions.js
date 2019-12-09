//Verifie le contenue de chaque champs, si un champs n'est pas renseignés alors, lui demander de saisir le champs en question
function checkFormInput(oContainer){

	var aObjects = null;
	var sMessages = '';
	
	if( oContainer != null){
		aObjects = oContainer.getElementsByTagName("input");
	}
	else{
		aObjects = document.getElementsByTagName("input");
	}
	
	for (var i=0; i < aObjects.length; i++)
	{
		var input = aObjects[i];
		var espace = input.value;
		
		if( (attRequiredValue = input.getAttribute("attRequired")) != null )
		{			
				if(input.disabled == false)
				{
					if(input.value == '')
					{
						if(sMessages.indexOf(attRequiredValue,0) == -1 )
						{
							sMessages = sMessages + '\r\n' + attRequiredValue;
						}
					}					
				} 
		}
		if( (input.getAttribute("attCheckBlank")) != null )
		{
			if(input.disabled == false)
			{
				if(espace.indexOf(' ',0) != -1 )
				{
						if(sMessages.indexOf('Les champs ne doivent pas contenir d\'espace.',0) == -1 )
						{
							sMessages = sMessages + '\r\n Les champs ne doivent pas contenir d\'espace.';
						}
				}
			}
		}
	}
	
	if(sMessages != '' )
	{
		alert(sMessages);
		return false;
	}
	return true;
}

//Demande la confirmation aux utilisateurs si ils veullent désactiver le Réseau Social
function checkFormInputRS(oContainer){

	if( !checkFormInput(oContainer)) return false;
	var o = document.getElementById("bl_actif");
	var p = document.getElementById("bl_actifRS");
	var q = document.getElementById("nmReference");

	if(p.value == 'True' && p.value != null && o.checked == false){
		
		if (confirm("Voulez-vous désactiver le réseau social ?")) {		
			if(q.value != null && parseInt(q.value)>0){
				return confirm("Attention le réseau social à ["+(q.value)+"] référence(s) active(s) aux comptes. \r\n\r\n Souhaitez vous tout de même le désactiver ?"); 
			}
		}
		else{
			return false;
		}
	}
}

//fonction qui cache un balise en fonction de son id
function cacheInfoAgence(unId)
{
	document.getElementById(unId).style.display = ((document.getElementById(unId).style.display == "") ? "none" : "");
}










