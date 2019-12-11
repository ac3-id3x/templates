jQuery(document).ready(function(){

		jQuery(".tab .blocAccord").hide();
		jQuery(".tab h4").attr("class","tab_off");
		
		jQuery(".tab .blocAccord:first").show();
		jQuery(".tab h4:first").attr("class","tab_on");
		
		jQuery(".tab h4").click(function(){
			jQuery(this).parent().find(".blocAccord").slideUp(200);
			jQuery(this).parent().find("h4").attr("class","tab_off");
			jQuery(this).attr("class","tab_on");
			jQuery(this).next(".blocAccord").slideDown();
		});

});
	