// Import 3rd-party Modules
import lodash       from 'lodash';
import angular      from 'angular';
import ngSanitize   from 'angular-sanitize';
import ngAnimate    from 'angular-animate';
import uiRouter     from 'angular-ui-router';
import uiBootstrap  from 'angular-ui-bootstrap';
import uiSelect     from 'ui-select';
import './third-party/angularTracking.min';
import './third-party/angular-locale_fr-fr';

// Import Configuration
import bootstrap from './config/bootstrap';
import routes    from './routes/routes';

// Import Services
import Config from './services/Config';
import OmnitureService from './services/omniture/omniture.service';

// Import Service Providers
import EstimationServiceProvider from './providers/EstimationServiceProvider';

// Import Filters
import LimitWords from './filters/LimitWords';
import Range      from './filters/Range';

// Import Controllers
import EstimationController from './controllers/EstimationController';
import ResultsFooterController from './controllers/ResultsFooterController';

// Import Directives
import Breadcrumbs       from './directives/Breadcrumbs';
import CheckboxInput     from './directives/CheckboxInput';
import ControlNextButton from './directives/ControlNextButton';
import ControlPrevButton from './directives/ControlPrevButton';
import Controls          from './directives/Controls';
import Countdown         from './directives/Countdown';
import DismissibleInput  from './directives/DismissibleInput';
import EditorialGuide    from './directives/EditorialGuide';
import EditorialNews     from './directives/EditorialNews';
import EmailInput        from './directives/EmailInput';
import ErrorMessage      from './directives/ErrorMessage';
import EstimationForm    from './directives/EstimationForm';
import EstimationSidebar from './directives/EstimationSidebar';
import Inputs            from './directives/Inputs';
import Map               from './directives/Map';
import NumberControl     from './directives/NumberControl';
import NumberInput       from './directives/NumberInput';
import PageTitle         from './directives/PageTitle';
import RadioInput        from './directives/RadioInput';
import SelectBox         from './directives/SelectBox';
import Startpoint        from './directives/Startpoint';
import TextInput         from './directives/TextInput';
import ValidateForm      from './directives/ValidateForm';
import Popup             from './directives/Popup';

window.onhashchange = function() { 
    //Check si le bloc texte (vert) du resulat d'estim se trouve sur d'autres pasges ou non
    //Created in "class ResultsController"
    if (document.getElementById("textRequest")) {
        var elem = document.getElementById('textRequest');
        elem.parentNode.removeChild(elem);
    }
}

// Store some dependencies inside window variable
window._        = lodash;
window.ava_data = window.ava_data || {};

// Application Initiation
const estimationApp = angular.module('estimationApp', [uiRouter, uiBootstrap, uiSelect, ngSanitize, ngAnimate, 'tessarine.avatag.tracking']);

// Setup
estimationApp.run(bootstrap);

// Handle persistent url search
estimationApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
        // If we have queryString on currentURL , then we will add it to the next url - persisent url search (to keep agency id)
        if(newUrl.indexOf('?') === -1 && oldUrl.indexOf('?') >= 0) {
            $location.search(oldUrl.split('?')[1]);
        }
    });
}]);

// Service Providers
estimationApp.provider('estimationService', EstimationServiceProvider);

// Services
estimationApp.service('Config', Config);
estimationApp.service('OmnitureService', OmnitureService);

// Routes
estimationApp.config(routes);

// Controller
estimationApp.controller('EstimationController', EstimationController);
estimationApp.controller('ResultsFooterController', ResultsFooterController);

// Directives
estimationApp.directive('estimation', EstimationForm);
estimationApp.directive('estimationSidebar', EstimationSidebar);
estimationApp.directive('pageTitle', PageTitle);
estimationApp.directive('breadcrumbs', Breadcrumbs);
estimationApp.directive('startpoint', Startpoint);
estimationApp.directive('errorMessage', ErrorMessage);
estimationApp.directive('validateForm', ValidateForm);
estimationApp.directive('editorialNews', EditorialNews);
estimationApp.directive('editorialGuide', EditorialGuide);
estimationApp.directive('countdown', Countdown);
estimationApp.directive('popup', Popup);

// Map Directives
estimationApp.directive('map', Map);

// Control Directives
estimationApp.directive('controls', Controls);
estimationApp.directive('prev', ControlPrevButton);
estimationApp.directive('next', ControlNextButton);

// Form Directives
estimationApp.directive('inputs', Inputs);
estimationApp.directive('text', TextInput);
estimationApp.directive('number', NumberInput);
estimationApp.directive('email', EmailInput);
estimationApp.directive('radio', RadioInput);
estimationApp.directive('checkbox', CheckboxInput);
estimationApp.directive('selectBox', SelectBox);
estimationApp.directive('numberControl', NumberControl);
estimationApp.directive('dismissibleInput', DismissibleInput);

// Filters
estimationApp.filter('range', Range);
estimationApp.filter('limitWords', LimitWords);

export default 'estimationApp';
