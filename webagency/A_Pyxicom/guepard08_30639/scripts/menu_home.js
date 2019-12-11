$j(document).ready(function() {
	$j('.menuGuepard').each(function() {
		var $t = $j(this);
		var $widthT = $t.width();
		// MENU
		$t.find('.sousTitreMenu').css('cursor','pointer');
		$t.find('h1').mouseover(function() {
			if($j(this).parent().find('.sousMenu').css('display') != 'block') {
				$j('.containerMenuGuepard').find('.sousMenu').slideUp(200);
				$j('.containerMenuGuepard').find('h1').removeClass("h1Actif");
				$j(this).parent().find('.sousMenu').slideDown(300);
				$j(this).addClass('h1Actif');
			}
		});	
		/*$j('h1').click(function() {
			$j('.sousMenu').slideUp(250);
			$j(this).removeClass("h1Actif");
		});*/
		$t.find('.sousTitreMenu').mouseover(function() {
			$j(this).addClass('onTitre');
			var $id_new = $j(this).attr('id');
			//console.log($id_new);
			// FIX OLD
			var $old_pic = $j('#photoGuepard').find('.actif');
			$old_pic.removeClass('actif');
			$old_pic.hide();
			// FIX NEW
			var $new_pic = $j('#photoGuepard').find('#'+$id_new);
			$new_pic.addClass('actif');
			$new_pic.show();
		});
		$t.find('.sousTitreMenu').mouseout(function() {
			$j(this).removeClass('onTitre');
		});
		$t.find('.sousTitreMenu').click(function() {
			if($j(this).parent().children('ul').css('display') != 'block') {
				$j('.containerMenuGuepard').find('.sousMenu').children('ul').slideUp(250);
				$j(this).parent().children('ul').slideDown(250);
			} else {
				$j(this).parent().children('ul').slideUp(250);

			}
		});
		// INSIDE MENU
		$t.find('li').css('cursor','pointer');
		$t.find('li').each(function() {
			var $li = $j(this);
			var $widthUl = $li.parent().outerWidth(true);
			if($widthUl > $widthT) {
				$t.width($widthUl);
			} else {
				$t.width($widthT);
			}
			$li.mouseover(function() {
				// ROLLOVER ON
				var $id_new = $j(this).attr('id');
				$j(this).addClass('onLi');
				// FIX OLD
				var $old_pic = $j('#photoGuepard').find('.actif');
				$old_pic.removeClass('actif');
				$old_pic.hide();
				// FIX NEW
				var $new_pic = $j('#photoGuepard').find('#'+$id_new);
				$new_pic.addClass('actif');
				$new_pic.show();
			});
			$li.mouseout(function() {
				// ROLLOVER OUT
				$j(this).removeClass('onLi');
			});
		});
	});
	// FIX SIZE
	$j(window).load(function() {
		resizeWindow();
	});
	$j(window).resize(function() {
		resizeWindow();
	});
	$j('.contMenuNav .menuGuepard').each(function() {
		var $t = $j(this);
		$j(this).find(".barreSousTitreMenu").width($j(this).width());
		$j(this).hover(
		  function () {
		  }, 
		  function () {
		  	$j('.sousMenu').slideUp(250);
				$j(this).find(".h1Actif").removeClass("h1Actif");
		  }
		);
	});
});
function resizeWindow() {
		$j('#containerGuepard #menuLangueGuepard').children('ul').width($j('#containerGuepard #menuLangueGuepard').find('li').length * $j('#containerGuepard #menuLangueGuepard').find('li').outerWidth(true));
		var $cmgWidth = 0;
		$j('#containerGuepard #menuNavigationGuepard').find('.menuGuepard').each(function() {
			$cmgWidth += $j(this).outerWidth(true);
		});
		$j('#containerGuepard .containerMenuGuepard').width($cmgWidth + 1);
		var $cfWidth = 0;
		$j('#containerGuepard .containerFooter').find('li').each(function() {
			$cfWidth += $j(this).width() + 6;
		});
		$j('#containerGuepard .containerFooter').children('ul').width($cfWidth + 1);
		var $ifWidth = 0;
		$j('#containerGuepard .infosFooter').find('li').each(function() {
			$ifWidth += $j(this).width() + 30;
		});
		$j('#containerGuepard .infosFooter').children('ul').width($ifWidth + 1);
		var $wH = $j(window).height();
		var $fix = 75;
		if($wH < 710) {
			$j('#containerGuepard #navGuepard').height($j('#containerGuepard #menuLangueGuepard').outerHeight(true) + $j('#containerGuepard #centreContentGuepard').outerHeight(true) + $j('#containerGuepard #menuNavigationGuepard').outerHeight(true) + $fix);
			$j('#containerGuepard #photoGuepard').height($j('#containerGuepard #menuLangueGuepard').outerHeight(true) + $j('#containerGuepard #centreContentGuepard').outerHeight(true) + $j('#containerGuepard #menuNavigationGuepard').outerHeight(true) + $fix);
		} else {
			$j('#containerGuepard #navGuepard').height($j(window).height());
			$j('#containerGuepard #photoGuepard').height($j(window).height());
		}		
		/* FOOTER INSIDE */
		$j('.positionFooter .containerFooter').find('li').each(function() {
			$cfWidth += $j(this).width() + 10;
		});
		$j('.positionFooter .containerFooter').children('ul').width($cfWidth + 1);
}
$j('#photo1').load(function() {
	resizeWindow();
});