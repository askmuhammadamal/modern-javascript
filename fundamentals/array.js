const arr1 = [10, 20, 30, 7, 8]
const arr2 = new Array(40, 60)
const user = ['muhammad', 'amal', 'nur', 'husain']
const anything = ['amal', 4, null, undefined, false, { name: 'amal', age: 50 }, new Date()]

let val
// val = arr1.length
// val = Array.isArray(user)
// console.log(val)

// arr1[2] = 'last item'
// console.log(arr1)


//manipulation the array
//add to the end
arr1.push(200)

//add to the front
arr1.unshift(100)

//remove the end
arr1.pop()

//remove the front
arr1.shift()

//at position 1, remove one item and 
// arr1.splice(1, 1, "one", "two")

//reverse
arr1.reverse()

console.log(arr1)

//concat array
val = arr1.concat(arr2)

//sort 
val = user.sort().reverse()
val = arr1.sort()

//sort with compare function
val = arr1.sort(function (a, b) {
    return a - b
})

//reverse sort with compare function
val = arr1.sort(function (a, b) {
    return b - a
})

//find
function get10(num) {
    return num > 10
}

val = arr1.find(get10)

//filter
val = arr1.filter(get10)

console.log(val)