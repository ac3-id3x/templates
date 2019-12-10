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
			url: '/moteur,mini,incl_'+url_get+'.htm',
			beforeSend: function() {
				$("#"+divid).show();
				$("#"+divid).html(ajax_img);
			},
			success: function(data) {
				$("#"+divid).show();
				$("#"+divid).html(data);
	 	 		$("#idtypebien").chosen();
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
	if($("#idtt").val() == 1 || $("#idtt").val() == 4) {
		$("#"+vente).hide();
		$("#"+loc).show();
	} else {
		$("#"+vente).show();
		$("#"+loc).hide();
	}
}
/* Script budget vente/location */
function testBudgetcheck(vente,loc) {
	if($('[id*="idtt-radio"]:checked').val() == 1) {
		$("#"+vente).hide();
		$("#"+loc).show();
		$("#idtt").val('1');
	} else {
		$("#"+vente).show();
		$("#"+loc).hide();
		$("#idtt").val('2');
	}
}
/* Choix URL */
function ChoixURL(type_url) {
	var $div = $("#Mini_Moteur");
	if($div.length > 0) {
		if(type_url == 'carte') {
			$("#Mini_Moteur").attr("action","/recherche,carte.htm");
		} else {
			$("#Mini_Moteur").attr("action","/moteur,mini,prevalidation.htm");
		}
	} else {
		if(type_url == 'carte') {
			$("#Moteur_Suggest").attr("action","/recherche,carte.htm");
		} else {
			$("#Moteur_Suggest").attr("action","/moteur,mini,prevalidation.htm");
		}
	}
	
}
/* Gestion Bouton Envoi */
function boutonEnvoi(divid) {
	$('#Mini_texte').show();
	//$("#"+divid).css("opacity","0.4");
	//$("#"+divid).css("cursor","pointer");
	//$("#"+divid).attr("disabled",true);
}
function changeValue(event,divid) {
	var goTarget = $(event.target);
	if(goTarget.length != '') {
		//$("#"+divid).attr('disabled', false);
		$("#"+divid).css('cursor','pointer');
		$("#"+divid).css({ opacity: 1 });
		} else {
		//$("#"+divid).attr('disabled', true);
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
		//$(this).attr('disabled',true);
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
	
	$('#Mini_Moteur').submit(function() {
	  if($("#cpSearch").val()=="$$LG:MINIVILLES pcase$$"){
	  	$("#cpSearch").val("");
	  }
	});
});