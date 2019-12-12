$(document).ready(function(){
	$('.Blog_article h2').each(function() {
		$(this).mouseover(function() {
			$(this).parent().addClass('rollOver');
		});
		$(this).mouseout(function() {
			$(this).parent().removeClass('rollOver');
		})
	});
});