/*jslint browser: true, devel: true, plusplus: true, sloppy: true, vars: true*/
/*global $, jQuery, alert, Ajax, popup*/

//insertion des agence accueillies pour une agence accueillante
function insert_agence_accueilli_coches() {
	var frm_new_agence_accueilli = document.getElementById('formulaire_agence_acueilli'), var_u = document.getElementById('u'), page_ok = document.getElementById('page_ok'), page_err = document.getElementById('page_err');
	if (frm_new_agence_accueilli) {
		if (var_u) {
			if (page_ok) {
				if (page_err) {
					var_u.value = "GDP2:INSERT_AGENCE_ACCUEILLI_COCHE";
					page_ok.value = "incl_fusion_new_agence_accueilli_close.htm";
					frm_new_agence_accueilli.submit();
				} else {
					alert('Erreur lors de l\'insertion d\'une agence acceuilli pour une agence accueillante(Voir variable page_err)');
				}
			} else {
				alert('Erreur lors de l\'insertion d\'une agence acceuilli pour une agence accueillante(Voir variable page_ok)');
			}
		}
	} else {
		alert('Erreur lors de l\'insertion d\'une agence acceuilli pour une agence accueillante(Voir variable frm_new_agence_accueilli)');
	}
}

function valid_choix_filtre() {
	var frm_filtre_agence_accueilli = document.getElementById('frm_filtre_agence_accueilli'), page_ok = document.getElementById('page_ok');
	//var var_u=document.getElementById('u');
	if (frm_filtre_agence_accueilli) {
		if (page_ok) {
			//var_u.value="GDP2:INSERT_FILTRE_POUR_AGENCE_ACCUEILLIE";
			page_ok.value = "fusion_filtre_agence_accueillie_close.htm";
			frm_filtre_agence_accueilli.submit();
		}
	}
}

//Permet d'afficher le bouton selectionner agence pour la recherche de fusion
function affiche_tbl_select_agence() {
	var bt_select_agence = document.getElementById('affiche_bt_select_agence');
	if (bt_select_agence) {
		bt_select_agence.value = 1;
    } else {
		alert('Erreur bouton select non trouvé');
    }
}

//Affiche les fusions acceuillantes et acceuillis d'une agence
function affiche_fusion_accueillante_accueillies() {
	var frm_new_agence_accueilli = document.getElementById('formulaire_agence_acueilli'), rentre_ds_macro = document.getElementById('rentre_ds_macro2'), chk = document.getElementById('chk_agence'), nbElements, cpt = 0, i;
	
    if (frm_new_agence_accueilli) {
		nbElements = frm_new_agence_accueilli.elements.length;
		for (i = 0; i < nbElements; i++) {
			if (frm_new_agence_accueilli.elements[i]) {
				if (frm_new_agence_accueilli.elements[i].checked) {
					cpt = cpt + 1;
				}
			}
		}
		if (cpt === 1) {
			rentre_ds_macro.value = 1;
			frm_new_agence_accueilli.submit();
		} else {
			alert('Veuillez ne selectionner qu\'une seule agence');
		}
	} else {
		alert('Erreur lors de l\'affichage des agences accueillies et accueillantes (voir variable frm_new_agence_accueilli)');
	}
}

//Permet d'interdire toute les transactions
function check_all_filtre() {
	var frm_filtre_agence_accueilli = document.getElementById('frm_filtre_agence_accueilli'), i;
	if (frm_filtre_agence_accueilli) {
		for (i = 0; i < frm_filtre_agence_accueilli.elements.length; i++) {
			if (frm_filtre_agence_accueilli.elements[i]) {
				if (frm_filtre_agence_accueilli.elements[i].type === 'checkbox') {
					frm_filtre_agence_accueilli.elements[i].checked = true;
				}
			} else {
				alert('Erreur lors du check de la globalité des filtres (voir variable frm_new_agence_accueilli.elements[i])');
			}
		}
	} else {
		alert('Erreur lors du check de la globalité des filtres (voir variable frm_filtre_agence_accueilli)');
	}
}

