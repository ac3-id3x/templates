
function biens_vendus_init() {
	var invalidesQry = false;
	tabSwitcher();
	var sortDir = 'descending';
	var sortImg = 'th_sorted_arrow_down';

	$j('.ka_address').mouseover(function () {
		$j(this).find('.address_tooltip').show();
	});

	$j('.ka_address').mouseout(function () {
		$j(this).find('.address_tooltip').hide();
	});

	// Handle URL and Sorting
	$j('#ka_liste_biens_tabs div').click(function () {

		var thisPointer = $j(this);

		// find out if one of the tab has been clicked - defaults to agency's sales // not used right now
		var typeliste = 1;
		if ($j(this).hasClass('ka_amepi_tab')) {
			typeliste = 3;
		}
		if ($j(this).hasClass('ka_tous_biens_tab')) {
			typeliste = 4;
		}

        var qry_page = $j('#qry_page').val();
		var tmp_qry = qry_page.split('&');

		for (var i = 0; i < tmp_qry.length; i++) {
			// Build typeliste qry item if need be
			if (tmp_qry[i].indexOf('typeliste=') > -1) {
				liste = tmp_qry[i].split('=');
				liste[1] = typeliste;
				tmp_qry[i] = liste.join('=');
			}
		}

		qry_page = tmp_qry.join('&');
		$j('#qry_page').val(qry_page);
		// Ajax Call
		$j.ajax({
			type: 'GET',
			url: '/js,ajax,ka_biensvendus.xml',
			data: qry_page,
			dataType: ($j.browser.msie) ? 'text' : 'xml',
			success: function (xml) {
				getXmlInfo(xml);
			},
			error: function () {
				alert('Nos serveurs sont actuellement indisponibles, veuillez réessayer ultérieurement');
			}
		});
	});

	// Sort the table
	$j('#ka_liste_biens th:not(.nosort)').click(function () {

		var thisPointer = $j(this);

		// Find out sort type and direction
		var thisDir = 'descending';
		var thisType = 'typebien';
		thisDir = $j(this).children('.sort_dir').val();
		thisType = $j(this).children('.sort_type').val();

        var qry_page = $j('#qry_page').val();
		var tmp_qry = qry_page.split('&');
		var tri;
		if (qry_page.indexOf('tri=') > -1) {
			for (var i = 0; i < tmp_qry.length; i++) {
				if (tmp_qry[i].indexOf('tri=') > -1) {
					// Rebuild query with new sort
					if (thisDir && thisType) {
						tri = tmp_qry[i].split('=');
						tri_detail = tri[1].split('_');
						tri_detail[0] = thisDir.substring(0, 1);
						tri_detail[1] = thisType;
						tri[1] = tri_detail.join('_');
						tmp_qry[i] = tri.join('=');
					}
				}
			}
			// Rebuild query
			qry_page = tmp_qry.join('&');
		} else {
			// No sort in query
			qry_page += '&tri=' + thisDir.substring(0, 1) + '_' + thisType;
		}
		$j('#qry_page').val(qry_page);

		// Ajax Call
		$j.ajax({
			type: 'GET',
			url: '/js,ajax,ka_biensvendus.xml',
			data: qry_page,
			dataType: ($j.browser.msie) ? 'text' : 'xml',
			success: function (xml) {

				var sort_dir = thisPointer.children('.sort_dir').val();
				// Replace Sort Direction
				if (sort_dir == 'ascending') {
					sortImg = 'th_sorted_arrow_down';
					thisPointer.children('.sort_dir').val('descending');
				} else {
					sortImg = 'th_sorted_arrow_up';
					thisPointer.children('.sort_dir').val('ascending');
				}

				getXmlInfo(xml);

				$j('#ka_liste_biens th').removeClass('sorted').end().find('img').remove();
				thisPointer.addClass('sorted').append('<img src="http://www.selogerpro.com/z/portail/pol/engine/images/killer_app/' + sortImg + '.png" alt="" title="" />');
			},
			error: function () {
				alert('Nos serveurs sont actuellement indisponibles, veuillez réessayer ultérieurement');
			}
		});
	});

	$j('tr.bien_vendu_row').click(function () {
		setUpRows($j(this));
	});
}

