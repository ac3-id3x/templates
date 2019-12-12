$(document).ready(function() {
		$(".image_pud_annonce_x3").hover(
			function () {
				$(this).parent().parent().find('.popInfos').show();
			}, 
			function () {
				$(this).parent().parent().find('.popInfos').hide();
				}
			);
});