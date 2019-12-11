
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

