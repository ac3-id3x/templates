'use strict';

angular.module('espacePersoApp', [
    'ngRoute',
    'espacePersoControllers',
    'espacePersoServices',
    'filtersServices',
    'ui.bootstrap',
    'ui.bootstrap.transition',
    'ui.bootstrap.modal'
])
.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    // function checkUserStatus ($location, $rootScope, userInfo) {
    //     UserInfo.get().success(function(data) {
    //         $rootScope.authorized = true;
    //     }).error(function() {
    //         $location.path('/login');
    //     });
    // }

    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors
    //disable IE ajax request caching
    //$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    //$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache'; 
    $routeProvider
        .when('/login', {
            templateUrl: 'espace,creer.htm',
            controller: 'EspacePersoLogin'
        })
        .when('/compte', {
            templateUrl: 'espace,compte.htm',
            controller: 'EspacePersoAccount'
        })
        .when('/creer', {
            templateUrl: 'espace,formcreation.htm',
            controller: 'EspacePersoCreatAccount'
        })
        .when('/modifier', {
            templateUrl: 'espace,modifier.htm',
            controller: 'EspacePersoModifie'
        })
        .when('/valide', {
            templateUrl: 'espace,valider.htm',
            controller: 'EspacePersoValidate'
        })
        .when('/recherche', {
            templateUrl: 'espace,recherche.htm',
            controller: 'EspacePersoRecherche'
        })
        .when('/annonce', {
            templateUrl: 'espace,annonce.htm',
            controller: 'EspacePersoAnnonce'
        })
        .when('/ami', {
            templateUrl: 'espace,ami.htm',
            controller: 'EspacePersoAmi'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]).run(['$rootScope', function($rootScope) {
    $rootScope.authorized = false;
}]);
