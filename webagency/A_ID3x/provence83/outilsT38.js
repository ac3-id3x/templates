
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
S += '<a href="' + arrOutilsLiens[noOutil] + '" class="menuOutils">';
S += arrOutils[noOutil];
S += '</a>';
S += '<br><br>';
document.write(S);
}

function displayOutils(){
if (outils == "oui")
{
var U ="";
U += '<table width="152" border="0" cellspacing="0" cellpadding="0" valign="top" align="center">';
U += '<tr height"20">';
U += '<td width"130" align="right" valign="top">'; 
document.write(U);
for (i=1; i<arrOutils.length; i++)
itemOutil(i);
U = "";
U += '</td>';
U += '<td width"5"><img src="img/vide.gif" width="20" height="1"></td>';
U += '<td class="ombre2" width"1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '<td class="ombre3" width"1"><img src="img/vide.gif" width="1" height="1"></td>';
U += '</tr>';
U += '</table>';
document.write(U);
}
}

//Affichage-------------------------------------------------------
if (document.all)
document.write('<div id="boiteOutils" style="visibility:hidden">');
if (document.layers)
document.write('<ilayer id="boiteOutils" visibility="hide">');

displayOutils();

if (document.all)
document.write('</div>');
if (document.layers)
document.write('</ilayer>');
//fin Affichage-------------------------------------------------------
