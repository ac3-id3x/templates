/*jshint devel: true, jquery: true*/
/*jslint vars: true, devel: true, plusplus: true, browser: true*/
/*global $, jQuery, alert, Ajax*/


function getidfournisseur(id_elt_fournisseur) {
    "use strict";
	var elt_idfournisseur = $(id_elt_fournisseur), idfournisseur = 0;

	if (elt_idfournisseur) {
		//idfournisseur = Number( elt_idfournisseur.options[ elt_idfournisseur.selectedIndex ].value );
		return Number(elt_idfournisseur.val());
		//alert("id : " + idfournisseur );
	}
	//return idfournisseur;
}

function removechildren(idorelt) {
    "use strict";
	var elt = $(idorelt);
	if (elt) {
		// DÃ©truire tous les noeuds fils (noeuds textes)
//		while( elt.childNodes.length > 0 ) {
//			elt.removeChild( elt.childNodes[0] );
//		}
		elt.children().remove();
	}
}

function submitButton() {
    "use strict";
	var idfournisseur = getidfournisseur("#idfournisseur"), btn = $("#submit_button");
	if (btn) {
		if (idfournisseur !== 2) {
			//btn.disabled = true;
			btn.prop('disabled', true);
		} else {
			//btn.disabled = false;
			btn.prop('disabled', false);
		}
	}
}

function clearMasterAccount() {
    "use strict";
	var elt_text = $("#elt_masteraccount_tdl");
	if (elt_text) {
		removechildren(elt_text);
	}
}

function clearAccount() {
    "use strict";
	var elt_text = $("#elt_account_tdl");
	if (elt_text) {
		removechildren(elt_text);
	}
}

function clearCampaign() {
    "use strict";
	var elt_text = $("#elt_campaign_tdl");
	if (elt_text) {
		removechildren(elt_text);
	}
}

function clearAdgroups() {
    "use strict";
	var elt_text = $("#elt_group_tdl");
	if (elt_text) {
		removechildren(elt_text);
	}
}

function clearEverything() {
    "use strict";
	clearMasterAccount();
	clearAccount();
	clearCampaign();
	clearAdgroups();
	submitButton();
}

function selectCompte(id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur);
	if ((idfournisseur === 1 || idfournisseur === 4) && google_account_name !== 'undefined') {

		//alert($("#accountidname option").filter(":contains('"+google_account_name+"')").val());
		
		$("#accountidname option").filter(":contains('" + google_account_name + "')").prop('selected', true);
		$("#accountid").val($("#accountidname option:selected").filter(":contains('" + google_account_name + "')").val().split('|')[0]);
	}
}

function show_hide(id_elt_fournisseur) {
    "use strict";
	var elt = $("#maj_ajout_compte_tdl"), idfournisseur = getidfournisseur(id_elt_fournisseur), elt_version = $("version_1"), version = 2;
	
	//Détection de la version du formulaire : si l'ancien élément (input hidden) maj_ajout est présent : version 1
	// Sinon : version 2.

	if (elt_version !== null) {
		version = 1;
	}

	if (version === 1) {
		if (idfournisseur === 1) {
			//Google & Google V2
			$("#rowlogin").show();
			$("#rowpass").show();
			$("#rowcompte").show();
			$("#rowemail").show();
			$("#rowgroupe").show();
			if ($("#login_tdl").val() === "refclients") {
				$("#login_tdl").val("");
			}
			if ($("#pass_tdl").val() === "log4all") {
				$("#pass_tdl").val("");
			}
			if ($("#email_tdl").val() === "tetedeliste-clients@poliris.com") {
				$("#email_tdl").val("");
			}
		}
	} else {
		clearEverything();
		if (idfournisseur === 1) {
			//Google & Google V2
            $("#rowlogin").show();
            $("#rowpass").show();
			$("#rowcomptemaster").hide();
			$("#rowcompteV2").show();
			$("rowcampagne").show();
			$("rowgroupeV2").show();
			$("#rowemail").show();
			$("#login").show();
			
            if ($("#login_tdl").val() === "refclients") {
                $("#login_tdl").val("");
            }
            if ($("#pass_tdl").val() === "log4all") {
                $("#pass_tdl").val("");
            }
            if ($("#email_tdl").val() === "tetedeliste-clients@poliris.com") {
                $("#email_tdl").val("");
            }
		}
	}
}

function reportError(request) {
    "use strict";
	alert('Sorry. There was an error in ' + request + ' function.');
}

function cleantext() {
    "use strict";
	removechildren("#textlogin");
	removechildren("#textaccount");
	removechildren("#textmasteraccount");
	removechildren("#textcampaign");
	removechildren("#textadgroup");
	removechildren("#rowcomptemaster");
	removechildren("#elt_account_tdl");
}

