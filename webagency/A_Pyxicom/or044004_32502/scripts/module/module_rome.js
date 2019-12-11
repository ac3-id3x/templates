$(document).ready(function() {
    
	var bouton = 0;
	var speed = 300;
	$('div[id*=moduleRome]').find('ul').each(function() {
		var $countLi = $(this).find('li').length;
		var $widthLi = $(this).find('li').outerWidth(true);
		var $calculW = $countLi * $widthLi;
		$(this).width($calculW);
		

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
				$(this).parent().parent().children('div[id*=flecheDroite]').css('display','none');
				$(this).parent().parent().children('div[id*=flecheGauche]').css('display','none');
			}	
	});
	if(defileRome == 1) {
		var $this =	$('#moduleRome').find('ul');
		var $countLi = $this.find('li').length;
		var $widthLi = $this.find('li').outerWidth(true);
		var $calculW = $countLi * $widthLi;
		timerRome = setInterval("turn("+$widthLi+","+$calculW+","+speed+")",defileRomeSpeed);
		$('#moduleRome').hover(
		  function () {
		  	clearInterval(timerRome);
		  }, 
		  function () {
		  	timerRome = setInterval("turn("+$widthLi+","+$calculW+","+speed+")",defileRomeSpeed);
		  }
		);
	}
});
function turn($widthLi,$calculW,speed) {
		clearInterval(timerRome);
			var $position = $widthLi * 4;
			var $container = $('div[id*=masqueModuleRome]').children('ul');
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
			timerRome = setInterval("turn("+$widthLi+","+$calculW+","+speed+")",defileRomeSpeed);	
}