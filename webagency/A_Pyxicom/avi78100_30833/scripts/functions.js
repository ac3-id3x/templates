$j(document).ready(function(){
						   
	$j(".bt1").mouseenter(function(){
		$j(".bt1").addClass('active1');
		$j(".bt2").removeClass('active2');
	});
	
	$j(".btn1").mouseleave(function(){
		$j(".bt1").removeClass('active2');
	});
  
  
  $j(".bt2").mouseenter(function(){
		$j(".bt2").addClass('active2');
		$j(".bt1").removeClass('active1');
	});
	
	$j(".btn2").mouseleave(function(){
		$j(".bt2").removeClass('active2');
	});
	

	
  });
		
  
