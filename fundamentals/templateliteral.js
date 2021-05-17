const name = 'Muhammad Amal'
const age = 75
let val;

function eating() {
    if (age > 10) {
        return 'rice'
    } else {
        return 'porridge'
    }
}

val = `Hello, my name ${name}. I like eating ${eating()}`
val = 'Hello, my name '+ name + '. I like eating ' + eating()
val = `Hello, my name ${name}. I like eating ${age > 10 ? 'rice' : 'porridge'}`

console.log(val)