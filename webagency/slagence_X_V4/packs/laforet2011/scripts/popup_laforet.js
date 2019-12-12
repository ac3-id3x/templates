$(document).ready(function() {
	$('.photo_ctn').each(function() {
		var $pic = $(this).find('img').attr('src');
		var $parent = $(this).parent().parent().parent().parent().parent().parent();
		if($parent.children('.blocAnnonce').hasClass('color1')) {
			var  $width = $parent.width();	
		} else {
			var  $width = -1 * ($parent.width() + 40);		
		}
		if($pic.length > 0) {
			var $html = '<div style="display:none;position:absolute;top:-50px;left:'+$width+'px;z-index:10000;padding:10px;background:#fff;border:1px solid #2563a1;" class="bigPic"><img src="'+$pic+'" height="235" /></div>';
			$(this).append($html);
		} else {
			return false;
		}
		$(this).hover(
			function() {
				$parent.css('z-index','100');
				$(this).children('.bigPic').show();
			},
			function() {
				$parent.css('z-index','1');
				$(this).children('.bigPic').hide();
		});
	});
});

$(document).ready(function() {
	$('.blocPhotoAnnonce').children('.blocPhoto').each(function() {
		var $picb = $(this).children().children();
		$(this).hover(
			function() {
				$picb.attr('src',$picb.attr('src').replace('c175', '2d'));
				$picb.css('z-index','1000');
				$picb.css('position','absolute');
				$picb.css('border','solid white 3px');
				$picb.css('top','-13px');
				$picb.css('left','-13px');
				
			},function() {
				$picb.attr('src',$picb.attr('src').replace('2d', 'c175'));
				$picb.removeAttr("style");
			})
	});
});