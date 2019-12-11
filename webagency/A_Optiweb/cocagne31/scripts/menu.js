//menu head
var delai = 600;
var timeout;
var leMenu;
function cacherMenu(){
	document.getElementById("mn"+leMenu).style.backgroundPosition = '0 0';
	document.getElementById("sm"+leMenu).style.visibility = 'hidden';
}
function afficherMenu(nd){
	if(timeout){
		clearTimeout(timeout);
		if(nd != leMenu){
			cacherMenu();
		}
	}
	leMenu = nd;
	document.getElementById("mn"+leMenu).style.backgroundPosition = '0 -54px';
	document.getElementById("sm"+leMenu).style.visibility = 'visible';	
}
function cacherDelai(){
	timeout = setTimeout('cacherMenu();',delai);
}
function rOutMenu(){
	cacherDelai();
}