function checklogin(id_elt_login, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("textlogin");
	if (idfournisseur && elt_text) {
		if (elt_text) {
			removechildren(elt_text);
			//new Insertion.Top(elt_text, 'Vérification login en cours...');
            elt_text.html('Vérification login en cours...');
		}
		var url = '/compte_tdl_check.html';
		var pars = 'step=1' +
			'&idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val());
		//alert( url+ "?" + pars );
		var myAjax = new Ajax.Updater(
			elt_text,
			url,
			{method: 'get', parameters: pars, onFailure: reportError}
		);
	}
}

function checkpassword(id_elt_login, id_elt_password, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("textpassword");
	if (idfournisseur && elt_text) {
		if (elt_text) {
			removechildren(elt_text);
			//new Insertion.Top( elt_text, 'Vérification password en cours...');
            elt_text.html('Vérification password en cours...');
		}
		var url = '/compte_tdl_check.html';
		var pars = 'step=2' +
			'&idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val());
		//alert( url+ "?" + pars ); 
		var myAjax = new Ajax.Updater(
			elt_text,
			url,
			{method: 'get', parameters: pars, onFailure: reportError}
		);
	}
}

function checkcompte(id_elt_login, id_elt_password, id_elt_account, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("textaccount");
	if (idfournisseur && elt_text) {
		if (elt_text) {
			removechildren(elt_text);
			//new Insertion.Top( elt_text, 'Vérification compte en cours...');
            elt_text.html('Vérification compte en cours...');
		}
		var url = '/compte_tdl_check.html';
		var pars = 'step=3' +
			'&idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&account=' + encodeURIComponent($(id_elt_account).val());
		//alert( url+ "?" + pars ); 
		var myAjax = new Ajax.Updater(
			elt_text,
			url,
			{method: 'get', parameters: pars, onFailure: reportError}
		);
	}
}

function checkgroupe(id_elt_login, id_elt_password, id_elt_account, id_elt_groupe, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("#textadgroup");
	if (idfournisseur && elt_text) {
		if (elt_text) {
			removechildren(elt_text);
			//new Insertion.Top( elt_text, 'Vérification groupe en cours...');
            elt_text.html('Vérification groupe en cours...');
		}
		var url = '/compte_tdl_check.html';
		var pars = 'step=4' +
			'&idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&account=' + encodeURIComponent($(id_elt_account).val()) +
			'&adgroup=' + encodeURIComponent($(id_elt_groupe).val());
		//alert( url+ "?" + pars ); 
		var myAjax = new Ajax.Updater(
			elt_text,
			url,
			{method: 'get', parameters: pars, onFailure: reportError}
		);
	}
}

function submit_formulaire(id_elt_formulaire) {
    "use strict";
	var i, elt, ok = true, warn = false, error = false, code = 0, abort = false;
    
	if (Ajax.activeRequestCount === 0) {
		for (i = 0; i < 4; i++) {
			elt = document.getElementById("step_" + (1 + i));
			if (elt) {
				code = Number(elt.value);
				if (code < 0) {
				    error = true;
				} else if (code > 0) {
					warn = true;
				}
			}
		}
		if (error) {
			alert("Il y a des erreurs de vérification, merci de les corriger");
			abort = true;
		} else if (warn) {
			abort = confirm("Il y a des avertissements, voulez-vous les corriger ?");
		}
		if (!abort) {
			elt = document.getElementById(id_elt_formulaire);
			if (elt) {
				if (submitFormV2()) {
					elt.submit();
				}
			} else {
				alert("Attention : impossible de trouver le formulaire...");
			}
		}
	} else {
		alert("Patientez un peu... des vérifications sont en cours. Réessayez dans quelques secondes svp.");
	}
}

function getCachMasterAccounts(id_elf_caching, id_elt_login, id_elt_password, id_elt_fournisseur) {
	"use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("#elt_masteraccount_tdl");
	clearMasterAccount();

	if (idfournisseur && elt_text) {
		//new Insertion.Top( elt_text, 'Récupération comptes master en cours...');
		elt_text.html('R&eacute;cup&eacute;ration comptes master en cours...');
		var url = '/compte_tdl_getmasteraccounts.html';
		var pars = 'idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&iscach=' + encodeURIComponent($(id_elf_caching).val());
//		var myAjax = new Ajax.Updater(
//			elt_text, 
//			url, 
//			{method: 'get', parameters: pars, onFailure: reportError, evalScripts: true}
//		);
			
        $.ajax({
            type: "GET",
            data: pars,
            url: url,
            cache: false,
            error: function (html) {
                reportError("getCachMasterAccounts");
            }
		});
	}
}

