export default () => {
    return {
        restrict:   'E',
        transclude: true,
        scope:      {
            label:    '@',
            class:    '@'
        },
        template:   `
            <div class="form-group {{ class }}">
                <label ng-if="label" title="{{ label }}">{{ label }}</label>
                <div class="choices {{ class }}" role="group">
                    <ng-transclude></ng-transclude>
                </div>
            </div>
        `
    };
};
