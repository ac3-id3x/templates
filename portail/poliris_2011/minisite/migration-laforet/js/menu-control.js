/*
jQuery(document).ready(function(){		  
	menuController();
});

var menuController = function(){
	var topMenu = jQuery('.top-menu-link'),
		topMenuItems = jQuery('li',topMenu),
		topMenuHeight = topMenu.outerHeight(),
		leftMenu = jQuery('.navi-pages'),
		leftMenuItems = jQuery('li',leftMenu),
		page1 = jQuery('#header'),
		page2 = jQuery('#panel-01'),
		page3 = jQuery('#panel-02'),
		page4 = jQuery('#panel-03'),
		page5 = jQuery('#panel-04'),
		page6 = jQuery('#panel-05'),
		win = jQuery(window),
		doc = jQuery(document),
		docHeight = doc.height(),
		winHeight = win.height(),
		buffer = winHeight/4,
		page1Pos = page1.offset().top - buffer,
		page2Pos = page2.offset().top - buffer,
		page3Pos = page3.offset().top - buffer,
		page4Pos = page4.offset().top - buffer,
		page5Pos = page5.offset().top - buffer,
		page6Pos = page6.offset().top - buffer,
		timeout;

	var activeMenu = function(){
		topMenuItems.removeClass('current').addClass('no-current');
		leftMenuItems.removeClass('current').addClass('no-current');
		if((win.scrollTop() + winHeight) >= docHeight || win.scrollTop() + topMenuHeight > page6Pos) {
			topMenuItems.eq(5).addClass('current').removeClass('no-current');
			leftMenuItems.eq(5).addClass('current').removeClass('no-current');
		} else {
			if(win.scrollTop() + topMenuHeight > page5Pos) {
				topMenuItems.eq(4).addClass('current').removeClass('no-current');
				leftMenuItems.eq(4).addClass('current').removeClass('no-current');
			} else {
				if(win.scrollTop() + topMenuHeight > page4Pos) {
					topMenuItems.eq(3).addClass('current').removeClass('no-current');
					leftMenuItems.eq(3).addClass('current').removeClass('no-current');
				} else {
					if(win.scrollTop() + topMenuHeight > page3Pos) {
						topMenuItems.eq(2).addClass('current').removeClass('no-current');
						leftMenuItems.eq(2).addClass('current').removeClass('no-current');
					} else {
						if(win.scrollTop() + topMenuHeight > page2Pos) {
							topMenuItems.eq(1).addClass('current').removeClass('no-current');
							leftMenuItems.eq(1).addClass('current').removeClass('no-current');
						} else {
							if(win.scrollTop() + topMenuHeight > page1Pos) {
								topMenuItems.eq(0).addClass('current').removeClass('no-current');
								leftMenuItems.eq(0).addClass('current').removeClass('no-current');
							} else {
								
							}
						}
					}
				}
			}
		}
	}
	window.onscroll = function(){
		// console.log((win.scrollTop()) +'/'+ topMenuHeight +'/'+ docHeight)
		clearTimeout(timeout);
		timeout = setTimeout(activeMenu,100);
	};
};

*/

$(".top-menu-container select").change(function() {
  window.location = $(this).find("option:selected").val();
});
