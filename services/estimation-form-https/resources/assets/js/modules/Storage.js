class Storage {

    /**
    * Check if the storage is enabled (Safari in private navigation mode).
    * @return {true|false}
    */
    static storageEnabled() {
        try {
            sessionStorage.setItem("test", "value");
            sessionStorage.removeItem("test");
            return true;
        }
        catch (e) {
            return false;
        }
    }


    /**
     * Get a storage value by its key.
     *
     * @param {String} key
     * @param {Boolean} asString
     *
     * @return {String|Object|undefined}
     */
    static get(key, asString = false) {
        if (!Storage.storageEnabled()){
            return '';
        }

        const storageValue = sessionStorage.getItem(key);
        let value;

        // Check whether the key exists
        if (!storageValue) {
            return '';
        }

        // Return the value as is
        if (asString) {
            return storageValue;
        }

        // Try to convert to an object if possible
        try {
            value = JSON.parse(storageValue);
        } catch (error) {
            value = storageValue;
        }

        return value;
    }

    /**
     * Add a new storage value.
     *
     * @param {String} key
     * @param {Object|String} value
     *
     * @return {Object}
     */
    static put(key, value) {
        if (!Storage.storageEnabled()){
            return value;
        }

        if (value instanceof Object) {
            value = JSON.stringify(value);
        }

        sessionStorage.setItem(key, value);

        return value;
    }

    /**
     * Remove a specific key-value pair from the storage.
     *
     * @param {String} key
     */
    static forget(key) {
        if (!Storage.storageEnabled()){
            return '';
        }

        sessionStorage.removeItem(key);
    }

    /**
     * Shorthand for retrieving estimation form's data from the storage.
     *
     * @returns {String|Object|undefined}
     */
    static getEstimationFormData() {
        return Storage.get('estimationFormData');
    }

    /**
     * Shorthand for retrieving estimation form's data from the storage.
     *
     * @param {Object|String} value
     *
     * @returns {String|Object|undefined}
     */
    static putEstimationFormData(value) {
        return Storage.put('estimationFormData', value);
    }

    /**
     * Shorthand for deleting estimation form's data from the storage.
     *
     * @returns {String|Object|undefined}
     */
    static forgetEstimationFormData() {
        return Storage.forget('estimationFormData');
    }
	
	static forgetAll() {
        sessionStorage.removeItem('estimationFormData');
		sessionStorage.removeItem('homeLocationSelected');
		sessionStorage.removeItem('steps');
    }
}

export default Storage;
