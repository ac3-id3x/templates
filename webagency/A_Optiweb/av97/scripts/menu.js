//menu head
var delai = 600;
var timeout;
var leMenu;

function cacherMenu(){
	if(timeout){
		clearTimeout(timeout);
	}
	document.getElementById('outils').style.color = '#0000c9';
	document.getElementById('outils2').style.visibility = 'hidden';
}
function afficherMenu(){
	if(timeout){
		clearTimeout(timeout);
	}
	document.getElementById('outils').style.color = '#FFFFFF';
	document.getElementById('outils2').style.visibility = 'visible';
}
function cacherDelai(){
	timeout = setTimeout('cacherMenu();',delai);
}
function rOutMenu(){
	cacherDelai();
}
