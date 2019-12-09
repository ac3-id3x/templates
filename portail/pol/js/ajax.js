
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
    if (http) {
	    if(httpisbusy==true) {
	    	http.onreadystatechange = function () {};
	    	http.abort();
	    	httpisbusy=false;
	    }
	    doEcr('action: <a href="'+url+'" target=_blank>'+url+'</a>');
	    try {
		    http.open('get', url);
		    http.url = url;
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
								break;
							case "script":
								var oo = document.getElementById(argus[1]);
								if (oo) {
									oo.innerHTML = argus[2];
								}
								break;
						}
					}
					else 
						doEcr("erreur");
				}        
    }
    
    if (http.url && http.url.indexOf('AffQuartiers') > 0)
    {
		$('input[type="radio"][name="idquartier"]').change(
			function ()
			{
				if ($(this).is(':checked'))
				{
					selectQ($(this).attr('id').substring(9));
				}
			}
		);
	}
    
}

function doEcr(x) {
var oEcr = document.getElementById("ID3xSql");
	if (oEcr)
		oEcr.innerHTML=x+"<br/>"+oEcr.innerHTML;
}


var sendReq = function() {
 function handleReadyState(o, callback) {
        var poll = window.setInterval(function() {
            if(o && o.readyState == 4) {
                window.clearInterval(poll);
                if ( callback ){
                    callback(o);
                }
            }
        },
        50);
    }
  function doEcr(x) {
	var oEcr = document.getElementById("ID3xSql");
	if (oEcr)
		oEcr.innerHTML=x+"<br/>"+oEcr.innerHTML;
  }
  function parseIt(o) {
        var response = o.responseText;
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
									break;
							}
						}
						else 
							doEcr("erreur");
					}        
  }
  var getXHR = function() {
    var http;
    try {
      http = new XMLHttpRequest;
        getXHR = function() {
          return new XMLHttpRequest;
        };
    }
    catch(e) {
      var msxml = [
        'MSXML2.XMLHTTP.3.0',
        'MSXML2.XMLHTTP',
        'Microsoft.XMLHTTP'
      ];
      for (var i=0, len = msxml.length; i <len; ++i) {
        try {
          http = new ActiveXObject(msxml[i]);
          getXHR = function() {
            return new ActiveXObject(msxml[i]);
          };
          break;
        }
        catch(e) {}
      }
    }
    return http;
  };
  return function(uri, callback, postData) {
    var http = getXHR();
    http.open('GET', uri, true);
	doEcr("GET AJAX: <a href=\""+uri+"\" target=_blank>"+uri+"</a>");
    handleReadyState(http, callback || parseIt);
    http.send(postData || null);
    return http;
  };
}();

