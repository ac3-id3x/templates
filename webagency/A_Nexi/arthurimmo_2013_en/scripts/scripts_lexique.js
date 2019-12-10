function showhideLetter(oneletter,allletter){
	$('.letter').addClass('hide-letter');
		$('.'+oneletter).removeClass('hide-letter');
		document.location="#"+allletter;
}
$(document).ready(function(){
	var hashqry = window.location.hash.split('#');
	if(hashqry[1] != undefined){
		var blockletter = hashqry[1];
		if (blockletter.length > 1){
			var oneletter = blockletter.charAt(0);
		}else{
			var oneletter = blockletter;
		}
		var allletter = blockletter;
	}else{
		var allletter = 'a';
		var oneletter = 'a';
	}
	showhideLetter(oneletter,allletter);
	$('.lettre-link').on('click',function(){
		var oneletter = $(this).attr('data-letter');
		var allletter = oneletter;
		showhideLetter(oneletter,allletter);
	});
	$('.normal-link').on('click',function(){
		var allletter = $(this).html();
		var oneletter = allletter.charAt(0);
		showhideLetter(oneletter,allletter);
	});
});