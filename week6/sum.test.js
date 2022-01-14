const sum = require('./sum');

test('dit moet de som van de getallen teruggeven', () => {
    // const actual = sum(2, 3);
    // const expected = 5;

    expect(sum(2, 3)).toBe(5);
})