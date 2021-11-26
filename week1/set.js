// Arrays -> SETS
let students = ['Killian', 'Veli'];
const studentSet = new Set(students);

studentSet.add('Claudine');
studentSet.delete('Killian');

console.log(studentSet.has('Killian'));

students = [...studentSet];

console.log(students);

// Object -> MAPS
const cars = new Map();

cars.set(1, {
    brand: 'Ferrari',
    color: 'Red'
}); // Set heeft 2 argumenten, 

const newCars = [1, {
    brand: 'Ferrari',
    color: 'Red'
}, 2, {
    brand: 'Ferrari',
    color: 'Red'
}]

const newCarsMap = new Map(newCars);

cars.get(1); // Ophalen met unique id
