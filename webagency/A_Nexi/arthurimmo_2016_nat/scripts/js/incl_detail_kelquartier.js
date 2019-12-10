function cutText(div, txt) {
	if (txt.length > 20) {
		var split;
		for (var i = 15; i < txt.length; i++) {
			if (txt[i] == ' ') {
				split = i;
				break;
			}
		}

		if (split) {
			txt = txt.slice(0, split) + '<br />' + txt.slice(split);
			txt = '<div style="text-align: center">' + txt + '</div>';

			var lineHeight = window.getComputedStyle(div).getPropertyValue('line-height');
			div.style.height = parseInt(lineHeight) + 'px';
			div.style.lineHeight = (parseInt(lineHeight) / 2) + 'px';
		}
	}

	return txt;
}

function inclDetailKelquartier(annDetail) {
    // annDetail = { codeInsee: String, quartier: String, publicLatitude: String, publicLongitude: String, ville: String, urlKelquartierTopVille: String }
	
    var ville = annDetail.codeInsee,
			lat = annDetail.publicLatitude,
			lon = annDetail.publicLongitude,
			adr = "@" + lat + ';' + lon;

    if (annDetail.ville == '') ville = "@" + lat + ';' + lon;
    if (annDetail.publicLongitude == '') adr = annDetail.quartier + ", " + ville;

    var options = { adresseQuartier: adr, adresseVille: ville, id: '11,35,105,103', format: 'json'};

    $.ajax({
        url: '/detail,kelquartier_ajax.htm',
        dataType: "json",
        data: options,
        success: function (data, err) {
            //console.log(options);
            //console.log(data);
            var isHttps = (document.location.protocol == 'https:' ? true : false);
			
            var quartier = data.adresseQuartier, ville = data.adresseVille;
			
			if (quartier) {
				var divQuartier = document.getElementById('kelquartier-quartier');
				if (divQuartier) {
					var textQuartier = divQuartier.querySelector('.inside-text > div'), imgQuartier = divQuartier.querySelector('.wide-img');
					if (textQuartier) textQuartier.innerHTML = "Découvrez le quartier " + quartier.Polygone[0].libelle;
					
					var i = 0, urlOk = false, urlPhoto = '';
					while (!urlOk && i < quartier.Photos.length) {
						//console.log('quartier.Photos[' + i.toString() + ']'); console.log(quartier.Photos[i]);
						
						if (quartier.Photos[i].id_photo == quartier.Polygone[0].id_photo) {
							urlPhoto = quartier.Photos[i].photo_file_url
							if (isHttps) urlPhoto = urlPhoto.replace('http:', 'https:');
							imgQuartier.style.backgroundImage = 'url("' + urlPhoto + '")';
							urlOk = true;
						}
						i++;
					}
					
					
					var id3quartier = quartier.Polygone[0].libelle;
					imgQuartier.parentElement.addEventListener('click', function () {
						window.location = (document.location.origin + "/quartier.htm?ville=" + annDetail.ville + "&quartier=" + id3quartier + "&lon=" + quartier.longitude + "&lat=" + quartier.latitude);
					});
					
					
					var infosPoiContainer = document.querySelector('.infos-poi-container-detail');
					if (infosPoiContainer) {
						var poiPopulationDiv = infosPoiContainer.querySelector('.poiPopulation'),
							poiCommercesDiv = infosPoiContainer.querySelector('.poiCommerces'),
							poiTransportsDiv = infosPoiContainer.querySelector('.poiTransports'),
							poiSportsDiv = infosPoiContainer.querySelector('.poiSports');
						
						for (var i = 0; i < quartier.Stats.length; i++) {
							switch (quartier.Stats[i].id) {
								case  '11': if (poiPopulationDiv) poiPopulationDiv.innerHTML = cutText(poiPopulationDiv, quartier.Stats[i].carte_stat); break;
								case  '35': if (poiCommercesDiv)  poiCommercesDiv.innerHTML  = cutText(poiCommercesDiv, quartier.Stats[i].carte_stat); break;
								case '105': if (poiTransportsDiv) poiTransportsDiv.innerHTML = cutText(poiTransportsDiv, quartier.Stats[i].carte_stat); break;
								case '103': if (poiSportsDiv)     poiSportsDiv.innerHTML     = cutText(poiSportsDiv, quartier.Stats[i].carte_stat); break;
							}
						}
					}
				}
			}
			else {
                document.getElementById('kelquartier-quartier').remove();
                document.querySelector('.kelquartier-quartier-ancre').remove();
            }
			
			
			if (ville) {
				var divVille = document.getElementById('kelquartier-ville');
				if (divVille) {
					var textVille = divVille.querySelector('.inside-text > div'), imgVille = divVille.querySelector('.wide-img');
					if (textVille) textVille.innerHTML = "Découvrez la ville de " + ville.Polygone[0].libelle;
					
					imgVille.parentElement.addEventListener('click', function () { window.location = annDetail.urlKelquartierTopVille; });
					
					var i = 0, urlOk = false, urlPhoto = '';
					while (!urlOk && i < ville.Photos.length) {
						//console.log('ville.Photos[' + i.toString() + ']'); console.log(ville.Photos[i]);
						
						if (ville.Photos[i].id_photo == ville.Polygone[0].id_photo) {
							urlPhoto = ville.Photos[i].photo_file_url;
							if (isHttps) urlPhoto = urlPhoto.replace('http:', 'https:');
							imgVille.style.backgroundImage = 'url("' + urlPhoto + '")';
							urlOk = true;
						}
						i++;
					}
				}
			}
			
        },
        complete: function (data, err) {
            // console.log('complete with', err || ' no error');
            // console.log(data);
        }
    });
}

