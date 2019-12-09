import MapLocation from '../modules/MapLocation';
import Storage from '../modules/Storage';
import Helpers from '../modules/Helpers';

class EstimationController {
    constructor($scope, $state, Config, $location, OmnitureService) {
        // Injecting the services
        this.$scope = $scope;
        this.$state = $state;
        this.Config = Config;
        this.$location = $location;
        this.omnitureService = OmnitureService;

        //EligibleAgencies
        this.$scope.loadingeAgencies = true;

        // Values of refineWithPro
        this.refineWithProValues = {
            yes: 'yes',
            no: 'no'
        };

        // Default form data values
        this.formData = this._getFormData();

        this.showFormData = Storage.storageEnabled();

        // Retrieve form Information
        this.form = Config.get('form');
        this._getPageTitles();

        // On va ajouter la classe hidden-xs au bloc de droit pour ne pas afficher le bouton information (I) lorsqu'on est sur mobile.
        var estimationSidebarContainer = $('#estimation-sidebar-container').get(0)
        if(estimationSidebarContainer) {
            //Position de (I)
            if($(window).width() <= 767){
                this.isLocationPage = ($location && ($location.$$url === '/')) ? true : false;
                if(this.isLocationPage) $(estimationSidebarContainer).css("margin-top", "-25px");
                else $(estimationSidebarContainer).css("margin-top", "7px");
            }

            // On vérifie qu'on est sur la page contact pour pouvoir appliquer ses particularités.
            this.isContactPage = ($location && $location.$$url === '/online/contact') ? true : false;
            this.isResultPage = ($location && $location.$$url === '/online/results') ? true : false;
            this.isResultProPage = ($location && $location.$$url == '/pro/results') ? true : false;
            if((this.isContactPage && !$(estimationSidebarContainer).hasClass('hidden-xs')) || this.isResultPage || this.isResultProPage)
                $(estimationSidebarContainer).addClass('hidden-xs');
            else $(estimationSidebarContainer).removeClass('hidden-xs');
        }

        // Get breadcrumbs steps
        this._retrieveBreadcrumbsSteps();

        // Validation Rules
        this.validation = Config.get('validation');

        this._watchFormData();

        // Take url params for the first step
        if (Config.get('app.id') === 'SL' && this.$state.current.name === '') {
            this.setEstimatedLocationFromQueryString(Config, $location, this.formData, this._populateFields);
        }


        this._populateFields(Config, this.formData);
    }

    // Affichage du CNIL sur mobile, en dessous du bouton terminer.
    printCNILText() {
        var test = $("#estimation-form-container #CNILPart2").get(0);
        $("#estimation-form-container #CNILPart2").toggle();
        $("#estimation-form-container #CNILPart1 > a").remove();
    }

    // Adresse de contact mail de l'agence
    getMailToAgence() {
        return window.agencyMailHref;
    }

    /**
     * Dynamically get page titles.
     *
     * @private
     */
    _getPageTitles() {
        // Get current tunnel
        let tunnel = Helpers.getTunnel(this.$state.current.name);
        let steps;

        if (tunnel) {
            let step;

            // Get current tunnel's steps
            steps = Helpers.getSteps(tunnel);

            // Page title
            step = _(steps).find(step => {
                return step.state === this.$state.current.name;
        });
            if (step) {
                this.form.title = step.title;
                this.form.titleSub = step.titleSub;
            }

            // Page subtitle
            step = _(steps).find(step => {
                return step.state === this.$state.current.name;
        });
            if (step) {
                this.form.subtitle = step.subtitle;
            }
        }
    }

    /**
     * Retrieve breadcrumbs steps configuration file and store them in session.
     *
     * @private
     */
    _retrieveBreadcrumbsSteps() {
        const steps = this.Config.get('steps');

        if (steps) {
            if (!Storage.get('steps')) {
                this.steps = Storage.put('steps', steps);
            }
        }
    }

    /**
     * Watch for the form data changes and save them in a storage.
     *
     * @todo Check for equality first
     *
     * @private
     */
    _watchFormData() {
        this.$scope.$watch(() => this.formData, () => {
            Storage.put('estimationFormData', JSON.stringify(this.formData));

            // Remove estimated location from storage
            if (!this.formData.location.address) {
                Storage.forget('estimatedLocation');
            }

            //Remove location selected on Home page
            if (!this.formData.location.address && !this.formData.location.city && !this.formData.location.department && !this.formData.location.region) {
                Storage.forget('homeLocationSelected');
            }

        }, true);
        this._restoreFromStorage();
    }

    /**
     * Restore from
     *
     * @private
     */
    _restoreFromStorage() {
        if (!this.formData.type && Storage.get('estimationFormData')) {
            this.formData = Storage.get('estimationFormData');
        }
    }

