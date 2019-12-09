import Character from '../modules/Character';
import Helpers from '../modules/Helpers';

export default ['$rootScope', '$timeout', '$sce', '$templateRequest', 'Config', ($rootScope, $timeout, $sce, $templateRequest, Config) => {
    return {
        restrict: 'E',
        template: `
            <div id="estimation-sidebar-container" class="col-sm-12" ng-show="$ec.form.sidebar.enabled && content" ng-click="toggleSidebar($event)">
                <div id="estimation-sidebar-icon">
                    <i class="fa fa-fw fa-info"></i>
                </div>
            
                <aside id="estimation-sidebar" class="content" ng-bind-html="content" ng-if="isContentString"></aside>
                <aside id="estimation-sidebar" ng-if="!isContentString">
                    <ul class="content">
                        <li ng-repeat="text in content">{{ text }}</li>
                    </ul>
                </aside>
            </div>
        `,
        link(scope, element) {
            /**
             * Load an HTML template.
             *
             * @param {String} file
             */
            function loadTemplate(file = scope.content) {
                const templateUrl = $sce.getTrustedResourceUrl(`${Config.get('app.paths.sidebars')}/${file}`);

                $templateRequest(templateUrl).then(template => {
                    scope.content = $sce.trustAsHtml(template);
                });

                return scope.content || '';
            }

            /**
             * Get sidebar's content depending on current state.
             */
            function getContent() {
                $timeout(() => {
                    const currentState = scope.$ec.$state.current.name;

                    scope.content         = Config.get('form.sidebar.content')[currentState];
                    scope.isContentString = typeof scope.content === 'string';

                    if (scope.isContentString) {
                        // File template with dynamic name
                        // Uses current state name as the HTML filename
                        if (scope.content === '.html') {
                            loadTemplate(`${scope.$ec.$state.current.name}.html`);
                        }
                        // File template
                        else if (scope.content.match(/(\.html?)$/)) {
                            loadTemplate();
                        } else {
                            // Inline template
                            scope.content = $sce.trustAsHtml(Config.get('form.sidebar.content')[currentState]);
                        }
                    }
                    // Default template
                    else if (typeof Config.get('form.sidebar.default') === 'string') {
                        scope.isContentString = true;
                        loadTemplate(Config.get('form.sidebar.default'));
                    } else if (typeof Config.get('form.sidebar.default') === 'object') {
                        const tunnel          = Helpers.getTunnel(currentState);
                        scope.isContentString = true;

                        loadTemplate(Config.get('form.sidebar.default')[tunnel]);
                    }
                }, 1);
            }

            $rootScope.$on('$stateChangeSuccess', getContent);

            // Get the sidebar
            const $el = element.find('#estimation-sidebar-container');

            $(document).on('keyup', (event) => {
                // "Escape" button closes the popup
                if (Character.consider(event.keyCode).isEscape()) {
                    $el.removeClass('expanded', 300, 'linear');
                }
            }).on('click', () => {
                // "Click" anywhere on the document closes the popup
                $el.removeClass('expanded', 300, 'linear');
            });

            // todo: Avoid "stopPropagation()". Try to find another method
            /**
             * Toggle the sidebar.
             *
             * @param {object} event
             */
            scope.toggleSidebar = function (event) {
                event.stopPropagation();

                $el.toggleClass('expanded', 300, 'linear');
            };
        }
    };
}];
