import Helpers from './Helpers';
import Storage from './Storage';

class Map {
    constructor($location, Config, mapId, inputId, icon = _iconPushpin) {
        this.config   = Config;
        this._key     = this.config.get('app.services.map.key');
        this._mapId   = mapId;
        this._inputId = inputId;
        this._icon    = icon;
        this.observables = null;
        this.observer    = null;
        this.deleteIndex = [];
        this.$location = $location;
    }

        /**
        * Initialize and setup the map.
        *
        * @private
        */
        _initMap() {
            var _this = this;
            var locationOfFilter     = (Storage.get('homeLocationSelected') || Storage.get('pricesPageLocationSelected')) || null;
            var latitude             = locationOfFilter ? locationOfFilter.location.latitude : _this.config.get('app.services.map.locationFrance.bestView.center.latitude');
            var longitude            = locationOfFilter ? locationOfFilter.location.longitude : _this.config.get('app.services.map.locationFrance.bestView.center.longitude');
            this.map = new Microsoft.Maps.Map(document.getElementById(this._mapId), {
                center: new Microsoft.Maps.Location(latitude, longitude),
                zoom : _this._getZoomLevel(),
                credentials:         this._key,
                // disablePanning:      true,
                showBreadcrumb:      true,
                showLocateMeButton:  false,
                showMapTypeSelector: false
            });
        }

        /**
        * Store the location in storage.
        * e.g. local storage, cookies
        *
        * @param location
        * @private
        */
        _storeLocation(location) {
            //Simuler le nouveau format de réponse bing : address et entitySubType sont null
            //location.address = undefined;
            //location.entitySubType = undefined;  
            if (location.entityType === 'PostalAddress'){
                location.entitySubType = 'Road';  
            }

            if (typeof Storage === 'undefined') {
                // TODO: Change the notification method
                alert('Web Storage not supported!');
            }

            //On récupère le code postal de la location à partir du service bing REST et on le stocke dans le sessionStorage
            var locObject = location;
            var point = this._getLocationPoint(locObject);
            if (locObject) {
                $.ajax({
                    url:      this.config.get('app.services.map.url') + "/" + point.latitude + "," + point.longitude,
                    dataType: "jsonp",
                    data:     {
                        key:           this._key
                    },
                    jsonp:    "jsonp",
                    success:  function (data) {
                        if (data.resourceSets[0].estimatedTotal > 0) {
                            var address = data.resourceSets[0].resources[0].address; 
                            Storage.put('estimatedPostalCode', address.postalCode);
                            // Remplir l'object address qui n'est plus retourné par bing
                            locObject.address = {
                                countryRegion: address.countryRegion,
                                postalCode: address.postalCode,
                                addressLine: locObject.formattedSuggestion,
                                district: address.adminDistrict2, // Departement
                                adminDistrict: address.adminDistrict, // Région
                                locality: address.locality // Nom de la ville
                            };

                            // Store in local storage
                            Storage.put('estimatedLocation', JSON.stringify(locObject));
                        }
                    }
                });
            }
        }

        _getLocationPoint(position){
            var lat, lon;
            if (position.bestView != null && this.config.get('app.services.map.bestViewLocality').indexOf(position.title) != -1) {
                // Exceptions : quelques localités ont un bestView de malade, alors vaut mieux l'utiliser !
                lat = position.bestView.center.latitude;
                lon = position.bestView.center.longitude;
            }
            else {
                if(position.location != null)
                {
                    lat = position.location.latitude;
                    lon = position.location.longitude;
                }
                else if(position.bestView != null)
                {
                    lat = position.bestView.center.latitude;
                    lon = position.bestView.center.longitude;
                }
            }

            return {
                latitude: lat,
                longitude: lon
            };
        }
        /**
        * Display a list of suggestions and store them in specified input.
        *
        * @private
        */
        _autoSuggest() {
            var _this = this;
            Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', () => {
                var locationOfFilter     = (Storage.get('homeLocationSelected') || Storage.get('pricesPageLocationSelected')) || null;
                var latitude             = locationOfFilter ? locationOfFilter.location.latitude : _this.config.get('app.services.map.locationFrance.bestView.center.latitude');
                var longitude            = locationOfFilter ? locationOfFilter.location.longitude : _this.config.get('app.services.map.locationFrance.bestView.center.longitude');
                var width                = locationOfFilter ? (locationOfFilter.bestView ? locationOfFilter.bestView.width : 3 ) : _this.config.get('app.services.map.locationFrance.bestView.width');
                var height               = locationOfFilter ? (locationOfFilter.bestView ? locationOfFilter.bestView.height : 3 ) : _this.config.get('app.services.map.locationFrance.bestView.height');

                const manager = new Microsoft.Maps.AutosuggestManager({
                    maxResults: 10,
                    map:        _this.map,
                    bounds:     new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(latitude, longitude), width, height)
                });
                // Generate polygon of the locality selected
                if (_this.map != null) {
                    _this._generateLocalityPolygon(_this.map, locationOfFilter, locationOfFilter ? locationOfFilter.location : null);
                }

