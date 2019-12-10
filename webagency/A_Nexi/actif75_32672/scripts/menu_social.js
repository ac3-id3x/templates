$(document).ready(function() {
	$("div[id*='slidepub']").each(function() {
		$(this).css('cursor','pointer');
		$(this).hover(
		  function () {
		    $(this).css('left','0px');
		  }, 
		  function () {
		    $(this).css('left','-128px');
		  }
		);
	});
});