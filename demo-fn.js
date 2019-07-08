'use strict'

/**
 * Greet function.
 * @param {Object} greet Argument of the function.
 * @param {string} greet.greeting The greetings.
 * @param {string} greet.name The name of the person.
 * @returns {string} Greeting message.
 */
function greet({ greeting, name }) {
    return `${greeting}, ${name}!`
}

const message = greet({
    greeting: 'Hello',
    name: 'John',
})

console.log(message)
