// @ts-check
class Person {
  /**
   * Person class constructor.
   * @typedef {Object<string, number>} Person
   * @param {!string} name person name, 1-30 chars, required
   * @param {number} age person age, integer, 0-150 year, default is 0
   * @throws {TypeError}
   * @throws {RangeError}
   * @example
   * const jim = new Person('Jim Beam', 20)
   * // age is default 0
   * const joe = new Person('Joe Beam')
   */
  constructor ({ name, age = 0 }) {
    Person.isValidName(name)
    Person.isValidAge(age)
    this.name = name
    this.age = age
  }

  /**
   * Person name validation.
   * @param {!string} name person name
   * @throws {TypeError}
   * @throws {RangeError}
   * @returns {boolean} true if valid
   */
  static isValidName (name) {
    if (!name) {
      throw new TypeError('name is required')
    } else {
      if (name.length > 30) {
        throw new RangeError('name length must be in 1-30')
      }
    }
    return true
  }

  /**
   * Person age validation.
   * @param {!number} age person age
   * @throws {TypeError}
   * @throws {RangeError}
   * @returns {boolean} true if valid
   */
  static isValidAge (age) {
    if (!Number.isInteger(age)) {
      throw new TypeError('age must be an integer number')
    } else {
      if (age < 0 || age > 150) {
        throw new RangeError('age interval must be in 0-150')
      }
    }
    return true
  }
}

module.exports = Person
