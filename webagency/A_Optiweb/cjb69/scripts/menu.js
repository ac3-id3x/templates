//menu head
var delai = 600;
var timeout;
var leMenu;
function cacherMenu(){
	if(timeout){
		clearTimeout(timeout);
	}
	document.getElementById('msc').style.color = '#FFFFFF';
	document.getElementById('ssc').style.visibility = 'hidden';
}
function afficherMenu(){
	if(timeout){
		clearTimeout(timeout);
	}
	document.getElementById('msc').style.color = '#E3E0DF';
	document.getElementById('ssc').style.visibility = 'visible';
}
function cacherDelai(){
	timeout = setTimeout('cacherMenu();',delai);
}
function rOutMenu(){
	cacherDelai();
}
