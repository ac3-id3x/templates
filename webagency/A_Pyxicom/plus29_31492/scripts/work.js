 jQuery.noConflict();

	
	jQuery(function(){
	function makeTall()
	{
		jQuery(this).find(".sous_menu,.sous_menu2").slideDown({duration:"1000"});
	}
	
	function makeShort()
	{
		jQuery(this).find(".sous_menu,.sous_menu2").slideUp({duration:"2000"},{easing: "easeOutBounce"});
	}
	
	var config = {    
		over: makeTall, // function = onMouseOver callback (REQUIRED)    
		timeout: 100, // number = milliseconds delay before onMouseOut    
		out: makeShort // function = onMouseOut callback (REQUIRED)    
	};
	
	jQuery("#menu li").hoverIntent(config)
	
});