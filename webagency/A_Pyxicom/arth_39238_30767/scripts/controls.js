//$$DYN:ID3:NOFOOTER$$
// external_script.js
function CreateFlashControl(DivID, WIDTH, HEIGHT, URL, bgColor, ObjectID) {
  var d = document.getElementById(DivID);
  if( d ) {
  	var useDom = false;
  	
  	if( useDom ) {
	  	// Version DOM - marche pas sous IE ??
			var myObject = document.createElement('object');
			if( myObject ) {
				if( WIDTH ) { 
					myObject.width = WIDTH;
				}
				if( HEIGHT ) {
					myObject.height = HEIGHT;
				}
				if( URL ) {
					//myObject.url = URL;
					//myObject.data = URL;
				}			
				if( ObjectID ) {
					myObject.id = ObjectId;
				}
				if( document.all ) {
					// IE Only
					myObject.classid= "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
					//myObject.uiMode = "none" ;
					myObject.codeBase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0";
					//myObject.codeType = "application/x-shockwave-flash";
				}
				
				myObject.style = "z-index: -1";

				var param = document.createElement('param');
				param.name = "Movie";
				param.value = URL;
				myObject.appendChild( param );
				
				param = document.createElement('param');
				param.name = "Src";
				param.value = URL;
				myObject.appendChild( param );
				
				param = document.createElement('param');
				param.name = "Quality";
				param.value = "High";
				myObject.appendChild( param );
				
				param = document.createElement('param');
				param.name = "WMode";
				param.value = "Transparent";
				myObject.appendChild( param );
				
				if( ! document.all ) {
					var embed = document.createElement('embed');
					embed.src = URL;
					embed.quality = "high";
					embed.wmode = "transparent";
					embed.pluginspage = "http://www.macromedia.com/go/getflashplayer";
					if( embed.type ) {
						embed.type = "application/x-shockwave-flash";
					}
					embed.width = WIDTH;
					embed.height = HEIGHT;
					myObject.appendChild( embed );
		 			
					embed = document.createElement('noembed');
					embed.innerHTML = d.innerHTML;
					embed.style = "z-index: -1";
					myObject.appendChild( embed );
				}
	
				d.innerHTML = "";
	
				d.appendChild(myObject);
				
				/*
				if( document.all ) {
					alert( d.innerHTML );
				}
				*/
			} 
		} else {
			var content = d.innerHTML;
			var object = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" style="z-index: -1" width="' + WIDTH + '" height="' + HEIGHT + '">';
			object += '<param name="movie" value="' + URL + '" />';
			object += '<param name="quality" value="high" />';
			object += '<param name="wmode" value="transparent" />';
			if( bgColor ) {
				object += '<param name="bgcolor" value="' + bgColor + '" />';
			}
			object += '<embed src="' + URL + '" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" style="z-index: -1" width="' + WIDTH + '" height="' + HEIGHT + '"';
			if( bgColor ) {
				object += 'bgcolor="' + bgColor + '">';
			}
			object += '<noembed>';
			object += content;
			object += '</noembed>';
			object += '</embed></object>';
		
			d.innerHTML = object;
			
			
			//if( document.all ) {
				//alert( d.innerHTML );
			//}
			

		}
  } else {
  	alert("Identifiant : " + ObjectID + " inconnu dans la page");
  }
}