function getMasterAccounts(id_elt_login, id_elt_password, id_elt_fournisseur) {
    "use strict";
	getCachMasterAccounts('#caching_tdl', id_elt_login, id_elt_password, id_elt_fournisseur);
}

function getCachAccounts(id_elf_caching, id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("#elt_account_tdl");
	clearAccount();
	if (idfournisseur && elt_text) {
		elt_text.html('R&eacute;cup&eacute;ration comptes en cours ...');
		var url = '/compte_tdl_getaccounts.html';
		var pars = 'idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&masteraccount=' + encodeURIComponent($(id_elt_masteraccount).val()) +
			'&iscach=' + encodeURIComponent($(id_elf_caching).val());

        $.ajax({
            type: "GET",
            data: pars,
            url: url,
            cache: false,
            success: function (html) { // si la requête est un succès
                $("#elt_account_tdl").html(html);
            },
            error: function (html) {
                reportError("getCachAccounts");
            }
        });
	}
}

function getAccounts(id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_fournisseur) {
    "use strict";
	getCachAccounts('#caching_tdl', id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_fournisseur);
}

function updateAccount(id_elt_fournisseur, id_elt_login, id_elt_password, id_elt_account,  id_elt_masteraccount, id_elt_newaccountname) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("#elt_account_tdl");
	
	if (idfournisseur && elt_text && ($(id_elt_masteraccount).val() >= 0)) {
		var url = '/compte_tdl_updateaccounts.html';
		var pars = 'idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&account=' + encodeURIComponent($(id_elt_account).val()) +
			'&masteraccount=' + encodeURIComponent($(id_elt_masteraccount).val()) +
			'&nameaccount=' + encodeURIComponent($(id_elt_newaccountname).val()) +
			'&iscach=' + encodeURIComponent('false');
		clearAccount();
		//new Insertion.Top( elt_text, 'Rafraichissement des comptes en cours...');
		elt_text.html('Rafraichissement des comptes en cours...');
//		var myAjax = new Ajax.Updater(
//			elt_text, 
//			url, 
//			{method: 'get', parameters: pars, onFailure: reportError, evalScripts: true}
//		);
		$.ajax({
			type : "GET",
			data : pars,
			url	 : url,
			cache: false,
            success: function (html) { // si la requête est un succès
                $("#elt_account_tdl").html(html);
            },
            error: function (html) {
                reportError("getCachAccounts");
            }
		});
	}
}
function createAccount(id_parent, id_elt_fournisseur, id_elt_login, id_elt_password, id_elt_emailaccount, id_elt_nameaccount) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), txtlogin = $(id_elt_login), txtpass = $(id_elt_password), txtemail = $(id_elt_emailaccount), txtname = $(id_elt_nameaccount), elt_text = $(id_parent);
    
	if (idfournisseur && txtlogin && txtpass && txtemail && txtname) {
		var url = '/compte_tdl_createaccount.html';
		var pars = 'idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&emailaccount=' + encodeURIComponent($(id_elt_emailaccount).val()) +
			'&nameaccount=' + encodeURIComponent($(id_elt_nameaccount).val());

        $.ajax({
			type : "GET",
			data : pars,
			url	 : url,
			cache: false,
            success: function (html) { // si la requête est un succès
                elt_text.html(html);
            },
            error: function (html) {
                reportError("createAccount");
            }
		});
	}
}

function getCachCampaigns(id_elf_caching, id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_account, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("#elt_campaign_tdl");
	
	/*alert( "getCampaigns" );
	alert( 'idfournisseur=' + encodeURIComponent( idfournisseur ) );
	alert( '&login=' + encodeURIComponent( $( id_elt_login ).val() ) );
	alert( '&password=' + encodeURIComponent( $( id_elt_password ).val() ) );
	alert( '&account=' + encodeURIComponent( $( id_elt_account ).val() ) );
	alert('&iscach=' + encodeURIComponent( $(id_elf_caching).val() ) );
	*/
	
	clearCampaign();
    
	if (idfournisseur && elt_text && ($(id_elt_account).val() > 0)) {
		elt_text.html('R&eacute;cup&eacute;ration campagnes en cours...');
		var url = '/compte_tdl_getcampaigns.html';
		var pars = 'idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&masteraccount=' + encodeURIComponent($(id_elt_masteraccount).val()) +
			'&account=' + encodeURIComponent($(id_elt_account).val()) +
			'&iscach=' + encodeURIComponent($(id_elf_caching).val());

		$.ajax({
            type: "GET",
            data: pars,
            url: url,
            cache: false,
            success: function (html) { // si la requête est un succès
                elt_text.html(html);
            },
            error: function (html) {
                reportError("getCachCampaigns");
            }
		});
	}
}

function getCampaigns(id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_account, id_elt_fournisseur) {
    "use strict";
	getCachCampaigns('#caching_tdl', id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_account, id_elt_fournisseur);
}

