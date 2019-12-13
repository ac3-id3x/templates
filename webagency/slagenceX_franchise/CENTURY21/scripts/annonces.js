
function go(url,n,w,h) {
	window.open(url,n,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+w+',height='+h);
}
function go3(url,n,params) {
	window.open(url,n,params);
}

function zoomer(id, src){
	var elt = document.getElementById(id);
	if( elt ) {
//		elt.innerHTML = "<img src='"+src+"' />";
		elt.className = "montrer";
	}
}

function dezoomer(id){
	var elt = document.getElementById(id);
	if( elt ) {
		elt.className = "cacher";
	}
}
function redimension() {
	window.resizeTo('1000','900');
}
function affichedetail(id){
	var elt = document.getElementById(id);
	if( elt ) {
//		
		elt.className = "montrerdetailinfos";
	}
}

function cachedetail(id){
	var elt = document.getElementById(id);
	if( elt ) {
		elt.className = "cacher";
	}
}