/*jslint browser: true, devel: true, plusplus: true, sloppy: true, vars: true*/
/*global $, jQuery, alert, Ajax, popup, self*/

function gere_valeur_mx() {
	var lst_mx = document.getElementById("Lst_mx"), chx_mx = document.getElementById("chx_mx");
	chx_mx = lst_mx.value;
}

function affiche_conf_mx(monurl, mesparametres) {
	$.ajax({
        type: "GET",
		data: mesparametres,
		url: monurl,
		cache: false,
		success: function (html) {
            $("#config_mx").html(html);
        }
    });
}

function config_mx() {
	var lst_mx = document.getElementById("Lst_mx"), iddomaine_mx, elt_config_mx = document.getElementById("config_mx");
    
    if (lst_mx) {
        iddomaine_mx = lst_mx.value;
    }
	
	if (elt_config_mx) {
		affiche_conf_mx("incl_domaine_domaine_mx.htm", "iddomainemx=" + iddomaine_mx);
	} else {
		alert("Impossible de trouver l'element : config_mx");
	}
}

function afficheSearchDomaine() {
	var idetat = $("#idetat"), idtypeurl = $("#idtypeurl"), url_url = $("#url_url");

	$.ajax({
        type: "GET",
        data: "idetat=" + idetat.val() + "&idtypeurl=" + idtypeurl.val() + "&url_url=" + url_url.val(),
        url: "incl_gestion_url_liste_url.htm",
        cache: false,
        success: function (html) {
            $("#lstSearchDomaine").append(html);
        }
    });
}

/****************************************************************
 * Ouvre une fenêtre en popup									*
 * Auteur : Christopher PREMAILLON								*
 * Date   : 30/11/2001											*
 * Params : titre (IN) -> Titre de la fenêtre					*
 *			monUrl (IN) -> L'url à afficher dans la fenêtre		*
 * Algo	  : Ouverture de la fenêtre, sans fioritures.			*
 ****************************************************************/
function popup(nomFen, monUrl, largeur, hauteur, ismodal) {
	var myWin;
	if (this.openADialog) {
		openADialog(monUrl, largeur, hauteur, null, null);
	} else {
		if (window.showModalDialog && ismodal == 1) {
			myWin = window.showModalDialog(monUrl, window, "dialogWidth:" + largeur + "px ; dialogHeight:" + hauteur + "px ; status:no ; scroll:yes ; help:no ; resizable:yes ; center:yes");
		} else {
			myWin = window.open(monUrl, nomFen, "width=" + largeur + ", height=" + hauteur + ", toolbar=no, location=no, directories=no, status=yes, scrollbars=yes, resizable=yes, copyhistory=no, dependent=yes, left=" + (window.screen.width - largeur) / 2 + ",top=" + (window.screen.height - hauteur - 100) / 2);
		}
	}
}

//Permet de rendre invcisible l'ensemble des includes
function menage_affichage(name, name2, name3, name4) {
	var affiche1 = document.getElementById(name), affiche2 = document.getElementById(name2), affiche3 = document.getElementById(name3), affiche4 = document.getElementById(name4), chx_simple = document.getElementById("valider_chx_simple");
	if (affiche1) {
		affiche1.style.display = "none";
	}
    
	if (affiche2) {
		affiche2.style.display = "none";
	}
    
	if (affiche3) {
		affiche3.style.display = "none";
	}
    
	if (affiche4) {
		affiche4.style.display = "none";
	}
	if (chx_simple) {
		chx_simple.style.visibility = "visible";
	}
}

//Permet de rendre invcisible l'ensemble des includes test yann 170108
function menage_affichage2(name) {
	var affiche1 = document.getElementById(name), chx_simple = document.getElementById("valider_chx_simple");
    
	if (affiche1) {
		affiche1.style.visibility = "hidden";
	}
	
    if (chx_simple) {
		chx_simple.style.visibility = "visible";
	}
}

function verif_si_tout_saisie(conf) {
	var priorite = document.getElementById("Txt_priorite"), domainPart = document.getElementById("Txt_domainpart_mx"), adresse_ip = document.getElementById("txtAdresseIp");
	
    if (conf == 0) {
		return true;
	} else if (conf == 1) {
		if (priorite.value == "") {
			alert("Veuillez saisir l'ensemble des informations");
			return false;
		} else {
			return true;
		}
	} else if (conf == 2) {
		if (priorite.value == "" || priorite.value == 0 || domainPart.value == "" || adresse_ip.value == "") {
			alert("Veuillez saisir l'ensemble des informations");
			return false;
		} else {
            return true;
		}
	} else if (conf === 3) {
		var host = document.getElementById("Txt_host");
        
		if (priorite.value == "" || priorite.value == 0 || host.value == "") {
			alert("Veuillez saisir l'ensemble des informations");
			return false;
		} else {
			return true;
		}
	} else if (conf == 4) {
		return true;
	} else {
		alert("Erreur, contacter le serivce informatique de gestion");
		return false;
	}
}

