
var cpt=0;
function Adresse(){
		
		if(cpt>=coord.length){cpt=0;}
			document.getElementById(coord[cpt]).style.display="inline";
			setTimeout("document.getElementById(coord[cpt-1]).style.display='none'",5500);
			cpt++;
		setTimeout("Adresse()",5500); 
	}
	
