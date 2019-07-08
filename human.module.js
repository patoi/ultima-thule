'use strict'
/**
 * Human.
 * @param {object} Human Human data.
 * @param {number} Human.iq The IQ.
 * @param {string} Human.name Peron's name.
 */
module.exports = ({ iq, name }) => {
    const _type = 'HUMAN'
    let _name = name
    let _iq = iq
    return {
        setIQLevel(iq) {
            _iq = iq
            return this
        },
        /**
         * Person IQ level.
         * @returns {number} IQ level.
         */
        getIQLevel() {
            return _iq
        },
        setName(name) {
            _name = name
            return this
        },
        getName() {
            return _name
        },
        getType() {
            return _type
        },
        get() {
            return {
                type: _type,
                iq: this.getIQLevel(),
                name: this.getName(),
            }
        },
    }
}
