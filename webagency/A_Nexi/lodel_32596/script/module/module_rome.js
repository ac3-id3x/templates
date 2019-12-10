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
			if($countLi > 3) {
				$(this).parent().parent().children('div[id*=flecheGauche]').css('cursor','pointer');
				$(this).parent().parent().children('div[id*=flecheGauche]').click(function() {
					
					if(bouton == 0) {
						bouton = 1;
						var $position = $widthLi * 3;
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
						var $position = $widthLi * 3;
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
					decalage: ($('#masqueModuleRome').children('ul').find('li').outerWidth(true)) * 3,
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
		
		var $container = $("."+this.idDiv).children('div[id*=masqueModuleRome]').children('ul');
		var $countLi = $container.find('li').length;
		var $max = ($countLi/3) * this.decalage;
		var $start = parseInt($container.css('marginLeft'));
		var $calcul = $start - this.decalage;
		if($calcul > (-1 * $max)) {
			$container.animate({marginLeft:$calcul+'px'},500);
		} else {
			$container.animate({marginLeft:0},500);
		}
	};


//function turn($widthLi,$calculW,speed) {
//		clearInterval(timerRome);
//			var $position = $widthLi * 3;
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
