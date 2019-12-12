angular.module('espacePersoControllers', ['ngCookies', 'ngRoute', 'toaster', 'espacePersoServices'])
	.controller('appController', ['$scope', '$location', '$cookieStore', function($scope, $location, $cookieStore, UserInfo) {
		$scope.globalParams = globalParams;
		$scope.btnLogout = function() {
			$location.path('/login');
			$cookieStore.remove('sessionKey');
		};
		$scope.location = $location;
		$scope.$watch('location.url()', getTitle);
		function getTitle() {
			$scope.pageTitle = $location.url().substring(1);
		}
	}])
	.controller('EspacePersoLogin', ['$scope', '$http', '$location', '$modal', '$cookieStore', 'UserLogin', 'UserMdpForgot', 'toaster', 'UserInfo', function ($scope, $http, $location, $modal, $cookieStore, UserLogin, UserMdpForgot, toaster, UserInfo) {
		//VERIF SI LOGIN
		var jeton=angular.fromJson($cookieStore.get('sessionKey'));
		UserInfo.get(jeton).success(function(data,status) {
			$scope.userInfo = data;
		}).error(function() {
			$location.path('/login');
			$('.loged').removeClass('display-show');
			$('.not-log').addClass('display-show');
		});

		//LOGIN
		var thisurl = (document.URL).split('?');
		if(thisurl.length > 1) {
			var searchqry = thisurl[1].split('#');
			if (searchqry!=undefined){
				var qry = searchqry[0];
			} else {
				var qry = '';
			}
		}
		$scope.user = {IdTypePublication:$scope.globalParams.IdTypePublication};
		$scope.btnLogin = function() {
			$scope.showLayer = true;
			UserLogin.get(angular.toJson($scope.user)).success(function(data) {
				toaster.pop('success', 'Bienvenue');
				$cookieStore.remove('sessionKey');
				$cookieStore.put('sessionKey', data);
				if (qry!=undefined) {
					var IdTmpAccount = qry.indexOf('IdTmpAccount');
				} else {
					var IdTmpAccount = 0;
				}
				if (qry != '' && qry != undefined && IdTmpAccount != 0) {
					window.location.href = 'recherche,basic.htm?'+qry;
				}else{
					$location.path('/compte');
				}
				$scope.showLayer = false;
			})	.error(function(data, status) {
				$location.path('/login');
				toaster.pop('error', 'Une erreur est survenue', 'Verifiez votre email ou votre mot de passe');
				$scope.showLayer = false;
			});
		};

		//SHOW MDP OUBLIE
		$scope.btnShowForgottenPassword = function() {
			openForgottenPasswordModal();
		};
		function openForgottenPasswordModal() {
			var userforget = {IdTypePublication: $scope.globalParams.IdTypePublication};
			var paramsForModal = $scope.globalParams;
			$modal.open({
				templateUrl: '/espace,modalpasswordforgotten.htm',
				controller: function($scope, $modalInstance, globalParams) {
					$scope.globalParams = globalParams;
					$scope.userforget = userforget;
					$scope.btnMdp = function() {
						UserMdpForgot.get(angular.toJson($scope.userforget)).success(function(data) {
							toaster.pop('success', 'Un email avec votre mot de passe vous a été envoyé');
							$modalInstance.dismiss();
						}).error(function(data, status) {
							if (status === 428) {
								toaster.pop('error', 'Votre email est inconnu', 'Pour accéder a votre espace, veuillez vous créer un compte');
							} else {
								toaster.pop('error', 'Une erreur est survenue', 'Verifiez votre adresse email');
							}
						});
					}
				},
				resolve: {
					globalParams: function() {
						return paramsForModal;
					}
				}
			});
		}
	}])

	//PAGE MON ESPACE
	.controller('EspacePersoAccount',['$scope','$location','$cookieStore','GetResearch','GetAnnonce','CountAlerte','UserInfo','GetAnnoncePanierLocal','toaster','DeleteAnnoncePanierLocal','AddAnnEspace', function ($scope,$location,$cookieStore,GetResearch,GetAnnonce,CountAlerte,UserInfo,GetAnnoncePanierLocal,toaster,DeleteAnnoncePanierLocal,AddAnnEspace){
		var jeton=angular.fromJson($cookieStore.get('sessionKey'));
		//VERIF SI LOGIN
		UserInfo.get(jeton).success(function(data,status) {
			$scope.userInfo = data;
			$('.loged').addClass('display-show');
			$('.user-name').html(data.Prenom + ' ' + data.Nom)
			$('.not-log').removeClass('display-show');
		}).error(function() {
			$location.path('/login');
		});

		//RECUPERATION DES ANNONCES
		GetAnnonce.get(jeton).then(function(data) {
			$scope.Annonces = data;
		});

		GetResearch.get(jeton).success(function(data) {
			$scope.Researchs = data;
		}).error(function() {
		});

		CountAlerte.get(jeton).success(function(data) {
			$scope.Alertes = data;
		}).error(function() {
		});

		$scope.showNbrAnn = false;
		GetAnnoncePanierLocal.get().success(function(data) {
			$scope.Panierslocal = data;
			if(data.show == 1) {
				$scope.showNbrAnn = true;
			} else {
				$scope.showNbrAnn = false;
			}
		}).error(function() {
		});

		$scope.addSelecToAnnonce = function() {
			angular.forEach($scope.Panierslocal.idannonce, function(value) {
				AddAnnEspace.get(jeton,value).success(function(data) {
					toaster.pop('success', 'Vos annonces ont été ajoutées');
				}).error(function() {
					toaster.pop('error', 'Une erreur est survenu');
				});
			});

			DeleteAnnoncePanierLocal['delete']().success(function(data){}).error(function(data){});
			$location.path('/annonce');
		};
	}])

	//PAGE CREER ESPACE
	.controller('EspacePersoCreatAccount',['$scope','$location','UserCreate','toaster', function ($scope, $location, UserCreate, toaster) {
		//CREATE ACCOUNT
		$scope.usercreat = {IdTypePublication:$scope.globalParams.IdTypePublication};
		$scope.btnCreate = function() {
			UserCreate.get(angular.toJson($scope.usercreat)).success(function(data) {
				toaster.pop('success', 'Vous allez recevoir un email de validation d\'inscription');
				$location.path('/login');
			}).error(function(data, status) {
				if(status === 420) {
					toaster.pop('error', 'Votre email est deja utilisé');
				} else if(status === 432){
					toaster.pop('error', 'Votre mot de passe et votre confirmation ne correspondent pas');
				} else {
					toaster.pop('error', 'Une erreur est survenue', 'Tous les champs sont obligatoires');
				}
			});
		}
	}])

	//MODIFIE ESPACE PERSO
	.controller('EspacePersoModifie', ['$scope','$location','$cookieStore','UserLogin','UserModifie','UserSetOptin','toaster','UserInfo','AddAnnEspace', function ($scope, $location, $cookieStore, UserLogin, UserModifie, UserSetOptin, toaster, UserInfo, AddAnnEspace) {
		var jeton = angular.fromJson($cookieStore.get('sessionKey'));
		//VERIF SI LOGIN
		UserInfo.get(jeton).success(function(data) {
			$scope.userInfo = data;
		}).error(function() {
			$location.path('/login');
		});

		//VALIDER MODIF
		$scope.btnModifie = function() {
			if($('.new-pass').val() != '') {
				var verifLog = '{"Email":"'+$('.modif-email').val()+'","Password":"'+$('.old-pass').val()+'","IdTypePublication":"'+globalParams.IdTypePublication+'"}';
				UserLogin.get(verifLog).success(function(data) {
					modifyUser($scope.userInfo);
				}).error(function() {
					toaster.pop('error', 'Une erreur est survenue', 'Verifiez votre email ou votre mot de passe');
				});
			} else {
				modifyUser($scope.userInfo);
			}
		};

		function modifyUser(userInfo) {
			UserModifie.get(angular.toJson(userInfo), jeton).success(function(data) {
				toaster.pop('success', 'Vos modifications sont bien prises en compte');
				$location.path('/ami');
			}).error(function(data,status){
				if(status === 433) {
					toaster.pop('error', 'Veuillez renseigner un numéro de téléphone valide');
				} else if(status === 430){
					toaster.pop('error', 'Veuillez renseigner un email valide');
				} else if(status === 434){
					toaster.pop('error', 'Veuillez renseigner un numéro de mobile valide');
				} else if(status === 435){
					toaster.pop('error', 'Veuillez renseigner un code postal valide');
				} else if(status === 432){
					toaster.pop('error', 'La confirmation de mot de passe est éroné');
				} else if(status === 422){
					toaster.pop('error', 'Votre mot de passe est éroné');
				} else {
					toaster.pop('error', 'Une erreur est survenue', 'Veuillez réessayer');
				}
			});

			UserSetOptin.get(jeton).error(function() {
			});
		}
	}])

	//VALIDATION DE COMPTE
	.controller('EspacePersoValidate', ['$scope', '$location', 'UserValidate', 'toaster', function ($scope, $location, UserValidate, toaster) {
		$scope.uservalidate = {IdTypePublication:$scope.globalParams.IdTypePublication,IdTmpAccount:$scope.globalParams.IdTmpAccount};
		UserValidate.get(angular.toJson($scope.uservalidate)).success(function(data) {
			$location.path('/login');
			toaster.pop('success', 'Votre compte à été validé avec succès', 'Veuillez vous connecter pour accéder à votre compte');
		}).error(function() {
			toaster.pop('error', 'Erreur', 'Erreur');
		});
	}])

	.controller('EspacePersoRecherche', ['$scope', '$location', '$cookieStore', 'toaster', 'GetResearch', 'DeleteAllResearch', 'DeleteResearch', 'EditSearch', 'DeleteAlerte', 'AddAlerte', 'CountAlerte', 'DeleteAllAlerte', 'UserInfo', '$route', function ($scope,$location,$cookieStore,toaster,GetResearch,DeleteAllResearch,DeleteResearch,EditSearch,DeleteAlerte,AddAlerte,CountAlerte,DeleteAllAlerte,UserInfo,$route){
		var jeton=angular.fromJson($cookieStore.get('sessionKey'));
		//VERIF SI LOGIN
		UserInfo.get(jeton).success(function(data) {
			$scope.userInfo = data;
		}).error(function() {
			$location.path('/login');
		});

		//AFFICHER LES RECHERHCE
		GetResearch.get(jeton).success(function(data) {
			$scope.Researchs = data;
		}).error(function() {
		});

		//CHECKALLCHECKBOX RECHERCHES
		$scope.checkAll = function() {
			angular.forEach($scope.Researchs, function(value) {
				value.selected = !value.selected;
			});
		};

		//SUPPRIMER TOUTE LES RECHERCHES
		$scope.btnDeleteAllResearch = function() {
			angular.forEach($scope.Researchs, function(value) {
			if (value.selected === true)
				$scope.btnDeleteResearch(value);
				$route.reload();
			});
			/*DeleteAllResearch.delete(jeton).success(function(data) {
				toaster.pop('success', 'Vos recherches ont bien été supprimé');
				GetResearch.get(jeton).success(function(data) {
					$scope.Researchs = data;
				})	.error(function() {
					console.log('KO');
				});
			})	.error(function() {
				console.log('ko');
			});*/
		};

		//SUPPRIMER UNE RECHERCHE
		$scope.btnDeleteResearch = function(Research) {
			DeleteResearch['delete'](jeton, Research.IdRecherche).success(function(data) {
				toaster.pop('success', 'Votre recherche a bien été supprimé');
				$route.reload();
			}).error(function() {
				toaster.pop('error', 'ERREUR');
			});
		};

		//SUPPRIMER UNE ALERTE
		$scope.btnDeleteAlerte = function(Research) {
			DeleteAlerte['delete'](jeton,Research.IdRecherche).success(function(data) {
				toaster.pop('success', 'Vous n\'etes plus abonné à cette alerte');
				$route.reload();
			}).error(function() {
			});
		};

		//AJOUTER UNE ALERTE
		$scope.btnAddAlerte = function(Research) {
			var url = globalParams.urlSite + '/recherche,basic.htm' + Research.Url;
			AddAlerte.set(jeton, url, Research.IdRecherche).success(function(data) {
				toaster.pop('success', 'Vous etes abonné à cette alerte');
				$route.reload();
			}).error(function(data, status) {
				if(status === 439) {
					toaster.pop('error', 'Vous etes déjà abonné à une alerte similaire');
				}
			});
		};

		//COUNT ALERTE
		CountAlerte.get(jeton).success(function(data) {
			$scope.Alertes = data;
		}).error(function() {
		});

		//DELETE ALL ALERTE
		$scope.btnDeleteAllAlertes = function() {
			DeleteAllAlerte['delete'](jeton).success(function(data) {
				$route.reload();
				$scope.Alertes = data;
			}).error(function() {
			});
		};

		//AFFICHER EDITION DE RECHERCHE
		$scope.curentEditLine = null ;
		$scope.editLine = function(index) {
			$scope.curentEditLine = index;
		};

		//MODIFIER UNE RECHERCHE
		$scope.btnEditSearch = function(research) {
			EditSearch(jeton,research.IdRecherche,research.Nom).success(function(data) {
				toaster.pop('success', 'Votre recherche à ete modifié');
				$scope.curentEditLine = null ;
			}).error(function() {
				toaster.pop('error', 'Erreur');
			});
		}
	}])
	.controller('EspacePersoAnnonce', ['$modal', '$scope', '$location', '$cookieStore', 'toaster','GetAnnonce', 'DeleteAllAnnonce', 'EditAnnonce', 'DeleteAnnonce', 'SendFriend', 'Contact', 'GetAllFriend', 'UserInfo', '$route', function ($modal, $scope, $location, $cookieStore, toaster, GetAnnonce, DeleteAllAnnonce, EditAnnonce, DeleteAnnonce, SendFriend, Contact, GetAllFriend, UserInfo, $route) {
		var jeton=angular.fromJson($cookieStore.get('sessionKey'));
		//VERIF SI LOGIN
		UserInfo.get(jeton).success(function(data) {
			$scope.userInfo = data;
		}).error(function() {
			$location.path('/login');
		});
		$scope.orderProp = 'DtSauvegarde';

		//LISTER LES AMIS
		GetAllFriend.get(jeton).success(function(data) {
			$scope.Friends = data;
		}).error(function() {
		});

		//GESTION MODAL
		$scope.open = function (modalModel) {
			if($.grep($scope.Annonces, function(a) {return a.selected}).length > 0) { //nombre d'annonces sélectionnées
				if(modalModel == 'share') {
					$scope.templateUrl = '/espace,modalshareannonce.htm';
					$scope.ModalInstanceCtrl = ModalInstanceShareCtrl;
				} else if(modalModel == 'contact') {
					$scope.templateUrl = '/espace,modalcontactannonce.htm';
					$scope.ModalInstanceCtrl = ModalInstanceContactCtrl;
				}

				var modalInstance = $modal.open({
					templateUrl: $scope.templateUrl,
					controller: $scope.ModalInstanceCtrl,
					resolve: {
						Annonces : function() {
							return $scope.Annonces;
						},
						globalParams : function() {
							return $scope.globalParams;
						},
						userInfo : function() {
							return $scope.userInfo;
						},
						Friends : function() {
							return $scope.Friends;
						}
					}
				});
			} else {
				toaster.pop('error', 'Veuillez sélectionner au moins une annonce');
			}
		};

		//GESTION MODAL CONTACT
		var ModalInstanceContactCtrl = function ($scope, $modalInstance, Annonces, globalParams, userInfo) {
			$scope.globalParams = globalParams;
			$scope.userInfo = userInfo;

			$scope.contact = {
				idAnnonceEPSA: [],
				idTypeContact : '1',
				tel: userInfo.Telephone,
				message: ''
			};

			angular.forEach(Annonces, function(annonce) {
				if (annonce.selected === true) {
					$scope.contact.idAnnonceEPSA.push(annonce.IdAnnonceEPSA);
				}
			});

			$scope.btnSendContact = function() {
				Contact.send(jeton, $scope.contact).success(function(data) {
					$modalInstance.close();
				}).error(function(data, status) {
					console.log(status);
				});
			};
		};

		//GESTION MODAL SHARE
		var ModalInstanceShareCtrl = function ($scope, $modalInstance, $cookieStore, AddFriend, Annonces, globalParams, Friends) {
			$scope.Annonces = Annonces;
			$scope.globalParams = globalParams;
			$scope.Friends = Friends;
			$scope.selectedFriends = [];

			$scope.validAdFriend = function(addNewFriend) {
				if($scope.selectedFriends.indexOf(addNewFriend) === -1 && !angular.isUndefined(addNewFriend)) {
					$scope.selectedFriends.push(addNewFriend);
					AddFriend.get(angular.fromJson($cookieStore.get('sessionKey')), addNewFriend).success(function(data) {});
				}
			};

			$scope.AddSendFriends = function(FriendMails) {
				if($scope.selectedFriends.length > 0) {
					$scope.pres = 0;
					for(i = 0;i < $scope.selectedFriends.length;i++) {
						var mail = $scope.selectedFriends[i].Email;
						if(mail == FriendMails.Email) {
							return $scope.pres++;
						}
					}
					if($scope.pres < 1) {
						$scope.selectedFriends.push(FriendMails.Email);
					}
				} else {
					$scope.selectedFriends.push(FriendMails.Email);
				}
				return $scope.selectedFriends;
			};

			$scope.removeFriend = function(selectedFriend) {
				$scope.removeMail = $scope.selectedFriends.indexOf(selectedFriend);
				$scope.selectedFriends.splice($scope.removeMail, 1);
			};

			$scope.ok = function (FriendMail) {
				$scope.AmisAnnonces= {};
				$scope.CommentaireAnnonce = [];
				$scope.ContentCommentaireAnnonce = {};
				angular.forEach($scope.Annonces, function(value) {
					if (value.selected === true) {
						$scope.ContentCommentaireAnnonce = {
							IdAnnonceEPSA : value.IdAnnonceEPSA,
							Commentaire : value.Commentaire
						};
						$scope.CommentaireAnnonce.push($scope.ContentCommentaireAnnonce);
					 }
				});
				$scope.AmisAnnonces = {CommentaireAnnonce : $scope.CommentaireAnnonce,Emails : FriendMail};

				SendFriend.send(jeton, angular.toJson($scope.AmisAnnonces)).success(function(data) {
					toaster.pop('success', 'Votre Annonce a bien été envoyée');
				}).error(function() {
					toaster.pop('error', 'ERREUR');
				});
				$modalInstance.close();
			};

			$scope.cancel = function () {
			  $modalInstance.dismiss('cancel');
			};
		};

		//CHECKALLCHECKBOX ANNONCES
		$scope.checkAllAnnonces = function() {
			angular.forEach($scope.Annonces, function(value) {
				value.selected = !value.selected;
			});
		};

		//AFFICHER LES ANNONCES
		GetAnnonce.get(jeton).then(function(data) {
			$scope.Annonces = data;
			$scope.showLayer = false;
		});

		//AFFICHER EDITION D'ANNONCE
		$scope.curentAnnonceEditLine = null ;
		$scope.annonceEditLine = function(index){$scope.curentAnnonceEditLine = index;}

		//SUPPRIMER LES ANNONCES
		$scope.btnDeleteAllAnnonces = function() {
			angular.forEach($scope.Annonces, function(value) {
			if (value.selected === true)
				$scope.btnDeleteAnnonce(value);
				$route.reload();
			});

			/*DeleteAllAnnonce.delete(jeton).success(function(data) {
				toaster.pop('success', 'Vos annonces ont bien été supprimé');
				GetAnnonce.get(jeton).success(function(data) {
					$scope.Annonces = data;
				})	.error(function() {
					console.log('ko');
				});
			})	.error(function() {
				console.log('ko');
			});*/
		};

		//MODIFIER UNE ANNONCE
		$scope.btnEditAnnonce = function(Annonce) {
			EditAnnonce(jeton,Annonce.IdAnnonceEPSA,Annonce.Commentaire).success(function(data) {
				toaster.pop('success', 'Votre annonce à été modifiée');
				$scope.curentAnnonceEditLine = null ;
			}).error(function() {
				toaster.pop('error', 'Erreur');
			});
		};

		//SUPPRIMER UNE ANNONCE
		$scope.btnDeleteAnnonce = function(Annonce) {
			DeleteAnnonce['delete'](jeton,Annonce.IdAnnonceEPSA).success(function(data) {
				toaster.pop('success', 'Votre Annonce a bien été supprimé');
				$route.reload();
			}).error(function() {
				toaster.pop('error', 'ERREUR');
			});
		};

		//FORM DE CONTACT
		$scope.btnAskVisit= function(Annonce) {
			AskVisit.send(jeton,Annonce.IdAnnonceEPSA).success(function(data) {
				toaster.pop('success', 'Votre demande a bien été envoyée');
			}).error(function() {
				toaster.pop('error', 'ERREUR');
			});
		};

		$scope.btnAskCall= function(Annonce) {
			AskCall.send(jeton,Annonce.IdAnnonceEPSA).success(function(data) {
				toaster.pop('success', 'Votre demande a bien été envoyée');
			}).error(function() {
				toaster.pop('error', 'ERREUR');
			});
		};

		$scope.btnAskDetails= function(Annonce) {
			AskDetails.send(jeton,Annonce.IdAnnonceEPSA).success(function(data) {
				toaster.pop('success', 'Votre demande a bien été envoyée');
			}).error(function() {
				toaster.pop('error', 'ERREUR');
			});
		};
	}])
	//GESTION DES AMIS / PAGE MES INFOS PERSO
	.controller('EspacePersoAmi', ['$scope','$location','$cookieStore', 'GetAllFriend', 'AddFriend', 'DeleteAmi', 'DeleteAllFriends', 'toaster', 'UserInfo', 'UserDeleteAccount', function ($scope, $location, $cookieStore, GetAllFriend, AddFriend, DeleteAmi, DeleteAllFriends, toaster, UserInfo, UserDeleteAccount) {
		var jeton=angular.fromJson($cookieStore.get('sessionKey'));
		//VERIF SI LOGIN
		UserInfo.get(jeton).success(function(data) {
			$scope.userInfo = data;
		}).error(function() {
			$location.path('/login');
		});

		//AFFICHER LES AMIS
		GetAllFriend.get(jeton).success(function(data) {
			$scope.Friends = data;
		}).error(function() {
		});

		//AJOUTER LES AMIS
		$scope.btnAddFriend = function() {
			var email = $scope.addfriend.Email;
			AddFriend.get(jeton,email).success(function(data) {
				toaster.pop('success', 'Ami ajouté');

				GetAllFriend.get(jeton).success(function(data) {
					$scope.Friends = data;
				}).error(function() {
				});
			}).error(function() {
				toaster.pop('error', 'Veuillez rentrer un email valide');
			});
		};

		//SUPPRIMER UN AMI
		$scope.btnDeleteAmi = function(Friend) {
			DeleteAmi['delete'](jeton,Friend.IdAmi).success(function(data) {
				toaster.pop('success', 'Ami definitivement supprimé');
				GetAllFriend.get(jeton).success(function(data) {
					$scope.Friends = data;
				})	.error(function() {
				});
			}).error(function() {
				toaster.pop('error', 'Ami non supprimé');
			});
		};

		//SUPPRIMER TOUS LES AMIS
		$scope.btnDeleteAllFriends = function() {
			DeleteAllFriends['delete'](jeton).success(function(data) {
				toaster.pop('success', '', 'Tous vos contacts ont été supprimés');

				GetAllFriend.get(jeton).success(function(data) {
					$scope.Friends = data;
				}).error(function() {
				});
			}).error(function() {
			});
		};

		//SHOW DELETE COMPTE
		$scope.btnShowDeleteAccount = function() {
			$scope.ShowDeleteAccount = true;
		};

		$scope.btnHideDeleteAccount = function() {
			$scope.ShowDeleteAccount = false;
		};

		//DELETE ACCOUT
		$scope.btnDeleteAccount = function() {
			UserDeleteAccount['delete'](jeton).success(function(data) {
				$location.path('/login');
			}).error(function() {
				toaster.pop('error', 'Nous sommes dans l\'impossibilité de supprimer votre compte.', 'Veuillez réessayer');
			});
		};
		//SHOW DELETE COMPTE
		$scope.showAddFriend = false;
		$scope.btnShowAddFriend= function() {
			$scope.showAddFriend = !$scope.showAddFriend;
		};
	}]);