    /**
     * Get fields for current state.
     */
    _getFields() {
        const fields = this.Config.get('fields');

        this.$scope.fields = fields[this.$state.current.name];
    }

    /**
     * Create a range of specified length.
     *
     * @param {Integer} number
     *
     * @returns {Array}
     */
    range(number) {
        return new Array(parseInt(number));
    }

    /**
     * Get default form data values.
     *
     * @returns {Object}
     *
     * @protected
     */
    _getFormData() {

        var _estimObject = Storage.get('estimationFormData');
        if (_estimObject) {

            // Si on a pas une adresse valide dans estimationFormData, c'est à dire si on a pas sélectionné une adresse de la liste de suggestion
            // On définit la propriété address de location avec la chaine vide
            if (!Storage.get('estimatedLocation')) {
                _estimObject.location.address = '';
            }
            return _estimObject;
        }

        return {
            location: {
                country:    '',
                region:     '',
                department: '',
                city:       '',
                address:    '',
                shortAddress: '',
                addressWithoutCountry: '',
                postalCode: ''
            },

            type:             (_idTypeBien === 1) ? 'apartment' : 'house',
            rooms:            1,
            floor:            1,
            stories:          1,
            constructionYear: '',
            standing:         '',
            locationQuality:  '',
            surface:          '',
            terraceFloor:     {
                included: false,
                surface:  ''
            },
            state:            {
                plumbing:    '',
                electricity: '',
                walls:       {
                    interior: '',
                    exterior: ''
                },
                floor:       ''
            },

            house: {
                ownership:   '',
                lot:         '',
                garage:      {
                    included: false,
                    surface:  ''
                },
                veranda:     {
                    included: false,
                    surface:  ''
                },
                outbuilding: {
                    included: false,
                    surface:  ''
                },
                state:       {
                    roof:    '',
                    heating: ''
                },
                isolation:   '',
                equipment:   {
                    pool:   false,
                    tennis: false
                }
            },

            apartment: {
                elevator: false,
                basement: false,
                charges:  '',
                view:     '',
                agency:   '',
                material: '',
                garden:   {
                    included: false,
                    surface:  ''
                },
                balcony:  {
                    included: false,
                    surface:  ''
                },
                parking:  {
                    total:  '0',
                    places: {
                        'parking-0': '',
                        'parking-1': '',
                        'parking-2': ''
                    }
                }
            },

            contact: {
                email: '',
                name:  {
                    first: '',
                    last:  ''
                },
                phone: '',
                refineWithPro: 'no'
            },

            project: {
                who:  '',
                when: ''
            },

            results: {
                valid:      '',
                message:    '',
                estimation: {
                    min:        0,
                    max:        0,
                    confidence: 0
                }
            },

            pro: {
                status:  '',
                message: ''
            },

            contactAgency: false
        };
    }

    /**
     * Populate fields by determining the location type.
     *
     * @todo To refactor the method.
     *
     * @private
     */
    _populateFields(config, formData) {
        var mapLocation = new MapLocation(config.get('app'));
        var overseas = config.get('app.services.map.overseas');

        var address = mapLocation.suggestion ? mapLocation.suggestion.address : null;
        var locName = null;
        if (mapLocation.isAddress()) {
            formData.location.address    = mapLocation.suggestion.formattedSuggestion;
            formData.location.shortAddress = mapLocation.suggestion.title;
            formData.location.addressWithoutCountry = mapLocation.suggestion.formattedSuggestion ? mapLocation.suggestion.formattedSuggestion.replace(', France', '') : "";
            formData.location.postalCode = mapLocation.postalCode;
        } else if (mapLocation.isNeighborhood()) {

            //Cas particuliers des arrondissements de Paris, Marseille et Lyon
            if (address.locality.toLowerCase().indexOf('arrondissement') > -1) {
                // Case Marseille 13 (8e arrondissement de Marseille) ==> put "de" à la place de ","
                // Même cas pour Lyon et Paris
                var separaotr = ',';
                if (address.locality.toLowerCase().indexOf("arrondissement de") > 0) {
                    separaotr = 'de';
                }

                var localityParts = address.locality.split(separaotr);
                var loc = localityParts[1].trim() + " " + localityParts[0].trim().toLowerCase();
            }
            //Autres villes
            else {
                loc = address.locality.indexOf(',') > -1 ? address.locality.split(',')[1].trim() : address.locality.trim();
            }
            formData.location.city    = loc;
            formData.location.address = '';

        } else if (mapLocation.isPostalCode()) {
            formData.location.city = address.locality + " " + address.postalCode;

        } else if (mapLocation.isCity()) {
            formData.location.city    = mapLocation.suggestion.formattedSuggestion;
            formData.location.address = '';

        } else if (mapLocation.isDepartment()) {
            var forsug    = mapLocation.suggestion.formattedSuggestion;
            var DomTomLoc = null;
            if (overseas.indexOf(forsug) > -1) {

                if (forsug === 'Guadeloupe-France' || forsug === 'Martinique-France') {
                    DomTomLoc = forsug.replace('-France', '');
                }
                else if (forsug === 'Guyane française') {
                    DomTomLoc = forsug.replace(' française', '');
                }
                else {
                    DomTomLoc = forsug;
                }
                formData.location.department = DomTomLoc;
            }
            else {
                formData.location.department = mapLocation.suggestion.formattedSuggestion;
            }

            formData.location.address = '';

        } else if (mapLocation.isRegion()) {
            formData.location.region  = mapLocation.suggestion.formattedSuggestion;
            formData.location.address = '';
        } else if (mapLocation.isCountry()) {
            formData.location.country = mapLocation.suggestion.formattedSuggestion;
            formData.location.address = '';
        }
    }

