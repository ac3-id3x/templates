import EstimationController from './EstimationController';

class BuildingController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);
    }
}

BuildingController.$inject = ['$scope', '$state', 'Config'];

export default BuildingController;
