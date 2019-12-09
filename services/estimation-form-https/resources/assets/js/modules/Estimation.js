class Estimation {
    /**
     * Obfuscate a given string.
     *
     * @param {String} string
     *
     * @returns {String}
     */
    static obfuscate(string) {
        let obfuscatedString = '';

        for (let i = 0; i < string.length; i++) {
            let random = this.getRandomNumber();

            if (this.isEven(random)) {
                obfuscatedString += `&#${string.charCodeAt(i)};`;
            } else {
                obfuscatedString += string[i];
            }
        }

        return obfuscatedString;
    }

    /**
     * Check whether the specified integer is even.
     *
     * @param {Integer} random
     *
     * @returns {Boolean}
     */
    static isEven(random) {
        return random % 2 === 0;
    }

    /**
     * Get random number between 0 and {limit}.
     *
     * @param {Integer} limit
     *
     * @returns {Integer}
     */
    static getRandomNumber(limit = 10) {
        return Math.floor(Math.random() * 10) + 1;
    }
}

export default Estimation;
