/********* Fonctions Association commerciaux *********/
// R�cup�re la liste des commerciaux � associer ou dissocier
function GetCommerciaux (monurl, mydiv)
{
	mesparametres = 'idressource='+$('responsable').value;

	var myAjax = new Ajax.Updater(
			mydiv, 
			monurl,
			{
				method: 'get',
				parameters: mesparametres
			});

}
// Affiche les boutons d'association ou de dissociation
function Displaybutton()
{
	if($('responsable').value == 0)
	{
		 $('dissocier').hide();
		 $('associer').hide();
	}
	if($('responsable').value > 0)
	{
		 $('dissocier').show();
		 $('associer').show();
	}
}

// R�cup�re les identifiants des commerciaux � associer.
function GetComToAssoc(elt) 
{
	if( $(elt) )
	{
		var list_id = $F(elt);  // On r�cup�re la liste des ids de la liste box elt
		if(list_id == "") alert("Veuillez s�lectionner au moins un commercial.");
		else {
			$("idcommerciaux").value=list_id;
			if($("idcommerciaux").value != "")
				frmressource.submit();
		}
	}
	else { alert("Veuillez s�lectionner un responsable.");}
}

/********* Fin fonctions commerciaux *********/



	/*
		var msg_1 = 'Erreur:';
		var_1[0] = new Array('nom','check','message_erreur',/regexp_1/);
  	var_1[1] = new Array('nom','check','message_erreur','');

			Explications:

				Param�tre 				Exemple 													Description 
				------------------------------------------------------------------------------------------------------
				name 							rue 															L'attribut name de l'�l�ment qui doit �tre v�rifi� 
				check 	 					e 																V�rification qui doit �tre effectu�e 
				message_erreur   	Vous n'avez pas mentionn� de rue 	Message erreur pour l'�l�ment concern� 
				regexp   					[0-9A-Za-z]{3,16} ou 20						Expression r�guli�re  ou la taille
				msg   						Une erreur est survenue  					Titre personnalis� pour le message d'erreur
				 
	Lors d'une v�rification d'apr�s r l'expression r�guli�re doit figurer entre 
	des barres obliques sans apostrophes (/[0-9A-Za-z]{3,16}/), 
	dans tous les autres cas doivent �tre not�s ici des apostrophes sans contenu ('').

	Valeurs possibles pour check_n:

				Valeur 	Origine 		V�rification 
				-------------------------------------------------------------------------------------------------------
				e 			Non vide 		L'�l�ment ne doit pas �tre vide 
				n 			Nombre 			L'�l�ment doit �tre un nombre 
				m 			Mail 				Une adresse �lctronique doit �tre exacte sur la forme 
				r 			Regexp 			La valeur doit correspondre � un mod�le d�termin� 
				p 			Prix 				La valeur doit se pr�senter sous la forme "10,00" (avec virgule) 
				p. 			Prix_Point 	La valeur doit se pr�senter sous la forme "10.00" (avec point) 
				c 			Capitalize 	Les noms propres doivent �tre corrig�s 
 				t				Longueur		Contr�le si on d�passe pas la taille max
 				d				Date				Contr�le si le format date est correct

	L'appel :
		Il peut �tre appel� avec deux ou trois param�tres:

  		<form name="nom_formulaire" id="nom_formulaire" onSubmit="return validate(this,var_1)">
  		<form name="nom_formulaire" id="nom_formulaire" onSubmit="return validate(this,var_1,msg_1)">

	*/
