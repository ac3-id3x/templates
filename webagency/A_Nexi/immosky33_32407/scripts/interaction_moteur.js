$(document).ready(function() {
	$('.bouton-link').css('cursor','pointer');
	$('.bouton-link').click(function() {
		var $start = parseInt($('.link-crit').css('margin-left'));
		if($start == 0 || isNaN($start) == true) {
			$(this).parent().animate({marginLeft:'255px'});
		} else {
			$(this).parent().animate({marginLeft:'0px'});
		}
	});
	// COPY/PASTE
	var $copy_budget = $('#Mini_Budget').clone();
	$('#Mini_Budget').remove();
	$('.content-link').append($copy_budget);
	var $copy_surface = $('#Mini_Surface').clone();
	$('#Mini_Surface').remove();
	$('.content-link').append($copy_surface);
});