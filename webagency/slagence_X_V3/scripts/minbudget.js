$j(document).ready(function() {
	$j("#MiniSelectBudgetVente").change(function(){
			if($j(this).val()== $j(this).children().last().val()){
				$j(this).attr('name','pxmin');
			}else{
				$j(this).attr('name','pxbtw');
			}
	});
	});