//	function validate(sender,myarray,err_hd) 
//	{
//		 //alert('Bienvenue dans le module de contr�le');
//		var message_erreur = !err_hd?new Array('Les erreurs suivantes sont survenues:\n'):new Array(err_hd+'\n');
//		
//		var error = false;
//		 alert('nombre de contr�le : ' + myarray.length );
//		 alert(document.forms[sender].elements[myarray[0][0]]);
//		for (i=0;i<myarray.length;i++) 
//		{
//			field = document.forms['frmenregistrement'].elements[myarray[0][0]];
//			alert(field);
//		  field = document.forms[sender].elements[myarray[i][0]];
//		  alert(field);
//alert(field.value);
//		/* Bloc 1 v�rifie les champs qui doivent �tre renseign�s */
//		  if (myarray[i][1].indexOf('e')>-1) 
//		  {
//		    if (!field.value) {
//		      error = true;
//		      message_erreur.push(myarray[i][2]);
//		    }
//		  }
//		  
//		/* Bloc 2 v�rifie si l'adresse �lectronique est correcte dans la forme */
//		  else if (myarray[i][1].indexOf('m')>-1) {
//		    if (field.value) {
//		      var usr = "([a-zA-Z0-9][a-zA-Z0-9_.-]*|\"([^\\\\\x80-\xff\015\012\"]|\\\\[^\x80-\xff])+\")";
//		      var domain = "([a-zA-Z0-9][a-zA-Z0-9._-]*\\.)*[a-zA-Z0-9][a-zA-Z0-9._-]*\\.[a-zA-Z]{2,5}";
//		      var regex = "^"+usr+"\@"+domain+"$";
//		      var myrxp = new RegExp(regex);
//		      var check = (myrxp.test(field.value));
//		        if (check!=true) {
//		          error=true;
//		          message_erreur.push(field.value+" "+myarray[i][2]);
//		        }
//		      }
//		    }
//	
//		/* Bloc 3 v�rifie les champs dont la valeur doit �tre num�rique */
//		  else if (myarray[i][1].indexOf('n')>-1) {
//		    var num_error = false;
//		    if(field.value) {
//		      var myvalue = field.value;
//		      var num = myvalue.match(/[^0-9,\.]/gi)
//		      var dot = myvalue.match(/\./g);
//		      var com = myvalue.match(/,/g);
//		      if (num!=null) {
//		        num_error = true;
//		      }
//		      else if ((dot!=null)&&(dot.length>1)) {
//		        num_error = true;
//		      }
//		      else if ((com!=null)&&(com.length>1)) {
//		        num_error = true;
//		      }
//		      else if ((com!=null)&&(dot!=null)) {
//		        num_error = true;
//		      }
//		    }
//		    if (num_error==true) {
//		        error = true;
//		        message_erreur.push(myvalue+" "+myarray[i][2]);
//		    }
//		  }
//		
//		/* Bloc 4 v�rifie la valeur � l'aide d'une expression r�guli�re sur un mod�le d�termin� */
//		  else if (myarray[i][1].indexOf('r')>-1) {
//		    var regexp = myarray[i][3];
//		    if (field.value) {
//		      if (!regexp.test(field.value)) {
//		        error = true;
//		        message_erreur.push(field.value+" "+myarray[i][2]);
//		      }
//		    }
//		  }
//		
//		/* Bloc 5 v�rifie les champs qui doivent �tre format�s comme des prix et modifie �ventuellement le formatage */
//		  else if (myarray[i][1].indexOf('p')>-1) {
//		    var myvalue = field.value;
//		    var reg = /,-{1,}|\.-{1,}/;
//		    var nantest_value = myvalue.replace(reg,"");
//		    var num = nantest_value.match(/[^0-9,\.]/gi)
//		    sep = myarray[i][1].substr(1,1)?myarray[i][1].substr(1,1):',';
//		    if (field.value) {
//		      var myvalue = field.value.replace(/\./,',');
//		      if (myvalue.indexOf(',')==-1) {
//		        field.value = myvalue+sep+'00';
//		      }
//		      else if (myvalue.indexOf(",--")>-1) {
//		        field.value = myvalue.replace(/,--/,sep+'00');
//		      }
//		      else if (myvalue.indexOf(",-")>-1) {
//		        field.value = myvalue.replace(/,-/,sep+'00');
//		      }
//		      else if (!myvalue.substring(myvalue.indexOf(',') + 2)) {
//		        error=true;
//		        message_erreur.push(field.value+" "+myarray[i][2]);
//		      }
//		      else if (myvalue.substring(myvalue.indexOf(',') + 3)!='') {
//		        error=true;
//		        message_erreur.push(field.value+" "+myarray[i][2]);
//		      }
//		      else if (num!=null) {
//		        error=true;
//		        message_erreur.push(field.value+" "+myarray[i][2]);
//		      }
//		    }
//		  }
//		
//		/* Bloc 6 v�rifie les champs de nom et rectifie �ventuellement la casse */
//		  else if (myarray[i][1].indexOf('c')>-1) {
//		    var noble = new Array(" d\'", "de","von","van","der","d","la","da","of");
//		    var newvalue='';
//		    var myvalue = field.value.split(/\b/);
//		    for (k=0;k<myvalue.length;k++) {
//		      newvalue+= myvalue[k].substr(0,1).toUpperCase()+myvalue[k].substring(1);
//		    }
//		    for(k=0;k<noble.length;k++){
//		      var reg = new RegExp ("\\b"+noble[k]+"\\b","gi");
//		      newvalue = newvalue.replace(reg,noble[k]);
//		    }
//		    field.value = newvalue;
//		  }
//		  
//		/* Bloc 7 v�rifie le nombre de caract�re max */
//		  else if (myarray[i][1].indexOf('t')>-1) 
//		  {
//		    var maxTaille = myarray[i][3];
//		    if (field.value) {
//		    	var taille = field.value.length
//		      if ( taille > maxTaille ) {
//		        error = true;
//		        message_erreur.push(field.value+" "+myarray[i][2]);
//		      }
//		    }
//		  }
//		  
//		/* Bloc 8 v�rifie la date */
//			else if  (myarray[i][1].indexOf('d')>-1)
//			{
//				if (field.value)
//				{
//					if( fctCtrlDate(field.value) == false)
//					{
//						error = true ;
//						message_erreur.push(field.value+" "+myarray[i][2]);
//					}
//				}
//			}
//		}
//		
//		
//		/* En cas d'erreur, les messages d'erreur r�colt�s sont exploit�s ici puis affich�s.
//		   Si le formulaire est correctement rempli, il est transmis */
//		  if (error) {
//		    message_erreur = message_erreur.join('\n\xB7 ');
//		    alert(message_erreur);
//		    return false;
//		  }
//		  else {
//		    return true;
//		  }
//		}

