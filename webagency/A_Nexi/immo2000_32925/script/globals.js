
//------------------------------------------------------------------------------
// Paramètres généraux
//------------------------------------------------------------------------------
// modifié le 25/11/2005

var TVAMetro 	= 0.196;
var TVADOM   	= 0.085;
var TVAGuyane	= 0.0;

//------------------------------------------------------------------------------
// Prêt PAS
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// plafond de ressources applicable selon la localisation 
// et le nbre de personnes du logt
//------------------------------------------------------------------------------

// mise à jour le 25/03/2007
function FPlafRessPAS( NPers, Localisation )
{

  try {
  
  var dTabPlafPas=new Array();
  dTabPlafPas[0]=new Array();
  dTabPlafPas[1]=new Array();
  dTabPlafPas[2]=new Array();

  // valeurs applicables aux revenus 2006 --------------------

  // Zone A
      dTabPlafPas[0][0]=19005.0;
      dTabPlafPas[0][1]=27895.0;
      dTabPlafPas[0][2]=33500.0;
      dTabPlafPas[0][3]=39118.0;
      dTabPlafPas[0][4]=44751.0;
      dTabPlafPas[0][5]=5623.0;
      dTabPlafPas[0][6]=0.0;
      dTabPlafPas[0][7]=0.0;

   // Zones B & C

      dTabPlafPas[1][0]=15183.0;
      dTabPlafPas[1][1]=22205.0;
      dTabPlafPas[1][2]=26705.0;
      dTabPlafPas[1][3]=31199.0;
      dTabPlafPas[1][4]=35713.0;
      dTabPlafPas[1][5]=4498.0;
      dTabPlafPas[1][6]=0.0;
      dTabPlafPas[1][7]=0.0;

   // DOM

      dTabPlafPas[2][0]=16298.44;
      dTabPlafPas[2][1]=23837.11;
      dTabPlafPas[2][2]=28666.14;
      dTabPlafPas[2][3]=33491.96;
      dTabPlafPas[2][4]=39104.14;
      dTabPlafPas[2][5]=44066.33;
      dTabPlafPas[2][6]=48981.66;
      dTabPlafPas[2][7]=53896.98;

  
  if (Localisation=="I")
    return dTabPlafPas[0][Math.min(NPers,5)-1]+Math.max(0,NPers-5)*dTabPlafPas[0][5];
  else if (Localisation=="P")
    return dTabPlafPas[1][Math.min(NPers,5)-1]+Math.max(0,NPers-5)*dTabPlafPas[1][5];
  else if (Localisation=="G" || Localisation=="M" || Localisation=="Y" || Localisation=="R")
    return dTabPlafPas[2][Math.min(NPers,8)-1];
  else
    return undefined;
    
  }
  catch(e)
  {return undefined;}
  
}

//------------------------------------------------------------------------------
// PTZ Plus
//------------------------------------------------------------------------------
// mise à jour le 17/03/2006

//------------------------------------------------------------------------------
// Paramètres relatifs au PTZ Plus
//------------------------------------------------------------------------------

  ptz_QuotiteMax      =  0.20;    // 20 % 

   // Plafonds de ressources ---------------------------------------------------

   // ptz_plafress_xxx_i --> plafond de ressources pour le PTZ
   //                        pour la zone xxx pour i personnes dans le foyer
  
   // zone A
    ptz_plafress_A_1    = 31250.00;
    ptz_plafress_A_2    = 43750.00;
    ptz_plafress_A_3    = 50000.00;
    ptz_plafress_A_4    = 56875.00;
    ptz_plafress_A_5    = 64875.00;
    
   // zones B, C ou DOM
    ptz_plafress_BC_1    = 23688.00;
    ptz_plafress_BC_2    = 31588.00;
    ptz_plafress_BC_3    = 36538.00;
    ptz_plafress_BC_4    = 40488.00;
    ptz_plafress_BC_5    = 44425.00;

