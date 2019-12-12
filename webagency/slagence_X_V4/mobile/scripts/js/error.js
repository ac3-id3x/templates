function goError(url,nom,langue) {
	$('#imageLogo').error(function() {
		$(this).parent().parent().append('<a href="'+url+'/index.htm?lang='+langue+'" data-url="'+url+'/index.htm?lang='+langue+'" data-ajax="false"><div class="titleSite">'+nom+'</div></a>');
		$(this).parent().hide();
	});
}