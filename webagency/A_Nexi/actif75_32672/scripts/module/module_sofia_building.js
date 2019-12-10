// $(document).ready(function() {
		// // FIX 1ST
		// var $firstLi = $('#moduleSofiaBuilding').children('ul').first().find('li').first();
		// $firstLi.addClass('liActif');
		// var $firstPuce = $('.containerNav').children('div').first();
		// $firstPuce.addClass('puceOn');
		// $('.containerNav').width($('.containerNav').find('div').length * $('.containerNav').find('div').outerWidth(true));
		// $('#moduleSofiaBuilding').children('ul').first().find('li').each(function() {
			// if($(this).hasClass('liActif')) {
				// $(this).show();
			// } else {
				// $(this).hide();
			// }
		// });
		// $('#moduleSofiaBuilding').children('ul').last().find('li').each(function() {
			// if($(this).hasClass('liActif')) {
				// $(this).show();
			// } else {
				// $(this).hide();
			// }
		// });
		// var $countLi = $('#moduleSofiaBuilding').children('ul').first().find('li').length;
		// $('.puce').each(function() {
			// $(this).css('cursor','pointer');
			// $(this).mouseover(function() {
				// var $index = $(this).index();
				// var $old = $(this).parent().find('.puceOn');
				// var $old_index = $old.index();
				// $('#moduleSofiaBuilding').children('ul').last().find('li').eq($old_index).hide();
				// $('#moduleSofiaBuilding').children('ul').last().find('li').eq($index).show();
				// $old.removeClass('puceOn');
				// $(this).addClass('puceOn');
			// });
		// });
// });

$(document).ready(function(){
	var cpt = 0;
	$("#moduleSofiaBuilding").each(function(){
		var t = setInterval(function(){
			$('.containerNav').children('.puce').eq(cpt).addClass('puceOn');
			if(cpt >= 2) {
				cpt = 0;
			} else {
				cpt ++;
			}
			$('.containerNav').children('.puce').eq(cpt).removeClass('puceOn');
			$("#moduleSofiaBuilding ul").animate({marginBottom:0},100,function(){
				$("#moduleSofiaBuilding ul li:last").after($("#moduleSofiaBuilding ul li:first"));
				$(this).css({marginLeft:0});
			})
		},3000);
	});
});

// var test = $(this).index();
// console.log(test);