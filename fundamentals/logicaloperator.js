//else if
let hour = 21
if (hour < 12) {
    console.log('Good morning !')
} else if (hour < 20) {
    console.log('good afternoon')
} else {
    console.log('good evening')
}

//logical operator

//and operator
let mark = 99

if (mark > 50 && mark <= 80) {
    console.log('Good !')
} else if (mark > 80) {
    console.log('Excellent !!')
} else {
    console.log('Keep it up')
}

//or operator
let isWeekend = false

if (hour < 9 || hour > 18 || isWeekend) {
    console.log('the office is now closed !')
} else {
    console.log('the office is now open !')
}

//ternary operator
let age = 9

if (age < 10) {
    console.log('drink milk')
} else {
    console.log('drink cola')
}

const drink = age < 18 ? 'drink cola' : 'drink milk'
console.log(drink)

//one line
if (age < 10) console.log('drink milk'); else console.log('drink cola')