//menu head
var delai = 300;
var timeout;
var leMenu = null;
function cacherMenu(){
	if(timeout){
		clearTimeout(timeout);
	}
	document.getElementById('mn'+leMenu).style.color = '#ffffff';
	document.getElementById('mn'+leMenu).style.backgroundPosition = "0 0";
	if(document.getElementById('sm'+leMenu)) {
		document.getElementById('sm'+leMenu).style.display = 'none';
	}
	leMenu = null;
}
function afficherMenu(n){
	if(timeout){
		clearTimeout(timeout);
		timeout = 0;
	}
	if(leMenu != null) {
		cacherMenu();
	}
	
	document.getElementById('mn'+n).style.color = '#ffffff';
	document.getElementById('mn'+n).style.backgroundPosition = "0 -55px";
	if(document.getElementById('sm'+n)) {
	 document.getElementById('sm'+n).style.display = 'block';
	}
	leMenu = n;
}
function cacherDelai(){
	timeout = setTimeout('cacherMenu()',delai);
}
function rOutMenu(){
	cacherDelai();
}
