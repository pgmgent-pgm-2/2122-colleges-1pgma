test('is null', () => {
    const n = 'Test';
    expect(n).not.toBeNull();
});

test('sum of floating number', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test('string contains word', () => {
    expect('Hottentottententententoonstelling').toMatch(/tent/);
});

test('string contains word', () => {
    const array = ['Michiel', 'Kim', 'Liam'];
    expect(array).toContain('Kim');
});