// Prix maximaux d'opérations --------------------------------------------------

  // Neuf - zone A
  ptz_prixmax_neuf_A_1 = 80000.00 ;
  ptz_prixmax_neuf_A_2 = 112500.00 ;
  ptz_prixmax_neuf_A_3 = 125000.00 ;
  ptz_prixmax_neuf_A_4 = 137500.00 ;
  ptz_prixmax_neuf_A_5 = 150000.00 ;
  ptz_prixmax_neuf_A_6 = 162500.00 ;
  
  // Neuf - zones B ou C
  ptz_prixmax_neuf_BC_1 = 55000.00 ;
  ptz_prixmax_neuf_BC_2 = 82500.00 ;
  ptz_prixmax_neuf_BC_3 = 95000.00 ;
  ptz_prixmax_neuf_BC_4 = 107500.00 ;
  ptz_prixmax_neuf_BC_5 = 120000.00 ;
  ptz_prixmax_neuf_BC_6 = 132500.00 ;


// Profil PTZ ------------------------------------------------------------------

  // DT : Duree totale du pret  en mois
  // DD : Duree du differe  en mois
  // TD : Taux du differe   0<=TD<=1  
  // RNI = Revenu Net Imposable

  ptz_profil_RNI_1 = 15801.00 ;
  ptz_profil_DT_1  = 264  ;     // RNI <= 15801.00 
  ptz_profil_DD_1  = 216  ;
  ptz_profil_TD_1  = 1.00 ;

  ptz_profil_RNI_2 = 19750.00 ;
  ptz_profil_DT_2  = 252  ;     // RNI <= 19750.00
  ptz_profil_DD_2  = 216  ;
  ptz_profil_TD_2  = 0.75 ;

  ptz_profil_RNI_3 = 23688.00 ;
  ptz_profil_DT_3  = 204  ;     // RNI <= 23688.00 
  ptz_profil_DD_3  = 180  ;
  ptz_profil_TD_3  = 0.50 ;

  ptz_profil_RNI_4 = 31588.00 ;
  ptz_profil_DT_4  = 96 ;     // RNI <= 31588.00
  ptz_profil_DD_4  = 0  ;
  ptz_profil_TD_4  = 0.00 ;

  ptz_profil_DT_0  = 72 ; // sinon
  ptz_profil_DD_0  = 0  ;
  ptz_profil_TD_0  = 0.00 ;

  // PTZ majoré DOM
  
  ptz_profil_DOM_RNI_1 = 15801.00 ;
  ptz_profil_DOM_DT_1  = 300  ;     // RNI <= 15801.00 
  ptz_profil_DOM_DD_1  = 252  ;
  ptz_profil_DOM_TD_1  = 1.00 ;

  ptz_profil_DOM_RNI_2 = 19750.00 ;
  ptz_profil_DOM_DT_2  = 288  ;     // RNI <= 19750.00
  ptz_profil_DOM_DD_2  = 252  ;
  ptz_profil_DOM_TD_2  = 0.75 ;

  ptz_profil_DOM_RNI_3 = 23688.00 ;
  ptz_profil_DOM_DT_3  = 240  ;     // RNI <= 23688.00 
  ptz_profil_DOM_DD_3  = 216  ;
  ptz_profil_DOM_TD_3  = 0.50 ;

  ptz_profil_DOM_RNI_4 = 26655.00 ;
  ptz_profil_DOM_DT_4  = 132 ;     // RNI <= 31588.00
  ptz_profil_DOM_DD_4  = 0  ;
  ptz_profil_DOM_TD_4  = 0.00 ;

  ptz_profil_DOM_DT_0  = 132 ; // sinon
  ptz_profil_DOM_DD_0  = 0  ;
  ptz_profil_DOM_TD_0  = 0.00 ;  
  
  
//------------------------------------------------------------------------------
// détermination du profil du PTZ
// en fonction du revenu fiscal de référence
//------------------------------------------------------------------------------

DT = undefined;
DD = undefined;
TD = undefined;

function FProfilPTZ(RNI)
{

   // DT : Duree totale du pret en mois
   // DD : Duree du differe en mois
   // TD : Taux du differe    0<=TD<=1

   if ( RNI <= ptz_profil_RNI_1) { DT = ptz_profil_DT_1; DD = ptz_profil_DD_1; TD = ptz_profil_TD_1; }
   else if ( RNI <= ptz_profil_RNI_2) { DT = ptz_profil_DT_2; DD = ptz_profil_DD_2; TD = ptz_profil_TD_2; }
   else if ( RNI <= ptz_profil_RNI_3) { DT = ptz_profil_DT_3; DD = ptz_profil_DD_3; TD = ptz_profil_TD_3; }
   else if ( RNI <= ptz_profil_RNI_4) { DT = ptz_profil_DT_4; DD = ptz_profil_DD_4; TD = ptz_profil_TD_4; }
   else                               { DT = ptz_profil_DT_0; DD = ptz_profil_DD_0; TD = ptz_profil_TD_0; }
  
}

