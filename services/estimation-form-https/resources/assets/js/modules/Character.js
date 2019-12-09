class Character {
    /**
     * Constructor.
     *
     * @param {Integer} char
     */
    constructor(char) {
        this.char = char;
    }

    /**
     * Create a new instance of the class.
     *
     * @param {Integer} char
     *
     * @returns {*}
     */
    static consider(char) {
        return new Character(char);
    }

    /**
     * Determine if given key is a letter.
     *
     * @returns {boolean}
     */
    isLetter() {
        return this.between(65, 90) || this.between(97, 122);
    }

    /**
     * Determine if given key is a number.
     *
     * @returns {boolean}
     */
    isNumber() {
        return this.between(48, 57);
    }

    /**
     * Determine if given key is a special character.
     *
     * @returns {boolean}
     */
    isSpecial() {
        return this.between(186, 192) || this.between(219, 222);
    }

    /**
     * Determine if given key is a space character.
     *
     * @returns {boolean}
     */
    isSpace() {
        return this.char === 32;
    }

    /**
     * Determine if given key is a printable character.
     *
     * @returns {boolean}
     */
    isPrintable() {
        return this.isLetter() || this.isNumber() || this.isSpecial() || this.isSpace();
    }

    /**
     * Determine if given key is a (carriage) return button.
     *
     * @returns {boolean}
     */
    isEnter() {
        return this.char === 13;
    }

    /**
     * Determine if given key is delete or backspace buttons.
     *
     * @returns {boolean}
     */
    isDelete() {
        return this.char === 8;
    }

    /**
     * Determine if given key is an escape button.
     *
     * @returns {boolean}
     */
    isEscape() {
        return this.char === 27;
    }

    /**
     * Converts a key code to string equivalent.
     *
     * @returns {string}
     */
    toString() {
        return String.fromCharCode(this.char);
    }

    /**
     * Checks whether the number is in a specified range.
     *
     * @param {Integer} start
     * @param {Integer} end
     *
     * @returns {boolean}
     */
    between(start, end) {
        return this.char >= start && this.char <= end;
    }
}

export default Character;
