function moduleHome(divid,divcontent,langue) {
	$('#'+divid).each(function() {
		var annonce_start = $(this).find('.liOn').attr('id');
		$(this).find('li').each(function() {
			$(this).css('cursor','pointer');
			$(this).click(function () {
				// GET ANNONCE RUN
				var annonce = $(this).parent().find('.liOn').attr('id');
				if($(this).attr('id') != annonce) {
					// ADD NEW & REMOVE EX
					$(this).addClass('liOn');
					$('#'+annonce).removeClass('liOn');
					// GO SEARCH INFOS 
					if($(this).attr('id').length > 0) {
						loadInfos($(this).attr('id'),divcontent,langue);
					}
				}
			});
		});
	if(typeof(annonce_start) != 'undefined') {
		loadInfos(annonce_start,divcontent,langue);
	}
	});
}
function loadInfos(id,divcontent,langue) {
	var annonce = id.split('bienId');
	annonce = annonce[1];
	var xhr = $.ajax({
		type: 'GET',
		data: 'idannonce='+annonce,
		dataType: 'html',
		url: '/module,reykjavik,home_recherche.htm?lang='+langue,
		beforeSend: function() {
			$('#'+divcontent).addClass('waitModule');
			$('#'+divcontent).html('');
		},
		success: function(data) {
			$('#'+divcontent).html(data);
			$('#'+divcontent).removeClass('waitModule');
		},
		error: function(xhr,statusText) {
			//console.log(xhr.status);
		},
		complete: function(xhr,statusText) {
			//console.log(xhr.status);
		}
	});
}

// ROTATE
$(document).ready(function() {
	var moduleDiv = 	$('.rotateReykjavik');
	if(moduleDiv.length >0) {
		moduleDiv.each(function() {
			var decalage = $(this).children('.masqueModuleReykjavik').children('ul').children('li').outerHeight(true) * 4;
			var maxSize = $(this).children('.masqueModuleReykjavik').children('ul').children('li').outerHeight(true) * $(this).children('.masqueModuleReykjavik').children('ul').children('li').length;
			$('#blocModuleRight').each(function() {
				$(this).children('.masqueModuleReykjavik').height(decalage+'px');
				$(this).children('.masqueModuleReykjavik').css('overflow','hidden');
			});
			$(this).hover(
				function() {
					objModule.callDelayed(0);
				},
				function() {
					objModule.callDelayed(1);
				}
			);	
			var timerInterval;
			var objModule = {	
				idDiv : $(this).attr('class'),
				decalage: decalage,
				maxSize:maxSize,
				callSlide:startSlide,
				callDelayed:function(num) {
					if(num == 1) {
						timerInterval = setInterval(function() { objModule.callSlide(); }, 5000);
					} else {
						clearInterval(timerInterval);
					}
				}
			}
			objModule.callDelayed(1);
		});
	}
	/*moduleDiv.each(function() {
		// STOP EFFECT IF HOVER OR RESTART IF NOT
		$(this).hover(
			function() {
				objModule.callDelayed(0);
			},
			function() {
				objModule.callDelayed(1);
			}
		);	
		var timerInterval;
		var objModule = {	
			idDiv : $(this).attr('class'),
			actuel: $('.rotateReykjavik').find('.liOn'),
			nextElement: $('.rotateReykjavik').find('.liOn').next(),
			callSlide:startSlide,
			callDelayed:function(num) {
				if(num == 1) {
					timerInterval = setInterval(function() { objModule.callSlide(); }, 1000);
				} else {
						clearInterval(timerInterval);
				}
			}
		}
		objModule.callDelayed(1);
	});*/
});
var startSlide = function() {
	var $container = $("."+this.idDiv).children('.masqueModuleReykjavik').children('ul');
	var $start = parseInt($container.css('marginTop'));
	var $calcul = $start - this.decalage;
	//console.log($calcul);
	//console.log(this.maxSize);
	if($calcul > (-1 * this.maxSize)) {
			$container.animate({marginTop:$calcul+'px'},500);
	} else {
			$container.animate({marginTop:0},500);
	}
};