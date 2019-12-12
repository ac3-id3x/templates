$(document).ready(function(){
		$('.lanceur').click(function(){ 
				var effect = $(this).attr('name');
				var thisclass = $('.elmnt').children('div').attr('class');
				if (thisclass=='pix_relativize'){
					$('#txt').attr('style','display:none;height:566px;width:848px;background:#fff;');
					$('.elmnt').hide();
					$('.elmnt').attr('style','display:none;');
					$('#txt').css('height','566px').css('width','848px').css('background','#fff');
					$('canvas').remove();
					$('#pix_pag').remove();
					$('.pix_diapo').removeClass('diapostarted');
					$('.pix_diapo').removeClass('diaposliding');
					$('.diapoappended').remove();
					$('.elmnt').removeClass('diapocurrent');
					$('.diapoeased').remove();
					$('.elmnt').children('.pix_relativize').children().unwrap();
					$('.pix_relativize').remove();
					
				}
				$('.pix_diapo').diapo({fx:effect,time:1000, slideOn:'next',loader:'none',navigation:false,commands:false,pagination:false,thumbs:false,hover:false,pauseOnClick:false});		
		});
});

