//let = variable dapat berubah namun nama variable tidak boleh sama, akan ada pesan error : TypeError: Duplicate declaration
let name

name = 'Muhammad Amal'
console.log(name)

name = 'Amal'
console.log(name)

//const = variable bersifat tetap atau tidak bisa diubah kecuali object dan array

//const completeName = 'Muhammad Amal'
// completeName = 'Amal'
// console.log(completeName) // error

const user = {
    name: 'Amal',
    weight: 55
}
console.log(user)

user.name = 'Muhammad Amal'
console.log(user)

const array = []
console.log(array)
array.push(4, 5)
console.log(array)

//let dan const adalah block scope, sehingga kita tidak perlu harus berurusan lagi dengan function untuk membuat local variabel.