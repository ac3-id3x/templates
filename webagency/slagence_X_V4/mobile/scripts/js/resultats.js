/* LIENS DES PAGES*/
$( document ).delegate("#resultat", "pagebeforecreate", function (event) {
		$('.pages').children('a').attr('rel','external');
		$('.pages').children('a').attr('data-ajax','false');
		$('.pages').children('a').attr('data-role','button');
		$('.pages').children('a').attr('data-inline','true');
 });

 