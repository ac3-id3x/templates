
function changeVisibility(nomLayer){
if (document.all)
	{
	if (document.all[nomLayer].style.visibility == "hidden")
	document.all[nomLayer].style.visibility = "visible";
	else
	document.all[nomLayer].style.visibility = "hidden";
	}
if (document.layers)
	{
	if (document.layers[nomLayer].visibility == "hide")
	document.layers[nomLayer].visibility = "show";
	else
	document.layers[nomLayer].visibility = "hide";
	}
}

function itemOutil(noOutil){
var S = "";
if (noOutil>1)
	{S += '<span class="outils">&nbsp;|&nbsp;</span>';}
S += '<a href="' + arrOutilsLiens[noOutil] + '" class="menuOutils">';
S += arrOutils[noOutil];
S += '</a>';
document.write(S);
}


function displayOutils(){
if (outils == "oui")
{
var U ="";
U += '<table width="540" border="0" cellspacing="0" cellpadding="0">';
U += '<tr>';
U += '<td colspan="5" class="bordure" height="2"><img src="img/vide.gif" width="1" height="2"></td>';
U += '</tr>';
U += '<tr>'; 
U += '<td rowspan="4" class="bordure" width="2"><img src="img/vide.gif" width="2" height="1"></td>';
U += '<td colspan="2" rowspan="3"><img src="img/coin.gif" width="2" height="3"></td>';
U += '<td class="ombre1" height="1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '<td rowspan="4" class="bordure" width="2"><img src="img/vide.gif" width="2" height="1"></td>';
U += '</tr>';
U += '<tr>'; 
U += '<td class="ombre2" height="1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '</tr>';
U += '<tr>'; 
U += '<td class="ombre3" height="1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '</tr>';
U += '<tr>'; 
U += '<td class="ombre2" width="1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '<td class="ombre3" width="1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '<td bgcolor="#ffffff" align="center" width="534">';
document.write(U);

for (i=1; i<arrOutils.length; i++)
itemOutil(i);

U = "";
U += '</td>';
U += '</tr>';
U += '<tr>'; 
U += '<td colspan="5" class="bordure" height="2"><img src="img/vide.gif" width="1" height="2"></td>';
U += '</tr>';
U += '</table>';
document.write(U);
}
}

//Affichage-------------------------------------------------------
if (outils == "oui")
{
var U = "";
U += '<table border="0" cellspacing="0" cellpadding="0">';
U += '<tr>';
U += '<td width="80" align="right">';
U += '<img src="img/Vide.gif" name="pointeO" align="right" width="20" height="18">';
U += '<a href="#" class="menu"  onMouseOver="javascript:changeImages(\'pointeO\'\,\'' + chemin + 'img/Fleche' + coulFleche + noFleche + '.gif\'); changeVisibility(\'boiteOutils\'); "onMouseOut="javascript:changeImages(\'pointeO\',\'' + chemin + 'img/vide.gif\');">';
U += 'Outils';
U += '</a>';
U += '</td>';
U += '<td>';

document.write(U);
if (document.all)
document.write('<div id="boiteOutils" style="visibility:hidden">');
if (document.layers)
document.write('<ilayer id="boiteOutils" visibility="hide">');

displayOutils();

if (document.all)
document.write('</div>');
if (document.layers)
document.write('</ilayer>');

var U = "";
U += '</td>';
U += '<td width="80"></td>';
U += '</tr>';
U += '</table>';
document.write(U);
}
//fin Affichage-------------------------------------------------------
