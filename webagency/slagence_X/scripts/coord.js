//$$DYN:ID3:NOFOOTER$$
var cpt=0;
function Adresse()
					{
						document.getElementById(coord[cpt]).style.display="inline";
						cpt++;
							if(cpt>=coord.length) {
								cpt=0;
								setTimeout("document.getElementById(coord[coord.length-1]).style.display='none'",3000);
							} else {
								setTimeout("document.getElementById(coord[cpt-1]).style.display='none'",3000);
							}
						setTimeout("Adresse()",3000);
					}