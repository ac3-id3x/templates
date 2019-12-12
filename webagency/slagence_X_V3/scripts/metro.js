function dispMetro(chaine) {
	achaine= chaine.split('|');
	max=(((achaine.length)-1)/3)
	if (max>0) document.write ('<div class="metro_Ctn">');
	for (i=0;i<max;i++) {
		switch (achaine[i*3+2]) {
			case '20':
				document.write ('<div class="picto_metro"></div><div class="metro">');
				break;
			case '21':
				document.write ('<div class="picto_rer"></div><div class="rer">');
				break;
			case '23':
				document.write ('<div class="picto_tcl"></div><div class="tcl">');
				break;
			// sous quartier nantes
			case '100':
				document.write ('');
				achaine[i*3+1] = '';
				break;
		}

		document.write (achaine[i*3+1]);
		if (i<max-1) document.write ('</div>');
	}
	if (max>0) document.write ('</div></div>');
}

function dispMetroFicheVisite(chaine) {
	achaine= chaine.split('|');
	max=(((achaine.length)-1)/3)
	if (max>0) document.write ('<div class="metro_Ctn">');
	for (i=0;i<max;i++) {
		switch (achaine[i*3+2]) {
			case '20':
				document.write ('<div class="picto_metro"><img src="/z/webagency/slagence_X_V3/images/picto_metro.png" alt="" title="" /></div><div class="metro">');
				break;
			case '21':
				document.write ('<div class="picto_rer"><img src="/z/webagency/slagence_X_V3/images/picto_rer.png" alt="" title="" /></div><div class="rer">');
				break;
			case '23':
				document.write ('<div class="picto_tcl"><img src="/z/webagency/slagence_X_V3/images/picto_tcl.gif" alt="" title="" /></div><div class="tcl">');
				break;
			// sous quartier nantes
			case '100':
				document.write ('');
				achaine[i*3+1] = '';
				break;
		}

		document.write (achaine[i*3+1]);
		if (i<max-1) document.write ('</div>');
	}
	if (max>0) document.write ('</div></div>');
}
