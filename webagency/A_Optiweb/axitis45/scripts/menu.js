var delai = 400;
var timeout;
var opened;
var term = 0;
/**
 * rollover sur un bouton
 */

function rollover(n) {
	//arreter timer
	if(timeout) {
		clearTimeout(timeout);
		timeout = 0;
		closeMenu()
	}
	//ouvrir le menu
	if(term==1){
		document.getElementById("sm"+n).style.display = "block";
		document.getElementById("mn"+n).style.backgroundPosition = "0 -82px";
	}
	opened = n;
}

/**
 * fermer le menu
 */
function closeMenu() {
	if(term==1){
		document.getElementById("sm"+opened).style.display = "none";
		document.getElementById("mn"+opened).style.backgroundPosition = "0 0";
	}
}

//rollover sur un bouton, attendre avant de fermer le menu
function rollout(n) {
	closeDelay();
}

function closeDelay() {
	if(timeout) {
		clearTimeout(timeout);
		timeout = 0;
	}
	timeout = setTimeout('closeMenu();',delai);
}


function toggle_infobulle(valeur){
    	var div1 = document.getElementById(valeur)
    	if (div1.style.display == 'block') {
    		div1.style.display = 'none'
    	} else {
    		div1.style.display = 'block'
    	}
  }