function FProfilPTZDOM(RNI)
{
   // DT : Duree totale du pret en mois
   // DD : Duree du differe en mois
   // TD : Taux du differe    0<=TD<=1

   if ( RNI <= ptz_profil_DOM_RNI_1) { DT = ptz_profil_DOM_DT_1; DD = ptz_profil_DOM_DD_1; TD = ptz_profil_DOM_TD_1; }
   else if ( RNI <= ptz_profil_DOM_RNI_2) { DT = ptz_profil_DOM_DT_2; DD = ptz_profil_DOM_DD_2; TD = ptz_profil_DOM_TD_2; }
   else if ( RNI <= ptz_profil_DOM_RNI_3) { DT = ptz_profil_DOM_DT_3; DD = ptz_profil_DOM_DD_3; TD = ptz_profil_DOM_TD_3; }
   else if ( RNI <= ptz_profil_DOM_RNI_4) { DT = ptz_profil_DOM_DT_4; DD = ptz_profil_DOM_DD_4; TD = ptz_profil_DOM_TD_4; }
   else                               { DT = ptz_profil_DOM_DT_0; DD = ptz_profil_DOM_DD_0; TD = ptz_profil_DOM_TD_0; }
}

//------------------------------------------------------------------------------
// détermination de l'année prise en compte dans la détermination des ressources
// année de référence : N-2 avant le 31 mars et N-1 après
//------------------------------------------------------------------------------

function FAnneeRevenusPTZ()
{
   var jour = new Date();
   var annee=jour.getFullYear();
   annee--;
   // Base zéro !
   var mois=jour.getMonth();
   if (mois<=2) annee--;
   return Math.max(annee,2006);
}

//------------------------------------------------------------------------------
// plafond de ressources applicable selon la zone et le nbre de personnes du logt
//------------------------------------------------------------------------------

function FPlafRessPTZ( NPers, ZoneABC )
{
   if( ZoneABC == "ZoneA" )  
   {
      if(NPers == 1)      return ptz_plafress_A_1;
      else if(NPers == 2) return ptz_plafress_A_2;
      else if(NPers == 3) return ptz_plafress_A_3;
      else if(NPers == 4) return ptz_plafress_A_4;
      else if(NPers >= 5) return ptz_plafress_A_5;
   }
   else if( ZoneABC == "ZoneB" || ZoneABC == "ZoneC" || ZoneABC == "DOM")  
   {
      if(NPers == 1)      return ptz_plafress_BC_1;
      else if(NPers == 2) return ptz_plafress_BC_2;
      else if(NPers == 3) return ptz_plafress_BC_3;
      else if(NPers == 4) return ptz_plafress_BC_4;
      else if(NPers >= 5) return ptz_plafress_BC_5;
   }
}

//------------------------------------------------------------------------------
// Prix max applicable selon la zone,le nbre de personnes du logt
// et le type de logement
//------------------------------------------------------------------------------

function FMontantMaxOperationPTZ( NPers, ZoneABC, Natop )
{
   
   var montantmax;
 
   if( ZoneABC == "ZoneA" )  
   {
      if(NPers == 1)      montantmax=ptz_prixmax_neuf_A_1;
      else if(NPers == 2) montantmax=ptz_prixmax_neuf_A_2;
      else if(NPers == 3) montantmax=ptz_prixmax_neuf_A_3;
      else if(NPers == 4) montantmax=ptz_prixmax_neuf_A_4;
      else if(NPers == 5) montantmax=ptz_prixmax_neuf_A_5;
      else if(NPers >= 6) montantmax=ptz_prixmax_neuf_A_6;
   }
   else if( ZoneABC == "ZoneB" || ZoneABC == "ZoneC" || ZoneABC == "DOM")  
   {
      if(NPers == 1)      montantmax=ptz_prixmax_neuf_BC_1;
      else if(NPers == 2) montantmax=ptz_prixmax_neuf_BC_2;
      else if(NPers == 3) montantmax=ptz_prixmax_neuf_BC_3;
      else if(NPers == 4) montantmax=ptz_prixmax_neuf_BC_4;
      else if(NPers == 5) montantmax=ptz_prixmax_neuf_BC_5;
      else if(NPers >= 6) montantmax=ptz_prixmax_neuf_BC_6;
   }

   if (Natop=="Neuf" || Natop=="CNNeuf" || Natop=="AchatNeuf") return montantmax;
   else if (Natop=="Ancien")
   {
      if( ZoneABC == "ZoneA" )      return montantmax*0.90; 
      else if( ZoneABC == "ZoneB" ) return montantmax*0.80; 
      else if( ZoneABC == "ZoneC" ) return montantmax*0.75; 
   }
 
}

