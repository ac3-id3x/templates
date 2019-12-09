import EstimationController from './EstimationController';

class CredentialsController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);
    }
}

CredentialsController.$inject = ['$scope', '$state', 'Config'];

export default CredentialsController;
