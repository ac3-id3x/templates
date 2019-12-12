var urlserver = "http://dlws270312b.users.poliris.net/EPSA.Json";
var urlInfo = urlserver + "/SecurityAccountEdition.svc/GetInfos/";
$.fn.serializeObject = function () {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function () {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
function setSessionStatus() {
	// gestion du jeton d'authentification
	var jeton = encodeURI($.cookie('jqstoken'));
	frmData ='jeton='+jeton;
	if (jeton != undefined) {
		//ACCOUNT INFO
		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "GET",
			url:urlInfo,
			data : frmData,
			dataType:'json',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');	
			},
			success: function(responseData ,textStatus, jqXHR) {
				if(responseData != undefined){
					$('.log-nom').html(responseData.Prenom+' '+responseData.Nom);
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		//console.log(errorThrown);
	 	 		window.location = "/espace,creer.htm"
			},
			complete: function() {
			}
		});
	} else {
		window.location = "/espace,creer.htm"
	}	
}
$(document).ready(function(){
	$('.bouton-logout').on('click',function(){
		$.removeCookie('jqstoken');
		window.location = "espace,creer.htm"
	});
});