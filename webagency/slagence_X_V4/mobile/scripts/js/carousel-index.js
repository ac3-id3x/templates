var id_run = '';
var Corps = $(".ui-mobile-viewport");
var Reference = $(".carousel li:first-child"); 
var Margin = parseInt(Reference.css('marginRight'));
var NbElement = $(".carousel li").length;
var Espace = Reference.outerWidth(true);
var Container = $('.carousel');
$(window).bind("orientationchange", function (event) {
	diaporamaIndexStart();
});
$(document).delegate("#index","pageshow", function (event) {
	diaporamaIndexStart();
});
function diaporamaIndexStart() {
	Container.css("width", Espace * NbElement);
	$(".carrousel-conteneur").height( Reference.height() ).css("width",Corps.width() - 20).css("overflow", "hidden")	.css("margin","0px;");
	/* ACTION SWIPE */
	var swipe = 0;
	$(".carrousel-conteneur").swipeleft(function(){
				if(swipe == 0) {
					swipe = 1;
					var Start = parseInt(Container.css('marginLeft'))
					var calcul = Start-Espace;
					var widthMax = $(".carrousel-conteneur").width();
					if(widthMax - calcul >= Container.width()) {
						var new_calcul = Container.width() - widthMax - 10;
						Container.animate({
						marginLeft:-new_calcul
						}, 'slow', function() {
							swipe = 0;
						});	
					} else {
						Container.animate({
						marginLeft:calcul
						}, 'slow', function() {
							swipe = 0;
						});
					}
			}
	});
	$(".carrousel-conteneur").swiperight(function(){
		if(swipe == 0) {
			swipe = 1;
			var Start = parseInt(Container.css('marginLeft'))
				if(Start != 0) {
					var calcul = Start+Espace;
					if(calcul >= 0) {
						calcul = 0;
						Container.animate({
						marginLeft:calcul
						}, 'slow', function() {
							swipe = 0;
						});	 
					} else {
						Container.animate({
						marginLeft:calcul
						}, 'slow', function() {
							swipe = 0;
						});	 
					}
				}
		}
	});
	/* ACTION TAP */
	$('.blocinfos').each(function(){
		$(this).tap(function(){	
			if(id_run == $(this).attr('id') || id_run == '') {
				$(this).children('.infos').animate({
					marginTop:  (0)
				}, 250,function(){
					$(this).addClass('onover');
					id_run = $(this).parent().attr('id');
				});
			} else {
				new_li = $(this).attr('id');
				$('#'+id_run).children('.infos').animate({
				marginTop:  (175)
				}, 250,function(){
					$(this).removeClass('onover');
					$('#'+new_li).children('.infos').animate({
					marginTop:  (0)
					}, 250,function(){
						$(this).addClass('onover');
						id_run = $(this).parent().attr('id');
					});
				});
			}
		});
	});
}