// ==UserScript==
// @name         Poliris - Sites
// @author       Ludovic LANGE <http://www.poliris.com/>
// @namespace    http://gestprod.poliris.com/z/backoffice/poliris_gestprod/greasemonkey/
// @description  Informations sur les sites developpes par Poliris
// @include      http://*
// ==/UserScript==
// $$DYN:ID3:NOFOOTER$$

	String.prototype.LTrim=new Function("return this.replace(/^\\s+/,'')")
	String.prototype.RTrim=new Function("return this.replace(/\\s+$/,'')")
	String.prototype.Trim=new Function("return this.replace(/^\\s+|\\s+$/g,'')")	

function checkPage(){
	var href = window.location.host;
	var id3comments = document.evaluate( "//comment()", document, null, XPathResult.ANY_TYPE, null);
	var id3comment = null;
	var i = id3comments.iterateNext();
	//alert( i.nodeValue );
	while( i != null ) {
		if( i.nodeValue.Trim().substring(0, 3).toLowerCase() == "id3" ) {
			id3comment = i.nodeValue;
			break;
		}
//		alert( i.nodeValue );
		i = id3comments.iterateNext();
	}
	
	var id3info = parseId3Info( id3comment );
	if( id3info ) {
//			result = { engine:null, version:null, frontal:null; dev:false; gentime:null; cache:null; date:null; page:null };
//		GM_log("checkpage() ID3[x] detected, href="+ href+", info=" + id3comment + ", engine = " + id3info.engine + ", version = " + id3info.version + ", frontal: " + id3info.frontal + ", dev: " + id3info.dev + ", gentime: " + id3info.gentime + ", cache: " + id3info.cache + ", date: " + id3info.date + ", page: " + id3info.page );
		info( id3info );
	}
}

/*
ID3 ipe v0.80b - id6 - 00:00.013  full - 28/01/2006 02:49:07 / (index.htm)index.htm #113
ID3 ipe v0.80b - id9 - 00:00.346  no - 28/01/2006 03:00:03 / (index.htm)index.htm #1336
ID3x v2.65 - X1 - static - 28/01/2006 01:14:05 - index.htm
ID3x v2.65 - X2 - static - 28/01/2006 03:01:16 - index.htm
ID3x v2.65 - XDEV - 02.477.282 - none - 28/01/2006 03:01:04 - index.htm
ID3x v2.65 - X2 - 00.697.318 - none - 28/01/2006 03:01:16 - index.htm
*/
function parseId3Info( id3comment ) {
	var result = null;
	var tablo = null;
	var tmp = null;
	if( (id3comment != null) && (id3comment.length>0) ) {
		//GM_log("parseId3Info(" + id3comment + ")");
		id3comment = id3comment.Trim();
		//GM_log("parseId3Info(" + id3comment + ")");
		tablo = id3comment.split( " - " );
		//GM_log("parseId3Info() tablo.length = " + tablo.length);
		tmp=tablo[0].substring( 0, 4 ).toLowerCase().Trim();
		//GM_log("parseId3Info() tmp = " + tmp);
		if( (tmp=="id3") || (tmp=="id3x") ) {
			result = { engine:null, version:null, frontal:null, dev:false, gentime:null, cache:null, date:null, page:null };

			// version
			var vers = tablo.shift().match(/(v.*)$/);
			if( vers.length > 1 ) {
				result.version = vers[1].Trim();
			}
			
			//frontal
			result.frontal = tablo.shift().replace(/\(tst\)/,'').Trim();
			
			// ID3x
			if( tmp=="id3x" ) {
				// engine
				result.engine="ID3x";
				// dev
				if( result.frontal.toLowerCase() == "xdev" ) {
					result.dev = true;
				}
				// gentime
				if( tablo.length == 4 ) {
					result.gentime = tablo.shift().Trim();
				}
				// cache
				result.cache = tablo.shift().Trim();
				// date
				result.date = tablo.shift().Trim(); 
				// page
				result.page = tablo.shift().Trim(); 
			// ID3
			} else {
				//Engine
				result.engine="ID3";
				// Dev
				if( result.frontal.toLowerCase() == "id2" ) {
					result.dev = true;
				}
				
				tmp = tablo.shift().split("  ");
				if( tmp ) {
					if( tmp.length > 0 ) {
						// Gentime
						result.gentime = tmp[0].Trim();
						if( tmp.length > 1 ) {
							// Cache
							result.cache = tmp[1].Trim();
						}
					}
				}

				tmp = tablo.shift().split(" / ");
				if( tmp ) {
					if( tmp.length > 0 ) {
						// Date
						result.Date = tmp[0].Trim();
						if( tmp.length > 1 ) {
							// Page
							tmp = tmp[1].match(/\((.*)\)/);
							if( tmp.length > 1 ) {
								result.page = tmp[1].Trim();
							}
						}
					}
				}
			}
			
		}
	}
	return result;
}

