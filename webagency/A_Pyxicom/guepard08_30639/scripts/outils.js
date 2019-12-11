$j(document).ready(function() {
	focusChamp(".inputNom","Nom");
	focusChamp(".inputPrenom","Pr\351nom");
	focusChamp(".inputAdresse","Adresse");
	focusChamp(".inputCP","Code postal");
	focusChamp(".inputVille","Ville");
	focusChamp(".inputTel","T\351l");
	focusChamp(".inputEmail","Email");
	focusChamp(".inputSurface","Surface habitable");
	focusChamp(".inputNbPieces","Nombre de pi\350ces");
	focusChamp(".inputMessage","Votre message");

	function focusChamp(champ,msg)
	{
		$j(champ).focus(function(){
			valeurChamp=$j(this).val();
			if(valeurChamp==msg) $j(this).val("");
		})
		$j(champ).blur(function(){
			if($j(this).val()=="") $j(this).val(msg);
		})
	}
/*
	$j(".inputText").each(function(){
		$valeurChamp=$j(this).val();
		$j(this).focus(function(){
			alert($valeurChamp+"++"+$j(this).val()+"--");
			if($valeurChamp==$j(this).val()) 
			{
				$j(this).val("");
				alert("focus");
			}
			
		})
		$j(this).blur(function(){
			if($j(this).val()=="") 
			{
				$j(this).val($valeurChamp);
				alert("focus");
			}
		})
	});
*/
})