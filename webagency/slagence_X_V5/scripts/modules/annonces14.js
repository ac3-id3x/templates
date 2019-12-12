$(document).ready(function(){
  $('.bouton-module-14').on('click', function(){
			i = $(this).data('rel');
			$(this).closest(".module14").find(".tab-module14").hide();			
			$(this).closest(".module14").find(".tab-module14-"+i).show();						
			$(this).parent().find('.actif-tab').addClass('inactif-tab').removeClass('actif-tab');
			$(this).removeClass('inactif-tab').addClass('actif-tab');
  });
  
  
  $('.module14-annonces-ligne').hover(
    function() {
        var idLine = $(this).attr('data-ligne'),
        el = $(this).parent().parent().parent().children('.span4').children('a').eq(idLine);
        // reset
        $('.module14-annonces').find('.span4').find('.picture-responsive').addClass('display-none');
        el.children('.picture-responsive').removeClass('display-none');
    },
    function() {
    }
  );
});