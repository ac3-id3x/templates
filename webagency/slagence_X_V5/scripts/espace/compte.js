$(document).ready(function(){
	setSessionStatus();
	var jeton = encodeURI($.cookie('jqstoken'));
	frmData ='jeton='+jeton;
//ACCOUNT INFO
	var urlInfo = urlserver + "/SecurityAccountEdition.svc/GetInfos/";
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
				$('.compte-nom').html(responseData.Nom);
				$('.compte-prenom').html(responseData.Prenom);
				$('.compte-email').html(responseData.Email);
				$('.compte-ville').html(responseData.Ville);
				$('.compte-adresse').html(responseData.Adresse);
				$('.compte-cp').html(responseData.ZipCode);
				$('.compte-telephone').html(responseData.Telephone);
				$('.compte-mobile').html(responseData.Mobile);
				if (responseData.IsOptin!=true){
					$('.compte-optin').addClass('display-none');
				}
			}
 	 	},
 	 	error : function (jqXHR, textStatus, errorThrown) {
 	 		//console.log(errorThrown);
		},
		complete: function() {
		}
	});	
});		