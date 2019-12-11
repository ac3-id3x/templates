$(document).ready(function() {
	$('.mn-level2').children('li').each(function() {
		if(!$(this).hasClass('.imageBien')) {
			$(this).mouseover(function() {
				var $class = $(this).attr('class').split('bien');
				$(this).parent().children('.imageBien').html('<img src="$$_$$images/photo_biens/idbien'+$class[1]+'.jpg" />');
			});
			$(this).mouseout(function() {
				$(this).parent().children('.imageBien').html('<img src="" />');
			});
		}
	});
});