function inclKelquartier(annDetail) {
    // annDetail = { formCodeInsee: String, formLatitude: String, formLongitude: String, quartierIdTiers: String, topVilleIdTiers: String }
	
	//console.log('annDetail'); console.log(annDetail);
    var options = { adresseQuartier: '', adresseVille: '', format: 'json', id: '11,35,105,103,57,101,102,104,33,212' };

    if (annDetail.quartierIdTiers == '') options.adresseQuartier = "@" + annDetail.formLatitude + ";" + annDetail.formLongitude;
    if (annDetail.topVilleIdTiers == '') options.adresseVille = annDetail.formCodeInsee;
	
	//console.log('options'); console.log(options);
	
	$.ajax({
        url: '/detail,kelquartier_ajax.htm',
        dataType: "json",
        data: options,
        success: function (data, err) {
            //console.log('data'); console.log(data);
			if (data.adresseQuartier !== undefined) data = data.adresseQuartier;
            if (data.adresseVille !== undefined) data = data.adresseVille;
			//console.log('data'); console.log(data);
			
            var div = document.getElementById('kelquartier');
			if (div) {
				var text = div.querySelector('.text'), titleText = div.querySelector('.title-text');
				if (text) text.innerHTML = data.Polygone[0].descriptif;
				if (titleText) titleText.innerHTML += data.Polygone[0].libelle.toUpperCase();
				
				var img = div.querySelector('.wide-img');
				if (img) {
					var i = 0, urlOk = false, urlPhoto = '';
					while (!urlOk && i < data.Photos.length) {
						if (data.Photos[i].id_photo = data.Polygone[0].id_photo) {
							urlPhoto = data.Photos[i].photo_file_url;
							if (document.location.protocol == 'https:') urlPhoto = urlPhoto.replace('http:', 'https:');
							img.style.backgroundImage = 'url("' + urlPhoto + '")';
							urlOk = true;
						}
						i++;
					}
				}
				
				var infosPoiContainer = document.querySelector('.infos-poi-container');
				if (infosPoiContainer) {
					var poiCommercesDiv = infosPoiContainer.querySelector('.poiCommerces'),
						poiEcoleCrecheDiv = infosPoiContainer.querySelector('.poiEcoleCreche'),
						poiEspacesVertDiv = infosPoiContainer.querySelector('.poiEspacesVert'),
						poiPaysageDiv = infosPoiContainer.querySelector('.poiPaysage'),
						poiPopulationDiv = infosPoiContainer.querySelector('.poiPopulation'),
						poiQuartierAnimeDiv = infosPoiContainer.querySelector('.poiQuartierAnime'),
						poiRestaurantsDiv = infosPoiContainer.querySelector('.poiRestaurants'),
						poiSoleilDiv = infosPoiContainer.querySelector('.poiSoleil'),
						poiSportsDiv = infosPoiContainer.querySelector('.poiSports'),
						poiTitle = infosPoiContainer.querySelector('.infos-poi-title'),
						poiTransportsDiv = infosPoiContainer.querySelector('.poiTransports');
					
					if (poiTitle) poiTitle.innerHTML = data.Polygone[0].libelle.toUpperCase() + " EN BREF";
					
					var _stats = data.Stats;
					for (var i = 0; i < _stats.length; i++) {
						switch (_stats[i].id) {
							case  '11': if (poiPopulationDiv)  poiPopulationDiv.innerHTML  = cutText(poiPopulationDiv, _stats[i].carte_stat); break;
							case  '33':
								if (poiQuartierAnimeDiv) {
									poiQuartierAnimeDiv.style.backgroundImage = "url(/z/webagency/A_Nexi/arthurimmo_2016_nat/images/kelquartier/"
										+ (_stats[i].id_jauge==1 ? "Quartier_Anime_" : (_stats[i].id_jauge==6 ? "Quartier_Anime_Moyen_":"Quartier_Anime_Calme_") )
										+ "Bleu.png)";
									poiQuartierAnimeDiv.innerHTML = cutText(poiQuartierAnimeDiv, _stats[i].carte_stat);
								}
								break;
							case  '35': if (poiCommercesDiv)   poiCommercesDiv.innerHTML   = cutText(poiCommercesDiv, _stats[i].carte_stat); break;
							case  '57': if (poiPaysageDiv)     poiPaysageDiv.innerHTML     = cutText(poiPaysageDiv, _stats[i].carte_stat); break;
							case '105': if (poiTransportsDiv)  poiTransportsDiv.innerHTML  = cutText(poiTransportsDiv, _stats[i].carte_stat); break;
							case '103': if (poiSportsDiv)      poiSportsDiv.innerHTML      = cutText(poiSportsDiv, _stats[i].carte_stat); break;
							case '101': if (poiSoleilDiv)      poiSoleilDiv.innerHTML      = cutText(poiSoleilDiv, _stats[i].carte_stat); break;
							case '102': if (poiEcoleCrecheDiv) poiEcoleCrecheDiv.innerHTML = cutText(poiEcoleCrecheDiv, _stats[i].carte_stat); break;
							case '104': if (poiEspacesVertDiv) poiEspacesVertDiv.innerHTML = cutText(poiEspacesVertDiv, _stats[i].carte_stat); break;
							case '212': if (poiRestaurantsDiv) poiRestaurantsDiv.innerHTML = cutText(poiRestaurantsDiv, _stats[i].carte_stat); break;
						}
					}
					
				}
			}
        },
        complete: function (data, err) {
            // console.log('complete with', err || ' no error');
            // console.log(data);
        }
    });
}