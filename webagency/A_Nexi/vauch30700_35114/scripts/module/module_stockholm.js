$(document).ready(function() {
	/* ANNONCES */
	var bouton = 0;
	var speed = 200;
	var $widthAnnonce = $('.annonceModule').outerWidth(true);
	$('.leftFlecheModule').css('cursor','pointer');
	$('.leftFlecheModule').click(function() {
		if(bouton == 0) {
			bouton = 1;
			var $position = $widthAnnonce * 2;
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
			var $position = $widthAnnonce * 2;
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
	var timerInterval;
	var moduleDiv = 	$(".up");
	
	moduleDiv.each(function() {
		$("div[id*=moduleStockholmHome]").hover(
			function() {
				objModule.callDelayed(0);
			},
			function() {
				objModule.callDelayed(1);
			}
		);
		var bouton_home = 0;
		var $container = $(this).children('.containerHome').children('ul');
		var $countLi = ($(this).find('li').length)+1;
		var $widthLi = 660;
		$("div[id*=moduleStockholmHome]").find('ul').width($countLi* $widthLi);
		var $previous = $(this).find('.prevBouton');
		var $next = $('.containerHome').children('ul').children('li').find('.nextBouton');
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
				var $container = $(this).parent().parent().parent().parent();
				var $nextElement = $(this).parent().parent().parent().next();
				if($nextElement.length > 0) {
					var $width = $nextElement.outerWidth(true);
					var $start = parseInt($container.css('marginLeft'));
					var $calcul = $start - $width;
					$container.animate({marginLeft:$calcul+'px'},500, function() {
						bouton_home = 0;
					});
				} else {
					var $width = $(".up").children('div').children('.containerHome').children('ul').children('li').width();
					var $start = parseInt($container.css('marginLeft'));
					var $calcul = $start - $width;
					$(".up").children('div').children('.containerHome').children('ul').children('li:first').clone(true).appendTo($(".up").children('div').children('.containerHome').children('ul'));
					$container.animate({marginLeft:$calcul+'px'},500);
					$container.animate({marginLeft:'0px'}, 0, function() {
						bouton_home = 0;
					});
					setTimeout(function () {
			       		$container.children('li:last',this).remove();
			    	}, 700);
				}
			}
		});
		var timerInterval;
		var objModule = {
			idDiv : $(this).attr('id'),
			decalage: 660,
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
	var $container = $(".up").children('div').children('.containerHome').children('ul');
	var $countLi = $container.find('li').length;
	var $max = $countLi * this.decalage;
	var $start = parseInt($container.css('marginLeft'));
	var $calcul = $start - this.decalage;
	if($calcul <= (-1 * $max)) {
		$(".up").children('div').children('.containerHome').children('ul').children('li:first').clone(true).appendTo($(".up").children('div').children('.containerHome').children('ul'));
		$container.animate({marginLeft:$calcul+'px'},500);
		$container.animate({marginLeft:'0px'},0);
		setTimeout(function () {
       		$container.children('li:last',this).remove();
    	}, 700);
	} else {
		$container.animate({marginLeft:$calcul+'px'},500);
	}
};