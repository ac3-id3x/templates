var $j = jQuery.noConflict();

function validForm(nouveauBien) {
	var validation = false,
	    formObject,
        typeBien,
        errors = new Array();

	// Test all the mandatory fields
	if (formObject = document.getElementById('bien_vendu_edit')) {

		// Save Type Bien Vendu
		for (var i = 0; i <= formObject.idTypeBienVendu.length - 1; i++) {
			if (formObject.idTypeBienVendu[i].selected) {
				typeBien = formObject.idTypeBienVendu[i].value;
			}
		}

		// Vente tiers
		for (var i = 0; i <= formObject.siVenteTiers.length - 1; i++) {
			if (formObject.siVenteTiers[i].selected) {
				validation = true;
			}
		}
		if (! validation) {
			errors.push('Veuillez indiquer si cette vente a &eacute;t&eacute; r&eacute;alis&eacute;e par un tiers ou votre agence');
		}
		validation = false;

		// Prix de vente
		if (! formObject.prixVenteFAI.value) {
			errors.push('Veuillez indiquer le prix de vente');
		}

		// Date mutation
		if (! formObject.dtMutation.value) {
			errors.push('Veuillez indiquer la date de signature de vente');
		}

		// champs non terrain ou parkings
		if (typeBien != 3 && typeBien != 4) {
			// Surfaces
			if (! formObject.surfaceHabitable.value && ! formObject.surfaceCarrez.value) {
				errors.push('Vous devez renseigner au moins un des deux champs, Surface habitable et/ou Surface Carrez');
			}
	
			// Nombre de pièces (sauf pour terrains et parkings)
			if (! formObject.nbPieces.value) {
				errors.push('Veuillez indiquer le nombre de pi&egrave;ces');
			}
		}

		// Checks terrains
		if (typeBien == 4) {
			// surface
			if (! formObject.surfaceTerrain1.value) {
				errors.push('Veuillez indiquer la surface du terrain');
			}

			// &eacute;tat terrain
			for (var i = 0; i <= formObject.siTerrainViabilise.length - 1; i++) {
				if (formObject.siTerrainViabilise[i].checked) {
					validation = true;
				}
			}
			if (! validation) {
				errors.push('Veuillez indiquer si ce terrain est viabilis&eacute;');
			}
			validation = false;
	
			// &eacute;tat terrain
			for (var i = 0; i <= formObject.siTerrainConstructible.length - 1; i++) {
				if (formObject.siTerrainConstructible[i].checked) {
					validation = true;
				}
			}
			if (! validation) {
				errors.push('Veuillez indiquer si ce terrain est constructible');
			}
			validation = false;
		}

		// Adresse
		if (! formObject.adresse.value) {
			errors.push("Veuillez renseigner l'adresse");
		}

		// CP
		if (! formObject.cp.value) {
			errors.push('Veuillez renseigner le code postal');
		}

		// Ville
		if (! formObject.ville.value) {
			errors.push('Veuillez renseigner la ville o&ugrave; est situ&eacute; ce bien');
		}

		// Test value types
		// Prix offre
		if (formObject.prixOffreFAI) {
			// prix de vente entre 20 et 200% prix d'offre
			var _20percent = formObject.prixOffreFAI * 0.2,
			    _200percent = formObject.prixOffreFAI * 2;
			if (formObject.prixVenteFAI >= _20percent && formObject.prixVenteFAI <= _200percent) {
				errors.push('Le prix de vente doit être compris entre 20% et 200% du prix de mise en vente');
			}
		}

		// champs non terrains ou parkings
		if (typeBien != 3 && typeBien != 4) {
			// Relations surfaces
			if (formObject.surfaceCarrez.value && formObject.surfaceHabitable.value) {
				if (formObject.surfaceCarrez.value > formObject.surfaceHabitable.value) {
					errors.push('La surface Carrez doit être inf&eacute;rieure ou &eacute;gale &agrave; la surface habitable');
				}
			}
			// Relations surfaces
			if (formObject.surfaceTerrain.value && formObject.surfaceJardin.value) {
				if (formObject.surfaceJardin.value > formObject.surfaceTerrain.value) {
					errors.push('La surface jardin doit être inf&eacute;rieure ou &eacute;gale &agrave; la surface terrain');
				}
			}
			// Etages pour appartements
			if (typeBien == 1) {
				if (! formObject.etage.value) {
					errors.push("Veuillez renseigner l'&eacute;tage");
				}
				if (formObject.etage.value && formObject.nbEtages.value && (parseInt(formObject.etage.value) > parseInt(formObject.nbEtages.value))) {
					errors.push("L'&eacute;tage ne peut être sup&eacute;rieur au nombre d'&eacute;tages");
				}
			}

			// check surface jardins/terrains pour maisons
			if (typeBien == 2) {
				if (! formObject.surfaceJardin.value && ! formObject.surfaceTerrain.value) {
					errors.push('Vous devez renseigner au moins un des deux champs, Surface terrain et/ou Surface jardin');
				}
			}
		}
	}
	if (errors.length > 0) {
		displayErrors(errors);
		return false;
	} else {
		// gestion terrain
		if (formObject.surfaceTerrain1.value && typeBien == 4) {
			formObject.surfaceTerrain.value = formObject.surfaceTerrain1.value;
		} else if (formObject.surfaceTerrain2.value && typeBien != 4) {
			formObject.surfaceTerrain.value = formObject.surfaceTerrain2.value;
		}
		if (formObject.surfaceParking.value && typeBien == 3)  {
			formObject.surfaceHabitable.value = formObject.surfaceParking.value;
		}

		// Validation
		if (nouveauBien) {
			if (confirm("Attention, passer cette annonce en bien vendu la supprimera de la liste et de l'archive annonces. Continuer ?")) {
				return true;
			}
		} else {
			return true;
		}
		return false;
	}
}

function displayErrors(errors) {
	$j('#validErre span').html(errors.join('<br />'));
	$j('#validErre').show();
	scroll(0,0);
}

function display_form(typeBien) {
	switch (typeBien) {
		case '1': // Appartements
			$j('#nbetages').text('Nombre d\'&eacute;tages de l\'immeuble');
			$j('#surf_pour_maisons').removeClass('oblig_input largebox');
			$j('#display_terrains, #display_parkings, #surf_terrain').hide();
			$j('#display_defaults, #apt_etage').show();
			break;
		case '2': // Maisons
			$j('#nbetages').text('Nombre d\'&eacute;tages');
			$j('#surf_pour_maisons').addClass('oblig_input largebox');
			$j('#display_terrains, #apt_etage, #display_parkings').hide();
			$j('#display_defaults, #surf_terrain, #surf_pour_maisons .legende').show();
			break;
		case '3': // Parkings
			$j('#display_terrains, #display_defaults').hide();
			$j('#display_parkings').show();
			break;
		case '4': // Terrains
			$j('#display_defaults, #display_parkings').hide();
			$j('#display_terrains').show();
			break;
		default: // Everything else
			$j('#nbetages').text('Nombre d\'&eacute;tages');
			$j('#surf_pour_maisons').removeClass('oblig_input');
			$j('#display_terrains, #apt_etage, #display_parkings, #surf_pour_maisons .legende').hide();
			$j('#display_defaults, #surf_terrain').show();
			break;
	}
}

$j(document).ready(function () {
	var displayTypeBien = '1';
	if ($j('#display_typeBien').val()) {
		displayTypeBien = $j('#display_typeBien').val();
	}
	display_form(displayTypeBien);

	$j('#idTypesBiens').change(function () {
		var typeBien = $j(this).val();
		display_form(typeBien);
	});
});