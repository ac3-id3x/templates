//$$DYN:ID3:NOFOOTER$$
// Work In Progess LLA 06/2006
// NE PAS UTILISER

/*
var C2C_timeout = null;
var C2C_vitesse = 2000;
var C2C_nbtotal = 5;
var C2C_nbaffiches = 5;
var C2C_cursor = 0;
var C2C_mode = "normal";
var C2C_divid = null;
var C2C_prefix = "tabc2ccccc";
*/

var last_object = null;

var objcompteur = 0;

function obj_C2CC( divid, prefix, nbaffiches, nbtotal, vitesse, mode, events ) {

	if( !(this instanceof obj_C2CC) ) {
		return new obj_C2CC( divid, prefix, nbaffiches, nbtotal, vitesse, mode, events );
	}
	this.C2CC_divid = divid;
	this.C2CC_prefix = prefix;
	this.C2CC_nbaffiches = nbaffiches;
	this.C2CC_nbtotal = nbtotal;
	this.C2CC_vitesse = vitesse;
	this.C2CC_mode = mode;
	this.C2CC_cursor = 0;
	this.C2CC_interval = null;
	this.C2CC_id = objcompteur++;
	
	if( events ) {
		var div = document.getElementById( this.C2CC_divid );
		if( div ) {
			div.onmouseover = this.arret;
			div.onmouseout = this.checkRestart;
		}
	}
}
	
obj_C2CC.prototype.showDiv = function( index ) {
	//alert( this.C2C_prefix );
	var div = document.getElementById( this.C2CC_prefix + index );
	if( div ) {
		div.style.display = "inline";
		div.style.visibility = "visible";
	}	
}

obj_C2CC.prototype.hideDiv = function( index ) {
	var div = document.getElementById( this.C2CC_prefix + index );
	if( div ) {
		div.style.display = "none"; 
		div.style.visibility = "hidden"; 
	}
}

obj_C2CC.prototype.checkRestart = function( evt ) {
	if (!evt) var evt = window.event;
	var tg = (window.event) ? evt.srcElement : evt.target;
	while (this.C2CC_divid != tg.id && tg.nodeName != 'BODY' && tg.nodeName != 'body') {
		tg= tg.parentNode;
	}
	if ( tg.id != this.C2CC_divid ) {
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
	this.imageContinu();
}
	
obj_C2CC.prototype.afficheC2CC = function() {
	var temp, trouve;
	var i,j;
	var idx;
	
//	this.arret();
//	alert(this.C2C_divid);
	
	for( i=0 ; i<this.C2CC_nbtotal ; i++ ) {
		this.hideDiv( 1+i );
	}

	if( this.C2CC_mode == "normal" ) {
		
		// Mode Normal : on avance de C2C en C2C
		for( i=0; i< this.C2CC_nbaffiches; i++ ) {
			idx = i + this.C2CC_cursor;
			while( idx >= this.C2CC_nbtotal ) {
				idx -= this.C2CC_nbtotal;
			}
			this.showDiv( 1 + idx );
		}
		this.C2CC_cursor += this.C2CC_nbaffiches;
		while( this.C2CC_cursor >= this.C2CC_nbtotal ) {
			this.C2CC_cursor -= this.C2CC_nbtotal;
		}
		
	} else if( this.C2CC_mode == "random" ) {
		

		// Mode Random : on affiche des C2C au hasard (mais diff‚rents)
		var tabc2cc = new Array( this.C2CC_nbtotal );
		for( i=0; i< this.C2CC_nbtotal; i++ ) {
			tabc2cc[i] = 0;
		}
		
		var nbAff = this.C2CC_nbaffiches; 
		
		if (this.C2CC_nbtotal < nbAff)
		{
			nbAff = this.C2CC_nbtotal;
		}
		
		for( i=0; i< nbAff; i++ ) {
			if(i==0) {
				temp = Math.floor(Math.random() * this.C2CC_nbtotal) + 1;
			} else {
				do{
					trouve = 0;
					temp = Math.floor(Math.random() * this.C2CC_nbtotal) + 1;
					for( j=0 ; j <i ; j++ ) {
			 			if(temp==tabc2ccccc[j]) {
			 				trouve=1;
			 			}
			 		}
			 	}
			 	while(trouve ==1);
			}
			//alert("temp:" + temp);
			tabc2ccccc[i] = temp;
			this.showDiv( tabc2ccccc[i] );
		}
		
	} else {
		//Mode Invalide !!
	}
}

obj_C2CC.prototype.imageContinu = function() {
  this.afficheC2CC(); // raz tjs a 1
  var thisObj = this;
  this.C2CC_interval = setTimeout( function() { thisObj.imageContinu(); }, this.C2CC_vitesse);
	//alert("ID : " + this.C2C_id + ", div : " + this.C2C_divid + ", intervalle = " + this.C2C_interval );
}
	
obj_C2CC.prototype.arret = function() {
	if( this.C2CC_interval ) {
		//alert("Arrêt de l'intervalle " + this.C2C_interval + " divid = "+ this.C2C_divid );
		clearTimeout(this.C2CC_interval);
		this.C2CC_interval = null;
	}
}


function showDiv( index ) {
	if( last_object ) {
		last_object.showDiv( index );
	}
}

function hideDiv( index ) {
	if( last_object ) {
		last_object.hideDiv( index );
	}
}

function afficheC2c() {
	if( last_object ) {
		last_object.afficheC2c();
	}
}

function imageContinu() {
	if( last_object ) {
		last_object.imageContinu();
	}
}

function arret() {
	if( last_object ) {
		last_object.arret();
	}
}

function C2CC_install( divid, prefix, nbaffiches, nbtotal, vitesse, mode, events ) {
	
	last_object = new obj_C2CC( divid, prefix, nbaffiches, nbtotal, vitesse, mode, events );
	if( last_object ) {
		last_object.imageContinu();
	}
	return last_object;
}

