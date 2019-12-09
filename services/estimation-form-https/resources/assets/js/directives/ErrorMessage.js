export default () => {
    return {
        restrict: 'E',
        scope:    true,
        template: `
            <div class="alert alert-danger alert-error"
                 ng-repeat="(rule, bool) in $ec.estimationForm[field].$error"
                 ng-bind-html="$ec.validation.rules[field][rule].message"
                 ng-if="$ec.validation.rules[field][rule].message"
            ></div>`,
        link(scope, element, attributes) {
            scope.field = attributes.field;
        }
    };
};
