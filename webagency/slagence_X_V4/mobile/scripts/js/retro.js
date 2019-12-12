$(document).delegate(".ui-page","pagebeforeshow", function (event) {
{
	$('.retroHashes').find('a[href^="#"]').unbind('click').click(function(e)
	{
		console.log("ok");
		e.stopPropagation();
		e.preventDefault();

		var $target = $(this).parents('.ui-page').find($(this).attr('href')).eq(0);
		if($target.length == 1)
		{
			$.mobile.silentScroll($target.offset().top);
		}
		return;
	});
});