                manager.attachAutosuggest(`#${_this._inputId}`, `#${_this._inputId}Suggestions`, (position) => {
                    // Mark suggestion as selected
                    $('#suggestionSelected').val(1);

                    // Locate the result on the map
                    _this.locate(position);

                    // Store the suggestion in some storage
                    _this._storeLocation(position);
                });

                //Filtrage des résultats de l'autocomplete
                _this._autocompleteFilter(locationOfFilter, _this);
                _this._showAddressesOnly();            
            });
        }

        /**
        * Init the map.
        */
        init(initMap, initAutoSuggest) {
            if (initMap == null) {
                initMap = true;
            }
            if (initAutoSuggest == null) {
                initAutoSuggest = true;
            }

            if ($(`#${this._inputId}`).length >= 1) {

                if (initMap) 
                    this._initMap();

                if (initAutoSuggest)
                    this._autoSuggest();
            }
        }

        //Extraction du nom d'une localite : ville
        _extractionLocalite(type, text) {
            var ville = null;
            if (text.indexOf(',') > 0) {
                ville = text.split(',')[0].trim().toLowerCase().replace(/-/g, ' ').replace(/'/g, ' ').replace(/’/g, ' ');
            }
            return ville ? ville : '';
        }

        //Filtrage des resultats en fonction de la localite
        _filtre(localityType, listLocalitiesParam, containerId, _this) {
            var $selector = $(localityType === 'pays' ? `#${containerId} .as_lines_root` : `#${containerId} .as_lines_root .line2`);
            var ville     = null;
            var overseas  = this.config.get('app.services.map.overseas');

            if (localityType === 'ville') {
                ville = listLocalitiesParam[0];
            }

            var index = 0;
            $selector.each(function () {

                //Filtre sur la France
                if (localityType == 'pays') {
                    if ($(this).text().indexOf('France') === -1) {

                        if (!_(overseas).find((element) => {
                                return $(this).text().indexOf(element) > -1;
                        })) {
                            $($(this).parents('li')).remove();
                            _this.deleteIndex.push(index);
                        }
                    }
                }
                    //Filtre sur ville
                else if (localityType == 'ville') {
                    if ($(this).text().toLowerCase().indexOf(ville) === -1) {
                        $($(this).parents('li')).remove();
                        _this.deleteIndex.push(index);
                    }
                }
                    //Filtre sur region, departement
                else {
                    var locality = _this._extractionLocalite('ville', $($(this).get(0)).text());
                    if (locality) {
                        var hasLocalityInResult = _(listLocalitiesParam).find((element) => {
                            return element === locality;
                        });
                        if (!hasLocalityInResult) {
                            $($(this).parents('li')).remove();
                            _this.deleteIndex.push(index);
                        }
                    }
                    else {
                        $($(this).parents('li')).remove();
                        _this.deleteIndex.push(index);
                    }
                }
                index++;
            });

            _this._removeSuggestionsFromDOM(_this._inputId);
        }

        _autocompleteFilter(locationOfFilter, _this) {
            var listLocaties               = [];
            var ajaxUrl                    = Helpers.url(this.config.get('app.services.map.autocomplete.getCitiesPathRequest'), this.config.get('app.url'));
            var errorMessage               = "Une erreur s'est produite";
            var address                    = locationOfFilter ? locationOfFilter.address : null;
            var searchBoxContainerSelector = 'addressSuggestions';
            var localityType               = null; //pays, region, departement ou ville
            var overseas                   = this.config.get('app.services.map.overseas');
            var urlCurrentPage             = this.$location.absUrl().split('?')[0];

            if (address || locationOfFilter) {
		
                // Si c'est une adresse qui a été sélectionnée, si on est sur la page prix 
                // alors on filtre sur la France
                // prefixePricePage = "/prix-de-l-immo/"
                if (locationOfFilter.entityType === 'PostalAddress' || urlCurrentPage.indexOf(this.config.get('app.urls.prefixePricePage')) > 0) {
                    localityType = 'pays';
                    listLocaties = null;
                }
                    // Cas départements de DOM TOM
                else if (overseas.indexOf(locationOfFilter.formattedSuggestion) > -1) {
                    localityType = 'subdivision';
                    if (locationOfFilter.formattedSuggestion === 'Guadeloupe-France' || locationOfFilter.formattedSuggestion === 'Martinique-France') {
                        locality = locationOfFilter.formattedSuggestion.replace('-France', '');
                    }
                    else if (locationOfFilter.formattedSuggestion === 'Guyane française') {
                        locality = locationOfFilter.formattedSuggestion.replace(' française', '');
                    }
                    else {
                        locality = locationOfFilter.formattedSuggestion;
                    }
                }
                else if (address.countryRegion !== "France") {
                    localityType = 'pays';
                }
                // Cas ville
                else if (address.locality !== undefined && address.locality !== null) {
                    // Manager le cas des villes avec arrondissement et les 
                    locality = address.locality.toLowerCase();

                    if (locality.indexOf('arrondissement') > -1 && locality.split(',').length > 1) {
                        //Exple: '8e Arrondissement, Lyon'
                        locality = locality.split(',')[1].trim();
                        localityType = 'ville';
                        if (locality == 'paris') {
                            localityType = 'subdivision';
                            locality     = 'paris';
                        }
                    }
                    else if (locality.indexOf('paris') >= 0 || locality.indexOf('marseille') >= 0 || locality.indexOf('lyon') >= 0) {
                        // Villes sans arrondissement + cas du departement de Paris
                        // Case Paris 4ème (from SeLoger)
                        // Extract city name
                        localityType = 'ville';
                        if (locality.indexOf('paris') >= 0) {
                            localityType = 'subdivision';
                            locality = 'paris';
                        }
                        else if (locality.indexOf('lyon') >= 0) {
                            locality = 'lyon';
                        }
                        else if (locality.indexOf('marseille') >= 0) {
                            locality = 'marseille';
                        }
                    }
                    else {
                        localityType = 'ville';
                    }
                    listLocaties = [locality];
                }

                // Cas departement
                else if (address.district !== undefined && address.district !== null) {
                    localityType = 'subdivision';
                    if (address.district.toLowerCase() === 'ville de paris') {
                        locality = 'paris';
                    }
                    else {
                        locality = address.district.toLowerCase();
                    }
                }

                    // Cas region
                else if (address.adminDistrict !== undefined && address.adminDistrict != null) {
                    localityType = 'division';
                    locality     = address.adminDistrict.toLowerCase();
                }

                    // Cas pays
                else {
                    localityType = 'pays';
                    listLocaties = null;
                }
            }
            else {
                localityType = 'pays';
                listLocaties = null;
            }

            if (localityType !== 'pays' && localityType !== 'ville' && locality !== 'paris') {

                //Formatage de la localite pour les requetes SQL
                var locality = locality.toLowerCase().replace(/-/g, ' ').replace(/'/g, ' ').replace(/’/g, ' ');

                listLocaties = new Array();
                $.ajax({
                    url:     ajaxUrl,
                    type:    'POST',
                    data:    { localityTypeParam: localityType, locality: locality },
                    success: function (data) {
                        listLocaties = data.listLocalities;
                    },
                    error:   function (data) {
                        return errorMessage;
                    }
                });
            }

            //Definition des elements du pattern observer/observable qui permettront de declencher des traitements lors de la saisie de l'autocomplete
            _this.observables = document.querySelector('.observable');
            _this.observer    = new MutationObserver(function (mutations) {
                //Filtre sur une localite : 'pays', 'region', 'departement' ou 'ville'
                _this._filtre(localityType, listLocaties, searchBoxContainerSelector, _this);
            });

            _this.observer.observe(_this.observables, { childList: true, subtree: true });
        }

        _getType(entitySubType) {
            if (entitySubType !== '') {
                switch (entitySubType) {
                    case "Road": //quartiers
                    case "Neighborhood": //quartiers
                        entitySubType = 3;
                        break;
                    case "PopulatedPlace" : //ville
                    case "Postcode1" : //ville
                        entitySubType = 4;
                        break;
                    case "AdminDivision2": //departement
                    case "Island" : //departement
                        entitySubType = 5;
                        break;
                    case "CulturalRegion": //region
                    case "AdminDivision1": //region
                        entitySubType = 6;
                        break;
                    case "CountryRegion": //pays
                        entitySubType = 7;
                        break;
                    default:
                        entitySubType = 3; // Quartier
                        break;
                }
            }

            return entitySubType;
        }

        _generateLocalityPolygon(map, suggestedResult = null, centerLocation = null) {
            var _this = this;
            var appJsonConfig = _this.config;
            var ajaxUrl        = appJsonConfig.get('app.urlMapWS');
            var locTypeParam   = '';
            var locNameParam   = '';
            var address        = null;
            var overseas = appJsonConfig.get('app.services.map.overseas');
            var estimatedLocation = Storage.get('estimatedLocation') ? Storage.get('estimatedLocation') : null;

            if (suggestedResult === null) {
                suggestedResult = appJsonConfig.get('app.services.map.locationFrance');
            }

            //On affiche pas le polygone si une adresse a été sélectionnée ou est en session
            if (suggestedResult.entityType === 'PostalAddress' || (estimatedLocation && estimatedLocation.entityType === 'PostalAddress')) {
                return;
            }

            //Appel ajax pour recuperer les informations du polygone a afficher
            /*var searchLocaliteParamsModel = {
                Title:     suggestedResult.title,
                Latitude:  suggestedResult.location.latitude,
                Longitude: suggestedResult.location.longitude,
                Type:      _this._getType(suggestedResult.entitySubType)
            };*/

            $.ajax({
                url: ajaxUrl,
                type: 'GET',
                /*data: searchLocaliteParamsModel,*/
                success: function (data) {
                    var multiPolygonsTab = data.MultiPolysCoord;
                    var polygon          = null;
                    var locations        = null;
                    var polygonTabElt    = null;
                    var tabLocations     = new Array();

                    Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', function () {
                        //On nettoie la carte
                        map.entities.clear();
                        var primitive = Microsoft.Maps.WellKnownText.read(data.Wkt, {
                            polygonOptions: {
                                strokeColor:     null,
                                strokeThickness: 0
                            }
                        });

                        map.entities.push(primitive);

                        /*var zoomLevel = 0;
                        if (centerLocation) {
                            if (searchLocaliteParamsModel.Type === 0 || searchLocaliteParamsModel.Type === 1) {
                                zoomLevel = 11;
                            }
                            else if (searchLocaliteParamsModel.Type === 2) {
                                zoomLevel = 11;
                            }
                            else if (searchLocaliteParamsModel.Type === 3) {
                                if (searchLocaliteParamsModel.Title === 'Paris') {
                                    zoomLevel = 11;
                                } else {
                                    zoomLevel = 7;
                                }
                            }
                            else if (searchLocaliteParamsModel.Type === 4) {
                                zoomLevel = 6;
                            } else if (searchLocaliteParamsModel.Type === 5 || !searchLocaliteParamsModel.Type) {
                                zoomLevel = 5;
                            }

                            map.setView({
                                center: new Microsoft.Maps.Location(centerLocation.latitude, centerLocation.longitude),
                                zoom:   zoomLevel
                            });
                        }
                        else {
                            map.setView({
                                center: new Microsoft.Maps.Location(appJsonConfig.get('app.services.map.locationFrance.location.latitude'), appJsonConfig.get('app.services.map.locationFrance.location.longitude')),
                                zoom:   5
                            });
                        }*/

                        map.setView({
                            center: new Microsoft.Maps.Location(appJsonConfig.get('app.services.map.locationFrance.location.latitude'), appJsonConfig.get('app.services.map.locationFrance.location.longitude')),
                            zoom:   5
                        });
                    });
                },
                error(data) {
                    // TODO: Does nothing
                    var error = "Une erreur s'est produite";
                }
            });
        }


        /**
        * Locate specified position.
        *
        * @param position
        */
        locate(position) {
            this.map.entities.clear();

            this.map.setView({ center: position.location, zoom: 14 });

            const pushpin = new Microsoft.Maps.Pushpin(position.location, { icon: this._icon });

            this.map.entities.push(pushpin);
        }

        /**
        * Remove everything but address from the suggestions list.
        *
        * @private
        */
        _showAddressesOnly() {
            var _this = this;
            const target      = document.getElementById('addressSuggestions');
            const streetTypes = ['Allée', 'Avenue', 'Boulevard', 'Carrefour', 'Chemin', 'Chaussée', 'Cité', 'Corniche',
                'Cours', 'Domaine', 'Descente', 'Ecart', 'Esplanade', 'Faubourg', 'Grande Rue', 'Hameau', 'Halle',
                'Impasse', 'Lieu-dit', 'Lotissement', 'Marché', 'Montée', 'Passage', 'Place', 'Plaine', 'Plateau',
                'Promenade', 'Parvis', 'Quartier', 'Quai', 'Résidence', 'Ruelle', 'Rocade', 'Rond-point', 'Route', 'Rue',
                'Sente - Sentier', 'Square', 'Terre-plein', 'Traverse', 'Villa', 'Village'];

            const observer = new MutationObserver((mutations) => {
                const $li = $(target).find('li');
                var index = 0;
                $li.each(function () {
                    const address = $(this).find('.line1').text();

                    if (!streetTypes.some(item => _(address).includes(item + ' '))) {
                        $(this).remove();
                        _this.deleteIndex.push(index);
                    }
                    index++;
                });
            });
            observer.observe(target, { childList: true, subtree: true });
            _this._removeSuggestionsFromDOM(_this._inputId);
        }

        /**
        * Remove suggestions from DOM.
        *
        * @private
        */
        _removeSuggestionsFromDOM(inputId) {
            var _this = this;
            var deleteIndex = _this.deleteIndex;
            var objInput = document.querySelector("input#" + inputId);
            var listSuggestions;

            if (objInput != null) {
                var bingmaps_As = objInput.$bingmaps_As;
                if (bingmaps_As != null) {
                    var autosuggestViewModel = bingmaps_As._autosuggestViewModel
                    if (autosuggestViewModel != null) {
                        listSuggestions = autosuggestViewModel._suggestions
                        if (listSuggestions != null && listSuggestions.length > 0)
                        {                       
                            for (var j = deleteIndex.length - 1; j >= 0; j--) {
                                var index = this.deleteIndex[j];
                                if (index < listSuggestions.length)
                                    listSuggestions.splice(index, 1);
                            }
                        }
                    }
                }
            }
            _this.deleteIndex = [];
        }

        /**
        * Get the home location selected zoom level.
        *
        * @private
        */
        _getZoomLevel(){
            var _this = this;

            var locationOfFilter = (Storage.get('homeLocationSelected') || Storage.get('pricesPageLocationSelected')) ||
                _this.config.get('app.services.map.locationFrance');        
            var centerLocation = locationOfFilter ? locationOfFilter.location : null
            var type = _this._getType(locationOfFilter.entitySubType)

            var zoomLevel = 0;
            if (centerLocation) {
                if (type === 0 || type === 1) {
                    zoomLevel = 11;
                }
                else if (type === 2) {
                    zoomLevel = 11;
                }
                else if (type === 3) {
                    if (locationOfFilter.title === 'Paris') {
                        zoomLevel = 11;
                    } else {
                        zoomLevel = 7;
                    }
                }
                else if (type === 4) {
                    zoomLevel = 6;
                } else if (type === 5 || !type) {
                    zoomLevel = 5;
                }
            }
            else {
                zoomLevel = 5;
            }
            return zoomLevel;
        }
    }

    export default Map;