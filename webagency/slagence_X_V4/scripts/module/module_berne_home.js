$(document).ready(function() {
	$('.zoneBouton li').each(function() {
		$(this).css('cursor','pointer');
		if ($(this).is(":first-child")) {
			$(this).css('opacity',1);
			$(this).addClass('liOn');
		} else {
			$(this).css('opacity',0.5);
		}
		$(this).mouseover(function() {
			var $index = $(this).index();
			var $old_li = $(this).parent().find('.liOn');
			var $old_image = $(this).parent().parent().parent().find('.imageOn');
			var $old_txt = $(this).parent().parent().parent().find('.txtOn');
			if($old_li.index() != $index) {
				// OLD
				$old_li.css('opacity',0.5);
				$old_li.removeClass('liOn');
				$old_image.hide();
				$old_image.removeClass('imageOn');
				$old_txt.hide();
				$old_txt.removeClass('txtOn');
				// FIX
				$(this).css('opacity',1);
				$(this).addClass('liOn');
				var $new_pic = $(this).parent().parent().parent().children('.zonePicture').find('li').eq($index);
				$new_pic.show();
				$new_pic.addClass('imageOn');
				var $new_txt = $(this).parent().parent().parent().children('.zoneTexte').find('li').eq($index);
				$new_txt.show();
				$new_txt.addClass('txtOn');
			} else {
				return false;
			}
		});
	});
	$('.zonePicture li').each(function() {
		if ($(this).is(":first-child")) {
			$(this).show();
			$(this).addClass('imageOn');
		} else {
			$(this).hide();
		}
	});	
	$('.zoneTexte li').each(function() {
		if ($(this).is(":first-child")) {
			$(this).show();
			$(this).addClass('txtOn');
		} else {
			$(this).hide();
		}
	});
	$('.zonePlus').css('cursor','pointer');
	$('.zonePlus').click(function() {
		
	});
});