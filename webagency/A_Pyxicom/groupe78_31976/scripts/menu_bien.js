
jQuery(function(){
	function makeTall()
	{
		jQuery(this).find(".mn-level").slideDown({duration:"4000"});
	}
	
	function makeShort()
	{
		jQuery(this).find(".mn-level").slideUp({duration:"100"});
	}
	
	var config = {    
		over: makeTall, // function = onMouseOver callback (REQUIRED)    
		timeout: 100, // number = milliseconds delay before onMouseOut    
		out: makeShort // function = onMouseOut callback (REQUIRED)    
	};
	
	jQuery("#hd-menu li").hoverIntent(config)
});

$(document).ready(function() {
	$('.mn-level2,.mn-level').children('li').each(function() {
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