
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
T += '<tr>';
T += '<td align="right" valign="top">';
T += '<a href="' + arrLiens[noMenu] + '" class="menu" onMouseOver="javascript:changeImages(\'pointe' + noMenu + '\'\,\'' + chemin + 'Img/Fleche' + coulFleche + noFleche + '.gif\'); "onMouseOut="javascript:changeImages(\'pointe' + noMenu + '\'\,\'' + chemin + 'Img/vide.gif\');">';
T += '&nbsp;' + arrMenu[noMenu] + '&nbsp;</a>';
T += '</td>';
T += '<td width="22" valign="top">';
T += '<img src="Img/vide.gif" name="pointe' + noMenu + '" width="20" height="18">';
T += '</td>';
T += '</tr>';
T += '<tr>';
T += '<td colspan="2">';
T += '<img src="Img/vide.gif" width="1" height="' + space + '">';
T += '</td>';
T += '</tr>';
document.write(T);
}

function displayMenu(){
document.write('<table width="98%" border="0" cellspacing="0" cellpadding="0">');
for (i=1; i<arrMenu.length; i++)
	{itemMenu(i);}
if (outils == "oui")
	{
	var W = "";
	W += '<tr>';
    W += '<td align="right" valign="top">';
	W += '<a href="#" class="menu"  onMouseOver="javascript:changeImages(\'pointeO\',\'' + chemin + 'Img/Fleche' + coulFleche + noFleche + '.gif\'); changeVisibility(\'boiteOutils\')" onMouseOut="javascript:changeImages(\'pointeO\',\'' + chemin + 'Img/vide.gif\');">';
	W += 'Tools&nbsp;';
	W += '</a>';
	W += '</td>';
	W += '<td width="20" valign="top">';
	W += '<img src="Img/vide.gif" name="pointeO" width="20" height="18">';
	W += '</td>';
	W += '</tr>';
	W += '<tr>';
	W += '<td colspan="2">';
	W += '<img src="Img/vide.gif" width="1" height="' + space + '">';
	W += '</td>';
	W += '</tr>';
	document.write(W);
	}
document.write('</table>');
}

displayMenu();

