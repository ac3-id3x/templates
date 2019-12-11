$(document).ready(function() {
	$('.knowMore').each(function(){
		var size_start = $(this).parent().width();
		var idbloc = $(this).parent().attr('id');
		$(this).css('cursor','pointer');
		$(this).mouseover(function() {
			$(this).addClass('effetKnow');
		});
		$(this).mouseout(function() {
			$(this).removeClass('effetKnow');
		});
		$(this).click(function() {
			var $t = $(this);
			var $new = $t.parent().parent().find('.openPopup')
			// FIND OTHER
			if($new.length != 0) {
				$new.animate({
					width:size_start
				}, function() {
					if(idbloc == $new.attr('id')) {
						$new.removeClass('openPopup');
					} else {
						$new.removeClass('openPopup');
						$t.parent().addClass('openPopup');
						$t.parent().animate({
							width:555
						});
					}
				});
			} else {
					$t.parent().addClass('openPopup');
					$t.parent().animate({
						width:555
					});
				}
		});
	});
});