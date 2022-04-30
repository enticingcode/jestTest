const reverseStr = require('./capitalize');

test("reverse a string", () => {
    expect(reverseStr("hello")).toBe("olleh");
});