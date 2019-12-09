import EstimationController from './EstimationController';
import FormDataAdapter      from '../modules/FormDataAdapter';
import Helpers              from '../modules/Helpers';

class ResultsController extends EstimationController {
    constructor($scope, $state, Config, $http, $location) {
        super($scope, $state, Config, $location);

        this.$http = $http;
        this.$location = $location;

        this.form.title     = 'Chargement en cours...';
        this.form.titleSub = '';
        this.form.subtitle  = '';
        this.form.PageResults = true;
        this.$scope.results = {};
        this.$scope.loading = true;
        this.$scope.results.isEstimationValue = false;

        if(_confAppName === 'iframe') {
            this.$scope.hidePrice = (Config.getAgencyData() && Config.getAgencyData().mel_affichage_prix !== undefined && Config.getAgencyData().mel_affichage_prix === "0") ? true : false;
        } else {
            // ID3X
            this.$scope.hidePrice = (_confAffichagePrix === "0") ? true : false;
        }

        // Interation of virtual url in result page
        if (typeof ga != 'undefined' && ga) {
            ga('send', 'pageview', '/virtual_detail/module_estimation/merci-de-votre-envoi.htm');
        }

        // Check whether the estimation is done by the agencies
        this.formData.contactAgency = this.$state.current.name === 'pro.results';

        // Online estimation
        if (!this.formData.contactAgency) {
            var test = this._getEstimat(Config,$scope, $http,this.form, this.formData).then(function(location){
                $scope.$parent.$broadcast('initFooter', location);
            });
        }else{

            // Get estimation's status
            this.$scope.loading = true;
            this.form.title     = this.form.loading;

            // Adapt estimation data for agencies
            const adapter = new FormDataAdapter(this.formData, this.Config, true);

            // Check whether the estimation request has already been sent
            this.$http.get(Helpers.url(this.Config.get('app.services.estimation.status'), this.Config.get('app.urlWS')), { params: adapter.adaptedData, cache: false }).success((data) => {
                if (data.LeadState === 0 || data.LeadState === 3) {
                    this._getEstimat(Config,$scope, $http,this.form,this.formData);
                    this.form.title             = this.form.pro.new.title;
                    this.$scope.results.message = this.form.pro.new.message;
                    this.$scope.results.status  = 'sent';
                    this.formData.valid   = true;
                } else {
                    this.form.title              = this.form.pro.pending.title;
                    this.$scope.results.message  = this.form.pro.pending.message;
                    this.$scope.results.status   = 'pending';
                    this.$scope.results.timeLeft = data.TimeStampLimit;
                    this.formData.valid   = true;
                }

                this.$scope.loading = false;
            }).error(() => {
                this.formData.valid   = false;
                this.form.title             = 'Erreur';
                this.$scope.results.message = "Erreur à l'obtention de l'état de l'estimation.";
                this.$scope.loading         = false;
            });
        }
    }