function validate(sender,myarray,err_hd) 
	{
		 //alert('Bienvenue dans le module de contr�le');
		var message_erreur = !err_hd?new Array('Les erreurs suivantes sont survenues:\n'):new Array(err_hd+'\n');
		
		var error = false;
		 //alert('nombre de contr�le : ' + myarray.length );
		var elt_form = document.getElementById(sender);
		
		if(elt_form) {
		for (i=0;i<myarray.length;i++) 
		{
		  var field = document.getElementById(myarray[i][0]);

		/* Bloc 1 v�rifie les champs qui doivent �tre renseign�s */
		  if (myarray[i][1].indexOf('e')>-1) 
		  {
		    if (!field.value) {
		      error = true;
		      message_erreur.push(myarray[i][2]);
		    }
		  }
		  
		/* Bloc 2 v�rifie si l'adresse �lectronique est correcte dans la forme */
		  else if (myarray[i][1].indexOf('m')>-1) {
		    if (field.value) {
		      var usr = "([a-zA-Z0-9][a-zA-Z0-9_.-]*|\"([^\\\\\x80-\xff\015\012\"]|\\\\[^\x80-\xff])+\")";
		      var domain = "([a-zA-Z0-9][a-zA-Z0-9._-]*\\.)*[a-zA-Z0-9][a-zA-Z0-9._-]*\\.[a-zA-Z]{2,5}";
		      var regex = "^"+usr+"\@"+domain+"$";
		      var myrxp = new RegExp(regex);
		      var check = (myrxp.test(field.value));
		        if (check!=true) {
		          error=true;
		          message_erreur.push(field.value+" "+myarray[i][2]);
		        }
		      }
		    }
	
		/* Bloc 3 v�rifie les champs dont la valeur doit �tre num�rique */
		  else if (myarray[i][1].indexOf('n')>-1) {
		    var num_error = false;
		    if(field.value) {
		      var myvalue = field.value;
		      var num = myvalue.match(/[^0-9,\.]/gi)
		      var dot = myvalue.match(/\./g);
		      var com = myvalue.match(/,/g);
		      if (num!=null) {
		        num_error = true;
		      }
		      else if ((dot!=null)&&(dot.length>1)) {
		        num_error = true;
		      }
		      else if ((com!=null)&&(com.length>1)) {
		        num_error = true;
		      }
		      else if ((com!=null)&&(dot!=null)) {
		        num_error = true;
		      }
		    }
		    if (num_error==true) {
		        error = true;
		        message_erreur.push(myvalue+" "+myarray[i][2]);
		    }
		  }
		
		/* Bloc 4 v�rifie la valeur � l'aide d'une expression r�guli�re sur un mod�le d�termin� */
		  else if (myarray[i][1].indexOf('r')>-1) {
		    var regexp = myarray[i][3];
		    if (field.value) {
		      if (!regexp.test(field.value)) {
		        error = true;
		        message_erreur.push(field.value+" "+myarray[i][2]);
		      }
		    }
		  }
		
		/* Bloc 5 v�rifie les champs qui doivent �tre format�s comme des prix et modifie �ventuellement le formatage */
		  else if (myarray[i][1].indexOf('p')>-1) {
		    var myvalue = field.value;
		    var reg = /,-{1,}|\.-{1,}/;
		    var nantest_value = myvalue.replace(reg,"");
		    var num = nantest_value.match(/[^0-9,\.]/gi)
		    sep = myarray[i][1].substr(1,1)?myarray[i][1].substr(1,1):',';
		    if (field.value) {
		      var myvalue = field.value.replace(/\./,',');
		      if (myvalue.indexOf(',')==-1) {
		        field.value = myvalue+sep+'00';
		      }
		      else if (myvalue.indexOf(",--")>-1) {
		        field.value = myvalue.replace(/,--/,sep+'00');
		      }
		      else if (myvalue.indexOf(",-")>-1) {
		        field.value = myvalue.replace(/,-/,sep+'00');
		      }
		      else if (!myvalue.substring(myvalue.indexOf(',') + 2)) {
		        error=true;
		        message_erreur.push(field.value+" "+myarray[i][2]);
		      }
		      else if (myvalue.substring(myvalue.indexOf(',') + 3)!='') {
		        error=true;
		        message_erreur.push(field.value+" "+myarray[i][2]);
		      }
		      else if (num!=null) {
		        error=true;
		        message_erreur.push(field.value+" "+myarray[i][2]);
		      }
		    }
		  }
		
		/* Bloc 6 v�rifie les champs de nom et rectifie �ventuellement la casse */
		  else if (myarray[i][1].indexOf('c')>-1) {
		    var noble = new Array(" d\'", "de","von","van","der","d","la","da","of");
		    var newvalue='';
		    var myvalue = field.value.split(/\b/);
		    for (k=0;k<myvalue.length;k++) {
		      newvalue+= myvalue[k].substr(0,1).toUpperCase()+myvalue[k].substring(1);
		    }
		    for(k=0;k<noble.length;k++){
		      var reg = new RegExp ("\\b"+noble[k]+"\\b","gi");
		      newvalue = newvalue.replace(reg,noble[k]);
		    }
		    field.value = newvalue;
		  }
		  
		/* Bloc 7 v�rifie le nombre de caract�re max */
		  else if (myarray[i][1].indexOf('t')>-1) 
		  {
		    var maxTaille = myarray[i][3];
		    if (field.value) {
		    	var taille = field.value.length
		      if ( taille > maxTaille ) {
		        error = true;
		        message_erreur.push(field.value+" "+myarray[i][2]);
		      }
		    }
		  }
		  
		/* Bloc 8 v�rifie la date */
			else if  (myarray[i][1].indexOf('d')>-1)
			{
				if (field.value)
				{
					if( fctCtrlDate(field.value) == false)
					{
						error = true ;
						message_erreur.push(field.value+" "+myarray[i][2]);
					}
				}
			}
		}
	} else {
		alert("Impossible de trouver un formulaire valide. Signaler cette erreur � Florian ou Yann.");
	}
		
		/* En cas d'erreur, les messages d'erreur r�colt�s sont exploit�s ici puis affich�s.
		   Si le formulaire est correctement rempli, il est transmis */
		  if (error) {
		    message_erreur = message_erreur.join('\n\xB7 ');
		    alert(message_erreur);
		    return false;
		  }
		  else {
		    return true;
		  }
		}
		
