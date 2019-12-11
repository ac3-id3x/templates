$j(document).ready(function() {
	$j('#centreContentGuepard').css('cursor','pointer');
	$j('#centreContentGuepard').click(function() {
		$j('.sousMenu').find('ul').slideUp(200);
	});
});