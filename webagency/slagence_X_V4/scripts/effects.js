/* EFFETC JQUERY SELECTION ANNONCES */
$(document).ready(function() {
	$("div[id*='annoncesBloc'] .blocContentEffet").each(function() {
		$(this).css('cursor','pointer');
		$(this).hover(function() {
			$("div[id*='annoncesBloc'] .blocContentEffet").not(this).css('opacity',0.5);
		}, function() {
			$("div[id*='annoncesBloc'] .blocContentEffet").not(this).css('opacity',1);
		});	
	});
});