    /**
     * Send data to Web Services for estimation.
     *
     * @private
     */
    _getEstimat(Config, scope, http,form,formData)
    {
        scope.loading = true;
        //form.title      = "Loading...";
        //form.subtitle   = "";
        var adapt = function(){
            let hash        = Config.get('app.services.estimation.password.hash');
            let urlHashPassword = Helpers.url(Config.get('app.services.estimation.password.url'), Config.get('app.urlWS'));

            return  http.get(urlHashPassword, { params:{ hash : hash, applicationName: Config.get('app.id')}, cache : false}).then((data) => {
                // Adapt estimation data to the Web Service
                const adapter = new FormDataAdapter(formData, Config);
                // Get proper Web Service

                // Save the hashed password
                adapter.adaptedData.MotDePasse = data.data;

                if (adapter.adaptedData.TelInternaute
                        && !adapter.adaptedData.TelInternaute.match(new RegExp(Config.get('validation').patterns.phone))) {
                    adapter.adaptedData.TelInternaute = null;
                }
                return adapter;

            },() => {
                formData.valid   = false;
                form.title             = 'Erreur';
                scope.results.message = 'Erreur lors du hachage du mot de passe.';

                // End the loading process
                if (!formData.contactAgency) {
                    form.title = 'Résultat';
                }
                scope.loading = false;
                return null
            });
        }

        var estimate = function(adapt)
        {   
            let url  = adapt.data.type === 'house' ? Config.get('app.services.estimation.house') : Config.get('app.services.estimation.apartment');
            return http.post(url, adapt.adaptedData).then(function onSuccess(response) {
                var data = response.data;
                scope.results.loading = true
                // Retrieve the estimation data
                scope.results.estimation            = {};
                scope.results.isEstimationValue = ((typeof data.EstimationBasse != 'undefined') && (typeof data.EstimationHaute != 'undefined') && data.EstimationBasse > 0 && data.EstimationHaute > 0) ? true : false;
                scope.results.estimation.min        = data.EstimationBasse;
                scope.results.estimation.max        = data.EstimationHaute;
                scope.results.estimation.confidence = data.IndiceConfiance;
                scope.results.estimation.TextToDisplay1 = "Notre estimation s'appuie sur les vrais prix de vente de biens proches et similaires au votre.";
                
                if(scope.results.estimation.confidence >= 4){
                    scope.results.estimation.TextToDisplay2 = "Cependant elle ne peut pas remplacer l'expérience d'un pro qui se rend chez vous."
                }
                else if (scope.results.estimation.confidence >= 1) {
                    scope.results.estimation.TextToDisplay2 = "Nous n'avons pas assez de ventes récentes et proches de votre bien pour vous donner une estimation suffisament précise."
                }

                scope.results.estimation.TextToDisplay3 = "Nous vous proposons d'être mis en relation avec un pro pour affiner votre estimation gratuitement."


                scope.results.estimation.TextIndiceDeDonfiance = scope.results.estimation.TextToDisplay1 +'<br>' +scope.results.estimation.TextToDisplay2 + '<br>'+ scope.results.estimation.TextToDisplay3;

                // End the loading process
                if (!formData.contactAgency) {
                    form.title = (scope.hidePrice === false) ? "Résultat" : "";
                    form.subtitle = (scope.hidePrice === false) ? "de l'estimation" : "";
                }
                formData.valid   = true;
                scope.loading = false;

                //pour afficher le texte du résultat en haut et plus en bas
                if(adapt.refineWithPro &&  scope.results.isEstimationValue ) {
                    if (!document.getElementById("textRequest")) {
                        var newElt = document.createElement('div');
                        newElt.id = 'textRequest';
                        newElt.className = 'optin-with-yes';
                        newElt.innerHTML = 'Vos coordonnées ont été transmises à une sélection de professionnels.  <br /> Ils vous contacteront afin de réaliser une estimation de votre bien.';
                        var eElement = document.getElementsByTagName('form')[0];
                        eElement.insertBefore(newElt, eElement.firstChild);
                    }
                }
                                
                return {'latitude':adapt.adaptedData.Latitude, 'longitude' :adapt.adaptedData.Longitude}

            }, function onError() {
                formData.valid   = false;
                form.title             = 'Erreur';
                scope.results.message = "Erreur lors de l'estimation.";

                // End the loading process
                if (!formData.contactAgency) {
                    form.title = 'Résultat';
                }
                scope.loading = false;
                return null
            });

        }

        const adapter = new FormDataAdapter(formData, Config);

        // Token
        let clefIdentification;
        if(_confAppName === 'iframe') {
            clefIdentification = (Config.getAgencyData() && Config.getAgencyData().mel_cfg_jeton) ? Config.getAgencyData().mel_cfg_jeton : null;
        } else {
            // ID3X
            clefIdentification = _confEstimToken;
        }

        // Token must exist to be able to call the estimation WS
        if(!clefIdentification) {
            throw "No token found for this agency.";
        }

        adapter.adaptedData.ClefIdentification = clefIdentification;

        var result = estimate(adapter);

        return result

    }
}

ResultsController.$inject = ['$scope', '$state', 'Config', '$http', '$location'];

export default ResultsController;
