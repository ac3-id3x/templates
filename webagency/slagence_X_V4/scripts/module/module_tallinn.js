$(document).ready(function() {
	var $firstLi = $('#moduleTallinn').find('li').first();
	$firstLi.addClass('actifLi');
	var $firstId = $firstLi.attr('id');
	var $length = $('#moduleTallinn').find('li').length;
	var $width = $('#moduleTallinn').width();
	var $calcul = 0;
	$('#moduleTallinn').find("li[id*='bloc']").each(function() {
		$t = $(this);
		// GESTION LI SIZE/SHOW/HIDE
		if($t.attr('id') != $firstId) {
			$t.children('.contentAnnonce').hide();
			$t.children('.blocTitre').addClass('degradeOffLi');
			$calcul += $(this).outerWidth(true);
		} else {
			$firstLi.children('.blocTitre').addClass('degradeOnLi');
			$calcul += $firstLi.children('.blocTitre').outerWidth(true);		
		}
		var $sizeMaxCnt = $width - $calcul - 10;
		// FIX FIRST
		$firstLi.children('.contentAnnonce').width($sizeMaxCnt);
		$firstLi.children('.contentAnnonce').children('.listingAnnonce').width($sizeMaxCnt - 200);
		$firstLi.children('.contentAnnonce').children('.suiteAnnonce').width(200);
		$t.each(function() {
			$c = $(this).children('.blocTitre');
			$c.css('cursor','pointer');
			$c.mouseover(function() {
				if(!$(this).parent().hasClass('actifLi')) {
					$(this).addClass('degradeOffOnLi');
					$(this).removeClass('degradeOffLi');	
				}
			});
			$c.mouseout(function() {
				if(!$(this).parent().hasClass('actifLi')) {
					$(this).removeClass('degradeOffOnLi');
					$(this).addClass('degradeOffLi');	
				}
			});
			$c.click(function() {
				// FIND ACTIF
				var $actif = $('#moduleTallinn').find('.actifLi');
				$new = $(this).parent();
				var $sizeMaxCnt = $actif.children('.contentAnnonce').width();
				if($(this).parent().attr('id') != $actif.attr('id')) {
					$actif.children('.blocTitre').removeClass('degradeOnLi');
					$actif.children('.blocTitre').addClass('degradeOffLi');
					$actif.children('.contentAnnonce').hide();
					$actif.children('.contentAnnonce').width(0);
					$actif.removeClass('actifLi');
					// NEW LI
					$new.addClass('actifLi');
					$new.children('.blocTitre').addClass('degradeOnLi');
					$new.children('.blocTitre').removeClass('degradeOffLi');
					$new.children('.blocTitre').removeClass('degradeOffOnLi');
					$new.children('.contentAnnonce').show();
					// FIX INSIDE
					$new.children('.contentAnnonce').width($sizeMaxCnt);
					$new.children('.contentAnnonce').children('.listingAnnonce').width($sizeMaxCnt - 200);
					$new.children('.contentAnnonce').children('.suiteAnnonce').width(200);
				} else {
					return false;
				}
			});
		});
	});
	// GESTION CARROUSEL IN SLIDER
	var bouton = 0;
	$('#moduleTallinn .upNav').css('cursor','pointer');
	$('#moduleTallinn .upNav').click(function() {
		if(bouton == 0) {
			bouton = 1;
			$container = $(this).parent().parent().children('.listingAnnonce').children('ul');
			$actif = $(this).parent().parent().children('.listingAnnonce').find('.actifLiTallinn');
			$heightA = $actif.outerHeight(true);
			$next = $actif.next();
			$actif.removeClass('actifLiTallinn')
			if($next.length > 0) {
				$next.addClass('actifLiTallinn');
				$startTop = parseInt($container.css('marginTop'));
				$calculTop = $startTop - $heightA;
				$container.animate({
					marginTop:$calculTop+'px'},
					250,
					function(){
						bouton = 0;
					}
				)
			} else {
				$next = $(this).parent().parent().children('.listingAnnonce').find('li').first();
				$next.addClass('actifLiTallinn');
				$container.animate({
					marginTop:'0px'},
					250,
					function(){
						bouton = 0;
					}
				)
			}
		}
	});
	$('#moduleTallinn .downNav').css('cursor','pointer');
	$('#moduleTallinn .downNav').click(function() {
		if(bouton == 0) {
			bouton = 1;
			$container = $(this).parent().parent().children('.listingAnnonce').children('ul');
			$actif = $(this).parent().parent().children('.listingAnnonce').find('.actifLiTallinn');
			$heightA = $actif.outerHeight(true);
			$next = $actif.prev();
			$actif.removeClass('actifLiTallinn');
			if($next.length > 0) {
				$next.addClass('actifLiTallinn');
				$startTop = parseInt($container.css('marginTop'));
				$calculTop = $startTop + $heightA;
				$container.animate({
					marginTop:$calculTop+'px'},
					250,
					function(){
						bouton = 0;
					}
				)
			} else {
				$calculTop = ($(this).parent().parent().children('.listingAnnonce').find('li').length - 1) * $heightA;
				$next = $(this).parent().parent().children('.listingAnnonce').find('li').last();
				$next.addClass('actifLiTallinn');
				$container.animate({
					marginTop:-$calculTop+'px'},
					250,
					function(){
						bouton = 0;
					}
				)
			}
		}
	});
	
	var moduleTallinn = 	$(".rotateTallin");
	moduleTallinn.each(function(){
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
			decalage: $('.actifLiTallinn').height(),
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
	var $container = $("."+this.idDiv).children('ul').children('.actifLi').children('.contentAnnonce').children('.listingAnnonce').children('ul');
	var $countLi = $container.find('li').length;
	var $max = $countLi * this.decalage;
	var $start = parseInt($container.css('marginTop'));
	var $calcul = $start - this.decalage;
	if($calcul <= (-1 * $max)) {
		$container.animate({marginTop:'0px'},500);
	} else {
		$container.animate({marginTop:$calcul+'px'},500);
	}
	};