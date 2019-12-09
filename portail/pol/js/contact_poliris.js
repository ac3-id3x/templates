	
	$j(document).ready(function() {
		$j('.hide').hide();
		$j('#1').click(function() {
			$j('.hide').show();
		});
		$j('#0').click(function() {
			$j('.hide').hide();
		
		});
		$j('.autre').click(function() {
			$j('.preciseAutre').show();
		});
	});