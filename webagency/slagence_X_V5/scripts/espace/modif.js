var urlInfo = urlserver + "/SecurityAccountEdition.svc/GetInfos/";
var urlModif = urlserver + "/SecurityAccountEdition.svc/EditAccount/";
var urlDelete = urlserver + "/SecurityAccountEdition.svc/DeleteAccount/";
var urlWslogin = urlserver + "/SecurityAuthentication.svc/Login/";
var urlWsoptin = urlserver + "/SecurityAccountEdition.svc/GetOptin/";
var urlWssetoptin = urlserver + "/SecurityAccountEdition.svc/SetOptin/";
//FUNCTION CHANGE INFO
function changeInfo(jeton){
	$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "POST",
			url: urlModif+"/?jeton="+jeton,
			dataType:'json',
			data : frmDataModif,
			success: function(responseData ,textStatus, jqXHR) {
				if(responseData != ""){
					window.location = "/espace,modifier.htm?mod=ok"
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		console.log(errorThrown);
			},
			complete: function() {
			}
		});
}
function getInfo(DataJeton){
	$.ajax({
		contentType: "application/json; charset=utf-8",
		type: "GET",
		url:urlInfo,
		data : DataJeton,
		dataType:'json',
		success: function(responseData ,textStatus, jqXHR) {
			if(responseData != undefined){
				$('.modif-nom').val(responseData.Nom);
				$('.modif-prenom').val(responseData.Prenom);
				$('.modif-email').val(responseData.Email);
				$('.modif-adresse').val(responseData.Adresse);
				$('.modif-ville').val(responseData.Ville);
				$('.modif-cp').val(responseData.ZipCode);
				$('.modif-tel').val(responseData.Telephone);
				$('.modif-mobile').val(responseData.Mobile);
				if (responseData.IsOptin=="true"){
					$('.modif-optin').attr('checked','checked');
				}
			}
 	 	},
 	 	error : function (jqXHR, textStatus, errorThrown) {
 	 		//console.log(errorThrown);
		},
		complete: function() {
		}
	});
}
function getOptin(DataJeton){
	$.ajax({
		contentType: "application/json; charset=utf-8",
		type: "GET",
		url:urlWsoptin,
		data : DataJeton,
		dataType:'json',
		success: function(responseData ,textStatus, jqXHR) {
			if(responseData == true){
				$('.modif-optin').attr('checked','checked');
			}
 	 	},
 	 	error : function (jqXHR, textStatus, errorThrown) {
 	 		//console.log(errorThrown);
		},
		complete: function() {
		}
	});
}
function setOptin(DataJeton){
	$.ajax({
		contentType: "application/json; charset=utf-8",
		type: "GET",
		url:urlWssetoptin,
		data : DataJeton,
		dataType:'json',
		success: function(responseData ,textStatus, jqXHR) {
			//if(responseData == true){
			//	$('.modif-optin').attr('checked','checked');
			//}
 	 	},
 	 	error : function (jqXHR, textStatus, errorThrown) {
 	 		//console.log(errorThrown);
		},
		complete: function() {
		}
	});
}
$(document).ready(function(){
	setSessionStatus();
	var jeton = encodeURI($.cookie('jqstoken'));
	DataJeton ='jeton='+jeton;
	$('.val-jeton').val(jeton);
	getInfo(DataJeton);
	getOptin(DataJeton);
//ACCOUNT INFO
		
//MODIF ACCOUNT INFO
	$('.modif-optin').on('change',function(){
		setOptin(DataJeton);
	})
	$('.bouton-modif-account').on('click',function(){	
		var frmModifie= $(".form-modif").serializeObject();
		frmDataModif = JSON.stringify(frmModifie);
		var idpub = $('.hidden-idpublication').val();
		var Email = $('.modif-email').val();
		var oldPass = $('.old-pass').val();
		if($('.new-pass').val() != ""){
			$(".new-pass-confim-error").removeClass('display-show');
			$.ajax({
				contentType: "application/json; charset=utf-8",
				type: "POST",
				url: urlWslogin,
				data : '{"IdTypePublication":"'+idpub+'","Email":"'+Email+'","Password":"'+oldPass+'"}',
				dataType:'json',
				beforeSend: function() {
				},
				success: function(responseData ,textStatus, jqXHR) {
					if ($('.new-pass').val() != $('.confirm-pass').val()){
						$(".new-pass-confim-error").addClass('display-show');
					}else{
						var tmpJeton= responseData;
						$.cookie("jqstoken", tmpJeton);
						changeInfo(jeton);
					}
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
		 	 		//console.log(errorThrown);
		 	 		$(".login-pass-error").addClass('display-show');
				},
				complete: function() {
				}
			});
		}else{
			changeInfo(jeton);
		}	
	});
//DELETE ACCOUNT
	$('.bouton-delete-account').on('click',function(){
		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "GET",
			url: urlDelete,
			data : frmData,
			beforeSend: function() {
				$('.message-erreur-alerte').html('');	
			},
			success: function(responseData ,textStatus, jqXHR) {
				if(responseData == true){
					$(".deleted-account").addClass('display-show');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		//console.log(errorThrown);
			},
			complete: function() {
			}
		});
	});
});		