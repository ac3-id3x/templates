function id3_go(u) {
	document.location.href = u;
}

function id3_go_blank(u) {
	window.open(u);
}

function initSize2 (param) {
	var o = document.getElementById("helpCity");
	var o2 = document.getElementById("polMenuGauche");
	var o3 = document.getElementById("polCnt");
	if (o3 && o2 && o) {
			o2.style.height = o.offsetHeight + 380 + 'px';
			o3.style.height = o.offsetHeight + 360 + 'px';
		
	}
}



function initSize (param) {
		initSize_v2(param);
}

function initSize_enline (param) {
	var a = document.getElementById("polMenuGauche");
	//if(admin){alert(b.offsetHeight+"_"+a.offsetHeight);}
	if (a && b) {
		if(b.offsetHeight > 400) {
			if(a.offsetHeight > b.offsetHeight){
				b.style.height = (a.offsetHeight+10) + 'px';
			}else {
				a.style.height = b.offsetHeight + 'px';
			}
		}
		else {
			if(a.offsetHeight > 400){
				b.style.height = (a.offsetHeight-20) + 'px';
			}else{
				a.style.height = 420 + 'px';
				b.style.height = 400 + 'px';	
			}
		}
		if(param == "scroll"){
			window.scrollTo(0,b.offsetHeight);
		}
	}
}

function initSize_v2 (param) {
	var a = document.getElementById("polMenuGauche");
	var b = document.getElementById("polContent");
	//if(admin){alert(b.offsetHeight+"_"+a.offsetHeight);}
	if (a && b) {
		if(a.offsetHeight > b.offsetHeight){
			b.style.height = (a.offsetHeight+10) + 'px';
		}else {
			a.style.height = b.offsetHeight + 'px';
		}
		if(a.offsetHeight < 400) {
				a.style.height = 410 + 'px';
		}
		
		if(param == "scroll"){
			window.scrollTo(0,b.offsetHeight);
		}
		
	}
}


function initSize3 (param) {
	var o = document.getElementById("niv3");
	var o2 = document.getElementById("polMenuGauche");
	var o3 = document.getElementById("polCnt");
	if (o3 && o2 && o) {
		if(o.offsetHeight < 400 ){
			o2.style.height = 400 + 'px';
			o3.style.height = 380 + 'px';
		}else {
			o2.style.height = o.offsetHeight + 220 + 'px';
			o3.style.height = o.offsetHeight + 200 + 'px';
		}
	}
}




function favoris_slpro() {
	if (navigator.appVersion.indexOf("Mac",0)>0) {
     alert("Utilisez la combinaison de touches \"Pomme-D\"");
  }else {
		if ( navigator.appName != 'Microsoft Internet Explorer' )
		{ window.sidebar.addPanel("SeLogerPro - Médias et Services pour les Professionnels de l’Immobilier","http://www.selogerpro.com/",""); }
		else { window.external.AddFavorite("http://www.selogerpro.com","SeLogerPro - Médias et Services pour les Professionnels de l’Immobilier"); } 
	}
}

function homePage(obj,urlp) {
	if (navigator.appVersion.indexOf("Mac",0)>0) {
     alert("Utilisez les menus de votre navigateur pour ajouter \"http://www.selogerpro.com\" en page de démarrage (Edition\/Préférence\/Démarrage)");
  }else {
  	if (navigator.appName != 'Microsoft Internet Explorer') {
			 alert("Utilisez les menus de votre navigateur pour ajouter \"http://www.selogerpro.com\" en page de démarrage (Outils\/Options\/Démarrage)");
		}else {			 
			obj.style.behavior='url(#default#homepage)';
			obj.setHomePage(urlp);
		}
	}
	
}



function choiceprint(id) {
	var o = document.getElementById(id);
	if(o.style.display != "inline"){
		o.style.display = "inline";
		o.innerHTML = "";
		var target = document.getElementById(id);
	  var elem = document.createElement('a');
	  elem.href = "javascript:print();"
	  var txt = document.createTextNode('Imprimer cette page');
	  elem.appendChild(txt);
	  elem.id = 'printview';
	  target.appendChild(elem);
	  
	  var elem2 = document.createElement('a');
	  elem2.href = "javascript:id3_go_blank('/list_ann_all.htm?tri=a_bq_si_censure,d_dtmaj');"
	  txt = document.createTextNode('Imprimer toutes les annonces');
	  elem2.appendChild(txt);
	  elem2.id = 'printallann';
	  target.appendChild(elem2);
	}else{
		o.style.display = "none";
	}
}
      
      
  
      
   
      
function delElem(parent, child){
	var obj = document.getElementById(parent);
  var old = document.getElementById(child);
  obj.removeChild(old);
 }        