//			result = { engine:null, version:null, frontal:null, dev:false, gentime:null, cache:null, date:null, page:null };
function info( id3info ) {
	
//		var id3ftx = ["id0", "id1", "id5", "id6", "id8", "id9", "id13"];
//		var id3xftd = ["x1", "x2", "x3", "];

		var href = window.location.host;
		var prefix = (window.location.protocol ? (window.location.protocol + "//") : "");
		var postfix = (window.location.port ? ":" + window.location.port : "") +
			(window.location.pathname ? window.location.pathname : "") + 
			(window.location.hash ? window.location.hash : "") + 
			(window.location.search ? window.location.search : "");
		var newurl = "";
			
		if( id3info.engine.toLowerCase() == "id3x" ) {
			if( !id3info.dev ) {
				newurl = prefix + href + ".xdev.poliris.net" + postfix;
			} else {
				newurl = prefix + href.replace( /\.xdev$|\.xdev\.poliris\.net$/, '' ) + postfix;
			}
		} else {
			if( !id3info.dev ) {
				newurl = prefix + href + ".id2.poliris.net" + postfix;
			} else {
				newurl = prefix + href.replace( /\.id2$|\.id2\.poliris\.net$/, '' ) + postfix;
			}
		}
		
		var html = null;

		var pn = document.createElement('div');
		pn.style.position = 'fixed';
		pn.style.top = '0px';
		pn.style.right = '50px';
		pn.style.fontFamily = 'verdana, sans-serif';
		pn.style.fontSize = '10px';
		pn.style.color = '#000000';
		pn.style.fontWeight = 'bold';
		pn.style.background = '#eae8e4';
		pn.style.padding = '1px 2px 1px 2px';
		pn.style.borderBottom = '1px solid #000000';
		pn.style.borderLeft = '1px solid #000000';
		pn.style.borderTop = '1px solid #000000';
		pn.style.borderRight = '1px solid #000000';
		//pn.appendChild(document.createTextNode('Page' + pNumber));
//		pn.innerHTML="Site : href="+ href+", engine = " + id3info.engine + ", version = " + id3info.version + ", frontal: " + id3info.frontal + ", dev: " + id3info.dev + ", gentime: " + id3info.gentime + ", cache: " + id3info.cache + ", date: " + id3info.date + ", page: " + id3info.page;
		html = "ftal: " + id3info.frontal + " | <a style='color: #000000' href='" + newurl + "'>" + (id3info.dev ? "Normal" : "Dev" ) + "</a>";
		if( href != "conf.id3x.com" ) {
			html += " | <a style='color: #000000' target='_blank' href='http://conf.id3x.com/config_finder.htm?s=" + href + "&mode=text'>Conf</a>";
		}
		html += " | <a style='color: #000000' target='_blank' href='http://gestprod.poliris.com/result_dossier.htm?etatdocument=1%2C2%2C3%2C4&nom_site=" + href.replace(/^www./,'') + "&Rechercher=Rechercher'>Gestprod</a>";

		pn.innerHTML = html;

		body = document.getElementsByTagName('body');
		body[0].appendChild(pn);	
}


window.addEventListener("load", checkPage, false);