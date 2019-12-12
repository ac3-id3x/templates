//localStorage.clear()
//TOURNE CARROUSEL DEMARAGE
$(window).bind("orientationchange", function (event) {
	var i = parseInt($(".carouselbig").css('marginLeft'));
	var indice= i/MaxWidth;
	MaxWidth2 = parseInt($(document).width());
	var nouv=MaxWidth2*indice;
	$(".carouselbig").css('marginLeft',nouv)
	carrousel();
});
//LANCE CARROUSEL DEMARAGE
$(document).delegate("#detail","pageinit", function (event) {
	carrousel();
});
function allsize() {
	nbr = $(".carouselbig li").length;
	MaxWidth = parseInt($(document).width());
	totalWidth = MaxWidth*nbr;
	calcul = MaxWidth-totalWidth;
	limite = parseInt($(".carouselbig").css('marginLeft'));
	$('.carouselbig li').addClass('actif');
}
function carrousel() {
	allsize();
	$(".carouselbig").width(totalWidth);
	$(".carouselbig").children('li').width(MaxWidth);
	$(".carouselbig").children('li').children(".img-carousel").css({maxWidth:MaxWidth});
	//TOURNE CARROUSEL LEFT
	$('.carouselbig li').each(function(){
			$(this).swipeleft(function(){
				if($(this).hasClass('actif')){	
					bigcarrourun('left');
				}
			});
			$(this).swiperight(function(){
				if($(this).hasClass('actif')){		
					bigcarrourun('right');
				}
			});
	});
}
//FONCTION TOURNE CARROUSEL
function bigcarrourun(sens){
		allsize();
		$(".carouselbig li").removeClass('actif');
		if(sens == 'left'){
			var mrgleft = limite-MaxWidth;
			if(limite>calcul){
				$(".carouselbig").animate({marginLeft:mrgleft},'slow',function(){$(".carouselbig li").addClass('actif');});
			}else{
				$(".carouselbig").animate({marginLeft:0},'slow',function(){$(".carouselbig li").addClass('actif');});
			}
		}else{
			var mrgleft = limite+MaxWidth;
			var mrgmax = calcul
			if(limite<0){
				$(".carouselbig").animate({marginLeft:mrgleft},'slow',function(){$(".carouselbig li").addClass('actif');});
			}else{
				$(".carouselbig").animate({marginLeft:mrgmax},'slow',function(){$(".carouselbig li").addClass('actif');});
			}
		}
}