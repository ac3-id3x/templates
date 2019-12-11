var delai = 700;
var timeout;
var level0 = 0;
var level1 = 0;
var level2 = 0;
/**
 * rollover sur un bouton
 * m	rang de niveau 1
 * n	rang de niveau 2
 */

function rollover(m,n) {
	//arreter timer
	if(timeout) {
		clearTimeout(timeout);
		timeout = 0;
		closeMenu()
	}
	//ouvrir le menu
	document.getElementById("sm"+m).style.display = "block";
	document.getElementById("mn"+m).style.backgroundColor = "#5382bf";
	level0 = m;
	if(n) {
		document.getElementById("sm"+m+"_"+n).style.display = "block";
		level1 = n;
	}
}

/**
 * fermer le menu
 * commencer par le niveau le plus bas si existe
 */
function closeMenu() {
	if(level1) {
		document.getElementById("sm"+level0+"_"+level1).style.display = "none";
		level1 = 0;
	}
	if(level0) {
		document.getElementById("sm"+level0).style.display = "none";
		document.getElementById("mn"+level0).style.backgroundColor = "#bb3322";
		level0 = 0;
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