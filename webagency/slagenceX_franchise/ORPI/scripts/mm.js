function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function openBrWindow(theURL,winName,features) { //v2.0
		window.open(theURL,winName,features);
	}
	
  function favoris() 
   { 
      if ( navigator.appName != 'Microsoft Internet Explorer' )
       { 
        window.sidebar.addPanel("$$IMMOBW:AGENCE:NOM ncase$$, Immobilier $$IMMOBW:AGENCE:VILLE scase$$ ($$IMMOBW:AGENCE:CP$$)","http://$$SRV$$",""); 
       } 
      else 
       { 
        window.external.AddFavorite("http://$$SRV$$","$$IMMOBW:AGENCE:NOM ncase$$, Immobilier $$IMMOBW:AGENCE:VILLE scase$$ ($$IMMOBW:AGENCE:CP$$)"); 
       } 
   } 
   function controle(id1){
   	
			  
			 
			  	
					for(var i=1;i<4;i++) {
						
						var mot = "sousmenu" + i;
						var sousmenu = document.getElementById(mot);
						
						if(sousmenu){
							
							if(id1==i) {
							sousmenu.style.display="block";
							
							           }
							else
								{ sousmenu.style.display="none";
					   
					      }
			  	                     }
			  		     
			  	     }	
			                   }  	
	
	

function openCodes_Postaux() {
	window.open('/cp_frame.htm?lang=$$LANGUE$$' , 'cdp', ',height=330,width=360,scrollbars=yes, resizable=no, toolbar=no, status=no, menubar=no');
}

function ventes() {
		document.getElementById("listevilles").style.display = "inline";
}

function locations() {
	document.getElementById("listevilles").style.display = "none";
	
}




function affichage_popup(Outils, Services)
{
window.open (Outils, Services, config='height=550, width=750, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no')
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

