//$$DYN:ID3:NOFOOTER$$
function zoomer(id, src){
	var elt = document.getElementById(id);
	if( elt ) {
		//elt.innerHTML = "<img src='"+src+"' />";
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
function cachermontrer( id ){
	var elt_tn = document.getElementById( id );
	if( elt_tn ) {
		if( elt_tn.style.display=="inline" ) {
			elt_tn.style.display="none";
		} else {
			elt_tn.style.display="inline";
		}
	} else {
		alert("id '" + id + "' non trouvé dans la page");
	}
}


function id3_go(u) {document.location.href=u;}

function refineLieux (idlieux) {
   
		id3_go(urlpreliste+'?'+urlrequerylieux+"&idlieux="+idlieux);
	}

function dispLieux(chaine) {
		achaine= chaine.split('|');
		max=(((achaine.length)-1)/3)
		if (max>0) document.write ('<div class="Metro">');
		for (i=0;i<max;i++) {
			switch (achaine[i*3+2]) {
				case '20':
					document.write ('<img border=0 src="/z/portail/sv5/images/lignes/metro.gif" align="absmiddle" hspace=4 vspace=1 />');
				break;
				case '21':
					document.write ('<img border=0 src="/z/portail/sv5/images/lignes/rer.gif" align="absmiddle" hspace=4 vspace=1 />');
				break;
				case '23':
					document.write ('<img border=0 src="/z/portail/sv5/images/lignes/metrolyon.gif" align="absmiddle" hspace=4 vspace=1 />');
				break;
			}

			document.write ('<a href=javascript:refineLieux('+achaine[i*3]+') alt="Affiner la selection sur '+achaine[i*3+1]+'" title="Affiner la selection sur '+achaine[i*3+1]+'">'+achaine[i*3+1]+'</a>');
		
			if (i<max-1) document.write ('&nbsp;');
		}
		if (max>0) document.write ('</div>');
	}
function pop(URLfen,W,H,L,T)
	{
		var w=window.open(URLfen,"","status=no,location=no,scrollbars=yes,toolbar=no,directories=no,resizable=yes,width="+W+",height="+H+",top="+T+",left="+L);
	}
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
function affichage_popupoutils(Outils, Services)
{
window.open (Outils, Services, config='height=550, width=750, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no')
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}