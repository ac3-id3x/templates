import Helpers from '../modules/Helpers';

export default () => {
    return {
        restrict: 'E',
        scope:    {
            name:        '@',
            model:       '=',
            label:       '@',
            class:       '@',
            description: '@',
            options:     '='
        },
        template: `
            <div class="form-group contruction-year {{ class }}">
                <label for="{{ name }}" title="{{ label }}">{{ label }}</label>
                <select id="{{ name }}" name="{{ name }}"
                        class="form-control"
                        data-width="100%"
                        ng-model="model"
                >
                    <option value="" disabled>{{ placeholder }}</option>
                    <option value="{{ key }}"
                            ng-repeat="(key, value) in options"
                    >
                        {{ value }}
                    </option>
                </select>
                <div class="help-block" ng-if="description">{{ description }}</div>
            </div>`,
        link(scope, element, attrs) {
            // Define the placeholder
            scope.placeholder = attrs.placeholder ? attrs.placeholder : attrs.label;

            // Remove the error message on check/uncheck events
            element.change(function () {
                Helpers.resetValidation($(this), true);
            });
        }
    };
};
