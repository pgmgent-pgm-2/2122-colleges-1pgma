// 3 manieren voor Array te maken
const students = []; // Snelst en aangeraden
const s = Array('Emma');
const stu = new Array('Veli');

// Array met lege elementen.
const emptyArrOfSixEl = new Array(6); // [undefined, undef...]
emptyArrOfSixEl.length; // 6

// Elementen toevoegen
students.push('Nikita'); // Achteraan
students.push('Kilian');
students.push('Michiel');

students.unshift('Claudine') // Vooraan

// Elementen verwijderen
students.pop(); // Achteraan
students.shift(); // Vooraan

// Arrays samenvoegen
bClass = ['Stef', 'Joppe', 'Sahin'];
cClass = ['Stefano', 'Joppino', 'Sahino'];

const newArr = students.concat(bClass, cClass);
const newArray = [...students, ...bClass, ...cClass];

// Elementen verwijderen uit array
students.splice(1, 1);


// Loopen

for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i];
    console.log(element);
}

// Eleganter loopen
// Zonder curly braces is zelfde als returnen

newArray.forEach((element, index) => {
    return console.log(`Student ${index}: ${element}`);
}); // Foreach om te loopen, map methode als je moet returnen én eventueel nieuwe variabele aanmaken.

newArray.forEach((element, index) => console.log(`Student ${index}: ${element}`));


const person = {
    name: 'Adriaan',
    sweater: 'Grey'
}

// Je kan niet forEach'en over een object!
person.forEach(prop => {
    console.log(prop);
})

// for in -> objecten
// for of -> arrays


// Loopen over object met forEach doe je zo:
Object.keys(person).forEach()
Object.values(person).forEach()


// Entries geeft meer informatie over array, je destructured de index en value.
for (const [i, val] of newArray.entries()) {
    console.log(`Student ${i}: ${val}`);
}

for (const i in newArray) {
    console.log(i, newArray[i]);
}

// Multidimensionele arrays
const cars = [
    ['Volvo', 'Green', 15000],
    ['Saab', 'Green', 15000],
    ['Ferrari', 'Green', 15000]
]

cars.forEach(car => {
    car.forEach(prop => {
        console.log(prop);
    })
})

// Ordenen van arrays
console.log(newArray.sort());


