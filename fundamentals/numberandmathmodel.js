const number1 = 10
const number2 = 11
let val

//addition
val = number1 + number2
//substraction
val = number1 - number2
//multiplication
val = number1 * number2
//division
val = number1 / number2
//modulus (remainder)
val = number1 % number2

//math object
val = Math.PI
val = Math.round(8.9)
val = Math.round(8.3)
val = Math.pow(2,7)
val = Math.sqrt(64)
val = Math.abs(-3)
val = Math.ceil(6.7)
val = Math.floor(5.7)
val = Math.min(5,1,2,7)
val = Math.max(5,1,2,7)

//math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
val = Math.random()

//random between 1 to 5
val = Math.floor(Math.random() * 5 + 1)

console.log(val)