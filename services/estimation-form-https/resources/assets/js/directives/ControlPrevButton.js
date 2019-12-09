export default ['$sce', ($sce) => {
    return {
        restrict: 'E',
        scope:    true,
        template: `
            <div class="col-xs-2 prev-step">
                <a ui-state="state" class="btn btn-block btn-default" ng-bind-html="text"></a>
            </div>`,
        link(scope, element, attrs) {
            // Assign text to the button
            scope.text = $sce.trustAsHtml(attrs.text ? attrs.text : scope.$ec.form.steps.labels.prev);

            // Assign link to the button
            scope.state = attrs.state ? attrs.state : '/';
        }
    };
}];
