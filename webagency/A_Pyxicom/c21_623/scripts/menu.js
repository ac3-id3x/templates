jQuery.noConflict();
jQuery(document).ready(function(){
jQuery("#menuP li").each(function(){
   jQuery(this).mouseover(function(){
     jQuery(this).children("ul").slideDown("pretty");
        /* if($.browser.msie) { 
			var hauteur = $(this).width();
			$(this).children("ul").css({marginLeft:"-"+hauteur+"px"});   }*/
         jQuery(this).prev().children("ul").fadeOut("pretty");
     jQuery(this).siblings().children("ul").fadeOut("pretty");
   });
});
jQuery("body").click(function(){
  jQuery("#menuP li ul").fadeOut("pretty");
});

});