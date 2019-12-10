var delai = 400;
var timeout;
var opened;
var langue;
/**
 * rollover sur un bouton
 */

function rollover(n,lg) {
	//arreter timer
	if(timeout) {
		clearTimeout(timeout);
		timeout = 0;
		closeMenu()
	}
	//ouvrir le menu
	document.getElementById("sm"+n+lg).style.display = "block";
	document.getElementById("mn"+n).style.backgroundPosition = "0 -62px";
	document.getElementById("mn"+n).style.color = "#fff";
	document.getElementById("mn"+n).style.outline = "1px solid #a186b1";
	opened = n;
	langue = lg;
}

/**
 * fermer le menu
 */
function closeMenu() {
	document.getElementById("sm"+opened+langue).style.display = "none";
	document.getElementById("mn"+opened).style.backgroundPosition = "0 0";
	document.getElementById("mn"+opened).style.color = "#fff";
	document.getElementById("mn"+opened).style.outline ="none";
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