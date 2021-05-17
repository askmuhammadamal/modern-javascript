//general loop
//for loop
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('Two')
        continue
    }
    if (i === 6) {
        console.log('Six')
        break
    }
    console.log(i)
}

//while loop
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

//do while
let i = 0
do {
    console.log(i)
    i++
} while (i < 10)


//loop through array
const users = ['Muhammad', 'Amal', 'Nur', 'Husain']

//for loop
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

//for of
for (const user of users) {
    console.log(user)
}

//foreach
users.forEach(user => {
    console.log(user)
});

users.forEach(function (user, index, arr) {
    console.log(index, user, arr)
});

//map
const hiUsers = users.map(function (user) {
    return `Hi, ${user}`
})
console.log(hiUsers)

//for in
const user = {
    name: 'Amal',
    age: 12,
    title: 'Programmer'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}