// ==UserScript==
// @name            Poliris - Google
// @author          Ludovic LANGE <http://www.poliris.com/>
// @namespace       http://gestprod.poliris.com/z/backoffice/poliris_gestprod/greasemonkey/
// @description     Modification des resultats Google (coloration, liens)
// @include         http://google.tld/*
// @include         http://*.google.tld/*
// ==/UserScript==
// $$DYN:ID3:NOFOOTER$$

var objects = new Array();
var urls = new Array();


function numberResults( event ) {
	var result_link_xpath = "//*[(name() = 'P' and @class='g') or (name() = 'H3' and @class='sem')]/A";
	var result_link_regex = /^(?:([^\/].*)|\/url\?.*q=([^&]+))$/i;
	var result_domain_regex = /^http:\/\/([^\/:]+)\/.*$/i;

	var ps = document.getElementsByTagName('p');
	var spans = document.getElementsByTagName('span');
	var page = 0;
	var count = -1;
	var num = window.location.href.match("num=([0-9]+)");
	if (num == null){
		num = 10;
	} else {
		num = num[1]
	}
	for (var i = 0; i < spans.length; i++)
	{
		if (spans[i].className == 'i')
		{
			page = spans[i].innerHTML - 1;
		}
	}
	var el;
	var t;
	var results;
	var result_link;
	var result_url;
	var j = 0;
	for (i = 0; i < ps.length; i++)
	{
		if (ps[i].className == 'g')
		{
			count++;
			
      el = document.createElement('span');
      el.setAttribute("style","font-weight: bold");
      t = document.createTextNode("[" + ((count + 1) + (page * num)) + ".] ");
      el.appendChild(t);
      //ps[i].insertBefore(el, ps[i].firstChild);
      
			results = ps[i].getElementsByTagName("a");
			for( j = 0; j < results.length; j++ ) {
				if( results[j].getAttribute("class") == "l" ) {
					result_url = results[j].getAttribute( "href" ).replace( this.result_link_regex, "$1$2" );
					result_url = result_url.replace( /^http:\/\/([^\/:]+)\/.*$/, "$1" );
					urls.push( result_url );
		      objects.push( ps[i] );
	      	results[j].insertBefore(el, results[j].firstChild);
	      	break;
		    }
			}
		}
	}
	if( urls.length > 0 ) {
		GM_xmlhttpRequest({
			method:"GET",
			url:"http://gestprod.poliris.com.xdev.poliris.net/information_urls.txt?urls=" + urls.join("|"),
		  onload:reaction
		});
	}
}

function reaction( details ) {
/*		    alert([
		      details.status,
		      details.statusText,
		      details.readyState,
		      details.responseHeaders,
		      details.responseText
		    ].join("\n"));*/
	var resultat = eval( details.responseText );
	var i;
	var j;
	var obj;
	var el;
	var t;
	if( resultat != null ) {
		for( i=0; i< resultat.length; i++ ) {
			obj = null;
			for( j=0; j< urls.length; j++ ) {
				if( urls[j] == resultat[i].url ) {
					obj = objects[j];

					//alert("Trouve : " + resultat[i].url + ", : " + obj );
		      obj.setAttribute("style","background-color: #BFEEAC;");
		      
		      if( resultat[i].idconfig ) {
		      	el = document.createElement('a');
		      	el.setAttribute("href", "http://conf.id3x.com/config.htm?cfg=" + resultat[i].idconfig );
		      	el.setAttribute("target", "_blank" );
			      t = document.createTextNode("[Edition Config]");
			      el.appendChild(t);
			      obj.appendChild(el);
		      }
		      
		      if( resultat[i].iddossier ) {
		      	el = document.createElement('a');
		      	el.setAttribute("href", "http://gestprod.poliris.com/" + resultat[i].iddossier + "/1/ajoutmodif.htm" );
		      	el.setAttribute("target", "_blank" );
			      t = document.createTextNode("[Gestprod dossier site]");
			      el.appendChild(t);
			      obj.appendChild(el);
		      }
		      
		      if( resultat[i].idpublication ) {
		      	el = document.createElement('a');
		      	el.setAttribute("href", "http://saiss.seloger.com/list_agences.htm?idpublication=" + resultat[i].idpublication  );
		      	el.setAttribute("target", "_blank" );
			      t = document.createTextNode("[Saiss]");
			      el.appendChild(t);
			      obj.appendChild(el);
		      }
		      if( resultat[i].idtypepublication ) {
		      	el = document.createElement('a');
		      	el.setAttribute("href", "http://saiss.seloger.com/list_agences.htm?idtypepublication=" + resultat[i].idtypepublication  );
		      	el.setAttribute("target", "_blank" );
			      t = document.createTextNode("[Saiss]");
			      el.appendChild(t);
			      obj.appendChild(el);
		      }
				} 
			}
			if( obj == null ) {
				alert("Non Trouve : " + resultat[i].url );
			}
		}
	}
}

window.addEventListener("load", numberResults, false);