/*
 !--------------------------------------------------------------!
 ! Fonction permettant de controler le format de la date 	!
 !------------------------------------------------------------!
*/
 function fctCtrlDate(dteTemp)
{
// Contr�le de la longeur de la chaine (10)
	if (dteTemp.length !=10 )
	{
//		alert ("Pas la bonne longeur");
		return false ;
	}
// Controle des caract�res interm�diaire
	if ( dteTemp.substr(2,1) != "/"  || dteTemp.substr(5,1) != "/" )
	{
//		alert ("Pas le bon caract�re");
		return false ;
	}
// Controle du Mois de 1 a 12
	if ( dteTemp.substr(3,2) < "01"  || dteTemp.substr(3,2) > "12" )
	{
//		alert ("Pas le bon mois");
		return false ;
	}
// Controle du jour : 31
	if ( dteTemp.substr(3,2) == "01" || dteTemp.substr(3,2) == "03" || dteTemp.substr(3,2) == "05" || dteTemp.substr(3,2) == "07" || dteTemp.substr(3,2) == "08" || dteTemp.substr(3,2) == "10" || dteTemp.substr(3,2) == "12" )
	{
		if ( dteTemp.substr(0,2) < "01" || dteTemp.substr(0,2) > "31" )
		{
	//		alert ("Pas le bon Jours");
			return false ;
		}
  	}
// Controle du jour : 30
	if ( dteTemp.substr(3,2) == "04" || dteTemp.substr(3,2) == "06" || dteTemp.substr(3,2) == "09"|| dteTemp.substr(3,2) == "11" )
	{
		if ( dteTemp.substr(0,2) < "01" || dteTemp.substr(0,2) > "30" )
		{
		//	alert ("Pas le bon Jours");
			return false ;
		}
	}
// Controle du jour : mois de F�vrier
	if ( dteTemp.substr(3,2) == "02" )
	{
		if ( dteTemp.substr(0,2) < "01" || dteTemp.substr(0,2) > "29" )
		{
	//		alert ("Pas le bon Jours (b)");
			return false ;
		}
		if (dteTemp.substr(6, dteTemp.length-6) % 4 !=0 && dteTemp.substr(0,2) > "28" )
		{
//			alert ("Pas le bon Jours");
			return false ;
		}
	}
	return true ;
}	

function MaH()
{

    ToDay = new Date ;
    strDATEHEURE = "";
    
    Inter  = ToDay.getDate() ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + "/" ;
    Inter  = ToDay.getMonth() + 1;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + "/" ;
    Inter  = ToDay.getFullYear() ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + " - " ;
    Inter  = ToDay.getHours() ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + ":" ;
    Inter  = ToDay.getMinutes () ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + ":" ;
    Inter  = ToDay.getSeconds() ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + "" ;
    
    setTimeout("MaH()",60);
    return strDATEHEURE;
}

function AffDate()
{

    ToDay = new Date ;
    strDATEHEURE = "";
    
    Inter  = ToDay.getDate() ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + "/" ;
    Inter  = ToDay.getMonth() + 1;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + "/" ;
    Inter  = ToDay.getFullYear() ;
    if (Inter <10) strDATEHEURE += "0";
    strDATEHEURE += Inter + "" ;

    return strDATEHEURE;
}


function go2conf_id3x ()
{
	window.location.replace("http://conf.id3x.com/gestprod_auto_login.htm?login=poliris&password=y4plupr0m0");
}

/****************************************************************
 * Ouvre une fen�tre en popup																		*
 * Auteur : Christopher PREMAILLON															*
 * Date   : 30/11/2001																					*
 * Params : titre (IN) -> Titre de la fen�tre										*
 *			monUrl (IN) -> L'url � afficher dans la fen�tre					*
 * Algo	  : Ouverture de la fen�tre, sans fioritures.						*
 ****************************************************************/
function popup( nomFen, monUrl, largeur, hauteur, ismodal )
{ 
	var myWin;
	if( this.openADialog )
	{
		openADialog( monUrl, largeur, hauteur, null, null );
	}
	else
	{
		if( window.showModalDialog && ismodal==1 )
		{
			myWin = window.showModalDialog( monUrl, window, 'dialogWidth:' + largeur + 'px ; dialogHeight:' + hauteur + 'px ; status:no ; scroll:yes ; help:no ; resizable:yes ; center:yes');
		} else {
			nomFen = nomFen.replace(" ", "_");
			myWin = window.open( monUrl, nomFen, 'width=' + largeur + ', height=' + hauteur + ', toolbar=no, location=no, directories=no, status=yes, scrollbars=yes, resizable=yes, copyhistory=no, dependent=yes, left=' + (window.screen.width-largeur)/2 + ',top=' + (window.screen.height-hauteur-100)/2);
		}
	}
}

function getopener()
{
	if (window.dialogArguments)
	{
   		return dialogArguments;
   	} else {
   		return top.opener;
   	}
}

/****************************************************************
 * Affiche les infos cr�ation / modifs dans un popup.			*
 * Auteur : Ludovic LANGE										*
 * Date   : 15/03/2002											*
 * Params : text (IN) -> le contenu du popup					*
 *			title (IN) -> son titre								*
 * Algo	  : Appelle une fonction de overlib.js					*
 ****************************************************************/
function popup_infos(text, title) {
	return overlib(text, CAPTION, title, HAUTO, VAUTO);
	//return dlc(text, title);
}

