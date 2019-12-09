export default () => {
    return {
        restrict:   'E',
        transclude: true,
        template:   `
        <div class="controls row">
            <ng-transclude></ng-transclude>
        </div>`
    };
};
