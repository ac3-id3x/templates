/* SCRIPT MINI MOTEUR */
/* IMAGE A DEMUTUALISER */
var ajax_img = '<div class="ajaxLoader"><img src="/z/webagency/slagence_X_V4/images/moteur/loader.gif" /></div>';
/* Function Ajax */
function ajaxGet(value_select,lng,divid,url_get) {
	var split_elem = value_select.split('|');
	var length_elem = split_elem.length;
	var dataSend = '';
	for(i = 0; i < length_elem; i ++) {
			var value_elem = $("#"+split_elem[i]).val();
			var name_elem = $("#"+split_elem[i]).attr("name");
			dataSend += dataSend+name_elem+'='+value_elem+'&';
	}
	dataSend += 'lang='+lng;
	if($('#'+split_elem[0]).val() != '') {
		$("#"+divid).show();
		$.ajax({
			type: "GET",
			data: dataSend,
			dataType: "html",
			url: '/facebook,mini_moteur_facebook,incl_'+url_get+'.htm',
			beforeSend: function() {
				$("#"+divid).show();
				$("#"+divid).html(ajax_img);
			},
			success: function(data) {
				$("#"+divid).show();
				$("#"+divid).html(data);
	 	 	},
	 	 	error: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	},
	 	 	complete: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	}
		});
	}
}
/* Script budget vente/location */
function testBudget(vente,loc) {
	if($("#idtt").val() == 1) {
		$("#"+vente).hide();
		$("#"+loc).show();
	} else {
		$("#"+vente).show();
		$("#"+loc).hide();
	}
}

/* Content Empty */
function contentEmpty(divid,node) {
	var split_elem = node.split('|');
	var length_elem = split_elem.length;
	for(i = 0; i < length_elem; i ++) {
		$("#"+split_elem[i]).hide();
	}
}
/* Loading Search */
function loadingSearch(divid,txt) {
	$("#"+divid).click(function () {
		$(this).css('cursor','auto');
		$(this).attr('disabled',true);
		$(this).val(txt);
		/* VERIF CP/CI */
		if(!$("#cpVilles").val() == '') {
			$("#cpDep").val('');
			$("#cpDep").removeAttr("name");
			$("#cpRegion").val('');
			$("#cpRegion").removeAttr("name");
		}
		if(!$("#cpDep").val() == '') {
			$("#cpVilles").val('');
			$("#cpVilles").removeAttr("name");
			$("#cpRegion").val('');
			$("#cpRegion").removeAttr("name");
		}
		if(!$("#cpRegion").val() == '') {
			$("#cpVilles").val('');
			$("#cpVilles").removeAttr("name");
			$("#cpDep").val('');
			$("#cpDep").removeAttr("name");
		}
		$("#Mini_Moteur").submit();
	});
}
$(document).ready(function() {
	$("#MiniSelectBudgetVente").change(function(){
			if($(this).val()== $(this).children().last().val()){
				$(this).attr('name','pxmin');
			}else{
				$(this).attr('name','pxbtw');
			}
	});
});