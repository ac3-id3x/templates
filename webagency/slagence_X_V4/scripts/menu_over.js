$(document).ready(function(e){
	var $last = $('#m_main').children('ul').children('li').last();
	$('#m_main').children('ul').children('li').hover(
		function(e){
			$(this).children('ul').addClass('on');
			$(this).children('ul').show();
		},
		function(e){
			if (e.target.tagName.toLowerCase() == 'select') return;
			$(this).children('ul').hide();
			$(this).children('ul').removeClass('on');
	});
});