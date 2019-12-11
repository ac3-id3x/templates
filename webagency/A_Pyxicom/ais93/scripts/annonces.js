//$$DYN:ID3:NOFOOTER$$
function go(url,n,w,h) {
	window.open(url,n,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+w+',height='+h);
}
function go2(ref)
					{
					window.open(ref,'visu3d','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=600');
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

function Soustypes(){
					var elt_typebien = document.getElementById("typebien");
					var elt_biens = document.getElementById("biens");
					var elt_maisons = document.getElementById("maisons");
					var j = 0;
					var listeinput = document.getElementsByTagName( "input" );
					if( elt_typebien && elt_biens && elt_maisons ) {

						if( elt_typebien.checked==true ) {

							elt_biens.style.display="inline";
							elt_maisons.style.display="none";

							for( j=0; j< listeinput.length; j++ ) {
								if( listeinput[j].id.substring( 0, 15 ) == "idsoustypebien_" ) {
									listeinput[j].checked = false;
								}
							}

						} else {
							
							elt_biens.style.display="none";
							elt_maisons.style.display="inline";

							for( j=0; j < listeinput.length; j++ ) {
								if( listeinput[j].id.substring( 0, 11 ) == "idtypebien_" ) {
									listeinput[j].checked = false;
								}
							}

						}
					} else {
						alert("element d'id 'typebien' ou 'biens' ou 'maisons' non trouvé dans la page");
					}
				}
				

