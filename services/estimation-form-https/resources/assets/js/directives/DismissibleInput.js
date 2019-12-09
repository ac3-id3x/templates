import EstimationController from '../controllers/EstimationController';

export default ['$rootScope', ($rootScope) => {
    return {
        restrict:     'E',
        scope:        {
            name:  '@',
            model: '=',
            label: '@',
            class: '@',
            inputClass: '@'
        },
        controller:   EstimationController,
        controllerAs: '$ec',
        template:     `
			<div class="form-group {{ class }}" ng-if="model">
				<label for="{{ name }}" ng-if="label" title="{{ label }}">{{ label }}</label>
				<div class="input-group">
					<input type="text"
					       id="{{ name }}" name="{{ name }}"
					       class="form-control {{ inputClass }}"
					       ng-model="model"
					       disabled
					/>
					<span class="input-group-btn">
                        <button class="btn btn-warning" ng-click="removeValue()" style="height: 46px;">
                            <i class="fa fa-fw fa-remove"></i>
                        </button>
                    </span>
				</div>
			</div>
        `,
        link(scope, element, attrs) {
            // Default name
            scope.name = attrs.name || attrs.model.replace('$ec.formData.', '');

            scope.removeValue = function () {
                scope.model = '';

                $rootScope.$broadcast('input.dismissed');
            };
        }
    };
}];
