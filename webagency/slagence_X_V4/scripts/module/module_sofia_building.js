$(document).ready(function() {
		// FIX 1ST
		var $firstLi = $('#moduleSofiaBuilding').children('ul').first().find('li').first();
		$firstLi.addClass('liActif');
		var $firstPuce = $('.containerNav').children('div').first();
		$firstPuce.addClass('puceOn');
		$('.containerNav').width($('.containerNav').find('div').length * $('.containerNav').find('div').outerWidth(true));
		$('#moduleSofiaBuilding').children('ul').first().find('li').each(function() {
			if($(this).hasClass('liActif')) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
		$('#moduleSofiaBuilding').children('ul').last().find('li').each(function() {
			if($(this).hasClass('liActif')) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
		var $countLi = $('#moduleSofiaBuilding').children('ul').first().find('li').length;
		$('.puce').each(function() {
			$(this).css('cursor','pointer');
			$(this).mouseover(function() {
				var $index = $(this).index();
				var $old = $(this).parent().find('.puceOn');
				var $old_index = $old.index();
				$('#moduleSofiaBuilding').children('ul').last().find('li').eq($old_index).hide();
				$('#moduleSofiaBuilding').children('ul').last().find('li').eq($index).show();
				$old.removeClass('puceOn');
				$(this).addClass('puceOn');
			});
		});
});