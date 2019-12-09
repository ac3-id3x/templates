function autodetect() {
	if( full( auto, true ) ) {
		Element.show( "validall" );
	}
}

function validall() {
	if( full( valider_auto, false ) ) {
		Element.hide( "validall" );
	}
}

function removechildren( idorelt ) {
	var elt = $('#'+idorelt );
	if( elt ) {
		// Détruire tous les noeuds fils (noeuds textes)
		while( elt.children().length > 0 ) {
			elt.remove( elt.children()[0] );
		}
	}
}

/**
 * Nettoyage des informations dans la page :
 * - on cache les informations présentes,
 * - On efface tous les input hidden
 */
function clean( idkeyword ) {

	var i;
	
	// Tout d'abord l'aspect visuel.	
	var elt = $( "#textegeo_" + idkeyword );
	if( elt ) {
		// Cacher les infos présentes : texte.
		elt.style.visibility = "hidden";
		elt.style.display = "none";
		
		// Détruire tous les noeuds fils (noeuds textes)
		removechildren( elt );
		
		// Réautoriser l'affichage.
		elt.style.visibility = "visible";
		elt.style.display = "";
	}

	// Nettoyer tous les input hidden	
	elt = $( "#idgeo_" + idkeyword );
		var elt_list = elt.getElementsByTagName( "input" );
		var elt_input;
		if( elt_list ) {
			for( i=0; i<elt_list.length; i++ ) {
				elt_input = elt_list[ i ];
				if( elt_input ) {
					if( elt_input.type == "hidden" ) {
						elt_input.defaultValue = "";
						elt_input.value = "";
					}
				}
			}
		}
}

function nettoyer( expression ) {
	if( (expression) && (expressions) ) {
//		alert( expression );
		var i;
		var idx;
		var lne;
		var re;
		var restr;
		expression = expression.toLowerCase();
		for( i=0; i<expressions.length; i++ ) {
			restr = "\\b" + expressions[i] + "\\b";
			re = new RegExp( restr, "ig" );
			expression = expression.replace( re, "" );
		}
//		alert( expression );
	}
	return expression;
}

function auto( id ) {

	var elt_spantexte = "#textegeo_" + id;
	var elt_spanselect = "#selectgeo_" + id;
	// Récupérer l'expression texte.
	var elt_texte = $( "keyword_" + id );
	if( elt_texte ) {
		var url = '/' + id + '/expression_autodetect.html';
		var expression = nettoyer( elt_texte.firstChild.nodeValue );
		var pars = 'expr=' + encodeURIComponent( expression );
		
		// Cacher le texte déjà affiché.
		if( $( elt_spantexte ) ) {
			$( elt_spantexte ).hide();
		}
		
		// Préparer l'affichage de la selectbox.
		if( $( elt_spanselect ) ) {
			removechildren( elt_spanselect );
			$( elt_spanselect ).show();
		}	

		// Afficher : Detection...
		if( elt_spanselect ) {
			removechildren( elt_spanselect );
			new Insertion.Top( elt_spanselect, 'Detection en cours...');
		}

		// Demande de réponse asynchrone.
		var myAjax = new Ajax.Updater(
			elt_spanselect,
			url, 
			{method: 'get', parameters: pars, onFailure: reportError }
		);
	} else {
		alert("Attention : Impossible de trouver la valeur de 'keyword_" + id + "' !" );
	}	
}

function reportError(request)
{
	alert('Sorry. There was an error');
}

function reportSuccess(request)
{
		// Afficher : enregistrement...
		alert( request );
		alert( request.container );
		alert( request.containers );
		var elt = $( '#'+request.containers.failure );
		if( elt ) {
			removechildren( elt );
		}
}

/**
 Itérer sur toutes les expressions, et détecter chaque expression
 */
function full( funct, warn ) {
	var i;
	var idkeyword;
	var doit = true;
	if( warn ) {
		doit = confirm("Attention, l'opération peut être longue (5 seconde / expression).\nContinuer ?" );
	}
	if( doit ) {
		var children = document.getElementsByTagName('*') || document.all;
	  for( i = 0; i < children.length; i++ ) {
	    var child = children[i];
	    if( child.id.substring( 0, 8 ) == "keyword_" ) {
	    	idkeyword = child.id.substring( 8 );
	    	funct( idkeyword );
	    }
	  }
	}
	return doit;
}

function effacer( type, id ) {
	var suivant = null;
	switch( type ) {
		case "pays":
			suivant = "division";
			break;
		case "division":
			suivant = "subdivision";
			break;
		case "subdivision":
			suivant = "villeinternationale";
			break;
		default:
			break;
	}
	if( suivant != null ) {
		// D'abord effacement du texte,
		var elt_id = "#spanid" + suivant + "_" + id;
		if( $( elt_id ) ) {
			removechildren( elt_id );
		}
		// Ensuite effacement des valeurs dans les INPUTs
		elt_id = "#id" + suivant + "_" + id;
		if( $( elt_id ) ) {
			$( elt_id ).defaultValue = "";
			$( elt_id ).value = "";
		}
		// Enfin les élèments suivants
		effacer( suivant, id );
	}
}