    getAgencyUrlCss() {
        // In case of iframe, we need to get the css file depending of agency color
        // The url of css is defined by the WS
        let urlCss = null;

        if(_confAppName === 'iframe' && this.Config.getAgencyData() && this.Config.getAgencyData().css_url) {
            urlCss = this.Config.getAgencyData().css_url;
        }

        return urlCss;
    }

    // On sépare le traitement pour les cas où getSelectedLocation est appelé par la page d'estimation ou par la page prix
    // Page prix : this.$scope.$parent.pagType === 'vente'
    validateLocation($event) {
        var loc = Storage.get('estimatedLocation');
        var address = $("#address").get(0);
        var addressValue = address ? $(address).val().trim() : '';
        var $addressLabel = $("label[title='Adresse']");
        var isNotAddress = loc.entitySubType !== 'Road';
        var hasNotValidAddress = isNotAddress || (addressValue === '' || (addressValue !== loc.title && addressValue !== loc.formattedSuggestion));
        var steps;

        // Address not selected from suggestions list
        if (hasNotValidAddress) {
            var $labelParent = $addressLabel.parents('.form-group');

            // Display error message
            $labelParent.addClass('invalid');

            if(addressValue === '')
            {
                $addressLabel.text('Veuillez saisir une adresse ci-dessous');
            }
            else{
                $addressLabel.text('Veuillez sélectionner une adresse parmi celles suggérées');
            }

            $('html,body').animate({ scrollTop: $("#estimation-form").offset().top });

            // Page prix
            if (this.$scope.$parent && this.$scope.$parent.pageType === 'vente') {
                $event.preventDefault();
                return;
            }
            // Page estimation
            // Prevent state change
            this.$scope.$on('$stateChangeStart', function (e) {
                //Je récupère à nouveau les valeurs car dans cet évènement les valeurs de variables sont inchangées
                address = $("#address").get(0);
                addressValue = address ? $(address).val().trim() : '';
                loc = Storage.get('estimatedLocation');
                isNotAddress = loc.entitySubType !== 'Road';
                steps = e.currentScope.steps;
                //On bloque l'internaute s'il est à l'étape de saisie && (s'il n'a pas renseigné d'adresse ou s'il n'a pas sélectionné une suggestion)
                if (steps === '' && (isNotAddress || addressValue === '' || addressValue !== loc.formattedSuggestion)) {
                    e.preventDefault();
                }
            });
        }
        else if (loc) {
            this.formData.location.address = loc.formattedSuggestion;
            this.formData.location.addressWithoutCountry = loc.formattedSuggestion ? loc.formattedSuggestion.replace(', France', '') : "";
            this.formData.location.postalCode = Storage.get('estimatedPostalCode');
            this.formData.location.latitude = loc.location.latitude;
            this.formData.location.longitude = loc.location.longitude;
        }
    }

    getLocationPlaceholder() {
        return (this.Config.getAgencyData() && this.Config.getAgencyData().mel_cfg_adr_signataire) ? this.Config.getAgencyData().mel_cfg_adr_signataire : 'ex : 118 Avenue Jean Jaurès, 75019 Paris';
    }

    clearSession() {
        Storage.forgetAll();
    }

