/* SCROLL */
$(document).ready(function(){
	$(".boutonScroll").click(function(event){
		event.preventDefault();
		var full_url = $(this).attr("href");
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset().top;
		$('html, body').animate({scrollTop:target_offset}, 1000);
	});
});
/* POP */
function pop(URLfen,W,H,L,T) {
		var w=window.open(URLfen,"","status=no,location=no,scrollbars=yes,toolbar=no,directories=no,resizable=yes,width="+W+",height="+H+",top="+T+",left="+L);
}

/* BLOC SERVICES */
function servicesBloc(divid) {
	$bloc = $('.'+divid);
	$bloc.find('li').first().addClass('liActif');
	$ul = $bloc.find('ul');
	$count = $bloc.find('li').length;
	$ul.width($count * $bloc.find('li').first().outerWidth(true) + 1);
	$gauche =$bloc.find('.gauche');
	$droite =  $bloc.find('.droite');
	$gauche.css('cursor','pointer');
	$droite.css('cursor','pointer');
	$gauche.click(function() {
		var $actifBloc = $bloc.find('.liActif');
		var $nextBloc= $actifBloc.prev();
		if($nextBloc.length == 0) {
			$nextBloc= $ul.find('li').last();
			var $width = $nextBloc.outerWidth(true);
			var $calcul = $ul.width()-$width;
			$ul.animate({marginLeft:-$calcul+'px'},250);
		} else {
			var $ml = parseInt($ul.css('margin-left'));
			var $width = $actifBloc.outerWidth(true);
			console.log("ml"+$ml+$width);
			$ul.animate({marginLeft:($ml+$width)+'px'},250);
		}
		$actifBloc.removeClass('liActif');
		$nextBloc.addClass('liActif');
	});
	$droite.click(function() {
		var $actifBloc = $bloc.find('.liActif');
		var $nextBloc= $actifBloc.next();
		if($nextBloc.length == 0) {
			$nextBloc= $ul.find('li').first();
			$ul.animate({marginLeft:'0px'},250);
		} else {
			var $ml = parseInt($ul.css('margin-left'));
			var $width = $actifBloc.outerWidth(true);
			$ul.animate({marginLeft:($ml-$width)+'px'},250);
		}
		$actifBloc.removeClass('liActif');
		$nextBloc.addClass('liActif');
	});
};
/* FAVO */
function favoris() {if ( navigator.appName != 'Microsoft Internet Explorer' ) {window.sidebar.addPanel("$$SRV$$","http://$$SRV$$",""); } else { window.external.AddFavorite("http://$$SRV$$","$$SRV$$"); } }