export default () => {
    return {
        restrict: 'E',
        scope:    {},
        template: `
            <ul class="countdown">
                <li class="counter">
                    {{ days }}
                    <ng-pluralize class="label" count="days" when="{'0': 'jour', 'one': 'jour', 'other': 'jours'}"></ng-pluralize>
                </li>
                <li class="counter">
	                {{ hours }}
	                <ng-pluralize class="label" count="hours" when="{'0': 'heure', 'one': 'heure', 'other': 'heures'}"></ng-pluralize>
                </li>
                <li class="counter">
	                {{ minutes }}
	                <ng-pluralize class="label" count="minutes" when="{'0': 'minute', 'one': 'minute', 'other': 'minutes'}"></ng-pluralize>
                </li>
                <li class="counter">
	                {{ seconds }}
	                <ng-pluralize class="label" count="seconds" when="{'0': 'seconde', 'one': 'seconde', 'other': 'secondes'}"></ng-pluralize>
                </li>
            </ul>
        `,
        link(scope, element, attrs) {
            $(element).countdown(+attrs.end * 1000, (event) => {
                setTimeout(() => {
                    scope.$apply(() => {
                        scope.days    = event.strftime('%-d');
                        scope.hours   = event.strftime('%-H');
                        scope.minutes = event.strftime('%-M');
                        scope.seconds = event.strftime('%-S');
                    });
                }, 1);
            });
        }
    };
};
