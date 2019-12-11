var cpt=0;
var cpt1=0;
var cpt2=0;
var a=0;
function Adresse()
	{
		if(a==2){document.getElementById(coord[cpt]).style.display="inline";}
		
		document.getElementById(cor[cpt1]).style.display="inline";
		document.getElementById(adress[cpt2]).style.display="inline";
		cpt++;
		cpt1++;
		cpt2++;
			if(cpt>=coord.length) {
				cpt=0;
				setTimeout("document.getElementById(coord[coord.length-1]).style.display='none'",3500);
			} else {
				setTimeout("document.getElementById(coord[cpt-1]).style.display='none'",3500);
			}
			if(cpt1>=cor.length) {
				cpt1=0;
				setTimeout("document.getElementById(cor[cor.length-1]).style.display='none'",3500);
			} else {
				setTimeout("document.getElementById(cor[cpt1-1]).style.display='none'",3500);
			}
			if(cpt2>=adress.length) {
				cpt2=0;
				setTimeout("document.getElementById(adress[adress.length-1]).style.display='none'",3500);
			} else {
				setTimeout("document.getElementById(adress[cpt2-1]).style.display='none'",3500);
			}
		setTimeout("Adresse()",3500); 
	}