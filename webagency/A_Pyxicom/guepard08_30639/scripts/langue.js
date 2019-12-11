$j(document).ready(function() {
	$j('#menuLangueGuepard .prefixeLangue').each(function() {
		$t = $j(this);
		$t.css('cursor','pointer');
		$t.mouseover(function() {
			$j(this).parent().children('.traductionLangue').show();
		});
		$t.mouseout(function() {
			$j(this).parent().children('.traductionLangue').hide();
		});
	});
});