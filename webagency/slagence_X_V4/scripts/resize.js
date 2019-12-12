/* FUNCTION GLOBAL RESIZE */
function resize() {
	var sizeModule = $('#Centre_Ctn').outerHeight(true);
	var calculSizeCtn = sizeModule;
	var docHeight = $(window).height();
	if(calculSizeCtn > docHeight) {
		$('#Header').height(calculSizeCtn + 20);
	} else {
		$('#Header').height(docHeight);
	}
	var picture = $('.detailAnnonce');
	if(picture.css('display') == 'block') {
		var calculHeader = $('#Header').outerWidth(true);
		var docWidth = $(window).width();
		var calculDetail = parseInt($('.ctn_detail img').attr('width')) + 14;
		var calculRestante = docWidth - (calculHeader + calculDetail) - 20;
		if(calculRestante < 200) {
			picture.children('.listeDetail').children('p').width(calculDetail);
		} else {
			picture.children('.listeDetail').children('p').width(calculRestante);
		}
	}
}