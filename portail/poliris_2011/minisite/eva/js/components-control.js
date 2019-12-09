var player;
jQuery(document).ready(function() {
	showTip();
	LoadYouTubePlayer();

	/*
	$('.video-block').find('img').click(function(e) {
		$('.video-block').find('img').hide(50);
		$('.video-detail').show(50, function() {
			$('.video-detail').html('<iframe width="640" height="394" src="//www.youtube.com/embed/k0zpFjlbpUE?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
			//player.playVideo();
		});
	});*/

	$('.top-menu-link').find("a").click(function(){
				var elementClicked = $(this).attr("href");
				var destination = $(elementClicked).offset().top;
				$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-74}, "slow" );
				menuController();
				event.preventDefault();
	});
	$('.top-menu-link li').each(function looping(index) {
		//gotoContent(index, 'top-menu-link li');
	});

	$('.go-to-top a').click(function() {
		$('html,body').animate({
			scrollTop: $("#header").offset().top - 74
		}, 'slow');
	});

	$(".sub-panel").hide(); //Hide all content
	$("ul.tabs li a:first").addClass("active").show(); //Activate first tab
	$("ul.slide-active li:first").addClass('active').show();
	$(".sub-panel:first").show(); //Show first tab content

	//On Click Event

	$("ul.tabs li a").click(function() {
		if ($(this).hasClass('active')) {
			return;
		}
		$("ul.tabs li a").removeClass("active");
		$("ul.slide-active li").removeClass("active");
		$(this).addClass("active");
		pos1 = $(this).attr('alt');
		$('ul.slide-active li').each(function looping(index) {
			pos2 = $(this).find('a').attr('alt');
			if (pos1 == pos2) {
				$(this).addClass("active");
			}
		});
		$(".sub-panel").hide();
		var activeTab = $(this).attr("alt");
		if (jQuery('html').hasClass('ie')) {
			$(activeTab).show();
		} else $(activeTab).fadeIn();
		return false;
	});

	
	
	$("ul.slide-active li").click(function() {
		if ($(this).hasClass('active')) {
			return;
		}
		var pos = 0;
		$("ul.slide-active li").removeClass("active");
		$("ul.tabs li a").removeClass("active");
		$(this).addClass("active");
		pos1 = $(this).find('a').attr('alt');
		$('ul.tabs li a').each(function looping(index) {
			pos2 = $(this).attr('alt');
			if (pos1 == pos2) {
				$(this).addClass("active");
			}
		});
		$(".sub-panel").hide();
		var activeTab = $(this).find('a').attr("alt");
		if (jQuery('html').hasClass('ie')) {
			$(activeTab).show();
		} else $(activeTab).fadeIn();
		return false;
	});

	$(".zoom-feature").colorbox({
		width: "75%",
		opacity: "0.75"
	});
});

function showTip() {
	var timeout = null;
	var curElm = null;
	$('.navi-pages li').each(function(index) {
		var jit = $(this);
		var tip = jit.find(".title-panel");

		gotoContent(index, 'navi-pages li');

		if (jQuery('html').hasClass('android') || jQuery('html').hasClass('ios')) {
			jit.click(function(e) {
				e.preventDefault();
				timeout && clearTimeout(timeout);
				if (curElm && curElm.length) {
					curElm.find(".title-panel").hide();
				}
				tip.show();

				curElm = jit;
				timeout = setTimeout(function() {
					tip.hide();
				}, 1000);
			});
		} else {
			jit.hover(function() {
				tip.show();
			}, function() {
				tip.hide();
			});
		}
	});
};

var fixFixed = function() {
	if (jQuery('html').hasClass('android') || jQuery('html').hasClass('ios')) {
		var d = document.createElement("div");
		d.style.height = "99px";
		d.style.overflow = "hidden";
		document.body.appendChild(d);
		setTimeout(function() {
			d.parentNode.removeChild(d);
		}, 10);
	}
};

function gotoContent(id, clCurrent) {
	$('.' + clCurrent).each(function(index) {
		if (index == id) {
			if (id == 0) {
				$(this).click(function(e) {
					$(this).addClass('current').removeClass('no-current').siblings().removeClass('current').addClass('no-current');
					if (jQuery('html').hasClass('webkit')) {
						$('body').animate({
							scrollTop: $("#header").offset().top - 70
						}, 'slow', function() {
							fixFixed();
						});
					} else {
						$('html').animate({
							scrollTop: $("#header").offset().top - 70
						}, 'slow', function() {
							fixFixed();
						});
					}
					return false;
				});
			} else {
				$(this).click(function(e) {
					$(this).addClass('current').removeClass('no-current').siblings().removeClass('current').addClass('no-current');
					if (jQuery('html').hasClass('webkit')) {
						$('body').animate({
							scrollTop: $('#panel-0' + id).offset().top - 70
						}, 'slow', function() {
							fixFixed();
						});
					} else {
						$('html').animate({
							scrollTop: $('#panel-0' + id).offset().top - 70
						}, 'slow', function() {
							fixFixed();
						});
					}
					return false;
				});
			}
		}
	});
};

// Start Detect Orient

function checkOrientAndLocation() {
	if (currentRotation != window.orientation) {
		setOrientation();
	}
}

function setOrientation() {
	var orient = "";
	switch (window.orientation) {
		default: orient = 'portrait';
		break;
		case 90:
		case -90:
			orient = 'landscape';
			break;
	}
	currentRotation = window.orientation;
	// jQuery("body").attr("class", orient);
	setTimeout(fixFixed, 1000);
}
// Initialize
var currentRotation = null;
checkOrientAndLocation();
// Add event when rotate
// window.addEventListener("resize", checkOrientAndLocation, false);
window.addEventListener("orientationchange", checkOrientAndLocation, false);

function LoadYouTubePlayer() {
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '394',
		width: '640',
		videoId: 'k0zpFjlbpUE',
		playerVars: { 'rel': 0 }
	});
}