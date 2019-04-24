'use strict'
const Person = require('./person')

const jim = new Person({ name: 'Jim Beam', age: 20 })
const john = new Person({ name: 'John Doe', age: 50 })

// TypeError: name is required
//new Person({ name: '', age: 20 })

// TypeError: age must be an integer number
//new Person({ name: 'Jane Doe', age: 'hi' })

// RangeError: age interval must be in 0-150
//new Person({ name: 'Jane Doe', age: -6 })

// TypeError: age must be an integer number
//new Person({ name: 'Jane Doe', age: 19.4 })

// RangeError: age interval must be in 0-150
//new Person({ name: 'Jane Doe', age: 151 })

/**
 * NOTE: direct field setting is wrong, use immutable objects: always use constructor!
 * Do not use: jim.name = 'Elon Musk'
 *
 * You need to set 'use strict' mode! There is no TypeError without it.
 * TypeError: Cannot assign to read only property 'name' of object '#<Person>'
 */
//jim.name = 'Elon Musk'

// VS Code error: property type mismatch
// const jane = new Person({
//     name: 'Jane Doe',
//     age: '10',
// })

// VS Code error: property does not exist
//jim.hello = 5

console.log('jim.toString() = ', jim.toString())
console.log('john.toString() = ', john.toString())
console.log('john.name = ', john.name)

// using class validators
const isValidAge = Person.isValidAge(10)
const isValidName = Person.isValidName('Jimmy Lee-Curtis')

console.log({ isValidAge, isValidName })

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
console.log('TriState.FALSE = ', TriState.FALSE)

/**
 * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
 * @property {!string} prop1 - a string property of SpecialType
 * @property {number} prop2 - a number property of SpecialType
 * @property {number=} prop3 - an optional number property of SpecialType
 * @prop {number} [prop4] - an optional number property of SpecialType
 * @prop {number} [prop5=42] - an optional number property of SpecialType with default
 */

/** @type {SpecialType} */
let specialTypeObject = {}
// VS Code error: unknown property
//specialTypeObject.unknownProperty = 10

/**
 * Do not use null, read more:
 * https://medium.com/@hbarcelos/why-i-banned-null-from-my-js-code-and-why-you-should-too-13df90323cfa
 * Settings eslint plugin: 'no-null'
 */
// VS Code and linter error: use undefined instead of null
//specialTypeObject.prop1 = null
