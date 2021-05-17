const firstName = 'Muhammad'
const lastName = 'Amal'
let val;

//concatenante
val = firstName + lastName
val = firstName + ' ' + lastName

//append
val = firstName
val += lastName

//escaping
val = 'that\'s greate, you\'ve found a job'
val = "that's greate, you've found a job"

//length
val = firstName.length

//concat
val = firstName.concat(' ', lastName)

//change case
val = firstName.toLocaleLowerCase()
val = lastName.toUpperCase()

console.log(val)