//------------------------------------------------------------------------------
// Montant max du PTZ selon la zone,le nbre de personnes du logt
// et le type de logement
//------------------------------------------------------------------------------

function FMontantMaxPTZ( NPers, ZoneABC, Natop )
{
   try { return FMontantMaxOperationPTZ( NPers, ZoneABC, Natop )*ptz_QuotiteMax; }
   catch(e) { return undefined;}
}

//------------------------------------------------------------------------------
// Calcul des frais de notaire
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Emoluments 
//------------------------------------------------------------------------------

function FEmolumentsNotaire( BaseDeCalcul , Localisation)
// maj 10/11/06
{
  
  // Bornes émoluments notaire
  // Les tarifs varient en fonction du prêt et sont dégressifs
  // tarif proportionnel degressif

  // 4% de 0 a 6500
  // 1.65% de 6501 a 17000
  // 1.10% de 17001 a 30000
  // 0.825% a partir de 30000

  var dBornesEmoluments=new Array();

  dBornesEmoluments[0]=new Array();
  dBornesEmoluments[0][0]=6500;
  dBornesEmoluments[0][1]=17000;
  dBornesEmoluments[0][2]=30000;
  dBornesEmoluments[0][3]=0;

  dBornesEmoluments[1]=new Array();
  dBornesEmoluments[1][0]=4.0/100.0;
  dBornesEmoluments[1][1]=1.65/100.0;
  dBornesEmoluments[1][2]=1.10/100.0;
  dBornesEmoluments[1][3]=0.825/100.0;

  try

  {

    // Emoluments du notaire (hors TVA)
  
    var dValue=0.0;
    dValue+=Math.min(BaseDeCalcul,dBornesEmoluments[0][0])*dBornesEmoluments[1][0];
    dValue+=Math.max(Math.min(BaseDeCalcul,dBornesEmoluments[0][1])-dBornesEmoluments[0][0],0.0)*dBornesEmoluments[1][1];
    dValue+=Math.max(Math.min(BaseDeCalcul,dBornesEmoluments[0][2])-dBornesEmoluments[0][1],0.0)*dBornesEmoluments[1][2];
    dValue+=Math.max(BaseDeCalcul-dBornesEmoluments[0][2],0.0)*dBornesEmoluments[1][3];

    if (Localisation=="R")
      dValue*=1.4;
    else if (Localisation=="G" || Localisation=="M" || Localisation=="Y")  
      dValue*=1.25;
    
	if (Localisation=="Y")
	  dValue*=(1.0+TVAGuyane);	
    else if (Localisation=="I" || Localisation=="P")
      dValue*=(1.0+TVAMetro);
    else
      dValue*=(1.0+TVADOM);
    
    if (isNaN(dValue))
      return undefined;
    else
      return dValue;

    return dValue;

  }
  catch (e) { return undefined;}
}

//------------------------------------------------------------------------------
// Droits et salaire du conservateur 
//------------------------------------------------------------------------------
// modif. 01/11/2006
function FDroitsNotaire( BaseDeCalcul , Natop)
{

  // Droits de notaire
  // Bien ancien -> 4,89 %  de la base
  //      neuf   -> 0,615 % de la base 

  // Salaire du conservateur : 0,1 % de la base 
 
  try

  {
    var dValue=0.0;
    
    if (Natop=="CNNeuf" || Natop=="AchatNeuf") 
      dValue+=BaseDeCalcul*0.00715;
    else if (Natop=="Ancien") 
      dValue+=BaseDeCalcul*0.05090;
    else
      return undefined;
    
    dValue+=BaseDeCalcul*0.001;
    
    if (isNaN(dValue))
      return undefined;
    else
      return dValue;
      
  }
  catch (e) { return undefined;}
}

