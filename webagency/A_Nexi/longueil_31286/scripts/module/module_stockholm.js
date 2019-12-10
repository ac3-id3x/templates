$(document).ready(function() {
	/* ANNONCES */
	var bouton = 0;
	var speed = 200;
	var $widthAnnonce = $('.annonceModule').outerWidth(true);
	$('.leftFlecheModule').css('cursor','pointer');
	$('.leftFlecheModule').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $widthAnnonce * 1;
			var $container = $(this).parent().parent().find('.masqueModule');
			var $ml = parseInt($container.css('margin-left'));
			var $calcul = $ml-$position;
			if($ml == 0) {
				var $calcul = $ml-$position;
				$container.animate({marginLeft:-$container.width()-$calcul},speed,function(){bouton=0;});
			} else {
				var $calcul = $ml-($position * -1);
				if($calcul > 0) {
					$calcul = 0;
				}
				$container.animate({marginLeft:$calcul},speed, function(){bouton=0;});
			}
		}
	});
	$('.rightFlecheModule').css('cursor','pointer');
	$('.rightFlecheModule').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $widthAnnonce * 1;
			var $container = $(this).parent().parent().find('.masqueModule');
			var $ml = parseInt($container.css('margin-left'));
			var $calcul = $ml-$position;
			if(($calcul * -1) == $container.width()) {
				$container.animate({marginLeft:0},speed,function(){bouton=0;});
			} else {
				if(($calcul * -1) >= $container.width()) {
					$calcul = 0;
				}
				$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
			}
		}
	});
	$('.masqueModule').each(function() {
		var $t = $(this);
		var $length = $t.find('.annonceModule').length;
		var $width = $t.find('.annonceModule').outerWidth(true);
		$t.width($length * $width);
	});
	$('.photoAnnonceModule img').each(function() {
		$(this).mouseover(function() {
			$(this).parent().parent().parent().parent().find('.photoAnnonceModule img').not(this).css('opacity',0.5);
		});
		$(this).mouseout(function() {
			$(this).parent().parent().parent().parent().find('.photoAnnonceModule img').not(this).css('opacity',1);
		});
	});
	/* HOME */
	var bouton_home = 0;
	var moduleDiv = 	$("div[id*=moduleStockholmHome]");
	var $container = moduleDiv.children('.containerHome').children('ul');
	var $countLi = moduleDiv.find('li').length;
	var $widthLi = moduleDiv.find('li').outerWidth(true);
	moduleDiv.find('ul').width($countLi * $widthLi);
	var $previous = moduleDiv.find('#prevBouton');
	var $next = moduleDiv.find('#nextBouton');
	$previous.css('cursor','pointer');
	$previous.click(function() {
		if(bouton_home == 0) {
			bouton_home = 1;
			var $prevElement = $(this).parent().parent().parent().prev();
			if($prevElement.length > 0) {
				var $width = $prevElement.outerWidth(true);
				var $start = parseInt($container.css('marginLeft'));
				var $calcul = $start + $width;
				$container.animate({marginLeft:$calcul+'px'},500, function() {
					bouton_home = 0;
				})
			} else {
				var $width = $(this).parent().parent().parent().parent().find('li').last().outerWidth(true);
				var $start = $container.width();
				var $calcul = $start - $width;
				$container.animate({marginLeft:-$calcul+'px'},500, function() {
					bouton_home = 0;
				})
			}
		}
	});
	$next.css('cursor','pointer');
	$next.click(function() {
		if(bouton_home == 0) {
			bouton_home = 1;
			var $nextElement = $(this).parent().parent().parent().next();
			if($nextElement.length > 0) {
				var $width = $nextElement.outerWidth(true);
				var $start = parseInt($container.css('marginLeft'));
				var $calcul = $start - $width;
				$container.animate({marginLeft:$calcul+'px'},500, function() {
					bouton_home = 0;
				})
			} else {
				$container.animate({marginLeft:'0px'},500, function() {
					bouton_home = 0;
				})
			}
		}
	});
});