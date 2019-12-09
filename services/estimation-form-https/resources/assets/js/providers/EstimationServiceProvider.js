import Helpers    from '../modules/Helpers';
import app        from '../../../config/app.json';
import fields     from '../../../config/fields.json';
import form       from '../../../config/form.json';
import steps      from '../../../config/steps.json';
import validation from '../../../config/validation.json';

class EstimationServiceProvider {
    constructor() {
        this.app            = app;
        this.fields         = fields;
        this.form           = form;
        this.steps          = steps;
        this.validation     = validation;
    }

    /**
     * Retrieve the configuration option value.
     *
     * @param {string} option Dot notated option string.
     *
     * @returns {*}
     */
    config(option) {
        // Split the "dot notated" option string into an array
        let options = option.split('.');

        // Take the first element and use it as config file name
        const configFilename = options.shift();

        // Implode the rest of the options array into a "dot notated" string
        option = options.join('.');

        // If specified config option was not found, return the entire config file's content
        return option ? Helpers.dot(this[configFilename], option) : this[configFilename];
    }

    /**
     * Get path to the file from the configurations.
     *
     * @param {string} dir Directory of the requested file.
     * @param {string} file File name to retrieve.
     * @param {string} pathsDir By default 'app.paths'.
     *
     * @returns {string}
     */
    path(dir, file, pathsDir = 'app.paths') {
        return this.config(`${pathsDir}.${dir}`) + '/' + file;
    }

    /**
     * Update configuration options.
     *
     * @param {string} config
     * @param {object} values
     */
    update(config, values) {
        $.extend(true, this[config], values);
    }

    /**
     * @ngInject
     */
    $get() {
        const that = this;

        return {
            config(option) {
                return that.config(option);
            },
            path(dir, file, pathsDir = 'app.paths') {
                return that.path(dir, file, pathsDir);
            }
        };
    }
}

export default EstimationServiceProvider;
