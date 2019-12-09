import DetailsController from '../controllers/DetailsController';
import CredentialsController from '../controllers/CredentialsController';
import ProjectController from '../controllers/ProjectController';
import ResultsController from '../controllers/ResultsController';

export default function routesPro($stateProvider, esp) {
    $stateProvider
        .state('pro', {
            abstract: true,
            url:      '/pro',
            template: '<ui-view></ui-view>'
        })
        .state('pro.general', {
            url:         '/general',
            templateUrl: esp.path('views', 'general.html'),
            controller:  DetailsController
        })
        .state('pro.credentials', {
            url:         '/credentials',
            templateUrl: esp.path('views', 'pro/credentials.html'),
            controller:  CredentialsController
        })
        .state('pro.project', {
            url:         '/project',
            templateUrl: esp.path('views', 'pro/project.html'),
            controller:  ProjectController
        })
        .state('pro.results', {
            url:         '/results',
            templateUrl: esp.path('views', 'pro/results.html'),
            controller:  ResultsController
        });
}
