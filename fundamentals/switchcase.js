const fruit = 'apple'

switch (fruit) {
    case 'apple':
        console.log('is red')
        break;
    case 'banana':
        console.log('is yellow')
        break;
    default:
        console.log('I don\'t know')
        break;
}

let today = new Date().getDay()
// today = new Date('12/10/2021').getDay()
switch (today) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
    break;
    case 2:
        console.log('Tuesday')
    break;
    case 3:
        console.log('Wednesday')
    break;
    case 4:
        console.log('Thursday')
    break;
    case 5:
        console.log('Friday')
    break;
    case 6:
        console.log('Saturday')
        break;

    default:
        console.log('what is day')
        break;
}

const x = 6

switch (true) {
    case (x < 5):
        console.log('less than 5')
        break;
    case (x < 10):
        console.log('between 5 and 10')
        break;
    default:
        console.log('greater than 10')
        break;
}