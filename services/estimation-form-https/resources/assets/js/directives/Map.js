import Map         from '../modules/Map';
import MapLocation from '../modules/MapLocation';
import Storage from '../modules/Storage';

export default ['$rootScope', '$location', 'Config', '$timeout', ($rootScope, $location, Config, $timeout) => {
    return {
        restrict: 'E',
        template: `
            <div id="{{ map }}"></div>
        `,
        link(scope, element, attrs) {
            if (!Storage.storageEnabled()){
                return;
            }

            scope.map = attrs.map;

            const location = new MapLocation(Config.get('app'));

            function mapLoading() {
                const bingMap = new Map($location, Config, attrs.map, attrs.bind);
                var initAutoSuggest = attrs.initAutoSuggest != null ? attrs.initAutoSuggest : true;
                var initMap = attrs.initMap != null ? attrs.initMap : true;
                bingMap.init(initMap, initAutoSuggest);

                $rootScope.$on('input.dismissed', () => {
                    bingMap._generateLocalityPolygon(bingMap.map);
                    Storage.forget('homeLocationSelected');
                    bingMap.observer.disconnect();
                    bingMap._autocompleteFilter(null, bingMap);
                });

                if (location.suggestion) {
                    bingMap.locate(location.suggestion);
                }
            }
           
            $(window).load(mapLoading);

            angular.element(document).ready(function () {
                $timeout(mapLoading, 1);
            });
        }
    };
}];
