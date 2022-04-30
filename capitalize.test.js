const capitalize = require('./capitalize');

test('Returns string with first character capitalized', () => {
    expect(capitalize("hello")).toBe("Hello");
});


