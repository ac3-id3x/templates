$().ready(function(){
	//CenterBloc(".thumbNav");
	CenterBloc(".connecte a");
	//$(".jcarousel-prev").attr("disabled","disabled");;
	//$(".jcarousel-next").attr("disabled","disabled");;
	
	
	/* Effet champs de texte */
	/*$(".zoneTexte").focus(function(){
		$(this).css("border","1px solid #000");
	});
	
	$(".zoneTexte").blur(function() {
		$(this).css({"border":"1px solid #E4E5E7","border-top":"1px solid #ADADAF"});
	});*/
	
	$(".bt_haut").mouseenter(function() {
		$parent=$(this).parent();
		$parent.find(".infobull").css("display","block");
	});
	
	$(".bt_haut").mouseleave(function() {
		$parent=$(this).parent();
		$parent.find(".infobull").css("display","none");
	});
	
	$('.closeContact').bind("click",function(){
		$('.fondOverlayContact').fadeOut('slow');
		$('#connexionOverlayContact').fadeOut('pretty');
	});
	
	/* Test de la validité du formulaire avant le submit */
	
	$(".cmxform").submit(function(e) {
		var email = $("#email");
		var isValidEmail = validateEmail(email.val());
		var message = $("#message");
		var flag = true;
		var topScrollVall = 0;
		var Tphrase = new Array();
		
		if (!isValidEmail)
		{
			Tphrase[0] = "Veuillez remplir votre email";
			email.addClass("error");
			flag = false;
			topScrollVall = 80;
		}else{
			email.removeClass("error");
		}
		
		if (message.val().length <= 10 || message.length >= 200)
		{
			Tphrase[1] = "Veuillez saisir votre message, 200 caractères maximum";
			flag = false;
			if (flag) topScrollVall = 800;
		}else{
			message.removeClass("error");
		}
		
		if (flag == false)
		{
			var phrase = "";
			for(var i in Tphrase)
			{
			    phrase = phrase+"<br />"+Tphrase[i];
			}
			$(".erreur").html("");
			$(".erreur").html(phrase).fadeIn('slow');
			$(".zoneTexte").val("");
			$('#fade , .popup_block').fadeOut(function() {
				$('#fade, a.close').remove();
			});
			$('html,body').animate({scrollTop: topScrollVall},500);
			return false;
		}else{
			$("#demande select").each(function(){
				
			});
			return true;
		}
		e.preventDefault();
	});

	/* Centrer un element */
	function CenterBloc(bloc)
	{
		$(bloc).each(function(){
			$(this).css({/*"width":$(this).width(),*/"position":"absolute","left":"50%","margin-left":"-" + ($(this).width()/2) + "px"});				  
		});	
	}
	
	function validateEmail(email) 
	{ 
		 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
		 return email.match(re)
	}
/* -- SLIDER HAUT PAGE DE TEMPLATE -- */	
	$('#sliderGall').each(function(){
		var haut = $(this).children('li').height();
		var large = $(this).children('li:first-child').width();
		var nbr = $(this).children('li').length;
		var randomnumber=Math.floor(Math.random()*(nbr))
		$(this).width(nbr*large+'px');
		var largMenu = $('#menu_templates').width();
		var largOnglet = Math.round(largMenu/nbr);
		$('#menu_templates').children('li[id*="onglet"]').width(largOnglet);
		var cssObj = {
	      'overflow' : 'hidden',
	      'margin':'auto',
	      'width' : large,  
	      'height' : haut
    	};
    	$(this).parent('.banniere').css(cssObj);
    	var ongletAct = "#onglet-"+(randomnumber+1)
    	$('#selectedMenu').width(largOnglet); 
    	$('#sliderGall').css('margin-left',-large*(randomnumber));
    	$('#selectedMenu').css('left',largOnglet *(randomnumber));
    	$('#menu_templates').children(ongletAct).addClass('on');
    	
		$('#menu_templates').children('li[id*="onglet"]').click(function(){
			$('#menu_templates').children('.on').removeClass('on');
			$(this).addClass('on');
			var ident = $(this).attr('id').split('-');
			var num = ident[1];
			var margeLeft = -((large*num)-large)
			var selectedMenu = largOnglet * (num-1)
			$('#sliderGall').animate({marginLeft:margeLeft},500);
			$('#selectedMenu').animate({left:selectedMenu},500);
		});
	});
/* -- PETIT SLIDER PAGE DE TEMPLATE -- */
	$('div[id*="slidesSurMesure"]').each(function(){
		var nomCarroussel = $(this).attr('id').split('Mesure');
		var numCarroussel = nomCarroussel[1];
		var hCache = $(this).children('div').children('a').height();
		var lCache = $(this).children('div').children('a').width();
		var vignNbr = $(this).children('div').children('a').length;
		$(this).children('div').width(lCache*vignNbr)
		$(this).children('div').children('a').css('float','left');
		var cssCache = {
			'overflow' : 'hidden',
			'width' : lCache,
			'height' : hCache
		};
		$(this).css(cssCache);
		$(this).parent('div').children('div[id*="paginPoint"]').each(function(){
			for(i=1 ; i<= vignNbr ; i++){
				var actuel = $(this).html();
				var point = actuel + '<div class="carrouselPoint" id="point-'+i+'"></div>';
				$(this).html(point);
			}
			$(this).children('#point-1').removeClass('carrouselPoint');
			$(this).children('#point-1').addClass('carrouselPointOn');
		});
		$(this).next('div').children('div[id*="point"]').each(function(){
			$(this).click(function(){
				var nomPoint=$(this).attr('id').split('-');
				var numPoint=nomPoint[1];
				var marfLeftPoint=(-lCache*(numPoint-1));
				$('#slidesSurMesure'+numCarroussel).children('.slides_container').animate({'margin-left':marfLeftPoint},500);
				$(this).parent('div').children('.carrouselPointOn').addClass('carrouselPoint');
				$(this).parent('div').children('.carrouselPointOn').removeClass('carrouselPointOn');
				
				$(this).removeClass('carrouselPoint');
				$(this).addClass('carrouselPointOn');
			});
		});
	});
});

/* FIX Z-INDEX VIDEOS YOUTUBE */
$("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
      else $(this).attr('src',ifr_source+'?'+wmode);
});