function getCachAdGroups(id_elf_caching, id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_account, id_elt_campaign, id_elt_fournisseur) {
    "use strict";
	var idfournisseur = getidfournisseur(id_elt_fournisseur), elt_text = $("#elt_group_tdl");
	
	clearAdgroups();
    
	if (idfournisseur && elt_text && ($(id_elt_campaign).val() > 0)) {
		elt_text.html('R&eacute;cup&eacute;ration groupes d\'annonce en cours...');
		var url = '/compte_tdl_getadgroups.html';
		var pars = 'idfournisseur=' + encodeURIComponent(idfournisseur) +
			'&login=' + encodeURIComponent($(id_elt_login).val()) +
			'&password=' + encodeURIComponent($(id_elt_password).val()) +
			'&masteraccount=' + encodeURIComponent($(id_elt_masteraccount).val()) +
			'&account=' + encodeURIComponent($(id_elt_account).val()) +
			'&campaign=' + encodeURIComponent($(id_elt_campaign).val())	+
			'&iscach=' + encodeURIComponent($(id_elf_caching).val());

		$.ajax({
			type : "GET",
			data : pars,
			url : url,
			cache: false,
			success: function (html) { // si la requête est un succès
				elt_text.html(html);
			},
			error: function (html) {
				reportError("getCachAdGroups");
			}
		});
	}
}

function getAdGroups(id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_account, id_elt_campaign, id_elt_fournisseur) {
    "use strict";
	getCachAdGroups('#caching_tdl', id_elt_login, id_elt_password, id_elt_masteraccount, id_elt_account, id_elt_campaign, id_elt_fournisseur);
}

function getLogin(idfournisseur, login, pass) {
    "use strict";
	var elt_fournisseur = $("#idfournisseur");
    
	if (elt_fournisseur) {
        elt_fournisseur.val(idfournisseur);
	}
	var elt_login = document.getElementById("login_tdl"), elt_pass = document.getElementById("pass_tdl"), elt_compte = document.getElementById("compte_tdl");
        
	if (elt_login) {
		elt_login.value = login;
		elt_login.select();
	}
	
	if (elt_pass) {
		elt_pass.value = pass;
		elt_pass.select();
	}
	
	if (elt_compte) {
		elt_compte.select();
	}
}

function submitForm() {
    "use strict";
    var form = $("#formulaire"),  idfournisseur = getidfournisseur("#idfournisseur"), result = false;
    
    if (idfournisseur !== 2) {
        var elt = $("#id3X_post_method");
        
        if (elt) {
            elt.val("GDP2:AJOUT_MAJ_COMPTE_TDL");
            result = true;
        }
    } else {
        result = true;
    }
    form.submit();
    return result;
}


function splitAndUpdate(from, to1, to2) {
    "use strict";
	var elt_from = $(from), elt_to1 = $(to1), elt_to2 = $(to2);

	if (elt_from && elt_to1 && elt_to2) {
		var values = elt_from.val().split('|');
    elt_to1.val(values.shift());
		elt_to2.val(values.join('|'));
	}
}

function splitAndUpdateTbl(from, to1, to2, toall) {
    "use strict";
	var elt_from = $(from), elt_to1 = $(to1), elt_to2 = $(to2), elt_all = $(toall);
    
	if (elt_from && elt_to1 && elt_to2 && elt_all) {
		elt_all.val(elt_from.val());
		var valuesfirst = elt_from.val().split('@'), values = valuesfirst[0].split('|');
		elt_to1.val(values.shift());
		elt_to2.val(values.join('|'));
	}
}

function splitUpdateAccount(id_elt_idnameaccount, id_elt_idaccount, id_elt_nameaccount, id_elt_newnameaccount) {
    "use strict";
	var elt_from = $(id_elt_idnameaccount), elt_to1 = $(id_elt_idaccount), elt_to2 = $(id_elt_nameaccount), elt_to3 = $(id_elt_newnameaccount);

	if (elt_from && elt_to1 && elt_to2) {
		var values = elt_from.val().split('|');
		elt_to1.val(values.shift());
		elt_to2.val(values.join('|'));
        
		if (elt_to3 !== null) {
			elt_to3.val(elt_to2.val());
    }
	}
}

function submitFormUptPass() {
    "use strict";
    var form = document.getElementById('formulaire'), idfournisseur = getidfournisseur("#update_idfrs"), result = false;
    
	if (idfournisseur !== 2) {
		var elt = $("#id3X_post_method");
		if (elt) {
			elt.value = "GDP2:UPDATE_PASSWORD_COMPTE_TDL";
			result = true;
		}
	} else {
		result = true;
    }
    form.submit();
	return result;
}