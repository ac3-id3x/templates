var delai = 400;
var timeout;
var opened;
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
	document.getElementById("sm"+n).style.display = "block";
	document.getElementById("mn"+n).style.color = "#341f15";
	opened = n;
}

/**
 * fermer le menu
 */
function closeMenu() {
	document.getElementById("sm"+opened).style.display = "none";
	document.getElementById("mn"+opened).style.color = "#fff";
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