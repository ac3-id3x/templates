import LocationController from '../controllers/LocationController';
import * as routesOnline  from './routes-online-estimation';
import routesPro          from './routes-pro-estimation';

/**
 * @param $stateProvider
 * @param $urlRouterProvider
 * @param esp `estimationServiceProvider` shorthand.
 */
function routes($stateProvider, $urlRouterProvider, esp) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('locate', {
        url:         '/',
        templateUrl: esp.path('views', 'locationSlLci.html'),
        controller:  LocationController,
        onEnter: ['OmnitureService', (OmnitureService) => {
            setTrackingOnLocateTabEnter();

            function setTrackingOnLocateTabEnter() {
                OmnitureService.setDefaultVars();
                OmnitureService.pushVar("pageName", "ESTI");
                OmnitureService.pushVar("prop1", "ESTI");
                OmnitureService.sendData();
            }
        }],
        onExit: ['OmnitureService', (OmnitureService) => {
            setTrackingOnLocateTabExit();

            function setTrackingOnLocateTabExit() {
                OmnitureService.deleteAllVars();
                OmnitureService.pushVar("eVar7", "EstiOnline");
                OmnitureService.pushVar("eVar52", "EstiOnline");
                OmnitureService.pushEvents("event23", "event31");

                OmnitureService.sendData();
            }
        }]
    });

    // Online Estimation
    routesOnline.generalEstimation($stateProvider, esp);
    routesOnline.houseEstimation($stateProvider, esp);
    routesOnline.apartmentEstimation($stateProvider, esp);

    // Professional Estimation
    routesPro($stateProvider, esp);
}

routes.$inject = ['$stateProvider', '$urlRouterProvider', 'estimationServiceProvider'];

export default routes;
