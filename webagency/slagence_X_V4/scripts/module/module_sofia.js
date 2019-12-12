$(document).ready(function() {
	/* ACCORDEON */
		var bouton = 0;
		var speed = 300;
		// HIDE ALL
		$('.accordeonSofia').find('.contenuAccordeon').hide();
		// SHOW FIRST 
		$('.accordeonSofia').find('.contenuAccordeon').first().slideDown(150);
		// FIX CSS ARROW
		$('.upSofia').css('cursor','pointer');
		$('.downSofia').css('cursor','pointer');
		// INTERACTION
		$('.accordeonSofia').find('.accordeonTitreSofia').each(function() {
			$t = $(this);
			$t.css('cursor','pointer');
			$t.click(function() {
				if($(this).parent().find('.contenuAccordeon').css('display') == 'block') {
					return false;
				} else {
					$('.accordeonSofia').find('.contenuAccordeon').slideUp(150);
					$(this).parent().find('.contenuAccordeon').slideDown(150);
					$('.accordeonSofia').find('.contenuAccordeon').removeClass('up');
					$(this).parent().find('.contenuAccordeon').addClass('up');
				}
			});
		});
		$('.upSofia').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $t = $(this);
				var $container = $t.parent().parent().find('.containerSofia');
				var $actif = $t.parent().parent().find('.containerSofia').find('.actifLi');
				var $next = $actif.next();
				if($next.length>0) {
					var $height = $next.outerHeight(true);
					var $start = parseInt($container.css('marginTop'));
					var $calcul = $start - $height;
					$actif.removeClass('actifLi');
						$next.addClass('actifLi');
					$container.animate({marginTop:$calcul+'px'},speed, function() {
						bouton = 0;
					})	
				}	else {
					var $next = $t.parent().parent().find('.containerSofia').find('li').first();
					$actif.removeClass('actifLi');
					$next.addClass('actifLi');
					$container.animate({marginTop:'0px'},speed, function() {
						bouton = 0;
					})
				}
			}
		});
		$('.downSofia').click(function() {
			if(bouton == 0) {
				bouton = 1;
				var $t = $(this);
				var $container = $t.parent().parent().find('.containerSofia');
				var $actif = $t.parent().parent().find('.containerSofia').find('.actifLi');
				var $next = $actif.prev();
				if($next.length>0) {
					var $height = $next.outerHeight(true);
					var $start = parseInt($container.css('marginTop'));
					var $calcul = $start + $height;
					$actif.removeClass('actifLi');
					$next.addClass('actifLi');
					$container.animate({marginTop:$calcul+'px'},speed, function() {
						bouton = 0;
					})
				} else {
					var $next = $t.parent().parent().find('.containerSofia').find('li').last();
					var $count = $t.parent().parent().find('.containerSofia').find('li').length - 1;
					var $height = $next.outerHeight(true);
					var $max = $count * $height;
					$actif.removeClass('actifLi');
					$next.addClass('actifLi');
					$container.animate({marginTop:-$max+'px'},speed, function() {
						bouton = 0;
					})
				}
			}
		});
		
	var moduleDiv = 	$('.rotateSofia');
		moduleDiv.each(function() {
		
		$('.up').hover(
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
					decalage: $('.actifLi').outerHeight(true),
					callSlide:startSlide,
					callDelayed:function(num) {
						if(num == 1) {
							timerInterval = setInterval(function() { objModule.callSlide(); }, 5000);
						}else{
							clearInterval(timerInterval);
						}
					}
				}
				objModule.callDelayed(1);
	});
});
	var startSlide = function() {
		
		var $container = $(".up").children('.containerSofia');
		var $countLi = $container.find('li').length;
		var $max = $countLi * this.decalage;
		var $start = parseInt($container.css('marginTop'));
		var $calcul = $start - this.decalage;
		if($calcul > (-1 * $max)) {
			$container.animate({marginTop:$calcul+'px'},500);
		} else {
			$container.animate({marginTop:0},500);
		}
	};