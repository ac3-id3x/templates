export default ['Config', (Config) => {
    return {
        restrict: 'EA',
        templateUrl(element, attrs) {
            return `${Config.get('app.paths.views')}/partials/_startpoint-${attrs.layout === 'basic' ? 'basic' : 'main'}.html`;
        },
        link(scope, element, attrs) {
            if (attrs.layout === 'basic') {
                scope.redirectOnline = Config.get('app.urls.redirectOnline');
                scope.redirectPro    = Config.get('app.urls.redirectPro');
            }
        }
    };
}];
