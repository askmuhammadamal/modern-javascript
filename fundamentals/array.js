const arr1 = [10, 20, 30]
const arr2 = new Array(40, 60)
const user = ['muhammad', 'amal', 'nur', 'husain']
const anything = ['amal', 4, null, undefined, false, { name: 'amal', age: 50 }, new Date()]

let val
val = arr1.length
val = Array.isArray(user)
console.log(val)

arr1[2] = 'last item'
console.log(arr1)


