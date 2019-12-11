function searchContent(divid,container) {
	var value_div = $('#'+divid).val();
	var xhr = $.ajax({
		type: 'GET',
		async: 'true',
		cache: 'true',
		timeout : '1500',
		data: 'cp='+value_div,
		dataType: 'html',
		url: '/rechercheCP.htm',
		beforeSend: function() {
			$('#'+divid).parent().addClass('wait');
		},
		success: function(data) {
			$('#'+divid).parent().removeClass('wait');
			$('#'+container).show();
			$('#'+container).html(data);
 	 	},
 	 	error: function(xhr,statusText) {
 	 		$('#'+divid).parent().parent().addClass('wait');
 	 		//console.log(xhr.status);
 	 	},
 	 	complete: function(xhr,statusText) {
 	 		//console.log(xhr.status);
 	 	}
	});
}
function buildSearch() {
	$('#cp').val('');
	$('#div').val('');
	$('#ci').val('');
	$('#idq').val('');
	$('.selectLi').each(function() {
		var value_txt = $(this).attr('id').split('|');
		var num_value = Math.round(value_txt.length/2);
		// START 1 TO SKIP FIRST LINE
		for(i = 1; i < num_value; i++) {
			if($('#'+value_txt[i * 2]).val() == '' ){
				$('#'+value_txt[i * 2]).val(value_txt[i * 2 + 1]);
				$('#'+value_txt[i * 2]).serialize();
			} else {
				$('#'+value_txt[i * 2]).val($('#'+value_txt[i * 2]).val()+','+value_txt[i * 2 + 1]);
				$('#'+value_txt[i * 2]).serialize();
			}
		}
	});
}