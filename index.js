// @ts-check
const Person = require('./person')

const jim = new Person({ name: 'Jim Beam', age: 20 })
const john = new Person({ name: 'John Doe', age: 50 })

// TypeError: const jane = new Person('', 20)
// TypeError: const jane = new Person('Jane Doe', 'hi')
// TypeError: const jane = new Person('Jane Doe', -6)
// TypeError: const jane = new Person('Jane Doe', 19.4)
// RangeError: const jane = new Person('Jane Doe', 151)

// Wrong type!
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