function createLogin2( typeAction, NomMacro, id_to_dissoc, nomDossier)
{
	// Valeur de retour.
	var is_error = false;
	// Cr�ation de la phrase de validation.
	var texte = "Etes vous s�r de vouloir dissocier ";
	var elt_idlogin = $('idloginx');

	// R�cup�ration du formulaire (qui se trouve sur la page incl_dossier_information.htm).
	var elt_form = $('form_cnxweb2');
	// R�cup�ration du champ texte box o� l'on renseigne le login � associer.
	var elt_idcnxweb = $('idcnxweb');
	// R�cup�ration du champ hidden que l'on envoie au formulaire, il doit contenir l'�l�ment l'idlogin � associer.
	var elt_idlogin_cnxweb = $('idcnxweb_hid');
	// R�cup�ration du champ text box o� l'on renseigne un nom de client pour lequel on doit cr�er un nouveau login.
	var elt_nom_login_cnxweb = $('logincnxweb');
	// R�cup�ration du champ hiddne qui sert � envoy� le logincnxweb au serveur via le formulaire.
	var logincnxweb_hid = $('logincnxweb_hid');
	
//	// R�cup�ration du login sp�cifier par l'utilisateur.
//	var elt_logincnxweb_utilisateur = $('logincnxweb');
	
	// Si je r�cup�re bien le formulaire.
	if(elt_form)
	{
		if(typeAction == 'd')	// Dissociation
		{
			//alert("On passe dans dissociation");
			// Si l'idlogin � dissocier existe bien
			if (id_to_dissoc != '')
			{
				// Nous compl�tons la phrase de validation
				texte += "le login " + id_to_dissoc + " ?";
				// et nous demandons une confirmation
				if(confirm(texte))
				{
					// Nous valorisons la valeur renvoy� au serveur
					elt_idlogin.value = id_to_dissoc + '_d';
				} else { return false; }
			}
		}
		else if(typeAction == 'a') //Association
		{
			//alert("On passe dans association");
			// si l'�l�ment elt_idcnxweb existe, qu'il est bien r�cup�rer et que sa valeur est diff�rent de vide
			if( (elt_idcnxweb) && (elt_idcnxweb.value != '') )
			{
					// Nous valorisons la valeur renvoy� au serveur
					elt_idlogin.value = elt_idcnxweb.value + '_a';
			} 
			else 
			{ 
				alert("Veuillez entrer un idlogin pour l'associer au dossier."); 
				return false; 
			}
		}
		else if(typeAction == 'c')
		{
			//alert("On passe dans cr�ation");
			// si l'�l�ment elt_nom_login_cnxweb existe, qu'il est bien r�cup�rer et que sa valeur est diff�rent de vide
			if( elt_nom_login_cnxweb )
			{
				if( elt_nom_login_cnxweb.value != '' ) 
				{
					// Alors je donne la valeur de elt_nom_login_cnxweb � logincnxweb_hid
					logincnxweb_hid.value = elt_nom_login_cnxweb.value;
				}
//				else if( nomDossier != '' )
//				{
//					logincnxweb_hid.value = nomDossier;
//				} 
				else
				{
					alert("Vous devez sp�cifier un nom de login pour cr�er le login.\r\n Il s'agit g�n�ralement du code agence.");
					return false;
				}
			}
			else 
			{ 
				alert("Veuillez entrer un login afin de cr�er un login pour ce dossier."); 
				return false;
			}
		}
		//alert(elt_idlogin.value);
		elt_form.submit();
		
	} 
	else 
	{ 
		alert("impossible de trouver le formulaire nomm�e form_cnxweb - Appeller le service Informatique de gestion pour r�soudre le probl�me."); 
		return false;
	}
}

	/**************************************************************************
 * Creation d'1 login CNXWEB																								*
 * Auteur : Khan Ghulam																											*
 * Date   : 01/05/2004																											*
 * Params : NameForm ->  Nom du formulaire																	*
 *			NomMcro ->  Nom de la MACRO																					*
 *			Id ->  Id login																											*
 ***************************************************************************/