/**
 * Changer l'expression qui vient d'être cliquée :
 *	- cacher les sous-élements (division, subdivision, ville)
 *	- Proposer une liste déroulante.
 */
function changer( type, id ) {
	var url=null;  
	var pars="";
	var elt_spantexte = "#textegeo_" + id;
	var elt_spanselect = "#selectgeo_" + id;
	var id_value;
	var id_parentvalue;
	switch( type ) {
		case "pays":
			url="/" + type + "/" + id + "/choix_pays.html";
			id_value = "idpays_" + id;
			if( $( '#'+id_value ) ) {
				pars="idpays=" + $F( id_value );
			}
			break;
		case "division":
			url="/" + type + "/" + id + "/choix_division.html";
			id_parentvalue = "#idpays_" + id;
			if( $( id_parentvalue ) ) {
				url="/" + $F( id_parentvalue ) + url;
			}
			id_value = "#iddivision_" + id;
			if( $( id_value ) ) {
				pars="iddivision=" + $F( id_value );
			}
			break;
		case "subdivision":
			url="/" + type + "/" + id + "/choix_subdivision.html";
			id_parentvalue = "#iddivision_" + id;
			if( $( id_parentvalue ) ) {
				url="/" + $F( id_parentvalue ) + url;
			}
			id_value = "#idsubdivision_" + id;
			if( $( id_value ) ) {
				pars="idsubdivision=" + $F( id_value );
			}
			break;
		case "villeinternationale":
			url="/" + type + "/" + id + "/choix_ville.html";
			id_parentvalue = "#idsubdivision_" + id;
			if( $( id_parentvalue ) ) {
				url="/" + $F( id_parentvalue ) + url;
			}
			id_value = "#idvilleinternationale_" + id;
			if( $( id_value ) ) {
				pars="idvilleinternationale=" + $F( id_value );
			}
			break;
		default:
			break;
	}
	
	if( url!= null ) {
		// Cacher le texte déjà affiché.
		if( $( elt_spantexte ) ) {
			$( elt_spantexte ).hide();
		}
		// Préparer l'affichage de la selectbox.
		if( $( elt_spanselect ) ) {
			removechildren( elt_spanselect );
			$( elt_spanselect ).show();
		}	
		// Demande de réponse asynchrone.
		var myAjax = new Ajax.Updater(
			elt_spanselect, 
			url, 
			{method: 'get', parameters: pars, onFailure: reportError}
		);
	}
}

/**
 * Figer l'expression qui vient d'être choisie.
 */
function create_anchor( type, id, txt, title ) {
		// On crée un A HREF + le Texte choisi, et on le met en noeud fils.
		var nodeA = document.createElement( "a" );
		var nodeT = document.createTextNode( "[" + txt + "]" );
		if( nodeA && nodeT ) {
			nodeA.append( nodeT );
			nodeA.href = "javascript:changer( '" + type +"', '" + id +"' );";
			nodeA.title = title;
		}
		return nodeA;
}

/**
 * Effectue la sauvegarde, en base de données, des informations  modifiées.
 */
function save( id ) {
	if( id ) {
		var id_pays = "#idpays_" + id;
		var id_division = "#iddivision_" + id;
		var id_subdivision = "#idsubdivision_" + id;
		var id_villeinternationale = "#idvilleinternationale_" + id;
		
		var id_status = "#status_" + id;

		var pagetype = null;
		if( $( "#type_expressions" ) ) {
			pagetype = $F( "type_expressions" );
		}

		if( pagetype ) {
			var url = '/' + id + '/' + pagetype + '/expression_update.html';
			var pars = 'idpays=' + encodeURIComponent( $F(id_pays) ) +
				'&iddivision=' + encodeURIComponent( $F(id_division) ) +
				'&idsubdivision=' + encodeURIComponent( $F(id_subdivision) ) +
				'&idvilleinternationale=' + encodeURIComponent( $F(id_villeinternationale) );
			//alert( url+ "?" + pars ); 
			
			// Demande de réponse asynchrone.
			var myAjax = new Ajax.Updater(
				id_status,
				url, 
				{method: 'get', parameters: pars, onFailure: reportError}
			);
		}
	}		
}

/**
 * La value que l'on reçoit peut avoir la forme suivante :
 * pays|250|France,division|2251|Rhône-Alpes,subdivision|17692|(38) Isère,villeinternationale|382000544|VIENNE
 * Un split sur "," donne 4 élèments (pays / division / subdivision / ville )
 * Un sous-split sur "|" donne 3 sous-éléments : type / valeur / libelle
 */