function setUpRows(row) {
	var thisIdnum = row.attr('id').substring(14);
	$j('tr.bien_vendu_row').removeClass('active_row');
    $j('td.active_td_bien_vendu').removeClass('active_td_bien_vendu');
	row.addClass('active_row');
    $j('.active_row td:first').addClass('active_td_bien_vendu');
	$j('.detail_bien_vendu, .descriptif_bien_vendu').hide()
	$j('#detail_bien_vendu_' + thisIdnum + ', #descriptif_bien_vendu_' + thisIdnum).show();
}

function parseXml(xml) {
    if ($j.browser.msie) {
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.loadXML(xml);
        xml = xmlDoc;
    }
    return xml;
}

function getXmlInfo(oldXml) {

    var xml = parseXml(oldXml);

	// Get the search parameters
	$j(xml).find('recherche').each(function () {
		_nbr = $j('nbr', this).text();
		_nbrpages = $j('nbrpages', this).text();
		_nbrpages = $j('nbrpages', this).text();
		_page = $j('page', this).text();
		_lienavant = $j('lienavant', this).text();
		_lienarriere = $j('lienarriere', this).text();
		_multipage = $j('multipage', this).text();
	});

	$j('#ka_liste_biens').find("tr:not('.ka_biens_vendus_header')").remove();
	// Get the data
	var newTDs = new Array();
	var iterator = 0;
	var _multipage;
	var checkFirstDetail = false;
	var checkFirstDesc = false;
	var checkFirstRow = false;
	var someGoods = false;

	// Remove previous details and descriptions
	$j('#ka_detail').find(".descriptif_bien_vendu").remove();
	$j('#ka_detailTotal').find(".detail_bien_vendu").remove();

	$j(xml).find('vente').each(function () {

		_idvente = $j('idvente', this).text();
		_siventetiers = $j('siventetiers', this).text();
		_idtypebienvendu = $j('idtypebienvendu', this).text();
		_typebienvendu = $j('typebienvendu', this).text();
		_adresse = $j('adresse', this).text();
		_cp = $j('cp', this).text();
		_ville = $j('ville', this).text();
		_prixoffre = $j('prixoffre', this).text();
		_prixvente = $j('prixvente', this).text();
		_dtcreation = $j('datecreation', this).text();
		_dtmodif = $j('datemodif', this).text();
		_dtsaisie = $j('datesaisie', this).text();
		_dtmutation = $j('datemutation', this).text();
		_surfacehabitable = $j('surfacehabitable', this).text();
		_surfacecarrez = $j('surfacecarrez', this).text();
		_anneeconstruction = $j('anneeconstruction', this).text();
		_surfaceterrain = $j('surfaceterrain', this).text();
		_surfacejardin = $j('surfacejardin', this).text();
		_nbpieces = $j('nbpieces', this).text();
		_nbetages = $j('nbetages', this).text();
		_etage = $j('etage', this).text();
		_siinvalides = $j('siinvalides', this).text();
		_nbbox = $j('nbbox', this).text();
		_nbparkext = $j('nbparkext', this).text();
		_nbparkint = $j('nbparkint', this).text();
		_nbterrasses = $j('nbterrasses', this).text();
		_surfaceterrasse = $j('surfaceterrasse', this).text();
		_nbbalcons = $j('nbbalcons', this).text();
		_surfacebalcon = $j('surfacebalcon', this).text();
		_codebilanconsoenergie = $j('codebilanconsoenergie', this).text();
		_bilanconsoenergie = $j('bilanconsoenergie', this).text();
		_consoenergie = $j('consoenergie', this).text();
		_codebilanemissionsges = $j('codebilanemissionsges', this).text();
		_bilanemissionsges = $j('bilanemissionsges', this).text();
		_emissionsges = $j('emissionsges', this).text();
		_typechauffage = $j('typechauffage', this).text();
		_surfaceannexes = $j('surfaceannexes', this).text();
		_loyer = $j('loyer', this).text();
		_sioccupe = $j('sioccupe', this).text();
		_sicave = $j('sicave', this).text();
		_siascenseur = $j('siascenseur', this).text();
		_sipiscine = $j('sipiscine', this).text();
		_siterrainviabilise = $j('siterrainviabilise', this).text();
		_siterrainconstructible = $j('siterrainconstructible', this).text();
		_etatinterieur = $j('etatinterieur', this).text();
		_etatexterieur = $j('etatexterieur', this).text();
		_descriptif = $j('descriptif', this).text();
		_sieditable = $j('sieditable', this).text();
		_raisoninvalidite = $j('raisoninvalidite', this).text();
        _siafficherweb = $j('siafficherweb', this).text();
        _simutationpassee = $j('simutationpassee', this).text();

		// Set up surface according to type de bien vendu
		if (_idtypebienvendu == 4 && _surfaceterrain) {
			_surface = _surfaceterrain;
		} else {
			if (_surfacecarrez) {
				_surface = _surfacecarrez;
			} else if (_surfacehabitable) {
				_surface = _surfacehabitable;
			} else {
				_surface = '';
			}
		}

		if (_idvente) {
			var invalidBox = '';
			var invalidClass = '';
			if (_siinvalides && _raisoninvalidite) {
				invalidBox += '<div class="invalid_message">' + _raisoninvalidite.replace(/\n/g, '<br />') + '</div>';
				invalidClass += ' ka_invalid';
			}
			if (! checkFirstRow) {
				newTDs[iterator++] = '<tr id="bien_vendu_id_' + _idvente + '" class="bien_vendu_row active_row' + invalidClass + '">';
				checkFirstRow = true;
			} else {
				newTDs[iterator++] = '<tr id="bien_vendu_id_' + _idvente + '" class="bien_vendu_row' + invalidClass + '">';
			}
			newTDs[iterator++] = '	<td>' + _typebienvendu + invalidBox + '</td>';
			newTDs[iterator++] = '	<td>' + _nbpieces + '</td>';
			newTDs[iterator++] = '	<td>' + _surface + '</td>';
			newTDs[iterator++] = '	<td class="ka_address">' + _adresse.substring(0, 10) + '... <div class="address_tooltip">' + _adresse + '<br />' + _cp + ' ' + _ville + '</div></td>';
			newTDs[iterator++] = '	<td>' + _ville + '</td>';
			newTDs[iterator++] = '	<td>' + _prixvente + '</td>';
			newTDs[iterator++] = '	<td>' + _dtmutation + '</td>';
			newTDs[iterator++] = '	<td class="nohover actions_td">';
			if (_sieditable != 0 || _siinvalides == 1) {
				newTDs[iterator++] = '		<a href="/saisie_biens_vendus.htm?idVente=' + _idvente + '">&Eacute;diter</a> | ';
			}
            if (_siafficherweb && _siinvalides != 1) {
                if (_simutationpassee != 0) {
                    if (_siafficherweb == 'True') {
                        newTDs[iterator++] = '      <a href="#" onclick="afficherMasquer(this, ' + _idvente + ', \'' + _siafficherweb + '\'); return false;">Dépublier</a> | ';
                    } else {
                        newTDs[iterator++] = '      <a href="#" onclick="afficherMasquer(this, ' + _idvente + ', \'' + _siafficherweb + '\'); return false;">Publier</a> | ';
                    }
                    newTDs[iterator++] = '      <a href="#" onclick="confirmDel(' + _idvente + ', \'' + window.location.href + '\');">Suppr.</a>';
                } else {
                    newTDs[iterator++] = '      Non publiable | <a href="#" onclick="confirmDel(' + _idvente + ', \'' + window.location.href + '\');">Suppr.</a>';
                }
            } else {
                newTDs[iterator++] = '        <a href="#" onclick="confirmDel(' + _idvente + ', \'' + window.location.href + '\');">Supprimer</a>';
            }
			newTDs[iterator++] = '	</td>';
			newTDs[iterator++] = '</tr>';
	
			// Create the details of the sold good
			var tmpDetail = '';
			if (! checkFirstDetail) {
				tmpDetail += '<div id="detail_bien_vendu_' + _idvente + '" class="detail_bien_vendu" style="display: block;">';
				checkFirstDetail = true;
			} else {
				tmpDetail += '<div id="detail_bien_vendu_' + _idvente + '" class="detail_bien_vendu">';
			}
			tmpDetail += '<h5>Infos diffusées sur SeLoger.com</h5>';
			tmpDetail += '<ul>';
			if (_siventetiers) {
				tmpDetail += '<li>Vente par un tiers: ' + _siventetiers + '</li>';
			}
			if (_prixvente) {
				tmpDetail += '<li>Prix de vente (FAI): ' + _prixvente + '</li>';
			}
			if (_nbpieces) {
				tmpDetail += '<li>Nombre de pièces: ' + _nbpieces + '</li>';
			}
			if (_etage) {
				tmpDetail += '<li>&Eacute;tage: ' + _etage + '</li>';
			}
			if (_siterrainviabilise) {
				tmpDetail += '<li>Terrain viabilisé: ' + _siterrainviabilise + '</li>';
			}
			if (_nbbox) {
				tmpDetail += '<li>Nombre de boxes: ' + _nbbox + '</li>';
			}
			if (_nbparkext) {
				tmpDetail += '<li>Parkings extérieurs: ' + _nbparkext + '</li>';
			}
			if (_nbparkint) {
				tmpDetail += '<li>Parkings intérieurs: ' + _nbparkint + '</li>';
			}
			if (_sicave) {
				tmpDetail += '<li>Cave: ' + _sicave + '</li>';
			}
			if (_siascenseur) {
				tmpDetail += '<li>Ascenseur: ' + _siascenseur + '</li>';
			}
			if (_sipiscine) {
				tmpDetail += '<li>Piscine: ' + _sipiscine + '</li>';
			}
			if (_codebilanconsoenergie && _bilanconsoenergie) {
				tmpDetail += '<li>Bilan consommation d\'énergie: ' + _codebilanconsoenergie + ' - ' + _bilanconsoenergie + '</li>';
			}
			if (_consoenergie) {
				tmpDetail += '<li>Consommation d\'énergie: ' + _consoenergie + '</li>';
			}
			if (_codebilanemissionsges && _bilanemissionsges) {
				tmpDetail += '<li>Bilan émissions GES: ' + _codebilanemissionsges + ' - ' + _bilanemissionsges + '</li>';
			}
			if (_emissionsges) {
				tmpDetail += '<li>&Eacutemissions GES: ' + _emissionsges + '</li>';
			}
			tmpDetail += '</ul>';
			tmpDetail += '<ul>';
			if (_anneeconstruction) {
				tmpDetail += '<li>Année de construction: ' + _anneeconstruction + '</li>';
			}
			if (_surfacehabitable) {
				tmpDetail += '<li>Surface habitable: ' + _surfacehabitable + '</li>';
			}
			if (_surfacecarrez) {
				tmpDetail += '<li>Surface Carrez: ' + _surfacecarrez + '</li>';
			}
			if (_nbetages) {
				tmpDetail += '<li>Nombre d\'étages: ' + _nbetages + '</li>';
			}
			if (_surfaceterrain) {
				tmpDetail += '<li>Surface terrain: ' + _surfaceterrain + '</li>';
			}
			if (_siterrainconstructible) {
				tmpDetail += '<li>Terrain constructible: ' + _siterrainconstructible + '</li>';
			}
			if (_typechauffage) {
				tmpDetail += '<li>Type de chauffage: ' + _typechauffage + '</li>';
			}
			if (_surfacejardin) {
				tmpDetail += '<li>Surface jardin: ' + _surfacejardin + '</li>';
			}
			if (_nbterrasses) {
				tmpDetail += '<li>Nombre de terrasses: ' + _nbterrasses + '</li>';
			}
			if (_surfaceterrasse) {
				tmpDetail += '<li>Surface terrasse(s): ' + _surfaceterrasse + '</li>';
			}
			if (_nbbalcons) {
				tmpDetail += '<li>Nombre de balcons: ' + _nbbalcons + '</li>';
			}
			if (_surfacebalcon) {
				tmpDetail	+= '<li>Surface balcone(s): ' + _surfacebalcon + '</li>';
			}
			if (_sioccupe) {
				tmpDetail += '<li>Occupé: ' + _sioccupe + '</li>';
			}
			if (_loyer) {
				tmpDetail += '<li>Loyer: ' + _loyer + '</li>';
			}
			if (_etatinterieur) {
				tmpDetail += '<li>&Eacute;tat intérieur: ' + _etatinterieur + '</li>';
			}
			if (_etatexterieur) {
				tmpDetail	+= '<li>&Eacute;tat extérieur: ' + _etatexterieur + '</li>';
			}
			tmpDetail += '</ul>';
            if (_adresse || _prixoffre) {
                tmpDetail += '<div class="clear"></div>';
			    tmpDetail += '<h5>Infos non diffusées sur SeLoger.com</h5>';
                tmpDetail += '<ul>';
                if (_adresse) {
			        tmpDetail += '<li>Adresse: ' + _adresse + '</li>';
                }
			    if (_prixoffre) {
				    tmpDetail += '<li>Mise en vente (FAI): ' + _prixoffre + '</li>';
			    }
                tmpDetail += '</ul>';
            }
			tmpDetail += '</div>';

			// Add to the correct div
			$j('#ka_detailTotal').prepend(tmpDetail);

			// Create the description of the sold good
			var tmpDesc = '';
			if (! checkFirstDesc) {
			tmpDesc += '<div id="descriptif_bien_vendu_' + _idvente + '" class="descriptif_bien_vendu" style="display: block;">';
				checkFirstDesc = true;
			} else {
			tmpDesc += '<div id="descriptif_bien_vendu_' + _idvente + '" class="descriptif_bien_vendu">';
			}
			if (_typebienvendu) {
				tmpDesc	+= '<h4>' + _typebienvendu + '</h4>';
			}
			if (_descriptif) {
				tmpDesc	+= '<p>' + _descriptif + '</p>';
			} else {
				tmpDesc	+= '<p>Descriptif non disponible</p>';
			}
			tmpDesc += '</div>';

			// Add to the correct div
			$j('#ka_detail').append(tmpDesc);

			// No Good check
			someGoods = true;
		}
	});

	// If no goods to display, add empty tr
	if (! someGoods) {
		if (invalidesQry) {
			newTDs[iterator++] = '<tr><td class="nohover" colspan="8" style="text-align: center;">Vous n\'avez actuellement aucun bien vendu en attente</td></tr>';
		} else {
			newTDs[iterator++] = '<tr><td class="nohover" colspan="8" style="text-align: center;">Vous n\'avez actuellement aucun bien vendu</td></tr>';
		}
	}

	if (_multipage) {
		newTDs[iterator++] = '<tr class="ka_multipage"><td colspan="8">';
		if (_lienarriere) {
			newTDs[iterator++] = '<a href="' + _lienarriere + '">&lt;</a>';
		}
		newTDs[iterator++] = _multipage;
		if (_lienavant) {
			newTDs[iterator++] = '<a href="' + _lienavant + '">&gt;</a>';
		}
		newTDs[iterator++] = '</td></tr>';
	}

    newTDs[iterator++] = '<tr id="ka_table_bottom_padding"><td colspan="8"></td></tr>';

	$j('#ka_liste_biens').append(newTDs.join(''));

	// Set up the address tooltip again
	$j('.ka_address').mouseover(function () {
		$j(this).find('.address_tooltip').show();
	});

	$j('.ka_address').mouseout(function () {
		$j(this).find('.address_tooltip').hide();
	});

	$j('.ka_invalid').mouseover(function () {
		$j(this).find('.invalid_message').show();
	});

	$j('.ka_invalid').mouseout(function () {
		$j(this).find('.invalid_message').hide();
	});

	// set the multipage
	$j('.ka_multipage a').click(function () {
		$j.ajax({
			type: 'GET',
			url: $j(this).attr('href'),
			dataType: ($j.browser.msie) ? 'text' : 'xml',
			success: function (xml) {
				getXmlInfo(xml);
			},
			error: function () {
				alert('Nos serveurs sont actuellement indisponibles, veuillez réessayer ultérieurement');
			}
		});
		return false;
	});

	// Set up the click event
	$j('tr.bien_vendu_row').click(function () {
		setUpRows($j(this));
	});
}

