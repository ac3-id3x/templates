<script type="text/javascript">
	$(window.document).bind('mobileinit', function(){
		 // DEFAULT 
		$$REM$$ <!-- Theme mobile-->$$END$$
		$.mobile.defaultPageTransition = 'none';
		$.mobile.loadingMessageTextVisible = true;
		$.mobile.loadingMessage = '$$LG:CHARGEMENTENCOURS pcase$$';
		$.mobile.pageLoadErrorMessage = '$$LG:ERREUR pcase$$';
		$.mobile.page.prototype.options.contentTheme = "$$THEMEMOBILE$$";
	  	// NAV
	  	$.mobile.page.prototype.options.backBtnTheme    = "$$THEMEMOBILE$$";
	    // PAGE
	    $.mobile.page.prototype.options.theme = "$$THEMEMOBILE$$";
	    $.mobile.page.prototype.options.headerTheme = "$$THEMEMOBILE$$";
	    $.mobile.page.prototype.options.contentTheme    = "";
	    $.mobile.page.prototype.options.footerTheme = "$$THEMEMOBILE$$";
	    // SELECT
	    $.mobile.selectmenu.prototype.options.menuPageTheme = "$$THEMEMOBILE$$";
	    // LISTVIEWS
	    $.mobile.listview.prototype.options.theme           = "$$THEMEMOBILE$$";
	    $.mobile.listview.prototype.options.headerTheme = "$$THEMEMOBILE$$";
	    $.mobile.listview.prototype.options.contentTheme = "";
	    $.mobile.listview.prototype.options.dividerTheme    = "";
	    $.mobile.listview.prototype.options.splitTheme   = "";
	    $.mobile.listview.prototype.options.countTheme   = "";
	    $.mobile.listview.prototype.options.filterTheme = "$$THEMEMOBILE$$";
	    $$IF=:RECHERCHEAGENCES:IDT$$
	   	 $.mobile.listview.prototype.options.filterPlaceholder = "$$LG:CHERCHEZAGENCE pcase$$";
	    $$END$$
	    $$IF!:RECHERCHEAGENCES:IDT$$
	   	 $.mobile.listview.prototype.options.filterPlaceholder = "$$LG:MAXIVILLES pcase$$";
	    $$END$$
	    // DIALOG
	    $.mobile.dialog.prototype.options.closeBtnText = "$$LG:FERMER2 pcase$$"
	    // CONFIG GLOBAL
	    $.mobile.ajaxEnabled = false;
	    $.support.cors = true;
	    $.mobile.allowCrossDomainPages = true;
	   	$.mobile.pushStateEnabled = false;
});
$('.ui-page' ).live('pageshow',function(event){
	$.mobile.hidePageLoadingMsg();
		$('.ui-btn-up-a').each(function(){	
			$(this).click(function(){
					$this = $(this);
					$(this).addClass('ui-btn-active');
					setTimeout(function () {
						$this.removeClass('ui-btn-active');
					}, 250);
			});
	});
	$('#boutonForm').click(function() {
		$.mobile.showPageLoadingMsg();	
	});
	$('a').click(function() {
		if($(this).attr("id") == "boutonShareFacebook" || $(this).attr("id") == "boutonShareTwitter" || $(this).attr("id") == "boutonExternal" || $(this).attr("class") == "linkGalerie ui-link" || $(this).attr("id") == "telDetail") {
			return true;
		} else {
			if($(this).data("href") !=  undefined) {
				$.mobile.showPageLoadingMsg();	
			}	
		}
	});
	/* FIXING FOOTER FOR MANGO >= 7.5 */
	var nav = navigator.userAgent;
	if(nav.search("IEMobile") > - 1) { 
		document.getElementById("footerMobile").style.marginBottom="-33px";
	};
});
</script>