import EstimationController from './EstimationController';

class ContactController extends EstimationController {
    constructor($scope, $state, Config, $location) {
        super($scope, $state, Config, $location);
        $scope.text = "Sans accord explicite de votre part, vos coordonnées seront uniquement utilisées afin de réaliser une enquête de satisfaction de votre estimation et ne seront pas transmises à des tiers.";
        $scope.textOptin ="Vos coordonnées seront transmises à une sélection de professionnels de l'immobilier afin de vous contacter dans le but de réaliser une estimation de votre bien.";

    }
}

ContactController.$inject = ['$scope', '$state', 'Config'];

export default ContactController;
