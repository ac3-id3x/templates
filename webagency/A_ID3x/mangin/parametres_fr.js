
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
arrMenu[1] = "Accueil<br>"
arrMenu[2] = "Ventes<br>"
arrMenu[3] = "Locations<br>saisonnières<br>"
arrMenu[4] = "Demande<br>d'achat<br>"
arrMenu[5] = "Demande<br>de locations<br>saisonnières<br>"
arrMenu[6] = "Estimation<br><br>";


//liens associés au menu
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrLiens = new Array();
arrLiens[1] = "/Index.htm?lang=fr";
arrLiens[2] = "/choix.htm?lang=fr";
arrLiens[3] = "/recherche.htm?lang=fr";
arrLiens[4] = "/contact.htm?lang=fr";
arrLiens[5] = "/contact.htm?lang=fr";
arrLiens[6] = "/estimation.htm?lang=fr";

var arrOutils=new Array()
var arrOutilsLiens=new Array()
//Liste des outils (indices partant de 1, ne pas sauter d'indice)
arrOutils[1]="Déménager"
arrOutils[2]="calculette<br>déménagement"
arrOutils[3]="Financer"
arrOutils[4]="Calculette<br>financement"
arrOutils[5]="Frais notariés"

//Liens pour outils.
arrOutilsLiens[1]="/sl_demenagement/guide.htm"
arrOutilsLiens[2]="javascript:MM_openBrWindow('http://www.seloger.com/ext,agences,index.htm?cnt=206018','ledemenageur','width=780,height=600')"
arrOutilsLiens[3]="/137329/guide_.htm"
arrOutilsLiens[4]="/sl_demenagement/calculette.htm?lang=fr"
arrOutilsLiens[5]="/notaire.htm?lang=fr"


//************************************************************************************************************
//************************************  FIN  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

