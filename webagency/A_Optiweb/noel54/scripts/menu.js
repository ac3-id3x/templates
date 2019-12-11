//menu head
var delai = 500;
var timeout;
var leMenu;
function cacherMenu(){
	document.getElementById("mna"+leMenu).style.backgroundPosition = '0 0';
	document.getElementById("sm"+leMenu).style.visibility = 'hidden';
}
function afficherMenu(nd){
	if(timeout){
		clearTimeout(timeout);
		if(nd != leMenu){
			cacherMenu();
		}
	}
	document.getElementById("mna"+nd).style.backgroundPosition = '0 -40px';
	document.getElementById("sm"+nd).style.visibility = 'visible';
	leMenu = nd;
}
function cacherDelai(){
	timeout = setTimeout('cacherMenu();',delai);
}
function rOutMenu(){
	cacherDelai();
}
