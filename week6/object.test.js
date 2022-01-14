const { mergeObjects } = require('./object');

test('Merges two objects', () => {
    const phone = {
        brand: 'iPhone',
        model: 'XRR13Ae'
    };

    const pricing = {
        amount: 1300,
        tax: 250
    };

    const actual = mergeObjects(phone, pricing);
    const expected = {
        brand: 'iPhone',
        model: 'XRR13Ae',
        amount: 1300,
        tax: 250
    }

    expect(actual).toStrictEqual(expected);
})