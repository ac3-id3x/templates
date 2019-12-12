function dispMetro(chaine,divid) {
	achaine= chaine.split('|');
	max = Math.round(achaine.length/3);
	var html_var = '';
	for (i=0;i<max;i++) {
		var calculSwitch = i*3+2;
		var calculTxt = i*3+1;
		var classMetro = 'metro-'+achaine[calculTxt].toLowerCase().replace(' ','-');
		html_var += '<div class="metro_Ctn">';
		switch (achaine[calculSwitch]) {
			case '20':
				html_var += '<div class="picto_metro '+classMetro+'"><img src="/z/webagency/slagence_X_V4/images/pictos/picto_metro.png" alt="" title="" /></div><div class="metro '+classMetro+'">';
				break;
			case '21':
				html_var += '<div class="picto_rer"><img src="/z/webagency/slagence_X_V4/images/pictos/picto_rer.png" alt="" title="" /></div><div class="rer">';
				break;
			case '23':
				html_var += '<div class="picto_tcl"><img src="/z/webagency/slagence_X_V4/images/pictos/picto_tcl.png" alt="" title="" /></div><div class="tcl">';
				break;
			// sous quartier
			case '100':
				html_var += '<div>';
				achaine[calculTxt] = '';
				break;
		}
		html_var += achaine[calculTxt];
		html_var += '</div></div>';
	}
	$("#"+divid).append(html_var);
}

function dispMetroFicheVisite(chaine) {
	achaine= chaine.split('|');
	max = Math.round(achaine.length/3);
	for (i=0;i<max;i++) {
		var calculSwitch = i*3+2;
		var calculTxt = i*3+1;
		document.write ('<div class="metro_Ctn">');
		switch (achaine[calculSwitch]) {
			case '20':
				document.write ('<div class="picto_metro"><img src="/z/webagency/slagence_X_V4/images/pictos/picto_metro.png" alt="" title="" /></div><div class="metro">');
				break;
			case '21':
				document.write ('<div class="picto_rer"><img src="/z/webagency/slagence_X_V4/images/pictos/picto_rer.png" alt="" title="" /></div><div class="rer">');
				break;
			case '23':
				document.write ('<div class="picto_tcl"><img src="/z/webagency/slagence_X_V4/images/pictos/picto_tcl.png" alt="" title="" /></div><div class="tcl">');
				break;
			// sous quartier
			case '100':
				document.write('<div>');
				achaine[calculTxt] = '';
				break;
		}
		document.write (achaine[calculTxt]);
		document.write ('</div></div>');
	}
}
