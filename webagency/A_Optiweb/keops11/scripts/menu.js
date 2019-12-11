//menu head
var delai = 600;
var timeout;
var leMenu;
var expd = 0;
function cacherMenu(){
	if(!expd){
		document.getElementById(leMenu).style.visibility = 'hidden';
	}
}
function afficherMenu(nd){
	if(timeout){
		clearTimeout(timeout);
		if(nd != leMenu){
			cacherMenu();
		}
	}
	expd = 1;
	leMenu = nd;
	document.getElementById(leMenu).style.visibility = 'visible';
}
function cacherDelai(){
	timeout = setTimeout('cacherMenu();',delai);
}
function rOutMenu(){
	expd = 0;
	cacherDelai();
}
function rOverSm(li){
	if(timeout){
		clearTimeout(timeout);
	}
	expd = 1;
}
function rOutSm(li){
	rOutMenu();
}