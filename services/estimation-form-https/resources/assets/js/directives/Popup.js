export default () => {
    return {
        restrict:   'E',
        transclude: true,
        scope:      {
            title:    '@',
            text:     '@',
            position: '@',
            on:       '@',
        },
        template:   `
            <i class="fa fa-fw fa-2x fa-info-circle"></i>
        `,
        link(scope, element) {
            scope.position = scope.position || 'top center';
            scope.on       = scope.on || 'click';

            element.popup({
                title:    scope.title,
                html:     `<div class="text-center">${scope.text}</div>`,
                position: scope.position,
                on:       scope.on
            });
        }
    };
};
