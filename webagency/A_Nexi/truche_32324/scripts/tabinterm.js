$(document).ready(function(){
		$(".interm_tab").click(function() {
			$(".interm_tab.on").removeClass('on');
			$(this).addClass('on');
			$(".content_tab").hide();  		
			var affTab = $(this).attr("href"); 			
			$(affTab).fadeIn(); 
			return false;
		});
});