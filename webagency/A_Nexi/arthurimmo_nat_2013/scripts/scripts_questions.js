$(document).ready(function(){
	$('.question').on('click',function(){
		var reponse = $(this).parent('.bloc-question').children('.reponse');
		reponse.toggleClass('reponse-show');
	});
	$('.btn-show-all-question').on('click',function(){
		$('.bloc-hidden-question').toggleClass('bloc-show-question');
	});
	var question = $('.bloc-question');
	var nbquestion = $(question).length;
	for (q=0;q<nbquestion;q++){
		var nb = q+1;
		$(question[q]).find('.nb').html(nb);
	}
});