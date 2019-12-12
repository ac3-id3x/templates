if(!$j) {
	var $j = jQuery.noConflict();
}
var TimefadeInOut = 370;
var start = 1;
function C2C_install2(divid, prefix, nbaffiches, nbtotal, vitesse) {
	//console.log("install");
	var modulo = nbtotal % nbaffiches;
	// CAS = 1 CDC ONLY
	if(nbaffiches == start && nbtotal != 1) {
		// DETERMINE RANDOM START
		var randomNum = Math.floor(Math.random()* nbtotal + start);
		for(i = start; i <= nbtotal; i++) {
			var div = "#"+prefix+i;
			if(i != randomNum) {
					$j(div).parent().hide();
					$j(div).hide();
			} else {
					$j(div).parent().show();
					$j(div).show();
			}
		}
		timerDiaporama2 = setTimeout('goDiaporamaFade2('+randomNum+',\''+prefix+'\','+nbtotal+','+vitesse+',\''+divid+'\','+nbaffiches+')',vitesse);
	// CAS = MULTIPLES CDC
	} else if(modulo == 0 && nbaffiches != nbtotal && nbtotal != 1) {
			for(i = start; i <= nbtotal; i++) {
				var div = "#"+prefix+i;
				if(i < start +nbaffiches) {
					$j(div).parent().show();
					$j(div).show();
				} else {
					$j(div).parent().hide();
					$j(div).hide();
				}
			}
		timerDiaporamaMultiple2 = setTimeout('goDiaporamaMultipleFade2('+start+',\''+prefix+'\','+nbtotal+','+nbaffiches+','+vitesse+',\''+divid+'\')',vitesse);
	// MULTIPLES CDC
	}	else if(nbtotal != nbaffiches) {
		for(i = start; i <= nbtotal; i++) {
				var div = "#"+prefix+i;
				if(i < start +nbaffiches) {
					$j(div).parent().show();
					$j(div).show();
				} else {
					$j(div).parent().hide();
					$j(div).hide();
				}
			}
		timerDiaporamaMultiple2 = setTimeout('goDiaporamaMultipleFade2('+start+',\''+prefix+'\','+nbtotal+','+nbaffiches+','+vitesse+',\''+divid+'\')',vitesse);
	} else {
		for(i = start; i <= nbaffiches;  i++) {
		var div = "#"+prefix+i; 	
		$j(div).parent().show();
		$j(div).show();
		}
	}
}
/* SINGLE */
function goDiaporamaFade2(init,prefix,nbtotal,vitesse,divid,nbaffiches) {
	//console.log("fade");
	clearTimeout(timerDiaporama2);
	var calcul = init + start;
	// RESET VAR
	if(calcul > nbtotal) {
		calcul = start;
	}
	// GO EFFECT
	var old_div = "#"+prefix + init;
	var new_div = "#"+prefix + calcul;
	$j(old_div).fadeOut(TimefadeInOut,function () {
		$j(this).parent().hide();
		$j(new_div).parent().show();
		$j(new_div).fadeIn(TimefadeInOut);
	});
	$j([window,document]).blur(function () {
		//console.log("out");
		clearTimeout(timerDiaporama2);
	});
	$j([window,document]).focus(function () {
		//console.log("in");
		clearTimeout(timerDiaporama2);
		C2C_install2(divid, prefix, nbaffiches, nbtotal, vitesse);
	});
	timerDiaporama2 = setTimeout('goDiaporamaFade2('+calcul+',\''+prefix+'\','+nbtotal+','+vitesse+',\''+divid+'\','+nbaffiches+')',vitesse);
}
/* MULTIPLE */
function goDiaporamaMultipleFade2(init,prefix,nbtotal,nbaffiches,vitesse,divid) {
	//console.log("fade multiple");
	clearTimeout(timerDiaporamaMultiple2);
	var calcul = init + nbaffiches;
	// RESET
	if(calcul >= nbtotal) {
		for(i = init; i < calcul; i++) {
			var div = "#"+prefix+i;
			$j(div).fadeOut(TimefadeInOut, function() {
				$j(this).parent().hide();
				for(z = start; z < start + nbaffiches; z++) {
					var div_in = "#"+prefix+z;
					$j(div_in).parent().show();
					$j(div_in).fadeIn(TimefadeInOut);
				}
			});
		}
		calcul = start;
	// PROGRESS
	} else {
		for(i = init; i < calcul; i++) {
			var div = "#"+prefix+i;
			$j(div).fadeOut(TimefadeInOut, function() {
				$j(this).parent().hide();
				for(z = calcul; z < calcul + nbaffiches; z++) {
					var div_in = "#"+prefix+z;
					$j(div_in).parent().show();
					$j(div_in).fadeIn(TimefadeInOut);
				}
			});
		}
	}
	$j([window,document]).blur(function () {
		//console.log("out");
		clearTimeout(timerDiaporamaMultiple2);
	});
	$j([window,document]).focus(function () {
		//console.log("in");
		clearTimeout(timerDiaporamaMultiple2);
		C2C_install2(divid, prefix, nbaffiches, nbtotal, vitesse);
	});
	timerDiaporamaMultiple2 = setTimeout('goDiaporamaMultipleFade2('+calcul+',\''+prefix+'\','+nbtotal+','+nbaffiches+','+vitesse+',\''+divid+'\')',vitesse);	
}