//Permet d'ajouter une config
function valid_config_new(conf) {
    var Txt_domainpart_mx = document.getElementById("Txt_domainpart_mx"), ip = document.getElementById("txtAdresseIp"), priorite = document.getElementById("Txt_priorite");
	document.formulaire.u.value = "GDP2:MAJ_CFG_NEW";
    document.formulaire.Conf.value = 1;
	
	if (verif_si_tout_saisie(conf) == true) {
		if (conf === 0) {
			var texte = "Attention!!! En passant en configuration simple toutes vos données saisies en configuration avancée seront perdu. Etes vous sûr de vouloir continuer ?";
			if (confirm(texte)) {
				document.formulaire.Conf.value = 0;
				document.formulaire.submit();
			}
		} else if (conf === 1) {
			document.formulaire.Txt_domainpart_mx2.value = "mailx.poliris.net";
			document.formulaire.TxtPriorite.value = priorite.value;
			document.formulaire.chx_cfg_mx.value = 1;
			document.formulaire.submit();
		} else if (conf === 2) {
			document.formulaire.TxtAdresseIp.value = ip.value;
			document.formulaire.TxtPriorite.value = priorite.value;
			document.formulaire.Txt_domainpart_mx2.value = Txt_domainpart_mx.value;
			document.formulaire.chx_cfg_mx.value = 2;
			document.formulaire.submit();
		} else if (conf === 3) {
			var host = document.getElementById("Txt_host");
			document.formulaire.TxtPriorite.value = priorite.value;
			document.formulaire.Txt_domainpart_mx2.value = host.value;
			document.formulaire.chx_cfg_mx.value = 3;
			document.formulaire.submit();
		} else if (conf === 4) {
			document.formulaire.chx_cfg_mx.value = 4;
			document.formulaire.submit();
		}
	}
}

function confirmation(id) {
    var texte = "Etes vous sûr de vouloir supprimer ce nom de domaine";
	document.formulaire.delete_row.value = 1;
	
    if (confirm(texte)) {
        document.formulaire.u.value = "GDP2:SUPPR_URL";
        document.formulaire.iddossierurl.value = id;
        document.formulaire.submit();
    }
}

// Suppression automatique de 'www.' ds l'URL
// MR 20/04/2005
function suppression_www(url) {
	if (url.substring(0, 4) === "www.") {
		url = url.substring(4, url.length);
	}
	return url;
}
		
function valid() {
	var erreur = "", fieldfocus = "", domaine = document.getElementById("url_url");
	
	if (domaine.value === "") {
		erreur += "Vous devez saisir un nom de domaine\n";
		fieldfocus = domaine;
	}
   
	if (erreur === "") {
		domaine.value = suppression_www(domaine.value);
		
		if ((domaine.value.indexOf("/") > 0) || (domaine.value.indexOf(":") > 0) || (domaine.value.indexOf(",") > 0) || (domaine.value.indexOf("www") > 0) || (domaine.value.indexOf("http") > 0)) {
			erreur += "Caractère ( / , : ) ou mot (http, www) interdits dans le domaine !!!\n";
			fieldfocus = domaine;
		} else {
			document.formulaire.submit();
		}
	}
	if (erreur !== "") {
		alert(erreur);
		fieldfocus.focus();
	}
}

//Permet de gerer l'affichage des different includes
function gere_affichage(elt, name) {
	var affiche = document.getElementById(name), chx_simple = document.getElementById("valider_chx_simple"), element = document.getElementById(elt);
	if (element.value == true) {
		affiche.style.display = "block";
		chx_simple.style.visibility = "hidden";
	} else {
		affiche.style.display = "none";
		chx_simple.style.visibility = "visible";
	}
}

//Controle si l'adresse IP est valide
function controle_saisie_IP(elt) {
	var obj = document.getElementById(elt), text, monEntier;
    if (obj) {
        text = obj.value;
    }
        
	if (text.search(/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/) === -1) {
		alert("Adresse IP invalide");
	}
}

//Permet de savoir si l'host saisie correspond au critere de saisie
function controle_saisie_host(HostName) {
	var host = document.getElementById(HostName), nom_host, premier_caractere;
    if (host) {
        nom_host = host.value;
    }
    
    if (nom_host != "") {
        premier_caractere = nom_host.substring(0, 1);
    }
    
	if (premier_caractere == "*") {
		return true;
	} else if (premier_caractere == "" || premier_caractere == undefined) {
		return true;
	} else {
		if (nom_host.search(/^[a-zA-Z0-9]+(?:[-.]?[a-zA-Z0-9]+)*$/) !== -1) {
			return true;
		} else {
			alert("Saisie incorrecte");
			return false;
		}
	}
	
}


