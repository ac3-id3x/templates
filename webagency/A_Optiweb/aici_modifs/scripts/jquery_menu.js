$j(document).ready(function(){
	$j("#menu div").each(function(){
		   $j(this).mouseover(function(){
			 $j(this).children("ul").slideDown("fast");
			 $j(this).prev().children("ul").fadeOut("fast");
			 $j(this).siblings().children("ul").fadeOut("fast");
		   });
	});
	$j("#menu ul").each(function(){
		$j(this).css({opacity: 0.9});
	});
	$j("body").click(function(){
	  $j("#menu div ul").fadeOut("fast");
	});
});