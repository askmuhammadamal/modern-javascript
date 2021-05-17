let val;

//string to number
val = '8'
val = Number(val)

//bolean to number
val = true
val = false
val = Number(val)

//both false and null is 0
val = 'Amal'
val = [1, 2, 3]
val = parseInt(12.32)
val = parseFloat(12.34)

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))

const num1 = 9
const num2 = 12
const sum = num1 + num2

console.log(sum)