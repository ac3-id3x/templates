$(document).ready(function() {
	$('.wp-blog-full').html('');
	$.ajax({
		type: "GET",
		dataType:'html',
		cache: false,
		data : '',
		url: '/pub,incl_pub_blog_wordpress_full_ajax.htm',
		beforeSend:function(){
			$('.wp-blog-full').html('chargement');
		},
		success: function(data) {
			$('.wp-blog-full').html(data);
		 },
		 error : function (jqXHR, textStatus, errorThrown) {
			//console.log(jqXHR, textStatus, errorThrown);
		 },
		complete: function(xhr,statusText) {
			$('.rotate-blog-wordpress').cycle({ 
				fx:         'fade', 
				timeout:     10000, 
				pager:      '#nav', 
				pagerEvent: 'click.cycle', 
				fastOnEvent: true,
				prev: '.prev-blog-wordpress',
				next: '.next-blog-wordpress'
			});
		}
	});
});