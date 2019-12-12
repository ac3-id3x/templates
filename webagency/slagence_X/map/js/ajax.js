function createRequestObject(url) {
		req = false;
    // branch for native XMLHttpRequest object
    if(window.XMLHttpRequest) {
    	try {
				req = new XMLHttpRequest();
      }
      catch(e) {
				req = false;
      }
    // branch for IE/Windows ActiveX version
    } else if(window.ActiveXObject) {
       	try {
        	req = new ActiveXObject("Msxml2.XMLHTTP");
      	}
      	catch(e) {
        	try {
          		req = new ActiveXObject("Microsoft.XMLHTTP");
        	} catch(e) {
          		req = false;
        }
		}
  }
	return req;
}

var http = createRequestObject();
var httpisbusy=false;

function sndReq(url) {
    if (http && url) {
	    if(httpisbusy==true) {
	    	http.onreadystatechange = function () {};
	    	http.abort();
	    	httpisbusy=false;
	    }
	    doEcr('action: <a href="'+url+'" target=_blank>'+url+'</a>');
	    try {
		    http.open('get', url);
		    http.onreadystatechange = handleResponse;
		    http.send(null);
		    httpisbusy=true;
	  	}
	  	catch (ex) {
				doEcr("http exception "+ex);
	  	}
  	}
}





function handleResponse() {
    if(http && http.readyState == 4){
    		httpisbusy=false;
        var response = http.responseText;
		var update = new Array();
		
        update=response.split('{#}');
				for (var i=0; i<update.length; i++) {
					var temp = update[i];
					var argus = temp.split('##');
					if (argus.length>0) {
						switch (argus[0]) {
							case "eval":
								eval(argus[1]);
								break;
							case "tophtml":
							var newdiv= document.createElement("div");
							newdiv.innerHTML=argus[2];
							var oo = document.getElementById(argus[1]);
							if (oo) {
								if (oo.hasChildNodes())
									oo.insertBefore(newdiv,oo.firstChild);
								else
									oo.appendChild(newdiv);
							}
								break;
							case "html":
								var oo = document.getElementById(argus[1]);
								if (oo) {
									oo.innerHTML = argus[2];
								}
								else
									doEcr('erreur div '+argus[1]+' non trouve');
								break;
						}
					}
					else 
						doEcr("erreur");
				}        
    }
}


function doEcr(x) {
var oEcr = document.getElementById("ID3xSql");
	if (oEcr)
		oEcr.innerHTML=x+"<br/>"+oEcr.innerHTML;
}

function getPluriel(nb,sing,plur) {
	if (!sing) sing='';
	if (!plur) plur='s';
	return (nb==1)?sing:plur;
}