//------------------------------------------------------------------------------
// Emoluments de formalités et débours
//------------------------------------------------------------------------------
// modif. 01/11/2006
function FFormalitesDeboursNotaire ( Localisation )
{
    var dValue=0.0;
	if (Localisation=="R")
      dValue+=(750.0*0.836*1.4*1.085);
    else if (Localisation=="G" || Localisation=="M")  
      dValue+=(750.0*0.836*1.25*1.085);
    else if (Localisation=="Y")  
      dValue+=(750.0*0.836*1.25);
    else
      dValue+=750.0;

	  if (isNaN(dValue))
      return undefined;
    else
      return dValue;
}

//------------------------------------------------------------------------------
// Frais de notaire 
//------------------------------------------------------------------------------
// modif. 01/11/2006
function FFraisNotaire( MontantOperation , Localisation, Natop)
{

  try

  {
    
    // Dans le cas d'une construction de maison, on suppose 
    // que la valeur du terrain représente 25 % du montant total de l'opération
    // et que le ménage n'est pas déjà propriétaire du terrain
    
    var BaseDeCalcul;
    
    if (Natop=="CNNeuf")
      BaseDeCalcul=MontantOperation*0.25; 
    else
      BaseDeCalcul=MontantOperation; 
    
    var frais=FEmolumentsNotaire( BaseDeCalcul , Localisation);
    frais+=FDroitsNotaire( BaseDeCalcul , Natop);
    frais+=FFormalitesDeboursNotaire( Localisation);
    
    if (isNaN(frais))
      return undefined;
    else
      return Math.round(frais/100.0)*100.0;
  }
  catch (e) { return undefined;}
}


//------------------------------------------------------------------------------
// Calcul des coûts de garantie
//------------------------------------------------------------------------------
// Le coût de la garantie dépend du montant et de la nature du prêt

 //*************************************************************
 function FGarantieEmolumentsNotaire( MontantPret, Localisation)                             
 // MAJ : 30/06/2006
 {
  var dValue=0.0;
  
  var dTauxGarantie=new Array();
  // Tranches
  dTauxGarantie[0]=new Array();
  dTauxGarantie[0][0]=6500.0;
  dTauxGarantie[0][1]=17000.0;
  dTauxGarantie[0][2]=30000.0;
  dTauxGarantie[0][3]=0.0;

  // Taux applicables 
  dTauxGarantie[1]=new Array();
  dTauxGarantie[1][0]=0.01330;
  dTauxGarantie[1][1]=0.00550;
  dTauxGarantie[1][2]=0.00370;
  dTauxGarantie[1][3]=0.00275;
  
  dValue+=Math.min(MontantPret,dTauxGarantie[0][0])*dTauxGarantie[1][0];
  dValue+=Math.max(Math.min(MontantPret,dTauxGarantie[0][1])-dTauxGarantie[0][0],0.0)*dTauxGarantie[1][1];
  dValue+=Math.max(Math.min(MontantPret,dTauxGarantie[0][2])-dTauxGarantie[0][1],0.0)*dTauxGarantie[1][2];
  dValue+=Math.max(MontantPret-dTauxGarantie[0][2],0.0)*dTauxGarantie[1][3];

  if (Localisation=="R")
    dValue*=1.4;
  else if (Localisation=="G" || Localisation=="M" || Localisation=="Y")  
    dValue*=1.25;

  if (Localisation=="Y")
    dValue*=(1.0+TVAGuyane);
  if (Localisation=="I" || Localisation=="P")
    dValue*=(1.0+TVAMetro);
  else
    dValue*=(1.0+TVADOM);
	
  return dValue;
 }

 //**************************************************
 function FGarantieTPF( MontantPret, TypePret, Natop)     
 // MAJ : 30/06/2006
 // cas hypothèque
 // taxe publicité foncière
 {
  var dValue=0.0;
  //if (Natop!="Ancien"
  //&& (TypePret!="PAS" && TypePret!="PC" && TypePret!="PTZ" && TypePret!="EL"))
  if (Natop=="Neuf" && TypePret=="Autre")
	dValue+=(MontantPret*1.2*0.00715);
  return dValue;
 }

 //************************************************
 function FGarantieSalaireConservateur(MontantPret)     
 // MAJ : 30/06/2006
 {
    return MontantPret*1.2*0.0005;
 }

 //***********************************************
 function FGarantieFormalitesDebours(Localisation)     
 // MAJ : 30/06/2006
 // montant forfaitaire de frais
 {
    var dValue=0.0;
    if (Localisation=="R")
      dValue+=(250.0*0.836*1.4*1.085);
    else if (Localisation=="G" || Localisation=="M")  
      dValue+=(250.0*0.836*1.25*1.085);
	else if (Localisation=="Y")
      dValue+=(250.0*0.836*1.25);
    else
      dValue+=250.0;
    return dValue;
 }

 //*****************************************************************
 function FCoutGarantie( MontantPret, TypePret, Localisation, Natop)                             
 // MAJ : 30/06/2006
 {
  var cout_garantie=0.0;
  try {
    cout_garantie+=FGarantieEmolumentsNotaire(MontantPret,Localisation);
    cout_garantie+=FGarantieTPF(MontantPret,TypePret,Natop);
    cout_garantie+=FGarantieSalaireConservateur(MontantPret);
    cout_garantie+=FGarantieFormalitesDebours(Localisation);
    if (isNaN(cout_garantie))
      return undefined;
    else
      return cout_garantie;
  }
  catch (e) { return undefined;}
 }

