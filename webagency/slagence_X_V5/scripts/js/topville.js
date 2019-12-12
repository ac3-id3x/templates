$(document).ready(function() {
	$('.bouton-plus-topville').each(function() {
		var lengthElement = $(this).parent().children('.nav-immobilier').find('.display-none').length;
		if(lengthElement > 0) {
		$(this).on('click',function() {
				$(this).parent().children('.nav-immobilier').find('.display-none').show();
				$(this).remove();
			});
		} else {
			$(this).remove();
		}
	});
	if(winW < 600) {
		var el = $('.colonne-responsive').find('.element-liste-titre');
		var count = el.length;
		if(count > 1) {
			$('h1').after('<ul class="nav nav-pills nav-stacked nav-immobilier-responsive"></ul>');
			for(i = 0; i < count; i++) {
				el.eq(i).attr('id','section'+i);
				$('.nav-immobilier-responsive').append('<li><a href="#section'+i+'">'+el.eq(i).find('a').html()+'</a></li>');
			}
		}
	}
});