function tabSwitcher() {
	$j("#ka_liste_biens_tabs div").click(function () {
		$j("#ka_liste_biens_tabs div.ka_tab_active").removeClass('ka_tab_active');
		$j(this).addClass('ka_tab_active');
	});

	$j("#ka_liste_type_biens_tabs div").click(function () {
		$j("#ka_liste_type_biens_tabs div.ka_tab_active").removeClass('ka_tab_active');
		$j(this).addClass('ka_tab_active');

		// get Query
		var qry_page = $j('#qry_page').val();
		var siInvalides = $j(this).children('input[name="siInvalides"]').val();
		if (siInvalides == 1) {
			invalidesQry = true;
		} else {
            invalidesQry = false;
        }

		// Rebuild query with new param
		var tmp_qry = qry_page.split('&');
		if (qry_page.toLowerCase().indexOf('siinvalides=') > -1) {
			for (var i = 0; i < tmp_qry.length; i++) {
				if (tmp_qry[i].toLowerCase().indexOf('siinvalides=') > -1) {
					valid = tmp_qry[i].split('=');
					valid[1] = siInvalides;
					tmp_qry[i] = valid.join('=');
				}
			}
			// Rebuild query
			qry_page = tmp_qry.join('&');
		} else {
			// No sort in query
			qry_page += '&siInvalides=' + siInvalides;
		}
        $j('#qry_page').val(qry_page);

		// Ajax Call
		$j.ajax({
			type: 'GET',
			url: '/js,ajax,ka_biensvendus.xml',
			data: qry_page,
			dataType: ($j.browser.msie) ? 'text' : 'xml',
			success: function (xml) {
				getXmlInfo(xml);
			},
			error: function () {
				alert('Nos serveurs sont actuellement indisponibles, veuillez réessayer ultérieurement');
			}
		});

		// Hide legend if goods are invalid
		if (siInvalides == 1) {
			$j('#info_legende, #info_message').hide();
		} else {
			$j('#info_legende, #info_message').show();
		}
	});
}

function confirmDel(idVente, redirect) {
	if (confirm('Voulez vous supprimer définitivement ce bien vendu?')) {
		window.location.href = '/supp_biens_vendus.htm?idVente=' + idVente + '&redirect=%2F' + redirect;
	}
	return false;
}

function afficherMasquer(lien, idVente, afficher) {
    if (afficher == 'True') {
        afficher = 0;
    } else {
        afficher = 1;
    }
    $j.ajax({
        type: 'GET',
        url: '/js,ajax,afficher_masquer_biens_vendus.htm',
        data: 'idVente=' + idVente + '&siAfficherWeb=' + afficher,
        async: false,
        success: function () {
            if (lien.innerHTML == 'Publier') {
                lien.innerHTML = 'Dépublier';
                lien.onclick = function () {
                    afficherMasquer(this, idVente, 'True');
                    return false;
                }
            } else {
                lien.innerHTML = 'Publier';
                lien.onclick = function () {
                    afficherMasquer(this, idVente, 'False');
                    return false;
                }
            }
        },
        error: function () {
            alert('Nos serveurs sont actuellement indisponibles, veuillez réessayer ultérieurement');
        }
    });
}