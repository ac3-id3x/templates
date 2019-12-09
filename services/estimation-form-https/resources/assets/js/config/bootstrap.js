function setup($rootScope) {
    // Force page reload in order to the map to rebuild
    $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState) => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        if (toState.name === 'locate' && fromState.name && fromState.name !== 'locate') {
            location.reload();
        }
    });

	// If we have queryString on currentURL , then we will add it to the next url - persisent url search (to keep agency id)
    if(_confAppName === 'iframe') {
        $rootScope.$on('$locationChangeStart', ($location, event, newUrl, oldUrl) => {
            if(newUrl.indexOf('?') === -1 && oldUrl.indexOf('?') >= 0) {
                $location.search(oldUrl.split('?')[1]);
            }
        });
    }
}

setup.$inject = ['$rootScope'];

export default setup;
