jQuery.noConflict();
        jQuery(function(){
		
		 jQuery("#menu a.mn3").click(function(){
		 
             jQuery(".minimoteur").slideToggle("fast");
		 });
		 //La suppression de l'image qui existe dans la page recherche
		 
		 jQuery(".photo_wrap em img").hide();
		 
		 
	});	
	
		     