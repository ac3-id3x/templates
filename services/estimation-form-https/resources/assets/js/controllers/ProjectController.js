import EstimationController from './EstimationController';

class ProjectController extends EstimationController {
    constructor($scope, $state, Config) {
        super($scope, $state, Config);

        this.form.title    = 'Votre projet';
        this.form.titleSub = '';
        this.form.subtitle = '';
    }
}

ProjectController.$inject = ['$scope', '$state', 'Config'];

export default ProjectController;
