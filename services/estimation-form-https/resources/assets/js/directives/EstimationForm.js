export default ['Config', (Config) => {
    return {
        restrict: 'E',
        templateUrl(element, attrs) {
            return `${Config.get('app.paths.views')}/partials/_layout-${attrs.layout || 'main'}.html`;
        }
    };
}];
