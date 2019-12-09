import EstimationController from '../controllers/EstimationController';

function checkValue(scope, element, validation) {
    const rules     = validation.warnings[scope.name];
    const messages  = validation.messages;
    let $formGroup  = element.find('.form-group');
    scope.hasErrors = false;
    let validator;

    // Maximum number
    if (scope.model > rules.max.value) {
        // Get error message
        let message = typeof rules.max.message === 'string' ? rules.max.message : messages.max;
        message     = message.replace(':value', scope.model);

        validator = { rule: 'max', message };
    }

    if (validator) {
        scope.hasErrors = true;

        $formGroup.addClass('warned');
        $formGroup.find('> label').text(validator.message);
    } else {
        let $label      = $formGroup.find('> label');
        scope.hasErrors = false;

        $formGroup.removeClass('warned');
        $label.text($label.attr('title'));
    }
}

export default ['Config', (Config) => {
    return {
        restrict:     'EA',
        transclude:   false,
        scope:        {
            model:       '=',
            label:       '@',
            placeholder: '@',
            class:       '@',
            step:        '=?'
        },
        template:     `
            <div class="form-group {{ class }}">
                <label for="{{ class }}" title="{{ label }}">
                    {{ label }}
                </label>
                <span class="pull-right beating sign" ng-show="hasErrors">
                    <i class="fa fa-fw fa-exclamation-circle"></i>
                </span>
                <div class="inputs">
                    <button class="btn btn-default" ng-click="decrement()">
                        <i class="fa fa-fw fa-minus"></i>
                    </button>
                    <input type="number"
                           id="{{ name }}" name="{{ name }}"
                           class="form-control"
                           placeholder="{{ placeholder }}"
                           min="{{ min }}"
                           max="{{ max }}"
                           ng-model="model"
                           ng-blur="reset()"
                           pattern="[0-9]*"
                    >
                    <button class="btn btn-default" ng-click="increment()">
                        <i class="fa fa-fw fa-plus"></i>
                    </button>
                </div>
            </div>
        `,
        controller:   EstimationController,
        controllerAs: '$ec',
        link(scope, element, attrs) {
            // Default values
            scope.name = attrs.name || attrs.model.replace('$ec.formData.', '');
            scope.step = scope.step || 1;
            scope.min  = attrs.min !== undefined ? 0 : 1;

            scope.increment = function () {
                scope.model += scope.step;
            };
            scope.decrement = function () {
                scope.model -= scope.step;
            };

            scope.reset = function () {
                // If empty value, reset it to some default one
                if (scope.model === null || scope.model === undefined) {
                    scope.model = scope.min;
                }
            };

            scope.$watch(() => scope.model, () => {
                // Validation rules
                if (scope.model < scope.min && scope.model !== null) {
                    scope.model = scope.min;
                }

                // Check value for errors/warnings
                checkValue(scope, element, Config.get('validation'));
            });
        }
    };
}];
