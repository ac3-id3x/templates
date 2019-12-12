$(document).ready(function() {
	// CODE GESTION BLOC ANNONCE
	var $num = Math.round($('#contentModule').find('.flipping').length/2);
	var $test_num = $num % 2;
	$('.flipping').each(function() {
		$(this).css('cursor','pointer');
		$(this).css('z-index','2');
		var $test = $(this).hasClass('down');
		var $id = $(this).attr('id').split('flipper');
		if($test == false) {
			$(this).children('.contentAnnonce').css('top','178px');
			$(this).children('.contentAnnonce').css('left','-3px');
			$(this).children('.contentAnnonce').css({backgroundPosition:'0px 6px'});
			$(this).children('.contentAnnonce').children('.titreAnnonce').css('marginTop','25px');
			var $mirror = parseInt($id[1]) + $num;
		} else {
			$(this).children('.contentAnnonce').css('top','-211px');
			$(this).children('.contentAnnonce').css('left','-3px');
			$(this).children('.contentAnnonce').css({backgroundPosition:'0px 184px'});
			$(this).children('.contentAnnonce').children('.titreAnnonce').css('marginTop','5px');
			var $mirror = parseInt($id[1]) - $num;
		}
		var idDiv = '#flipper'+$mirror;
		// FIXING IE7!!!!!!!!!!!!!!!!!!!! RAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
		$(this).hover(
			function () {
				if(idDiv.length > 0) {
					$('#flipper'+$mirror).css('opacity',0);
				}
				$(this).children('.contentAnnonce').show();	
			}, 
			function () {
				if(idDiv.length > 0) {
					$('#flipper'+$mirror).css('opacity',1);
				}
				$(this).children('.contentAnnonce').hide();
			}
		);
	});
	// FIXING SIZE, CALCULW + 1 FOR IE/SAFARI FIX
	var $countDiv = Math.round($('#contentModule').find('.flipping').length/2);
	var $flippingW = $('#contentModule').find('.flipping').outerWidth(true);
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
				if(($calcul * -1) > $calculW) {
					$container.animate({marginLeft:0},speed,function(){bouton=0;});
				} else {
					$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
				}
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
				$container.animate({marginLeft:0},speed, function(){bouton=0;});	
				} else {
				$container.animate({marginLeft:$calcul},speed, function(){bouton=0;});	
				}
			}
		}
	});
});