function valider_auto( id ) {
	var value = null;
	var tableau = null;
	var cellule = null;
	var i;
	var id_span;
	var id_input;
	var elt;
	var nodeA;
	var isnotempty = true;
	var id_status = "#status_" + id;
	if( $( "#choix_" + id ) ) {
		value = $F( "#choix_" + id );
		tableau = value.split( "," );
		for( i=0; i< tableau.length; i++ ) {
			cellule = tableau[i].split( "|" );
			id_span = "#spanid" + cellule[0] + "_" + id;
			id_input = "#id" + cellule[0] + "_" + id;

			elt = $( id_span );
			if( elt ) {
				// Détruire tous les noeuds fils (noeuds textes) (suppression de l'ancien texte + HREF)
				removechildren( elt );
				
				if( isnotempty ) {
					// On crée un A HREF + le Texte choisi, et on le met en noeud fils.
					nodeA = create_anchor( cellule[0], id, (cellule[2]?cellule[2]:" ? "), "Choisir " + cellule[0] );
					if( nodeA ) {
						elt.append( nodeA );
					}
					if( cellule[2] == "" ) {
						isnotempty = false;
					}
				}
				
				// Puis on met à jour la valeur choisie dans le INPUT HIDDEN
				if( $(id_input) ) {
					$( id_input ).defaultValue = cellule[1];
					$( id_input ).val() = cellule[1];
				}
			}
		}
		// Afficher : enregistrement...
		elt = $( id_status );
		if( elt ) {
			removechildren( elt );
			new Insertion.Top( elt, 'Enregistrement...');
		}
		
		// Enregistrement en base de données.
		save( id );
		
		// Enfin, on réaffiche la zone texte et l'on cache la zone SELECT
		annuler( id );
	}
}

/**
 * Figer l'expression qui vient d'être choisie.
 */
function valider( type, id ) {
	var id_span;
	var id_spansuivant;
	var id_select;
	var id_input;
	var txt;
	var val;
	var id_suivant = null;
	var title = null;
	var titlesuivant;
	var id_status = "#status_" + id;
	var elt;
	switch( type ) {
		case "pays":
			id_span="#spanidpays_" + id;
			id_select="#choixidpays_" + id;
			id_input = "#idpays_" + id;
			title = "Choisir le pays";
			id_suivant = "#division";
			id_spansuivant = "#spaniddivision_" + id;
			titlesuivant = "Choisir la division";
			break;
		case "division":
			id_span="#spaniddivision_" + id;
			id_select="#choixiddivision_" + id;
			id_input = "#iddivision_" + id;
			title = "Choisir la division";
			id_suivant = "#subdivision";
			id_spansuivant = "#spanidsubdivision_" + id;
			titlesuivant = "Choisir la subdivision";
			break;
		case "subdivision":
			id_span="#spanidsubdivision_" + id;
			id_select="#choixidsubdivision_" + id;
			id_input = "#idsubdivision_" + id;
			title = "Choisir la subdivision";
			id_suivant = "#villeinternationale";
			id_spansuivant = "#spanidvilleinternationale_" + id;
			titlesuivant = "Choisir la ville";
			break;
		case "villeinternationale":
			id_span="#spanidvilleinternationale_" + id;
			id_select="#choixidvilleinternationale_" + id;
			id_input = "#idvilleinternationale_" + id;
			title = "Choisir la ville";
			break;
		default:
			break;
	}

	// La selectbox	
	var elt_select = $( id_select );
	if( elt_select ) {
		
		// la valeur choisie
		val = elt_select.val();
	
		// le texte choisi
		txt = elt_select.options[ elt_select.selectedIndex ].text;
		
		elt = $( id_span );
		if( elt ) {
			// Détruire tous les noeuds fils (noeuds textes) (suppression de l'ancien texte + HREF)
			removechildren( elt );
			
			// On crée un A HREF + le Texte choisi, et on le met en noeud fils.
			var nodeA = create_anchor( type, id, txt, title )
			if( nodeA ) {
				elt.appendChild( nodeA );
			}
			
			// Puis on met à jour la valeur choisie dans le INPUT HIDDEN
			if( $(id_input) ) {
				$( id_input ).defaultValue = val;
				$( id_input ).val(val);
			}

			// On efface ensuite les élèments suivants, car ils ne signifient plus rien si l'on a changé l'élément 'père'
			effacer( type, id );
			
			// On crée un élèment suivant si nécessaire
			if( (val != "") && (id_spansuivant != null) ) {
				elt = $( id_spansuivant );
				nodeA = create_anchor( id_suivant, id, " ? ", titlesuivant )
				if( elt && nodeA ) {
					elt.append( nodeA );
				}
			}

			// Afficher : enregistrement...
			elt = $( id_status );
			if( elt ) {
				removechildren( elt );
				new Insertion.Top( elt, 'Enregistrement...');
			}
			
			// Enregistrement en base de données.
			save( id );
			
			// Enfin, on réaffiche la zone texte et l'on cache la zone SELECT
			annuler( id );
		}
	}
}

/**
 * Annuler la saisie, revenir à l'expression.
 */
function annuler( id ) {
	var elt_spantexte = "#textegeo_" + id;
	var elt_spanselect = "#selectgeo_" + id;
	
	// Vider / Cacher la selectbox.
	if( $( elt_spanselect ) ) {
		removechildren( elt_spanselect );
		$(elt_spanselect).hide();
	}	
	
	// Remettre le texte précédemment affiché.
	if( $( elt_spantexte ) ) {
		$( elt_spantexte ).show();
	}
}
