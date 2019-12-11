
//************************************************************************************************************
//*****************************************  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

//N° de la pointe utilisée (entier de 1 à 5)(roll over sur menu)
var noFleche = 2;
//couleur de la fleche ("B" pour blanc "N" pour noir)
var coulFleche = "B";
// espacement entre lignes du menu en pixels (entier > ou = à 1)
var space = 2;
//outils valeur "oui" ou "non"
var outils = "oui";
//chemin "/z/..." pour roll over etc
var chemin = "/z/webagency/sla/A_template/T37/";


//Libellés du menu 
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrMenu = new Array();
arrMenu[1] = "Accueil";
arrMenu[2] = "Locations";
arrMenu[3] = "Ventes";
arrMenu[4] = "Locations vacances";
arrMenu[5] = "Gestion";
arrMenu[6] = "Syndic";
arrMenu[7] = "Adresses utiles";
arrMenu[8] = "Programmes neufs";
arrMenu[9] = "Estimation gratuite";
arrMenu[10] = "Contact";


//liens associés au menu
//Si on supprime ou ajoute un élément, il faut impérativement mettre à jour les indices dans le tableau
// "outils" ne doit pas figurer  (même si on a choisi outils = "oui")
var arrLiens = new Array();
arrLiens[1] = "/index.htm";
arrLiens[2] = "/locations.htm";
arrLiens[3] = "/ventes.htm";
arrLiens[4] = "/recherche.htm?idtt=4";
arrLiens[5] = "/gestion.htm";
arrLiens[6] = "/syndic.htm";
arrLiens[7] = "/liens.htm";
arrLiens[8] = "/neuf.htm";
arrLiens[9] = "/estimation.htm";
arrLiens[10] = "/contact.htm";

var arrOutils=new Array()
var arrOutilsLiens=new Array()
//Liste des outils (indices partant de 1, ne pas sauter d'indice)
arrOutils[1]="Déménager"
arrOutils[2]="calculette déménagement"
arrOutils[3]="Financer"
arrOutils[4]="Calculette financement"
arrOutils[5]="Frais notariés"
//Liens pour outils.
arrOutilsLiens[1]="/sl_demenagement/guide.htm"
arrOutilsLiens[2]="javascript:MM_openBrWindow('http://www.seloger.com/ext,agences,index.htm?cnt=206018','ledemenageur','width=780,height=600')"
arrOutilsLiens[3]="/137329/_/guide2.htm"
arrOutilsLiens[4]="/calculette.htm"
arrOutilsLiens[5]="/notaire.htm"


//************************************************************************************************************
//************************************  FIN  PARAMETRAGE DE LA TEMPLATE **************************************
//************************************************************************************************************

