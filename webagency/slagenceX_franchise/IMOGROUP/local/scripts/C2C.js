// Work In Progess LLA 06/2006
// NE PAS UTIISER

var C2C_timeout = null;
var C2C_vitesse = 2000;
var C2C_nbtotal = 5;
var C2C_nbaffiches = 5;
var C2C_cursor = 0;
var C2C_mode = "normal";
var C2C_divid = null;
var C2C_prefix = "tabc2c";

var nbc2c = 10;
var celki = 0;
var celki2 = 0;

function C2C_install( divid, prefix, nbaffiches, nbtotal, vitesse, mode, events ) {
	C2C_divid = divid;
	C2C_prefix = prefix;
	C2C_nbaffiches = nbaffiches;
	C2C_nbtotal = nbtotal;
	C2C_vitesse = vitesse;
	C2C_mode = mode;
	
	if( events ) {
		C2C_installEvents( divid );
	}
	imageContinu();
}

function showDiv( index ) {
	var div = document.getElementById( C2C_prefix + index );
	if( div ) {
		div.style.display = "inline";
		div.style.visibility = "visible";
	}	
}
function hideDiv( index ) {
	var div = document.getElementById( C2C_prefix + index );
	if( div ) {
		div.style.display = "none"; 
		div.style.visibility = "hidden"; 
	}
}

function C2C_installEvents( divid ) {
	var div = document.getElementById( divid );
	if( div ) {
		C2C_divid = divid;
		div.onmouseover = arret;
		div.onmouseout = checkRestart;
	}
}

function checkRestart( evt ) {
	if (!evt) var evt = window.event;
	var tg = (window.event) ? evt.srcElement : evt.target;
	while (C2C_divid != tg.id && tg.nodeName != 'BODY' && tg.nodeName != 'body') {
		tg= tg.parentNode;
	}
	if ( tg.id != C2C_divid ) {
		return;
	}
	var reltg = (evt.relatedTarget) ? evt.relatedTarget : evt.toElement;
	if( !reltg ) {
		return;
	}
	while (reltg != tg && reltg.nodeName != 'BODY' && reltg.nodeName != 'body') {
		reltg= reltg.parentNode;
	}
	if (reltg== tg) {
		return;
	}
	imageContinu();
}

function afficheC2c(){

	var temp, trouve;
	var i,j;
	var idx;
	
	
	for( i=0 ; i<C2C_nbtotal ; i++ ) {
		hideDiv( 1+i );
	}

	if( C2C_mode == "normal" ) {
		
		// Mode Normal : on avance de C2C en C2C
		for( i=0; i< C2C_nbaffiches; i++ ) {
			idx = i + C2C_cursor;
			while( idx >= C2C_nbtotal ) {
				idx -= C2C_nbtotal;
			}
			showDiv( 1 + idx );
		}
		C2C_cursor += C2C_nbaffiches;
		while( C2C_cursor >= C2C_nbtotal ) {
			C2C_cursor -= C2C_nbtotal;
		}
		
	} else if( C2C_mode == "random" ) {
		

		// Mode Random : on affiche des C2C au hasard (mais diff‚rents)
		var tabc2c = new Array( C2C_nbtotal );
		for( i=0; i< C2C_nbtotal; i++ ) {
			tabc2c[i] = 0;
		}
		for( i=0; i< C2C_nbaffiches; i++ ) {
			if(i==0) {
				temp = Math.floor(Math.random() * C2C_nbtotal) + 1;
			} else {
				do{
					trouve = 0;
					temp = Math.floor(Math.random() * C2C_nbtotal) + 1;
					for( j=0 ; j <i ; j++ ) {
			 			if(temp==tabc2c[j]) {
			 				trouve=1;
			 			}
			 		}
			 	}
			 	while(trouve ==1);
			}
			//alert("temp:" + temp);
			tabc2c[i] = temp;
			showDiv( tabc2c[i] );
		}
		
	} else {
		//Mode Invalide !!
	}
}

function imageContinu() {
  afficheC2c(); // raz tjs a 1
  C2C_timeout = setTimeout("imageContinu()", C2C_vitesse);
}

function arret() {
	if( C2C_timeout ) {
		clearTimeout(C2C_timeout);
		C2C_timeout = null;
	}
}
