//gestion des langues. LLA 12/2003
//================================

function error( msgcode ) {
//=======================
	var msg = "Votre naviguateur n'est pas compatible, merci d'appeler la Hotline Poliris au 0826.620.622 (hotline@poliris.com) en leur signalant ce code : " + msgcode;
		/*msg += "SL_AGE_M INCL_ANNONCE_FORM.HTM";
		msg += " " + msgcode;*/
	alert( msg );
}

/**
 * Récupère le champ voulu dans la page.
 * IN : id DOM du champ
 * OUT: le contenu du champ ou NULL
 */

function lang_get_element( iddom ) {
//================================
	var result = null;
	
	// Vérification des paramètres
	if( iddom ) {
	var elt_lg;
		// Récupération du champ
		if( document.getElementById ) {
			elt_lg = document.getElementById( iddom );
		} 
		else {
			elt_lg = MM_findObj( iddom );
		}
		
			// Test si le champ, sa valeur, etc... sont là.
			if( elt_lg ) {
				result = elt_lg;
			} else {
				error( "2, iddom = "+ iddom );
			}
		
	} else {
		error( "0, iddom = "+ iddom );
	}
	return( result );
}

/**
 * Récupère le champ voulu dans la page.
 * IN : id DOM du champ
 * OUT: le contenu du champ ou NULL
 */
function lang_get_field( iddom ) {
//==============================
	var result = null;
	
	var elt = lang_get_element( iddom );
	
	if( elt ) {
		result = elt.value;
	}

	return( result );
}

/**
 * Positionne le champ voulu dans la page.
 * IN : id DOM du champ
 * IN : txt : texte à positionner
 * OUT: le contenu du champ ou NULL
 */
function lang_set_field( iddom, va ) {
//==================================
	var result = null;
	
	var elt = lang_get_element( iddom );
	
	if( elt ) {
		elt.value = txt;
	}
}

/**
 * Récupère les index de la langue correspondant à un id donné.
 * IN : textechamp string : le contenu à chercher
 * IN : id string = "en", "nl", "description", ....
 * OUT: Array(2) : la position de début / position de fin dans la chaine, ou NULL
 */
function lang_get_index_text( textechamp, id ) {
//============================================
	var result = null;
	
	// Vérification des paramètres
	if( textechamp && id ) {
		if( (textechamp.length > 0) && (id.length > 0) ) {
			var delim1 = "<" + id + ">";
			var delim2 = "</" + id + ">";
			var idx1 = textechamp.indexOf( delim1 );
			var idx2 = textechamp.indexOf( delim2 );
			if( (idx1!=-1) && (idx2!=-1) ) {
				result = new Array( idx1+delim1.length, idx2 );
			}
		}
	}
	
	return( result );
}

/**
 * Récupère la langue correspondant à un id
 * IN : textechamp string : le contenu à chercher
 * IN : idlang string = "en", "nl", ....
 * OUT: tout le contenu entre <id> et </id>, contient le descriptif, etc...
 */
function lang_get_texte_langue( textechamp, idlang ) {
//==================================================
	var result = null;

	if( idlang && (idlang.length == 2) ) {

		var indexes = lang_get_index_text( textechamp, idlang );
		
		if( indexes && (indexes.length == 2) ) {
			result = textechamp.substring( indexes[0], indexes[1] );
		}
		
	}
	
	return( result );
}

/**
 * Récupère la langue correspondant à un id
 * IN : textelang string : le contenu à chercher
 * IN : idsection string = "descriptif", "prox", ....
 * OUT: tout le contenu entre <id> et </id>, contient le texte pur.
 */
function lang_get_texte_section( textelang, idsection ) {
//=====================================================
	var result = null;

	var indexes = lang_get_index_text( textelang, idsection );
	
	if( indexes && (indexes.length == 2) ) {
		result = textelang.substring( indexes[0], indexes[1] );
	}
		
	return( result );
}

/**
 * Récupère la sous-partie (descriptif, etc...) d'une langue
 * IN : lang string (un champ, retourné par lang_get_langue par exemple )
 * IN : idlang string = "en", "nl", ....
 * IN : idsection string = "descriptif", "prox", "libelle", ...
 * OUT: tout le contenu entre <id> et </id>.
 */
function lang_get_texte_langue_section( iddom, idlang, idsection ) {
//=============================================================

	var texte = lang_get_field( iddom );

	var lang = lang_get_texte_langue( texte, idlang );
	
	var result = lang_get_texte_section( lang, idsection );
	
	return( result );
}

/**
 * Récupère la sous-partie (descriptif, etc...) d'une langue
 * IN : lang string (un champ, retourné par lang_get_langue par exemple )
 * IN : id string = "descriptif", "prox", "libelle", ...
 * OUT: tout le contenu entre <id> et </id>.
 */
