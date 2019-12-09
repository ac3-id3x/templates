import Helpers from '../modules/Helpers';

export default ['$http', 'Config', ($http, Config) => {
    return {
        restrict: 'E',
        scope:    {
            theme: '@'
        },
        templateUrl(element, attrs) {
            return `${Config.get('app.paths.views')}/partials/_editorial-news-${attrs.theme || 'default'}.html`;
        },
        link(scope) {
            scope.news = [];

            $http.post(Helpers.url(Config.get('app.services.editorial.url'), Config.get('app.urlWS')), { timeout: 5000 }).success((data) => {
                for (let i = 0; i < data.length; i++) {
                    const article = data[i];

                    if (article.typeArticle !== 'actualite') {
                        continue;
                    }

                    if ((scope.theme && scope.news.length === 2) || (!scope.theme && scope.news.length === 4)) {
                        continue;
                    }

                    scope.news.push({
                        title:      article.titre,
                        body:       article.chapo,
                        url:        article.lien,
                        images:     {
                            small:  article.petite_image,
                            medium: article.image_moyenne,
                            large:  article.grande_image,
                            square: article.image_carree
                        }
                    });
                }

                if (!scope.theme) {
                    scope.news = _.chunk(scope.news, 3);
                }
                scope.columnSize = 12 / (scope.news.length);
            });
        }
    };
}];
