import EstimationController from './EstimationController';

class ParkingController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);
    }
}

ParkingController.$inject = ['$scope', '$state', 'Config'];

export default ParkingController;