$(document).ready(function() {
	/* ANNONCES */
	var bouton = 0;
	var speed = 200;
	var $widthAnnonce = $('.annonceModule').outerWidth(true);
	$('.leftFlecheModule').css('cursor','pointer');
	$('.leftFlecheModule').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $widthAnnonce * 4;
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
			var $position = $widthAnnonce * 4;
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
	
	
	
	
	
	
	var moduleDiv = $(".rotatemodule").children(".r1");
	var moduleDiv2 = $(".rotatemodule").children(".r2");
	
	moduleDiv.each(function() {
	var timerInterval = setInterval("start()", defilemodulespeed);	
		moduleDiv.hover(
			function() {
				clearInterval(timerInterval);
			},function() {
				var timerInterval = setInterval("start()", defilemodulespeed2);	
			}
		);
	});
	
	moduleDiv2.each(function() {
	var timerInterval2 = setInterval("start2()", defilemodulespeed2);
		moduleDiv2.hover(
			function() {
				clearInterval(timerInterval2);
			},function() {
				var timerInterval2 = setInterval("start2()", defilemodulespeed2);	
			}
		);	
	});	
	
	start = function(){
		var $widthAnnonce = $('.b1').outerWidth(true);

			var $position = $widthAnnonce * 4;
			var $container = $('.m1');
			var $ml = parseInt($container.css('margin-left'));
			var $calcul = $ml-$position;
			$container.hover
			if($ml == 0) {
				var $calcul = $ml-$position;
				$container.animate({marginLeft:-$container.width()-$calcul},speed);
			} else {
				var $calcul = $ml-($position * -1);
				if($calcul > 0) {
					$calcul = 0;
				}
				$container.animate({marginLeft:$calcul},speed);
			}

	}
	
	start2 = function(){
		var $widthAnnonce2 = $('.b2').outerWidth(true);
		
			var $position2 = $widthAnnonce2 * 4;
			var $container2 = $('.m2');
			var $ml2 = parseInt($container2.css('margin-left'));
			var $calcul2 = $ml2-$position2;
			$container2.hover
			if($ml2 == 0) {
				var $calcul2 = $ml2-$position2;
				$container2.animate({marginLeft:-$container2.width()-$calcul2},speed);
			} else {
				var $calcul2 = $ml2-($position2 * -1);
				if($calcul2 > 0) {
					$calcul2 = 0;
				}
				$container2.animate({marginLeft:$calcul2},speed);
			}
			
	}
	
	
	/* HOME */
	var bouton_home = 0;
	var moduleDiv = 	$("div[id*=moduleStockholmHome]");
	var $container = moduleDiv.children('.containerHome').children('ul');
	var $countLi = moduleDiv.find('li').length;
	var $widthLi = moduleDiv.find('li').outerWidth(true);
	moduleDiv.find('ul').width($countLi * $widthLi);
	var $previous = moduleDiv.find('div[id*=prevBouton]');
	var $next = moduleDiv.find('div[id*=nextBouton]');
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
	var moduleDiv = 	$('.rotatestockholm');
		moduleDiv.each(function() {
		
		$(this).hover(
			function() {
				objModule.callDelayed(0);
			},
			function() {
				objModule.callDelayed(1);
			}
		);	
		
		var timerInterval;
				var objModule = {	
					idDiv : $(this).attr('class'),
					decalage: $('.containerHome').width(),
					callSlide:startSlide,
					callDelayed:function(num) {
						if(num == 1) {
							timerInterval = setInterval(function() { objModule.callSlide(); }, 5000);
						} else {
							clearInterval(timerInterval);
						}
					}
				}
				objModule.callDelayed(1);
	});
});
	var startSlide = function() {
		
		var $container = $("."+this.idDiv).children('.containerHome').children('ul');
		var $countLi = $container.find('li').length;
		var $max = $countLi * this.decalage;
		var $start = parseInt($container.css('marginLeft'));
		var $calcul = $start - this.decalage;
		if($calcul > (-1 * $max)) {
			$container.animate({marginLeft:$calcul+'px'},500);
		} else {
			$container.animate({marginLeft:0},500);
		}
	};