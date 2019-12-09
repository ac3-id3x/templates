import Storage from './Storage';
import config from '../../../config/app.json';

class Helpers {
    /**
     * Format given phone number.
     *
     * @param string
     *
     * @returns {string}
     */
    static prettifyPhone(string) {
        let formatted = string.replace(/(?:00|\+)33/, '0').match(/\d{2}/g).map((val) => {
            return val + ' ';
        });

        return formatted.join('').trim();
    }

    /**
     * Get current state's tunnel.
     *
     * @param {String} stateName
     *
     * @returns {String}
     */
    static getTunnel(stateName) {
        if (stateName.indexOf('online') !== -1) {
            return 'online';
        } else if (stateName.indexOf('pro') !== -1) {
            return 'pro';
        }

        return '';
    }

    /**
     * Get steps for current tunnel and type.
     *
     * @param {Object} scope
     * @param {String} tunnel
     *
     * @returns {Object}
     */
    static getSteps(tunnel, scope = null) {
        let steps = Storage.get('steps')[tunnel];
        let type  = Storage.get('estimationFormData').type || 'house';

        if (!steps) {
            return '';
        }

        steps = (steps.first) ? steps.first.concat(steps[type], steps.last) : steps;

        if (scope) {
            scope.steps = steps;

            return scope.steps;
        }

        return steps;
    }

    /**
     * Remove input's validation error message.
     *
     * @param {Object} $object A jQuery object.
     * @param {Boolean} formGroupIncluded Whether `.form-group` class is included within the directive.
     */
    static resetValidation($object, formGroupIncluded = false) {
        const $formGroup = formGroupIncluded ? $object.find('.form-group') : $object.parents('.form-group.invalid');
        let $label       = $formGroup.find('> label');

        if ($formGroup.hasClass('expandable')) {
            const $checkboxLabel = $object.parent().prev('checkbox').find('.title');
            $checkboxLabel.text($checkboxLabel.attr('title'));
            $object.parents('.invalid').removeClass('invalid');
        }

        $formGroup.removeClass('invalid warned');

        if ($label.length === 0) {
            $label = $formGroup.find('.title');
            $label.text($label.attr('title'));
        } else {
            $label.text($label.attr('title'));
        }
    }

    /**
     * Return an absolute URL.
     *
     * @param {string} url Relative URL.
     * @param {string} domain Site domain. (e.g. "http://example.com")
     *
     * @returns {string}
     */
    static url(url, domain = config.url) {
        return domain + url;
    }

    /**
     * Use the dot notation to access object's nested properties.
     *
     * @param {object} object
     * @param {string} property
     *
     * @returns {*}
     */
    static dot(object, property) {
        const array = property.split(".");

        while (array.length && object) {
            object = object[array.shift()];
        }

        return object;
    }
}

export default Helpers;