//Permet de deplacer les agences selectionnées vers un autre dossier que l'actuel
function deplacer_agence_acceuillante_vers_dossier() {
	var cpt = 0, frm = document.getElementById('frm_deplacer_agence_accueillante'), frm_principale = document.getElementById('formulaire'), NbElements = frm_principale.elements.length, iId_fusion_agence_accueillante = document.getElementById('id_fusion_agence_accueillante'), good = 0, i;
    if (frm) {
		if (frm_principale) {
			if (iId_fusion_agence_accueillante) {
				
				for (i = 0; i < NbElements; i++) {
					if (frm_principale.elements[i]) {
						if (frm_principale.elements[i].name === "chk_fusion") {
							if (frm_principale.elements[i].checked) {
								if (iId_fusion_agence_accueillante.value === 0) {
									iId_fusion_agence_accueillante.value = frm_principale.elements[i].value;
								} else {
									iId_fusion_agence_accueillante.value = iId_fusion_agence_accueillante.value + "," + frm_principale.elements[i].value;
								}
							}
						}
					}
				}
				good = 1;
			} else {
				alert("Erreur lors du déplacement d\'un dossier (voir iId_fusion_agence_accueillante");
			}
		} else {
			alert("Erreur lors du déplacement d\'un dossier (voir frm_principale");
		}
	} else {
		alert("Erreur lors du déplacement d\'un dossier (voir frm");
	}
    
	if (good === 1) {
		frm.submit();
	}
}


//Permet d'interdire la saisie a vide pour le champ de recherche des agences accueilleis	
function affiche_liste() {
	var txt_search = document.getElementById('Txt_search'), rentre_ds_macro = document.getElementById('rentre_ds_macro'), retour;
	
    if (rentre_ds_macro) {
		if (txt_search) {
			if (txt_search.value === '') {
				alert("Veuillez saisir une valeur dans la zone de texte.");
				retour = false;
			} else {
				rentre_ds_macro.value = 1;
				retour = true;
			}
		} else {
			alert("Erreur lors de la recherche d\'agence accueillie (voir variable txt_search )");
			retour = false;
		}
	}
	return retour;
}


//Permet d'afficher le div permettant d'afficher la liste des dossiers pour le deplacement de fusion
//Param
//monurl:variable contenant l'url de destionation
//mesparametres:Variable contenant la liste des parametres de l'url
function affiche_liste_dossier(monurl, mesparametres) {
    /*var myAjax1 = new Ajax.Updater(
            'liste_dossier',
            monurl,
            {
                method: 'get',
                parameters: mesparametres
            }
        );*/
    $.ajax({
        type: "GET",
        data: mesparametres,
        url: monurl,
        cache: false,
        success: function (html) { // si la requête est un succès
            $("#liste_dossier").html(html);
        },
        error: function (html) {
            alert("Une erreur est survenue dans la fonction 'affiche_liste_dossier'");
        }
    });
}

//Permet d'inialiser l'affichage de la liste des dossiers pour le deplacement de fusion(s)
function affiche_dossier() {
	var lst = document.getElementById('Lst_critere_deplacement'), txt_search = document.getElementById('Txt_search_dossier'), retour;
	
    if (lst) {
		if (txt_search) {
			if (lst.value !== 0) {
				if (txt_search.value !== '') {
					affiche_liste_dossier('incl_fusion_liste_dossier_pour_deplacement_fusion.htm', 'Val_champ=' + lst.value + "&txt_search_dossier=" + txt_search.value);
					retour = false;
				} else {
					alert("Veuilez saisir une valeur dans la zone de texte");
					retour = false;
				}
			} else {
				alert("Veuillez selectionner un critère de recherche dans la liste");
				retour = false;
			}
		} else {
			alert("Erreur lors de l'affichage de la liste des dossiers pour le deplacements d'une ou des agence(s) accueillantes cochés (voir variable txt_search)");
			retour = false;
		}
	} else {
		alert("Erreur lors de l'affichage de la liste des dossiers pour le deplacements d'une ou des agence(s) accueillantes cochés (voir variable lst)");
		retour = false;
	}
	return retour;
}
	

//Permet le rechargement de cette page a a partir d'une page fille style popup par exemple
function childReload(message) {
	if (message.length !== 0) {
        alert(message);
    }
	window.location.href = window.location.href;
}


//Permet de supprimer une agence accueilli
//Param
	//fusion_agence: est l'idfuion_agence
