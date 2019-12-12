angular.module('filtersServices',[])
	.filter('convertDateFromIso', ['$filter', function($filter) {
		return function(date) {
			if(date) {
				date = date.replace('/Date(','').replace('+0100)/', '').replace('+0200)/', '');
				var newDate = $filter('date')(date, 'dd-MM-yyyy');
				return newDate;
			}
			return 'Date non renseignée';
		}
	}])
	.filter('getTypeTransactionFromQry', ['$filter', function($filter) {
		return function(qry) {
			if(qry) {
				qry = qry.split('idtt=');
				if(qry[1]){
					var typeTransac = qry[1].charAt(0);
					var transac = allTypeTransac[typeTransac];
					return transac;
				}
			}
			return 'Transaction non renseignée';
		}
	}])
	.filter('getTypeTransaction', ['$filter', function($filter) {
		return function(idtt) {
			if(idtt) {
				var transac = allTypeTransac[idtt];
				return transac;
			}
			return 'Transaction non renseignée';
		}
	}]).filter('getTypeBien', ['$filter', function($filter) {
		return function(idtypebien) {
			if(idtypebien) {
				var bien = allTypeBien[idtypebien];
				return bien;
			}
			return 'Type de bien non renseignée';
		}
	}]).filter('noArray', ['$filter', function($filter) {
		return function(emailArray) {
			if(emailArray) {
				var emailString = emailArray.toString()
				return emailString;
			}
			return 'Email';
		}
	}]).filter('pCase', ['$filter', function($filter) {
		return function(string) {
			if(string) {
				var capitalizeString = string.charAt(0).toUpperCase() + string.slice(1);
				return capitalizeString;
			}
			return 'Email';
		}
	}]);
