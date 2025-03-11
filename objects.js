console.log("This is from object file")

// Objects - datatypes

const thisClass = "Fullstack web dev"
const week = 8
const isRaining = true // false
// number(integers , floats(decimals)) , string , boolean(true/false) , object , array(objects)

// CREATE
const animal = {
    legs : 20,
    head: {
        eyes:2,
        hairColor: "brown",
        hello:{
            value1:"HELLO WORLD"
        }
    },
    name: "goat",
    "how many ears" : 2
}


// C R U D

// READ - How to access object properties

console.log(animal)
// the dot 
animal.name = "cow"

// create
animal.walkingStyle = "walks"
// console.log(animal.name)

console.log(animal)

console.log(animal.head)
// delete
delete animal.head.hairColor

console.log(animal.head)
console.log(animal)
// console.log(animal.head.eyes)
