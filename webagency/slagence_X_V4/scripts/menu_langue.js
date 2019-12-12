/* MENU LANGUE */ 
$('.arrowDown').css('cursor','pointer');
$(".menuLangue .arrowDown").mouseover(function() {
	$(this).addClass('arrowDownOn');
	$(this).parent().find('.menuList').slideDown('fast').show(); 
	$(this).parent().hover(function() {
	}, function(){	
		$(this).parent().find('.menuList').slideUp('fast');
	});
	$(this).parent().find('.menuList').find("li").each(function() {
		$(this).css('cursor','pointer');
		$(this).hover(function() {
			$(this).addClass('onLi');
		}, function(){	
			$(this).removeClass('onLi');
		});
		$(this).click(function() {
			$(this).parent().parent().find('.menuList').slideUp('fast');
		});
	});
});
$(".menuLangue .arrowDown").mouseout(function() {
	$(this).removeClass('arrowDownOn');
});