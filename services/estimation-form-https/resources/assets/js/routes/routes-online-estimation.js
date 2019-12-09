import DetailsController    from '../controllers/DetailsController';
import SurfaceController    from '../controllers/SurfaceController';
import StateController      from '../controllers/StateController';
import BuildingController   from '../controllers/BuildingController';
import ResultsController from '../controllers/ResultsController';
import ResultsFooterController from '../controllers/ResultsFooterController';
import ContactController from '../controllers/ContactController';

export function generalEstimation($stateProvider, esp) {
    $stateProvider
        .state('online', {
            abstract: true,
            url:      '/online',
            template: '<ui-view></ui-view>'
        })
        .state('online.general', {
            url:         '/general',
            templateUrl: esp.path('views', 'general.html'),
            controller:  DetailsController
        })

        // Contact
        .state('online.contact', {
            url:         '/contact',
            templateUrl: esp.path('views', 'online/contact.html'),
            controller:  ContactController
        })
        .state('online.results', {
            url: '/results',
            views: {
                '':{
                    templateUrl: esp.path('views', 'online/templateResults.html'),
                },
                'body@online.results': {
                    templateUrl: esp.path('views', 'online/results.html'),
                    controller: ResultsController,
                    controllerAs: '$ec'
                }
            },
        });

    //.state('online.results', {
    //    url:         '/results',
    //    templateUrl: esp.path('views', 'online/results.html'),
    //    controller:  ResultsController
    //}).

    
}

export function houseEstimation($stateProvider, esp) {
    $stateProvider
        .state('online.house', {
            abstract: true,
            url:      '/house',
            template: '<ui-view></ui-view>'
        })
        .state('online.house.details', {
            url:         '/details',
            templateUrl: esp.path('views', 'online/house/details.html'),
            controller:  DetailsController
        })
        .state('online.house.surface', {
            url:         '/surface',
            templateUrl: esp.path('views', 'online/house/surface.html'),
            controller:  SurfaceController
        })
        .state('online.house.state', {
            url:         '/state',
            templateUrl: esp.path('views', 'online/house/state.html'),
            controller:  StateController
        })
        .state('online.house.stateFinal', {
            url:         '/state/2',
            templateUrl: esp.path('views', 'online/house/state-final.html'),
            controller:  StateController
        });
}

export function apartmentEstimation($stateProvider, esp) {
    $stateProvider
        .state('online.apartment', {
            abstract: true,
            url:      '/apartment',
            template: '<ui-view></ui-view>'
        })
        .state('online.apartment.details', {
            url:         '/details',
            templateUrl: esp.path('views', 'online/apartment/details.html'),
            controller:  DetailsController
        })
        .state('online.apartment.building', {
            url:         '/building',
            templateUrl: esp.path('views', 'online/apartment/building.html'),
            controller:  BuildingController
        })
        .state('online.apartment.surface', {
            url:         '/surface',
            templateUrl: esp.path('views', 'online/apartment/surface.html'),
            controller:  SurfaceController
        })
        .state('online.apartment.state', {
            url:         '/state',
            templateUrl: esp.path('views', 'online/apartment/state.html'),
            controller:  StateController
        });
}
