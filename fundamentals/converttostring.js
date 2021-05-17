let val;

//number to string
val = 123
val = String(val)

//boolean to string
val = true
val = String(val)

//date to string
val = new Date()
val = val.toString(val)

//array to string
val = [1,2,3]
val = val.toString(val)

console.log(val)
console.log('type ', typeof val)
console.log(val.length)