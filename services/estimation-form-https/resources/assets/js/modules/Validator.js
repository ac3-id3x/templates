class Validator {
    constructor(formData, state, validation) {
        this.formData       = formData;
        this.validation     = validation;

        this.fields         = this.validation.errors[state];
        this.optionalFields = [];
        
        // Si l'internaute ne souhaite pas affiner son estimation par un pro, les champs Nom et Téléphone ne sont pas vérifiés.
        // On définit les champs optionnels dans le tableau optionalFields.     
        // Vérifier aussi que l'utilisateur n'est pas en mode estimation par un pro
        if (this.fields && (this.formData.contact.refineWithPro === '' || this.formData.contact.refineWithPro === 'no') && state.indexOf('pro.') != 0) {
            this.optionalFields.push('contact.name.last');
            this.optionalFields.push('contact.phone');
        }

        if (this.fields && this.formData.project.who != 'seller' && this.formData.project.who != '' && state.indexOf('pro.') != 0) {
            this.optionalFields.push('project.when');
            this.formData.project.when = '';
        }

        this.messages = this.validation.messages;
        this.invalids = [];

        this.check();
    }

    /**
     * Check all fields.
     */
    check() {
        for (let field in this.fields) {
            // On ne traite que les champs qui ne sont pas optionnels. 
            if (this.optionalFields.indexOf(field) === -1) {
                this.field = field;
                // Get field's rules
                let rules  = this.rules = this.fields[field];
                // Get field's value
                let value = field.split('.').reduce((o, i) => o[i], this.formData);

                // 'Required' rule
                if (rules.required && !rules.depends && !value && (!rules.only || (rules.only && rules.only === this.formData.type))) {
                    this.push('required');
                }
                    // 'Required & depends' rule
                else if (rules.required && rules.depends) {
                    let dependency = rules.depends.split('.').reduce((o, i) => o[i], this.formData);

                    if (dependency && !value) {
                        this.push('required');
                    }
                }
                    // 'Email' rule
                else if (rules.email && !value.match(new RegExp(this.validation.patterns.email))) {
                    this.push('email');
                }
                    // 'Phone' rule
                else if (rules.phone && !value.match(new RegExp(this.validation.patterns.phone))) {
                    this.push('phone');
                }
            }            
        }
    }

    /**
     * Push a new invalid field to the array of errors.
     *
     * @param {string} rule
     */
    push(rule) {
        // Get error message
        let message = typeof this.rules[rule] === 'string' ? this.rules[rule] : this.messages[rule];

        this.invalids.push({ field: this.field, rule, message });
    }

    /**
     * Get all errors.
     *
     * @returns {object}
     */
    errors() {
        return this.invalids;
    }

    /**
     * Return true if there is at least one error.
     *
     * @returns {Boolean}
     */
    hasErrors() {
        return !!this.invalids.length;
    }

    /**
     * Return true if there are no errors.
     *
     * @returns {boolean}
     */
    noErrors() {
        return !this.hasErrors();
    }
}

export default Validator;
