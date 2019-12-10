var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|07|08|09)[0-9]{8}$','i');

/* AJOUT FAVORIS */
function ajouterFavoris(url) {
	if (navigator.appName != 'Microsoft Internet Explorer') {
	window.sidebar.addPanel(url, 'http://'+url+'', '');
	} else {
		window.external.AddFavorite('http://'+url+'', ''+url+'');
	}
};
function emailSpam(email,container) {
	$('#'+container).html('<a href="mailto:' + email + '">' + email + '</a>');
}
function sliderBloc(bloc){
	if($('html').hasClass('ie7')) {
		if($(bloc).hasClass('open')) {
			$(bloc).hide();
			$(bloc).removeClass('open');
		} else {
			$(bloc).show();
			$(bloc).addClass('open');
		}
	} else {
		if($(bloc).hasClass('open')) {
			$(bloc).slideUp(200,'swing', function() {
				$(this).removeClass('open');
			});
		} else {
			$(bloc).slideDown(400,'swing', function() {
				$(this).addClass('open');
			});
		}
	}
}
/*function fieldValToLowerCase(fieldId) {
	var field = $(fieldId);
	if(field.length) {
		field.val(field.val().toLowerCase());
	}
}*/
$(document).ready(function() {
	// BTN WIDGET
	if(winW > 979) {
		$('.btn-tooltip').tooltip();
	}
	// CLIC PHONE
	function clicPhone(a,$this){
		$this.find('#texte-telephonez-nous'+a).hide();
		$this.find('#numero-telephonez-nous'+a).show();
		$this.attr('id','');
	    $this.unbind('click');
	}
	$('#texte-telephonez-nous').parent().click(function() {
			var a="";
			var $this = $(this);
			clicPhone(a,$this);
	});
	$('#texte-telephonez-nous-detail').parent().click(function() {
			var a="-detail";
			var $this = $(this);
			clicPhone(a,$this);
	});
	$('#bouton-telephonez-nous-footer').click(function() {
			var a="-footer";
			var $this = $(this);
			clicPhone(a,$this);
	});
	$('#bouton-telephonez-nous-txt').click(function() {
			var a="-txt";
			var $this = $(this);
			clicPhone(a,$this);
	});
	$('.zone-message-agence, .bouton-agence, .form-envoi-message, .zone-agence-ajax, .detail-agence-liste, .container').on('click','div[id*="bouton-telephonez-nous"]',function() {
		var cutId = $(this).attr('id').split('-');
		var a = '-'+cutId[3];
		var $this = $(this);
		clicPhone(a,$this);
	});
	$('.contenu-header').on('click','div[id*="bouton-telephonez-nous-header"]',function() {
		var cutId = $(this).attr('id').split('-');
		var a = '-'+cutId[3]+'-'+cutId[4];
		var $this = $(this);
		clicPhone(a,$this);
	});
	// BOUTON ENVOYER MESSAGE
	$('.bouton-agence, .form-envoi-message, .zone-agence-ajax').on('click','.bouton-envoyer-message-agence', function (e) {
		e.preventDefault();
		var btn = $(this);
		btn.button('loading');
		var $this = $(this);
		var contentForm = $(this).closest('.form-envoi-message').serialize();
		var contentFormNoComa = contentForm.replace(',/g', '\,');
		var contentFormNoBackspace = contentFormNoComa.replace(/%0D%0A/g,' ');
		$.ajax({
			type: "POST",
			data : contentFormNoBackspace,
			dataType:'json',
			url: '/agence,incl_contact_email.htm',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');
				btn.removeClass('bouton-envoyer-message-agence');
			},
			success: function(data) {
				console.log(data);
				var idpublication = data.idpublication;
				if(data.message.length > 0) {
					$('.message-erreur-alerte').html(data.message);
					if(data.nom.length <= 0) {
						$('#nom-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#nom-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.email.length <= 0 || regEmail.test(data.email) == false) {
						$('#email-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#email-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.telephone.length <= 0 || regTel.test(data.telephone) == false) {
						$('#telephone-message'+idpublication).parent().addClass('error').removeClass('success');;
					} else {
						$('#telephone-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					if(data.message_user.length <= 0) {
						$('#message-message'+idpublication).parent().addClass('error').removeClass('success');
					} else {
						$('#message-message'+idpublication).parent().removeClass('error').addClass('success');
					}
					btn.button('reset');					
					btn.addClass('bouton-envoyer-message-agence');
				} else {
					btn.parent().parent().parent().parent().find('.message-erreur-alerte').html(messageOK).remove();
					$('#nom-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#email-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#telephone-message'+idpublication).parent().removeClass('error').removeClass('success');
					$('#message-message'+idpublication).parent().removeClass('error').removeClass('success');					
					btn.removeClass('bouton-envoyer-message-agence');
					btn.html(boutonOK);
					btn.unbind('click');
					sendAgenceTracking();
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		console.log(textStatus);
	 	 		btn.button('reset');
	 	 		btn.addClass('bouton-envoyer-message-agence');	 	 		
                //console.log(jqXHR, textStatus, errorThrown);
			},
			complete: function() {
				//btn.button('reset');
				$('.message-erreur-alerte').show('slow');
			}
		});
	});
	// AVOID DROPDOWN CLOSE
	$('.dropdown input, .dropdown button').on('click', function (e) {
		e.stopPropagation()
	});
	// CLICK MOTEUR RESPONSIVE
	// MOTEUR CLICK
	if(winW < 800) {
		$('.h2-title-moteur').on('click',function() {
			var moteur = $(this).parent().parent().parent().find('.moteur-avantage-mobile');
			if(moteur.hasClass('margin-top-20')) {
				moteur.children('div').hide();
				moteur.removeClass('margin-top-20');
			} else {
				moteur.addClass('margin-top-20');
				moteur.children('div').show();
			}
			if(moteur.length == 0){
				var moteur = $(this).parent().find('#Mini_Moteur');
				if(moteur.is(":visible")) {
					
				moteur.hide();
			} else {
				moteur.show();
			}
			}
		});
	}
	// COLLAPSE NAV
	$('.btn-navbar').on('click',function() {
		var targetNav = $('.menu-responsive');
		if(targetNav.hasClass('in')) {
			targetNav.removeClass('in');
		} else {
			targetNav.addClass('in');
		}
	});
	// MENU SUB
	$('.menu-sub-container').children('a').on('click',function(e) {
	  e.preventDefault();
		e.stopPropagation();
		// TEST IF ALREADY OPEN
		var openMenu = $(this).parent().children('.menu-sub').hasClass('openSub');
		if(openMenu === true) {
			$(this).find('a').first().removeClass('menu-sub-on');
			$(this).children('.menu-sub').removeClass('openSub').hide();
		} else {
			// RESET
			$('.menu-sub').parent().find('a').removeClass('menu-sub-on');
			$('.menu-sub').removeClass('openSub').hide();
			// FIX GOOD MENU
			if($(this).parent().children('.menu-sub').hasClass('openSub')) {
				$(this).parent().find('a').first().removeClass('menu-sub-on');
				$(this).parent().children('.menu-sub').removeClass('openSub').hide();
			} else {
				$(this).parent().find('a').first().addClass('menu-sub-on');
				$(this).parent().children('.menu-sub').addClass('openSub').show();
			}
		}
		// CREATE CODE FOR BODY
		$('body').on('click',function(e) {
			$('.menu-sub').parent().find('a').removeClass('menu-sub-on');
			$('.menu-sub').removeClass('openSub').hide();
		});
	});
	// SCROLL
	/*if(winW > 767) {
  	$(function() {
      var $sidebar   = $('#recherche-moteur');
      if($sidebar.length > 0) {
        var $container = $('#recherche-listing'),
        $navigation = $('.navigation'),
        $window    = $(window),
        endContainer = $container.offset().top + $container.outerHeight() - $sidebar.outerHeight(),
        offset     = $sidebar.offset(),
        topPadding = parseInt($navigation.outerHeight() + 15);

        if(!$navigation.hasClass('fixe')) {
          topPadding = 15;
        }

        $window.scroll(function() {
            if ($window.scrollTop() > offset.top) {
                if($window.scrollTop() >+ endContainer) {

                } else {
                  $sidebar.stop().animate({
                      marginTop: $window.scrollTop() - offset.top + topPadding
                  });
                }
            } else {
                $sidebar.stop().animate({
                    marginTop: 0
                });
            }
        });
        $window.resize(function() {
           endContainer = $container.offset().top + $container.outerHeight() - $sidebar.outerHeight();
        });
      }
    });
  }*/
});