//------------------------------------------------------------------------------
// Calcul des intérêts intercalaires
//------------------------------------------------------------------------------
// Attention : TauxYCAss représente ici le taux mensuel yc assurances

 function FInteretsIntercalaires( MontantOperation, MontantApport, TauxYCAss, Natop)                             
 {
 
  try

  {
    
    // Intérêts intercalaires non calculés dans l'ancien avec travaux
    
      if (Natop=="Ancien")
        return 0.0;

    // Contrôle des valeurs
    
      if (MontantOperation<=0 || MontantApport<0)
        return undefined;
      
      var tx_apport=MontantApport/MontantOperation;
      if (tx_apport>=1.0) return 0.0;
    
    // Distinction construction neuve et achat promoteur
    
    var dValue=undefined;
    TauxYCAss*=12.0;
    
    if (Natop=="CNNeuf")
      dValue=(MontantOperation+12000.0)*TauxYCAss*Math.pow(1.0-tx_apport,2.5)/3.0;  
    else if (Natop=="AchatNeuf") 
      dValue=MontantOperation*TauxYCAss*Math.pow(1.0-tx_apport,2.2)/2.0;  
    else return undefined;

    if (isNaN(dValue))
      return undefined;
    else
      return Math.round(dValue/100.0)*100.0;
      
  }
  catch (e) { return undefined;}

 }

//------------------------------------------------------------------------------
// Locatif
//------------------------------------------------------------------------------
// MAJ : 20/03/2007
//-------------------------------------------------------------------------
// début données à actualiser
//-------------------------------------------------------------------------
	var TxCRL               	   =  0.0;
	var LoyerMinCRL         	   =  0.0;
	var TxGR                	   =  0.006;
	var AbattementMicroEntreprise =  0.71;         
	var MinAbatMicroEntreprise    =  305.0;
	var DefMaxImputable           =  10700.0;     
	var TxInflation         	   =  0.020;
	var TxCSGDeductible		      =  0.058;
	var TxCSGNonDeductible		   =  0.024;
	var TxCRDS			            =  0.005;
	var TxPS			               =  0.020;
	var TaxeAddPS			         =  0.003;
	var TaxePlusValue		         =  0.16;
	var TxTaxe			=  TxCSGDeductible+TxCSGNonDeductible+TxCRDS+TxPS+TaxeAddPS;
	var dPrixPlafondGirardin=1959.00; 	// €/m2 de SHAB