function supprime_agence_acceuilli(fusion_agence) {
	var idfusionagenceaccueilli = fusion_agence.name, iIdfusionagenceaccueilli = document.getElementById('idfusionagenceaccueilli'), frm_fusion = document.getElementById('formulaire');
    
	if (frm_fusion) {
		if (idfusionagenceaccueilli) {
            iIdfusionagenceaccueilli.value = idfusionagenceaccueilli;
			document.formulaire.u.value = "GDP2:SUPPR_FUSIONS_ACCUEILLI";
			var texte = "Etes-vous sur de vouloir supprimer cette agence ?";
			if (confirm(texte)) {
				frm_fusion.submit();
			}
		} else {
			alert('Erreur lors de la suppresion d\'une agence accueillie(Voir variable iIdfusion_agence)');
		}
	} else {
		alert('Erreur lors de la suppresion d\'une agence accueillie(Voir variable frm_fusion)');
	}
}


//Supprime les agence acceuillante ainsi que leurs agences accueillies
function supprime_agence_accueillante(unique, id) {
	var frm_principale = document.getElementById('formulaire'), chk_fusion = document.getElementById('chk_fusion'), idfusionagenceaccueillante = document.getElementById('idfusionagenceaccueillante');
	
    if (frm_principale) {
		if (idfusionagenceaccueillante) {
			if (unique === 1) {
                idfusionagenceaccueillante.value = id;
			}
			document.formulaire.u.value = "GDP2:SUPPR_FUSIONS";
			var texte = "Etes-vous sur de vouloir supprimer ces ou cette agence(s) ?";
			if (confirm(texte)) {
				frm_principale.submit();
			}
		} else {
			alert('erreur lors de la suppression des agences accuellantes cochées(Voir variable idfusionagenceaccueillante)');
		}
	} else {
		alert('erreur lors de la suppression des agences accuellantes cochées(Voir variable frm_principale)');
	}
}


//Permet d'ouvrir une popup permettant d'ajouter une nouvelle agence accueilli
//Param
	//idagence_accueillante:est l'id de l'agence accueillante
function ajoute_new_agence_accueilli(idagence_accueillante) {
	popup('new_agence_accueilli', 'incl_fusion_new_agence_accueilli.htm?idagence_accueillante=' + idagence_accueillante, 800, 800, false);
}

//Permet d'ouvrir une popup permettant de filtrer les agences accueillis
function ajoute_filtre(idagence_accueilli) {
	popup('Ajoute_filtre', 'fusion_filtre_agence_accueillie.htm?idfusionagenceaccueilli=' + idagence_accueilli, 400, 400, false);
}

//Permet d'afficher une agence acceuilli
//param
//idfusionagenceaccueillante:es l'idfusionagenceaccueillante
function affiche_agence_accueilli(iIdfusionagenceaccueillante) {
	var bt_reduction = document.getElementById('Bt_reduction_' + iIdfusionagenceaccueillante), idfusionagenceaccueillante = document.getElementById('idfusionagenceaccueillante'), div_agence_accueilli = document.getElementById('agence_accueilli_' + iIdfusionagenceaccueillante);
	
    if (idfusionagenceaccueillante) {
		if (bt_reduction) {
			if (div_agence_accueilli) {
				if (bt_reduction.value === '-') {
					div_agence_accueilli.style.display = 'none';
					//new Effect.BlindUp	('agence_accueilli_'+iIdfusionagenceaccueillante, 0.5);
					bt_reduction.value = '+';
				} else {
					bt_reduction.value = '-';
					div_agence_accueilli.style.display = 'block';
					idfusionagenceaccueillante.value = iIdfusionagenceaccueillante;
					//new Effect.BlindDown('agence_accueilli_'+iIdfusionagenceaccueillante, 0.5);
				}
			} else {
				alert('Erreur lors de l\'affichage d\'une nouvelle agence accueilli(Voir variable div_agence_accueilli)');
			}
		} else {
			alert('Erreur lors de l\'affichage d\'une nouvelle agence accueilli(Voir variable bt_reduction)');
		}
	} else {
		alert('Erreur lors de l\'affichage d\'une nouvelle agence accueilli(Voir variable idfusionagenceaccueillante)');
	}
}

