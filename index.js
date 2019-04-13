const Person = require('./person')

const jim = new Person({ name: 'Jim Beam', age: 20 })
const john = new Person({ name: 'John Doe', age: 50 })

// TypeError: const jane = new Person('', 20)
// TypeError: const jane = new Person('Jane Doe', 'hi')
// TypeError: const jane = new Person('Jane Doe', -6)
// TypeError: const jane = new Person('Jane Doe', 19.4)
// RangeError: const jane = new Person('Jane Doe', 151)

// error: property type mismatch
const jane = new Person({
    name: 'Jane Doe',
    age: '10',
})

console.log(jim)
console.log(john)
console.log(jane)
console.log(john.name)

// using class validators
const isValidAge = Person.isValidAge(10)
const isValidName = Person.isValidName('Jimmy Lee-Curtis')

console.log(isValidAge, isValidName)

// NOTE: direct setting is wrong, use immutable objects, use constructor!
// do not use: john.name = 'Jimmy Jones'

/**
 * Enum for tri-state values.
 * @enum {number}
 */
const TriState = {
    TRUE: 1,
    FALSE: -1,
    MAYBE: 0,
}

// code completition example
console.log(TriState.FALSE)

/**
 * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
 * @property {string} prop1 - a string property of SpecialType
 * @property {number} prop2 - a number property of SpecialType
 * @property {number=} prop3 - an optional number property of SpecialType
 * @prop {number} [prop4] - an optional number property of SpecialType
 * @prop {number} [prop5=42] - an optional number property of SpecialType with default
 */

/** @type {SpecialType} */
let specialTypeObject
// error: unknown property
specialTypeObject.prop9 = 10

/**
 * Type definition by JSDoc example.
 * @type {Person}
 */
let harry
// error: type mismatch
harry = 10
console.log(harry.age)
