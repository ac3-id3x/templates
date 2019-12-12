function dispMetro(chaine) {
	
	achaine= chaine.split('|');
	
	max=(((achaine.length)-1)/3)
	
	if (max>0) document.write ('<div class="metro_Ctn">');
	
	for (i=0;i<max;i++)
		{
			switch (achaine[i*3+2]) {
				case '20':
					document.write ('<p><em class="metro">');
				break;
				case '21':
					document.write ('<p><em class="rer">');
				break;
				case '23':
					document.write ('<p><em class="tcl">');
				break;
				// sous quartier nantes
				case '100':
					document.write ('<p style="display: none;">');
				break;
			}
		
		document.write (achaine[i*3+1]);
			
		if (i<max-1) document.write ('</em></p>');
		}
	if (max>0) document.write ('</em></div>');
}


function dispMetroV2(chaine) {
	
	achaine= chaine.split('|');
	
	max=(((achaine.length)-1)/3)
	
	if (max>0) document.write ('<div class="metro_Ctn">');
	
	for (i=0;i<max;i++)
		{
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
				break;
			}
		
		document.write (achaine[i*3+1]);
			
		if (i<max-1) document.write ('</div>');
		}
	if (max>0) document.write ('</div></div>');
}