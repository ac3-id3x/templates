import EstimationController from '../controllers/EstimationController';

export default () => {
    return {
        restrict:     'E',
        transclude:   true,
        scope:        {
            model:       '=',
            form:        '=',
            label:       '@',
            class:       '@',
            inputClass:  '@',
            icon:        '@',
            prefix:      '@',
            unit:        '@',
            description: '@',
            placeholder: '@'
        },
        controller:   EstimationController,
        controllerAs: '$ec',
        template:     `
            <text type="number" name="{{ name }}" model="model" form="form"
                  label="{{ label }}"
                  placeholder="{{ placeholder }}" class="{{ class }}" input-class="{{ inputClass }}" unit="{{ unit }}" prefix="{{ prefix }}"
                  description="{{ description }}"
            ><ng-transclude></ng-transclude></text>
        `,
        link(scope, element, attrs) {
            scope.name = attrs.model.replace('$ec.formData.', '');
        }
    };
};
