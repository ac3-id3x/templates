$(document).ready(function(){
  $('.bouton-module-extra').on('click', function(){
			rel = $(this).attr('data-rel');
			norel = $(this).attr('data-no-rel');
			// ADD / REMOVE
			$(this).parent().find('.actif-tab').addClass('inactif-tab').removeClass('actif-tab');
			$(this).removeClass('inactif-tab').addClass('actif-tab');
			// DISPLAY
			$('#'+rel).show();
			$('#'+norel).hide();
			// SWAP PICTURE
			$('#'+rel).find('.photo-extra12').find('.picture-responsive display-none').first().removeClass('display-none');
  });
  $('.extra-annonces-ligne').hover(
    function() {
        var idLine = $(this).attr('data-ligne'),
        el = $(this).parent().parent().parent().children('.span4').children('a').eq(idLine);
        // reset
        $('.extra-annonces').find('.span4').find('.picture-responsive').addClass('display-none');
        el.children('.picture-responsive').removeClass('display-none');
    },
    function() {
    }
  );
});