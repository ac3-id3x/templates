var $j = jQuery.noConflict();
$j(document).ready(function() {
		 $j(".selecttaille")
		 .focus(function(){
            $j(this)
                .data("origWidth", $j(this).css("width"))
                .css("width", "auto");
        })
        .blur(function(){
            $j(this).css("width", "147");
        });
});