//window object method
//alert
// alert('hi amal')

//prompt
// let name = prompt('what is your name ?')
// alert(`Hello, ${name}`)

//confirm
// if (confirm('Delete this file ?')) {
//     alert('the file is deleted.')
// } else {
//     alert('nothing is delete')
// }

//window object properties
//outer width and height
let ow = window.outerWidth
let oh = window.outerHeight
console.log(ow, oh)

//inner width and height
let iw = window.innerWidth
let ih = window.innerHeight
console.log(iw, ih)

//scroll points
let sy = window.scrollY
let sx = window.scrollX
console.log(sy, sx)

//location object
let val
val = window.location
val = window.location.host
val = window.location.hostame
val = window.location.port
val = window.location.href
val = window.location.pathname
val = window.location.origin
val = window.location.search


//redirect
// window.location.href = 'https://google.com'

//reload
// window.location.reload()

//history
// window.history.go(-1)

//navigator object
val = window.navigator
val = window.navigator.vendor

console.log(val)
