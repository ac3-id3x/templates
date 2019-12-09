/*jslint browser: true, devel: true, plusplus: true, sloppy: true, vars: true*/
/*global $, jQuery, alert, Ajax, popup, self*/

/******** Valide un formulaire ***********/
/*	                                     */
/* myDiv : la div à mettre à jour.       */
/* myUrl : l'url de la page à recharger dans la div précédemment nommé. */
/* myParams : liste des paramètres à 'poster' (à récupérer avec la fonction buildParams(), voir ci-dessous ) */
/*                                                             */
/***************************************************************/
function validateForm(myDiv, myUrl, myParams) {
    $.ajax({
        type: "POST",
        data: myParams,
        url: myUrl,
        cache: false,
        success: function (transport) {
            $("#" + myDiv).html(transport);
        },
        error: function (transport) {
            alert("Une erreur est survenue dans la fonction 'validateForm'");
        }
    });
}

/******** Valide un formulaire et gérer les événements pour un succés ou un erreur *******
	                                                                                     
 myDiv : la div à mettre à jour.                                                       
 myUrl : l'url de la page à recharger dans la div précédemment nommé.                     
 myParams : liste des paramètres à 'poster' (à récupérer avec la fonction buildParams(), voir ci-dessous )
 
 Permet de gérer les événements onSuccess et onFailure. Ne pas oublier d'implémenter un Response.AppendHeader() dans la macro P (Exemple de macro MAJ_PUBLICATION). 
**************************************************************/
function validateFormOnSuccess(myDiv, myUrl, myParams) {
    $.ajax({
        type: "POST",
        data: myParams,
        url: myUrl,
        cache: false,
        success: function (xmlhttpreq, xjsonrep) {
            if (xjsonrep !== '' &&  xjsonrep !== null) {
                
                var parentUrl = window.opener.location.href;
                window.opener.location.href = parentUrl;
                self.close();
                return false;
            }
        },
        error: function (transport) {
            alert("Une erreur est survenue dans la fonction 'validateFormOnSuccess'");
        }
    });
}

/******** Créer la liste des paramètres html (utiliser pour Ajax.Updater, entre autre) *******
	
 separator : un caractère séparateur
 arguments : une liste d'argument passé en paramètre de la fonction.
 return : une liste de variables séparées par un séparateur 'separator' (ex : 12,13,15,28)
 
 Exemple d'utilisation : buildParams('&', 'u', 'page_ok', 'page_err', 'chselection', 'type', 'iddossier' );
 Renvoie la chaine "&u=value1&page_ok=value2&page_err=value3&chselection=value4&type=value5&iddossier=value6"
***************************************************************/
function buildParams(theForm, separator) {
	var result = '?', errMsg = '', i = 0, formulaire, elt;
	
	// Pour chaque paramètres transmis (après la variable separator dans l'appel de la fonction)
	for (i = 2; i < arguments.length; i++) {
		// Nous récupérons les valeurs
		// Soit en précisant le nom du formulaire
		if (theForm.length > 0) {
			formulaire = document.getElementById(theForm);
			elt = formulaire.elements[arguments[i]];
			
			// Soit en récupérant directement via l'id de l'élément
		} else {
            elt = document.getElementById(arguments[i]);
        }
		
		if (!elt) {
            alert(errMsg += "Erreur d\'argument dans la fonctions javascript buildParams()");
			return false;
		} else {
            result += elt.name + '=' + elt.value + separator;
        }
    }

    return result;
}

function buildParamsJSON(theForm, separator) {
	var result = '{', errMsg = '', i = 0, formulaire, elt;

    var jsonObj = [];
    var item = {};
    $.each(arguments, function (i, value) {
        
        // Le formulaire est passé en paramètre
        if (theForm !== '') {
            formulaire = $("#" + theForm);
        }
        if (i > 1) {
            if (formulaire) {
                elt = formulaire.elements[value];
            } else {
                elt = $("#" + value);
            }
            
            if (!elt) {
                alert(errMsg += "Erreur d\'argument dans la fonctions javascript buildParams()");
                return false;
            } else {
                //result += elt.attr("name") + ' : "' +  elt.val() + '", ';
                var name = elt.attr("name");
                var value = elt.val();
                item [name] = value;
            }
        }
        
    });
    
    return item;
    //result = result.substring(0, result.length - 1) + ' }';

    //return result;
}

/******** Créer une chaine de caractère représentant une liste d'id séparés par une virgule ********
 eltForm : Formulaire à parser
 type : type d'élément à récupérer (checkbox, radio, ... )
 name : nom des ids de la liste à récupérer.
*******************************************************************************/
function addListId(eltForm, type, name) {
	
	var myArray = $("input[type=checkbox]");
	var ids = '';

    myArray.each(function(index) {
        var item = myArray[index];
        if(item.checked == true) {
  		    ids += item.value + ',';
        }
    })
	return ids;
}

/******** Fonctions permettant d'ouvrir ou fermer un élément avec un id ********/
function ToggleDiv(className, divName) {
    var path = '/z/backoffice/poliris_gestprod_v2/images/', elt = $(divName).children('img');
    
    $(className).toggle();

    var src = (elt.attr('src') === path + 'reduire_2.gif')
        ? 'derouler_2.gif'
        : 'reduire_2.gif';
	
    elt.attr("src", path + src);
}