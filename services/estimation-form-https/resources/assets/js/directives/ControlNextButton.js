export default ['$sce', ($sce) => {
    return {
        restrict: 'E',
        scope:    true,
        template: `
            <div class="{{ $ec.$state.current.name == 'online.contact' ? 'col-xs-10 next-step' : ($ec.$state.current.name != 'online.results' ? 'col-xs-9 col-sm-10 next-step' : 'col-xs-12') }}">
                <button class="btn btn-block btn-primary" ng-bind-html="text" validate-form="{ formData: $ec.formData, state }"></button>
            </div>`,
        link(scope, element, attrs) {
            // Assign text to the button
            scope.text = $sce.trustAsHtml(attrs.text ? attrs.text : scope.$ec.form.steps.labels.next);

            // Assign link to the button
            scope.state = attrs.state ? attrs.state : '/';         
        }
    };
}];
