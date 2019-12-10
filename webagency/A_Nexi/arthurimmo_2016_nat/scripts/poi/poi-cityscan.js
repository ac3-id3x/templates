function setGeoMap(isRealEstate, cityscanData, colorLayer, urwVille, urwDepartement, urwRegion, language) {
	var DomGeoMap = document.createElement('div');
	DomGeoMap.id = (cityscanData != null ? 'geo-map-poi-cityscan-demut' : 'geo-map-poi-demut');
	DomGeoMap.setAttribute('style', "height:" + (cityscanData != null ? '600':'400') + "px;");
	DomGeoMap.setAttribute('data-color', (colorLayer!=''?colorLayer:'#FF0000'));
	document.getElementById('geolocation-poi').appendChild(DomGeoMap);
	
	if (cityscanData != null) {
		// hide some element
		var unneeded = Array.prototype.slice.call( document.getElementsByClassName('infos-poi-container-detail') );
			unneeded.push( document.getElementById('kelquartier-anchors'), document.getElementById('detailquartier'), document.getElementById('kelquartier-quartier'),
				document.getElementById('detailville'), document.getElementById('kelquartier-ville') );
		for (un = 0; un < unneeded.length; un++) { if (unneeded[un]) unneeded[un].style.cssText += "display: none; visibility: hidden;"; }
		
		// GESTION PICTO ET TEXTE
		var pictocs = document.getElementById('pictocs');			
		if (pictocs) {				
			pictocs.children[0].src = "/z/webagency/A_Nexi/arthurimmo_2016_nat/images/pictos/pictos-infos-quartier.png";				
			pictocs.children[1].innerHTML = "INFOS QUARTIER";
		}
			
		var detailPoiTtl = document.getElementById('POI');
		if (detailPoiTtl) {
			detailPoiTtl.children[0].innerHTML = "INFOS QUARTIER";
		}
			
		// FIN GESTION PICTO ET TEXTE
		var iframeCityscan = document.createElement('iframe');
		iframeCityscan.id = 'cityscan-widget';
		iframeCityscan.style = 'width:100%; height:100%;';
		iframeCityscan.src = "https://www.cityscan.fr/widget?clientKey=" + cityscanData.ck + "&addressId=" + cityscanData.idcs + (cityscanData.nl=='True'?'&noLoc':'') + "&language=" + (language=="fr"?"fr-FR":"en-US") + (cityscanData.rd!=""?("&radius="+cityscanData.rd):"");
		DomGeoMap.appendChild(iframeCityscan);
	}
	else {
		if (isRealEstate) {
			id3xContent.addMap({ container: { id: 'geo-map-poi-demut' },
				mapData: [{ mapDataType: 'SINGLE_REALESTATE', marker: { icon: null, popup: true } }]
			});
		}
		else {
			id3xContent.addMap({ container: { id: 'geo-map-poi-demut' },
				mapData: [
					{ mapDataType: 'ADMINISTRATIVE_DIVISION', marker: { icon: null, popup: true }, 
						division: {city: {label: urwVille}, country: {label: ''}, department: {label: urwDepartement}, region: {label: urwRegion}} 
					}
				]
			});
		}
	}
}

function getCityscan(idAnnonce, idTypeTransaction, colorLayer, urwVille, urwDepartement, urwRegion, language) {
	if (idAnnonce != '' || idTypeTransaction != '') {
		$.ajax({
			type: 'GET',
			url: "/detail,cityscan_ajax.htm?idAnnonce=" + idAnnonce.toString() + "&idTypeTransaction=" + idTypeTransaction.toString(),
			cache: false,
			contentType: 'text/plain',
			dataType: 'text',
			complete: function() {},
			error : function (jqXHR, textStatus, errorThrown) {},
			success: function(data) {
				if (data.toString().length > 0) {
					var json = jQuery.parseJSON(data);
					if (json.success) {
						//var _jData = json.data;
						if (json.data.idcs != '') {
							setGeoMap(true, json.data, colorLayer, urwVille, urwDepartement, urwRegion, language);
						}
						else {
							setGeoMap(true, null, colorLayer, urwVille, urwDepartement, urwRegion, language);
						}
					}
				}
			}
		});
	}
	else {
		setGeoMap(false, null, colorLayer, urwVille, urwDepartement, urwRegion, language);
	}
}
