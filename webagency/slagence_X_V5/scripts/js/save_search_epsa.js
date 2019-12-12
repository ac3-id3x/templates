var urlserver = "http://epsa.svc.groupe-seloger.com";
var urlSaveSearch = urlserver + "/MesRecherches.svc/SauvegardeRecherche/";
var urlGetUserInfo = urlserver + "/SecurityAccountEdition.svc/GetInfos/";
var urlSaveAnnonce = urlserver + "/MesAnnonces.svc/SauvegardeAnnonce/";
var urlGetResearch = urlserver + "/MesRecherches.svc/GetUserRecherche/";
var urlGetAnnonces = urlserver + "/MesAnnonces.svc/GetUserAnnonce/";
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
//RECUP JETON
var $cookie = $.cookie('sessionKey');
if($cookie!="null" && $cookie!=undefined){
	var jsonCook = JSON.parse($cookie);
	var cutJson = jsonCook.slice(1, -1);
	var jeton = encodeURIComponent(cutJson);
	//CHECK NOMBRE D'ANNONCE ET IF SELECTED
	var checkAnnonces = function(){
		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "GET",
			url:urlGetAnnonces+"?jeton="+jeton,
			data : "",
			dataType:'json',
			success: function(data) {
				var nbAnnEPSA = data.length;
				$('.bouton-selection-annonces').html('<strong>'+nbAnnEPSA+' annonces</strong>');
				if(nbAnnEPSA > 0){
					for(i=0 ; i < nbAnnEPSA ; i++){
						var urlAnnonce=data[i].Url.split('/');
						var nbSplit = (urlAnnonce.length)-1;
						var endUrlAnnonce=urlAnnonce[nbSplit].split('.');
						var idAnnonce=endUrlAnnonce[0];
						var ann = '#annonce'+idAnnonce;
						$(ann).find('.plus').addClass('display-none');
						$(ann).find('.checkmark').removeClass('display-none').children('i').css('color','#51a351');
						$('.bouton-ajouter-selection-detail-espace-perso').children('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
					}
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		console.log(errorThrown);
			}
		});
	};
	var ifLog = function(){
		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: "GET",
			url:urlGetUserInfo,
			data : "Jeton="+jeton,
			dataType:'json',
			success: function(data) {
				$('.loged').addClass('display-show');
				$('.loged-detail').removeClass('display-none');
				$('.loged-detail').addClass('display-inline');
				$('.user-name').html(data.Prenom + ' ' + data.Nom)
				$('.block-bouton-selection-annonces-epsa').addClass('display-show');
				$('.not-log').hide();
				$('.not-log-detail').addClass('display-none');
				$('.block-bouton-selection-annonces').hide();
				//SI OPTIN CACHE LE CHECKBOX OPTIN
				if(data.IsOptin === true){
					$('.check-optin').addClass('display-none');
				}else{
					$('.check-optin').removeClass('display-none');
				}
	 	 	},
	 	 	error : function (jqXHR, textStatus, errorThrown) {
	 	 		//console.log(errorThrown);
			}
		});
	}
}
	var logOut = function(){
		$.removeCookie('sessionKey');
		window.location.replace("http://" + url + "/espace,perso.htm#/login");
	}