    /**
     * Populate fields by determining the location type.
     * @private
     */
    setEstimatedLocationFromQueryString(Config, location, formData, callback) {
        // Retrieve params value from the query string
        // Region, dep or city
        if (!location) return;

        // From SL :take query string values
        var params = location.search();
        var postalCode, localityName;
        var locality = {
            "location":{
                latitude: null,
                longitude: null
            },
            "entityType": "Place",
            "entitySubType": "",// Departement : "AdminDivision2", PopulatedPlace : ville, region : AdminDivision1
            "title": "",
            "address": {
                "countryRegionISO2": "FR",
                "countryRegion": "France",
                "adminDistrict": "",
                "district": "",
                "countryRegion": "France",
                "formattedAddress": "",
                "locality": ""
            },
            "formattedSuggestion": "",
            "bestView": {
                "center": {
                    "latitude": 46.198591232299805,
                    "longitude": 2.17726731300354,
                    "altitude": 0,
                    "altitudeReference": -1
                },
                "width": 0.2,
                "height": 0.2,
                "crs": {
                    "id": "LatLon",
                    "bounds": [ 90, 180, -90, -180 ]
                },
                "bounds": [ 51.09901809692383, 9.600698471069336, 41.29816436767578, -5.246163845062256 ]
            }
        };

        var query = {
            countryRegion: 'France',
            key: BingMapsKey
        };

        if (params) {
            if (params.codepostal) {
                // Ville : codepostal={CP}&ville={NomVille}
                // Quartier : codepostal={CP}}&ville={NomQuartier}}%20-%20{NomVille}
                postalCode = params.codepostal;
                query.postalCode = params.codepostal;
                // Quartier : search for the name of the city : 
                if (params.ville && params.ville.indexOf(' - ') > 0) {
                    // Quartier : extraire le nom de la ville
                    localityName = params.ville.substring(params.ville.indexOf(' - ') + 3).trim();
                    locality.address.locality = localityName;
                    query.locality = localityName;
                }
                else {
                    localityName = params.ville.trim();
                    query.locality = params.ville;
                    locality.address.locality = localityName;
                }

                // Ville
                locality.entitySubType = "PopulatedPlace";
            }
            else if (params.ville) {
                // Check if is a city (starts with code postal) : ville=92400%20Courbevoie
                var isVille = params.ville.match(/\d{5}/) ? true : false;
                var isDepartement = !isVille && params.ville.match(/\d{2}/);

                if (isVille) {
                    // ToDo HMK : extract dep name from params.ville
                    postalCode = params.ville.match(/\d{5}/)[0];
                    query.postalCode = postalCode;
                    localityName = params.ville.replace(query.postalCode, '').trim();
                    query.locality = localityName;
                    locality.entitySubType = "PopulatedPlace";
                    locality.address.locality = localityName;
                }
                else if (isDepartement) {
                    // ToDo HMK : extract dep name from params.ville
                    localityName = params.ville.replace(params.ville.match(/\d{2}/)[0], '').replace(' - ', '').trim();
                    query.adminDistrict = localityName;
                    locality.address.district = localityName;
                    locality.entitySubType = "AdminDivision2";
                }
                else {
                    localityName = params.ville.trim();
                    query.adminDistrict = params.ville;
                    locality.address.adminDistrict = localityName;
                    locality.entitySubType = "AdminDivision1";
                }
            }

            Storage.forget('estimatedLocation');
            Storage.forget('homeLocationSelected');
            Storage.forget('estimatedPostalCode');
            Storage.forgetEstimationFormData();

            // Reset formData locartion infos
            formData.location.region = null;
            formData.location.department = null;
            formData.location.city = null;


            // PostalCode
            if (postalCode){
                Storage.put('estimatedPostalCode', postalCode);
            }

            if (localityName)
            {
                if (query.locality){
                    if (query.locality.toLowerCase().indexOf('paris') >=0)  query.locality = 'Paris';
                    if (query.locality.toLowerCase().indexOf('lyon') >=0)  query.locality = 'Lyon';
                    if (query.locality.toLowerCase().indexOf('marseille') >=0)  query.locality = 'Marseille';
                }

                $.ajax({
                    url: Config.get('app.services.map.url'),
                    dataType: "jsonp",
                    data: query,
                    jsonp: "jsonp",
                    success: function (data) {

                        var postalCode;
                        if (data.resourceSets[0].estimatedTotal > 0) {

                            locality.location.latitude = locality.bestView.center.latitude = data.resourceSets[0].resources[0].point.coordinates["0"];
                            locality.location.longitude = locality.bestView.center.longitude = data.resourceSets[0].resources[0].point.coordinates["1"];

                            // Retrieve geolocation data
                            // Location object
                            locality.title = localityName.trim();
                            locality.address.formattedAddress = localityName + ", France";
                            locality.formattedSuggestion = localityName + ", France";
                            Storage.put('estimatedLocation', locality);
                            Storage.put('homeLocationSelected', locality);

                            callback(Config, formData);
                        }
                    }
                });
            }

        }
    }
}

EstimationController.$inject = ['$scope', '$state', 'Config', '$location', 'OmnitureService'];

export default EstimationController;
