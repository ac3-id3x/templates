
//fonction d'affichage du menu sous forme de tableau vertical
//classe utilisée pour les liens : menu
//l'espacement entre 2 lignes du menu est de "space" pixels où "space" est défini dans parametres.js
//image pour les roll over : img/FlecheN où N est un numéro défini dans parametres.js (width=20 height=18)
//les libellés du menu se trouvent dans la table arrMenu définie ds parametres.js
//les liens associés se trouvent dans la table arrLiens définie ds parametres.js
//le libellé "Outils" est affiché en dernier si outils == "oui" dans parametres.js
// le "chemin" pour les roll over est défini dans parametres.js

function changeImages(){
//les arguments sont des paires "name : nom du champ ancienne image" et "nom : nom de l'image nouvelle"
var a = changeImages.arguments;
for (i=0; i<a.length; i=i+2)
	{
	document[a[i]].src = a[i+1];
	}
}

function itemMenu(noMenu){
var T = "";

T += '<tr height"20">';
T += '<td class="menu" width"150" align="right" valign="top">';
T += '<img src="img/vide.gif" width="150" height="1"><br>';
T += '<img src="img/vide.gif" width="20" height="18" align="right" name="pointe' + noMenu + '">';
T += '<a href="' + arrLiens[noMenu] + '" class="menu" onMouseOver="javascript:changeImages(\'pointe' + noMenu + '\'\,\'' + chemin + 'Img/Fleche' + noFleche + '.gif\'); "onMouseOut="javascript:changeImages(\'pointe' + noMenu + '\'\,\'' + chemin + 'Img/vide.gif\');">'; 
T += arrMenu[noMenu];
T += '</a>';
T += '</td>';
T += '<td class="ombre2" width"1"><img src="img/vide.gif" width="1" height="1"></td>';
T += '<td class="ombre3" width"1"><img src="img/vide.gif" width="1" height="1"></td>';
T += '</tr>';
T += '<tr>';
T += '<td colspan="3" height="13"><img src="img/Entre_menu.gif" width="152" height="13"></td>';
T += '</tr>';
document.write(T);
}

function displayMenu(){
document.write('<table width="152" border="0" cellspacing="0" cellpadding="0" valign="top">');
for (i=1; i<arrMenu.length; i++)
	{itemMenu(i);}
if (outils == "oui")
	{
	var T = "";
	T += '<tr height"20">';
	T += '<td class="menu" width"150" align="right" valign="top">';
	T += '<img src="img/vide.gif" width="150" height="1"><br>';
	T += '<img src="img/vide.gif" width="20" height="18" align="right" name="pointeO">';
	T += '<a href="#" class="menu"  onMouseOver="javascript:changeImages(\'pointeO\',\'' + chemin + 'Img/Fleche' + noFleche + '.gif\'); changeVisibility(\'boiteOutils\')" onMouseOut="javascript:changeImages(\'pointeO\',\'' + chemin + 'Img/vide.gif\');">';
	T += 'Outils';
	T += '</a>';
	T += '</td>';
	T += '<td class="ombre2" width"1"><img src="img/vide.gif" width="1" height="1"></td>';
	T += '<td class="ombre3" width"1"><img src="img/vide.gif" width="1" height="1"></td>';
	T += '</tr>';
	T += '<tr>';
	T += '<td colspan="3" height="13"><img src="img/Entre_menu.gif" width="152" height="13"></td>';
	T += '</tr>';
	document.write(T);
	}
document.write('</table>');
}

displayMenu();