//-------------------------------------------------------------------------
// plafonds de loyer
//-------------------------------------------------------------------------
	var dLoyerGirardin=11.67;
    var dPlafondMicroFoncier=15000.0; 
    var dPlafondMicroEntreprise=76300.0; 
	 
    var dLoyerMax=new Array();
    
    dLoyerMax[0]=new Array();  // Zone A
    dLoyerMax[0][0]=20.45;     // Neuf et Ancien Robien 
    dLoyerMax[0][1]=16.37;     // Borloo Neuf 
    dLoyerMax[0][2]=5.90;      // Borloo Ancien Social 
    dLoyerMax[0][3]=8.84;      // Borloo Ancien Social Dérogatoire 
    dLoyerMax[0][4]=16.35;     // Borloo Ancien Intermédiaire
	        
    dLoyerMax[1]=new Array();  // Zone B1
    dLoyerMax[1][0]=14.21;     // Neuf et Ancien Robien 
    dLoyerMax[1][1]=11.37;     // Borloo Neuf 
    dLoyerMax[1][2]=5.36;      // Borloo Ancien Social 
    dLoyerMax[1][3]=7.29;      // Borloo Ancien Social Dérogatoire 
    dLoyerMax[1][4]=10.68;     // Borloo Ancien Intermédiaire
       
    dLoyerMax[2]=new Array();  // Zone B2
    dLoyerMax[2][0]=11.62;     // Neuf et Ancien Robien 
    dLoyerMax[2][1]=9.30;      // Borloo Neuf 
    dLoyerMax[2][2]=5.36;      // Borloo Ancien Social 
    dLoyerMax[2][3]=7.29;      // Borloo Ancien Social Dérogatoire 
    dLoyerMax[2][4]=10.68;     // Borloo Ancien Intermédiaire

	dLoyerMax[3]=new Array();  // Zone C
    dLoyerMax[3][0]=8.52;      // Neuf et Ancien Robien 
    dLoyerMax[3][1]=6.82;      // Borloo Neuf 
    dLoyerMax[3][2]=4.82;      // Borloo Ancien Social
    dLoyerMax[3][3]=5.68;      // Borloo Ancien Social Dérogatoire 
    dLoyerMax[3][4]=7.73;      // Borloo Ancien Intermédiaire    
//------------------------------------------------------------------------------
/*
	var ANNEEIR                     =  2005;       // paramètres valides pour IR sur revenus 2005
	var QF=new Array(4412.0,8677.0,15274.0,24731.0,40241.0,49624.0);
	var R=new Array(0.0683,0.1914,0.2826,0.3738,0.4262,0.4809);
	var PlafondIR1			=3736.0;
	var PlafondIR2			=2159.0;
*/
	var ANNEEIR                     =  2006;       // paramètres valides pour IR sur revenus 2006
	var QF=new Array(5614.0,11198.0,24872.0,66679.0);
	var R=new Array(0.055,0.140,0.300,0.400);
	var PlafondIR1			=3803.0;
	var PlafondIR2			=2198.0;  

   //-------------------------------------------------------------------------
// fin données à actualiser
//-------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Loyer max applicable
//------------------------------------------------------------------------------
// Le loyer max dépend de la zone, de la nature de l'opération, du régime fiscal
// et de la surface
// MAJ : 01/11/2006
 function FLoyerMax( ZoneABC, Natop, RegimeFiscal, Surface)                             
 {
  try
  {
	 
   if (RegimeFiscal=="Robien" 
    || RegimeFiscal=="BorlooNeuf"
    || RegimeFiscal=="BorlooAncienSoc"
    || RegimeFiscal=="BorlooAncienInt")
   {
   
       var line;
       if (ZoneABC=="ZoneA") line=0;
       else if (ZoneABC=="ZoneB1") line=1;
	   else if (ZoneABC=="ZoneB2") line=2;
       else if (ZoneABC=="ZoneC") line=3;
       else return undefined;
   
       var column;
       if (RegimeFiscal=="Robien") column=0;
	   else if (RegimeFiscal=="BorlooNeuf") column=1;
	   else if (RegimeFiscal=="BorlooAncienSoc") column=3;
	   else if (RegimeFiscal=="BorlooAncienInt") column=4;
       else return undefined;

	   return dLoyerMax[line][column]*Surface;
   
   }
   else if (RegimeFiscal=="GirardinLibre") return undefined;
   else if (RegimeFiscal=="GirardinInter") return dLoyerGirardin*Surface;
   else if (RegimeFiscal=="FraisReels") return undefined;
   else if (RegimeFiscal=="MicroFoncier") return dPlafondMicroFoncier/12.0;
   else if (RegimeFiscal=="MicroEntreprise") return dPlafondMicroEntreprise/12.0;
   else return undefined;
   
  }
  catch (e) { return undefined;}

}































