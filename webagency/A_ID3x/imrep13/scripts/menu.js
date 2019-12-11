var delai = 400;
var timeout;
var opened;
/**
 * rollover sur un bouton
 */

function rollover(n) {
	if(document.getElementById("sm"+n)){ 
		//arreter timer
		if(timeout) {
			clearTimeout(timeout);
			timeout = 0;
			closeMenu()
		}
		//ouvrir le menu
		document.getElementById("sm"+n).style.display = "block";
		document.getElementById("mn"+n).style.backgroundPosition = "0 -54px";
		opened = n;
	}
}

/**
 * fermer le menu
 */
function closeMenu() {
	document.getElementById("sm"+opened).style.display = "none";
	document.getElementById("mn"+opened).style.backgroundPosition = "0 0";
}

//rollover sur un bouton, attendre avant de fermer le menu
function rollout() {
	if(document.getElementById("sm"+opened)){ 
		closeDelay();
	}
}

function closeDelay() {
	if(timeout) {
		clearTimeout(timeout);
		timeout = 0;
	}
	timeout = setTimeout('closeMenu();',delai);
}




function validate(){
	var ctel=document.getElementById("ctel").value;
	var cprenom=document.getElementById("cprenom").value;
	var msg="";
	var longueur = cprenom.length;
	if( longueur < 2 ){
			msg=msg+"Veuillez indiquer un prénom !\n";
	}
	var longueur = ctel.length;
	if( longueur < 9 ){
			msg=msg+"Veuillez indiquer un numéro de téléphone !\n";
	}
	
	if(msg){
		alert(msg);
		return false;
	}else{
		return true;
	}
	
}