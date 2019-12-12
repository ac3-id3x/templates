angular.module('espacePersoServices', ['ngCookies'])
	.service('UserInfo', ['$http', function($http) {
		function getUserInfo(jeton) {
			return $http({method: 'GET',url: urlGetinfo, params: {jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getUserInfo};
	}])
	.service('UserLogin', ['$http', function ($http) {
		function getUserLogin(frmdata) {
			return $http({method: 'POST', url: urlWslogin, data: frmdata, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getUserLogin};
	}])
	.service('UserMdpForgot', ['$http', function ($http) {
		function getUserMdpForgot(frmUserForget){
			return $http({method: 'POST', url: urlMdp, data: frmUserForget, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getUserMdpForgot};
	}])
	.service('UserCreate', ['$http', function ($http) {
		function getUserCreate(frmCreate) {
			return $http({method: 'POST', url: urlCreate, data: frmCreate, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getUserCreate};
	}])
	.service('UserValidate', ['$http', function ($http) {
		function getUserValidate(frmValidate) {
			return $http({method: 'POST', url: urlValidate, data: frmValidate, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getUserValidate};
	}])
	.service('UserModifie', ['$http', function ($http) {
		function getUserModifie(frmModifie,jeton) {
			return $http({method: 'POST', url: urlEditinfo, params:{jeton:jeton,'cacheDate': new Date().getTime()}, data: frmModifie, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getUserModifie};
	}])
	.service('UserDeleteAccount', ['$http', function ($http) {
		function userDeleteAccount(jeton) {
			return $http({method: 'GET', url: urlUserDeleteAccount, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':userDeleteAccount};
	}])
	.service('UserSetOptin', ['$http', function ($http) {
		function setUserSetOptin(jeton) {
			return $http({method: 'GET', url: urlSetOptin, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:setUserSetOptin};
	}])
	.service('GetResearch', ['$http', function ($http) {
		function getResearch(jeton) {
			return $http({method: 'GET', url: urlGetResearch, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getResearch};
	}])
	.service('DeleteAllResearch', ['$http', function ($http) {
		function deleteAllResearch(jeton) {
			return $http({method: 'GET', url: urlDeleteAllResearch, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAllResearch};
	}])
	.service('DeleteResearch', ['$http', function ($http) {
		function deleteResearch(jeton,idResearch) {
			return $http({method: 'GET', url: urlDeleteResearch, params:{jeton:jeton,IdRecherche:idResearch,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteResearch};
	}])
	.service('EditSearch', ['$http', function ($http) {
		return function EditSearch(jeton,idRecherche,nom) {
			return $http({method: 'POST', url: urlEditSearch, params:{jeton:jeton,'cacheDate': new Date().getTime()}, data:'{"IdRecherche":"'+idRecherche+'","Nom":"'+nom+'"}', headers: {'Content-Type': 'application/json'}});
		}
	}])
	.service('DeleteAlerte', ['$http', function ($http) {
		function deleteAlerte(jeton,idResearch) {
			return $http({method: 'GET', url: urlDeleteAlerte, params:{jeton:jeton,IdRecherche:idResearch,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAlerte};
	}])
	.service('AddAlerte', ['$http', function ($http) {
		function addAlerte(jeton,urlResearch,idRecherche) {
			return $http({method: 'GET', url: urlAddAlerte, params:{jeton:jeton,url:urlResearch,IdRecherche:idRecherche,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {set:addAlerte};
	}])
	.service('GetAllFriend', ['$http', function ($http) {
		function getFriend(jeton) {
			return $http({method: 'GET', url: urlGetAllFriends, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:getFriend};
	}])
	.service('AddFriend', ['$http', function ($http) {
		function addFriend(jeton,email) {
			return $http({method: 'GET', url: urlAddFriends, params:{jeton:jeton,email:email,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:addFriend};
	}])
	.service('DeleteAmi', ['$http', function ($http) {
		function deleteAmi(jeton,idAmi) {
			return $http({method: 'GET', url: urlDeleteAmi, params:{jeton:jeton,IdAmi:idAmi,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAmi};
	}])
	.service('DeleteAllFriends', ['$http', function ($http) {
		function deleteAllFriends(jeton) {
			return $http({method: 'GET', url: urlDeleteAllFriends, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAllFriends};
	}])
	.service('CountAlerte', ['$http', function ($http) {
		function countAlerte(jeton) {
			return $http({method: 'GET', url: urlCountAlerte, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:countAlerte};
	}])
	.service('DeleteAllAlerte', ['$http', function ($http) {
		function deleteAllAlerte(jeton) {
			return $http({method: 'GET', url: urlDeleteAllAlerte, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAllAlerte};
	}])
	.service('GetAnnonce', ['$http', function ($http) {
		function getAnnonce(jeton) {
			return $http({method: 'GET', url: urlGetAllAnnonces, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}}).then(function(response) {
				angular.forEach(response.data, function(item,i) {
					item.Prix = parseInt(item.Prix, 10) || item.Prix;
					item.Surface = parseInt(item.Surface, 10) || item.Surface;
					response.data[i]=item;
				});
				return response.data;
			});
		}
		return {get:getAnnonce};
	}])
	.service('DeleteAllAnnonce', ['$http', function ($http) {
		function deleteAllAnnonce(jeton) {
			return $http({method: 'GET', url: urlDeleteAllAnnonces, params:{jeton:jeton,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAllAnnonce};
	}])
	.service('EditAnnonce', ['$http', function ($http) {
		return function EditAnnonce(jeton,IdAnnonceEPSA,Commentaire) {
			return $http({method: 'POST', url: urlEditAnnonce, params:{jeton:jeton,'cacheDate': new Date().getTime()}, data:'{"IdAnnonceEPSA":"'+IdAnnonceEPSA+'","Commentaire":"'+Commentaire+'"}', headers: {'Content-Type': 'application/json'}});
		}
	}])
	.service('DeleteAnnonce', ['$http', function ($http) {
		function deleteAnnonce(jeton,idAnnonceEPSA){
			return $http({method: 'GET', url: urlDeleteAnnonce, params:{jeton:jeton,IdAnnonceEPSA:idAnnonceEPSA,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAnnonce};
	}])
	.service('SendFriend', ['$http', function ($http) {
		function sendFriend(jeton,AmisAnnonces) {
			return $http({method: 'POST', url: urlSendFriend, params:{jeton:jeton,'cacheDate': new Date().getTime()}, data:AmisAnnonces, headers: {'Content-Type': 'application/json'}});
		}
		return {send:sendFriend};
	}])
	.service('Contact', ['$http', function ($http) {
		function contact(jeton,contact) {
			return $http({method: 'POST', url: urlContact, params:{jeton:jeton,'cacheDate': new Date().getTime()},data:contact, headers: {'Content-Type': 'application/json'}});
		}
		return {send:contact};
	}])
	.service('GetAnnoncePanierLocal', ['$http', function ($http) {
		function getAnnoncePanierLocal() {
			return $http({method: 'GET', url:'/espace,json,get_local_selec_json.htm', headers: {'Content-Type': 'application/json'}});
		}
		return {get:getAnnoncePanierLocal};
	}])
	.service('DeleteAnnoncePanierLocal', ['$http', function ($http) {
		function deleteAnnoncePanierLocal() {
			return $http({method: 'GET', url:'/scripts,panier,selection_vider.htm', headers: {'Content-Type': 'application/json'}});
		}
		return {'delete':deleteAnnoncePanierLocal};
	}])
	.service('AddAnnEspace', ['$http', function ($http) {
		function addAnnEspace(jeton,idannonce) {
			return $http({method: 'GET', url:urlAddAnnEspace,params:{jeton:jeton,idAnnonce:idannonce,'cacheDate': new Date().getTime()}, headers: {'Content-Type': 'application/json'}});
		}
		return {get:addAnnEspace};
	}]);