//Permet d'afficher lle div permettant l'ajout d'une nouvelle a gence accueillante
//Param
//monurl:variable contenant l'url de destionation
//mesparametres:Variable contenant la liste des parametres de l'url
function affiche_agence_acceuillante(monurl, mesparametres) {
	/*var myAjax1 = new Ajax.Updater(
        'agence_accueillante',
		monurl,
		{
			method: 'get',
			parameters: mesparametres
		}
	);*/
    $.ajax({
        type: "GET",
        data: mesparametres,
        url: monurl,
        cache: false,
        success: function (html) { // si la requête est un succès
            $("#agence_accueillante").html(html);
        },
        error: function (html) {
            alert("Une erreur est survenue dans la fonction 'affiche_agence_acceuillante'");
        }
    });
}

//Permet d'initialiser le div contenant les informations permettant l'ajout d'une nouvelle agence accueillante
function affiche_new_agence_accueillante() {
	var div_agence_accueillante = document.getElementById('agence_accueillante'), Btn_new_agence_accueillante = document.getElementById('Btn_new_agence_accueillante'), add_agence_accueillie = document.getElementById('add_agence_accueillie'), annul_agence_accueillie = document.getElementById('annul_agence_accueillie');
	
	if (div_agence_accueillante) {
		if (Btn_new_agence_accueillante) {
			if (add_agence_accueillie.style.display === 'block') {
				div_agence_accueillante.style.display = 'block';
				add_agence_accueillie.style.display = 'none';
				annul_agence_accueillie.style.display = 'block';
				affiche_agence_acceuillante('incl_fusion_new_agence_accueillante.htm', '');
			} else if (add_agence_accueillie.style.display === 'none') {
				div_agence_accueillante.style.display = 'none';
				add_agence_accueillie.style.display = 'block';
				annul_agence_accueillie.style.display = 'none';
			}
		} else {
			alert('erreur lors de l\'affichage du div pour une nouvelle agence accueillante(Voir variable Btn_new_agence_accueillante)');
		}
	} else {
		alert('erreur lors de l\'affichage du div pour une nouvelle agence accueillante(Voir variable div_agence_accueillante)');
	}
}

//Permet d'afficher le div permettant le deplacement d'une fusion vers un autre dossier
//Param
//monurl:variable contenant l'url de destionation
//mesparametres:Variable contenant la liste des parametres de l'url
function affiche_deplace_fusion(monurl, mesparametres) {
	/*var myAjax1 = new Ajax.Updater(
		'deplacer_fusion',
		monurl,
		{
			method: 'get',
			parameters: mesparametres
		}
	);*/
    $.ajax({
        type: "GET",
        data: mesparametres,
        url: monurl,
        cache: false,
        success: function (html) { // si la requête est un succès
            $("#deplacer_fusion").html(html);
        },
        error: function (html) {
            alert("Une erreur est survenue dans la fonction 'affiche_deplace_fusion'");
        }
    });
}

//Permet d'initialiser le div contenant les informations de deplacement de fusions vers un autre dossier
function affiche_deplacer_fusion_vers_dossier() {
	var div_deplacer_fusion = document.getElementById('deplacer_fusion'), Btn_deplacer_fusion = document.getElementById('Btn_deplacer_agence'), move_agence_accueillie = document.getElementById('move_agence_accueillie'), annulMove_agence_accueillie = document.getElementById('annulMove_agence_accueillie');
	if (div_deplacer_fusion) {
		if (Btn_deplacer_fusion) {
			if (move_agence_accueillie.style.display === 'block') {
				div_deplacer_fusion.style.display = 'block';
				move_agence_accueillie.style.display = 'none';
				annulMove_agence_accueillie.style.display = 'block';
				affiche_deplace_fusion('incl_fusion_deplacer_fusion.htm', '');
			} else if (move_agence_accueillie.style.display === 'none') {
				move_agence_accueillie.style.display = 'block';
				annulMove_agence_accueillie.style.display = 'none';
				div_deplacer_fusion.style.display = 'none';
			}
		} else {
			alert('erreur lors de l\'affichage du div pour le deplacement d\'une fusion(Voir variable Btn_deplacer_fusion)');
		}
	} else {
		alert('erreur lors de l\'affichage du div pour le deplacement d\'une fusion(Voir variable div_deplacer_fusion)');
	}
}