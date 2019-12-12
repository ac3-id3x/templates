//localStorage.clear()
//TOURNE CARROUSEL DEMARAGE

$(window).bind("orientationchange", function (event) {
	var i = parseInt($(".carouselbig").css('marginLeft'));
	var indice= i/MaxWidth;
	MaxWidth2 = parseInt($(document).width());
	var nouv=MaxWidth2*indice;
	$(".carouselbig").css('marginLeft',nouv)
	if(reading == false){
		carrousel();
		pause();
		$(".carouselbig li").removeClass('actif');
	}else{
		pause();
		carrousel();
	}
	
	
});
//LANCE CARROUSEL DEMARAGE
$(document).delegate("#index","pageinit", function (event) {
	carrousel();
	showinfo();
});
$("'#listeagences").live("pagebeforeshow",function(event){
	pause();
});
$("#agence").live("pagebeforeshow",function(event){
	pause();
});
//FONCTION AFFICHE INFO
function showinfo(){
	$(".carouselbig li").children('.photocarrousel').children('.infos').children('.moreinfos').click(function(){
			if($(this).parent().parent().parent('li').hasClass('link')){
				$(this).parent().animate({bottom:(-160)}, "slow", function(){$(this).parent().parent('li').removeClass('link');});	
				$(this).children("span").children(".ui-icon").removeClass("ui-icon-tridwn-custom");
				$(this).children("span").children(".ui-icon").addClass("ui-icon-triup-custom");
				//MET EN PAUSE
				if(reading == true){
					pause();
				}else{
					$(".carouselbig li").addClass('actif');
					start('left');
				}
			}else{
				$(this).parent().animate({bottom:(0)}, "slow", function(){$(this).parent().parent('li').addClass('link');});
				$(this).children("span").children(".ui-icon").removeClass("ui-icon-triup-custom");
				$(this).children("span").children(".ui-icon").addClass("ui-icon-tridwn-custom");
				//LANCE LA LECTURE
				if(reading == true){
					pause();
					$(".carouselbig li").removeClass('actif');
				}else{
					start('left');
				}
			}	
	});
}
function allsize() {
	nbr = $(".carouselbig li").length;
	MaxWidth = parseInt($(document).width());
	totalWidth = MaxWidth*nbr;
	calcul = MaxWidth-totalWidth;
	limite = parseInt($(".carouselbig").css('marginLeft'));
}
function carrousel() {
	allsize();
	$(".carouselbig").width(totalWidth);
	$(".carouselbig").children('li').width(MaxWidth);
	$(".carouselbig").children('li').children(".img-carousel").css({maxWidth:MaxWidth});
	//START CARROUSEL DEMARAGE
	start('left');
	//TOURNE CARROUSEL LEFT
	$('.carouselbig li').each(function(){
			$(this).swipeleft(function(){
				if($(this).hasClass('actif')){	
					bigcarrourun('left');
					pause();
					start('left');
				}
			});
			$(this).swiperight(function(){
				if($(this).hasClass('actif')){		
					console.log($(this));
					bigcarrourun('right');
					pause();
					start('left');
				}
			});
	});
		
}
//FONCTION START CARROUSEL
	function start(sens) {
		reading = true;
	    interval = setInterval("bigcarrourun('"+sens+"');", 5000 );
	}
	//FONCTION STOP CARROUSEL
	function pause() {
	    reading = false;
	    clearInterval(interval);
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