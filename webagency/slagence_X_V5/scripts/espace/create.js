var urlWscreate = urlserver + "/SecurityAccountManagement.svc/CreateAccount/";
var urlWslogin = urlserver + "/SecurityAuthentication.svc/Login/";
var urlWspassforgot= urlserver + "/SecurityAccountManagement.svc/ForggotenPassword/";
//VALID EMAIL
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
$(document).ready(function(){
//CREATE ACOUNT
	$('.bouton-create-account').on('click',function(){
		var formcontent = $('.form-creer').children('form').serializeObject();
		frmData = JSON.stringify(formcontent);
		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "POST",
			url: urlWscreate,
			data : frmData,
			dataType:'json',
			beforeSend: function() {
				$('.message-erreur-alerte').html('');
			},
			success: function(responseData ,textStatus, jqXHR) {
				if(responseData == true){
					$(".form-creer").addClass('display-none');
					$(".account-created").addClass('display-show');
				}				
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		//console.log(errorThrown);
			},
			complete: function() {
			}
		});
	});
//LOGIN
	$('.bouton-login-account').on('click',function(){
		var formlogincontent = $('.form-login').serializeObject();
		frmloginData = JSON.stringify(formlogincontent);
		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "POST",
			url: urlWslogin,
			data : frmloginData,
			dataType:'json',
			beforeSend: function() {
			},
			success: function(responseData ,textStatus, jqXHR) {
				var tmpJeton= responseData;
				$.cookie("jqstoken", tmpJeton);
				window.location = "/espace,compte.htm"
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		//console.log(errorThrown);
			},
			complete: function() {
			}
		});
	});
//PASS OUBLIE
	$('.bouton-mdp-account-oublie').on('click',function(){
		var formpassforgotcontent = $('.form-mdp-oublie').serializeObject();
		frmpassforgotData = JSON.stringify(formpassforgotcontent);
		var Email=$('.forgot-pass-email').val();
		if (regEmail.test(Email) == false){
			$('.email-non-valide').addClass('display-show');
		}else{
			$.ajax({
				contentType: "application/json; charset=utf-8",
				type: "POST",
				url: urlWspassforgot,
				data : frmpassforgotData,
				dataType:'json',
				beforeSend: function() {
				},
				success: function(responseData ,textStatus, jqXHR) {
					var tmpJeton= responseData;
					$.cookie("jqstoken", tmpJeton);
					//window.location = "/espace,compte.htm"
					$('.email-non-valide').removeClass('display-show');
					$('.email-send').addClass('display-show');
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
		 	 		//console.log(errorThrown);
				},
				complete: function() {
				}
			});
		}
	});
});
