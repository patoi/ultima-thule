'use strict'
const Vehicle = require('./vehicle')
/**
 * Car.
 * @class
 * @param {number} id Identifier.
 * @param {number} passangersNum Max. Number of the passangers.
 */
function Car(id, passangersNum) {
    Vehicle.call(this, id)
    this.passangersNum = passangersNum
}

Car.prototype = Object.create(Vehicle.prototype)

/**
 * Return with passengers number.
 * @returns {number} Passengers number.
 */
Car.prototype.getPassengersNum = function() {
    return this.passangersNum
}

module.exports = Car
