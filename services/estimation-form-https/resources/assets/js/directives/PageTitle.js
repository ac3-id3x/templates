export default () => {
    return {
        restrict: 'EA',
        template: `
            <h1 id="estimation-title" class="title" ng-if="$ec.form.title && !layout">
                {{ $ec.form.title }} <span class="titlesub" ng-if="$ec.form.titleSub">{{ $ec.form.titleSub }}
			</h1>
            <h2 id="estimation-title" class="title" ng-if="$ec.form.title && layout">
                {{ $ec.form.title }} <span class="titlesub" ng-if="$ec.form.titleSub">{{ $ec.form.titleSub }}
			</h2>
			<p class="subtitle" ng-if="$ec.form.subtitle">{{ $ec.form.subtitle }}</p>
        `,
        link(scope, element, attrs) {
            scope.layout = attrs.layout;
        }
    };
};
