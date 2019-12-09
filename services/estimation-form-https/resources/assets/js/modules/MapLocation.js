import Storage from './Storage';

class MapLocation {
    constructor(configApp) {
        // Retrieve the location from storage if it exists
        this.suggestion = Storage.get('estimatedLocation') || null;
        this.postalCode = Storage.get('estimatedPostalCode') || null;

        this.latitude  = 0;
        this.longitude = 0;

        this.overseas = configApp.services.map.overseas;
    }

    /**
     * Return true if current location is an address.
     *
     * @returns {boolean}
     */
    isAddress() {
        if (!this.suggestion) {
            return false;
        }

        return this.suggestion.entitySubType === 'Road';
    }

    /**
     * Return true if current location is a neighborhood.
     *
     * @returns {boolean}
     */
    isNeighborhood() {
        if (!this.suggestion) {
            return false;
        }

        return this.suggestion.entitySubType === 'Neighborhood';
    }

    /**
     * Return true if current location is a city.
     *
     * @returns {boolean}
     */
    isCity() {
        if (!this.suggestion) {
            return false;
        }
        return this.suggestion.entitySubType === 'PopulatedPlace';
    }

    isPostalCode() {
        if (!this.suggestion) {
            return false;
        }
        return this.suggestion.entitySubType === 'Postcode1';
    }

    /**
     * Return true if current location is a department.
     *
     * @returns {boolean}
     */
    isDepartment() {
        if (!this.suggestion) {
            return false;
        }

        return this.suggestion.entitySubType === 'AdminDivision2' || (this.overseas.indexOf(this.suggestion.formattedSuggestion) > -1);
    }

    /**
     * Return true if current location is a region.
     *
     * @returns {boolean}
     */
    isRegion() {
        if (!this.suggestion) {
            return false;
        }

        return this.suggestion.entitySubType === 'AdminDivision1';
    }

    /**
     * Return true if current location is a country.
     *
     * @returns {boolean}
     */
    isCountry() {
        if (!this.suggestion) {
            return false;
        }

        return this.suggestion.entitySubType === 'CountryRegion' && this.overseas.indexOf(this.suggestion.formattedSuggestion) === -1;
    }
}

export default MapLocation;
