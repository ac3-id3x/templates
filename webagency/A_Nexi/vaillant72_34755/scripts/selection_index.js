var TimefadeInOut = 370;
var start = 1;
function C2C_install(divid, prefix, nbaffiches, nbtotal, vitesse) {
	//console.log("install");
	alert("test");
	var modulo = nbtotal % nbaffiches;
	// CAS = 1 CDC ONLY
	if(nbaffiches == start && nbtotal != 1) {
		// DETERMINE RANDOM START
		var randomNum = Math.floor(Math.random()* nbtotal + start);
		for(i = start; i <= nbtotal; i++) {
			var div = "#"+prefix+i;
			if(i != randomNum) {
					$(div).parent().hide();
					$(div).hide();
			} else {
					$(div).parent().show();
					$(div).show();
			}
		}
		timerDiaporama = setTimeout('goDiaporamaFade('+randomNum+',\''+prefix+'\','+nbtotal+','+vitesse+',\''+divid+'\','+nbaffiches+')',vitesse);
	// CAS = MULTIPLES CDC
	} else if(modulo == 0 && nbaffiches != nbtotal && nbtotal != 1) {
			for(i = start; i <= nbtotal; i++) {
				var div = "#"+prefix+i;
				if(i < start +nbaffiches) {
					$(div).parent().show();
					$(div).show();
				} else {
					$(div).parent().hide();
					$(div).hide();
				}
			}
		timerDiaporamaMultiple = setTimeout('goDiaporamaMultipleFade('+start+',\''+prefix+'\','+nbtotal+','+nbaffiches+','+vitesse+',\''+divid+'\')',vitesse);
	// MULTIPLES CDC BUT NO EFFECTS
	}	else {
		for(i = start; i <= nbaffiches; i++) {
			var div = "#"+prefix+i;
			$(div).parent().show();
			$(div).show();
		}
	}
}
/* SINGLE */
function goDiaporamaFade(init,prefix,nbtotal,vitesse,divid,nbaffiches) {
	//console.log("fade");
	clearTimeout(timerDiaporama);
	var calcul = init + start;
	// RESET VAR
	if(calcul > nbtotal) {
		calcul = start;
	}
	// GO EFFECT
	var old_div = "#"+prefix + init;
	var new_div = "#"+prefix + calcul;
	$(old_div).fadeOut(TimefadeInOut,function () {
		$(this).parent().hide();
		$(new_div).parent().show();
		$(new_div).fadeIn(TimefadeInOut);
	});
	$([window,document]).blur(function () {
		//console.log("out");
		clearTimeout(timerDiaporama);
	});
	$([window,document]).focus(function () {
		//console.log("in");
		clearTimeout(timerDiaporama);
		C2C_install(divid, prefix, nbaffiches, nbtotal, vitesse);
	});
	timerDiaporama = setTimeout('goDiaporamaFade('+calcul+',\''+prefix+'\','+nbtotal+','+vitesse+',\''+divid+'\','+nbaffiches+')',vitesse);
}
/* MULTIPLE */
function goDiaporamaMultipleFade(init,prefix,nbtotal,nbaffiches,vitesse,divid) {
	//console.log("fade multiple");
	clearTimeout(timerDiaporamaMultiple);
	var calcul = init + nbaffiches;
	// RESET
	if(calcul >= nbtotal) {
		for(i = init; i < calcul; i++) {
			var div = "#"+prefix+i;
			$(div).fadeOut(TimefadeInOut, function() {
				$(this).parent().hide();
				for(z = start; z < start + nbaffiches; z++) {
					var div_in = "#"+prefix+z;
					$(div_in).parent().show();
					$(div_in).fadeIn(TimefadeInOut);
				}
			});
		}
		calcul = start;
	// PROGRESS
	} else {
		for(i = init; i < calcul; i++) {
			var div = "#"+prefix+i;
			$(div).fadeOut(TimefadeInOut, function() {
				$(this).parent().hide();
				for(z = calcul; z < calcul + nbaffiches; z++) {
					var div_in = "#"+prefix+z;
					$(div_in).parent().show();
					$(div_in).fadeIn(TimefadeInOut);
				}
			});
		}
	}
	$([window,document]).blur(function () {
		//console.log("out");
		clearTimeout(timerDiaporamaMultiple);
	});
	$([window,document]).focus(function () {
		//console.log("in");
		clearTimeout(timerDiaporamaMultiple);
		C2C_install(divid, prefix, nbaffiches, nbtotal, vitesse);
	});
	timerDiaporamaMultiple = setTimeout('goDiaporamaMultipleFade('+calcul+',\''+prefix+'\','+nbtotal+','+nbaffiches+','+vitesse+',\''+divid+'\')',vitesse);
	
}