function ajoute_modif_mapping(val_modif_mapping, chx_type_mapping) {
	var form = document.getElementById("formulaire"), txt = document.getElementById("Txt_autre_mapping"), txtAutreMapping = document.getElementById("txtAutreMapping"), txt2 = document.getElementById("Txt_domainpart_mapping"), txtDomainePart = document.getElementById("txtDomainePart"), form_modif_mapping = document.getElementById("modif_mapping"), form_chx_type_mapping = document.getElementById("chx_type_mapping");
    
    if (form) {
        if (form_modif_mapping && form_chx_type_mapping) {
            form_modif_mapping.value = val_modif_mapping;
            form_chx_type_mapping.value = chx_type_mapping;
        }

        if (txt && txtAutreMapping) {
            txtAutreMapping.value = txt.value;
        }

        if (txtDomainePart && txt2) {
            txtDomainePart.value = txt2.value;
        }
        
        form.u.value = "GDP2:AJOUT_MAJ_MAPPING";
        form.submit();
    }
}


//Permet d'inserer ou de mettre a  jour un mapping
function valid_choix() {
	var lst = document.getElementsByName("choix"), modif_mapping = document.getElementById("modif_mapping");
    
    if (modif_mapping) {
        if (modif_mapping.value == 1) {
            // Création d'un Mapping de type autre
            if (lst[1].checked == true) {
                if (controle_saisie_host("Txt_autre_mapping") == true) {
                    if (controle_saisie_host("Txt_domainpart_mapping") == true) {
                        ajoute_modif_mapping(1, 1);
                    }
                }
                // Création d'un Mapping de type Web Agency ID3x
            } else {
                if (controle_saisie_host("Txt_domainpart_mapping") == true) {
                    ajoute_modif_mapping(1, 0);
                }
            }
        } else {
            if (lst[1].checked === true) {
                if (controle_saisie_host("Txt_autre_mapping") == true) {
                    if (controle_saisie_host("Txt_domainpart_mapping") == true) {
                        ajoute_modif_mapping(0, 1);
                    }
                }
            } else {
                if (controle_saisie_host("Txt_domainpart_mapping") == true) {
                    ajoute_modif_mapping(0, 0);
                }
            }
        }
    }
}

function suppression_mx(id) {
	var texte = "Etes vous sûr de vouloir supprimer ce MX", texte2 = "Voulez vous egalement supprimer les mapping associés a ce domaine_mx ?";
    
    document.formulaire.modif.value = 1;
    
    if (confirm(texte)) {
		if (confirm(texte2)) {
			document.formulaire.suprr_mapping_associe_domaine_mx.value = 1;
		}
        
		document.formulaire.u.value = "GDP2:SUPPR_MX";
		document.formulaire.iddomaine_mx.value = id;
		document.formulaire.submit();
	}
}

//Supprime un mapping pour un domaine precis
function suppresion_mapping(id) {
    var texte = "Etes vous sûr de vouloir supprimer ce mapping";
	document.formulaire.modif.value = 1;
    
	if (confirm(texte)) {
		document.formulaire.iddossierurl.value = "$$INFOSURL:IDDOSSIERURL$$";
		document.formulaire.u.value = "GDP2:SUPPR_MAPPING";
		document.formulaire.iddomaine_mapping.value = id;
		document.formulaire.submit();
	}
}

//Permet de remplir les champs pour la modifications des mappings
function modify_mapping(id) {
	var lst = document.getElementsByName("choix"), Txt_domainpart_mapping = document.getElementById("Txt_domainpart_mapping"), Txt_autre_mapping = document.getElementById("Txt_autre_mapping"), valide_map_site = document.getElementById("valide_map_site"), valid_map_autre = document.getElementById("valid_map_autre"), obj = document.getElementById("map_domainpart_" + id), obj2 = document.getElementById("map_target_" + id);
    
    document.formulaire.iddomaine_mapping.value = id;
	document.formulaire.modif_mapping.value = 1;
	Txt_domainpart_mapping = obj.value;
	
	valide_map_site = "Modifier";
	valid_map_autre = "Modifier";
	Txt_autre_mapping = "";
	if (obj2.value == "Web Agence ID3x") {
		lst[0].checked = true;
		valide_map_site.style.visibility = "visible";
		valid_map_autre.style.visibility = "hidden";
	} else {
		Txt_autre_mapping.value = obj2.value;
		lst[1].checked = true;
		valide_map_site.style.visibility = "hidden";
		valid_map_autre.style.visibility = "visible";
	}
}

//Permet d'afficher le bouton ajouter mapping en fonction du choix de mapping
function affiche_bouton_ajouter_mapping() {
	var cbo = document.getElementsByName("choix"), valide_map_site = document.getElementById("valide_map_site"), valide_map_autre = document.getElementById("valid_map_autre");
	
    if (cbo[0].checked == true) {
		valide_map_site.style.visibility = "visible";
		valide_map_autre.style.visibility = "hidden";
	} else if (cbo[1].checked == true) {
		valide_map_site.style.visibility = "hidden";
		valide_map_autre.style.visibility = "visible";
	}
}


