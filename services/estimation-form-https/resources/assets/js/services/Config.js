import Helpers from '../modules/Helpers';
class Config {
    constructor(estimationService, $http, $location, $window) {
        this.estimationService = estimationService;
        this.locationSearch = $location.$$search;
        this.$http = $http;
        this._agencyData;
        this._setAgencyData();
    }

    /**
     * Retrieve configuration file data.
     *
     * @param {String} config
     *
     * @returns {*}
     */
    get(config) {

        const value = this.estimationService.config(config, true);

        if (value === undefined && value !== '') {
            throw "Configuration option was not found.";
        }

        return value;
    }

    /**
     * Get agency ID from url location search.
     * Use it to call a WS to get token, colors and options.
     */
    _setAgencyData() {
        var _this = this;
        var idConfig = this.locationSearch.idConfig || '';
        var urlAgencyInfoWS = this.get('app.urlAgencyWS') + idConfig;

        if(idConfig === '') {
            throw "No id config was found.";
        }

        this.$http.get(urlAgencyInfoWS).then(function (response) {
            _this.agencyData = response.data;
        }, function (error) {
            throw "Configuration for agency was not found.";
        });
    }

    getAgencyData() {
        // If we have data from agency, we need to expose mail href for contact
        if(this.agencyData && this.agencyData.mel_cfg_email && !window.agencyMail) {
            var mailSubject = '?subject=Droit d\'accès, de rectification et d\'opposition';
            window.agencyMailHref = 'mailto:' + this.agencyData.mel_cfg_email + mailSubject;
        }

        return this.agencyData;
    }

    ///**
    // * Get a new instance of current object.
    // *
    // * @param estimationService
    // *
    // * @returns {Config}
    // */
    //static getInstance(estimationService) {
    //    return new Config(estimationService);
    //}
}

Config.$inject = ['estimationService', '$http', '$location'];

export default Config;
