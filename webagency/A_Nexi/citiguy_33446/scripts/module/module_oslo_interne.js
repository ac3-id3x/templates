$(document).ready(function() {
	$('.flippingInterne').each(function() {
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
				$(this).children('.contentAnnonceInterne').show();
		});
		$(this).mouseout(function() {
				$(this).children('.contentAnnonceInterne').hide();
		});
	});
	// FIXING SIZE
	var $countDiv = $('#contentModuleInterne').find('.flippingInterne').length;
	var $flippingInterneW = $('#contentModuleInterne').find('.flippingInterne').outerWidth(true);
	var $calculW = parseInt($flippingInterneW * $countDiv) + 1;
	$('#contentModuleInterne').width($calculW);
	// NAV
	var bouton = 0;
	var speed = 300;
	$('.nextInterne').css('cursor','pointer');
	$('.nextInterne').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $flippingInterneW * 4;
			var $container = $('#contentModuleInterne');
			var $ml = parseInt($container.css('margin-left'));
			var $calcul = $ml-$position;
			if(((($calcul-1) * -1)  == $calculW) || (($calcul * -1)  == $calculW)) {
				$container.animate({marginLeft:0},speed,function(){bouton=0;});
			} else {
				if(($calcul * -1) >= $calculW) {
					$calcul = 0;
				}
				$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
			}
		}
	});
	$('.prevInterne').css('cursor','pointer');
	$('.prevInterne').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $flippingInterneW * 4;
			var $container = $('#contentModuleInterne');
			var $ml = parseInt($container.css('margin-left'));
			if($ml == 0 || $ml == -1) {
				var $calcul = $ml-$position;
				$container.animate({marginLeft:-$calculW-$calcul},speed,function(){bouton=0;});
			} else {
				var $calcul = $ml-($position * -1);
				if($calcul > 0) {
					$calcul = 0;
				}
				$container.animate({marginLeft:$calcul},speed, function(){bouton=0;});
			}
		}
	});
});