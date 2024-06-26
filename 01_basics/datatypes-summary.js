// Primitive

// 7 Types: String, number, Boolean, null, undefned, symbol, bigint

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id == anotherId);

const bigNumber = 1234567876542312456n //big int


// Reference (non-primitive)

// array, objects, functions

const movies = ["the shawshank redemption", "little sunshine", "chemical hearts"]
const myObj = {
    name: "ratan",
    age: 20,
}
const myFunction = function() {
    console.log("Hello world")
}

// ********* STACK & HEAP MEMORY ***********
// stack (primitive) & heap (non-primitive)

let youtuberName = "hitesh choudhary"
let anotherName = youtuberName
anotherName = "hitesh"

console.log(youtuberName)
console.log(anotherName)

let newObj = {
    name: "rat",
    age: 20
}

let anotherObj = newObj
anotherObj.name = "Ratan"

console.log(newObj)
console.log(anotherObj)