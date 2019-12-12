jQuery(document).ready(function(){
jQuery("ul li").each(function(){
   jQuery(this).mouseover(function(){
     jQuery(this).children("div").slideDown("pretty");
        /* if($.browser.msie) { 
			var hauteur = $(this).width();
			$(this).children("ul").css({marginLeft:"-"+hauteur+"px"}); }*/
         jQuery(this).prev().children("div").fadeOut("pretty");
     jQuery(this).siblings().children("div").fadeOut("pretty");
   });

});
jQuery("body").click(function(){
  jQuery("ul li div").fadeOut("pretty");
});
});