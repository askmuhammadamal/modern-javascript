//function declaration

function user(name = 'M. Amal', age = 15) {

    // if (typeof name === 'undefined' || typeof age === 'undefined') {
    //     name = 'Aamal'
    //     age = 17
    // }
    return `hello my name is ${name}. I am ${age} years old.`
}

console.log(user('Amal', 15))
console.log(user())