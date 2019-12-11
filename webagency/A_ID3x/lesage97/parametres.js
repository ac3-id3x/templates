
//************************************************************************************************************
//*****************************************  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

//N° de la pointe utilisée (entier de 1 à 5)(roll over sur menu)
var noFleche = 1;
//couleur fleche ("B" pour blanc "N" pour noir)
var coulFleche = "B"
// espacement entre lignes du menu en pixels (entier > ou = à 1)
var space = 2;
//outils valeur "oui" ou "non"
var outils = "non";
//chemin "/z/..." pour roll over etc
var chemin = "/T41/";


//Libellés du menu 
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")


var arrOutils=new Array()
var arrOutilsLiens=new Array()
//Liste des outils (indices partant de 1, ne pas sauter d'indice)
arrOutils[1]="Déménager"
arrOutils[2]="calculette<br>déménagement"
arrOutils[3]="Financer"
arrOutils[4]="Calculette<br>financement"
arrOutils[5]="Frais de notaire<br>"
//Liens pour outils.
arrOutilsLiens[1]="/sl_demenagement/guide_.htm"
arrOutilsLiens[2]="javascript:MM_openBrWindow('http://www.seloger.com/ext,agences,index.htm?cnt=206018','ledemenageur','width=780,height=600')"
arrOutilsLiens[3]="/137329/guide_.htm"
arrOutilsLiens[4]="/calculette.htm"
arrOutilsLiens[5]="/notaire.htm"


//************************************************************************************************************
//************************************  FIN  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

