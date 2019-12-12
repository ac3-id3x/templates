function menuNavigationCycle(){
	if(typeof(menuNavigationNode)==="undefined") menuNavigationNode= $("#menuNavigation");
		if($(this).find("ul").length) {
			menuNavigationNode= $(menuNavigationNode).append('<optgroup label="'+$(this).children().first().text()+'" />').children().last();
			$(this).find("ul li").each(menuNavigationCycle);
			menuNavigationNode= $(menuNavigationNode).parent();
		} else {
			if($(this).attr("class") == "hidden-phone" || $(this).attr("class") == "hidden-tablet") {
				return;
			} else {
				$(menuNavigationNode).append('<option value="'+$(this).children().attr("href")+'">'+$(this).text()+'</option>');
			}
		}
}
$(document).ready(function(){
	var menuNavigationNode;
	$('#menuNavigation').removeAttr('id').after('<select id="menuNavigation" class="hidden-desktop hidden-tablet-landscape center margin-bottom-10" />').children().each(menuNavigationCycle);
	$('#menuNavigation').prepend('<option selected>Navigation</option>');
	var menuNavigation2 = $('#menuNavigation').clone().attr('id','menuNavigationPhone');
	$('#menuNavigation').remove();
	$('.menu-principal').parent().after(menuNavigation2);
	$('#menuNavigationPhone').change(function() {
		window.location = $(this).find("option:selected").val();
	});
});