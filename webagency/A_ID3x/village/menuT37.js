
//fonction d'affichage du menu sous forme de tableau vertical
//classe utilis�e pour les liens : menu
//l'espacement entre 2 lignes du menu est de "space" pixels o� "space" est d�fini dans parametres.js
//image pour les roll over : img/FlecheN o� N est un num�ro d�fini dans parametres.js (width=20 height=18)
//les libell�s du menu se trouvent dans la table arrMenu d�finie ds parametres.js
//les liens associ�s se trouvent dans la table arrLiens d�finie ds parametres.js
//le libell� "Outils" est affich� en dernier si outils == "oui" dans parametres.js
// le "chemin" pour les roll over est d�fini dans parametres.js

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

T += '<td>';
T += '<a href="' + arrLiens[noMenu] + '" class="menu" onMouseOver="javascript:changeImages(\'pointe' + noMenu + '\'\,\'' + chemin + 'Img/Fleche' + coulFleche + noFleche + '.gif\'); "onMouseOut="javascript:changeImages(\'pointe' + noMenu + '\'\,\'' + chemin + 'Img/vide.gif\');">'; 
T += arrMenu[noMenu];
T += '</a>';
T += '</td>';
T += '<td>';
T += '<img src="Img/vide.gif" name="pointe' + noMenu + '" width="20" height="18">';
T += '</td>';
T += '<td>';
T += '<img src="Img/vide.gif" height="1" width="' + space + '">';
T += '</td>';
document.write(T);
}

function displayMenu(){
if (arrMenu.length<7)
	{
	document.write('<table border="0" cellspacing="0" cellpadding="2"><tr>');
	for (i=1; i<arrMenu.length; i++)
	{itemMenu(i);}
	document.write('</tr></table>');
	}
else if (6<arrMenu.length<13)
	{
	document.write('<table border="0" cellspacing="0" cellpadding="2"><tr>');
	for (i=1; i<7; i++)
	{itemMenu(i);}
	document.write('</tr></table>');
	document.write('<table border="0" cellspacing="0" cellpadding="2"><tr>');
	for (j=7; j<arrMenu.length; j++)
	{itemMenu(j);}
	document.write('</tr></table>');
	}
else if (11<arrMenu.length<19)
	{
	document.write('<table border="0" cellspacing="0" cellpadding="2"><tr>');
	for (i=1; i<7; i++)
	{itemMenu(i);}
	document.write('</tr></table>');
	document.write('<table border="0" cellspacing="0" cellpadding="2"><tr>');
	for (j=7; j<13; j++)
	{itemMenu(j);}
	document.write('</tr></table>');
	document.write('<table border="0" cellspacing="0" cellpadding="2"><tr>');
	for (k=13; k<arrMenu.length; k++)
	{itemMenu(k);}
	document.write('</tr></table>');
	}
}

displayMenu();

