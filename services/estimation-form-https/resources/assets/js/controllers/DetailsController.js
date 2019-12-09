import EstimationController from './EstimationController';

class DetailsController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);
    }
}

DetailsController.$inject = ['$scope', '$state', 'Config'];

export default DetailsController;
