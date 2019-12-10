$(document).ready(function() {
	var bouton = 0;
	var speed = 300;
	$('div[id*=moduleRome]').find('ul').each(function() {
		var $countLi = $(this).find('li').length;
		var $widthLi = $(this).find('li').outerWidth(true);
		var $calculW = $countLi * $widthLi;
		$(this).width($calculW);
		$(this).children('.annonceFlipping').hover(
			function() {
				$(this).children('.contentAnnonceFlipping').fadeIn(150);
			},
			function() {
				$(this).children('.contentAnnonceFlipping').fadeOut(150);
			}
		);	
			if($countLi > 4) {
				$(this).parent().parent().children('div[id*=flecheGauche]').css('cursor','pointer');
				$(this).parent().parent().children('div[id*=flecheGauche]').click(function() {
					
					if(bouton == 0) {
						bouton = 1;
						var $position = $widthLi * 4;
						var $container = $(this).parent().find($('div[id*=masqueModuleRome]')).children('ul');
						var $ml = parseInt($container.css('margin-left'));
						if($ml == 0) {
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
				$(this).parent().parent().children('div[id*=flecheDroite]').css('cursor','pointer');
				$(this).parent().parent().children('div[id*=flecheDroite]').click(function() {
					if(bouton == 0) {
						bouton = 1;
						var $position = $widthLi * 4;
						var $container = $(this).parent().find($('div[id*=masqueModuleRome]')).children('ul');
						var $ml = parseInt($container.css('margin-left'));
						var $calcul = $ml-$position;
						if(($calcul * -1) == $calculW) {
							$container.animate({marginLeft:0},speed,function(){bouton=0;});
						} else {
							if(($calcul * -1) >= $calculW) {
								$calcul = 0;
							}
							$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
						}
					}
				});
			} else {
				$(this).parent().parent().removeClass('rotateRome');
				$(this).parent().parent().children('div[id*=flecheDroite]').css('display','none');
				$(this).parent().parent().children('div[id*=flecheGauche]').css('display','none');
			}	
	});
//	if(defileRome == 1) {
//		var $this =	$('#moduleRome').find('ul');
//		var $countLi = $this.find('li').length;
//		var $widthLi = $this.find('li').outerWidth(true);
//		var $calculW = $countLi * $widthLi;
//		timerRome = setInterval("turn("+$widthLi+","+$calculW+","+speed+")",defileRomeSpeed);
//		$('#moduleRome').hover(
//		  function () {
//		  	clearInterval(timerRome);
//		  }, 
//		  function () {
//		  	timerRome = setInterval("turn("+$widthLi+","+$calculW+","+speed+")",defileRomeSpeed);
//		  }
//		);
//	}
	
	
var moduleDiv = 	$('.rotateRome');

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
					decalage: ($('#masqueModuleRome').children('ul').find('li').outerWidth(true)) * 4,
					decalage2: ($('#masqueModuleRome2').children('ul').find('li').outerWidth(true)) * 4,
					decalage3: ($('#masqueModuleRome3').children('ul').find('li').outerWidth(true)) * 4,
					callSlide:startSlide,
					callDelayed:function(num) {
						if(num == 1) {
							timerInterval = setInterval(function() { objModule.callSlide(); }, defileRomeSpeed);
						} else {
							clearInterval(timerInterval);
						}
					}
				}
		
				objModule.callDelayed(1);

	});

});

	var startSlide = function() {
		var $container = $("."+this.idDiv).children('#masqueModuleRome').children('ul');
		var $container2 = $("."+this.idDiv).children('#masqueModuleRome2').children('ul');
		var $container3 = $("."+this.idDiv).children('#masqueModuleRome3').children('ul');
			var $countLi = ($container.children('li').length);
			var $countLi2 = ($container2.children('li').length);
			var $countLi3 = ($container3.children('li').length);
			var $max = ($countLi/4) * this.decalage;
			var $max2 = ($countLi2/4) * this.decalage;
			var $max3 = ($countLi3/4) * this.decalage;
			var $start = parseInt($container.css('marginLeft'));
			var $start2 = parseInt($container2.css('marginLeft'));
			var $start3 = parseInt($container3.css('marginLeft'));
			var $calcul = $start - this.decalage;
			var $calcul2 = $start2 - this.decalage2;
			var $calcul3 = $start3 - this.decalage3;
			if($calcul > (-1 * $max)) {
				$container.animate({marginLeft:$calcul+'px'},4000);
			} else {
				$container.animate({marginLeft:0},4000);
			}
			if($calcul2 > (-1 * $max2)) {
				$container2.animate({marginLeft:$calcul2+'px'},4000);
			} else {
				$container2.animate({marginLeft:0},4000);
			}
			if($calcul3 > (-1 * $max3)) {
				$container3.animate({marginLeft:$calcul3+'px'},4000);
			} else {
				$container3.animate({marginLeft:0},4000);
			}
	};


//function turn($widthLi,$calculW,speed) {
//		clearInterval(timerRome);
//			var $position = $widthLi * 4;
//			var $container = $('div[id*=masqueModuleRome]').children('ul');
//			var $ml = parseInt($container.css('margin-left'));
//			var $calcul = $ml-$position;
//			if(($calcul * -1) == $calculW) {
//					$container.animate({marginLeft:0},speed,function(){bouton=0;});
//			} else {
//				if(($calcul * -1) >= $calculW) {
//					$calcul = 0;
//					}
//					$container.animate({marginLeft:$calcul},speed,function(){bouton=0;});
//			}
//			timerRome = setInterval("turn("+$widthLi+","+$calculW+","+speed+")",defileRomeSpeed);	
//}
