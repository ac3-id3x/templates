var delai = 400;
var timeout;
var opened;
function rollover(n1,n2) {
	
	if(document.getElementById("sm"+n1)){ 
		if(timeout) {
			clearTimeout(timeout);
			timeout = 0;
			closeMenu()
		}
		document.getElementById("sm"+n1).style.display = "block";
	}
	if(document.getElementById("sm"+n2)){ 
		if(timeout) {
			clearTimeout(timeout);
			timeout = 0;
			closeMenu()
		}
		document.getElementById("sm"+n2).style.display = "block";
	}
	opened = n1+","+n2;
}

/**
 * fermer le menu
 */
function closeMenu() {
	var tabn = opened.split(',');
	
		if(document.getElementById("sm"+tabn[0])){ 
			document.getElementById("sm"+tabn[0]).style.display = "none";
		}
		if(document.getElementById("sm"+tabn[1])){ 
			document.getElementById("sm"+tabn[1]).style.display = "none";
		}
	}

//rollover sur un bouton, attendre avant de fermer le menu
function rollout() {
	
	if(timeout) {
		clearTimeout(timeout);
		timeout = 0;
	}
	timeout = setTimeout('closeMenu();',delai);
}




