//primitive
let x = 10
let y = x
console.log(x, y)

x = 40
console.log(x,y)

let a = { value: 20 }
let b = a
console.log(a, b)

a.value = 30
console.log(a, b)

//reference
let user = { name: 'Amal' }
function message(user) {
    user.name = 'Muhammad Amal'
    console.log("name user inside function :", user.name)
}
message(user)
console.log(user.name)