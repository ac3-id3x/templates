$(document).ready(function() {
	$('.flipping').each(function() {
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
				$(this).children('.contentAnnonce').show();
		});
		$(this).mouseout(function() {
				$(this).children('.contentAnnonce').hide();
		});
	});
	// FIXING SIZE
	var $countDiv = $('#contentModule').find('.flipping').length;
	var $flippingW = $('#contentModule').find('.flipping').outerWidth(true);
	var $flippingW = $flippingW/2;
	var $calculW = parseInt($flippingW * $countDiv) + 1;
	$('#contentModule').width($calculW);
	// NAV
	var bouton = 0;
	var speed = 300;
	$('.next').css('cursor','pointer');
	$('.next').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $flippingW * 4;
			var $container = $('#contentModule');
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
	$('.prev').css('cursor','pointer');
	$('.prev').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $flippingW * 4;
			var $container = $('#contentModule');
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