var urlserver = "http://dlws270312b.users.poliris.net/EPSA.Json",urlWsvalidate = urlserver + "/SecurityAccountManagement.svc/ValidateAccount/";
var frmData = '{"IdTmpAccount":"'+IdTmpAccount +'","IdTypePublication":"'+IdTypePublication+'"}';
$(document).ready(function(){
	$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "POST",
			url: urlWsvalidate,
			data : frmData,
			dataType:'json',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');	
			},
			success: function(responseData ,textStatus, jqXHR) {
				if(responseData == true){
					$('.show-valid').addClass('display-show');
				}else{
					$('.show-already-valid').addClass('display-show');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		//console.log(errorThrown);
			},
			complete: function() {
			}
		});
});