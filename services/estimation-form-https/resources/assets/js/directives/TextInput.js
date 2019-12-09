import EstimationController from '../controllers/EstimationController';
import Character from '../modules/Character';
import Helpers from '../modules/Helpers';

export default ['Config', (Config) => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            type: '@',
            name: '@',
            model: '=',
            form: '=',
            label: '@',
            class: '@',
            inputClass: '@',
            icon: '@',
            prefix: '@',
            unit: '@',
            description: '@',
            format: '@',
            placeholder: '@'
        },
        controller: EstimationController,
        controllerAs: '$ec',
        template: `
            <div class="form-group {{ class }}">
                <label for="{{ name }}" ng-if="label" title="{{ label }}">{{ label }}</label>
                <div class="{{ icon || unit ? 'form-group-icon' : '' }}">
                    <span class="unit" ng-if="prefix">{{ prefix }}</span>
                    <input type="{{ type || 'text' }}"
                           id="{{ name }}" name="{{ name }}"
                           class="form-control {{ icon || unit ? 'input-addon' : '' }} {{ prefix ? 'prefix' : '' }} {{ inputClass }}"
                           placeholder="{{ placeholder }}"
                           ng-model="model"
                           ng-minlength="minlength"
                           ng-maxlength="maxlength"
                           ng-required="required"
                           ng-blur="format === 'phone' ? formatPhone(format) : ''"
                           ng-keyup="inputChange($event)"
                    />
                    <span class="unit" ng-if="unit">{{ unit }}<sup>2</sup></span>
                    <i class="fa fa-fw fa-{{ icon }}" ng-if="icon"></i>
                </div>
                <div class="help-block" ng-if="description">{{ description }}</div>
                <ng-transclude></ng-transclude>
            </div>`,
        link(scope, element, attrs) {
            // Default name
            scope.name = attrs.name || attrs.model.replace('$ec.formData.', '');
            // Perform actions on key press
            element.on('keypress', function (event) {
                const char = new Character(event.which || event.charCode || event.keyCode);

                if (!char.isDelete()) {
                    if (char.isEnter()) {
                        event.preventDefault();
                    }

                    // Remove the error message on check/uncheck events
                    Helpers.resetValidation($(this), true);

                    // Disable all characters other than 0-9, "+", ".", " "
                    var enabledKeyCodes = [46, 8, 9, 35, 36, 40, 38, 37, 39];
                    var keyCode = _(enabledKeyCodes).find(code => code == event.keyCode);

                    if (attrs.format === 'phone' && !keyCode && !String.fromCharCode(event.which).match(/^[0-9]+$/)
                        || scope.format === 'name' && event.keyCode!= '9' && !String.fromCharCode(event.which).match(/^[A-Za-zçàéèêëöùûïî\-\s]+$/)
                        ||scope.type === 'number' && event.keyCode!= '9' &&  !String.fromCharCode(event.which).match(/^[0-9]+$/)) {
                        event.preventDefault();
                        return false;
                    }
                }
            });

            scope.inputChange = inputChange;
            /**
             * Format the input as a phone number.
             */
            scope.formatPhone = function () {
                // Remove all dots and spaces
                scope.model = scope.model.replace(/[ \.]+/g, '');

                // Validate the input
                if (scope.model) {
                    const $formGroup = element.find('.form-group');
                    const $label = $formGroup.find('> label');

                    // Prettify the number if input is valid
                    if ((scope.model.length === 13 && scope.model.startsWith('00')) ||
                        (scope.model.length === 12 && scope.model.startsWith('+')) ||
                        (scope.model.length === 10 && !scope.model.startsWith('00') && !scope.model.startsWith('+'))
                    ) {
                        scope.model = Helpers.prettifyPhone(scope.model);
                        $formGroup.removeClass('invalid');
                        $label.text($label.attr('title'));
                    } else {
                        $formGroup.addClass('invalid');
                        $label.text(Config.get('validation.errors')['pro.credentials'][scope.name].phone);
                    }
                }
            };

            function inputChange($event) {
                var enabledKeyCodes = [40, 38];
                var keyCode = _(enabledKeyCodes).find(code => code == $event.keyCode);
                if (!angular.isDefined(keyCode)) return;
                var listSuggestion = angular.element(`div#addressSuggestions #as_container.as_container_search .asOuterContainer ul`)[0];
                if (listSuggestion) {
                    var selectedItem = angular.element(`div#addressSuggestions #as_container.as_container_search .asOuterContainer ul li[aria-selected="true"]`)[0];
                    //reinitialisation de la selection 
                    if (!angular.isDefined(selectedItem)) {
                        selectedItem = listSuggestion.children[0];
                    }
                    if (keyCode === 40) {
                        if (listSuggestion.offsetHeight < selectedItem.offsetTop) {
                            listSuggestion.scrollTop = listSuggestion.scrollTop + selectedItem.offsetHeight;
                        } else {
                            if (listSuggestion.children[0] === selectedItem) {
                                listSuggestion.scrollTop = 0;
                            }
                        }
                    }

                    if (keyCode === 38) {
                        if (selectedItem.offsetTop  < listSuggestion.offsetHeight - selectedItem.offsetTop) {
                            listSuggestion.scrollTop = listSuggestion.scrollTop - selectedItem.offsetHeight;
                        }
                    }
                }
            }

        }
    };
}];