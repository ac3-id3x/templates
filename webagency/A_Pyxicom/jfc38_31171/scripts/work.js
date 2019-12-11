jQuery.noConflict();
	
jQuery(function(){

	function makeTall()
	{
		jQuery(this).find(".sous_menu").slideDown({easing: "easeOutBounce"});
	}
	
	function makeShort()
	{
		jQuery(this).find(".sous_menu").slideUp({duration:"4000"});
	}
	
	var config = {    
		over: makeTall, // function = onMouseOver callback (REQUIRED)    
		timeout: 500, // number = milliseconds delay before onMouseOut    
		out: makeShort // function = onMouseOut callback (REQUIRED)    
	};
	
	jQuery("#menu li").hoverIntent(config)
	
	
	
	
});
