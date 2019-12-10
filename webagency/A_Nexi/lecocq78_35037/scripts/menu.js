$('.Menu_Ctn').children('li').each(function(){
	var $li = $(this);
	var $widthUl = $li.width();
	$(this).children('.subTitreNav').width($widthUl);
		if($(this).width()>= 140){
			$(this).children('.subTitreNav').width($widthUl);
		}
		if($(this).width() < 140){
			$(this).children('.subTitreNav').width(($widthUl) + 40);
		}
});
/* MENU ANNONCES */ 
function loadMenu(divid) {
	$('#'+divid).children('.titreNav').css('cursor','pointer');
	$('#'+divid).children('.titreNav').mouseover(function() {
			// CSS ON MENU
			$(this).addClass('onMenu');
			// SHOW MENU
			$(this).parent().find('.menuStyle').slideDown('fast').show(); 
			// EFFECT ON LI MENU SHOW
			$(this).parent().find('.menuStyle').find('li').css('cursor','pointer');
			$(this).parent().find('.menuStyle').find('li').find('a').addClass('colorOffTxtLi');
				$(this).parent().find('.menuStyle').find('li').hover(function() {
					$(this).addClass('onLiBig');
					$(this).children('a').addClass('colorOnTxtLi');
				}, function(){	
					$(this).removeClass('onLiBig');
					$(this).children('a').removeClass('colorOnTxtLi');
				});
		// JS FOR MENU
		$(this).parent().hover(function() {
			// CSS ON MENU
		}, function() {
			// HIDE MENU
			$(this).children('.titreNav').removeClass('onMenu');
			$(this).parent().find('.menuStyle').slideUp('fast');
		});
	});
}
var $bouton_criteres = 0;
var $heightAdd = $('.moteurCriteres').outerHeight(true);
var $heightStart = $('.moreCriteres').outerHeight(true);
$('.moreCriteres').css('cursor','pointer');
$('.moreCriteres').click(function() {
	if($bouton_criteres == 0) {
		$(this).children('.moteurCriteres').slideDown();
		$('.plusCriteres').addClass('onPlusCriteres');
		$bouton_criteres = 1;
	} else {
		$(this).children('.moteurCriteres').slideUp();
		$('.plusCriteres').removeClass('onPlusCriteres');
		$bouton_criteres = 0;
	}
});