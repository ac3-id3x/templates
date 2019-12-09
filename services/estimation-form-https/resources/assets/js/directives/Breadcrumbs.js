import Helpers from '../modules/Helpers';

export default ['$timeout', '$rootScope', ($timeout, $rootScope) => {
    return {
        restrict: 'EA',
        template: `
            <ul id="estimation-breadcrumbs" ng-show="steps && $ec.$state.current.name.indexOf('results') === -1">
                <li id="breadcrumb.{{ step.state }}" 
                    ng-repeat="step in steps" 
                    ui-sref-active="active" 
                    ng-class="{ half: false, done: step.order <= currentStep.order, active2: step.order === currentStep.order }"
                    ng-if="!step.parent"
                >
                    <button class="item" validate-form="{ formData: $ec.formData, state: step.state }" ng-if="($index + 1) > currentStep.order">
                        {{ step.alias }}
                    </button>
                    <button class="item" ui-sref="{{ step.state }}" ng-if="($index + 1) <= currentStep.order">
                        {{ step.alias }}
                    </button>
                </li>
            </ul>
        `,
        link(scope) {
            scope.steps = '';

            /**
             * Initiate the component.
             */
            function init() {
                // Get tunnel (online or pro)
                let tunnel = Helpers.getTunnel(scope.$ec.$state.current.name);

                if (!tunnel) {
                    return;
                }

                // Detect form fields changes
                scope.$watch(() => scope.$ec.formData.type, () => {
                    Helpers.getSteps(tunnel, scope);
                });
            }

            // Timeout is needed because of the $state behaviour.
            // It doesn't return current state, but its parent.
            $timeout(init, 100);

            // Detect state changes
            $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState) => {
                const fromTunnel = Helpers.getTunnel(fromState.name);
                const toTunnel   = Helpers.getTunnel(toState.name);

                // When tunnel or type changes, force anot 'steps' loading
                if (fromTunnel !== toTunnel) {
                    Helpers.getSteps(Helpers.getTunnel(toState.name), scope);
                }

                // Init the component after view loading
                if (fromState.name === 'locate') {
                    $timeout(init, 100);
                }

                // Get current step
                if (scope.steps) {
                    scope.currentStep = _(scope.steps).find((step) => {
                        return step.state === toState.name;
                    });
                }

                // TODO: Case of 'contact'
                if (scope.currentStep && scope.currentStep.state === 'online.contact') {
                    scope.currentStep.order = scope.steps.length;
                }
            });
        }
    };
}];