function lang_put_texte_langue_section( iddom, va, idlang, idsection ) {
//=================================================================

	var elt = lang_get_element( iddom );

	var nouveautexte = null;
	
	if( elt ) {
		var texte = elt.value;
		
		var indexlang = lang_get_index_text( texte, idlang );
		
		
		if( indexlang ) {
		
			var textlang = texte.substring( indexlang[0], indexlang[1] );
		
			// La langue <idlang> </idlang> existe déjà, cherchons la section (descr, prox, ...)
			var indexsection = lang_get_index_text( textlang, idsection );
			
			if( indexsection ) {
				// La section existe déjà, il faut faire du remplacement. Vivent les indexes.
				nouveautexte = texte.substring( 0, indexlang[0] + indexsection[0] ) + va + texte.substring( indexlang[0] + indexsection[1] );
				
			} else {
				// La section n'existe pas dans la langue, il faut l'ajouter en fin de langue.
				// Seul l'index de fin de langue nous intéresse.
				if( va && va.length > 0 ) {
					nouveautexte = texte.substring( 0, indexlang[1] ) + "<" + idsection + ">" + va + "</" + idsection + ">" + texte.substring( indexlang[1] );
				} else {
					nouveautexte = texte.substring( 0, indexlang[1] ) + texte.substring( indexlang[1] );
				}
			}
		} else {
			// il faut ajouter au texte existant un composite fait de idlang & idsection
			if( va && va.length > 0 ) {
				nouveautexte = texte + "<" + idlang + "><" + idsection + ">" + va + "</" + idsection + "></" + idlang + ">";
			}
		}
		
		if( nouveautexte ) {
			elt.value = nouveautexte;
		}
	}
}

/**
 * Met à jour la dernière opération effectuée sur un champ (descriptif, etc...)
 * IN : iddestion string : l'id DOM dans le document du champ concerné.
 * OUT: -
 */
function lang_update( iddestination ) {
//=============================================================

	var i;
	var iddes;

	if( iddestination ) {

		iddes = iddestination.split("|");
		
		for( i=0; i<iddes.length; i++ ) {

			var texte = lang_get_field( iddes[i] );
			
			if( texte == null ) {
				texte = "";
			}
	
			var elt_id = lang_get_element( iddes[i] + "_id" );
	
			if( elt_id ) {
				var id = elt_id.value;
				var index = id.split( "|", 3 );
				// [0] = iddom, [1] = idlang, [2] = idsection
				if( index.length == 3 ) {
					lang_put_texte_langue_section( index[0], texte, index[1], index[2] );
				}
				// elt_id.value = ""; désactivé cause bug - pascal - 06.07.07 
			}
		}
	}

}








/**
 * Change le champ du formulaire
 * IN : iddestination string : id du champ destination
 * IN : iddom string : id DOM du champ languesXML
 * IN : idlang string = "en", "nl", ....
 * IN : idsection string = "descriptif", "prox", "libelle", ...
 * OUT: change le champ du formulaire.
 */
function lang_toggle( iddestination, iddom, idlang, idsection ) {
//=============================================================

	var i = 0;

	if( iddestination && iddom && idlang && idsection ) {
		var tab_iddestination = iddestination.split( "|" );
		var tab_idsection = idsection.split("|");
		
		if( tab_iddestination.length == tab_idsection.length ) {
		
			for( i=0; i< tab_iddestination.length; i++ ) {
		
				var texte = lang_get_texte_langue_section( iddom, idlang, tab_idsection[i] );
				
				var elt = lang_get_element( tab_iddestination[i] );
				
				var elt_id = lang_get_element( tab_iddestination[i] + "_id" );
		
				var id = iddom + "|" + idlang + "|" + tab_idsection[i]
				
				if( elt ) {
		
					if( elt_id ) {
						lang_update( tab_iddestination[i] );
						elt_id.value = id;
					}
					if( texte == null ) {
						texte = "";
					}
					elt.value = texte;
					
				}
			}
		}
	}
}

/**
 * Change le champ du formulaire
 * IN : idflag_source : id DOM de l'image source
 * IN : idflag_dest : (liste d') id DOM de l'image (des images) destination
 * OUT: -
 */
function flag_update( flag_source, flag_dest) {
//=============================================================
	var elt_src = lang_get_element( flag_source );
	if( elt_src ) {
		var tab_id = flag_dest.split("|");
		var i;
		var id;
		for( i=0; i<tab_id.length; i++ ) {
			id = lang_get_element( tab_id[i] );
			if( id ) {
				if( elt_src.src ) {
					id.src = elt_src.src;
				}
				if( elt_src.title ) {
					id.title = elt_src.title;
				}
			}
		}
	}
}
