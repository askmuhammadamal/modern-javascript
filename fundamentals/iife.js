const sum = function (x = 1, y = 4) {
    return x + y
}

console.log(sum())

//Immediately Invoked Function Expression (IIFE)
var num = 90;

(function () {
    var num = 3;
    console.log(num);
})()

console.log('outside IIFE :', num)


const person = {
    hello: function () {
        console.log('hello')
    },
    age: function (age) {
        console.log(`I am ${age} years old`)
    }
}

person.laugh = function () {
    console.log('ha ha ha')
}

person.hello()
person.age(10)
person.laugh()