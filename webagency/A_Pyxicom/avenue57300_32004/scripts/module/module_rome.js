$(document).ready(function() {
	var bouton = 0;
	var speed = 300;
	var $ul1 = $('#new').find('.moduleRome').find('ul');
	var $ul2 = $('#cdc').find('.moduleRome').find('ul');
	var $ul3 = $('#exclu').find('.moduleRome').find('ul');
	var $countLi1 = $('#new').find('.moduleRome').find('li').length;
	var $countLi2 = $('#cdc').find('.moduleRome').find('li').length;
	var $countLi3 = $('#exclu').find('.moduleRome').find('li').length;
	var $widthLi = $('.moduleRome').find('li').outerWidth(true);
	var $calculW1 = $countLi1 * $widthLi;
	var $calculW2 = $countLi2 * $widthLi;
	var $calculW3 = $countLi3 * $widthLi;
	$ul1.width($calculW1);
	$ul2.width($calculW2);
	$ul3.width($calculW3);
	$('.moduleRome').find('.annonceFlipping').each(function() {
		$(this).css('cursor','pointer');
		$(this).hover(
		function() {
			$(this).children('.contentAnnonceFlipping').fadeIn(150);
		},
		function() {
			$(this).children('.contentAnnonceFlipping').fadeOut(150);
		});
	});
	if($countLi1 > 4) {
		$('#new').find('.moduleRome').children('.flecheGauche').css('cursor','pointer');
		$('#new').find('.moduleRome').children('.flecheGauche').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $position = $widthLi * 4;
				var $container = $('#new').find('.moduleRome').children('.masqueModuleRome').children('ul');
				var $ml = parseInt($container.css('margin-left'));
				if($ml == 0) {
					var $calcul = $ml-$position;
					$container.animate({marginLeft:-$calculW1-$calcul},speed,function(){bouton=0;});
				} else {
					var $calcul = $ml-($position * -1);
					if($calcul > 0) {
						$calcul = 0;
					}
					$container.animate({marginLeft:$calcul},speed, function(){bouton=0;});
				}
			}
		});
		$('#new').find('.moduleRome').children('.flecheDroite').css('cursor','pointer');
		$('#new').find('.moduleRome').children('.flecheDroite').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $position = $widthLi * 4;
				var $container = $('#new').find('.moduleRome').children('.masqueModuleRome').children('ul');
				var $ml = parseInt($container.css('margin-left'));
				var $calcul = $ml-$position;
				if(($calcul * -1) == $calculW1) {
					$container.animate({marginLeft:0},speed,function(){bouton=0;});
				} else {
					if(($calcul * -1) >= $calculW1) {
						$calcul = 0;
					}
					$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
				}
			}
		});
	} else {
		$('#new').find('.moduleRome').children('.flecheDroite').css('display','none');
		$('#new').find('.moduleRome').children('.flecheGauche').css('display','none');
	}
	
	if($countLi2 > 4) {
		$('#cdc').find('.moduleRome').children('.flecheGauche').css('cursor','pointer');
		$('#cdc').find('.moduleRome').children('.flecheGauche').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $position = $widthLi * 4;
				var $container = $('#cdc').find('.moduleRome').children('.masqueModuleRome').children('ul');
				var $ml = parseInt($container.css('margin-left'));
				if($ml == 0) {
					var $calcul = $ml-$position;
					$container.animate({marginLeft:-$calculW2-$calcul},speed,function(){bouton=0;});
				} else {
					var $calcul = $ml-($position * -1);
					if($calcul > 0) {
						$calcul = 0;
					}
					$container.animate({marginLeft:$calcul},speed, function(){bouton=0;});
				}
			}
		});
		$('.moduleRome').children('.flecheDroite').css('cursor','pointer');
		$('.moduleRome').children('.flecheDroite').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $position = $widthLi * 4;
				var $container = $('#cdc').find('.moduleRome').children('.masqueModuleRome').children('ul');
				var $ml = parseInt($container.css('margin-left'));
				var $calcul = $ml-$position;
				if(($calcul * -1) == $calculW2) {
					$container.animate({marginLeft:0},speed,function(){bouton=0;});
				} else {
					if(($calcul * -1) >= $calculW2) {
						$calcul = 0;
					}
					$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
				}
			}
		});
	} else {
		$('#cdc').find('.moduleRome').children('.flecheDroite').css('display','none');
		$('#cdc').find('.moduleRome').children('.flecheGauche').css('display','none');
	}
	
	
	if($countLi3 > 4) {
		$('#exclu').find('.moduleRome').children('.flecheGauche').css('cursor','pointer');
		$('#exclu').find('.moduleRome').children('.flecheGauche').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $position = $widthLi * 4;
				var $container = $('#exclu').find('.moduleRome').children('.masqueModuleRome').children('ul');
				var $ml = parseInt($container.css('margin-left'));
				if($ml == 0) {
					var $calcul = $ml-$position;
					$container.animate({marginLeft:-$calculW3-$calcul},speed,function(){bouton=0;});
				} else {
					var $calcul = $ml-($position * -1);
					if($calcul > 0) {
						$calcul = 0;
					}
					$container.animate({marginLeft:$calcul},speed, function(){bouton=0;});
				}
			}
		});
		$('#exclu').find('.moduleRome').children('.flecheDroite').css('cursor','pointer');
		$('#exclu').find('.moduleRome').children('.flecheDroite').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $position = $widthLi * 4;
				var $container = $('#exclu').find('.moduleRome').children('.masqueModuleRome').children('ul');
				var $ml = parseInt($container.css('margin-left'));
				var $calcul = $ml-$position;
				if(($calcul * -1) == $calculW3) {
					$container.animate({marginLeft:0},speed,function(){bouton=0;});
				} else {
					if(($calcul * -1) >= $calculW3) {
						$calcul = 0;
					}
					$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
				}
			}
		});
	} else {
		$('#exclu').find('.moduleRome').children('.flecheDroite').css('display','none');
		$('#exclu').find('.moduleRome').children('.flecheGauche').css('display','none');
	}
});