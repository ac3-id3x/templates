$(document).ready(function() {
	$('body').click(function() {
		$('#suggestionsBox').hide();
	});
	$('.blocSearch').click(function() {
		$('#cpSearch').focus();
		$('#cpSearch').val('');
	});
	$('#cpSearch').keyup(function() {
		// FUNCTION SEARCH
		if($(this).val().length > 0) {
			searchContent($(this).attr("id"),'suggestionsBox');
		}
	});
	$('#Mini_Bouton').css('cursor','pointer');
	$('#Mini_Bouton').click(function() {
		//if($('#cp').val() != '' || $('#div').val() != '' || $('#ci').val() != '' || $('#idq').val() != '') {
		$(this).css('cursor','auto');
		$(this).attr('disabled',true);
		$('#Mini_Moteur').submit();
	});
});
function searchContent(divid,container) {
	var value_div = $('#'+divid).val();
	var xhr = $.ajax({
		type: 'GET',
		async: 'true',
		cache: 'true',
		timeout : '1500',
		data: 'cp='+value_div,
		dataType: 'html',
		url: '/moteur,suggest,recherche.htm',
		beforeSend: function() {
			$('#'+divid).parent().addClass('wait');
		},
		success: function(data) {
			$('#'+divid).parent().removeClass('wait');
			$('#'+container).show();
			$('#'+container).html(data);
		},
		error: function(xhr,statusText) {
			$('#'+divid).parent().addClass('wait');
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
		var length_value_txt = value_txt.length;
		// REGION
		if(length_value_txt == 3) {
			if($('#div').val() == ''){
			$('#div').val(value_txt[2]);
			} else {
			$('#div').val($('#div').val()+','+value_txt[2]);
			}
		} else {
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
		}
	});
}
function changeValue(event,divid) {
	var goTarget = $(event.target);
	if(goTarget.length != '') {
		$("#"+divid).attr('disabled', false);
		$("#"+divid).css('cursor','pointer');
		$("#"+divid).css({ opacity: 1 });
		} else {
		$("#"+divid).attr('disabled', true);
		$("#"+divid).css('cursor','auto');
		$("#"+divid).css({ opacity: 0.40 });
	}
 	// SHOW/HIDE DIV INFOS
 	if(goTarget.length != '') {
 		$('#Mini_texte').hide();
 	} else {
 		$('#Mini_texte').show();
 	}
};