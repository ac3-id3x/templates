import Helpers from '../modules/Helpers';

export default ['$http', 'Config', ($http, Config) => {
    return {
        restrict: 'E',
        scope:    {
            type:  '=',
            theme: '@'
        },
        template: `
			<section id="editorial-guide" class="editorial guide" ng-if="guide">
                <hr />
                <h3 class="header fictionalH1C">
					Conseils d'experts
				</h3>

				<div class="row">
					<div class="col-md-{{ theme ? '4' : '6' }}" ng-repeat="article in guide track by $index">
						<article class="block">
							<div class="thumb">
								<a ng-href="{{ article.url }}" target="_blank">
								    <img class="img-responsive" ng-src="{{ article.image }}" alt="{{ article.title }}" />
								</a>
							</div>
							<header class="title">
								<a ng-href="{{ article.url }}" target="_blank">{{ article.title }}</a>
							</header>
							<footer>
								<a class="readmore" ng-href="{{ article.url }}" target="_blank">En savoir plus</a>
							</footer>
						</article>
					</div>
				</div>
			</section>
        `,
        link(scope) {
            scope.guide = [];
            scope.type  = scope.type || 'vente';

            // Default theme (estimation page)
            if (!scope.theme) {
                scope.guide = [];

                // Get featured article for the sell type and rent type with one ws call
                $http.get(Helpers.url(Config.get('app.services.editorial.guideUrl'), Config.get('app.urlWS')), { timeout: 5000 }).success((data) => {
                    const guideSell = data[0];

                    scope.guide[0] = {
                        title: guideSell.titre,
                        url:   guideSell.lien,
                        image: guideSell.image
                    };

                    const guideRent = data[1];

                    scope.guide[1] = {
                        title: guideRent.titre,
                        url:   guideRent.lien,
                        image: guideRent.image
                    };
                });


                return;
            }

            /**
             * Get latest article from API.
             */
            function getLatestArticle() {
                // Retrieve last article from either the 'selling' or 'renting' category
                $http.post(Helpers.url(Config.get('app.services.editorial.url'), Config.get('app.urlWS')), { timeout: 5000 }).success((data) => {
                    const pageType = scope.type === 'vente' ? 'acheter' : 'louer';
                    const guide    = _(data).find(item => item.typeArticle === pageType);

                    if (!guide) {
                        return;
                    }

                    scope.guide[1] = {
                        title: guide.titre,
                        body:  guide.chapo,
                        url:   guide.lien,
                        image: guide.image_moyenne
                    };
                });
            }

            scope.$watch(() => scope.type, (newValue, oldValue) => {
                console.log(newValue, oldValue);

                // Get featured article for the sell type and rent type with one ws call
                if (newValue === oldValue) {
                    $http.get(Helpers.url(Config.get('app.services.editorial.guideUrl'), Config.get('app.urlWS')), { timeout: 5000 }).success((data) => {
                        const guideSell = data[0];

                        scope.guide[0] = {
                            title: guideSell.titre,
                            url:   guideSell.lien,
                            image: guideSell.image
                        };

                        getLatestArticle();

                        // Get featured article for the rent type
                        const guideRent = data[1];

                        scope.guide[2] = {
                            title: guideRent.titre,
                            url:   guideRent.lien,
                            image: guideRent.image
                        };

                        if (newValue === 'location' && oldValue === 'location') {
                            scope.guide.reverse();
                        }
                    });
                }

                // If changing the type manually, just reverse the guide
                if (newValue !== oldValue) {
                    getLatestArticle();
                    scope.guide.reverse();
                }
            });
        }
    };
}];
