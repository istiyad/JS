let fastName = 'Ahanaf';
let lastName = 'Istiyad';
let name1 = fastName + ' ' + lastName;
console.log(name1);

function sleep(name1) {
    console.log(name1 + ' is sleeping from 10 pm');
}

console.log('my name is jasim');
sleep('rahim');

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
let value = toCelsius(77);
document.getElementById('fahrenheit').innerHTML = value;

//<-- OBJECT-->//

const car = {
    name1: 'fiat',
    model: 500,
    weight: '850kg',
    color: 'white',
    start: function () {
        console.log('car has started');
    },
    drive: function () {
        console.log('car is driving');
    },
};

console.log(car.name1);
car.start();

//THIS OBJECT

const person = {
    firstName: 'Ahanaf',
    lastName: 'istiyad',
    id: 5556,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

person.fullName();

// console.log(person.firstName + " " + person.lastName);

function displayDate() {
    document.getElementById('time').innerHTML = Date();
}

let string1 = 'abcdefghijk lmnopqrst uvwxyz';

console.log(string1.length);

// SORT ARRAY //
const point = [20, 100, 40, 10, 70, 1];
point.sort(function (a, b) {
    return a - b;
});
document.getElementById('sort-array').innerHTML = point;

//SORT FUNCTION START//
const classRoom = ['istiyad', 'arham', 'jakir', 'dolan', 'tanin'];

console.log(classRoom.sort());
//SORT FUNCTION END//

// Leap Year Finder//
// function isLeapYear(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         var result = `${year} is a leap year`;
//     } else {
//         var result = `${year} is not a leap year`;
//     }

//     document.getElementById('find-leap-year').innerHTML = result;
// }

// isLeapYear(prompt('Enter a year to find leap year'));

// Click to Big

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let first = 'opening';
    let second = 'open';

    if (this.classList.contains(first)) {
        [first, second] = [second, first];
    }
    this.classList.toggle(first);

    setTimeout(() => {
        this.classList.toggle(second);
    }, 500);
});
