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
	//if(admin == 1){alert(b.offsetHeight+"_"+a.offsetHeight);}
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


/*** function previsite ***/ 
function chooseHotSpot(coordX, coordY){
    document.getElementById('hotspots').style.display = 'none';
    if(gb_idImage.length == 36) {
        x = coordX;
        y = coordY;
        showElement('hotspots', 'block');
    }
}

function HtmlDecode(s) 
{ 
      var out = ""; 
      if (s==null) return; 
      var l = s.length; 
      for (var i=0; i<l; i++) 
      { 
            var ch = s.charAt(i); 
            if (ch == '&') 
            { 
								var semicolonIndex = s.indexOf(';', i+1); 
		            if (semicolonIndex > 0) 
		            { 
		                        var entity = s.substring(i + 1, semicolonIndex); 
		                        if (entity.length > 1 && entity.charAt(0) == '#') 
		                        { 
		                              if (entity.charAt(1) == 'x' || entity.charAt(1) == 'X') 
		                                    ch = String.fromCharCode(eval('0'+entity.substring(1))); 
		                              else 
		                                    ch = String.fromCharCode(eval(entity.substring(1))); 
		                        } 
										i=semicolonIndex;
									}
							}
       out += ch; 
      } 
      return out; 
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function EcrireCookie(nom, valeur){
	var argv=EcrireCookie.arguments;
	var argc=EcrireCookie.arguments.length;
	var expires=(argc > 2) ? argv[2] : null;
	var path=(argc > 3) ? argv[3] : null;
	var domain=(argc > 4) ? argv[4] : null;
	var secure=(argc > 5) ? argv[5] : false;
	document.cookie=nom+"="+escape(valeur)+
	((expires==null) ? "" : ("; expires="+expires.toGMTString()))+
	((path==null) ? "" : ("; path="+path))+
	((domain==null) ? "" : ("; domain="+domain))+
	((secure==true) ? "; secure" : "");
}

function getCookieVal(offset){
	var endstr=document.cookie.indexOf (";", offset);
	if (endstr==-1) endstr=document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function LireCookie(nom){
	var arg=nom+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen){
		var j=i+alen;
		if (document.cookie.substring(i, j)==arg) return getCookieVal(j);
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) break;
	}
	return null;
}


function getQuery(){
    var s = location.search;
    var params=Array();
    if ( s.length > 0 ) {
        s=s.split('?');
        s=s[1];
        s=s.split('&');
        for(i=0;i<s.length;i++){
            params.push( s[i].split('=') );
        }
    }
    return params;
}

function EffaceCookie(nom){
	date=new Date;
	date.setFullYear(date.getFullYear()-1);
	EcrireCookie(nom,null,date);
}

function skipmsg(namecookie){
	EcrireCookie("skipmsg"+namecookie,"1");
	var info_agorabiz = document.getElementById('info_agorabiz');
	info_agorabiz.style.display = 'none';	
}
	
	
function isInt (str){
	var i = parseInt (str);
		
			if (isNaN (i))
				return false;
		
			i = i . toString ();
			if (i != str)
				return false;
		
			return true;
}
		
function isInteger(s){   
	var i;
	for (i = 0; i < s.length; i++)
		    {   
		        // Check that current character is number.
		        var c = s.charAt(i);
		        if (((c < "0") || (c > "9"))) return false;
		    }
		    // All characters are numbers.
		    return true;
		}

	function isMail(_email) {
		var emailReg = /^[a-z][a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i
		return emailReg.test(_email);
	}	