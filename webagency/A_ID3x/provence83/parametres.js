
//************************************************************************************************************
//*****************************************  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

//N° de la pointe utilisée (entier de 1 à 5)(roll over sur menu)
var noFleche = 5;
// espacement entre lignes du menu en pixels (entier > ou = à 1)
var space = 5;
//outils valeur "oui" ou "non"
var outils = "oui";
//chemin "/z/..." pour roll over etc
var chemin = "$$_$$";


//Libellés du menu
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrMenu = new Array();
arrMenu[1] = "Accueil";
arrMenu[2] = "Ventes";
arrMenu[3] = "Recrutement";
arrMenu[4] = "Inter-cabinet";
arrMenu[5] = "Contact";


//liens associés au menu
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrLiens = new Array();
arrLiens[1] = "/accueil.htm";
arrLiens[2] = "/ventes.htm";
arrLiens[3] = "/recrut.htm";
arrLiens[4] = "/intercab.htm";
arrLiens[5] = "/contact.htm";

var arrOutils=new Array()
var arrOutilsLiens=new Array()
//Liste des outils (indices partant de 1, ne pas sauter d'indice)
arrOutils[1]="Déménager"
arrOutils[2]="Calculette<br>déménagement"
arrOutils[3]="Financer"
arrOutils[4]="Calculette<br>financement"
//Liens pour outils.
arrOutilsLiens[1]="/sl_demenagement/guide.htm"
arrOutilsLiens[2]="javascript:MM_openBrWindow('http://www.seloger.com/ext,agences,index.htm?cnt=206018','ledemenageur','width=780,height=600')"
arrOutilsLiens[3]="/sl_slneuf/guide_.htm"
arrOutilsLiens[4]="/sl_demenagement/calculette.htm"


//************************************************************************************************************
//************************************  FIN  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

