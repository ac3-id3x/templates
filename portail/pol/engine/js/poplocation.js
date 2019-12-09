if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

function onChoiceCp(cpInput, cp, ville) { 
	
	var cpFinal = '';
	if (cp == '13090 - 13100'){
		switch(cpInput.trim()) {
			case '13290':
				cpFinal = '13290';
			case '13080':
				cpFinal = '13080';
			case '13090':
				cpFinal = '13090';
			case '13100':
				cpFinal = '13100';
			case '13540':
				cpFinal = '13540';
			default:
				cpFinal = '13090';
		}
	}
	else
		cpFinal = cp;
	
	//ne pas passer par MM_findObj();  ne fonctionne pas
	var Objcp = opener.document.f_annedit.cp;
	var Objvil = opener.document.f_annedit.ville;
	if (Objcp) {
		Objcp.value = cpFinal;
	}
	if (Objvil) { 
		Objvil.value = ville;
	}
	opener.focus();	
	self.close();
}