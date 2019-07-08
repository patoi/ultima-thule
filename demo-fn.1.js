'use strict'

/**
 * @typedef {Object} Salutation The salutation type.
 * @property {string} Salutation.greeting The greetings.
 * @property {string} Salutation.name The name of the person.
 */

/**
 * Greet function.
 * @param {Salutation} salutation Argument of the function {@link Salutation}.
 * @throws {FirstError} My 1 custom error types.
 * @throws {SecondError} My 2 custom error types.
 * @throws {ThirdError} My 3 custom error types.
 * @returns {string} Greeting message.
 */
function greet1({ greeting, name }) {
    return `${greeting}, ${name}!`
}

const message1 = greet1({
    greeting: 'Hello',
    name: 'John',
})

console.log(message1)
