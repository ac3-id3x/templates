(function($){
           $('img').bind('contextmenu', function(e){
		   alert("Clic droit interdit");
               return false;
            });
})(jQuery);
