import EstimationController from './EstimationController';

class StateController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);
    }
}

StateController.$inject = ['$scope', '$state', 'Config'];

export default StateController;
