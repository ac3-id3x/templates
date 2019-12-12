$(document).ready(function() {
	var bouton = 0;
	var speed = 300;
	$('.flippingBandeau').each(function() {
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
				$(this).addClass('borderFlipping');
				$(this).children('.contentAnnonceBandeau').show();
		});
		$(this).mouseout(function() {
				$(this).removeClass('borderFlipping');
				$(this).children('.contentAnnonceBandeau').hide();
		});
	});
	// FIXING SIZE
	$('.moduleBandeau').each(function() {
		$countDiv = $(this).find('.flippingBandeau').length;
		if($countDiv <= 4) {
			$(this).parent().parent().find('.prevBandeau').css('background','url()');
			$(this).parent().parent().find('.nextBandeau').css('background','url()');
		}
		$flippingBandeauW = $(this).find('.flippingBandeau').outerWidth(true);
		$calculW = $flippingBandeauW * $countDiv;
		$(this).width($calculW);	
	});
	// NAV
	$('.nextBandeau').css('cursor','pointer');
	$('.nextBandeau').click(function() {
		if(bouton == 0) {
			// DETERMINE WHICH DIV SIZE
			$countDiv = $(this).parent().find('.flippingBandeau').length;
			$flippingBandeauW = $(this).parent().find('.flippingBandeau').outerWidth(true);
			$calculW = $flippingBandeauW * $countDiv;
			// END
			bouton = 1;
			var $position = $flippingBandeauW * 4;
			var $container = $(this).parent().find('.moduleBandeau');
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
	$('.prevBandeau').css('cursor','pointer');
	$('.prevBandeau').click(function() {
		if(bouton == 0) {
			// DETERMINE WHICH DIV SIZE
			$countDiv = $(this).parent().find('.flippingBandeau').length;
			$flippingBandeauW = $(this).parent().find('.flippingBandeau').outerWidth(true);
			$calculW = $flippingBandeauW * $countDiv;
			// END
			bouton = 1;
			var $position = $flippingBandeauW * 4;
			var $container = $(this).parent().find('.moduleBandeau');
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