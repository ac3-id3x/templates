import Helpers from '../modules/Helpers';

export default () => {
    return {
        restrict:   'E',
        transclude: true,
        scope:      {
            model: '=',
            value: '=',
            class: '@',
            icon:  '@',
            open:  '@'
        },
        template:   `
            <label class="checkbox choice {{ class }}" 
                   for="{{ uniqueId }}" 
                   ng-class="{ active: model == value }"
            >
                <span class="icon {{ icon }}" ng-if="icon">
                    <i class="fa fa-fw fa-{{ icon }}"></i>
                </span>
                <input type="checkbox" name="{{ name }}" id="{{ uniqueId }}" ng-model="model" value="{{ value }}" />
                <div class="checkbox title" title="{{ label }}"><ng-transclude></ng-transclude></div>
            </label>
        `,
        link(scope, element, attrs) {
            scope.name     = attrs.model;
            scope.uniqueId = `${attrs.model}-${scope.value}`;
            scope.label    = element.find('ng-transclude').text();

            // todo: Reset surface checkbox on click
            element.on('change', () => {
                Helpers.resetValidation(element);
            });

            // TODO: To refactor (Performs two changes at single click)
            scope.$watch(() => scope.model, () => {
                if (scope.model === 'true') {
                    scope.model = true;
                }
                else if (scope.model === 'false') {
                    scope.model = false;
                }

                // Sliding expandable element
                const nextElement = element.next();

                if (nextElement.hasClass('expandable')) {
                    if (scope.model) {
                        // Add "open" class
                        element.find('.choice').addClass('open');

                        // Show next element
                        nextElement.slideDown(250);
                        nextElement.find('input').focus();
                    } else {
                        // Remove "open" class
                        element.find('.choice').removeClass('open');

                        // Hide next element
                        nextElement.slideUp(250);
                    }
                }
            });
        }
    };
};