$(document).ready(function() { 
	$.support.cors = true;
		$('.container').on('click','.btn-logout-epsa', function(){
			if($.cookie('sessionKey')!="null" && $.cookie('sessionKey')!=undefined){
			 logOut();
			}
		});
		//LOGOUT
		
		//VERIF SI LOGER OU NON
		if($cookie!="null" && $cookie!=undefined){
			ifLog();
		}
		//CHECK NOMBRE DE RECHERCHE
		if($.cookie('sessionKey')!="null" && $.cookie('sessionKey')!=undefined){
			$.ajax({
				contentType: "application/json; charset=utf-8",
				type: "GET",
				url:urlGetResearch+"?jeton="+jeton,
				data : "",
				dataType:'json',
				success: function(data) {
					var rechNbr = data.length+1;
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
		 	 		//console.log(errorThrown);
				}
			});
		}
		//CHECK NOMBRE D'ANNONCE ET IF SELECTED
		if($cookie!="null" && $cookie!=undefined){
			checkAnnonces();
		}
		//ENREGISTREMENT RECHERCHE ESPACE PERSO
		$('#recherche-moteur').on('click','.bouton-add-selection-espace',function(){
			var qry = window.location;
			var hashqry = qry.hash.split('#');
			if(hashqry != ""){
				var qrySearch = hashqry[1];
				var cutFullQry = qry.href.split('?');
				var startQry = cutFullQry[0];
				$('.url-epsa').val(startQry+'?'+qrySearch);
			}
			if($("#hiddenIsOptin:checked")){
			  $('#hiddenIsOptin').attr('name','');
			  $('#hiddenIsOptin').disabled = true;
			}
			var frmSaveSearch = $(".recherche-espace-perso").serializeObject();
			var frmDataModif = JSON.stringify(frmSaveSearch);
			$.ajax({
				contentType: "application/json; charset=utf-8",
				type: "POST",
				url: urlSaveSearch+"?jeton="+jeton,
				data : frmDataModif,
				dataType:'json',
				beforeSend: function() {
					$('.message-save-epsa-name-empty').removeClass('display-show');
					$('.message-save-epsa-name').removeClass('display-show');
					$('.message-save-epsa-alerte').removeClass('display-show');
					$('.message-save-epsa-success').removeClass('display-show');
					$('.bouton-add-selection-espace').addClass('disabled');
				},
				success: function(responseData ,textStatus, jqXHR) {
					$('.message-save-epsa-success').addClass('display-show');
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
		 	 		$('.bouton-add-selection-espace').removeClass('disabled');
		 	 		if(jqXHR.status===436){
		 	 			$('.message-save-epsa-name-empty').addClass('display-show');
		 	 		}
		 	 		if(jqXHR.status===437){
		 	 			$('.message-save-epsa-name').addClass('display-show');
		 	 		}
		 	 		if(jqXHR.status===438){
		 	 			$('.message-save-epsa-alerte').addClass('display-show');
		 	 		}
				},
				complete: function() {
					$('#hiddenIsOptin').attr('name','IsOptin');
				}
			});
		});
		//ENREGISTREMENT ANNONCE ESPACE PERSO RECHERCHE
		$('#recherche-listing').on('click','.bouton-annonce-espace-perso',function() {
			var idannonce = $(this).closest(".bouton-annonce-espace-perso").attr('data-idannonce');
			var $this = $(this);
			var defaultHtml=$this.html();
			$.ajax({
				contentType: "application/json; charset=utf-8",
				type: "get",
				url: urlSaveAnnonce,
				data: "jeton="+jeton+"&idAnnonce="+idannonce,
				dataType:'json',
				beforeSend: function() {
					
					$this.html('<img src="/z/webagency/slagence_X_V5/images/carto/ajax-loader-small.gif" alt="loader" />');		
				},
				success: function(responseData ,textStatus, jqXHR) {
					if (responseData == true){
						$this.html(defaultHtml);
						var ann = '#annonce'+idannonce;
						$(ann).find('.plus').addClass('display-none');
						$(ann).find('.checkmark').removeClass('display-none').children('i').css('color','#51a351');
					}else{
						$this.addClass('disabled');
						$this.html("déjà sauvegardé");
					}
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
		 	 		$this.html("Erreur");
				},
				complete: function() {
				}
			});
		});
		//ENREGISTREMENT ANNONCE ESPACE PERSO DETAIL
		$('.detail-annonce').on('click','.bouton-ajouter-selection-detail-espace-perso',function() {
			var idannonce = $(this).attr('data-idannonce');
			var $this = $(this);
			$.ajax({
				contentType: "application/json; charset=utf-8",
				type: "get",
				url: urlSaveAnnonce,
				data: "jeton="+jeton+"&idAnnonce="+idannonce,
				dataType:'json',
				beforeSend: function() {
					//$this.html("wait !");
				},
				success: function(responseData ,textStatus, jqXHR) {
					if (responseData == true){
						$this.find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
					}else{
						$this.addClass('disabled');
						$this.html("déjà sauvegardé");
					}
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
		 	 		$this.html("Erreur");
				},
				complete: function() {
				}
			});
		});
});
