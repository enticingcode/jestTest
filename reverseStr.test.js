const reverseStr = require('./reverseStr');

test("reverse a string", () => {
    expect(reverseStr("hello")).toBe("olleh");
});