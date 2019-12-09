import EstimationController from './EstimationController';

class SurfaceController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);
    }
}

SurfaceController.$inject = ['$scope', '$state', 'Config'];

export default SurfaceController;
