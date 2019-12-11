
//************************************************************************************************************
//*****************************************  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

//N° de la pointe utilisée (entier de 1 à 5)(roll over sur menu)
var noFleche = 2;
//couleur fleche ("B" pour blanc "N" pour noir)
var coulFleche = "B"
// espacement entre lignes du menu en pixels (entier > ou = à 1)
var space = 2;
//outils valeur "oui" ou "non"
var outils = "oui";
//chemin "/z/..." pour roll over etc
var chemin = "/z/webagency/sla/A_template/T33/";


//Libellés du menu 
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrMenu = new Array();
arrMenu[1] = "Home<br>"
arrMenu[2] = "Sales<br>"
arrMenu[3] = "Holiday<br>rentals<br>"
arrMenu[4] = "Purchase<br>order<br>"
arrMenu[5] = "Rentals<br>order<br>"
arrMenu[6] = "Estimation<br><br>";


//liens associés au menu
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrLiens = new Array();
arrLiens[1] = "/Index.htm?lang=en";
arrLiens[2] = "/choix.htm?lang=en";
arrLiens[3] = "/recherche.htm?lang=en";
arrLiens[4] = "/contact.htm?lang=en";
arrLiens[5] = "/contact.htm?lang=en";
arrLiens[6] = "/estimation.htm?lang=en";

var arrOutils=new Array()
var arrOutilsLiens=new Array()
//Liste des outils (indices partant de 1, ne pas sauter d'indice)
arrOutils[1]="Financial<br>calculator"
arrOutils[2]="Notaries fees"

//Liens pour outils.
arrOutilsLiens[1]="/sl_demenagement/calculette.htm?lang=fr"
arrOutilsLiens[2]="/notaire.htm?lang=en"


//************************************************************************************************************
//************************************  FIN  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

