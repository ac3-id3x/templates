import Helpers from '../modules/Helpers';

export default () => {
    return {
        restrict:   'E',
        transclude: true,
        scope:      {
            name:  '@',
            model: '=',
            value: '=',
            class: '@',
            icon:  '@'
        },
        template:   `
            <label class="radio choice {{ class }}" for="{{ uniqueId }}" ng-class="{ active: value === model }">
                <span class="icon {{ icon }}">
                    <i class="fa fa-fw fa-{{ icon === 'stars-2' || icon === 'stars-3' ? 'star' : icon }}"></i>
                </span>
                <input type="radio" name="{{ name }}" id="{{ uniqueId }}" ng-model="model" value="{{ value }}" />
                <div class="radio title"><ng-transclude></ng-transclude></div>
            </label>
        `,
        link(scope, element, attrs) {
            scope.name     = attrs.name || attrs.model.replace('$ec.formData.', '');
            scope.uniqueId = `${attrs.model}-${scope.value}`;

            // Remove the error message on check/uncheck events
            element.change(function () {
                Helpers.resetValidation($(this));
            });

            // TODO: To refactor (Performs two changes at single click)
            scope.$watch(() => scope.model, () => {
                if (scope.model === 'true') {
                    scope.model = true;
                }
                else if (scope.model === 'false') {
                    scope.model = false;
                }
            });
        }
    };
};
