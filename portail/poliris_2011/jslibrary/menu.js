$().ready(function(){

	function makeTall()
	
	{
		$(this).children("a").addClass("active");
		$(this).find(".sousMenu").slideDown();
	}
	
	function makeShort()
	{
		var eleActive=$(this);
		$(eleActive).children("a").removeClass("active");
		$(this).find(".sousMenu").slideUp("fast");
		
		
	}
	
	var config = {    
		over: makeTall, // function = onMouseOver callback (REQUIRED)    
		timeout: 500, // number = milliseconds delay before onMouseOut    
		out: makeShort // function = onMouseOut callback (REQUIRED)    
	};
	
	$(".menu > li").hoverIntent(config)
	
	/*
	$(".menu > li").bind("mouseenter mouseleave",function(event){
		if(event.type=="mouseenter") 
			{
				$(this).children("a").addClass("active");
				$(".menu li").find(".sousMenu").hide();
				$(this).find(".sousMenu").slideDown();
			}
		if(event.type=="mouseleave") 
			{
				$(this).children("a").removeClass("active");
				$(".menu li").find(".sousMenu").hide();
			}
	});
	*/
});