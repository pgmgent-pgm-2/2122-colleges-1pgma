const courses = [];
const setExample = new Set(['test', 'hallo', 'test']);
const arrayExample = Array.from(setExample);
const spreadExample = [...setExample];

for (const iterator of arrayExample.entries()) {
    console.log(iterator);
    console.log(iterator[0]); // Index
    console.log(iterator[1]); // Value
    
    // Destructuring
    const [index, value] = iterator;

    // Manueel declareren, zelfde als destructuring
    const idx = iterator[0];
    const val = iterator[1];
}

console.log(arrayExample.entries());

const isEveryWordTest = arrayExample.every(word => {
    return word === 'test';
})

const areSomeWordsTest = arrayExample.some(word => {
    return word === 'test';
})

console.log(isEveryWordTest); // false
console.log(areSomeWordsTest); // true

arrayExample.fill('bye');

console.log(arrayExample); // ['bye', 'bye']

const newArray = [1, 2, 3, 4, 5, 6];

newArray.fill('string', 1, 5);

console.log(newArray); // [ 1, 'string', 'string', 'string', 'string', 6 ]


const deepArray = [1, 2, 3, [1, 2, 3, 4], [1, 2, [3, 4]]];
const otherDeepArray = [1, 2, 3, [1, 2, 3, 4, 5, 6], 6, 7, 8, 8];

console.log(deepArray.flat(2)); // Sneller en performanter
console.log(deepArray.flat(Infinity));

const largerThenFour = [... new Set(otherDeepArray.flatMap(number => {
    return number > 4 ? number : [];
}))];

console.log(largerThenFour); // [6, 7, 8]]

const numbersArray = [1, 2, 3, 4, 5, 6];
const stringArray = ['v', 'e', 'l', 'i'];
const sum = numbersArray.reduce((prev, current) => {
    return prev + current;
})
const nme = stringArray.reduce((prev, current) => {
    return prev + current;
})

console.log(sum);
console.log(nme);

// Populair
numbersArray.filter(); // returns array
numbersArray.find(); // returns first element
numbersArray.map(); // returns array