function createLogin( typeAction, NomMacro, id_to_dissoc, nomDossier)
{
	var texte = "Etes vous s�r de vouloir dissocier ";
	var elt_macro_name;
	var elt_form = document.getElementById('form_cnxweb2');
	var elt_idlogin = document.getElementById('idlogin');

	var idcnxweb = document.getElementById('idcnxweb');
	var logincnxweb = document.getElementById('logincnxweb');
	var idcnxweb_hid = document.getElementById('idcnxweb_hid');
	var logincnxweb_hid = document.getElementById('logincnxweb_hid');
	var is_error = false;
alert(idcnxweb.value);
alert(typeAction);
	if(idcnxweb)
		idcnxweb_hid.value = idcnxweb.value;
	else alert("Impossible de trouver le champ l'idcnxweb. Contactez le service informatique.");
		
	if(logincnxweb)
		logincnxweb_hid.value = logincnxweb.value;
	
	if(elt_form)
	{
		// Dissociation
		if (id_to_dissoc != '')
		{
			texte += "le login " + id_to_dissoc + " ?";

			if(confirm(texte))
			{
				elt_macro_name =  elt_form.u;
				elt_macro_name.value = NomMacro;
				elt_idlogin.value = id_to_dissoc + "_d";

				elt_form.submit();
			} else { is_error = true; };
		}
		else if(typeAction == 'a') //Association
		{
			var elt_idcnxweb = idcnxweb_hid;
			
			if(elt_idcnxweb)
			{
				// association
				if(elt_idcnxweb.value != '') {
					idcnxweb_hid.value = elt_idcnxweb.value + "_a";
					alert("plop ::: " + idcnxweb_hid.value);
					//elt_form.submit();
				}
				else { alert("Veuillez entrer un login pour l'associer au dossier."); is_error = true; }
			}
		} else if(typeAction == 'c') // cr�ation
		{
			var elt_logincnxweb = logincnxweb_hid;
			
			if(elt_logincnxweb)
			{
				if(elt_logincnxweb.value != '') 
				{
					var elt_cnx_dosnom = document.getElementById('cnx_dosnom');
					elt_cnx_dosnom.value = nomDossier;
				} else {is_error = true;}
			} else {is_error = true;}
		}
		
		if(is_error == false)
		{
			alert("On passe dans le submit");
				elt_macro_name =  elt_form.u;
				elt_macro_name.value = NomMacro;
			
				elt_form.submit();
		} else {return false;}
			
		
	} else { alert("impossible de trouver le formulaire nomm�e form_cnxweb - Appeller le service Informatique de gestion pour r�soudre le probl�me."); return false;}
}


	/****************************************************************************/
	/* Cette fonction permet de cr�er une config ID3X pour dossier Gestprod			*/
	/* Param�tres : type_config d�signe le type de config (site/wap/imode)			*/
	/* Envoie les donn�es du formulaire � la macro GDP:CONFIG_ID3X							*/
	/* Auteur : Florian Adam																										*/
	/* Cr�e le : 17/10/2006																											*/
	/****************************************************************************/
 	function createConfig(type_config)
	{
		var elt_config = document.getElementById("idconfig");
//		var elt_si_config_wap = document.getElementById("si_config_wap");
//		var elt_si_config_imode = document.getElementById("si_config_imode");
//		var elt_idconfig_fille_wap = document.getElementById("idconfig_fille_wap");
//		var elt_idconfig_fille_imode = document.getElementById("idconfig_fille_imode");
		var elt_action = document.getElementById('action');
		
		// On met � jour la valeur de la balise u
		//var elt_formulaire = document.getElementById("u");
		var elt_formulaire = document.form_config['u']; /* Je passe par cette m�thode car il y a deux input de type hidden nomm� u*/
		
//		if(elt_formulaire) {
//			elt_formulaire.value = 'GDP:CONFIG_ID3X';
//		} else {
//			return alertErrorDOM('\'formulaire\'');
//		}
		
//		if( elt_config ) 
//		{
//			// On n'a pas de config site cr�e, ...
//			if( elt_config.value == 0 )			
//			{
//				// ... on propose de cr�e les configs filles en m�me temps.
//				if(elt_si_config_wap)
//				{
//					if(elt_idconfig_fille_wap)
//					{
//						if(elt_idconfig_fille_wap.value == 0)
//						{
//							elt_si_config_wap.value = config_id3x_fille( 'wap' );
//						}
//					} else {
//						return alertErrorDOM('\'idconfig_fille_wap\'');
//					}
//				} else {
//					return alertErrorDOM('\'si_config_wap\'');
//				}
//		
//				if(elt_si_config_imode)
//				{
//					if(elt_idconfig_fille_imode)
//					{
//						if(elt_idconfig_fille_imode.value == 0)
//						{
//							elt_si_config_imode.value = config_id3x_fille( 'imode' );
//						}
//					} else {
//						return alertErrorDOM('\'idconfig_fille_imode\'');
//					}
//				} else {
//					return alertErrorDOM('\'si_config_imode\'');
//				}
//			}
//	
//			// On a une config site, ...
//			if( elt_config.value != 0 )			
//			{
//				// ... on cr�e une config fille wap ou imode.
//				if(type_config == 'wap')
//				{
//					if(elt_si_config_wap)
//					{
//						elt_si_config_wap.value = 1;
//					} else {
//						return alertErrorDOM('\'si_config_wap\'');
//					}
//				}
//				if(type_config == 'imode')
//				{
//					if(elt_si_config_imode)
//					{
//						elt_si_config_imode.value = 1;
//					} else {
//						return alertErrorDOM('\'si_config_imode\'');
//					}
//				}
//			}
//		} else {
//			return alertErrorDOM('\'idconfig\'');
//		}
		
		if( elt_config )
		{
			// On indique que l'on est en mode cr�ation.
			if(elt_action) {
				elt_action.value='c';
			} else {
				return alertErrorDOM('\'action\'');
			}
		}
		
		// On envoie le formulaire.
		document.form_config.submit();
	}
	
		/****************************************************************************/
	/* Cette fonction permet de dissocier une config ID3X d'un dossier Gestprod	*/
	/* Param�tres : type_config d�signe le type de config (site/wap/imode)			*/
	/* Envoie les donn�es du formulaire � la macro GDP:CONFIG_ID3X							*/
	/* Auteur : Florian Adam																										*/
	/* Cr�e le : 21/04/2007																											*/
	/****************************************************************************/
	function dissocierConfig( type_config )
	{
		var texte_suppression = "Voulez-vous supprimer la config ";
		var idconfig_selectionne;
		var elt_config = document.getElementById("idconfig");
		var elt_idconfig_fille_wap = document.getElementById('idconfig_fille_wap');
		var elt_idconfig_fille_imode = document.getElementById('idconfig_fille_imode');
		var elt_si_config_wap = document.getElementById('si_config_wap');
		var elt_si_config_imode = document.getElementById('si_config_imode');
		var elt_action = document.getElementById('action');
		var configToDelete = 0;
		var continuer = true;

		// On met � jour la valeur de la balise u
		var elt_formulaire = document.form_config['u']; /* Je passe par cette m�thode car il y a deux input de type hidden nomm� u*/
		
		if(!elt_idconfig_fille_wap) {
			return alertErrorDOM('\'idconfig_fille_wap\'');
		}
		if(!elt_idconfig_fille_imode) {
			return alertErrorDOM('\'idconfig_fille_imode\'');
		}
		
		if(!elt_config) {
			return alertErrorDOM('\'idconfig\'');
		}
		
		if(!elt_si_config_wap) {
			return alertErrorDOM('\'si_config_wap\'');
		}
		
		if(!elt_si_config_imode) {
			return alertErrorDOM('\'si_config_imode\'');
		}
		
		// Dissocie une config wap
		if(type_config == 'wap')
		{
			texte_suppression += elt_idconfig_fille_wap.value + " ?";
			elt_si_config_wap.value = 1;
			configToDelete = elt_idconfig_fille_wap.value;
		}
		
		// Dissocie une config imode
		if(type_config == 'imode')
		{
			texte_suppression += elt_idconfig_fille_imode.value + " ?";
			elt_si_config_imode.value = 1;
			configToDelete = elt_idconfig_fille_imode.value;
		}
		
		// Dissocie une config site
		if(type_config == 'site')
		{
			//texte_suppression = "Vous avez demand� la dissociation de la config "+ elt_config.value +".\nSi vous d�sirez supprimer cette config, cliquer sur Ok, sinon sur Annuler.\n\nNotez que la suppression de la config site entra�ne la suppression des config ID3X fille Wap et I-mode.\n\n" + texte_suppression + elt_config.value + " ?";
			texte_suppression = "Voulez-vous dissocier la config " + elt_config.value +" ?";
			configToDelete = elt_config.value;
		}
		
		if(confirm(texte_suppression))
		{
			texte_suppression = "La config " + elt_config.value +" va �tre dissoci�. Voulez-vous �galement supprimer cette config ?";
			if(confirm(texte_suppression))
			{
				/* 16/02/2007 : confirmation "s�v�re" par LLA suite aux probl�mes de configs qui disparaissent.
				Ne pas supprimer, m'en parler avant. Merci
				*/
				var phrase = "Je confirme la suppression " + configToDelete;
				var elt_suppression = document.getElementById("supp_config");
				var resultat = prompt("Merci d'�crire EXACTEMENT la phrase suivante pour valider la suppression : \n'" + phrase + "' !" );
				
				if( resultat == phrase ) {
					
					if(elt_suppression) {
						elt_suppression.value=true;
					} else {
						alert("L'action de suppression n'a pas �t� reconue.\n Appeller Florian ou Yann pour r�soudre ce probl�me.\n Merci.");
						return 0;
					}
				} else {
					alert("D�sol�, il fallait �crire EXACTEMENT \n'" + phrase + "'\n, et vous avez �crit :\n'" + resultat + "' !!!\n (Majuscules, espaces, ...)");
					continuer = false;
				}
			} else { continuer = true; }
		} 
		else {
			continuer = false;
		}
		
		// On indique que l'on est en mode dissociation.
		if(elt_action) {
			elt_action.value='d';
		} else {
			return alertErrorDOM('\'action\'');
		}

		// On envoie le formulaire.
		if( continuer ) {
			document.form_config.submit();
		}
	}

	/****************************************************************************/
	/* Cette fonction permet de dissocier une config ID3X d'un dossier Gestprod	*/
	/* Param�tres : type_config d�signe le type de config (site/wap/imode)			*/
	/* Envoie les donn�es du formulaire � la macro GDP:CONFIG_ID3X							*/
	/* Auteur : Florian Adam																										*/
	/* Cr�e le : 21/04/2007																											*/
	/****************************************************************************/
	function dissocierConfig_old( type_config )
	{
		var texte_suppression = "Voulez-vous supprimer la config ";
		var idconfig_selectionne;
		var elt_config = document.getElementById("idconfig");
		var elt_idconfig_fille_wap = document.getElementById('idconfig_fille_wap');
		var elt_idconfig_fille_imode = document.getElementById('idconfig_fille_imode');
		var elt_si_config_wap = document.getElementById('si_config_wap');
		var elt_si_config_imode = document.getElementById('si_config_imode');
		var elt_action = document.getElementById('action');
		var configToDelete = 0;
		var continuer = true;

		// On met � jour la valeur de la balise u
		var elt_formulaire = document.form_config['u']; /* Je passe par cette m�thode car il y a deux input de type hidden nomm� u*/
		
		if(!elt_idconfig_fille_wap) {
			return alertErrorDOM('\'idconfig_fille_wap\'');
		}
		if(!elt_idconfig_fille_imode) {
			return alertErrorDOM('\'idconfig_fille_imode\'');
		}
		
		if(!elt_config) {
			return alertErrorDOM('\'idconfig\'');
		}
		
		if(!elt_si_config_wap) {
			return alertErrorDOM('\'si_config_wap\'');
		}
		
		if(!elt_si_config_imode) {
			return alertErrorDOM('\'si_config_imode\'');
		}
		
		// Dissocie une config wap
		if(type_config == 'wap')
		{
			texte_suppression += elt_idconfig_fille_wap.value + " ?";
			elt_si_config_wap.value = 1;
			configToDelete = elt_idconfig_fille_wap.value;
		}
		
		// Dissocie une config imode
		if(type_config == 'imode')
		{
			texte_suppression += elt_idconfig_fille_imode.value + " ?";
			elt_si_config_imode.value = 1;
			configToDelete = elt_idconfig_fille_imode.value;
		}
		
		// Dissocie une config site
		if(type_config == 'site')
		{
			texte_suppression = "Vous avez demand� la dissociation de la config "+ elt_config.value +".\nSi vous d�sirez supprimer cette config, cliquer sur Ok, sinon sur Annuler.\n\nNotez que la suppression de la config site entra�ne la suppression des config ID3X fille Wap et I-mode.\n\n" + texte_suppression + elt_config.value + " ?";
			configToDelete = elt_config.value;
		}
		
		if(confirm(texte_suppression))
		{
			/* 16/02/2007 : confirmation "s�v�re" par LLA suite aux probl�mes de configs qui disparaissent.
			Ne pas supprimer, m'en parler avant. Merci
			*/
			var phrase = "Je confirme la suppression " + configToDelete;
			var elt_suppression = document.getElementById("supp_config");
			var resultat = prompt("Merci d'�crire EXACTEMENT la phrase suivante pour valider la suppression : \n'" + phrase + "' !" );
			
			if( resultat == phrase ) {
				
				if(elt_suppression) {
					elt_suppression.value=true;
				} else {
					alert("L'action de suppression n'a pas �t� reconue.\n Appeller Florian ou Yann pour r�soudre ce probl�me.\n Merci.");
					return 0;
				}
			} else {
				alert("D�sol�, il fallait �crire EXACTEMENT \n'" + phrase + "'\n, et vous avez �crit :\n'" + resultat + "' !!!\n (Majuscules, espaces, ...)");
				continuer = false;
			}
		}
		
		// On indique que l'on est en mode dissociation.
		if(elt_action) {
			elt_action.value='d';
		} else {
			return alertErrorDOM('\'action\'');
		}

		// On envoie le formulaire.
		if( continuer ) {
			document.form_config.submit();
		}
	}
	
	/**************************************************************************/
	/* Cette fonction permet d'associer une config ID3X	� un dossier Gestprod	*/
	/* Param�tres : type_config d�signe le type de config (site/wap/imode)		*/
	/* Envoie les donn�es du formulaire � la macro GDP:CONFIG_ID3X						*/
	/* Auteur : Florian Adam																									*/
	/* Cr�e le : 21/04/2007																										*/
	/**************************************************************************/
	function associerConfig( type_config )
	{
		var elt_config = document.getElementById("idconfig");
		var elt_txt_idconfig_assoc = document.getElementById("txt_assoc_idconfig");
		var elt_idconfig_assoc = document.getElementById("assoc_idconfig");
		elt_idconfig_assoc.value = elt_txt_idconfig_assoc.value;
		var elt_idconfig_assoc_wap = document.getElementById("assoc_idconfig_wap");
		var elt_idconfig_assoc_imode = document.getElementById("assoc_idconfig_imode");
		var elt_idconfig_fille_wap = document.getElementById('idconfig_fille_wap');
		var elt_idconfig_fille_imode = document.getElementById('idconfig_fille_imode');
		var elt_si_config_wap = document.getElementById('si_config_wap');
		var elt_si_config_imode = document.getElementById('si_config_imode');
		var elt_action = document.getElementById('action');

		// On met � jour la valeur de la balise u
		//var elt_formulaire = document.getElementById("u");
		var elt_formulaire = document.form_config['u']; /* Je passe par cette m�thode car il y a deux input de type hidden nomm� u*/
		
//		if(elt_formulaire) {
//			elt_formulaire.value = 'GDP:CONFIG_ID3X';
//		} else {
//			alert("Votre demande ne peut �tre valid�.\n Contacter Florian ou Yann pour r�soudre le probl�me.");
//			return 0;
//		}
		
		if(!elt_idconfig_fille_wap) {
			return alertErrorDOM('\'idconfig_fille_wap\'');
		}
		if(!elt_idconfig_fille_imode) {
			return alertErrorDOM('\'idconfig_fille_imode\'');
		}
		
		if(!elt_config) {
			return alertErrorDOM('\'idconfig\'');
		}
		
		if(!elt_si_config_wap) {
			return alertErrorDOM('\'si_config_wap\'');
		}
		
		if(!elt_si_config_imode) {
			return alertErrorDOM('\'si_config_imode\'');
		}
		
		
		// On associe une config wap
/*		if( type_config == 'wap')
		{
			if(elt_idconfig_assoc_wap)
			{
				if(elt_idconfig_assoc_wap.value != 0)
				{
					elt_idconfig_fille_wap.value = elt_idconfig_assoc_wap.value;
					elt_idconfig_fille_imode.value = 0;
					elt_config.value = 0;
					elt_si_config_wap.value = 1;
				} else {
					alert("Vous devez renseigner le champ pour associer une config ID3X");
					return false;
				}
			} else {
				return alertErrorDOM('\'assoc_idconfig_wap\'');
			}
		}
*/		
		// On associe une config imode
/*		if( type_config == 'imode')
		{
			if(elt_idconfig_assoc_imode)
			{
				if(elt_idconfig_assoc_imode.value != 0)
				{
					elt_idconfig_fille_imode.value = elt_idconfig_assoc_imode.value;
					elt_idconfig_fille_wap.value = 0;
					elt_config.value = 0;
					elt_si_config_imode.value = 1;
				} else {
					alert("Vous devez renseigner le champ pour associer une config ID3X");
					return false;
				}
			} else {
				return alertErrorDOM('\'assoc_idconfig_imode\'');
			}
		}
*/
		// On associe une config site
		if( type_config == 'site')
		{
			if(elt_idconfig_assoc)
			{
				if(elt_idconfig_assoc.value != 0)
				{
					elt_config.value = elt_idconfig_assoc.value;
					elt_idconfig_fille_wap.value = 0;
					elt_idconfig_fille_imode.value = 0;
				} else {
					alert("Vous devez renseigner le champ pour associer une config ID3X");
					return false;
				}
			} else {
				return alertErrorDOM('\'assoc_idconfig\'');
			}
		}
		
		// On indique que l'on est en mode association.
		if(elt_action) {
			elt_action.value='a';
		} else {
			return alertErrorDOM('\'action\'');
		}
		
		// On envoie le formulaire
		document.form_config.submit();
	}
	
	/******************************************************************************/
	/* Fonction demandant le confirmation de la cr�ation des configs filles.			*/
	/* Parma�tre : type_config varchar. D�signe le type de la config.							*/
	/* Valeur de retour : SiCreationConfig booleen valoris� � true si on d�sire 	*/
	/*	cr�e la config sinon false																								*/
	/* Remarques : Cette fonction est utlis�e dans la fonction js createConfig()	*/
	/* Auteur : Florian Adam																											*/
	/* Cr�e le : 17/10/2006																												*/
	/******************************************************************************/
	function config_id3x_fille ( type_config )
	{
		var SiCreationConfig = false;
	
		if( confirm("Voulez-vous cr�er la config " + type_config + " associ�e ?") ) {
			SiCreationConfig = true;
		}
		
		return SiCreationConfig;
	}
	
	/******************************************************************************/
	/* Fonction demandant le confirmation de la cr�ation des configs filles.			*/
	/* Parma�tre : type_config varchar. D�signe le type de la config.							*/
	/* Valeur de retour : SiCreationConfig booleen valoris� � true si on d�sire 	*/
	/*	cr�e la config sinon false																								*/
	/* Remarques : Cette fonction est utlis�e dans la fonction js createConfig()	*/
	/* Auteur : Florian Adam																											*/
	/* Cr�e le : 17/10/2006																												*/
	/******************************************************************************/
	/* 		!!!!!			CETTE FONCTION N'EST PAS ACTUELLEMENT UTILIS�E 			!!!!!			*/
	function supp_dossier ( idDossier, dossierName )
	{
		if( confirm("Confirmez-vous la suppression du dossier " + dossierName + " (" + idDossier + ") ?") ) {
			myParams = buildParams('&', 'u', 'page_ok', 'page_err', 'actif' );
			myParams += 'iddossier='+idDossier;
			alert(myParams);
			
			validateFormOnSuccess ( 'result_supp', 'incl_result_recherche.htm', myParams);
		}
		
		return;
	}