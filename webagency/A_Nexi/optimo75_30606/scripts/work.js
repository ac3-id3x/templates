jQuery.noConflict();
        jQuery(function(){
		
		 jQuery("#drap a img").fadeTo(300,0.5);
		 jQuery("#drap a img").hover(function(){
		 
		     jQuery(this).fadeTo(300,1);
		 
		 
		 },function(){
		 
		   jQuery(this).fadeTo(300,0.5);
		 
		 
		 });
		 
		 

		 
	});