function add(...args) {
    console.log(args.length);
}

add(1,2,3,4,5, 'Test');



function addOnlyNumbers(...args) {
    let sum = 0;
    let numm = 0;

    args.forEach(arg => {
       if (typeof arg === "number") {
           sum += arg;
           numm++;
       } 
    });

    console.log(`Er waren ${args.length} argumenten, de som van de getallen is ${sum}`);
}

addOnlyNumbers(1,2, 'Nog een test', 3,4,5, 'Test');



function addOnlyNumbersWithReduce(...args) {
    // Langere schrijfwijze:
    // const sum = args.reduce((prevVal, currentVal) => {
    //     if (typeof currentVal === 'number') {
    //         return prevVal + currentVal;
    //     } else {
    //         return prevVal;
    //     }
    // });

    const sum = args.reduce((prevVal, currentVal) => typeof currentVal === 'number' ? prevVal + currentVal : prevVal);

    console.log(`Er waren ${args.length} argumenten, de som van de getallen is ${sum}`);
}

addOnlyNumbersWithReduce(1,2, 'Nog een test', 3,4,5, 'Test');



function combineTwoArrays(a, b) {
    console.log([...a, ...b]);
}

combineTwoArrays([
    'test',
    'test2',
    'test23',
], [
    'test4',
    'test5',
    'test63',
]);



function combineAllArrays(...params) {
    console.log(params.flat());
}

combineAllArrays([
    'test',
    'test2',
    'test23',
], [
    'test4',
    'test5',
    'test63',
], [
    'test6',
    'test7',
    'test83',
]);



function onlyUniqueValues(...z) {
    const uni = new Set(z);
    console.log([...uni]);
}

onlyUniqueValues(1,2,3,4,4,4,5, 'test', 'test', 'hello');



const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: 'Twitter'
}

function displayName({first, last}) {
    console.log(first, last);
}

displayName(person);



function calculateTotalSales(s) {
    let updatedSales =  s.map(sale => {
        const {item, sold, original, discount = 0} = sale;
        sale['totalDiscount'] = original - (original * discount);
        sale['totalPaid'] = sold * sale.totalDiscount;
        return sale; 
    })

    return updatedSales;
}

const sales = [
    { item: 'PS4 Pro', sold: 3, original: 399.99 },
    { item: 'Xbox One X', sold: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', sold: 4, original: 299.99 },
    { item: 'PS2 Console', sold: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', sold: 2, original: 199.99, discount: 0.65 }
];

let overview = calculateTotalSales(sales);
console.log(overview)